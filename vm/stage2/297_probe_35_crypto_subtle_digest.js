function probe_35_crypto_subtle_digest(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L234439_186; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #234440:34:53 #234450:178:211 [L d1 h1 c1]
  v1 = undefined;                                       // #234454:30:233 [L d1 h1 c1]
  v2 = undefined;                                       // #234457:218:233 #234460:166:233 [L d1 h1 c1]
  v51 = undefined;                                      // #234463:66:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #234466:148:7 [L d1 h1 c1]
  v4 = KP(234469);                                      // #234470:248:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #234543:113:114 [L d1 h1 c1]
  v6 = 0;                                               // #234548:68:72 [L d1 h1 c1]
  v52 = "eval";                                         // #234551:232:233 [L d1 h1 c1]
  v53 = undefined;                                      // #234556:252:233 [L d1 h1 c1]
  v7 = "this";                                          // #234559:192:233 [L d1 h1 c1] +#234564:144:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #234569:159:7 | #234573:60:114 | #234578:248:65 #234582:65:130 #234585:166:130 | #234588:221:160 [L d1 h1 c1]
    // #234594:121:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #234604:131:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #234607:17:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #234611:231:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #234615:177:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #234618:212:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #234632:113:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #234635:147:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #234638:12:142 [L d1 h1 c1]
  try {
    TP(tryStack, 234821, 131, callDepths);                         // #234643:69:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #234649:75:7 [L d1 h1 c1]
    v17 = KP(234652);                                   // #234653:147:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #234726:24:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #234745:114:103 [L d1 h1 c1]
    v18 = "";                                           // #234750:222:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #234754:128:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #234758:39:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #234768:103:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #234772:235:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #234775:217:7 #234779:85:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #234797:183:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #234802:79:233 #234806:12:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #234814:62:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #234817:150:53 #235032:73:236 [L d1 h1 c1]
    v40 = 1;                                            // #235035:188:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #235038:166:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #235042:104:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #235046:91:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #235082:214:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #235085:216:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #235089:44:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #235094:181:210 [L d1 h1 c1]
    } else {
      // #235072:127:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #235102:100:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #235106:229:138 [L d1 h1 c1]
    v58 = undefined;                                    // #235124:69:233 [L d1 h1 c1]
    return v58;                                         // #235127:1:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #234822:36:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #234825:110:7 [-] /* never executed in any replay */
    v26 = KP(m234828k110);                              // #234829:234:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #234902:27:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #234907:73:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #234911:82:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m234913k82)](v24);                   // #234914:155:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #234933:201:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #234937:210:150 [-] /* never executed in any replay */
    v33 = v32[KP(m234939k210)];                         // #234940:225:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #234945:8:236 [-] /* never executed in any replay */
    v35 = KP(m234947k8);                                // #234948:156:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #234953:151:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #234956:12:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #234978:150:103 [-] /* never executed in any replay */
    if (v24[KP(m234982k150)]) {                         // #234983:149:200 #234988:208:160 [-] /* never executed in any replay */
      outside("L235013_62");                            // #235011:62:150 [-]  L235013_62 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L234993_208");  // L234993_208 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}