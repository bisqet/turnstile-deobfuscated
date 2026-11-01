function probe_22_helper_185341(win_v5 /* r70 */, v6 /* r227 */) { // entry L185341_220; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, math_v2 /* r204 */, math_v3 /* r202 */, math_v4 /* r205 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 39, math_v3 39, math_v4 39
  //   Window: win_v5 39
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v6;                                              // #185342:89:150 [L d13 h13 c13]
  math_v2 = win_v5.Math;                                // #185345:5:53 #185355:93:200 [L d13 h13 c13]
  math_v3 = math_v2;                                    // #185360:22:150 [L d13 h13 c13]
  v7 = math_v3.log(v1);                                 // #185363:79:138 [L d13 h13 c13]
  math_v4 = win_v5.Math;                                // #185379:170:200 [L d13 h13 c13]
  v8 = math_v4.LOG10E;                                  // #185384:89:200 [L d13 h13 c13]
  v9 = v7 * math_v4.LOG10E;                             // #185389:125:13 [L d13 h13 c13]
  return v9;                                            // #185393:89:245 [L d13 h13 c13]
}