function probe_22_helper_184352(win_v7 /* r70 */, v8 /* r227 */) { // entry L184352_151; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let math_v1 /* r205 */, math_v2 /* r202 */, v3 /* r205 */, v4 /* r204 */, v5 /* r205 */, v6 /* r205 */, v9 /* r196 */, fn_v10 /* r199 */, v11 /* r198 */, v12 /* r204 */;
  let v13 /* r202 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v1 3, math_v2 3
  //   Window: win_v7 3
  //   Function: fn_v10 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v9 = v8;                                              // #184353:232:150 [L d1 h1 c1]
  math_v1 = win_v7.Math;                                // #184356:24:53 #184366:101:200 [L d1 h1 c1]
  math_v2 = math_v1;                                    // #184371:254:150 [L d1 h1 c1]
  fn_v10 = math_v1.log;                                 // #184374:93:200 [L d1 h1 c1]
  v3 = 1;                                               // #184381:128:72 [L d1 h1 c1]
  v4 = (1) + v9;                                        // #184384:149:222 [L d1 h1 c1]
  v5 = 1;                                               // #184388:216:72 [L d1 h1 c1]
  v11 = (1) - v9;                                       // #184391:133:54 [L d1 h1 c1]
  v6 = v4 / v11;                                        // #184395:229:105 [L d1 h1 c1]
  v12 = fn_v10.call(math_v2, v6);                       // #184399:162:138 [L d1 h1 c1]
  v13 = 2;                                              // #184416:241:72 [L d1 h1 c1]
  v14 = v12 / (2);                                      // #184419:161:105 [L d1 h1 c1]
  return v14;                                           // #184423:237:245 [L d1 h1 c1]
}