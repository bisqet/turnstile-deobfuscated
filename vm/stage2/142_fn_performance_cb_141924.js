function fn_performance_cb_141924() { // entry L141924_202; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v5 /* r198 */, v6 /* r199 */, v7 /* r205 */, v8 /* r198 */, v9 /* r204 */, v10 /* r205 */;
  let worker_v11 /* r204 */, fn_v12 /* r202 */, v13 /* r198 */, v14 /* r199 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Worker: worker_v11 6
  //   Function: fn_v12 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  r205 = cell[54]();                                    // #141925:242:53 #141935:63:201 [L d3 h3 c3]  VM call: pushes a frame, the callee body returns into r205
  v8 = cell[25] + 1; cell[25] = v8;                     // #141939:201:99 [L d3 h3 c3]
  if (v8 === 3) {                                       // #141943:133:69 [L d3 h3 c3]
    v1 = cell[22];                                      // #141961:67:236 [L d1 h1 c1]
    v9 = 1;                                             // #141964:78:72 [L d1 h1 c1]
    v2 = 1 | cell[22];                                  // #141967:101:32 [L d1 h1 c1]
    cell[22] = 1 | cell[22];                            // #141971:183:195 [L d1 h1 c1]
    r205 = cell[53]();                                  // #141974:175:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
    v10 = undefined;                                    // #141978:103:233 [L d1 h1 c1]
    return v10;                                         // #141981:27:245 [L d1 h1 c1]
  }
  v3 = cell[1];                                         // #141983:136:236 [L d2 h2 c2]
  worker_v11 = cell[1].WdGLU4;                          // #141986:63:200 [L d2 h2 c2]
  fn_v12 = (cell[1].WdGLU4).postMessage;                // #141991:218:200 [L d2 h2 c2]
  v4 = "setTimeout(function(){self.postMessage({ ";     // #141996:166:233 [L d2 h2 c2]
  v5 = "ULaF0";                                         // #142001:66:233 [L d2 h2 c2]
  v6 = ("setTimeout(function(){self.postMessage({ ") + ("ULaF0");  // #142010:207:222 [L d2 h2 c2]
  v13 = ":\"1\"})},55)";                                // #142014:7:233 [L d2 h2 c2]
  v7 = ("setTimeout(function(){self.postMessage({ " + "ULaF0") + ":\"1\"})},55)";  // #142029:192:222 [L d2 h2 c2]
  v14 = fn_v12.call(worker_v11, v7);                    // #142033:209:138 [L d2 h2 c2]
  v15 = undefined;                                      // #142058:129:233 [L d2 h2 c2]
  return v15;                                           // #142061:77:245 [L d2 h2 c2]
}