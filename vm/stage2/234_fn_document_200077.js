function fn_document_200077(v1 /* r227 */, win_v6 /* r70 */) { // entry L200077_215; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let doc_v2 /* r205 */, doc_v3 /* r198 */, v4 /* r202 */, v5 /* r199 */, v7 /* r204 */, sVGTextElement_v8 /* r205 */, sVGTextElement_v9 /* r198 */, v10 /* r202 */, v11 /* r199 */, v12 /* r196 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v2 12, doc_v3 12
  //   Window: win_v6 12
  //   SVGTextElement: sVGTextElement_v8 12, sVGTextElement_v9 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v7 = v1;                                              // #200078:40:150 [L d4 h4 c4]
  doc_v2 = win_v6.document;                             // #200081:88:53 #200091:248:200 [L d4 h4 c4]
  doc_v3 = doc_v2;                                      // #200096:5:150 [L d4 h4 c4]
  v4 = "http://www.w3.org/2000/svg";                    // #200099:229:233 [L d4 h4 c4]
  v5 = "text";                                          // #200104:69:233 [L d4 h4 c4]
  sVGTextElement_v8 = doc_v3.createElementNS("http://www.w3.org/2000/svg", ("text"));  // #200112:130:138 [L d4 h4 c4]
  r202 = cell[56](sVGTextElement_v8);                   // #200141:103:22 [L d4 h4 c4]  VM call: pushes a frame, the callee body returns into r202
  sVGTextElement_v9 = sVGTextElement_v8;                // #200145:120:150 [L d4 h4 c4]
  v10 = "class";                                        // #200148:76:233 [L d4 h4 c4]
  v11 = "JglnG4";                                       // #200157:208:233 [L d4 h4 c4]
  v12 = sVGTextElement_v9.setAttribute(("class"), ("JglnG4"));  // #200167:161:138 [L d4 h4 c4]
  sVGTextElement_v8.textContent = v7;                   // #200193:98:142 [L d4 h4 c4]
  return sVGTextElement_v8;                             // #200198:234:245 [L d4 h4 c4]
}