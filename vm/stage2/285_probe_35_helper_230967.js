function probe_35_helper_230967(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L230950_24; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 45 register webs used only inside this fn (no live-in, cross-call or table-made def; 22 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, win_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r205 */, v8 /* r199 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r205 */, v12 /* r199 */, v13 /* r205 */, v14 /* r199 */, v15 /* r205 */, v16 /* r199 */, v17 /* r205 */, v18 /* r205 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r199 */, arr_v23 /* r205 */, v29 /* r202 */, win_v30 /* r204 */, v31 /* r205 */, arr_v32 /* r204 */, v33 /* r202 */, v34 /* r199 */, v35 /* r198 */;
  let v36 /* r202 */, v37 /* r205 */, v38 /* r198 */, v39 /* r196 */, v40 /* r202 */, v41 /* r199 */, v42 /* r199 */, v43 /* r202 */, v44 /* r204 */, v45 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 3, win_v24 3, win_v30 3
  //   Array: arr_v23 3, arr_v32 3
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v1 = undefined;                                       // #230951:136:53 #230961:120:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #230964:114:7 [L d1 h1 c1]
  v3 = KP(230967);                                      // #230968:222:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #231041:63:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #231046:221:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #231050:128:200 #231055:207:160 [L d1 h1 c1]
    v31 = undefined;                                    // #231066:93:233 [-] /* never executed in any replay */
    return v31;                                         // #231069:185:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #231061:35:53 #231071:4:236 [L d1 h1 c1]
  v4 = 1;                                               // #231074:75:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #231077:185:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #231081:239:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #231085:167:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #231090:87:161 [L d1 h1 c1]
    v7 = false;                                         // #231107:113:233 [L d1 h1 c1] +#231110:189:53
  } else {
    v8 = 1;                                             // #231115:33:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #231118:183:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #231122:117:7 [-] /* never executed in any replay */
    v35 = "bDZCA9";                                     // #231126:149:233 [-] /* never executed in any replay */
    v36 = !(v34 === "bDZCA9");                          // #231136:45:65 #231140:226:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #231143:199:150 [-] +#231146:59:53 /* never executed in any replay */
  }
  if (v7) {                                             // #231151:220:160 [L d1 h1 c1]
    v37 = undefined;                                    // #231162:247:233 [-] /* never executed in any replay */
    return v37;                                         // #231165:107:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #231157:60:53 #231167:207:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #231170:7:233 [L d1 h1 c1]
  v12 = undefined;                                      // #231175:95:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #231178:61:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #231182:99:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #231186:55:69 [L d1 h1 c1]
    v15 = false;                                        // #231204:124:233 [-] +#231207:92:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #231212:75:7 [L d1 h1 c1]
    v39 = 4;                                            // #231216:54:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #231219:138:65 #231223:11:130 [L d1 h1 c1]
    v15 = v16;                                          // #231226:140:150 [L d1 h1 c1] +#231229:44:53
  }
  if (v15) {                                            // #231234:104:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #231245:9:103 [L d1 h1 c1]
    v18 = "";                                           // #231250:217:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #231254:238:210 [L d1 h1 c1]
  } else {
    // #231240:152:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #231262:27:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #231265:73:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #231269:63:7 [L d1 h1 c1]
  v22 = 1;                                              // #231273:90:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #231276:76:7 [L d1 h1 c1]
  v41 = "lROQcl7";                                      // #231280:208:233 [L d1 h1 c1]
  arr_v32[v40] = "lROQcl7";                             // #231291:42:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #231295:149:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #231331:5:150 [L d1 h1 c1]
    v42 = 0;                                            // #231334:136:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #231337:66:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #231341:185:16 [L d1 h1 c1] +#231346:229:53
  } else {
    // #231321:81:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #231351:117:233 [L d1 h1 c1]
  return v45;                                           // #231354:113:245 [L d1 h1 c1]
}