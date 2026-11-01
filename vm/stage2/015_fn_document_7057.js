function fn_document_7057(win_v109 /* r70 */, v110 /* r209 */, v111 /* r220 */, v112 /* r221 */, v113 /* r223 */) { // entry L7047_121; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 180 register webs used only inside this fn (no live-in, cross-call or table-made def; 72 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r199 */, v2 /* r193 */, v3 /* r198 */, v4 /* r195 */, v5 /* r196 */, v6 /* r202 */, v7 /* r205 */, v8 /* r205 */, v9 /* r202 */, win_v10 /* r205 */;
  let win_v11 /* r202 */, fn_v12 /* r199 */, v13 /* r205 */, v14 /* r198 */, fn_v15 /* r202 */, v16 /* r205 */, doc_v17 /* r199 */, elHtml_v18 /* r202 */, fn_v19 /* r199 */, v20 /* r202 */;
  let fn_v21 /* r196 */, v22 /* r199 */, elHtml_v23 /* r196 */, stylePropertyMapReadOnly_v24 /* r205 */, v25 /* r193 */, v26 /* r202 */, v27 /* r198 */, v28 /* r196 */, v29 /* r205 */, v30 /* r196 */;
  let arr_v31 /* r195 */, v32 /* r205 */, v33 /* r195 */, v34 /* r196 */, v35 /* r196 */, v36 /* r196 */, v37 /* r195 */, v38 /* r196 */, v39 /* r196 */, v40 /* r195 */;
  let v41 /* r195 */, v42 /* r196 */, v43 /* r195 */, v44 /* r196 */, v45 /* r196 */, v46 /* r196 */, v47 /* r196 */, v48 /* r195 */, v49 /* r195 */, v50 /* r195 */;
  let v51 /* r195 */, v52 /* r195 */, v53 /* r195 */, v54 /* r195 */, v55 /* r195 */, v56 /* r202 */, v57 /* r202 */, arr_v58 /* r205 */, v59 /* r205 */, v60 /* r205 */;
  let v61 /* r202 */, v62 /* r196 */, doc_v63 /* r195 */, v64 /* r202 */, elIFrame_v65 /* r196 */, v66 /* r202 */, v67 /* r195 */, v68 /* r202 */, v69 /* r195 */, win_v70 /* r202 */;
  let v71 /* r195 */, shadowRoot_v72 /* r202 */, elIFrame_v73 /* r195 */, elIFrame_v74 /* r196 */, doc_v75 /* r198 */, v76 /* r198 */, v77 /* r199 */, doc_v78 /* r202 */, doc_v79 /* r198 */, fn_v80 /* r196 */;
  let win_v81 /* r199 */, win_v82 /* r193 */, v83 /* r195 */, trustedHTML_v84 /* r199 */, v85 /* r195 */, v86 /* r199 */, jSON_v87 /* r199 */, style_v88 /* r199 */, v89 /* r202 */, v90 /* r205 */;
  let v91 /* r205 */, v92 /* r199 */, fn_v93 /* r199 */, fn_v94 /* r205 */, promise_v95 /* r202 */, fn_v96 /* r199 */, promise_v97 /* r205 */, arr_v98 /* r202 */, fn_v99 /* r202 */, v100 /* r205 */;
  let v101 /* r198 */, v102 /* r198 */, v103 /* r205 */, v104 /* r196 */, v105 /* r205 */, v106 /* r205 */, v107 /* r205 */, v108 /* r202 */, v114 /* r150 */, v115 /* r242 */;
  let v116 /* r159 */, v117 /* r226 */, v118 /* r228 */, v119 /* r152 */, v120 /* r225 */, v121 /* r237 */, v122 /* r252 */, v123 /* r240 */, stylePropertyMapReadOnlyIterator_v124 /* r150 */, fn_v125 /* r242 */;
  let enc_v126 /* r242 */, v127 /* r159 */, v128 /* r226 */, v129 /* r228 */, v130 /* r152 */, v131 /* r225 */, v132 /* r155 */, v133 /* r229 */, v134 /* r230 */, v135 /* r232 */;
  let v136 /* r236 */, v137 /* r238 */, v138 /* r244 */, v139 /* r253 */, v140 /* r245 */, arr_v141 /* r237 */, v142 /* r192 */, v143 /* r192 */, v144 /* r192 */, v145 /* r254 */;
  let v146 /* r252 */, v147 /* r240 */, v148 /* r231 */, v149 /* r246 */, v150 /* r250 */, v151 /* r192 */, v152 /* r247 */, v153 /* r192 */, v154 /* r254 */, v155 /* r247 */;
  let v156 /* r192 */, v157 /* r192 */, v158 /* r192 */, v159 /* r254 */, v160 /* r252 */, v161 /* r250 */, v162 /* r247 */, v163 /* r246 */, v164 /* r254 */, v165 /* r254 */;
  let v166 /* r254 */, v167 /* r192 */, v168 /* r254 */, v169 /* r192 */, jSON_v170 /* r198 */, fn_v171 /* r196 */, fn_v172 /* r193 */, elBody_v173 /* r195 */, v174 /* r199 */, arr_v175 /* r199 */;
  let v176 /* r198 */, v177 /* r196 */, v178 /* r195 */, arr_v179 /* r202 */, v180 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v10 3, win_v11 3, win_v70 3, win_v81 3, win_v82 3, win_v109 3
  //   Function: fn_v12 3, fn_v15 3, fn_v19 3, fn_v21 3, fn_v80 3, fn_v93 3, fn_v94 3, fn_v96 3
  //   Function: fn_v99 3, fn_v125 3, fn_v171 3, fn_v172 3
  //   HTMLDocument: doc_v17 3, doc_v63 3, doc_v75 3, doc_v78 3, doc_v79 3
  //   HTMLHtmlElement: elHtml_v18 3, elHtml_v23 3
  //   StylePropertyMapReadOnly: stylePropertyMapReadOnly_v24 3
  //   Array: arr_v31 1437, arr_v58 3, arr_v98 3, arr_v141 1437, arr_v175 3, arr_v179 3
  //   HTMLIFrameElement: elIFrame_v65 3, elIFrame_v73 3, elIFrame_v74 3
  //   ShadowRoot: shadowRoot_v72 3
  //   TrustedHTML: trustedHTML_v84 3
  //   JSON: jSON_v87 3, jSON_v170 3
  //   CSSStyleDeclaration: style_v88 3
  //   Promise: promise_v95 3, promise_v97 3
  //   StylePropertyMapReadOnly Iterator: stylePropertyMapReadOnlyIterator_v124 3
  //   TextEncoder: enc_v126 3
  //   HTMLBodyElement: elBody_v173 3
  // H137 proven reads: 10 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 3 reads keep the register
  let v181 /* r204 */, v182 /* r204 */, v183 /* r204 */, v184 /* r204 */;
  // H133 rewrites: 4 single-use temps folded (3 of them expressions, H135), 13 dead register writes dropped, 17 constants propagated (18 uses), 11 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1)
  v1 = undefined;                                       // #7048:165:53 #7058:207:233 [L d1 h1 c1]
  v114 = undefined;                                     // #7061:7:233 [L d1 h1 c1]
  v115 = undefined;                                     // #7064:95:233 [L d1 h1 c1]
  v2 = undefined;                                       // #7067:87:233 [L d1 h1 c1]
  v3 = undefined;                                       // #7070:111:233 #7073:39:233 [L d1 h1 c1]
  v116 = undefined;                                     // #7076:255:233 [L d1 h1 c1]
  v117 = undefined;                                     // #7079:119:233 [L d1 h1 c1]
  v118 = undefined;                                     // #7082:15:233 [L d1 h1 c1]
  v119 = undefined;                                     // #7085:71:233 [L d1 h1 c1]
  v120 = undefined;                                     // #7088:159:233 [L d1 h1 c1]
  v121 = undefined;                                     // #7091:151:233 #7094:175:233 #7097:103:233 [L d1 h1 c1]
  v4 = undefined;                                       // #7100:63:233 [L d1 h1 c1]
  v122 = undefined;                                     // #7103:183:233 [L d1 h1 c1]
  v123 = undefined;                                     // #7106:79:233 [L d1 h1 c1]
  NC(40);                                               // #7109:135:233 #7112:223:233 #7115:215:233 #7118:177:211 [L d1 h1 c1]
  v5 = undefined;                                       // #7121:225:233 [L d1 h1 c1]
  v6 = undefined;                                       // #7124:81:233 #7127:1:233 [L d1 h1 c1]
  v7 = undefined;                                       // #7130:241:233 #7133:33:233 [L d1 h1 c1]
  clos;                                                 // #7136:132:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #7148:27:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  v8 = cell[1];                                         // #7162:218:236 [L d1 h1 c1]
  v9 = v8[v111];                                        // #7165:204:7 [L d1 h1 c1]
  v181 = v8[v9];                                        // #7169:118:7 [L d1 h1 c1]
  win_v10 = win_v109[v112];                             // #7173:248:7 [L d1 h1 c1]
  win_v11 = win_v10;                                    // #7177:5:150 [L d1 h1 c1]
  fn_v12 = win_v11[v110];                               // #7180:11:7 [L d1 h1 c1]
  v13 = KP(7183);                                       // #7184:83:233 [L d1 h1 c1]
  v14 = fn_v12.call(win_v11, v13);                      // #7237:216:138 [L d1 h1 c1]
  try {
    TP(tryStack, 8249, 183, callDepths);                           // #7257:225:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    fn_v15 = win_v109.Function;                         // #7263:116:200 [L d1 h1 c1]
    v16 = typeof fn_v15;                                // #7268:208:193 [L d1 h1 c1]
    doc_v17 = win_v109.document;                        // #7271:103:200 [L d1 h1 c1]
    elHtml_v18 = doc_v17.documentElement;               // #7276:98:200 [L d1 h1 c1]
    fn_v19 = (doc_v17.documentElement).computedStyleMap;  // #7281:49:200 [L d1 h1 c1]
    v20 = typeof fn_v19;                                // #7301:217:193 [L d1 h1 c1]
    if (v16 === v20) {                                  // #7304:65:161 [L d1 h1 c1]
      fn_v21 = win_v109.Object;                         // #7321:232:200 [L d1 h1 c1]
      v22 = fn_v21.create(null);                        // #7326:252:233 #7329:29:138 [L d1 h1 c1]
      elHtml_v23 = win_v109.document.documentElement;   // #7348:192:200 #7353:151:200 [L d1 h1 c1]
      stylePropertyMapReadOnly_v24 = elHtml_v23.computedStyleMap();  // #7358:12:138 [L d1 h1 c1]
      stylePropertyMapReadOnlyIterator_v124 = stylePropertyMapReadOnly_v24.entries();  // #7386:237:138 [L d1 h1 c1]
      fn_v125 = win_v109.TextEncoder;                   // #7405:80:200 [L d1 h1 c1]
      enc_v126 = new fn_v125();                         // #7420:124:1 [L d1 h1 c1]
      v25 = 2;                                          // #7424:227:72 [L d1 h1 c1]
      v26 = false;                                      // #7427:203:233 [L d1 h1 c1]
      v27 = false;                                      // #7430:19:233 [L d1 h1 c1]
      v127 = 2048;                                      // #7433:59:233 [L d1 h1 c1]
      v128 = "--";                                      // #7438:195:233 [L d1 h1 c1]
      v129 = 0;                                         // #7444:206:72 [L d1 h1 c1]
      v130 = 1;                                         // #7447:109:72 [L d1 h1 c1]
      v131 = 0;                                         // #7450:230:150 [L d1 h1 c1]
      v132 = "value";                                   // #7453:130:233 [L d1 h1 c1]
      v133 = "length";                                  // #7458:174:233 [L d1 h1 c1]
      v134 = "length";                                  // #7463:42:233 [L d1 h1 c1]
      v135 = "length";                                  // #7468:182:233 [L d1 h1 c1]
      v136 = "String";                                  // #7473:18:233 [L d1 h1 c1]
      v137 = "length";                                  // #7478:254:233 [L d1 h1 c1]
      v138 = "encode";                                  // #7483:58:233 [L d1 h1 c1]
      v139 = "length";                                  // #7493:134:233 [L d1 h1 c1]
      v140 = "stringify";                               // #7498:162:233 #7503:78:233 [L d1 h1 c1] +#7508:102:53
      L8132_201: {
        for (;;) {
          v29 = v131 <= v127; if (!(v131 <= v127)) {    // #7526:182:95 [L d480 h480 c480]
            break L8132_201;
          }
          v30 = stylePropertyMapReadOnlyIterator_v124.next();    // #7544:211:138 [L d480 h480 c480]
          if (v30.done) {                               // #7560:30:200 #7568:117:160 [L d480 h480 c480]
            break L8132_201;                            // #7579:20:53 [L d1 h1 c1]
          }
          arr_v31 = v30.value;                          // #7574:177:53 #7584:139:200 [L d479 h479 c479]
          v32 = arr_v31[0];                             // #7589:249:7 [L d479 h479 c479]
          arr_v141 = v30.value[1];                      // #7593:72:20 [L d479 h479 c479]
          v33 = typeof v32;                             // #7598:84:193 [L d479 h479 c479]
          v34 = "";                                     // #7601:184:233 [L d479 h479 c479]
          v142 = typeof ("");                           // #7605:4:193 [L d479 h479 c479]
          v35 = v33 === v142;                           // #7608:160:65 [L d479 h479 c479]
          if (!(v35)) {                                 // #7612:111:160 [L d479 h479 c479]
            v27 = true;                                 // #7618:67:53 #7623:78:233 [-] /* never executed in any replay */
            break L8132_201;                            // #7626:102:53 [-] /* never executed in any replay */
          }
          if (v131 === v127) {                          // #7631:200:161 [L d479 h479 c479]
            v26 = true;                                 // #7648:27:233 [-] /* never executed in any replay */
            break L8132_201;                            // #7651:63:53 [-] /* never executed in any replay */
          }
          v36 = v32;                                    // #7656:28:150 [L d479 h479 c479]
          v37 = (v36).indexOf("--");                    // #7659:189:138 [L d479 h479 c479]
          v38 = v37 === 0;                              // #7679:181:65 [L d479 h479 c479]
          L7512_196: {
            if (v38) {                                  // #7683:112:160 [L d479 h479 c479]
              v39 = v32.length;                         // #7699:148:7 [-] /* never executed in any replay */
              v143 = 256;                               // #7703:248:233 [-] /* never executed in any replay */
              v40 = 256 < v39;                          // #7708:161:98 [-] /* never executed in any replay */
              if (v40) {                                // #7712:172:160 [-] /* never executed in any replay */
                v42 = v40;                              // #7742:48:150 [-] +#7745:64:53 /* never executed in any replay */
              } else {
                v144 = arr_v141.length;                 // #7718:204:53 #7723:107:7 [-] /* never executed in any replay */
                v145 = 16;                              // #7727:214:72 [-] /* never executed in any replay */
                v41 = 16 < v144;                        // #7730:135:98 [-] /* never executed in any replay */
                v42 = v41;                              // #7734:24:150 [-] +#7737:136:53 /* never executed in any replay */
              }
              if (v42) {                                // #7750:191:160 [-] /* never executed in any replay */
                v26 = true;                             // #7761:9:233 [-] /* never executed in any replay */
                break L8132_201;                        // #7764:245:53 [-] /* never executed in any replay */
              }
              v43 = [];                                 // #7756:83:53 #7769:162:107 [-] /* never executed in any replay */
              v146 = 0;                                 // #7771:241:72 [-] /* never executed in any replay */
              v147 = 0;                                 // #7774:196:72 [-] /* never executed in any replay */
              v148 = 1;                                 // #7777:11:72 [-] /* never executed in any replay */
              v149 = 0;                                 // #7780:246:72 [-] /* never executed in any replay */
              v150 = 1024;                              // #7783:82:233 [-] +#7788:90:53 /* never executed in any replay */
              for (;;) {
                v151 = arr_v141.length;                 // #7803:72:7 [-] /* never executed in any replay */
                v45 = v147 < v151; if (v147 < v151) {      // #7807:169:186 [-] /* never executed in any replay */
                  v152 = win_v109.String;               // #7825:57:7 [-] /* never executed in any replay */
                  v153 = arr_v141[v147];                // #7829:111:7 [-] /* never executed in any replay */
                  v46 = v152.call(win_v109, v153);      // #7833:132:138 [-] /* never executed in any replay */
                  v154 = v46.length;                    // #7853:78:7 [-] /* never executed in any replay */
                  if (v149 === v147) {                  // #7857:34:161 [-] /* never executed in any replay */
                    v155 = 0;                           // #7878:188:72 [-] +#7881:156:53 /* never executed in any replay */
                  } else {
                    v155 = 1;                           // #7865:234:53 #7870:213:72 [-] +#7873:145:53 /* never executed in any replay */
                  }
                  v156 = v154 + v155;                   // #7886:91:222 [-] /* never executed in any replay */
                  v146 = v146 + v156;                   // #7890:196:222 [-] /* never executed in any replay */
                  v157 = 1024 < v146;                   // #7894:61:98 [-] /* never executed in any replay */
                  if (v157) {                           // #7898:216:160 [-] /* never executed in any replay */
                    v26 = true;                         // #7909:29:233 [-] +#7912:185:53 /* never executed in any replay */
                  } else {
                    v158 = v43;                         // #7904:72:53 #7917:12:150 [-] /* never executed in any replay */
                    v159 = v158.push(v46);              // #7920:237:138 [-] /* never executed in any replay */
                    v44 = v147; v147 = v147 + 1;        // #7937:73:53 #7793:36:48 [-] /* never executed in any replay */
                    continue;
                  }
                }
                if (v26) {                              // #7942:3:160 [-] /* never executed in any replay */
                  break L8132_201;                      // #7953:157:53 [-] /* never executed in any replay */
                }
                v47 = v43.join();                       // #7948:135:53 #7958:118:138 [-] /* never executed in any replay */
                v160 = enc_v126;                        // #7974:11:150 [-] /* never executed in any replay */
                v161 = v160.encode;                     // #7977:121:7 [-] /* never executed in any replay */
                v48 = win_v109.JSON;                    // #7981:172:200 [-] /* never executed in any replay */
                v162 = v48;                             // #7986:233:150 [-] /* never executed in any replay */
                v163 = v162.stringify;                  // #7989:95:7 [-] /* never executed in any replay */
                v164 = [];                              // #7993:81:107 [-] /* never executed in any replay */
                v49 = 0; v164[0] = v32;                 // #7995:174:26 [-] /* never executed in any replay */
                v50 = 1; v164[1] = v47;                 // #8000:215:26 [-] /* never executed in any replay */
                v51 = v163.call(v162, v164);            // #8005:76:138 [-] /* never executed in any replay */
                v165 = v161.call(v160, v51);            // #8028:45:138 [-] /* never executed in any replay */
                v52 = v165.length;                      // #8048:147:7 [-] /* never executed in any replay */
                v166 = 2;                               // #8052:94:72 [-] /* never executed in any replay */
                v167 = v52 - 2;                         // #8055:115:54 [-] /* never executed in any replay */
                v53 = 2; if (v25 === 2) {               // #8059:7:69 [-] /* never executed in any replay */
                  v168 = 0;                             // #8081:203:72 [-] +#8084:47:53 /* never executed in any replay */
                } else {
                  v168 = 1;                             // #8068:123:53 #8073:42:72 [-] +#8076:210:53 /* never executed in any replay */
                }
                v54 = v167 + v168;                      // #8089:120:222 [-] /* never executed in any replay */
                v25 = v25 + v54;                        // #8093:173:222 [-] /* never executed in any replay */
                v169 = 4096;                            // #8097:237:233 [-] /* never executed in any replay */
                v55 = 4096 < v25;                       // #8102:2:98 [-] /* never executed in any replay */
                if (v55) {                              // #8106:201:160 [-] /* never executed in any replay */
                  v26 = true;                           // #8117:131:233 [-] /* never executed in any replay */
                  break L8132_201;                      // #8120:7:53 [-] /* never executed in any replay */
                }
                v22[v32] = v47;                         // #8112:181:53 #8125:103:210 [-] /* never executed in any replay */
                break L7512_196;
              }
            } else {
              // #7689:128:53 #7694:76:53 [L d479 h479 c479]
            }
          }
          v28 = v131; v131 = v131 + 1;                  // #7513:11:72 #7516:62:48 [L d479 h479 c479]
        }
      }
      if (v27) {                                        // #8133:153:233 #8142:196:160 [L d1 h1 c1]
        v56 = "BeEab5";                                 // #8192:213:233 [-] +#8202:145:53 /* never executed in any replay */
      } else {
        if (v26) {                                      // #8148:132:53 #8153:242:160 [L d1 h1 c1]
          v56 = "TDVNH6";                               // #8172:175:233 [-] +#8182:131:53 /* never executed in any replay */
        } else {
          v56 = v22;                                    // #8159:122:53 #8164:224:150 [L d1 h1 c1] +#8167:48:53
        }
      }
      v181.dKjG5 = v56;                                 // #8207:214:210 [L d1 h1 c1]
    } else {
      v57 = "zySuf5";                                   // #8215:67:233 #8224:171:233 [-] /* never executed in any replay */
      v181.dKjG5 = "zySuf5";                            // #8234:248:210 [-] /* never executed in any replay */
    }
    arr_v58 = tryStack.pop();                                // #8242:209:124 [L d1 h1 c1] +#8245:157:53
  } catch (caught) {
    v59 = caught;                                         // #8250:136:150 [-] /* never executed in any replay */
    v60 = KP(m8252k136);                                // #8253:28:233 [-] /* never executed in any replay */
    v61 = KP(m8261k28);                                 // #8262:96:233 [-] /* never executed in any replay */
    r204[v60] = v61;                                    // #8272:25:210 [-] /* never executed in any replay */
  }
  v62 = null;                                           // #8280:107:233 [L d1 h1 c1]
  cell[40] = null;                                      // #8283:37:195 [L d1 h1 c1]
  clos;                                                 // #8286:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #8298:63:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  try {
    TP(tryStack, 8912, 241, callDepths);                           // #8312:108:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    doc_v63 = win_v109.document;                        // #8318:147:200 #8323:244:150 [L d1 h1 c1]
    v64 = "iframe";                                     // #8326:216:233 [L d1 h1 c1]
    elIFrame_v65 = doc_v63.createElement("iframe");     // #8331:137:138 [L d1 h1 c1]
    cell[40] = elIFrame_v65;                            // #8357:75:195 [L d1 h1 c1]
    v66 = "height";                                     // #8360:147:233 [L d1 h1 c1]
    v67 = 1; elIFrame_v65.height = 1;                   // #8365:193:103 [L d1 h1 c1]
    v68 = "width";                                      // #8370:177:233 [L d1 h1 c1]
    v69 = 1; elIFrame_v65.width = 1;                    // #8375:231:103 [L d1 h1 c1]
    win_v70 = win_v109[v112];                           // #8380:229:7 [L d1 h1 c1]
    v71 = win_v70[KP(8383)];                            // #8384:104:200 [L d1 h1 c1]
    shadowRoot_v72 = v71.pkJkg9;                        // #8389:159:200 [L d1 h1 c1]
    elIFrame_v73 = shadowRoot_v72.appendChild(elIFrame_v65);  // #8394:244:138 [L d1 h1 c1]
    elIFrame_v74 = cell[40];                            // #8418:143:236 [L d1 h1 c1]
    doc_v75 = cell[40].contentDocument;                 // #8421:234:200 [L d1 h1 c1]
    if (doc_v75) {                                      // #8426:17:160 [L d1 h1 c1]
      doc_v78 = doc_v75;                                // #8455:234:150 [L d1 h1 c1] +#8458:146:53
    } else {
      v76 = elIFrame_v74.contentWindow;                 // #8432:221:53 #8437:240:200 [-] /* never executed in any replay */
      v77 = v76.document;                               // #8442:7:200 [-] /* never executed in any replay */
      doc_v78 = v76.document;                           // #8447:152:150 [-] +#8450:8:53 /* never executed in any replay */
    }
    doc_v79 = doc_v78;                                  // #8463:69:150 [L d1 h1 c1]
    fn_v80 = doc_v78.write;                             // #8466:72:200 [L d1 h1 c1]
    win_v81 = win_v109[v112];                           // #8475:2:7 [L d1 h1 c1]
    win_v82 = win_v81;                                  // #8479:103:150 [L d1 h1 c1]
    v83 = "<html><head></head><body></body></html>";    // #8482:63:233 [L d1 h1 c1]
    trustedHTML_v84 = win_v82.YDta0("<html><head></head><body></body></html>");  // #8525:20:138 [L d1 h1 c1]
    v85 = fn_v80.call(doc_v79, trustedHTML_v84);        // #8543:213:138 [L d1 h1 c1]
    v86 = (doc_v78).close();                            // #8562:210:138 [L d1 h1 c1]
    jSON_v87 = win_v109.JSON;                           // #8579:225:200 [L d1 h1 c1]
    jSON_v170 = jSON_v87;                               // #8584:138:150 [L d1 h1 c1]
    fn_v171 = jSON_v87.stringify;                       // #8587:185:200 [L d1 h1 c1]
    fn_v172 = win_v109.getComputedStyle;                // #8592:236:200 [L d1 h1 c1]
    elBody_v173 = doc_v78.body;                         // #8612:19:200 [L d1 h1 c1]
    style_v88 = fn_v172.call(win_v109, elBody_v173);    // #8617:152:138 [L d1 h1 c1]
    v89 = fn_v171.call(jSON_v170, style_v88);           // #8647:73:138 [L d1 h1 c1]
    v174 = r205();                                      // #8670:129:113 [L d1 h1 c1]
    v90 = "";                                           // #8674:113:233 [L d1 h1 c1]
    if (v89 === v90) {                                  // #8678:121:161 [L d1 h1 c1]
      v107 = "yybGm2";                                  // #8887:103:233 [-] /* never executed in any replay */
      v108 = "-";                                       // #8892:63:233 [-] /* never executed in any replay */
      r204.yybGm2 = "-";                                // #8897:60:210 [-] /* never executed in any replay */
    } else {
      v91 = cell[1];                                    // #8686:165:53 #8691:60:236 [L d1 h1 c1]
      v92 = cell[1];                                    // #8694:57:150 [L d1 h1 c1]
      v182 = v92.RkOO5(v89);                            // #8697:166:138 [L d1 h1 c1]
      fn_v93 = v182.then;                               // #8715:101:200 [L d1 h1 c1]
      fn_v94 = clos;                                    // #8720:184:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v94 = its home register (H139 CLOS bind)
      promise_v95 = fn_v93.call(v182, fn_v94);          // #8734:233:138 [L d1 h1 c1]
      fn_v96 = promise_v95.catch;                       // #8752:92:200 [L d1 h1 c1]
      v183 = clos;                                      // #8757:147:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v183 = its home register (H139 CLOS bind)
      promise_v97 = fn_v96.call(promise_v95, v183);     // #8768:24:138 [L d1 h1 c1]
      arr_v98 = cell[6];                                // #8787:35:236 [L d1 h1 c1]
      arr_v175 = cell[6];                               // #8790:68:150 [L d1 h1 c1]
      fn_v99 = arr_v175[v113];                          // #8793:14:7 [L d1 h1 c1]
      v184 = {};                                        // #8797:104:159 [L d1 h1 c1]
      v184.aJBc6 = promise_v97;                         // #8799:205:142 [L d1 h1 c1]
      v100 = "AzXDU3";                                  // #8804:141:233 [L d1 h1 c1]
      v101 = 2000;                                      // #8809:77:233 [L d1 h1 c1]
      v184.AzXDU3 = 2000;                               // #8814:243:199 [L d1 h1 c1]
      v102 = "Kavdk6";                                  // #8818:155:233 [L d1 h1 c1]
      v103 = cell[1];                                   // #8823:90:236 [L d1 h1 c1]
      v104 = v103[v111];                                // #8826:76:7 [L d1 h1 c1]
      v184.Kavdk6 = v104;                               // #8830:182:199 [L d1 h1 c1]
      v105 = "LfFR4";                                   // #8834:18:233 [L d1 h1 c1]
      v176 = {};                                        // #8839:92:159 [L d1 h1 c1]
      v177 = "yybGm2";                                  // #8841:160:233 [L d1 h1 c1]
      v178 = "AIPlV2";                                  // #8846:212:233 [L d1 h1 c1]
      v176.yybGm2 = "AIPlV2";                           // #8856:30:199 [L d1 h1 c1]
      v184.LfFR4 = v176;                                // #8860:192:199 [L d1 h1 c1]
      v106 = fn_v99.call(arr_v175, v184);               // #8864:209:138 [L d1 h1 c1] +#8882:157:53
    }
    arr_v179 = tryStack.pop();                               // #8905:220:124 [L d1 h1 c1]
    v180 = undefined;                                   // #8908:60:53 #9010:137:233 [L d1 h1 c1]
    return v180;                                        // #9013:53:245 [L d1 h1 c1]
  } catch (caught) {
    outside("L8915_90");                                // #8913:90:150 [-]  L8915_90 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}