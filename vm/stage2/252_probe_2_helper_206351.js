function probe_2_helper_206351(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L206334_234; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  v1 = undefined;                                       // #206335:146:53 #206345:190:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #206348:32:7 [L d1 h1 c1]
  v3 = KP(206351);                                      // #206352:84:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #206445:93:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #206450:3:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #206454:142:200 #206459:37:160 [L d1 h1 c1]
    v31 = undefined;                                    // #206470:119:233 [-] /* never executed in any replay */
    return v31;                                         // #206473:235:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #206465:161:53 #206475:133:236 [L d1 h1 c1]
  v4 = 1;                                               // #206478:8:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #206481:194:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #206485:20:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #206489:120:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #206494:36:161 [L d1 h1 c1]
    v7 = false;                                         // #206511:250:233 [L d1 h1 c1] +#206514:98:53
  } else {
    v8 = 1;                                             // #206519:167:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #206522:165:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #206526:43:7 [-] /* never executed in any replay */
    v35 = "ynFnRU8";                                    // #206530:243:233 [-] /* never executed in any replay */
    v36 = !(v34 === "ynFnRU8");                         // #206541:147:65 #206545:48:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #206548:93:150 [-] +#206551:249:53 /* never executed in any replay */
  }
  if (v7) {                                             // #206556:175:160 [L d1 h1 c1]
    v37 = undefined;                                    // #206567:16:233 [-] /* never executed in any replay */
    return v37;                                         // #206570:96:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #206562:131:53 #206572:153:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #206575:41:233 [L d1 h1 c1]
  v12 = undefined;                                      // #206580:121:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #206583:111:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #206587:77:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #206591:249:69 [L d1 h1 c1]
    v15 = false;                                        // #206609:243:233 [-] +#206612:183:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #206617:227:7 [L d1 h1 c1]
    v39 = 4;                                            // #206621:110:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #206624:226:65 #206628:3:130 [L d1 h1 c1]
    v15 = v16;                                          // #206631:164:150 [L d1 h1 c1] +#206634:228:53
  }
  if (v15) {                                            // #206639:73:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #206650:13:103 [L d1 h1 c1]
    v18 = "";                                           // #206655:205:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #206659:18:210 [L d1 h1 c1]
  } else {
    // #206645:53:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #206667:179:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #206670:129:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #206674:151:7 [L d1 h1 c1]
  v22 = 1;                                              // #206678:82:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #206681:100:7 [L d1 h1 c1]
  v41 = "JqKY3";                                        // #206685:136:233 [L d1 h1 c1]
  arr_v32[v40] = "JqKY3";                               // #206694:2:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #206698:13:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #206734:111:150 [L d1 h1 c1]
    v42 = 0;                                            // #206737:202:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #206740:252:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #206744:11:16 [L d1 h1 c1] +#206749:111:53
  } else {
    // #206724:233:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #206754:177:233 [L d1 h1 c1]
  return v45;                                           // #206757:189:245 [L d1 h1 c1]
}