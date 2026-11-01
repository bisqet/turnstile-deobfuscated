function fn_document_166377(win_v6 /* r70 */, v7 /* r227 */) { // entry L166377_218; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 13 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, doc_v2 /* r205 */, fn_v3 /* r205 */, v4 /* r202 */, treeWalker_v5 /* r205 */, doc_v8 /* r198 */, fn_v9 /* r196 */, fn_v10 /* r199 */, v11 /* r204 */, v12 /* r202 */;
  let v13 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v2 6, doc_v8 6
  //   Function: fn_v3 6, fn_v9 6, fn_v10 6
  //   TreeWalker: treeWalker_v5 6
  //   Window: win_v6 6
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v7;                                              // #166378:223:150 [L d2 h2 c2]
  doc_v2 = win_v6.document;                             // #166381:243:53 #166391:147:200 [L d2 h2 c2]
  doc_v8 = doc_v2;                                      // #166396:244:150 [L d2 h2 c2]
  fn_v9 = doc_v2.createTreeWalker;                      // #166399:251:200 [L d2 h2 c2]
  fn_v3 = win_v6.NodeFilter;                            // #166419:166:200 [L d2 h2 c2]
  v4 = fn_v3.SHOW_ELEMENT;                              // #166433:101:200 [L d2 h2 c2]
  fn_v10 = clos;                                        // #166449:184:216 [L d2 h2 c2]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  treeWalker_v5 = fn_v9.call(doc_v8, v1, v4, fn_v10);   // #166461:233:138 [L d2 h2 c2]
  v11 = treeWalker_v5.nextNode();                       // #166493:150:138 [L d2 h2 c2]
  v12 = null;                                           // #166513:114:233 [L d2 h2 c2]
  v13 = !(v11 === (null));                              // #166516:214:65 #166520:39:130 [L d2 h2 c2]
  return v13;                                           // #166523:219:245 [L d2 h2 c2]
}