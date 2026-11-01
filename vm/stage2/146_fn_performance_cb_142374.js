function fn_performance_cb_142374() { // entry L142374_133; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r202 */, v2 /* r205 */, v3 /* r202 */, v4 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[37];                                        // #142375:129:53 #142385:100:236 [L d1 h1 c1]
  v2 = 2;                                               // #142388:43:72 [L d1 h1 c1]
  v3 = 2 | cell[37];                                    // #142391:14:32 [L d1 h1 c1]
  cell[37] = 2 | cell[37];                              // #142395:252:195 [L d1 h1 c1]
  v4 = "";                                              // #142398:192:233 [L d1 h1 c1]
  return "";                                            // #142402:80:245 [L d1 h1 c1]
}