function fn_performance_cb_142218() { // entry L142218_184; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let win_v1 /* r204 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, elIFrame_v5 /* r202 */, v6 /* r202 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 3
  //   HTMLIFrameElement: elIFrame_v5 3
  // H133 rewrites: 1 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  // #142219:168:53 #142229:48:233 [L d1 h1 c1]
  try {
    TP(tryStack, 142289, 9, callDepths);                           // #142232:217:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    elIFrame_v5 = cell[31];                             // #142238:32:236 [L d1 h1 c1]
    win_v1 = cell[31].contentWindow;                    // #142241:119:200 [L d1 h1 c1]
    v6 = (win_v1).eval("this");                         // #142246:15:233 #142251:164:138 [L d1 h1 c1]
    v2 = "NuQml3";                                      // #142268:200:233 [-] /* never executed in any replay */
    r204 = cell[56](v2);                                // #142278:21:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
    v3 = tryStack.pop();                                     // #142282:188:124 [-] +#142285:156:53 /* never executed in any replay */
  } catch (caught) {
    v4 = "PuLjv3";                                      // #142290:18:150 #142293:254:233 [L d1 h1 c1]
    r204 = cell[56](v4);                                // #142303:243:22 [L d1 h1 c1] +#142307:183:53  VM call: pushes a frame, the callee body returns into r204
  }
  v7 = undefined;                                       // #142312:150:233 [L d1 h1 c1]
  return v7;                                            // #142315:78:245 [L d1 h1 c1]
}