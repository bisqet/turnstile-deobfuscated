function fn_navigator_cb_31646(win_v32 /* r70 */) { // entry L31646_10; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 36 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, fn_v2 /* r202 */, fn_v3 /* r204 */, fn_v4 /* r205 */, v5 /* r204 */, v6 /* r202 */, v7 /* r205 */, v8 /* r202 */, v9 /* r205 */, v10 /* r202 */;
  let v11 /* r205 */, v12 /* r202 */, v13 /* r205 */, v14 /* r202 */, v15 /* r205 */, v16 /* r202 */, v17 /* r205 */, v18 /* r202 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r202 */, v23 /* r205 */, v24 /* r202 */, v25 /* r205 */, v26 /* r202 */, v27 /* r205 */, v28 /* r202 */, v29 /* r205 */, v30 /* r202 */;
  let v31 /* r205 */, v33 /* r199 */, v34 /* r204 */, v35 /* r202 */, v36 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3, fn_v3 3, fn_v4 3
  //   Window: win_v32 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = 0;                                               // #31647:50:53 #31657:20:72 [L d1 h1 c1]
  cell[29] = 0;                                         // #31660:106:195 [L d1 h1 c1]
  fn_v2 = win_v32.setTimeout;                           // #31663:25:200 [L d1 h1 c1]
  fn_v3 = clos;                                         // #31668:156:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  fn_v4 = fn_v3;                                        // #31680:25:150 [L d1 h1 c1]
  v5 = 0;                                               // #31683:76:72 [L d1 h1 c1]
  v33 = fn_v2.call(win_v32, fn_v4, 0);                  // #31686:45:138 [L d1 h1 c1]
  v34 = {};                                             // #31711:203:159 [L d1 h1 c1]
  v6 = "MBXf3";                                         // #31713:19:233 [L d1 h1 c1]
  v7 = cell[41];                                        // #31722:242:236 [L d1 h1 c1]
  v34.MBXf3 = cell[41];                                 // #31725:68:199 [L d1 h1 c1]
  v34.ySrtS5 = v7;                                      // #31729:57:142 [L d1 h1 c1]
  v8 = "FXpXv1";                                        // #31739:73:233 [L d1 h1 c1]
  v9 = cell[42];                                        // #31749:208:236 [L d1 h1 c1]
  v34.FXpXv1 = cell[42];                                // #31752:42:199 [L d1 h1 c1]
  v10 = "CNRnh6";                                       // #31756:182:233 [L d1 h1 c1]
  v11 = cell[27];                                       // #31766:201:236 [L d1 h1 c1]
  v34.CNRnh6 = cell[27];                                // #31769:127:199 [L d1 h1 c1]
  v12 = "oHFLJ5";                                       // #31773:247:233 [L d1 h1 c1]
  v13 = cell[28];                                       // #31783:70:236 [L d1 h1 c1]
  v34.oHFLJ5 = cell[28];                                // #31786:72:199 [L d1 h1 c1]
  v14 = "wsksA3";                                       // #31790:220:233 [L d1 h1 c1]
  v15 = cell[30];                                       // #31800:215:236 [L d1 h1 c1]
  v34.wsksA3 = cell[30];                                // #31803:213:199 [L d1 h1 c1]
  v16 = "fVCRI9";                                       // #31807:117:233 [L d1 h1 c1]
  v17 = cell[31];                                       // #31817:76:236 [L d1 h1 c1]
  v34.fVCRI9 = cell[31];                                // #31820:182:199 [L d1 h1 c1]
  v18 = "AvIxy5";                                       // #31824:18:233 [L d1 h1 c1]
  v19 = cell[33];                                       // #31834:181:236 [L d1 h1 c1]
  v34.AvIxy5 = cell[33];                                // #31837:187:199 [L d1 h1 c1]
  v20 = "nardr7";                                       // #31841:67:233 [L d1 h1 c1]
  v21 = cell[34];                                       // #31851:98:236 [L d1 h1 c1]
  v34.nardr7 = cell[34];                                // #31854:244:199 [L d1 h1 c1]
  v22 = "oXlug7";                                       // #31858:216:233 [L d1 h1 c1]
  v23 = cell[35];                                       // #31868:227:236 [L d1 h1 c1]
  v34.oXlug7 = cell[35];                                // #31871:177:199 [L d1 h1 c1]
  v24 = "GqCeX8";                                       // #31875:225:233 [L d1 h1 c1]
  v25 = cell[36];                                       // #31885:8:236 [L d1 h1 c1]
  v34.GqCeX8 = cell[36];                                // #31888:130:199 [L d1 h1 c1]
  v26 = "FJbU2";                                        // #31892:174:233 [L d1 h1 c1]
  v27 = cell[37];                                       // #31901:225:236 [L d1 h1 c1]
  v34.FJbU2 = cell[37];                                 // #31904:55:199 [L d1 h1 c1]
  v28 = "NBcX0";                                        // #31908:207:233 [L d1 h1 c1]
  v29 = cell[38];                                       // #31917:190:236 [L d1 h1 c1]
  v34.NBcX0 = cell[38];                                 // #31920:224:199 [L d1 h1 c1]
  v30 = "Ooyv2";                                        // #31924:20:233 [L d1 h1 c1]
  v31 = cell[39];                                       // #31933:47:236 [L d1 h1 c1]
  v34.Ooyv2 = cell[39];                                 // #31936:205:199 [L d1 h1 c1]
  v35 = "pUHnB0";                                       // #31940:141:233 [L d1 h1 c1]
  v36 = cell[40];                                       // #31950:4:236 [L d1 h1 c1]
  v34.pUHnB0 = cell[40];                                // #31953:142:199 [L d1 h1 c1]
  return v34;                                           // #31957:102:245 [L d1 h1 c1]
}