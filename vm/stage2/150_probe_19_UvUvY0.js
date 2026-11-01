function probe_19_UvUvY0(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L145373_64; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #145374:16:53 #145384:183:211 [L d1 h1 c1]
  v1 = undefined;                                       // #145388:79:233 [L d1 h1 c1]
  v2 = undefined;                                       // #145391:135:233 #145394:223:233 [L d1 h1 c1]
  v51 = undefined;                                      // #145397:215:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #145400:21:7 [L d1 h1 c1]
  v4 = KP(145403);                                      // #145404:181:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #145477:122:114 [L d1 h1 c1]
  v6 = 0;                                               // #145482:105:72 [L d1 h1 c1]
  v52 = "eval";                                         // #145485:185:233 [L d1 h1 c1]
  v53 = undefined;                                      // #145490:201:233 [L d1 h1 c1]
  v7 = "this";                                          // #145493:153:233 [L d1 h1 c1] +#145498:69:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #145503:247:7 | #145507:52:114 | #145512:16:65 #145516:249:130 #145519:126:130 | #145522:85:160 [L d1 h1 c1]
    // #145528:17:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #145538:215:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #145541:21:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #145545:219:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #145549:213:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #145552:104:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #145566:181:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #145569:199:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #145572:112:142 [L d1 h1 c1]
  try {
    TP(tryStack, 145755, 153, callDepths);                         // #145577:25:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #145583:207:7 [L d1 h1 c1]
    v17 = KP(145586);                                   // #145587:7:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #145660:188:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #145679:134:103 [L d1 h1 c1]
    v18 = "";                                           // #145684:162:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #145688:52:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #145692:11:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #145702:187:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #145706:239:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #145709:205:7 #145713:121:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #145731:211:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #145736:251:233 #145740:8:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #145748:105:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #145751:213:53 #145966:117:236 [L d1 h1 c1]
    v40 = 1;                                            // #145969:56:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #145972:50:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #145976:196:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #145980:71:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #146016:162:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #146019:116:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #146023:88:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #146028:49:210 [L d1 h1 c1]
    } else {
      // #146006:187:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #146036:87:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #146040:204:138 [L d1 h1 c1]
    v58 = undefined;                                    // #146058:80:233 [L d1 h1 c1]
    return v58;                                         // #146061:160:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #145756:98:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #145759:52:7 [-] /* never executed in any replay */
    v26 = KP(m145762k52);                               // #145763:24:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #145836:17:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #145841:231:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #145845:248:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m145847k248)](v24);                  // #145848:41:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #145867:159:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #145871:208:150 [-] /* never executed in any replay */
    v33 = v32[KP(m145873k208)];                         // #145874:103:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #145879:246:236 [-] /* never executed in any replay */
    v35 = KP(m145881k246);                              // #145882:82:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #145887:245:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #145890:114:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #145912:228:103 [-] /* never executed in any replay */
    if (v24[KP(m145916k228)]) {                         // #145917:43:200 #145922:142:160 [-] /* never executed in any replay */
      outside("L145947_2");                             // #145945:2:150 [-]  L145947_2 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L145927_142");  // L145927_142 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}