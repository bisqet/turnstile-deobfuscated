function fn_document_cb_167211(v1 /* r227 */) { // entry L167211_82; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r199 */, v4 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #167212:119:150 [L d1 h1 c1]
  v3 = cell[19];                                        // #167215:43:53 #167225:93:236 [L d1 h1 c1]
  v3.YmXV0 = v2;                                        // #167228:46:142 [L d1 h1 c1]
  r205 = cell[16]();                                    // #167237:10:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v4 = undefined;                                       // #167241:22:233 [L d1 h1 c1]
  return v4;                                            // #167244:206:245 [L d1 h1 c1]
}