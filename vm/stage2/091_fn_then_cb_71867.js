function fn_then_cb_71867() { // entry L71867_91; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 1 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #71868:127:53 #71878:33:233 [L d8 h8 c8]
  return v1;                                            // #71881:109:245 [L d8 h8 c8]
}