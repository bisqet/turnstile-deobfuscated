function fn_getContext_27338(v1 /* r88 */, v2 /* r227 */, v3 /* r243 */, v4 /* r248 */, win_v17 /* r70 */) { // entry L27338_167; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 31 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v5 /* r205 */, canvas_v6 /* r205 */, canvas_v7 /* r205 */, arr_v8 /* r205 */, fn_v9 /* r205 */, v10 /* r193 */, doc_v11 /* r202 */, v12 /* r205 */, canvas_v13 /* r205 */, v14 /* r205 */;
  let arr_v15 /* r205 */, v16 /* r204 */, v18 /* r195 */, v19 /* r196 */, v20 /* r204 */, v21 /* r198 */, canvas_v22 /* r199 */, v23 /* r202 */, v24 /* r192 */, v25 /* r193 */;
  let arr_v26 /* r205 */, v27 /* r193 */, canvas_v28 /* r199 */, v29 /* r202 */, arr_v30 /* r205 */, v31 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OffscreenCanvas: canvas_v6 6, canvas_v7 24, canvas_v22 30
  //   Array: arr_v8 30, arr_v15 4, arr_v26 26, arr_v30 4
  //   Function: fn_v9 4
  //   HTMLDocument: doc_v11 4
  //   HTMLCanvasElement: canvas_v13 4, canvas_v28 4
  //   Window: win_v17 30
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 6 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2)
  v18 = v2;                                             // #27339:184:150 [L d12 h12 c6]
  v19 = v1;                                             // #27342:197:150 [L d12 h12 c6]
  v20 = v4;                                             // #27345:222:150 [L d12 h12 c6]
  v21 = v3;                                             // #27348:211:150 [L d12 h12 c6]
  v5 = undefined;                                       // #27351:23:53 #27361:132:233 #27364:40:233 [L d12 h12 c6]
  canvas_v22 = cell[66](v18, v19);                      // #27367:97:242 [L d12 h12 c6] +#27372:209:233  VM call: pushes a frame, the callee body returns into r199; then canvas_v22 = r199 (H142 CALL bind)
  try {
    TP(tryStack, 27462, 0, callDepths);                            // #27375:54:194 [L d12 h12 c6]  try: pushes the catch arm of the enclosing try (TP)
    if (v21) {                                          // #27381:45:160 [L d12 h12 c6]
      canvas_v7 = canvas_v22;                           // #27423:18:150 [L d10 h10 c4]
      v23 = (canvas_v7).getContext(v20, v21);           // #27426:91:138 [L d10 h10 c4] +#27450:127:53
    } else {
      canvas_v6 = canvas_v22;                           // #27387:137:53 #27392:128:150 [L d2 h2 c2]
      v23 = (canvas_v6).getContext(v20);                // #27395:145:138 [L d2 h2 c2] +#27418:93:53
    }
    arr_v8 = tryStack.pop();                                 // #27455:141:124 [L d12 h12 c6]
    if (v23) {                                          // #27458:105:53 #27474:212:160 [L d12 h12 c6]
      v25 = v23;                                        // #27499:11:150 [L d10 h12 c4] +#27502:111:53
    } else {
      fn_v9 = cell[58];                                 // #27480:84:53 #27485:138:236 [L d2 c2]
      v24 = !fn_v9;                                     // #27488:11:130 [L d2 c2]
      v25 = v24;                                        // #27491:140:150 [L d2 c2] +#27494:44:53
    }
    if (v25) {                                          // #27507:2:160 [L d12 h12 c6]
      arr_v26 = [];                                     // #27518:236:107 [L d10 h12 c4]
      v10 = 0; arr_v26[0] = canvas_v22;                 // #27520:157:26 [L d10 h12 c4]
      v27 = 1; arr_v26[1] = v23;                        // #27525:202:26 [L d10 h12 c4]
      return arr_v26;                                   // #27530:178:245 [L d10 h12 c4]
    }
    doc_v11 = win_v17.document;                         // #27513:74:53 #27532:137:200 #27537:146:150 [L d2 c2]
    v12 = "canvas";                                     // #27540:126:233 [L d2 c2]
    canvas_v28 = doc_v11.createElement("canvas");       // #27550:23:138 [L d2 c2]
    canvas_v28.width = v18;                             // #27576:128:142 [L d2 c2]
    canvas_v28.height = v19;                            // #27581:133:142 [L d2 c2]
    try {
      TP(tryStack, 27673, 103, callDepths);                        // #27586:26:194 [L d2 c2]  try: pushes the catch arm of the enclosing try (TP)
      if (v21) {                                        // #27592:129:160 [L d2 c2]
        v14 = canvas_v28;                               // #27634:251:150 [-] /* never executed in any replay */
        v29 = (v14).getContext(v20, v21);               // #27637:224:138 [-] +#27661:48:53 /* never executed in any replay */
      } else {
        canvas_v13 = canvas_v28;                        // #27598:141:53 #27603:240:150 [L d2 c2]
        v29 = (canvas_v13).getContext(v20);             // #27606:65:138 [L d2 c2] +#27629:77:53
      }
      arr_v15 = tryStack.pop();                              // #27666:39:124 [L d2 c2]
      arr_v30 = [];                                     // #27669:27:53 #27685:12:107 [L d2 c2]
      v16 = 0; arr_v30[0] = canvas_v28;                 // #27687:61:26 [L d2 c2]
      v31 = 1; arr_v30[1] = v29;                        // #27692:234:26 [L d2 c2]
      return arr_v30;                                   // #27697:82:245 [L d2 c2]
    } catch (caught) {
      outside("L27679_76");                             // #27674:120:150 #27677:76:233 [-]  L27679_76 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } catch (caught) {
    outside("L27468_45");                               // #27463:237:150 #27466:45:233 [-]  L27468_45 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}