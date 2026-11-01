function fn_performance_cb_141635() { // entry L141635_219; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r202 */, v5 /* r204 */, v6 /* r202 */, v7 /* r204 */, v8 /* r205 */, v9 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[22];                                        // #141636:255:53 #141646:44:236 [L d2 h2 c2]
  v4 = 3;                                               // #141649:211:72 [L d2 h2 c2]
  v5 = cell[22] < 3; if (v1 < v4) {                     // #141652:200:186 [L d2 h2 c2]
    v2 = v5;                                            // #141681:45:150 [L d1 h1 c1] +#141684:137:53
  } else {
    v6 = 4;                                             // #141661:120:53 #141666:226:72 [L d1 h1 c1]
    v7 = v1 === (4);                                    // #141669:134:65 [L d1 h1 c1]
    v2 = v7;                                            // #141673:219:150 [L d1 h1 c1] +#141676:255:53
  }
  if (v2) {                                             // #141689:40:160 [L d2 h2 c2]
    v8 = undefined;                                     // #141700:125:233 [L d1 h1 c1]
    return v8;                                          // #141703:89:245 [L d1 h1 c1]
  }
  v3 = 4;                                               // #141695:88:53 #141705:33:72 [L d1 h1 c1]
  cell[22] = 4;                                         // #141708:131:195 [L d1 h1 c1]
  r205 = cell[16]();                                    // #141711:75:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v9 = undefined;                                       // #141715:147:233 [L d1 h1 c1]
  return v9;                                            // #141718:151:245 [L d1 h1 c1]
}