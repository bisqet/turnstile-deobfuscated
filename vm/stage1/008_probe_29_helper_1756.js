function probe_29_helper_1756(win_v11 /* r70 */, v12 /* r88 */, win_v13 /* r227 */, v14 /* r248 */) { // entry L1756_219; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop())
  // H133 fn locals: 22 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r199 */, fn_v3 /* r205 */, v4 /* r205 */, v5 /* r196 */, fn_v6 /* r195 */, v7 /* r196 */, v8 /* r195 */, v9 /* r196 */, arr_v10 /* r205 */;
  let win_v15 /* r204 */, v16 /* r202 */, v17 /* r193 */, fn_v18 /* r199 */, fn_v19 /* r198 */, v20 /* r195 */, win_v21 /* r196 */, v22 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3, fn_v6 3, fn_v18 3, fn_v19 3
  //   Array: arr_v10 3
  //   Window: win_v11 3, win_v13 3, win_v15 3, win_v21 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  win_v15 = win_v13;                                    // #1757:28:150 [L d1 h1 c1]
  v16 = v12;                                            // #1760:153:150 [L d1 h1 c1]
  v17 = v14;                                            // #1763:98:150 [L d1 h1 c1]
  NC(29, 30);                                           // #1766:42:53 #1771:203:211 [L d1 h1 c1]
  cell[29] = v16;                                       // #1775:5:195 [L d1 h1 c1]
  cell[30] = v17;                                       // #1778:215:195 [L d1 h1 c1]
  TP(tryStack, 1925, 46, callDepths);                              // #1781:11:53 #1786:233:233 #1789:238:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
  v1 = cell[14];                                        // #1795:33:236 [L d1 h1 c1]
  v2 = win_v15[v16];                                    // #1798:183:7 [L d1 h1 c1]
  v1[v17] = v2;                                         // #1802:53:199 [L d1 h1 c1]
  fn_v3 = win_v11.Object;                               // #1806:120:200 [L d1 h1 c1]
  fn_v18 = fn_v3;                                       // #1811:133:150 [L d1 h1 c1]
  fn_v19 = fn_v3.defineProperty;                        // #1814:136:200 [L d1 h1 c1]
  v4 = {};                                              // #1819:122:159 [L d1 h1 c1]
  v5 = "get";                                           // #1821:198:233 [L d1 h1 c1]
  fn_v6 = clos;                                         // #1828:213:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v6 = its home register (H139 CLOS bind)
  v4[v5] = fn_v6;                                       // #1840:91:199 [L d1 h1 c1]
  v7 = "configurable";                                  // #1844:99:233 [L d1 h1 c1]
  v8 = false;                                           // #1860:75:233 [L d1 h1 c1]
  v4.configurable = false;                              // #1863:121:199 [L d1 h1 c1]
  v9 = "enumerable";                                    // #1867:137:233 [L d1 h1 c1]
  v20 = false;                                          // #1881:89:233 [L d1 h1 c1]
  v4.enumerable = false;                                // #1884:207:199 [L d1 h1 c1]
  win_v21 = fn_v19.call(fn_v18, win_v15, v16, v4);      // #1888:100:138 [L d1 h1 c1]
  arr_v10 = tryStack.pop();                                  // #1918:143:124 [L d1 h1 c1]
  v22 = undefined;                                      // #1921:227:53 #1956:93:233 [L d1 h1 c1]
  return v22;                                           // #1959:185:245 [L d1 h1 c1]
}