function fn_document_200199(v1 /* r227 */, win_v13 /* r70 */) { // entry L200199_7; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 18 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r202 */, doc_v3 /* r198 */, v4 /* r205 */, v5 /* r199 */, style_v6 /* r205 */, sVGTextElement_v7 /* r199 */, v8 /* r205 */, v9 /* r202 */, v10 /* r202 */, v11 /* r205 */;
  let arr_v12 /* r205 */, sVGTextElement_v14 /* r204 */, v15 /* r198 */, arr_v16 /* r199 */, v17 /* r202 */, v18 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v3 45
  //   CSSStyleDeclaration: style_v6 45
  //   SVGTextElement: sVGTextElement_v7 45, sVGTextElement_v14 45
  //   Array: arr_v12 45, arr_v16 45
  //   Window: win_v13 45
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 3 constants propagated (3 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #200200:152:150 [L d15 h15 c15]
  doc_v3 = win_v13.document;                            // #200203:8:53 #200213:175:200 #200218:160:150 [L d15 h15 c15]
  v4 = "http://www.w3.org/2000/svg";                    // #200221:212:233 [L d15 h15 c15]
  v5 = "text";                                          // #200226:56:233 [L d15 h15 c15]
  sVGTextElement_v14 = doc_v3.createElementNS("http://www.w3.org/2000/svg", ("text"));  // #200234:105:138 [L d15 h15 c15]
  r205 = cell[56](sVGTextElement_v14);                  // #200263:114:22 [L d15 h15 c15]  VM call: pushes a frame, the callee body returns into r205
  style_v6 = sVGTextElement_v14.style;                  // #200267:1:200 [L d15 h15 c15]
  style_v6.font = v2;                                   // #200272:66:142 [L d15 h15 c15]
  sVGTextElement_v7 = sVGTextElement_v14;               // #200277:167:150 [L d15 h15 c15]
  v8 = "class";                                         // #200280:127:233 [L d15 h15 c15]
  v9 = "JglnG4";                                        // #200289:247:233 [L d15 h15 c15]
  v15 = (sVGTextElement_v7).setAttribute("class", "JglnG4");  // #200299:236:138 [L d15 h15 c15]
  v10 = "textContent";                                  // #200325:240:233 [L d15 h15 c15]
  v11 = cell[57];                                       // #200330:155:236 [L d15 h15 c15]
  sVGTextElement_v14.textContent = cell[57];            // #200333:137:199 [L d15 h15 c15]
  arr_v16 = cell[54];                                   // #200337:16:236 [L d15 h15 c15]
  arr_v12 = cell[54];                                   // #200340:189:150 [L d15 h15 c15]
  v17 = (arr_v12).push(sVGTextElement_v14);             // #200343:26:138 [L d15 h15 c15]
  v18 = undefined;                                      // #200360:230:233 [L d15 h15 c15]
  return v18;                                           // #200363:94:245 [L d15 h15 c15]
}