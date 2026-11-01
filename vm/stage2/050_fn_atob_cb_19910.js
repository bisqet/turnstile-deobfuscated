function fn_atob_cb_19910() { // entry L19910_50; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, fn_v2 /* r204 */, v3 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v2 = cell[62];                                     // #19911:186:53 #19921:72:236 [L d1 h1 c1]
  v1 = 32;                                              // #19924:127:72 [L d1 h1 c1]
  r202 = cell[58](fn_v2, v1);                           // #19927:28:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202
  v3 = undefined;                                       // #19932:96:233 [L d1 h1 c1]
  return v3;                                            // #19935:112:245 [L d1 h1 c1]
}