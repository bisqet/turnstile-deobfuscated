function probe_16_MBXf3(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L70734_193; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #70735:205:53 #70745:112:211 [L d1 h1 c1]
  v1 = undefined;                                       // #70748:100:233 [L d1 h1 c1]
  v2 = undefined;                                       // #70751:136:233 #70754:28:233 [L d1 h1 c1]
  v51 = undefined;                                      // #70757:96:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #70760:186:7 [L d1 h1 c1]
  v4 = KP(70763);                                       // #70764:6:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #70837:199:114 [L d1 h1 c1]
  v6 = 0;                                               // #70842:194:72 [L d1 h1 c1]
  v52 = "eval";                                         // #70845:238:233 [L d1 h1 c1]
  v53 = undefined;                                      // #70850:106:233 [L d1 h1 c1]
  v7 = "this";                                          // #70853:246:233 [L d1 h1 c1] +#70858:110:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #70863:176:7 | #70867:73:114 | #70872:17:65 #70876:54:130 #70879:7:130 | #70882:250:160 [L d1 h1 c1]
    // #70888:98:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #70898:173:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #70901:19:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #70905:97:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #70909:195:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #70912:30:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #70926:19:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #70929:140:142 [L d1 h1 c1]
  try {
    TP(tryStack, 71112, 61, callDepths);                           // #70934:197:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #70940:203:7 [L d1 h1 c1]
    v17 = KP(70943);                                    // #70944:19:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #71017:152:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #71036:242:103 [L d1 h1 c1]
    v18 = "";                                           // #71041:94:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #71045:0:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #71049:167:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #71059:231:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #71063:107:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #71066:89:7 #71070:213:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #71088:27:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #71093:35:233 #71097:144:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #71105:226:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #71108:170:53 #71318:155:236 [L d1 h1 c1]
    v40 = 1;                                            // #71321:70:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #71324:136:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #71328:66:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #71332:77:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #71368:48:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #71371:74:7 [L d1 h1 c1]
      v56 = "rTIF1";                                    // #71375:86:233 [L d1 h1 c1]
      arr_v39[v43] = "rTIF1";                           // #71384:183:210 [L d1 h1 c1]
    } else {
      // #71358:41:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #71392:213:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #71396:210:138 [L d1 h1 c1]
    v58 = undefined;                                    // #71414:190:233 [L d1 h1 c1]
    return v58;                                         // #71417:214:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #71113:118:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #71116:248:7 [-] /* never executed in any replay */
    v26 = KP(m71119k248);                               // #71120:204:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #71193:245:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #71198:59:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #71202:252:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m71204k252)](v24);                   // #71205:29:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #71224:195:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #71228:100:150 [-] /* never executed in any replay */
    v33 = v32[KP(m71230k100)];                          // #71231:171:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #71236:42:236 [-] /* never executed in any replay */
    v35 = KP(m71238k42);                                // #71239:182:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #71244:201:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #71247:246:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #71269:88:103 [-] /* never executed in any replay */
    if (v24[KP(m71273k88)]) {                           // #71274:207:200 #71279:162:160 [-] /* never executed in any replay */
      outside("L71304_138");                            // #71302:138:150 [-]  L71304_138 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L71284_162");  // L71284_162 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}