function fn_navigator_forEach_222845(v2 /* r88 */, v3 /* r227 */) { // entry L222845_42; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v4 /* r202 */, v5 /* r204 */, v6 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v4 = v3;                                              // #222846:239:150 [L d48 h49 c48]
  v1 = v2;                                              // #222849:224:150 [L d48 h49 c48]
  v5 = cell[23];                                        // #222852:48:53 #222862:103:236 [L d48 h49 c48]
  v5[v1] = v4;                                          // #222865:37:199 [L d48 h49 c48]
  v6 = undefined;                                       // #222869:133:233 [L d48 h49 c48]
  return v6;                                            // #222872:65:245 [L d48 h49 c48]
}