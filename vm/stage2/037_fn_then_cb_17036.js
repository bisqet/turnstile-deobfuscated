function fn_then_cb_17036(v1 /* r227 */) { // entry L17036_10; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r204 */, v3 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #17037:79:150 [L d1 h1 c1]
  v3 = cell[35];                                        // #17040:163:53 #17050:119:236 [L d1 h1 c1]
  v3.LvRtb9 = v2;                                       // #17053:96:142 [L d1 h1 c1]
  return v3;                                            // #17063:112:245 [L d1 h1 c1]
}