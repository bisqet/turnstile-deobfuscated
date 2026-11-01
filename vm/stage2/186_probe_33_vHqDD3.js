function probe_33_vHqDD3(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L172720_126; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #172721:214:53 #172731:249:211 [L d1 h1 c1]
  v1 = undefined;                                       // #172734:9:233 [L d1 h1 c1]
  v2 = undefined;                                       // #172737:217:233 #172740:105:233 [L d1 h1 c1]
  v51 = undefined;                                      // #172743:185:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #172746:239:7 [L d1 h1 c1]
  v4 = KP(172749);                                      // #172750:167:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #172823:36:114 [L d1 h1 c1]
  v6 = 0;                                               // #172828:235:72 [L d1 h1 c1]
  v52 = "eval";                                         // #172831:179:233 [L d1 h1 c1]
  v53 = undefined;                                      // #172836:91:233 [L d1 h1 c1]
  v7 = "this";                                          // #172839:99:233 [L d1 h1 c1] +#172844:103:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #172849:196:7 | #172853:13:114 | #172858:197:65 #172862:26:130 #172865:91:130 | #172868:254:160 [L d1 h1 c1]
    // #172874:86:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #172884:112:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #172887:138:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #172891:188:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #172895:114:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #172898:209:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #172912:186:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #172915:87:142 [L d1 h1 c1]
  try {
    TP(tryStack, 173098, 36, callDepths);                          // #172920:36:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #172926:110:7 [L d1 h1 c1]
    v17 = KP(172929);                                   // #172930:234:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #173003:211:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #173022:1:103 [L d1 h1 c1]
    v18 = "";                                           // #173027:241:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #173031:7:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #173035:82:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #173045:166:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #173049:238:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #173052:144:7 #173056:240:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #173074:115:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #173079:27:233 #173083:168:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #173091:137:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #173094:117:53 #173304:216:236 [L d1 h1 c1]
    v40 = 1;                                            // #173307:207:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #173310:45:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #173314:147:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #173318:154:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #173354:250:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #173357:108:7 [L d1 h1 c1]
      v56 = "gbMvIF0";                                  // #173361:112:233 [L d1 h1 c1]
      arr_v39[v43] = "gbMvIF0";                         // #173372:233:210 [L d1 h1 c1]
    } else {
      // #173344:130:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #173380:152:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #173384:73:138 [L d1 h1 c1]
    v58 = undefined;                                    // #173402:25:233 [L d1 h1 c1]
    return v58;                                         // #173405:133:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #173099:129:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #173102:151:7 [-] /* never executed in any replay */
    v26 = KP(m173105k151);                              // #173106:175:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #173179:12:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #173184:182:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #173188:75:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m173190k75)](v24);                   // #173191:240:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #173210:10:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #173214:79:150 [-] /* never executed in any replay */
    v33 = v32[KP(m173216k79)];                          // #173217:170:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #173222:237:236 [-] /* never executed in any replay */
    v35 = KP(m173224k237);                              // #173225:45:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #173230:36:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #173233:165:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #173255:11:103 [-] /* never executed in any replay */
    if (v24[KP(m173259k11)]) {                          // #173260:118:200 #173265:109:160 [-] /* never executed in any replay */
      outside("L173290_237");                           // #173288:237:150 [-]  L173290_237 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L173270_109");  // L173270_109 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}