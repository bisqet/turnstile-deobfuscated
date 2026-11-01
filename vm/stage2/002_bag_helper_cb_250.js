function bag_helper_cb_250(v24 /* r88 */, v25 /* r227 */) { // entry L250_95; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 32 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r199 */, v4 /* r204 */, v5 /* r198 */, v6 /* r199 */, v7 /* r198 */, v8 /* r204 */, v9 /* r196 */, fn_v10 /* r195 */;
  let v11 /* r199 */, v12 /* r198 */, v13 /* r199 */, v14 /* r196 */, v15 /* r198 */, v16 /* r199 */, v17 /* r196 */, v18 /* r204 */, v19 /* r198 */, v20 /* r204 */;
  let v21 /* r196 */, v22 /* r198 */, v23 /* r205 */, fn_v26 /* r195 */, v27 /* r204 */, v28 /* r199 */, fn_v29 /* r198 */, v30 /* r196 */, v31 /* r202 */, v32 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v10 18, fn_v26 18, fn_v29 18
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v25;                                             // #251:144:150 [L d6 h6 c6]
  v2 = v24;                                             // #254:61:150 [L d6 h6 c6]
  v3 = v1;                                              // #257:89:53 #267:5:150 [L d6 h6 c6]
  v4 = (v3).charCodeAt(v2);                             // #270:66:138 [L d6 h6 c6]
  v5 = 24;                                              // #293:17:72 [L d6 h6 c6]
  v6 = v4 << (24);                                      // #296:234:70 [L d6 h6 c6]
  v7 = 0;                                               // #300:25:72 [L d6 h6 c6]
  v8 = v6 >>> (0);                                      // #303:84:240 [L d6 h6 c6]
  v9 = v1;                                              // #307:241:150 [L d6 h6 c6]
  fn_v10 = v1.charCodeAt;                               // #310:68:200 [L d6 h6 c6]
  v11 = 1;                                              // #315:139:72 [L d6 h6 c6]
  v12 = v2 + (1);                                       // #318:52:222 [L d6 h6 c6]
  v13 = fn_v10.call(v9, v12);                           // #322:117:138 [L d6 h6 c6]
  v14 = 16;                                             // #346:56:72 [L d6 h6 c6]
  v15 = v13 << (16);                                    // #349:53:70 [L d6 h6 c6]
  v16 = v8 + v15;                                       // #353:182:222 [L d6 h6 c6]
  v17 = v1;                                             // #357:75:150 [L d6 h6 c6]
  fn_v26 = v1.charCodeAt;                               // #360:182:200 [L d6 h6 c6]
  v18 = 2;                                              // #365:181:72 [L d6 h6 c6]
  v19 = v2 + (2);                                       // #368:54:222 [L d6 h6 c6]
  v20 = fn_v26.call(v17, v19);                          // #372:239:138 [L d6 h6 c6]
  v21 = 8;                                              // #396:74:72 [L d6 h6 c6]
  v22 = v20 << (8);                                     // #399:127:70 [L d6 h6 c6]
  v27 = v16 + v22;                                      // #403:88:222 [L d6 h6 c6]
  v28 = v1;                                             // #407:229:150 [L d6 h6 c6]
  fn_v29 = v1.charCodeAt;                               // #410:104:200 [L d6 h6 c6]
  v30 = 3;                                              // #415:31:72 [L d6 h6 c6]
  v23 = v2 + (3);                                       // #418:120:222 [L d6 h6 c6]
  v31 = fn_v29.call(v28, v23);                          // #422:169:138 [L d6 h6 c6]
  v32 = v27 + v31;                                      // #446:90:222 [L d6 h6 c6]
  return v32;                                           // #450:2:245 [L d6 h6 c6]
}