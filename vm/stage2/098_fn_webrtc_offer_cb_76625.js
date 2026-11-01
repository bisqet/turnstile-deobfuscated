function fn_webrtc_offer_cb_76625(fn_v1 /* r227 */) { // entry L76625_180; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v5 /* r199 */, err_v6 /* r205 */, v7 /* r205 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 552
  //   Error: err_v6 552
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4, liveIn 1, crossCall 1, tableDef 1)
  r204 = fn_v1;                                         // #76626:209:150 [L d184 h184 c184]
  v2 = undefined;                                       // #76629:157:53 #76639:33:233 #76642:145:233 [L d184 h184 c184]
  try {
    TP(tryStack, 76721, 0, callDepths);                            // #76645:246:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
    r202 = cell[28](r204);                              // #76651:11:22 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r202
    try {
      TP(tryStack, 76693, 26, callDepths);                         // #76655:8:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
      v3 = cell[29](r204, r204);                        // #76661:193:242 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r205; then v3 = r205 (H142 CALL bind)
      v5 = (v3)[KP(m76665k193)]();                      // #76666:14:138 [-] /* never executed in any replay */
      v4 = tryStack.pop();                                   // #76686:17:124 [-] /* never executed in any replay */
      r205 = cell[29](r204, r202);                      // #76689:221:53 #76704:33:242 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
      v7 = false;                                       // #76709:145:233 [-] /* never executed in any replay */
      return false;                                     // #76712:29:245 [-] /* never executed in any replay */
    } catch (caught) {
      err_v6 = caught;                                    // #76694:31:150 [L d184 h184 c184]
      r199 = cell[29](r204, r202);                      // #76697:60:242 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r199
      return err_v6;                                    // #76702:220:245 [L d184 h184 c184]
    }
  } catch (caught) {
    v8 = false;                                         // #76722:237:150 #76725:45:233 [-] /* never executed in any replay */
    return v8;                                          // #76728:73:245 [-] /* never executed in any replay */
  }
}