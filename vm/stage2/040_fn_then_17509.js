function fn_then_17509(arr_v6 /* r227 */) { // entry L17509_245; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 11 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let arr_v1 /* r204 */, v2 /* r199 */, v3 /* r202 */, arr_v4 /* r205 */, v5 /* r204 */, fn_v7 /* r195 */, promise_v8 /* r202 */, fn_v9 /* r199 */, fn_v10 /* r204 */, promise_v11 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v4 3, arr_v6 3
  //   Function: fn_v7 3, fn_v9 3, fn_v10 3
  //   Promise: promise_v8 3, promise_v11 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 3 constants propagated (3 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v1 = arr_v6;                                      // #17510:78:150 [L d1 h1 c1]
  NC(33);                                               // #17513:102:53 #17518:243:211 [L d1 h1 c1]
  cell[33] = arr_v1;                                    // #17521:141:195 [L d1 h1 c1]
  fn_v7 = cell[31];                                     // #17524:105:53 #17529:90:236 [L d1 h1 c1]
  v2 = undefined;                                       // #17532:38:233 [L d1 h1 c1]
  v3 = 0;                                               // #17535:101:72 [L d1 h1 c1]
  arr_v4 = arr_v1[0];                                   // #17538:235:7 [L d1 h1 c1]
  v5 = "wOIt9";                                         // #17542:179:233 [L d1 h1 c1]
  promise_v8 = MC(undefined, fn_v7, arr_v4, "wOIt9");   // #17551:222:168 [L d1 h1 c1]
  fn_v9 = promise_v8.then;                              // #17557:189:200 [L d1 h1 c1]
  fn_v10 = clos;                                        // #17562:176:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  promise_v11 = fn_v9.call(promise_v8, fn_v10);         // #17575:1:138 [L d1 h1 c1]
  return promise_v11;                                   // #17593:205:245 [L d1 h1 c1]
}