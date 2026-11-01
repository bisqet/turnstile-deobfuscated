function probe_9_tjYx6(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L228296_191; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 58 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, win_v3 /* r204 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r199 */, fn_v8 /* r205 */, win_v9 /* r204 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r202 */, fn_v14 /* r204 */, fn_v15 /* r205 */, win_v16 /* r204 */, v17 /* r205 */, v18 /* r205 */, fn_v19 /* r204 */, v20 /* r205 */;
  let v21 /* r204 */, v22 /* r204 */, arr_v23 /* r205 */, v24 /* r205 */, v25 /* r198 */, v26 /* r204 */, v27 /* r196 */, v28 /* r198 */, v29 /* r204 */, v30 /* r198 */;
  let v31 /* r204 */, v32 /* r195 */, v33 /* r193 */, v34 /* r202 */, v35 /* r196 */, v36 /* r204 */, v37 /* r192 */, v38 /* r204 */, arr_v39 /* r204 */, v40 /* r205 */;
  let v41 /* r205 */, v42 /* r202 */, v43 /* r205 */, win_v44 /* r205 */, v51 /* r198 */, v52 /* r195 */, v53 /* r196 */, v54 /* r199 */, v55 /* r202 */, v56 /* r202 */;
  let v57 /* r204 */, v58 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v9 3, win_v16 3, win_v44 3, win_v45 3
  //   Function: fn_v8 3, fn_v14 3, fn_v15 3, fn_v19 3
  //   Array: arr_v23 3, arr_v39 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 5 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15);                                               // #228297:83:53 #228307:119:211 [L d1 h1 c1]
  v1 = undefined;                                       // #228310:15:233 [L d1 h1 c1]
  v2 = undefined;                                       // #228313:71:233 #228316:159:233 [L d1 h1 c1]
  v51 = undefined;                                      // #228319:151:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #228322:213:7 [L d1 h1 c1]
  v4 = KP(228325);                                      // #228326:117:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #228399:58:114 [L d1 h1 c1]
  v6 = 0;                                               // #228404:41:72 [L d1 h1 c1]
  v52 = "eval";                                         // #228407:121:233 [L d1 h1 c1]
  v53 = undefined;                                      // #228412:137:233 [L d1 h1 c1]
  v7 = "this";                                          // #228415:89:233 [L d1 h1 c1] +#228420:5:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #228425:143:7 | #228429:108:114 | #228434:104:65 #228438:241:130 #228441:150:130 | #228444:13:160 [L d1 h1 c1]
    // #228450:233:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #228460:88:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #228463:210:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #228467:228:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #228471:250:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #228474:57:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #228488:130:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #228491:255:142 [L d1 h1 c1]
  try {
    TP(tryStack, 228674, 74, callDepths);                          // #228496:44:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #228502:86:7 [L d1 h1 c1]
    v17 = KP(228505);                                   // #228506:50:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #228579:251:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #228598:137:103 [L d1 h1 c1]
    v18 = "";                                           // #228603:89:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #228607:207:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #228611:250:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #228621:174:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #228625:214:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #228628:216:7 #228632:24:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #228650:88:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #228655:172:233 #228659:53:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #228667:108:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #228670:140:53 #228880:226:236 [L d1 h1 c1]
    v40 = 1;                                            // #228883:49:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #228886:135:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #228890:5:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #228894:196:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #228930:248:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #228933:242:7 [L d1 h1 c1]
      v56 = "eWPKg6";                                   // #228937:94:233 [L d1 h1 c1]
      arr_v39[v43] = "eWPKg6";                          // #228947:159:210 [L d1 h1 c1]
    } else {
      // #228920:132:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #228955:199:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #228959:124:138 [L d1 h1 c1]
    v58 = undefined;                                    // #228977:64:233 [L d1 h1 c1]
    return v58;                                         // #228980:208:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #228675:143:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #228678:237:7 [-] /* never executed in any replay */
    v26 = KP(m228681k237);                              // #228682:45:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #228755:18:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #228760:36:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #228764:129:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m228766k129)](v24);                  // #228767:206:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #228786:240:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #228790:29:150 [-] /* never executed in any replay */
    v33 = v32[KP(m228792k29)];                          // #228793:192:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #228798:43:236 [-] /* never executed in any replay */
    v35 = KP(m228800k43);                               // #228801:243:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #228806:82:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #228809:155:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #228831:169:103 [-] /* never executed in any replay */
    if (v24[KP(m228835k169)]) {                         // #228836:28:200 #228841:251:160 [-] /* never executed in any replay */
      outside("L228866_210");                           // #228864:210:150 [-]  L228866_210 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L228846_251");  // L228846_251 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}