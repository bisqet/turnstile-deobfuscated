function probe_3_bmma1(win_v48 /* r70 */, v49 /* r209 */, v50 /* r211 */, v51 /* r217 */, v52 /* r220 */, v53 /* r221 */) { // entry L196278_22; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 62 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r199 */, v4 /* r205 */, win_v5 /* r204 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, fn_v9 /* r205 */, win_v10 /* r204 */;
  let v11 /* r205 */, v12 /* r205 */, v13 /* r204 */, v14 /* r202 */, fn_v15 /* r204 */, fn_v16 /* r205 */, win_v17 /* r204 */, v18 /* r205 */, v19 /* r199 */, v20 /* r205 */;
  let v21 /* r199 */, v22 /* r204 */, fn_v23 /* r205 */, v24 /* r205 */, v25 /* r204 */, arr_v26 /* r205 */, v27 /* r205 */, v28 /* r198 */, v29 /* r204 */, v30 /* r196 */;
  let v31 /* r198 */, v32 /* r204 */, v33 /* r198 */, v34 /* r204 */, v35 /* r195 */, v36 /* r193 */, v37 /* r202 */, v38 /* r196 */, v39 /* r204 */, v40 /* r192 */;
  let v41 /* r204 */, arr_v42 /* r204 */, v43 /* r205 */, v44 /* r205 */, v45 /* r202 */, v46 /* r205 */, win_v47 /* r205 */, v54 /* r198 */, v55 /* r193 */, v56 /* r195 */;
  let v57 /* r196 */, v58 /* r199 */, v59 /* r202 */, v60 /* r202 */, v61 /* r204 */, v62 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v5 3, win_v10 3, win_v17 3, win_v47 3, win_v48 3
  //   Function: fn_v9 3, fn_v15 3, fn_v16 3, fn_v23 3
  //   Array: arr_v26 3, arr_v42 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 6 dead register writes dropped, 5 constants propagated (5 uses), 4 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15);                                               // #196279:14:53 #196289:156:211 [L d1 h1 c1]
  v1 = undefined;                                       // #196292:224:233 [L d1 h1 c1]
  v2 = undefined;                                       // #196295:20:233 #196298:120:233 [L d1 h1 c1]
  v3 = undefined;                                       // #196301:76:233 [L d1 h1 c1]
  v4 = undefined;                                       // #196304:208:233 [L d1 h1 c1]
  v54 = undefined;                                      // #196307:68:233 [L d1 h1 c1]
  win_v5 = win_v48[v53];                                // #196310:14:7 [L d1 h1 c1]
  v6 = KP(196313);                                      // #196314:10:233 [L d1 h1 c1]
  v7 = MC(win_v5, v49, v6);                             // #196387:187:114 [L d1 h1 c1]
  v8 = 0;                                               // #196392:230:72 [L d1 h1 c1]
  v55 = "eval";                                         // #196395:130:233 [L d1 h1 c1]
  v56 = undefined;                                      // #196400:174:233 [L d1 h1 c1]
  v57 = "this";                                         // #196403:42:233 [L d1 h1 c1] +#196408:210:53
  while ((fn_v9 = win_v48.eval, win_v10 = MC(undefined, fn_v9, "this"), v11 = !(!(win_v48 === win_v10)), !(v11))) {  // #196413:187:7 | #196417:232:114 | #196422:244:65 #196426:77:130 #196429:130:130 | #196432:73:160 [L d1 h1 c1]
    // #196438:53:53 [-] /* never executed in any replay */
  }
  v12 = cell[1];                                        // #196448:214:236 [L d1 h1 c1]
  v13 = v12[v52];                                       // #196451:216:7 [L d1 h1 c1]
  v14 = v12[v13];                                       // #196455:82:7 [L d1 h1 c1]
  cell[15] = v14;                                       // #196459:48:195 [L d1 h1 c1]
  fn_v15 = clos;                                        // #196462:23:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v15 = its home register (H139 CLOS bind)
  fn_v16 = fn_v15;                                      // #196476:104:150 [L d1 h1 c1]
  v14.ExHMy4 = fn_v16;                                  // #196479:205:142 [L d1 h1 c1]
  try {
    TP(tryStack, 196693, 38, callDepths);                          // #196484:66:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v17 = win_v48[v53];                             // #196490:148:7 [L d1 h1 c1]
    v18 = KP(196493);                                   // #196494:248:233 [L d1 h1 c1]
    v19 = win_v17.uOdMb2(v18);                          // #196567:41:138 [L d1 h1 c1]
    v14[v51] = 0;                                       // #196586:127:103 [L d1 h1 c1]
    v14[v50] = ("");                                    // #196591:247:233 #196595:117:199 [L d1 h1 c1]
    v20 = cell[1];                                      // #196599:76:236 [L d1 h1 c1]
    v21 = v20[v52];                                     // #196602:246:7 [L d1 h1 c1]
    v22 = v20[v21];                                     // #196606:120:7 [L d1 h1 c1]
    fn_v23 = clos;                                      // #196610:63:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v23 = its home register (H139 CLOS bind)
    v58 = fn_v23();                                     // #196622:31:113 [L d1 h1 c1]
    v24 = cell[1];                                      // #196626:206:236 [L d1 h1 c1]
    v24.bmma1 = v58;                                    // #196629:27:142 [L d1 h1 c1]
    v22.bmma1 = v58;                                    // #196638:116:142 [L d1 h1 c1]
    v25 = 0; if (v14[v51] === 0) {                      // #196647:126:7 #196651:166:69 [L d1 h1 c1]
      v14[v51] = 3;                                     // #196669:146:103 [L d1 h1 c1]
      v14[v50] = ("");                                  // #196674:126:233 #196678:63:210 [L d1 h1 c1]
    }
    arr_v26 = tryStack.pop();                                // #196686:11:124 [L d1 h1 c1]
    arr_v42 = cell[0];                                  // #196689:111:53 #196899:75:236 [L d1 h1 c1]
    v43 = 1;                                            // #196902:54:72 [L d1 h1 c1]
    v59 = arr_v42[1];                                   // #196905:184:7 [L d1 h1 c1]
    v44 = arr_v42[v59];                                 // #196909:178:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #196913:253:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v45 = 1;                                          // #196949:190:72 [L d1 h1 c1]
      v46 = arr_v42[1];                                 // #196952:32:7 [L d1 h1 c1]
      v60 = "IXHX9";                                    // #196956:84:233 [L d1 h1 c1]
      arr_v42[v46] = "IXHX9";                           // #196965:61:210 [L d1 h1 c1]
    } else {
      // #196939:25:53 [-] /* never executed in any replay */
    }
    win_v47 = win_v48[v53];                             // #196973:189:7 [L d1 h1 c1]
    v61 = win_v47.qwQRi7();                             // #196977:26:138 [L d1 h1 c1]
    v62 = undefined;                                    // #196995:230:233 [L d1 h1 c1]
    return v62;                                         // #196998:94:245 [L d1 h1 c1]
  } catch (caught) {
    v27 = caught;                                         // #196694:251:150 [-] /* never executed in any replay */
    v28 = win_v48[v53];                                 // #196697:169:7 [-] /* never executed in any replay */
    v29 = KP(m196700k169);                              // #196701:249:233 [-] /* never executed in any replay */
    v30 = MC(v28, v49, v29);                            // #196774:174:114 [-] /* never executed in any replay */
    v31 = win_v48[v53];                                 // #196779:80:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #196783:253:150 [-] /* never executed in any replay */
    v33 = (v32)[KP(m196785k253)](v27);                  // #196786:90:138 [-] /* never executed in any replay */
    v34 = win_v48[v53];                                 // #196805:76:7 [-] /* never executed in any replay */
    v35 = v34;                                          // #196809:9:150 [-] /* never executed in any replay */
    v36 = v35[KP(m196811k9)];                           // #196812:252:200 [-] /* never executed in any replay */
    v37 = cell[15];                                     // #196817:119:236 [-] /* never executed in any replay */
    v38 = KP(m196819k119);                              // #196820:15:233 [-] /* never executed in any replay */
    v39 = cell[5];                                      // #196825:254:236 [-] /* never executed in any replay */
    v40 = v36.call(v35, v33, v37, v38, v39);            // #196828:151:138 [-] /* never executed in any replay */
    v41 = 1; v37[v51] = 1;                              // #196850:181:103 [-] /* never executed in any replay */
    if (v27[KP(m196854k181)]) {                         // #196855:248:200 #196860:103:160 [-] /* never executed in any replay */
      outside("L196885_107");                           // #196883:107:150 [-]  L196885_107 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L196865_103");  // L196865_103 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}