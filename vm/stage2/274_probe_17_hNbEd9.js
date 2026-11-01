function probe_17_hNbEd9(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L225731_187; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #225732:95:53 #225742:177:211 [L d1 h1 c1]
  v1 = undefined;                                       // #225745:225:233 [L d1 h1 c1]
  v2 = undefined;                                       // #225748:81:233 #225751:1:233 [L d1 h1 c1]
  v51 = undefined;                                      // #225754:241:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #225757:71:7 [L d1 h1 c1]
  v4 = KP(225760);                                      // #225761:159:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #225834:60:114 [L d1 h1 c1]
  v6 = 0;                                               // #225839:163:72 [L d1 h1 c1]
  v52 = "eval";                                         // #225842:139:233 [L d1 h1 c1]
  v53 = undefined;                                      // #225847:211:233 [L d1 h1 c1]
  v7 = "this";                                          // #225850:251:233 [L d1 h1 c1] +#225855:159:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #225860:114:7 | #225864:131:114 | #225869:227:65 #225873:64:130 #225876:105:130 | #225879:84:160 [L d1 h1 c1]
    // #225885:212:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #225895:32:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #225898:122:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #225902:236:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #225906:226:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #225909:129:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #225923:170:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #225926:135:142 [L d1 h1 c1]
  try {
    TP(tryStack, 226109, 254, callDepths);                         // #225931:148:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #225937:30:7 [L d1 h1 c1]
    v17 = KP(225940);                                   // #225941:218:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #226014:3:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #226033:113:103 [L d1 h1 c1]
    v18 = "";                                           // #226038:161:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #226042:247:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #226046:130:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #226056:22:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #226060:158:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #226063:128:7 #226067:32:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #226085:240:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #226090:228:233 #226094:141:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #226102:131:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #226105:7:53 #226315:192:236 [L d1 h1 c1]
    v40 = 1;                                            // #226318:23:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #226321:85:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #226325:27:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #226329:2:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #226365:253:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #226368:35:7 [L d1 h1 c1]
      v56 = "AWOAUy7";                                  // #226372:11:233 [L d1 h1 c1]
      arr_v39[v43] = "AWOAUy7";                         // #226383:216:210 [L d1 h1 c1]
    } else {
      // #226355:74:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #226391:196:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #226395:197:138 [L d1 h1 c1]
    v58 = undefined;                                    // #226413:165:233 [L d1 h1 c1]
    return v58;                                         // #226416:225:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #226110:115:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #226113:65:7 [-] /* never executed in any replay */
    v26 = KP(m226116k65);                               // #226117:49:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #226190:6:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #226195:72:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #226199:21:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m226201k21)](v24);                   // #226202:18:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #226221:36:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #226225:129:150 [-] /* never executed in any replay */
    v33 = v32[KP(m226227k129)];                         // #226228:148:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #226233:175:236 [-] /* never executed in any replay */
    v35 = KP(m226235k175);                              // #226236:103:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #226241:246:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #226244:175:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #226266:109:103 [-] /* never executed in any replay */
    if (v24[KP(m226270k109)]) {                         // #226271:208:200 #226276:223:160 [-] /* never executed in any replay */
      outside("L226301_188");                           // #226299:188:150 [-]  L226301_188 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L226281_223");  // L226281_223 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}