function fn_document_202665(win_v168 /* r70 */, v169 /* r209 */, v170 /* r220 */, v171 /* r221 */) { // entry L202655_159; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 185 register webs used only inside this fn (no live-in, cross-call or table-made def; 18 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 11 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r196 */, v2 /* r204 */, v3 /* r202 */, v4 /* r199 */, v5 /* r205 */, win_v6 /* r205 */, v7 /* r205 */, v8 /* r202 */, v9 /* r204 */, win_v10 /* r205 */;
  let win_v11 /* r204 */, fn_v12 /* r202 */, v13 /* r205 */, fn_v14 /* r204 */, fn_v15 /* r205 */, v16 /* r205 */, arr_v17 /* r205 */, arr_v18 /* r204 */, v19 /* r199 */, v20 /* r202 */;
  let arr_v21 /* r202 */, v22 /* r204 */, arr_v23 /* r204 */, v24 /* r199 */, v25 /* r202 */, v26 /* r199 */, v27 /* r202 */, v28 /* r199 */, v29 /* r202 */, v30 /* r199 */;
  let v31 /* r202 */, v32 /* r199 */, v33 /* r202 */, v34 /* r199 */, v35 /* r202 */, v36 /* r199 */, v37 /* r202 */, v38 /* r199 */, v39 /* r202 */, arr_v40 /* r202 */;
  let v41 /* r204 */, arr_v42 /* r204 */, v43 /* r199 */, v44 /* r202 */, v45 /* r199 */, v46 /* r202 */, v47 /* r199 */, v48 /* r202 */, v49 /* r199 */, v50 /* r202 */;
  let v51 /* r199 */, v52 /* r202 */, v53 /* r199 */, v54 /* r202 */, v55 /* r199 */, v56 /* r202 */, arr_v57 /* r202 */, v58 /* r204 */, arr_v59 /* r204 */, v60 /* r199 */;
  let v61 /* r202 */, v62 /* r199 */, v63 /* r202 */, v64 /* r199 */, v65 /* r202 */, v66 /* r199 */, v67 /* r202 */, v68 /* r199 */, v69 /* r202 */, arr_v70 /* r202 */;
  let v71 /* r204 */, arr_v72 /* r204 */, fn_v73 /* r202 */, fn_v74 /* r205 */, arr_v75 /* r199 */, fn_v76 /* r198 */, v77 /* r202 */, v78 /* r204 */, v79 /* r205 */, v80 /* r204 */;
  let v81 /* r205 */, arr_v82 /* r198 */, arr_v83 /* r205 */, v84 /* r202 */, v85 /* r204 */, doc_v86 /* r205 */, doc_v87 /* r202 */, v88 /* r204 */, elDiv_v89 /* r205 */, fn_v90 /* r196 */;
  let elIFrame_v91 /* r204 */, doc_v92 /* r205 */, doc_v93 /* r195 */, v94 /* r204 */, elDiv_v95 /* r202 */, elBody_v96 /* r204 */, elDiv_v97 /* r195 */, documentFragment_v98 /* r204 */, elBody_v99 /* r198 */, elDiv_v100 /* r196 */;
  let doc_v101 /* r202 */, v102 /* r204 */, sVGGElement_v103 /* r205 */, sVGRect_v104 /* r196 */, fn_v105 /* r204 */, fn_v106 /* r202 */, fn_v107 /* r198 */, sVGRect_v108 /* r204 */, arr_v109 /* r196 */, fn_v110 /* r195 */;
  let fn_v111 /* r204 */, fn_v112 /* r202 */, v113 /* r198 */, v114 /* r204 */, fn_v115 /* r202 */, set_v116 /* r202 */, fn_v117 /* r198 */, fn_v118 /* r196 */, fn_v119 /* r195 */, sVGGElement_v120 /* r193 */;
  let v121 /* r205 */, hTMLCollection_v122 /* r198 */, arr_v123 /* r205 */, arr_v124 /* r196 */, fn_v125 /* r195 */, fn_v126 /* r198 */, v127 /* r193 */, v128 /* r198 */, fn_v129 /* r196 */, fn_v130 /* r195 */;
  let arr_v131 /* r196 */, fn_v132 /* r195 */, fn_v133 /* r202 */, fn_v134 /* r196 */, fn_v135 /* r202 */, v136 /* r195 */, v137 /* r196 */, v138 /* r202 */, fn_v139 /* r198 */, fn_v140 /* r202 */;
  let fn_v141 /* r204 */, fn_v142 /* r202 */, v143 /* r198 */, v144 /* r204 */, arr_v145 /* r204 */, fn_v146 /* r198 */, fn_v147 /* r205 */, sVGTextElement_v148 /* r202 */, sVGTextElement_v149 /* r204 */, fn_v150 /* r202 */;
  let v151 /* r205 */, sVGRect_v152 /* r199 */, fn_v153 /* r205 */, fn_v154 /* r204 */, fn_v155 /* r202 */, sVGRect_v156 /* r205 */, arr_v157 /* r199 */, fn_v158 /* r205 */, fn_v159 /* r204 */, v160 /* r202 */;
  let v161 /* r205 */, arr_v162 /* r205 */, win_v163 /* r204 */, v164 /* r205 */, shadowRoot_v165 /* r204 */, elDiv_v166 /* r205 */, fn_v167 /* r205 */, v172 /* r198 */, v173 /* r199 */, v174 /* r204 */;
  let v175 /* r202 */, v176 /* r205 */, arr_v177 /* r193 */, fn_v178 /* r192 */, arr_v179 /* r196 */, fn_v180 /* r195 */, fn_v181 /* r198 */, fn_v182 /* r202 */, elDiv_v183 /* r199 */, v184 /* r204 */;
  let v185 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v6 3, win_v10 3, win_v11 3, win_v163 3, win_v168 3
  //   Function: fn_v12 3, fn_v14 3, fn_v15 3, fn_v73 3, fn_v74 3, fn_v76 3, fn_v90 3, fn_v105 3
  //   Function: fn_v106 3, fn_v107 3, fn_v110 3, fn_v111 3, fn_v112 3, fn_v115 3, fn_v117 3, fn_v118 3
  //   Function: fn_v119 3, fn_v125 3, fn_v126 3, fn_v129 3, fn_v130 3, fn_v132 3, fn_v133 3, fn_v134 3
  //   Function: fn_v135 3, fn_v139 3, fn_v140 3, fn_v141 3, fn_v142 3, fn_v146 3, fn_v147 3, fn_v150 3
  //   Function: fn_v153 3, fn_v154 3, fn_v155 3, fn_v158 3, fn_v159 3, fn_v167 3, fn_v178 3, fn_v180 3
  //   Function: fn_v181 3, fn_v182 3
  //   Array: arr_v17 3, arr_v18 3, arr_v21 3, arr_v23 3, arr_v40 3, arr_v42 3, arr_v57 3, arr_v59 3
  //   Array: arr_v70 3, arr_v72 3, arr_v75 3, arr_v82 3, arr_v83 3, arr_v109 3, arr_v123 3, arr_v124 3
  //   Array: arr_v131 3, arr_v145 3, arr_v157 3, arr_v162 3, arr_v177 3, arr_v179 3
  //   HTMLDocument: doc_v86 3, doc_v87 3, doc_v92 3, doc_v93 3, doc_v101 3
  //   HTMLDivElement: elDiv_v89 3, elDiv_v95 3, elDiv_v97 3, elDiv_v100 3, elDiv_v166 3, elDiv_v183 3
  //   HTMLIFrameElement: elIFrame_v91 3
  //   HTMLBodyElement: elBody_v96 3, elBody_v99 3
  //   DocumentFragment: documentFragment_v98 3
  //   SVGGElement: sVGGElement_v103 3, sVGGElement_v120 3
  //   SVGRect: sVGRect_v104 3, sVGRect_v108 3, sVGRect_v152 3, sVGRect_v156 3
  //   Set: set_v116 3
  //   HTMLCollection: hTMLCollection_v122 3
  //   SVGTextElement: sVGTextElement_v148 3, sVGTextElement_v149 3
  //   ShadowRoot: shadowRoot_v165 3
  // H133 rewrites: 2 single-use temps folded (1 of them expressions, H135), 14 dead register writes dropped, 9 constants propagated (9 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  NC(19, 20, 21, 23, 24, 30, 31, 32, 34, 35, 36, 37, 38);  // #202656:179:53 #202666:176:211 [L d1 h1 c1]
  v172 = undefined;                                     // #202681:164:233 #202684:200:233 [L d1 h1 c1]
  v1 = undefined;                                       // #202687:92:233 #202690:160:233 #202693:212:233 #202696:56:233 #202699:12:233 #202702:144:233 #202705:4:233 #202708:168:233 [L d1 h1 c1]
  v2 = undefined;                                       // #202711:188:233 #202714:128:233 #202717:52:233 #202720:24:233 #202723:108:233 [L d1 h1 c1]
  v3 = undefined;                                       // #202726:112:233 [L d1 h1 c1]
  v4 = undefined;                                       // #202729:100:233 #202732:136:233 [L d1 h1 c1]
  v5 = undefined;                                       // #202735:28:233 [L d1 h1 c1]
  clos;                                                 // #202738:83:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #202750:110:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #202762:221:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #202778:80:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  win_v6 = win_v168.globalThis;                         // #202793:231:200 [L d1 h1 c1]
  cell[19] = win_v6;                                    // #202798:177:195 [L d1 h1 c1]
  v7 = cell[1];                                         // #202801:152:236 [L d1 h1 c1]
  v8 = v7[v170];                                        // #202804:18:7 [L d1 h1 c1]
  v9 = v7[v8];                                          // #202808:36:7 [L d1 h1 c1]
  cell[20] = v9;                                        // #202812:58:195 [L d1 h1 c1]
  win_v10 = win_v168[v171];                             // #202815:172:7 [L d1 h1 c1]
  win_v11 = win_v10;                                    // #202819:233:150 [L d1 h1 c1]
  fn_v12 = win_v11[v169];                               // #202822:95:7 [L d1 h1 c1]
  v13 = KP(202825);                                     // #202826:87:233 [L d1 h1 c1]
  v173 = fn_v12.call(win_v11, v13);                     // #202879:204:138 [L d1 h1 c1]
  fn_v14 = win_v168.String;                             // #202899:115:200 [L d1 h1 c1]
  fn_v15 = fn_v14.fromCodePoint;                        // #202904:62:200 [L d1 h1 c1]
  if (fn_v15) {                                         // #202909:21:160 [L d1 h1 c1]
    arr_v17 = [];                                       // #202950:210:107 [L d1 h1 c1]
    arr_v18 = [];                                       // #202952:184:107 [L d1 h1 c1]
    v19 = 128512;                                       // #202954:140:233 [L d1 h1 c1]
    v20 = 0; arr_v18[0] = 128512;                       // #202960:189:26 [L d1 h1 c1]
    arr_v21 = arr_v18;                                  // #202965:246:150 [L d1 h1 c1]
    v22 = 0; arr_v17[0] = arr_v21;                      // #202968:255:26 [L d1 h1 c1]
    arr_v23 = [];                                       // #202973:113:107 [L d1 h1 c1]
    v24 = 128105;                                       // #202975:161:233 [L d1 h1 c1]
    v25 = 0; arr_v23[0] = 128105;                       // #202981:190:26 [L d1 h1 c1]
    v26 = 8205;                                         // #202986:250:233 [L d1 h1 c1]
    v27 = 1; arr_v23[1] = 8205;                         // #202991:243:26 [L d1 h1 c1]
    v28 = 10084;                                        // #202996:155:233 [L d1 h1 c1]
    v29 = 2; arr_v23[2] = 10084;                        // #203001:80:26 [L d1 h1 c1]
    v30 = 65039;                                        // #203006:196:233 [L d1 h1 c1]
    v31 = 3; arr_v23[3] = 65039;                        // #203012:21:26 [L d1 h1 c1]
    v32 = 8205;                                         // #203017:181:233 [L d1 h1 c1]
    v33 = 4; arr_v23[4] = 8205;                         // #203022:130:26 [L d1 h1 c1]
    v34 = 128139;                                       // #203027:174:233 [L d1 h1 c1]
    v35 = 5; arr_v23[5] = 128139;                       // #203033:215:26 [L d1 h1 c1]
    v36 = 8205;                                         // #203038:239:233 [L d1 h1 c1]
    v37 = 6; arr_v23[6] = 8205;                         // #203043:84:26 [L d1 h1 c1]
    v38 = 128104;                                       // #203048:184:233 [L d1 h1 c1]
    v39 = 7; arr_v23[7] = 128104;                       // #203054:57:26 [L d1 h1 c1]
    arr_v40 = arr_v23;                                  // #203059:130:150 [L d1 h1 c1]
    v41 = 1; arr_v17[1] = arr_v40;                      // #203062:91:26 [L d1 h1 c1]
    arr_v42 = [];                                       // #203067:93:107 [L d1 h1 c1]
    v43 = 128104;                                       // #203069:221:233 [L d1 h1 c1]
    v44 = 0; arr_v42[0] = 128104;                       // #203075:10:26 [L d1 h1 c1]
    v45 = 8205;                                         // #203080:22:233 [L d1 h1 c1]
    v46 = 1; arr_v42[1] = 8205;                         // #203085:159:26 [L d1 h1 c1]
    v47 = 128105;                                       // #203090:151:233 [L d1 h1 c1]
    v48 = 2; arr_v42[2] = 128105;                       // #203096:92:26 [L d1 h1 c1]
    v49 = 8205;                                         // #203101:160:233 [L d1 h1 c1]
    v50 = 3; arr_v42[3] = 8205;                         // #203106:129:26 [L d1 h1 c1]
    v51 = 128103;                                       // #203111:113:233 [L d1 h1 c1]
    v52 = 4; arr_v42[4] = 128103;                       // #203117:78:26 [L d1 h1 c1]
    v53 = 8205;                                         // #203122:74:233 [L d1 h1 c1]
    v54 = 5; arr_v42[5] = 8205;                         // #203127:3:26 [L d1 h1 c1]
    v55 = 128102;                                       // #203132:107:233 [L d1 h1 c1]
    v56 = 6; arr_v42[6] = 128102;                       // #203138:224:26 [L d1 h1 c1]
    arr_v57 = arr_v42;                                  // #203143:77:150 [L d1 h1 c1]
    v58 = 2; arr_v17[2] = arr_v57;                      // #203146:186:26 [L d1 h1 c1]
    arr_v59 = [];                                       // #203151:0:107 [L d1 h1 c1]
    v60 = 128104;                                       // #203153:180:233 [L d1 h1 c1]
    v61 = 0; arr_v59[0] = 128104;                       // #203159:69:26 [L d1 h1 c1]
    v62 = 8205;                                         // #203164:37:233 [L d1 h1 c1]
    v63 = 1; arr_v59[1] = 8205;                         // #203169:50:26 [L d1 h1 c1]
    v64 = 128105;                                       // #203174:158:233 [L d1 h1 c1]
    v65 = 2; arr_v59[2] = 128105;                       // #203180:7:26 [L d1 h1 c1]
    v66 = 8205;                                         // #203185:95:233 [L d1 h1 c1]
    v67 = 3; arr_v59[3] = 8205;                         // #203190:4:26 [L d1 h1 c1]
    v68 = 128102;                                       // #203195:168:233 [L d1 h1 c1]
    v69 = 4; arr_v59[4] = 128102;                       // #203201:105:26 [L d1 h1 c1]
    arr_v70 = arr_v59;                                  // #203206:242:150 [L d1 h1 c1]
    v71 = 3; arr_v17[3] = arr_v70;                      // #203209:11:26 [L d1 h1 c1]
    arr_v72 = arr_v17;                                  // #203214:140:150 [L d1 h1 c1]
    fn_v73 = arr_v17.map;                               // #203217:51:200 [L d1 h1 c1]
    fn_v74 = clos;                                      // #203222:206:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v74 = its home register (H139 CLOS bind)
    arr_v75 = fn_v73.call(arr_v72, fn_v74);             // #203234:39:138 [L d1 h1 c1]
    cell[21] = arr_v75;                                 // #203251:241:195 [L d1 h1 c1]
    fn_v76 = clos;                                      // #203254:20:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v76 = its home register (H139 CLOS bind)
    v77 = undefined;                                    // #203268:120:233 [L d1 h1 c1]
    v78 = KP(203270);                                   // #203271:76:233 [L d1 h1 c1]
    v79 = cell[19][KP(m204575k76)](v78);                // #204576:5:66 [L d1 h1 c1]
    v80 = MC(undefined, fn_v76, v79);                   // #204593:138:114 [L d1 h1 c1]
    v81 = "A";                                          // #204598:150:233 [L d1 h1 c1]
    arr_v82 = v80.split("A");                           // #204603:207:138 [L d1 h1 c1]
    arr_v83 = [];                                       // #204621:1:107 [L d1 h1 c1]
    v84 = "italic 150px serif";                         // #204623:241:233 [L d1 h1 c1]
    v85 = 0; arr_v83[0] = "italic 150px serif";         // #204645:206:26 [L d1 h1 c1]
    cell[23] = arr_v83;                                 // #204650:188:195 [L d1 h1 c1]
    doc_v86 = win_v168.document;                        // #204653:163:200 [L d1 h1 c1]
    doc_v87 = doc_v86;                                  // #204658:196:150 [L d1 h1 c1]
    v88 = "div";                                        // #204661:104:233 [L d1 h1 c1]
    elDiv_v89 = doc_v87.createElement("div");           // #204666:217:138 [L d1 h1 c1]
    cell[24] = elDiv_v89;                               // #204692:91:195 [L d1 h1 c1]
    clos;                                               // #204695:86:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    clos;                                               // #204707:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v90 = clos;                                      // #204719:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v90 = its home register (H139 CLOS bind)
    elIFrame_v91 = r205();                              // #204735:180:113 [L d1 h1 c1]
    doc_v92 = r202(elIFrame_v91);                       // #204739:0:113 [L d1 h1 c1]
    doc_v93 = win_v168.document;                        // #204744:215:200 #204749:40:150 [L d1 h1 c1]
    v94 = "div";                                        // #204752:60:233 [L d1 h1 c1]
    elDiv_v95 = doc_v93.createElement("div");           // #204757:93:138 [L d1 h1 c1]
    elBody_v96 = doc_v92.body;                          // #204783:0:200 [L d1 h1 c1]
    elDiv_v97 = elBody_v96.appendChild(elDiv_v95);      // #204788:17:138 [L d1 h1 c1]
    documentFragment_v98 = fn_v90(arr_v75, arr_v82);    // #204812:41:113 [L d1 h1 c1]
    elBody_v99 = elDiv_v95.parentNode;                  // #204818:156:200 [L d1 h1 c1]
    elDiv_v100 = (elBody_v99).replaceChild(documentFragment_v98, elDiv_v95);  // #204823:61:138 [L d1 h1 c1]
    doc_v101 = doc_v92;                                 // #204849:118:150 [L d1 h1 c1]
    v102 = "TnIbl4";                                    // #204852:210:233 [L d1 h1 c1]
    sVGGElement_v103 = (doc_v101).getElementById("TnIbl4");  // #204862:27:138 [L d1 h1 c1]
    sVGRect_v104 = sVGGElement_v103.getBBox();          // #204889:128:138 [L d1 h1 c1]
    cell[30] = sVGRect_v104;                            // #204908:38:195 [L d1 h1 c1]
    fn_v105 = win_v168.Object;                          // #204911:229:200 [L d1 h1 c1]
    fn_v106 = fn_v105;                                  // #204916:126:150 [L d1 h1 c1]
    fn_v107 = fn_v105.keys;                             // #204919:221:200 [L d1 h1 c1]
    sVGRect_v108 = sVGRect_v104.__proto__;              // #204924:128:200 [L d1 h1 c1]
    arr_v109 = fn_v107.call(fn_v106, sVGRect_v108);     // #204929:145:138 [L d1 h1 c1]
    fn_v110 = arr_v109.reduce;                          // #204947:100:200 [L d1 h1 c1]
    fn_v111 = clos;                                     // #204952:123:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v111 = its home register (H139 CLOS bind)
    fn_v112 = fn_v111;                                  // #204965:60:150 [L d1 h1 c1]
    v113 = {};                                          // #204968:94:159 [L d1 h1 c1]
    v114 = fn_v110.call(arr_v109, fn_v112, v113);       // #204970:119:138 [L d1 h1 c1]
    cell[31] = v114;                                    // #204991:1:195 [L d1 h1 c1]
    fn_v115 = win_v168.Set;                             // #204994:20:200 [L d1 h1 c1]
    set_v116 = new fn_v115();                           // #205001:48:1 [L d1 h1 c1]
    cell[32] = set_v116;                                // #205005:22:195 [L d1 h1 c1]
    fn_v117 = win_v168.Array;                           // #205008:21:200 [L d1 h1 c1]
    fn_v118 = fn_v117;                                  // #205013:238:150 [L d1 h1 c1]
    fn_v119 = fn_v117.from;                             // #205016:141:200 [L d1 h1 c1]
    sVGGElement_v120 = sVGGElement_v103;                // #205024:134:150 [L d1 h1 c1]
    v121 = "JglnG4";                                    // #205027:162:233 [L d1 h1 c1]
    hTMLCollection_v122 = sVGGElement_v120.getElementsByClassName("JglnG4");  // #205037:171:138 [L d1 h1 c1]
    arr_v123 = fn_v119.call(fn_v118, hTMLCollection_v122);  // #205072:208:138 [L d1 h1 c1]
    arr_v124 = arr_v123;                                // #205090:125:150 [L d1 h1 c1]
    fn_v125 = arr_v123.forEach;                         // #205093:160:200 [L d1 h1 c1]
    fn_v126 = clos;                                     // #205098:199:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v126 = its home register (H139 CLOS bind)
    v127 = fn_v125.call(arr_v124, fn_v126);             // #205109:124:138 [L d1 h1 c1]
    v128 = 0.00001;                                     // #205130:64:233 [L d1 h1 c1]
    fn_v129 = win_v168.Array;                           // #205141:23:200 [L d1 h1 c1]
    fn_v130 = fn_v129;                                  // #205146:104:150 [L d1 h1 c1]
    arr_v131 = fn_v130.from(set_v116);                  // #205149:217:138 [L d1 h1 c1]
    fn_v132 = arr_v131.map;                             // #205166:140:200 [L d1 h1 c1]
    fn_v133 = clos;                                     // #205171:3:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v133 = its home register (H139 CLOS bind)
    arr_v177 = fn_v132.call(arr_v131, fn_v133);         // #205184:200:138 [L d1 h1 c1]
    fn_v178 = arr_v177.reduce;                          // #205201:127:200 [L d1 h1 c1]
    fn_v134 = clos;                                     // #205206:234:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v134 = its home register (H139 CLOS bind)
    fn_v135 = fn_v134;                                  // #205218:175:150 [L d1 h1 c1]
    v136 = 0;                                           // #205221:10:72 [L d1 h1 c1]
    v137 = fn_v178.call(arr_v177, fn_v135, 0);          // #205224:115:138 [L d1 h1 c1]
    v138 = v128 * v137;                                 // #205245:175:13 [L d1 h1 c1]
    cell[34] = v138;                                    // #205249:89:195 [L d1 h1 c1]
    fn_v139 = win_v168.Object;                          // #205252:12:200 [L d1 h1 c1]
    fn_v140 = fn_v139;                                  // #205257:201:150 [L d1 h1 c1]
    arr_v179 = fn_v140.keys(v114);                      // #205260:246:138 [L d1 h1 c1]
    fn_v180 = arr_v179.reduce;                          // #205277:117:200 [L d1 h1 c1]
    fn_v141 = clos;                                     // #205282:136:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v141 = its home register (H139 CLOS bind)
    fn_v142 = fn_v141;                                  // #205296:85:150 [L d1 h1 c1]
    v143 = 0;                                           // #205299:152:72 [L d1 h1 c1]
    v144 = fn_v180.call(arr_v179, fn_v142, 0);          // #205302:73:138 [L d1 h1 c1]
    cell[35] = v144;                                    // #205323:11:195 [L d1 h1 c1]
    arr_v145 = arr_v123;                                // #205326:140:150 [L d1 h1 c1]
    fn_v146 = arr_v123.find;                            // #205329:51:200 [L d1 h1 c1]
    fn_v147 = clos;                                     // #205337:206:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v147 = its home register (H139 CLOS bind)
    sVGTextElement_v148 = fn_v146.call(arr_v145, fn_v147);  // #205349:39:138 [L d1 h1 c1]
    cell[36] = sVGTextElement_v148;                     // #205367:241:195 [L d1 h1 c1]
    try {
      TP(tryStack, 205527, 41, callDepths);                        // #205370:214:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      sVGTextElement_v149 = sVGTextElement_v148;        // #205376:235:150 [L d1 h1 c1]
      fn_v150 = sVGTextElement_v148.getExtentOfChar;    // #205379:214:200 [L d1 h1 c1]
      v151 = arr_v75[0];                                // #205398:85:72 #205401:27:7 [L d1 h1 c1]
      sVGRect_v152 = fn_v150.call(sVGTextElement_v149, v151);  // #205405:128:138 [L d1 h1 c1]
      cell[38] = sVGRect_v152;                          // #205434:38:195 [L d1 h1 c1]
      fn_v153 = win_v168.Object;                        // #205437:229:200 [L d1 h1 c1]
      fn_v154 = fn_v153;                                // #205442:126:150 [L d1 h1 c1]
      fn_v155 = fn_v153.keys;                           // #205445:221:200 [L d1 h1 c1]
      sVGRect_v156 = sVGRect_v152.__proto__;            // #205450:128:200 [L d1 h1 c1]
      arr_v157 = fn_v155.call(fn_v154, sVGRect_v156);   // #205455:145:138 [L d1 h1 c1]
      fn_v181 = arr_v157.reduce;                        // #205473:100:200 [L d1 h1 c1]
      fn_v158 = clos;                                   // #205478:123:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v158 = its home register (H139 CLOS bind)
      fn_v159 = fn_v158;                                // #205490:60:150 [L d1 h1 c1]
      v160 = 0;                                         // #205493:163:72 [L d1 h1 c1]
      v161 = fn_v181.call(arr_v157, fn_v159, 0);        // #205496:232:138 [L d1 h1 c1]
      cell[37] = v161;                                  // #205517:238:195 [L d1 h1 c1]
      arr_v162 = tryStack.pop();                             // #205520:113:124 [L d1 h1 c1]
      win_v163 = win_v168[v171];                        // #205523:189:53 #205536:210:7 [L d1 h1 c1]
      v164 = win_v163[KP(205539)];                      // #205540:225:200 [L d1 h1 c1]
      shadowRoot_v165 = v164.pkJkg9;                    // #205545:116:200 [L d1 h1 c1]
      fn_v182 = shadowRoot_v165.removeChild;            // #205550:123:200 [L d1 h1 c1]
      elDiv_v166 = cell[24];                            // #205555:186:236 [L d1 h1 c1]
      elDiv_v183 = fn_v182.call(shadowRoot_v165, elDiv_v166);  // #205558:99:138 [L d1 h1 c1]
      fn_v167 = clos;                                   // #205583:62:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v167 = its home register (H139 CLOS bind)
      v184 = fn_v167();                                 // #205598:226:113 [L d1 h1 c1]
      v185 = undefined;                                 // #205602:142:233 [L d1 h1 c1]
      return v185;                                      // #205605:102:245 [L d1 h1 c1]
    } catch (caught) {
      outside("L205530_178");                           // #205528:178:150 [-]  L205530_178 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    v174 = cell[20];                                    // #202915:209:53 #202920:254:236 [-] /* never executed in any replay */
    v16 = "NJye4";                                      // #202923:58:233 [-] /* never executed in any replay */
    v175 = "f";                                         // #202932:134:233 [-] /* never executed in any replay */
    v174.NJye4 = "f";                                   // #202937:136:199 [-] /* never executed in any replay */
    r205 = cell[16]();                                  // #202941:124:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    v176 = undefined;                                   // #202945:64:233 [-] /* never executed in any replay */
    return v176;                                        // #202948:208:245 [-] /* never executed in any replay */
  }
}