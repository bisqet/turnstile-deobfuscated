function probe_30_StrX9(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L195095_193; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #195096:205:53 #195106:75:211 [L d1 h1 c1]
  v1 = undefined;                                       // #195109:147:233 [L d1 h1 c1]
  v2 = undefined;                                       // #195112:187:233 #195115:67:233 [L d1 h1 c1]
  v51 = undefined;                                      // #195118:171:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #195121:153:7 [L d1 h1 c1]
  v4 = KP(195124);                                      // #195125:41:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #195198:30:114 [L d1 h1 c1]
  v6 = 0;                                               // #195203:125:72 [L d1 h1 c1]
  v52 = "eval";                                         // #195206:125:233 [L d1 h1 c1]
  v53 = undefined;                                      // #195211:125:233 [L d1 h1 c1]
  v7 = "this";                                          // #195214:125:233 [L d1 h1 c1] +#195219:153:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #195224:220:7 | #195228:197:114 | #195233:157:65 #195237:146:130 #195240:243:130 | #195243:54:160 [L d1 h1 c1]
    // #195249:174:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #195259:198:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #195262:8:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #195266:194:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #195270:224:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #195273:7:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #195287:152:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #195290:61:142 [L d1 h1 c1]
  try {
    TP(tryStack, 195473, 141, callDepths);                         // #195295:242:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #195301:132:7 [L d1 h1 c1]
    v17 = KP(195304);                                   // #195305:40:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #195378:153:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #195397:47:103 [L d1 h1 c1]
    v18 = "";                                           // #195402:231:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #195406:165:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #195410:248:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #195420:52:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #195424:196:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #195427:142:7 #195431:118:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #195449:156:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #195454:224:233 #195458:153:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #195466:146:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #195469:154:53 #195679:29:236 [L d1 h1 c1]
    v40 = 1;                                            // #195682:64:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #195685:26:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #195689:12:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #195693:111:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #195729:132:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #195732:78:7 [L d1 h1 c1]
      v56 = "SYbSgd1";                                  // #195736:74:233 [L d1 h1 c1]
      arr_v39[v43] = "SYbSgd1";                         // #195747:219:210 [L d1 h1 c1]
    } else {
      // #195719:67:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #195755:54:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #195759:239:138 [L d1 h1 c1]
    v58 = undefined;                                    // #195777:167:233 [L d1 h1 c1]
    return v58;                                         // #195780:91:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #195474:134:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #195477:200:7 [-] /* never executed in any replay */
    v26 = KP(m195480k200);                              // #195481:92:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #195554:69:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #195559:75:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #195563:204:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m195565k204)](v24);                  // #195566:173:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #195585:19:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #195589:116:150 [-] /* never executed in any replay */
    v33 = v32[KP(m195591k116)];                         // #195592:123:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #195597:186:236 [-] /* never executed in any replay */
    v35 = KP(m195599k186);                              // #195600:6:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #195605:217:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #195608:198:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #195630:232:103 [-] /* never executed in any replay */
    if (v24[KP(m195634k232)]) {                         // #195635:31:200 #195640:178:160 [-] /* never executed in any replay */
      outside("L195665_67");                            // #195663:67:150 [-]  L195665_67 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L195645_178");  // L195645_178 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}