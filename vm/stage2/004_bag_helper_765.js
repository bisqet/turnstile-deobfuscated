function bag_helper_765(win_v25 /* r70 */, v26 /* r221 */) { // entry L745_27; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 30 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let doc_v1 /* r202 */, v2 /* r204 */, v3 /* r204 */, v4 /* r202 */, v5 /* r204 */, v6 /* r202 */, style_v7 /* r204 */, v8 /* r202 */, v9 /* r199 */, style_v10 /* r204 */;
  let v11 /* r202 */, v12 /* r199 */, style_v13 /* r204 */, v14 /* r202 */, v15 /* r199 */, style_v16 /* r204 */, v17 /* r202 */, v18 /* r199 */, style_v19 /* r204 */, v20 /* r202 */;
  let v21 /* r204 */, v22 /* r202 */, win_v23 /* r204 */, v24 /* r202 */, elIFrame_v27 /* r205 */, v28 /* r199 */, shadowRoot_v29 /* r204 */, elIFrame_v30 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v1 3
  //   CSSStyleDeclaration: style_v7 3, style_v10 3, style_v13 3, style_v16 3, style_v19 3
  //   Window: win_v23 3, win_v25 3
  //   HTMLIFrameElement: elIFrame_v27 3, elIFrame_v30 3
  //   ShadowRoot: shadowRoot_v29 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  doc_v1 = win_v25.document;                            // #746:63:53 #756:80:200 [L d1 h1 c1]
  v2 = "iframe";                                        // #761:196:233 [L d1 h1 c1]
  elIFrame_v27 = doc_v1.createElement("iframe");        // #766:197:138 [L d1 h1 c1]
  v3 = "width";                                         // #792:165:233 [L d1 h1 c1]
  v4 = 0; elIFrame_v27.width = 0;                       // #797:11:103 [L d1 h1 c1]
  v5 = "height";                                        // #802:83:233 [L d1 h1 c1]
  v6 = 0; elIFrame_v27.height = 0;                      // #807:129:103 [L d1 h1 c1]
  style_v7 = elIFrame_v27.style;                        // #812:148:200 [L d1 h1 c1]
  v8 = "position";                                      // #817:248:233 [L d1 h1 c1]
  v9 = "absolute";                                      // #822:204:233 [L d1 h1 c1]
  style_v7.position = "absolute";                       // #827:54:199 [L d1 h1 c1]
  style_v10 = elIFrame_v27.style;                       // #831:181:200 [L d1 h1 c1]
  v11 = "top";                                          // #836:213:233 [L d1 h1 c1]
  v12 = 0; style_v10.top = 0;                           // #843:123:103 [L d1 h1 c1]
  style_v13 = elIFrame_v27.style;                       // #848:38:200 [L d1 h1 c1]
  v14 = "left";                                         // #853:194:233 [L d1 h1 c1]
  v15 = 0; style_v13.left = 0;                          // #861:244:103 [L d1 h1 c1]
  style_v16 = elIFrame_v27.style;                       // #866:251:200 [L d1 h1 c1]
  v17 = "border";                                       // #871:131:233 [L d1 h1 c1]
  v18 = "none";                                         // #881:235:233 [L d1 h1 c1]
  style_v16.border = "none";                            // #889:153:199 [L d1 h1 c1]
  style_v19 = elIFrame_v27.style;                       // #893:76:200 [L d1 h1 c1]
  v20 = "visibility";                                   // #898:208:233 [L d1 h1 c1]
  v28 = "hidden";                                       // #912:68:233 [L d1 h1 c1]
  style_v19.visibility = "hidden";                      // #922:206:199 [L d1 h1 c1]
  v21 = "sandbox";                                      // #926:202:233 [L d1 h1 c1]
  v22 = "allow-same-origin";                            // #937:214:233 [L d1 h1 c1]
  elIFrame_v27.sandbox = "allow-same-origin";           // #958:152:199 [L d1 h1 c1]
  win_v23 = win_v25[v26];                               // #962:18:7 [L d1 h1 c1]
  v24 = win_v23[KP(965)];                               // #966:33:200 [L d1 h1 c1]
  shadowRoot_v29 = v24.pkJkg9;                          // #971:180:200 [L d1 h1 c1]
  elIFrame_v30 = shadowRoot_v29.appendChild(elIFrame_v27);  // #976:245:138 [L d1 h1 c1]
  return elIFrame_v27;                                  // #1000:241:245 [L d1 h1 c1]
}