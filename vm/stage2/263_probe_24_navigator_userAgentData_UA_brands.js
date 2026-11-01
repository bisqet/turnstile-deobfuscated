function probe_24_navigator_userAgentData_UA_brands(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L221675_108; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #221676:140:53 #221686:33:211 [L d1 h1 c1]
  v1 = undefined;                                       // #221689:145:233 [L d1 h1 c1]
  v2 = undefined;                                       // #221692:65:233 #221695:49:233 [L d1 h1 c1]
  v51 = undefined;                                      // #221698:97:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #221701:247:7 [L d1 h1 c1]
  v4 = KP(221704);                                      // #221705:143:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #221798:108:114 [L d1 h1 c1]
  v6 = 0;                                               // #221803:19:72 [L d1 h1 c1]
  v52 = "eval";                                         // #221806:59:233 [L d1 h1 c1]
  v53 = undefined;                                      // #221811:195:233 [L d1 h1 c1]
  v7 = "this";                                          // #221814:43:233 [L d1 h1 c1] +#221819:15:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #221824:11:7 | #221828:248:114 | #221833:196:65 #221837:221:130 #221840:210:130 | #221843:89:160 [L d1 h1 c1]
    // #221849:5:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #221859:114:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #221862:4:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #221866:206:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #221870:188:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #221873:115:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #221887:84:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #221890:9:142 [L d1 h1 c1]
  try {
    TP(tryStack, 222093, 245, callDepths);                         // #221895:142:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #221901:176:7 [L d1 h1 c1]
    v17 = KP(221904);                                   // #221905:164:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #221998:37:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #222017:139:103 [L d1 h1 c1]
    v18 = "";                                           // #222022:211:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #222026:225:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #222030:68:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #222040:80:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #222044:112:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #222047:138:7 #222051:130:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #222069:250:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #222074:70:233 #222078:231:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #222086:225:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #222089:109:53 #222319:55:236 [L d1 h1 c1]
    v40 = 1;                                            // #222322:114:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #222325:4:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #222329:206:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #222333:169:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #222369:120:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #222372:114:7 [L d1 h1 c1]
      v56 = "UiswsK3";                                  // #222376:222:233 [L d1 h1 c1]
      arr_v39[v43] = "UiswsK3";                         // #222387:31:210 [L d1 h1 c1]
    } else {
      // #222359:21:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #222395:204:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #222399:173:138 [L d1 h1 c1]
    v58 = undefined;                                    // #222417:237:233 [L d1 h1 c1]
    return v58;                                         // #222420:9:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #222094:78:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #222097:112:7 [-] /* never executed in any replay */
    v26 = KP(m222100k112);                              // #222101:100:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #222194:45:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #222199:147:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #222203:244:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m222205k244)](v24);                  // #222206:53:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #222225:123:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #222229:60:150 [-] /* never executed in any replay */
    v33 = v32[KP(m222231k60)];                          // #222232:35:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #222237:194:236 [-] /* never executed in any replay */
    v35 = KP(m222239k194);                              // #222240:238:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #222245:33:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #222248:238:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #222270:112:103 [-] /* never executed in any replay */
    if (v24[KP(m222274k112)]) {                         // #222275:135:200 #222280:122:160 [-] /* never executed in any replay */
      outside("L222305_85");                            // #222303:85:150 [-]  L222305_85 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L222285_122");  // L222285_122 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}