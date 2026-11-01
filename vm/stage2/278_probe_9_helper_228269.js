function probe_9_helper_228269() { // entry L228259_200; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, v2 /* r205 */, v3 /* r204 */, v4 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = clos;                                         // #228260:120:53 #228270:209:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v1 = its home register (H139 CLOS bind)
  v2 = fn_v1();                                         // #228285:233:113 [L d1 h1 c1]
  v3 = ~v2;                                             // #228289:229:5 [L d1 h1 c1]
  v4 = undefined;                                       // #228292:69:233 [L d1 h1 c1]
  return v4;                                            // #228295:1:245 [L d1 h1 c1]
}