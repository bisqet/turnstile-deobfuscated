function fn_webrtc_offer_238905(v211 /* r209 */, v212 /* r214 */, v213 /* r220 */, v290 /* r70 */, v291 /* r221 */) { // entry L238895_233; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 289 register webs used only inside this fn (no live-in, cross-call or table-made def; 79 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 19 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r202 */, v3 /* r205 */, fn_v4 /* r204 */, win_v5 /* r202 */, v6 /* r205 */, v7 /* r204 */, v8 /* r199 */, win_v9 /* r205 */, win_v10 /* r204 */;
  let fn_v11 /* r202 */, v12 /* r205 */, v13 /* r199 */, win_v14 /* r204 */, fn_v15 /* r205 */, win_v16 /* r204 */, v17 /* r205 */, v18 /* r204 */, v19 /* r205 */, v20 /* r205 */;
  let v21 /* r199 */, v22 /* r205 */, v23 /* r202 */, arr_v24 /* r205 */, arr_v25 /* r199 */, v26 /* r202 */, arr_v27 /* r199 */, v28 /* r202 */, arr_v29 /* r204 */, win_v30 /* r202 */;
  let v31 /* r205 */, v32 /* r199 */, v33 /* r205 */, v34 /* r198 */, v35 /* r199 */, v36 /* r205 */, v37 /* r199 */, v38 /* r205 */, arr_v39 /* r205 */, arr_v40 /* r205 */;
  let v41 /* r205 */, v42 /* r205 */, v43 /* r205 */, v44 /* r199 */, v45 /* r202 */, arr_v46 /* r205 */, v47 /* r205 */, v48 /* r202 */, v49 /* r199 */, v50 /* r205 */;
  let fn_v51 /* r202 */, v52 /* r205 */, fn_v53 /* r202 */, v54 /* r199 */, fn_v55 /* r199 */, v56 /* r205 */, arr_v57 /* r199 */, v58 /* r202 */, arr_v59 /* r198 */, fn_v60 /* r199 */;
  let arr_v61 /* r205 */, fn_v62 /* r199 */, v63 /* r205 */, arr_v64 /* r199 */, v65 /* r202 */, arr_v66 /* r198 */, fn_v67 /* r196 */, fn_v68 /* r199 */, arr_v69 /* r205 */, fn_v70 /* r202 */;
  let v71 /* r205 */, v72 /* r202 */, v73 /* r205 */, fn_v74 /* r202 */, v75 /* r199 */, v76 /* r202 */, arr_v77 /* r198 */, fn_v78 /* r196 */, fn_v79 /* r199 */, arr_v80 /* r205 */;
  let fn_v81 /* r199 */, arr_v82 /* r205 */, mediaCapabilities_v83 /* r202 */, v84 /* r205 */, navigator_v85 /* r202 */, mediaCapabilities_v86 /* r199 */, fn_v87 /* r202 */, v88 /* r199 */, v89 /* r202 */, fn_v90 /* r205 */;
  let fn_v91 /* r202 */, fn_v92 /* r198 */, arr_v93 /* r196 */, fn_v94 /* r199 */, arr_v95 /* r205 */, promise_v96 /* r199 */, fn_v97 /* r198 */, fn_v98 /* r205 */, promise_v99 /* r202 */, fn_v100 /* r199 */;
  let fn_v101 /* r205 */, promise_v102 /* r198 */, fn_v103 /* r205 */, fn_v104 /* r202 */, fn_v105 /* r198 */, fn_v106 /* r199 */, arr_v107 /* r205 */, promise_v108 /* r199 */, fn_v109 /* r198 */, fn_v110 /* r205 */;
  let promise_v111 /* r202 */, fn_v112 /* r199 */, fn_v113 /* r205 */, v114 /* r199 */, win_v115 /* r202 */, v116 /* r204 */, v117 /* r204 */, arr_v118 /* r202 */, v119 /* r204 */, v120 /* r204 */;
  let v121 /* r202 */, v122 /* r204 */, v123 /* r204 */, fn_v124 /* r204 */, v125 /* r204 */, pc_v126 /* r202 */, pc_v127 /* r204 */, v128 /* r204 */, v129 /* r202 */, v130 /* r202 */;
  let v131 /* r204 */, v132 /* r202 */, v133 /* r199 */, v134 /* r204 */, v135 /* r204 */, v136 /* r202 */, v137 /* r199 */, v138 /* r202 */, v139 /* r199 */, v140 /* r204 */;
  let v141 /* r204 */, v142 /* r204 */, v143 /* r204 */, v144 /* r202 */, v145 /* r204 */, v146 /* r199 */, v147 /* r204 */, v148 /* r204 */, v149 /* r199 */, v150 /* r204 */;
  let v151 /* r202 */, win_v152 /* r202 */, v153 /* r202 */, v154 /* r202 */, arr_v155 /* r202 */, v156 /* r202 */, v157 /* r204 */, v158 /* r204 */, v159 /* r202 */, v160 /* r202 */;
  let v161 /* r204 */, v162 /* r202 */, v163 /* r204 */, v164 /* r202 */, v165 /* r202 */, v166 /* r204 */, v167 /* r204 */, v168 /* r202 */, v169 /* r202 */, v170 /* r204 */;
  let v171 /* r202 */, v172 /* r204 */, v173 /* r202 */, v174 /* r202 */, v175 /* r204 */, v176 /* r202 */, v177 /* r204 */, v178 /* r202 */, v179 /* r202 */, v180 /* r204 */;
  let v181 /* r202 */, win_v182 /* r204 */, v183 /* r202 */, v184 /* r199 */, v185 /* r199 */, v186 /* r204 */, v187 /* r202 */, fn_v188 /* r202 */, fn_v189 /* r204 */, v190 /* r199 */;
  let v191 /* r204 */, pc_v192 /* r199 */, v193 /* r204 */, fn_v194 /* r202 */, pc_v195 /* r199 */, v196 /* r204 */, fn_v197 /* r202 */, v198 /* r204 */, v199 /* r202 */, v200 /* r199 */;
  let v201 /* r204 */, v202 /* r204 */, v203 /* r204 */, v204 /* r199 */, v205 /* r204 */, v206 /* r204 */, v207 /* r202 */, v208 /* r204 */, v209 /* r204 */, v210 /* r205 */;
  let v214 /* r193 */, v215 /* r195 */, v216 /* r198 */, fn_v217 /* r196 */, v218 /* r202 */, v219 /* r199 */, v220 /* r204 */, v221 /* r205 */, arr_v222 /* r193 */, fn_v223 /* r192 */;
  let arr_v224 /* r195 */, fn_v225 /* r192 */, arr_v226 /* r198 */, fn_v227 /* r196 */, fn_v228 /* r193 */, arr_v229 /* r196 */, fn_v230 /* r195 */, promise_v231 /* r198 */, v232 /* r198 */, v233 /* r198 */;
  let pc_v234 /* r198 */, fn_v235 /* r196 */, arr_v236 /* r198 */, v237 /* r198 */, v238 /* r198 */, v239 /* r196 */, v240 /* r195 */, v241 /* r193 */, v242 /* r195 */, v243 /* r196 */;
  let v244 /* r196 */, v245 /* r195 */, v246 /* r193 */, v247 /* r195 */, v248 /* r196 */, v249 /* r196 */, v250 /* r195 */, v251 /* r193 */, v252 /* r195 */, v253 /* r196 */;
  let v254 /* r198 */, v255 /* r202 */, v256 /* r199 */, v257 /* r204 */, v258 /* r198 */, v259 /* r198 */, win_v260 /* r198 */, fn_v261 /* r196 */, v262 /* r195 */, pc_v263 /* r198 */;
  let v264 /* r198 */, v265 /* r196 */, arr_v266 /* r196 */, fn_v267 /* r195 */, fn_v268 /* r198 */, v269 /* r198 */, v270 /* r198 */, v271 /* r196 */, pc_v272 /* r198 */, fn_v273 /* r198 */;
  let v274 /* r196 */, pc_v275 /* r198 */, fn_v276 /* r198 */, v277 /* r196 */, v278 /* r198 */, v279 /* r198 */, v280 /* r198 */, v281 /* r202 */, v282 /* r199 */, v283 /* r204 */;
  let v284 /* r202 */, pc_v285 /* r198 */, v286 /* r199 */, v287 /* r202 */, v288 /* r204 */, v289 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v4 3, fn_v11 3, fn_v15 3, fn_v51 3, fn_v53 3, fn_v55 3, fn_v60 3, fn_v62 3
  //   Function: fn_v67 3, fn_v68 3, fn_v70 3, fn_v74 3, fn_v78 3, fn_v79 3, fn_v81 3, fn_v87 3
  //   Function: fn_v90 3, fn_v91 3, fn_v92 3, fn_v94 3, fn_v97 3, fn_v98 3, fn_v100 3, fn_v101 3
  //   Function: fn_v103 3, fn_v104 3, fn_v105 3, fn_v106 3, fn_v109 3, fn_v110 3, fn_v112 3, fn_v113 3
  //   Function: fn_v124 3, fn_v188 3, fn_v189 3, fn_v194 3, fn_v197 3, fn_v217 3, fn_v223 3, fn_v225 3
  //   Function: fn_v227 3, fn_v228 3, fn_v230 3, fn_v235 3, fn_v261 3, fn_v267 3, fn_v268 3, fn_v273 3
  //   Function: fn_v276 3
  //   Window: win_v5 3, win_v9 3, win_v10 3, win_v14 3, win_v16 3, win_v30 3, win_v115 3, win_v152 3
  //   Window: win_v182 3, win_v260 3
  //   Array: arr_v24 3, arr_v25 3, arr_v27 3, arr_v29 3, arr_v39 3, arr_v40 3, arr_v46 3, arr_v57 3
  //   Array: arr_v59 3, arr_v61 3, arr_v64 3, arr_v66 3, arr_v69 3, arr_v77 3, arr_v80 3, arr_v82 3
  //   Array: arr_v93 3, arr_v95 3, arr_v107 3, arr_v118 3, arr_v155 3, arr_v222 3, arr_v224 3, arr_v226 3
  //   Array: arr_v229 3, arr_v236 3, arr_v266 3
  //   MediaCapabilities: mediaCapabilities_v83 3, mediaCapabilities_v86 3
  //   Navigator: navigator_v85 3
  //   Promise: promise_v96 3, promise_v99 3, promise_v102 3, promise_v108 3, promise_v111 3, promise_v231 3
  //   RTCPeerConnection: pc_v126 3, pc_v127 3, pc_v192 3, pc_v195 3, pc_v234 3, pc_v263 3, pc_v272 3, pc_v275 3
  //   RTCPeerConnection: pc_v285 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 56 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 21 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  let v292 /* r205 */, v293 /* r205 */, v294 /* r205 */, v295 /* r205 */, v296 /* r205 */, v297 /* r205 */, v298 /* r205 */, v299 /* r205 */, v300 /* r205 */, v301 /* r205 */;
  // H133 rewrites: 8 single-use temps folded (6 of them expressions, H135), 28 dead register writes dropped, 7 constants propagated (8 uses), 1 string keys as .member; 4 webs kept as registers (retOut 4, liveIn 1, crossCall 1, tableDef 1)
  NC(19, 20, 26, 27, 28, 29, 30, 31, 34, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 52, 53);  // #238896:85:53 #238906:173:211 [L d1 h1 c1]
  v214 = undefined;                                     // #238931:237:233 #238934:45:233 [L d1 h1 c1]
  v215 = undefined;                                     // #238937:109:233 [L d1 h1 c1]
  v216 = undefined;                                     // #238940:173:233 #238943:237:233 #238946:45:233 #238949:109:233 #238952:173:233 #238955:237:233 #238958:45:233 #238961:109:233 #238964:173:233 #238967:237:233 #238970:45:233 #238973:109:233 #238976:173:233 #238979:237:233 #238982:45:233 #238985:109:233 #238988:173:233 #238991:237:233 #238994:45:233 #238997:109:233 [L d1 h1 c1]
  v1 = undefined;                                       // #239000:173:233 #239003:237:233 [L d1 h1 c1]
  v2 = undefined;                                       // #239006:45:233 #239009:109:233 [L d1 h1 c1]
  v3 = undefined;                                       // #239012:173:233 #239015:237:233 [L d1 h1 c1]
  clos;                                                 // #239018:32:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v4 = clos;                                         // #239032:71:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v4 = its home register (H139 CLOS bind)
  cell[52] = r202;                                      // #239044:145:195 [L d1 h1 c1]
  cell[53] = fn_v4;                                     // #239047:51:195 [L d1 h1 c1]
  win_v5 = v290.globalThis;                             // #239050:254:200 [L d1 h1 c1]
  cell[19] = win_v5;                                    // #239055:44:195 [L d1 h1 c1]
  v6 = cell[1];                                         // #239058:231:236 [L d1 h1 c1]
  v7 = v6[v213];                                        // #239061:229:7 [L d1 h1 c1]
  v8 = v6[v7];                                          // #239065:107:7 [L d1 h1 c1]
  cell[20] = v8;                                        // #239069:37:195 [L d1 h1 c1]
  win_v9 = v290[v291];                                  // #239072:171:7 [L d1 h1 c1]
  win_v10 = win_v9;                                     // #239076:172:150 [L d1 h1 c1]
  fn_v11 = win_v10[v211];                               // #239079:214:7 [L d1 h1 c1]
  v12 = KP(239082);                                     // #239083:178:233 [L d1 h1 c1]
  v13 = fn_v11.call(win_v10, v12);                      // #239136:123:138 [L d1 h1 c1]
  win_v14 = v290[v291];                                 // #239156:41:7 [L d1 h1 c1]
  fn_v15 = win_v14.RTCPeerConnection;                   // #239160:156:200 [L d1 h1 c1]
  win_v16 = v290[v291];                                 // #239165:6:7 [L d1 h1 c1]
  fn_v217 = win_v16.RTCRtpReceiver;                     // #239169:69:200 [L d1 h1 c1]
  if (fn_v15) {                                         // #239174:192:160 [L d1 h1 c1]
    v21 = cell[20];                                     // #239299:119:236 [L d1 h1 c1]
    v22 = "eSxc2";                                      // #239302:15:233 [L d1 h1 c1]
    v23 = "paMIu0";                                     // #239311:71:233 [L d1 h1 c1]
    v21.eSxc2 = "paMIu0";                               // #239321:133:199 [L d1 h1 c1]
    arr_v24 = [];                                       // #239325:95:107 [L d1 h1 c1]
    arr_v25 = [];                                       // #239327:81:107 [L d1 h1 c1]
    v26 = 0; arr_v24[0] = arr_v25;                      // #239329:174:26 [L d1 h1 c1]
    arr_v27 = [];                                       // #239334:36:107 [L d1 h1 c1]
    v28 = 1; arr_v24[1] = arr_v27;                      // #239336:245:26 [L d1 h1 c1]
    arr_v29 = arr_v24;                                  // #239341:78:150 [L d1 h1 c1]
    win_v30 = cell[19];                                 // #239344:1:236 [L d1 h1 c1]
    v31 = KP(239346);                                   // #239347:241:233 [L d1 h1 c1]
    v32 = win_v30.decodeURIComponent(v31);              // #239982:126:138 [L d1 h1 c1]
    v33 = "A";                                          // #240013:186:233 [L d1 h1 c1]
    arr_v222 = v32.split(("A"));                        // #240018:99:138 [L d1 h1 c1]
    fn_v223 = clos;                                     // #240036:62:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v223 = its home register (H139 CLOS bind)
    v34 = undefined;                                    // #240050:122:233 [L d1 h1 c1]
    v35 = KP(240052);                                   // #240053:198:233 [L d1 h1 c1]
    v36 = win_v30.decodeURIComponent(v35);              // #241021:63:138 [L d1 h1 c1]
    v37 = MC(undefined, fn_v223, v36);                  // #241052:92:114 [L d1 h1 c1]
    v38 = "A";                                          // #241057:160:233 [L d1 h1 c1]
    arr_v224 = v37.split(("A"));                        // #241062:49:138 [L d1 h1 c1]
    arr_v39 = [];                                       // #241080:91:107 [L d1 h1 c1]
    cell[26] = arr_v39;                                 // #241082:85:195 [L d1 h1 c1]
    arr_v40 = [];                                       // #241085:239:107 [L d1 h1 c1]
    cell[27] = arr_v40;                                 // #241087:153:195 [L d1 h1 c1]
    v41 = null;                                         // #241090:41:233 [L d1 h1 c1]
    cell[28] = null;                                    // #241093:107:195 [L d1 h1 c1]
    v42 = null;                                         // #241096:51:233 [L d1 h1 c1]
    cell[29] = null;                                    // #241099:205:195 [L d1 h1 c1]
    v43 = KP(241101);                                   // #241102:141:233 [L d1 h1 c1]
    v44 = win_v30.decodeURIComponent(v43);              // #241335:170:138 [L d1 h1 c1]
    v45 = "A";                                          // #241366:54:233 [L d1 h1 c1]
    arr_v46 = v44.split(("A"));                         // #241371:239:138 [L d1 h1 c1]
    cell[30] = arr_v46;                                 // #241389:153:195 [L d1 h1 c1]
    v47 = cell[1];                                      // #241392:224:236 [L d1 h1 c1]
    v48 = cell[1].bmma1;                                // #241395:55:200 [L d1 h1 c1]
    v49 = 21;                                           // #241404:114:72 [L d1 h1 c1]
    v50 = cell[1].bmma1 === 21;                         // #241407:214:65 [L d1 h1 c1]
    cell[31] = v50;                                     // #241411:164:195 [L d1 h1 c1]
    try {
      TP(tryStack, 242315, 223, callDepths);                       // #241414:125:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      if (fn_v217) {                                    // #241420:24:160 [L d1 h1 c1]
        fn_v51 = fn_v217.getCapabilities;               // #241439:62:200 #241444:179:150 [L d1 h1 c1] +#241447:119:53
      } else {
        fn_v51 = fn_v217;                               // #241426:136:53 #241431:60:150 [-] +#241434:28:53 /* never executed in any replay */
      }
      if (fn_v51) {                                     // #241452:5:160 [L d1 h1 c1]
        fn_v53 = fn_v217.getCapabilities;               // #241471:243:200 [L d1 h1 c1]
        v54 = typeof fn_v53;                            // #241476:19:193 [L d1 h1 c1]
        v52 = v212 === v54;                             // #241479:51:65 #241483:20:150 [L d1 h1 c1] +#241486:148:53
      } else {
        v52 = fn_v51;                                   // #241458:1:53 #241463:67:150 [-] +#241466:199:53 /* never executed in any replay */
      }
      if (v52) {                                        // #241491:216:160 [L d1 h1 c1]
        fn_v55 = fn_v217;                               // #241502:0:150 [L d1 h1 c1]
        v56 = (fn_v55).getCapabilities("audio");        // #241505:180:233 #241514:245:138 [L d1 h1 c1]
        if (v56) {                                      // #241542:176:160 [L d1 h1 c1]
          arr_v57 = v56.codecs;                         // #241561:172:200 #241571:233:150 [L d1 h1 c1] +#241574:85:53
        } else {
          arr_v57 = v56;                                // #241548:192:53 #241553:19:150 [-] +#241556:87:53 /* never executed in any replay */
        }
        if (arr_v57) {                                  // #241579:152:160 [L d1 h1 c1]
          v58 = 0;                                      // #241598:123:72 [L d1 h1 c1]
          arr_v59 = v56.codecs;                         // #241601:38:200 [L d1 h1 c1]
          fn_v225 = arr_v59.map;                        // #241611:229:200 [L d1 h1 c1]
          fn_v60 = clos;                                // #241616:56:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v60 = its home register (H139 CLOS bind)
          arr_v61 = fn_v225.call(arr_v59, fn_v60);      // #241629:105:138 [L d1 h1 c1]
          arr_v29[v58] = arr_v61;                       // #241646:159:199 [L d1 h1 c1] +#241650:208:150 +#241653:96:53
        } else {
          // #241585:8:53 #241590:87:150 #241593:139:53 [-] /* never executed in any replay */
        }
        fn_v62 = fn_v217;                               // #241658:226:150 [L d1 h1 c1]
        v63 = (fn_v62).getCapabilities("video");        // #241661:142:233 #241670:231:138 [L d1 h1 c1]
        if (v63) {                                      // #241698:90:160 [L d1 h1 c1]
          arr_v64 = v63.codecs;                         // #241717:197:200 #241727:222:150 [L d1 h1 c1] +#241730:182:53
        } else {
          arr_v64 = v63;                                // #241704:66:53 #241709:42:150 [-] +#241712:210:53 /* never executed in any replay */
        }
        if (arr_v64) {                                  // #241735:195:160 [L d1 h1 c1]
          v65 = 1;                                      // #241754:235:72 [L d1 h1 c1]
          arr_v66 = v63.codecs;                         // #241757:214:200 [L d1 h1 c1]
          fn_v67 = arr_v66.map;                         // #241767:213:200 [L d1 h1 c1]
          fn_v68 = clos;                                // #241772:104:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v68 = its home register (H139 CLOS bind)
          arr_v69 = fn_v67.call(arr_v66, fn_v68);       // #241784:217:138 [L d1 h1 c1]
          arr_v29[v65] = arr_v69;                       // #241801:79:199 [L d1 h1 c1] +#241805:192:150 +#241808:144:53
        } else {
          // #241741:71:53 #241746:183:150 #241749:107:53 [-] /* never executed in any replay */
        }
      } else {
        // #241497:72:53 [-] /* never executed in any replay */
      }
      fn_v70 = v290.MediaSource;                        // #241813:218:200 [L d1 h1 c1]
      v71 = typeof fn_v70;                              // #241818:30:193 [L d1 h1 c1]
      v72 = "undefined";                                // #241821:218:233 [L d1 h1 c1]
      if (v71 === v72) {                                // #241826:126:161 [L d1 h1 c1]
        v73 = false;                                    // #241843:243:233 [-] +#241846:183:53 /* never executed in any replay */
      } else {
        fn_v74 = v290.MediaSource.isTypeSupported;      // #241851:46:200 #241856:205:200 [L d1 h1 c1]
        v75 = typeof fn_v74;                            // #241861:5:193 [L d1 h1 c1]
        v76 = v75 === v212;                             // #241864:221:65 [L d1 h1 c1]
        v73 = v76;                                      // #241868:150:150 [L d1 h1 c1] +#241871:142:53
      }
      cell[34] = v73;                                   // #241876:183:195 [L d1 h1 c1]
      arr_v77 = arr_v222;                               // #241879:136:150 [L d1 h1 c1]
      fn_v78 = arr_v222.map;                            // #241882:63:200 [L d1 h1 c1]
      fn_v79 = clos;                                    // #241887:170:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v79 = its home register (H139 CLOS bind)
      arr_v80 = fn_v78.call(arr_v77, fn_v79);           // #241898:147:138 [L d1 h1 c1]
      cell[26] = arr_v80;                               // #241915:173:195 [L d1 h1 c1]
      arr_v226 = arr_v224;                              // #241918:38:150 [L d1 h1 c1]
      fn_v227 = arr_v224.map;                           // #241921:229:200 [L d1 h1 c1]
      fn_v81 = clos;                                    // #241926:56:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v81 = its home register (H139 CLOS bind)
      arr_v82 = fn_v227.call(arr_v226, fn_v81);         // #241937:105:138 [L d1 h1 c1]
      cell[27] = arr_v82;                               // #241954:171:195 [L d1 h1 c1]
      mediaCapabilities_v83 = v290.navigator.mediaCapabilities;  // #241957:150:200 #241962:149:200 [L d1 h1 c1]
      if (mediaCapabilities_v83) {                      // #241967:208:160 [L d1 h1 c1]
        navigator_v85 = v290.navigator;                 // #241986:196:200 [L d1 h1 c1]
        mediaCapabilities_v86 = navigator_v85.mediaCapabilities;  // #241991:139:200 [L d1 h1 c1]
        fn_v87 = (navigator_v85.mediaCapabilities).decodingInfo;  // #241996:246:200 [L d1 h1 c1]
        v88 = typeof fn_v87;                            // #242001:202:193 [L d1 h1 c1]
        v89 = v212 === v88;                             // #242004:206:65 [L d1 h1 c1]
        v84 = v89;                                      // #242008:3:150 [L d1 h1 c1] +#242011:135:53
      } else {
        v84 = mediaCapabilities_v83;                    // #241973:96:53 #241978:191:150 [-] +#241981:83:53 /* never executed in any replay */
      }
      if (v84) {                                        // #242016:2:160 [L d1 h1 c1]
        fn_v90 = v290.Promise;                          // #242027:182:200 [L d1 h1 c1]
        fn_v91 = fn_v90;                                // #242032:75:150 [L d1 h1 c1]
        fn_v92 = fn_v90.all;                            // #242035:182:200 [L d1 h1 c1]
        arr_v93 = arr_v222;                             // #242042:75:150 [L d1 h1 c1]
        fn_v228 = arr_v222.map;                         // #242045:182:200 [L d1 h1 c1]
        fn_v94 = clos;                                  // #242050:5:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v94 = its home register (H139 CLOS bind)
        arr_v95 = fn_v228.call(arr_v93, fn_v94);        // #242065:66:138 [L d1 h1 c1]
        promise_v96 = fn_v92.call(fn_v91, arr_v95);     // #242082:203:138 [L d1 h1 c1]
        fn_v97 = promise_v96.then;                      // #242099:54:200 [L d1 h1 c1]
        fn_v98 = clos;                                  // #242104:133:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v98 = its home register (H139 CLOS bind)
        promise_v99 = fn_v97.call(promise_v96, fn_v98);  // #242113:194:138 [L d1 h1 c1]
        fn_v100 = promise_v99.catch;                    // #242131:17:200 [L d1 h1 c1]
        fn_v101 = clos;                                 // #242136:180:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v101 = its home register (H139 CLOS bind)
        promise_v102 = fn_v100.call(promise_v99, fn_v101);  // #242146:245:138 [L d1 h1 c1]
        fn_v103 = v290.Promise;                         // #242165:56:200 [L d1 h1 c1]
        fn_v104 = fn_v103;                              // #242170:69:150 [L d1 h1 c1]
        fn_v105 = fn_v103.all;                          // #242173:72:200 [L d1 h1 c1]
        arr_v229 = arr_v224;                            // #242180:21:150 [L d1 h1 c1]
        fn_v230 = arr_v224.map;                         // #242183:216:200 [L d1 h1 c1]
        fn_v106 = clos;                                 // #242188:31:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v106 = its home register (H139 CLOS bind)
        arr_v107 = fn_v230.call(arr_v229, fn_v106);     // #242203:116:138 [L d1 h1 c1]
        promise_v108 = fn_v105.call(fn_v104, arr_v107);  // #242220:181:138 [L d1 h1 c1]
        fn_v109 = promise_v108.then;                    // #242237:248:200 [L d1 h1 c1]
        fn_v110 = clos;                                 // #242242:191:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v110 = its home register (H139 CLOS bind)
        promise_v111 = fn_v109.call(promise_v108, fn_v110);  // #242251:148:138 [L d1 h1 c1]
        fn_v112 = promise_v111.catch;                   // #242269:27:200 [L d1 h1 c1]
        fn_v113 = clos;                                 // #242274:22:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v113 = its home register (H139 CLOS bind)
        promise_v231 = fn_v112.call(promise_v111, fn_v113);  // #242284:79:138 [L d1 h1 c1] +#242303:163:53
      } else {
        // #242022:74:53 [-] /* never executed in any replay */
      }
      r205 = tryStack.pop();                                 // #242308:235:124 [L d1 h1 c1]
      v114 = cell[20];                                  // #242311:207:53 #242324:83:236 [L d1 h1 c1]
      v114.kWqSn0 = arr_v29;                            // #242327:204:142 [L d1 h1 c1]
      v292 = v290[v291];                                // #242337:118:7 [L d1 h1 c1]
      win_v115 = v292;                                  // #242341:11:150 [L d1 h1 c1]
      v293 = KP(242343);                                // #242344:83:233 [L d1 h1 c1]
      v232 = win_v115.uOdMb2(v293);                     // #242417:216:138 [L d1 h1 c1]
      v294 = v290[v291];                                // #242436:82:7 [L d1 h1 c1]
      v116 = v294.ygHP1;                                // #242440:97:200 [L d1 h1 c1]
      if (v116) {                                       // #242449:108:160 [L d1 h1 c1]
        v295 = v116;                                    // #242471:162:150 [L d1 h1 c1] +#242474:106:53
      } else {
        v117 = null;                                    // #242455:140:53 #242460:59:233 [-] /* never executed in any replay */
        v295 = null;                                    // #242463:252:150 [-] +#242466:220:53 /* never executed in any replay */
      }
      arr_v118 = [];                                    // #242479:143:107 [L d1 h1 c1]
      cell[39] = arr_v118;                              // #242481:185:195 [L d1 h1 c1]
      v119 = false;                                     // #242484:201:233 [L d1 h1 c1]
      cell[40] = false;                                 // #242487:139:195 [L d1 h1 c1]
      v120 = "";                                        // #242490:211:233 [L d1 h1 c1]
      cell[41] = "";                                    // #242494:237:195 [L d1 h1 c1]
      v121 = false;                                     // #242497:45:233 [L d1 h1 c1]
      cell[42] = false;                                 // #242500:95:195 [L d1 h1 c1]
      v122 = null;                                      // #242503:87:233 [L d1 h1 c1]
      cell[43] = null;                                  // #242506:97:195 [L d1 h1 c1]
      v123 = null;                                      // #242509:209:233 [L d1 h1 c1]
      cell[44] = null;                                  // #242512:115:195 [L d1 h1 c1]
      fn_v124 = v290.Date;                              // #242515:62:200 [L d1 h1 c1]
      v233 = fn_v124.now();                             // #242520:215:138 [L d1 h1 c1]
      cell[45] = v233;                                  // #242535:225:195 [L d1 h1 c1]
      v125 = null;                                      // #242538:81:233 [L d1 h1 c1]
      cell[46] = null;                                  // #242541:243:195 [L d1 h1 c1]
      if (v295) {                                       // #242544:54:160 [L d1 h1 c1]
        pc_v127 = v295.JKoe4;                           // #242563:246:200 [L d1 h1 c1]
        pc_v126 = pc_v127;                              // #242572:139:150 [L d1 h1 c1] +#242575:239:53
      } else {
        pc_v126 = v295;                                 // #242550:174:53 #242555:182:150 [-] +#242558:46:53 /* never executed in any replay */
      }
      if (pc_v126) {                                    // #242580:216:160 [L d1 h1 c1]
        pc_v234 = v295.JKoe4;                           // #242599:134:200 [L d1 h1 c1]
        fn_v235 = v290.RTCPeerConnection;               // #242608:197:200 [L d1 h1 c1]
        v129 = pc_v234 instanceof fn_v235;              // #242613:23:67 [L d1 h1 c1]
        v128 = v129;                                    // #242617:104:150 [L d1 h1 c1] +#242620:152:53
      } else {
        v128 = pc_v126;                                 // #242586:72:53 #242591:148:150 [-] +#242594:20:53 /* never executed in any replay */
      }
      cell[47] = v128;                                  // #242625:56:195 [L d1 h1 c1]
      if (v128) {                                       // #242628:167:160 [L d1 h1 c1]
        arr_v236 = v295.EzDSb2;                         // #242647:120:200 [L d1 h1 c1]
        v130 = arr_v236.length;                         // #242657:111:200 [L d1 h1 c1] +#242662:67:53
      } else {
        v130 = 0;                                       // #242634:155:53 #242639:219:72 [-] +#242642:255:53 /* never executed in any replay */
      }
      cell[48] = v130;                                  // #242667:137:195 [L d1 h1 c1]
      if (v128) {                                       // #242670:244:160 [L d1 h1 c1]
        win_v152 = v290[v291];                          // #243226:181:7 [L d1 h1 c1]
        win_v260 = win_v152;                            // #243230:14:150 [L d1 h1 c1]
        fn_v261 = win_v260[v211];                       // #243233:48:7 [L d1 h1 c1]
        v153 = KP(243236);                              // #243237:36:233 [L d1 h1 c1]
        v262 = fn_v261.call(win_v260, v153);            // #243310:165:138 [L d1 h1 c1]
        pc_v263 = v295.JKoe4;                           // #243330:40:200 [L d1 h1 c1]
        cell[38] = pc_v263;                             // #243339:46:195 [L d1 h1 c1]
        v264 = cell[45];                                // #243342:97:236 [L d1 h1 c1]
        v265 = v295.pCfD1;                              // #243345:244:200 [L d1 h1 c1]
        v154 = cell[45] - v265;                         // #243354:49:54 [L d1 h1 c1]
        cell[49] = cell[45] - v265;                     // #243358:83:195 [L d1 h1 c1]
        arr_v266 = v295.EzDSb2;                         // #243361:158:200 [L d1 h1 c1]
        fn_v267 = arr_v266.map;                         // #243371:125:200 [L d1 h1 c1]
        fn_v268 = clos;                                 // #243376:112:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v268 = its home register (H139 CLOS bind)
        arr_v155 = fn_v267.call(arr_v266, fn_v268);     // #243389:193:138 [L d1 h1 c1]
        cell[39] = arr_v155;                            // #243406:163:195 [L d1 h1 c1]
        v269 = arr_v155.length;                         // #243409:174:200 [L d1 h1 c1]
        v156 = 0;                                       // #243414:205:72 [L d1 h1 c1]
        v157 = 0 < v269;                                // #243417:98:98 [L d1 h1 c1]
        if (v157) {                                     // #243421:169:160 [L d1 h1 c1]
          v158 = cell[46];                              // #243440:122:236 [-] /* never executed in any replay */
          v271 = null;                                  // #243443:198:233 [-] /* never executed in any replay */
          v159 = cell[46] === null;                     // #243446:218:65 [-] /* never executed in any replay */
          v270 = cell[46] === null;                     // #243450:223:150 [-] +#243453:243:53 /* never executed in any replay */
        } else {
          v270 = v157;                                  // #243427:21:53 #243432:228:150 [L d1 h1 c1] +#243435:36:53
        }
        if (v270) {                                     // #243458:57:160 [L d1 h1 c1]
          v161 = 0;                                     // #243477:23:72 [-] /* never executed in any replay */
          cell[46] = 0;                                 // #243480:33:195 [-] /* never executed in any replay */
          v162 = 0;                                     // #243483:202:150 [-] +#243486:242:53 /* never executed in any replay */
        } else {
          v160 = v270;                                  // #243464:101:53 #243469:160:150 [L d1 h1 c1] +#243472:240:53
        }
        v163 = v295.tqXz9;                              // #243491:174:200 [L d1 h1 c1]
        cell[40] = v163;                                // #243500:28:195 [L d1 h1 c1]
        v164 = v295.MpLm4;                              // #243503:131:200 [L d1 h1 c1]
        if (v164) {                                     // #243512:134:160 [L d1 h1 c1]
          v166 = v164;                                  // #243535:223:150 [L d1 h1 c1] +#243538:243:53
        } else {
          v165 = "";                                    // #243518:190:53 #243523:31:233 [-] /* never executed in any replay */
          v166 = "";                                    // #243527:80:150 [-] +#243530:224:53 /* never executed in any replay */
        }
        cell[41] = v166;                                // #243543:198:195 [L d1 h1 c1]
        v167 = v295.jUBT6;                              // #243546:5:200 [L d1 h1 c1]
        if (v167) {                                     // #243555:128:160 [L d1 h1 c1]
          v114 = cell[20];                              // #243574:127:236 [-] /* never executed in any replay */
          v169 = "jhtcW6";                              // #243577:247:233 [-] /* never executed in any replay */
          v170 = v295.jUBT6;                            // #243587:178:200 [-] /* never executed in any replay */
          v114.jhtcW6 = v170;                           // #243596:4:199 [-] /* never executed in any replay */
          v171 = v170;                                  // #243600:225:150 [-] +#243603:109:53 /* never executed in any replay */
        } else {
          v168 = v167;                                  // #243561:80:53 #243566:114:150 [L d1 h1 c1] +#243569:250:53
        }
        v172 = v295.cqHb1;                              // #243608:84:200 [L d1 h1 c1]
        if (v172) {                                     // #243617:83:160 [L d1 h1 c1]
          v174 = "wAPS7";                               // #243636:17:233 [-] /* never executed in any replay */
          v175 = v295.cqHb1;                            // #243645:228:200 [-] /* never executed in any replay */
          v114.wAPS7 = v175;                            // #243654:238:199 [-] /* never executed in any replay */
          v176 = v175;                                  // #243658:163:150 [-] +#243661:167:53 /* never executed in any replay */
        } else {
          v173 = v172;                                  // #243623:151:53 #243628:122:150 [L d1 h1 c1] +#243631:226:53
        }
        v177 = v295.XZhp4;                              // #243666:196:200 [L d1 h1 c1]
        if (v177) {                                     // #243675:3:160 [L d1 h1 c1]
          v179 = "SSyl8";                               // #243694:211:233 [-] /* never executed in any replay */
          v180 = v295.XZhp4;                            // #243703:30:200 [-] /* never executed in any replay */
          v114.SSyl8 = v180;                            // #243712:192:199 [-] /* never executed in any replay */
          v181 = v180;                                  // #243716:173:150 [-] +#243719:9:53 /* never executed in any replay */
        } else {
          v178 = v177;                                  // #243681:135:53 #243686:208:150 [L d1 h1 c1] +#243689:96:53
        }
        win_v182 = v290[v291];                          // #243724:78:7 [L d1 h1 c1]
        v183 = "ygHP1";                                 // #243728:74:233 [L d1 h1 c1]
        v184 = null;                                    // #243737:86:233 [L d1 h1 c1]
        win_v182.ygHP1 = null;                          // #243740:183:210 [L d1 h1 c1]
      } else {
        v131 = v290[v291];                              // #242676:244:53 #242681:27:7 [-] /* never executed in any replay */
        v132 = v131;                                    // #242685:92:150 [-] /* never executed in any replay */
        v133 = v132[v211];                              // #242688:198:7 [-] /* never executed in any replay */
        v134 = KP(242691);                              // #242692:226:233 [-] /* never executed in any replay */
        v237 = v133.call(v132, v134);                   // #242765:235:138 [-] /* never executed in any replay */
        try {
          TP(tryStack, 243026, 231, callDepths);                   // #242785:104:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
          v238 = v290.RTCPeerConnection;                // #242791:159:200 [-] /* never executed in any replay */
          v135 = {};                                    // #242796:245:159 [-] /* never executed in any replay */
          v136 = "iceCandidatePoolSize";                // #242798:21:233 [-] /* never executed in any replay */
          v137 = 1; v135.iceCandidatePoolSize = 1;      // #242822:187:103 [-] /* never executed in any replay */
          v138 = "iceServers";                          // #242827:67:233 [-] /* never executed in any replay */
          v139 = [];                                    // #242841:165:107 [-] /* never executed in any replay */
          v239 = {};                                    // #242843:99:159 [-] /* never executed in any replay */
          v240 = "urls";                                // #242845:75:233 [-] /* never executed in any replay */
          v241 = "stun:stun.cloudflare.com:3478";       // #242853:147:233 [-] /* never executed in any replay */
          v239.urls = "stun:stun.cloudflare.com:3478";  // #242886:161:199 [-] /* never executed in any replay */
          v242 = v239;                                  // #242890:74:150 [-] /* never executed in any replay */
          v243 = 0; v139[0] = v242;                     // #242893:3:26 [-] /* never executed in any replay */
          v244 = {};                                    // #242898:201:159 [-] /* never executed in any replay */
          v245 = "urls";                                // #242900:153:233 [-] /* never executed in any replay */
          v246 = "stun:stun.l.google.com:19302";        // #242908:41:233 [-] /* never executed in any replay */
          v244.urls = "stun:stun.l.google.com:19302";   // #242940:95:199 [-] /* never executed in any replay */
          v247 = v244;                                  // #242944:144:150 [-] /* never executed in any replay */
          v248 = 1; v139[1] = v247;                     // #242947:177:26 [-] /* never executed in any replay */
          v249 = {};                                    // #242952:63:159 [-] /* never executed in any replay */
          v250 = "urls";                                // #242954:183:233 [-] /* never executed in any replay */
          v251 = "stun:stun1.l.google.com:19302";       // #242962:79:233 [-] /* never executed in any replay */
          v249.urls = "stun:stun1.l.google.com:19302";  // #242995:109:199 [-] /* never executed in any replay */
          v252 = v249;                                  // #242999:230:150 [-] /* never executed in any replay */
          v253 = 2; v139[2] = v252;                     // #243002:47:26 [-] /* never executed in any replay */
          v135.iceServers = v139;                       // #243007:205:199 [-] /* never executed in any replay */
          v254 = new v238(v135);                        // #243011:69:1 [-] /* never executed in any replay */
          cell[38] = v254;                              // #243016:23:195 [-] /* never executed in any replay */
          v140 = tryStack.pop();                             // #243019:54:124 [-] +#243022:174:53 /* never executed in any replay */
          try {
            TP(tryStack, 243177, 51, callDepths);                  // #243118:104:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
            v258 = cell[38];                            // #243124:51:236 [-] /* never executed in any replay */
            v144 = cell[38];                            // #243127:20:150 [-] /* never executed in any replay */
            v145 = "";                                  // #243130:120:233 [-] /* never executed in any replay */
            v146 = (v144).createDataChannel("");        // #243134:169:138 [-] /* never executed in any replay */
            v147 = true;                                // #243164:249:233 [-] /* never executed in any replay */
            cell[40] = true;                            // #243167:251:195 [-] /* never executed in any replay */
            v148 = tryStack.pop();                           // #243170:138:124 [-] +#243173:178:53 /* never executed in any replay */
          } catch (caught) {
            v259 = caught;                                // #243178:20:150 [-] /* never executed in any replay */
            v149 = cell[20];                            // #243181:47:236 [-] /* never executed in any replay */
            v150 = KP(m243183k47);                      // #243184:231:233 [-] /* never executed in any replay */
            v151 = (r70)[KP(m243193k231)](v259);        // #243194:28:138 [-] /* never executed in any replay */
            v149[v150] = v151;                          // #243213:229:210 [-] /* never executed in any replay */
          }
        } catch (caught) {
          v141 = caught;                                  // #243027:248:150 [-] /* never executed in any replay */
          v142 = r70[r221];                             // #243030:242:7 [-] /* never executed in any replay */
          v255 = v142;                                  // #243034:151:150 [-] /* never executed in any replay */
          v143 = KP(m243036k151);                       // #243037:175:233 [-] /* never executed in any replay */
          v256 = (v255)[KP(m243089k175)](v143);         // #243090:196:138 [-] /* never executed in any replay */
          r204 = cell[16]();                            // #243109:200:201 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
          v257 = undefined;                             // #243113:92:233 [-] /* never executed in any replay */
          return v257;                                  // #243116:124:245 [-] /* never executed in any replay */
        }
      }
      v185 = cell[20];                                  // #243748:198:236 [L d1 h1 c1]
      v186 = "eSxc2";                                   // #243751:226:233 [L d1 h1 c1]
      v187 = "eSxc2";                                   // #243760:142:233 [L d1 h1 c1]
      v185.eSxc2 = "eSxc2";                             // #243769:112:199 [L d1 h1 c1]
      fn_v188 = clos;                                   // #243773:87:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v188 = its home register (H139 CLOS bind)
      cell[52] = fn_v188;                               // #243787:97:195 [L d1 h1 c1]
      fn_v189 = clos;                                   // #243790:196:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v189 = its home register (H139 CLOS bind)
      cell[53] = fn_v189;                               // #243802:90:195 [L d1 h1 c1]
      v190 = 500;                                       // #243805:38:233 [L d1 h1 c1]
      v191 = (r70).setTimeout(fn_v188, 500);            // #243810:31:138 [L d1 h1 c1]
      cell[43] = v191;                                  // #243834:9:195 [L d1 h1 c1]
      pc_v272 = cell[38];                               // #243837:144:236 [L d1 h1 c1]
      pc_v192 = cell[38];                               // #243840:61:150 [L d1 h1 c1]
      fn_v273 = cell[38].addEventListener;              // #243843:96:200 [L d1 h1 c1]
      v193 = "icegatheringstatechange";                 // #243848:148:233 [L d1 h1 c1]
      fn_v194 = clos;                                   // #243875:235:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v194 = its home register (H139 CLOS bind)
      v274 = fn_v273.call(pc_v192, v193, fn_v194);      // #243887:16:138 [L d1 h1 c1]
      pc_v275 = cell[38];                               // #243918:59:236 [L d1 h1 c1]
      pc_v195 = cell[38];                               // #243921:252:150 [L d1 h1 c1]
      fn_v276 = cell[38].addEventListener;              // #243924:227:200 [L d1 h1 c1]
      v196 = "icecandidate";                            // #243929:203:233 [L d1 h1 c1]
      fn_v197 = clos;                                   // #243945:6:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v197 = its home register (H139 CLOS bind)
      v277 = fn_v276.call(pc_v195, v196, fn_v197);      // #243959:127:138 [L d1 h1 c1]
      v198 = cell[47];                                  // #243990:174:236 [L d1 h1 c1]
      if (v198) {                                       // #243993:197:160 [L d1 h1 c1]
        v284 = "complete";                              // #244190:86:233 [L d1 h1 c1]
        pc_v285 = cell[38];                             // #244195:233:236 [L d1 h1 c1]
        v286 = cell[38].iceGatheringState;              // #244198:92:200 [L d1 h1 c1]
        v205 = "complete" === cell[38].iceGatheringState;  // #244203:152:65 [L d1 h1 c1]
        if (v205) {                                     // #244207:135:160 [L d1 h1 c1]
          v299 = v205;                                  // #244235:35:150 [L d1 h1 c1] +#244238:39:53
        } else {
          v206 = r205.jUwk9;                            // #244213:251:53 #244218:162:200 [-] /* never executed in any replay */
          v299 = v206;                                  // #244227:135:150 [-] +#244230:251:53 /* never executed in any replay */
        }
        if (v299) {                                     // #244243:3:160 [L d1 h1 c1]
          r205 = 0;                                     // #244308:101:72 [L d1 h1 c1]
          r204 = cell[53](r205);                        // #244311:126:22 [L d1 h1 c1] +#244315:214:53  VM call: pushes a frame, the callee body returns into r204
        } else {
          v207 = cell[39];                              // #244249:135:53 #244254:240:236 [-] /* never executed in any replay */
          v208 = cell[39].length;                       // #244257:7:200 [-] /* never executed in any replay */
          v287 = 0;                                     // #244262:2:72 [-] /* never executed in any replay */
          v300 = 0 < cell[39].length;                   // #244265:3:98 [-] /* never executed in any replay */
          if (v300) {                                   // #244269:6:160 [-] /* never executed in any replay */
            v209 = 150;                                 // #244288:167:72 [-] /* never executed in any replay */
            v210 = cell[53](v209);                      // #244291:56:22 [-]  VM call: pushes a frame, the callee body returns into r205; then v210 = r205 (H142 CALL bind) /* never executed in any replay */
            v289 = v210;                                // #244295:69:150 [-] +#244298:65:53 /* never executed in any replay */
          } else {
            v288 = v300;                                // #244275:62:53 #244280:19:150 [-] +#244283:87:53 /* never executed in any replay */
          }
        }
      } else {
        v278 = cell[38];                                // #243999:193:53 #244004:42:236 [-] /* never executed in any replay */
        v199 = cell[38];                                // #244007:239:150 [-] /* never executed in any replay */
        v200 = cell[38].createOffer;                    // #244010:202:200 [-] /* never executed in any replay */
        v296 = {};                                      // #244025:52:159 [-] /* never executed in any replay */
        v201 = "offerToReceiveAudio";                   // #244027:24:233 [-] /* never executed in any replay */
        v279 = true;                                    // #244050:108:233 [-] /* never executed in any replay */
        v296.offerToReceiveAudio = true;                // #244053:86:199 [-] /* never executed in any replay */
        v202 = "offerToReceiveVideo";                   // #244057:50:233 [-] /* never executed in any replay */
        v280 = true;                                    // #244080:158:233 [-] /* never executed in any replay */
        v296.offerToReceiveVideo = true;                // #244083:64:199 [-] /* never executed in any replay */
        v203 = v200.call(v199, v296);                   // #244087:81:138 [-] /* never executed in any replay */
        v204 = v203.then;                               // #244112:36:200 [-] /* never executed in any replay */
        v297 = clos;                                    // #244117:59:216 [-]  closure creation (operands from the byte stream); then v297 = its home register (H139 CLOS bind) /* never executed in any replay */
        v281 = v204.call(v203, v297);                   // #244131:32:138 [-] /* never executed in any replay */
        v282 = v281.catch;                              // #244149:119:200 [-] /* never executed in any replay */
        v298 = clos;                                    // #244154:2:216 [-]  closure creation (operands from the byte stream); then v298 = its home register (H139 CLOS bind) /* never executed in any replay */
        v283 = v282.call(v281, v298);                   // #244166:139:138 [-] +#244185:239:53 /* never executed in any replay */
      }
      v301 = undefined;                                 // #244320:30:233 [L d1 h1 c1]
      return v301;                                      // #244323:182:245 [L d1 h1 c1]
    } catch (caught) {
      outside("L242318_16");                            // #242316:16:150 [-]  L242318_16 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    v17 = v290[v291];                                   // #239180:144:53 #239185:215:7 [-] /* never executed in any replay */
    v18 = v17;                                          // #239189:40:150 [-] /* never executed in any replay */
    v19 = KP(239191);                                   // #239192:60:233 [-] /* never executed in any replay */
    v218 = v18.uOdMb2(v19);                             // #239245:93:138 [-] /* never executed in any replay */
    v219 = cell[20];                                    // #239264:148:236 [-] /* never executed in any replay */
    v20 = "eSxc2";                                      // #239267:248:233 [-] /* never executed in any replay */
    v220 = "paMIu0";                                    // #239276:204:233 [-] /* never executed in any replay */
    v219.eSxc2 = "paMIu0";                              // #239286:54:199 [-] /* never executed in any replay */
    r205 = cell[16]();                                  // #239290:242:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    v221 = undefined;                                   // #239294:94:233 [-] /* never executed in any replay */
    return v221;                                        // #239297:246:245 [-] /* never executed in any replay */
  }
}