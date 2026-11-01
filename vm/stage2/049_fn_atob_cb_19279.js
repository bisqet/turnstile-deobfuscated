function fn_atob_cb_19279(win_v29 /* r70 */) { // entry L19279_204; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 59 register webs used only inside this fn (no live-in, cross-call or table-made def; 31 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r204 */, v4 /* r204 */, v5 /* r205 */, arr_v6 /* r247 */, fn_v7 /* r205 */, v8 /* r252 */, v9 /* r250 */, elSpan_v10 /* r193 */;
  let fn_v11 /* r205 */, v12 /* r252 */, elSpan_v13 /* r193 */, math_v14 /* r205 */, math_v15 /* r193 */, v16 /* r205 */, v17 /* r205 */, v18 /* r204 */, v19 /* r193 */, v20 /* r204 */;
  let v21 /* r205 */, arr_v22 /* r205 */, v23 /* r204 */, v24 /* r204 */, arr_v25 /* r205 */, v26 /* r205 */, v27 /* r204 */, v28 /* r205 */, v30 /* r202 */, v31 /* r198 */;
  let v32 /* r199 */, v33 /* r254 */, v34 /* r250 */, v35 /* r247 */, v36 /* r196 */, v37 /* r205 */, v38 /* r202 */, arr_v39 /* r198 */, v40 /* r199 */, v41 /* r254 */;
  let v42 /* r246 */, v43 /* r240 */, v44 /* r238 */, v45 /* r192 */, v46 /* r237 */, v47 /* r245 */, v48 /* r244 */, v49 /* r253 */, v50 /* r195 */, v51 /* r250 */;
  let v52 /* r242 */, v53 /* r247 */, fn_v54 /* r252 */, v55 /* r196 */, v56 /* r193 */, v57 /* r204 */, v58 /* r204 */, v59 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v6 9, arr_v22 9, arr_v25 3, arr_v39 3
  //   Function: fn_v7 9, fn_v11 9, fn_v54 9
  //   HTMLSpanElement: elSpan_v10 9, elSpan_v13 9
  //   Math: math_v14 9, math_v15 9
  //   Window: win_v29 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 3 single-use temps folded (1 of them expressions, H135), 6 dead register writes dropped, 4 constants propagated (4 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2)
  v30 = undefined;                                      // #19280:108:53 #19290:255:233 [L d1 h1 c1]
  v31 = undefined;                                      // #19293:119:233 [L d1 h1 c1]
  v32 = undefined;                                      // #19296:15:233 [L d1 h1 c1]
  v33 = undefined;                                      // #19299:71:233 [L d1 h1 c1]
  v34 = undefined;                                      // #19302:159:233 #19305:151:233 [L d1 h1 c1]
  v35 = undefined;                                      // #19308:175:233 [L d1 h1 c1]
  v36 = undefined;                                      // #19311:103:233 [L d1 h1 c1]
  v1 = undefined;                                       // #19314:63:233 [L d1 h1 c1]
  r205 = cell[53]();                                    // #19317:23:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v2 = cell[38];                                        // #19321:230:236 [L d1 h1 c1]
  if (v2) {                                             // #19324:29:160 [L d1 h1 c1]
    v37 = undefined;                                    // #19335:237:233 [-] /* never executed in any replay */
    return v37;                                         // #19338:9:245 [-] /* never executed in any replay */
  }
  v38 = null;                                           // #19330:185:53 #19340:152:233 [L d1 h1 c1]
  try {
    TP(tryStack, 19741, 247, callDepths);                          // #19343:161:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    arr_v39 = [];                                       // #19349:11:107 [L d1 h1 c1]
    v40 = 0;                                            // #19351:246:72 [L d1 h1 c1]
    v41 = 0;                                            // #19354:245:72 [L d1 h1 c1]
    v42 = "Math";                                       // #19357:21:233 [L d1 h1 c1]
    v43 = "QrYY8";                                      // #19362:181:233 [L d1 h1 c1]
    v44 = "inWL2";                                      // #19371:213:233 [L d1 h1 c1]
    v45 = "ufqJ9";                                      // #19380:117:233 [L d1 h1 c1]
    v46 = "length";                                     // #19389:149:233 [L d1 h1 c1]
    v47 = "PQsVV1";                                     // #19394:53:233 [L d1 h1 c1]
    v48 = "ZoTKg5";                                     // #19404:85:233 [L d1 h1 c1]
    v49 = "number";                                     // #19414:245:233 [L d1 h1 c1]
    v50 = 0.01;                                         // #19419:21:233 [L d1 h1 c1] +#19430:181:233 +#19442:241:53
    while ((v4 = cell[41][v46], v5 = v41 < v4, v41 < v4)) {  // #19460:188:236 #19463:166:7 | #19467:15:186 [L d4 h4 c4]
      arr_v6 = cell[41][v41];                           // #19485:130:236 #19488:212:7 [L d3 h3 c3]
      fn_v7 = cell[60];                                 // #19492:239:236 [L d3 h3 c3]
      v8 = undefined;                                   // #19495:167:233 [L d3 h3 c3]
      v9 = 0;                                           // #19498:34:72 [L d3 h3 c3]
      elSpan_v10 = arr_v6[0];                           // #19501:244:7 [L d3 h3 c3]
      v51 = MC(undefined, fn_v7, elSpan_v10, v43, v44, v41);    // #19505:35:16 [L d3 h3 c3]
      fn_v11 = cell[60];                                // #19514:194:236 [L d3 h3 c3]
      v12 = undefined;                                  // #19517:238:233 [L d3 h3 c3]
      v52 = 1;                                          // #19520:13:72 [L d3 h3 c3]
      elSpan_v13 = arr_v6[1];                           // #19523:243:7 [L d3 h3 c3]
      v53 = MC(undefined, fn_v11, elSpan_v13, v47, v48, v41);    // #19527:230:16 [L d3 h3 c3]
      math_v14 = win_v29[v42];                          // #19536:168:7 [L d3 h3 c3]
      math_v15 = math_v14;                              // #19540:245:150 [L d3 h3 c3]
      fn_v54 = math_v14.abs;                            // #19543:56:200 [L d3 h3 c3]
      v16 = v51 - v53;                                  // #19550:101:54 [L d3 h3 c3]
      v55 = fn_v54.call(math_v15, v16);                 // #19554:34:138 [L d3 h3 c3]
      v17 = typeof v55;                                 // #19571:70:193 [L d3 h3 c3]
      v18 = !(v49 === v17);                             // #19574:90:65 #19578:155:130 [L d3 h3 c3]
      if (v18) {                                        // #19581:62:160 [L d3 h3 c3]
        v21 = v18;                                      // #19624:107:150 [-] +#19627:79:53 /* never executed in any replay */
      } else {
        v19 = win_v29.isFinite(v55);                    // #19587:150:53 #19592:87:138 [L d3 h3 c3]
        v20 = !v19;                                     // #19613:228:130 [L d3 h3 c3]
        v21 = v20;                                      // #19616:65:150 [L d3 h3 c3] +#19619:77:53
      }
      if (v21) {                                        // #19632:15:160 [L d3 h3 c3]
        r205 = cell[59](v45, v41);                      // #19643:89:242 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
      } else {
        // #19638:99:53 [L d3 h3 c3]
      }
      arr_v22 = arr_v39;                                // #19650:111:150 [L d3 h3 c3]
      v56 = (arr_v22).push(v55);                        // #19653:132:138 [L d3 h3 c3]
      v23 = v50 < v55;                                  // #19670:253:98 [L d3 h3 c3]
      if (v23) {                                        // #19674:152:160 [L d3 h3 c3]
        v40 = v40 + 1;                                  // #19693:207:72 #19696:104:222 [-] +#19700:181:150 +#19703:241:53 /* never executed in any replay */
      } else {
        // #19680:8:53 #19685:127:150 #19688:19:53 [L d3 h3 c3]
      }
      v3 = v41; v41 = v41 + 1;                          // #19447:138:72 #19450:129:48 [L d3 h3 c3]
    }
    v24 = cell[20];                                     // #19713:152:236 [L d1 h1 c1]
    v24.BuKX4 = arr_v39;                                // #19716:61:142 [L d1 h1 c1]
    v24.gQet8 = v40;                                    // #19725:142:142 [L d1 h1 c1]
    arr_v25 = tryStack.pop();                                // #19734:145:124 [L d1 h1 c1]
    if (v38) {                                          // #19737:93:53 #19793:210:160 [L d1 h1 c1]
      v28 = cell[52](v38);                              // #19812:206:22 [-]  VM call: pushes a frame, the callee body returns into r205; then v28 = r205 (H142 CALL bind) /* never executed in any replay */
      v58 = v28;                                        // #19816:3:150 [-] +#19819:135:53 /* never executed in any replay */
    } else {
      v57 = v38;                                        // #19799:218:53 #19804:137:150 [L d1 h1 c1] +#19807:117:53
    }
    r205 = cell[55]();                                  // #19824:246:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
    v59 = undefined;                                    // #19828:82:233 [L d1 h1 c1]
    return v59;                                         // #19831:26:245 [L d1 h1 c1]
  } catch (caught) {
    v26 = caught;                                         // #19742:200:150 [-] /* never executed in any replay */
    v27 = KP(m19744k200);                               // #19745:92:233 [-] /* never executed in any replay */
    outside("L19754_92");  // L19754_92 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}