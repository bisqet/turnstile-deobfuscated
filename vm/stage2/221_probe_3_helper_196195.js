function probe_3_helper_196195(win_v5 /* r70 */) { // entry L196185_34; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, err_v4 /* r205 */, fn_v6 /* r204 */, fn_v7 /* r202 */, v8 /* r199 */, v9 /* r199 */, v10 /* r204 */, v11 /* r205 */;
  let v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v6 3, fn_v7 3
  //   Error: err_v4 3
  //   Window: win_v5 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  // #196186:234:53 #196196:64:233 [L d1 h1 c1]
  try {
    TP(tryStack, 196258, 226, callDepths);                         // #196199:169:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    fn_v1 = win_v5.String;                              // #196205:28:200 [L d1 h1 c1]
    fn_v6 = fn_v1;                                      // #196210:153:150 [L d1 h1 c1]
    fn_v7 = fn_v1.fromCodePoint;                        // #196213:76:200 [L d1 h1 c1]
    v8 = 1;                                             // #196218:115:72 [L d1 h1 c1]
    v2 = -(1);                                          // #196221:159:189 [L d1 h1 c1]
    v9 = fn_v7.call(fn_v6, v2);                         // #196224:244:138 [L d1 h1 c1]
    v3 = tryStack.pop();                                     // #196251:223:124 [-] /* never executed in any replay */
    v12 = null;                                         // #196254:243:53 #196274:52:233 [-] /* never executed in any replay */
    return v12;                                         // #196277:244:245 [-] /* never executed in any replay */
  } catch (caught) {
    err_v4 = caught;                                      // #196259:199:150 [L d1 h1 c1]
    v10 = caught.message;                                 // #196262:66:200 [L d1 h1 c1]
    v11 = v10.length;                                   // #196267:145:200 [L d1 h1 c1]
    return v10.length;                                  // #196272:29:245 [L d1 h1 c1]
  }
}