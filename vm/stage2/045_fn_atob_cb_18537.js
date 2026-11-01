function fn_atob_cb_18537(win_v4 /* r70 */, v5 /* r88 */, v6 /* r214 */, v7 /* r221 */, fn_v8 /* r227 */) { // entry L18537_204; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let win_v1 /* r204 */, v2 /* r204 */, win_v3 /* r204 */, fn_v9 /* r205 */, v10 /* r202 */, fn_v11 /* r199 */, win_v12 /* r199 */, v13 /* r204 */, v14 /* r204 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 9, win_v3 9, win_v4 9, win_v12 9
  //   Function: fn_v8 9, fn_v9 9, fn_v11 9
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  fn_v9 = fn_v8;                                        // #18538:137:150 [L d3 h3 c3]
  v10 = v5;                                             // #18541:146:150 [L d3 h3 c3]
  win_v1 = win_v4[v7];                                  // #18544:154:53 #18554:219:7 [L d3 h3 c3]
  fn_v11 = win_v1.setTimeout;                           // #18558:6:200 [L d3 h3 c3]
  v2 = typeof fn_v11;                                   // #18563:154:193 [L d3 h3 c3]
  if (v2 === v6) {                                      // #18566:62:161 [L d3 h3 c3]
    win_v3 = win_v4[v7];                                // #18583:125:7 [L d3 h3 c3]
    win_v12 = win_v3;                                   // #18587:182:150 [L d3 h3 c3]
    v13 = (win_v12).setTimeout(fn_v9, v10);             // #18590:111:138 [L d3 h3 c3]
    return v13;                                         // #18614:3:245 [L d3 h3 c3]
  }
  v14 = fn_v9();                                        // #18616:251:113 [-] /* never executed in any replay */
  v15 = 0;                                              // #18620:38:72 [-] /* never executed in any replay */
  return 0;                                             // #18623:158:245 [-] /* never executed in any replay */
}