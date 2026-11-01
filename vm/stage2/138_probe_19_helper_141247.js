function probe_19_helper_141247(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L141230_177; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  v1 = undefined;                                       // #141231:253:53 #141241:127:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #141244:29:7 [L d1 h1 c1]
  v3 = KP(141247);                                      // #141248:157:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #141321:194:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #141326:20:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #141330:155:200 #141335:62:160 [L d1 h1 c1]
    v31 = undefined;                                    // #141346:218:233 [-] /* never executed in any replay */
    return v31;                                         // #141349:130:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #141341:150:53 #141351:11:236 [L d1 h1 c1]
  v4 = 1;                                               // #141354:246:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #141357:120:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #141361:114:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #141365:222:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #141370:114:161 [L d1 h1 c1]
    v7 = false;                                         // #141387:186:233 [L d1 h1 c1] +#141390:34:53
  } else {
    v8 = 1;                                             // #141395:63:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #141398:221:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #141402:131:7 [-] /* never executed in any replay */
    v35 = "BNbBPE4";                                    // #141406:235:233 [-] /* never executed in any replay */
    v36 = !(v34 === "BNbBPE4");                         // #141417:171:65 #141421:232:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #141424:53:150 [-] +#141427:113:53 /* never executed in any replay */
  }
  if (v7) {                                             // #141432:123:160 [L d1 h1 c1]
    v37 = undefined;                                    // #141443:212:233 [-] /* never executed in any replay */
    return v37;                                         // #141446:20:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #141438:31:53 #141448:47:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #141451:231:233 [L d1 h1 c1]
  v12 = undefined;                                      // #141456:191:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #141459:29:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #141463:195:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #141467:23:69 [L d1 h1 c1]
    v15 = false;                                        // #141485:62:233 [-] +#141488:150:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #141493:155:7 [L d1 h1 c1]
    v39 = 4;                                            // #141497:70:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #141500:90:65 #141504:155:130 [L d1 h1 c1]
    v15 = v16;                                          // #141507:220:150 [L d1 h1 c1] +#141510:60:53
  }
  if (v15) {                                            // #141515:97:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #141526:237:103 [L d1 h1 c1]
    v18 = "";                                           // #141531:45:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #141535:242:210 [L d1 h1 c1]
  } else {
    // #141521:237:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #141543:106:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #141546:28:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #141550:134:7 [L d1 h1 c1]
  v22 = 1;                                              // #141554:69:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #141557:75:7 [L d1 h1 c1]
  v41 = "qoKDg0";                                       // #141561:147:233 [L d1 h1 c1]
  arr_v32[v40] = "qoKDg0";                              // #141571:161:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #141575:240:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #141611:87:150 [L d1 h1 c1]
    v42 = 0;                                            // #141614:18:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #141617:36:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #141621:147:16 [L d1 h1 c1] +#141626:215:53
  } else {
    // #141601:0:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #141631:123:233 [L d1 h1 c1]
  return v45;                                           // #141634:223:245 [L d1 h1 c1]
}