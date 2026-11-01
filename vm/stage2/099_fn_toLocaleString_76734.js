function fn_toLocaleString_76734(v1 /* r88 */, fn_v2 /* r227 */, v3 /* r248 */, v271 /* r70 */, v272 /* r212 */, v273 /* r223 */) { // entry L76734_174; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 270 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v4 /* r202 */, v5 /* r205 */, re_v6 /* r254 */, fn_v7 /* r253 */, v8 /* r202 */, v9 /* r205 */, v10 /* r202 */, v11 /* r205 */, arr_v12 /* r202 */, v13 /* r253 */;
  let arr_v14 /* r202 */, arr_v15 /* r254 */, fn_v16 /* r253 */, v17 /* r205 */, v18 /* r202 */, v19 /* r253 */, v20 /* r202 */, v21 /* r254 */, v22 /* r202 */, v23 /* r205 */;
  let v24 /* r253 */, v25 /* r205 */, re_v26 /* r205 */, re_v27 /* r254 */, fn_v28 /* r253 */, fn_v29 /* r202 */, string_v30 /* r205 */, fn_v31 /* r202 */, string_v32 /* r205 */, fn_v33 /* r205 */;
  let fn_v34 /* r202 */, fn_v35 /* r205 */, v36 /* r202 */, v37 /* r205 */, v38 /* r202 */, v39 /* r205 */, arr_v40 /* r202 */, v41 /* r253 */, arr_v42 /* r202 */, arr_v43 /* r254 */;
  let fn_v44 /* r253 */, v45 /* r205 */, v46 /* r202 */, v47 /* r253 */, v48 /* r202 */, v49 /* r254 */, v50 /* r202 */, v51 /* r205 */, v52 /* r253 */, v53 /* r205 */;
  let err_v54 /* r202 */, v55 /* r205 */, v56 /* r205 */, v57 /* r254 */, v58 /* r202 */, v59 /* r253 */, v60 /* r202 */, v61 /* r254 */, v62 /* r253 */, v63 /* r205 */;
  let v64 /* r202 */, v65 /* r253 */, v66 /* r202 */, v67 /* r254 */, v68 /* r202 */, v69 /* r205 */, v70 /* r253 */, v71 /* r205 */, v72 /* r202 */, v73 /* r205 */;
  let arr_v74 /* r202 */, err_v75 /* r202 */, v76 /* r205 */, v77 /* r202 */, v78 /* r254 */, v79 /* r253 */, v80 /* r202 */, v81 /* r254 */, v82 /* r253 */, v83 /* r205 */;
  let v84 /* r253 */, arr_v85 /* r202 */, arr_v86 /* r254 */, fn_v87 /* r202 */, v88 /* r205 */, v89 /* r253 */, v90 /* r205 */, v91 /* r202 */, v92 /* r254 */, v93 /* r205 */;
  let v94 /* r205 */, v95 /* r202 */, v96 /* r205 */, arr_v97 /* r202 */, v98 /* r253 */, arr_v99 /* r202 */, arr_v100 /* r254 */, fn_v101 /* r253 */, v102 /* r205 */, v103 /* r202 */;
  let v104 /* r253 */, v105 /* r202 */, v106 /* r254 */, v107 /* r202 */, v108 /* r205 */, v109 /* r253 */, v110 /* r205 */, v111 /* r205 */, arr_v112 /* r205 */, arr_v113 /* r202 */;
  let v114 /* r205 */, v115 /* r202 */, v116 /* r205 */, arr_v117 /* r202 */, v118 /* r253 */, arr_v119 /* r202 */, arr_v120 /* r254 */, fn_v121 /* r253 */, v122 /* r205 */, v123 /* r202 */;
  let v124 /* r253 */, v125 /* r202 */, v126 /* r254 */, v127 /* r202 */, v128 /* r205 */, v129 /* r253 */, v130 /* r205 */, v131 /* r205 */, v132 /* r202 */, v133 /* r205 */;
  let v134 /* r202 */, v135 /* r205 */, arr_v136 /* r202 */, v137 /* r253 */, arr_v138 /* r202 */, arr_v139 /* r254 */, fn_v140 /* r253 */, v141 /* r205 */, v142 /* r253 */, v143 /* r202 */;
  let v144 /* r254 */, v145 /* r202 */, v146 /* r205 */, v147 /* r253 */, v148 /* r202 */, v149 /* r254 */, v150 /* r205 */, v151 /* r202 */, v152 /* r205 */, v153 /* r202 */;
  let v154 /* r205 */, arr_v155 /* r202 */, v156 /* r253 */, v157 /* r202 */, v158 /* r254 */, v159 /* r253 */, v160 /* r205 */, v161 /* r202 */, v162 /* r253 */, v163 /* r202 */;
  let v164 /* r254 */, v165 /* r202 */, v166 /* r205 */, v167 /* r253 */, v168 /* r205 */, v169 /* r205 */, v170 /* r205 */, fn_v171 /* r205 */, fn_v172 /* r202 */, v173 /* r205 */;
  let v174 /* r254 */, v175 /* r202 */, v176 /* r205 */, v177 /* r254 */, v178 /* r202 */, arr_v179 /* r202 */, v180 /* r253 */, arr_v181 /* r202 */, arr_v182 /* r254 */, fn_v183 /* r253 */;
  let v184 /* r205 */, v185 /* r202 */, v186 /* r253 */, v187 /* r202 */, v188 /* r254 */, v189 /* r202 */, v190 /* r205 */, v191 /* r253 */, v192 /* r205 */, v193 /* r205 */;
  let v194 /* r205 */, v195 /* r202 */, v196 /* r254 */, arr_v197 /* r202 */, err_v198 /* r205 */, v199 /* r254 */, v200 /* r205 */, v201 /* r253 */, v202 /* r202 */, v203 /* r254 */;
  let v204 /* r202 */, v205 /* r253 */, v206 /* r202 */, arr_v207 /* r202 */, v208 /* r202 */, v209 /* r254 */, v210 /* r253 */, v211 /* r205 */, v212 /* r202 */, arr_v213 /* r202 */;
  let arr_v214 /* r254 */, fn_v215 /* r202 */, v216 /* r205 */, v217 /* r205 */, fn_v218 /* r205 */, fn_v219 /* r202 */, v220 /* r205 */, arr_v221 /* r202 */, v222 /* r254 */, v223 /* r202 */;
  let v224 /* r254 */, v225 /* r205 */, v226 /* r202 */, v227 /* r254 */, v228 /* r202 */, v229 /* r202 */, v230 /* r205 */, v231 /* r254 */, v232 /* r205 */, v233 /* r205 */;
  let v234 /* r205 */, v235 /* r205 */, v236 /* r202 */, v237 /* r205 */, v238 /* r202 */, v239 /* r205 */, v240 /* r202 */, arr_v241 /* r202 */, arr_v242 /* r202 */, fn_v243 /* r254 */;
  let v244 /* r205 */, v245 /* r202 */, v246 /* r202 */, v247 /* r205 */, v248 /* r202 */, v249 /* r205 */, v250 /* r205 */, v251 /* r205 */, arr_v252 /* r202 */, v253 /* r205 */;
  let v254 /* r202 */, v255 /* r205 */, v256 /* r205 */, fn_v257 /* r252 */, fn_v258 /* r250 */, fn_v259 /* r247 */, fn_v260 /* r246 */, v261 /* r253 */, v262 /* r253 */, v263 /* r253 */;
  let v264 /* r254 */, v265 /* r254 */, v266 /* r254 */, arr_v267 /* r202 */, v268 /* r202 */, v269 /* r202 */, v270 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 552, fn_v7 552, fn_v16 33, fn_v28 552, fn_v29 552, fn_v31 552, fn_v33 552, fn_v34 552
  //   Function: fn_v35 552, fn_v44 60, fn_v87 60, fn_v101 60, fn_v121 60, fn_v140 27, fn_v171 552, fn_v172 552
  //   Function: fn_v183 60, fn_v215 27, fn_v218 522, fn_v219 522, fn_v243 33, fn_v257 552, fn_v258 552, fn_v259 552
  //   Function: fn_v260 552
  //   RegExp: re_v6 552, re_v26 552, re_v27 552
  //   Array: arr_v12 552, arr_v14 33, arr_v15 33, arr_v40 552, arr_v42 60, arr_v43 60, arr_v74 60, arr_v85 60
  //   Array: arr_v86 60, arr_v97 522, arr_v99 60, arr_v100 60, arr_v112 522, arr_v113 522, arr_v117 522, arr_v119 60
  //   Array: arr_v120 60, arr_v136 552, arr_v138 27, arr_v139 27, arr_v155 552, arr_v179 552, arr_v181 60, arr_v182 60
  //   Array: arr_v197 27, arr_v207 525, arr_v213 27, arr_v214 27, arr_v221 522, arr_v241 552, arr_v242 33, arr_v252 15
  //   Array: arr_v267 552
  //   String: string_v30 552, string_v32 552
  //   Error: err_v54 552, err_v75 462, err_v198 525
  // H142: 6 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H138 binds: 8 identity writes (vN = rN, the register keeps its value) make a fn-entry, CALL or CLOS value an ordinary text def, so the reads after them become locals; OP52 steps write only the pc / key registers
  // H137 proven reads: 71 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 98 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  let v274 /* r193 */, v275 /* r192 */, v276 /* r199 */, v277 /* r196 */, v278 /* r198 */, v279 /* r199 */, v280 /* r223 */, v281 /* r196 */, v282 /* r198 */, v283 /* r199 */;
  let v284 /* r223 */, v285 /* r199 */, v286 /* r223 */, v287 /* r192 */, v288 /* r192 */, v289 /* r192 */, v290 /* r192 */, v291 /* r192 */, v292 /* r192 */, v293 /* r192 */;
  let v294 /* r199 */, v295 /* r198 */, v296 /* r199 */;
  // H133 rewrites: 7 single-use temps folded (7 of them expressions, H135), 37 dead register writes dropped, 3 constants propagated (3 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1, tableDef 1)
  v274 = fn_v2;                                         // #76735:99:150 [L d184 h184 c184]
  r195 = v1;                                            // #76738:132:150 [L d184 h184 c184]
  v275 = v3;                                            // #76741:97:150 [L d184 h184 c184]
  v4 = undefined;                                       // #76744:237:53 #76754:105:233 #76757:185:233 #76760:201:233 #76763:153:233 [L d184 h184 c184]
  v5 = undefined;                                       // #76766:41:233 #76769:121:233 #76772:137:233 #76775:89:233 #76778:233:233 #76781:57:233 #76784:73:233 #76787:25:233 #76790:169:233 #76793:249:233 #76796:9:233 #76799:217:233 [L d184 h184 c184]
  v276 = 0;                                             // #76802:12:72 [L d184 h184 c184]
  v277 = 1;                                             // #76805:51:72 [L d184 h184 c184]
  v278 = 2;                                             // #76808:126:72 [L d184 h184 c184]
  r204 = cell[225]();                                   // #76811:26:201 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r204
  try {
    TP(tryStack, 76954, 161, callDepths);                          // #76816:155:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
    re_v6 = cell[34];                                   // #76822:90:236 #76825:95:150 [L d184 h184 c184]
    fn_v7 = cell[34].test;                              // #76828:122:200 [L d184 h184 c184]
    v8 = v274.toString();                               // #76836:35:138 [L d184 h184 c184]
    v9 = (v8).toLocaleString();                         // #76856:104:138 [L d184 h184 c184]
    v10 = v9.toString();                                // #76882:217:138 [L d184 h184 c184]
    if (fn_v7.call(re_v6, v10)) {                       // #76902:198:138 #76920:125:160 [L d184 h184 c184]
      v11 = v276;                                       // #76939:167:150 [L d173 h173 c173] +#76942:155:53
    } else {
      v11 = v277;                                       // #76926:153:53 #76931:249:150 [L d11 h11 c11] +#76934:37:53
    }
    arr_v12 = tryStack.pop();                                // #76947:157:124 [L d184 h184 c184]
    if (v11 === v278) {                                 // #76950:57:53 #76966:41:161 [L d184 h184 c184]
      v20 = cell[22];                                   // #77048:72:236 [-] /* never executed in any replay */
      v21 = cell[22];                                   // #77051:21:150 [-] /* never executed in any replay */
      v22 = v21[v273];                                  // #77054:219:7 [-] /* never executed in any replay */
      v23 = cell[20];                                   // #77058:154:236 [-] /* never executed in any replay */
      v24 = v22.call(v21, v23);                         // #77061:195:138 [-] +#77079:71:53 /* never executed in any replay */
    } else {
      if (v276 === v11) {                               // #76974:149:53 #76979:97:161 [L d184 h184 c184]
        v13 = false;                                    // #76996:175:233 [L d173 h173 c173] +#76999:131:53
      } else {
        arr_v14 = cell[23];                             // #77004:215:236 [L d11 h11 c11]
        arr_v15 = cell[23];                             // #77007:40:150 [L d11 h11 c11]
        fn_v16 = arr_v15[v273];                         // #77010:98:7 [L d11 h11 c11]
        v17 = cell[20];                                 // #77014:197:236 [L d11 h11 c11]
        v18 = fn_v16.call(arr_v15, v17);                // #77017:2:138 [L d11 h11 c11]
        v19 = v18;                                      // #77035:103:150 [L d11 h11 c11] +#77038:91:53
      }
    }
    v25 = cell[20] + 1; cell[20] = v25;                 // #77084:172:99 [L d184 h184 c184]
    try {
      TP(tryStack, 77284, 253, callDepths);                        // #77088:101:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
      re_v26 = cell[34];                                // #77094:124:236 [L d184 h184 c184]
      re_v27 = cell[34];                                // #77097:121:150 [L d184 h184 c184]
      fn_v28 = cell[34].test;                           // #77100:172:200 [L d184 h184 c184]
      fn_v29 = v271.String;                             // #77108:211:200 [L d184 h184 c184]
      string_v30 = fn_v29[v272];                        // #77113:33:7 [L d184 h184 c184]
      fn_v257 = string_v30.toString;                    // #77117:180:200 [L d184 h184 c184]
      fn_v258 = fn_v257.call;                           // #77122:187:200 [L d184 h184 c184]
      fn_v31 = v271.String;                             // #77130:102:200 [L d184 h184 c184]
      string_v32 = fn_v31[v272];                        // #77135:40:7 [L d184 h184 c184]
      fn_v259 = string_v32.toLocaleString;              // #77139:95:200 [L d184 h184 c184]
      fn_v260 = fn_v259.call;                           // #77157:122:200 [L d184 h184 c184]
      fn_v33 = v271.Function;                           // #77165:233:200 [L d184 h184 c184]
      fn_v34 = fn_v33[v272];                            // #77170:95:7 [L d184 h184 c184]
      fn_v35 = fn_v34.toString;                         // #77174:122:200 [L d184 h184 c184]
      v36 = fn_v35.call(v274);                          // #77179:35:138 [L d184 h184 c184]
      v37 = fn_v260.call(fn_v259, v36);                 // #77196:104:138 [L d184 h184 c184]
      v38 = fn_v258.call(fn_v257, v37);                 // #77214:217:138 [L d184 h184 c184]
      if (fn_v28.call(re_v27, v38)) {                   // #77232:198:138 #77250:125:160 [L d184 h184 c184]
        v39 = v276;                                     // #77269:253:150 [L d164 h164 c164] +#77272:25:53
      } else {
        v39 = v277;                                     // #77256:153:53 #77261:56:150 [L d20 h20 c20] +#77264:40:53
      }
      arr_v40 = tryStack.pop();                              // #77277:33:124 [L d184 h184 c184]
      if (v278 === v39) {                               // #77280:173:53 #77296:233:161 [L d184 h184 c184]
        v48 = cell[22];                                 // #77378:17:236 [-] /* never executed in any replay */
        v49 = cell[22];                                 // #77381:250:150 [-] /* never executed in any replay */
        v50 = v49[v273];                                // #77384:108:7 [-] /* never executed in any replay */
        v51 = cell[20];                                 // #77388:39:236 [-] /* never executed in any replay */
        v52 = v50.call(v49, v51);                       // #77391:92:138 [-] +#77409:188:53 /* never executed in any replay */
      } else {
        if (v276 === v39) {                             // #77304:85:53 #77309:186:161 [L d184 h184 c184]
          v41 = false;                                  // #77326:177:233 [L d164 h164 c164] +#77329:253:53
        } else {
          arr_v42 = cell[23];                           // #77334:179:236 [L d20 h20 c20]
          arr_v43 = cell[23];                           // #77337:148:150 [L d20 h20 c20]
          fn_v44 = arr_v43[v273];                       // #77340:30:7 [L d20 h20 c20]
          v45 = cell[20];                               // #77344:145:236 [L d20 h20 c20]
          v46 = fn_v44.call(arr_v43, v45);              // #77347:158:138 [L d20 h20 c20]
          v47 = v46;                                    // #77365:147:150 [L d20 h20 c20] +#77368:215:53
        }
      }
      v53 = cell[20] + 1; cell[20] = v53;               // #77414:150:99 [L d184 h184 c184]
      err_v54 = cell[227](r193);                        // #77418:43:22 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r202; then err_v54 = r202 (H142 CALL bind)
      v55 = false;                                      // #77423:243:233 [L d184 h184 c184]
      if (v55 === err_v54) {                            // #77426:115:161 [L d184 h184 c184]
        v66 = cell[22];                                 // #77521:97:236 [-] /* never executed in any replay */
        v67 = cell[22];                                 // #77524:10:150 [-] /* never executed in any replay */
        v68 = v67[v273];                                // #77527:60:7 [-] /* never executed in any replay */
        v69 = cell[20];                                 // #77531:183:236 [-] /* never executed in any replay */
        v70 = v68.call(v67, v69);                       // #77534:172:138 [-] +#77552:204:53 /* never executed in any replay */
      } else {
        v56 = 9;                                        // #77434:55:53 #77439:81:72 [L d184 h184 c184]
        v57 = err_v54.name;                             // #77442:36:200 [L d184 h184 c184]
        v58 = v57.length;                               // #77447:107:200 [L d184 h184 c184]
        if (v56 === v58) {                              // #77452:11:161 [L d184 h184 c184]
          v59 = false;                                  // #77469:112:233 [L d184 h184 c184] +#77472:128:53
        } else {
          v60 = cell[23];                               // #77477:173:236 [-] /* never executed in any replay */
          v61 = cell[23];                               // #77480:38:150 [-] /* never executed in any replay */
          v62 = v61[v273];                              // #77483:232:7 [-] /* never executed in any replay */
          v63 = cell[20];                               // #77487:179:236 [-] /* never executed in any replay */
          v64 = v62.call(v61, v63);                     // #77490:184:138 [-] /* never executed in any replay */
          v65 = v64;                                    // #77508:197:150 [-] +#77511:193:53 /* never executed in any replay */
        }
      }
      v71 = cell[20] + 1; cell[20] = v71;               // #77557:21:99 [L d184 h184 c184]
      if (v275) {                                       // #77561:80:160 [L d184 h184 c184]
        v90 = v276;                                     // #77772:231:150 [L d10 h10 c10] +#77775:219:53
      } else {
        // #77567:224:53 [L d174 h174 c174]
        try {
          TP(tryStack, 77601, 143, callDepths);                    // #77572:63:194 [L d174 h174 c174]  try: pushes the catch arm of the enclosing try (TP)
          v72 = v274[KP(m77577k63)];                    // #77578:218:200 [L d174 h174 c174]
          v73 = v278;                                   // #77591:223:150 [L d20 h20 c20]
          arr_v74 = tryStack.pop();                          // #77594:222:124 [L d20 h20 c20] +#77597:182:53
        } catch (caught) {
          err_v75 = caught;                               // #77602:0:150 [L d154 h154 c154]
          v76 = caught.message;                           // #77605:215:200 [L d154 h154 c154]
          v77 = v76.length;                             // #77610:18:200 [L d154 h154 c154]
          v78 = 50;                                     // #77615:161:72 [L d154 h154 c154]
          if ((50 < v76.length)) {                      // #77618:230:98 #77622:29:160 [L d154 h154 c154]
            v73 = r199;                                 // #77641:1:150 [L d154 h154 c154] +#77644:13:53
          } else {
            v73 = r196;                                 // #77628:185:53 #77633:163:150 [-] +#77636:167:53 /* never executed in any replay */
          }
        }
        if (v73 === r198) {                             // #77649:228:161 [L d174 h174 c174]
          arr_v85 = cell[22];                           // #77731:249:236 [L d20 h20 c20]
          arr_v86 = cell[22];                           // #77734:66:150 [L d20 h20 c20]
          fn_v87 = arr_v86[r223];                       // #77737:148:7 [L d20 h20 c20]
          v88 = cell[20];                               // #77741:175:236 [L d20 h20 c20]
          v89 = fn_v87.call(arr_v86, v88);              // #77744:196:138 [L d20 h20 c20] +#77762:132:53
        } else {
          if (v73 === r199) {                           // #77657:36:53 #77662:202:161 [L d154 h154 c154]
            v79 = false;                                // #77679:80:233 [L d154 h154 c154] +#77682:224:53
          } else {
            v80 = cell[23];                             // #77687:121:236 [-] /* never executed in any replay */
            v81 = cell[23];                             // #77690:194:150 [-] /* never executed in any replay */
            v82 = v81[r223];                            // #77693:20:7 [-] /* never executed in any replay */
            v83 = cell[20];                             // #77697:47:236 [-] /* never executed in any replay */
            v84 = v82.call(v81, v83);                   // #77700:68:138 #77718:33:150 [-] +#77721:173:53 /* never executed in any replay */
          }
        }
      }
      v91 = 1;                                          // #77780:240:72 [L d184 h184 c184]
      v92 = cell[20] + 1; cell[20] = v92;               // #77783:246:99 [L d184 h184 c184]
      v93 = cell[20] + 1; cell[20] = v93;               // #77787:100:99 [L d184 h184 c184]
      if (r192) {                                       // #77791:35:160 [L d184 h184 c184]
        v110 = r199;                                    // #77986:117:150 [L d10 h10 c10] +#77989:177:53
      } else {
        // #77797:39:53 [L d174 h174 c174]
        try {
          TP(tryStack, 77851, 178, callDepths);                    // #77802:6:194 [L d174 h174 c174]  try: pushes the catch arm of the enclosing try (TP)
          v94 = undefined;                              // #77808:34:233 [L d174 h174 c174]
          v95 = r193[r212];                             // #77811:244:7 [L d174 h174 c174]
          if (v94 === v95) {                            // #77815:176:161 [L d174 h174 c174]
            v96 = r199;                                 // #77836:2:150 [L d154 h154 c154] +#77839:74:53
          } else {
            v96 = r196;                                 // #77823:192:53 #77828:212:150 [L d20 h20 c20] +#77831:84:53
          }
          arr_v97 = tryStack.pop();                          // #77844:60:124 [L d174 h174 c174]
          if (r198 === v96) {                           // #77847:28:53 #77863:87:161 [L d174 h174 c174]
            v105 = cell[22];                            // #77945:126:236 [-] /* never executed in any replay */
            v106 = cell[22];                            // #77948:243:150 [-] /* never executed in any replay */
            v107 = v106[r223];                          // #77951:193:7 [-] /* never executed in any replay */
            v108 = cell[20];                            // #77955:104:236 [-] /* never executed in any replay */
            v109 = v107.call(v106, v108);               // #77958:217:138 [-] +#77976:133:53 /* never executed in any replay */
          } else {
            if (r199 === v96) {                         // #77871:139:53 #77876:239:161 [L d174 h174 c174]
              v98 = false;                              // #77893:117:233 [L d154 h154 c154] +#77896:177:53
            } else {
              arr_v99 = cell[23];                       // #77901:84:236 [L d20 h20 c20]
              arr_v100 = cell[23];                      // #77904:241:150 [L d20 h20 c20]
              fn_v101 = arr_v100[r223];                 // #77907:71:7 [L d20 h20 c20]
              v102 = cell[20];                          // #77911:86:236 [L d20 h20 c20]
              v103 = fn_v101.call(arr_v100, v102);      // #77914:143:138 [L d20 h20 c20]
              v104 = v103;                              // #77932:0:150 [L d20 h20 c20] +#77935:208:53
            }
          }
        } catch (caught) {
          outside("L77857_168");                        // #77852:87:150 #77855:168:150 [-]  L77857_168 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      }
      v111 = cell[20] + 1; cell[20] = v111;             // #77994:247:99 [L d184 h184 c184]
      if (r192) {                                       // #77998:42:160 [L d184 h184 c184]
        v130 = r199;                                    // #78241:147:150 [L d10 h10 c10] +#78244:215:53
      } else {
        // #78004:210:53 [L d174 h174 c174]
        try {
          TP(tryStack, 78106, 209, callDepths);                    // #78009:121:194 [L d174 h174 c174]  try: pushes the catch arm of the enclosing try (TP)
          arr_v112 = cell[27](r193);                    // #78015:66:22 [L d174 h174 c174]  VM call: pushes a frame, the callee body returns into r205; then arr_v112 = r205 (H142 CALL bind)
          v279 = r199; v280 = r223; arr_v113 = (arr_v112)[KP(m78018k66)]();  // #78019:203:138 [L d174 h174 c174]
          v114 = (arr_v113)[KP(m78034k203)]();          // #78035:112:138 [L d174 h174 c174]
          v115 = "length,name";                         // #78055:100:233 [L d174 h174 c174]
          if (v114 === v115) {                          // #78070:96:161 [L d174 h174 c174]
            v116 = v279;                                // #78091:129:150 [L d154 h154 c154] +#78094:141:53
          } else {
            v116 = r196;                                // #78078:176:53 #78083:229:150 [L d20 h20 c20] +#78086:97:53
          }
          arr_v117 = tryStack.pop();                         // #78099:110:124 [L d174 h174 c174]
          if (v116 === r198) {                          // #78102:6:53 #78118:160:161 [L d174 h174 c174]
            v125 = cell[22];                            // #78200:205:236 [-] /* never executed in any replay */
            v126 = cell[22];                            // #78203:198:150 [-] /* never executed in any replay */
            v127 = v126[v280];                          // #78206:8:7 [-] /* never executed in any replay */
            v128 = cell[20];                            // #78210:83:236 [-] /* never executed in any replay */
            v129 = v127.call(v126, v128);               // #78213:216:138 [-] +#78231:72:53 /* never executed in any replay */
          } else {
            if (v116 === v279) {                        // #78126:240:53 #78131:76:161 [L d174 h174 c174]
              v118 = false;                             // #78148:209:233 [L d154 h154 c154] +#78151:157:53
            } else {
              arr_v119 = cell[23];                      // #78156:183:236 [L d20 h20 c20]
              arr_v120 = cell[23];                      // #78159:136:150 [L d20 h20 c20]
              fn_v121 = arr_v120[v280];                 // #78162:66:7 [L d20 h20 c20]
              v122 = cell[20];                          // #78166:37:236 [L d20 h20 c20]
              v123 = fn_v121.call(arr_v120, v122);      // #78169:226:138 [L d20 h20 c20]
              v124 = v123;                              // #78187:199:150 [L d20 h20 c20] +#78190:59:53
            }
          }
        } catch (caught) {
          outside("L78112_63");                         // #78107:186:150 #78110:63:150 [-]  L78112_63 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      }
      v131 = cell[20] + 1; cell[20] = v131;             // #78249:160:99 [L d184 h184 c184]
      try {
        TP(tryStack, 78312, 229, callDepths);                      // #78253:137:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
        v132 = "toString";                              // #78259:89:233 [L d184 h184 c184]
        v133 = cell[26](r193, v132);                    // #78264:14:242 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r205; then v133 = r205 (H142 CALL bind)
        v281 = r196; v282 = r198; v283 = r199; v284 = r223; v134 = undefined;  // #78269:10:233 [L d184 h184 c184]
        if (v133 === v134) {                            // #78272:238:161 [L d184 h184 c184]
          v135 = v283;                                  // #78289:56:150 [L d175 h175 c175] +#78292:40:53
        } else {
          v135 = v281;                                  // #78297:13:150 [L d9 h9 c9] +#78300:233:53
        }
        arr_v136 = tryStack.pop();                           // #78305:141:124 [L d184 h184 c184]
        if (v135 === v282) {                            // #78308:105:53 #78324:2:161 [L d184 h184 c184]
          v143 = cell[22];                              // #78406:74:236 [-] /* never executed in any replay */
          v144 = cell[22];                              // #78409:143:150 [-] /* never executed in any replay */
          v145 = v144[v284];                            // #78412:237:7 [-] /* never executed in any replay */
          v146 = cell[20];                              // #78416:228:236 [-] /* never executed in any replay */
          v147 = v145.call(v144, v146);                 // #78419:101:138 [-] +#78437:225:53 /* never executed in any replay */
        } else {
          if (v283 === v135) {                          // #78332:74:53 #78337:21:161 [L d184 h184 c184]
            v137 = false;                               // #78354:72:233 [L d175 h175 c175] +#78357:248:53
          } else {
            arr_v138 = cell[23];                        // #78362:6:236 [L d9 h9 c9]
            arr_v139 = cell[23];                        // #78365:91:150 [L d9 h9 c9]
            fn_v140 = arr_v139[v284];                   // #78368:137:7 [L d9 h9 c9]
            v141 = cell[20];                            // #78372:16:236 [L d9 h9 c9]
            v142 = fn_v140.call(arr_v139, v141);        // #78375:225:138 #78393:138:150 [L d9 h9 c9] +#78396:178:53
          }
        }
        v148 = 1;                                       // #78442:104:72 [L d184 h184 c184]
        v149 = cell[20] + 1; cell[20] = v149;           // #78445:142:99 [L d184 h184 c184]
        v150 = cell[20] + 1; cell[20] = v150;           // #78449:156:99 [L d184 h184 c184]
        try {
          TP(tryStack, 78520, 174, callDepths);                    // #78453:149:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
          v151 = "arguments";                           // #78459:53:233 [L d184 h184 c184]
          v152 = cell[26](r193, v151);                  // #78472:122:242 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r205; then v152 = r205 (H142 CALL bind)
          v153 = undefined;                             // #78477:198:233 [L d184 h184 c184]
          if (v152 === v153) {                          // #78480:186:161 [L d184 h184 c184]
            v154 = v283;                                // #78497:22:150 [L d184 h184 c184] +#78500:14:53
          } else {
            v154 = v281;                                // #78505:142:150 [-] +#78508:166:53 /* never executed in any replay */
          }
          arr_v155 = tryStack.pop();                         // #78513:157:124 [L d184 h184 c184]
          if (v282 === v154) {                          // #78516:57:53 #78532:107:161 [L d184 h184 c184]
            v163 = cell[22];                            // #78614:187:236 [-] /* never executed in any replay */
            v164 = cell[22];                            // #78617:124:150 [-] /* never executed in any replay */
            v165 = v164[v284];                          // #78620:102:7 [-] /* never executed in any replay */
            v166 = cell[20];                            // #78624:185:236 [-] /* never executed in any replay */
            v167 = v165.call(v164, v166);               // #78627:38:138 [-] +#78645:222:53 /* never executed in any replay */
          } else {
            if (v154 === v283) {                        // #78540:79:53 #78545:223:161 [L d184 h184 c184]
              v156 = false;                             // #78562:236:233 [L d184 h184 c184] +#78565:12:53
            } else {
              v157 = cell[23];                          // #78570:146:236 [-] /* never executed in any replay */
              v158 = cell[23];                          // #78573:183:150 [-] /* never executed in any replay */
              v159 = v158[v284];                        // #78576:117:7 [-] /* never executed in any replay */
              v160 = cell[20];                          // #78580:76:236 [-] /* never executed in any replay */
              v161 = v159.call(v158, v160);             // #78583:45:138 [-] /* never executed in any replay */
              v162 = v161;                              // #78601:166:150 [-] +#78604:94:53 /* never executed in any replay */
            }
          }
          v168 = cell[20] + 1; cell[20] = v168;         // #78650:177:99 [L d184 h184 c184]
          v169 = cell[32];                              // #78654:152:236 [L d184 h184 c184]
          if (v169) {                                   // #78657:135:160 [L d184 h184 c184]
            try {
              TP(tryStack, 78791, 172, callDepths);                // #78676:95:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
              fn_v171 = cell[30];                       // #78682:14:236 [L d184 h184 c184]
              fn_v172 = cell[30];                       // #78685:67:150 [L d184 h184 c184]
              v173 = fn_v172.call(r193);                // #78688:8:138 [L d184 h184 c184]
              v174 = v173;                              // #78705:213:150 [L d184 h184 c184]
              v175 = "[native code]";                   // #78708:117:233 [L d184 h184 c184]
              v176 = (v174).indexOf("[native code]");   // #78725:242:138 [L d184 h184 c184]
              v177 = 1;                                 // #78745:1:72 [L d184 h184 c184]
              v178 = -(1);                              // #78748:117:189 [L d184 h184 c184]
              if (v176 === v178) {                      // #78751:109:161 [L d184 h184 c184]
                v170 = v281;                            // #78768:104:150 [L d20 h20 c20] +#78771:152:53
              } else {
                v170 = v283;                            // #78776:59:150 [L d164 h164 c164] +#78779:223:53
              }
              arr_v179 = tryStack.pop();                     // #78784:52:124 [L d184 h184 c184] +#78787:52:53
            } catch (caught) {
              outside("L78797_114");                    // #78792:233:150 #78795:114:150 [-]  L78797_114 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
            }
          } else {
            v170 = v283;                                // #78663:251:53 #78668:62:150 [-] +#78671:150:53 /* never executed in any replay */
          }
          if (v170 === v282) {                          // #78803:59:161 [L d184 h184 c184]
            v187 = cell[22];                            // #78885:253:236 [-] /* never executed in any replay */
            v188 = cell[22];                            // #78888:54:150 [-] /* never executed in any replay */
            v189 = v188[v284];                          // #78891:184:7 [-] /* never executed in any replay */
            v190 = cell[20];                            // #78895:67:236 [-] /* never executed in any replay */
            v191 = v189.call(v188, v190);               // #78898:8:138 [-] +#78916:184:53 /* never executed in any replay */
          } else {
            if (v283 === v170) {                        // #78811:223:53 #78816:46:161 [L d184 h184 c184]
              v180 = false;                             // #78833:30:233 [L d164 h164 c164] +#78836:246:53
            } else {
              arr_v181 = cell[23];                      // #78841:133:236 [L d20 h20 c20]
              arr_v182 = cell[23];                      // #78844:158:150 [L d20 h20 c20]
              fn_v183 = arr_v182[v284];                 // #78847:128:7 [L d20 h20 c20]
              v184 = cell[20];                          // #78851:235:236 [L d20 h20 c20]
              v185 = fn_v183.call(arr_v182, v184);      // #78854:16:138 [L d20 h20 c20]
              v186 = v185;                              // #78872:189:150 [L d20 h20 c20] +#78875:217:53
            }
          }
          v192 = cell[20] + 1; cell[20] = v192;         // #78921:145:99 [L d184 h184 c184]
          v193 = cell[32];                              // #78925:248:236 [L d184 h184 c184]
          if (v193) {                                   // #78928:103:160 [L d184 h184 c184]
            try {
              TP(tryStack, 78987, 69, callDepths);                 // #78947:23:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
              v195 = cell[25](r193);                    // #78953:232:22 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r202; then v195 = r202 (H142 CALL bind)
              v196 = (v195)[KP(m78956k232)]();          // #78957:89:138 [L d184 h184 c184]
              v194 = v282;                              // #78977:34:150 [L d9 h9 c9]
              arr_v197 = tryStack.pop();                     // #78980:213:124 [L d9 h9 c9] +#78983:145:53
            } catch (caught) {
              err_v198 = caught;                          // #78988:94:150 [L d175 h175 c175]
              try {
                TP(tryStack, 79137, 62, callDepths);               // #78991:207:194 [L d175 h175 c175]  try: pushes the catch arm of the enclosing try (TP)
                v199 = caught.stack;                      // #78997:42:200 [L d175 h175 c175]
                if (v199) {                             // #79002:81:160 [L d175 h175 c175]
                  v201 = err_v198.stack;                // #79021:95:200 [L d175 h175 c175]
                  v202 = "at Object.toString (<anonymous>)";  // #79026:87:233 [L d175 h175 c175]
                  v203 = v201.indexOf("at Object.toString (<anonymous>)");  // #79062:204:138 [L d175 h175 c175]
                  v204 = 1;                             // #79082:243:72 [L d175 h175 c175]
                  v205 = -(1);                          // #79085:31:189 [L d175 h175 c175]
                  v206 = !(v203 === (-1));              // #79088:15:65 #79092:188:130 [L d175 h175 c175]
                  v200 = v206;                          // #79095:185:150 [L d175 h175 c175] +#79098:229:53
                } else {
                  v200 = v199;                          // #79008:29:53 #79013:149:150 [-] +#79016:81:53 /* never executed in any replay */
                }
                if (v200) {                             // #79103:183:160 [L d175 h175 c175]
                  v194 = r196;                          // #79122:41:150 [-] +#79125:149:53 /* never executed in any replay */
                } else {
                  v194 = r199;                          // #79109:107:53 #79114:117:150 [L d175 h175 c175] +#79117:177:53
                }
                arr_v207 = tryStack.pop();                   // #79130:24:124 [L d175 h175 c175] +#79133:136:53
              } catch (caught) {
                outside("L79143_148");                  // #79138:179:150 #79141:148:150 [-]  L79143_148 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
              }
            }
          } else {
            v194 = v283;                                // #78934:91:53 #78939:55:150 [-] +#78942:235:53 /* never executed in any replay */
          }
          if (v194 === r198) {                          // #79154:12:161 [L d184 h184 c184]
            arr_v213 = cell[22];                        // #79236:90:236 [L d9 h9 c9]
            arr_v214 = cell[22];                        // #79239:95:150 [L d9 h9 c9]
            fn_v215 = arr_v214[r223];                   // #79242:125:7 [L d9 h9 c9]
            v216 = cell[20];                            // #79246:52:236 [L d9 h9 c9]
            v263 = fn_v215.call(arr_v214, v216);        // #79249:117:138 [L d9 h9 c9] +#79267:177:53
          } else {
            if (v194 === r199) {                        // #79162:172:53 #79167:51:161 [L d175 h175 c175]
              v261 = false;                             // #79184:189:233 [L d175 h175 c175] +#79187:217:53
            } else {
              v208 = cell[23];                          // #79192:20:236 [-] /* never executed in any replay */
              v209 = cell[23];                          // #79195:177:150 [-] /* never executed in any replay */
              v210 = v209[r223];                        // #79198:7:7 [-] /* never executed in any replay */
              v211 = cell[20];                          // #79202:22:236 [-] /* never executed in any replay */
              v212 = v210.call(v209, v211);             // #79205:79:138 [-] /* never executed in any replay */
              v262 = v212;                              // #79223:192:150 [-] +#79226:144:53 /* never executed in any replay */
            }
          }
          v217 = cell[20] + 1; cell[20] = v217;         // #79272:56:99 [L d184 h184 c184]
          if (r192) {                                   // #79276:167:160 [L d184 h184 c184]
            v232 = r199;                                // #79477:187:150 [L d10 h10 c10] +#79480:95:53
          } else {
            // #79282:155:53 [L d174 h174 c174]
            try {
              TP(tryStack, 79342, 76, callDepths);                 // #79287:70:194 [L d174 h174 c174]  try: pushes the catch arm of the enclosing try (TP)
              fn_v218 = cell[28](r193);                 // #79293:27:22 [L d174 h174 c174]  VM call: pushes a frame, the callee body returns into r205; then fn_v218 = r205 (H142 CALL bind)
              v285 = r199; v286 = r223; v287 = r70.Function;  // #79297:70:200 [L d174 h174 c174]
              fn_v219 = v287[r212];                     // #79302:136:7 [L d174 h174 c174]
              if (fn_v218 === fn_v219) {                // #79306:244:161 [L d174 h174 c174]
                v220 = v285;                            // #79327:212:150 [L d174 h174 c174] +#79330:84:53
              } else {
                v220 = r196;                            // #79314:244:53 #79319:67:150 [-] +#79322:199:53 /* never executed in any replay */
              }
              arr_v221 = tryStack.pop();                     // #79335:173:124 [L d174 h174 c174]
              if (r198 === v220) {                      // #79338:9:53 #79354:140:161 [L d174 h174 c174]
                v228 = cell[22];                        // #79436:97:236 [-] /* never executed in any replay */
                v289 = cell[22];                        // #79439:10:150 [-] /* never executed in any replay */
                v229 = v289[v286];                      // #79442:60:7 [-] /* never executed in any replay */
                v230 = cell[20];                        // #79446:183:236 [-] /* never executed in any replay */
                v231 = v229.call(v289, v230);           // #79449:172:138 [-] +#79467:204:53 /* never executed in any replay */
              } else {
                if (v285 === v220) {                    // #79362:44:53 #79367:237:161 [L d174 h174 c174]
                  v222 = false;                         // #79384:255:233 [L d174 h174 c174] +#79387:147:53
                } else {
                  v223 = cell[23];                      // #79392:215:236 [-] /* never executed in any replay */
                  v288 = cell[23];                      // #79395:40:150 [-] /* never executed in any replay */
                  v224 = v288[v286];                    // #79398:98:7 [-] /* never executed in any replay */
                  v225 = cell[20];                      // #79402:197:236 [-] /* never executed in any replay */
                  v226 = v224.call(v288, v225);         // #79405:2:138 [-] /* never executed in any replay */
                  v227 = v226;                          // #79423:103:150 [-] +#79426:91:53 /* never executed in any replay */
                }
              }
            } catch (caught) {
              outside("L79348_18");                     // #79343:9:150 #79346:18:150 [-]  L79348_18 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
            }
          }
          v233 = cell[20] + 1; cell[20] = v233;         // #79485:2:99 [L d184 h184 c184]
          v234 = cell[32];                              // #79489:229:236 [L d184 h184 c184]
          if (v234) {                                   // #79492:224:160 [L d184 h184 c184]
            try {
              TP(tryStack, 79611, 4, callDepths);                  // #79511:31:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
              v236 = "";                                // #79517:23:233 [L d184 h184 c184]
              v237 = r193 + "";                         // #79521:144:222 [L d184 h184 c184]
              v290 = v237;                              // #79525:61:150 [L d184 h184 c184]
              v238 = "[native code]";                   // #79528:61:233 [L d184 h184 c184]
              v239 = (v290).indexOf("[native code]");   // #79545:154:138 [L d184 h184 c184]
              r192 = 1;                                 // #79565:9:72 [L d184 h184 c184]
              v240 = -(1);                              // #79568:93:189 [L d184 h184 c184]
              if (v239 === v240) {                      // #79571:181:161 [L d184 h184 c184]
                v235 = r196;                            // #79588:26:150 [L d11 h11 c11] +#79591:2:53
              } else {
                v235 = r199;                            // #79596:66:150 [L d173 h173 c173] +#79599:138:53
              }
              arr_v241 = tryStack.pop();                     // #79604:230:124 [L d184 h184 c184] +#79607:158:53
            } catch (caught) {
              outside("L79617_138");                    // #79612:225:150 #79615:138:150 [-]  L79617_138 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
            }
          } else {
            v235 = r199;                                // #79498:48:53 #79503:55:150 [-] +#79506:235:53 /* never executed in any replay */
          }
          if (v235 === r198) {                          // #79623:79:161 [L d184 h184 c184]
            v245 = cell[22];                            // #79705:37:236 [-] /* never executed in any replay */
            v292 = cell[22];                            // #79708:190:150 [-] /* never executed in any replay */
            v246 = v292[r223];                          // #79711:32:7 [-] /* never executed in any replay */
            v247 = cell[20];                            // #79715:11:236 [-] /* never executed in any replay */
            v266 = v246.call(v292, v247);               // #79718:176:138 [-] +#79736:192:53 /* never executed in any replay */
          } else {
            if (r199 === v235) {                        // #79631:163:53 #79636:62:161 [L d184 h184 c184]
              v264 = false;                             // #79653:60:233 [L d173 h173 c173] +#79656:28:53
            } else {
              arr_v242 = cell[23];                      // #79661:207:236 [L d11 h11 c11]
              v291 = cell[23];                          // #79664:64:150 [L d11 h11 c11]
              fn_v243 = v291[r223];                     // #79667:26:7 [L d11 h11 c11]
              v244 = cell[20];                          // #79671:157:236 [L d11 h11 c11]
              v265 = fn_v243.call(v291, v244);          // #79674:122:138 #79692:255:150 [L d11 h11 c11] +#79695:147:53
            }
          }
          v248 = 1;                                     // #79741:2:72 [L d184 h184 c184]
          v293 = cell[20] + 1; cell[20] = v293;         // #79744:64:99 [L d184 h184 c184]
          v249 = cell[20] + 1; cell[20] = v249;         // #79748:6:99 [L d184 h184 c184]
          try {
            TP(tryStack, 79799, 36, callDepths);                   // #79752:215:194 [L d184 h184 c184]  try: pushes the catch arm of the enclosing try (TP)
            v250 = r193.name;                           // #79758:18:200 [L d184 h184 c184]
            if (v250 === r195) {                        // #79763:214:161 [L d184 h184 c184]
              v251 = r199;                              // #79784:97:150 [L d179 h179 c179] +#79787:237:53
            } else {
              v251 = r196;                              // #79771:206:53 #79776:5:150 [L d5 h5 c5] +#79779:1:53
            }
            arr_v267 = tryStack.pop();                       // #79792:125:124 [L d184 h184 c184]
            if (v251 === r198) {                        // #79795:153:53 #79811:101:161 [L d184 h184 c184]
              v254 = cell[22];                          // #79893:176:236 [-] /* never executed in any replay */
              v296 = cell[22];                          // #79896:221:150 [-] /* never executed in any replay */
              v269 = v296[r223];                        // #79899:131:7 [-] /* never executed in any replay */
              v255 = cell[20];                          // #79903:162:236 [-] /* never executed in any replay */
              r198 = v269.call(v296, v255);             // #79906:171:138 [-] +#79924:143:53 /* never executed in any replay */
            } else {
              if (r199 === v251) {                      // #79819:225:53 #79824:58:161 [L d184 h184 c184]
                r198 = false;                           // #79841:187:233 [L d179 h179 c179] +#79844:95:53
              } else {
                arr_v252 = cell[23];                    // #79849:9:236 [L d5 h5 c5]
                v294 = cell[23];                        // #79852:18:150 [L d5 h5 c5]
                v295 = v294[r223];                      // #79855:36:7 [L d5 h5 c5]
                v253 = cell[20];                        // #79859:255:236 [L d5 h5 c5]
                v268 = v295.call(v294, v253);           // #79862:212:138 [L d5 h5 c5]
                r198 = v268;                            // #79880:113:150 [L d5 h5 c5] +#79883:189:53
              }
            }
            v256 = cell[20] + 1; cell[20] = v256;       // #79929:253:99 [L d184 h184 c184]
            r205 = cell[226](r204);                     // #79933:182:22 [L d184 h184 c184]  VM call: pushes a frame, the callee body returns into r205
            v270 = undefined;                           // #79938:18:233 [L d184 h184 c184]
            return v270;                                // #79941:218:245 [L d184 h184 c184]
          } catch (caught) {
            outside("L79805_170");                      // #79800:129:150 #79803:170:150 [-]  L79805_170 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
          }
        } catch (caught) {
          outside("L78526_132");                        // #78521:99:150 #78524:132:150 [-]  L78526_132 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      } catch (caught) {
        outside("L78318_243");                          // #78313:126:150 #78316:243:150 [-]  L78318_243 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } catch (caught) {
      outside("L77290_203");                            // #77285:54:150 #77288:203:150 [-]  L77290_203 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } catch (caught) {
    outside("L76960_143");                              // #76955:74:150 #76958:143:150 [-]  L76960_143 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}