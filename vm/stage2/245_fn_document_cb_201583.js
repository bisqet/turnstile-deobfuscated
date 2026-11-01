function fn_document_cb_201583(sVGTextElement_v3 /* r227 */) { // entry L201583_217; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let sVGTextElement_v1 /* r205 */, v2 /* r202 */, arr_v4 /* r199 */, v5 /* r204 */, v6 /* r202 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   SVGTextElement: sVGTextElement_v1 3, sVGTextElement_v3 3
  //   Array: arr_v4 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  sVGTextElement_v1 = sVGTextElement_v3;                // #201584:162:150 [L d1 h1 c1]
  arr_v4 = cell[21];                                    // #201587:106:53 #201597:144:236 [L d1 h1 c1]
  v2 = 0;                                               // #201600:167:72 [L d1 h1 c1]
  v5 = arr_v4[0];                                       // #201603:165:7 [L d1 h1 c1]
  v6 = sVGTextElement_v1.innerHTML;                     // #201607:40:200 [L d1 h1 c1]
  v7 = v5 === v6;                                       // #201612:52:65 [L d1 h1 c1]
  return v7;                                            // #201616:244:245 [L d1 h1 c1]
}