function fn_navigator_cb_27698(v9 /* r227 */) { // entry L27698_177; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 18 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r204 */, gl2_v4 /* r199 */, fn_v5 /* r198 */, v6 /* r204 */, v7 /* r202 */, v8 /* r204 */, v10 /* r196 */, arr_v11 /* r205 */;
  let v12 /* r202 */, v13 /* r204 */, arr_v14 /* r205 */, gl2_v15 /* r199 */, fn_v16 /* r198 */, v17 /* r202 */, v18 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   WebGL2RenderingContext: gl2_v4 1, gl2_v15 1
  //   Function: fn_v5 1, fn_v16 1
  //   Array: arr_v11 2, arr_v14 1
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v10 = v9;                                             // #27699:26:150 [L d1 h1 c1]
  v1 = undefined;                                       // #27702:2:53 #27712:107:233 [L d1 h1 c1]
  if (v10) {                                            // #27715:206:160 [L d1 h1 c1]
    try {
      TP(tryStack, 27911, 71, callDepths);                         // #27746:179:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
      arr_v14 = [];                                     // #27752:85:107 [L h1]
      gl2_v4 = v10;                                     // #27754:46:150 [L h1]
      fn_v5 = v10.getParameter;                         // #27757:205:200 [L h1]
      v6 = v10[KP(27761)];                              // #27762:176:200 [L h1]
      v7 = fn_v5.call(gl2_v4, v6);                      // #27798:1:138 [L h1]
      arr_v14[0] = v7;                                  // #27824:158:26 [L h1]
      gl2_v15 = v10;                                    // #27829:147:150 [L h1]
      fn_v16 = v10.getParameter;                        // #27832:222:200 [L h1]
      v8 = v10[KP(27836)];                              // #27837:189:200 [L h1]
      v17 = fn_v16.call(gl2_v15, v8);                   // #27871:26:138 [L h1]
      v18 = 1; arr_v14[1] = v17;                        // #27897:147:26 [L h1]
      return arr_v14;                                   // #27902:151:245 [L h1]
    } catch (caught) {
      outside("L27914_216");                            // #27912:216:150 [-]  L27914_216 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    arr_v11 = [];                                       // #27721:230:53 #27726:221:107 [L d1 c1]
    v2 = null;                                          // #27728:93:233 [L d1 c1]
    v3 = 0; arr_v11[0] = null;                          // #27731:138:26 [L d1 c1]
    v12 = null;                                         // #27736:150:233 [L d1 c1]
    v13 = 1; arr_v11[1] = v12;                          // #27739:31:26 [L d1 c1]
    return arr_v11;                                     // #27744:243:245 [L d1 c1]
  }
}