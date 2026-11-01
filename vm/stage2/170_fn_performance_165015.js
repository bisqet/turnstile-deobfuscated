function fn_performance_165015(win_v1 /* r70 */) { // entry L165005_243; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let perf_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, v5 /* r198 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 3
  //   Performance: perf_v2 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  // #165006:183:53 #165016:51:233 [L d1 h1 c1]
  try {
    TP(tryStack, 165054, 170, callDepths);                         // #165019:144:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    perf_v2 = win_v1.performance;                       // #165025:39:200 [L d1 h1 c1]
    v3 = perf_v2.now();                                 // #165030:92:138 [L d1 h1 c1]
    return v3;                                          // #165045:124:245 [L d1 h1 c1]
  } catch (caught) {
    v4 = caught;                                          // #165055:111:150 [-] /* never executed in any replay */
    v5 = cell[48];                                      // #165058:222:236 [-] /* never executed in any replay */
    return v5;                                          // #165061:118:245 [-] /* never executed in any replay */
  }
}