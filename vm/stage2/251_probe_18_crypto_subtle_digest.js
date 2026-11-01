function probe_18_crypto_subtle_digest(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L205645_239; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #205646:195:53 #205656:224:211 [L d1 h1 c1]
  v1 = undefined;                                       // #205660:20:233 [L d1 h1 c1]
  v2 = undefined;                                       // #205663:120:233 #205666:76:233 [L d1 h1 c1]
  v51 = undefined;                                      // #205669:208:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #205672:106:7 [L d1 h1 c1]
  v4 = KP(205675);                                      // #205676:246:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #205749:247:114 [L d1 h1 c1]
  v6 = 0;                                               // #205754:50:72 [L d1 h1 c1]
  v52 = "eval";                                         // #205757:158:233 [L d1 h1 c1]
  v53 = undefined;                                      // #205762:90:233 [L d1 h1 c1]
  v7 = "this";                                          // #205765:38:233 [L d1 h1 c1] +#205770:222:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #205775:111:7 | #205779:204:114 | #205784:72:65 #205788:81:130 #205791:118:130 | #205794:109:160 [L d1 h1 c1]
    // #205800:201:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #205810:4:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #205813:206:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #205817:240:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #205821:214:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #205824:165:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #205838:62:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #205841:108:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #205844:193:142 [L d1 h1 c1]
  try {
    TP(tryStack, 206027, 81, callDepths);                          // #205849:102:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #205855:40:7 [L d1 h1 c1]
    v17 = KP(205858);                                   // #205859:60:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #205932:93:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #205951:227:103 [L d1 h1 c1]
    v18 = "";                                           // #205956:203:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #205960:249:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #205964:252:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #205974:40:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #205978:232:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #205981:34:7 #205985:186:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #206003:138:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #206008:150:233 #206012:247:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #206020:200:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #206023:120:53 #206238:200:236 [L d1 h1 c1]
    v40 = 1;                                            // #206241:255:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #206244:157:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #206248:67:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #206252:138:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #206288:88:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #206291:210:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #206295:190:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #206300:127:210 [L d1 h1 c1]
    } else {
      // #206278:178:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #206308:81:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #206312:94:138 [L d1 h1 c1]
    v58 = undefined;                                    // #206330:26:233 [L d1 h1 c1]
    return v58;                                         // #206333:194:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #206028:58:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #206031:172:7 [-] /* never executed in any replay */
    v26 = KP(m206034k172);                              // #206035:176:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #206108:73:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #206113:63:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #206117:240:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m206119k240)](v24);                  // #206120:65:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #206139:87:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #206143:168:150 [-] /* never executed in any replay */
    v33 = v32[KP(m206145k168)];                         // #206146:223:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #206151:142:236 [-] /* never executed in any replay */
    v35 = KP(m206153k142);                              // #206154:138:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #206159:77:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #206162:106:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #206184:252:103 [-] /* never executed in any replay */
    if (v24[KP(m206188k252)]) {                         // #206189:227:200 #206194:102:160 [-] /* never executed in any replay */
      outside("L206219_188");                           // #206217:188:150 [-]  L206219_188 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L206199_102");  // L206199_102 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}