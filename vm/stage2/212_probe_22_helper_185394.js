function probe_22_helper_185394(win_v8 /* r70 */, v9 /* r227 */) { // entry L185394_98; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, math_v2 /* r205 */, math_v3 /* r204 */, v4 /* r205 */, math_v5 /* r204 */, v6 /* r204 */, v7 /* r202 */, math_v10 /* r199 */, fn_v11 /* r198 */, v12 /* r204 */;
  let v13 /* r202 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 30, math_v3 30, math_v5 30, math_v10 30
  //   Window: win_v8 30
  //   Function: fn_v11 30
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v9;                                              // #185395:71:150 [L d10 h10 c10]
  math_v2 = win_v8.Math;                                // #185398:187:53 #185408:156:200 [L d10 h10 c10]
  math_v3 = math_v2;                                    // #185413:25:150 [L d10 h10 c10]
  v4 = math_v3.exp(v1);                                 // #185416:6:138 [L d10 h10 c10]
  math_v5 = win_v8.Math;                                // #185432:69:200 [L d10 h10 c10]
  math_v10 = math_v5;                                   // #185437:94:150 [L d10 h10 c10]
  fn_v11 = math_v5.exp;                                 // #185440:61:200 [L d10 h10 c10]
  v6 = -v1;                                             // #185447:193:189 [L d10 h10 c10]
  v7 = fn_v11.call(math_v10, v6);                       // #185450:14:138 [L d10 h10 c10]
  v12 = v4 - v7;                                        // #185467:99:54 [L d10 h10 c10]
  v13 = 2;                                              // #185471:238:72 [L d10 h10 c10]
  v14 = v12 / (2);                                      // #185474:234:105 [L d10 h10 c10]
  return v14;                                           // #185478:82:245 [L d10 h10 c10]
}