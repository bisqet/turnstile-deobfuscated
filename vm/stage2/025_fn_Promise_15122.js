function fn_Promise_15122(win_v3 /* r70 */, v4 /* r227 */) { // entry L15122_125; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, fn_v2 /* r205 */, fn_v5 /* r204 */, promise_v6 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 192, fn_v5 192
  //   Window: win_v3 192
  //   Promise: promise_v6 192
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v4;                                              // #15123:182:150 [L d64 h64 c64]
  NC(33);                                               // #15126:46:53 #15131:106:211 [L d64 h64 c64]
  cell[33] = v1;                                        // #15134:232:195 [L d64 h64 c64]
  fn_v2 = win_v3.Promise;                               // #15137:24:53 #15142:23:200 [L d64 h64 c64]
  fn_v5 = clos;                                         // #15147:34:216 [L d64 h64 c64]  closure creation (operands from the byte stream); then fn_v5 = its home register (H139 CLOS bind)
  promise_v6 = new fn_v2(fn_v5);                        // #15161:134:1 [L d64 h64 c64]
  return promise_v6;                                    // #15166:126:245 [L d64 h64 c64]
}