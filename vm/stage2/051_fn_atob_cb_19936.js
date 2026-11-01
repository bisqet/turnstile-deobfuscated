function fn_atob_cb_19936() { // entry L19936_220; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r205 */, fn_v2 /* r202 */, v3 /* r204 */, v4 /* r199 */, v5 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v2 = cell[50];                                     // #19937:60:53 #19947:76:236 [L d1 h1 c1]
  v3 = undefined;                                       // #19950:208:233 [L d1 h1 c1]
  fn_v1 = clos;                                         // #19953:55:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v1 = its home register (H139 CLOS bind)
  v4 = MC(v3, fn_v2, fn_v1);                            // #19964:116:114 [L d1 h1 c1]
  v5 = undefined;                                       // #19969:88:233 [L d1 h1 c1]
  return v5;                                            // #19972:136:245 [L d1 h1 c1]
}