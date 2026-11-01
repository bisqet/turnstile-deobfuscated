function fn_document_200481(win_v54 /* r70 */, arr_v55 /* r88 */, arr_v56 /* r227 */) { // entry L200481_64; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 64 register webs used only inside this fn (no live-in, cross-call or table-made def; 11 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 5 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let arr_v1 /* r199 */, arr_v2 /* r198 */, fn_v3 /* r196 */, doc_v4 /* r202 */, v5 /* r205 */, elDiv_v6 /* r204 */, style_v7 /* r205 */, v8 /* r202 */, v9 /* r196 */, style_v10 /* r205 */;
  let v11 /* r202 */, v12 /* r196 */, style_v13 /* r205 */, v14 /* r202 */, v15 /* r196 */, doc_v16 /* r205 */, doc_v17 /* r195 */, v18 /* r202 */, v19 /* r196 */, sVGSVGElement_v20 /* r205 */;
  let doc_v21 /* r202 */, doc_v22 /* r193 */, v23 /* r196 */, v24 /* r195 */, sVGGElement_v25 /* r202 */, v26 /* r196 */, v27 /* r195 */, v28 /* r196 */, v29 /* r196 */, v30 /* r196 */;
  let v31 /* r196 */, v32 /* r196 */, fn_v33 /* r196 */, arr_v34 /* r195 */, fn_v35 /* r193 */, fn_v36 /* r196 */, arr_v37 /* r199 */, arr_v38 /* r196 */, fn_v39 /* r195 */, fn_v40 /* r198 */;
  let arr_v41 /* r198 */, fn_v42 /* r199 */, sVGSVGElement_v43 /* r199 */, sVGGElement_v44 /* r198 */, elDiv_v45 /* r202 */, sVGSVGElement_v46 /* r199 */, doc_v47 /* r205 */, doc_v48 /* r199 */, v49 /* r202 */, elTemplate_v50 /* r205 */;
  let documentFragment_v51 /* r202 */, elDiv_v52 /* r199 */, doc_v53 /* r204 */, v57 /* r193 */, fn_v58 /* r196 */, v59 /* r195 */, doc_v60 /* r199 */, fn_v61 /* r198 */, documentFragment_v62 /* r204 */, v63 /* r202 */;
  let documentFragment_v64 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v2 3, arr_v34 3, arr_v37 3, arr_v38 3, arr_v41 3, arr_v55 3, arr_v56 3
  //   Function: fn_v3 3, fn_v33 3, fn_v35 3, fn_v36 3, fn_v39 3, fn_v40 3, fn_v42 3, fn_v58 3
  //   Function: fn_v61 3
  //   HTMLDocument: doc_v4 3, doc_v16 3, doc_v17 3, doc_v21 3, doc_v22 3, doc_v47 3, doc_v48 3, doc_v53 3
  //   HTMLDocument: doc_v60 3
  //   HTMLDivElement: elDiv_v6 3, elDiv_v45 3, elDiv_v52 3
  //   CSSStyleDeclaration: style_v7 3, style_v10 3, style_v13 3
  //   SVGSVGElement: sVGSVGElement_v20 3, sVGSVGElement_v43 3, sVGSVGElement_v46 3
  //   SVGGElement: sVGGElement_v25 3, sVGGElement_v44 3
  //   HTMLTemplateElement: elTemplate_v50 3
  //   DocumentFragment: documentFragment_v51 3, documentFragment_v62 3, documentFragment_v64 3
  //   Window: win_v54 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v1 = arr_v56;                                     // #200482:45:150 [L d1 h1 c1]
  arr_v2 = arr_v55;                                     // #200485:166:150 [L d1 h1 c1]
  NC(48, 49, 50, 51, 52, 53, 54, 56);                   // #200488:94:53 #200498:0:211 [L d1 h1 c1]
  fn_v3 = clos;                                         // #200508:167:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  cell[56] = fn_v3;                                     // #200522:113:195 [L d1 h1 c1]
  doc_v4 = win_v54.document;                            // #200525:196:200 #200530:161:150 [L d1 h1 c1]
  v5 = "div";                                           // #200533:17:233 [L d1 h1 c1]
  elDiv_v6 = doc_v4.createElement("div");               // #200538:30:138 [L d1 h1 c1]
  style_v7 = elDiv_v6.style;                            // #200564:253:200 [L d1 h1 c1]
  v8 = "position";                                      // #200569:253:233 [L d1 h1 c1]
  v9 = "absolute";                                      // #200574:253:233 [L d1 h1 c1]
  style_v7.position = "absolute";                       // #200579:227:199 [L d1 h1 c1]
  style_v10 = elDiv_v6.style;                           // #200583:238:200 [L d1 h1 c1]
  v11 = "left";                                         // #200588:106:233 [L d1 h1 c1]
  v12 = "-9999px";                                      // #200596:246:233 [L d1 h1 c1]
  style_v10.left = "-9999px";                           // #200607:56:199 [L d1 h1 c1]
  style_v13 = elDiv_v6.style;                           // #200611:47:200 [L d1 h1 c1]
  v14 = "height";                                       // #200616:231:233 [L d1 h1 c1]
  v15 = "auto";                                         // #200621:191:233 [L d1 h1 c1]
  style_v13.height = "auto";                            // #200629:29:199 [L d1 h1 c1]
  doc_v16 = win_v54.document;                           // #200633:192:200 [L d1 h1 c1]
  doc_v17 = doc_v16;                                    // #200638:173:150 [L d1 h1 c1]
  v18 = "http://www.w3.org/2000/svg";                   // #200641:237:233 [L d1 h1 c1]
  v19 = "svg";                                          // #200646:45:233 [L d1 h1 c1]
  sVGSVGElement_v20 = doc_v17.createElementNS("http://www.w3.org/2000/svg", ("svg"));  // #200653:202:138 [L d1 h1 c1]
  doc_v21 = win_v54.document;                           // #200682:249:200 [L d1 h1 c1]
  doc_v22 = doc_v21;                                    // #200687:66:150 [L d1 h1 c1]
  v23 = "http://www.w3.org/2000/svg";                   // #200690:110:233 [L d1 h1 c1]
  v24 = "g";                                            // #200695:234:233 [L d1 h1 c1]
  sVGGElement_v25 = doc_v22.createElementNS("http://www.w3.org/2000/svg", ("g"));  // #200700:211:138 [L d1 h1 c1]
  cell[48] = sVGGElement_v25;                           // #200729:237:195 [L d1 h1 c1]
  v26 = "id";                                           // #200732:45:233 [L d1 h1 c1]
  v27 = "TnIbl4";                                       // #200738:109:233 [L d1 h1 c1]
  sVGGElement_v25.id = "TnIbl4";                        // #200748:147:199 [L d1 h1 c1]
  v28 = "32";                                           // #200752:187:233 [L d1 h1 c1]
  cell[49] = "32";                                      // #200758:53:195 [L d1 h1 c1]
  v29 = "150px !important";                             // #200761:85:233 [L d1 h1 c1]
  cell[50] = "150px !important";                        // #200781:231:195 [L d1 h1 c1]
  v30 = "auto";                                         // #200784:191:233 [L d1 h1 c1]
  cell[51] = "auto";                                    // #200792:41:195 [L d1 h1 c1]
  v31 = "absolute !important";                          // #200795:121:233 [L d1 h1 c1]
  cell[52] = "absolute !important";                     // #200818:123:195 [L d1 h1 c1]
  v32 = "scale(1.000998)";                              // #200821:3:233 [L d1 h1 c1]
  cell[53] = "scale(1.000998)";                         // #200840:93:195 [L d1 h1 c1]
  fn_v33 = clos;                                        // #200843:208:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v33 = its home register (H139 CLOS bind)
  cell[56] = fn_v33;                                    // #200857:54:195 [L d1 h1 c1]
  arr_v34 = arr_v1;                                     // #200860:203:150 [L d1 h1 c1]
  fn_v35 = arr_v1.map;                                  // #200863:54:200 [L d1 h1 c1]
  fn_v36 = clos;                                        // #200868:133:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v36 = its home register (H139 CLOS bind)
  arr_v37 = fn_v35.call(arr_v34, fn_v36);               // #200882:194:138 [L d1 h1 c1]
  cell[54] = arr_v37;                                   // #200899:224:195 [L d1 h1 c1]
  arr_v38 = arr_v2;                                     // #200902:77:150 [L d1 h1 c1]
  fn_v39 = arr_v2.forEach;                              // #200905:48:200 [L d1 h1 c1]
  fn_v40 = clos;                                        // #200910:23:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v40 = its home register (H139 CLOS bind)
  v57 = fn_v39.call(arr_v38, fn_v40);                   // #200922:140:138 [L d1 h1 c1]
  arr_v41 = arr_v37;                                    // #200943:73:150 [L d1 h1 c1]
  fn_v58 = arr_v37.forEach;                             // #200946:60:200 [L d1 h1 c1]
  fn_v42 = clos;                                        // #200951:243:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v42 = its home register (H139 CLOS bind)
  v59 = fn_v58.call(arr_v41, fn_v42);                   // #200964:248:138 [L d1 h1 c1]
  sVGSVGElement_v43 = sVGSVGElement_v20;                // #200985:5:150 [L d1 h1 c1]
  sVGGElement_v44 = sVGSVGElement_v43.appendChild(sVGGElement_v25);  // #200988:66:138 [L d1 h1 c1]
  elDiv_v45 = elDiv_v6;                                 // #201012:167:150 [L d1 h1 c1]
  sVGSVGElement_v46 = elDiv_v45.appendChild(sVGSVGElement_v20);  // #201015:220:138 [L d1 h1 c1]
  doc_v47 = win_v54.document;                           // #201039:67:200 [L d1 h1 c1]
  doc_v48 = doc_v47;                                    // #201044:228:150 [L d1 h1 c1]
  v49 = "template";                                     // #201047:8:233 [L d1 h1 c1]
  elTemplate_v50 = doc_v48.createElement("template");   // #201059:249:138 [L d1 h1 c1]
  documentFragment_v51 = elTemplate_v50.content;        // #201085:44:200 [L d1 h1 c1]
  elDiv_v52 = documentFragment_v51.appendChild(elDiv_v6);  // #201096:141:138 [L d1 h1 c1]
  doc_v53 = win_v54.document;                           // #201120:112:200 [L d1 h1 c1]
  doc_v60 = doc_v53;                                    // #201125:157:150 [L d1 h1 c1]
  fn_v61 = doc_v53.importNode;                          // #201128:64:200 [L d1 h1 c1]
  documentFragment_v62 = elTemplate_v50.content;        // #201142:23:200 [L d1 h1 c1]
  v63 = true;                                           // #201153:47:233 [L d1 h1 c1]
  documentFragment_v64 = fn_v61.call(doc_v60, documentFragment_v62, v63);  // #201156:68:138 [L d1 h1 c1]
  return documentFragment_v64;                          // #201181:196:245 [L d1 h1 c1]
}