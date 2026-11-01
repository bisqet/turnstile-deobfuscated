# Payload variability, build 3158346939

Which payload fields are fixed by Cloudflare's code, which come from the server per challenge, which depend on the machine
or browser, and which change on every run. Machine-readable table: `payload/payload-variability.json`
(the inventory rows plus `variability`, `mix`, `basis`, `dims` and per-field evidence flags). No values are stored anywhere in it.

## Classes

| class | meaning |
|---|---|
| A | constant from CF code or the build: literals, VM-decoded tags/config, code paths that read nothing from the environment |
| B | per challenge or session, from the server: `challenge_api` mirrors, `PUUDF8` page info |
| C | per machine or browser environment, stable across runs on one machine; `dims` names the sub-dimension |
| D | changes on every run: Date/performance clocks, async ordering, WebRTC ids, memory/storage numbers |
| E | mixed; `mix` says how (e.g. B + hook/injection, C + run-to-run timing, A that flips when a probe fails) |

`basis`: `diffed` = the class follows from observed changes; `diffed+code-read` = changes observed and the source taken from the
writer; `code-read` = stable in every diff, class from the writer expression (sem.py / inventory `api`); `inferred` = stable in
every diff and the writer reads nothing environment- or clock-like, so A by inference; `rollup(...)` = container, class from children.

## Counts

| scope | fields | A | B | C | D | E |
|---|---|---|---|---|---|---|
| all inventory rows (incl. containers) | 746 | 302 | 51 | 197 | 134 | 62 |
| leaves | 703 | 302 | 51 | 194 | 134 | 22 |
| sent leaves (on the wire) | 615 | 220 | 45 | 194 | 134 | 22 |

Per category, all rows (containers included; a probe container is E whenever it holds an A tag and D timestamps):

| category | rows | A | B | C | D | E | sent leaves A/B/C/D/E |
|---|---|---|---|---|---|---|---|
| env (Probe envelope & bookkeeping) | 358 | 235 | 0 | 0 | 114 | 9 | 156/0/0/114/5 |
| win (Window / global-object inventory) | 66 | 2 | 0 | 61 | 0 | 3 | 2/0/61/0/0 |
| nav (Navigator, UA & client hints) | 63 | 0 | 0 | 61 | 0 | 2 | 0/0/59/0/0 |
| ctx (Challenge context & session state) | 46 | 9 | 31 | 0 | 0 | 6 | 8/25/0/0/6 |
| dom (DOM, document & CSS) | 27 | 17 | 0 | 3 | 0 | 7 | 17/0/3/0/1 |
| page (Page-supplied info (PUUDF8)) | 24 | 0 | 20 | 0 | 0 | 4 | 0/20/0/0/3 |
| worker (Workers & secondary realms) | 23 | 8 | 0 | 8 | 2 | 5 | 7/0/7/2/0 |
| loc (Locale, Intl & timezone) | 20 | 1 | 0 | 17 | 0 | 2 | 1/0/17/0/0 |
| gfx (Canvas & WebGL) | 16 | 0 | 0 | 15 | 0 | 1 | 0/0/15/0/0 |
| dev (Device, display & sensors) | 15 | 3 | 0 | 11 | 0 | 1 | 3/0/11/0/0 |
| font (Fonts & text metrics) | 14 | 3 | 0 | 6 | 3 | 2 | 2/0/6/3/0 |
| stack (Stack / error / devtools fingerprints) | 13 | 6 | 0 | 0 | 1 | 6 | 6/0/0/1/3 |
| media (WebRTC & media) | 11 | 5 | 0 | 1 | 4 | 1 | 5/0/1/4/0 |
| hash (Crypto & audio hashes) | 10 | 6 | 0 | 2 | 0 | 2 | 6/0/2/0/0 |
| net (Network information) | 10 | 0 | 0 | 8 | 0 | 2 | 0/0/8/0/0 |
| perf (Performance & memory) | 10 | 3 | 0 | 0 | 2 | 5 | 3/0/0/2/3 |
| time (Timing & performance clocks) | 8 | 0 | 0 | 0 | 8 | 0 | 0/0/0/8/0 |
| native (Native-function integrity checks) | 7 | 1 | 0 | 4 | 0 | 2 | 1/0/4/0/1 |
| math (JS engine & Math precision) | 5 | 3 | 0 | 0 | 0 | 2 | 3/0/0/0/0 |

## Evidence

All runs are offline replays of the one captured session (`int-plain-1`) in a network namespace; payloads were decoded and reduced
to per-path `[shape, sha1-12]` fingerprints in scratch (`collect.mjs`). Only "changed / not changed" reaches this doc.

- Pinned repeats (default gate: DET + vsched + vclock + INV pins): 19 runs, H142 `cng/*` and `var/default`, H140 `h_default*`/`c_default*`.
  Result: identical on every sent field. (`shadowcmp` differs in 16.FJbU2/MBXf3/ySrtS5, 37.oPxfw0, hbRVt7, but it is an instrumented
  mode, so it is counted as an environment comparison, not a repeat.)
- Unpinned repeats (labels list the sources left free): perf+rand+crypto+sched x6, perf+sched x3, rand+crypto+sched x3, sched x3. The vsched/vclock/INV pins are off in every group.
  A fully unpinned run (real `Date`) is not replayable offline: the captured token is hours old, the VM sees it expired, the
  watchdog reloads and the payload is never built (n=0; tried, see `run-evidence.sh`). So `Date` stays on the DET step clock in all
  groups. Fields driven only by `Date` are D by code-read (STUBS registry), and their offline change comes from async ordering.
- Environment comparisons (37, against the pinned default): timezone, locale, hardwareConcurrency/deviceMemory, UA presets (Windows,
  macOS, Android, headless UA), webdriver flag, hooks (inert/native/stealth/runtime/worker), headless, canvas no-readback, stack limit,
  harness wrappers visible (`opx0`, `det_nostack`). Time-pin variations: cov_ep2, cov_loaf0, cov_st100, cov_st5.
- Code: the writer expression of every row (`payload-inventory/sem.py`), STUBS-3158346939 (timing leaves), HOOK-DIFF-3158346939.
- Not diffable here: B fields (only one replayable session), WebRTC
  ids (the harness SDP munger in `determinism-src.js` rewrites o=/ufrag/pwd/fingerprint/candidates to a fixed PRNG in every DET run,
  and offline there are no ICE candidates), real GPU/fonts/screen/battery/network differences (one box).

## What changes run-to-run without pins

57 sent leaves changed between identical unpinned runs (plus containers, and `1.QVHD7` bucket membership):

- 45 probe envelope timestamps/durations (`N.roTuJ3`, `N.DJme8`, `N.helyQ4`, probes 19-38).
- `NglZ3` (ctx, E): B (server) + C: GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + D: run-to-run; changed in groups: perf+rand+crypto+sched, perf+sched, rand+crypto+sched
- `KHnWz9` (time, D): Date.now() - challenge start at send; changed in groups: perf+rand+crypto+sched, perf+sched, rand+crypto+sched, sched
- `oYcq1` (ctx, E): B (server) + D: run-to-run; changed in groups: perf+rand+crypto+sched, perf+sched
- `1.ljuV6.IhAY8` (perf, E): B (server) + D: run-to-run; changed in groups: rand+crypto+sched
- `1.ljuV6.sEDO2` (perf, E): B (server) + D: run-to-run; changed in groups: rand+crypto+sched
- `8.vbrE9` (dom, E): C + D: run-to-run (perf+rand+crypto+sched); changed in groups: perf+rand+crypto+sched
- `14.CJkad9` (stack, E): C: engine setting (stack limit), hook/injection + D: run-to-run (perf+rand+crypto+sched, rand+crypto+sched); changed in groups: perf+rand+crypto+sched, rand+crypto+sched
- `19.AfnB3` (perf, E): C + D: run-to-run (perf+rand+crypto+sched, perf+sched); changed in groups: perf+rand+crypto+sched, perf+sched
- `27.vxrRf4` (native, E): C + D: run-to-run (perf+rand+crypto+sched, perf+sched); changed in groups: perf+rand+crypto+sched, perf+sched
- `31.BnDgz6` (perf, D): performance.mark/getEntries timings; changed in groups: perf+rand+crypto+sched, perf+sched
- `36.PABx8` (worker, D): StorageManager estimate number; changed in groups: perf+rand+crypto+sched, perf+sched
- `37.QAlM4` (stack, D): writer: array; changed in groups: perf+rand+crypto+sched, perf+sched
- `1.QVHD7` (container): the set of global names per value bucket changes between runs (some keys appear or disappear between runs).

Pinned repeats change nothing, which confirms that the gate pins (STUBS) cover every run-to-run source the replay can reach.
Fields that are D by code but did not move offline: probes 1-18 envelope times (on the step clock they ran
before any async work could reorder them), `nYPYj0` (all 8 perf deltas read 0 offline), `LJfS7`/`XLyWr5`/`BVMeN7`/`FQob1`, `21.HkyLT5`, the font timing lists,
`19.PaVB6`, and the WebRTC SDP/candidates (masked by the harness).

## Environment dimensions (class C and the C part of E)

| dimension (diffed) | sent leaves that changed |
|---|---|
| browser mode/GPU (headless) | 20: `NglZ3`, `1.QVHD7.<v31>`, `1.QVHD7.<v34>`, `2.yAui9.ynPml0`, `16.MBXf3`, `16.ySrtS5`, `16.FXpXv1`, `16.CNRnh6`, `16.wsksA3`, `16.AvIxy5`, `16.nardr7`, `16.oXlug7`, `16.GqCeX8`, `16.FJbU2` ... |
| browser mode/GPU (headless) + harness wrappers visible | 18: `1.QVHD7.<v31>`, `1.QVHD7.<v34>`, `2.yAui9.ynPml0`, `16.CNRnh6`, `16.wsksA3`, `16.nardr7`, `16.oXlug7`, `16.GqCeX8`, `16.FJbU2`, `16.NBcX0`, `16.Ooyv2`, `16.pUHnB0`, `27.rLrku6`, `27.XEUHT5` ... |
| GPU/canvas readback + harness wrappers visible | 15: `NglZ3`, `16.MBXf3`, `16.ySrtS5`, `16.FXpXv1`, `16.AvIxy5`, `16.FJbU2`, `27.rLrku6`, `27.XEUHT5`, `27.hRxVQ2`, `37.TsnFY8`, `37.agmL8`, `37.oPxfw0`, `38.kYpkN9`, `38.zzVN3` ... |
| hook/injection | 12: `kNTL3`, `1.QVHD7.<v01>`, `1.QVHD7.N`, `1.QVHD7.<v27>`, `1.QVHD7.<v52>`, `9.vWNIm6`, `14.CJkad9`, `24.cDAn9`, `24.QsDgu4`, `24.rxAT4`, `27.rLrku6`, `27.XEUHT5` |
| GPU/canvas readback | 9: `NglZ3`, `16.MBXf3`, `16.ySrtS5`, `16.FXpXv1`, `16.AvIxy5`, `16.FJbU2`, `38.kYpkN9`, `38.zzVN3`, `38.hMYS1` |
| UA/OS preset | 9: `1.QVHD7.<v31>`, `1.QVHD7.<v32>`, `1.QVHD7.<v34>`, `2.yAui9.ynPml0`, `30.StrX9.architecture`, `30.StrX9.bitness`, `30.StrX9.brands`, `30.StrX9.fullVersionList`, `30.StrX9.platform` |
| timezone | 9: `1.QVHD7.<v43>`, `17.EMpz5`, `17.dIpt2`, `17.rasgK1`, `17.WPxvo5`, `17.mYkI7`, `17.tBoxI9`, `17.aNGs5`, `29.UnMvf4` |
| UA (headless UA string) | 8: `1.QVHD7.<v31>`, `1.QVHD7.<v34>`, `2.yAui9.ynPml0`, `30.StrX9.architecture`, `30.StrX9.bitness`, `30.StrX9.brands`, `30.StrX9.fullVersionList`, `30.StrX9.platform` |
| hook/injection (harness wrappers visible) | 6: `27.rLrku6`, `27.XEUHT5`, `27.hRxVQ2`, `37.TsnFY8`, `37.agmL8`, `37.oPxfw0` |
| harness instrumentation (shadow-compare) | 5: `hbRVt7`, `16.MBXf3`, `16.ySrtS5`, `16.FJbU2`, `37.oPxfw0` |
| locale | 4: `29.fBVa5`, `29.UnMvf4`, `29.CrRYD0`, `29.tvDL8` |
| hardware (cores/memory) | 3: `1.QVHD7.<v05>`, `1.QVHD7.<v09>`, `2.yAui9.NyGWL0` |
| engine setting (stack limit) | 2: `poav7`, `14.CJkad9` |
| automation (webdriver flag) | 2: `1.QVHD7.F`, `1.QVHD7.T` |

C by code-read only (the box could not vary these): browser build + automation/injection globals (48), keyboard layout (OS) (48), network (8), display/media queries (6), locale (5), installed fonts (5), UA/OS preset (4), battery (device state) (4), worker navigator (UA/hardware) (3), timezone (2), GPU/driver/WebGL (2), audio stack/CPU (2), profile (notification permission) (1), browser build (plugins list) (1), screen/fonts/DPI (1), browser build / fonts (1), browser build/codecs (1), browser build (CSS) (1), permissions/gamepads (profile) (1), hardware/worker (1), storage quota (disk) (1).

## Notable fields per class

- **A**: probe envelope tags and config (`N.tlwi7`, `N.rhUgi8`, status `N.kYpkN9`/`N.zzVN3`), literals `XNWt6`, `zJHo8`, `xAiT8`,
  `26.DlXb5`, status-tag strings, `22.QsQH7` (Math results on fixed inputs; fixed for one V8 build and platform libm, so it moves
  only across browser versions/CPU arch), `3.bmma1`/`bmma1`, SHA-256 digests `18.*` (stable under every variation), DOM/document checks
  in probes 9, 13, 28, 32, and the not-sent function/undefined slots (`N.ExHMy4`, `N.SvnXY5`, `YsxeV5`, `RkOO5`, `YFZTc5`, ...).
- **B**: the `challenge_api` mirrors (`gOeQ5`, `dXXrN6`, `mTMKo9`, `wIgH5`, `TRcGA3`, `FvhZ6`, `WqCj2`, `ZMiod6` and the
  same-name members `rSsJJ7` ... `KrzP4`), 20 `24.*` PUUDF8 page-info members. All code-read: one session only.
- **C**: `1.QVHD7.*` window-global buckets (UA, headless, webdriver, hook, hardware, timezone), `2.yAui9.*` worker navigator,
  `7.akeLU4.*` keyboard layout (empty in headless), `30.StrX9.*` client hints, `16.*` WebGL/canvas, `17.*` timezone history,
  `29.*` Intl/locale, `jsEAj2`, `tSdur1`, `ADqih3`, `27.XEUHT5`/`27.rLrku6`/`27.hRxVQ2`/`kNTL3`/`9.vWNIm6` (hook and
  injection detectors), fonts `10.*`, media queries/battery `26.*`, network `33.*`, audio `35.fSUn1`/`35.UYeq7`.
- **D**: envelope `N.roTuJ3`/`N.DJme8`/`N.helyQ4`, `KHnWz9`, `nYPYj0`, `LJfS7`, `XLyWr5`, `BVMeN7`, `FQob1`, `21.HkyLT5`,
  `21.DFHHz4`/`21.ulnsR4`/`21.AQTO7` (SDP and ICE ids), `21.oqKIN4`, `31.BnDgz6`, `36.PABx8`, `37.QAlM4`, `19.PaVB6`, `10.sibaD1`/`10.uoBG2`.
- **E**: `NglZ3` and `oYcq1` (`challenge_api` mirrors that the orchestrator rewrites at run time: they change between identical
  runs, and NglZ3 also with canvas/headless), `24.cDAn9`/`24.QsDgu4`/`24.rxAT4` (server page plus any injected script),
  `14.CJkad9` (stack columns: injection, stack limit, and async ordering), `27.vxrRf4` and `19.AfnB3` (per-function/per-check lists:
  browser build plus perf timings), `8.vbrE9` (1 of 120 entries moved between runs), `1.ljuV6.IhAY8`/`sEDO2` (served page body size,
  moved offline), `38.kYpkN9`/`38.zzVN3`/`38.hMYS1`, `37.TsnFY8`/`37.agmL8`, `poav7` (A until a probe takes another path),
  serialized state strings `RdXW8`, `rXsMy3`, `pAFSo0` (session plus run; code-read).

## Reproduce

```
sh tools/deob-auto/payload-variability/run-evidence.sh     # offline runs -> $S/pvar, collect, classify
python3 tools/deob-auto/payload-variability/render.py      # this doc
```

`SKIP_RUNS=1` reuses the scratch captures. The classifier's code-read tables (`ENV_A`, `ENV_D`, `B_CHAL`, `D_CODE`, `C_CODE`,
`A_CODE`) sit at the top of `classify.py`. Diff evidence overrides them: a code-read A or C that moved between identical runs
becomes E, and a B that moved with the environment becomes E.
