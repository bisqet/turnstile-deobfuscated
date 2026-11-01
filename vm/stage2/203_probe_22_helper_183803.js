function probe_22_helper_183803(win_v6 /* r70 */, v7 /* r227 */) { // entry L183803_119; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, math_v2 /* r204 */, math_v3 /* r204 */, v4 /* r198 */, v5 /* r204 */, math_v8 /* r202 */, fn_v9 /* r199 */, math_v10 /* r196 */, fn_v11 /* r195 */, v12 /* r193 */;
  let v13 /* r198 */, v14 /* r204 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 9, math_v3 9, math_v8 9, math_v10 9
  //   Window: win_v6 9
  //   Function: fn_v9 9, fn_v11 9
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v7;                                              // #183804:72:150 [L d3 h3 c3]
  math_v2 = win_v6.Math;                                // #183807:248:53 #183817:96:200 [L d3 h3 c3]
  math_v8 = math_v2;                                    // #183822:205:150 [L d3 h3 c3]
  fn_v9 = math_v2.log;                                  // #183825:176:200 [L d3 h3 c3]
  math_v3 = win_v6.Math;                                // #183832:199:200 [L d3 h3 c3]
  math_v10 = math_v3;                                   // #183837:88:150 [L d3 h3 c3]
  fn_v11 = math_v3.sqrt;                                // #183840:207:200 [L d3 h3 c3]
  v4 = v1 * v1;                                         // #183848:155:13 [L d3 h3 c3]
  v12 = 1;                                              // #183852:70:72 [L d3 h3 c3]
  v5 = v4 - (1);                                        // #183855:187:54 [L d3 h3 c3]
  v13 = fn_v11.call(math_v10, v5);                      // #183859:160:138 [L d3 h3 c3]
  v14 = v1 + v13;                                       // #183877:53:222 [L d3 h3 c3]
  v15 = fn_v9.call(math_v8, v14);                       // #183881:178:138 [L d3 h3 c3]
  return v15;                                           // #183898:250:245 [L d3 h3 c3]
}