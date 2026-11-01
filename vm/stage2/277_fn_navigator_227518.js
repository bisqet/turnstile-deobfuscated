function fn_navigator_227518(win_v63 /* r70 */, v64 /* r209 */, v65 /* r220 */, v66 /* r221 */) { // entry L227508_122; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 72 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r205 */, v4 /* r202 */, win_v5 /* r205 */, win_v6 /* r202 */, fn_v7 /* r199 */, v8 /* r205 */, v9 /* r196 */, win_v10 /* r205 */;
  let navigator_v11 /* r198 */, pluginArray_v12 /* r202 */, win_v13 /* r205 */, navigator_v14 /* r199 */, pluginArray_v15 /* r205 */, v16 /* r205 */, win_v17 /* r202 */, navigator_v18 /* r199 */, pluginArray_v19 /* r202 */, v20 /* r199 */;
  let v21 /* r198 */, v22 /* r202 */, v23 /* r205 */, v24 /* r202 */, v25 /* r202 */, v26 /* r205 */, v27 /* r202 */, win_v28 /* r199 */, v29 /* r205 */, v30 /* r202 */;
  let arr_v31 /* r205 */, win_v32 /* r199 */, v33 /* r202 */, v34 /* r199 */, arr_v35 /* r202 */, v36 /* r199 */, v37 /* r205 */, v38 /* r198 */, v39 /* r205 */, arr_v40 /* r202 */;
  let win_v41 /* r205 */, v42 /* r199 */, v43 /* r205 */, win_v44 /* r198 */, v45 /* r205 */, v46 /* r199 */, arr_v47 /* r205 */, win_v48 /* r198 */, v49 /* r199 */, v50 /* r198 */;
  let arr_v51 /* r199 */, v52 /* r198 */, v53 /* r199 */, arr_v54 /* r205 */, win_v55 /* r199 */, v56 /* r198 */, v57 /* r199 */, v58 /* r205 */, doc_v59 /* r202 */, elBody_v60 /* r199 */;
  let arr_v61 /* r202 */, v62 /* r205 */, v67 /* r204 */, fn_v68 /* r195 */, v69 /* r198 */, fn_v70 /* r199 */, v71 /* r202 */, v72 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v5 3, win_v6 3, win_v10 3, win_v13 3, win_v17 3, win_v28 3, win_v32 3, win_v41 3
  //   Window: win_v44 3, win_v48 3, win_v55 3, win_v63 3
  //   Function: fn_v7 3, fn_v68 3, fn_v70 3
  //   Navigator: navigator_v11 3, navigator_v14 3, navigator_v18 3
  //   PluginArray: pluginArray_v12 3, pluginArray_v15 3, pluginArray_v19 3
  //   Array: arr_v31 3, arr_v35 3, arr_v40 3, arr_v47 3, arr_v51 3, arr_v54 3, arr_v61 3
  //   HTMLDocument: doc_v59 3
  //   HTMLBodyElement: elBody_v60 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 5 constants propagated (5 uses), 4 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #227509:226:53 #227519:3:233 [L d1 h1 c1]
  v2 = undefined;                                       // #227522:107:233 [L d1 h1 c1]
  clos;                                                 // #227525:38:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #227540:181:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #227563:200:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  v3 = cell[1];                                         // #227584:19:236 [L d1 h1 c1]
  v4 = v3[v65];                                         // #227587:97:7 [L d1 h1 c1]
  v67 = v3[v4];                                         // #227591:247:7 [L d1 h1 c1]
  win_v5 = win_v63[v66];                                // #227595:181:7 [L d1 h1 c1]
  win_v6 = win_v5;                                      // #227599:14:150 [L d1 h1 c1]
  fn_v7 = win_v6[v64];                                  // #227602:48:7 [L d1 h1 c1]
  v8 = KP(227605);                                      // #227606:36:233 [L d1 h1 c1]
  v9 = fn_v7.call(win_v6, v8);                          // #227679:165:138 [L d1 h1 c1]
  win_v10 = win_v63[v66];                               // #227699:43:7 [L d1 h1 c1]
  navigator_v11 = win_v10.navigator;                    // #227703:22:200 [L d1 h1 c1]
  if (navigator_v11) {                                  // #227708:141:160 [L d1 h1 c1]
    win_v13 = win_v63[v66];                             // #227727:74:7 [L d1 h1 c1]
    navigator_v14 = win_v13.navigator;                  // #227731:121:200 [L d1 h1 c1]
    pluginArray_v15 = navigator_v14.plugins;            // #227736:172:200 [L d1 h1 c1]
    pluginArray_v12 = pluginArray_v15;                  // #227741:233:150 [L d1 h1 c1] +#227744:85:53
  } else {
    pluginArray_v12 = navigator_v11;                    // #227714:105:53 #227719:155:150 [-] +#227722:191:53 /* never executed in any replay */
  }
  if (pluginArray_v12) {                                // #227749:158:160 [L d1 h1 c1]
    win_v17 = win_v63[v66];                             // #227768:22:7 [L d1 h1 c1]
    navigator_v18 = win_v17.navigator;                  // #227772:21:200 [L d1 h1 c1]
    pluginArray_v19 = navigator_v18.plugins;            // #227777:216:200 [L d1 h1 c1]
    v20 = pluginArray_v19.length;                       // #227782:79:200 [L d1 h1 c1]
    v21 = 0;                                            // #227787:42:72 [L d1 h1 c1]
    v16 = 0 < v20;                                      // #227790:139:98 #227794:12:150 [L d1 h1 c1] +#227797:172:53
  } else {
    v16 = pluginArray_v12;                              // #227755:118:53 #227760:126:150 [-] +#227763:214:53 /* never executed in any replay */
  }
  if (v16) {                                            // #227802:48:160 [L d1 h1 c1]
    v25 = "tjYx6";                                      // #227843:149:233 [L d1 h1 c1]
    v26 = "chqx7";                                      // #227852:53:233 [L d1 h1 c1]
    v67.tjYx6 = "chqx7";                                // #227861:59:199 [L d1 h1 c1]
    v27 = "chqx7";                                      // #227865:252:150 [L d1 h1 c1] +#227868:220:53
  } else {
    v22 = "tjYx6";                                      // #227808:64:53 #227813:162:233 [-] /* never executed in any replay */
    v23 = "OVQV8";                                      // #227822:78:233 [-] /* never executed in any replay */
    v67.tjYx6 = "OVQV8";                                // #227831:48:199 [-] /* never executed in any replay */
    v24 = "OVQV8";                                      // #227835:93:150 [-] +#227838:249:53 /* never executed in any replay */
  }
  clos;                                                 // #227873:141:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v68 = clos;                                        // #227888:64:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v68 = its home register (H139 CLOS bind)
  win_v28 = win_v63[v66];                               // #227911:26:7 [L d1 h1 c1]
  v29 = win_v28[KP(227914)];                            // #227915:9:200 [L d1 h1 c1]
  v30 = v29.PUUDF8;                                     // #227920:252:200 [L d1 h1 c1]
  if (v30) {                                            // #227925:91:160 [L d1 h1 c1]
    win_v32 = win_v63[v66];                             // #227944:24:7 [L d1 h1 c1]
    v33 = win_v32[KP(227947)];                          // #227948:143:200 [L d1 h1 c1]
    v34 = v33.PUUDF8;                                   // #227953:234:200 [L d1 h1 c1]
    arr_v35 = v34["ht.atrs"];                           // #227958:153:200 [L d1 h1 c1]
    arr_v31 = arr_v35;                                  // #227969:98:150 [L d1 h1 c1] +#227972:42:53
  } else {
    arr_v31 = v30;                                      // #227931:127:53 #227936:126:150 [-] +#227939:214:53 /* never executed in any replay */
  }
  if (arr_v31) {                                        // #227977:214:160 [L d1 h1 c1]
    win_v41 = win_v63[v66];                             // #228016:77:7 [L d1 h1 c1]
    v42 = win_v41[KP(228019)];                          // #228020:48:200 [L d1 h1 c1]
    v43 = v42.PUUDF8;                                   // #228025:71:200 [L d1 h1 c1]
    arr_v40 = v43["ht.atrs"];                           // #228030:194:200 [L d1 h1 c1] +#228041:10:53
  } else {
    v36 = undefined;                                    // #227983:206:53 #227988:82:233 [-] /* never executed in any replay */
    v37 = win_v63.document;                             // #227991:97:200 [-] /* never executed in any replay */
    v38 = v37.body;                                     // #227996:244:200 [-] /* never executed in any replay */
    v39 = (v37.body).parentNode;                        // #228001:251:200 [-] /* never executed in any replay */
    arr_v40 = MC(undefined, r196, v39);                 // #228006:40:114 [-] +#228011:88:53 /* never executed in any replay */
  }
  win_v44 = win_v63[v66];                               // #228046:192:7 [L d1 h1 c1]
  v45 = win_v44[KP(228049)];                            // #228050:151:200 [L d1 h1 c1]
  v46 = v45.PUUDF8;                                     // #228055:210:200 [L d1 h1 c1]
  if (v46) {                                            // #228060:89:160 [L d1 h1 c1]
    win_v48 = win_v63[v66];                             // #228079:43:7 [L d1 h1 c1]
    v49 = win_v48[KP(228082)];                          // #228083:22:200 [L d1 h1 c1]
    v50 = v49.PUUDF8;                                   // #228088:21:200 [L d1 h1 c1]
    arr_v51 = v50["d.cT"];                              // #228093:216:200 [L d1 h1 c1]
    arr_v47 = arr_v51;                                  // #228101:101:150 [L d1 h1 c1] +#228104:225:53
  } else {
    arr_v47 = v46;                                      // #228066:5:53 #228071:119:150 [-] +#228074:43:53 /* never executed in any replay */
  }
  if (arr_v47) {                                        // #228109:11:160 [L d1 h1 c1]
    win_v55 = win_v63[v66];                             // #228138:15:7 [L d1 h1 c1]
    v56 = win_v55[KP(228141)];                          // #228142:106:200 [L d1 h1 c1]
    v57 = v56.PUUDF8;                                   // #228147:25:200 [L d1 h1 c1]
    arr_v54 = v57["d.cT"];                              // #228152:204:200 [L d1 h1 c1] +#228160:108:53
  } else {
    v52 = undefined;                                    // #228115:111:53 #228120:209:233 [-] /* never executed in any replay */
    v53 = win_v63.document;                             // #228123:164:200 [-] /* never executed in any replay */
    arr_v54 = MC(undefined, fn_v68, v53);               // #228128:109:114 [-] +#228133:201:53 /* never executed in any replay */
  }
  v67.vWNIm6 = arr_v40;                                 // #228165:124:142 [L d1 h1 c1]
  v67.igrIO9 = arr_v54;                                 // #228175:145:142 [L d1 h1 c1]
  v58 = "HnFG5";                                        // #228185:65:233 [L d1 h1 c1]
  v69 = undefined;                                      // #228194:49:233 [L d1 h1 c1]
  doc_v59 = win_v63.document;                           // #228197:132:200 [L d1 h1 c1]
  elBody_v60 = doc_v59.body;                            // #228202:75:200 [L d1 h1 c1]
  arr_v61 = MC(undefined, r196, elBody_v60);            // #228207:56:114 [L d1 h1 c1]
  v67.HnFG5 = arr_v61;                                  // #228212:242:199 [L d1 h1 c1]
  fn_v70 = clos;                                        // #228216:81:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v70 = its home register (H139 CLOS bind)
  v62 = "tnjCS1";                                       // #228237:1:233 [L d1 h1 c1]
  v71 = fn_v70();                                       // #228247:89:113 [L d1 h1 c1]
  v67.tnjCS1 = v71;                                     // #228251:207:199 [L d1 h1 c1]
  v72 = undefined;                                      // #228255:7:233 [L d1 h1 c1]
  return v72;                                           // #228258:59:245 [L d1 h1 c1]
}