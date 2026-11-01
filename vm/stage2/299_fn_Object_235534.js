function fn_Object_235534(v5 /* r227 */) { // entry L235534_50; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 11 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, win_v2 /* r202 */, fn_v3 /* r202 */, v4 /* r205 */, fn_v6 /* r199 */, v7 /* r198 */, v8 /* r196 */, arr_v9 /* r204 */, v10 /* r202 */, v11 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 3
  //   Function: fn_v3 3, fn_v6 3
  //   Array: arr_v9 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v5;                                              // #235535:215:150 [L d1 h1 c1]
  win_v2 = cell[19];                                    // #235538:11:53 #235543:0:236 [L d1 h1 c1]
  fn_v6 = cell[19].Object;                              // #235546:215:200 [L d1 h1 c1]
  fn_v3 = (cell[19].Object).keys;                       // #235551:18:200 [L d1 h1 c1]
  v4 = {};                                              // #235556:92:159 [L d1 h1 c1]
  v7 = "__proto__";                                     // #235558:160:233 [L d1 h1 c1]
  v8 = null;                                            // #235563:212:233 [L d1 h1 c1]
  v4.__proto__ = v8;                                    // #235566:30:199 [L d1 h1 c1]
  v4[v1] = v1;                                          // #235570:192:199 [L d1 h1 c1]
  arr_v9 = fn_v3.call(fn_v6, v4);                       // #235574:209:138 [L d1 h1 c1]
  v10 = 0;                                              // #235592:36:72 [L d1 h1 c1]
  v11 = arr_v9[v10];                                    // #235595:110:7 [L d1 h1 c1]
  return v11;                                           // #235599:198:245 [L d1 h1 c1]
}