function probe_28_ZqqO3(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L174827_125; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #174828:153:53 #174838:36:211 [L d1 h1 c1]
  v1 = undefined;                                       // #174841:72:233 [L d1 h1 c1]
  v2 = undefined;                                       // #174844:220:233 #174847:32:233 [L d1 h1 c1]
  v51 = undefined;                                      // #174850:84:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #174853:222:7 [L d1 h1 c1]
  v4 = KP(174856);                                      // #174857:154:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #174930:11:114 [L d1 h1 c1]
  v6 = 0;                                               // #174935:246:72 [L d1 h1 c1]
  v52 = "eval";                                         // #174938:82:233 [L d1 h1 c1]
  v53 = undefined;                                      // #174943:62:233 [L d1 h1 c1]
  v7 = "this";                                          // #174946:122:233 [L d1 h1 c1] +#174951:226:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #174956:212:7 | #174960:221:114 | #174965:85:65 #174969:106:130 #174972:107:130 | #174975:206:160 [L d1 h1 c1]
    // #174981:230:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #174991:172:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #174994:214:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #174998:216:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #175002:30:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #175005:205:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #175019:198:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #175022:51:142 [L d1 h1 c1]
  try {
    TP(tryStack, 175205, 4, callDepths);                           // #175027:144:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #175033:42:7 [L d1 h1 c1]
    v17 = KP(175036);                                   // #175037:182:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #175110:111:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #175129:45:103 [L d1 h1 c1]
    v18 = "";                                           // #175134:109:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #175138:147:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #175142:174:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #175152:146:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #175156:42:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #175159:220:7 #175163:12:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #175181:196:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #175186:104:233 #175190:1:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #175198:223:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #175201:243:53 #175411:22:236 [L d1 h1 c1]
    v40 = 1;                                            // #175414:149:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #175417:91:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #175421:137:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #175425:56:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #175461:32:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #175464:122:7 [L d1 h1 c1]
      v56 = "XGGO0";                                    // #175468:198:233 [L d1 h1 c1]
      arr_v39[v43] = "XGGO0";                           // #175477:103:210 [L d1 h1 c1]
    } else {
      // #175451:40:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #175485:194:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #175489:75:138 [L d1 h1 c1]
    v58 = undefined;                                    // #175507:147:233 [L d1 h1 c1]
    return v58;                                         // #175510:151:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #175206:225:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #175209:119:7 [-] /* never executed in any replay */
    v26 = KP(m175212k119);                              // #175213:15:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #175286:236:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #175291:22:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #175295:43:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m175297k43)](v24);                   // #175298:80:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #175317:234:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #175321:175:150 [-] /* never executed in any replay */
    v33 = v32[KP(m175323k175)];                         // #175324:138:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #175329:77:236 [-] /* never executed in any replay */
    v35 = KP(m175331k77);                               // #175332:13:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #175337:132:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #175340:133:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #175362:107:103 [-] /* never executed in any replay */
    if (v24[KP(m175366k107)]) {                         // #175367:86:200 #175372:205:160 [-] /* never executed in any replay */
      outside("L175397_94");                            // #175395:94:150 [-]  L175397_94 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L175377_205");  // L175377_205 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}