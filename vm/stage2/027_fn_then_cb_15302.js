function fn_then_cb_15302(v4 /* r227 */) { // entry L15302_72; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let arr_v1 /* r205 */, v2 /* r198 */, v3 /* r205 */, v5 /* r196 */, fn_v6 /* r204 */, v7 /* r199 */, arr_v8 /* r202 */, v9 /* r198 */, v10 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v8 3
  //   Function: fn_v6 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v5 = v4;                                              // #15303:21:150 [L d1 h1 c1]
  fn_v6 = cell[34];                                     // #15306:209:53 #15316:121:236 [L d1 h1 c1]
  v7 = undefined;                                       // #15319:137:233 [L d1 h1 c1]
  arr_v8 = [];                                          // #15322:83:107 [L d1 h1 c1]
  arr_v1 = cell[36];                                    // #15324:50:236 [L d1 h1 c1]
  v2 = 0; arr_v8[0] = cell[36];                         // #15327:75:26 [L d1 h1 c1]
  v9 = 1; arr_v8[1] = v5;                               // #15332:64:26 [L d1 h1 c1]
  v3 = MC(v7, fn_v6, arr_v8);                           // #15337:153:114 [L d1 h1 c1]
  v10 = undefined;                                      // #15342:41:233 [L d1 h1 c1]
  return v10;                                           // #15345:85:245 [L d1 h1 c1]
}