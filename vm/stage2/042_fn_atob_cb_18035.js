function fn_atob_cb_18035(v9 /* r214 */) { // entry L18035_219; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 16 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, elDiv_v2 /* r205 */, shadowRoot_v3 /* r204 */, shadowRoot_v4 /* r199 */, fn_v5 /* r202 */, shadowRoot_v6 /* r204 */, v7 /* r205 */, v8 /* r205 */, shadowRoot_v10 /* r202 */, v11 /* r204 */;
  let v12 /* r199 */, v13 /* r202 */, elDiv_v14 /* r202 */, arr_v15 /* r204 */, v16 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDivElement: elDiv_v2 3, elDiv_v14 3
  //   ShadowRoot: shadowRoot_v3 3, shadowRoot_v4 3, shadowRoot_v6 3, shadowRoot_v10 3
  //   Function: fn_v5 3
  //   Array: arr_v15 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #18036:255:53 #18046:43:233 [L d1 h1 c1]
  r204 = cell[53]();                                    // #18049:83:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204
  elDiv_v2 = cell[35];                                  // #18053:50:236 [L d1 h1 c1]
  if (elDiv_v2) {                                       // #18056:57:160 [L d1 h1 c1]
    shadowRoot_v3 = elDiv_v2.parentNode;                // #18075:238:200 [L d1 h1 c1]
    shadowRoot_v10 = shadowRoot_v3;                     // #18080:163:150 [L d1 h1 c1] +#18083:167:53
  } else {
    shadowRoot_v10 = elDiv_v2;                          // #18062:101:53 #18067:153:150 [-] +#18070:69:53 /* never executed in any replay */
  }
  if (shadowRoot_v10) {                                 // #18088:75:160 [L d1 h1 c1]
    shadowRoot_v4 = elDiv_v2.parentNode;                // #18107:254:200 [L d1 h1 c1]
    fn_v5 = shadowRoot_v4.removeChild;                  // #18112:93:200 [L d1 h1 c1]
    v12 = typeof fn_v5;                                 // #18117:85:193 [L d1 h1 c1]
    v13 = v12 === v9;                                   // #18120:237:65 [L d1 h1 c1]
    v11 = v13;                                          // #18124:102:150 [L d1 h1 c1] +#18127:30:53
  } else {
    v11 = shadowRoot_v10;                               // #18094:175:53 #18099:93:150 [-] +#18102:249:53 /* never executed in any replay */
  }
  if (v11) {                                            // #18132:228:160 [L d1 h1 c1]
    try {
      TP(tryStack, 18185, 212, callDepths);                        // #18143:26:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      shadowRoot_v6 = elDiv_v2.parentNode;              // #18149:9:200 [L d1 h1 c1]
      elDiv_v14 = (shadowRoot_v6).removeChild(elDiv_v2);  // #18154:54:138 [L d1 h1 c1]
      arr_v15 = tryStack.pop();                              // #18178:153:124 [L d1 h1 c1] +#18181:69:53
    } catch (caught) {
      v7 = caught;                                        // #18186:113:150 [-] /* never executed in any replay */
      v8 = KP(m18188k113);                              // #18189:161:233 [-] /* never executed in any replay */
      r204 = cell[52](v8);                              // #18199:202:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
      outside("L18202_202");  // L18202_202 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
    }
  } else {
    // #18138:36:53 [-] /* never executed in any replay */
  }
  v16 = undefined;                                      // #18208:215:233 [L d1 h1 c1]
  return v16;                                           // #18211:203:245 [L d1 h1 c1]
}