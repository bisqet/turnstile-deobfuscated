function fn_atob_cb_18624(v1 /* r88 */, v2 /* r227 */) { // entry L18624_67; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v3 /* r204 */, v4 /* r202 */, v5 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v3 = v2;                                              // #18625:228:150 [L d9 h9 c9]
  v4 = v1;                                              // #18628:65:150 [L d9 h9 c9]
  v5 = (v2) + (v1);                                     // #18631:77:53 #18641:160:222 [L d9 h9 c9]
  return v5;                                            // #18645:176:245 [L d9 h9 c9]
}