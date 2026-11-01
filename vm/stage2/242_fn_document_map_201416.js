function fn_document_map_201416(v4 /* r227 */) { // entry L201416_213; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r205 */, fn_v3 /* r205 */, arr_v5 /* r199 */, fn_v6 /* r198 */, fn_v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 45, fn_v6 45, fn_v7 45
  //   Array: arr_v5 45
  // H133 rewrites: 1 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v4;                                              // #201417:174:150 #201420:70:53 #201430:216:150 [L d15 h15 c15]
  v2 = ",";                                             // #201433:44:233 [L d15 h15 c15]
  arr_v5 = v1.split(",");                               // #201438:141:138 [L d15 h15 c15]
  fn_v6 = arr_v5.reduce;                                // #201456:112:200 [L d15 h15 c15]
  fn_v3 = clos;                                         // #201461:87:216 [L d15 h15 c15]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  fn_v7 = fn_v3;                                        // #201472:168:150 [L d15 h15 c15]
  v8 = 0;                                               // #201475:95:72 [L d15 h15 c15]
  v9 = fn_v6.call(arr_v5, fn_v7, v8);                   // #201478:180:138 [L d15 h15 c15]
  return v9;                                            // #201499:116:245 [L d15 h15 c15]
}