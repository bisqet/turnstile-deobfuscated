function fn_navigator_194349(win_v34 /* r70 */, v35 /* r209 */, v36 /* r220 */, v37 /* r221 */, v38 /* r223 */) { // entry L194339_204; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 53 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r198 */, win_v4 /* r205 */, v5 /* r205 */, win_v6 /* r205 */, navigatorUAData_v7 /* r205 */, v8 /* r202 */, navigatorUAData_v9 /* r202 */, v10 /* r202 */;
  let v11 /* r205 */, navigatorUAData_v12 /* r202 */, fn_v13 /* r199 */, v14 /* r205 */, v15 /* r198 */, v16 /* r204 */, arr_v17 /* r205 */, promise_v18 /* r204 */, fn_v19 /* r199 */, fn_v20 /* r205 */;
  let promise_v21 /* r202 */, fn_v22 /* r199 */, fn_v23 /* r204 */, promise_v24 /* r205 */, arr_v25 /* r202 */, v26 /* r205 */, v27 /* r198 */, v28 /* r198 */, v29 /* r205 */, v30 /* r196 */;
  let v31 /* r205 */, v32 /* r205 */, v33 /* r205 */, win_v39 /* r196 */, v40 /* r204 */, win_v41 /* r198 */, fn_v42 /* r195 */, v43 /* r193 */, navigator_v44 /* r199 */, fn_v45 /* r198 */;
  let arr_v46 /* r199 */, fn_v47 /* r202 */, v48 /* r204 */, v49 /* r198 */, v50 /* r196 */, v51 /* r195 */, v52 /* r202 */, v53 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 3, win_v6 3, win_v34 3, win_v39 3, win_v41 3
  //   NavigatorUAData: navigatorUAData_v7 3, navigatorUAData_v9 3, navigatorUAData_v12 3
  //   Function: fn_v13 3, fn_v19 3, fn_v20 3, fn_v22 3, fn_v23 3, fn_v42 3, fn_v45 3, fn_v47 3
  //   Array: arr_v17 3, arr_v25 3, arr_v46 3
  //   Promise: promise_v18 3, promise_v21 3, promise_v24 3
  //   Navigator: navigator_v44 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #194340:108:53 #194350:179:233 [L d1 h1 c1]
  win_v39 = win_v34.globalThis;                         // #194353:126:200 [L d1 h1 c1]
  v2 = cell[1];                                         // #194358:113:236 [L d1 h1 c1]
  v3 = v2[v36];                                         // #194361:199:7 [L d1 h1 c1]
  v40 = v2[v3];                                         // #194365:69:7 [L d1 h1 c1]
  win_v4 = win_v34[v37];                                // #194369:75:7 [L d1 h1 c1]
  win_v41 = win_v4;                                     // #194373:204:150 [L d1 h1 c1]
  fn_v42 = win_v41[v35];                                // #194376:118:7 [L d1 h1 c1]
  v5 = KP(194379);                                      // #194380:210:233 [L d1 h1 c1]
  v43 = fn_v42.call(win_v41, v5);                       // #194453:27:138 [L d1 h1 c1]
  win_v6 = win_v34[v37];                                // #194473:73:7 [L d1 h1 c1]
  navigator_v44 = win_v6.navigator;                     // #194477:60:200 [L d1 h1 c1]
  navigatorUAData_v7 = navigator_v44.userAgentData;     // #194482:35:200 [L d1 h1 c1]
  v8 = !navigatorUAData_v7;                             // #194487:128:130 [L d1 h1 c1]
  if (v8) {                                             // #194490:207:160 [L d1 h1 c1]
    v11 = v8;                                           // #194522:242:150 [-] +#194525:122:53 /* never executed in any replay */
  } else {
    navigatorUAData_v9 = navigator_v44.userAgentData;   // #194496:35:53 #194501:120:200 [L d1 h1 c1]
    fn_v45 = navigatorUAData_v9.getHighEntropyValues;   // #194506:111:200 [L d1 h1 c1]
    v10 = !fn_v45;                                      // #194511:156:130 [L d1 h1 c1]
    v11 = v10;                                          // #194514:25:150 [L d1 h1 c1] +#194517:197:53
  }
  if (v11) {                                            // #194530:8:160 [L d1 h1 c1]
    v33 = "StrX9";                                      // #195026:250:233 [-] /* never executed in any replay */
    v52 = "oJTKo7";                                     // #195035:70:233 [-] /* never executed in any replay */
    v40.StrX9 = "oJTKo7";                               // #195045:231:210 [-] /* never executed in any replay */
  } else {
    navigatorUAData_v12 = navigator_v44.userAgentData;  // #194536:184:53 #194541:107:200 [L d1 h1 c1]
    fn_v13 = navigatorUAData_v12.getHighEntropyValues;  // #194546:86:200 [L d1 h1 c1]
    v14 = KP(194550);                                   // #194551:50:233 [L d1 h1 c1]
    v15 = win_v39.decodeURIComponent(v14);              // #194763:251:138 [L d1 h1 c1]
    v16 = "A";                                          // #194794:131:233 [L d1 h1 c1]
    arr_v17 = v15.split("A");                           // #194799:72:138 [L d1 h1 c1]
    promise_v18 = fn_v13.call(navigatorUAData_v12, arr_v17);  // #194817:57:138 [L d1 h1 c1]
    fn_v19 = promise_v18.then;                          // #194851:108:200 [L d1 h1 c1]
    fn_v20 = clos;                                      // #194856:99:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
    promise_v21 = fn_v19.call(promise_v18, fn_v20);     // #194868:168:138 [L d1 h1 c1]
    fn_v22 = promise_v21.catch;                         // #194886:223:200 [L d1 h1 c1]
    fn_v23 = clos;                                      // #194891:202:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v23 = its home register (H139 CLOS bind)
    promise_v24 = fn_v22.call(promise_v21, fn_v23);     // #194903:51:138 [L d1 h1 c1]
    arr_v25 = cell[6];                                  // #194922:146:236 [L d1 h1 c1]
    arr_v46 = cell[6];                                  // #194925:183:150 [L d1 h1 c1]
    fn_v47 = arr_v46[v38];                              // #194928:117:7 [L d1 h1 c1]
    v48 = {};                                           // #194932:243:159 [L d1 h1 c1]
    v48.aJBc6 = promise_v24;                            // #194934:236:142 [L d1 h1 c1]
    v26 = "AzXDU3";                                     // #194939:240:233 [L d1 h1 c1]
    v27 = 2000;                                         // #194944:228:233 [L d1 h1 c1]
    v48.AzXDU3 = 2000;                                  // #194949:238:199 [L d1 h1 c1]
    v28 = "Kavdk6";                                     // #194953:106:233 [L d1 h1 c1]
    v29 = cell[1];                                      // #194958:173:236 [L d1 h1 c1]
    v30 = v29[v36];                                     // #194961:19:7 [L d1 h1 c1]
    v48.Kavdk6 = v30;                                   // #194965:33:199 [L d1 h1 c1]
    v31 = "LfFR4";                                      // #194969:145:233 [L d1 h1 c1]
    v49 = {};                                           // #194974:159:159 [L d1 h1 c1]
    v50 = "hzjPl2";                                     // #194976:151:233 [L d1 h1 c1]
    v51 = "RZlN0";                                      // #194986:175:233 [L d1 h1 c1]
    v49.hzjPl2 = "RZlN0";                               // #194995:77:199 [L d1 h1 c1]
    v48.LfFR4 = v49;                                    // #194999:243:199 [L d1 h1 c1]
    v32 = fn_v47.call(arr_v46, v48);                    // #195003:248:138 [L d1 h1 c1] +#195021:232:53
  }
  v53 = undefined;                                      // #195053:157:233 [L d1 h1 c1]
  return v53;                                           // #195056:249:245 [L d1 h1 c1]
}