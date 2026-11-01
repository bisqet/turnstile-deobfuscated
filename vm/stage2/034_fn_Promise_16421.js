function fn_Promise_16421(win_v3 /* r70 */, arr_v4 /* r227 */) { // entry L16421_165; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let arr_v1 /* r205 */, fn_v2 /* r205 */, fn_v5 /* r204 */, promise_v6 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v4 3
  //   Function: fn_v2 3, fn_v5 3
  //   Window: win_v3 3
  //   Promise: promise_v6 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v1 = arr_v4;                                      // #16422:62:150 [L d1 h1 c1]
  NC(33);                                               // #16425:150:53 #16430:232:211 [L d1 h1 c1]
  cell[33] = arr_v1;                                    // #16433:238:195 [L d1 h1 c1]
  fn_v2 = win_v3.Promise;                               // #16436:134:53 #16441:208:200 [L d1 h1 c1]
  fn_v5 = clos;                                         // #16446:55:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v5 = its home register (H139 CLOS bind)
  promise_v6 = new fn_v2(fn_v5);                        // #16461:135:1 [L d1 h1 c1]
  return promise_v6;                                    // #16466:187:245 [L d1 h1 c1]
}