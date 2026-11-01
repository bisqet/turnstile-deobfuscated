function probe_10_WebGL_getParameter_extensions(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L26148_1; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #26149:13:53 #26159:221:211 [L d1 h1 c1]
  v1 = undefined;                                       // #26162:93:233 [L d1 h1 c1]
  v2 = undefined;                                       // #26165:221:233 #26168:93:233 [L d1 h1 c1]
  v51 = undefined;                                      // #26171:221:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #26174:131:7 [L d1 h1 c1]
  v4 = KP(26177);                                       // #26178:235:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #26251:88:114 [L d1 h1 c1]
  v6 = 0;                                               // #26256:79:72 [L d1 h1 c1]
  v52 = "eval";                                         // #26259:135:233 [L d1 h1 c1]
  v53 = undefined;                                      // #26264:223:233 [L d1 h1 c1]
  v7 = "this";                                          // #26267:215:233 [L d1 h1 c1] +#26272:11:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #26277:63:7 | #26281:92:114 | #26286:152:65 #26290:97:130 #26293:70:130 | #26296:253:160 [L d1 h1 c1]
    // #26302:25:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #26312:220:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #26315:70:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #26319:136:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #26323:14:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #26326:253:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #26340:54:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #26343:227:142 [L d1 h1 c1]
  try {
    TP(tryStack, 26526, 195, callDepths);                          // #26348:128:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #26354:90:7 [L d1 h1 c1]
    v17 = KP(26357);                                    // #26358:38:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #26431:31:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #26450:29:103 [L d1 h1 c1]
    v18 = "";                                           // #26455:157:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #26459:3:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #26463:94:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #26473:130:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #26477:90:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #26480:76:7 #26484:188:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #26502:237:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #26507:45:233 #26511:242:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #26519:50:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #26522:186:53 #26732:23:236 [L d1 h1 c1]
    v40 = 1;                                            // #26735:210:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #26738:228:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #26742:46:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #26746:137:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #26782:44:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #26785:86:7 [L d1 h1 c1]
      v56 = "DFKSsl3";                                  // #26789:50:233 [L d1 h1 c1]
      arr_v39[v43] = "DFKSsl3";                         // #26800:35:210 [L d1 h1 c1]
    } else {
      // #26772:117:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #26808:172:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #26812:13:138 [L d1 h1 c1]
    v58 = undefined;                                    // #26830:205:233 [L d1 h1 c1]
    return v58;                                         // #26833:105:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #26527:100:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #26530:174:7 [-] /* never executed in any replay */
    v26 = KP(m26533k174);                               // #26534:42:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #26607:91:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #26612:137:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #26616:146:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m26618k146)](v24);                   // #26619:219:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #26638:9:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #26642:18:150 [-] /* never executed in any replay */
    v33 = v32[KP(m26644k18)];                           // #26645:33:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #26650:72:236 [-] /* never executed in any replay */
    v35 = KP(m26652k72);                                // #26653:220:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #26658:215:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #26661:76:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #26683:214:103 [-] /* never executed in any replay */
    if (v24[KP(m26687k214)]) {                          // #26688:213:200 #26693:16:160 [-] /* never executed in any replay */
      outside("L26718_149");                            // #26716:149:150 [-]  L26718_149 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L26698_16");  // L26698_16 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}