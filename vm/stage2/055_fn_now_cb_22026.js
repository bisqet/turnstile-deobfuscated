function fn_now_cb_22026(win_v31 /* r70 */, arr_v32 /* r227 */) { // entry L22026_61; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 48 register webs used only inside this fn (no live-in, cross-call or table-made def; 18 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r204 */, arr_v3 /* r204 */, v4 /* r202 */, v5 /* r204 */, v6 /* r204 */, v7 /* r202 */, v8 /* r202 */, v9 /* r204 */, v10 /* r199 */;
  let v11 /* r196 */, v12 /* r204 */, v13 /* r204 */, v14 /* r196 */, v15 /* r199 */, v16 /* r204 */, v17 /* r204 */, v18 /* r204 */, v19 /* r199 */, v20 /* r204 */;
  let v21 /* r196 */, v22 /* r199 */, v23 /* r204 */, v24 /* r204 */, v25 /* r204 */, v26 /* r199 */, v27 /* r202 */, v28 /* r202 */, v29 /* r202 */, arr_v30 /* r202 */;
  let arr_v33 /* r247 */, v34 /* r199 */, arr_v35 /* r205 */, v36 /* r246 */, v37 /* r250 */, v38 /* r252 */, v39 /* r192 */, v40 /* r195 */, v41 /* r253 */, v42 /* r254 */;
  let v43 /* r193 */, v44 /* r198 */, v45 /* r202 */, v46 /* r204 */, v47 /* r196 */, v48 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v3 9, arr_v30 393, arr_v32 9, arr_v33 9, arr_v35 9
  //   Window: win_v31 9
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v33 = arr_v32;                                    // #22027:118:150 [L d3 h3 c3]
  v1 = undefined;                                       // #22030:238:53 #22040:252:233 [L d3 h3 c3]
  v2 = undefined;                                       // #22043:192:233 [L d3 h3 c3]
  arr_v3 = [];                                          // #22046:110:107 [L d3 h3 c3]
  v34 = "JBik9";                                        // #22048:234:233 [L d3 h3 c3]
  v4 = 0; arr_v3[0] = "JBik9";                          // #22057:35:26 [L d3 h3 c3]
  arr_v35 = arr_v3;                                     // #22062:68:150 [L d3 h3 c3]
  v36 = 0;                                              // #22065:139:72 [L d3 h3 c3]
  v37 = "number";                                       // #22068:211:233 [L d3 h3 c3]
  v38 = "string";                                       // #22073:251:233 [L d3 h3 c3]
  v39 = "number";                                       // #22083:131:233 [L d3 h3 c3]
  v40 = "length";                                       // #22088:235:233 #22093:179:233 [L d3 h3 c3]
  v41 = "boolean";                                      // #22098:91:233 [L d3 h3 c3]
  v5 = "isFinite";                                      // #22103:99:233 [L d3 h3 c3]
  v42 = "TypeError";                                    // #22115:75:233 [L d3 h3 c3]
  v43 = "RangeError";                                   // #22120:147:233 [L d3 h3 c3]
  v44 = "RangeError";                                   // #22134:187:233 [L d3 h3 c3] +#22148:95:53
  while ((v45 = arr_v33.length, v46 = v36 < v45, v36 < v45)) {  // #22166:120:200 | #22171:25:186 [L d134 h134 c134]
    v8 = arr_v33[v36];                                  // #22189:245:7 [L d131 h131 c131]
    v9 = typeof v8;                                     // #22193:141:193 [L d131 h131 c131]
    if (v9 === v37) {                                   // #22196:37:161 [L d131 h131 c131]
      v10 = false;                                      // #22213:156:233 [L d67 h67 c67] +#22216:252:53
    } else {
      v11 = typeof v8;                                  // #22221:132:193 [L d64 h64 c64]
      v12 = !(v38 === v11);                             // #22224:32:65 #22228:201:130 [L d64 h64 c64]
      v10 = v12;                                        // #22231:210:150 [L d64 h64 c64] +#22234:218:53
    }
    if (v10) {                                          // #22239:23:160 [L d131 h131 c131]
      v14 = typeof v8;                                  // #22258:0:193 [L d64 h64 c64]
      v15 = !(v41 === v14);                             // #22261:172:65 #22265:37:130 [L d64 h64 c64]
      v13 = v15;                                        // #22268:190:150 [L d64 h64 c64] +#22271:22:53
    } else {
      v13 = v10;                                        // #22245:75:53 #22250:141:150 [L d67 h67 c67] +#22253:105:53
    }
    if (v13) {                                          // #22276:104:160 [L d131 h131 c131]
      v16 = win_v31[v42];                               // #22287:160:7 [-] /* never executed in any replay */
      v17 = new v16();                                  // #22291:140:1 [-] /* never executed in any replay */
      throw v17;                                        // #22295:224:249 [-] /* never executed in any replay */
    }
    v18 = typeof v8;                                    // #22282:152:53 #22297:132:193 [L d131 h131 c131]
    v19 = v39 === v18;                                  // #22300:32:65 [L d131 h131 c131]
    if (v19) {                                          // #22304:239:160 [L d131 h131 c131]
      v21 = win_v31.isFinite(v8);                       // #22323:81:138 [L d67 h67 c67]
      v22 = !v21;                                       // #22344:118:130 [L d67 h67 c67]
      v20 = v22;                                        // #22347:11:150 [L d67 h67 c67] +#22350:111:53
    } else {
      v20 = v19;                                        // #22310:195:53 #22315:226:150 [L d64 h64 c64] +#22318:170:53
    }
    if (v20) {                                          // #22355:169:160 [L d131 h131 c131]
      v23 = win_v31[v43];                               // #22366:206:7 [-] /* never executed in any replay */
      v24 = new v23();                                  // #22370:130:1 [-] /* never executed in any replay */
      throw v24;                                        // #22374:126:249 [-] /* never executed in any replay */
    }
    v25 = win_v31.String(v8);                           // #22361:21:53 #22376:176:138 [L d131 h131 c131]
    v26 = v25[v40];                                     // #22395:202:7 [L d131 h131 c131]
    v47 = 256;                                          // #22399:214:233 [L d131 h131 c131]
    v27 = 256 < v26;                                    // #22404:135:98 [L d131 h131 c131]
    if (v27) {                                          // #22408:122:160 [L d131 h131 c131]
      v28 = win_v31[v44];                               // #22419:255:7 [-] /* never executed in any replay */
      v29 = new v28();                                  // #22423:47:1 [-] /* never executed in any replay */
      throw v29;                                        // #22427:183:249 [-] /* never executed in any replay */
    }
    arr_v30 = arr_v35;                                  // #22414:226:53 #22429:194:150 [L d131 h131 c131]
    v48 = (arr_v30).push(v25);                          // #22432:75:138 [L d131 h131 c131]
    v6 = 1;                                             // #22449:175:53 #22153:120:72 [L d131 h131 c131]
    v7 = v36; v36 = v36 + 1;                            // #22156:55:48 [L d131 h131 c131]
  }
  return arr_v35;                                       // #22454:241:245 [L d3 h3 c3]
}