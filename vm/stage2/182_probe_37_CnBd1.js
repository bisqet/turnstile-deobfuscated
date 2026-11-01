function probe_37_CnBd1(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L171135_47; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #171136:3:53 #171146:153:211 [L d1 h1 c1]
  v1 = undefined;                                       // #171150:41:233 [L d1 h1 c1]
  v2 = undefined;                                       // #171153:121:233 #171156:137:233 [L d1 h1 c1]
  v51 = undefined;                                      // #171159:89:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #171162:15:7 [L d1 h1 c1]
  v4 = KP(171165);                                      // #171166:71:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #171239:68:114 [L d1 h1 c1]
  v6 = 0;                                               // #171244:139:72 [L d1 h1 c1]
  v52 = "eval";                                         // #171247:211:233 [L d1 h1 c1]
  v53 = undefined;                                      // #171252:251:233 [L d1 h1 c1]
  v7 = "this";                                          // #171255:131:233 [L d1 h1 c1] +#171260:7:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #171265:220:7 | #171269:197:114 | #171274:157:65 #171278:146:130 #171281:243:130 | #171284:54:160 [L d1 h1 c1]
    // #171290:174:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #171300:19:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #171303:97:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #171307:247:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #171311:129:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #171314:100:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #171328:193:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #171331:163:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #171334:220:142 [L d1 h1 c1]
  try {
    TP(tryStack, 171497, 223, callDepths);                         // #171339:213:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #171345:155:7 [L d1 h1 c1]
    v17 = KP(171348);                                   // #171349:163:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #171402:232:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #171421:2:103 [L d1 h1 c1]
    v18 = "";                                           // #171426:46:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #171430:144:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #171434:247:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #171444:247:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #171448:59:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #171451:233:7 #171455:37:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #171473:169:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #171478:249:233 #171482:142:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #171490:153:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #171493:69:53 #171708:175:236 [L d1 h1 c1]
    v40 = 1;                                            // #171711:10:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #171714:60:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #171718:38:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #171722:161:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #171758:60:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #171761:38:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #171765:194:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #171770:115:210 [L d1 h1 c1]
    } else {
      // #171748:45:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #171778:199:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #171782:124:138 [L d1 h1 c1]
    v58 = undefined;                                    // #171800:64:233 [L d1 h1 c1]
    return v58;                                         // #171803:208:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #171498:16:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #171501:170:7 [-] /* never executed in any replay */
    v26 = KP(m171504k170);                              // #171505:54:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #171578:55:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #171583:245:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #171587:78:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m171589k78)](v24);                   // #171590:167:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #171609:165:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #171613:62:150 [-] /* never executed in any replay */
    v33 = v32[KP(m171615k62)];                          // #171616:157:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #171621:212:236 [-] /* never executed in any replay */
    v35 = KP(m171623k212);                              // #171624:56:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #171629:195:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #171632:136:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #171654:34:103 [-] /* never executed in any replay */
    if (v24[KP(m171658k34)]) {                          // #171659:241:200 #171664:188:160 [-] /* never executed in any replay */
      outside("L171689_230");                           // #171687:230:150 [-]  L171689_230 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L171669_188");  // L171669_188 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}