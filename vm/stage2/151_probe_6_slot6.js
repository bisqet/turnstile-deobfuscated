function probe_6_slot6(win_v41 /* r70 */, v42 /* r209 */, v43 /* r211 */, v44 /* r217 */, v45 /* r220 */, v46 /* r221 */) { // entry L146487_122; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #146488:226:53 #146498:47:211 [L d1 h1 c1]
  v1 = undefined;                                       // #146501:231:233 [L d1 h1 c1]
  v2 = undefined;                                       // #146504:191:233 #146507:55:233 [L d1 h1 c1]
  v47 = undefined;                                      // #146510:207:233 [L d1 h1 c1]
  win_v3 = win_v41[v46];                                // #146513:45:7 [L d1 h1 c1]
  v4 = KP(146516);                                      // #146517:109:233 [L d1 h1 c1]
  v5 = MC(win_v3, v42, v4);                             // #146610:82:114 [L d1 h1 c1]
  v6 = 0;                                               // #146615:225:72 [L d1 h1 c1]
  v48 = "eval";                                         // #146618:81:233 [L d1 h1 c1]
  v49 = undefined;                                      // #146623:1:233 [L d1 h1 c1]
  v7 = "this";                                          // #146626:241:233 [L d1 h1 c1] +#146631:61:53
  while ((fn_v8 = win_v41.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v41 === win_v9)), !(v10))) {  // #146636:108:7 | #146640:21:114 | #146645:173:65 #146649:98:130 #146652:131:130 | #146655:134:160 [L d1 h1 c1]
    // #146661:190:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #146671:162:236 [L d1 h1 c1]
  v12 = v11[v45];                                       // #146674:116:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #146678:126:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #146682:172:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #146685:163:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #146699:196:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #146702:185:142 [L d1 h1 c1]
  try {
    TP(tryStack, 146868, 253, callDepths);                         // #146707:126:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v41[v46];                             // #146713:224:7 [L d1 h1 c1]
    v17 = KP(146716);                                   // #146717:20:233 [L d1 h1 c1]
    v50 = win_v16.uOdMb2(v17);                          // #146790:213:138 [L d1 h1 c1]
    v13[v44] = 0;                                       // #146809:123:103 [L d1 h1 c1]
    v13[v43] = ("");                                    // #146814:3:233 #146818:81:199 [L d1 h1 c1]
    v18 = 0; if (v13[v44] === 0) {                      // #146822:39:7 #146826:235:69 [L d1 h1 c1]
      v13[v44] = 3;                                     // #146844:130:103 [L d1 h1 c1]
      v13[v43] = ("");                                  // #146849:174:233 #146853:175:210 [L d1 h1 c1]
    }
    arr_v19 = tryStack.pop();                                // #146861:91:124 [L d1 h1 c1]
    arr_v35 = cell[0];                                  // #146864:127:53 #147094:214:236 [L d1 h1 c1]
    v36 = 1;                                            // #147097:85:72 [L d1 h1 c1]
    v51 = arr_v35[1];                                   // #147100:27:7 [L d1 h1 c1]
    v37 = arr_v35[v51];                                 // #147104:73:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #147108:248:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v38 = 1;                                          // #147144:88:72 [L d1 h1 c1]
      v39 = arr_v35[1];                                 // #147147:210:7 [L d1 h1 c1]
      v52 = "ApqCc6";                                   // #147151:190:233 [L d1 h1 c1]
      arr_v35[v39] = "ApqCc6";                          // #147161:127:210 [L d1 h1 c1]
    } else {
      // #147134:232:53 [-] /* never executed in any replay */
    }
    win_v40 = win_v41[v46];                             // #147169:14:7 [L d1 h1 c1]
    v53 = win_v40.qwQRi7();                             // #147173:103:138 [L d1 h1 c1]
    v54 = undefined;                                    // #147191:63:233 [L d1 h1 c1]
    return v54;                                         // #147194:147:245 [L d1 h1 c1]
  } catch (caught) {
    v20 = caught;                                         // #146869:54:150 [-] /* never executed in any replay */
    v21 = win_v41[v46];                                 // #146872:184:7 [-] /* never executed in any replay */
    v22 = KP(m146875k184);                              // #146876:140:233 [-] /* never executed in any replay */
    v23 = MC(v21, v42, v22);                            // #146969:181:114 [-] /* never executed in any replay */
    v24 = win_v41[v46];                                 // #146974:251:7 [-] /* never executed in any replay */
    v25 = v24;                                          // #146978:188:150 [-] /* never executed in any replay */
    v26 = (v25)[KP(m146980k188)](v20);                  // #146981:221:138 [-] /* never executed in any replay */
    v27 = win_v41[v46];                                 // #147000:131:7 [-] /* never executed in any replay */
    v28 = v27;                                          // #147004:36:150 [-] /* never executed in any replay */
    v29 = v28[KP(m147006k36)];                          // #147007:107:200 [-] /* never executed in any replay */
    v30 = cell[15];                                     // #147012:234:236 [-] /* never executed in any replay */
    v31 = KP(m147014k234);                              // #147015:118:233 [-] /* never executed in any replay */
    v32 = cell[5];                                      // #147020:137:236 [-] /* never executed in any replay */
    v33 = v29.call(v28, v26, v30, v31, v32);            // #147023:182:138 [-] /* never executed in any replay */
    v34 = 1; v30[v44] = 1;                              // #147045:24:103 [-] /* never executed in any replay */
    if (v20[KP(m147049k24)]) {                          // #147050:143:200 #147055:98:160 [-] /* never executed in any replay */
      outside("L147080_95");                            // #147078:95:150 [-]  L147080_95 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L147060_98");  // L147060_98 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}