function probe_29_webrtc(win_v265 /* r70 */, v266 /* r209 */, v267 /* r211 */, v268 /* r213 */, v269 /* r214 */, v270 /* r217 */, v271 /* r220 */, v272 /* r221 */, v273 /* r223 */) { // entry L2498_17; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop())
  // H133 fn locals: 295 register webs used only inside this fn (no live-in, cross-call or table-made def; 31 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 9 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 13 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r199 */, v2 /* r198 */, v3 /* r250 */, v4 /* r247 */, v5 /* r246 */, v6 /* r195 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */, win_v10 /* r204 */;
  let v11 /* r205 */, v12 /* r202 */, fn_v13 /* r204 */, win_v14 /* r205 */, win_v15 /* r199 */, fn_v16 /* r198 */, v17 /* r205 */, v18 /* r195 */, v19 /* r202 */, v20 /* r195 */;
  let v21 /* r205 */, v22 /* r195 */, v23 /* r202 */, trustedScript_v24 /* r205 */, v25 /* r202 */, win_v26 /* r205 */, v27 /* r204 */, v28 /* r199 */, fn_v29 /* r202 */, win_v30 /* r204 */;
  let v31 /* r205 */, v32 /* r204 */, v33 /* r202 */, v34 /* r199 */, v35 /* r198 */, v36 /* r199 */, fn_v37 /* r198 */, navigator_v38 /* r205 */, gPU_v39 /* r196 */, v40 /* r204 */;
  let win_v41 /* r205 */, v42 /* r202 */, v43 /* r205 */, v44 /* r205 */, win_v45 /* r204 */, v46 /* r199 */, v47 /* r204 */, v48 /* r202 */, v49 /* r204 */, win_v50 /* r205 */;
  let v51 /* r204 */, navigator_v52 /* r202 */, gPU_v53 /* r199 */, promise_v54 /* r202 */, win_v55 /* r205 */, promise_v56 /* r204 */, fn_v57 /* r202 */, fn_v58 /* r205 */, promise_v59 /* r199 */, arr_v60 /* r205 */;
  let win_v61 /* r205 */, fn_v62 /* r202 */, v63 /* r204 */, v64 /* r202 */, v65 /* r205 */, v66 /* r205 */, win_v67 /* r204 */, v68 /* r199 */, v69 /* r204 */, v70 /* r202 */;
  let v71 /* r204 */, win_v72 /* r204 */, fn_v73 /* r205 */, v74 /* r204 */, v75 /* r202 */, v76 /* r199 */, v77 /* r202 */, arr_v78 /* r199 */, v79 /* r198 */, v80 /* r196 */;
  let v81 /* r195 */, v82 /* r196 */, v83 /* r198 */, v84 /* r198 */, v85 /* r196 */, v86 /* r195 */, v87 /* r196 */, v88 /* r198 */, v89 /* r198 */, v90 /* r196 */;
  let v91 /* r195 */, v92 /* r196 */, v93 /* r198 */, pc_v94 /* r205 */, fn_v95 /* r204 */, v96 /* r199 */, win_v97 /* r204 */, v98 /* r202 */, v99 /* r198 */, arr_v100 /* r196 */;
  let v101 /* r199 */, v102 /* r198 */, v103 /* r199 */, v104 /* r198 */, v105 /* r199 */, v106 /* r198 */, v107 /* r199 */, v108 /* r198 */, v109 /* r199 */, v110 /* r198 */;
  let v111 /* r199 */, v112 /* r198 */, v113 /* r204 */, rTCDataChannel_v114 /* r202 */, v115 /* r205 */, v116 /* r204 */, v117 /* r202 */, arr_v118 /* r204 */, pc_v119 /* r205 */, pc_v120 /* r199 */;
  let fn_v121 /* r198 */, v122 /* r204 */, fn_v123 /* r202 */, v124 /* r196 */, pc_v125 /* r204 */, fn_v126 /* r199 */, v127 /* r205 */, v128 /* r202 */, v129 /* r198 */, v130 /* r202 */;
  let v131 /* r198 */, promise_v132 /* r202 */, fn_v133 /* r199 */, fn_v134 /* r205 */, promise_v135 /* r204 */, fn_v136 /* r202 */, fn_v137 /* r205 */, promise_v138 /* r199 */, fn_v139 /* r202 */, fn_v140 /* r204 */;
  let fn_v141 /* r205 */, v142 /* r204 */, v143 /* r199 */, arr_v144 /* r205 */, fn_v145 /* r205 */, fn_v146 /* r204 */, win_v147 /* r202 */, v148 /* r205 */, v149 /* r199 */, v150 /* r202 */;
  let fn_v151 /* r202 */, v152 /* r205 */, elIFrame_v153 /* r205 */, win_v154 /* r204 */, fn_v155 /* r202 */, v156 /* r204 */, v157 /* r204 */, win_v158 /* r204 */, v159 /* r205 */, v160 /* r202 */;
  let v161 /* r202 */, v162 /* r205 */, v163 /* r204 */, v164 /* r202 */, v165 /* r205 */, fn_v166 /* r205 */, v167 /* r204 */, win_v168 /* r204 */, v169 /* r205 */, v170 /* r202 */;
  let v171 /* r204 */, v172 /* r205 */, v173 /* r202 */, fn_v174 /* r199 */, fn_v175 /* r205 */, fn_v176 /* r199 */, fn_v177 /* r198 */, v178 /* r205 */, v179 /* r202 */, v180 /* r196 */;
  let v181 /* r196 */, win_v182 /* r205 */, win_v183 /* r204 */, v184 /* r205 */, v185 /* r202 */, win_v186 /* r204 */, v187 /* r205 */, v188 /* r204 */, win_v189 /* r205 */, v190 /* r204 */;
  let arr_v191 /* r202 */, win_v192 /* r204 */, v193 /* r205 */, v194 /* r204 */, win_v195 /* r205 */, v196 /* r204 */, v197 /* r202 */, win_v198 /* r205 */, v199 /* r204 */, arr_v200 /* r202 */;
  let doc_v201 /* r198 */, fn_v202 /* r196 */, v203 /* r198 */, doc_v204 /* r198 */, fn_v205 /* r196 */, v206 /* r198 */, element_v207 /* r198 */, fn_v208 /* r196 */, v209 /* r198 */, element_v210 /* r198 */;
  let fn_v211 /* r196 */, v212 /* r198 */, v213 /* r205 */, v214 /* r204 */, fn_v215 /* r202 */, v216 /* r198 */, doc_v217 /* r205 */, fn_v218 /* r204 */, doc_v219 /* r196 */, fn_v220 /* r202 */;
  let fn_v221 /* r204 */, doc_v222 /* r205 */, fn_v223 /* r204 */, doc_v224 /* r196 */, fn_v225 /* r202 */, fn_v226 /* r204 */, element_v227 /* r205 */, fn_v228 /* r204 */, element_v229 /* r196 */, fn_v230 /* r202 */;
  let fn_v231 /* r204 */, element_v232 /* r205 */, fn_v233 /* r204 */, fn_v234 /* r202 */, fn_v235 /* r204 */, win_v236 /* r204 */, v237 /* r205 */, v238 /* r202 */, v239 /* r205 */, arr_v240 /* r204 */;
  let v241 /* r202 */, v242 /* r205 */, fn_v243 /* r204 */, fn_v244 /* r205 */, v245 /* r205 */, v246 /* r205 */, v247 /* r204 */, v248 /* r205 */, fn_v249 /* r204 */, v250 /* r205 */;
  let v251 /* r205 */, v252 /* r204 */, v253 /* r205 */, v254 /* r204 */, v255 /* r198 */, v256 /* r202 */, win_v257 /* r205 */, win_v258 /* r204 */, v259 /* r205 */, v260 /* r202 */;
  let fn_v261 /* r204 */, v262 /* r205 */, arr_v263 /* r205 */, v264 /* r205 */, v274 /* r192 */, v275 /* r254 */, fn_v276 /* r195 */, element_v277 /* r196 */, v278 /* r198 */, v279 /* r250 */;
  let arr_v280 /* r247 */, v281 /* r246 */, v282 /* r244 */, v283 /* r245 */, v284 /* r252 */, v285 /* r253 */, v286 /* r193 */, v287 /* r199 */, v288 /* r195 */, arr_v289 /* r192 */;
  let v290 /* r254 */, fn_v291 /* r198 */, v292 /* r196 */, win_v293 /* r204 */, v294 /* r202 */, v295 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v10 3, win_v14 3, win_v15 3, win_v26 3, win_v30 3, win_v41 3, win_v45 3, win_v50 3
  //   Window: win_v55 3, win_v61 3, win_v67 3, win_v72 3, win_v97 3, win_v147 3, win_v154 3, win_v158 3
  //   Window: win_v168 3, win_v182 3, win_v183 3, win_v186 3, win_v189 3, win_v192 3, win_v195 3, win_v198 3
  //   Window: win_v236 3, win_v257 3, win_v258 3, win_v265 3, win_v293 3
  //   Function: fn_v13 3, fn_v16 3, fn_v29 3, fn_v37 3, fn_v57 3, fn_v58 3, fn_v62 3, fn_v73 3
  //   Function: fn_v95 3, fn_v121 3, fn_v123 3, fn_v126 3, fn_v133 3, fn_v134 3, fn_v136 3, fn_v137 3
  //   Function: fn_v139 3, fn_v140 3, fn_v141 3, fn_v145 3, fn_v146 3, fn_v151 3, fn_v155 3, fn_v166 3
  //   Function: fn_v174 3, fn_v175 3, fn_v176 3, fn_v177 3, fn_v202 3, fn_v205 3, fn_v208 3, fn_v211 3
  //   Function: fn_v215 3, fn_v218 3, fn_v220 3, fn_v221 3, fn_v223 3, fn_v225 3, fn_v226 3, fn_v228 3
  //   Function: fn_v230 3, fn_v231 3, fn_v233 3, fn_v234 3, fn_v235 3, fn_v243 3, fn_v244 3, fn_v249 3
  //   Function: fn_v261 3, fn_v276 3, fn_v291 3
  //   TrustedScript: trustedScript_v24 3
  //   Navigator: navigator_v38 3, navigator_v52 3
  //   GPU: gPU_v39 3, gPU_v53 3
  //   Promise: promise_v54 3, promise_v56 3, promise_v59 3, promise_v132 3, promise_v135 3, promise_v138 3
  //   Array: arr_v60 3, arr_v78 3, arr_v100 3, arr_v118 3, arr_v144 3, arr_v191 3, arr_v200 3, arr_v240 3
  //   Array: arr_v263 3, arr_v280 3, arr_v289 3
  //   RTCPeerConnection: pc_v94 3, pc_v119 3, pc_v120 3, pc_v125 3
  //   RTCDataChannel: rTCDataChannel_v114 3
  //   HTMLIFrameElement: elIFrame_v153 3
  //   Document: doc_v201 3, doc_v204 3, doc_v217 3, doc_v219 3, doc_v222 3, doc_v224 3
  //   Element: element_v207 3, element_v210 3, element_v227 3, element_v229 3, element_v232 3, element_v277 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 12 dead register writes dropped, 5 constants propagated (5 uses), 3 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(1, 5, 6, 8, 9, 11, 14, 23);                        // #2499:221:53 #2509:119:233 #2512:209:211 [L d1 h1 c1]
  v1 = undefined;                                       // #2522:129:233 #2525:113:233 [L d1 h1 c1]
  v2 = undefined;                                       // #2528:161:233 #2531:17:233 #2534:193:233 #2537:177:233 #2540:225:233 #2543:81:233 #2546:1:233 #2549:241:233 #2552:33:233 #2555:145:233 [L d1 h1 c1]
  v3 = undefined;                                       // #2558:65:233 [L d1 h1 c1]
  v4 = undefined;                                       // #2561:49:233 #2564:97:233 [L d1 h1 c1]
  v5 = undefined;                                       // #2567:209:233 [L d1 h1 c1]
  v6 = undefined;                                       // #2570:129:233 [L d1 h1 c1]
  v274 = undefined;                                     // #2573:113:233 [L d1 h1 c1]
  v275 = undefined;                                     // #2576:161:233 [L d1 h1 c1]
  v7 = undefined;                                       // #2579:17:233 [L d1 h1 c1]
  v8 = undefined;                                       // #2582:193:233 [L d1 h1 c1]
  v9 = undefined;                                       // #2585:177:233 [L d1 h1 c1]
  clos;                                                 // #2588:212:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #2608:43:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  cell[23] = r205;                                      // #2623:229:195 [L d1 h1 c1]
  win_v10 = win_v265[v273];                             // #2626:107:7 [L d1 h1 c1]
  v11 = KP(s1p2629);                                    // #2630:51:233 [L d1 h1 c1]
  v12 = MC(win_v10, v270, v11);                         // #2683:128:114 [L d1 h1 c1]
  fn_v13 = win_v265.eval;                               // #2688:87:200 [L d1 h1 c1]
  win_v14 = win_v265[v273];                             // #2693:149:7 [L d1 h1 c1]
  win_v15 = win_v14;                                    // #2697:110:150 [L d1 h1 c1]
  fn_v16 = win_v14.yCpNJ2;                              // #2700:13:200 [L d1 h1 c1]
  v17 = "function";                                     // #2705:205:233 [L d1 h1 c1]
  v18 = " ";                                            // #2717:141:233 [L d1 h1 c1]
  v19 = ("function") + (" ");                           // #2722:174:222 [L d1 h1 c1]
  v20 = "ZahLT8";                                       // #2726:42:233 [L d1 h1 c1]
  v21 = ("function" + " ") + "ZahLT8";                  // #2736:23:222 [L d1 h1 c1]
  v22 = KP(s1p2739);                                    // #2740:47:233 [L d1 h1 c1]
  v23 = v21 + v22;                                      // #2866:72:222 [L d1 h1 c1]
  trustedScript_v24 = fn_v16.call(win_v15, v23);        // #2870:57:138 [L d1 h1 c1]
  v25 = fn_v13.call(win_v265, trustedScript_v24);       // #2890:166:138 [L d1 h1 c1]
  win_v26 = win_v265[v273];                             // #2908:104:7 [L d1 h1 c1]
  v27 = "Tlvt6";                                        // #2912:124:233 [L d1 h1 c1]
  v28 = "YEtOsYCDMUBDtswd";                             // #2921:64:233 [L d1 h1 c1]
  fn_v29 = win_v265.ZahLT8("YEtOsYCDMUBDtswd");         // #2941:81:138 [L d1 h1 c1]
  win_v26.Tlvt6 = fn_v29;                               // #2960:231:199 [L d1 h1 c1]
  win_v30 = win_v265[v273];                             // #2964:229:7 [L d1 h1 c1]
  v31 = win_v30[KP(s1p2967)];                           // #2968:104:200 [L d1 h1 c1]
  v32 = "GesyF4";                                       // #2973:124:233 [L d1 h1 c1]
  v33 = {};                                             // #2983:158:159 [L d1 h1 c1]
  v34 = "AZHpc0";                                       // #2985:90:233 [L d1 h1 c1]
  v35 = "wdSS1";                                        // #2995:38:233 [L d1 h1 c1]
  v33.AZHpc0 = "wdSS1";                                 // #3004:168:199 [L d1 h1 c1]
  v36 = "toJSON";                                       // #3008:188:233 [L d1 h1 c1]
  fn_v37 = clos;                                        // #3018:115:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v37 = its home register (H139 CLOS bind)
  v33[v36] = fn_v37;                                    // #3028:1:199 [L d1 h1 c1]
  v31[v32] = v33;                                       // #3032:215:199 [L d1 h1 c1]
  TP(tryStack, 3279, 176, callDepths);                             // #3036:164:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
  navigator_v38 = win_v265.navigator;                   // #3042:235:200 [L d1 h1 c1]
  gPU_v39 = navigator_v38.gpu;                          // #3047:214:200 [L d1 h1 c1]
  if (gPU_v39) {                                        // #3054:77:160 [L d1 h1 c1]
    win_v41 = win_v265[v273];                           // #3073:7:7 [L d1 h1 c1]
    v42 = win_v41.KryNx3;                               // #3077:130:200 [L d1 h1 c1]
    v43 = !v42;                                         // #3082:35:130 [L d1 h1 c1]
    v40 = v43;                                          // #3085:68:150 [L d1 h1 c1] +#3088:4:53
  } else {
    v40 = gPU_v39;                                      // #3060:41:53 #3065:177:150 [-] +#3068:253:53 /* never executed in any replay */
  }
  if (v40) {                                            // #3093:7:160 [L d1 h1 c1]
    win_v45 = win_v265[v273];                           // #3112:227:7 [L d1 h1 c1]
    v46 = win_v45.sSkll6;                               // #3116:238:200 [L d1 h1 c1]
    v47 = "ATqsS6";                                     // #3121:106:233 [L d1 h1 c1]
    v48 = v46.tNEww4("ATqsS6");                         // #3131:83:138 [L d1 h1 c1]
    v49 = !v48;                                         // #3150:240:130 [L d1 h1 c1]
    v44 = v49;                                          // #3153:29:150 [L d1 h1 c1] +#3156:185:53
  } else {
    v44 = v40;                                          // #3099:123:53 #3104:92:150 [-] +#3107:188:53 /* never executed in any replay */
  }
  if (v44) {                                            // #3161:253:160 [L d1 h1 c1]
    win_v50 = win_v265[v273];                           // #3172:121:7 [L d1 h1 c1]
    v51 = "KryNx3";                                     // #3176:137:233 [L d1 h1 c1]
    navigator_v52 = win_v265.navigator;                 // #3181:124:200 [L d1 h1 c1]
    gPU_v53 = navigator_v52.gpu;                        // #3186:99:200 [L d1 h1 c1]
    promise_v54 = gPU_v53.requestAdapter();             // #3193:168:138 [L d1 h1 c1]
    win_v50.KryNx3 = promise_v54;                       // #3219:162:199 [L d1 h1 c1]
    win_v55 = win_v265[v273];                           // #3223:116:7 [L d1 h1 c1]
    promise_v56 = win_v55.KryNx3;                       // #3227:123:200 [L d1 h1 c1]
    fn_v57 = promise_v56.catch;                         // #3232:38:200 [L d1 h1 c1]
    fn_v58 = clos;                                      // #3237:181:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v58 = its home register (H139 CLOS bind)
    promise_v59 = fn_v57.call(promise_v56, fn_v58);     // #3248:50:138 [L d1 h1 c1] +#3267:186:53
  } else {
    // #3167:25:53 [-] /* never executed in any replay */
  }
  arr_v60 = tryStack.pop();                                  // #3272:36:124 [L d1 h1 c1]
  TP(tryStack, 4189, 204, callDepths);                             // #3275:100:53 #3297:25:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
  win_v61 = win_v265[v273];                             // #3303:207:7 [L d1 h1 c1]
  fn_v62 = win_v61.RTCPeerConnection;                   // #3307:42:200 [L d1 h1 c1]
  if (fn_v62) {                                         // #3312:81:160 [L d1 h1 c1]
    v64 = win_v265[v273][v271];                         // #3331:11:20 [L d1 h1 c1]
    v65 = !v64;                                         // #3336:200:130 [L d1 h1 c1]
    v63 = v65;                                          // #3339:149:150 [L d1 h1 c1] +#3342:81:53
  } else {
    v63 = fn_v62;                                       // #3318:29:53 #3323:245:150 [-] +#3326:49:53 /* never executed in any replay */
  }
  if (v63) {                                            // #3347:220:160 [L d1 h1 c1]
    win_v67 = win_v265[v273];                           // #3366:14:7 [L d1 h1 c1]
    v68 = win_v67.sSkll6;                               // #3370:45:200 [L d1 h1 c1]
    v69 = "vPWS4";                                      // #3375:109:233 [L d1 h1 c1]
    v70 = v68.tNEww4("vPWS4");                          // #3384:10:138 [L d1 h1 c1]
    v71 = !v70;                                         // #3403:139:130 [L d1 h1 c1]
    v66 = v71;                                          // #3406:12:150 [L d1 h1 c1] +#3409:172:53
  } else {
    v66 = v63;                                          // #3353:60:53 #3358:236:150 [-] +#3361:12:53 /* never executed in any replay */
  }
  if (v66) {                                            // #3414:245:160 [L d1 h1 c1]
    win_v72 = win_v265[v273];                           // #3425:213:7 [L d1 h1 c1]
    fn_v73 = win_v72.RTCPeerConnection;                 // #3429:152:200 [L d1 h1 c1]
    v74 = {};                                           // #3434:74:159 [L d1 h1 c1]
    v75 = "iceCandidatePoolSize";                       // #3436:86:233 [L d1 h1 c1]
    v76 = 1; v74.iceCandidatePoolSize = 1;              // #3460:56:103 [L d1 h1 c1]
    v77 = "iceServers";                                 // #3465:12:233 [L d1 h1 c1]
    arr_v78 = [];                                       // #3479:138:107 [L d1 h1 c1]
    v79 = {};                                           // #3481:244:159 [L d1 h1 c1]
    v80 = "urls";                                       // #3483:216:233 [L d1 h1 c1]
    v81 = "stun:stun.cloudflare.com:3478";              // #3488:44:233 [L d1 h1 c1]
    v79.urls = "stun:stun.cloudflare.com:3478";         // #3521:22:199 [L d1 h1 c1]
    v82 = v79;                                          // #3525:43:150 [L d1 h1 c1]
    v83 = 0; arr_v78[0] = v82;                          // #3528:160:26 [L d1 h1 c1]
    v84 = {};                                           // #3533:50:159 [L d1 h1 c1]
    v85 = "urls";                                       // #3535:158:233 [L d1 h1 c1]
    v86 = "stun:stun.l.google.com:19302";               // #3540:90:233 [L d1 h1 c1]
    v84.urls = "stun:stun.l.google.com:19302";          // #3572:12:199 [L d1 h1 c1]
    v87 = v84;                                          // #3576:201:150 [L d1 h1 c1]
    v88 = 1; arr_v78[1] = v87;                          // #3579:70:26 [L d1 h1 c1]
    v89 = {};                                           // #3584:192:159 [L d1 h1 c1]
    v90 = "urls";                                       // #3586:116:233 [L d1 h1 c1]
    v91 = "stun:stun1.l.google.com:19302";              // #3591:88:233 [L d1 h1 c1]
    v89.urls = "stun:stun1.l.google.com:19302";         // #3624:146:199 [L d1 h1 c1]
    v92 = v89;                                          // #3628:183:150 [L d1 h1 c1]
    v93 = 2; arr_v78[2] = v92;                          // #3631:252:26 [L d1 h1 c1]
    v74.iceServers = arr_v78;                           // #3636:166:199 [L d1 h1 c1]
    pc_v94 = new fn_v73(v74);                           // #3640:250:1 [L d1 h1 c1]
    cell[1] = pc_v94;                                   // #3645:56:195 [L d1 h1 c1]
    fn_v95 = win_v265.Date;                             // #3648:47:200 [L d1 h1 c1]
    v96 = fn_v95.now();                                 // #3653:68:138 [L d1 h1 c1]
    win_v97 = win_v265[v273];                           // #3668:14:7 [L d1 h1 c1]
    v98 = {};                                           // #3672:104:159 [L d1 h1 c1]
    v98.JKoe4 = pc_v94;                                 // #3674:205:142 [L d1 h1 c1]
    v99 = "EzDSb2";                                     // #3679:141:233 [L d1 h1 c1]
    arr_v100 = [];                                      // #3684:71:107 [L d1 h1 c1]
    v98.EzDSb2 = arr_v100;                              // #3686:133:199 [L d1 h1 c1]
    v98.pCfD1 = v96;                                    // #3690:182:142 [L d1 h1 c1]
    v101 = "MpLm4";                                     // #3695:18:233 [L d1 h1 c1]
    v102 = null;                                        // #3700:254:233 [L d1 h1 c1]
    v98.MpLm4 = null;                                   // #3703:32:199 [L d1 h1 c1]
    v103 = "tqXz9";                                     // #3707:84:233 [L d1 h1 c1]
    v104 = false;                                       // #3712:184:233 [L d1 h1 c1]
    v98.tqXz9 = false;                                  // #3715:114:199 [L d1 h1 c1]
    v105 = "jUwk9";                                     // #3719:222:233 [L d1 h1 c1]
    v106 = false;                                       // #3724:154:233 [L d1 h1 c1]
    v98.jUwk9 = false;                                  // #3727:76:199 [L d1 h1 c1]
    v107 = "jUBT6";                                     // #3731:208:233 [L d1 h1 c1]
    v108 = null;                                        // #3736:68:233 [L d1 h1 c1]
    v98.jUBT6 = null;                                   // #3739:206:199 [L d1 h1 c1]
    v109 = "cqHb1";                                     // #3743:202:233 [L d1 h1 c1]
    v110 = null;                                        // #3748:214:233 [L d1 h1 c1]
    v98.cqHb1 = null;                                   // #3751:152:199 [L d1 h1 c1]
    v111 = "XZhp4";                                     // #3755:236:233 [L d1 h1 c1]
    v112 = null;                                        // #3760:240:233 [L d1 h1 c1]
    v98.XZhp4 = null;                                   // #3763:202:199 [L d1 h1 c1]
    win_v97[v271] = v98;                                // #3767:188:199 [L d1 h1 c1]
    TP(tryStack, 3835, 110, callDepths);                           // #3771:53:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v113 = "";                                          // #3777:85:233 [L d1 h1 c1]
    rTCDataChannel_v114 = (pc_v94).createDataChannel("");  // #3781:82:138 [L d1 h1 c1]
    v115 = win_v265[v273][v271];                        // #3811:125:20 [L d1 h1 c1]
    v116 = "tqXz9";                                     // #3816:125:233 [L d1 h1 c1]
    v117 = true;                                        // #3821:125:233 [L d1 h1 c1]
    v115.tqXz9 = true;                                  // #3824:99:199 [L d1 h1 c1]
    arr_v118 = tryStack.pop();                               // #3828:82:124 [L d1 h1 c1]
    pc_v119 = cell[1];                                  // #3831:90:53 #3876:247:236 [L d1 h1 c1]
    pc_v120 = cell[1];                                  // #3879:200:150 [L d1 h1 c1]
    fn_v121 = cell[1].addEventListener;                 // #3882:127:200 [L d1 h1 c1]
    v122 = "icecandidate";                              // #3887:247:233 [L d1 h1 c1]
    fn_v123 = clos;                                     // #3903:130:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v123 = its home register (H139 CLOS bind)
    v124 = fn_v121.call(pc_v120, v122, fn_v123);        // #3918:11:138 [L d1 h1 c1]
    pc_v125 = pc_v119;                                  // #3949:140:150 [L d1 h1 c1]
    fn_v126 = pc_v119.createOffer;                      // #3952:51:200 [L d1 h1 c1]
    v127 = {};                                          // #3967:57:159 [L d1 h1 c1]
    v128 = "offerToReceiveAudio";                       // #3969:73:233 [L d1 h1 c1]
    v129 = true;                                        // #3992:25:233 [L d1 h1 c1]
    v127.offerToReceiveAudio = true;                    // #3995:143:199 [L d1 h1 c1]
    v130 = "offerToReceiveVideo";                       // #3999:199:233 [L d1 h1 c1]
    v131 = true;                                        // #4022:31:233 [L d1 h1 c1]
    v127.offerToReceiveVideo = true;                    // #4025:253:199 [L d1 h1 c1]
    promise_v132 = fn_v126.call(pc_v125, v127);         // #4029:90:138 [L d1 h1 c1]
    fn_v133 = promise_v132.then;                        // #4054:73:200 [L d1 h1 c1]
    fn_v134 = clos;                                     // #4062:12:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v134 = its home register (H139 CLOS bind)
    promise_v135 = fn_v133.call(promise_v132, fn_v134);  // #4074:237:138 [L d1 h1 c1]
    fn_v136 = promise_v135.catch;                       // #4092:80:200 [L d1 h1 c1]
    fn_v137 = clos;                                     // #4097:183:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v137 = its home register (H139 CLOS bind)
    promise_v138 = fn_v136.call(promise_v135, fn_v137);  // #4109:172:138 [L d1 h1 c1]
    fn_v139 = win_v265.setTimeout;                      // #4128:211:200 [L d1 h1 c1]
    fn_v140 = clos;                                     // #4133:238:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v140 = its home register (H139 CLOS bind)
    fn_v141 = fn_v140;                                  // #4144:163:150 [L d1 h1 c1]
    v142 = 5000;                                        // #4147:139:233 [L d1 h1 c1]
    v143 = fn_v139.call(win_v265, fn_v141, 5000);       // #4152:48:138 [L d1 h1 c1] +#4177:64:53
  } else {
    // #3420:49:53 [-] /* never executed in any replay */
  }
  arr_v144 = tryStack.pop();                                 // #4182:211:124 [L d1 h1 c1]
  fn_v145 = clos;                                       // #4185:23:53 #4198:227:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v145 = its home register (H139 CLOS bind)
  fn_v146 = fn_v145;                                    // #4210:4:150 [L d1 h1 c1]
  win_v147 = win_v265[v273];                            // #4213:206:7 [L d1 h1 c1]
  v148 = KP(s1p4216);                                   // #4217:202:233 [L d1 h1 c1]
  v149 = MC(win_v147, v270, v148);                      // #4270:123:114 [L d1 h1 c1]
  v150 = 0;                                             // #4275:166:72 [L d1 h1 c1]
  cell[5] = 0;                                          // #4278:52:195 [L d1 h1 c1]
  fn_v151 = win_v265.eval;                              // #4281:59:200 [L d1 h1 c1]
  v152 = fn_v151.toString();                            // #4286:32:138 [L d1 h1 c1]
  cell[6] = v152;                                       // #4306:70:195 [L d1 h1 c1]
  elIFrame_v153 = fn_v146();                            // #4309:202:113 [L d1 h1 c1]
  win_v154 = elIFrame_v153.contentWindow;               // #4313:249:200 [L d1 h1 c1]
  fn_v155 = win_v154.eval;                              // #4330:44:200 [L d1 h1 c1]
  v156 = fn_v155.toString();                            // #4335:141:138 [L d1 h1 c1]
  cell[8] = v156;                                       // #4355:63:195 [L d1 h1 c1]
  v157 = (elIFrame_v153).remove();                      // #4358:20:138 [L d1 h1 c1]
  win_v158 = win_v265[v273];                            // #4376:158:7 [L d1 h1 c1]
  v159 = KP(s1p4379);                                   // #4380:90:233 [L d1 h1 c1]
  v160 = MC(win_v158, v270, v159);                      // #4453:203:114 [L d1 h1 c1]
  v161 = " ";                                           // #4458:19:233 [L d1 h1 c1]
  v162 = 1337331;                                       // #4463:59:233 [L d1 h1 c1]
  v163 = (" ").repeat((1337331));                       // #4469:32:138 [L d1 h1 c1]
  v164 = "0, /.*honk.*/, ";                             // #4488:84:233 [L d1 h1 c1]
  v165 = v163 + ("0, /.*honk.*/, ");                    // #4507:25:222 [L d1 h1 c1]
  cell[9] = v165;                                       // #4511:155:195 [L d1 h1 c1]
  fn_v166 = clos;                                       // #4514:150:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v166 = its home register (H139 CLOS bind)
  cell[23] = fn_v166;                                   // #4534:100:195 [L d1 h1 c1]
  v167 = fn_v166();                                     // #4537:240:113 [L d1 h1 c1]
  win_v168 = win_v265[v273];                            // #4541:10:7 [L d1 h1 c1]
  v169 = KP(s1p4544);                                   // #4545:22:233 [L d1 h1 c1]
  v170 = MC(win_v168, v270, v169);                      // #4598:151:114 [L d1 h1 c1]
  v171 = {};                                            // #4603:13:159 [L d1 h1 c1]
  v172 = {};                                            // #4605:43:159 [L d1 h1 c1]
  v173 = "whenStable";                                  // #4607:243:233 [L d1 h1 c1]
  fn_v174 = clos;                                       // #4621:142:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v174 = its home register (H139 CLOS bind)
  v172[v173] = fn_v174;                                 // #4631:112:199 [L d1 h1 c1]
  cell[11] = v172;                                      // #4635:86:195 [L d1 h1 c1]
  fn_v175 = win_v265.Object;                            // #4638:85:200 [L d1 h1 c1]
  fn_v176 = fn_v175;                                    // #4643:46:150 [L d1 h1 c1]
  fn_v177 = fn_v175.defineProperty;                     // #4646:205:200 [L d1 h1 c1]
  v178 = "getTestability";                              // #4651:141:233 [L d1 h1 c1]
  v179 = {};                                            // #4669:171:159 [L d1 h1 c1]
  v180 = "get";                                         // #4671:115:233 [L d1 h1 c1]
  fn_v276 = clos;                                       // #4678:14:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v276 = its home register (H139 CLOS bind)
  v179[v180] = fn_v276;                                 // #4689:240:199 [L d1 h1 c1]
  v181 = fn_v177.call(fn_v176, v171, v178, v179);       // #4693:65:138 [L d1 h1 c1]
  win_v182 = win_v265[v273];                            // #4723:87:7 [L d1 h1 c1]
  win_v182.angular = v171;                              // #4727:192:142 [L d1 h1 c1]
  win_v183 = win_v265[v273];                            // #4738:154:7 [L d1 h1 c1]
  v184 = KP(s1p4741);                                   // #4742:102:233 [L d1 h1 c1]
  v185 = MC(win_v183, v270, v184);                      // #4795:167:114 [L d1 h1 c1]
  win_v186 = win_v265[v273];                            // #4800:165:7 [L d1 h1 c1]
  v187 = win_v186.hbRVt7;                               // #4804:40:200 [L d1 h1 c1]
  v188 = undefined;                                     // #4809:60:233 [L d1 h1 c1]
  if (v187 === v188) {                                  // #4812:216:161 [L d1 h1 c1]
    win_v189 = win_v265[v273];                          // #4829:52:7 [L d1 h1 c1]
    v190 = "hbRVt7";                                    // #4833:24:233 [L d1 h1 c1]
    arr_v191 = [];                                      // #4838:102:107 [L d1 h1 c1]
    win_v189.hbRVt7 = arr_v191;                         // #4840:135:210 [L d1 h1 c1]
  }
  win_v192 = win_v265[v273];                            // #4848:197:7 [L d1 h1 c1]
  v193 = win_v192.TRcGA3;                               // #4852:200:200 [L d1 h1 c1]
  v194 = undefined;                                     // #4857:92:233 [L d1 h1 c1]
  if (v193 === v194) {                                  // #4860:120:161 [L d1 h1 c1]
    win_v195 = win_v265[v273];                          // #4877:191:7 [L d1 h1 c1]
    v196 = "TRcGA3";                                    // #4881:55:233 [L d1 h1 c1]
    v197 = "suNuW1";                                    // #4886:207:233 [L d1 h1 c1]
    win_v195.TRcGA3 = "suNuW1";                         // #4896:140:210 [L d1 h1 c1]
  }
  win_v198 = win_v265[v273];                            // #4904:66:7 [L d1 h1 c1]
  v199 = "DIkC7";                                       // #4908:110:233 [L d1 h1 c1]
  arr_v200 = [];                                        // #4917:228:107 [L d1 h1 c1]
  doc_v201 = win_v265[v266][v272];                      // #4919:71:20 [L d1 h1 c1]
  fn_v202 = doc_v201[v268];                             // #4924:197:7 [L d1 h1 c1]
  v203 = 0; arr_v200[0] = fn_v202;                      // #4928:82:26 [L d1 h1 c1]
  doc_v204 = win_v265[v266][v272];                      // #4933:125:20 [L d1 h1 c1]
  fn_v205 = doc_v204[v269];                             // #4938:163:7 [L d1 h1 c1]
  v206 = 1; arr_v200[1] = fn_v205;                      // #4942:56:26 [L d1 h1 c1]
  element_v207 = win_v265[v267][v272];                  // #4947:75:20 [L d1 h1 c1]
  fn_v208 = element_v207[v268];                         // #4952:185:7 [L d1 h1 c1]
  v209 = 2; arr_v200[2] = fn_v208;                      // #4956:118:26 [L d1 h1 c1]
  element_v210 = win_v265[v267][v272];                  // #4961:17:20 [L d1 h1 c1]
  fn_v211 = element_v210[v269];                         // #4966:231:7 [L d1 h1 c1]
  v212 = 3; arr_v200[3] = fn_v211;                      // #4970:108:26 [L d1 h1 c1]
  win_v198.DIkC7 = arr_v200;                            // #4975:86:199 [L d1 h1 c1]
  v213 = {};                                            // #4979:144:159 [L d1 h1 c1]
  v214 = "apply";                                       // #4981:4:233 [L d1 h1 c1]
  fn_v215 = clos;                                       // #4990:155:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v215 = its home register (H139 CLOS bind)
  v213[v214] = fn_v215;                                 // #5006:137:199 [L d1 h1 c1]
  v216 = v213;                                          // #5010:146:150 [L d1 h1 c1]
  doc_v217 = win_v265[v266][v272];                      // #5013:189:20 [L d1 h1 c1]
  fn_v218 = win_v265.Proxy;                             // #5018:224:200 [L d1 h1 c1]
  doc_v219 = win_v265[v266][v272];                      // #5023:83:20 [L d1 h1 c1]
  fn_v220 = doc_v219[v268];                             // #5028:161:7 [L d1 h1 c1]
  fn_v221 = new fn_v218(fn_v220, v216);                 // #5032:201:1 [L d1 h1 c1]
  doc_v217[v268] = fn_v221;                             // #5038:127:199 [L d1 h1 c1]
  doc_v222 = win_v265[v266][v272];                      // #5042:54:20 [L d1 h1 c1]
  fn_v223 = win_v265.Proxy;                             // #5047:181:200 [L d1 h1 c1]
  doc_v224 = win_v265[v266][v272];                      // #5052:20:20 [L d1 h1 c1]
  fn_v225 = doc_v224[v269];                             // #5057:158:7 [L d1 h1 c1]
  fn_v226 = new fn_v223(fn_v225, v216);                 // #5061:18:1 [L d1 h1 c1]
  doc_v222[v269] = fn_v226;                             // #5067:228:199 [L d1 h1 c1]
  element_v227 = win_v265[v267][v272];                  // #5071:71:20 [L d1 h1 c1]
  fn_v228 = win_v265.Proxy;                             // #5076:194:200 [L d1 h1 c1]
  element_v229 = win_v265[v267][v272];                  // #5081:45:20 [L d1 h1 c1]
  fn_v230 = element_v229[v268];                         // #5086:147:7 [L d1 h1 c1]
  fn_v231 = new fn_v228(fn_v230, v216);                 // #5090:115:1 [L d1 h1 c1]
  element_v227[v268] = fn_v231;                         // #5096:1:199 [L d1 h1 c1]
  element_v232 = win_v265[v267][v272];                  // #5100:48:20 [L d1 h1 c1]
  fn_v233 = win_v265.Proxy;                             // #5105:71:200 [L d1 h1 c1]
  element_v277 = win_v265[v267][v272];                  // #5110:222:20 [L d1 h1 c1]
  fn_v234 = element_v277[v269];                         // #5115:192:7 [L d1 h1 c1]
  fn_v235 = new fn_v233(fn_v234, v216);                 // #5119:44:1 [L d1 h1 c1]
  element_v232[v269] = fn_v235;                         // #5125:22:199 [L d1 h1 c1]
  win_v236 = win_v265[v273];                            // #5129:24:7 [L d1 h1 c1]
  v237 = KP(s1p5132);                                   // #5133:108:233 [L d1 h1 c1]
  v238 = MC(win_v236, v270, v237);                      // #5186:21:114 [L d1 h1 c1]
  v239 = {};                                            // #5191:19:159 [L d1 h1 c1]
  arr_v240 = [];                                        // #5193:53:107 [L d1 h1 c1]
  v278 = "frameElement";                                // #5195:85:233 [L d1 h1 c1]
  v241 = 0; arr_v240[0] = "frameElement";               // #5211:162:26 [L d1 h1 c1]
  v239[v273] = arr_v240;                                // #5216:52:199 [L d1 h1 c1]
  v279 = v239;                                          // #5220:81:150 [L d1 h1 c1]
  v242 = {};                                            // #5223:95:159 [L d1 h1 c1]
  cell[14] = v242;                                      // #5225:73:195 [L d1 h1 c1]
  fn_v243 = win_v265.Object;                            // #5228:60:200 [L d1 h1 c1]
  fn_v244 = fn_v243;                                    // #5233:57:150 [L d1 h1 c1]
  arr_v280 = fn_v244.keys(v279);                        // #5236:166:138 [L d1 h1 c1]
  v281 = 0;                                             // #5253:229:72 [L d1 h1 c1]
  v282 = 1;                                             // #5256:232:72 [L d1 h1 c1]
  v283 = "length";                                      // #5259:252:233 [L d1 h1 c1]
  v245 = "String";                                      // #5264:192:233 [L d1 h1 c1]
  v284 = 1;                                             // #5269:23:72 [L d1 h1 c1]
  v285 = "length";                                      // #5272:47:233 [L d1 h1 c1]
  v286 = ".";                                           // #5277:231:233 [L d1 h1 c1]
  v287 = undefined;                                     // #5282:191:233 [L d1 h1 c1] +#5285:83:53
  loop_L5299_191: while ((v247 = arr_v280[v283], v248 = v281 < v247, v281 < v247)) {  // #5300:93:7 | #5304:170:186 [L d2 h2 c2]
    fn_v249 = win_v265.String;                          // #5322:49:200 [L d1 h1 c1]
    v250 = arr_v280[v281];                              // #5327:135:7 [L d1 h1 c1]
    v288 = fn_v249.call(win_v265, v250);                // #5331:60:138 [L d1 h1 c1]
    arr_v289 = v279[v288];                              // #5351:38:7 [L d1 h1 c1]
    v290 = 0;                                           // #5355:101:72 [L d1 h1 c1] +#5358:225:53
    while ((v252 = arr_v289[v285], v253 = v290 < v252, v290 < v252)) {  // #5373:137:7 | #5377:38:186 [L d2 h2 c2]
      v254 = arr_v289[v290];                            // #5395:137:7 [L d1 h1 c1]
      v255 = v288 + v286;                               // #5399:186:222 [L d1 h1 c1]
      v256 = v255 + v254;                               // #5403:103:222 [L d1 h1 c1]
      win_v257 = win_v265[v273];                        // #5407:101:7 [L d1 h1 c1]
      if (!(op52_dispatch())) {                         // #5411:164:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
        win_v257 = win_v265[v273][v288];                // #5437:228:53 #5442:12:20 [-] +#5447:172:53 /* never executed in any replay */
      }
      fn_v291 = clos;                                   // #5452:18:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v291 = its home register (H139 CLOS bind)
      v292 = MC(v287, fn_v291, win_v257, v254, v256);      // #5468:73:16 [L d1 h1 c1]
      v251 = v290; v290 = v290 + v284;                  // #5476:53:53 #5363:182:48 [L d1 h1 c1]
    }
    v246 = v281; v281 = v281 + v282;                    // #5290:220:48 [L d1 h1 c1]
    continue loop_L5299_191;
  }
  win_v258 = win_v265[v273];                            // #5486:165:7 [L d1 h1 c1]
  v259 = KP(s1p5489);                                   // #5490:5:233 [L d1 h1 c1]
  v260 = MC(win_v258, v270, v259);                      // #5543:138:114 [L d1 h1 c1]
  fn_v261 = clos;                                       // #5548:137:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v261 = its home register (H139 CLOS bind)
  TP(tryStack, 5580, 229, callDepths);                             // #5563:14:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
  v262 = fn_v261();                                     // #5569:114:113 [L d1 h1 c1]
  arr_v263 = tryStack.pop();                                 // #5573:229:124 [L d1 h1 c1]
  win_v293 = win_v265[v273];                            // #5576:97:53 #5606:131:7 [L d1 h1 c1]
  v264 = KP(s1p5609);                                   // #5610:235:233 [L d1 h1 c1]
  v294 = MC(win_v293, v270, v264);                      // #5663:88:114 [L d1 h1 c1]
  v295 = undefined;                                     // #5668:172:233 [L d1 h1 c1]
  return v295;                                          // #5671:140:245 [L d1 h1 c1]
}