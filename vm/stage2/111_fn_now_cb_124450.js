function fn_now_cb_124450(win_v4 /* r70 */, fn_v5 /* r227 */) { // entry L124450_38; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, fn_v2 /* r204 */, fn_v3 /* r205 */, fn_v6 /* r199 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 33, fn_v2 33, fn_v3 33, fn_v5 33, fn_v6 33
  //   Window: win_v4 33
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = fn_v5;                                        // #124451:251:150 [L d11 h11 c11]
  NC(21);                                               // #124454:159:53 #124459:93:211 [L d11 h11 c11]
  cell[21] = fn_v1;                                     // #124462:207:195 [L d11 h11 c11]
  fn_v6 = win_v4.setTimeout;                            // #124465:35:53 #124470:184:200 [L d11 h11 c11]
  fn_v2 = clos;                                         // #124475:127:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v2 = its home register (H139 CLOS bind)
  fn_v3 = fn_v2;                                        // #124490:48:150 [L d11 h11 c11]
  v7 = cell[16];                                        // #124493:219:236 [L d11 h11 c11]
  v8 = fn_v6.call(win_v4, fn_v3, v7);                   // #124496:64:138 [L d11 h11 c11]
  cell[18] = v8;                                        // #124521:230:195 [L d11 h11 c11]
  v9 = undefined;                                       // #124524:130:233 [L d11 h11 c11]
  return v9;                                            // #124527:138:245 [L d11 h11 c11]
}