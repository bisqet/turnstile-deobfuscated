function fn_now_cb_124528(win_v1 /* r70 */, v2 /* r227 */) { // entry L124528_230; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v3 /* r205 */, fn_v4 /* r204 */, v5 /* r202 */, v6 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 33
  //   Function: fn_v4 33
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v3 = v2;                                              // #124529:187:150 [L d11 h11 c11]
  fn_v4 = win_v1.clearTimeout;                          // #124532:95:53 #124542:215:200 [L d11 h11 c11]
  v5 = cell[18];                                        // #124547:166:236 [L d11 h11 c11]
  v6 = fn_v4.call(win_v1, v5);                          // #124550:159:138 [L d11 h11 c11]
  return v3;                                            // #124576:115:245 [L d11 h11 c11]
}