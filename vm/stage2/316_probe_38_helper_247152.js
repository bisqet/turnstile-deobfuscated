function probe_38_helper_247152() { // entry L247152_87; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r202 */, win_v3 /* r205 */, win_v4 /* r202 */, fn_v5 /* r199 */, v6 /* r205 */, v7 /* r205 */, v8 /* r204 */, v9 /* r198 */, fn_v10 /* r199 */;
  let v11 /* r202 */, v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v4 3
  //   Function: fn_v5 3, fn_v10 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  clos;                                                 // #247153:139:53 #247163:20:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  v1 = cell[1];                                         // #247188:47:236 [L d1 h1 c1]
  v2 = v1[r220];                                        // #247191:13:7 [L d1 h1 c1]
  v8 = v1[v2];                                          // #247195:243:7 [L d1 h1 c1]
  win_v3 = r70[r221];                                   // #247199:193:7 [L d1 h1 c1]
  win_v4 = win_v3;                                      // #247203:234:150 [L d1 h1 c1]
  fn_v5 = win_v4[r209];                                 // #247206:156:7 [L d1 h1 c1]
  v6 = KP(247209);                                      // #247210:224:233 [L d1 h1 c1]
  v9 = fn_v5.call(win_v4, v6);                          // #247263:113:138 [L d1 h1 c1]
  fn_v10 = clos;                                        // #247283:148:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  v7 = "hMYS1";                                         // #247308:248:233 [L d1 h1 c1]
  v11 = fn_v10();                                       // #247317:52:113 [L d1 h1 c1]
  v8.hMYS1 = v11;                                       // #247321:254:199 [L d1 h1]
  v12 = undefined;                                      // #247325:58:233 [L d1 h1]
  return v12;                                           // #247328:98:245 [L d1 h1]
}