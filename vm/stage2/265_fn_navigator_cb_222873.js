function fn_navigator_cb_222873(keyboardLayoutMap_v3 /* r227 */) { // entry L222873_216; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let keyboardLayoutMap_v1 /* r205 */, fn_v2 /* r205 */, v4 /* r204 */, keyboardLayoutMap_v5 /* r202 */, fn_v6 /* r199 */, v7 /* r198 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   KeyboardLayoutMap: keyboardLayoutMap_v1 3, keyboardLayoutMap_v3 3, keyboardLayoutMap_v5 3
  //   Function: fn_v2 3, fn_v6 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  keyboardLayoutMap_v1 = keyboardLayoutMap_v3;          // #222874:101:150 [L d1 h1 c1]
  NC(23);                                               // #222877:225:53 #222887:190:211 [L d1 h1 c1]
  v4 = {};                                              // #222890:88:159 [L d1 h1 c1]
  cell[23] = v4;                                        // #222892:158:195 [L d1 h1 c1]
  keyboardLayoutMap_v5 = keyboardLayoutMap_v1;          // #222895:147:150 [L d1 h1 c1]
  fn_v6 = keyboardLayoutMap_v1.forEach;                 // #222898:222:200 [L d1 h1 c1]
  fn_v2 = clos;                                         // #222903:141:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v2 = its home register (H139 CLOS bind)
  v7 = fn_v6.call(keyboardLayoutMap_v5, fn_v2);         // #222914:170:138 [L d1 h1 c1]
  v8 = {};                                              // #222935:148:159 [L d1 h1 c1]
  v8.akeLU4 = v4;                                       // #222937:73:142 [L d1 h1 c1]
  return v8;                                            // #222947:245:245 [L d1 h1 c1]
}