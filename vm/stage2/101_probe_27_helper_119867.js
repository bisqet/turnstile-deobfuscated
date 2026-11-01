function probe_27_helper_119867() { // entry L119857_19; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, v2 /* r205 */, v3 /* r204 */, v4 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = clos;                                         // #119858:87:53 #119868:79:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v1 = its home register (H139 CLOS bind)
  v2 = fn_v1();                                         // #119888:239:113 [L d1 h1 c1]
  v3 = ~v2;                                             // #119892:83:5 [L d1 h1 c1]
  v4 = undefined;                                       // #119895:123:233 [L d1 h1 c1]
  return v4;                                            // #119898:223:245 [L d1 h1 c1]
}