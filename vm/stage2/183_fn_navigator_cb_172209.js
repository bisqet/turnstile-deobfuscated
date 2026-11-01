function fn_navigator_cb_172209(win_v1 /* r70 */, v2 /* r227 */) { // entry L172209_63; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 11 register webs used only inside this fn (no live-in, cross-call or table-made def; 11 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v3 /* r199 */, v4 /* r202 */, networkInformation_v5 /* r205 */, v6 /* r204 */, v7 /* r202 */, v8 /* r204 */, v9 /* r205 */, v10 /* r204 */, v11 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 18
  //   NetworkInformation: networkInformation_v5 18
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v3 = v2;                                              // #172210:240:150 [L d6 h6 c6]
  v4 = undefined;                                       // #172213:0:53 #172223:53:233 [L d6 h6 c6]
  networkInformation_v5 = cell[20];                     // #172226:85:233 #172229:172:236 [L d6 h6 c6]
  if (networkInformation_v5) {                          // #172232:75:160 [L d6 h6 c6]
    try {
      TP(tryStack, 172299, 78, callDepths);                        // #172248:147:194 [L d6 h6 c6]  try: pushes the catch arm of the enclosing try (TP)
      v7 = networkInformation_v5[v3];                   // #172254:225:7 [L d6 h6 c6]
      v8 = undefined;                                   // #172258:81:233 [L d6 h6 c6]
      if (v7 === v8) {                                  // #172261:217:161 [L d6 h6 c6]
        v9 = null;                                      // #172282:253:233 [L d2 h2 c2] +#172285:25:53
      } else {
        v9 = v7;                                        // #172269:133:53 #172274:83:150 [L d4 h4 c4] +#172277:151:53
      }
      return v9;                                        // #172290:238:245 [L d6 h6 c6]
    } catch (caught) {
      v10 = caught;                                       // #172300:131:150 [-] /* never executed in any replay */
      v11 = (win_v1)[KP(m172302k131)](v10);             // #172303:72:138 [-] /* never executed in any replay */
      return v11;                                       // #172322:184:245 [-] /* never executed in any replay */
    }
  } else {
    v6 = null;                                          // #172238:175:53 #172243:47:233 [-] /* never executed in any replay */
    return v6;                                          // #172246:195:245 [-] /* never executed in any replay */
  }
}