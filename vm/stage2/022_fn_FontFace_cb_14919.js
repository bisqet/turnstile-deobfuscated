function fn_FontFace_cb_14919() { // entry L14919_221; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 2 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = true;                                            // #14920:121:53 #14930:179:233 [L d5 h5 c5]
  r204 = cell[34](v1);                                  // #14933:20:22 [L d5 h5 c5]  VM call: pushes a frame, the callee body returns into r204
  v2 = undefined;                                       // #14937:120:233 [L d5 h5 c5]
  return v2;                                            // #14940:40:245 [L d5 h5 c5]
}