function fn_document_reduce_201617(win_v3 /* r70 */, v4 /* r88 */, v5 /* r227 */) { // entry L201617_177; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v6 /* r204 */, sVGRect_v7 /* r199 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 12
  //   SVGRect: sVGRect_v7 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v6 = v5;                                              // #201618:26:150 [L d4 h4 c4]
  v1 = v4;                                              // #201621:31:150 [L d4 h4 c4]
  sVGRect_v7 = cell[38];                                // #201624:51:53 #201634:204:236 [L d4 h4 c4]
  v8 = sVGRect_v7[v1];                                  // #201637:118:7 [L d4 h4 c4]
  v2 = win_v3.isNaN(v8);                                // #201641:47:138 [L d4 h4 c4]
  if (v2) {                                             // #201659:130:160 [L d4 h4 c4]
    v9 = v6;                                            // #201678:179:150 [-] +#201681:119:53 /* never executed in any replay */
  } else {
    v9 = v6 + v8;                                       // #201665:202:53 #201670:22:180 [L d4 h4 c4]
  }
  return v9;                                            // #201686:113:245 [L d4 h4 c4]
}