function fn_document_cb_167245() { // entry L167245_222; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 26 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, worker_v4 /* r202 */, v5 /* r204 */, v6 /* r204 */, v7 /* r205 */, v8 /* r204 */, v9 /* r205 */, v10 /* r204 */;
  let arr_v11 /* r202 */, arr_v12 /* r205 */, fn_v13 /* r204 */, arr_v14 /* r253 */, arr_v15 /* r202 */, v16 /* r199 */, v17 /* r204 */, v18 /* r205 */, v19 /* r202 */, fn_v20 /* r205 */;
  let v21 /* r205 */, v22 /* r253 */, fn_v23 /* r202 */, v24 /* r204 */, v25 /* r199 */, v26 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Worker: worker_v4 3
  //   Array: arr_v11 3, arr_v12 3, arr_v14 3, arr_v15 3
  //   Function: fn_v13 3, fn_v20 3, fn_v23 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[53];                                        // #167246:182:53 #167256:228:236 [L d1 h1 c1]
  if (v1) {                                             // #167259:163:160 [L d1 h1 c1]
    v21 = undefined;                                    // #167270:36:233 [-] /* never executed in any replay */
    return v21;                                         // #167273:36:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #167265:167:53 #167275:128:233 [L d1 h1 c1]
  cell[53] = true;                                      // #167278:38:195 [L d1 h1 c1]
  v3 = cell[47];                                        // #167281:121:236 [L d1 h1 c1]
  if (v3) {                                             // #167284:36:160 [L d1 h1 c1]
    worker_v4 = cell[51];                               // #167295:34:236 [L d1 h1 c1]
    if (worker_v4) {                                    // #167298:105:160 [L d1 h1 c1]
      v6 = (worker_v4).terminate();                     // #167317:172:138 #167338:233:150 [L d1 h1 c1] +#167341:85:53
    } else {
      v5 = worker_v4;                                   // #167304:213:53 #167309:19:150 [-] +#167312:87:53 /* never executed in any replay */
    }
    v7 = cell[50];                                      // #167346:136:236 [L d1 h1 c1]
    if (v7) {                                           // #167349:183:160 [L d1 h1 c1]
      v9 = "nVZRu3";                                    // #167368:168:233 [-] /* never executed in any replay */
      cell[21] = "nVZRu3";                              // #167378:174:195 [-] /* never executed in any replay */
      v10 = "nVZRu3";                                   // #167381:99:150 [-] +#167384:103:53 /* never executed in any replay */
    } else {
      v8 = v7;                                          // #167355:107:53 #167360:106:150 [L d1 h1 c1] +#167363:18:53
    }
  } else {
    // #167290:100:53 [-] /* never executed in any replay */
  }
  arr_v11 = cell[20];                                   // #167389:27:236 [L d1 h1 c1]
  arr_v12 = cell[20];                                   // #167392:92:150 [L d1 h1 c1]
  fn_v13 = cell[20].concat;                             // #167395:195:200 [L d1 h1 c1]
  arr_v14 = cell[23];                                   // #167405:226:236 [L d1 h1 c1]
  arr_v15 = fn_v13.call(arr_v12, arr_v14);              // #167408:235:138 [L d1 h1 c1]
  v22 = undefined;                                      // #167428:179:233 [L d1 h1 c1]
  cell[23] = undefined;                                 // #167431:77:195 [L d1 h1 c1]
  v16 = cell[19];                                       // #167434:196:236 [L d1 h1 c1]
  v16.oPxfw0 = arr_v15;                                 // #167437:185:142 [L d1 h1 c1]
  v17 = "mBxH7";                                        // #167447:201:233 [L d1 h1 c1]
  v18 = cell[21];                                       // #167456:80:236 [L d1 h1 c1]
  v16.mBxH7 = cell[21];                                 // #167459:170:199 [L d1 h1 c1]
  v19 = undefined;                                      // #167463:54:233 [L d1 h1 c1]
  cell[20] = undefined;                                 // #167466:132:195 [L d1 h1 c1]
  fn_v23 = cell[57];                                    // #167469:223:236 [L d1 h1 c1]
  v24 = undefined;                                      // #167472:215:233 [L d1 h1 c1]
  fn_v20 = clos;                                        // #167475:226:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
  v25 = MC(v24, fn_v23, fn_v20);                        // #167485:51:114 [L d1 h1 c1]
  v26 = undefined;                                      // #167490:219:233 [L d1 h1 c1]
  return v26;                                           // #167493:191:245 [L d1 h1 c1]
}