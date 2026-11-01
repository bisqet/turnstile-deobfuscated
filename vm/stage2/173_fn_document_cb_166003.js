function fn_document_cb_166003(v1 /* r227 */, win_v7 /* r70 */, v8 /* r221 */) { // entry L166003_35; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 13 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r204 */, win_v4 /* r204 */, v5 /* r204 */, v6 /* r204 */, win_v9 /* r202 */, fn_v10 /* r198 */, fn_v11 /* r199 */, v12 /* r196 */, v13 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 3, win_v7 3, win_v9 3
  //   Function: fn_v10 3, fn_v11 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #166004:68:150 [L d1 h1 c1]
  v3 = cell[64];                                        // #166007:4:53 #166017:239:236 [L d1 h1 c1]
  if (v3) {                                             // #166020:66:160 [L d1 h1 c1]
    win_v4 = win_v7[v8];                                // #166031:24:7 [L d1 h1 c1]
    win_v9 = win_v4;                                    // #166035:165:150 [L d1 h1 c1]
    fn_v10 = win_v4.removeEventListener;                // #166038:40:200 [L d1 h1 c1]
    v5 = cell[62];                                      // #166043:243:236 [L d1 h1 c1]
    fn_v11 = cell[69];                                  // #166046:82:236 [L d1 h1 c1]
    v12 = fn_v10.call(win_v9, v5, fn_v11);              // #166049:155:138 [L d1 h1 c1]
    v6 = false;                                         // #166083:163:233 [L d1 h1 c1]
    cell[64] = false;                                   // #166086:125:195 [L d1 h1 c1] +#166089:153:53
  } else {
    // #166026:138:53 [-] /* never executed in any replay */
  }
  r204 = cell[61](v2);                                  // #166094:2:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204
  v13 = undefined;                                      // #166098:46:233 [L d1 h1 c1]
  return v13;                                           // #166101:134:245 [L d1 h1 c1]
}