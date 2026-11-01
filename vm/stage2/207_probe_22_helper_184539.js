function probe_22_helper_184539(win_v8 /* r70 */, v9 /* r227 */) { // entry L184539_193; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, math_v2 /* r205 */, math_v3 /* r204 */, v4 /* r205 */, math_v5 /* r204 */, v6 /* r204 */, v7 /* r202 */, math_v10 /* r199 */, fn_v11 /* r198 */, v12 /* r204 */;
  let v13 /* r202 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 12, math_v3 12, math_v5 12, math_v10 12
  //   Window: win_v8 12
  //   Function: fn_v11 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v9;                                              // #184540:234:150 [L d4 h4 c4]
  math_v2 = win_v8.Math;                                // #184543:146:53 #184553:42:200 [L d4 h4 c4]
  math_v3 = math_v2;                                    // #184558:239:150 [L d4 h4 c4]
  v4 = math_v3.exp(v1);                                 // #184561:4:138 [L d4 h4 c4]
  math_v5 = win_v8.Math;                                // #184577:203:200 [L d4 h4 c4]
  math_v10 = math_v5;                                   // #184582:76:150 [L d4 h4 c4]
  fn_v11 = math_v5.exp;                                 // #184585:243:200 [L d4 h4 c4]
  v6 = -v1;                                             // #184592:31:189 [L d4 h4 c4]
  v7 = fn_v11.call(math_v10, v6);                       // #184595:116:138 [L d4 h4 c4]
  v12 = v4 + v7;                                        // #184612:185:222 [L d4 h4 c4]
  v13 = 2;                                              // #184616:108:72 [L d4 h4 c4]
  v14 = v12 / (2);                                      // #184619:240:105 [L d4 h4 c4]
  return v14;                                           // #184623:192:245 [L d4 h4 c4]
}