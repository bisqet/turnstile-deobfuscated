function fn_performance_76450(win_v1 /* r70 */) { // entry L76440_5; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let perf_v2 /* r204 */, v3 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 1104
  //   Performance: perf_v2 1104
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  // #76441:1:53 #76451:102:233 [L d368 h368 c368]
  try {
    TP(tryStack, 76489, 113, callDepths);                          // #76454:183:194 [L d368 h368 c368]  try: pushes the catch arm of the enclosing try (TP)
    perf_v2 = win_v1.performance;                       // #76460:114:200 [L d368 h368 c368]
    v3 = perf_v2.now();                                 // #76465:59:138 [L d368 h368 c368]
    return v3;                                          // #76480:159:245 [L d368 h368 c368]
  } catch (caught) {
    outside("L76492_218");                              // #76490:218:150 [-]  L76492_218 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}