function fn_atob_cb_17798(win_v13 /* r70 */, v14 /* r214 */, v15 /* r221 */) { // entry L17798_210; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 24 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, v2 /* r205 */, win_v3 /* r199 */, fn_v4 /* r202 */, win_v5 /* r205 */, v6 /* r205 */, v7 /* r204 */, v8 /* r205 */, win_v9 /* r199 */, fn_v10 /* r202 */;
  let win_v11 /* r204 */, v12 /* r205 */, v16 /* r199 */, v17 /* r202 */, win_v18 /* r202 */, v19 /* r204 */, v20 /* r199 */, v21 /* r202 */, win_v22 /* r202 */, v23 /* r204 */;
  let v24 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v5 3, win_v9 3, win_v11 3, win_v13 6, win_v18 3, win_v22 3
  //   Function: fn_v4 3, fn_v10 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 4 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[36];                                        // #17799:218:53 #17809:150:236 [L d2 h2 c2]
  if (v1) {                                             // #17812:13:160 [L d2 h2 c2]
    win_v3 = win_v13[v15];                              // #17831:78:7 [L d1 h1 c1]
    fn_v4 = win_v3.clearTimeout;                        // #17835:109:200 [L d1 h1 c1]
    v16 = typeof fn_v4;                                 // #17840:37:193 [L d1 h1 c1]
    v17 = v16 === v14;                                  // #17843:125:65 [L d1 h1 c1]
    v2 = v17;                                           // #17847:182:150 [L d1 h1 c1] +#17850:46:53
  } else {
    v2 = v1;                                            // #17818:233:53 #17823:141:150 [L d1 h1 c1] +#17826:105:53
  }
  if (v2) {                                             // #17855:210:160 [L d2 h2 c2]
    win_v5 = win_v13[v15];                              // #17874:190:7 [L d1 h1 c1]
    win_v18 = win_v5;                                   // #17878:51:150 [L d1 h1 c1]
    v6 = (win_v18).clearTimeout(v1);                    // #17881:56:138 [L d1 h1 c1] +#17906:69:150 +#17909:65:53
  } else {
    // #17861:218:53 #17866:12:150 #17869:172:53 [L d1 h1 c1]
  }
  v7 = 0;                                               // #17914:228:72 [L d2 h2 c2]
  cell[36] = 0;                                         // #17917:250:195 [L d2 h2 c2]
  v8 = cell[37];                                        // #17920:253:236 [L d2 h2 c2]
  if (v8) {                                             // #17923:152:160 [L d2 h2 c2]
    win_v9 = win_v13[v15];                              // #17942:58:7 [L d1 h1 c1]
    fn_v10 = win_v9.clearTimeout;                       // #17946:169:200 [L d1 h1 c1]
    v20 = typeof fn_v10;                                // #17951:113:193 [L d1 h1 c1]
    v21 = v20 === v14;                                  // #17954:153:65 [L d1 h1 c1]
    v19 = v21;                                          // #17958:98:150 [L d1 h1 c1] +#17961:42:53
  } else {
    v19 = v8;                                           // #17929:8:53 #17934:0:150 [L d1 h1 c1] +#17937:208:53
  }
  if (v19) {                                            // #17966:214:160 [L d2 h2 c2]
    win_v11 = win_v13[v15];                             // #17985:169:7 [L d1 h1 c1]
    win_v22 = win_v11;                                  // #17989:50:150 [L d1 h1 c1]
    v23 = (win_v22).clearTimeout(v8);                   // #17992:251:138 [L d1 h1 c1] +#18017:188:150 +#18020:156:53
  } else {
    // #17972:206:53 #17977:29:150 #17980:185:53 [L d1 h1 c1]
  }
  v12 = 0;                                              // #18025:0:72 [L d2 h2 c2]
  cell[37] = 0;                                         // #18028:166:195 [L d2 h2 c2]
  v24 = undefined;                                      // #18031:66:233 [L d2 h2 c2]
  return v24;                                           // #18034:74:245 [L d2 h2 c2]
}