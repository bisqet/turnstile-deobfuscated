function fn_document_map_199350(win_v2 /* r70 */, arr_v3 /* r227 */) { // entry L199350_237; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, arr_v4 /* r202 */, fn_v5 /* r199 */, v6 /* r204 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 12, fn_v5 12
  //   Window: win_v2 12
  //   Array: arr_v3 12, arr_v4 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v4 = arr_v3;                                      // #199351:102:150 [L d4 h4 c4]
  fn_v1 = win_v2.String;                                // #199354:30:53 #199364:139:200 [L d4 h4 c4]
  fn_v5 = fn_v1.fromCodePoint;                          // #199369:246:200 [L d4 h4 c4]
  v6 = null;                                            // #199374:82:233 [L d4 h4 c4]
  v7 = (fn_v5).apply(v6, arr_v4);                       // #199377:155:138 [L d4 h4 c4]
  return v7;                                            // #199396:127:245 [L d4 h4 c4]
}