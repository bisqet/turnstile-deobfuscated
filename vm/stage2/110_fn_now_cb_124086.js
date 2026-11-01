function fn_now_cb_124086(v1 /* r227 */) { // entry L124086_199; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r202 */, v3 /* r204 */, v4 /* r199 */, v5 /* r205 */, v6 /* r198 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #124087:88:150 [L d11 h11 c11]
  v3 = {};                                              // #124090:200:53 #124100:28:159 [L d11 h11 c11]
  v4 = "Kavdk6";                                        // #124102:96:233 [L d11 h11 c11]
  v5 = cell[15];                                        // #124107:75:236 [L d11 h11 c11]
  v6 = cell[15].Kavdk6;                                 // #124110:182:200 [L d11 h11 c11]
  v3.Kavdk6 = cell[15].Kavdk6;                          // #124115:248:199 [L d11 h11 c11]
  v3.gahe1 = v2;                                        // #124119:29:142 [L d11 h11 c11]
  return v3;                                            // #124128:121:245 [L d11 h11 c11]
}