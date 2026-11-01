function fn_document_cb_199899(sVGTextElement_v17 /* r227 */) { // entry L199899_233; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 23 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let sVGTextElement_v1 /* r204 */, sVGTextElement_v2 /* r202 */, fn_v3 /* r199 */, v4 /* r205 */, v5 /* r196 */, sVGTextElement_v6 /* r202 */, v7 /* r205 */, style_v8 /* r205 */, v9 /* r202 */, v10 /* r196 */;
  let style_v11 /* r205 */, v12 /* r202 */, v13 /* r196 */, style_v14 /* r205 */, v15 /* r196 */, style_v16 /* r205 */, v18 /* r198 */, v19 /* r199 */, v20 /* r202 */, v21 /* r204 */;
  let v22 /* r196 */, v23 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   SVGTextElement: sVGTextElement_v1 57, sVGTextElement_v2 57, sVGTextElement_v6 57, sVGTextElement_v17 57
  //   Function: fn_v3 57
  //   CSSStyleDeclaration: style_v8 57, style_v11 57, style_v14 57, style_v16 57
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  sVGTextElement_v1 = sVGTextElement_v17;               // #199900:114:150 [L d19 h19 c19]
  sVGTextElement_v2 = sVGTextElement_v1;                // #199903:250:53 #199913:152:150 [L d19 h19 c19]
  fn_v3 = sVGTextElement_v1.setAttribute;               // #199916:15:200 [L d19 h19 c19]
  v4 = "x";                                             // #199921:71:233 [L d19 h19 c19]
  v5 = cell[49];                                        // #199926:86:236 [L d19 h19 c19]
  v18 = fn_v3.call(sVGTextElement_v2, "x", v5);         // #199929:143:138 [L d19 h19 c19]
  sVGTextElement_v6 = sVGTextElement_v1;                // #199956:0:150 [L d19 h19 c19]
  v7 = "y";                                             // #199959:180:233 [L d19 h19 c19]
  v19 = (sVGTextElement_v6).setAttribute("y", v5);      // #199964:245:138 [L d19 h19 c19]
  style_v8 = sVGTextElement_v1.style;                   // #199990:56:200 [L d19 h19 c19]
  v9 = "fontSize";                                      // #199995:12:233 [L d19 h19 c19]
  v10 = cell[50];                                       // #200007:71:236 [L d19 h19 c19]
  style_v8.fontSize = cell[50];                         // #200010:133:199 [L d19 h19 c19]
  style_v11 = sVGTextElement_v1.style;                  // #200014:136:200 [L d19 h19 c19]
  v12 = "height";                                       // #200019:28:233 [L d19 h19 c19]
  v13 = cell[51];                                       // #200024:23:236 [L d19 h19 c19]
  style_v11.height = cell[51];                          // #200027:21:199 [L d19 h19 c19]
  style_v14 = sVGTextElement_v1.style;                  // #200031:216:200 [L d19 h19 c19]
  v20 = "position";                                     // #200036:44:233 [L d19 h19 c19]
  v15 = cell[52];                                       // #200041:231:236 [L d19 h19 c19]
  style_v14.position = cell[52];                        // #200044:165:199 [L d19 h19 c19]
  style_v16 = sVGTextElement_v1.style;                  // #200048:40:200 [L d19 h19 c19]
  v21 = "transform";                                    // #200053:60:233 [L d19 h19 c19]
  v22 = cell[53];                                       // #200066:183:236 [L d19 h19 c19]
  style_v16.transform = cell[53];                       // #200069:53:199 [L d19 h19 c19]
  v23 = undefined;                                      // #200073:85:233 [L d19 h19 c19]
  return v23;                                           // #200076:209:245 [L d19 h19 c19]
}