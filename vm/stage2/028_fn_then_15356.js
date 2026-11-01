function fn_then_15356(win_v13 /* r70 */) { // entry L15346_239; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 21 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r205 */, v3 /* r205 */, v4 /* r204 */, promise_v5 /* r205 */, v6 /* r202 */, v7 /* r204 */, v8 /* r202 */, v9 /* r204 */, v10 /* r204 */;
  let fn_v11 /* r205 */, fn_v12 /* r205 */, v14 /* r204 */, v15 /* r205 */, v16 /* r204 */, promise_v17 /* r202 */, fn_v18 /* r199 */, fn_v19 /* r204 */, promise_v20 /* r198 */, v21 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Promise: promise_v5 3, promise_v17 3, promise_v20 3
  //   Function: fn_v11 3, fn_v12 3, fn_v18 3, fn_v19 3
  //   Window: win_v13 192
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v14 = cell[38];                                       // #15347:195:53 #15357:150:236 [L d64 h64 c64]
  if (v14) {                                            // #15360:13:160 [L d64 h64 c64]
    v15 = undefined;                                    // #15371:113:233 [-] /* never executed in any replay */
    return v15;                                         // #15374:125:245 [-] /* never executed in any replay */
  }
  v1 = cell[37];                                        // #15366:233:53 #15376:167:236 [L d64 h64 c64]
  v2 = 1;                                               // #15379:34:72 [L d64 h64 c64]
  v16 = cell[37] - 1;                                   // #15382:39:54 [L d64 h64 c64]
  cell[37] = cell[37] - 1;                              // #15386:241:195 [L d64 h64 c64]
  v3 = 0; if (v16 === 0) {                              // #15389:13:69 [L d64 h64 c64]
    v4 = true;                                          // #15407:107:233 [L d1 h1 c1]
    cell[38] = true;                                    // #15410:37:195 [L d1 h1 c1]
    r204 = cell[44]();                                  // #15413:229:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204
    promise_v5 = cell[39];                              // #15417:252:236 [L d1 h1 c1]
    v6 = !promise_v5;                                   // #15420:53:130 [L d1 h1 c1]
    if (v6) {                                           // #15423:240:160 [L d1 h1 c1]
      v8 = win_v13.Promise;                             // #15442:199:200 [-] /* never executed in any replay */
      v9 = false;                                       // #15447:31:233 [-] /* never executed in any replay */
      promise_v5 = v8.resolve(false);                   // #15450:116:138 [-] /* never executed in any replay */
      cell[39] = promise_v5;                            // #15470:74:195 [-] /* never executed in any replay */
      v10 = promise_v5;                                 // #15473:143:150 [-] +#15476:227:53 /* never executed in any replay */
    } else {
      v7 = v6;                                          // #15429:0:53 #15434:83:150 [L d1 h1 c1] +#15437:151:53
    }
    promise_v17 = promise_v5;                           // #15481:62:150 [L d1 h1 c1]
    fn_v18 = promise_v5.then;                           // #15484:157:200 [L d1 h1 c1]
    fn_v11 = clos;                                      // #15489:16:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v11 = its home register (H139 CLOS bind)
    fn_v19 = fn_v11;                                    // #15503:189:150 [L d1 h1 c1]
    fn_v12 = cell[35];                                  // #15506:116:236 [L d1 h1 c1]
    promise_v20 = fn_v18.call(promise_v17, fn_v19, fn_v12);  // #15509:181:138 [L d1 h1 c1] +#15528:241:53
  }
  v21 = undefined;                                      // #15533:108:233 [L d64 h64 c64]
  return v21;                                           // #15536:76:245 [L d64 h64 c64]
}