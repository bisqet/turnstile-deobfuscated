function fn_document_166546(win_v33 /* r70 */, v34 /* r221 */, fn_v35 /* r227 */) { // entry L166546_220; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 57 register webs used only inside this fn (no live-in, cross-call or table-made def; 25 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 4 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r205 */, v2 /* r204 */, v3 /* r204 */, v4 /* r204 */, v5 /* r204 */, fn_v6 /* r199 */, fn_v7 /* r204 */, win_v8 /* r199 */, doc_v9 /* r199 */, v10 /* r204 */;
  let v11 /* r199 */, v12 /* r199 */, v13 /* r204 */, v14 /* r204 */, v15 /* r199 */, doc_v16 /* r199 */, doc_v17 /* r199 */, v18 /* r199 */, v19 /* r204 */, v20 /* r204 */;
  let win_v21 /* r204 */, win_v22 /* r198 */, v23 /* r204 */, fn_v24 /* r199 */, doc_v25 /* r199 */, doc_v26 /* r204 */, elHtml_v27 /* r199 */, fn_v28 /* r202 */, fn_v29 /* r204 */, v30 /* r204 */;
  let v31 /* r204 */, v32 /* r205 */, v36 /* r205 */, fn_v37 /* r195 */, shadowRoot_v38 /* r196 */, elHtml_v39 /* r202 */, v40 /* r193 */, v41 /* r198 */, v42 /* r198 */, v43 /* r199 */;
  let fn_v44 /* r198 */, v45 /* r198 */, doc_v46 /* r198 */, elBody_v47 /* r198 */, elBody_v48 /* r196 */, v49 /* r198 */, v50 /* r199 */, fn_v51 /* r196 */, v52 /* r195 */, fn_v53 /* r199 */;
  let v54 /* r202 */, v55 /* r198 */, v56 /* r204 */, v57 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v6 3, fn_v7 3, fn_v24 3, fn_v28 3, fn_v29 3, fn_v35 3, fn_v37 3
  //   Function: fn_v44 3, fn_v51 3, fn_v53 3
  //   Window: win_v8 3, win_v21 3, win_v22 3, win_v33 3
  //   HTMLDocument: doc_v9 3, doc_v16 3, doc_v17 3, doc_v25 3, doc_v26 3, doc_v46 3
  //   HTMLHtmlElement: elHtml_v27 3, elHtml_v39 3
  //   ShadowRoot: shadowRoot_v38 3
  //   HTMLBodyElement: elBody_v47 3, elBody_v48 3
  // H133 rewrites: 7 single-use temps folded (7 of them expressions, H135), 1 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  fn_v1 = fn_v35;                                       // #166547:89:150 [L d1 h1 c1]
  NC(61);                                               // #166550:5:53 #166555:86:211 [L d1 h1 c1]
  cell[61] = fn_v1;                                     // #166558:36:195 [L d1 h1 c1]
  NC(62, 63, 64, 69, 70);                               // #166561:100:53 #166566:150:211 [L d1 h1 c1]
  v2 = undefined;                                       // #166573:114:233 [L d1 h1 c1]
  clos;                                                 // #166576:209:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #166586:116:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #166600:75:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  v3 = KP(166613);                                      // #166614:147:233 [L d1 h1 c1]
  cell[62] = v3;                                        // #166655:173:195 [L d1 h1 c1]
  v4 = "hCig9";                                         // #166658:237:233 [L d1 h1 c1]
  cell[63] = "hCig9";                                   // #166667:31:195 [L d1 h1 c1]
  v5 = false;                                           // #166670:23:233 [L d1 h1 c1]
  cell[64] = false;                                     // #166673:33:195 [L d1 h1 c1]
  v36 = "kIdiW5";                                       // #166676:145:233 [L d1 h1 c1]
  fn_v6 = clos;                                         // #166686:52:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v6 = its home register (H139 CLOS bind)
  cell[69] = fn_v6;                                     // #166696:10:195 [L d1 h1 c1]
  fn_v7 = clos;                                         // #166699:9:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v7 = its home register (H139 CLOS bind)
  cell[70] = fn_v7;                                     // #166713:203:195 [L d1 h1 c1]
  fn_v37 = clos;                                        // #166716:6:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v37 = its home register (H139 CLOS bind)
  try {
    TP(tryStack, 167184, 171, callDepths);                         // #166730:215:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v8 = win_v33[v34];                              // #166736:21:7 [L d1 h1 c1]
    shadowRoot_v38 = win_v8[KP(166739)].pkJkg9;         // #166740:216:200 #166745:79:200 [L d1 h1 c1]
    elHtml_v39 = win_v33.document.documentElement;      // #166750:170:200 #166755:89:200 [L d1 h1 c1]
    v40 = undefined;                                    // #166760:233:233 [L d1 h1 c1]
    doc_v9 = win_v33.document;                          // #166763:92:200 [L d1 h1 c1]
    v41 = !MC(undefined, fn_v37, doc_v9);               // #166768:69:114 #166773:154:130 [L d1 h1 c1]
    if (v41) {                                          // #166776:1:160 [L d1 h1 c1]
      v42 = fn_v37(shadowRoot_v38);                     // #166795:85:113 [L d1 h1 c1]
      v11 = !v42;                                       // #166800:106:130 [L d1 h1 c1]
      v10 = v11;                                        // #166803:47:150 [L d1 h1 c1] +#166806:3:53
    } else {
      v10 = v41;                                        // #166782:13:53 #166787:228:150 [-] +#166790:36:53 /* never executed in any replay */
    }
    if (v10) {                                          // #166811:96:160 [L d1 h1 c1]
      fn_v44 = win_v33.ShadowRoot;                      // #166830:178:200 [L d1 h1 c1]
      v12 = !(shadowRoot_v38 instanceof fn_v44);        // #166844:144:67 #166848:121:130 [L d1 h1 c1]
      if (v12) {                                        // #166851:36:160 [L d1 h1 c1]
        v13 = v12;                                      // #166878:170:150 [-] +#166881:82:53 /* never executed in any replay */
      } else {
        v45 = shadowRoot_v38.activeElement;             // #166857:100:53 #166862:205:200 [L d1 h1 c1]
        v13 = !v45;                                     // #166867:2:130 #166870:103:150 [L d1 h1 c1] +#166873:91:53
      }
      v43 = v13;                                        // #166886:51:150 [L d1 h1 c1] +#166889:247:53
    } else {
      v43 = v10;                                        // #166817:176:53 #166822:178:150 [-] +#166825:58:53 /* never executed in any replay */
    }
    if (v43) {                                          // #166894:133:160 [L d1 h1 c1]
      doc_v46 = win_v33.document;                       // #166913:111:200 [L d1 h1 c1]
      v15 = !doc_v46.activeElement;                     // #166918:74:200 #166923:203:130 [L d1 h1 c1]
      if (v15) {                                        // #166926:174:160 [L d1 h1 c1]
        v19 = v15;                                      // #166969:154:150 [-] +#166972:130:53 /* never executed in any replay */
      } else {
        doc_v16 = win_v33.document;                     // #166932:70:53 #166937:62:200 [L d1 h1 c1]
        elBody_v47 = doc_v16.body;                      // #166942:157:200 [L d1 h1 c1]
        doc_v17 = win_v33.document;                     // #166947:64:200 [L d1 h1 c1]
        elBody_v48 = doc_v17.activeElement;             // #166952:23:200 [L d1 h1 c1]
        v18 = elBody_v47 === doc_v17.activeElement;     // #166957:39:65 [L d1 h1 c1]
        v19 = v18;                                      // #166961:56:150 [L d1 h1 c1] +#166964:40:53
      }
      if (v19) {                                        // #166977:108:160 [L d1 h1 c1]
        v50 = v19;                                      // #167010:52:150 [L d1 h1 c1] +#167013:52:53
      } else {
        v20 = win_v33.document;                         // #166983:140:53 #166988:201:200 [-] /* never executed in any replay */
        v49 = v20.activeElement;                        // #166993:188:200 [-] /* never executed in any replay */
        v50 = elHtml_v39 === v20.activeElement;         // #166998:120:65 #167002:133:150 [-] +#167005:129:53 /* never executed in any replay */
      }
      v14 = v50;                                        // #167018:13:150 [L d1 h1 c1] +#167021:233:53
    } else {
      v14 = v43;                                        // #166900:129:53 #166905:217:150 [-] +#166908:133:53 /* never executed in any replay */
    }
    if (v14) {                                          // #167026:96:160 [L d1 h1 c1]
      win_v21 = win_v33[v34];                           // #167037:188:7 [L d1 h1 c1]
      win_v22 = win_v21;                                // #167041:185:150 [L d1 h1 c1]
      fn_v51 = win_v21.addEventListener;                // #167044:236:200 [L d1 h1 c1]
      v23 = cell[62];                                   // #167049:167:236 [L d1 h1 c1]
      fn_v24 = cell[69];                                // #167052:54:236 [L d1 h1 c1]
      v52 = fn_v51.call(win_v22, v23, fn_v24);          // #167055:239:138 [L d1 h1 c1]
      cell[64] = true;                                  // #167086:167:233 #167089:113:195 [L d1 h1 c1]
      doc_v25 = win_v33.document;                       // #167092:196:200 [L d1 h1 c1]
      doc_v26 = doc_v25;                                // #167097:161:150 [L d1 h1 c1]
      elHtml_v27 = (doc_v26).replaceChild(elHtml_v39, elHtml_v39);  // #167100:110:138 [L d1 h1 c1]
      fn_v53 = win_v33.setTimeout;                      // #167126:13:200 [L d1 h1 c1]
      fn_v28 = clos;                                    // #167131:192:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v28 = its home register (H139 CLOS bind)
      fn_v29 = fn_v28;                                  // #167141:173:150 [L d1 h1 c1]
      v54 = 0;                                          // #167144:144:72 [L d1 h1 c1]
      v55 = fn_v53.call(win_v33, fn_v29, v54);          // #167147:97:138 [L d1 h1 c1]
      v56 = undefined;                                  // #167172:209:233 [L d1 h1 c1]
      return v56;                                       // #167175:93:245 [L d1 h1 c1]
    }
    v30 = tryStack.pop();                                    // #167032:176:53 #167177:28:124 [-] /* never executed in any replay */
    r204 = cell[70](v36);                               // #167180:124:53 #167203:11:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
    v57 = undefined;                                    // #167207:83:233 [-] /* never executed in any replay */
    return v57;                                         // #167210:87:245 [-] /* never executed in any replay */
  } catch (caught) {
    v31 = caught;                                         // #167185:172:150 [-] /* never executed in any replay */
    v32 = KP(m167187k172);                              // #167188:176:233 [-] /* never executed in any replay */
    outside("L167197_176");  // L167197_176 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}