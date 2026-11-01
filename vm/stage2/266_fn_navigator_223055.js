function fn_navigator_223055(win_v38 /* r70 */, v39 /* r209 */, v40 /* r220 */, v41 /* r221 */, v42 /* r223 */) { // entry L223042_143; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 57 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r199 */, win_v3 /* r205 */, win_v4 /* r199 */, v5 /* r205 */, v6 /* r202 */, navigator_v7 /* r205 */, v8 /* r205 */, v9 /* r199 */, v10 /* r205 */;
  let v11 /* r205 */, navigator_v12 /* r205 */, fn_v13 /* r205 */, navigator_v14 /* r202 */, navigator_v15 /* r202 */, keyboard_v16 /* r205 */, promise_v17 /* r202 */, fn_v18 /* r198 */, fn_v19 /* r205 */, promise_v20 /* r199 */;
  let fn_v21 /* r198 */, fn_v22 /* r202 */, promise_v23 /* r205 */, arr_v24 /* r202 */, v25 /* r205 */, v26 /* r196 */, v27 /* r196 */, v28 /* r205 */, v29 /* r195 */, v30 /* r205 */;
  let v31 /* r205 */, arr_v32 /* r205 */, v33 /* r198 */, v34 /* r202 */, v35 /* r199 */, v36 /* r205 */, v37 /* r199 */, v43 /* r204 */, fn_v44 /* r196 */, v45 /* r195 */;
  let v46 /* r198 */, v47 /* r199 */, keyboard_v48 /* r202 */, keyboard_v49 /* r199 */, fn_v50 /* r202 */, arr_v51 /* r199 */, fn_v52 /* r198 */, v53 /* r202 */, v54 /* r196 */, v55 /* r195 */;
  let v56 /* r193 */, v57 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v4 3, win_v38 3
  //   Navigator: navigator_v7 3, navigator_v12 3, navigator_v14 3, navigator_v15 3
  //   Function: fn_v13 3, fn_v18 3, fn_v19 3, fn_v21 3, fn_v22 3, fn_v44 3, fn_v50 3, fn_v52 3
  //   Keyboard: keyboard_v16 3, keyboard_v48 3, keyboard_v49 3
  //   Promise: promise_v17 3, promise_v20 3, promise_v23 3
  //   Array: arr_v24 3, arr_v32 3, arr_v51 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 3 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[1];                                         // #223043:227:53 #223053:241:233 #223056:33:233 #223059:72:236 [L d1 h1 c1]
  v2 = v1[v40];                                         // #223062:2:7 [L d1 h1 c1]
  v43 = v1[v2];                                         // #223066:84:7 [L d1 h1 c1]
  win_v3 = win_v38[v41];                                // #223070:222:7 [L d1 h1 c1]
  win_v4 = win_v3;                                      // #223074:211:150 [L d1 h1 c1]
  fn_v44 = win_v4[v39];                                 // #223077:33:7 [L d1 h1 c1]
  v5 = KP(223080);                                      // #223081:145:233 [L d1 h1 c1]
  v45 = fn_v44.call(win_v4, v5);                        // #223154:158:138 [L d1 h1 c1]
  v6 = "QWcax3";                                        // #223174:90:233 [L d1 h1 c1]
  navigator_v7 = win_v38.navigator;                     // #223184:73:200 [L d1 h1 c1]
  v46 = navigator_v7.language;                          // #223189:60:200 [L d1 h1 c1]
  if (v46) {                                            // #223194:155:160 [L d1 h1 c1]
    v9 = v46;                                           // #223222:211:150 [L d1 h1 c1] +#223225:23:53
  } else {
    v8 = "KwWP1";                                       // #223200:191:53 #223205:61:233 [-] /* never executed in any replay */
    v9 = "KwWP1";                                       // #223214:118:150 [-] +#223217:238:53 /* never executed in any replay */
  }
  v10 = v9.toLowerCase();                               // #223230:209:138 [L d1 h1 c1]
  v43.QWcax3 = v10;                                     // #223253:103:199 [L d1 h1 c1]
  v11 = "akeLU4";                                       // #223257:63:233 [L d1 h1 c1]
  v47 = {};                                             // #223267:21:159 [L d1 h1 c1]
  v43.akeLU4 = v47;                                     // #223269:155:199 [L d1 h1 c1]
  navigator_v12 = win_v38.navigator;                    // #223273:198:200 [L d1 h1 c1]
  keyboard_v48 = navigator_v12.keyboard;                // #223278:5:200 [L d1 h1 c1]
  if (keyboard_v48) {                                   // #223283:128:160 [L d1 h1 c1]
    navigator_v14 = win_v38.navigator;                  // #223302:71:200 [L d1 h1 c1]
    keyboard_v49 = navigator_v14.keyboard;              // #223307:194:200 [L d1 h1 c1]
    fn_v50 = (navigator_v14.keyboard).getLayoutMap;     // #223312:17:200 [L d1 h1 c1]
    fn_v13 = fn_v50;                                    // #223317:250:150 [L d1 h1 c1] +#223320:98:53
  } else {
    fn_v13 = keyboard_v48;                              // #223289:80:53 #223294:248:150 [-] +#223297:232:53 /* never executed in any replay */
  }
  if (fn_v13) {                                         // #223325:237:160 [L d1 h1 c1]
    try {
      TP(tryStack, 223548, 233, callDepths);                       // #223336:33:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      navigator_v15 = win_v38.navigator;                // #223342:180:200 [L d1 h1 c1]
      keyboard_v16 = navigator_v15.keyboard;            // #223347:187:200 [L d1 h1 c1]
      promise_v17 = keyboard_v16.getLayoutMap();        // #223352:160:138 [L d1 h1 c1]
      fn_v18 = promise_v17.then;                        // #223376:247:200 [L d1 h1 c1]
      fn_v19 = clos;                                    // #223381:130:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
      promise_v20 = fn_v18.call(promise_v17, fn_v19);   // #223394:11:138 [L d1 h1 c1]
      fn_v21 = promise_v20.catch;                       // #223412:118:200 [L d1 h1 c1]
      fn_v22 = clos;                                    // #223417:197:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v22 = its home register (H139 CLOS bind)
      promise_v23 = fn_v21.call(promise_v20, fn_v22);   // #223430:2:138 [L d1 h1 c1]
      arr_v24 = cell[6];                                // #223449:229:236 [L d1 h1 c1]
      arr_v51 = cell[6];                                // #223452:126:150 [L d1 h1 c1]
      fn_v52 = arr_v51[v42];                            // #223455:224:7 [L d1 h1 c1]
      v53 = {};                                         // #223459:114:159 [L d1 h1 c1]
      v53.aJBc6 = promise_v23;                          // #223461:47:142 [L d1 h1 c1]
      v25 = "AzXDU3";                                   // #223466:231:233 [L d1 h1 c1]
      v26 = 2000;                                       // #223471:191:233 [L d1 h1 c1]
      v53.AzXDU3 = 2000;                                // #223476:29:199 [L d1 h1 c1]
      v27 = "Kavdk6";                                   // #223480:157:233 [L d1 h1 c1]
      v28 = cell[1];                                    // #223485:212:236 [L d1 h1 c1]
      v29 = v28[v40];                                   // #223488:94:7 [L d1 h1 c1]
      v53.Kavdk6 = v29;                                 // #223492:0:199 [L d1 h1 c1]
      v30 = "LfFR4";                                    // #223496:180:233 [L d1 h1 c1]
      v54 = {};                                         // #223501:246:159 [L d1 h1 c1]
      v55 = "akeLU4";                                   // #223503:82:233 [L d1 h1 c1]
      v56 = {};                                         // #223513:156:159 [L d1 h1 c1]
      v54.akeLU4 = v56;                                 // #223515:198:199 [L d1 h1 c1]
      v53.LfFR4 = v54;                                  // #223519:200:199 [L d1 h1 c1]
      v31 = fn_v52.call(arr_v51, v53);                  // #223523:185:138 [L d1 h1 c1]
      arr_v32 = tryStack.pop();                              // #223541:208:124 [L d1 h1 c1] +#223544:96:53
    } catch (caught) {
      v33 = caught;                                       // #223549:114:150 [-] /* never executed in any replay */
      v34 = KP(m223551k114);                            // #223552:222:233 [-] /* never executed in any replay */
      v35 = (win_v38)[KP(m223556k222)](v33);            // #223557:247:138 [-] /* never executed in any replay */
      v43[v34] = v35;                                   // #223576:117:199 [-] /* never executed in any replay */
      v36 = KP(m223579k117);                            // #223580:149:233 [-] /* never executed in any replay */
      if (v33) {                                        // #223590:208:160 [-] /* never executed in any replay */
        v37 = v33[KP(m223608k86)];                      // #223609:85:200 [-] /* never executed in any replay */
        outside("L223619_46");                          // #223617:46:150 [-]  L223619_46 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
      outside("L223595_208");  // L223595_208 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
    }
  } else {
    // #223331:73:53 [-] /* never executed in any replay */
  }
  v57 = undefined;                                      // #223633:231:233 [L d1 h1 c1]
  return v57;                                           // #223636:155:245 [L d1 h1 c1]
}