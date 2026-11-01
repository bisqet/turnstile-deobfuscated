function fn_performance_cb_142345() { // entry L142345_33; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r202 */, v2 /* r205 */, v3 /* r202 */, v4 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[37];                                        // #142346:173:53 #142356:203:236 [L d1 h1 c1]
  v2 = 1;                                               // #142359:182:72 [L d1 h1 c1]
  v3 = 1 | cell[37];                                    // #142362:45:32 [L d1 h1 c1]
  cell[37] = 1 | cell[37];                              // #142366:95:195 [L d1 h1 c1]
  v4 = "";                                              // #142369:87:233 [L d1 h1 c1]
  return "";                                            // #142373:75:245 [L d1 h1 c1]
}