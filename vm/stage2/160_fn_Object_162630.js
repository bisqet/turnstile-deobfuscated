function fn_Object_162630(win_v13 /* r70 */, v14 /* r213 */) { // entry L162620_176; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 21 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, fn_v2 /* r205 */, err_v3 /* r205 */, fn_v4 /* r204 */, v5 /* r204 */, v6 /* r202 */, v7 /* r196 */, fn_v8 /* r195 */, v9 /* r196 */, v10 /* r195 */;
  let v11 /* r196 */, console_v12 /* r202 */, fn_v15 /* r199 */, fn_v16 /* r198 */, v17 /* r195 */, err_v18 /* r196 */, console_v19 /* r204 */, v20 /* r202 */, v21 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3, fn_v4 3, fn_v8 3, fn_v15 3, fn_v16 3
  //   Error: err_v3 3, err_v18 3
  //   console: console_v12 3, console_v19 3
  //   Window: win_v13 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(59);                                               // #162621:192:53 #162631:30:211 [L d1 h1 c1]
  v1 = "dWOK8";                                         // #162634:218:233 [L d1 h1 c1]
  cell[59] = "dWOK8";                                   // #162643:152:195 [L d1 h1 c1]
  fn_v2 = win_v13[v14];                                 // #162646:18:7 [L d1 h1 c1]
  err_v3 = new fn_v2();                                 // #162650:182:1 [L d1 h1 c1]
  fn_v4 = win_v13.Object;                               // #162654:53:200 [L d1 h1 c1]
  fn_v15 = fn_v4;                                       // #162659:142:150 [L d1 h1 c1]
  fn_v16 = fn_v4.defineProperty;                        // #162662:173:200 [L d1 h1 c1]
  v5 = "stack";                                         // #162667:237:233 [L d1 h1 c1]
  v6 = {};                                              // #162672:139:159 [L d1 h1 c1]
  v7 = "get";                                           // #162674:211:233 [L d1 h1 c1]
  fn_v8 = clos;                                         // #162679:238:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v8 = its home register (H139 CLOS bind)
  v6[v7] = fn_v8;                                       // #162688:80:199 [L d1 h1 c1]
  v9 = "configurable";                                  // #162692:196:233 [L d1 h1 c1]
  v10 = false;                                          // #162697:104:233 [L d1 h1 c1]
  v6.configurable = false;                              // #162700:98:199 [L d1 h1 c1]
  v11 = "enumerable";                                   // #162704:14:233 [L d1 h1 c1]
  v17 = false;                                          // #162709:10:233 [L d1 h1 c1]
  v6.enumerable = false;                                // #162712:252:199 [L d1 h1 c1]
  err_v18 = fn_v16.call(fn_v15, err_v3, v5, v6);        // #162716:29:138 [L d1 h1 c1]
  console_v12 = win_v13.console;                        // #162746:192:200 [L d1 h1 c1]
  console_v19 = console_v12;                            // #162751:173:150 [L d1 h1 c1]
  v20 = console_v19.debug(err_v3);                      // #162754:74:138 [L d1 h1 c1]
  v21 = cell[59];                                       // #162772:13:236 [L d1 h1 c1]
  return cell[59];                                      // #162775:169:245 [L d1 h1 c1]
}