function probe_36_helper_133488() { // entry L133478_45; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r204 */, v2 /* r205 */, v3 /* r202 */, v4 /* r205 */, v5 /* r204 */, v6 /* r202 */, v7 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[19];                                        // #133479:137:53 #133489:147:236 [L d2 h2 c2]
  v2 = 1;                                               // #133492:94:72 [L d2 h2 c2]
  v3 = cell[19];                                        // #133495:83:150 [L d2 h2 c2]
  v5 = cell[19] - 1;                                    // #133498:212:54 [L d2 h2 c2]
  cell[19] = cell[19] - 1;                              // #133502:42:195 [L d2 h2 c2]
  v6 = 0;                                               // #133505:89:72 [L d2 h2 c2]
  v4 = v5 <= (0); if (v5 <= v6) {                       // #133508:7:95 [L d2 h2 c2]
    r205 = cell[28]();                                  // #133526:254:201 [L d1 h1 c1] +#133530:86:53  VM call: pushes a frame, the callee body returns into r205
  }
  v7 = undefined;                                       // #133535:170:233 [L d2 h2 c2]
  return v7;                                            // #133538:18:245 [L d2 h2 c2]
}