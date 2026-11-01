function fn_JSON_224775(win_v38 /* r70 */) { // entry L224765_218; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 44 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let jSON_v1 /* r205 */, jSON_v2 /* r204 */, fn_v3 /* r202 */, fn_v4 /* r205 */, date_v5 /* r205 */, v6 /* r199 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */, v10 /* r202 */;
  let v11 /* r204 */, arr_v12 /* r205 */, v13 /* r204 */, v14 /* r202 */, v15 /* r204 */, v16 /* r198 */, v17 /* r204 */, v18 /* r199 */, v19 /* r204 */, v20 /* r205 */;
  let v21 /* r204 */, v22 /* r196 */, v23 /* r205 */, v24 /* r204 */, v25 /* r205 */, v26 /* r202 */, v27 /* r205 */, v28 /* r202 */, fn_v29 /* r205 */, date_v30 /* r205 */;
  let v31 /* r204 */, fn_v32 /* r205 */, date_v33 /* r205 */, v34 /* r199 */, v35 /* r205 */, v36 /* r204 */, v37 /* r205 */, v39 /* r196 */, v40 /* r198 */, fn_v41 /* r202 */;
  let v42 /* r199 */, v43 /* r204 */, v44 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   JSON: jSON_v1 3, jSON_v2 3
  //   Function: fn_v3 3, fn_v4 3, fn_v29 3, fn_v32 3, fn_v41 3
  //   Date: date_v5 3, date_v30 3, date_v33 3
  //   Array: arr_v12 3
  //   Window: win_v38 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  jSON_v1 = win_v38.JSON;                               // #224766:194:53 #224776:39:200 [L d1 h1 c1]
  jSON_v2 = jSON_v1;                                    // #224781:56:150 [L d1 h1 c1]
  fn_v3 = jSON_v1.stringify;                            // #224784:47:200 [L d1 h1 c1]
  fn_v4 = win_v38.Date;                                 // #224789:10:200 [L d1 h1 c1]
  date_v5 = new fn_v4();                                // #224794:206:1 [L d1 h1 c1]
  v6 = fn_v3.call(jSON_v2, date_v5);                    // #224798:39:138 [L d1 h1 c1]
  v7 = 1;                                               // #224821:162:72 [L d1 h1 c1]
  v8 = 11;                                              // #224824:241:72 [L d1 h1 c1]
  v9 = v6.slice((1), (11));                             // #224827:126:138 [L d1 h1 c1]
  v10 = v9;                                             // #224846:243:150 [L d1 h1 c1]
  v11 = "-";                                            // #224849:155:233 [L d1 h1 c1]
  arr_v12 = (v10).split("-");                           // #224854:0:138 [L d1 h1 c1]
  v13 = 0;                                              // #224872:87:72 [L d1 h1 c1]
  v14 = arr_v12[0];                                     // #224875:149:7 [L d1 h1 c1]
  v15 = 1;                                              // #224879:216:72 [L d1 h1 c1]
  v16 = arr_v12[1];                                     // #224882:82:7 [L d1 h1 c1]
  v17 = 2;                                              // #224886:225:72 [L d1 h1 c1]
  v18 = arr_v12[2];                                     // #224889:119:7 [L d1 h1 c1]
  v19 = "/";                                            // #224893:15:233 [L d1 h1 c1]
  v20 = v16 + ("/");                                    // #224898:168:222 [L d1 h1 c1]
  v21 = v20 + v18;                                      // #224902:29:222 [L d1 h1 c1]
  v22 = "/";                                            // #224906:157:233 [L d1 h1 c1]
  v23 = v21 + ("/");                                    // #224911:126:222 [L d1 h1 c1]
  v24 = v23 + v14;                                      // #224915:27:222 [L d1 h1 c1]
  v39 = "-";                                            // #224919:35:233 [L d1 h1 c1]
  v25 = v14 + ("-");                                    // #224924:108:222 [L d1 h1 c1]
  v26 = v25 + v16;                                      // #224928:209:222 [L d1 h1 c1]
  v40 = "-";                                            // #224932:129:233 [L d1 h1 c1]
  v27 = v26 + ("-");                                    // #224937:210:222 [L d1 h1 c1]
  v28 = v27 + v18;                                      // #224941:31:222 [L d1 h1 c1]
  fn_v29 = win_v38.Date;                                // #224945:58:200 [L d1 h1 c1]
  date_v30 = new fn_v29(v24);                           // #224950:62:1 [L d1 h1 c1]
  v31 = date_v30.getTime();                             // #224955:215:138 [L d1 h1 c1]
  fn_v32 = win_v38.Date;                                // #224974:18:200 [L d1 h1 c1]
  date_v33 = new fn_v32(v28);                           // #224979:182:1 [L d1 h1 c1]
  v34 = date_v33.getTime();                             // #224984:111:138 [L d1 h1 c1]
  fn_v41 = win_v38.Number;                              // #225003:74:200 [L d1 h1 c1]
  v35 = v31 - v34;                                      // #225013:175:54 [L d1 h1 c1]
  v42 = 60000;                                          // #225017:103:233 [L d1 h1 c1]
  v36 = v35 / (60000);                                  // #225023:191:105 [L d1 h1 c1]
  v37 = fn_v41.call(win_v38, v36);                      // #225027:148:138 [L d1 h1 c1]
  v43 = ~v37;                                           // #225047:164:5 [L d1 h1 c1]
  v44 = ~v43;                                           // #225050:116:5 [L d1 h1 c1]
  return v44;                                           // #225053:52:245 [L d1 h1 c1]
}