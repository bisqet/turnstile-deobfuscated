function probe_18_helper_198964(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L198947_108; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  v1 = undefined;                                       // #198948:140:53 #198958:180:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #198961:190:7 [L d1 h1 c1]
  v3 = KP(198964);                                      // #198965:250:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #199038:235:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #199043:217:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #199047:140:200 #199052:171:160 [L d1 h1 c1]
    v31 = undefined;                                    // #199063:36:233 [-] /* never executed in any replay */
    return v31;                                         // #199066:36:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #199058:143:53 #199068:147:236 [L d1 h1 c1]
  v4 = 1;                                               // #199071:94:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #199074:64:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #199078:26:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #199082:230:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #199087:90:161 [L d1 h1 c1]
    v7 = false;                                         // #199104:42:233 [L d1 h1 c1] +#199107:210:53
  } else {
    v8 = 1;                                             // #199112:60:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #199115:38:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #199119:232:7 [-] /* never executed in any replay */
    v35 = "rOjS5";                                      // #199123:252:233 [-] /* never executed in any replay */
    v36 = !(v34 === "rOjS5");                           // #199132:184:65 #199136:1:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #199139:42:150 [-] +#199142:210:53 /* never executed in any replay */
  }
  if (v7) {                                             // #199147:247:160 [L d1 h1 c1]
    v37 = undefined;                                    // #199158:134:233 [-] /* never executed in any replay */
    return v37;                                         // #199161:126:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #199153:171:53 #199163:75:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #199166:147:233 [L d1 h1 c1]
  v12 = undefined;                                      // #199171:187:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #199174:41:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #199178:159:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #199182:131:69 [L d1 h1 c1]
    v15 = false;                                        // #199200:169:233 [-] +#199203:21:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #199208:112:7 [L d1 h1 c1]
    v39 = 4;                                            // #199212:7:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #199215:87:65 #199219:228:130 [L d1 h1 c1]
    v15 = v16;                                          // #199222:65:150 [L d1 h1 c1] +#199225:77:53
  }
  if (v15) {                                            // #199230:225:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #199241:5:103 [L d1 h1 c1]
    v18 = "";                                           // #199246:229:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #199250:202:210 [L d1 h1 c1]
  } else {
    // #199236:109:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #199258:96:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #199261:186:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #199265:44:7 [L d1 h1 c1]
  v22 = 1;                                              // #199269:211:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #199272:33:7 [L d1 h1 c1]
  v41 = "iLZYG2";                                       // #199276:145:233 [L d1 h1 c1]
  arr_v32[v40] = "iLZYG2";                              // #199286:39:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #199290:222:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #199326:107:150 [L d1 h1 c1]
    v42 = 0;                                            // #199329:214:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #199332:216:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #199336:119:16 [L d1 h1 c1] +#199341:43:53
  } else {
    // #199316:182:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #199346:169:233 [L d1 h1 c1]
  return v45;                                           // #199349:213:245 [L d1 h1 c1]
}