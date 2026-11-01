function probe_2_helper_206771(msg_v8 /* r227 */) { // entry L206758_38; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let msg_v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v5 /* r205 */, v6 /* r205 */, v7 /* r205 */, v9 /* r202 */, v10 /* r205 */, v11 /* r204 */;
  let v12 /* r202 */, v13 /* r204 */, v14 /* r199 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   MessageEvent: msg_v1 18, msg_v8 18
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 2 webs kept as registers (retOut 2)
  msg_v1 = msg_v8;                                      // #206759:251:150 [L d5 h5 c5]
  v9 = (msg_v8).data;                                   // #206762:159:53 #206772:92:200 [L d5 h5 c5]
  v2 = cell[19];                                        // #206777:87:236 [L d5 h5 c5]
  if (v2) {                                             // #206780:10:160 [L d5 h5 c5]
    v10 = undefined;                                    // #206791:120:233 [L d4 h4 c4]
    return v10;                                         // #206794:40:245 [L d4 h4 c4]
  }
  v3 = v9.LMjs9;                                        // #206786:50:53 #206796:149:200 [L d1 h1 c1]
  if (v3) {                                             // #206805:208:160 [L d1 h1 c1]
    v6 = true;                                          // #206874:150:233 [L d1 h1 c1]
    cell[19] = true;                                    // #206877:100:195 [L d1 h1 c1]
    v13 = cell[17];                                     // #206880:63:236 [L d1 h1 c1]
    v7 = "DfaES6";                                      // #206883:183:233 [L d1 h1 c1]
    v14 = 0; v13.DfaES6 = 0;                            // #206893:85:103 [L d1 h1 c1]
    v13.yAui9 = v9;                                     // #206898:70:142 [L d1 h1 c1]
    r205 = cell[16]();                                  // #206907:194:201 [L d1 h1 c1] +#206911:10:53  VM call: pushes a frame, the callee body returns into r205
  } else {
    if ((v9.MaTl8)) {                                   // #206811:96:53 #206816:122:200 #206825:97:160 [-] /* never executed in any replay */
      v4 = true;                                        // #206836:240:233 [-] /* never executed in any replay */
      cell[19] = true;                                  // #206839:214:195 [-] /* never executed in any replay */
      v11 = cell[17];                                   // #206842:105:236 [-] /* never executed in any replay */
      v5 = "DfaES6";                                    // #206845:185:233 [-] /* never executed in any replay */
      v12 = 1; v11.DfaES6 = 1;                          // #206855:207:103 [-] /* never executed in any replay */
      r205 = cell[16]();                                // #206860:103:201 [-] +#206864:91:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    } else {
      // #206831:237:53 [-] /* never executed in any replay */
    }
  }
  v15 = undefined;                                      // #206916:147:233 [L d1 h1 c1]
  return v15;                                           // #206919:151:245 [L d1 h1 c1]
}