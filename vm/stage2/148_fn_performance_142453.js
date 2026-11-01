function fn_performance_142453(win_v163 /* r70 */, v164 /* r209 */, v165 /* r220 */, v166 /* r221 */, v167 /* r223 */) { // entry L142443_246; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 207 register webs used only inside this fn (no live-in, cross-call or table-made def; 45 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 11 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r198 */, v2 /* r204 */, v3 /* r195 */, v4 /* r193 */, v5 /* r196 */, v6 /* r202 */, v7 /* r199 */, v8 /* r205 */, fn_v9 /* r205 */, v10 /* r205 */;
  let v11 /* r202 */, v12 /* r204 */, win_v13 /* r205 */, win_v14 /* r204 */, fn_v15 /* r202 */, v16 /* r205 */, v17 /* r199 */, win_v18 /* r205 */, memoryInfo_v19 /* r199 */, win_v20 /* r205 */;
  let perf_v21 /* r204 */, memoryInfo_v22 /* r205 */, v23 /* r204 */, v24 /* r198 */, v25 /* r195 */, v26 /* r196 */, arr_v27 /* r198 */, v28 /* r205 */, fn_v29 /* r202 */, fn_v30 /* r198 */;
  let v31 /* r198 */, v32 /* r199 */, v33 /* r198 */, v34 /* r204 */, v35 /* r205 */, v36 /* r205 */, fn_v37 /* r205 */, fn_v38 /* r202 */, fn_v39 /* r199 */, win_v40 /* r204 */;
  let perf_v41 /* r205 */, memoryInfo_v42 /* r204 */, memoryInfo_v43 /* r205 */, fn_v44 /* r202 */, fn_v45 /* r204 */, arr_v46 /* r198 */, arr_v47 /* r204 */, v48 /* r196 */, v49 /* r193 */, v50 /* r195 */;
  let v51 /* r205 */, v52 /* r205 */, v53 /* r205 */, v54 /* r204 */, arr_v55 /* r204 */, arr_v56 /* r202 */, fn_v57 /* r199 */, v58 /* r204 */, v59 /* r205 */, v60 /* r204 */;
  let arr_v61 /* r204 */, v62 /* r205 */, v63 /* r205 */, worker_v64 /* r202 */, fn_v65 /* r198 */, v66 /* r205 */, fn_v67 /* r204 */, v68 /* r196 */, fn_v69 /* r204 */, win_v70 /* r204 */;
  let v71 /* r205 */, shadowRoot_v72 /* r204 */, v73 /* r204 */, v74 /* r205 */, v75 /* r202 */, fn_v76 /* r205 */, doc_v77 /* r204 */, v78 /* r205 */, elIFrame_v79 /* r202 */, v80 /* r205 */;
  let v81 /* r204 */, v82 /* r205 */, v83 /* r204 */, win_v84 /* r204 */, v85 /* r199 */, v86 /* r202 */, doc_v87 /* r202 */, elScript_v88 /* r204 */, v89 /* r205 */, v90 /* r195 */;
  let v91 /* r204 */, v92 /* r205 */, v93 /* r204 */, v94 /* r193 */, v95 /* r204 */, v96 /* r205 */, v97 /* r204 */, elIFrame_v98 /* r202 */, win_v99 /* r204 */, v100 /* r199 */;
  let v101 /* r204 */, v102 /* r199 */, v103 /* r204 */, trustedHTML_v104 /* r204 */, v105 /* r205 */, v106 /* r205 */, elIFrame_v107 /* r202 */, v108 /* r204 */, v109 /* r204 */, v110 /* r204 */;
  let v111 /* r204 */, shadowRoot_v112 /* r204 */, elIFrame_v113 /* r204 */, v114 /* r202 */, win_v115 /* r204 */, trustedTypePolicyFactory_v116 /* r204 */, v117 /* r204 */, v118 /* r204 */, v119 /* r204 */, v120 /* r204 */;
  let style_v121 /* r204 */, shadowRoot_v122 /* r204 */, elIFrame_v123 /* r204 */, doc_v124 /* r202 */, v125 /* r202 */, v126 /* r204 */, v127 /* r204 */, v128 /* r202 */, win_v129 /* r202 */, trustedTypePolicyFactory_v130 /* r204 */;
  let fn_v131 /* r204 */, fn_v132 /* r202 */, v133 /* r204 */, v134 /* r202 */, arr_v135 /* r204 */, v136 /* r204 */, elDiv_v137 /* r202 */, v138 /* r204 */, arr_v139 /* r204 */, win_v140 /* r202 */;
  let v141 /* r204 */, v142 /* r204 */, v143 /* r202 */, v144 /* r204 */, v145 /* r202 */, v146 /* r204 */, elScript_v147 /* r202 */, v148 /* r204 */, arr_v149 /* r204 */, arr_v150 /* r204 */;
  let shadowRoot_v151 /* r204 */, shadowRoot_v152 /* r202 */, v153 /* r202 */, shadowRoot_v154 /* r204 */, shadowRoot_v155 /* r202 */, elIFrame_v156 /* r204 */, elIFrame_v157 /* r202 */, v158 /* r202 */, doc_v159 /* r202 */, v160 /* r202 */;
  let v161 /* r202 */, v162 /* r202 */, v168 /* r192 */, v169 /* r253 */, perf_v170 /* r254 */, win_v171 /* r198 */, v172 /* r196 */, v173 /* r193 */, v174 /* r195 */, v175 /* r205 */;
  let v176 /* r198 */, fn_v177 /* r195 */, doc_v178 /* r198 */, v179 /* r198 */, v180 /* r198 */, v181 /* r198 */, shadowRoot_v182 /* r198 */, trustedTypePolicyFactory_v183 /* r253 */, trustedTypePolicyFactory_v184 /* r198 */, fn_v185 /* r195 */;
  let v186 /* r193 */, fn_v187 /* r254 */, v188 /* r193 */, fn_v189 /* r254 */, v190 /* r193 */, fn_v191 /* r254 */, trustedTypePolicy_v192 /* r193 */, doc_v193 /* r198 */, v194 /* r198 */, v195 /* r198 */;
  let doc_v196 /* r198 */, v197 /* r198 */, v198 /* r198 */, v199 /* r204 */, fn_v200 /* r195 */, v201 /* r198 */, v202 /* r193 */, v203 /* r198 */, v204 /* r195 */, v205 /* r202 */;
  let v206 /* r204 */, v207 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v9 3, fn_v15 3, fn_v29 3, fn_v30 3, fn_v37 3, fn_v38 3, fn_v39 3, fn_v44 3
  //   Function: fn_v45 3, fn_v57 9, fn_v65 3, fn_v67 3, fn_v69 3, fn_v76 3, fn_v131 3, fn_v132 3
  //   Function: fn_v177 3, fn_v185 3, fn_v187 3, fn_v189 3, fn_v191 3, fn_v200 3
  //   Window: win_v13 3, win_v14 3, win_v18 3, win_v20 3, win_v40 3, win_v70 3, win_v84 3, win_v99 3
  //   Window: win_v115 3, win_v129 3, win_v140 3, win_v163 3, win_v171 3
  //   MemoryInfo: memoryInfo_v19 3, memoryInfo_v22 3, memoryInfo_v42 3, memoryInfo_v43 3
  //   Performance: perf_v21 3, perf_v41 3, perf_v170 3
  //   Array: arr_v27 3, arr_v46 3, arr_v47 3, arr_v55 9, arr_v56 9, arr_v61 3, arr_v135 3, arr_v139 3
  //   Array: arr_v149 3, arr_v150 3
  //   Worker: worker_v64 3
  //   ShadowRoot: shadowRoot_v72 3, shadowRoot_v112 3, shadowRoot_v122 3, shadowRoot_v151 3, shadowRoot_v152 3, shadowRoot_v154 3, shadowRoot_v155 3, shadowRoot_v182 3
  //   HTMLDocument: doc_v77 3, doc_v87 3, doc_v124 3, doc_v159 3, doc_v178 3, doc_v193 3, doc_v196 3
  //   HTMLIFrameElement: elIFrame_v79 3, elIFrame_v98 3, elIFrame_v107 3, elIFrame_v113 3, elIFrame_v123 3, elIFrame_v156 3, elIFrame_v157 3
  //   HTMLScriptElement: elScript_v88 3, elScript_v147 3
  //   TrustedHTML: trustedHTML_v104 3
  //   TrustedTypePolicyFactory: trustedTypePolicyFactory_v116 3, trustedTypePolicyFactory_v130 3, trustedTypePolicyFactory_v183 3, trustedTypePolicyFactory_v184 3
  //   CSSStyleDeclaration: style_v121 3
  //   HTMLDivElement: elDiv_v137 3
  //   TrustedTypePolicy: trustedTypePolicy_v192 3
  // H137 proven reads: 13 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 4 reads keep the register
  let v208 /* r199 */, v209 /* r199 */, v210 /* r199 */, v211 /* r199 */, v212 /* r199 */, v213 /* r199 */;
  // H133 rewrites: 5 single-use temps folded (4 of them expressions, H135), 35 dead register writes dropped, 12 constants propagated (12 uses), 3 string keys as .member; 2 webs kept as registers (crossCall 1, retOut 2)
  NC(19, 21, 22, 23, 24, 25, 30, 31, 37, 53, 54, 55, 56);  // #142444:110:53 #142454:8:211 [L d1 h1 c1]
  v1 = undefined;                                       // #142469:156:233 #142472:224:233 #142475:20:233 #142478:120:233 #142481:76:233 #142484:208:233 #142487:68:233 #142490:232:233 [L d1 h1 c1]
  v2 = undefined;                                       // #142493:252:233 #142496:192:233 #142499:116:233 #142502:88:233 #142505:172:233 #142508:176:233 [L d1 h1 c1]
  v3 = undefined;                                       // #142511:164:233 [L d1 h1 c1]
  v4 = undefined;                                       // #142514:200:233 [L d1 h1 c1]
  v168 = undefined;                                     // #142517:92:233 #142520:160:233 #142523:212:233 [L d1 h1 c1]
  v5 = undefined;                                       // #142526:56:233 #142529:12:233 #142532:144:233 [L d1 h1 c1]
  v169 = undefined;                                     // #142535:4:233 #142538:168:233 [L d1 h1 c1]
  v6 = undefined;                                       // #142541:188:233 #142544:128:233 #142547:52:233 #142550:24:233 #142553:108:233 [L d1 h1 c1]
  v7 = undefined;                                       // #142556:112:233 #142559:100:233 #142562:136:233 [L d1 h1 c1]
  v8 = undefined;                                       // #142565:28:233 [L d1 h1 c1]
  clos;                                                 // #142568:83:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #142579:110:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #142597:221:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v9 = clos;                                         // #142610:80:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v9 = its home register (H139 CLOS bind)
  cell[53] = r202;                                      // #142622:182:195 [L d1 h1 c1]
  cell[54] = r198;                                      // #142625:4:195 [L d1 h1 c1]
  cell[55] = r204;                                      // #142628:154:195 [L d1 h1 c1]
  cell[56] = fn_v9;                                     // #142631:88:195 [L d1 h1 c1]
  v10 = cell[1];                                        // #142634:99:236 [L d1 h1 c1]
  v11 = v10[v165];                                      // #142637:113:7 [L d1 h1 c1]
  v12 = v10[v11];                                       // #142641:199:7 [L d1 h1 c1]
  cell[19] = v12;                                       // #142645:17:195 [L d1 h1 c1]
  win_v13 = win_v163[v166];                             // #142648:231:7 [L d1 h1 c1]
  win_v14 = win_v13;                                    // #142652:248:150 [L d1 h1 c1]
  fn_v15 = win_v14[v164];                               // #142655:242:7 [L d1 h1 c1]
  v16 = KP(142658);                                     // #142659:94:233 [L d1 h1 c1]
  v17 = fn_v15.call(win_v14, v16);                      // #142732:119:138 [L d1 h1 c1]
  win_v18 = win_v163[v166];                             // #142752:53:7 [L d1 h1 c1]
  perf_v170 = win_v18.performance;                      // #142756:120:200 [L d1 h1 c1]
  if (perf_v170) {                                      // #142761:231:160 [L d1 h1 c1]
    win_v20 = win_v163[v166];                           // #142780:227:7 [L d1 h1 c1]
    perf_v21 = win_v20.performance;                     // #142784:238:200 [L d1 h1 c1]
    memoryInfo_v22 = perf_v21.memory;                   // #142789:141:200 [L d1 h1 c1]
    memoryInfo_v19 = memoryInfo_v22;                    // #142799:134:150 [L d1 h1 c1] +#142802:190:53
  } else {
    memoryInfo_v19 = perf_v170;                         // #142767:219:53 #142772:70:150 [-] +#142775:126:53 /* never executed in any replay */
  }
  v23 = cell[19];                                       // #142807:122:236 [L d1 h1 c1]
  v24 = "UvUvY0";                                       // #142810:198:233 [L d1 h1 c1]
  v25 = !memoryInfo_v19;                                // #142820:87:130 [L d1 h1 c1]
  v26 = !v25;                                           // #142823:228:130 [L d1 h1 c1]
  v23.UvUvY0 = v26;                                     // #142826:238:199 [L d1 h1 c1]
  arr_v27 = [];                                         // #142830:100:107 [L d1 h1 c1]
  cell[21] = arr_v27;                                   // #142832:122:195 [L d1 h1 c1]
  v23.AfnB3 = arr_v27;                                  // #142835:23:142 [L d1 h1 c1]
  v28 = 0;                                              // #142844:210:72 [L d1 h1 c1]
  cell[22] = 0;                                         // #142847:176:195 [L d1 h1 c1]
  fn_v29 = clos;                                        // #142850:151:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v29 = its home register (H139 CLOS bind)
  cell[53] = fn_v29;                                    // #142861:161:195 [L d1 h1 c1]
  fn_v30 = clos;                                        // #142864:4:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v30 = its home register (H139 CLOS bind)
  cell[54] = fn_v30;                                    // #142882:154:195 [L d1 h1 c1]
  v31 = 0;                                              // #142885:9:72 [L d1 h1 c1]
  cell[25] = 0;                                         // #142888:203:195 [L d1 h1 c1]
  L143206_211: {
    if (memoryInfo_v19) {                               // #142891:174:160 [L d1 h1 c1]
      fn_v37 = win_v163.Object;                         // #142937:118:200 [L d1 h1 c1]
      fn_v38 = fn_v37;                                  // #142942:11:150 [L d1 h1 c1]
      fn_v39 = fn_v37.getPrototypeOf;                   // #142945:118:200 [L d1 h1 c1]
      win_v40 = win_v163[v166];                         // #142950:248:7 [L d1 h1 c1]
      perf_v41 = win_v40.performance;                   // #142954:239:200 [L d1 h1 c1]
      memoryInfo_v42 = perf_v41.memory;                 // #142959:202:200 [L d1 h1 c1]
      memoryInfo_v43 = fn_v39.call(fn_v38, memoryInfo_v42);  // #142969:51:138 [L d1 h1 c1]
      fn_v44 = win_v163.Object;                         // #142997:254:200 [L d1 h1 c1]
      fn_v45 = fn_v44;                                  // #143002:115:150 [L d1 h1 c1]
      arr_v46 = fn_v45.getOwnPropertyNames(memoryInfo_v43);  // #143005:120:138 [L d1 h1 c1]
      arr_v47 = [];                                     // #143037:70:107 [L d1 h1 c1]
      cell[23] = arr_v47;                               // #143039:84:195 [L d1 h1 c1]
      v48 = 0;                                          // #143042:91:72 [L d1 h1 c1]
      v49 = arr_v46.length;                             // #143045:134:200 [L d1 h1 c1]
      v168 = 1;                                         // #143050:69:72 [L d1 h1 c1]
      v50 = "constructor";                              // #143053:37:233 [L d1 h1 c1] +#143068:161:53
      for (;;) {
        v52 = v48 < v49; if (!(v48 < v49)) {            // #143083:228:186 [L d4 h4 c4]
          arr_v61 = cell[23];                           // #143175:26:236 [L d1 h1 c1]
          v62 = cell[23].length;                        // #143178:9:200 [L d1 h1 c1]
          cell[24] = cell[23].length;                   // #143183:203:195 [L d1 h1 c1]
          r205 = cell[54]();                            // #143186:115:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
          r205 = cell[54]();                            // #143190:123:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
          r205 = cell[54]();                            // #143194:99:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
          r205 = cell[55]();                            // #143198:171:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
          break L143206_211;                            // #143202:143:53 [L d1 h1 c1]
        }
        v53 = arr_v46[v48];                             // #143101:130:7 [L d3 h3 c3]
        if (v50 === v53) {                              // #143105:134:161 [L d3 h3 c3]
          v54 = false;                                  // #143122:242:233 [-] +#143125:122:53 /* never executed in any replay */
        } else {
          arr_v55 = cell[23];                           // #143130:68:236 [L d3 h3 c3]
          arr_v56 = cell[23];                           // #143133:33:150 [L d3 h3 c3]
          fn_v57 = arr_v56[v167];                       // #143136:183:7 [L d3 h3 c3]
          v58 = arr_v46[v48];                           // #143140:117:7 [L d3 h3 c3]
          v59 = fn_v57.call(arr_v56, v58);              // #143144:242:138 [L d3 h3 c3]
          v60 = v59;                                    // #143162:151:150 [L d3 h3 c3] +#143165:203:53
        }
        v51 = v48; v48 = v48 + 1;                       // #143073:166:48 [L d3 h3 c3]
      }
    } else {
      v32 = "AfnB3";                                    // #142897:70:53 #142902:82:233 [-] /* never executed in any replay */
      v33 = null;                                       // #142911:62:233 [-] /* never executed in any replay */
      v23.AfnB3 = null;                                 // #142914:96:199 [-] /* never executed in any replay */
      v34 = 1;                                          // #142918:55:72 [-] /* never executed in any replay */
      v35 = 1 | v28;                                    // #142921:234:32 [-] /* never executed in any replay */
      cell[22] = v35;                                   // #142925:104:195 [-] /* never executed in any replay */
      v36 = fn_v29();                                   // #142928:228:113 [-] +#142932:36:53 /* never executed in any replay */
    }
  }
  v63 = cell[1];                                        // #143207:178:236 [L d1 h1 c1]
  worker_v64 = cell[1].WdGLU4;                          // #143210:65:200 [L d1 h1 c1]
  fn_v65 = (cell[1].WdGLU4).addEventListener;           // #143215:84:200 [L d1 h1 c1]
  v66 = "message";                                      // #143220:184:233 [L d1 h1 c1]
  fn_v67 = clos;                                        // #143225:127:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v67 = its home register (H139 CLOS bind)
  v68 = fn_v65.call(worker_v64, v66, fn_v67);           // #143236:84:138 [L d1 h1 c1]
  fn_v69 = clos;                                        // #143267:171:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v69 = its home register (H139 CLOS bind)
  cell[55] = fn_v69;                                    // #143280:101:195 [L d1 h1 c1]
  win_v70 = win_v163[v166];                             // #143283:235:7 [L d1 h1 c1]
  v71 = win_v70[KP(143286)];                            // #143287:214:200 [L d1 h1 c1]
  shadowRoot_v72 = v71.pkJkg9;                          // #143292:213:200 [L d1 h1 c1]
  cell[30] = shadowRoot_v72;                            // #143297:103:195 [L d1 h1 c1]
  v73 = cell[19];                                       // #143300:246:236 [L d1 h1 c1]
  v74 = "WNaw9";                                        // #143303:82:233 [L d1 h1 c1]
  v75 = "ZrpMR3";                                       // #143312:62:233 [L d1 h1 c1]
  v73.WNaw9 = "ZrpMR3";                                 // #143322:96:199 [L d1 h1 c1]
  fn_v76 = clos;                                        // #143326:135:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v76 = its home register (H139 CLOS bind)
  cell[56] = fn_v76;                                    // #143338:209:195 [L d1 h1 c1]
  doc_v77 = win_v163.document;                          // #143341:164:200 #143346:1:150 [L d1 h1 c1]
  v78 = "iframe";                                       // #143349:241:233 [L d1 h1 c1]
  elIFrame_v79 = doc_v77.createElement("iframe");       // #143354:126:138 [L d1 h1 c1]
  cell[31] = elIFrame_v79;                              // #143380:172:195 [L d1 h1 c1]
  v80 = "height";                                       // #143383:176:233 [L d1 h1 c1]
  v81 = 0; elIFrame_v79.height = 0;                     // #143388:170:103 [L d1 h1 c1]
  v82 = "width";                                        // #143393:54:233 [L d1 h1 c1]
  v83 = 0; elIFrame_v79.width = 0;                      // #143398:152:103 [L d1 h1 c1]
  try {
    TP(tryStack, 144036, 41, callDepths);                          // #143403:161:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v84 = win_v163[v166];                           // #143409:55:7 [L d1 h1 c1]
    v85 = win_v84[KP(143412)].ijNwi9;                   // #143413:242:200 #143418:129:200 [L d1 h1 c1]
    if (v85) {                                          // #143428:12:160 [L d1 h1 c1]
      v86 = v85;                                        // #143451:69:150 [-] +#143454:65:53 /* never executed in any replay */
    } else {
      v86 = "";                                         // #143434:172:53 #143439:64:233 #143443:45:150 [L d1 h1 c1] +#143446:137:53
    }
    if (!(v86)) {                                       // #143459:143:160 [L d1 h1 c1]
      doc_v87 = win_v163.document;                      // #143465:227:53 #143470:221:200 #143475:150:150 [L d1 h1 c1]
      elScript_v88 = doc_v87.querySelector("script[nonce]");  // #143478:114:233 #143495:59:138 [L d1 h1 c1]
      if (elScript_v88) {                               // #143521:94:160 [L d1 h1 c1]
        v89 = elScript_v88.nonce;                       // #143541:45:200 [L d1 h1 c1]
        if (v89) {                                      // #143550:8:160 [L d1 h1 c1]
          v86 = v89;                                    // #143573:51:150 [L d1 h1 c1] +#143576:247:53
        } else {
          v86 = "";                                     // #143556:184:53 #143561:200:233 #143565:149:150 [-] +#143568:81:53 /* never executed in any replay */
        }
      } else {
        v86 = "";                                       // #143527:54:53 #143532:193:233 [-] +#143536:205:53 /* never executed in any replay */
      }
    }
    if (v86) {                                          // #143586:63:160 [L d1 h1 c1]
      v91 = " nonce=\"";                                // #143606:167:233 [L d1 h1 c1]
      v92 = (" nonce=\"") + v86;                        // #143618:224:222 [L d1 h1 c1]
      v93 = "\"";                                       // #143622:20:233 [L d1 h1 c1]
      v90 = v92 + ("\"");                               // #143627:215:180 [L d1 h1 c1]
    } else {
      v90 = "";                                         // #143592:211:53 #143597:48:233 [-] +#143601:64:53 /* never executed in any replay */
    }
    if (v86) {                                          // #143635:129:160 [L d1 h1 c1]
      v95 = "script-src 'nonce-";                       // #143681:156:233 [L d1 h1 c1]
      v96 = ("script-src 'nonce-") + v86;               // #143703:65:222 [L d1 h1 c1]
      v97 = "'";                                        // #143707:49:233 [L d1 h1 c1]
      v94 = v96 + ("'");                                // #143712:192:180 [L d1 h1 c1]
    } else {
      v94 = "script-src 'unsafe-inline'";               // #143641:141:53 #143646:27:233 [-] +#143676:63:53 /* never executed in any replay */
    }
    elIFrame_v98 = cell[31];                            // #143720:124:236 [L d1 h1 c1]
    win_v99 = win_v163[v166];                           // #143723:64:233 #143733:26:7 [L d1 h1 c1]
    win_v171 = win_v99;                                 // #143737:31:150 [L d1 h1 c1]
    v172 = win_v99.YDta0;                               // #143740:58:200 [L d1 h1 c1]
    v100 = "<html><meta http-equiv=\"content-security-policy\" content=\"";  // #143745:134:233 [L d1 h1 c1]
    v101 = ("<html><meta http-equiv=\"content-security-policy\" content=\"") + v94;  // #143807:3:222 [L d1 h1 c1]
    v173 = "\"><script";                                // #143811:107:233 [L d1 h1 c1]
    v102 = v101 + ("\"><script");                       // #143824:148:222 [L d1 h1 c1]
    v103 = v102 + v90;                                  // #143828:89:222 [L d1 h1 c1]
    v174 = KP(143831);                                  // #143832:233:233 [L d1 h1 c1]
    v208 = v103 + v174;                                 // #144002:154:222 [L d1 h1 c1]
    trustedHTML_v104 = v172.call(win_v171, v208);       // #144006:195:138 [L d1 h1 c1]
    elIFrame_v98.srcdoc = trustedHTML_v104;             // #144025:17:199 [L d1 h1 c1]
    v175 = tryStack.pop();                                   // #144029:200:124 [L d1 h1 c1]
    elIFrame_v107 = cell[31];                           // #144032:120:53 #144059:181:236 [L d1 h1 c1]
    v108 = "onload";                                    // #144062:213:233 [L d1 h1 c1]
    v209 = clos;                                        // #144072:104:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v209 = its home register (H139 CLOS bind)
    elIFrame_v107[v108] = v209;                         // #144083:98:199 [L d1 h1 c1]
    v109 = "onerror";                                   // #144087:14:233 [L d1 h1 c1]
    v210 = clos;                                        // #144098:253:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v210 = its home register (H139 CLOS bind)
    elIFrame_v107[v109] = v210;                         // #144108:227:199 [L d1 h1 c1]
    r199 = "ZrpMR3";                                    // #144112:203:233 [L d1 h1 c1]
    v110 = cell[19];                                    // #144122:202:236 [L d1 h1 c1]
    v176 = cell[19].WNaw9;                              // #144125:249:200 [L d1 h1 c1]
    v175 = "ZrpMR3" === cell[19].WNaw9;                 // #144134:1:65 [L d1 h1 c1]
    if (v175) {                                         // #144138:140:160 [L d1 h1 c1]
      shadowRoot_v112 = cell[30];                       // #144157:53:236 [L d1 h1 c1]
      v211 = cell[30];                                  // #144160:142:150 [L d1 h1 c1]
      v175 = v211.appendChild(elIFrame_v107);           // #144163:231:138 [L d1 h1 c1]
      elIFrame_v113 = v175;                             // #144187:248:150 [L d1 h1 c1] +#144190:232:53
    } else {
      v111 = v175;                                      // #144144:44:53 #144149:45:150 [-] +#144152:137:53 /* never executed in any replay */
    }
    v114 = 0;                                           // #144195:137:72 [L d1 h1 c1]
    cell[37] = 0;                                       // #144198:75:195 [L d1 h1 c1]
    win_v115 = win_v163[v166];                          // #144201:185:7 [L d1 h1 c1]
    v175 = win_v115.trustedTypes;                       // #144205:236:200 [L d1 h1 c1]
    if (v175) {                                         // #144210:139:160 [L d1 h1 c1]
      v175 = win_v163[v166];                            // #144229:192:7 [L d1 h1 c1]
      trustedTypePolicyFactory_v116 = v175.trustedTypes;  // #144233:151:200 [L d1 h1 c1]
      v175 = trustedTypePolicyFactory_v116.createPolicy;  // #144238:210:200 [L d1 h1 c1]
      fn_v177 = v175;                                   // #144243:247:150 [L d1 h1 c1] +#144246:171:53
    } else {
      fn_v177 = v175;                                   // #144216:239:53 #144221:135:150 [-] +#144224:251:53 /* never executed in any replay */
    }
    v117 = !fn_v177;                                    // #144251:108:130 [L d1 h1 c1]
    v168 = !v117;                                       // #144254:229:130 [L d1 h1 c1]
    doc_v178 = win_v163.document;                       // #144257:104:200 #144262:181:150 [L d1 h1 c1]
    v118 = "iframe";                                    // #144265:213:233 [L d1 h1 c1]
    v212 = doc_v178.createElement("iframe");            // #144270:210:138 [L d1 h1 c1]
    v119 = "height";                                    // #144296:190:233 [L d1 h1 c1]
    v179 = 0; v212.height = 0;                          // #144301:0:103 [L d1 h1 c1]
    v120 = "width";                                     // #144306:180:233 [L d1 h1 c1]
    v180 = 0; v212.width = 0;                           // #144311:158:103 [L d1 h1 c1]
    style_v121 = v212.style;                            // #144316:125:200 [L d1 h1 c1]
    v181 = "display";                                   // #144321:125:233 [L d1 h1 c1]
    v172 = "none";                                      // #144332:125:233 [L d1 h1 c1]
    style_v121.display = "none";                        // #144340:99:199 [L d1 h1 c1]
    v175 = null;                                        // #144344:75:233 [L d1 h1 c1]
    try {
      TP(tryStack, 144921, 82, callDepths);                        // #144347:72:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      shadowRoot_v122 = cell[30];                       // #144353:147:236 [L d1 h1 c1]
      shadowRoot_v182 = cell[30];                       // #144356:244:150 [L d1 h1 c1]
      elIFrame_v123 = shadowRoot_v182.appendChild(v212);  // #144359:53:138 [L d1 h1 c1]
      doc_v124 = v212.contentDocument;                  // #144383:120:200 [L d1 h1 c1]
      if (doc_v124) {                                   // #144388:231:160 [L d1 h1 c1]
        v172 = doc_v124;                                // #144417:32:150 [L d1 h1 c1] +#144420:112:53
      } else {
        v125 = v212.contentWindow;                      // #144394:219:53 #144399:29:200 [-] /* never executed in any replay */
        v126 = v125.document;                           // #144404:192:200 [-] /* never executed in any replay */
        v172 = v125.document;                           // #144409:173:150 [-] +#144412:9:53 /* never executed in any replay */
      }
      if (v172) {                                       // #144425:197:160 [L d1 h1 c1]
        win_v129 = v212.contentWindow;                  // #144450:48:200 [L d1 h1 c1]
        if (win_v129) {                                 // #144455:191:160 [L d1 h1 c1]
          trustedTypePolicyFactory_v130 = win_v129.trustedTypes;  // #144474:248:200 [L d1 h1 c1]
          trustedTypePolicyFactory_v183 = trustedTypePolicyFactory_v130;  // #144479:5:150 [L d1 h1 c1] +#144482:1:53
        } else {
          trustedTypePolicyFactory_v183 = win_v129;     // #144461:83:53 #144466:145:150 [-] +#144469:93:53 /* never executed in any replay */
        }
        if (trustedTypePolicyFactory_v183) {            // #144487:89:160 [L d1 h1 c1]
          fn_v132 = trustedTypePolicyFactory_v183.createPolicy;  // #144506:251:200 [L d1 h1 c1]
          fn_v131 = fn_v132;                            // #144511:188:150 [L d1 h1 c1] +#144514:156:53
        } else {
          fn_v131 = trustedTypePolicyFactory_v183;      // #144493:5:53 #144498:16:150 [-] +#144501:160:53 /* never executed in any replay */
        }
        if (fn_v131) {                                  // #144519:221:160 [L d1 h1 c1]
          try {
            TP(tryStack, 144657, 22, callDepths);                  // #144530:179:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
            trustedTypePolicyFactory_v184 = trustedTypePolicyFactory_v183;  // #144536:148:150 [L d1 h1 c1]
            fn_v185 = trustedTypePolicyFactory_v183.createPolicy;  // #144539:27:200 [L d1 h1 c1]
            v133 = "default";                           // #144544:35:233 [L d1 h1 c1]
            v134 = {};                                  // #144555:105:159 [L d1 h1 c1]
            v186 = "createHTML";                        // #144557:185:233 [L d1 h1 c1]
            fn_v187 = clos;                             // #144571:188:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v187 = its home register (H139 CLOS bind)
            v134[v186] = fn_v187;                       // #144581:102:199 [L d1 h1 c1]
            v188 = "createScript";                      // #144585:2:233 [L d1 h1 c1]
            fn_v189 = clos;                             // #144590:33:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v189 = its home register (H139 CLOS bind)
            v134[v188] = fn_v189;                       // #144600:119:199 [L d1 h1 c1]
            v190 = "createScriptURL";                   // #144604:15:233 [L d1 h1 c1]
            fn_v191 = clos;                             // #144609:58:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v191 = its home register (H139 CLOS bind)
            v134[v190] = fn_v191;                       // #144619:108:199 [L d1 h1 c1]
            trustedTypePolicy_v192 = fn_v185.call(trustedTypePolicyFactory_v184, v133, v134);  // #144623:205:138 [L d1 h1 c1]
            arr_v135 = tryStack.pop();                       // #144650:148:124 [L d1 h1 c1] +#144653:20:53
          } catch (caught) {
            outside("L144660_43");                      // #144658:43:150 [-]  L144660_43 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
          }
        } else {
          // #144525:121:53 [-] /* never executed in any replay */
        }
        doc_v193 = v172;                                // #144666:108:150 [L d1 h1 c1]
        v136 = "div";                                   // #144669:112:233 [L d1 h1 c1]
        elDiv_v137 = (doc_v193).createElement("div");   // #144674:193:138 [L d1 h1 c1]
        try {
          TP(tryStack, 144734, 14, callDepths);                    // #144700:102:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
          v138 = "innerHTML";                           // #144706:2:233 [L d1 h1 c1]
          v194 = "<b>t</b>";                            // #144711:46:233 [L d1 h1 c1]
          elDiv_v137.innerHTML = "<b>t</b>";            // #144723:144:199 [L d1 h1 c1]
          arr_v139 = tryStack.pop();                         // #144727:11:124 [L d1 h1 c1] +#144730:111:53
          try {
            TP(tryStack, 144796, 26, callDepths);                  // #144756:62:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
            win_v140 = v212.contentWindow;              // #144762:157:200 [L d1 h1 c1]
            v141 = "0";                                 // #144767:29:233 [L d1 h1 c1]
            v195 = (win_v140).eval("0");                // #144772:250:138 [L d1 h1 c1]
            v142 = tryStack.pop();                           // #144789:77:124 [-] +#144792:41:53 /* never executed in any replay */
          } catch (caught) {
            v143 = cell[37];                            // #144797:31:150 #144800:206:236 [L d1 h1 c1]
            v144 = 2;                                   // #144803:109:72 [L d1 h1 c1]
            v145 = 2 | cell[37];                        // #144806:200:32 [L d1 h1 c1]
            cell[37] = 2 | cell[37];                    // #144810:78:195 [L d1 h1 c1] +#144813:102:53
          }
          doc_v196 = v172;                              // #144818:206:150 [L d1 h1 c1]
          v146 = "script";                              // #144821:202:233 [L d1 h1 c1]
          elScript_v147 = (doc_v196).createElement("script");  // #144831:51:138 [L d1 h1 c1]
          try {
            TP(tryStack, 144892, 128, callDepths);                 // #144857:144:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
            v148 = "src";                               // #144863:4:233 [L d1 h1 c1]
            v197 = "data:,0";                           // #144870:168:233 [L d1 h1 c1]
            elScript_v147.src = "data:,0";              // #144881:162:199 [L d1 h1 c1]
            arr_v149 = tryStack.pop();                       // #144885:85:124 [L d1 h1 c1] +#144888:17:53
          } catch (caught) {
            outside("L144898_100");                     // #144893:109:150 #144896:100:236 [-]  L144898_100 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
          }
        } catch (caught) {
          outside("L144740_98");                        // #144735:67:150 #144738:98:236 [-]  L144740_98 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      } else {
        v127 = 1;                                       // #144431:193:53 #144436:153:72 [-] /* never executed in any replay */
        v128 = -1;                                      // #144439:173:189 [-] /* never executed in any replay */
        cell[37] = -1;                                  // #144442:223:195 [-] +#144445:243:53 /* never executed in any replay */
      }
      arr_v150 = tryStack.pop();                             // #144914:163:124 [L d1 h1 c1]
      shadowRoot_v151 = cell[30];                       // #144917:167:53 #144933:198:236 [L d1 h1 c1]
      shadowRoot_v152 = cell[30];                       // #144936:27:150 [L d1 h1 c1]
      v198 = shadowRoot_v152.contains(r199);            // #144939:128:138 [L d1 h1 c1]
      if (v198) {                                       // #144960:207:160 [L d1 h1 c1]
        shadowRoot_v154 = cell[30];                     // #144979:34:236 [L d1 h1 c1]
        shadowRoot_v155 = cell[30];                     // #144982:7:150 [L d1 h1 c1]
        elIFrame_v156 = (shadowRoot_v155).removeChild(r199);  // #144985:188:138 [L d1 h1 c1]
        elIFrame_v157 = elIFrame_v156;                  // #145009:185:150 [L d1 h1 c1] +#145012:229:53
      } else {
        v153 = v198;                                    // #144966:35:53 #144971:197:150 [-] +#144974:193:53 /* never executed in any replay */
      }
      if (v175) {                                       // #145017:122:160 [L d1 h1 c1]
        throw v175;                                     // #145028:213:249 [-] /* never executed in any replay */
      }
      v199 = cell[19];                                  // #145023:226:53 #145030:190:236 [L d1 h1 c1]
      v175 = "PaVB6";                                   // #145033:250:233 [L d1 h1 c1]
      v158 = cell[37];                                  // #145042:253:236 [L d1 h1 c1]
      v199.PaVB6 = cell[37];                            // #145045:227:199 [L d1 h1 c1]
      v199.iWZX9 = v168;                                // #145049:28:142 [L d1 h1 c1]
      doc_v159 = win_v163.document;                     // #145058:131:200 [L d1 h1 c1]
      v175 = doc_v159.location;                         // #145063:14:200 [L d1 h1 c1]
      v213 = (doc_v159.location).href;                  // #145075:45:200 [L d1 h1 c1]
      v175 = "UulQ2";                                   // #145083:109:233 [L d1 h1 c1]
      v160 = "ZrpMR3";                                  // #145092:173:233 [L d1 h1 c1]
      v199.UulQ2 = "ZrpMR3";                            // #145102:211:199 [L d1 h1 c1]
      try {
        TP(tryStack, 145294, 172, callDepths);                     // #145106:176:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        v175 = win_v163.history;                        // #145112:199:200 [L d1 h1 c1]
        v172 = v175;                                    // #145123:88:150 [L d1 h1 c1]
        fn_v200 = v175.replaceState;                    // #145126:207:200 [L d1 h1 c1]
        v175 = {};                                      // #145142:101:159 [L d1 h1 c1]
        v161 = "";                                      // #145144:197:233 [L d1 h1 c1]
        v201 = "https://example.org/";                  // #145148:165:233 [L d1 h1 c1]
        v202 = fn_v200.call(v172, v175, "", v201);      // #145172:98:138 [L d1 h1 c1]
        v175 = win_v163.history;                        // #145200:49:200 [-] /* never executed in any replay */
        v203 = v175;                                    // #145211:154:150 [-] /* never executed in any replay */
        v172 = v175.replaceState;                       // #145214:137:200 [-] /* never executed in any replay */
        v175 = {};                                      // #145230:183:159 [-] /* never executed in any replay */
        v162 = "";                                      // #145232:79:233 [-] /* never executed in any replay */
        v204 = v172.call(v203, v175, "", v213);         // #145236:228:138 [-] /* never executed in any replay */
        v175 = "UulQ2";                                 // #145264:8:233 [-] /* never executed in any replay */
        v205 = "NuQml3";                                // #145273:156:233 [-] /* never executed in any replay */
        v199.UulQ2 = "NuQml3";                          // #145283:198:199 [-] /* never executed in any replay */
        v175 = tryStack.pop();                               // #145287:233:124 [-] +#145290:85:53 /* never executed in any replay */
      } catch (caught) {
        v206 = cell[19];                                // #145295:233:150 #145298:240:236 [L d1 h1 c1]
        v175 = "UulQ2";                                 // #145301:228:233 [L d1 h1 c1]
        v207 = "PuLjv3";                                // #145310:8:233 [L d1 h1 c1]
        v206.UulQ2 = "PuLjv3";                          // #145320:33:210 [L d1 h1 c1]
      }
      v175 = undefined;                                 // #145328:31:233 [L d1 h1 c1]
      return v175;                                      // #145331:243:245 [L d1 h1 c1]
    } catch (caught) {
      outside("L144927_72");                            // #144922:119:150 #144925:72:150 [-]  L144927_72 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } catch (caught) {
    v105 = caught;                                        // #144037:178:150 [-] /* never executed in any replay */
    v106 = KP(m144039k178);                             // #144040:30:233 [-] /* never executed in any replay */
    r204 = cell[56](v106);                              // #144050:147:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
    outside("L144053_147");  // L144053_147 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}