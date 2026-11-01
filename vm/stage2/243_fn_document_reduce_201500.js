function fn_document_reduce_201500(v1 /* r88 */, v2 /* r227 */) { // entry L201500_226; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v3 /* r204 */, v4 /* r202 */, v5 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v3 = v2;                                              // #201501:199:150 [L d15 h15 c15]
  v4 = v1;                                              // #201504:88:150 [L d15 h15 c15]
  v5 = (v2) + (v1);                                     // #201507:200:53 #201517:58:222 [L d15 h15 c15]
  return v5;                                            // #201521:98:245 [L d15 h15 c15]
}