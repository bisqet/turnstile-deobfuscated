function fn_document_forEach_200364(v4 /* r227 */) { // entry L200364_253; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, arr_v2 /* r205 */, fn_v3 /* r205 */, arr_v5 /* r204 */, fn_v6 /* r202 */, v7 /* r199 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v2 45, arr_v5 45
  //   Function: fn_v3 45, fn_v6 45
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v4;                                              // #200365:54:150 [L d15 h15 c15]
  NC(57);                                               // #200368:174:53 #200373:15:211 [L d15 h15 c15]
  cell[57] = v1;                                        // #200376:57:195 [L d15 h15 c15]
  arr_v2 = cell[23];                                    // #200379:101:53 #200384:50:236 [L d15 h15 c15]
  arr_v5 = cell[23];                                    // #200387:215:150 [L d15 h15 c15]
  fn_v6 = cell[23].forEach;                             // #200390:18:200 [L d15 h15 c15]
  fn_v3 = clos;                                         // #200395:241:216 [L d15 h15 c15]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  v7 = fn_v6.call(arr_v5, fn_v3);                       // #200408:126:138 [L d15 h15 c15]
  v8 = undefined;                                       // #200429:186:233 [L d15 h15 c15]
  return v8;                                            // #200432:226:245 [L d15 h15 c15]
}