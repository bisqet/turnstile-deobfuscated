function probe_22_helper_184624(win_v4 /* r70 */, v5 /* r227 */) { // entry L184624_165; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, math_v2 /* r204 */, math_v3 /* r202 */, v6 /* r204 */, v7 /* r202 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 6, math_v3 6
  //   Window: win_v4 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v5;                                              // #184625:62:150 [L d2 h2 c2]
  math_v2 = win_v4.Math;                                // #184628:150:53 #184638:61:200 [L d2 h2 c2]
  math_v3 = math_v2;                                    // #184643:118:150 [L d2 h2 c2]
  v6 = math_v3.exp(v1);                                 // #184646:47:138 [L d2 h2 c2]
  v7 = 1;                                               // #184662:138:72 [L d2 h2 c2]
  v8 = v6 - (1);                                        // #184665:239:54 [L d2 h2 c2]
  return v8;                                            // #184669:131:245 [L d2 h2 c2]
}