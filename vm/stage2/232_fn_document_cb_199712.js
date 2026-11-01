function fn_document_cb_199712(win_v5 /* r70 */, elIFrame_v6 /* r227 */) { // entry L199712_234; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 19 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let elBody_v1 /* r204 */, v2 /* r204 */, v3 /* r204 */, v4 /* r202 */, elIFrame_v7 /* r205 */, doc_v8 /* r202 */, doc_v9 /* r199 */, elBody_v10 /* r202 */, doc_v11 /* r204 */, v12 /* r202 */;
  let v13 /* r199 */, v14 /* r204 */, v15 /* r199 */, v16 /* r202 */, v17 /* r204 */, v18 /* r205 */, v19 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLBodyElement: elBody_v1 3, elBody_v10 3
  //   Window: win_v5 3
  //   HTMLIFrameElement: elIFrame_v6 3, elIFrame_v7 3
  //   HTMLDocument: doc_v8 3, doc_v9 3, doc_v11 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  elIFrame_v7 = elIFrame_v6;                            // #199713:175:150 [L d1 h1 c1]
  doc_v8 = elIFrame_v7.contentDocument;                 // #199716:131:53 #199726:88:200 [L d1 h1 c1]
  if (doc_v8) {                                         // #199731:71:160 [L d1 h1 c1]
    doc_v9 = elIFrame_v7.contentDocument;               // #199750:37:200 [L d1 h1 c1]
    elBody_v10 = doc_v9.body;                           // #199755:168:200 [L d1 h1 c1]
    elBody_v1 = doc_v9.body;                            // #199760:245:150 [L d1 h1 c1] +#199763:49:53
  } else {
    elBody_v1 = doc_v8;                                 // #199737:187:53 #199742:53:150 [-] +#199745:113:53 /* never executed in any replay */
  }
  if (elBody_v1) {                                      // #199768:37:160 [L d1 h1 c1]
    doc_v11 = elIFrame_v7.contentDocument;              // #199779:164:200 [L d1 h1 c1]
    return doc_v11;                                     // #199784:164:245 [L d1 h1 c1]
  }
  v2 = elIFrame_v7.contentWindow;                       // #199774:161:53 #199786:245:200 [-] /* never executed in any replay */
  if (v2) {                                             // #199791:176:160 [-] /* never executed in any replay */
    v13 = elIFrame_v7.contentWindow;                    // #199810:135:200 [-] /* never executed in any replay */
    v3 = v13.document;                                  // #199815:2:200 [-] /* never executed in any replay */
    v12 = v13.document;                                 // #199820:103:150 [-] +#199823:91:53 /* never executed in any replay */
  } else {
    v12 = v2;                                           // #199797:192:53 #199802:20:150 [-] +#199805:148:53 /* never executed in any replay */
  }
  if (v12) {                                            // #199828:140:160 [-] /* never executed in any replay */
    v4 = elIFrame_v7.contentWindow;                     // #199847:126:200 [-] /* never executed in any replay */
    v15 = v4.document;                                  // #199852:221:200 [-] /* never executed in any replay */
    v16 = (v4.document).body;                           // #199857:128:200 [-] /* never executed in any replay */
    v14 = v16;                                          // #199862:109:150 [-] +#199865:201:53 /* never executed in any replay */
  } else {
    v14 = v12;                                          // #199834:44:53 #199839:17:150 [-] +#199842:221:53 /* never executed in any replay */
  }
  if (v14) {                                            // #199870:154:160 [-] /* never executed in any replay */
    v17 = elIFrame_v7.contentWindow;                    // #199881:45:200 [-] /* never executed in any replay */
    v18 = v17.document;                                 // #199886:144:200 [-] /* never executed in any replay */
    return v18;                                         // #199891:224:245 [-] /* never executed in any replay */
  }
  v19 = win_v5.document;                                // #199876:130:53 #199893:40:200 [-] /* never executed in any replay */
  return v19;                                           // #199898:24:245 [-] /* never executed in any replay */
}