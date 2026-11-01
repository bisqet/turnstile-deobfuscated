function probe_29_Oqyy0(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L5332_148; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #5333:20:53 #5343:232:211 [L d1 h1 c1]
  v1 = undefined;                                       // #5346:252:233 [L d1 h1 c1]
  v2 = undefined;                                       // #5349:192:233 #5352:116:233 [L d1 h1 c1]
  v51 = undefined;                                      // #5355:88:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #5358:210:7 [L d1 h1 c1]
  v4 = KP(5361);                                        // #5362:190:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #5435:159:114 [L d1 h1 c1]
  v6 = 0;                                               // #5440:58:72 [L d1 h1 c1]
  v52 = "eval";                                         // #5443:134:233 [L d1 h1 c1]
  v53 = undefined;                                      // #5448:162:233 [L d1 h1 c1]
  v7 = "this";                                          // #5451:78:233 [L d1 h1 c1] +#5456:102:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #5461:191:7 | #5465:220:114 | #5470:24:65 #5474:225:130 #5477:198:130 | #5480:125:160 [L d1 h1 c1]
    // #5486:153:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #5496:172:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #5499:214:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #5503:216:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #5507:30:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #5510:205:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #5524:198:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #5527:51:142 [L d1 h1 c1]
  try {
    TP(tryStack, 5710, 78, callDepths);                            // #5532:144:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #5538:42:7 [L d1 h1 c1]
    v17 = KP(5541);                                     // #5542:182:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #5615:111:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #5634:45:103 [L d1 h1 c1]
    v18 = "";                                           // #5639:109:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #5643:147:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #5647:174:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #5657:146:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #5661:42:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #5664:220:7 #5668:12:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #5686:201:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #5691:153:233 #5695:174:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #5703:191:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #5706:83:53 #5916:6:236 [L d1 h1 c1]
    v40 = 1;                                            // #5919:197:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #5922:203:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #5926:57:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #5930:40:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #5966:65:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #5969:87:7 [L d1 h1 c1]
      v56 = "DFUycx7";                                  // #5973:111:233 [L d1 h1 c1]
      arr_v39[v43] = "DFUycx7";                         // #5984:172:210 [L d1 h1 c1]
    } else {
      // #5956:88:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #5992:224:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #5996:113:138 [L d1 h1 c1]
    v58 = undefined;                                    // #6014:161:233 [L d1 h1 c1]
    return v58;                                         // #6017:237:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #5711:131:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #5714:17:7 [-] /* never executed in any replay */
    v26 = KP(m5717k17);                                 // #5718:193:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #5791:86:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #5796:88:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #5800:229:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m5802k229)](v24);                    // #5803:162:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #5822:116:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #5826:145:150 [-] /* never executed in any replay */
    v33 = v32[KP(m5828k145)];                           // #5829:100:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #5834:63:236 [-] /* never executed in any replay */
    v35 = KP(m5836k63);                                 // #5837:183:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #5842:6:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #5845:127:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #5867:253:103 [-] /* never executed in any replay */
    if (v24[KP(m5871k253)]) {                           // #5872:32:200 #5877:239:160 [-] /* never executed in any replay */
      outside("L5902_88");                              // #5900:88:150 [-]  L5902_88 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L5882_239");  // L5882_239 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}