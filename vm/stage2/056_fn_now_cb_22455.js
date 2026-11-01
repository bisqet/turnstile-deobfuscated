function fn_now_cb_22455(arr_v3 /* r227 */) { // entry L22455_121; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, arr_v4 /* r199 */, v5 /* r204 */, arr_v6 /* r202 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v3 3, arr_v4 3, arr_v6 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v4 = arr_v3;                                      // #22456:194:150 [L d1 h1 c1]
  v1 = cell[37];                                        // #22459:10:53 #22469:128:236 [L d1 h1 c1]
  if (!(v1)) {                                          // #22472:207:160 [L d1 h1 c1]
    v2 = cell[34];                                      // #22478:35:53 #22483:91:236 [L d1 h1 c1]
    v5 = "sibaD1";                                      // #22486:99:233 [L d1 h1 c1]
    arr_v6 = cell[50](arr_v4);                          // #22496:4:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202; then arr_v6 = r202 (H142 CALL bind)
    v2[v5] = arr_v6;                                    // #22500:142:199 [L d1 h1 c1]
    r205 = cell[49]();                                  // #22504:234:201 [L d1 h1 c1] +#22508:146:53  VM call: pushes a frame, the callee body returns into r205
  }
  v7 = undefined;                                       // #22513:238:233 [L d1 h1 c1]
  return v7;                                            // #22516:70:245 [L d1 h1 c1]
}