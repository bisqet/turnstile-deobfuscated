import { Page, Section, Text, Table, Bars, Select, Toggle, Input, Segmented, Button, Grid, Properties, Callout, TableOfContents, useState, useMemo } from "./components";

type Row = { path: string; cat: number; cls: string; basis: number; sent: boolean; cont: boolean; plain: number; hook: boolean; why: number; rr: string; order: number };
type Cell = string | { text: string; tone: "warning" };

const CATS: [string, string][] = [["win", "Window / global-object inventory"], ["worker", "Workers & secondary realms"], ["math", "JS engine & Math precision"], ["env", "Probe envelope & bookkeeping"], ["nav", "Navigator, UA & client hints"], ["dom", "DOM, document & CSS"], ["font", "Fonts & text metrics"], ["net", "Network information"], ["stack", "Stack / error / devtools fingerprints"], ["gfx", "Canvas & WebGL"], ["loc", "Locale, Intl & timezone"], ["hash", "Crypto & audio hashes"], ["perf", "Performance & memory"], ["media", "WebRTC & media"], ["page", "Page-supplied info (PUUDF8)"], ["dev", "Device, display & sensors"], ["native", "Native-function integrity checks"], ["ctx", "Challenge context & session state"], ["time", "Timing & performance clocks"]];

const CLS: [string, string, string][] = [
  ["A", "Constant from CF code", "Same on every machine and every run for this build: literals, VM constants, results of fixed computations."],
  ["B", "Per challenge (server)", "Mirrored from the challenge object or page info the server sends; changes per challenge, not per machine."],
  ["C", "Per machine / environment", "Depends on browser build, OS, GPU, fonts, locale, timezone, hardware, hooks; stable across runs on one machine."],
  ["D", "Changes every run", "Clocks, durations, random ids; differs between two identical runs on the same machine."],
  ["E", "Mixed", "Combination of the above (e.g. A by default but changes under a hook; or C plus run-to-run noise)."],
];

const BAS = ["diffed", "diffed + code-read", "code-read", "inferred", "rollup"];

const RRL: Record<string, string> = {
  a: "Date-only pinned (perf, rand, crypto, scheduling free)",
  p: "perf + scheduling free",
  r: "rand + crypto + scheduling free",
  s: "scheduling free only",
};
const RRS: Record<string, string> = { a: "Date only", p: "perf", r: "rand/crypto", s: "sched" };

const W: string[] = [
"Probe 1 result: window own-property inventory and iframe-realm checks",
"container of A:6, D:3, E:2",
"Probe 2: a dedicated Worker posts a result object back",
"container of A:7, C:1, D:3",
"Probe 3: eval/global-this consistency and a runtime number",
"container of A:7, D:3",
"Probe 4: fetch + Worker round trip",
"Probe 5: fetch of a URL derived from document.baseURI, posted to a Worker, timed",
"container of A:9, D:4",
"Probe 6: envelope only (no result keys)",
"container of A:6, D:3",
"Probe 7: keyboard layout map and language",
"container of A:6, C:2, D:3",
"Probe 8: DOM element behaviour battery (DOMParser, shadow DOM, input/select/textarea, events, iframe srcdoc, Trusted Types)",
"container of A:7, D:3, E:1",
"Probe 9: <html> attributes, plugins and body checks",
"container of A:9, C:2, D:3",
"Probe 10: font availability and text-width timing (FontFace, canvas measureText, span)",
"container of A:9, C:5, D:6",
"Probe 11: envelope only (no result keys)",
"Probe 12: promise-result string",
"Probe 13: image/link load behaviour and connection info",
"container of A:11, C:2, D:3",
"Probe 14: call-stack fingerprint",
"container of A:6, D:3, E:1",
"Probe 15: element geometry via styled divs and getBoundingClientRect (map label: speechSynthesis.getVoices)",
"container of A:6, C:1, D:3",
"Probe 16: WebGL parameters and canvas image-data samples",
"container of A:6, C:15, D:3",
"Probe 17: historical timezone offsets and Date behaviour",
"container of A:6, C:8, D:3",
"Probe 18: four SHA-256 digests",
"container of A:10, D:3",
"Probe 19: performance.memory, Trusted Types policy, script nonce, iframe srcdoc checks",
"container of A:10, D:4, E:1",
"Probe 20: computed style map of <html>, document.write into an iframe, TextEncoder",
"Probe 21: WebRTC offer/ICE gathering and media capabilities",
"container of A:11, C:1, D:8",
"Probe 22: Math function precision (map label: performance.getEntries; the code uses Math only)",
"Probe 23: stylesheet/CSS rule scan",
"Probe 24: page info supplied by the challenge page/orchestrator (PUUDF8.pi, PUUDF8['pg.ref'])",
"container of A:6, B:20, D:3, E:3",
"Probe 25: envelope only (no result keys)",
"Probe 26: media queries, navigation type, referrer, battery, permissions, gamepads",
"container of A:11, C:11, D:3",
"Probe 27: integrity checks on native browser functions (map label: OfflineAudioContext.startRendering)",
"container of A:7, C:3, D:3, E:1",
"Probe 28: window.name, forms/images/links/title, cookie presence",
"Probe 29: languages and Intl formatting",
"container of A:7, C:7, D:3",
"Probe 30: high-entropy client hints",
"Probe 31: performance.mark and getEntries",
"container of A:6, D:4",
"Probe 32: CSS rule insertion and element queries",
"Probe 33: Network Information API",
"container of A:6, C:6, D:3",
"Probe 34: Worker message round trip",
"Probe 35: audio rendering hashed with SHA-256",
"container of A:8, C:2, D:3",
"Probe 36: Worker from a Blob URL plus StorageManager estimate/getDirectory",
"container of A:8, C:2, D:4",
"Probe 37: console/devtools, Proxy, Error and toString traps, iframe realm",
"container of A:13, D:4, E:3",
"Probe 38: DOMException behaviour",
"container of A:4, D:3, E:3",
"Challenge configuration string mirrored from the host challenge object (sitekey/config related)",
"challenge object from the server",
"Challenge request identifier (16 chars) mirrored from the challenge object",
"Challenge-object member (1 char)",
"Constant 0",
"literal 0",
"Constant 5-char tag literal",
"literal tag",
"Elapsed time between two challenge timestamps",
"difference of two client timestamps stored on challenge_api",
"Elapsed time since challenge start",
"elapsed since challenge start (Date)",
"Elapsed time since challenge start (second copy)",
"elapsed since challenge start (Date), second copy",
"Challenge-object member string (10 chars)",
"Large serialized state string (~2.2 kB)",
"serialized VM/challenge state (session + run)",
"8 timing numbers derived from performance.now()",
"8 performance.now() deltas / all 8 entries read 0 in the offline replay; performance.now() deltas by code-read (STUBS)",
"Constant 1 or the host value WqCj2",
"Challenge-object member mirrored into the payload",
"Timezone name",
"timezone",
"Locale-formatted string",
"locale",
"difference of two client timestamps on challenge_api",
"User-Agent string",
"UA/OS preset",
"1-entry list returned by helper HNiY8()",
"A by default; changes with engine setting (stack limit)",
"4-entry list mirrored from the challenge object",
"B (server) + C: GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + D: run-to-run",
"Function slot; skipped by the serializer (not sent)",
"not sent (function / undefined slot)",
"6-char string from helper s5(jL)",
"stable in every diff; writer not an env/clock reader",
"attachShadow toString check plus Node constants (85 chars); changes under the native hook",
"hook/injection; diffed: hook/injection",
"Placeholder slot; differs between identical runs (run noise)",
"not sent (function / undefined slot) / slot content differs between identical runs (STUBS run noise) but it is never serialized",
"Worker slot (undefined in the reference run, skipped)",
"Runtime number from probe 3 (copy of 3.bmma1)",
"copy of 3.bmma1",
"Probe aggregate array (empty in the reference run)",
"Serialized state string (~1.4 kB)",
"43-char result string",
"Serialized state string (426 chars)",
"Runtime number",
"Array of 34 probe outputs/status codes",
"A by default; changes with harness instrumentation (shadow-compare)",
"Host value TRcGA3 (6 chars)",
"Slot (undefined, skipped)",
"literal",
"Literal or host tag number",
"Keys of challenge_api.TglCI7 (5 chars)",
"Total elapsed time at send",
"Date.now() - challenge start at send",
"2-key object from helper df(sN(zW))",
"2-entry list from helper W(challenge_api)",
"B (server) + D: run-to-run",
"Probe tag string, decoded from a VM constant; identifies the probe slot",
"probe envelope literal/VM constant",
"Probe config blob (JSON text) decoded from a VM constant",
"Envelope status number (state of the probe run)",
"Envelope status/error string (empty when the probe succeeded)",
"Index of the window object's own property names, grouped by value or type tag: {tag:[names]}. Detects extra/missing globals (automation, injection)",
"children C:60 + D: key set/membership changes run-to-run",
"Checks run inside a fresh same-origin iframe realm",
"container of A:2, C:1, D:1, E:2",
"Probe start time",
"Date.now() envelope (STUBS registry)",
"Probe end time",
"Probe duration in ms",
"The probe executor closure; functions are skipped by the serializer (not sent)",
"Start-time slot; copied into roTuJ3, sent as undefined (skipped)",
"One bucket of the window-property index: the list of global names sharing one value or type tag (key is a <vNN> placeholder or a one-letter tag)",
"browser build + automation/injection globals; diffed: hook/injection",
"browser build + automation/injection globals",
"browser build + automation/injection globals; diffed: hardware (cores/memory)",
"browser build + automation/injection globals; diffed: automation (webdriver flag)",
"browser build + automation/injection globals; diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"browser build + automation/injection globals; diffed: UA/OS preset",
"browser build + automation/injection globals; diffed: timezone",
"Boolean result of an iframe document check function",
"Is the iframe realm a secure context",
"Notification permission state",
"profile (notification permission)",
"Navigation-timing delta computed at the write site",
"navigation-timing delta",
"Decoded body size of the navigation entry",
"Encoded body size of the navigation entry",
"Worker-result status flag (0 when the expected reply arrived)",
"Object received from the Worker (MessageEvent.data, a structured clone)",
"container; class rolled up from 5 children; diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"Member of the Worker reply; built inside the worker realm (writer not traced in the main realm)",
"worker navigator (UA/hardware)",
"worker navigator (UA/hardware); diffed: hardware (cores/memory)",
"worker navigator (UA/hardware); diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"Number returned by a probe closure; also copied to top-level bmma1 and compared with 21 by probe 27",
"probe-3 closure number",
"Probe-4 progress/status string literal",
"Envelope extra/status string or counter",
"Probe-5 result string (64 chars, hex-like)",
"Probe-5 second result string",
"Probe-5 counter computed at the write site",
"counter computed while fetch/worker round trip runs",
"Lower-cased language/locale string",
"Keyboard layout map: physical key code -> character (48 keys)",
"container; class rolled up from 48 children; diffed: browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"Character produced by this physical key in the current layout",
"keyboard layout (OS)",
"Probe-8 status tag string literal",
"List of 120 DOM/element behaviour check results (map label says canvas getImageData; the writer's APIs are DOM element behaviour)",
"C + D: run-to-run (perf+rand+crypto+sched)",
"Probe-9 status tag string literal",
"Attribute list of the <html> element (grows when an extension/hook adds attributes)",
"extensions/hook (<html> attributes); diffed: hook/injection",
"List derived from navigator.plugins",
"browser build (plugins list)",
"List derived from document.body",
"Boolean result of a probe-9 closure",
"Small result list built in the font probe",
"installed fonts",
"Count of matched items in the font probe",
"Sorted list of detected fonts",
"Length of the detected-font list",
"Font-probe tag string",
"Font-probe promise result string (64 chars)",
"Font-probe flag",
"Timing list A of the font probe (65 entries)",
"Date.now()-based font timing list",
"Timing list B of the font probe (66 entries)",
"Timing list C of the font probe",
"font timing list",
"Field copied from a list entry (undefined in the reference run)",
"String produced by a promise chain (stored once, guarded by a flag)",
"First argument of the image probe as a string",
"Second argument of the image probe as a string",
"Effective connection type",
"network",
"Online flag as a string",
"Image complete flag as a string",
"Natural width of a created image",
"Sliced result string of the image probe",
"Error().stack text: 7 frames with line:column. Columns move when anything is injected into the page scripts",
"C: engine setting (stack limit), hook/injection + D: run-to-run (perf+rand+crypto+sched, rand+crypto+sched)",
"10-slot list of measurement results (DOMRect left/right/top of styled elements)",
"screen/fonts/DPI",
"WebGL collector status string",
"GPU/driver/WebGL; diffed: GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless), harness instrumentation (shadow-compare)",
"Same status value as MBXf3, second copy",
"Canvas image-data samples A",
"GPU/driver/WebGL; diffed: GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless)",
"WebGL VENDOR/RENDERER (and unmasked) parameter pairs; a status string when unavailable",
"GPU/driver/WebGL; diffed: browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"WebGL result slot (status string when WebGL works, array of values when the slot falls back)",
"GPU/driver/WebGL",
"Canvas image-data samples B",
"WebGL parameter block",
"WebGL extension and shader-precision block",
"Canvas image-data samples C (11 entries)",
"GPU/driver/WebGL; diffed: GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless), browser mode/GPU (headless) + harness wrappers visible",
"Result of a Date helper for a fixed historical year",
"timezone; diffed: timezone",
"Result of the same Date helper for a computed argument",
"Number from a second Date helper",
"Current timezone offset in minutes",
"Timezone-related string",
"SHA-256 hex digest (64 chars), one of four Promise.all results",
"Negated availability flag",
"List of 18 probe-19 check results",
"C + D: run-to-run (perf+rand+crypto+sched, perf+sched)",
"Probe-19 status tag string literal",
"Number collected by probe 19 (memory/timing)",
"performance.memory / timing number",
"Negated flag",
"Computed-style / iframe result object",
"browser build / fonts",
"32-char substring of a computed digest/serialization",
"Probe-21 status tag string literal",
"Media capability/codec list",
"browser build/codecs",
"ICE candidate list",
"ICE candidates (mDNS host names, ports) / harness SDP munger; empty offline (no network interfaces)",
"WebRTC flag",
"SDP text of the generated offer (largest string field, about 6.4 kB)",
"SDP offer: random session id, ICE ufrag/pwd, DTLS fingerprint / harness SDP munger (determinism-src.js) rewrites o=/ufrag/pwd/fingerprint/candidates to fixed values",
"List of 4 parsed SDP/candidate items",
"parsed SDP/candidate items / harness SDP munger",
"WebRTC counter",
"WebRTC object slot",
"Elapsed time of ICE gathering",
"ICE gathering elapsed (Date)",
"ICE gathering state",
"ICE gathering state races the clock (gathering vs complete) / pinned to 'complete' by the harness (H116)",
"Results of Math functions/constants (hypot, exp, log, pow, sqrt, LN2 ...) that differ between JS engines/CPUs",
"Math on fixed inputs: fixed for a V8 build + platform libm (changes only across browser versions/CPU arch)",
"Concatenated stylesheet-derived string (74 chars)",
"browser build (CSS)",
"32-char substring of a digest",
"Page referrer string (empty when none)",
"PUUDF8 page info (server page + injected scripts)",
"A member of the page-info object PUUDF8.pi (computed outside stage2; origin not traced)",
"Page fingerprint string; changes with injected scripts and the loud hook",
"B (server) + C: hook/injection",
"Script-length counter; changes with any injected script",
"Second script-length/count number; changes with any injected script",
"Media query result",
"display/media queries",
"Feature-detect boolean",
"Navigation type (navigate/reload/back_forward)",
"Document referrer",
"List of 8 permission/feature states",
"permissions/gamepads (profile)",
"Boolean literal false",
"literal false",
"Battery charging",
"battery (device state)",
"Battery charging time",
"Battery discharging time",
"Battery level",
"JSON text of a collected list",
"Small (2-entry) result list of probe 27",
"Names failing shape checks: .arguments access, prototype===undefined, own names 'length,name' (C3-C5). Catches stealth patches",
"hook/injection; diffed: GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + harness wrappers visible, hook/injection",
"Names failing toString checks for '[native code]' (C1, C2, C7, C9). Catches loud hooks; grows ~9.4 kB under the native hook",
"Per-function check output list (130 entries), one per tested native function",
"hook/injection; diffed: GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + harness wrappers visible, hook/injection (harness wrappers)",
"Second per-function list (186 entries)",
"window.name",
"List of 4 document collection checks (forms/images/links)",
"List of 6 document checks",
"Boolean: a counted collection is non-empty",
"Probe-29 status tag string",
"Preferred languages",
"List produced by a locale helper",
"locale; diffed: locale",
"Member of a locale object",
"Fixed date formatted with DateTimeFormat",
"locale; diffed: locale, timezone",
"Display name of a fixed locale code",
"ListFormat output for a fixed list",
"NumberFormat output for a fixed large number",
"NavigatorUAData.getHighEntropyValues() result dictionary",
"container; class rolled up from 8 children; diffed: UA (headless UA string), UA/OS preset",
"Client-hint value with this standard dictionary name",
"UA/OS preset; diffed: UA (headless UA string), UA/OS preset",
"List of 10 performance entries/marks summary",
"performance.mark/getEntries timings",
"String accumulated from CSS/DOM checks (28 chars)",
"Downlink estimate",
"Maximum downlink",
"Round-trip time estimate",
"Data-saver flag",
"Another connection property (computed name)",
"Worker-probe status number",
"Audio-render digest (64 chars; a status literal when audio fails)",
"audio stack/CPU",
"Second audio-render digest (64 chars)",
"Audio flag",
"Worker started/succeeded flag",
"Number reported by the worker",
"hardware/worker",
"Worker blob callback ran",
"Storage-related object from the worker (path not executed offline)",
"storage quota (disk)",
"Storage-related number from the worker (path not executed offline)",
"StorageManager estimate number",
"Number from the devtools/console probe",
"List of 2 check results",
"List of 12 check results (Error name/message/stack, toString)",
"List of 6 results",
"Status tag string literal",
"A by default; changes with GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + harness wrappers visible, hook/injection (harness wrappers)",
"List of 4 results",
"writer: array",
"List of 90 results built by a document callback (concat)",
"A by default; changes with GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless) + harness wrappers visible, harness instrumentation (shadow-compare)",
"Object slot",
"String copied by a callback",
"A by default; changes with GPU/canvas readback, GPU/canvas readback + harness wrappers visible, browser mode/GPU (headless)",
"String returned by a probe closure (DOMException-related)",
];

// Probe-envelope rows are generated: 9 keys per probe with fixed classification.
const ENV: [string, string][] = [["tlwi7", "3|A|2|1|0|125|0|126"], ["rhUgi8", "3|A|2|1|0|127|0|126"], ["kYpkN9", "3|A|2|1|0|128|0|126"], ["zzVN3", "3|A|2|1|0|129|0|126"], ["roTuJ3", "3|D|2|1|0|134|0|135"], ["DJme8", "3|D|2|1|0|136|0|135"], ["helyQ4", "3|D|2|1|0|137|0|135"], ["ExHMy4", "3|A|2|0|0|138|0|98"], ["SvnXY5", "3|A|2|0|0|139|0|98"]];
// Unpinned run-to-run movers among roTuJ3,DJme8,helyQ4 per probe (basis becomes diffed).
const ENVRR = "19:,p,p 20:p,p, 21:p,p, 22:p,p, 23:p,p, 24:p,p, 25:p,p, 26:p,ap,a 27:ap,ap, 28:ap,ap, 29:ap,ap, 30:ap,ap, 31:ap,ap, 32:ap,ap, 33:ap,ap, 34:ap,aps,as 35:aps,aprs,rs 36:aprs,aprs,a 37:aprs,aprs,pr 38:aprs,aprs,";
const QV = "<v02> <v03> <v04> <v06> <v07> <v08> <v10> <v11> <v12> <v13> <v14> <v15> <v16> <v17> <v18> <v19> <v20> <v21> <v22> <v23> o x <v24> u C <v25> <v26> <v28> <v29> <v30> <v33> <v35> <v36> <v37> <v38> <v39> <v40> <v41> s <v42> <v44> <v45> <v46> <v47> <v48> <v49> <v50> <v51>";
const KB = "KeyK KeyG Digit2 Digit0 KeyV KeyA Backquote KeyL IntlBackslash Quote KeyW Digit8 KeyM KeyH Period Digit7 Digit1 KeyP KeyD KeyF KeyO KeyQ KeyC KeyN BracketLeft KeyZ KeyY Digit3 Digit6 Digit5 KeyX Slash Backslash Comma Minus Digit4 KeyB KeyT Digit9 KeyS KeyI KeyU Equal KeyJ Semicolon KeyR BracketRight KeyE";

// path|cat|class|basis|sent|container|meaning|hook|why|runToRun
const RAW = `1|0|E|4|1|1|0|1|1|ar
2|1|E|4|1|1|2|1|3|
3|2|E|4|1|1|4|0|5|
4|1|E|4|1|1|6|0|5|
5|1|E|4|1|1|7|0|8|
6|3|E|4|1|1|9|0|10|
7|4|E|4|1|1|11|1|12|
8|5|E|4|1|1|13|0|14|a
9|5|E|4|1|1|15|1|16|
10|6|E|4|1|1|17|0|18|
11|3|E|4|1|1|19|0|10|
12|3|E|4|1|1|20|0|5|
13|7|E|4|1|1|21|0|22|
14|8|E|4|1|1|23|1|24|ar
15|6|E|4|1|1|25|0|26|
16|9|E|4|1|1|27|1|28|
17|10|E|4|1|1|29|0|30|
18|11|E|4|1|1|31|0|32|
19|12|E|4|1|1|33|0|34|ap
20|5|E|4|1|1|35|0|3|p
21|13|E|4|1|1|36|0|37|p
22|2|E|4|1|1|38|0|5|p
23|5|E|4|1|1|39|0|3|p
24|14|E|4|1|1|40|1|41|p
25|3|E|4|1|1|42|0|10|p
26|15|E|4|1|1|43|0|44|ap
27|16|E|4|1|1|45|1|46|ap
28|5|E|4|1|1|47|0|32|ap
29|10|E|4|1|1|48|0|49|ap
30|4|E|4|1|1|50|1|26|ap
31|12|E|4|1|1|51|0|52|ap
32|5|E|4|1|1|53|0|5|ap
33|7|E|4|1|1|54|0|55|ap
34|1|E|4|1|1|56|0|5|aps
35|11|E|4|1|1|57|0|58|aprs
36|1|E|4|1|1|59|0|60|aprs
37|8|E|4|1|1|61|1|62|aprs
38|8|E|4|1|1|63|0|64|aprs
gOeQ5|17|B|2|1|0|65|0|66|
dXXrN6|17|B|2|1|0|67|0|66|
mTMKo9|17|B|2|1|0|68|0|66|
XNWt6|17|A|2|1|0|69|0|70|
zJHo8|17|A|2|1|0|69|0|70|
xAiT8|17|A|2|1|0|71|0|72|
LJfS7|18|D|2|1|0|73|0|74|
XLyWr5|18|D|2|1|0|75|0|76|
BVMeN7|18|D|2|1|0|77|0|78|
wIgH5|17|B|2|1|0|79|0|66|
RdXW8|17|E|2|1|0|80|0|81|
nYPYj0|18|D|2|1|0|82|0|83|
WqCj2|17|B|2|1|0|84|0|66|
nYuU0|17|B|2|0|0|85|0|66|
BhiO6|17|B|2|0|0|85|0|66|
rSsJJ7|17|B|2|1|0|85|0|66|
jsEAj2|10|C|2|1|0|86|0|87|
nKrLC7|17|B|2|0|0|85|0|66|
drtu3|17|B|2|0|0|85|0|66|
PRRQy7|17|B|2|0|0|85|0|66|
LoBqb5|17|B|2|1|0|85|0|66|
NMKgh2|17|B|2|1|0|85|0|66|
tSdur1|10|C|2|1|0|88|0|89|
iGOc7|17|B|2|1|0|85|0|66|
ycoM7|17|B|2|1|0|85|0|66|
PjiLU5|17|B|2|1|0|85|0|66|
IPxZq4|17|B|2|1|0|85|0|66|
IojGh8|17|B|2|1|0|85|0|66|
KfZx1|17|B|2|1|0|85|0|66|
Vyfp9|17|B|2|1|0|85|0|66|
NnhK2|17|B|2|1|0|85|0|66|
yvOQ6|17|B|2|1|0|85|0|66|
nnBgq6|17|B|2|1|0|85|0|66|
EezHv7|17|B|2|1|0|85|0|66|
PyAqD0|17|B|2|1|0|85|0|66|
LIveY7|17|B|2|1|0|85|0|66|
FQob1|18|D|2|1|0|73|0|90|
KrzP4|17|B|2|1|0|85|0|66|
ADqih3|4|C|2|1|0|91|0|92|
poav7|17|E|0|1|0|93|0|94|
cIEZ9|17|B|2|0|0|85|0|66|
NglZ3|17|E|1|1|0|95|0|96|apr
YsxeV5|3|A|2|0|0|97|0|98|
tgVOo4|17|A|3|1|0|99|0|100|
kNTL3|16|C|0|1|0|101|1|102|
YFZTc5|3|A|2|0|0|103|0|104|
WdGLU4|1|A|2|0|0|105|0|98|
RkOO5|3|A|2|0|0|97|0|98|
bmma1|2|A|2|1|0|106|0|107|
TwoO6|3|A|3|1|0|108|0|100|
rXsMy3|17|E|2|1|0|109|0|81|
pnUb9|17|A|3|1|0|110|0|100|
pAFSo0|17|E|2|1|0|111|0|81|
cWAH0|17|A|3|1|0|112|0|100|
hbRVt7|3|E|0|1|0|113|0|114|
TRcGA3|17|B|2|1|0|115|0|66|
yGdKz7|17|A|2|0|0|116|0|117|
ZMiod6|17|B|2|1|0|118|0|66|
FvhZ6|17|B|2|1|0|119|0|66|
fXiPQ1|17|A|3|1|0|112|0|100|
KHnWz9|18|D|0|1|0|120|0|121|aprs
GesyF4|17|A|3|1|0|122|0|100|
oYcq1|17|E|1|1|0|123|0|124|ap
1.QVHD7|0|E|4|1|1|130|1|131|ar
1.ljuV6|0|E|4|1|1|132|0|133|r
1.QVHD7.<v01>|0|C|0|1|0|140|1|141|
1.QVHD7.<v05>|0|C|0|1|0|140|0|143|
1.QVHD7.<v09>|0|C|0|1|0|140|0|143|
1.QVHD7.F|0|C|0|1|0|140|0|144|
1.QVHD7.T|0|C|0|1|0|140|0|144|
1.QVHD7.N|0|C|0|1|0|140|1|141|
1.QVHD7.<v27>|0|C|0|1|0|140|1|141|
1.QVHD7.<v31>|0|C|0|1|0|140|0|145|
1.QVHD7.<v32>|0|C|0|1|0|140|0|146|
1.QVHD7.<v34>|0|C|0|1|0|140|0|145|
1.QVHD7.<v43>|0|C|0|1|0|140|0|147|
1.QVHD7.<v52>|0|C|0|1|0|140|1|141|
1.ljuV6.jrkIH9|0|A|3|1|0|148|0|100|
1.ljuV6.gdFh4|0|A|3|1|0|149|0|100|
1.ljuV6.gPHbR0|0|C|2|1|0|150|0|151|
1.ljuV6.gVFNH2|18|D|2|1|0|152|0|153|
1.ljuV6.IhAY8|12|E|1|1|0|154|0|124|r
1.ljuV6.sEDO2|12|E|1|1|0|155|0|124|r
2.DfaES6|1|A|3|1|0|156|0|100|
2.yAui9|1|C|4|1|1|157|1|158|
2.yAui9.LMjs9|1|C|2|1|0|159|0|160|
2.yAui9.jQiC3|1|C|2|1|0|159|0|160|
2.yAui9.NyGWL0|1|C|0|1|0|159|0|161|
2.yAui9.lGMKW4|1|C|2|1|0|159|0|160|
2.yAui9.ynPml0|1|C|0|1|0|159|1|162|
3.bmma1|2|A|2|1|0|163|0|164|
4.UdXu3|1|A|2|1|0|165|0|117|
5.ATpJ5|3|A|2|1|0|166|0|126|
5.umMaC3|1|A|3|1|0|167|0|100|
5.EHIFA6|1|A|3|1|0|168|0|100|
5.irmf9|1|D|2|1|0|169|0|170|
7.QWcax3|4|C|2|1|0|171|0|89|
7.akeLU4|4|C|4|1|1|172|1|173|
8.bQBt4|5|A|2|1|0|176|0|117|
8.vbrE9|5|E|0|1|0|177|0|178|a
9.tjYx6|5|A|2|1|0|179|0|117|
9.vWNIm6|5|C|0|1|0|180|1|181|
9.igrIO9|4|C|2|1|0|182|0|183|
9.HnFG5|5|A|3|1|0|184|0|100|
9.tnjCS1|5|A|3|1|0|185|0|100|
10.BuKX4|6|C|2|1|0|186|0|187|
10.gQet8|6|C|2|1|0|188|0|187|
10.fzAb4|6|C|2|1|0|189|0|187|
10.kxzY1|6|C|2|1|0|190|0|187|
10.rIKdw5|6|A|3|1|0|191|0|100|
10.LvRtb9|6|C|2|1|0|192|0|187|
10.KBTe9|6|A|3|1|0|193|0|100|
10.sibaD1|6|D|2|1|0|194|0|195|
10.uoBG2|6|D|2|1|0|196|0|195|
10.jrVX6|6|D|2|1|0|197|0|198|
10.lqHqI0|6|A|2|0|0|199|0|98|
12.rwlrt9|3|A|3|1|0|200|0|100|
13.fMQd4|5|A|3|1|0|201|0|100|
13.QgYAn6|5|A|3|1|0|202|0|100|
13.cgrs5|7|C|2|1|0|203|0|204|
13.iWgxW7|7|C|2|1|0|205|0|204|
13.iGAj0|5|A|3|1|0|206|0|100|
13.zoFB9|5|A|3|1|0|207|0|100|
13.OaZJ1|5|A|3|1|0|208|0|100|
14.CJkad9|8|E|0|1|0|209|1|210|ar
15.gnelJ5|6|C|2|1|0|211|0|212|
16.MBXf3|9|C|0|1|0|213|0|214|
16.ySrtS5|9|C|0|1|0|215|0|214|
16.FXpXv1|9|C|0|1|0|216|0|217|
16.CNRnh6|9|C|0|1|0|218|1|219|
16.oHFLJ5|9|C|2|1|0|220|0|221|
16.wsksA3|9|C|0|1|0|220|1|219|
16.fVCRI9|9|C|2|1|0|220|0|221|
16.AvIxy5|9|C|0|1|0|222|0|217|
16.nardr7|9|C|0|1|0|223|1|219|
16.oXlug7|9|C|0|1|0|220|1|219|
16.GqCeX8|9|C|0|1|0|224|1|219|
16.FJbU2|9|C|0|1|0|225|1|226|
16.NBcX0|9|C|0|1|0|220|1|219|
16.Ooyv2|9|C|0|1|0|220|1|219|
16.pUHnB0|9|C|0|1|0|220|1|219|
17.hNbEd9|10|C|2|1|0|227|0|87|
17.EMpz5|10|C|0|1|0|227|0|228|
17.dIpt2|10|C|0|1|0|227|0|228|
17.rasgK1|10|C|0|1|0|227|0|228|
17.WPxvo5|10|C|0|1|0|229|0|228|
17.mYkI7|10|C|0|1|0|230|0|228|
17.tBoxI9|10|C|0|1|0|231|0|228|
17.aNGs5|10|C|0|1|0|232|0|228|
18.VwnS5|11|A|3|1|0|233|0|100|
18.eilti5|11|A|3|1|0|233|0|100|
18.jMgtU8|11|A|3|1|0|233|0|100|
18.jZWH2|11|A|3|1|0|233|0|100|
19.UvUvY0|12|A|3|1|0|234|0|100|
19.AfnB3|12|E|0|1|0|235|0|236|ap
19.WNaw9|3|A|2|1|0|237|0|117|
19.PaVB6|12|D|2|1|0|238|0|239|
19.iWZX9|12|A|3|1|0|240|0|100|
19.UulQ2|3|A|2|1|0|237|0|117|
20.dKjG5|5|C|2|1|0|241|0|242|
20.yybGm2|5|A|3|1|0|243|0|100|
21.eSxc2|13|A|2|1|0|244|0|117|
21.kWqSn0|13|C|2|1|0|245|0|246|
21.ulnsR4|13|D|2|1|0|247|0|248|
21.BGcq9|13|A|3|1|0|249|0|100|
21.DFHHz4|13|D|2|1|0|250|0|251|
21.AQTO7|13|D|2|1|0|252|0|253|
21.YMKU3|13|A|3|1|0|249|0|100|
21.pLuw6|13|A|3|1|0|254|0|100|
21.NPiE1|13|A|3|1|0|255|0|100|
21.HkyLT5|18|D|2|1|0|256|0|257|
21.oqKIN4|13|D|2|1|0|258|0|259|
22.QsQH7|2|A|2|1|0|260|0|261|
23.eTTKN0|5|C|2|1|0|262|0|263|
23.TXvS8|5|A|3|1|0|264|0|100|
24.aiHZ6|14|B|2|1|0|265|0|266|
24.BGFf6|14|B|2|1|0|267|0|266|
24.KWmH0|14|B|2|1|0|267|0|266|
24.BIUTv5|14|B|2|1|0|267|0|266|
24.ESde5|14|B|2|1|0|267|0|266|
24.udDH9|14|B|2|1|0|267|0|266|
24.mJJG9|14|B|2|1|0|267|0|266|
24.UeXB6|14|B|2|1|0|267|0|266|
24.QhWRL5|14|B|2|1|0|267|0|266|
24.MYnFp1|14|B|2|1|0|267|0|266|
24.GbEwT3|14|B|2|1|0|267|0|266|
24.cDAn9|14|E|1|1|0|268|1|269|
24.QsDgu4|14|E|1|1|0|270|1|269|
24.dDLb9|14|B|2|1|0|267|0|266|
24.eULr5|14|B|2|1|0|267|0|266|
24.xWYrx0|14|B|2|1|0|267|0|266|
24.rxAT4|14|E|1|1|0|271|1|269|
24.cHon2|14|B|2|1|0|267|0|266|
24.SQzC1|14|B|2|1|0|267|0|266|
24.jFwrj7|14|B|2|1|0|267|0|266|
24.SYgk1|14|B|2|1|0|267|0|266|
24.DOSv3|14|B|2|1|0|267|0|266|
24.wnqc0|14|B|2|1|0|267|0|266|
26.NsiN1|15|C|2|1|0|272|0|273|
26.QAYqF9|15|C|2|1|0|272|0|273|
26.naGC4|15|A|3|1|0|274|0|100|
26.JdlF7|15|C|2|1|0|272|0|273|
26.sSCE0|15|C|2|1|0|272|0|273|
26.DyGY3|15|C|2|1|0|272|0|273|
26.fRwez3|15|C|2|1|0|272|0|273|
26.XPNOd0|12|A|3|1|0|275|0|100|
26.aBENc4|5|A|3|1|0|276|0|100|
26.ZzbI2|15|C|2|1|0|277|0|278|
26.DlXb5|15|A|2|1|0|279|0|280|
26.EWXZ4|15|C|2|1|0|281|0|282|
26.umfK5|15|C|2|1|0|283|0|282|
26.PNwxC2|15|C|2|1|0|284|0|282|
26.HaJRf0|15|C|2|1|0|285|0|282|
26.kEkZQ3|15|A|3|1|0|286|0|100|
27.gOEm7|16|A|3|1|0|287|0|100|
27.rLrku6|16|C|0|1|0|288|1|289|
27.XEUHT5|16|C|0|1|0|290|1|289|
27.hRxVQ2|16|C|0|1|0|291|1|292|
27.vxrRf4|16|E|0|1|0|293|0|236|ap
28.ZqqO3|5|A|3|1|0|294|0|100|
28.sZpv6|5|A|3|1|0|295|0|100|
28.NUiWx8|5|A|3|1|0|296|0|100|
28.euSP7|5|A|3|1|0|297|0|100|
29.Oqyy0|10|A|2|1|0|298|0|117|
29.gXLg3|10|C|2|1|0|299|0|89|
29.fBVa5|10|C|0|1|0|300|0|301|
29.vMfn7|10|C|2|1|0|302|0|89|
29.UnMvf4|10|C|0|1|0|303|0|304|
29.HlWP7|10|C|2|1|0|305|0|89|
29.CrRYD0|10|C|0|1|0|306|0|301|
29.tvDL8|10|C|0|1|0|307|0|301|
30.StrX9|4|C|4|1|1|308|1|309|
30.StrX9.architecture|4|C|0|1|0|310|1|311|
30.StrX9.bitness|4|C|0|1|0|310|1|311|
30.StrX9.brands|4|C|0|1|0|310|1|311|
30.StrX9.fullVersionList|4|C|0|1|0|310|1|311|
30.StrX9.mobile|4|C|2|1|0|310|0|92|
30.StrX9.model|4|C|2|1|0|310|0|92|
30.StrX9.platform|4|C|0|1|0|310|1|311|
30.StrX9.platformVersion|4|C|2|1|0|310|0|92|
31.BnDgz6|12|D|0|1|0|312|0|313|ap
32.REqdn6|5|A|3|1|0|314|0|100|
33.vHqDD3|7|C|2|1|0|315|0|204|
33.lMfHk3|7|C|2|1|0|316|0|204|
33.Rhgjd6|7|C|2|1|0|203|0|204|
33.SiEjG0|7|C|2|1|0|317|0|204|
33.rLqE9|7|C|2|1|0|318|0|204|
33.iSsr0|7|C|2|1|0|319|0|204|
34.ATpJ5|1|A|2|1|0|320|0|126|
35.fSUn1|11|C|2|1|0|321|0|322|
35.UYeq7|11|C|2|1|0|323|0|322|
35.aMiP2|11|A|3|1|0|324|0|100|
35.Rdqz4|11|A|3|1|0|324|0|100|
36.EabR5|1|A|3|1|0|325|0|100|
36.WXCS6|1|C|2|1|0|326|0|327|
36.gNlRC9|1|A|3|1|0|328|0|100|
36.uFSgq2|1|C|2|1|0|329|0|330|
36.PABx8|1|D|0|1|0|331|0|332|ap
37.CnBd1|8|A|3|1|0|333|0|100|
37.yCNNi5|8|A|3|1|0|334|0|100|
37.COUZf0|8|A|3|1|0|335|0|100|
37.arqA7|8|A|3|1|0|336|0|100|
37.TsnFY8|3|E|0|1|0|337|1|338|
37.agmL8|3|E|0|1|0|337|1|338|
37.ClXn8|3|A|2|1|0|337|0|117|
37.QAlM4|8|D|0|1|0|339|0|340|ap
37.oPxfw0|8|E|0|1|0|341|1|342|
37.mBxH7|8|A|3|1|0|343|0|100|
37.YmXV0|8|A|3|1|0|344|0|100|
38.kYpkN9|3|E|0|1|0|128|0|345|
38.zzVN3|3|E|0|1|0|129|0|345|
38.hMYS1|8|E|0|1|0|346|0|345|`;

const parse = (l: string): Row => {
  const p = l.split("|");
  return { path: p[0], cat: Number(p[1]), cls: p[2], basis: Number(p[3]), sent: p[4] === "1", cont: p[5] === "1", plain: Number(p[6]), hook: p[7] === "1", why: Number(p[8]), rr: p[9] ?? "", order: 0 };
};

const buildRows = (): Row[] => {
  const explicit = RAW.split("\n").map(parse);
  const have = new Set<string>(explicit.map((r: Row) => r.path));
  const envRr: Record<string, string[]> = {};
  ENVRR.split(" ").forEach((t: string) => { const [n, v] = t.split(":"); envRr[n] = v.split(","); });
  const top = explicit.filter((r: Row) => !r.path.includes("."));
  const out: Row[] = [...top];
  for (let n = 1; n <= 38; n++) {
    const pre = `${n}.`;
    explicit.filter((r: Row) => r.path.startsWith(pre)).forEach((r: Row) => out.push(r));
    if (n === 1) QV.split(" ").forEach((k: string) => out.push(parse(`1.QVHD7.${k}|0|C|2|1|0|140|0|142|`)));
    if (n === 7) KB.split(" ").forEach((k: string) => out.push(parse(`7.akeLU4.${k}|4|C|2|1|0|174|0|175|`)));
    ENV.forEach(([k, body]: [string, string], i: number) => {
      const path = `${n}.${k}`;
      if (have.has(path)) return;
      const rr = i >= 4 && i <= 6 && envRr[String(n)] ? envRr[String(n)][i - 4] : "";
      const b = rr ? body.replace("|D|2|", "|D|0|") : body;
      out.push(parse(`${path}|${b}|${rr}`));
    });
  }
  return out.map((r: Row, i: number) => ({ ...r, order: i }));
};

const ROWS: Row[] = buildRows();
const LEAVES: Row[] = ROWS.filter((r: Row) => !r.cont);
const SENT: Row[] = LEAVES.filter((r: Row) => r.sent);
const isEnv = (r: Row): boolean => /^\d+\.(tlwi7|rhUgi8|kYpkN9|zzVN3|roTuJ3|DJme8|helyQ4|ExHMy4|SvnXY5)$/.test(r.path);
const rrText = (rr: string): string => (rr ? rr.split("").map((c: string) => RRS[c] ?? c).join(", ") : "—");
const code = (p: string): string => `\`${p}\``;

const PG: string[] = ["automation/webdriver detection", "headless detection", "hook/patch detection on native functions", "device fingerprint entropy (stable per machine)", "consistency check vs UA/client hints", "cross-realm consistency (worker vs main)", "timing/human-ness / VM anti-tamper", "replay protection / freshness (timestamps)", "challenge binding (server data echoed back)", "probe envelope bookkeeping", "integrity of the challenge script itself (stack/injection)"];
const PB: Record<string, string> = { o: "observed", c: "code", i: "inferred" };
const PEV: string[] = ["probe envelope written by the probe runner (tag/config/status/start/end/duration)", "window own-property bucket (Object.getOwnPropertyNames(window)); hypothesis: browser build/version entropy, extra globals reveal tooling", "KeyboardLayoutMap entry; hypothesis: keyboard layout entropy", "container: majority purpose of its result fields; diffed: UA (headless UA string), UA/OS preset, automation (webdriver flag), browser mode/GPU (headless), headless + harness wrappers, hardware (cores/memory), hook/injection, timezone", "container: majority purpose of its result fields; diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), headless + harness wrappers, hardware (cores/memory)", "container: majority purpose of its result fields", "container: majority purpose of its result fields; diffed: hook/injection", "container: majority purpose of its result fields; diffed: engine setting (stack limit), hook/injection", "container: majority purpose of its result fields; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless), headless + harness wrappers, harness instrumentation (shadow-compare)", "container: majority purpose of its result fields; diffed: timezone", "container: majority purpose of its result fields; diffed: GPU readback + harness wrappers, headless + harness wrappers, hook/injection, hook/injection (wrappers visible)", "container: majority purpose of its result fields; diffed: locale, timezone", "container: majority purpose of its result fields; diffed: UA (headless UA string), UA/OS preset", "container: majority purpose of its result fields; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless)", "copied from the host challenge object (challenge_api / host value)", "literal/slot written by the bag initializer", "difference of two challenge_api timestamps", "serialized challenge/session state; hypothesis: binds payload to this challenge", "performance.now() deltas; hypothesis: execution-speed / VM timing", "timezone/locale string; hypothesis: locale entropy, IP-geo consistency", "navigator.userAgent; reference for UA/client-hint/worker consistency (hypothesis)", "HNiY8() recursion/stack-depth list; VM/engine anti-tamper; diffed: engine setting (stack limit)", "copied from challenge_api.NglZ3 (server data echoed back)", "runtime value from a helper; hypothesis: challenge-derived token", "attachShadow toString check plus Node constants; diffed: hook/injection", "probe-3 eval/global-this result; compared with slot 21 by probe 27 (VM anti-tamper)", "Object.keys(challenge_api.TglCI7)", "Date.now() minus challenge_api start timestamp at send", "helper W(challenge_api) over the challenge object", "Object.getOwnPropertyNames(window) index; extra/missing globals reveal automation, hooks and headless builds; diffed: UA (headless UA string), UA/OS preset, automation (webdriver flag), browser mode/GPU (headless), headless + harness wrappers, hardware (cores/memory), hook/injection, timezone", "container of checks run inside a fresh iframe realm and compared with the main realm", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: hook/injection", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: hardware (cores/memory)", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: automation (webdriver flag)", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), headless + harness wrappers", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: UA/OS preset", "window own-property bucket (Object.getOwnPropertyNames(window)); diffed: timezone", "check function run inside a fresh iframe realm vs main realm", "Notification.permission; hypothesis: headless default permission state", "navigation-timing delta; hypothesis: page-load timing plausibility", "navigation entry body sizes; hypothesis: page was not rewritten/proxied", "status flag set when the worker reply arrives", "navigator values read inside a dedicated Worker, sent next to main-realm values; diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), headless + harness wrappers, hardware (cores/memory)", "navigator values read inside a dedicated Worker, sent next to main-realm values (hypothesis)", "navigator values read inside a dedicated Worker, sent next to main-realm values; diffed: hardware (cores/memory)", "navigator values read inside a dedicated Worker, sent next to main-realm values; diffed: UA (headless UA string), UA/OS preset, browser mode/GPU (headless), headless + harness wrappers", "fetch result posted to a Worker; hypothesis: worker/main fetch consistency", "counter during a fetch+Worker round trip; hypothesis: timing", "navigator.language; hypothesis: locale entropy", "keyboard layout map (differs in headless mode); diffed: browser mode/GPU (headless), headless + harness wrappers", "120 DOM-behaviour checks; hypothesis: detects emulated or headless DOMs", "<html> attribute list; injected attributes from extensions/hooks; diffed: hook/injection", "navigator.plugins list; hypothesis: headless has an empty/abnormal plugin list", "document.body checks; hypothesis: page DOM not rewritten", "font availability/metrics; hypothesis: installed-font entropy", "Date.now()-based font timing lists; hypothesis: render timing / VM", "image load behaviour; hypothesis: image loading disabled in automation", "connection type / onLine; hypothesis: network profile", "Error().stack line:column of 7 frames; moves when code is injected or wrapped; diffed: engine setting (stack limit), hook/injection", "getBoundingClientRect of styled divs; hypothesis: font/layout entropy", "WebGL parameters / canvas image-data; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless), harness instrumentation (shadow-compare)", "WebGL parameters / canvas image-data; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless)", "WebGL parameters / canvas image-data; diffed: browser mode/GPU (headless), headless + harness wrappers", "WebGL parameters / canvas image-data (hypothesis)", "WebGL parameters / canvas image-data; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless), headless + harness wrappers, harness instrumentation (shadow-compare)", "Date/Intl output for fixed inputs; locale/timezone entropy (hypothesis)", "Date/Intl output for fixed inputs; locale/timezone entropy; diffed: timezone", "SHA-256 of fixed inputs; hypothesis: crypto.subtle is genuine (anti-emulation)", "Trusted Types policy / script nonce / iframe checks; hypothesis: page CSP integrity", "performance.memory number; hypothesis: device/heap profile", "computed-style map / iframe document.write result; hypothesis: rendering-engine entropy", "codec capability list; hypothesis: build/OS entropy", "WebRTC offer/ICE; hypothesis: network-interface profile, proxy/VPN detection", "ICE gathering duration; hypothesis: network/VM timing plausibility", "Math precision on fixed inputs; hypothesis: engine/CPU entropy and engine-vs-UA check", "stylesheet scan; hypothesis: injected CSS / page integrity", "copied from PUUDF8 page info supplied by the challenge page", "page fingerprint / script-length counters from PUUDF8.pi; diffed: hook/injection", "media queries / feature detect; hypothesis: display entropy", "navigation type (navigate/reload/back_forward); hypothesis: replayed or reloaded page", "document.referrer; hypothesis: challenge embedded where expected", "permission states; hypothesis: headless permission inconsistencies", "boolean literal written by the probe", "BatteryManager; hypothesis: device entropy, VM has none/fixed values", "second per-function check list; hypothesis: same native integrity checks", "code checks .arguments, prototype===undefined, own names 'length,name' (C3-C5); diffed: GPU readback + harness wrappers, headless + harness wrappers, hook/injection, hook/injection (wrappers visible)", "code checks Function.prototype.toString contains '[native code]' (C1,C2,C7,C9); diffed: GPU readback + harness wrappers, headless + harness wrappers, hook/injection, hook/injection (wrappers visible)", "per-native-function check list (130); diffed: GPU readback + harness wrappers, headless + harness wrappers, hook/injection (wrappers visible)", "window.name/forms/images/links/cookie; hypothesis: page state integrity", "status tag literal", "Date/Intl output for fixed inputs; locale/timezone entropy; diffed: locale", "Date/Intl output for fixed inputs; locale/timezone entropy; diffed: locale, timezone", "getHighEntropyValues client hint; comparable with navigator.userAgent; diffed: UA (headless UA string), UA/OS preset", "getHighEntropyValues client hint; comparable with navigator.userAgent (hypothesis)", "performance.mark/getEntries; hypothesis: timer resolution / clamping", "CSS rule insertion/queries; hypothesis: engine feature entropy", "Network Information API; hypothesis: connection profile vs IP", "OfflineAudioContext render digest; hypothesis: audio-stack entropy", "audio flags; hypothesis: audio support profile", "number reported from the worker realm; hypothesis: worker vs main hardware values", "StorageManager estimate; hypothesis: storage quota profile (incognito/headless)", "console/devtools, Proxy, Error and toString traps; hypothesis: open devtools / CDP Runtime detection", "probe-37 trap results; change when harness wrappers are visible; diffed: GPU readback + harness wrappers, headless + harness wrappers, hook/injection (wrappers visible)", "probe-37 trap results; change when harness wrappers are visible; diffed: GPU readback + harness wrappers, headless + harness wrappers, harness instrumentation (shadow-compare), hook/injection (wrappers visible)", "DOMException-related string; diffed: GPU/canvas readback, GPU readback + harness wrappers, browser mode/GPU (headless)"];
const PWHY: string[][] = [["Window / global-object inventory", "Probe 1 inverts Object.getOwnPropertyNames(window) into buckets. The set of globals is a build/version fingerprint, and automation frameworks, injected scripts and hooks add or remove globals; in our runs individual buckets moved with the webdriver flag, hook injection, headless mode and UA preset. The iframe-realm checks compare a fresh realm with the main one."], ["Workers & secondary realms", "Probes 2, 4, 5, 34 and 36 run code in a Worker and send its navigator/hardware view next to the main-thread one. Spoofing usually patches only the main realm, so a worker reply that disagrees (UA, cores, memory) exposes it; the worker reply moved with UA and hardware changes in our diffs."], ["JS engine & Math precision", "Math precision on fixed inputs is constant per engine/CPU and acts as an engine check that should match the claimed UA. bmma1 is an eval/global-this consistency number that probe 27 compares with slot 21 (VM anti-tamper)."], ["Probe envelope & bookkeeping", "The envelope (tag, config blob, status, start/end/duration, executor) is bookkeeping: it tells the server which probes ran, whether they failed and how long they took. Durations double as a weak timing signal; status codes change when a probe throws (e.g. under hooks)."], ["Navigator, UA & client hints", "The UA string and high-entropy client hints are reported side by side so they can be checked against each other and against engine behaviour; client hints moved with the UA preset in our diffs. The keyboard layout map adds per-machine entropy and differed in headless mode."], ["DOM, document & CSS", "The DOM behaviour battery, image-load checks and <html> attribute list distinguish real rendering engines from emulated/headless ones and detect attributes injected by extensions or hooks (observed under hook injection)."], ["Fonts & text metrics", "Installed fonts and text metrics are classic per-machine entropy; the font-probe timing lists are run-to-run timing data."], ["Network information", "Connection type and online state describe the network profile; plausibly compared with the IP's network type server-side (not knowable)."], ["Stack / error / devtools fingerprints", "Error().stack line:column positions move when the challenge script is wrapped or code is injected (observed under hook injection and stack-limit changes). Probe 37 traps console/devtools, Proxy and toString, which change when harness wrappers are visible."], ["Canvas & WebGL", "WebGL vendor/renderer, parameters and canvas pixels identify the GPU stack; they moved with GPU readback changes, and headless/software-GL modes produce distinctive values."], ["Locale, Intl & timezone", "Timezone, Intl formatting and historical Date offsets give locale entropy and can be checked against the IP's geography server-side; they moved with timezone and locale changes in our diffs."], ["Crypto & audio hashes", "Audio-render digests are device entropy. The four SHA-256 digests of fixed inputs are constants: they only confirm that crypto.subtle behaves like a real browser."], ["Performance & memory", "Navigation timing, body sizes, Trusted Types/nonce checks and navigation type describe how the page was loaded, whether it was rewritten, and whether it is a reload/replay."], ["WebRTC & media", "WebRTC offer/ICE and codec lists expose network interfaces and the media stack; they help detect proxies/VMs and add entropy."], ["Page-supplied info (PUUDF8)", "PUUDF8 page info is supplied by the challenge page and echoed back to bind the payload to it; its page-fingerprint and script-length counters changed when scripts were injected."], ["Device, display & sensors", "Media queries, battery and permission states are device/display entropy; permission and battery states are commonly abnormal in headless/VM setups (hypothesis)."], ["Native-function integrity checks", "Probe 27 tests a long list of native functions for patches: .arguments access, prototype===undefined, own property names and toString containing \"[native code]\". These lists changed under the hook modes in our diff runs."], ["Challenge context & session state", "Members of the server's challenge object are echoed back so the payload is bound to this challenge instance; serialized state strings carry the same binding."], ["Timing & performance clocks", "Differences between challenge timestamps and Date.now() at send show how old the challenge is (freshness/replay); performance.now() deltas add execution-timing data."]];
const PNOTE = "Server-side use is out of scope and cannot be known from the client. 'purpose' describes what the client-side check can distinguish, not proven server scoring. 'observed' = the field changed in our offline diff runs when the cited dimension changed; 'code' = the client code explicitly compares or derives against the cited reference; 'inferred' = hypothesis from the API used.";
const PRAW = `1|0|o|3
2|5|o|4
3|6|c|5
4|5|c|5
5|5|i|5
6|9|c|5
7|3|i|5
8|1|i|5
9|10|o|6
10|3|i|5
11|9|c|5
12|9|c|5
13|1|i|5
14|10|o|7
15|3|i|5
16|1|o|8
17|3|o|9
18|6|i|5
19|10|i|5
20|3|i|5
21|3|i|5
22|3|i|5
23|10|i|5
24|8|c|5
25|9|c|5
26|3|i|5
27|2|o|10
28|10|i|5
29|3|o|11
30|4|o|12
31|6|i|5
32|3|i|5
33|3|i|5
34|5|c|5
35|3|i|5
36|5|c|5
37|0|i|5
38|1|o|13
gOeQ5|8|c|14
dXXrN6|8|c|14
mTMKo9|8|c|14
XNWt6|9|c|15
zJHo8|9|c|15
xAiT8|9|c|15
LJfS7|7|c|16
XLyWr5|7|c|16
BVMeN7|7|c|16
wIgH5|8|c|14
RdXW8|8|i|17
nYPYj0|6|i|18
WqCj2|8|c|14
nYuU0|8|c|14
BhiO6|8|c|14
rSsJJ7|8|c|14
jsEAj2|3|i|19
nKrLC7|8|c|14
drtu3|8|c|14
PRRQy7|8|c|14
LoBqb5|8|c|14
NMKgh2|8|c|14
tSdur1|3|i|19
iGOc7|8|c|14
ycoM7|8|c|14
PjiLU5|8|c|14
IPxZq4|8|c|14
IojGh8|8|c|14
KfZx1|8|c|14
Vyfp9|8|c|14
NnhK2|8|c|14
yvOQ6|8|c|14
nnBgq6|8|c|14
EezHv7|8|c|14
PyAqD0|8|c|14
LIveY7|8|c|14
FQob1|7|c|16
KrzP4|8|c|14
ADqih3|4|i|20
poav7|6|o|21
cIEZ9|8|c|14
NglZ3|8|c|22
YsxeV5|9|c|0
tgVOo4|8|i|23
kNTL3|2|o|24
YFZTc5|9|c|0
WdGLU4|9|c|15
RkOO5|9|c|0
bmma1|6|c|25
TwoO6|9|c|0
rXsMy3|8|i|17
pnUb9|8|i|23
pAFSo0|8|i|17
cWAH0|8|i|23
hbRVt7|9|c|0
TRcGA3|8|c|14
yGdKz7|9|c|15
ZMiod6|8|c|14
FvhZ6|8|c|26
fXiPQ1|8|i|23
KHnWz9|7|c|27
GesyF4|8|i|23
oYcq1|8|c|28
1.QVHD7|0|o|29
1.ljuV6|5|c|30
1.QVHD7.<v01>|2|o|31
1.QVHD7.<v05>|3|o|32
1.QVHD7.<v09>|3|o|32
1.QVHD7.F|0|o|33
1.QVHD7.T|0|o|33
1.QVHD7.N|2|o|31
1.QVHD7.<v27>|2|o|31
1.QVHD7.<v31>|1|o|34
1.QVHD7.<v32>|4|o|35
1.QVHD7.<v34>|1|o|34
1.QVHD7.<v43>|3|o|36
1.QVHD7.<v52>|2|o|31
1.ljuV6.jrkIH9|5|c|37
1.ljuV6.gdFh4|5|c|37
1.ljuV6.gPHbR0|1|i|38
1.ljuV6.gVFNH2|6|i|39
1.ljuV6.IhAY8|10|i|40
1.ljuV6.sEDO2|10|i|40
2.DfaES6|5|c|41
2.yAui9|5|o|42
2.yAui9.LMjs9|5|i|43
2.yAui9.jQiC3|5|i|43
2.yAui9.NyGWL0|5|o|44
2.yAui9.lGMKW4|5|i|43
2.yAui9.ynPml0|5|o|45
3.bmma1|6|c|25
4.UdXu3|5|c|41
5.ATpJ5|9|c|0
5.umMaC3|5|i|46
5.EHIFA6|5|i|46
5.irmf9|6|i|47
7.QWcax3|3|i|48
7.akeLU4|1|o|49
8.bQBt4|9|c|0
8.vbrE9|1|i|50
9.tjYx6|9|c|0
9.vWNIm6|10|o|51
9.igrIO9|1|i|52
9.HnFG5|10|i|53
9.tnjCS1|10|i|53
10.BuKX4|3|i|54
10.gQet8|3|i|54
10.fzAb4|3|i|54
10.kxzY1|3|i|54
10.rIKdw5|9|c|0
10.LvRtb9|3|i|54
10.KBTe9|3|i|54
10.sibaD1|6|i|55
10.uoBG2|6|i|55
10.jrVX6|6|i|55
10.lqHqI0|3|i|54
12.rwlrt9|9|c|0
13.fMQd4|1|i|56
13.QgYAn6|1|i|56
13.cgrs5|3|i|57
13.iWgxW7|3|i|57
13.iGAj0|1|i|56
13.zoFB9|1|i|56
13.OaZJ1|1|i|56
14.CJkad9|10|o|58
15.gnelJ5|3|i|59
16.MBXf3|3|o|60
16.ySrtS5|3|o|60
16.FXpXv1|3|o|61
16.CNRnh6|1|o|62
16.oHFLJ5|3|i|63
16.wsksA3|1|o|62
16.fVCRI9|3|i|63
16.AvIxy5|3|o|61
16.nardr7|1|o|62
16.oXlug7|1|o|62
16.GqCeX8|1|o|62
16.FJbU2|3|o|64
16.NBcX0|1|o|62
16.Ooyv2|1|o|62
16.pUHnB0|1|o|62
17.hNbEd9|3|i|65
17.EMpz5|3|o|66
17.dIpt2|3|o|66
17.rasgK1|3|o|66
17.WPxvo5|3|o|66
17.mYkI7|3|o|66
17.tBoxI9|3|o|66
17.aNGs5|3|o|66
18.VwnS5|6|i|67
18.eilti5|6|i|67
18.jMgtU8|6|i|67
18.jZWH2|6|i|67
19.UvUvY0|10|i|68
19.AfnB3|10|i|68
19.WNaw9|9|c|0
19.PaVB6|3|i|69
19.iWZX9|10|i|68
19.UulQ2|9|c|0
20.dKjG5|3|i|70
20.yybGm2|3|i|70
21.eSxc2|9|c|0
21.kWqSn0|3|i|71
21.ulnsR4|3|i|72
21.BGcq9|3|i|72
21.DFHHz4|3|i|72
21.AQTO7|3|i|72
21.YMKU3|3|i|72
21.pLuw6|3|i|72
21.NPiE1|3|i|72
21.HkyLT5|6|i|73
21.oqKIN4|3|i|72
22.QsQH7|3|i|74
23.eTTKN0|10|i|75
23.TXvS8|10|i|75
24.aiHZ6|8|c|76
24.BGFf6|8|c|76
24.KWmH0|8|c|76
24.BIUTv5|8|c|76
24.ESde5|8|c|76
24.udDH9|8|c|76
24.mJJG9|8|c|76
24.UeXB6|8|c|76
24.QhWRL5|8|c|76
24.MYnFp1|8|c|76
24.GbEwT3|8|c|76
24.cDAn9|10|o|77
24.QsDgu4|10|o|77
24.dDLb9|8|c|76
24.eULr5|8|c|76
24.xWYrx0|8|c|76
24.rxAT4|10|o|77
24.cHon2|8|c|76
24.SQzC1|8|c|76
24.jFwrj7|8|c|76
24.SYgk1|8|c|76
24.DOSv3|8|c|76
24.wnqc0|8|c|76
26.NsiN1|3|i|78
26.QAYqF9|3|i|78
26.naGC4|3|i|78
26.JdlF7|3|i|78
26.sSCE0|3|i|78
26.DyGY3|3|i|78
26.fRwez3|3|i|78
26.XPNOd0|7|i|79
26.aBENc4|8|i|80
26.ZzbI2|1|i|81
26.DlXb5|9|c|82
26.EWXZ4|3|i|83
26.umfK5|3|i|83
26.PNwxC2|3|i|83
26.HaJRf0|3|i|83
26.kEkZQ3|3|i|78
27.gOEm7|2|i|84
27.rLrku6|2|o|85
27.XEUHT5|2|o|86
27.hRxVQ2|2|o|87
27.vxrRf4|2|i|84
28.ZqqO3|10|i|88
28.sZpv6|10|i|88
28.NUiWx8|10|i|88
28.euSP7|10|i|88
29.Oqyy0|9|c|89
29.gXLg3|3|i|65
29.fBVa5|3|o|90
29.vMfn7|3|i|65
29.UnMvf4|3|o|91
29.HlWP7|3|i|65
29.CrRYD0|3|o|90
29.tvDL8|3|o|90
30.StrX9|4|o|92
30.StrX9.architecture|4|o|92
30.StrX9.bitness|4|o|92
30.StrX9.brands|4|o|92
30.StrX9.fullVersionList|4|o|92
30.StrX9.mobile|4|i|93
30.StrX9.model|4|i|93
30.StrX9.platform|4|o|92
30.StrX9.platformVersion|4|i|93
31.BnDgz6|6|i|94
32.REqdn6|3|i|95
33.vHqDD3|3|i|96
33.lMfHk3|3|i|96
33.Rhgjd6|3|i|96
33.SiEjG0|3|i|96
33.rLqE9|3|i|96
33.iSsr0|3|i|96
34.ATpJ5|5|c|41
35.fSUn1|3|i|97
35.UYeq7|3|i|97
35.aMiP2|3|i|98
35.Rdqz4|3|i|98
36.EabR5|5|c|41
36.WXCS6|5|i|99
36.gNlRC9|5|c|41
36.uFSgq2|3|i|100
36.PABx8|3|i|100
37.CnBd1|0|i|101
37.yCNNi5|0|i|101
37.COUZf0|0|i|101
37.arqA7|0|i|101
37.TsnFY8|2|o|102
37.agmL8|2|o|102
37.ClXn8|9|c|0
37.QAlM4|0|i|101
37.oPxfw0|2|o|103
37.mBxH7|0|i|101
37.YmXV0|0|i|101
38.hMYS1|1|o|104`;
const PMAP: Record<string, [number, string, number]> = {};
PRAW.split("\n").forEach((l: string) => { const p = l.split("|"); PMAP[p[0]] = [Number(p[1]), p[2], Number(p[3])]; });
const PENV = /^\d+\.(tlwi7|rhUgi8|kYpkN9|zzVN3|roTuJ3|DJme8|helyQ4|ExHMy4|SvnXY5)$/;
const purposeOf = (path: string): [number, string, number] => PMAP[path] ?? (PENV.test(path) ? [9, "c", 0] : path.startsWith("7.akeLU4.") ? [3, "i", 2] : path.startsWith("1.QVHD7.") ? [3, "i", 1] : [9, "i", 0]);
const PCOUNT = (f: (r: Row) => boolean): number => ROWS.filter(f).length;
const PBASIS_ROWS: string[][] = [["observed", String(PCOUNT((r: Row) => purposeOf(r.path)[1] === "o")), "the field changed in our offline diff runs when the cited dimension changed"], ["code", String(PCOUNT((r: Row) => purposeOf(r.path)[1] === "c")), "the client code explicitly compares with, or derives from, the cited reference"], ["inferred (hypothesis)", String(PCOUNT((r: Row) => purposeOf(r.path)[1] === "i")), "hypothesis from the API the writer uses; not proven"]];
const PBARS = PG.map((g: string, i: number) => { const v = PCOUNT((r: Row) => purposeOf(r.path)[0] === i); return { label: g, value: v, display: String(v) }; }).sort((a, b) => b.value - a.value);
const PWHY_ROWS: string[][] = PWHY.map(([name, why]: string[]) => {
  const rs = ROWS.filter((r: Row) => CATS[r.cat][1] === name);
  const top = PG.map((g: string, i: number): [string, number] => [g, rs.filter((r: Row) => purposeOf(r.path)[0] === i).length]).filter((x: [string, number]) => x[1] > 0).sort((a: [string, number], b: [string, number]) => b[1] - a[1]).slice(0, 3);
  return [name, String(rs.length), top.map((x: [string, number]) => `${x[0]} (${x[1]})`).join("; "), why];
});
const pbCell = (r: Row): Cell => (purposeOf(r.path)[1] === "i" ? { text: "inferred (hypothesis)", tone: "warning" as const } : PB[purposeOf(r.path)[1]]);

export default function App() {
  const [scope, setScope] = useState<string>("sent");
  const [cat, setCat] = useState<string>("all");
  const [cls, setCls] = useState<string>("all");
  const [basis, setBasis] = useState<string>("all");
  const [sentF, setSentF] = useState<string>("all");
  const [hideEnv, setHideEnv] = useState<boolean>(false);
  const [hookOnly, setHookOnly] = useState<boolean>(false);
  const [rrOnly, setRrOnly] = useState<boolean>(false);
  const [q, setQ] = useState<string>("");
  const [sort, setSort] = useState<string>("order");
  const [view, setView] = useState<string>("class");
  const [limit, setLimit] = useState<number>(100);
  const [pur, setPur] = useState<string>("all");
  const [pbas, setPbas] = useState<string>("all");

  const scoped: Row[] = scope === "all" ? ROWS : scope === "leaves" ? LEAVES : SENT;
  const classRows: Cell[][] = CLS.map(([c, name, desc]: [string, string, string]) => [
    c, name,
    String(ROWS.filter((r: Row) => r.cls === c).length),
    String(LEAVES.filter((r: Row) => r.cls === c).length),
    String(SENT.filter((r: Row) => r.cls === c).length),
    desc,
  ]);
  const classBars = CLS.map(([c, name]: [string, string, string]) => {
    const v = scoped.filter((r: Row) => r.cls === c).length;
    return { label: `${c} · ${name}`, value: v, display: String(v) };
  });
  const matrix: Cell[][] = CATS.map(([short, name]: [string, string], i: number) => {
    const rs = scoped.filter((r: Row) => r.cat === i);
    const cells: Cell[] = CLS.map(([c]: [string, string, string]) => {
      const v = rs.filter((r: Row) => r.cls === c).length;
      if (v === 0) return "·";
      return v * 2 > rs.length ? `**${v}**` : String(v);
    });
    return [`${name} (${short})`, ...cells, String(rs.length)];
  }).filter((row: Cell[]) => row[6] !== "0");

  const movers = SENT.filter((r: Row) => r.rr !== "");
  const sigs = Array.from(new Set<string>(movers.map((r: Row) => r.rr))).sort((a: string, b: string) => b.length - a.length || a.localeCompare(b));
  const rrRows: Cell[][] = sigs.map((s: string) => {
    const rs = movers.filter((r: Row) => r.rr === s);
    const env = rs.filter(isEnv);
    const other = rs.filter((r: Row) => !isEnv(r));
    const parts: string[] = [];
    if (other.length) parts.push(other.map((r: Row) => code(r.path)).join(", "));
    if (env.length) parts.push(`envelope: ${env.map((r: Row) => code(r.path)).join(", ")}`);
    return [s.split("").map((c: string) => RRL[c]).join(" · "), String(rs.length), parts.join(" — ")];
  });
  const rrBars = ["a", "p", "r", "s"].map((c: string) => {
    const v = movers.filter((r: Row) => r.rr.includes(c)).length;
    return { label: RRL[c], value: v, display: `${v} fields` };
  });

  const filtered = useMemo((): Row[] => {
    const ql = q.trim().toLowerCase();
    const rs = ROWS.filter((r: Row) =>
      (cat === "all" || r.cat === Number(cat)) &&
      (cls === "all" || r.cls === cls) &&
      (basis === "all" || r.basis === Number(basis)) &&
      (sentF === "all" || (sentF === "sent" ? r.sent && !r.cont : sentF === "not" ? !r.sent : r.cont)) &&
      (!hideEnv || !isEnv(r)) &&
      (!hookOnly || r.hook) &&
      (!rrOnly || r.rr !== "") &&
      (pur === "all" || purposeOf(r.path)[0] === Number(pur)) &&
      (pbas === "all" || purposeOf(r.path)[1] === pbas) &&
      (ql === "" || r.path.toLowerCase().includes(ql) || W[r.plain].toLowerCase().includes(ql) || W[r.why].toLowerCase().includes(ql) || PG[purposeOf(r.path)[0]].includes(ql) || PEV[purposeOf(r.path)[2]].toLowerCase().includes(ql)));
    const s = [...rs];
    if (sort === "path") s.sort((a: Row, b: Row) => a.path.localeCompare(b.path));
    if (sort === "cls") s.sort((a: Row, b: Row) => a.cls.localeCompare(b.cls) || a.order - b.order);
    if (sort === "cat") s.sort((a: Row, b: Row) => a.cat - b.cat || a.order - b.order);
    if (sort === "basis") s.sort((a: Row, b: Row) => a.basis - b.basis || a.order - b.order);
    return s;
  }, [cat, cls, basis, sentF, hideEnv, hookOnly, rrOnly, q, sort, pur, pbas]);

  const reset = (): void => setLimit(100);
  const shown = filtered.slice(0, limit);
  const classCols = ["Path", "Category", "Class", "Basis", "Sent", "Hook-sensitive", "Moved run-to-run (unpinned)"];
  const meaningCols = ["Path", "Class", "Meaning", "Purpose", "Why this class"];
  const purposeCols = ["Path", "Category", "Class", "Purpose", "Purpose basis", "Purpose evidence"];
  const sentCell = (r: Row): Cell => (r.cont ? "container" : r.sent ? "yes" : "not sent");
  const basisCell = (r: Row): Cell => (r.basis === 3 ? { text: BAS[r.basis], tone: "warning" as const } : BAS[r.basis]);
  const tableRows: Cell[][] = shown.map((r: Row) => view === "class"
    ? [code(r.path), CATS[r.cat][1], r.cls, basisCell(r), sentCell(r), r.hook ? { text: "yes", tone: "warning" as const } : "—", rrText(r.rr)]
    : view === "purpose"
    ? [code(r.path), CATS[r.cat][1], r.cls, PG[purposeOf(r.path)[0]], pbCell(r), PEV[purposeOf(r.path)[2]]]
    : [code(r.path), r.cls, W[r.plain], PG[purposeOf(r.path)[0]], W[r.why]]);

  return (
    <Page title="Turnstile payload variability — build 3158346939" summary="Which of the 746 payload fields are fixed by Cloudflare's code, which come from the server per challenge, which depend on the machine, and which change on every run. Schema only, with no captured values." width="full">
      <TableOfContents items={[{ label: "Method" }, { label: "Classes" }, { label: "Categories × class" }, { label: "Why CF collects this" }, { label: "Run-to-run without pins" }, { label: "Caveats" }, { label: "All fields" }]} />
      <Section heading="Method">
        <Properties items={[
          { label: "Pinned repeats", value: "19 identical runs with Date, performance, Math.random/crypto and scheduling pinned: all sent fields identical" },
          { label: "Unpinned groups", value: "Date-only pinned (6 runs); perf free (3); rand + crypto free (3); scheduling free (3)" },
          { label: "Environment diffs", value: "37 comparisons: UA/OS preset, headless mode/GPU, locale, timezone, hardware, webdriver, hooks, harness wrappers, stack limit, plus time-pin variants" },
          { label: "Basis", value: "diffed = moved or held in a real diff; code-read = writer read from the deobfuscated code; inferred = no env/clock reader in the writer; rollup = container summarizing its children" },
          { label: "Doc", value: "`docs/PAYLOAD-VARIABILITY-3158346939.md`, data `payload/payload-variability.json`" },
        ]} />
      </Section>
      <Section heading="Classes">
        <Table columns={["Class", "Name", "All fields", "Leaves", "Sent leaves", "Meaning"]} rows={classRows} />
        <Segmented options={[{ value: "all", label: "All 746 fields" }, { value: "leaves", label: `Leaves (${LEAVES.length})` }, { value: "sent", label: `Sent leaves (${SENT.length})` }]} value={scope} onChange={(v: string) => setScope(v)} />
        <Bars bars={classBars} />
        <Text>Leaves exclude the 38 probe containers and the 5 nested containers; sent leaves additionally drop function and undefined slots, which the serializer skips. The scope switch also drives the matrix below.</Text>
      </Section>
      <Section heading="Categories × class">
        <Table columns={["Category", "A", "B", "C", "D", "E", "Total"]} rows={matrix} />
        <Text>Highlighted cells hold the majority class of the category. The envelope is mostly A (tags, configs) and D (start, end, duration). Class B lives in the challenge context and page info (probe 24). Window inventory, navigator, locale, WebGL and device fields are C.</Text>
      </Section>
      <Section heading="Why CF collects this" caption="Purpose = what the client-side check can distinguish. Per-field Purpose, Purpose basis and Purpose evidence are in All fields (switch to Purpose columns).">
        <Callout lead="Scope">{PNOTE}</Callout>
        <Grid columns={2}>
          <Table columns={["Purpose basis", "Fields", "Meaning"]} rows={PBASIS_ROWS} />
          <Bars bars={PBARS} />
        </Grid>
        <Table columns={["Category", "Fields", "Main purposes", "Why CF collects this"]} rows={PWHY_ROWS} />
      </Section>
      <Section heading="Run-to-run without pins">
        <Text>{`${movers.length} sent leaves differed between runs once a pin was removed (Date always stayed pinned). Each row is a set of unpinned groups in which the field moved.`}</Text>
        <Bars bars={rrBars} />
        <Table columns={["Moved in these unpinned groups", "Fields", "Paths"]} rows={rrRows} />
        <Text>The container `1.QVHD7` also changes: which global names land in which bucket shifts between runs (Date-only and rand + crypto groups). Its 60 bucket leaves are class C.</Text>
      </Section>
      <Section heading="Caveats">
        <Callout lead="Class B rests on one session">All B fields come from a single captured challenge session. They are classed B because their writers copy the challenge object or page info, not because two challenges were compared.</Callout>
        <Table columns={["Caveat", "Effect"]} rows={[
          ["Date is always pinned", "With the real Date the token expires during the run and the watchdog reloads, so a fully unpinned run gives n=0. Date-driven fields (timestamps, elapsed times) are D by code-read."],
          ["WebRTC ids are rewritten by the harness", "The SDP munger in determinism-src.js replaces session id, ICE ufrag/pwd, fingerprint and candidates, so 21.DFHHz4, 21.AQTO7 and 21.ulnsR4 are D by code-read, not by diff."],
          ["Hardware differences are code-read only", "GPU, fonts, battery, network, storage and audio were not varied on real hardware; these C labels come from the writer APIs."],
          ["Environment presets are emulated", "UA, locale, timezone and headless diffs ran on one host, so they show which fields react, not the full range of real-world values."],
        ]} />
      </Section>
      <Section heading="All fields">
        <Grid columns={3} plain>
          <Select label="Category" value={cat} onChange={(v: string) => { setCat(v); reset(); }} options={[{ value: "all", label: "All categories" }, ...CATS.map((c: [string, string], i: number) => ({ value: String(i), label: c[1] }))]} />
          <Select label="Class" value={cls} onChange={(v: string) => { setCls(v); reset(); }} options={[{ value: "all", label: "All classes" }, ...CLS.map((c: [string, string, string]) => ({ value: c[0], label: `${c[0]} · ${c[1]}` }))]} />
          <Select label="Basis" value={basis} onChange={(v: string) => { setBasis(v); reset(); }} options={[{ value: "all", label: "All bases" }, ...BAS.map((b: string, i: number) => ({ value: String(i), label: b }))]} />
        </Grid>
        <Grid columns={3} plain>
          <Select label="Sent" value={sentF} onChange={(v: string) => { setSentF(v); reset(); }} options={[{ value: "all", label: "All" }, { value: "sent", label: "Sent leaves" }, { value: "not", label: "Not sent" }, { value: "cont", label: "Containers" }]} />
          <Input label="Search path, meaning or reason" value={q} onChange={(v: string) => { setQ(v); reset(); }} placeholder="e.g. CJkad9, timezone, WebGL" />
          <Toggle label="Hide probe-envelope fields" value={hideEnv} onChange={(v: boolean) => { setHideEnv(v); reset(); }} />
        </Grid>
        <Grid columns={3} plain>
          <Toggle label="Only hook-sensitive fields" value={hookOnly} onChange={(v: boolean) => { setHookOnly(v); reset(); }} />
          <Toggle label="Only fields that moved run-to-run" value={rrOnly} onChange={(v: boolean) => { setRrOnly(v); reset(); }} />
        </Grid>
        <Grid columns={2} plain>
          <Select label="Purpose" value={pur} onChange={(v: string) => { setPur(v); reset(); }} options={[{ value: "all", label: "All purposes" }, ...PG.map((g: string, i: number) => ({ value: String(i), label: g }))]} />
          <Select label="Purpose basis" value={pbas} onChange={(v: string) => { setPbas(v); reset(); }} options={[{ value: "all", label: "All purpose bases" }, { value: "o", label: "observed" }, { value: "c", label: "code" }, { value: "i", label: "inferred (hypothesis)" }]} />
        </Grid>
        <Segmented options={[{ value: "order", label: "Payload order" }, { value: "path", label: "Path" }, { value: "cls", label: "Class" }, { value: "cat", label: "Category" }, { value: "basis", label: "Basis" }]} value={sort} onChange={(v: string) => setSort(v)} />
        <Segmented options={[{ value: "class", label: "Classification columns" }, { value: "meaning", label: "Meaning columns" }, { value: "purpose", label: "Purpose columns" }]} value={view} onChange={(v: string) => setView(v)} />
        <Text>{`${filtered.length} of ${ROWS.length} fields match; showing ${shown.length}.`}</Text>
        <Table columns={view === "class" ? classCols : view === "purpose" ? purposeCols : meaningCols} rows={tableRows} />
        {shown.length < filtered.length ? (
          <Grid columns={2} plain>
            <Button label="Show 100 more" variant="primary" onClick={() => setLimit(limit + 100)} />
            <Button label="Show all" onClick={() => setLimit(ROWS.length)} />
          </Grid>
        ) : null}
      </Section>
    </Page>
  );
}


