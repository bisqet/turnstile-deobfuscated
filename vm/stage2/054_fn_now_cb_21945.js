function fn_now_cb_21945(win_v6 /* r70 */) { // entry L21945_56; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, fn_v3 /* r204 */, v4 /* r205 */, v5 /* r205 */, v7 /* r205 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3
  //   Window: win_v6 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[37];                                        // #21946:40:53 #21956:63:236 [L d1 h1 c1]
  if (v1) {                                             // #21959:82:160 [L d1 h1 c1]
    v7 = undefined;                                     // #21970:125:233 [-] /* never executed in any replay */
    return v7;                                          // #21973:89:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #21965:90:53 #21975:2:233 [L d1 h1 c1]
  cell[37] = true;                                      // #21978:32:195 [L d1 h1 c1]
  fn_v3 = win_v6.clearTimeout;                          // #21981:119:200 [L d1 h1 c1]
  v4 = cell[38];                                        // #21986:198:236 [L d1 h1 c1]
  v8 = fn_v3.call(win_v6, v4);                          // #21989:63:138 [L d1 h1 c1]
  v5 = cell[34];                                        // #22015:110:236 [L d1 h1 c1]
  r204 = cell[39](v5);                                  // #22018:163:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204
  v9 = undefined;                                       // #22022:139:233 [L d1 h1 c1]
  return v9;                                            // #22025:175:245 [L d1 h1 c1]
}