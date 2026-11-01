function probe_36_helper_133444() { // entry L133434_191; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[20];                                        // #133435:83:53 #133445:229:236 [L d1 h1 c1]
  if (v1) {                                             // #133448:224:160 [L d1 h1 c1]
    v3 = undefined;                                     // #133459:66:233 [-] /* never executed in any replay */
    return v3;                                          // #133462:74:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #133454:48:53 #133464:155:233 [L d1 h1 c1]
  cell[20] = true;                                      // #133467:149:195 [L d1 h1 c1]
  r205 = cell[16]();                                    // #133470:149:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v4 = undefined;                                       // #133474:53:233 [L d1 h1 c1]
  return v4;                                            // #133477:49:245 [L d1 h1 c1]
}