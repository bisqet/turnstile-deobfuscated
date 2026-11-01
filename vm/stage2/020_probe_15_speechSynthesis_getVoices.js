function probe_15_speechSynthesis_getVoices(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L13763_147; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #13764:215:53 #13774:14:211 [L d1 h1 c1]
  v1 = undefined;                                       // #13777:10:233 [L d1 h1 c1]
  v2 = undefined;                                       // #13780:22:233 #13783:242:233 [L d1 h1 c1]
  v51 = undefined;                                      // #13786:94:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #13789:64:7 [L d1 h1 c1]
  v4 = KP(13792);                                       // #13793:244:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #13866:125:114 [L d1 h1 c1]
  v6 = 0;                                               // #13871:32:72 [L d1 h1 c1]
  v52 = "eval";                                         // #13874:84:233 [L d1 h1 c1]
  v53 = undefined;                                      // #13879:184:233 [L d1 h1 c1]
  v7 = "this";                                          // #13882:140:233 [L d1 h1 c1] +#13887:44:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #13892:36:7 | #13896:237:114 | #13901:37:65 #13905:250:130 #13908:187:130 | #13911:222:160 [L d1 h1 c1]
    // #13917:182:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #13927:89:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #13930:15:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #13934:109:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #13938:159:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #13941:138:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #13955:207:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #13958:88:142 [L d1 h1 c1]
  try {
    TP(tryStack, 14141, 187, callDepths);                          // #13963:97:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #13969:247:7 [L d1 h1 c1]
    v17 = KP(13972);                                    // #13973:143:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #14046:36:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #14065:78:103 [L d1 h1 c1]
    v18 = "";                                           // #14070:74:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #14074:60:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #14078:243:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #14088:3:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #14092:23:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #14095:85:7 #14099:225:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #14117:43:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #14122:243:233 #14126:32:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #14134:111:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #14137:67:53 #14347:118:236 [L d1 h1 c1]
    v40 = 1;                                            // #14350:117:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #14353:187:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #14357:105:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #14361:152:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #14397:43:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #14400:25:7 [L d1 h1 c1]
      v56 = "kBNrqb0";                                  // #14404:169:233 [L d1 h1 c1]
      arr_v39[v43] = "kBNrqb0";                         // #14415:126:210 [L d1 h1 c1]
    } else {
      // #14387:8:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #14423:131:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #14427:72:138 [L d1 h1 c1]
    v58 = undefined;                                    // #14445:220:233 [L d1 h1 c1]
    return v58;                                         // #14448:252:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #14142:124:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #14145:102:7 [-] /* never executed in any replay */
    v26 = KP(m14148k102);                               // #14149:2:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #14222:211:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #14227:33:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #14231:202:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m14233k202)](v24);                   // #14234:51:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #14253:1:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #14257:42:150 [-] /* never executed in any replay */
    v33 = v32[KP(m14259k42)];                           // #14260:217:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #14265:32:236 [-] /* never executed in any replay */
    v35 = KP(m14267k32);                                // #14268:84:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #14273:111:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #14276:132:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #14298:46:103 [-] /* never executed in any replay */
    if (v24[KP(m14302k46)]) {                           // #14303:205:200 #14308:40:160 [-] /* never executed in any replay */
      outside("L14333_111");                            // #14331:111:150 [-]  L14333_111 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L14313_40");  // L14313_40 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}