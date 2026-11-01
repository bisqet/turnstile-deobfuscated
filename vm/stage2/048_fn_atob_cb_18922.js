function fn_atob_cb_18922(v1 /* r88 */, v2 /* r227 */, v3 /* r243 */, v4 /* r248 */) { // entry L18922_74; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 23 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v5 /* r204 */, v6 /* r205 */, v7 /* r205 */, v8 /* r205 */, v9 /* r195 */, v10 /* r199 */, v11 /* r198 */, fn_v12 /* r193 */, v13 /* r196 */, v14 /* r202 */;
  let elSpan_v15 /* r204 */, v16 /* r205 */, style_v17 /* r205 */, v18 /* r202 */, v19 /* r196 */, v20 /* r202 */, v21 /* r204 */, v22 /* r199 */, v23 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v12 18
  //   HTMLSpanElement: elSpan_v15 18
  //   CSSStyleDeclaration: style_v17 18
  // H142: 2 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 3 webs kept as registers (retOut 3)
  v9 = v2;                                              // #18923:143:150 [L d6 h6 c6]
  v5 = v1;                                              // #18926:0:150 [L d6 h6 c6]
  v10 = v4;                                             // #18929:237:150 [L d6 h6 c6]
  v11 = v3;                                             // #18932:102:150 [L d6 h6 c6]
  fn_v12 = cell[57];                                    // #18935:30:53 #18945:105:233 #18948:112:236 [L d6 h6 c6]
  v13 = undefined;                                      // #18951:100:233 [L d6 h6 c6]
  v6 = "span";                                          // #18954:136:233 [L d6 h6 c6]
  v14 = cell[59](v5, v11);                              // #18962:65:242 [L d6 h6 c6]  VM call: pushes a frame, the callee body returns into r202; then v14 = r202 (H142 CALL bind)
  elSpan_v15 = MC(v13, fn_v12, v6, v14);                // #18967:180:168 [L d6 h6 c6]
  if (elSpan_v15) {                                     // #18973:51:160 [L d6 h6 c6]
    try {
      TP(tryStack, 19250, 57, callDepths);                         // #18989:10:194 [L d6 h6 c6]  try: pushes the catch arm of the enclosing try (TP)
      elSpan_v15.textContent = v9;                      // #18995:103:142 [L d6 h6 c6]
      style_v17 = elSpan_v15.style;                     // #19000:98:200 [L d6 h6 c6]
      v18 = "cssText";                                  // #19005:14:233 [L d6 h6 c6]
      v19 = KP(19009);                                  // #19010:10:233 [L d6 h6 c6]
      style_v17[v18] = v19;                             // #19237:252:199 [L d6 h6 c6]
      return elSpan_v15;                                // #19241:156:245 [L d6 h6 c6]
    } catch (caught) {
      v7 = caught;                                        // #19251:130:150 [-] /* never executed in any replay */
      v20 = cell[56];                                   // #19254:101:236 [-] /* never executed in any replay */
      v21 = undefined;                                  // #19257:197:233 [-] /* never executed in any replay */
      v8 = cell[59](v10, v11);                          // #19260:202:242 [-]  VM call: pushes a frame, the callee body returns into r205; then v8 = r205 (H142 CALL bind) /* never executed in any replay */
      v22 = MC(v21, v20, v8);                           // #19265:123:114 [-] /* never executed in any replay */
      v23 = null;                                       // #19270:3:233 [-] /* never executed in any replay */
      return v23;                                       // #19273:71:245 [-] /* never executed in any replay */
    }
  } else {
    v16 = null;                                         // #18979:247:53 #18984:238:233 [-] /* never executed in any replay */
    return v16;                                         // #18987:70:245 [-] /* never executed in any replay */
  }
}