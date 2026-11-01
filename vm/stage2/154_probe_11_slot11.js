function probe_11_slot11(win_v41 /* r70 */, v42 /* r209 */, v43 /* r211 */, v44 /* r217 */, v45 /* r220 */, v46 /* r221 */) { // entry L158432_158; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 54 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, win_v3 /* r204 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r199 */, fn_v8 /* r205 */, win_v9 /* r204 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r202 */, fn_v14 /* r204 */, fn_v15 /* r205 */, win_v16 /* r204 */, v17 /* r205 */, v18 /* r204 */, arr_v19 /* r205 */, v20 /* r205 */;
  let v21 /* r198 */, v22 /* r204 */, v23 /* r196 */, v24 /* r198 */, v25 /* r204 */, v26 /* r198 */, v27 /* r204 */, v28 /* r195 */, v29 /* r193 */, v30 /* r202 */;
  let v31 /* r196 */, v32 /* r204 */, v33 /* r192 */, v34 /* r204 */, arr_v35 /* r204 */, v36 /* r205 */, v37 /* r205 */, v38 /* r202 */, v39 /* r205 */, win_v40 /* r205 */;
  let v47 /* r198 */, v48 /* r195 */, v49 /* r196 */, v50 /* r199 */, v51 /* r202 */, v52 /* r202 */, v53 /* r204 */, v54 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v9 3, win_v16 3, win_v40 3, win_v41 3
  //   Function: fn_v8 3, fn_v14 3, fn_v15 3
  //   Array: arr_v19 3, arr_v35 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 6 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15);                                               // #158433:118:53 #158443:129:211 [L d1 h1 c1]
  v1 = undefined;                                       // #158446:113:233 [L d1 h1 c1]
  v2 = undefined;                                       // #158449:161:233 #158452:17:233 [L d1 h1 c1]
  v47 = undefined;                                      // #158455:193:233 [L d1 h1 c1]
  win_v3 = win_v41[v46];                                // #158458:215:7 [L d1 h1 c1]
  v4 = KP(158461);                                      // #158462:239:233 [L d1 h1 c1]
  v5 = MC(win_v3, v42, v4);                             // #158535:76:114 [L d1 h1 c1]
  v6 = 0;                                               // #158540:115:72 [L d1 h1 c1]
  v48 = "eval";                                         // #158543:27:233 [L d1 h1 c1]
  v49 = undefined;                                      // #158548:35:233 [L d1 h1 c1]
  v7 = "this";                                          // #158551:11:233 [L d1 h1 c1] +#158556:111:53
  while ((fn_v8 = win_v41.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v41 === win_v9)), !(v10))) {  // #158561:125:7 | #158565:34:114 | #158570:198:65 #158574:87:130 #158577:228:130 | #158580:163:160 [L d1 h1 c1]
    // #158586:167:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #158596:179:236 [L d1 h1 c1]
  v12 = v11[v45];                                       // #158599:129:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #158603:151:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #158607:161:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #158610:4:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #158624:225:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #158627:162:142 [L d1 h1 c1]
  try {
    TP(tryStack, 158793, 44, callDepths);                          // #158632:3:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v41[v46];                             // #158638:145:7 [L d1 h1 c1]
    v17 = KP(158641);                                   // #158642:65:233 [L d1 h1 c1]
    v50 = win_v16.uOdMb2(v17);                          // #158715:142:138 [L d1 h1 c1]
    v13[v44] = 0;                                       // #158734:144:103 [L d1 h1 c1]
    v13[v43] = ("");                                    // #158739:4:233 #158743:142:199 [L d1 h1 c1]
    v18 = 0; if (v13[v44] === 0) {                      // #158747:176:7 #158751:144:69 [L d1 h1 c1]
      v13[v44] = 3;                                     // #158769:47:103 [L d1 h1 c1]
      v13[v43] = ("");                                  // #158774:231:233 #158778:68:210 [L d1 h1 c1]
    }
    arr_v19 = tryStack.pop();                                // #158786:78:124 [L d1 h1 c1]
    arr_v35 = cell[0];                                  // #158789:102:53 #158999:21:236 [L d1 h1 c1]
    v36 = 1;                                            // #159002:88:72 [L d1 h1 c1]
    v51 = arr_v35[1];                                   // #159005:210:7 [L d1 h1 c1]
    v37 = arr_v35[v51];                                 // #159009:228:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #159013:231:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v38 = 1;                                          // #159049:16:72 [L d1 h1 c1]
      v39 = arr_v35[1];                                 // #159052:170:7 [L d1 h1 c1]
      v52 = "eDeYVL9";                                  // #159056:54:233 [L d1 h1 c1]
      arr_v35[v39] = "eDeYVL9";                         // #159067:23:210 [L d1 h1 c1]
    } else {
      // #159039:219:53 [-] /* never executed in any replay */
    }
    win_v40 = win_v41[v46];                             // #159075:58:7 [L d1 h1 c1]
    v53 = win_v40.qwQRi7();                             // #159079:227:138 [L d1 h1 c1]
    v54 = undefined;                                    // #159097:203:233 [L d1 h1 c1]
    return v54;                                         // #159100:239:245 [L d1 h1 c1]
  } catch (caught) {
    v20 = caught;                                         // #158794:105:150 [-] /* never executed in any replay */
    v21 = win_v41[v46];                                 // #158797:223:7 [-] /* never executed in any replay */
    v22 = KP(m158800k223);                              // #158801:215:233 [-] /* never executed in any replay */
    v23 = MC(v21, v42, v22);                            // #158874:148:114 [-] /* never executed in any replay */
    v24 = win_v41[v46];                                 // #158879:30:7 [-] /* never executed in any replay */
    v25 = v24;                                          // #158883:19:150 [-] /* never executed in any replay */
    v26 = (v25)[KP(m158885k19)](v20);                   // #158886:152:138 [-] /* never executed in any replay */
    v27 = win_v41[v46];                                 // #158905:18:7 [-] /* never executed in any replay */
    v28 = v27;                                          // #158909:55:150 [-] /* never executed in any replay */
    v29 = v28[KP(m158911k55)];                          // #158912:242:200 [-] /* never executed in any replay */
    v30 = cell[15];                                     // #158917:21:236 [-] /* never executed in any replay */
    v31 = KP(m158919k21);                               // #158920:181:233 [-] /* never executed in any replay */
    v32 = cell[5];                                      // #158925:140:236 [-] /* never executed in any replay */
    v33 = v29.call(v28, v26, v30, v31, v32);            // #158928:109:138 [-] /* never executed in any replay */
    v34 = 1; v30[v44] = 1;                              // #158950:179:103 [-] /* never executed in any replay */
    if (v20[KP(m158954k179)]) {                         // #158955:126:200 #158960:85:160 [-] /* never executed in any replay */
      outside("L158985_149");                           // #158983:149:150 [-]  L158985_149 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L158965_85");  // L158965_85 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}