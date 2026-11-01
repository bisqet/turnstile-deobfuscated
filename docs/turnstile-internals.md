# Turnstile VM internals (research notes)

**Builds:** `1177501088` (live5/6 nested) · **`1177822962`** (live-b3 main fo, Track B) · `4096956204` (live10+)

**Limits:** research only. No token generator, no forged/modified `<vm-endpoint>` payloads to Cloudflare. Normal widget loads OK. No git commits. Not port 9876.

**Captures:** `cf-scripts/cap{1,2,3}/`; live runs `re/live{1..13}/` (xvfb headful Chrome, peet.ws managed widget). Builds: 1177501088 (live5/6) and 4096956204 (live10+).

---

## 1. Load / decrypt (`bk` → bytecode)

1. Orchestrator `c0`/`a0`: `atob` + rolling 16-bit XOR (seed polymorphic per capture).
2. `<vm-endpoint>/{build}/` body decrypt (`bk`):
   - `key = ray + "_0"`
   - `Hu = 32`; then `Hu ^= key.charCodeAt(i)` for each char
   - `plain[i] = ((cipher[i] - Hu - i + 65535) % 65535) % 255`
   - second `atob` → **bytecode**
3. Entry: `new hF(blob).run(...)` (names polymorphic: `dS`/`hF`/`RE`/`wN`).

Tool: `tools/decrypt-fo.mjs`. Example: live6 → `re/live6/fo.bytecode.bin` (482998 B), head32 =
`11955dd9 0710034a f83bf076 2155db73 ff6528dd 119426b9 20860205 915cda90`.

**Also:** a **nested 5978-byte** Uint8Array lands in `machine.values[slot]` (window realm). Head `11955ddb…`. **Stable across live5/live6** (byte-identical). Entropy ≈ 7.96. This is what the live fetch Proxy actually stepped.

---

## 2. VM machine + fetch (CONFIRMED live)

### Init (this build)

| Field | Init |
|-------|------|
| `digest` | `floor(Math.random()*2^32)` |
| `state` | `((digest>>>29)^digest)<<3>>3` |
| `o` | `1+Math.random()*254\|0` |
| `U,T,A,N` | `o^206`, `o^201`, `o^211`, `o^64` (live3); ctor then `D←T`, `C←U` |
| `l,i` | `1` |
| `j,h` | start `0`, later tracked |

### Fetch (CONFIRMED, live5 554 fetches)

```
emb = 192
key = (l===1) ? state^j : u          // live: key===state^j for all 554
pc  = (i===1) ? h^state : v
raw = jhb[pc]                         // Uint8Array, NOT charCodeAt
op  = GR(key ^ ((raw-192)&255), key, pc)
key := key + op                       // then HP / j updates; next key ≠ (key+op)&255 alone
```

**Exact GR / IU** (from orch.raw, X=274201548 path):

```
IU(pc):
  za ^= 1492693677
  za = ((za^(za>>>16))*40503)|0
  za = ((za^(za>>>13))*13849)|0
  return (za>>>16)^za

GR(xorVal, key, pc):
  c = (IU(pc)&255)+1
  qt = xorVal & 255
  qt ^= (((c-1)^(key*403))&255)
  rot = key & 7
  return ror8(qt, rot)
```

### HP / j↔state (CONFIRMED orch + live)

After `key += op`, VM calls `HP(machine, poly8(key))` where
`poly8(s) = (s²*60652 + 39207*s + 7854) & 255`.

```
HP(machine, poly):
  if number:  machine.l = 1; machine.j = poly ^ machine.state
  else:       machine.l = 0; machine.u = poly
```

**Effect:** next fetch `key = state^j = poly` when handlers leave state/j alone.
HP does **not** assign the 32-bit `state` register to poly — state traffic is handler-driven (and HU for control flow).

| Evidence | Result |
|----------|--------|
| orch `function HP(QC,Qg)` | body as above |
| live5 nested | 276/331 nextKey===poly (~83%); 55 handler divergences |
| live11 j-setter | 6866 HP-like sets, all xor-consistent (`keyPred = state^j`) |

Artifacts: `re/listings/j-state-coupling.json`, `HP.decompiled.json`, `live11-hp-key-stream.json`.

Bytecode access is `jhb[pc]` on a values[] Uint8Array. **Do not** Proxy small TypedArrays (live13 broke challenge). Inject Proxies only fo-sized (≥100k) OR plain Object ≥4000; fo Proxy often still yields fetchCount=0 (copy / non-indexed path).

---


---

## 2b. Build drift (live-b3 / Track B) — CONFIRMED 2026-10-28

Live capture `deob/vm/live-b3/` used fo build **1177822962** (ray `<REDACTED-RAY>`), not 1177501088.

| Constant | Build 1177501088 (live5/6) | Build 1177822962 (live-b3) |
|----------|---------------------------|----------------------------|
| emb | 192 | **101** |
| IU xor | 1492693677 | **1915332968** (`Alb(1706489177, pc)`) |
| GR mix | `key*403`, ror `key&7` | same |
| poly8 | quadratic `(s²*60652+39207*s+7854)&255` | **linear** `(s*52146+29328)&255` |
| orch XOR seed | 274201548 path | `SEED=1+1088066856` fold |

Core: `deob/vm/vm-core.mjs` (BUILD.id=1177822962).

### B3 authoritative fo trace
- Method: read-facade on `m.read` (plain-object Proxy; **not** Proxy-on-TA). Opcode filter: `idx === pcReg` where `pcReg = (i===1)?h^state:v`.
- Artifacts: `deob/vm/live-b3/` (fo.bin 878668 B → bytecode 494248 B), `vm-trace.json`, `fo-opstream-b4.json`.
- Base poly-only: **3907** ops, **77.4%** poly-synced before B4 keymut annotate.

### B4 sync + keymut (milestone)
- Annotate path (`b4-annotate-keymut.mjs`) on full 3907 — prefers keeping stream length vs predictive resync collapse.
- **Metrics:** nOps=3907 · polyH=3025 · keymutH=732 · statechgH=97 · unexplainedH=52 · **syncRate=96.19%** · **coveredRate=98.67%** · knownOps=58.
- Keymut predictor: `nextKey = decode(pc+N)^6` (N=2..5, esp. +3) explains 732/881 non-poly transitions.
- Targets: op33 (cib) 258poly/11keymut; op183 (tr) 350/0; op15 (Wab) 149/7; op207 (qx) 162/0.
- Imm: `imm-table-b4.json` (~87.7% dpc match on poly|keymut forward).
- Auto constants per build: `extract-vm-constants.mjs` → `vm-constants.json`; pipeline `run-track-b.mjs`.

### B5/B6 lift + host API resolve (milestone)
- **Operand key = post-HP `poly`**, not fetch `key` (cib/tr/Wab handlers run after HP).
- cib: 2× o-update bytes, then ohb; ohb===127 → `L[idx^214]`; else IU-inline (`Bb→Bc→Bd→B7→B8→B9`, init `pc^1915332968`). endPc-validated **258/269**.
- tr: Rm path via XOR-131 (Rz^131==180) or 127 → `L[idx^89]`.
- Wab trailer pool: `extract-fo-strings.mjs` → `fo-string-pool.json` (**255** strings).
- Lift: `fo-lifted-b5.js` — **139** blocks, **51** named probe functions, **558** string resolutions.
- **Probe APIs located in fo stream:** navigator, Worker, OfflineAudioContext, RTCRtpReceiver, XMLHttpRequest, postMessage, document, documentElement, querySelector, globalThis, fetch, JSON, charCodeAt, body, head, shadowRoot.
- In pool but not hit this trace path: RTCPeerConnection, AudioContext, permissions, storage, connection, WebGL*, userAgentData, …
- **Absent this build's L[] (and mostly orch):** BroadcastChannel, WebGPU/requestAdapter, OPFS/getDirectoryHandle, hagen.

### C1 full-VM picture (milestone 2026-10-28 <host-tz>)
- Handlers catalogued: **76** → `deob/vm/OPCODE-SEMANTICS.md` (+ `.json`). High **8/76 (10.5%)**; high+med **71/76 (93.4%)**.
- **op0 = t3 = JZ_ABS** (pop cond; u24 target; nextKey=imm^6 taken; fall pc+6). Verified 38 jump + 24 fall6 vs live.
- **op106 = qD = ISTORE_OR_JMP** (microcoded); **op110 = tN = JMP_ABS**.
- **52 unexplained** B4 steps = mostly large-dpc branch landings; outgoing poly still holds.
- Static CFG: unbounded poly-BFS over-reaches; valuable path = both sides of t3. **10 untaken JZ cold targets** (`static-jump-cold.json`). Reliable multi-op cold lift needs keymut (C2).
- Pool indices (this build): RTCPeerConnection@50, WebGL*@53/56, userAgentData@129, connection@133, OfflineAudioContext@160, permissions@185, storage@191, AudioContext@248 — live-untaken / cold.
- Audio (C4): OfflineAudioContext **string×3** on live fo; construct/getChannelData/oscillator/compressor = **0** in hooked window/iframe/worker (headful≡headless) — **superseded §2e: heavy-harness artifact; minimal hooks show OfflineAudioContext×3 + render + WebGL1/2 in stage-1 fo**. «Absent» = render path, not string. Bare AudioContext still pool-only.
- Cross-build fo staged: 1177822962, 4096956204, 1177501088 under `deob/vm/cross/`. emb/IU/poly rotate.
- Artifacts: `MILESTONE-C1.md`, `handlers/*.js`, `static-cfg-*.json`, Page «Деобфусцированная VM» updated.

## 3. Opcodes + live semantics

| Metric | Value |
|--------|-------|
| Table ops | 75 (+ new trace-only ids in `re/opsizes.json`) |
| Numbering stable | yes (after per-capture X) |
| Handler names | polymorphic |
| Live nested stream | **332 opcodes / 554 fetches** (live5) on stable 5978 blob |
| Imm match from gaps | AF/AY/AN/Au/AC/A4/Ax match table; Ay/An/Dbb/ehb revise (varlen) |
| Semantics **confirmed** (handler body) | Ax (stack unary), A9 (push/mov), As (varlen call) |
| Semantics **trace-seen** | Ay, An, AF, Dbb, AL, AY, ehb, AN, Au, Ak, AC, Am, A4, … (see opsizes `liveSeen`) |

Opcode vs operand split in the log: same `key` + consecutive `pc` ⇒ operand byte (operands often **not** GR-decoded; many handlers also advance pc without re-reading through the Proxy).

Artifacts: `re/opsizes.json`, `re/opcode-stability.json`, `re/listings/live5-synced-5978.txt`, `re/live5/synced-disasm.json`.

---

## 4. Synced disasm (nested 5978)

**Same-load sync:** live5 fetch `(pc,key,raw)` × live6 dump bytes — **554/554 raw match** (blob stable).

- Listing: `re/listings/live5-synced-5978.txt`
- CFG/functions (8 entries by pc gaps/back-edges): `re/listings/nested-5978.cfg.json`
- Pool: raw printables `re/listings/nested-5978.pool-raw.json`; xor trials `…pool-xor.json` (no clear navigator/canvas plaintext in nested blob)
- fo pool XOR6 hit: literal `gpu` at off 131055 (`re/listings/live6-fo-pool-xor6.json`); most API names still encoded beyond single-byte XOR

`tools/disasm-exact.mjs` — exact IU/GR + HP model; continue-on-unknown. fo offline listing `live6-fo-exact.txt` (~50k steps) is **hypothesis-grade** (desyncs when handlers mutate state/j). Authoritative fo `(pc,key,raw)` stream still missing (Proxy miss). See `re/listings/fo-walk-status.md`.

---

## 4b. Per-realm API reads (CONFIRMED)

Method: recursive CDP `Target.setAutoAttach(waitForDebuggerOnStart, flatten)` → hooks before worker `runIfWaitingForDebugger`; Blob-parts stash (no CSP rewrite). Detail: `re/api-realms/per-realm.{json,md}`.

| Realm | Confirmed reads | canvas/WebGL/audio/matchMedia |
|-------|-----------------|-------------------------------|
| window | UA, innerWidth/Height, createElement, iframe.contentWindow | **0** |
| iframe_cf | full navigator enum, gpu.requestAdapter, createElement, Worker | **0** (WebGPU yes) |
| iframe_child | bulk document/navigator/screen/window | **0** |
| worker | platform, languages, hardwareConcurrency, deviceMemory, userAgent | **0**; OffscreenCanvas present unused |
| CSS @media | UI stylesheet only | 0 `matchMedia()` |

API→code→POST tie (priority UA/sizes): `re/listings/api-to-code-post-tie.json` — placement in encrypted POST remains **hypothesis**.

---

## 5. Check → API → compute → payload

Source: `re/check-api-table.json`. Hooks: `tools/hook.js` (canvas/WebGL/audio/navigator/screen all instrumented).

| Check | API (observed?) | Computed | Payload sink | Status |
|-------|-----------------|----------|--------------|--------|
| Bootstrap / decrypt | ray, `bk`, `atob`, `hF.run` | fo → bytecode; nested 5978 in values[] | loader | **confirmed** |
| VM fetch | state,j,l,i | `key=state^j`; exact GR | N/A | **confirmed** live |
| navigator UA-ish | `userAgent`, `userAgentData`, `platform`, `language(s)`, `appVersion`, … | window reads (live1/4) | **hyp** encrypted `<vm-endpoint>` field — UA mismatch historically fails | API **confirmed**; placement **hyp** |
| navigator hardware | `hardwareConcurrency`, `deviceMemory`, `maxTouchPoints`, `gpu`, … | window reads | hyp FP fields | API **confirmed**; placement **hyp** |
| navigator automation | `webdriver`, `plugins`, `mimeTypes`, … | window reads | hyp flags | API **confirmed**; placement **hyp** |
| Window sizes (“screen”) | `inner/outer Width/Height`, `screenX/Y`, `devicePixelRatio` | window reads; **no** `screen.width/height` hits | hyp size tuple — size mismatch historically fails | window.* **confirmed**; `screen.*` **hyp**; placement **hyp** |
| Canvas 2D / WebGL / Audio / matchMedia | hooks all realms (CDP AutoAttach) | **0** hits window / iframe_cf / child / worker | N/A or harder path | **confirmed absent** in hooked realms |
| WebGPU | `navigator.gpu.requestAdapter` | iframe_cf | hyp FP | API **confirmed** |
| Worker navigator | platform, languages, hardwareConcurrency, deviceMemory, userAgent | blob Worker eval 194B | hyp FP | **confirmed** live9/10 |
| Child sandbox | bulk document/navigator/screen/window enum | clean about:blank realm | hyp consistency | **confirmed** |
| HP / j coupling | HP + poly8 | next key = poly unless handler mutates | N/A | **confirmed** |
| CF POST | `<vm-endpoint>/{build}/…` | encrypted body (we do not forge) | encrypted response | channel **confirmed**; field map **open** |

Merged API keys: `re/live-api-merged.json`.

---

## 6. Opcode / bytecode stability

- **75** opcodes stable across cap1/2/3 after undoing X.
- fo shared prefix ~119 bytes; lengths ~483–503k session-varying.
- **Nested 5978** byte-identical live5↔live6 (build-stable helper VM).
- Polymorphic: orch XOR seed, X, handler/class names.

---

## 7. Tools / artifacts

| Path | Role |
|------|------|
| `tools/decrypt-fo.mjs` | fo → bytecode |
| `tools/disasm-exact.mjs` | exact IU/GR walker |
| `tools/disasm.ts` | older approx walker |
| `tools/vm-live-inject.js` | xvfb inject: dump arrays, Proxy fo-sized, state/fetch log |
| `tools/vm-step-log.snippet.js` | manual snippet (same idea) |
| `tools/live-vm-trace.mjs` | puppeteer + xvfb runner |
| `tools/hook.js` | FP API hooks |
| `re/opsizes.json` | imm/sem + `liveSeen` |
| `re/opcode-stability.json` | stability + live5 meta |
| `re/check-api-table.json` | check map |
| `re/nested-5978.bytecode.bin` | stable nested blob |
| `re/live5/fetches.json`, `synced-disasm.json` | opcode trace |
| `re/live6/fo.bytecode.bin` | decrypted fo |
| `re/listings/live5-synced-5978.txt` | synced listing |
| `re/listings/nested-5978.cfg.json` | CFG/functions |
| `re/listings/j-state-coupling.json` | HP / j↔state |
| `re/listings/live6-fo-exact.txt` | fo offline listing (hyp-grade) |
| `re/listings/fo-walk-status.md` | fo walk status |
| `re/api-realms/per-realm.{json,md}` | API reads per realm |
| `re/listings/api-to-code-post-tie.json` | API → code → POST |

---

## 8. Open

1. Capture fo-sized `(pc,key,raw)` stream without breaking challenge (Proxy on ≥100k often 0 fetches; small TA Proxy breaks). For 3158346939: adapt CDP sites to rotated orch (structural, not `X8(`) — see §2f.
2. Handler-level state/j simulation so offline fo walker stays in sync past post-HP divergences (Managed ^6 done C2; interactive ^99 static only).
3. Map encrypted `<vm-endpoint>` POST fields for UA / window sizes (research decode only — no forged sends). Describe-only: `BLOB-FIELD-LAYOUT.md` / C5; exact offsets still open.
4. ~~canvas/WebGL/audio on harder path~~ — **closed for stage-1 under minihook** (construct/render present); heavy-harness "absent" was overrun artifact. Bare AudioContext still 0.

Server-side weights / thresholds: **out of scope** (client RE only) [pt50u].

Closed this pass: HP/j coupling; worker+child+iframe realm API list; CSS matchMedia absence; worker compute docs; interactive opcode tables (static).

---

## 9. harukasen probe verification (live, 3 runs: 2 headful + 1 headless)

Extended harness (`G.__hk` counters in cdp-worker-attach.mjs EXTRA_PROBES) over all 4
realms. Managed widget, CF iframe = OOPIF where challenge runs. Full table:
`deob/PART1-harukasen-probe-verification.md`; raw `re/hk-*/`.

| Probe | On our path | Note |
|---|---|---|
| BroadcastChannel | **Confirmed-present** | `new BroadcastChannel("a")`+postMessage, CF iframe only. NEW. |
| WebRTC RTCPeerConnection | **Confirmed-present** | new + createDataChannel + createOffer + setLocalDescription, CF iframe only; no ICE submit. NEW. |
| frameElement | **Confirmed-present** | read in CF iframe realm; absent top window. NEW. |
| RegExp timing | **Partial** | exec 160–409/run + perf.now 35–120/run, but regexBig=0 (maxSrc 236, maxInput 490). No giant-regex timing signature. |
| toJSON probe | **Inconclusive** | JSON.stringify heavy; custom toJSON not externally observable. Their-claim unverified. |
| canvas/OffscreenCanvas | **Confirmed-absent** | capability banner only; zero draw/read calls any realm. Re-confirms §8.4. |

Reproducible and identical headful vs headless. BroadcastChannel/WebRTC/frameElement
now Confirmed (previously untested); canvas/WebGL/audio re-confirmed absent.


## §2c Track C1b/C2/C3 (2026-10-28 <host-tz>)

### Handlers (C1b)
All **76/76** dispatch handlers classified **high**. See `deob/vm/OPCODE-SEMANTICS.md`.

Notable: op0=t3=JZ_ABS, op110=tN=JMP_ABS, op106=qD=ISTORE_OR_JMP, op86=qJ=JZ_OR_COND_CALL, op253=t2=XOR (CFF), op7=tp=POP_STORE.

### Keymut (C2, live-verified)
After HP, handler-local Rf equals **poly**. Absolute jumps call `sT(m, dec(keyByte,poly)^6)` and `sF(m, target)`. Fallthrough leaves key at poly (HP j already set).

| op | layout | nextKey on jump |
|---|---|---|
| t3 (0) | cond@+1, u24@+2..4, key@+5 | dec(+5,poly)^6 |
| tN (110) | u24@+1..3, key@+4 | dec(+4,poly)^6 |

### Probe map (live capture)
| probe | pool idx | live loads | cold-fork loads |
|---|---|---|---|
| RTCRtpReceiver | 219 | 25 (tr xor131) | 0 |
| OfflineAudioContext | 160 | 3 (tr 127) | 0 |
| RTCPeerConnection | 50 | 0 | 0 |
| WebGLRenderingContext | 56 | 0 | 0 |
| WebGL2RenderingContext | 53 | 0 | 0 |
| userAgentData | 129 | 0 | 0 |
| permissions | 185 | 0 | 0 |
| storage | 191 | 0 | 0 |
| connection | 133 | 0 | 0 |
| AudioContext | 248 | 0 | 0 |

Pool-only probes are not on untaken t3 sides of this `<vm-endpoint>` run; likely host-gated / other challenge modes.

### Structured lift (C3 first cut)
`deob/vm/fo-structured-c3.js` — pseudo-JS for 3907 live ops; ~87% named; 953 ctrl structures.

## §2d Track C4/C5 + pool-only + C3 fold (2026-10-28 <host-tz>)

### C4 audio
- Multi-realm harness already hooks OfflineAudioContext/AudioContext (`tools/cdp-worker-attach.mjs`).
- Live fo: OfflineAudioContext×3 (pcs 38187, 126185, 249638); structured path = feature-detect/GETPROP/qx, not startRendering.
- API: 0 construct / getChannelData in hk-headful-1/2 & hk-headless-1. Stealth vs stock: no divergence.
- Artifacts: `deob/vm/MILESTONE-C4.{md,json}`.

### C5 describe-only map
- 12-probe map probe→value→transform→slot(hyp); encryption bk+TEA trailer described; **no generator**; exact POST offsets open.
- Artifacts: `deob/vm/MILESTONE-C5.{md,json}`.

### C3 fold
- `fo-probe-procs-c3.js` — 33 named procs (OfflineAudioContext×3, RTCRtpReceiver×16, Worker, document, …).
- `MILESTONE-C3-fold.json`.

### Pool-only provenance
- Second fo (crashed_retry 005) still carries same pool-only names.
- RTCPeerConnection/BroadcastChannel **API-used** without fo pool string loads (BC not in L[]).
- permissions/storage/connection/userAgentData = navigator enum×2, not dedicated fo loads.
- WebGL* / AudioContext unused on Managed peet.ws.
- Nested/orch: no plaintext. Cross-build pool extract needs per-build magic.
- Artifact: `deob/vm/MILESTONE-pool-only.{md,json}`.

## §2e Interactive mode (build 3158346939, 2026-10-28 <host-tz>)
- Plain headless → interactiveBegin ~2.3 s. Two fo stages:
  - stage 1: 483 KB bytecode (FP, ≈ Managed pool)
  - stage 2: **70 KB** bytecode (UI/behaviour: pointer/touch/click, shadowRoot, compareDocumentPosition, crypto.subtle; no WebGL/Audio)
- Stage 2 arrives as the response to the 2nd <vm-endpoint> POST (~88–90 KB).
- Minimal Proxy counters in the OOPIF:
  - OfflineAudioContext new×3/startRendering×3/getChannelData×4, oscillator+compressor
  - WebGL1/2 ~72 getParameter enums incl. UNMASKED_VENDOR/RENDERER
  - FontFace×65, measureText×67, mediaCapabilities×16
  - hook-detection calls (bogus args) plus a `__playwright_global_listeners_check__` listener probe
- Orchestrator (pre-fo) owns Worker/RTCPeerConnection/BroadcastChannel.
- Details: `deob/vm/MILESTONE-interactive.md`.

## §2f Interactive B4–B6 port + workers + blob layout (2026-10-28) [pt50u]

### Opcode tables (build 3158346939)
- 76 handlers; tables at RZ-loop and mm match. Jump key ^= **99** (Managed was ^6).
- Confirmed control: op53 **Wk** JMP_ABS; op48 **F$** JMP/pool. Hyp JZ: 95/194 pib, 210 WD.
- Artifacts: `deob/vm/interactive/optable-int-raw.json`, `OPCODE-SEMANTICS-int.json`, `vm-core-int.mjs`.

### Probe lift
- `fo-probe-procs-int.js` / `fo-structured-int.js`: family-level vs c3; **liveOpstream:false**, **structuredLiftPcAccurate:false**.
- Live CF orch rotated mid-session (`_0x4381b4`, space-padded 1.3MB eval traps) — X8-oriented CDP BPs got 0 hits.
- Proc diff: all 9 c3 families pool-confirmed stage1 (`interactive/proc-diff-c3-vs-int.md`).

### Workers (what each computes) — Confirmed from eval bodies
| Worker | Computes |
|---|---|
| Trusted Types bootstrap | Policy `createScript` identity + gated `eval` (`isTrusted`, origin `''`, source null) — not FP |
| Nav eval ~194 B | platform, languages, hardwareConcurrency, deviceMemory, userAgent → postMessage |
| OPFS ~526 B | `flush()` wall time via `performance.now` → postMessage |
| hagen ~525 B | GET hagen `/i/` → status + response headers → postMessage |
| PAT ~1.3 KB | fetch `/pat/` → status/ok/body text → postMessage |
Doc: `deob/vm/WORKERS-int.md`.

### Pre-encryption blob layout
Confirmed: channel, bk decrypt of *captured* bodies, pool/TEA constants, aggregation inputs (VM + realms + worker replies), transform primitives. Exact field offsets / AEAD: **open** (hypothesis only). No generator. Doc: `deob/vm/BLOB-FIELD-LAYOUT.md`.

### Open (client-only; server weights removed from research checklist)
1. Live `(pc,key,op)` on matching orch (structural fingerprints).
2. PC-accurate stage1/stage2 lift + cold entry key.
3. Exact pre-encryption POST field offsets (read-only decode).
