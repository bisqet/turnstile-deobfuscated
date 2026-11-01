# turnstile-deobfuscated

Readable, execution-verified deobfuscation of the Cloudflare Turnstile client, **build 3158346939**.

Site (payload variability: which payload fields are constant, per challenge, per machine, or per run): https://bisqet.github.io/turnstile-deobfuscated/

This repo holds only the readable code and the documents. It is a research artifact produced by the private
pipeline repo [bisqet/turnstile-deob](https://github.com/bisqet/turnstile-deob).

Research only: no token generator, no forged or modified payloads, no challenge solving. No captured values,
pins, ray IDs, VM-endpoint paths or challenge options are stored here.

## How the code was verified

The pipeline only accepts a readable file when the real Cloudflare code, replayed offline and deterministically,
behaves the same with the readable text substituted:

- **Payload byte-identical:** the pre-encryption payload plaintext produced with the readable VM functions and
  the readable orchestrator served in place of the originals is byte-identical to the one from the original code.
- **Golden sha:** that plaintext's sha256 equals the recorded golden value on every gate run (several baseline and
  substituted runs, plus negative controls that show a changed statement changes the result).

Per-function verification class (`SC-verified`, `SHA-gated`, `gated, not executed`, …) is in
[`vm/index.json`](vm/index.json); the classes are defined in
[`docs/FINAL-README-3158346939.md`](docs/FINAL-README-3158346939.md#verification-classes).

## Before / after

Short excerpts from each layer. Both sides are real code from build 3158346939, trimmed with `// ...`. In the VM functions the trailing trace comments (`// #pc:key:op [...]`) are dropped for width.

### 1. Orchestrator: strings, opaque numbers, indirect calls, names

The served orchestrator is one minified line. The passes: `a0(`…`)` string decoding with its lazy caches, folding of opaque XOR arithmetic (`263997861^_0xc62994` → `30`), `zW` → `window` and `["k"]` → `.k`, unwrapping of indirect calls (`(jP[1], d7)(…)` → `d7(…)`), folding of single-literal locals, then typed names (`str_`, `arr_`, `int_`), role comments and one statement per line for display.

Before: served challenge page, inline orchestrator script, line 1 from column 415389, wrapped at 120 chars:

```js
zW[yk||(yk=a0(`78fV0N2a`))]=[],zW[ym||(ym=a0(`/trf8Ig=`))]=263997861^_0xc62994,zW[yg||(yg=a0(`/N7e0dGa`))]=function(ju){
var jP;jP=yk||(yk=a0(`78fV0N2a`)),zW[jP][ar||(ar=a0(`1czXzs3B`))]<zW[ym||(ym=a0(`/trf8Ig=`))]&&zW[jP][kC||(kC=a0(`ydzKwQ
==`))](ju)},zW[yn||(yn=a0(`zObd5Nub`))]=function(jN){var ju;var jP;var jf;var jT;ju=yk||(yk=a0(`78fV0N2a`)),jP=[void(261
80^(10908^(13390|0)+(24894^24894)^30870)),void 0],jf=jP[63921^(54955^33765^59759)^17809]=0,(43754^(11378^(53414^(22078|0
)+(64142^64142))),zX[4855^37925^24494^55677])((jP[10888^(47987^((10475|0)+(59647^59647)^47377))],d7)(zW[ju]),jP[1])?zW[j
u][zW[ju][ar||(ar=a0(`1czXzs3B`))]-1]=jN:(jP[1],sx)(jP[0]=(jP[1],zW),jP[7381^(62715^46275^31667^10078)][yg||(yg=a0(`/N7e
0dGa`))],jN)},zW[yo||(yo=a0(`yN7o+9Ce`))]=function(){zW[yk||(yk=a0(`78fV0N2a`))][nw||(nw=a0(`ycbJ`))]()}
```

After: [`orchestrator/orchestrator.display.js` L11858–11879](orchestrator/orchestrator.display.js#L11858-L11879) (= [`orchestrator.readable.js` L8438–8447](orchestrator/orchestrator.readable.js#L8438-L8447) via the line map):

```js
    }, /* role: breadcrumb stack (max GsfY1 = 30 entries), joined with '>' into error reports [code] */window.Vnlyd3 = [], /* role: breadcrumb stack cap [code] */window.GsfY1 = 30, /* role: breadcrumb push (if below cap) [exec: 86 calls in g15 t1] */window.Ewgxh3 = function (str_ju) {
      var str_jP;
      str_jP = "Vnlyd3";
      if (window.Vnlyd3.length < window.GsfY1) {
        window[str_jP].push(str_ju);
      }
    }, /* role: breadcrumb replace-top (push if empty) [exec: 74 calls] */window.uOdMb2 = function (str_jN) {
      // ... (var declarations)
      str_ju = "Vnlyd3";
      arr_jP = [void 0, void 0];
      int_jf = arr_jP[1] = 0;
      if ((0, arr_zX[1])(d7(window.Vnlyd3), arr_jP[1])) {
        window.Vnlyd3[window.Vnlyd3.length - 1] = str_jN;
      } else {
        sx(arr_jP[0] = (arr_jP[1], window), arr_jP[0].Ewgxh3, str_jN);
      }
    }, /* role: breadcrumb pop [exec: 44 calls] */window.qwQRi7 = function () {
      window.Vnlyd3.pop();
    }, // ...
```

### 2. VM stage 1: listing → lift → readable function

Stage 1 is 5978 bytes of encrypted bytecode. The PC-accurate listing gives each instruction's pc, rolling key and opcode. The lift turns each opcode into a register statement by running the real handlers. The final step binds registers to locals, names them by the class of the values they held (`win_`, `arr_`, `fn_`), and turns the register return epilogue into `return`.

Before (listing): [`stage1.int-plain-1.dis.txt` L263–272](https://github.com/bisqet/turnstile-deob/blob/48b8ca62f65a7b3d2ba66278e831643696f9037f/tools/deob-auto/out/3158346939/stage1.int-plain-1.dis.txt#L263-L272) in the pipeline repo:

```text
  1699 k75   op53   →1709
  1709 k3    op7    →1713
  1713 k145  op200  →1718
  1718 k100  op200  →1723
  1723 k171  op236  →1726
  1726 k42   op138  →1744
  1744 k19   op236  →1747
  1747 k242  op236  →1750
  1750 k21   op7    →1754
  1754 k219  op245      UNRESOLVED TypeError:
```

Lift of the same pcs: [`stage1.int-plain-1.lift.js` L346–355](https://github.com/bisqet/turnstile-deob/blob/48b8ca62f65a7b3d2ba66278e831643696f9037f/tools/deob-auto/out/3158346939/stage1.int-plain-1.lift.js#L346-L355):

```js
L1709_3:
  r204 = r70[r223];
  r205 = r204.hbRVt7;
  r204 = r205.push;
  r193 = cell[30];
  r202 = r204.call(r205, r193);
  r205 = cell[14];
  r202 = cell[29];
  r204 = r205[r202];
  r162 = r204; r48.length = r194.pop(); return r204;
```

After: [`vm/stage1/007_probe_29_helper_1699.js` L1, L10–19](vm/stage1/007_probe_29_helper_1699.js#L10-L19):

```js
function probe_29_helper_1699(win_v5 /* r70 */, v6 /* r223 */) { // entry L1699_75; ...
  win_v1 = win_v5[v6];
  arr_v2 = win_v1.hbRVt7;
  fn_v3 = arr_v2.push;
  v7 = cell[30];
  v4 = fn_v3.call(arr_v2, v7);
  v8 = cell[14];
  v9 = cell[29];
  v10 = v8[v9];
  return v10;
}
```

### 3. VM stage 2: bytes → listing → structured function

A stage-2 probe that scans `document.head` for a comment node containing `UIPATH_EXTENSION_ID:`. The bytes are decoded per instruction with a rolling key. The listing shows conditional branches (`op186`, `op160`) and a back edge (`op53 →227381`). The final text has a `while` loop and an `if`/`else` rebuilt from those edges, with named locals (`doc_`, `elHead_`, `nodeList_`).

Before: raw bytes at the function entry ([docs/PIPELINE-3158346939.md, V1](docs/PIPELINE-3158346939.md#v1-raw-bytes)):

```text
// stage-2 bytecode (483067 bytes), first 37 bytes of the function at 227243 (still under the per-instruction key)
227243  23 0b 3f 81 39 7c 8f bb fd b5 74 98 d1 3d 38 7d
227259  01 c2 7f f4 55 cc 77 c8 94 51 18 64 de 0d 6f 67
227275  72 0d 75 66 86
```

Listing of the loop: [`stage2.int-plain-1.dis.txt` L27504–27532](https://github.com/bisqet/turnstile-deob/blob/48b8ca62f65a7b3d2ba66278e831643696f9037f/tools/deob-auto/out/3158346939/stage2.int-plain-1.dis.txt#L27504-L27532) in the pipeline repo:

```text
227280 k39   op233  →227304   r199="UIPATH_EXTENSION_ID:"
227304 k255  op72   →227307   r195=0
// ...
227381 k178  op48   →227391
227391 k36   op7    →227395
227395 k110  op186  →227413 →227503
227413 k27   op20   →227418
227418 k98   op20   →227423
227423 k77   op65   →227427   r202=true
227427 k5    op160  →227446 →227433
227433 k128  op53   →227438
227438 k252  op150  →227441
227441 k249  op53   →227480
227446 k121  op20   →227451
227451 k200  op138  →227472
227472 k185  op150  →227475
227475 k2    op53   →227480
227480 k44   op160  →227491 →227486
227486 k203  op53   →227381
227491 k249  op245
227503 k157  op233  →227506   r205=false
```

After: [`vm/stage2/276_fn_document_227253.js` L13–44](vm/stage2/276_fn_document_227253.js#L13-L44):

```js
function fn_document_227253(win_v6 /* r70 */) { // entry L227243_207; ...
  // ... (locals, type notes)
  doc_v1 = win_v6.document;
  elHead_v2 = doc_v1.head;
  nodeList_v7 = (doc_v1.head).childNodes;
  // ... (string constants v8..v16)
  v16 = true;
  while ((v17 = nodeList_v7[v11], v18 = v9 < v17, v9 < v17)) {
    v5 = nodeList_v7[v9][v12];
    v19 = win_v6[v13][v14];
    v20 = v5 === v19;
    if (v20) {
      v22 = nodeList_v7[v9][v15];
      v23 = v22.includes(v8);
      v21 = v23;
    } else {
      v21 = v20;
    }
    if (v21) {
      return v16;
    }
    v4 = v9; v9 = v9 + v10;
  }
  v24 = false;
  return false;
}
```

The full chain for this function (V1–V19), and the orchestrator fragment above (O1–O7), are in [docs/PIPELINE-3158346939.md](docs/PIPELINE-3158346939.md#running-examples-the-code-after-each-step).

### 4. Payload: collector code → field map

The probe-33 collector writes Network Information values under short obfuscated keys. The payload files give each key its path, meaning, source API, type and writing line. The writing pc comes from a Proxy set-trap.

Before: collector in [`vm/stage2/184_fn_navigator_172338.js` L25–52](vm/stage2/184_fn_navigator_172338.js#L25-L52):

```js
  networkInformation_v9 = navigator_v8.connection;
  cell[20] = navigator_v8.connection;
  fn_v36 = clos;
  v10 = "vHqDD3";
  v11 = undefined;
  v12 = "downlink";
  v13 = MC(undefined, fn_v36, "downlink");
  v35.vHqDD3 = v13;
  // ... (downlinkMax, effectiveType, rtt)
  v26 = "rLqE9";
  v27 = undefined;
  v28 = "saveData";
  v29 = MC(undefined, fn_v36, "saveData");
  v35.rLqE9 = v29;
```

After: the two rows in [`payload/payload-inventory.json`](payload/payload-inventory.json) (selected keys):

```json
[
  {
    "path": "33.vHqDD3",
    "plain": "Downlink estimate",
    "api": "navigator.connection.downlink",
    "type": "number",
    "writer": "stage2/184_fn_navigator_172338.js:32",
    "writerBasis": "setTrap"
  },
  {
    "path": "33.rLqE9",
    "plain": "Data-saver flag",
    "api": "navigator.connection.saveData",
    "type": "boolean",
    "writer": "stage2/184_fn_navigator_172338.js:52",
    "writerBasis": "setTrap"
  }
]
```

### 5. api.js: constant folding and formatting

api.js has no string decoder. The readable version only folds constant expressions (`180*1e3` → `180000`) and pretty-prints; identifiers keep their minified names.

Before: served `api.js` (`/turnstile/v0/g/<hash>/api.js`), line 2 from column 4117, wrapped at 120 chars:

```js
var $t="cf-chl-widget-",J="cloudflare-challenge",$n=".cf-turnstile",Zn=".cf-challenge",ea=".g-recaptcha",ta="cf-turnstil
e-response",ra="g-recaptcha-response",it=3e4,It=180*1e3,na=1e4,aa=8e3,ia=3600*1e3,Fr="private-token",oa=300,ua=10,la=200
100,ca=200500,da=300020,Zt=300030,er=300031,sa=3,fa=500,pa=500,ke="",Hr="_cftscs_",va=512;
```

After: [`api/api.readable.js` L220–245](api/api.readable.js#L220-L245):

```js
    var $t = "cf-chl-widget-",
      J = "cloudflare-challenge",
      $n = ".cf-turnstile",
      Zn = ".cf-challenge",
      ea = ".g-recaptcha",
      ta = "cf-turnstile-response",
      ra = "g-recaptcha-response",
      it = 3e4,
      It = 180000,
      na = 1e4,
      aa = 8e3,
      ia = 3600000,
      Fr = "private-token",
      oa = 300,
      ua = 10,
      la = 200100,
      ca = 200500,
      da = 300020,
      Zt = 300030,
      er = 300031,
      sa = 3,
      fa = 500,
      pa = 500,
      ke = "",
      Hr = "_cftscs_",
      va = 512;
```

## Layout

| Path | Files | What it is |
|---|---|---|
| [`vm/stage1/`](vm/stage1/) | 11 | Stage-1 VM program, one readable JS file per function (`NNN_<name>.js`) |
| [`vm/stage2/`](vm/stage2/) | 325 | Stage-2 VM program (fingerprint probes, bag, encrypt/send), one file per function |
| [`vm/index.json`](vm/index.json) | 1 | Per-function index: source line range, sha256, verification class, statement and step counts, variation results |
| [`orchestrator/orchestrator.readable.js`](orchestrator/orchestrator.readable.js) | 1 | Host orchestrator, executable readable form (the text the gates execute) |
| [`orchestrator/orchestrator.display.js`](orchestrator/orchestrator.display.js) | 1 | Same orchestrator, display form: statements split, names, role comments, per-function payload-field headers |
| [`orchestrator/orchestrator.display.linemap.json`](orchestrator/orchestrator.display.linemap.json) | 1 | Display line → readable (executed) line; needed because docs cite `orchestrator.readable.js` line numbers |
| [`api/api.readable.js`](api/api.readable.js) | 1 | Readable `api.js` loader (sensitive literals replaced by placeholders) |
| [`payload/`](payload/) | 6 | Payload schema: `payload-field-map.json` (746 fields: path, offset, writer fn + PC), `payload-inventory.json`, `payload-variability.json`, `payload-purpose.json`, `payload-xref.json` (field ↔ writer fn file:line), `fn-fields.md` |
| [`docs/`](docs/) | 13 | Documents (below) |

## How the files map to each other

- `vm/index.json` → `stage1[]` / `stage2[]` entries name a file by `stageN/NNN_<fn>.js`, relative to `vm/`.
- Each VM statement ends with `// #<pc>:<key>:<op> [marks]`: the bytecode PC, step key and opcode it came from.
  `fn-fields.md`, `payload-xref.json` and `payload-field-map.json` refer to functions by these names and PCs.
- `payload-*.json` paths of the form `stage2/NNN_<fn>.js:<line>` or `orchestrator.readable.js:<line>` are relative to
  the pipeline's `final/` directory: read them as `vm/stage2/…` and `orchestrator/…` here.
- Orchestrator line numbers in docs refer to `orchestrator.readable.js`; use the linemap to find the display line.
- Payload field names (`1.QVHD7`, `14.CJkad9`, …) are Cloudflare's obfuscated keys (schema). Bucket keys that are
  captured values appear only as `<vNN>` placeholders.

## Documents

| Doc | Content |
|---|---|
| [RESULT-3158346939](docs/RESULT-3158346939.md) | Self-contained summary of the end state — start here |
| [FINAL-README-3158346939](docs/FINAL-README-3158346939.md) | The deliverable's own README: files, verification classes, notation of the readable code |
| [ORCHESTRATOR-3158346939](docs/ORCHESTRATOR-3158346939.md) | Orchestrator structure, transforms, roles |
| [PAYLOAD-3158346939](docs/PAYLOAD-3158346939.md) | Every payload field: meaning, writer, type, hook sensitivity |
| [PAYLOAD-VARIABILITY-3158346939](docs/PAYLOAD-VARIABILITY-3158346939.md) | Which fields are constant, per-challenge, per-machine, per-run |
| [PROBES-3158346939](docs/PROBES-3158346939.md) | Probe catalogue: field → function → browser API |
| [HOOK-DIFF-3158346939](docs/HOOK-DIFF-3158346939.md) | Hook vs no-hook branch differences |
| [STUBS-3158346939](docs/STUBS-3158346939.md) | Determinism stubs / replay mechanisms used by the replay (mechanisms only) |
| [PIPELINE-3158346939](docs/PIPELINE-3158346939.md) | As-built pipeline, step by step, with running examples |
| [build-3158346939](docs/build-3158346939.md) | Full research log §H1…§H150 |
| [FULL-DEOB-PLAN](docs/FULL-DEOB-PLAN.md), [ROADMAP](docs/ROADMAP.md), [turnstile-internals](docs/turnstile-internals.md) | Overall plan, milestones, loader/orchestrator/VM/payload architecture notes (the last also covers earlier builds) |

## Notes on paths and placeholders in the docs

- **Tool paths** (`tools/…`, `*.mjs`, `*.py`, `subst-tab-*.json`, `readable-h*/`, `evidence-h*.json`, `re/…`) refer to the
  pipeline repo bisqet/turnstile-deob; they are not in this repo. Links to them point at the pipeline snapshot.
  Plain-text mentions of `tools/deob-auto/out/3158346939/final/` mean the pipeline's output directory, whose readable
  files are the ones in this repo. Paths under `/workspace/…` are local working directories of the pipeline machine.
- `<vm-endpoint>` replaces the Turnstile VM endpoint path; `<chl-opt>` replaces the name of the host page's
  challenge-options global (called `challenge_api` in the payload docs); `<host-tz>` replaces the replay machine's
  default time zone; `<vNN>` replaces captured value keys.
