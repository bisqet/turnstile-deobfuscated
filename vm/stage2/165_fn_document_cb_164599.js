function fn_document_cb_164599() { // entry L164599_117; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 2 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = true;                                            // #164600:177:53 #164610:235:233 [L d1 h1 c1]
  cell[25] = true;                                      // #164613:165:195 [L d1 h1 c1]
  v2 = "Eiqe1";                                         // #164616:5:233 [L d1 h1 c1]
  return "Eiqe1";                                       // #164625:193:245 [L d1 h1 c1]
}