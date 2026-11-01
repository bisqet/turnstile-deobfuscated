function probe_23_eTTKN0(win_v45 /* r70 */, v46 /* r209 */, v47 /* r211 */, v48 /* r217 */, v49 /* r220 */, v50 /* r221 */) { // entry L249609_110; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  NC(15);                                               // #249610:6:53 #249620:28:211 [L d1 h1 c1]
  v1 = undefined;                                       // #249623:96:233 [L d1 h1 c1]
  v2 = undefined;                                       // #249626:148:233 #249629:248:233 [L d1 h1 c1]
  v51 = undefined;                                      // #249632:204:233 [L d1 h1 c1]
  win_v3 = win_v45[v50];                                // #249635:118:7 [L d1 h1 c1]
  v4 = KP(249638);                                      // #249639:210:233 [L d1 h1 c1]
  v5 = MC(win_v3, v46, v4);                             // #249712:99:114 [L d1 h1 c1]
  v6 = 0;                                               // #249717:238:72 [L d1 h1 c1]
  v52 = "eval";                                         // #249720:106:233 [L d1 h1 c1]
  v53 = undefined;                                      // #249725:246:233 [L d1 h1 c1]
  v7 = "this";                                          // #249728:82:233 [L d1 h1 c1] +#249733:90:53
  while ((fn_v8 = win_v45.eval, win_v9 = MC(undefined, fn_v8, "this"), v10 = !(!(win_v45 === win_v9)), !(v10))) {  // #249738:34:7 | #249742:115:114 | #249747:19:65 #249751:176:130 #249754:25:130 | #249757:68:160 [L d1 h1 c1]
    // #249763:4:53 [-] /* never executed in any replay */
  }
  v11 = cell[1];                                        // #249773:223:236 [L d1 h1 c1]
  v12 = v11[v49];                                       // #249776:253:7 [L d1 h1 c1]
  v13 = v11[v12];                                       // #249780:35:7 [L d1 h1 c1]
  cell[15] = v13;                                       // #249784:253:195 [L d1 h1 c1]
  fn_v14 = clos;                                        // #249787:240:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  fn_v15 = fn_v14;                                      // #249801:29:150 [L d1 h1 c1]
  v13.ExHMy4 = fn_v15;                                  // #249804:238:142 [L d1 h1 c1]
  try {
    TP(tryStack, 249987, 146, callDepths);                         // #249809:31:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v16 = win_v45[v50];                             // #249815:61:7 [L d1 h1 c1]
    v17 = KP(249818);                                   // #249819:61:233 [L d1 h1 c1]
    v54 = win_v16.uOdMb2(v17);                          // #249892:154:138 [L d1 h1 c1]
    v13[v48] = 0;                                       // #249911:108:103 [L d1 h1 c1]
    v18 = "";                                           // #249916:112:233 [L d1 h1 c1]
    v13[v47] = "";                                      // #249920:74:199 [L d1 h1 c1]
    fn_v19 = clos;                                      // #249924:73:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    v20 = fn_v19();                                     // #249934:129:113 [L d1 h1 c1]
    v21 = ~v20;                                         // #249938:29:5 [L d1 h1 c1]
    v22 = 0; if (v13[v48] === 0) {                      // #249941:195:7 #249945:23:69 [L d1 h1 c1]
      v13[v48] = 3;                                     // #249963:143:103 [L d1 h1 c1]
      v13[v47] = ("");                                  // #249968:199:233 #249972:164:210 [L d1 h1 c1]
    }
    arr_v23 = tryStack.pop();                                // #249980:67:124 [L d1 h1 c1]
    arr_v39 = cell[0];                                  // #249983:199:53 #250193:198:236 [L d1 h1 c1]
    v40 = 1;                                            // #250196:133:72 [L d1 h1 c1]
    v55 = arr_v39[1];                                   // #250199:139:7 [L d1 h1 c1]
    v41 = arr_v39[v55];                                 // #250203:249:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #250207:232:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v42 = 1;                                          // #250243:106:72 [L d1 h1 c1]
      v43 = arr_v39[1];                                 // #250246:28:7 [L d1 h1 c1]
      v56 = "OMBbQ6";                                   // #250250:96:233 [L d1 h1 c1]
      arr_v39[v43] = "OMBbQ6";                          // #250260:25:210 [L d1 h1 c1]
    } else {
      // #250233:24:53 [-] /* never executed in any replay */
    }
    win_v44 = win_v45[v50];                             // #250268:3:7 [L d1 h1 c1]
    v57 = win_v44.qwQRi7();                             // #250272:200:138 [L d1 h1 c1]
    v58 = undefined;                                    // #250290:92:233 [L d1 h1 c1]
    return v58;                                         // #250293:124:245 [L d1 h1 c1]
  } catch (caught) {
    v24 = caught;                                         // #249988:183:150 [-] /* never executed in any replay */
    v25 = win_v45[v50];                                 // #249991:117:7 [-] /* never executed in any replay */
    v26 = KP(m249994k117);                              // #249995:149:233 [-] /* never executed in any replay */
    v27 = MC(v25, v46, v26);                            // #250068:218:114 [-] /* never executed in any replay */
    v28 = win_v45[v50];                                 // #250073:204:7 [-] /* never executed in any replay */
    v29 = v28;                                          // #250077:137:150 [-] /* never executed in any replay */
    v30 = (v29)[KP(m250079k137)](v24);                  // #250080:182:138 [-] /* never executed in any replay */
    v31 = win_v45[v50];                                 // #250099:56:7 [-] /* never executed in any replay */
    v32 = v31;                                          // #250103:69:150 [-] /* never executed in any replay */
    v33 = v32[KP(m250105k69)];                          // #250106:72:200 [-] /* never executed in any replay */
    v34 = cell[15];                                     // #250111:147:236 [-] /* never executed in any replay */
    v35 = KP(m250113k147);                              // #250114:187:233 [-] /* never executed in any replay */
    v36 = cell[5];                                      // #250119:250:236 [-] /* never executed in any replay */
    v37 = v33.call(v32, v30, v34, v35, v36);            // #250122:163:138 [-] /* never executed in any replay */
    v38 = 1; v34[v48] = 1;                              // #250144:145:103 [-] /* never executed in any replay */
    if (v24[KP(m250148k145)]) {                         // #250149:100:200 #250154:35:160 [-] /* never executed in any replay */
      outside("L250179_66");                            // #250177:66:150 [-]  L250179_66 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L250159_35");  // L250159_35 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}