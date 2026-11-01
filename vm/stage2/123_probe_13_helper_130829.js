function probe_13_helper_130829() { // entry L130819_150; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */, v3 /* r204 */, v4 /* r202 */, v5 /* r202 */, v6 /* r199 */, v7 /* r204 */, v8 /* r205 */, v9 /* r204 */, v10 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v3 = cell[20];                                        // #130820:142:53 #130830:22:236 [-] /* never executed in any replay */
  v4 = cell[20].complete;                               // #130833:21:200 [-] /* never executed in any replay */
  if (v4) {                                             // #130838:80:160 [-] /* never executed in any replay */
    v5 = v3.width;                                      // #130857:232:200 [-] /* never executed in any replay */
    v6 = 0;                                             // #130862:159:72 [-] /* never executed in any replay */
    v7 = 0 < v5;                                        // #130865:108:98 [-] /* never executed in any replay */
    v1 = v7;                                            // #130869:169:150 [-] +#130872:21:53 /* never executed in any replay */
  } else {
    v1 = v4;                                            // #130844:224:53 #130849:69:150 [-] +#130852:65:53 /* never executed in any replay */
  }
  if (v1) {                                             // #130877:143:160 [-] /* never executed in any replay */
    r205 = cell[27]();                                  // #130888:13:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    v8 = undefined;                                     // #130892:205:233 [-] /* never executed in any replay */
    return v8;                                          // #130895:105:245 [-] /* never executed in any replay */
  }
  v2 = "GoKKh7";                                        // #130883:227:53 #130897:120:233 [-] /* never executed in any replay */
  v9 = "GoKKh7";                                        // #130907:76:233 [-] /* never executed in any replay */
  r202 = cell[26](v2, v9);                              // #130917:245:242 [-]  VM call: pushes a frame, the callee body returns into r202 /* never executed in any replay */
  v10 = undefined;                                      // #130922:21:233 [-] /* never executed in any replay */
  return v10;                                           // #130925:145:245 [-] /* never executed in any replay */
}