function probe_26_feature_detect_booleans_navigator(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L179630_12; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15, 16);                                           // #179631:172:53 #179641:240:211 [L d1 h1 c1]
  v1 = undefined;                                       // #179645:228:233 [L d1 h1 c1]
  v2 = undefined;                                       // #179648:8:233 #179651:156:233 [L d1 h1 c1]
  v51 = undefined;                                      // #179654:224:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #179657:58:7 [L d1 h1 c1]
  v4 = KP(179660);                                      // #179661:134:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #179734:71:114 [L d1 h1 c1]
  v6 = 0;                                               // #179739:66:72 [L d1 h1 c1]
  v52 = "eval";                                         // #179742:110:233 [L d1 h1 c1]
  v53 = undefined;                                      // #179747:234:233 [L d1 h1 c1]
  v7 = "this";                                          // #179750:118:233 [L d1 h1 c1] +#179755:238:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #179760:187:7 | #179764:232:114 | #179769:244:65 #179773:77:130 #179776:130:130 | #179779:73:160 [L d1 h1 c1]
    // #179785:53:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #179795:232:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #179798:34:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #179802:244:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #179806:202:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #179809:201:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #179823:210:150 [L d1 h1 c1]
  cell[16] = fn_v14;                                    // #179826:176:195 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #179829:245:142 [L d1 h1 c1]
  try {
    TP(tryStack, 180012, 221, callDepths);                         // #179834:202:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #179840:252:7 [L d1 h1 c1]
    v17 = KP(179843);                                   // #179844:192:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #179917:209:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #179936:135:103 [L d1 h1 c1]
    v18 = "";                                           // #179941:223:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #179945:189:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #179949:176:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #179959:12:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #179963:60:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #179966:38:7 #179970:174:69 [L d1 h1 c1]
      v13[v48] = 2;                                     // #179988:37:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #179993:133:233 #179997:234:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #180005:227:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #180008:231:53 #180223:47:236 [L d1 h1 c1]
    v40 = 1;                                            // #180226:138:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #180229:188:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #180233:166:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #180237:33:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #180273:15:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #180276:109:7 [L d1 h1 c1]
      v56 = "QJnkUDzI";                                 // #180280:173:233 [L d1 h1 c1]
      arr_v39[v43] = "QJnkUDzI";                        // #180285:114:210 [L d1 h1 c1]
    } else {
      // #180263:173:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #180293:127:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #180297:84:138 [L d1 h1 c1]
    v58 = undefined;                                    // #180315:184:233 [L d1 h1 c1]
    return v58;                                         // #180318:104:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #180013:150:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #180016:152:7 [-] /* never executed in any replay */
    v26 = KP(m180019k152);                              // #180020:236:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #180093:149:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #180098:91:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #180102:156:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m180104k156)](v24);                  // #180105:61:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #180124:99:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #180128:132:150 [-] /* never executed in any replay */
    v33 = v32[KP(m180130k132)];                         // #180131:75:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #180136:74:236 [-] /* never executed in any replay */
    v35 = KP(m180138k74);                               // #180139:86:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #180144:233:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #180147:150:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #180169:120:103 [-] /* never executed in any replay */
    if (v24[KP(m180173k120)]) {                         // #180174:111:200 #180179:194:160 [-] /* never executed in any replay */
      outside("L180204_48");                            // #180202:48:150 [-]  L180204_48 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L180184_194");  // L180184_194 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}