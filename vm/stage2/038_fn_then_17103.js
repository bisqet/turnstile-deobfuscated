function fn_then_17103(v15 /* r88 */, arr_v16 /* r227 */) { // entry L17103_231; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 21 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let arr_v1 /* r204 */, v2 /* r202 */, arr_v3 /* r205 */, v4 /* r205 */, v5 /* r199 */, v6 /* r198 */, v7 /* r205 */, v8 /* r202 */, fn_v9 /* r199 */, v10 /* r204 */;
  let v11 /* r205 */, promise_v12 /* r204 */, fn_v13 /* r199 */, fn_v14 /* r205 */, arr_v17 /* r198 */, promise_v18 /* r202 */, fn_v19 /* r199 */, fn_v20 /* r204 */, promise_v21 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v3 3, arr_v16 3, arr_v17 3
  //   Function: fn_v9 3, fn_v13 3, fn_v14 3, fn_v19 3, fn_v20 3
  //   Promise: promise_v12 3, promise_v18 3, promise_v21 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v1 = arr_v16;                                     // #17104:248:150 [L d1 h1 c1]
  v2 = v15;                                             // #17107:5:150 [L d1 h1 c1]
  NC(35);                                               // #17110:1:53 #17120:236:211 [L d1 h1 c1]
  arr_v3 = (arr_v1).sort();                             // #17123:77:138 [L d1 h1 c1]
  v4 = {};                                              // #17139:107:159 [L d1 h1 c1]
  v4.fzAb4 = arr_v1;                                    // #17141:132:142 [L d1 h1 c1]
  v5 = "kxzY1";                                         // #17150:40:233 [L d1 h1 c1]
  v6 = arr_v1.length;                                   // #17159:95:200 [L d1 h1 c1]
  v4.kxzY1 = v6;                                        // #17164:61:199 [L d1 h1 c1]
  v4.rIKdw5 = v2;                                       // #17168:142:142 [L d1 h1 c1]
  cell[35] = v4;                                        // #17178:124:195 [L d1 h1 c1]
  v7 = cell[1];                                         // #17181:247:236 [L d1 h1 c1]
  v8 = cell[1];                                         // #17184:200:150 [L d1 h1 c1]
  fn_v9 = cell[1].RkOO5;                                // #17187:127:200 [L d1 h1 c1]
  arr_v17 = arr_v1;                                     // #17196:48:150 [L d1 h1 c1]
  v10 = "|";                                            // #17199:36:233 [L d1 h1 c1]
  v11 = (arr_v17).join("|");                            // #17204:165:138 [L d1 h1 c1]
  promise_v12 = fn_v9.call(v8, v11);                    // #17221:98:138 [L d1 h1 c1]
  fn_v13 = promise_v12.then;                            // #17240:49:200 [L d1 h1 c1]
  fn_v14 = clos;                                        // #17245:84:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
  promise_v18 = fn_v13.call(promise_v12, fn_v14);       // #17255:21:138 [L d1 h1 c1]
  fn_v19 = promise_v18.catch;                           // #17273:216:200 [L d1 h1 c1]
  fn_v20 = clos;                                        // #17278:31:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
  promise_v21 = fn_v19.call(promise_v18, fn_v20);       // #17289:116:138 [L d1 h1 c1]
  return promise_v21;                                   // #17308:52:245 [L d1 h1 c1]
}