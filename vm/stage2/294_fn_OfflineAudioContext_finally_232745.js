function fn_OfflineAudioContext_finally_232745(win_v13 /* r70 */, v14 /* r221 */) { // entry L232745_14; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 20 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let win_v1 /* r199 */, v2 /* r199 */, v3 /* r205 */, v4 /* r204 */, v5 /* r204 */, v6 /* r199 */, v7 /* r205 */, v8 /* r204 */, v9 /* r204 */, v10 /* r205 */;
  let v11 /* r204 */, v12 /* r205 */, win_v15 /* r198 */, v16 /* r196 */, v17 /* r202 */, v18 /* r199 */, v19 /* r204 */, v20 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 3, win_v13 3, win_v15 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 2 constants propagated (2 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  win_v1 = win_v13[v14];                                // #232746:38:53 #232756:2:7 [L d1 h1 c1]
  win_v15 = win_v1;                                     // #232760:103:150 [L d1 h1 c1]
  v2 = KP(232762);                                      // #232763:63:233 [L d1 h1 c1]
  v16 = win_v15.uOdMb2(v2);                             // #232816:20:138 [L d1 h1 c1]
  v17 = cell[19];                                       // #232835:47:236 [L d1 h1 c1]
  v3 = "fSUn1";                                         // #232838:231:233 [L d1 h1 c1]
  v4 = cell[30];                                        // #232847:118:236 [L d1 h1 c1]
  if (v4) {                                             // #232850:109:160 [L d1 h1 c1]
    v6 = v4;                                            // #232879:157:150 [L d1 h1 c1] +#232882:57:53
  } else {
    v5 = "DFUtY8";                                      // #232856:201:53 #232861:126:233 [-] /* never executed in any replay */
    v6 = "DFUtY8";                                      // #232871:243:150 [-] +#232874:183:53 /* never executed in any replay */
  }
  v17.fSUn1 = v6;                                       // #232887:152:199 [L d1 h1 c1]
  v7 = "UYeq7";                                         // #232891:236:233 [L d1 h1 c1]
  v8 = cell[31];                                        // #232900:167:236 [L d1 h1 c1]
  if (v8) {                                             // #232903:26:160 [L d1 h1 c1]
    v18 = v8;                                           // #232932:18:150 [L d1 h1 c1] +#232935:26:53
  } else {
    v9 = "DFUtY8";                                      // #232909:2:53 #232914:127:233 [-] /* never executed in any replay */
    v18 = "DFUtY8";                                     // #232924:48:150 [-] +#232927:64:53 /* never executed in any replay */
  }
  v17.UYeq7 = v18;                                      // #232940:66:199 [L d1 h1 c1]
  v10 = "aMiP2";                                        // #232944:110:233 [L d1 h1 c1]
  v11 = cell[32];                                       // #232953:161:236 [L d1 h1 c1]
  v17.aMiP2 = cell[32];                                 // #232956:247:199 [L d1 h1 c1]
  v12 = "Rdqz4";                                        // #232960:143:233 [L d1 h1 c1]
  v19 = cell[33];                                       // #232969:126:236 [L d1 h1 c1]
  v17.Rdqz4 = cell[33];                                 // #232972:160:199 [L d1 h1 c1]
  r205 = cell[16]();                                    // #232976:52:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v20 = undefined;                                      // #232980:24:233 [L d1 h1 c1]
  return v20;                                           // #232983:72:245 [L d1 h1 c1]
}