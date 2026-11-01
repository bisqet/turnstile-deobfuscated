function probe_1_WebGLRenderingContext_getParameter(win_v44 /* r70 */, v45 /* r209 */, v46 /* r211 */, v47 /* r217 */, v48 /* r220 */, v49 /* r221 */) { // entry L161440_108; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 57 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, win_v3 /* r204 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r199 */, fn_v8 /* r205 */, win_v9 /* r204 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r202 */, fn_v14 /* r204 */, fn_v15 /* r205 */, win_v16 /* r204 */, v17 /* r205 */, v18 /* r205 */, fn_v19 /* r205 */, v20 /* r204 */;
  let v21 /* r204 */, arr_v22 /* r205 */, v23 /* r205 */, v24 /* r198 */, v25 /* r204 */, v26 /* r196 */, v27 /* r198 */, v28 /* r204 */, v29 /* r198 */, v30 /* r204 */;
  let v31 /* r195 */, v32 /* r193 */, v33 /* r202 */, v34 /* r196 */, v35 /* r204 */, v36 /* r192 */, v37 /* r204 */, arr_v38 /* r204 */, v39 /* r205 */, v40 /* r205 */;
  let v41 /* r202 */, v42 /* r205 */, win_v43 /* r205 */, v50 /* r198 */, v51 /* r195 */, v52 /* r196 */, v53 /* r199 */, v54 /* r202 */, v55 /* r202 */, v56 /* r204 */;
  let v57 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v9 3, win_v16 3, win_v43 3, win_v44 3
  //   Function: fn_v8 3, fn_v14 3, fn_v15 3, fn_v19 3
  //   Array: arr_v22 3, arr_v38 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 5 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15);                                               // #161441:140:53 #161451:203:211 [L d1 h1 c1]
  v1 = undefined;                                       // #161454:19:233 [L d1 h1 c1]
  v2 = undefined;                                       // #161457:59:233 #161460:195:233 [L d1 h1 c1]
  v50 = undefined;                                      // #161463:43:233 [L d1 h1 c1]
  win_v3 = win_v44[v49];                                // #161466:25:7 [L d1 h1 c1]
  v4 = KP(161469);                                      // #161470:169:233 [L d1 h1 c1]
  v5 = MC(win_v3, v45, v4);                             // #161563:158:114 [L d1 h1 c1]
  v6 = 0;                                               // #161568:253:72 [L d1 h1 c1]
  v51 = "eval";                                         // #161571:253:233 [L d1 h1 c1]
  v52 = undefined;                                      // #161576:253:233 [L d1 h1 c1]
  v7 = "this";                                          // #161579:253:233 [L d1 h1 c1] +#161584:25:53
  while ((fn_v8 = win_v44.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v44 === win_v9)), !(v10))) {  // #161589:226:7 | #161593:51:114 | #161598:211:65 #161602:112:130 #161605:217:130 | #161608:4:160 [L d1 h1 c1]
    // #161614:196:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #161624:107:236 [L d1 h1 c1]
  v12 = v11[v48];                                       // #161627:89:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #161631:15:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #161635:57:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #161638:60:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #161652:57:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #161655:154:142 [L d1 h1 c1]
  try {
    TP(tryStack, 161859, 117, callDepths);                         // #161660:27:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v44[v49];                             // #161666:73:7 [L d1 h1 c1]
    v17 = KP(161669);                                   // #161670:25:233 [L d1 h1 c1]
    v53 = win_v16.uOdMb2(v17);                          // #161763:6:138 [L d1 h1 c1]
    v13[v47] = 0;                                       // #161782:40:103 [L d1 h1 c1]
    v18 = "";                                           // #161787:60:233 [L d1 h1 c1]
    v13[v46] = ("");                                    // #161791:230:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #161795:117:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #161809:253:113 [L d1 h1 c1]
    v21 = 0; if (v13[v47] === 0) {                      // #161813:35:7 #161817:247:69 [L d1 h1 c1]
      v13[v47] = 3;                                     // #161835:180:103 [L d1 h1 c1]
      v13[v46] = ("");                                  // #161840:152:233 #161844:113:210 [L d1 h1 c1]
    }
    arr_v22 = tryStack.pop();                                // #161852:211:124 [L d1 h1 c1]
    arr_v38 = cell[0];                                  // #161855:23:53 #162085:184:236 [L d1 h1 c1]
    v39 = 1;                                            // #162088:47:72 [L d1 h1 c1]
    v54 = arr_v38[1];                                   // #162091:13:7 [L d1 h1 c1]
    v40 = arr_v38[v54];                                 // #162095:243:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #162099:122:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v41 = 1;                                          // #162135:232:72 [L d1 h1 c1]
      v42 = arr_v38[1];                                 // #162138:34:7 [L d1 h1 c1]
      v55 = "YhNQwn0";                                  // #162142:206:233 [L d1 h1 c1]
      arr_v38[v42] = "YhNQwn0";                         // #162153:79:210 [L d1 h1 c1]
    } else {
      // #162125:226:53 [-] /* never executed in any replay */
    }
    win_v43 = win_v44[v49];                             // #162161:4:7 [L d1 h1 c1]
    v56 = win_v43.qwQRi7();                             // #162165:5:138 [L d1 h1 c1]
    v57 = undefined;                                    // #162183:229:233 [L d1 h1 c1]
    return v57;                                         // #162186:33:245 [L d1 h1 c1]
  } catch (caught) {
    v23 = caught;                                         // #161860:206:150 [-] /* never executed in any replay */
    v24 = win_v44[v49];                                 // #161863:240:7 [-] /* never executed in any replay */
    v25 = KP(m161866k240);                              // #161867:228:233 [-] /* never executed in any replay */
    v26 = MC(v24, v45, v25);                            // #161960:173:114 [-] /* never executed in any replay */
    v27 = win_v44[v49];                                 // #161965:19:7 [-] /* never executed in any replay */
    v28 = v27;                                          // #161969:116:150 [-] /* never executed in any replay */
    v29 = (v28)[KP(m161971k116)](v23);                  // #161972:181:138 [-] /* never executed in any replay */
    v30 = win_v44[v49];                                 // #161991:251:7 [-] /* never executed in any replay */
    v31 = v30;                                          // #161995:188:150 [-] /* never executed in any replay */
    v32 = v31[KP(m161997k188)];                         // #161998:163:200 [-] /* never executed in any replay */
    v33 = cell[15];                                     // #162003:66:236 [-] /* never executed in any replay */
    v34 = KP(m162005k66);                               // #162006:110:233 [-] /* never executed in any replay */
    v35 = cell[5];                                      // #162011:161:236 [-] /* never executed in any replay */
    v36 = v32.call(v31, v29, v33, v34, v35);            // #162014:110:138 [-] /* never executed in any replay */
    v37 = 1; v33[v47] = 1;                              // #162036:240:103 [-] /* never executed in any replay */
    if (v23[KP(m162040k240)]) {                         // #162041:7:200 #162046:250:160 [-] /* never executed in any replay */
      outside("L162071_226");                           // #162069:226:150 [-]  L162071_226 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L162051_250");  // L162051_250 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}