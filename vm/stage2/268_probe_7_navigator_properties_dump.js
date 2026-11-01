function probe_7_navigator_properties_dump(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L223675_72; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #223676:248:53 #223686:35:211 [L d1 h1 c1]
  v1 = undefined;                                       // #223689:11:233 [L d1 h1 c1]
  v2 = undefined;                                       // #223692:83:233 #223695:123:233 [L d1 h1 c1]
  v51 = undefined;                                      // #223698:3:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #223701:145:7 [L d1 h1 c1]
  v4 = KP(223704);                                      // #223705:65:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #223778:214:114 [L d1 h1 c1]
  v6 = 0;                                               // #223783:85:72 [L d1 h1 c1]
  v52 = "eval";                                         // #223786:245:233 [L d1 h1 c1]
  v53 = undefined;                                      // #223791:21:233 [L d1 h1 c1]
  v7 = "this";                                          // #223794:181:233 [L d1 h1 c1] +#223799:241:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #223804:55:7 | #223808:116:114 | #223813:80:65 #223817:57:130 #223820:190:130 | #223823:149:160 [L d1 h1 c1]
    // #223829:81:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #223839:106:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #223842:28:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #223846:134:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #223850:148:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #223853:235:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #223867:236:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #223870:65:142 [L d1 h1 c1]
  try {
    TP(tryStack, 224053, 97, callDepths);                          // #223875:230:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #223881:168:7 [L d1 h1 c1]
    v17 = KP(223884);                                   // #223885:188:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #223958:221:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #223977:99:103 [L d1 h1 c1]
    v18 = "";                                           // #223982:75:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #223986:121:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #223990:124:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #224000:168:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #224004:104:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #224007:162:7 #224011:58:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #224029:130:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #224034:174:233 #224038:175:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #224046:34:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #224049:234:53 #224259:212:236 [L d1 h1 c1]
    v40 = 1;                                            // #224262:219:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #224265:9:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #224269:255:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #224273:86:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #224309:2:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #224312:84:7 [L d1 h1 c1]
      v56 = "OAPb7";                                    // #224316:184:233 [L d1 h1 c1]
      arr_v39[v43] = "OAPb7";                           // #224325:17:210 [L d1 h1 c1]
    } else {
      // #224299:78:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #224333:78:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #224337:167:138 [L d1 h1 c1]
    v58 = undefined;                                    // #224355:127:233 [L d1 h1 c1]
    return v58;                                         // #224358:211:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #224054:10:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #224057:60:7 [-] /* never executed in any replay */
    v26 = KP(m224060k60);                               // #224061:0:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #224134:89:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #224139:15:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #224143:128:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m224145k128)](v24);                  // #224146:145:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #224165:103:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #224169:120:150 [-] /* never executed in any replay */
    v33 = v32[KP(m224171k120)];                         // #224172:111:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #224177:222:236 [-] /* never executed in any replay */
    v35 = KP(m224179k222);                              // #224180:154:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #224185:29:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #224188:250:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #224210:76:103 [-] /* never executed in any replay */
    if (v24[KP(m224214k76)]) {                          // #224215:243:200 #224220:54:160 [-] /* never executed in any replay */
      outside("L224245_26");                            // #224243:26:150 [-]  L224245_26 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L224225_54");  // L224225_54 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}