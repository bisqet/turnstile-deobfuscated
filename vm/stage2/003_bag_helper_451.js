function bag_helper_451(v24 /* r88 */, v25 /* r227 */) { // entry L451_37; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 43 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r192 */, v2 /* r193 */, v3 /* r195 */, v4 /* r199 */, v5 /* r202 */, v6 /* r199 */, v7 /* r202 */, v8 /* r202 */, v9 /* r199 */, v10 /* r202 */;
  let v11 /* r199 */, v12 /* r202 */, v13 /* r199 */, v14 /* r202 */, v15 /* r198 */, fn_v16 /* r196 */, v17 /* r202 */, v18 /* r204 */, v19 /* r199 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r199 */, v23 /* r202 */, v26 /* r204 */, v27 /* r205 */, fn_v28 /* r198 */, v29 /* r254 */, v30 /* r193 */, fn_v31 /* r192 */, v32 /* r199 */;
  let v33 /* r195 */, v34 /* r202 */, v35 /* r192 */, v36 /* r193 */, v37 /* r195 */, v38 /* r204 */, v39 /* r198 */, fn_v40 /* r196 */, v41 /* r199 */, v42 /* r202 */;
  let v43 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v16 9, fn_v28 588, fn_v31 579, fn_v40 9
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 9 constants propagated (9 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v26 = v25;                                            // #452:190:150 [L d196 h196 c196]
  v27 = v24;                                            // #455:51:150 [L d196 h196 c196]
  v1 = undefined;                                       // #458:247:53 #468:25:233 [L d196 h196 c196]
  v2 = undefined;                                       // #471:169:233 [L d196 h196 c196]
  v3 = undefined;                                       // #474:249:233 [L d196 h196 c196]
  clos;                                                 // #477:252:216 [L d196 h196 c196]  closure creation (operands from the byte stream)
  clos;                                                 // #491:179:216 [L d196 h196 c196]  closure creation (operands from the byte stream)
  clos;                                                 // #506:78:216 [L d196 h196 c196]  closure creation (operands from the byte stream)
  fn_v28 = clos;                                        // #520:61:216 [L d196 h196 c196]  closure creation (operands from the byte stream); then fn_v28 = its home register (H139 CLOS bind)
  v4 = undefined;                                       // #535:61:233 [L d196 h196 c196]
  v5 = 0;                                               // #538:224:72 [L d196 h196 c196]
  v29 = MC(undefined, r196, v26, 0);                    // #541:151:168 [L d196 h196 c196]
  v6 = 65535;                                           // #547:175:233 [L d196 h196 c196]
  v7 = v29 === (65535);                                 // #553:95:65 [L d196 h196 c196]
  if (v7) {                                             // #557:242:160 [L d196 h196 c196]
    v9 = undefined;                                     // #612:162:233 [L d3 h3 c3]
    v10 = 2;                                            // #615:241:72 [L d3 h3 c3]
    v35 = MC(undefined, r196, v26, 2);                  // #618:164:168 [L d3 h3 c3]
    v11 = undefined;                                    // #624:200:233 [L d3 h3 c3]
    v12 = 4;                                            // #627:255:72 [L d3 h3 c3]
    v36 = MC(undefined, fn_v28, v26, 4);                // #630:250:168 [L d3 h3 c3]
    v13 = undefined;                                    // #636:70:233 [L d3 h3 c3]
    v14 = 8;                                            // #639:5:72 [L d3 h3 c3]
    v37 = MC(undefined, fn_v28, v26, 8);                // #642:104:168 [L d3 h3 c3]
    v15 = v26;                                          // #648:181:150 [L d3 h3 c3]
    fn_v16 = v26.slice;                                 // #651:248:200 [L d3 h3 c3]
    v17 = 12;                                           // #660:111:72 [L d3 h3 c3]
    v18 = 12;                                           // #663:202:72 [L d3 h3 c3]
    v19 = (12) + v35;                                   // #666:55:222 [L d3 h3 c3]
    v38 = fn_v16.call(v15, 12, v19);                    // #670:44:138 [L d3 h3 c3]
    v39 = v27;                                          // #690:105:150 [L d3 h3 c3]
    fn_v40 = v27.slice;                                 // #693:220:200 [L d3 h3 c3]
    v20 = 2;                                            // #702:195:72 [L d3 h3 c3]
    v21 = (2) + v36;                                    // #705:140:222 [L d3 h3 c3]
    v22 = 2;                                            // #709:179:72 [L d3 h3 c3]
    v23 = (2) + v36;                                    // #712:188:222 [L d3 h3 c3]
    v41 = v23 + v37;                                    // #716:225:222 [L d3 h3 c3]
    v42 = fn_v40.call(v39, v21, v41);                   // #720:174:138 [L d3 h3 c3]
    v43 = v38 + v42;                                    // #740:139:222 [L d3 h3 c3]
    return v43;                                         // #744:175:245 [L d3 h3 c3]
  }
  v30 = v26;                                            // #563:122:53 #568:81:150 [L d193 h193 c193]
  fn_v31 = v26.slice;                                   // #571:36:200 [L d193 h193 c193]
  v32 = 2;                                              // #580:235:72 [L d193 h193 c193]
  v8 = 2;                                               // #583:86:72 [L d193 h193 c193]
  v33 = (2) + v29;                                      // #586:147:222 [L d193 h193 c193]
  v34 = fn_v31.call(v30, v32, v33);                     // #590:24:138 [L d193 h193 c193]
  return v34;                                           // #610:72:245 [L d193 h193 c193]
}