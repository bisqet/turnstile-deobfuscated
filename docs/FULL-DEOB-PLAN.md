# Full Turnstile deobfuscation pipeline — plan + prototype progress

Research-only. No token generation, no forged `<vm-endpoint>` payloads.

## Goal
Turn the managed orchestrator (~590 KB) and the encrypted `<vm-endpoint>` VM bytecode into
readable modules with named APIs, so we can map every fingerprint probe and payload
field without guessing.

---

## Track A — Orchestrator (JS shell)

### Stages
| # | Stage | Method | Effort | Status |
|---|---|---|---|---|
| A1 | webcrack prepare/unminify | existing | 0.5h | **DONE** — 868 KB / 24394 lines |
| A2 | Dynamic string recovery (c0) | reimplement c0 (seed 23349, atob+rolling XOR); Babel rewrite every `c0(\`…\`)` → StringLiteral | 2h | **DONE (prototype)** — **4781/4781 = 100%**, 2182 unique plaintext |
| A3 | Computed→dot properties | `obj["foo"]` → `obj.foo` when identifier-safe | 0.5h | **DONE** — 769 conversions |
| A4 | Opaque-constant folding | resolve seed `_0x75d9b0 = (a=>a).length+274201547 = 274201548`; fold `seed^N` and pure XOR chains | 1–2h | **DONE** — 6494 folds; HP now shows `l=1/0` literally |
| A5 | Proxy / dead-code / sequence beautify | adapt LOBYX proxy+deadCode+sequence transforms (classic CF path fails; needs Turnstile-tuned patterns) | 1–2d | NOT STARTED |
| A6 | CFF unflatten | detect switch/while dispatcher; reconstruct basic blocks (LOBYX CFF found 0 on Turnstile; needs rewrite) | 3–5d | NOT STARTED |
| A7 | Semantic rename pass | rename locals from known API/string usage (e.g. `QC.state`, `Hm[112]` → poly8) | 2–3d | NOT STARTED |

### Prototype metrics (this session)
| Artifact | Size | API-bearing lines | Notes |
|---|---|---|---|
| raw orch | 593 KB / 1 line | ~0% | |
| webcrack | 868 KB / 24394 | 7.8% | structural only |
| +A2 strings | 825 KB / 24394 | **12.9%** | 100% of c0 calls inlined |
| +A3+A4 fold | **693 KB** / 24394 | **12.9%** | HP/GR readable; seed gone |

String-table cross-check vs Part 1 live probes:
- Present in orch plaintext: `frameElement`, `performance`/`now`, `Worker`, `postMessage`,
  `crypto`, `matchMedia`, `createElement`/`iframe`/`contentWindow`, `attachShadow`,
  `querySelector`/`querySelectorAll`, `Function`/`toString`, `Reflect`.
- **Absent** from orch (must live in `<vm-endpoint>` bytecode or nested VM blob): BroadcastChannel,
  RTCPeerConnection / createDataChannel / createOffer / setLocalDescription, canvas/
  getContext / OffscreenCanvas, navigator.userAgent / hardwareConcurrency / deviceMemory,
  toJSON. Confirmed live in Part 1 → **must be recovered via Track B**.

### Tools (this session)
- `deob/recover-strings.mjs` → `webcrack/orch/strings-inlined.js` + `string-table.json`
- `deob/stage2-dotprops.mjs` → `stage2-dotprops.js`
- `deob/stage3-fold.mjs` → `stage3-folded.js` (preferred reading file)

### Risks (Track A)
- CFF unflatten is the hard part: Turnstile's dispatcher is not the classic CF
  `while(true){switch(...)}` LOBYX expects. Estimate 3–5d to rewrite.
- Semantic rename without A6 gives limited further gain (API-line % stays ~13%).
- Seed is build-specific (23349 / 274201548). Re-extract per capture.

---

## Track B — VM bytecode (`<vm-endpoint>`)

### Stages
| # | Stage | Method | Effort | Status |
|---|---|---|---|---|
| B1 | Decrypt fo | existing `tools/decrypt-fo.mjs` | 0 | **DONE** — live6 482998 B |
| B2 | Nested synced disasm | Proxy on values[] Uint8Array → `(pc,key,raw)` | 0 | **DONE** — nested-5978, 554 fetches, 100% match |
| B3 | Authoritative main-fo trace | read-facade + idx==pcReg filter on live-b3 (build 1177822962); GR/IU/poly extracted from orch-xor-folded Alb path | 3–5d | **DONE (milestone)** — 3907 ops, 77.4% poly-sync |
| B4 | Offline walker + handler sim | annotate path on full 3907: poly+keymut **96.19%** explained / **98.67%** covered; keymut predictor `decode(pc+N)^6`; targets 15/33/183/207 essentially fully explained | 3–5d | **DONE (milestone)** — residual statechg 97 + unexplained 52 + op0/106 |
| B5 | CFG → structured decompile | fo-lifted-b5.js: **139** blocks, **51** structured probe blocks with named `get_prop` | 5–8d | **PARTIAL** — probe blocks structured; full if/while CFG still open |
| B6 | Opcode → API map | cib/tr/Wab resolve with **post-HP poly key**; Wab L[255] pool; 558 resolutions / 17 unique probe APIs in stream | 3–5d | **PARTIAL (milestone)** — BroadcastChannel/WebGPU/OPFS/hagen absent this build's L[] |
| B7 | Payload field map | Research decode of encrypted POST fields (UA/sizes) — **read-only, no forge** | 2–3d | Open (§8.3) |

### Known blockers (must address in B3)
1. **Proxy on TypedArray** for fo-sized buffers often yields fetchCount=0 or breaks the
   challenge (live13). Prefer: rewrite GR/HP in the *instrumented orch copy* to push
   `(pc,key,op)` into `__sdlog`, load that copy via CDP `Page.addScriptToEvaluateOnNewDocument`
   or Debugger.setScriptSource — never send modified `<vm-endpoint>` back to CF.
2. **Post-HP key/state mutations**: keymut predictor covers most; residual ~3.8% unexplained+statechg
   (op0/106 still weak). Operand decode uses **post-HP** key (`poly`), not fetch key.
3. **Host API strings** live in Wab trailer pool L[255] (xor 27) + cib IU-inline; pool loads need
   ohb/Rm===127 (or tr XOR-131→180). This build's L[] has RTC/navigator/Worker/WebGL/… but **not**
   BroadcastChannel / WebGPU / OPFS / hagen (absent from pool + mostly from orch).

### Effort estimate (remaining)
| Track | Remaining | Calendar (1 person) |
|---|---|---|
| A5–A7 | ~1–2 weeks | medium confidence |
| B3–B6 | ~2–3 weeks | medium–low (blockers) |
| B7 | ~3 days after B6 | |
| **Total to "readable orch + liftable fo"** | **~4–6 weeks** | |

### Prototype progress summary
- Strings: **100% of c0 calls recovered** (vs LOBYX 0%, webcrack 0%).
- Opaque seed folded; HP body now human-readable and matches our CONFIRMED model.
- Orch preferred file: `deob/webcrack/orch/stage3-folded.js` (693 KB).
- fo (build 1177822962): emb=101, IU^=1915332968, linear poly; authoritative stream in `deob/vm/fo-opstream-b4.json`.
- Auto constants: `deob/vm/extract-vm-constants.mjs` → `vm-constants.json`; orchestrator `deob/vm/run-track-b.mjs`.
- B4 metrics: nOps=3907, syncRate=96.19%, coveredRate=98.67% (polyH=3025 keymutH=732 statechgH=97 unexplainedH=52).
- B6 probe APIs in lifted fo: navigator, Worker, OfflineAudioContext, RTCRtpReceiver, XMLHttpRequest, postMessage, document, querySelector, globalThis, fetch, JSON, …

---

## Sequencing recommendation
1. Finish A5 (proxy/dead) — cheap readability win on orch shell.
2. Build B3 tap in stage3-folded HP/GR (instrumented local copy, CDP inject) — unlocks
   the probe strings that live only in fo (BroadcastChannel, WebRTC, …).
3. Parallel A6 CFF + B4 handler sim once B3 produces a synced fo key stream.
4. B5–B6 once we have synced fo + string table.

---

## Track C — Full VM understanding (David 2026-10-28)

Goal: complete picture (not only executed path). Research-only; no generator; no forged payloads.

### Milestone C1 (this report) — Opcode catalog + static cold seeds + cross-build

| Metric | Value |
|---|---|
| Dispatch handlers | **76** (excl. sentinel) |
| Semantics high | **8** (10.5%) — body-verified: t3/JZ, tN/JMP, cib, tr, Wab, qx/SETPROP, t1/NEW_OBJECT, … |
| Semantics high+med | **71 / 76 = 93.4%** |
| Semantics low | **5** |
| op0 | **t3 = JZ_ABS** — pop cond; u24 target @pc+2; key^=6 on taken; fall=pc+6 |
| op106 | **qD = ISTORE_OR_JMP** — microcoded indexed store / optional abs |
| B4 unexplained 52 | Mostly large-`dpc` landings (Tdb 15, tr 10, cib 8, Wab 7, qx 4…); **outgoing poly holds**; incoming keymut gap |
| Live PCs (executed) | 1662 / bcLen 494248 |
| Untaken t3 jump cold targets | **10** unique-ish (401580, 488034, 247659, …) |
| Pool probes present | RTCPeerConnection@50, AudioContext@248, OfflineAudioContext@160, WebGL*@53/56, userAgentData@129, permissions@185, storage@191, connection@133 |
| Live B6 lift had | OfflineAudioContext, navigator, Worker, RTCRtpReceiver, … — **not** RTCPeerConnection/WebGL/userAgentData/permissions/storage/connection |
| Cold-path note | Heuristic scans see those pool names near cold targets; **reliable GR walk after entry still needs keymut** (many decoded ops ∉ dispatch) |
| Cross-build fos decoded | **1177822962** (494248), **4096956204** (643992), **1177501088** (658968) |
| Stable vs rotated | GR mul 403 + IU mixin 40503/13849 recur; emb/IU xor/poly form **rotate** (101+linear vs 192+quadratic documented); poly coeffs 52146/29328 appear in some other-build dats |
| Audio hooks | C4: OfflineAudioContext **string×3** live; construct/getChannelData **0** across hk headful+headless (harness already multi-realm). Stealth≡stock for audio. Bare AudioContext still pool-only. **Superseded (interactive milestone): heavy-harness artifact; minimal hooks → OfflineAudioContext×3 + render + WebGL1/2 in stage-1 fo.** |

### Artifacts (C1)
- `vm/OPCODE-SEMANTICS.md` + `.json` — per-opcode catalog
- `vm/handlers/*.js` — extracted handler bodies (66+)
- `vm/static-cfg-report.json`, `static-jump-cold.json`, `static-cold-lift.json`
- `vm/cross/*.bytecode.bin` + `cross-build-constants.json`

### Remaining unknowns (explicit)
1. Server-side scoring — unobservable.
2. Full cold-path key continuity after first abs/keymut — blocks clean static lift of RTC*/WebGL*/permissions branches.
3. Encryption routine → payload field slots (C5) — describe-only map DONE; H31: zT encode offsets 90/101 + TEA proof match; H32: nested probe interiors 645 schema entries.
4. OfflineAudioContext multi-realm + stealth vs stock (C4) — DONE offline; string×3 / render 0; stealth≡stock.
5. CFG → structured pseudo-JS (C3) — first cut + fold into 33 named probe procs DONE; full if/else recovery still partial.
6. Fresh live pipeline on 4096956204 (need orch extract for emb/IU/poly auto) — binaries staged only.


## Track C progress (2026-10-28 <host-tz>)

### C1b — handler semantics ≥90% high — DONE
- 76/76 handlers **high** (100%). Catalog: `deob/vm/OPCODE-SEMANTICS.{json,md}`
- Residual: tp(POP_STORE), qJ(JZ_OR_COND_CALL), t2(XOR microcoded), x$(POP_STORE)

### C2 — cold-path simulator — DONE (solid)
- Verified keymut: jump nextKey = `dec(poly)^6`; fall key = poly; operand key = poly
- Cold BFS: +4055 PCs from 51 untaken t3 seeds; live probes: OfflineAudioContext×3, RTCRtpReceiver×25
- **Pool-only on fo string loads (this capture):** WebGL*, AudioContext still unused. RTCPeerConnection/BroadcastChannel are **API-used** without pool string loads. permissions/storage/connection/userAgentData = navigator enum only. See MILESTONE-pool-only.
- Artifacts: `deob/vm/c2-cold-sim.mjs`, `c2-cold-sim.json`, `c2-live-probes.json`, `MILESTONE-C2.md`

### C3 — structured pseudo-JS — FIRST CUT + FOLD
- Artifact: `fo-structured-c3.js` (~4871 lines, 86.74% named, 953 ctrl) → folded `fo-probe-procs-c3.js` (**33 named probe procs**, 4220 lines; OfflineAudioContext×3, RTCRtpReceiver×16, Worker, document, …).
- Meta: `MILESTONE-C3.json`, `MILESTONE-C3-fold.json`.

### C4 — OfflineAudioContext multi-realm + stealth vs stock — DONE (offline)
- Existing harness already Proxies OfflineAudioContext/AudioContext across window/iframe/worker (`cdp-worker-attach.mjs`, `hook.js`).
- fo loads OfflineAudioContext **×3** (tr/127); **0** construct/getChannelData/oscillator/compressor in hk-headful-1/2 and hk-headless-1.
- Stealth vs stock: **no audio divergence** (string-present / render-absent both).
- Doc fix: «audio absent» = constructor/render absent, **not** string absent.
- Artifact: `MILESTONE-C4.{md,json}`. Fresh pre-fo Proxy re-hook deferred to parent browser dispatch.

### C5 — describe-only probe→payload/encryption map — DONE
- Pipeline stages + 12-probe map; H31: bag-key encode offsets via real `zT` (90/101) + TEA proof match=1; H32: nested interiors of probes 1–38 schema-mapped (645 entries).
- Encryption: `zT` → pad → `ukb` TEA → custom b64 — describe only; **no generator**; never commit buffer/ciphertext/key values.
- Artifact: `MILESTONE-C5.{md,json}`; ties `re/listings/api-to-code-post-tie.json`.

### Pool-only provenance — investigated
- Second fo (hk-headful-1 005 crashed_retry): **same** pool-only set — not a separate program owning those names.
- Orch xor-folded / nested 5978: **0** plaintext for these names.
- RTCPeerConnection + BroadcastChannel: **API-used** without fo pool string loads (BroadcastChannel not even in L[]).
- navigator.permissions/storage/connection/userAgentData: enum×2, not dedicated fo string probes.
- WebGL* / bare AudioContext: unused under heavy harness; **WebGL1/2 used under minimal hooks** (bare AudioContext still 0).
- Cross-builds 4096956204 / 1177501088: pool magic needs build-local constants (deferred).
- Interactive-mode fo: captured (build 3158346939, stage-2 70 KB) — see Interactive mode section.
- Artifact: `MILESTONE-pool-only.{md,json}`.

### Interactive mode (build 3158346939) — done 2026-10-28 [pt44u]
- Trigger: plain headless puppeteer (no hooks) → interactiveBegin ~2.3 s; no click.
- Two <vm-endpoint> stages:
  - stage 1: 483 KB bytecode, FP, ≈ Managed pool
  - **stage 2: 70 KB bytecode**, 121-string UI/behaviour pool (pointer/touch/click, shadowRoot, compareDocumentPosition, crypto.subtle), with no WebGL/Audio.
- Build constants recovered: emb 235, pool poly 28989/49967 (+233, seed 185), IU 965405096, wab 119; decode order flipped.
- Minimal Proxy counters: stage 1 runs OfflineAudioContext×3 + startRendering + getChannelData, plus WebGL1/2 (~72 getParameter enums incl. UNMASKED). **This supersedes C4 "construct 0"/pool-only**, which was a heavy-harness artifact (overrun).
- Open: port B4–B6 to rotated build; hook workers; Managed-pass baseline.
- Artifact: `MILESTONE-interactive.{md,json}`.

---

## Interactive build 3158346939 — B4–B6 port (2026-10-28) [pt50u]

Client-only. Server scoring out of scope.

### Done
- Static opcode table 76/76 from folded orch (RZ + mm copies identical); jump nextKey xor **99**.
- Control confirmed: Wk=JMP_ABS, F$=JMP/pool. Hyp JZ: pib/WD.
- `vm-core-int.mjs`, `fo-probe-procs-int.js`, `fo-structured-int.js`, `proc-diff-c3-vs-int.md`.
- All 9 c3 probe families pool-confirmed on stage1; Worker/JSON/charCodeAt also in stage2 pool.
- Workers documented (`WORKERS-int.md`): Trusted Types gate, nav subset, OPFS flush Δt, hagen headers, PAT body.
- Pre-encryption blob layout Confirmed vs Hypothesis (`BLOB-FIELD-LAYOUT.md`); exact offsets still open; no generator.
- Milestone: `MILESTONE-int-B456.md` (+ appendix on `MILESTONE-interactive.md`).

### Blocked / partial
- **Live opstream** for PC-accurate B5: CF rotated live orch (no `X8(` / plaintext poly fingerprints used by first harness). `tools/capture-int-trace.mjs` ready; adapt to structural sites (dense switch, ror, poly xor forms).
- Cold sim entry key unconfirmed (seed-185 JMP from pc0 OOB).
- B7 exact POST field offsets: unchanged open (hypothesis only).

### Track B status addendum
| Stage | 1177822962 | 3158346939 |
|---|---|---|
| B3 live stream | DONE | blocked (rotation) |
| B4 keymut annotate | DONE (^6) | static only (^99); no live annotate |
| B5 structured lift | PARTIAL PC-accurate | family/pool only |
| B6 API map | PARTIAL | pool∩c3 + int-mini API |
| B7 field map | open | open (`BLOB-FIELD-LAYOUT.md`) |
