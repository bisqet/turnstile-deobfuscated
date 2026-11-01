function probe_29_helper_835(win_v25 /* r70 */, v26 /* r208 */, v27 /* r223 */) { // entry L803_232; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 31 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let doc_v1 /* r202 */, v2 /* r204 */, v3 /* r204 */, v4 /* r202 */, v5 /* r204 */, v6 /* r202 */, style_v7 /* r204 */, v8 /* r202 */, v9 /* r199 */, style_v10 /* r204 */;
  let v11 /* r202 */, v12 /* r199 */, style_v13 /* r204 */, v14 /* r202 */, v15 /* r199 */, style_v16 /* r204 */, v17 /* r202 */, v18 /* r199 */, style_v19 /* r204 */, v20 /* r202 */;
  let v21 /* r204 */, v22 /* r202 */, win_v23 /* r204 */, v24 /* r202 */, elIFrame_v28 /* r205 */, v29 /* r199 */, shadowRoot_v30 /* r204 */, elIFrame_v31 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v1 3
  //   CSSStyleDeclaration: style_v7 3, style_v10 3, style_v13 3, style_v16 3, style_v19 3
  //   Window: win_v23 3, win_v25 3
  //   HTMLIFrameElement: elIFrame_v28 3, elIFrame_v31 3
  //   ShadowRoot: shadowRoot_v30 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  doc_v1 = win_v25.document;                            // #804:24:53 #814:15:200 [L d1 h1 c1]
  v2 = "iframe";                                        // #826:71:233 [L d1 h1 c1]
  elIFrame_v28 = doc_v1.createElement("iframe");        // #836:252:138 [L d1 h1 c1]
  v3 = "width";                                         // #862:192:233 [L d1 h1 c1]
  v4 = 0; elIFrame_v28.width = 0;                       // #871:122:103 [L d1 h1 c1]
  v5 = "height";                                        // #876:198:233 [L d1 h1 c1]
  v6 = 0; elIFrame_v28.height = 0;                      // #886:232:103 [L d1 h1 c1]
  style_v7 = elIFrame_v28[v26];                         // #891:34:7 [L d1 h1 c1]
  v8 = "position";                                      // #895:206:233 [L d1 h1 c1]
  v9 = "absolute";                                      // #907:202:233 [L d1 h1 c1]
  style_v7.position = "absolute";                       // #919:188:199 [L d1 h1 c1]
  style_v10 = elIFrame_v28[v26];                        // #923:166:7 [L d1 h1 c1]
  v11 = "top";                                          // #927:66:233 [L d1 h1 c1]
  v12 = 0; style_v10.top = 0;                           // #934:116:103 [L d1 h1 c1]
  style_v13 = elIFrame_v28[v26];                        // #939:126:7 [L d1 h1 c1]
  v14 = "left";                                         // #943:186:233 [L d1 h1 c1]
  v15 = 0; style_v13.left = 0;                          // #951:12:103 [L d1 h1 c1]
  style_v16 = elIFrame_v28[v26];                        // #956:182:7 [L d1 h1 c1]
  v17 = "border";                                       // #960:18:233 [L d1 h1 c1]
  v18 = "none";                                         // #970:254:233 [L d1 h1 c1]
  style_v16.border = "none";                            // #978:32:199 [L d1 h1 c1]
  style_v19 = elIFrame_v28[v26];                        // #982:122:7 [L d1 h1 c1]
  v20 = "visibility";                                   // #986:198:233 [L d1 h1 c1]
  v29 = "hidden";                                       // #1000:226:233 [L d1 h1 c1]
  style_v19.visibility = "hidden";                      // #1010:116:199 [L d1 h1 c1]
  v21 = "sandbox";                                      // #1014:88:233 [L d1 h1 c1]
  v22 = "allow-same-origin";                            // #1025:172:233 [L d1 h1 c1]
  elIFrame_v28.sandbox = "allow-same-origin";           // #1046:150:199 [L d1 h1 c1]
  win_v23 = win_v25[v27];                               // #1050:152:7 [L d1 h1 c1]
  v24 = win_v23[KP(s1p1053)];                           // #1054:15:200 [L d1 h1 c1]
  shadowRoot_v30 = v24.pkJkg9;                          // #1059:106:200 [L d1 h1 c1]
  elIFrame_v31 = shadowRoot_v30.appendChild(elIFrame_v28);  // #1069:83:138 [L d1 h1 c1]
  return elIFrame_v28;                                  // #1093:87:245 [L d1 h1 c1]
}