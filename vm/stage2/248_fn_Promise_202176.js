function fn_Promise_202176(win_v40 /* r70 */) { // entry L202166_151; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 47 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r205 */, v4 /* r202 */, arr_v5 /* r199 */, v6 /* r205 */, v7 /* r198 */, fn_v8 /* r196 */, v9 /* r204 */, v10 /* r205 */;
  let promise_v11 /* r204 */, v12 /* r205 */, v13 /* r202 */, v14 /* r205 */, promise_v15 /* r204 */, v16 /* r205 */, v17 /* r198 */, v18 /* r205 */, v19 /* r205 */, v20 /* r202 */;
  let fn_v21 /* r198 */, fn_v22 /* r196 */, v23 /* r204 */, v24 /* r205 */, promise_v25 /* r204 */, v26 /* r205 */, v27 /* r205 */, fn_v28 /* r204 */, v29 /* r202 */, v30 /* r205 */;
  let promise_v31 /* r204 */, v32 /* r205 */, arr_v33 /* r204 */, fn_v34 /* r202 */, fn_v35 /* r205 */, promise_v36 /* r202 */, fn_v37 /* r199 */, fn_v38 /* r205 */, fn_v39 /* r205 */, fn_v41 /* r195 */;
  let v42 /* r198 */, fn_v43 /* r196 */, promise_v44 /* r204 */, fn_v45 /* r202 */, promise_v46 /* r199 */, v47 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v5 3, arr_v33 3
  //   Function: fn_v8 3, fn_v21 3, fn_v22 3, fn_v28 3, fn_v34 3, fn_v35 3, fn_v37 3, fn_v38 3
  //   Function: fn_v39 3, fn_v41 3, fn_v43 3, fn_v45 3
  //   Promise: promise_v11 3, promise_v15 3, promise_v25 3, promise_v31 3, promise_v36 3, promise_v44 3, promise_v46 3
  //   Window: win_v40 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #202167:203:53 #202177:132:233 [L d1 h1 c1]
  v2 = undefined;                                       // #202180:40:233 [L d1 h1 c1]
  v3 = cell[37];                                        // #202183:243:236 [L d1 h1 c1]
  if (v3) {                                             // #202186:54:160 [L d1 h1 c1]
    v4 = win_v40.String(v3);                            // #202205:27:138 [L d1 h1 c1] +#202224:63:53
  } else {
    v4 = null;                                          // #202192:174:53 #202197:70:233 [-] +#202200:126:53 /* never executed in any replay */
  }
  arr_v5 = [];                                          // #202229:128:107 [L d1 h1 c1]
  v6 = cell[1];                                         // #202231:235:236 [L d1 h1 c1]
  v7 = cell[1];                                         // #202234:236:150 [L d1 h1 c1]
  fn_v8 = cell[1].RkOO5;                                // #202237:19:200 [L d1 h1 c1]
  fn_v41 = win_v40.String;                              // #202246:94:200 [L d1 h1 c1]
  v9 = cell[35];                                        // #202251:209:236 [L d1 h1 c1]
  v10 = fn_v41.call(win_v40, v9);                       // #202254:222:138 [L d1 h1 c1]
  promise_v11 = fn_v8.call(v7, v10);                    // #202274:247:138 [L d1 h1 c1]
  v12 = 0; arr_v5[0] = promise_v11;                     // #202293:60:26 [L d1 h1 c1]
  if (v4) {                                             // #202298:155:160 [L d1 h1 c1]
    v16 = cell[1];                                      // #202351:120:236 [L d1 h1 c1]
    v17 = cell[1];                                      // #202354:133:150 [L d1 h1 c1]
    promise_v15 = v17.RkOO5(v4);                        // #202357:194:138 [L d1 h1 c1] +#202375:10:53
  } else {
    v13 = win_v40.Promise;                              // #202304:191:53 #202309:27:200 #202314:92:150 [-] /* never executed in any replay */
    v14 = "CSky6";                                      // #202317:160:233 [-] /* never executed in any replay */
    promise_v15 = v13.resolve("CSky6");                 // #202326:49:138 [-] +#202346:125:53 /* never executed in any replay */
  }
  v18 = 1; arr_v5[1] = promise_v15;                     // #202380:251:26 [L d1 h1 c1]
  v19 = cell[1];                                        // #202385:58:236 [L d1 h1 c1]
  v20 = cell[1];                                        // #202388:191:150 [L d1 h1 c1]
  fn_v21 = cell[1].RkOO5;                               // #202391:90:200 [L d1 h1 c1]
  fn_v22 = win_v40.String;                              // #202400:73:200 [L d1 h1 c1]
  v23 = cell[36][KP(m202404k73)]();                     // #202405:78:66 [L d1 h1 c1]
  v24 = fn_v22.call(win_v40, v23);                      // #202438:167:138 [L d1 h1 c1]
  promise_v25 = fn_v21.call(v20, v24);                  // #202458:220:138 [L d1 h1 c1]
  v26 = 2; arr_v5[2] = promise_v25;                     // #202477:205:26 [L d1 h1 c1]
  v27 = cell[1];                                        // #202482:68:236 [L d1 h1 c1]
  v42 = cell[1];                                        // #202485:33:150 [L d1 h1 c1]
  fn_v43 = cell[1].RkOO5;                               // #202488:180:200 [L d1 h1 c1]
  fn_v28 = win_v40.String;                              // #202497:187:200 [L d1 h1 c1]
  v29 = cell[34];                                       // #202502:250:236 [L d1 h1 c1]
  v30 = fn_v28.call(win_v40, v29);                      // #202505:163:138 [L d1 h1 c1]
  promise_v31 = fn_v43.call(v42, v30);                  // #202525:232:138 [L d1 h1 c1]
  v32 = 3; arr_v5[3] = promise_v31;                     // #202544:169:26 [L d1 h1 c1]
  arr_v33 = arr_v5;                                     // #202549:50:150 [L d1 h1 c1]
  fn_v34 = win_v40.Promise;                             // #202552:193:200 [L d1 h1 c1]
  fn_v35 = fn_v34;                                      // #202557:234:150 [L d1 h1 c1]
  promise_v36 = fn_v35.all(arr_v33);                    // #202560:211:138 [L d1 h1 c1]
  fn_v37 = promise_v36.then;                            // #202576:30:200 [L d1 h1 c1]
  fn_v38 = clos;                                        // #202581:205:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v38 = its home register (H139 CLOS bind)
  promise_v44 = fn_v37.call(promise_v36, fn_v38);       // #202594:234:138 [L d1 h1 c1]
  fn_v45 = promise_v44.catch;                           // #202612:153:200 [L d1 h1 c1]
  fn_v39 = clos;                                        // #202617:28:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v39 = its home register (H139 CLOS bind)
  promise_v46 = fn_v45.call(promise_v44, fn_v39);       // #202632:189:138 [L d1 h1 c1]
  v47 = undefined;                                      // #202651:189:233 [L d1 h1 c1]
  return v47;                                           // #202654:153:245 [L d1 h1 c1]
}