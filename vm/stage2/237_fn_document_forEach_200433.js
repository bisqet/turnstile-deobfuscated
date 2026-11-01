function fn_document_forEach_200433(sVGTextElement_v3 /* r227 */) { // entry L200433_218; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let sVGTextElement_v1 /* r205 */, sVGGElement_v2 /* r202 */, sVGGElement_v4 /* r204 */, sVGTextElement_v5 /* r202 */, v6 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   SVGTextElement: sVGTextElement_v1 57, sVGTextElement_v3 57, sVGTextElement_v5 57
  //   SVGGElement: sVGGElement_v2 57, sVGGElement_v4 57
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  sVGTextElement_v1 = sVGTextElement_v3;                // #200434:223:150 [L d19 h19 c19]
  sVGGElement_v2 = cell[48];                            // #200437:243:53 #200447:79:236 [L d19 h19 c19]
  sVGGElement_v4 = cell[48];                            // #200450:192:150 [L d19 h19 c19]
  sVGTextElement_v5 = sVGGElement_v4.appendChild(sVGTextElement_v1);  // #200453:209:138 [L d19 h19 c19]
  v6 = undefined;                                       // #200477:129:233 [L d19 h19 c19]
  return v6;                                            // #200480:77:245 [L d19 h19 c19]
}