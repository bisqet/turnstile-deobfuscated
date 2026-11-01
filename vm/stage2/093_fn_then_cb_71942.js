function fn_then_cb_71942() { // entry L71942_57; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 1 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = 1;                                               // #71943:101:53 #71953:188:72 [L d1 h1 c1]
  return 1;                                             // #71956:92:245 [L d1 h1 c1]
}