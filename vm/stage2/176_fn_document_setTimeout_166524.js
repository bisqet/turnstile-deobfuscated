function fn_document_setTimeout_166524() { // entry L166524_23; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 2 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r204 */, v2 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[63];                                        // #166525:75:53 #166535:59:236 [L d1 h1 c1]
  r205 = cell[70](v1);                                  // #166538:124:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v2 = undefined;                                       // #166542:64:233 [L d1 h1 c1]
  return v2;                                            // #166545:208:245 [L d1 h1 c1]
}