function probe_21_RTCPeerConnection_createOffer_setLocalDescriptio(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L244363_178; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #244364:58:53 #244374:79:211 [L d1 h1 c1]
  v1 = undefined;                                       // #244378:135:233 [L d1 h1 c1]
  v2 = undefined;                                       // #244381:223:233 #244384:215:233 [L d1 h1 c1]
  v51 = undefined;                                      // #244387:239:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #244390:205:7 [L d1 h1 c1]
  v4 = KP(244393);                                      // #244394:141:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #244467:242:114 [L d1 h1 c1]
  v6 = 0;                                               // #244472:1:72 [L d1 h1 c1]
  v52 = "eval";                                         // #244475:241:233 [L d1 h1 c1]
  v53 = undefined;                                      // #244480:33:233 [L d1 h1 c1]
  v7 = "this";                                          // #244483:145:233 [L d1 h1 c1] +#244488:93:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #244493:215:7 | #244497:148:114 | #244502:240:65 #244506:89:130 #244509:94:130 | #244512:181:160 [L d1 h1 c1]
    // #244518:241:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #244528:183:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #244531:117:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #244535:187:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #244539:53:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #244542:72:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #244556:21:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #244559:167:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #244562:208:142 [L d1 h1 c1]
  try {
    TP(tryStack, 244745, 53, callDepths);                          // #244567:249:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #244573:47:7 [L d1 h1 c1]
    v17 = KP(244576);                                   // #244577:231:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #244650:28:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #244669:102:103 [L d1 h1 c1]
    v18 = "";                                           // #244674:2:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #244678:20:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #244682:107:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #244692:155:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #244696:79:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #244699:173:7 #244703:217:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #244721:79:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #244726:135:233 #244730:100:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #244738:70:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #244741:126:53 #244956:236:236 [L d1 h1 c1]
    v40 = 1;                                            // #244959:147:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #244962:225:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #244966:119:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #244970:238:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #245006:89:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #245009:15:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #245013:71:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #245018:36:210 [L d1 h1 c1]
    } else {
      // #244996:134:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #245026:130:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #245030:11:138 [L d1 h1 c1]
    v58 = undefined;                                    // #245048:83:233 [L d1 h1 c1]
    return v58;                                         // #245051:87:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #244746:142:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #244749:176:7 [-] /* never executed in any replay */
    v26 = KP(m244752k176);                              // #244753:164:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #244826:109:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #244831:211:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #244835:52:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m244837k52)](v24);                   // #244838:117:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #244857:187:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #244861:124:150 [-] /* never executed in any replay */
    v33 = v32[KP(m244863k124)];                         // #244864:99:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #244869:2:236 [-] /* never executed in any replay */
    v35 = KP(m244871k2);                                // #244872:46:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #244877:97:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #244880:46:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #244902:176:103 [-] /* never executed in any replay */
    if (v24[KP(m244906k176)]) {                         // #244907:199:200 #244912:186:160 [-] /* never executed in any replay */
      outside("L244937_192");                           // #244935:192:150 [-]  L244937_192 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L244917_186");  // L244917_186 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}