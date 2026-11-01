function probe_8_canvas_getImageData_readPixels(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L219545_126; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #219546:214:53 #219556:62:211 [L d1 h1 c1]
  v1 = undefined;                                       // #219559:122:233 [L d1 h1 c1]
  v2 = undefined;                                       // #219562:198:233 #219565:226:233 [L d1 h1 c1]
  v51 = undefined;                                      // #219568:142:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #219571:176:7 [L d1 h1 c1]
  v4 = KP(219574);                                      // #219575:164:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #219648:109:114 [L d1 h1 c1]
  v6 = 0;                                               // #219653:80:72 [L d1 h1 c1]
  v52 = "eval";                                         // #219656:196:233 [L d1 h1 c1]
  v53 = undefined;                                      // #219661:104:233 [L d1 h1 c1]
  v7 = "this";                                          // #219664:124:233 [L d1 h1 c1] +#219669:92:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #219674:220:7 | #219678:197:114 | #219683:157:65 #219687:146:130 #219690:243:130 | #219693:54:160 [L d1 h1 c1]
    // #219699:174:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #219709:153:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #219712:79:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #219716:173:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #219720:223:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #219723:202:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #219737:15:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #219740:152:142 [L d1 h1 c1]
  try {
    TP(tryStack, 219923, 210, callDepths);                         // #219745:161:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #219751:55:7 [L d1 h1 c1]
    v17 = KP(219754);                                   // #219755:207:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #219828:100:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #219847:142:103 [L d1 h1 c1]
    v18 = "";                                           // #219852:138:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #219856:124:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #219860:51:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #219870:67:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #219874:87:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #219877:149:7 #219881:33:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #219899:104:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #219904:124:233 #219908:197:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #219916:11:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #219919:111:53 #220129:87:236 [L d1 h1 c1]
    v40 = 1;                                            // #220132:18:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #220135:36:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #220139:110:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #220143:201:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #220179:177:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #220182:7:7 [L d1 h1 c1]
      v56 = "rInp5";                                    // #220186:95:233 [L d1 h1 c1]
      arr_v39[v43] = "rInp5";                           // #220195:220:210 [L d1 h1 c1]
    } else {
      // #220169:181:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #220203:124:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #220207:157:138 [L d1 h1 c1]
    v58 = undefined;                                    // #220225:29:233 [L d1 h1 c1]
    return v58;                                         // #220228:121:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #219924:247:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #219927:181:7 [-] /* never executed in any replay */
    v26 = KP(m219930k181);                              // #219931:213:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #220004:26:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #220009:12:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #220013:201:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m220015k201)](v24);                  // #220016:246:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #220035:120:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #220039:133:150 [-] /* never executed in any replay */
    v33 = v32[KP(m220041k133)];                         // #220042:136:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #220047:211:236 [-] /* never executed in any replay */
    v35 = KP(m220049k211);                              // #220050:251:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #220055:58:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #220058:227:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #220080:209:103 [-] /* never executed in any replay */
    if (v24[KP(m220084k209)]) {                         // #220085:164:200 #220090:99:160 [-] /* never executed in any replay */
      outside("L220115_237");                           // #220113:237:150 [-]  L220115_237 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L220095_99");  // L220095_99 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}