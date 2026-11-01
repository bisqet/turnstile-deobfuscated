function fn_canvas_getImageData_cb_43345(arr_v26 /* r227 */) { // entry L43345_61; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 32 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r198 */, v3 /* r199 */, v4 /* r198 */, v5 /* r199 */, v6 /* r198 */, v7 /* r205 */, v8 /* r198 */, v9 /* r204 */, v10 /* r205 */;
  let v11 /* r198 */, v12 /* r204 */, v13 /* r198 */, arr_v14 /* r205 */, v15 /* r198 */, arr_v16 /* r205 */, v17 /* r198 */, arr_v18 /* r205 */, v19 /* r198 */, arr_v20 /* r204 */;
  let v21 /* r198 */, v22 /* r204 */, arr_v23 /* r205 */, v24 /* r198 */, arr_v25 /* r205 */, arr_v27 /* r196 */, arr_v28 /* r202 */, v29 /* r199 */, v30 /* r204 */, v31 /* r198 */;
  let v32 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v14 2, arr_v16 2, arr_v18 2, arr_v20 2, arr_v23 2, arr_v25 2, arr_v26 2, arr_v27 2
  //   Array: arr_v28 2
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 3 constants propagated (3 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v27 = arr_v26;                                    // #43346:118:150 [L d1 h1]
  arr_v28 = [];                                         // #43349:238:53 #43359:39:107 [L d1 h1]
  v1 = cell[93];                                        // #43361:182:236 [L d1 h1]
  v2 = 0; arr_v28[0] = cell[93];                        // #43364:191:26 [L d1 h1]
  v3 = cell[98];                                        // #43369:238:236 [L d1 h1]
  v4 = 1; arr_v28[1] = cell[98];                        // #43372:23:26 [L d1 h1]
  v5 = cell[99];                                        // #43377:230:236 [L d1 h1]
  v6 = 2; arr_v28[2] = cell[99];                        // #43380:47:26 [L d1 h1]
  v7 = 0;                                               // #43385:138:72 [L d1 h1]
  v8 = arr_v27[0];                                      // #43388:188:7 [L d1 h1]
  v9 = 0;                                               // #43392:35:72 [L d1 h1]
  v29 = 32;                                             // #43395:174:72 [L d1 h1]
  v10 = v8.substring(0, v29);                           // #43398:135:138 [L d1 h1]
  v11 = 3; arr_v28[3] = v10;                            // #43421:140:26 [L d1 h1]
  v12 = cell[120];                                      // #43426:199:236 [L d1 h1]
  v13 = 4; arr_v28[4] = cell[120];                      // #43429:204:26 [L d1 h1]
  arr_v14 = cell[100];                                  // #43434:7:236 [L d1 h1]
  v15 = 5; arr_v28[5] = cell[100];                      // #43437:12:26 [L d1 h1]
  arr_v16 = cell[107];                                  // #43442:71:236 [L d1 h1]
  v17 = 6; arr_v28[6] = cell[107];                      // #43445:76:26 [L d1 h1]
  arr_v18 = cell[108];                                  // #43450:135:236 [L d1 h1]
  v19 = 7; arr_v28[7] = cell[108];                      // #43453:140:26 [L d1 h1]
  arr_v20 = cell[116];                                  // #43458:199:236 [L d1 h1]
  v21 = 8; arr_v28[8] = cell[116];                      // #43461:204:26 [L d1 h1]
  v22 = 1;                                              // #43466:243:72 [L d1 h1]
  arr_v23 = arr_v27[1];                                 // #43469:193:7 [L d1 h1]
  v24 = 9; arr_v28[9] = arr_v23;                        // #43473:94:26 [L d1 h1]
  v30 = 2;                                              // #43478:189:72 [L d1 h1]
  arr_v25 = arr_v27[v30];                               // #43481:227:7 [L d1 h1]
  v31 = 10; arr_v28[10] = arr_v25;                      // #43485:120:26 [L d1 h1]
  cell[37] = arr_v28;                                   // #43490:62:195 [L d1 h1]
  v32 = undefined;                                      // #43493:122:233 [L d1 h1]
  return v32;                                           // #43496:162:245 [L d1 h1]
}