function fn_document_199473(win_v24 /* r70 */, v25 /* r221 */) { // entry L199463_19; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 29 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let elDiv_v1 /* r205 */, style_v2 /* r205 */, v3 /* r202 */, v4 /* r199 */, style_v5 /* r205 */, v6 /* r202 */, v7 /* r199 */, style_v8 /* r205 */, v9 /* r202 */, v10 /* r199 */;
  let style_v11 /* r205 */, v12 /* r202 */, v13 /* r199 */, style_v14 /* r205 */, v15 /* r202 */, v16 /* r199 */, doc_v17 /* r205 */, doc_v18 /* r199 */, v19 /* r202 */, elDiv_v20 /* r202 */;
  let elIFrame_v21 /* r199 */, win_v22 /* r202 */, v23 /* r199 */, elDiv_v26 /* r204 */, elIFrame_v27 /* r205 */, shadowRoot_v28 /* r202 */, elDiv_v29 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDivElement: elDiv_v1 3, elDiv_v20 3, elDiv_v26 3, elDiv_v29 3
  //   CSSStyleDeclaration: style_v2 3, style_v5 3, style_v8 3, style_v11 3, style_v14 3
  //   HTMLDocument: doc_v17 3, doc_v18 3
  //   HTMLIFrameElement: elIFrame_v21 3, elIFrame_v27 3
  //   Window: win_v22 3, win_v24 3
  //   ShadowRoot: shadowRoot_v28 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  elDiv_v1 = cell[24];                                  // #199464:87:53 #199474:34:236 [L d1 h1 c1]
  elDiv_v26 = cell[24];                                 // #199477:7:150 [L d1 h1 c1]
  style_v2 = cell[24].style;                            // #199480:130:200 [L d1 h1 c1]
  v3 = "height";                                        // #199485:174:233 [L d1 h1 c1]
  v4 = "100vh";                                         // #199490:42:233 [L d1 h1 c1]
  style_v2.height = "100vh";                            // #199499:156:199 [L d1 h1 c1]
  style_v5 = cell[24].style;                            // #199503:3:200 [L d1 h1 c1]
  v6 = "width";                                         // #199508:107:233 [L d1 h1 c1]
  v7 = "100vw";                                         // #199513:51:233 [L d1 h1 c1]
  style_v5.width = "100vw";                             // #199522:193:199 [L d1 h1 c1]
  style_v8 = cell[24].style;                            // #199526:212:200 [L d1 h1 c1]
  v9 = "position";                                      // #199531:56:233 [L d1 h1 c1]
  v10 = "absolute";                                     // #199536:12:233 [L d1 h1 c1]
  style_v8.position = "absolute";                       // #199541:118:199 [L d1 h1 c1]
  style_v11 = cell[24].style;                           // #199545:245:200 [L d1 h1 c1]
  v12 = "left";                                         // #199550:21:233 [L d1 h1 c1]
  v13 = "-10000px";                                     // #199558:181:233 [L d1 h1 c1]
  style_v11.left = "-10000px";                          // #199570:187:199 [L d1 h1 c1]
  style_v14 = cell[24].style;                           // #199574:102:200 [L d1 h1 c1]
  v15 = "visibility";                                   // #199579:2:233 [L d1 h1 c1]
  v16 = "hidden";                                       // #199593:46:233 [L d1 h1 c1]
  style_v14.visibility = "hidden";                      // #199603:144:199 [L d1 h1 c1]
  doc_v17 = win_v24.document;                           // #199607:39:200 [L d1 h1 c1]
  doc_v18 = doc_v17;                                    // #199612:56:150 [L d1 h1 c1]
  v19 = "iframe";                                       // #199615:12:233 [L d1 h1 c1]
  elIFrame_v27 = doc_v18.createElement(("iframe"));     // #199620:237:138 [L d1 h1 c1]
  elDiv_v20 = elDiv_v26;                                // #199646:102:150 [L d1 h1 c1]
  elIFrame_v21 = elDiv_v20.appendChild(elIFrame_v27);   // #199649:95:138 [L d1 h1 c1]
  win_v22 = win_v24[v25];                               // #199673:125:7 [L d1 h1 c1]
  v23 = win_v22[KP(199676)];                            // #199677:160:200 [L d1 h1 c1]
  shadowRoot_v28 = v23.pkJkg9;                          // #199682:247:200 [L d1 h1 c1]
  elDiv_v29 = shadowRoot_v28.appendChild(elDiv_v26);    // #199687:236:138 [L d1 h1 c1]
  return elIFrame_v27;                                  // #199711:204:245 [L d1 h1 c1]
}