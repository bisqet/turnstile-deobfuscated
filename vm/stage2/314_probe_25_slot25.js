function probe_25_slot25(win_v41 /* r70 */, v42 /* r209 */, v43 /* r211 */, v44 /* r217 */, v45 /* r220 */, v46 /* r221 */) { // entry L245455_103; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #245456:91:53 #245466:171:211 [L d1 h1 c1]
  v1 = undefined;                                       // #245469:115:233 [L d1 h1 c1]
  v2 = undefined;                                       // #245472:27:233 #245475:35:233 [L d1 h1 c1]
  v47 = undefined;                                      // #245478:11:233 [L d1 h1 c1]
  win_v3 = win_v41[v46];                                // #245481:121:7 [L d1 h1 c1]
  v4 = KP(245484);                                      // #245485:137:233 [L d1 h1 c1]
  v5 = MC(win_v3, v42, v4);                             // #245558:254:114 [L d1 h1 c1]
  v6 = 0;                                               // #245563:221:72 [L d1 h1 c1]
  v48 = "eval";                                         // #245566:93:233 [L d1 h1 c1]
  v49 = undefined;                                      // #245571:221:233 [L d1 h1 c1]
  v7 = "this";                                          // #245574:93:233 [L d1 h1 c1] +#245579:249:53
  while ((fn_v8 = win_v41.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v41 === win_v9)), !(v10))) {  // #245584:66:7 | #245588:19:114 | #245593:51:65 #245597:80:130 #245600:57:130 | #245603:228:160 [L d1 h1 c1]
    // #245609:36:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #245619:10:236 [L d1 h1 c1]
  v12 = v11[v45];                                       // #245622:60:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #245626:38:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #245630:180:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #245633:139:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #245647:12:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #245650:225:142 [L d1 h1 c1]
  try {
    TP(tryStack, 245816, 163, callDepths);                         // #245655:6:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v41[v46];                             // #245661:72:7 [L d1 h1 c1]
    v17 = KP(245664);                                   // #245665:220:233 [L d1 h1 c1]
    v50 = win_v16.uOdMb2(v17);                          // #245738:125:138 [L d1 h1 c1]
    v13[v44] = 0;                                       // #245757:131:103 [L d1 h1 c1]
    v13[v43] = ("");                                    // #245762:235:233 #245766:153:199 [L d1 h1 c1]
    v18 = 0; if (v13[v44] === 0) {                      // #245770:79:7 #245774:115:69 [L d1 h1 c1]
      v13[v44] = 3;                                     // #245792:14:103 [L d1 h1 c1]
      v13[v43] = ("");                                  // #245797:10:233 #245801:155:210 [L d1 h1 c1]
    }
    arr_v19 = tryStack.pop();                                // #245809:155:124 [L d1 h1 c1]
    arr_v35 = cell[0];                                  // #245812:191:53 #246022:206:236 [L d1 h1 c1]
    v36 = 1;                                            // #246025:109:72 [L d1 h1 c1]
    v51 = arr_v35[1];                                   // #246028:211:7 [L d1 h1 c1]
    v37 = arr_v35[v51];                                 // #246032:33:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #246036:112:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v38 = 1;                                          // #246072:29:72 [L d1 h1 c1]
      v39 = arr_v35[1];                                 // #246075:195:7 [L d1 h1 c1]
      v52 = "ljPnK3";                                   // #246079:43:233 [L d1 h1 c1]
      arr_v35[v39] = "ljPnK3";                          // #246089:120:210 [L d1 h1 c1]
    } else {
      // #246062:128:53 [-] /* never executed in any replay */
    }
    win_v40 = win_v41[v46];                             // #246097:209:7 [L d1 h1 c1]
    v53 = win_v40.qwQRi7();                             // #246101:222:138 [L d1 h1 c1]
    v54 = undefined;                                    // #246119:154:233 [L d1 h1 c1]
    return v54;                                         // #246122:66:245 [L d1 h1 c1]
  } catch (caught) {
    v20 = caught;                                         // #245817:196:150 [-] /* never executed in any replay */
    v21 = win_v41[v46];                                 // #245820:142:7 [-] /* never executed in any replay */
    v22 = KP(m245823k142);                              // #245824:138:233 [-] /* never executed in any replay */
    v23 = MC(v21, v42, v22);                            // #245897:59:114 [-] /* never executed in any replay */
    v24 = win_v41[v46];                                 // #245902:233:7 [-] /* never executed in any replay */
    v25 = v24;                                          // #245906:114:150 [-] /* never executed in any replay */
    v26 = (v25)[KP(m245908k114)](v20);                  // #245909:59:138 [-] /* never executed in any replay */
    v27 = win_v41[v46];                                 // #245928:233:7 [-] /* never executed in any replay */
    v28 = v27;                                          // #245932:114:150 [-] /* never executed in any replay */
    v29 = v28[KP(m245934k114)];                         // #245935:1:200 [-] /* never executed in any replay */
    v30 = cell[15];                                     // #245940:168:236 [-] /* never executed in any replay */
    v31 = KP(m245942k168);                              // #245943:188:233 [-] /* never executed in any replay */
    v32 = cell[5];                                      // #245948:55:236 [-] /* never executed in any replay */
    v33 = v29.call(v28, v26, v30, v31, v32);            // #245951:44:138 [-] /* never executed in any replay */
    v34 = 1; v30[v44] = 1;                              // #245973:54:103 [-] /* never executed in any replay */
    if (v20[KP(m245977k54)]) {                          // #245978:181:200 #245983:112:160 [-] /* never executed in any replay */
      outside("L246008_217");                           // #246006:217:150 [-]  L246008_217 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L245988_112");  // L245988_112 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}