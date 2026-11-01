function fn_document_forEach_201247(win_v6 /* r70 */, sVGTextElement_v7 /* r227 */) { // entry L201247_143; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let sVGTextElement_v1 /* r205 */, fn_v2 /* r202 */, v3 /* r204 */, v4 /* r205 */, set_v5 /* r202 */, set_v8 /* r204 */, set_v9 /* r202 */, v10 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   SVGTextElement: sVGTextElement_v1 57, sVGTextElement_v7 57
  //   Function: fn_v2 57
  //   Set: set_v5 57, set_v8 57, set_v9 57
  //   Window: win_v6 57
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  sVGTextElement_v1 = sVGTextElement_v7;                // #201248:0:150 [L d19 h19 c19]
  fn_v2 = win_v6.String;                                // #201251:208:53 #201261:160:200 [L d19 h19 c19]
  v3 = (sVGTextElement_v1).getComputedTextLength();     // #201266:49:138 [L d19 h19 c19]
  v4 = fn_v2.call(win_v6, v3);                          // #201299:190:138 [L d19 h19 c19]
  set_v5 = cell[32];                                    // #201319:177:236 [L d19 h19 c19]
  set_v8 = cell[32];                                    // #201322:26:150 [L d19 h19 c19]
  set_v9 = set_v8.add(v4);                              // #201325:67:138 [L d19 h19 c19]
  v10 = undefined;                                      // #201341:171:233 [L d19 h19 c19]
  return v10;                                           // #201344:79:245 [L d19 h19 c19]
}