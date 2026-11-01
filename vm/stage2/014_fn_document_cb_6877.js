function fn_document_cb_6877(v1 /* r227 */) { // entry L6877_180; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r196 */, v3 /* r205 */, v4 /* r204 */, v5 /* r199 */, v6 /* r198 */, v7 /* r202 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #6878:209:150 [L d1 h1 c1]
  v3 = {};                                              // #6881:157:53 #6891:108:159 [L d1 h1 c1]
  v4 = "yybGm2";                                        // #6893:112:233 [L d1 h1 c1]
  v5 = 0;                                               // #6898:7:72 [L d1 h1 c1]
  v6 = 32;                                              // #6901:2:72 [L d1 h1 c1]
  v7 = (v2).substring(v5, v6);                          // #6904:139:138 [L d1 h1 c1]
  v3.yybGm2 = v7;                                       // #6927:185:199 [L d1 h1 c1]
  return v3;                                            // #6931:165:245 [L d1 h1 c1]
}