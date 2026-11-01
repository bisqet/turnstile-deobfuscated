function fn_then_cb_15694(v1 /* r227 */) { // entry L15694_68; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 4 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r205 */, v4 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #15695:33:150 [L d64 h64 c64]
  if (v2) {                                             // #15698:173:53 #15708:157:160 [L d64 h64 c64]
    v3 = cell[50];                                      // #15728:195:236 [L d5 h5 c5]
    r204 = cell[46](v3);                                // #15731:228:22 [L d5 h5 c5] +#15735:36:53  VM call: pushes a frame, the callee body returns into r204
  } else {
    r204 = cell[47]();                                  // #15714:57:53 #15719:187:201 [L d59 h59 c59] +#15723:95:53  VM call: pushes a frame, the callee body returns into r204
  }
  v4 = undefined;                                       // #15740:250:233 [L d64 h64 c64]
  return v4;                                            // #15743:34:245 [L d64 h64 c64]
}