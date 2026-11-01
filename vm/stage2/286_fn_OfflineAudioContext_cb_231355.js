function fn_OfflineAudioContext_cb_231355(f32_v6 /* r227 */) { // entry L231355_73; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, f32_v3 /* r202 */, arr_v4 /* r205 */, v5 /* r205 */, f32_v7 /* r199 */, v8 /* r204 */, v9 /* r198 */, v10 /* r196 */, v11 /* r202 */;
  let promise_v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Float32Array: f32_v3 6, f32_v6 6, f32_v7 6
  //   Array: arr_v4 6
  //   Promise: promise_v12 6
  // H133 rewrites: 1 single-use temps folded (0 of them expressions, H135), 4 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  f32_v7 = f32_v6;                                      // #231356:82:150 [L d2 h2 c2]
  v8 = "";                                              // #231359:90:53 #231369:19:233 #231372:59:233 [L d2 h2 c2]
  try {
    TP(tryStack, 231480, 62, callDepths);                          // #231376:120:194 [L d2 h2 c2]  try: pushes the catch arm of the enclosing try (TP)
    if (f32_v7) {                                       // #231382:231:160 [L d2 h2 c2]
      v9 = f32_v7.length;                               // #231401:173:200 [L d2 h2 c2]
      v10 = 0;                                          // #231406:144:72 [L d2 h2 c2]
      v2 = 0 < v9;                                      // #231409:217:98 [L d2 h2 c2]
      v1 = 0 < v9;                                      // #231413:162:150 [L d2 h2 c2] +#231416:106:53
    } else {
      v1 = f32_v7;                                      // #231388:219:53 #231393:164:150 [-] +#231396:228:53 /* never executed in any replay */
    }
    if (v1) {                                           // #231421:7:160 [L d2 h2 c2]
      f32_v3 = f32_v7;                                  // #231440:107:150 [L d2 h2 c2]
      v8 = f32_v3.join("|");                            // #231443:51:233 #231448:56:138 [L d2 h2 c2] +#231465:69:150 +#231468:65:53
    } else {
      // #231427:123:53 #231432:114:150 #231435:250:53 [-] /* never executed in any replay */
    }
    arr_v4 = tryStack.pop();                                 // #231473:118:124 [L d2 h2 c2]
    v5 = cell[1];                                       // #231476:238:53 #231489:133:236 [L d2 h2 c2]
    v11 = cell[1];                                      // #231492:158:150 [L d2 h2 c2]
    promise_v12 = v11.RkOO5(v8);                        // #231495:183:138 [L d2 h2 c2]
    return promise_v12;                                 // #231513:43:245 [L d2 h2 c2]
  } catch (caught) {
    outside("L231483_179");                             // #231481:179:150 [-]  L231483_179 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}