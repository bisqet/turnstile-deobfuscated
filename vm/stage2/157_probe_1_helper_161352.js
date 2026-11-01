function probe_1_helper_161352() { // entry L161313_152; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r198 */, fn_v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, fn_v5 /* r202 */, fn_v6 /* r199 */, v7 /* r196 */, v8 /* r204 */, v9 /* r198 */, v10 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3, fn_v5 3, fn_v6 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  clos;                                                 // #161314:8:53 #161324:157:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v1 = clos;                                         // #161353:16:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v1 = its home register (H139 CLOS bind)
  fn_v2 = r70.Object;                                   // #161382:167:200 [L d1 h1 c1]
  fn_v5 = fn_v2;                                        // #161387:184:150 [L d1 h1 c1]
  fn_v6 = fn_v2.assign;                                 // #161390:175:200 [L d1 h1 c1]
  v3 = cell[1];                                         // #161400:30:236 [L d1 h1 c1]
  v7 = v3[r220];                                        // #161403:0:7 [L d1 h1 c1]
  v8 = v3[v7];                                          // #161407:218:7 [L d1 h1 c1]
  v4 = fn_v1();                                         // #161411:14:113 [L d1 h1 c1]
  v9 = fn_v6.call(fn_v5, v8, v4);                       // #161415:103:138 [L d1 h1 c1]
  v10 = undefined;                                      // #161436:63:233 [L d1 h1 c1]
  return v10;                                           // #161439:147:245 [L d1 h1 c1]
}