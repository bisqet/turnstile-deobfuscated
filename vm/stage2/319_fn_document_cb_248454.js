function fn_document_cb_248454(v1 /* r227 */) { // entry L248454_202; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r196 */, v3 /* r205 */, v4 /* r204 */, v5 /* r199 */, v6 /* r198 */, v7 /* r202 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #248455:15:150 [L d1 h1 c1]
  v3 = {};                                              // #248458:99:53 #248468:5:159 [L d1 h1 c1]
  v4 = "TXvS8";                                         // #248470:229:233 [L d1 h1 c1]
  v5 = 0;                                               // #248479:232:72 [L d1 h1 c1]
  v6 = 32;                                              // #248482:159:72 [L d1 h1 c1]
  v7 = (v2).substring(v5, v6);                          // #248485:244:138 [L d1 h1 c1]
  v3.TXvS8 = v7;                                        // #248508:190:199 [L d1 h1 c1]
  return v3;                                            // #248512:214:245 [L d1 h1 c1]
}