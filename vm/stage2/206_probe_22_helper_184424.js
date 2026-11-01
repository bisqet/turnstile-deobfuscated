function probe_22_helper_184424(win_v7 /* r70 */, v8 /* r227 */) { // entry L184424_88; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 16 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let math_v1 /* r205 */, math_v2 /* r205 */, math_v3 /* r199 */, v4 /* r205 */, v5 /* r199 */, v6 /* r205 */, v9 /* r202 */, math_v10 /* r198 */, fn_v11 /* r196 */, v12 /* r195 */;
  let v13 /* r193 */, v14 /* r204 */, v15 /* r199 */, v16 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v1 6, math_v2 6, math_v3 6, math_v10 6
  //   Window: win_v7 6
  //   Function: fn_v11 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v9 = v8;                                              // #184425:229:150 [L d2 h2 c2]
  math_v1 = win_v7.Math;                                // #184428:97:53 #184438:185:200 [L d2 h2 c2]
  math_v10 = math_v1;                                   // #184443:2:150 [L d2 h2 c2]
  fn_v11 = math_v1.pow;                                 // #184446:81:200 [L d2 h2 c2]
  math_v2 = win_v7.Math;                                // #184453:36:200 [L d2 h2 c2]
  math_v3 = math_v2;                                    // #184458:129:150 [L d2 h2 c2]
  v4 = math_v3.abs(v9);                                 // #184461:206:138 [L d2 h2 c2]
  v12 = 1;                                              // #184477:109:72 [L d2 h2 c2]
  v13 = 3;                                              // #184480:80:72 [L d2 h2 c2]
  v5 = (1) / (3);                                       // #184483:68:105 [L d2 h2 c2]
  v14 = fn_v11.call(math_v10, v4, v5);                  // #184487:69:138 [L d2 h2 c2]
  v15 = 0;                                              // #184505:200:72 [L d2 h2 c2]
  v6 = v9 < v15; if (v9 < v15) {                        // #184508:41:186 [L d2 h2 c2]
    v16 = -v14;                                         // #184530:8:189 [-] +#184533:184:53 /* never executed in any replay */
  } else {
    v16 = v14;                                          // #184517:149:53 #184522:77:150 [L d2 h2 c2] +#184525:41:53
  }
  return v16;                                           // #184538:113:245 [L d2 h2 c2]
}