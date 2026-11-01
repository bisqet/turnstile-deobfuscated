function fn_then_15795(v6 /* r88 */, v7 /* r227 */) { // entry L15795_63; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r204 */, arr_v3 /* r205 */, fn_v4 /* r204 */, fn_v5 /* r205 */, promise_v8 /* r202 */, fn_v9 /* r199 */, fn_v10 /* r204 */, promise_v11 /* r198 */, v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v3 192
  //   Function: fn_v4 192, fn_v5 192, fn_v9 192, fn_v10 192
  //   Promise: promise_v8 192, promise_v11 192
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v7;                                              // #15796:240:150 [L d64 h64 c64]
  v2 = v6;                                              // #15799:29:150 [L d64 h64 c64]
  NC(50);                                               // #15802:185:53 #15807:78:211 [L d64 h64 c64]
  cell[50] = v1;                                        // #15810:60:195 [L d64 h64 c64]
  arr_v3 = cell[22];                                    // #15813:28:53 #15818:126:236 [L d64 h64 c64]
  promise_v8 = arr_v3[v2];                              // #15821:224:7 [L d64 h64 c64]
  fn_v9 = promise_v8.then;                              // #15825:55:200 [L d64 h64 c64]
  fn_v4 = clos;                                         // #15830:194:216 [L d64 h64 c64]  closure creation (operands from the byte stream); then fn_v4 = its home register (H139 CLOS bind)
  fn_v5 = fn_v4;                                        // #15840:39:150 [L d64 h64 c64]
  fn_v10 = clos;                                        // #15843:242:216 [L d64 h64 c64]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  promise_v11 = fn_v9.call(promise_v8, fn_v5, fn_v10);  // #15853:187:138 [L d64 h64 c64]
  v12 = undefined;                                      // #15872:67:233 [L d64 h64 c64]
  return v12;                                           // #15875:135:245 [L d64 h64 c64]
}