function fn_webrtc_offer_cb_76502(v1 /* r227 */, win_v10 /* r70 */) { // entry L76502_125; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 17 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, math_v3 /* r204 */, math_v4 /* r202 */, v5 /* r204 */, v6 /* r204 */, v7 /* r205 */, arr_v8 /* r204 */, arr_v9 /* r202 */, v11 /* r195 */, fn_v12 /* r199 */;
  let v13 /* r198 */, v14 /* r196 */, arr_v15 /* r204 */, v16 /* r202 */, v17 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v3 552, math_v4 552
  //   Array: arr_v8 552, arr_v9 552, arr_v15 552
  //   Window: win_v10 552
  //   Function: fn_v12 552
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v11 = v1;                                             // #76503:182:150 [L d184 h184 c184]
  v2 = null;                                            // #76506:46:53 #76516:228:233 #76519:8:233 [L d184 h184 c184]
  try {
    TP(tryStack, 76589, 197, callDepths);                          // #76522:81:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
    math_v3 = win_v10.Math;                             // #76528:36:200 [L d184 h184 c184]
    math_v4 = math_v3;                                  // #76533:129:150 [L d184 h184 c184]
    fn_v12 = math_v3.round;                             // #76536:148:200 [L d184 h184 c184]
    v5 = cell[225]();                                   // #76545:88:201 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r204; then v5 = r204 (H142 CALL bind)
    v13 = v5 - v11;                                     // #76550:5:54 [L d184 h184 c184]
    v14 = 1000;                                         // #76554:229:233 [L d184 h184 c184]
    v6 = v13 * (1000);                                  // #76559:217:13 [L d184 h184 c184]
    v7 = fn_v12.call(math_v4, v6);                      // #76563:198:138 [L d184 h184 c184]
    arr_v8 = tryStack.pop();                                 // #76582:233:124 [L d184 h184 c184]
    arr_v9 = cell[24];                                  // #76585:85:53 #76598:159:236 [L d184 h184 c184]
    arr_v15 = cell[24];                                 // #76601:208:150 [L d184 h184 c184]
    v16 = arr_v15.push(v7);                             // #76604:161:138 [L d184 h184 c184]
    v17 = undefined;                                    // #76621:17:233 [L d184 h184 c184]
    return v17;                                         // #76624:157:245 [L d184 h184 c184]
  } catch (caught) {
    outside("L76592_222");                              // #76590:222:150 [-]  L76592_222 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}