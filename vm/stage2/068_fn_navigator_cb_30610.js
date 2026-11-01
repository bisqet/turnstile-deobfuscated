function fn_navigator_cb_30610(buf_v3 /* r227 */) { // entry L30610_148; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, dec_v2 /* r205 */, buf_v4 /* r198 */, v5 /* r202 */, fn_v6 /* r199 */, dec_v7 /* r196 */, v8 /* r204 */, promise_v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   TextDecoder: dec_v2 9, dec_v7 9
  //   ArrayBuffer: buf_v3 9, buf_v4 9
  //   Function: fn_v6 9
  //   Promise: promise_v9 9
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  buf_v4 = buf_v3;                                      // #30611:49:150 [L d4 h5]
  v1 = cell[1];                                         // #30614:125:53 #30624:176:236 [L d4 h5]
  v5 = cell[1];                                         // #30627:221:150 [L d4 h5]
  fn_v6 = cell[1].RkOO5;                                // #30630:128:200 [L d4 h5]
  dec_v2 = cell[60];                                    // #30639:235:236 [L d4 h5]
  dec_v7 = cell[60];                                    // #30642:236:150 [L d4 h5]
  v8 = dec_v7.decode(buf_v4);                           // #30645:77:138 [L d4 h5]
  promise_v9 = fn_v6.call(v5, v8);                      // #30664:106:138 [L d4 h5]
  return promise_v9;                                    // #30683:210:245 [L d4 h5]
}