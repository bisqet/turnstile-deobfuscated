function fn_Promise_cb_15537(v6 /* r227 */) { // entry L15537_238; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 13 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let arr_v1 /* r205 */, arr_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, promise_v5 /* r205 */, v7 /* r202 */, v8 /* r204 */, v9 /* r205 */, v10 /* r199 */, v11 /* r204 */;
  let promise_v12 /* r204 */, v13 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 15, arr_v2 15
  //   Promise: promise_v5 3, promise_v12 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v7 = v6;                                              // #15538:163:150 [L d5 h5 c5]
  v8 = cell[38];                                        // #15541:167:53 #15551:97:236 [L d5 h5 c5]
  if (v8) {                                             // #15554:108:160 [L d5 h5 c5]
    v9 = undefined;                                     // #15565:198:233 [-] /* never executed in any replay */
    return v9;                                          // #15568:190:245 [-] /* never executed in any replay */
  }
  arr_v1 = cell[36];                                    // #15560:140:53 #15570:162:236 [L d5 h5 c5]
  arr_v2 = cell[36];                                    // #15573:135:150 [L d5 h5 c5]
  v3 = arr_v2.push(v7);                                 // #15576:60:138 [L d5 h5 c5]
  v4 = cell[39];                                        // #15593:183:236 [L d5 h5 c5]
  v10 = !v4;                                            // #15596:196:130 [L d5 h5 c5]
  if (v10) {                                            // #15599:3:160 [L d5 h5 c5]
    promise_v5 = cell[30](v7);                          // #15618:35:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then promise_v5 = r205 (H142 CALL bind)
    cell[39] = promise_v5;                              // #15622:253:195 [L d1 h1 c1]
    promise_v12 = promise_v5;                           // #15625:54:150 [L d1 h1 c1] +#15628:174:53
  } else {
    v11 = v10;                                          // #15605:135:53 #15610:219:150 [L d4 h4 c4] +#15613:255:53
  }
  r205 = cell[45]();                                    // #15633:139:201 [L d5 h5 c5]  VM call: pushes a frame, the callee body returns into r205
  v13 = undefined;                                      // #15637:211:233 [L d5 h5 c5]
  return v13;                                           // #15640:215:245 [L d5 h5 c5]
}