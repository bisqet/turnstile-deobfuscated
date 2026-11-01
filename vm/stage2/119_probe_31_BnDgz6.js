function probe_31_BnDgz6(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L128629_235; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #128630:207:53 #128640:148:211 [L d1 h1 c1]
  v1 = undefined;                                       // #128643:248:233 [L d1 h1 c1]
  v2 = undefined;                                       // #128646:204:233 #128649:80:233 [L d1 h1 c1]
  v51 = undefined;                                      // #128652:196:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #128655:142:7 [L d1 h1 c1]
  v4 = KP(128658);                                      // #128659:138:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #128732:59:114 [L d1 h1 c1]
  v6 = 0;                                               // #128737:102:72 [L d1 h1 c1]
  v52 = "eval";                                         // #128740:2:233 [L d1 h1 c1]
  v53 = undefined;                                      // #128745:46:233 [L d1 h1 c1]
  v7 = "this";                                          // #128748:170:233 [L d1 h1 c1] +#128753:82:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #128758:23:7 | #128762:212:114 | #128767:48:65 #128771:153:130 #128774:158:130 | #128777:245:160 [L d1 h1 c1]
    // #128783:49:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #128793:155:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #128796:201:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #128800:191:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #128804:41:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #128807:108:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #128821:169:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #128824:74:142 [L d1 h1 c1]
  try {
    TP(tryStack, 129007, 97, callDepths);                          // #128829:11:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #128835:121:7 [L d1 h1 c1]
    v17 = KP(128838);                                   // #128839:137:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #128912:182:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #128931:24:103 [L d1 h1 c1]
    v18 = "";                                           // #128936:108:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #128940:86:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #128944:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #128954:237:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #128958:217:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #128961:143:7 #128965:179:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #128983:211:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #128988:251:233 #128992:8:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #129000:64:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #129003:16:53 #129213:29:236 [L d1 h1 c1]
    v40 = 1;                                            // #129216:64:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #129219:26:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #129223:12:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #129227:111:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #129263:2:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #129266:84:7 [L d1 h1 c1]
      v56 = "uiJA8";                                    // #129270:184:233 [L d1 h1 c1]
      arr_v39[v43] = "uiJA8";                           // #129279:17:210 [L d1 h1 c1]
    } else {
      // #129253:67:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #129287:196:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #129291:197:138 [L d1 h1 c1]
    v58 = undefined;                                    // #129309:165:233 [L d1 h1 c1]
    return v58;                                         // #129312:225:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #129008:10:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #129011:60:7 [-] /* never executed in any replay */
    v26 = KP(m129014k60);                               // #129015:0:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #129088:89:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #129093:15:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #129097:128:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m129099k128)](v24);                  // #129100:145:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #129119:103:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #129123:120:150 [-] /* never executed in any replay */
    v33 = v32[KP(m129125k120)];                         // #129126:111:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #129131:222:236 [-] /* never executed in any replay */
    v35 = KP(m129133k222);                              // #129134:154:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #129139:29:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #129142:250:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #129164:76:103 [-] /* never executed in any replay */
    if (v24[KP(m129168k76)]) {                          // #129169:243:200 #129174:54:160 [-] /* never executed in any replay */
      outside("L129199_217");                           // #129197:217:150 [-]  L129199_217 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L129179_54");  // L129179_54 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}