function probe_34_ATpJ5(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L230201_236; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #230202:12:53 #230212:141:211 [L d1 h1 c1]
  v1 = undefined;                                       // #230216:77:233 [L d1 h1 c1]
  v2 = undefined;                                       // #230219:13:233 #230222:205:233 [L d1 h1 c1]
  v51 = undefined;                                      // #230225:141:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #230228:115:7 [L d1 h1 c1]
  v4 = KP(230231);                                      // #230232:27:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #230325:200:114 [L d1 h1 c1]
  v6 = 0;                                               // #230330:255:72 [L d1 h1 c1]
  v52 = "eval";                                         // #230333:119:233 [L d1 h1 c1]
  v53 = undefined;                                      // #230338:15:233 [L d1 h1 c1]
  v7 = "this";                                          // #230341:71:233 [L d1 h1 c1] +#230346:187:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #230351:218:7 | #230355:75:114 | #230360:139:65 #230364:72:130 #230367:81:130 | #230370:156:160 [L d1 h1 c1]
    // #230376:252:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #230386:75:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #230389:185:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #230393:239:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #230397:153:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #230400:28:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #230414:153:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #230417:27:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #230420:116:142 [L d1 h1 c1]
  try {
    TP(tryStack, 230623, 66, callDepths);                          // #230425:13:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #230431:243:7 [L d1 h1 c1]
    v17 = KP(230434);                                   // #230435:155:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #230528:0:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #230547:186:103 [L d1 h1 c1]
    v18 = "";                                           // #230552:6:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #230556:8:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #230560:143:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #230570:47:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #230574:147:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #230577:225:7 #230581:61:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #230599:201:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #230604:153:233 #230608:174:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #230616:250:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #230619:98:53 #230854:209:236 [L d1 h1 c1]
    v40 = 1;                                            // #230857:36:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #230860:110:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #230864:16:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #230868:99:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #230904:161:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #230907:55:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #230911:207:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #230916:140:210 [L d1 h1 c1]
    } else {
      // #230894:103:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #230924:97:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #230928:46:138 [L d1 h1 c1]
    v58 = undefined;                                    // #230946:170:233 [L d1 h1 c1]
    return v58;                                         // #230949:18:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #230624:167:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #230627:165:7 [-] /* never executed in any replay */
    v26 = KP(m230630k165);                              // #230631:5:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #230724:138:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #230729:188:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #230733:185:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m230735k185)](v24);                  // #230736:38:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #230755:232:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #230759:53:150 [-] /* never executed in any replay */
    v33 = v32[KP(m230761k53)];                          // #230762:120:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #230767:3:236 [-] /* never executed in any replay */
    v35 = KP(m230769k3);                                // #230770:107:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #230775:234:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #230778:211:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #230800:1:103 [-] /* never executed in any replay */
    if (v24[KP(m230804k1)]) {                           // #230805:20:200 #230810:19:160 [-] /* never executed in any replay */
      outside("L230835_214");                           // #230833:214:150 [-]  L230835_214 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L230815_19");  // L230815_19 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}