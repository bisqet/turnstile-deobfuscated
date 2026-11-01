function probe_22_performance_getEntries(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L192996_68; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #192997:4:53 #193007:232:211 [L d1 h1 c1]
  v1 = undefined;                                       // #193010:252:233 [L d1 h1 c1]
  v2 = undefined;                                       // #193013:192:233 #193016:116:233 [L d1 h1 c1]
  v51 = undefined;                                      // #193019:88:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #193022:210:7 [L d1 h1 c1]
  v4 = KP(193025);                                      // #193026:190:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #193099:159:114 [L d1 h1 c1]
  v6 = 0;                                               // #193104:58:72 [L d1 h1 c1]
  v52 = "eval";                                         // #193107:134:233 [L d1 h1 c1]
  v53 = undefined;                                      // #193112:162:233 [L d1 h1 c1]
  v7 = "this";                                          // #193115:78:233 [L d1 h1 c1] +#193120:102:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #193125:160:7 | #193129:121:114 | #193134:129:65 #193138:230:130 #193141:247:130 | #193144:42:160 [L d1 h1 c1]
    // #193150:210:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #193160:174:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #193163:80:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #193167:234:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #193171:104:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #193174:111:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #193188:96:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #193191:229:142 [L d1 h1 c1]
  try {
    TP(tryStack, 193374, 247, callDepths);                         // #193196:250:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #193202:108:7 [L d1 h1 c1]
    v17 = KP(193205);                                   // #193206:112:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #193279:193:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #193298:183:103 [L d1 h1 c1]
    v18 = "";                                           // #193303:79:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #193307:109:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #193311:160:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #193321:60:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #193325:172:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #193328:214:7 #193332:158:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #193350:120:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #193355:76:233 #193359:85:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #193367:151:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #193370:203:53 #193580:191:236 [L d1 h1 c1]
    v40 = 1;                                            // #193583:218:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #193586:204:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #193590:118:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #193594:177:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #193630:20:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #193633:158:7 [L d1 h1 c1]
      v56 = "HFMxE6";                                   // #193637:90:233 [L d1 h1 c1]
      arr_v39[v43] = "HFMxE6";                          // #193647:171:210 [L d1 h1 c1]
    } else {
      // #193620:253:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #193655:85:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #193659:82:138 [L d1 h1 c1]
    v58 = undefined;                                    // #193677:62:233 [L d1 h1 c1]
    return v58;                                         // #193680:86:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #193375:200:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #193378:130:7 [-] /* never executed in any replay */
    v26 = KP(m193381k130);                              // #193382:174:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #193455:207:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #193460:45:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #193464:166:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m193466k166)](v24);                  // #193467:159:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #193486:189:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #193490:246:150 [-] /* never executed in any replay */
    v33 = v32[KP(m193492k246)];                         // #193493:117:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #193498:76:236 [-] /* never executed in any replay */
    v35 = KP(m193500k76);                               // #193501:208:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #193506:251:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #193509:224:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #193531:26:103 [-] /* never executed in any replay */
    if (v24[KP(m193535k26)]) {                          // #193536:9:200 #193541:116:160 [-] /* never executed in any replay */
      outside("L193566_133");                           // #193564:133:150 [-]  L193566_133 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L193546_116");  // L193546_116 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}