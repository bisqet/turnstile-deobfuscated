# Orchestrator structure, build 3158346939 (H144)

Two files:

| File | What it is | Executed by the gates? |
|---|---|---|
| [final/orchestrator.readable.js](../orchestrator/orchestrator.readable.js) | H130 executed readable + H144 T1, T2 (non-callee), T3, T6, colFit-anchored. Same line numbers as the H130 input. | Yes. All gates golden (see "Gates"). |
| [final/orchestrator.display.js](../orchestrator/orchestrator.display.js) | Display text: everything above + T2 on callee positions, T4, T5, local names (T7) + role comments. 15818 lines. | In the display gate mode: golden since H149 (stack fit, see "Display equivalence"). |

[final/orchestrator.display.linemap.json](../orchestrator/orchestrator.display.linemap.json) maps each display line to its executed line (minimum input line). Both files read the sensitive literals from the pin table at run time (`globalThis[Symbol.for("deob.orchPin")][N]`); the pins are never committed.

Line numbers below (`L…`) refer to the executed file [orchestrator.readable.js](../orchestrator/orchestrator.readable.js).

## Transforms

The tool is `tools/deob-auto/orch-read-h144.mjs`. Each transform is applied on the Babel AST, and a canon check proves it. The canon check reverses the transform's normalisation on both input and output (for example, dot keys become computed string keys, and `if` statements become `&&`/ternary expressions). It then requires the two ASTs to be equal (`canonOK`).

| Id | Transform | Soundness condition | Sites | In executed file |
|---|---|---|---|---|
| T1 | `zW` → `window` | Exactly 1 binding of `zW` is the global alias (`zW = window` at top level, never reassigned; proof: 427 roots, 430 reachable, 0 alias reads reached, no eval/arguments). The other 1172 `zW` are unrelated function locals and stay. | 1 binding / 501 refs | yes |
| T2 | `a["k"]` → `a.k` | `k` valid IdentifierName. Callee position (`a["k"](…)`, `new`, tag) only in the display, because V8 reports the property token in stack frames and the shorter text would leave it behind its column. | 1782 sites executed (374 callees kept), 2156 display | non-callee only |
| T3 | `(x, f)(y)` → `f(y)` | every prefix `x` side-effect-free (identifier/literal/member of pure base); `f` an identifier other than `eval` (a member `f` would change `this`). Kept: 191 member callees, 84 impure prefixes. | 579 | yes |
| T6 | `{ ["k"]: v }` / `{ "k": v }` → `{ k: v }` | `k` IdentifierName, not `__proto__` | 543 | yes |
| T4 | comma chains → statements | ExpressionStatement, `return a, b` → `a; return b`, for-init kept in place when it holds declarations | 373 stmts, 477 returns, 147 for-inits, 4896 pieces | display only |
| T5 | `a ? b : c;` / `a && b;` / `a \|\| b;` → if/else | Statement position only (value unused) | 74 / 116 / 13 | display only |
| T3-H148 | `(R[k], f)(y)` → `f(y)`; `(lit, B[k])(y)` → `E(y)` (`orch-call-h148.mjs`, `--only T3`) | see "Indirect calls (H148)" | 121 (77 register, 44 box); 154 kept | yes |
| T8 | constant folding (H147, `orch-fold-h147.mjs`): single-assignment literal locals → literal; `"a" + "b"`; `false ? x : y` | see "Constant folding (H147)" | 367 bindings / 1150 reads, 2 concat, 6 cond | yes |

Constant folding is T8 (H147, below). Call keys such as `Iob(2041394597, 995812, …)` look constant but dispatch into the VM, so they are not folded.

Why T2 callee, T4 and T5 are display-only: CF fingerprints `14.CJkad9`, a 7-frame `Error().stack` with line:col. colFit (H117, `tools/chrome-run/col-anchor.mjs`) can only pad tokens forward to their original column. Any transform that shortens the text in front of a stack call site, or moves the call token itself, leaves that frame behind its original column. Negative control: full T2 on the executed file gives `5200e1af76de/64608` instead of `7ca3e0532109/64600`.

## Boot sequence

1. Prologue (L1–L110): trusted-types pass-throughs `window.YDta0` / `yCpNJ2` / `YMwdw2` and the config object `window[pin 31]` (read everywhere as `window[PIN31]`, the challenge option table). Then the `message` listener (L106), which answers `meow` with `food` (L98).
2. Module body: helper tables, the VM class `mV` and the VM entry `window.armBH3 = C1 => new mV(C1).run(0, 185, [])` (L3764).
3. `Dt` boot (L9740) is scheduled via `setTimeout` at L1730/L1731 once `DOMContentLoaded`/`readyState` allows. Dt registers the main receiver `rr` (L9802) with `sb(window, window.addEventListener, …, rr)` (L9860) and posts `init` (L9861). It then asks for `requestExtraParams` (L9920). `AP` (L10223) calls `sSkll6.uFZY4` bootUi (L10240).
4. UI: the `window.sSkll6` method table (role map below) builds the checkbox widget in `#bcQj6` and starts the clock (`wgNpS5`).
5. `zL` (L10622) runs the main challenge POST (XHR flow below). A response whose text begins with `window._` is evaluated as `new Function(body)(jf, zL)` (L10763). That script enters the VM through `armBH3`.

## Message protocol with the parent

Every outbound message is `window.parent.postMessage({source: "cloudflare-challenge", widgetId, event, …}, "*")`. There are 28 postMessage call sites. The table lists them by event type, with each site's payload keys (keys only).

| event | Lines (event literal) | Sender fn | Payload keys besides source/widgetId/event |
|---|---|---|---|
| food | L101 | prologue handler | seq (reply to inbound `meow`) |
| (prologue trigger) | L86 | top | trigger, nextRcV |
| init | L9864 | Dt | kills, mode, nextRcV |
| requestExtraParams | L9920 | Dt | – |
| reloadApiJsRequest | L9905 | Dt | – |
| turnstileResults | L9850 | rr | rayId, rcV, sitekey, cfChlOut, cfChlOutS, mode, md, frMd |
| complete | L9111, L9163 | AN | token / (rcV, cfChlOut, cfChlOutS, code, frMd) |
| fail | L8407, L9280, L10746 | jf / Ag / XHR onreadystatechange | rcV, code, cfChlOut, cfChlOutS, frMd |
| refreshRequest | L8720, L10208 | lE (expired click) / lQ | reason |
| feedbackInit | L8915, L9569, L10930, L11097 | ls / jn / lo / xE (click handlers) | rayId, cfChlOut, cfChlOutS, feedbackOrigin |
| interactiveBegin | L10588 | lS | – |
| interactiveEnd | L9266 | lU | – |
| interactiveTimeout | L9021 | lG | – |
| overrunBegin | L10792 | Gjb | – |
| widgetStale | L10840 | – | – |
| languageUnsupported / translationInit | L11057 / L11062 | l9 | displayLanguage, displayRtl, translationData |
| reject | L11157 | Au | reason |
| (computed event) | L10113 (r5), L10217 (D2) | r5 / D2 | rayId, sitekey / – |

Inbound (`rr`, L9802): the message must carry `source === "cloudflare-challenge"` and the own widgetId. The receiver then dispatches on the event:

| Inbound event | Line | Effect |
|---|---|---|
| reloadApiJsRejected | L9816 | stop reload loop |
| extraParams | L9822 | sets `ch`, `au`, `dR(window).PUUDF8 = rp.wPr \|\| {}`; runs `r5` / `r7` |
| execute | L9844 | starts the execute path (also polled by the 1000 ms interval at L8591) |
| gcs | L9847 | `zD(…)` |
| forceFail | L9847 | if not already terminal: `sSkll6.ylnR9()` interactiveEnd, `MFnaZ4()` markFailed, `FGVe0()` showFailure, `window.cQZM8 = true` |
| requestTurnstileResults | L9847 | replies `turnstileResults` |
| meow (prologue) | L106 | replies `food` |

Observed in the local replay (RUN_BP_DIAG): meow 8, init 1, extraParams 1, execute 1. Outbound observed: food, init, requestExtraParams, translationInit.

## XHR flow

| Fn | Line | Request | Timeout / retry | Response |
|---|---|---|---|---|
| zL | L10622, open L10661 | POST to the challenge URL (pin); headers `cf-chl` (L10663 area, from `t6(window).EKQGE4`) and `cf-chl-ra` (retry counter `zX[26]`) | `Aj(5000, 1 + jT)`; on timeout or error `r2` retries after `jN[0](250, jT + 1)`; gives up when `Rcrx4` is set or `jT >= 3` | onreadystatechange: success → `new Function(body)(jf, zL)` (L10763, VM handoff); error → `fail` postMessage (L10746) |
| zL deferral | L10646 | – | if the config start time `QGPBf2 + 1000` is still ahead, re-enters via `setTimeout(…, r0)` | – |
| xm | L10941, open L10964, send L10969 | GET under `/cdn-cgi/challenge-platform/h/<ppebL7>/…` | retry `(jN + 1) * 250`, max 5 then `ENLzH2` | 200/304 → `sSkll6.BZLE1(responseText)` renders into `#SEan7` |
| qgcO0 | L8456–L8530, open L8495 | POST error report | timeout 5000, `loadend` | – |

## Timers

| Line | Kind | Delay | Purpose |
|---|---|---|---|
| L1730, L1731 | setTimeout | 0 / zS | Dt boot |
| L8400 | setTimeout | config | jf fail path |
| L8589, L8592 | setInterval | 1000 | execute polling; cleared L8591 |
| L8861 | setInterval | 150 | Af; cleared L8871 |
| L9196 | setInterval | 1000 | jv clock tick |
| L10592 | setTimeout | config | lS interactive timeout; cleared L10598 / L9263 |
| L10646, L10658 | setTimeout | r0 / backoff | zL deferral / retry |
| L10961 | setTimeout | (jN+1)*250 | xm retry |
| L11219 | setTimeout | jv | Au reject |

## Error paths

- `fail` postMessage: L8407 (jf), L9280 (Ag), L10746 (XHR).
- forceFail (inbound): sets the terminal flag `window.cQZM8` (checked by `dC`) so that it fires only once. Same triple at L9127 (`MFnaZ4`, `FGVe0`, `cQZM8 = true`) before `complete`/`fail`.
- Global `addEventListener("error")` (L8544) calls `qgcO0(…, "orc-onerror", …)` (L8570).
- Breadcrumbs: `Vnlyd3`/`GsfY1` stack (cap 30). Calls: `Ewgxh3` push (86), `uOdMb2` replace top (74), `qwQRi7` pop (44), `sSEGO7` join ">", `eJeI1` clear. The breadcrumbs travel with the error report. `xNxMK4` parses an error stack into line:col.

## VM handoff

`window.armBH3(C1)` (L3764) is the only entry: `new mV(C1).run(0, 185, [])`. The orchestrator itself has no call site for it. The 2 calls observed in the local replay come from the script that `zL` evaluates from the POST response (`new Function(body)(jf, zL)`, L10763). The VM reads the per-widget list from `HNiY8` and accumulates payload fields with `JwCUQ7` (7 calls) and `fXaz8` (merge, 1). It reads `cfChlOut` through `pRxjE3` / `wsqXE7`. The CJkad9 stack is sampled inside this call chain (frames `i`, `cfb`, `mm`, `t`, `mV.run`, `rW`, anonymous wrapper).

## Role map

Source: `tools/deob-auto/out/3158346939/orchestrator-roles-h144.json` (48 keys). In the display file, each role is attached as a `/* role: … */` comment. Each role is tagged either "exec: N calls" (named from RUN_BP_DIAG hit counts and observed effects) or "code" (named from the body).

| Name | Role |
|---|---|
| `window.sSkll6` | widget UI method table |
| `MFnaZ4` | markFailed (class paOli9, state Mckdw4) |
| `FGVe0` | showFailure (feedbackInit link) |
| `ylnR9` / `xJjEf7` | interactiveEnd / interactiveBegin |
| `uFZY4` | bootUi |
| `XHmyT7` | localized string lookup (17 calls) |
| `tNEww4` | configHasFlag (15 calls) |
| `kZNT4` / `nnoc6` | showExpired / showRefresh |
| `BZLE1` | render message into #SEan7 |
| `KNrCg9` / `obBM2` | mount into / container #bcQj6 |
| `wgNpS5` | startClock |
| `window.cQZM8` | terminal flag |
| `window.qgcO0` | error-report XHR |
| `window.armBH3` | VM entry |
| `window.JwCUQ7` / `fXaz8` | payload field accumulator / merge |
| `window.HNiY8` | per-widget list decode |
| `window.Ewgxh3` / `uOdMb2` / `qwQRi7` | breadcrumb push / replace / pop |
| `PUUDF8` | config field set from `extraParams.wPr` (no window assignment; not in the roles json) |

## Gates

The executed file is gated with all gates under `env -i`:

| Gate | Result |
|---|---|
| g15 t1/t2/t4 | `7ca3e0532109`/64600 |
| cng t1/t2/t4 | `a8317f7c964e`/64432 |
| sc | `9f14516bebc3`/64608, miss 0, ksMiss 0 |
| VERIFY | 23/23 |
| INVC | 10/10 |
| INVN | 13/13 |
| var default | subst `7ca3e0532109` |
| var headless | `90bc453bcb2c`, shadowcmp `4c33ad8c25fd` |
| var canvas_noread | `a8317f7c964e`, shadowcmp `deca9c496a75` |

All results are golden. The evidence is in `tools/deob-auto/out/3158346939/final/evidence-h144.json`; the same results with the H147 and H148 files served are in `evidence-h147.json` and `evidence-h148.json`. H149 serves the named display (`orch=True:d0251937a75e` and `orch=False:d0251937a75e`, i.e. hooks on and off) and gets the same results on every row: g15, cng, sc miss 0 / err 0, VERIFY, INVC, INVN, and var default / headless / canvas_noread, including the shadowcmp shas (`evidence-h149.json`).

## Display equivalence

### H149: named display, golden

`final/orchestrator.display.js` (sha256 `d0251937a75e…`, 15818 lines) is served in place of the executed file (`RUN_ORCH_READABLE` = display file, colFit on) and every gate is golden (see "Gates", `evidence-h149.json`).

Before H149 the named H148 display (`a7813eb543fb…`) served `34435c47a509/64608`. `orch-display-diff-h144.mjs` showed the rest of the plaintext byte-identical (`restEqual: true`) and the same 7 `14.CJkad9` frame ids and lines, with 6 of 7 frames off in column. The frame model behind the fix (`tools/chrome-run/col-anchor.mjs`): a token is served at the maximum, over the anchors before it, of the anchor's original offset plus the served text length from that anchor. colFit can pad forward, never pull back, and the walk back stops at the first anchor placed exactly. A frame therefore drifts only when the text in its window (from the last exact anchor to the frame token) is longer than the original. Shorter text never hurts.

`tools/deob-auto/orch-stackfit-h149.mjs` replays that anchor model offline for both hook modes (`injectEncryptHooks` on and off), from the display posmap and the original VM text. It builds a tagged display in which every name carries its table index, so a served window maps back to names-table keys. It then reverts the names in each drifting window, nearest the frame first, until the frame sits at its original column. The result is `tools/deob-auto/out/3158346939/orchestrator-stackfit-h149.json`, which `orch-read-h144.mjs --stack-fit <json>` reads:

| Frame | Function | Excess before (both hook modes) | Names kept short | Window (chars) | Other fit |
|---|---|---|---|---|---|
| 0 | `i` | 4 | 1 | 27 | |
| 1 | `cfb` | 0 | 0 | | |
| 2 | `mm` | 8 | 2 | 29 | |
| 3 | `t` | 7 | 1 | 265 | |
| 4 | `mV.run` | 94 | 10 | 289 | |
| 5 | `rW` | 1223 measured; 1229 with `t2Keep` | 57 | 6800 | `t2Keep` 1 site: the callee `C4["run"](` stays computed (V8 reports `o["k"](` at the paren, `o.k(` at `k`) |
| 6 | anonymous wrapper (`rW(C1, C2, C3)`) | 447 | 36 | 3665 | `t4Keep` 1 site: one `return a, b` is not split (T4 adds `return `) |

- 107 of the 4025 names stay short (49 parameters, 53 declarations, 5 others). Each one keeps its original name and gets an inline comment on the declaring identifier, `/* <role>, short: stack column */`; the other 3918 keep `<role>_<orig>`. Named identifier tokens: 21070 before, 19618 after.
- The analyzer reproduced the measured column deltas of the H148 named display (4, 0, 8, 7, 94, 1223, 447) before the fit and 0 excess in both hook modes after it; the gates then confirmed golden by execution.
- Unknown `t2Keep` / `t4Keep` sites, or a `short` key not in the names table, exit 2 (no silent drift).
- Negative control: the H148 named display without the fit serves `34435c47a509/64608` (not golden). The build without `--stack-fit` still gives `a7813eb543fb…`, and the build from the committed fit json gives `d0251937a75e…`.

### H144 measurement (kept for reference)

In display gate mode the H144 display served `876a42f91cf9/64608` (not golden). The proof had four parts:

1. **AST**: `canonOK` holds for every transform, including T2-all, T4 and T5.
2. **Differential execution** (`tools/deob-auto/orch-display-diff-h144.mjs <golden-run> <display-run>`): this decodes both TEA plaintexts and blanks `14.CJkad9`. The remaining 105381 bytes were **byte-identical** (`restEqual: true`). The stack value had the same length (1179) and the same 7 frame ids and lines. Only frames 5 (`rW`, −17, the callee `C4["run"](`) and 6 (the wrapper, +7, growth earlier on the served line) differed, in column only.
3. **colFit**: the display text left 29880 tokens behind their column, against 16546 for the executed text. Of the extra 13334, only those 2 were on the stack that CF samples.
4. H149 fixes both frames (table above).

## Constant folding (H147)

`tools/deob-auto/orch-fold-h147.mjs` holds the proofs; `orch-read-h144.mjs --only T8,T2` applies them on the H144 executed text (T2 then turns the new `x["k"]` keys into `x.k` off call position: 200 sites). Two folds, both decided from the text alone:

- **syn**: `"0123456789" + "abcdef"` → one string literal (2 sites); `false ? 0 : null` → `null` (6 sites).
- **prop** (the obfuscator's string/number tables, for example `Ci = "split"`, `C5 = "length"`, `C9 = 0` at the top of a method): a function-local binding is folded when
  1. its only write is one `=` or initialiser whose value is a string, number, boolean or null literal;
  2. that write sits in a statement directly in the function body (not in a loop, branch, `try` or nested block) and is evaluated unconditionally within it (comma chain, for-init, `a = b = lit`);
  3. every read is textually after the write, in the same function or in a function expression created after it, never inside a (hoisted) function declaration.
  Reads inside a callee, a `new` callee, a spread, a for-of/for-in source or a tagged template are left alone, because V8 prints that source text in TypeError messages. The write itself stays, so the binding layout (and the names table) keeps the same bindings.

| | Count |
|---|---|
| bindings folded | 367 (106 string, 261 number) |
| reads replaced | 1150 |
| refused: not a literal / several writes / write not top-level / only unsafe reads | 3572 / 2012 / 548 / 66 |

Proof and checks:
- `canonOK`: canon applies the same folds to both texts when the run folded (the fold is idempotent, a folded read is no longer a reference). A display built on the already folded file folds nothing and canon skips re-folding, because the proof is not stable under T4/T5 statement splitting.
- `tools/deob-auto/orch-fold-h147-selftest.mjs`: 10 fixtures executed before and after folding in `node:vm`; 4 must fold, 6 must be refused (read before write, conditional write, two writes, hoisted-declaration read, callee read, write in `try`); all give the same result.
- Executed gates: all golden with the folded file served (`orch=True:8eb3b796c619`; `evidence-h147.json`).
- Negative control: the same file with one folded literal changed (`C2.length === 0` → `=== 1` in the VM `run` loop) is served (`applied:true`) and produces no payload (timeout, no OJB).
- Names: the names table is carried to the new binding layout by `orch-names-h146.mjs rekey` (same 9287 bindings, names and lines in crawl order; only columns move).

Not folded: `"…|…"[split]("|")` order tables (29; the result depends on `String.prototype.split`), `void 0` (1114; `undefined` can be shadowed), call keys such as `Iob(2041394597, …)` (VM dispatch), and the few new literal-only expressions the fold exposes (`!0`, `a / b`, `a | b` with literal operands: 7).

## Indirect calls (H148)

H144 kept all 275 `(x, f)(y)` sites whose prefix `x` it could not prove pure. Nearly all come in two obfuscator shapes. `tools/deob-auto/orch-call-h148.mjs` proves and rewrites both. `orch-read-h144.mjs --only T3` applies it after the H144 pass on the H147 executed text.

- **register**: `(R[k], f)(y)` → `f(y)`. `R` is a top-level-slot array literal written once (`R = [...]`). Every other reference to it is `R[n]` with a numeric `n` below the literal's length, as a read or as an assignment or update target. Any other use refuses the binding: a direct `R[k](…)` callee (it would bind `this` to `R`), a `delete` operand, a destructuring target, or any escape. The site is textually after the write and not inside a function declaration, so `R` holds the array when the prefix runs. The read `R[k]` is then a plain array element read with no side effect.
- **box**: `(lit, B[k])(y)` → `E(y)`. `B` meets the register conditions, element `k` of its literal is the identifier `E` and is never written, and `E` is a parameter or hoisted binding with 0 writes. `E` resolves to the same binding at the call site. The callee was already a plain value, so `this` is `undefined` in both forms.
- Program precondition: no `with`, `eval` or `arguments` anywhere.
- Top-level slot (`writeSlot`, shared with `orch-fold-h147.mjs`): a statement directly in the function body, its comma chain or for-init, plus a leading `return`, `if` test or `switch` discriminant chain.
- Columns: V8 reports `(x, f)(y)` at the argument paren and `f(y)` at `f`. The new callee token is therefore anchored at the original argument-paren offset (posmap override, as for H144). The override is checked against the original VM text: for a box callee, the obfuscated index expression is skipped as a balanced bracket.

| | Count |
|---|---|
| indirect calls before | 275 |
| rewritten: register / box | 77 / 44 (106 lines) |
| kept: register holds a detached method (`R[k] = obj.m`) | 135 |
| kept: register set from a call result | 9 |
| kept: conditional write / outer-scope binding / impure prefix | 2 / 1 / 7 |

The 135 detached-method sites stay as `(R[k], f)(y)`: inlining `obj.m` would change `this`, and no shorter sound form exists. Both files keep them.

Proof and checks:
- `canonOK`: when the run rewrote, canon applies `foldCalls` to both texts (the same approach as T8).
- `tools/deob-auto/orch-call-h148-selftest.mjs`: 10 fixtures executed before and after in `node:vm`; 3 must rewrite, 7 must be kept (box element written, box identifier reassigned, box escapes to another function, read in a hoisted declaration before the write, direct `R[k]()` callee, conditional write, `delete` hole); all give the same result.
- Executed gates: all golden with the file served (`orch=True:0336a559f1d4`; `evidence-h148.json`).
- Negative control: the same file with one box callee pointed at the other box element is served (`applied:true`) and produces no payload (see `evidence-h148.json`).
- Names: `orch-names-h146.mjs rekey` keeps the layout `92286323d382…` (4025 names, errors 0); only columns move.

## Local names (H146)

Names come from execution-observed types. `tools/deob-auto/orch-types-h146.mjs` is a diagnostic instrumenter (never part of a gate). It wraps every binding write in the executed file (declarator inits, assignments, parameter entries, catch params) with a type recorder keyed `line:col:name` of the declaring identifier. It records type tags only (`int`, `str`, `obj:<toStringTag>`, arrays with an element tag, …), never values. `run-plain.mjs` dumps the histogram when `RUN_ORCH_TYPES=1` is set (diagnostic hook, off by default). Three runs were recorded: default, headless and canvas_noread.

`tools/deob-auto/orch-names-h146.mjs build` turns the histograms into `tools/deob-auto/out/3158346939/orchestrator-names-h146.json`:

| | Count |
|---|---|
| bindings in the executed file | 9287 |
| observed in at least one run | 4025 |
| named (`<role>_<orig>`) | 4025 |
| skipped: function-valued (left to the role map) | 894 |
| skipped: T1 window alias | 1 |
| skipped: eval/with scopes | 0 |
| skipped: parameters of the hook-signature functions `zT`, `xo`, `onb` | 6 |
| skipped: never written in any run | 4361 |
| distinct roles | 74 |

A role is the observed type, for example `int`, `str`, `obj`, `ints`, `win`, `divEl`, `xhr`, `messageEvt`, `urlSearchParams` or `trustedTypePolicy`. A binding seen with mixed types gets a fallback such as `val`, `num` or `el`.

- **Executed file**: `orch-names-h146.mjs comments` adds comments only. It appends ` // <orig>: <role>, …` to each declaring line (2517 lines; 9 lines skipped because they end inside a multi-line token or already carry a comment). Babel tokens by line:col are unchanged, so the posmap content is unchanged and colFit serves the same bytes (gates below, `orch=True:7d2fe253158b`).
- **Display file**: `orch-read-h144.mjs --names <names.json>` (T7) renames the 4025 bindings first, on the input AST. The canonical check undoes them per binding (`unName`) before it compares. Result: `canonOK` true; `zW` identifier tokens go from 1172 to 411; 2-character identifier tokens go from 33918 to 14750. H149: 107 of the names stay short, with an inline comment, in the stack windows of the CF-sampled frames (`--stack-fit`, see "Display equivalence").
- **Hook signatures**: `tools/chrome-run/page.mjs injectEncryptHooks` matches `function zT(jT,ju,jP){`, `xo=function(jf){` and `function onb(pnb,anb){switch` as text, so those 6 parameters keep their names (`HOOK_FNS`). Without this exemption a renamed text cannot be served at all (`injectEncryptHooks: zT signature missing`).
- **Guard**: `orch-names-h146.mjs check <file> <names.json> [<base>]`. It exits 3 when the binding layout sha (`layoutSha256` = `92286323d382…` since H147 T8; `4a326a6c37e7…` at H146) drifts, and exits 2 on name errors (function-valued, alias or dynamic-scope binding, wrong `<orig>` suffix) or on token drift against the base.
- **Negative control**: the guard exits 3 on a file whose binding layout differs, and a renamed text without the hook-signature exemption fails to serve (see `evidence-h146.json`).

## What remains

- H146 names the 4025 observed locals in the display file (comments in the executed file). Still unnamed: the 4361 bindings that no run writes (411 `zW` tokens remain in the display), plus the function-valued ones covered by the role map. The 144 per-build identifiers (`[A-Za-z]{3,6}\d`) are documented in the role map, not renamed, because they are runtime property names that the VM and the parent page read.
- 154 of the 275 indirect calls `(x, f)(y)` remain in both files (H148 rewrote 121). 135 of them hold a detached method, where a rewrite would change `this`; the rest have a register set from a call, a conditional write or an impure prefix. The display file has 1 string-key member (`C4["run"](`, kept for the frame-5 column) and is golden since H149; 107 locals stay short there for the same reason.
- Constant folding (H147 T8) covers literal locals and literal-only expressions; the split order tables and `void 0` are not folded (see above).
