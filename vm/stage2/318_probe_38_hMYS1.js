function probe_38_hMYS1(win_v41 /* r70 */, v42 /* r209 */, v43 /* r211 */, v44 /* r217 */, v45 /* r220 */, v46 /* r221 */) { // entry L247364_71; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 60 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, win_v3 /* r204 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r199 */, fn_v8 /* r205 */, win_v9 /* r204 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r202 */, fn_v14 /* r204 */, fn_v15 /* r205 */, win_v16 /* r204 */, v17 /* r205 */, v18 /* r205 */, fn_v19 /* r204 */, v20 /* r205 */;
  let v21 /* r204 */, v22 /* r204 */, arr_v23 /* r205 */, err_v24 /* r205 */, win_v25 /* r198 */, v26 /* r204 */, v27 /* r196 */, win_v28 /* r198 */, win_v29 /* r204 */, win_v30 /* r204 */;
  let v31 /* r202 */, v32 /* r204 */, v33 /* r204 */, v34 /* r205 */, arr_v35 /* r204 */, v36 /* r205 */, v37 /* r205 */, v38 /* r202 */, v39 /* r205 */, win_v40 /* r205 */;
  let v47 /* r198 */, v48 /* r195 */, v49 /* r196 */, v50 /* r199 */, v51 /* r198 */, win_v52 /* r195 */, fn_v53 /* r193 */, v54 /* r196 */, v55 /* r192 */, v56 /* r199 */;
  let v57 /* r202 */, v58 /* r202 */, v59 /* r204 */, v60 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v9 3, win_v16 3, win_v25 1, win_v28 1, win_v29 1, win_v30 1, win_v40 3
  //   Window: win_v41 3, win_v52 1
  //   Function: fn_v8 3, fn_v14 3, fn_v15 3, fn_v19 3, fn_v53 1
  //   Array: arr_v23 2, arr_v35 3
  //   DOMException: err_v24 1
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 4 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15);                                               // #247365:187:53 #247375:79:211 [L d1 h1 c1]
  v1 = undefined;                                       // #247378:135:233 [L d1 h1 c1]
  v2 = undefined;                                       // #247381:223:233 #247384:215:233 [L d1 h1 c1]
  v47 = undefined;                                      // #247387:239:233 [L d1 h1 c1]
  win_v3 = win_v41[v46];                                // #247390:205:7 [L d1 h1 c1]
  v4 = KP(247393);                                      // #247394:141:233 [L d1 h1 c1]
  v5 = MC(win_v3, v42, v4);                             // #247467:242:114 [L d1 h1 c1]
  v6 = 0;                                               // #247472:1:72 [L d1 h1 c1]
  v48 = "eval";                                         // #247475:241:233 [L d1 h1 c1]
  v49 = undefined;                                      // #247480:33:233 [L d1 h1 c1]
  v7 = "this";                                          // #247483:145:233 [L d1 h1 c1] +#247488:93:53
  while ((fn_v8 = win_v41.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v41 === win_v9)), !(v10))) {  // #247493:47:7 | #247497:140:114 | #247502:8:65 #247506:17:130 #247509:54:130 | #247512:45:160 [L d1 h1 c1]
    // #247518:137:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #247528:229:236 [L d1 h1 c1]
  v12 = v11[v45];                                       // #247531:107:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #247535:89:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #247539:219:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #247542:214:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #247556:235:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #247559:4:142 [L d1 h1 c1]
  try {
    TP(tryStack, 247742, 130, callDepths);                         // #247564:93:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v41[v46];                             // #247570:3:7 [L d1 h1 c1]
    v17 = KP(247573);                                   // #247574:107:233 [L d1 h1 c1]
    v50 = win_v16.uOdMb2(v17);                          // #247647:144:138 [L d1 h1 c1]
    v13[v44] = 0;                                       // #247666:10:103 [L d1 h1 c1]
    v18 = "";                                           // #247671:22:233 [L d1 h1 c1]
    v13[v43] = "";                                      // #247675:216:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #247679:31:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #247689:127:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #247693:163:5 [L d1 h1]
    v22 = 0; if (v13[v44] === 0) {                      // #247696:177:7 #247700:205:69 [L d1 h1]
      v13[v44] = 3;                                     // #247718:201:103 [L d1 h1]
      v13[v43] = ("");                                  // #247723:153:233 #247727:174:210 [L d1 h1]
    }
    arr_v23 = tryStack.pop();                                // #247735:90:124 [L d1 h1] +#247738:66:53
  } catch (caught) {
    err_v24 = caught;                                     // #247743:231:150 [L c1]
    win_v25 = win_v41[v46];                             // #247746:229:7 [L c1]
    v26 = KP(m247749k229);                              // #247750:69:233 [L c1]
    v27 = MC(win_v25, v42, v26);                        // #247823:202:114 [L c1]
    win_v28 = win_v41[v46];                             // #247828:252:7 [L c1]
    win_v29 = win_v28;                                  // #247832:249:150 [L c1]
    v51 = (win_v29)[KP(m247834k249)](err_v24);          // #247835:102:138 [L c1]
    win_v30 = win_v41[v46];                             // #247854:40:7 [L c1]
    win_v52 = win_v30;                                  // #247858:117:150 [L c1]
    fn_v53 = win_v52[KP(m247860k117)];                  // #247861:184:200 [L c1]
    v31 = cell[15];                                     // #247866:67:236 [L c1]
    v54 = KP(m247868k67);                               // #247869:171:233 [L c1]
    v32 = cell[5];                                      // #247874:42:236 [L c1]
    v55 = fn_v53.call(win_v52, v51, v31, v54, v32);      // #247877:19:138 [L c1]
    v33 = 1; v31[v44] = 1;                              // #247899:65:103 [L c1]
    v56 = err_v24[KP(m247903k65)];                      // #247904:84:200 [L c1]
    if (v56) {                                          // #247909:83:160 [L c1]
      v34 = v56;                                        // #247932:80:150 [L c1]
      v31[v43] = v34;                                   // #247935:224:53 #247940:193:210 [L c1]
    } else {
      outside("L247914_83");  // L247914_83 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
    }
  }
  arr_v35 = cell[0];                                    // #247948:221:236 [L d1 h1 c1]
  v36 = 1;                                              // #247951:0:72 [L d1 h1 c1]
  v57 = arr_v35[1];                                     // #247954:218:7 [L d1 h1 c1]
  v37 = arr_v35[v57];                                   // #247958:204:7 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #247962:47:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    v38 = 1;                                            // #247998:15:72 [L d1 h1 c1]
    v39 = arr_v35[1];                                   // #248001:109:7 [L d1 h1 c1]
    v58 = "ItkLi4";                                     // #248005:173:233 [L d1 h1 c1]
    arr_v35[v39] = "ItkLi4";                            // #248015:114:210 [L d1 h1 c1]
  } else {
    // #247988:3:53 [-] /* never executed in any replay */
  }
  win_v40 = win_v41[v46];                               // #248023:241:7 [L d1 h1 c1]
  v59 = win_v40.qwQRi7();                               // #248027:126:138 [L d1 h1 c1]
  v60 = undefined;                                      // #248045:186:233 [L d1 h1 c1]
  return v60;                                           // #248048:226:245 [L d1 h1 c1]
}