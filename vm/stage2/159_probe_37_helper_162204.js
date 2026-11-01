function probe_37_helper_162204(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L162187_50; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 45 register webs used only inside this fn (no live-in, cross-call or table-made def; 22 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, win_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r205 */, v8 /* r199 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r205 */, v12 /* r199 */, v13 /* r205 */, v14 /* r199 */, v15 /* r205 */, v16 /* r199 */, v17 /* r205 */, v18 /* r205 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r199 */, arr_v23 /* r205 */, v29 /* r202 */, win_v30 /* r204 */, v31 /* r205 */, arr_v32 /* r204 */, v33 /* r202 */, v34 /* r199 */, v35 /* r198 */;
  let v36 /* r202 */, v37 /* r205 */, v38 /* r198 */, v39 /* r196 */, v40 /* r202 */, v41 /* r199 */, v42 /* r199 */, v43 /* r202 */, v44 /* r204 */, v45 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 3, win_v24 3, win_v30 3
  //   Array: arr_v23 3, arr_v32 3
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v1 = undefined;                                       // #162188:186:53 #162198:252:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #162201:230:7 [L d1 h1 c1]
  v3 = KP(162204);                                      // #162205:130:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #162278:83:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #162283:161:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #162287:52:200 #162292:179:160 [L d1 h1 c1]
    v31 = undefined;                                    // #162303:187:233 [-] /* never executed in any replay */
    return v31;                                         // #162306:31:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #162298:119:53 #162308:198:236 [L d1 h1 c1]
  v4 = 1;                                               // #162311:133:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #162314:139:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #162318:249:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #162322:9:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #162327:177:161 [L d1 h1 c1]
    v7 = false;                                         // #162344:77:233 [L d1 h1 c1] +#162347:41:53
  } else {
    v8 = 1;                                             // #162352:127:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #162355:29:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #162359:195:7 [-] /* never executed in any replay */
    v35 = "EisIk3";                                     // #162363:43:233 [-] /* never executed in any replay */
    v36 = !(v34 === "EisIk3");                          // #162373:235:65 #162377:40:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #162380:117:150 [-] +#162383:177:53 /* never executed in any replay */
  }
  if (v7) {                                             // #162388:183:160 [L d1 h1 c1]
    v37 = undefined;                                    // #162399:167:233 [-] /* never executed in any replay */
    return v37;                                         // #162402:91:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #162394:107:53 #162404:20:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #162407:120:233 [L d1 h1 c1]
  v12 = undefined;                                      // #162412:76:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #162415:182:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #162419:56:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #162423:248:69 [L d1 h1 c1]
    v15 = false;                                        // #162441:61:233 [-] +#162444:89:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #162449:133:7 [L d1 h1 c1]
    v39 = 4;                                            // #162453:8:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #162456:148:65 #162460:109:130 [L d1 h1 c1]
    v15 = v16;                                          // #162463:230:150 [L d1 h1 c1] +#162466:158:53
  }
  if (v15) {                                            // #162471:190:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #162482:173:103 [L d1 h1 c1]
    v18 = "";                                           // #162487:237:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #162491:178:210 [L d1 h1 c1]
  } else {
    // #162477:22:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #162499:168:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #162502:226:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #162506:180:7 [L d1 h1 c1]
  v22 = 1;                                              // #162510:59:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #162513:233:7 [L d1 h1 c1]
  v41 = "qsHapU6";                                      // #162517:57:233 [L d1 h1 c1]
  arr_v32[v40] = "qsHapU6";                             // #162528:47:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #162532:198:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #162568:242:150 [L d1 h1 c1]
    v42 = 0;                                            // #162571:1:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #162574:23:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #162578:122:16 [L d1 h1 c1] +#162583:226:53
  } else {
    // #162558:254:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #162588:149:233 [L d1 h1 c1]
  return v45;                                           // #162591:17:245 [L d1 h1 c1]
}