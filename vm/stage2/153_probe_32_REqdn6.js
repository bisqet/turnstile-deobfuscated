function probe_32_REqdn6(v121 /* r211 */, v122 /* r212 */, v123 /* r220 */, v220 /* r70 */, v221 /* r209 */, v222 /* r217 */, v223 /* r221 */) { // entry L147709_222; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 219 register webs used only inside this fn (no live-in, cross-call or table-made def; 99 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 7 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r242 */, v2 /* r204 */, v3 /* r195 */, v4 /* r202 */, v5 /* r205 */, win_v6 /* r204 */, v7 /* r205 */, v8 /* r202 */, v9 /* r205 */, v10 /* r193 */;
  let v11 /* r199 */, fn_v12 /* r205 */, win_v13 /* r204 */, v14 /* r205 */, v15 /* r205 */, v16 /* r199 */, v17 /* r202 */, fn_v18 /* r199 */, fn_v19 /* r205 */, win_v20 /* r199 */;
  let v21 /* r205 */, v22 /* r195 */, v23 /* r205 */, jSON_v24 /* r205 */, jSON_v25 /* r202 */, v26 /* r199 */, v27 /* r205 */, doc_v28 /* r205 */, fn_v29 /* r202 */, fn_v30 /* r199 */;
  let doc_v31 /* r205 */, fn_v32 /* r205 */, doc_v33 /* r202 */, fn_v34 /* r199 */, doc_v35 /* r202 */, fn_v36 /* r199 */, elBody_v37 /* r202 */, v38 /* r199 */, elUnknown_v39 /* r202 */, elUnknown_v40 /* r204 */;
  let fn_v41 /* r202 */, hTMLCollection_v42 /* r199 */, elHead_v43 /* r205 */, fn_v44 /* r199 */, elStyle_v45 /* r205 */, v46 /* r202 */, v47 /* r205 */, v48 /* r202 */, v49 /* r199 */, nodeList_v50 /* r199 */;
  let v51 /* r205 */, v52 /* r199 */, v53 /* r199 */, v54 /* r199 */, v55 /* r199 */, v56 /* r202 */, fn_v57 /* r199 */, trustedHTML_v58 /* r205 */, v59 /* r202 */, v60 /* r205 */;
  let v61 /* r202 */, v62 /* r199 */, nodeList_v63 /* r199 */, elDiv_v64 /* r205 */, v65 /* r199 */, v66 /* r199 */, v67 /* r205 */, text_v68 /* r202 */, v69 /* r205 */, v70 /* r199 */;
  let cSSStyleSheet_v71 /* r199 */, v72 /* r205 */, v73 /* r205 */, v74 /* r202 */, v75 /* r202 */, v76 /* r205 */, v77 /* r205 */, v78 /* r202 */, v79 /* r205 */, elHead_v80 /* r205 */;
  let elStyle_v81 /* r202 */, elBody_v82 /* r205 */, elUnknown_v83 /* r202 */, v84 /* r204 */, arr_v85 /* r205 */, v86 /* r202 */, v87 /* r205 */, v88 /* r199 */, v89 /* r204 */, v90 /* r205 */;
  let v91 /* r205 */, v92 /* r202 */, v93 /* r202 */, v94 /* r202 */, v95 /* r205 */, v96 /* r204 */, v97 /* r205 */, v98 /* r205 */, arr_v99 /* r205 */, v100 /* r205 */;
  let v101 /* r198 */, v102 /* r204 */, v103 /* r196 */, v104 /* r198 */, v105 /* r204 */, v106 /* r198 */, v107 /* r204 */, v108 /* r195 */, v109 /* r193 */, v110 /* r202 */;
  let v111 /* r196 */, v112 /* r204 */, v113 /* r192 */, v114 /* r204 */, arr_v115 /* r204 */, v116 /* r205 */, v117 /* r205 */, v118 /* r202 */, v119 /* r205 */, win_v120 /* r205 */;
  let v124 /* r246 */, v125 /* r250 */, v126 /* r238 */, v127 /* r247 */, v128 /* r198 */, v129 /* r196 */, fn_v130 /* r254 */, fn_v131 /* r195 */, v132 /* r193 */, v133 /* r242 */;
  let fn_v134 /* r246 */, fn_v135 /* r195 */, fn_v136 /* r250 */, fn_v137 /* r193 */, doc_v138 /* r195 */, fn_v139 /* r195 */, v140 /* r236 */, v141 /* r193 */, fn_v142 /* r195 */, doc_v143 /* r193 */;
  let v144 /* r193 */, v145 /* r193 */, v146 /* r195 */, elStyle_v147 /* r198 */, v148 /* r238 */, v149 /* r252 */, v150 /* r253 */, v151 /* r245 */, v152 /* r240 */, v153 /* r247 */;
  let v154 /* r237 */, v155 /* r244 */, v156 /* r196 */, v157 /* r192 */, v158 /* r195 */, v159 /* r193 */, v160 /* r195 */, v161 /* r195 */, v162 /* r193 */, v163 /* r195 */;
  let v164 /* r193 */, v165 /* r195 */, arr_v166 /* r246 */, v167 /* r195 */, v168 /* r193 */, v169 /* r195 */, v170 /* r195 */, v171 /* r195 */, win_v172 /* r193 */, v173 /* r195 */;
  let v174 /* r238 */, v175 /* r240 */, v176 /* r247 */, v177 /* r193 */, v178 /* r252 */, v179 /* r253 */, v180 /* r237 */, v181 /* r246 */, v182 /* r244 */, v183 /* r245 */;
  let v184 /* r192 */, v185 /* r195 */, v186 /* r196 */, v187 /* r196 */, v188 /* r196 */, fn_v189 /* r196 */, v190 /* r195 */, v191 /* r196 */, v192 /* r196 */, v193 /* r238 */;
  let v194 /* r232 */, v195 /* r245 */, v196 /* r253 */, v197 /* r237 */, v198 /* r240 */, v199 /* r244 */, v200 /* r246 */, v201 /* r195 */, v202 /* r236 */, v203 /* r199 */;
  let v204 /* r247 */, v205 /* r196 */, v206 /* r192 */, v207 /* r193 */, v208 /* r196 */, elDiv_v209 /* r196 */, v210 /* r252 */, v211 /* r193 */, elDiv_v212 /* r193 */, v213 /* r196 */;
  let v214 /* r198 */, v215 /* r199 */, v216 /* r202 */, v217 /* r202 */, v218 /* r204 */, v219 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v6 3, win_v13 3, win_v20 3, win_v120 3, win_v172 12
  //   Function: fn_v12 3, fn_v18 3, fn_v19 3, fn_v29 3, fn_v30 3, fn_v32 3, fn_v34 3, fn_v36 3
  //   Function: fn_v41 3, fn_v44 3, fn_v57 12, fn_v130 3, fn_v131 3, fn_v134 3, fn_v135 3, fn_v136 3
  //   Function: fn_v137 3, fn_v139 3, fn_v142 3, fn_v189 18
  //   JSON: jSON_v24 3, jSON_v25 3
  //   HTMLDocument: doc_v28 3, doc_v31 3, doc_v33 3, doc_v35 3, doc_v138 3, doc_v143 3
  //   HTMLBodyElement: elBody_v37 3, elBody_v82 3
  //   HTMLUnknownElement: elUnknown_v39 3, elUnknown_v40 3, elUnknown_v83 3
  //   HTMLCollection: hTMLCollection_v42 3
  //   HTMLHeadElement: elHead_v43 3, elHead_v80 3
  //   HTMLStyleElement: elStyle_v45 3, elStyle_v81 3, elStyle_v147 3
  //   NodeList: nodeList_v50 9, nodeList_v63 24
  //   TrustedHTML: trustedHTML_v58 12
  //   HTMLDivElement: elDiv_v64 24, elDiv_v209 15, elDiv_v212 15
  //   Text: text_v68 12
  //   CSSStyleSheet: cSSStyleSheet_v71 18
  //   Array: arr_v85 3, arr_v99 3, arr_v115 3, arr_v166 12
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 24 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 14 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 22 single-use temps folded (20 of them expressions, H135), 20 dead register writes dropped, 49 constants propagated (50 uses), 21 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1)
  NC(15);                                               // #147710:182:53 #147720:157:211 [L d1 h1 c1]
  v1 = undefined;                                       // #147723:29:233 #147726:157:233 #147729:29:233 [L d1 h1 c1]
  v124 = undefined;                                     // #147732:157:233 [L d1 h1 c1]
  v125 = undefined;                                     // #147735:29:233 #147738:157:233 [L d1 h1 c1]
  v2 = undefined;                                       // #147741:29:233 [L d1 h1 c1]
  v3 = undefined;                                       // #147744:157:233 #147747:29:233 #147750:157:233 #147753:29:233 #147756:157:233 [L d1 h1 c1]
  v4 = undefined;                                       // #147759:29:233 #147762:157:233 [L d1 h1 c1]
  v126 = undefined;                                     // #147765:29:233 #147768:157:233 [L d1 h1 c1]
  v127 = undefined;                                     // #147771:29:233 [L d1 h1 c1]
  v5 = undefined;                                       // #147774:157:233 [L d1 h1 c1]
  v128 = undefined;                                     // #147777:29:233 [L d1 h1 c1]
  clos;                                                 // #147780:144:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  win_v6 = v220[v223];                                  // #147793:42:7 [L d1 h1 c1]
  v7 = KP(147796);                                      // #147797:182:233 [L d1 h1 c1]
  v8 = MC(win_v6, v221, v7);                            // #147870:183:114 [L d1 h1 c1]
  v9 = 0;                                               // #147875:242:72 [L d1 h1 c1]
  v10 = "eval";                                         // #147878:94:233 [L d1 h1 c1]
  v129 = undefined;                                     // #147883:26:233 [L d1 h1 c1]
  v11 = "this";                                         // #147886:230:233 [L d1 h1 c1] +#147891:158:53
  while ((fn_v12 = v220.eval, win_v13 = MC(undefined, fn_v12, "this"), v14 = !(!(v220 === win_v13)), !(v14))) {  // #147896:223:7 | #147900:124:114 | #147905:56:65 #147909:129:130 #147912:230:130 | #147915:29:160 [L d1 h1 c1]
    // #147921:185:53 [-] /* never executed in any replay */
  }
  v15 = cell[1];                                        // #147931:2:236 [L d1 h1 c1]
  v16 = v15[v123];                                      // #147934:84:7 [L d1 h1 c1]
  v17 = v15[v16];                                       // #147938:222:7 [L d1 h1 c1]
  cell[15] = v17;                                       // #147942:140:195 [L d1 h1 c1]
  fn_v18 = clos;                                        // #147945:3:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v18 = its home register (H139 CLOS bind)
  fn_v19 = fn_v18;                                      // #147959:164:150 [L d1 h1 c1]
  v17.ExHMy4 = fn_v19;                                  // #147962:25:142 [L d1 h1 c1]
  try {
    TP(tryStack, 157701, 112, callDepths);                         // #147967:94:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v20 = v220[v223];                               // #147973:64:7 [L d1 h1 c1]
    v21 = KP(147976);                                   // #147977:244:233 [L d1 h1 c1]
    v22 = win_v20.uOdMb2(v21);                          // #148050:53:138 [L d1 h1 c1]
    v17[v222] = 0;                                      // #148069:91:103 [L d1 h1 c1]
    v23 = "";                                           // #148074:99:233 [L d1 h1 c1]
    v17[v121] = ("");                                   // #148078:49:199 [L d1 h1 c1]
    fn_v130 = clos;                                     // #148082:84:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v130 = its home register (H139 CLOS bind)
    jSON_v24 = v220.JSON;                               // #148095:219:200 [L d1 h1 c1]
    jSON_v25 = jSON_v24;                                // #148100:28:150 [L d1 h1 c1]
    fn_v131 = jSON_v24.parse;                           // #148103:131:200 [L d1 h1 c1]
    v132 = KP(148107);                                  // #148108:235:233 [L d1 h1 c1]
    v26 = cell[3];                                      // #156342:106:236 [L d1 h1 c1]
    v27 = cell[4](v132, v26);                           // #156345:27:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then v27 = r205 (H142 CALL bind)
    v133 = fn_v131.call(jSON_v25, v27);                 // #156350:128:138 [L d1 h1 c1]
    L157651_20: {
      try {
        TP(tryStack, 157588, 57, callDepths);                      // #156369:233:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        doc_v28 = v220.document;                        // #156375:92:200 [L d1 h1 c1]
        fn_v29 = doc_v28.createElement;                 // #156380:195:200 [L d1 h1 c1]
        fn_v30 = (doc_v28.createElement).bind;          // #156385:78:200 [L d1 h1 c1]
        doc_v31 = v220.document;                        // #156393:109:200 [L d1 h1 c1]
        fn_v134 = fn_v30.call(fn_v29, doc_v31);         // #156398:10:138 [L d1 h1 c1]
        fn_v32 = v220.Node[v122].appendChild;           // #156416:57:200 #156421:111:7 #156425:74:200 [L d1 h1 c1]
        doc_v33 = v220.document;                        // #156430:121:200 [L d1 h1 c1]
        fn_v34 = doc_v33.querySelectorAll;              // #156435:172:200 [L d1 h1 c1]
        fn_v135 = (doc_v33.querySelectorAll).bind;      // #156440:211:200 [L d1 h1 c1]
        doc_v35 = v220.document;                        // #156448:30:200 [L d1 h1 c1]
        fn_v136 = fn_v135.call(fn_v34, doc_v35);        // #156453:55:138 [L d1 h1 c1]
        fn_v36 = fn_v32;                                // #156471:8:150 [L d1 h1 c1]
        fn_v137 = fn_v32.bind;                          // #156474:191:200 [L d1 h1 c1]
        doc_v138 = v220.document;                       // #156482:90:200 [L d1 h1 c1]
        elBody_v37 = doc_v138.body;                     // #156487:73:200 [L d1 h1 c1]
        fn_v139 = fn_v137.call(fn_v36, elBody_v37);      // #156492:118:138 [L d1 h1 c1]
        v38 = undefined;                                // #156510:210:233 [L d1 h1 c1]
        v140 = undefined;                               // #156513:190:233 [L d1 h1 c1]
        v141 = "null";                                  // #156516:250:233 [L d1 h1 c1]
        elUnknown_v39 = MC(undefined, fn_v134, "null");      // #156524:235:114 [L d1 h1 c1]
        elUnknown_v40 = MC(undefined, fn_v139, elUnknown_v39);      // #156529:88:114 [L d1 h1 c1]
        fn_v41 = fn_v32;                                // #156534:229:150 [L d1 h1 c1]
        fn_v142 = fn_v32.bind;                          // #156537:104:200 [L d1 h1 c1]
        doc_v143 = v220.document;                       // #156545:159:200 #156550:208:150 [L d1 h1 c1]
        hTMLCollection_v42 = doc_v143.getElementsByTagName("head");      // #156553:68:233 #156561:69:138 [L d1 h1 c1]
        v144 = 0;                                       // #156594:200:72 [L d1 h1 c1]
        elHead_v43 = hTMLCollection_v42[0];             // #156597:130:7 [L d1 h1 c1]
        fn_v44 = fn_v142.call(fn_v41, elHead_v43);      // #156601:11:138 [L d1 h1 c1]
        v145 = undefined;                               // #156619:83:233 #156622:123:233 [L d1 h1 c1]
        v146 = "style";                                 // #156625:3:233 [L d1 h1 c1]
        elStyle_v45 = MC(undefined, fn_v134, "style");      // #156630:16:114 [L d1 h1 c1]
        elStyle_v147 = MC(undefined, fn_v44, elStyle_v45);      // #156635:41:114 [L d1 h1 c1]
        v148 = 0;                                       // #156640:28:72 [L d1 h1 c1]
        v149 = "t";                                     // #156643:96:233 [L d1 h1 c1]
        v150 = ">";                                     // #156648:148:233 [L d1 h1 c1]
        v151 = "join";                                  // #156653:248:233 [L d1 h1 c1]
        v152 = " id=\"";                                // #156661:204:233 [L d1 h1 c1]
        v153 = "\"> </";                                // #156670:80:233 [L d1 h1 c1]
        v154 = "length";                                // #156679:196:233 #156684:104:233 [L d1 h1 c1]
        v155 = "\" class=\"";                           // #156689:124:233 [L d1 h1 c1]
        v156 = "beforeend";                             // #156702:64:233 [L d1 h1 c1]
        v157 = "insertAdjacentHTML";                    // #156715:244:233 [L d1 h1 c1] +#156737:244:53
        while ((v46 = v133.n.length, v47 = v148 < v46, v148 < v46)) {  // #156755:89:200 #156760:15:7 | #156764:20:186 [L d5 h5 c5]
          v48 = v133.n[v148];                           // #156782:145:200 #156787:103:7 [L d4 h4 c4]
          v49 = v48.p;                                  // #156791:98:200 [L d4 h4 c4]
          v158 = null;                                  // #156796:14:233 [L d4 h4 c4]
          if ((v49 == v158)) {                          // #156799:29:120 #156803:56:160 [L d4 h4 c4]
            v51 = elUnknown_v40;                        // #156839:31:150 [L d1 h1 c1] +#156842:51:53
          } else {
            v159 = undefined;                           // #156809:40:53 #156814:223:233 [L d3 h3 c3]
            v160 = v48.p;                               // #156817:250:200 [L d3 h3 c3]
            nodeList_v50 = MC(undefined, fn_v136, v160);        // #156822:235:114 [L d3 h3 c3]
            v161 = 0;                                   // #156827:86:72 [L d3 h3 c3]
            v51 = nodeList_v50[0];                      // #156830:88:7 [L d3 h3 c3] +#156834:200:53
          }
          v52 = "<";                                    // #156847:58:233 [L d4 h4 c4]
          v162 = v48.t;                                 // #156852:169:200 [L d4 h4 c4]
          v163 = "<" + v162;                            // #156857:90:222 [L d4 h4 c4]
          v53 = ("<" + v162) + " id=\"";                // #156861:135:222 [L d4 h4 c4]
          v164 = v48.e;                                 // #156865:2:200 [L d4 h4 c4]
          v165 = v53 + v164;                            // #156870:143:222 [L d4 h4 c4]
          v54 = v165 + "\" class=\"";                   // #156874:40:222 [L d4 h4 c4]
          arr_v166 = v48.c;                             // #156878:95:200 [L d4 h4 c4]
          v167 = " ";                                   // #156883:87:233 [L d4 h4 c4]
          v168 = MC(arr_v166, "join", " ");             // #156888:20:114 [L d4 h4 c4]
          v169 = v54 + v168;                            // #156893:217:222 [L d4 h4 c4]
          v55 = v169 + "\"> </";                        // #156897:202:222 [L d4 h4 c4]
          v170 = v48.t;                                 // #156901:252:7 [L d4 h4 c4]
          v171 = (v55 + v170) + ">";                    // #156905:33:222 #156909:242:222 [L d4 h4 c4]
          v56 = v51;                                    // #156913:151:150 [L d4 h4 c4]
          fn_v57 = v56.insertAdjacentHTML;              // #156916:213:7 [L d4 h4 c4]
          win_v172 = v220[v223];                        // #156920:155:7 #156924:220:150 [L d4 h4 c4]
          trustedHTML_v58 = win_v172.YDta0(v171);        // #156927:125:138 [L d4 h4 c4]
          v173 = fn_v57.call(v56, "beforeend", trustedHTML_v58);        // #156945:218:138 [L d4 h4 c4]
          v148 = v148 + 1;                              // #156978:194:53 #156742:223:72 #156745:194:48 [L d4 h4 c4]
        }
        v174 = 0;                                       // #156983:227:72 [L d1 h1 c1]
        v175 = "k";                                     // #156986:203:233 [L d1 h1 c1]
        v176 = "v";                                     // #156991:19:233 [L d1 h1 c1]
        v177 = "v";                                     // #156996:59:233 [L d1 h1 c1]
        v178 = "title";                                 // #157001:195:233 [L d1 h1 c1]
        v179 = "sheet";                                 // #157010:43:233 [L d1 h1 c1]
        v180 = "length";                                // #157019:243:233 [L d1 h1 c1]
        v181 = "&lt;&gt;";                              // #157024:155:233 [L d1 h1 c1]
        v182 = "firstChild";                            // #157036:163:233 [L d1 h1 c1]
        v183 = "appendData";                            // #157050:139:233 [L d1 h1 c1]
        v184 = "insertRule";                            // #157064:211:233 [L d1 h1 c1] +#157078:23:53
        while ((v59 = v133.i.length, v60 = v174 < v59, v174 < v59)) {  // #157096:68:200 #157101:14:7 | #157105:215:186 [L d15 h15 c15]
          v61 = v133.i[v174];                           // #157123:225:200 #157128:119:7 [L d14 h14 c14]
          v62 = 0; if (v61.k === 0) {                   // #157132:50:200 #157137:138:69 [L d14 h14 c14]
            cSSStyleSheet_v71 = elStyle_v147.sheet;            // #157254:38:7 [L d6 h6 c6]
            fn_v189 = cSSStyleSheet_v71.insertRule;            // #157258:232:7 [L d6 h6 c6]
            v72 = v61.v;                                // #157262:34:7 [L d6 h6 c6]
            v190 = fn_v189.call(cSSStyleSheet_v71, v72, 0);            // #157266:113:72 #157269:254:138 [L d6 h6 c6] +#157294:86:53
          } else {
            v185 = undefined;                           // #157146:178:53 #157151:189:233 [L d8 h8 c8]
            v186 = v61.s;                               // #157154:224:200 [L d8 h8 c8]
            nodeList_v63 = MC(undefined, fn_v136, v186);            // #157159:185:114 [L d8 h8 c8]
            v187 = 0;                                   // #157164:108:72 [L d8 h8 c8]
            elDiv_v64 = nodeList_v63[0];                // #157167:150:7 [L d8 h8 c8]
            v65 = v61.k;                                // #157171:149:200 [L d8 h8 c8]
            v188 = 1; if (v65 === 1) {                  // #157176:33:69 [L d8 h8 c8]
              v70 = v61.v;                              // #157237:132:7 [L d4 h4 c4]
              elDiv_v64.title = v70;                    // #157241:173:210 [L d4 h4 c4]
            } else {
              v66 = v61.k;                              // #157185:173:53 #157190:44:7 [L d4 h4 c4]
              if (v66 === 2) {                          // #157194:28:69 [L d4 h4 c4]
                text_v68 = elDiv_v64.firstChild;            // #157218:225:7 [L d4 h4 c4]
                v69 = MC(text_v68, "appendData", "&lt;&gt;");            // #157222:246:114 [L d4 h4 c4] +#157227:110:53
              } else {
                v67 = 0;                                // #157203:124:53 #157208:115:72 [-] /* never executed in any replay */
                throw v67;                              // #157211:235:249 [-] /* never executed in any replay */
              }
            }
          }
          v174 = v174 + 1;                              // #157083:41:72 #157086:100:48 [L d14 h14 c14]
        }
        v73 = cell[1];                                  // #157304:139:236 [L d1 h1 c1]
        v191 = v73[v123];                               // #157307:249:7 [L d1 h1 c1]
        v74 = v73[v191];                                // #157311:47:7 [L d1 h1 c1]
        v192 = "";                                      // #157315:231:233 #157325:191:233 [L d1 h1 c1]
        v74.REqdn6 = "";                                // #157329:29:199 [L d1 h1 c1]
        v193 = 0;                                       // #157333:64:72 [L d1 h1 c1]
        v194 = 1;                                       // #157336:151:72 [L d1 h1 c1]
        v195 = 0;                                       // #157339:82:72 [L d1 h1 c1]
        v196 = 0;                                       // #157342:225:72 [L d1 h1 c1]
        v197 = "l";                                     // #157345:81:233 [L d1 h1 c1]
        v198 = "l";                                     // #157350:1:233 [L d1 h1 c1]
        v199 = "a";                                     // #157355:241:233 [L d1 h1 c1]
        v200 = "b";                                     // #157360:33:233 [L d1 h1 c1]
        v201 = "title";                                 // #157365:145:233 [L d1 h1 c1]
        v202 = "length";                                // #157374:65:233 [L d1 h1 c1]
        v203 = "REqdn6";                                // #157379:49:233 [L d1 h1 c1] +#157389:125:53
        while ((v75 = v133.l.length, v76 = v193 < v75, v193 < v75)) {  // #157404:153:20 | #157409:246:186 [L d6 h6 c6]
          v204 = v133.l[v193];                          // #157427:232:20 [L d5 h5 c5]
          v77 = cell[1];                                // #157432:179:236 [L d5 h5 c5]
          v205 = v77[v123];                             // #157435:129:7 [L d5 h5 c5]
          v78 = v77[v205];                              // #157439:151:7 [L d5 h5 c5]
          v206 = undefined;                             // #157443:175:233 [L d5 h5 c5]
          v207 = undefined;                             // #157446:103:233 [L d5 h5 c5]
          v208 = v204.a;                                // #157449:101:7 [L d5 h5 c5]
          elDiv_v209 = MC(undefined, fn_v136, v208)[0];                // #157453:106:114 #157458:28:7 [L d5 h5 c5]
          v210 = undefined;                             // #157462:96:233 [L d5 h5 c5]
          v211 = v204.b;                                // #157465:186:7 [L d5 h5 c5]
          elDiv_v212 = MC(undefined, fn_v136, v211)[0];                // #157469:171:114 #157474:153:7 [L d5 h5 c5]
          v213 = MC(undefined, fn_v130, elDiv_v209, elDiv_v212).title;                // #157478:172:168 #157484:214:7 [L d5 h5 c5]
          v79 = v78.REqdn6 + v213;                      // #157488:216:7 #157492:141:222 [L d5 h5 c5]
          v78.REqdn6 = v79;                             // #157496:210:210 [L d5 h5 c5]
          v193 = v193 + 1;                              // #157394:94:48 [L d5 h5 c5]
        }
        elHead_v80 = v220.document.head;                  // #157504:188:200 #157509:163:200 [L d1 h1 c1]
        elStyle_v81 = (elHead_v80).removeChild(elStyle_v147);                  // #157517:232:138 [L d1 h1 c1]
        v214 = null;                                    // #157541:252:233 [L d1 h1 c1]
        elBody_v82 = v220.document.body;                  // #157544:227:200 #157549:238:200 [L d1 h1 c1]
        elUnknown_v83 = (elBody_v82).removeChild(elUnknown_v40);                  // #157554:199:138 [L d1 h1 c1]
        v84 = null;                                     // #157578:31:233 [L d1 h1 c1]
        arr_v85 = tryStack.pop();                            // #157581:30:124 [L d1 h1 c1]
        break L157651_20;                               // #157584:246:53 [L d1 h1 c1]
      } catch (caught) {
        v86 = caught;                                     // #157589:130:150 [-] /* never executed in any replay */
        v87 = cell[1];                                  // #157592:101:236 [-] /* never executed in any replay */
        v88 = v87[v123];                                // #157595:235:7 [-] /* never executed in any replay */
        v89 = v87[v88];                                 // #157599:217:7 [-] /* never executed in any replay */
        v90 = v86;                                      // #157603:162:150 [-] /* never executed in any replay */
        v215 = (v90)[KP(m157605k162)]();                // #157606:171:138 [-] /* never executed in any replay */
        v91 = KP(m157625k171);                          // #157626:115:233 [-] /* never executed in any replay */
        v92 = v89[v91];                                 // #157636:65:7 [-] /* never executed in any replay */
        v93 = v92 + v215;                               // #157640:146:222 [-] /* never executed in any replay */
        v89[v91] = v93;                                 // #157644:3:210 [-] /* never executed in any replay */
      }
    }
    v94 = cell[15];                                     // #157652:47:236 [L d1 h1 c1]
    v95 = v94[v222];                                    // #157655:13:7 [L d1 h1 c1]
    v96 = 0; if (v95 === 0) {                           // #157659:185:69 [L d1 h1 c1]
      v97 = 3; v94[v222] = 3;                           // #157677:246:103 [L d1 h1 c1]
      v98 = "";                                         // #157682:82:233 [L d1 h1 c1]
      v94[v121] = ("");                                 // #157686:195:210 [L d1 h1 c1]
    }
    arr_v99 = tryStack.pop();                                // #157694:246:124 [L d1 h1 c1]
    arr_v115 = cell[0];                                 // #157697:110:53 #157907:158:236 [L d1 h1 c1]
    v116 = 1;                                           // #157910:253:72 [L d1 h1 c1]
    v216 = arr_v115[1];                                 // #157913:35:7 [L d1 h1 c1]
    v117 = arr_v115[v216];                              // #157917:49:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #157921:64:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v118 = 1;                                         // #157957:1:72 [L d1 h1 c1]
      v119 = arr_v115[1];                               // #157960:23:7 [L d1 h1 c1]
      v217 = "YsDDu6";                                  // #157964:47:233 [L d1 h1 c1]
      arr_v115[v119] = "YsDDu6";                        // #157974:108:210 [L d1 h1 c1]
    } else {
      // #157947:16:53 [-] /* never executed in any replay */
    }
    win_v120 = v220[v223];                              // #157982:15:7 [L d1 h1 c1]
    v218 = win_v120.qwQRi7();                           // #157986:164:138 [L d1 h1 c1]
    v219 = undefined;                                   // #158004:200:233 [L d1 h1 c1]
    return v219;                                        // #158007:56:245 [L d1 h1 c1]
  } catch (caught) {
    v100 = caught;                                        // #157702:157:150 [-] /* never executed in any replay */
    v101 = r70[r221];                                   // #157705:67:7 [-] /* never executed in any replay */
    v102 = KP(m157708k67);                              // #157709:171:233 [-] /* never executed in any replay */
    v103 = MC(v101, r209, v102);                        // #157782:24:114 [-] /* never executed in any replay */
    v104 = r70[r221];                                   // #157787:146:7 [-] /* never executed in any replay */
    v105 = v104;                                        // #157791:183:150 [-] /* never executed in any replay */
    v106 = (v105)[KP(m157793k183)](v100);               // #157794:172:138 [-] /* never executed in any replay */
    v107 = r70[r221];                                   // #157813:214:7 [-] /* never executed in any replay */
    v108 = v107;                                        // #157817:235:150 [-] /* never executed in any replay */
    v109 = v108[KP(m157819k235)];                       // #157820:214:200 [-] /* never executed in any replay */
    v110 = cell[15];                                    // #157825:105:236 [-] /* never executed in any replay */
    v111 = KP(m157827k105);                             // #157828:185:233 [-] /* never executed in any replay */
    v112 = cell[5];                                     // #157833:128:236 [-] /* never executed in any replay */
    v113 = v109.call(v108, v106, v110, v111, v112);      // #157836:145:138 [-] /* never executed in any replay */
    v114 = 1; v110[r217] = 1;                           // #157858:71:103 [-] /* never executed in any replay */
    if (v100[KP(m157862k71)]) {                         // #157863:194:200 #157868:137:160 [-] /* never executed in any replay */
      outside("L157893_100");                           // #157891:100:150 [-]  L157893_100 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L157873_137");  // L157873_137 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}