function fn_document_167504(win_v428 /* r70 */, v429 /* r209 */, v430 /* r213 */, v431 /* r215 */, v432 /* r220 */, v433 /* r221 */, v462 /* r223 */) { // entry L167494_85; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 461 register webs used only inside this fn (no live-in, cross-call or table-made def; 34 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 7 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 16 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r247 */, v2 /* r195 */, v3 /* r196 */, v4 /* r253 */, v5 /* r192 */, v6 /* r193 */, v7 /* r232 */, v8 /* r250 */, v9 /* r198 */, v10 /* r202 */;
  let v11 /* r205 */, fn_v12 /* r205 */, v13 /* r205 */, v14 /* r202 */, v15 /* r199 */, v16 /* r254 */, v17 /* r205 */, v18 /* r202 */, v19 /* r205 */, win_v20 /* r205 */;
  let win_v21 /* r202 */, fn_v22 /* r199 */, v23 /* r205 */, v24 /* r196 */, arr_v25 /* r202 */, v26 /* r205 */, v27 /* r202 */, arr_v28 /* r253 */, v29 /* r205 */, v30 /* r205 */;
  let v31 /* r205 */, console_v32 /* r202 */, v33 /* r205 */, v34 /* r199 */, fn_v35 /* r202 */, v36 /* r205 */, arr_v37 /* r202 */, arr_v38 /* r199 */, v39 /* r202 */, elIFrame_v40 /* r202 */;
  let win_v41 /* r205 */, fn_v42 /* r245 */, v43 /* r199 */, v44 /* r205 */, arr_v45 /* r202 */, v46 /* r244 */, console_v47 /* r196 */, v48 /* r253 */, v49 /* r196 */, v50 /* r253 */;
  let v51 /* r196 */, fn_v52 /* r192 */, arr_v53 /* r198 */, v54 /* r195 */, v55 /* r246 */, v56 /* r250 */, v57 /* r254 */, v58 /* r252 */, v59 /* r193 */, v60 /* r205 */;
  let v61 /* r205 */, arr_v62 /* r202 */, fn_v63 /* r199 */, console_v64 /* r196 */, v65 /* r205 */, v66 /* r196 */, arr_v67 /* r202 */, fn_v68 /* r199 */, v69 /* r205 */, v70 /* r196 */;
  let v71 /* r199 */, arr_v72 /* r202 */, fn_v73 /* r195 */, v74 /* r198 */, v75 /* r253 */, v76 /* r196 */, v77 /* r242 */, v78 /* r244 */, v79 /* r250 */, v80 /* r192 */;
  let v81 /* r193 */, v82 /* r245 */, v83 /* r246 */, v84 /* r254 */, v85 /* r205 */, v86 /* r205 */, console_v87 /* r202 */, doc_v88 /* r205 */, v89 /* r199 */, v90 /* r252 */;
  let elIFrame_v91 /* r202 */, doc_v92 /* r205 */, v93 /* r199 */, v94 /* r202 */, v95 /* r199 */, v96 /* r199 */, v97 /* r205 */, arr_v98 /* r202 */, v99 /* r205 */, v100 /* r202 */;
  let v101 /* r205 */, v102 /* r202 */, re_v103 /* r195 */, v104 /* r205 */, fn_v105 /* r202 */, console_v106 /* r202 */, console_v107 /* r205 */, v108 /* r202 */, v109 /* r205 */, v110 /* r199 */;
  let v111 /* r205 */, v112 /* r202 */, v113 /* r253 */, v114 /* r202 */, v115 /* r199 */, v116 /* r205 */, v117 /* r198 */, v118 /* r205 */, console_v119 /* r205 */, v120 /* r202 */;
  let v121 /* r205 */, v122 /* r199 */, v123 /* r205 */, v124 /* r202 */, v125 /* r253 */, v126 /* r202 */, v127 /* r199 */, v128 /* r205 */, v129 /* r198 */, fn_v130 /* r202 */;
  let fn_v131 /* r196 */, v132 /* r202 */, fn_v133 /* r199 */, console_v134 /* r199 */, console_v135 /* r202 */, v136 /* r199 */, v137 /* r205 */, v138 /* r202 */, v139 /* r253 */, v140 /* r199 */;
  let v141 /* r198 */, v142 /* r202 */, v143 /* r202 */, v144 /* r205 */, console_v145 /* r202 */, v146 /* r199 */, v147 /* r205 */, v148 /* r253 */, v149 /* r199 */, v150 /* r198 */;
  let v151 /* r202 */, v152 /* r205 */, v153 /* r199 */, v154 /* r205 */, v155 /* r202 */, doc_v156 /* r202 */, v157 /* r205 */, elAnchor_v158 /* r198 */, fn_v159 /* r205 */, fn_v160 /* r199 */;
  let fn_v161 /* r193 */, v162 /* r205 */, v163 /* r202 */, v164 /* r192 */, fn_v165 /* r254 */, v166 /* r192 */, v167 /* r254 */, v168 /* r192 */, v169 /* r254 */, elAnchor_v170 /* r192 */;
  let console_v171 /* r202 */, console_v172 /* r205 */, v173 /* r202 */, v174 /* r205 */, v175 /* r199 */, v176 /* r205 */, v177 /* r202 */, v178 /* r253 */, v179 /* r202 */, v180 /* r199 */;
  let v181 /* r205 */, v182 /* r193 */, v183 /* r205 */, console_v184 /* r205 */, v185 /* r202 */, v186 /* r205 */, v187 /* r199 */, v188 /* r205 */, v189 /* r202 */, v190 /* r253 */;
  let v191 /* r202 */, v192 /* r199 */, v193 /* r205 */, v194 /* r193 */, v195 /* r253 */, v196 /* r202 */, fn_v197 /* r254 */, fn_v198 /* r202 */, v199 /* r254 */, v200 /* r202 */;
  let fn_v201 /* r253 */, fn_v202 /* r254 */, v203 /* r192 */, fn_v204 /* r193 */, err_v205 /* r193 */, fn_v206 /* r202 */, fn_v207 /* r253 */, fn_v208 /* r252 */, v209 /* r202 */, v210 /* r254 */;
  let v211 /* r250 */, fn_v212 /* r230 */, v213 /* r250 */, v214 /* r230 */, v215 /* r250 */, v216 /* r230 */, err_v217 /* r250 */, fn_v218 /* r202 */, fn_v219 /* r253 */, fn_v220 /* r252 */;
  let v221 /* r202 */, v222 /* r254 */, v223 /* r250 */, fn_v224 /* r230 */, v225 /* r250 */, v226 /* r230 */, v227 /* r250 */, v228 /* r230 */, err_v229 /* r250 */, fn_v230 /* r202 */;
  let fn_v231 /* r253 */, fn_v232 /* r252 */, v233 /* r202 */, v234 /* r254 */, v235 /* r250 */, fn_v236 /* r230 */, v237 /* r250 */, v238 /* r230 */, v239 /* r250 */, arr_v240 /* r202 */;
  let arr_v241 /* r254 */, v242 /* r252 */, v243 /* r253 */, v244 /* r252 */, v245 /* r253 */, arr_v246 /* r253 */, v247 /* r254 */, arr_v248 /* r254 */, v249 /* r252 */, v250 /* r253 */;
  let v251 /* r252 */, v252 /* r253 */, arr_v253 /* r253 */, v254 /* r254 */, arr_v255 /* r254 */, v256 /* r252 */, v257 /* r253 */, v258 /* r252 */, v259 /* r253 */, arr_v260 /* r253 */;
  let v261 /* r254 */, arr_v262 /* r254 */, v263 /* r252 */, v264 /* r253 */, v265 /* r252 */, v266 /* r253 */, arr_v267 /* r253 */, v268 /* r254 */, arr_v269 /* r254 */, v270 /* r252 */;
  let v271 /* r253 */, v272 /* r252 */, v273 /* r253 */, arr_v274 /* r253 */, v275 /* r254 */, arr_v276 /* r254 */, v277 /* r252 */, v278 /* r253 */, v279 /* r252 */, v280 /* r253 */;
  let arr_v281 /* r253 */, v282 /* r254 */, arr_v283 /* r254 */, v284 /* r252 */, v285 /* r253 */, v286 /* r252 */, v287 /* r253 */, arr_v288 /* r253 */, v289 /* r254 */, arr_v290 /* r254 */;
  let v291 /* r252 */, v292 /* r253 */, v293 /* r252 */, v294 /* r253 */, arr_v295 /* r253 */, v296 /* r254 */, arr_v297 /* r254 */, v298 /* r252 */, v299 /* r253 */, v300 /* r252 */;
  let v301 /* r253 */, arr_v302 /* r253 */, v303 /* r254 */, arr_v304 /* r254 */, v305 /* r252 */, v306 /* r253 */, v307 /* r252 */, v308 /* r253 */, arr_v309 /* r253 */, v310 /* r254 */;
  let arr_v311 /* r254 */, v312 /* r252 */, v313 /* r253 */, v314 /* r253 */, v315 /* r254 */, arr_v316 /* r205 */, v317 /* r199 */, v318 /* r202 */, v319 /* r254 */, v320 /* r202 */;
  let arr_v321 /* r202 */, v322 /* r253 */, arr_v323 /* r253 */, v324 /* r252 */, v325 /* r202 */, v326 /* r202 */, v327 /* r254 */, v328 /* r254 */, v329 /* r202 */, v330 /* r202 */;
  let console_v331 /* r202 */, console_v332 /* r254 */, fn_v333 /* r253 */, v334 /* r202 */, v335 /* r252 */, console_v336 /* r254 */, fn_v337 /* r253 */, v338 /* r202 */, v339 /* r252 */, console_v340 /* r202 */;
  let console_v341 /* r254 */, fn_v342 /* r253 */, v343 /* r202 */, v344 /* r252 */, console_v345 /* r254 */, fn_v346 /* r253 */, v347 /* r202 */, v348 /* r252 */, console_v349 /* r202 */, console_v350 /* r254 */;
  let fn_v351 /* r253 */, v352 /* r202 */, v353 /* r252 */, console_v354 /* r254 */, fn_v355 /* r253 */, v356 /* r202 */, v357 /* r252 */, arr_v358 /* r202 */, v359 /* r202 */, v360 /* r253 */;
  let v361 /* r254 */, v362 /* r253 */, v363 /* r202 */, v364 /* r252 */, v365 /* r253 */, v366 /* r254 */, v367 /* r253 */, v368 /* r202 */, v369 /* r252 */, console_v370 /* r202 */;
  let console_v371 /* r254 */, fn_v372 /* r253 */, v373 /* r202 */, v374 /* r252 */, console_v375 /* r254 */, v376 /* r202 */, arr_v377 /* r202 */, v378 /* r202 */, v379 /* r205 */, arr_v380 /* r202 */;
  let arr_v381 /* r199 */, fn_v382 /* r202 */, v383 /* r205 */, v384 /* r192 */, arr_v385 /* r202 */, arr_v386 /* r199 */, fn_v387 /* r202 */, v388 /* r205 */, arr_v389 /* r202 */, arr_v390 /* r199 */;
  let fn_v391 /* r202 */, v392 /* r205 */, arr_v393 /* r202 */, arr_v394 /* r199 */, fn_v395 /* r202 */, v396 /* r205 */, arr_v397 /* r202 */, arr_v398 /* r199 */, fn_v399 /* r202 */, v400 /* r205 */;
  let arr_v401 /* r202 */, arr_v402 /* r199 */, fn_v403 /* r202 */, v404 /* r205 */, v405 /* r198 */, v406 /* r202 */, v407 /* r205 */, v408 /* r198 */, arr_v409 /* r202 */, arr_v410 /* r205 */;
  let v411 /* r202 */, v412 /* r202 */, v413 /* r205 */, arr_v414 /* r199 */, v415 /* r202 */, v416 /* r202 */, v417 /* r202 */, v418 /* r202 */, arr_v419 /* r202 */, v420 /* r205 */;
  let fn_v421 /* r205 */, v422 /* r205 */, fn_v423 /* r202 */, fn_v424 /* r205 */, console_v425 /* r205 */, v426 /* r205 */, v427 /* r205 */, v434 /* r204 */, console_v435 /* r247 */, v436 /* r230 */;
  let err_v437 /* r250 */, v438 /* r252 */, arr_v439 /* r253 */, v440 /* r232 */, v441 /* r231 */, v442 /* r237 */, v443 /* r238 */, v444 /* r244 */, v445 /* r245 */, v446 /* r236 */;
  let v447 /* r240 */, v448 /* r242 */, v449 /* r246 */, v450 /* r254 */, v451 /* r250 */, fn_v452 /* r253 */, v453 /* r252 */, v454 /* r192 */, v455 /* r193 */, v456 /* r195 */;
  let v457 /* r196 */, v458 /* r198 */, v459 /* r199 */, v460 /* r202 */, v461 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v12 3, fn_v22 3, fn_v35 3, fn_v42 3, fn_v52 3, fn_v63 18, fn_v68 18, fn_v73 3
  //   Function: fn_v105 3, fn_v130 3, fn_v131 3, fn_v133 3, fn_v159 3, fn_v160 3, fn_v161 3, fn_v165 3
  //   Function: fn_v197 3, fn_v198 3, fn_v201 3, fn_v202 3, fn_v204 3, fn_v206 3, fn_v207 3, fn_v208 3
  //   Function: fn_v212 3, fn_v218 3, fn_v219 3, fn_v220 3, fn_v224 3, fn_v230 3, fn_v231 3, fn_v232 3
  //   Function: fn_v236 3, fn_v333 3, fn_v337 3, fn_v342 24, fn_v346 24, fn_v351 6, fn_v355 6, fn_v372 33
  //   Function: fn_v382 3, fn_v387 3, fn_v391 3, fn_v395 3, fn_v399 3, fn_v403 3, fn_v421 3, fn_v423 3
  //   Function: fn_v424 3, fn_v452 33
  //   Window: win_v20 3, win_v21 3, win_v41 3, win_v428 3
  //   Array: arr_v25 3, arr_v28 3, arr_v37 3, arr_v38 3, arr_v45 3, arr_v53 3, arr_v62 18, arr_v67 18
  //   Array: arr_v72 3, arr_v98 3, arr_v240 3, arr_v241 3, arr_v246 3, arr_v248 3, arr_v253 3, arr_v255 3
  //   Array: arr_v260 3, arr_v262 3, arr_v267 3, arr_v269 3, arr_v274 3, arr_v276 3, arr_v281 3, arr_v283 3
  //   Array: arr_v288 3, arr_v290 3, arr_v295 3, arr_v297 3, arr_v302 3, arr_v304 3, arr_v309 3, arr_v311 3
  //   Array: arr_v316 3, arr_v321 33, arr_v323 33, arr_v358 33, arr_v377 33, arr_v380 3, arr_v381 3, arr_v385 3
  //   Array: arr_v386 3, arr_v389 3, arr_v390 3, arr_v393 3, arr_v394 3, arr_v397 3, arr_v398 3, arr_v401 3
  //   Array: arr_v402 3, arr_v409 3, arr_v410 3, arr_v414 3, arr_v419 3, arr_v439 3
  //   console: console_v32 3, console_v47 3, console_v64 18, console_v87 9, console_v106 3, console_v107 3, console_v119 3, console_v134 3
  //   console: console_v135 3, console_v145 3, console_v171 3, console_v172 3, console_v184 3, console_v331 3, console_v332 3, console_v336 3
  //   console: console_v340 24, console_v341 24, console_v345 24, console_v349 6, console_v350 6, console_v354 6, console_v370 33, console_v371 33
  //   console: console_v375 33, console_v425 3, console_v435 3
  //   HTMLIFrameElement: elIFrame_v40 3, elIFrame_v91 9
  //   HTMLDocument: doc_v88 9, doc_v92 9, doc_v156 3
  //   RegExp: re_v103 3
  //   HTMLAnchorElement: elAnchor_v158 3, elAnchor_v170 3
  //   Error: err_v205 3, err_v217 3, err_v229 3, err_v437 3
  // H137 proven reads: 14 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 10 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 26 dead register writes dropped, 42 constants propagated (42 uses), 13 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1, liveIn 1)
  NC(19, 20, 21, 22, 23, 24, 25, 26, 28, 32, 47, 48, 49, 50, 51, 53, 57, 58);  // #167495:17:53 #167505:114:211 [L d1 h1 c1]
  v1 = undefined;                                       // #167525:222:233 #167528:154:233 #167531:102:233 #167534:2:233 #167537:46:233 #167540:170:233 #167543:54:233 #167546:146:233 #167549:126:233 #167552:186:233 [L d1 h1 c1]
  v2 = undefined;                                       // #167555:6:233 #167558:34:233 #167561:206:233 #167564:202:233 #167567:214:233 [L d1 h1 c1]
  v3 = undefined;                                       // #167570:178:233 [L d1 h1 c1]
  v4 = undefined;                                       // #167573:30:233 #167576:218:233 [L d1 h1 c1]
  v5 = undefined;                                       // #167579:166:233 #167582:66:233 [L d1 h1 c1]
  v6 = undefined;                                       // #167585:110:233 [L d1 h1 c1]
  v7 = undefined;                                       // #167588:234:233 #167591:118:233 [L d1 h1 c1]
  v8 = undefined;                                       // #167594:210:233 [L d1 h1 c1]
  v9 = undefined;                                       // #167597:190:233 #167600:250:233 #167603:70:233 #167606:98:233 #167609:14:233 [L d1 h1 c1]
  v10 = undefined;                                      // #167612:10:233 #167615:22:233 #167618:242:233 [L d1 h1 c1]
  v434 = undefined;                                     // #167621:94:233 [L d1 h1 c1]
  v11 = undefined;                                      // #167624:26:233 [L d1 h1 c1]
  clos;                                                 // #167627:217:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #167645:92:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #167662:147:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #167678:174:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v12 = clos;                                        // #167694:29:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v12 = its home register (H139 CLOS bind)
  cell[57] = r202;                                      // #167707:143:195 [L d1 h1 c1]
  cell[58] = fn_v12;                                    // #167710:185:195 [L d1 h1 c1]
  v13 = cell[1];                                        // #167713:128:236 [L d1 h1 c1]
  v14 = v13[v432];                                      // #167716:90:7 [L d1 h1 c1]
  v15 = v13[v14];                                       // #167720:76:7 [L d1 h1 c1]
  cell[19] = v15;                                       // #167724:194:195 [L d1 h1 c1]
  v16 = "CnBd1";                                        // #167727:238:233 [L d1 h1 c1]
  v17 = typeof v431;                                    // #167736:226:193 [L d1 h1 c1]
  v18 = "undefined";                                    // #167739:142:233 [L d1 h1 c1]
  if (v17 === v18) {                                    // #167744:98:161 [L d1 h1 c1]
    v19 = null;                                         // #167765:48:233 [-] +#167768:64:53 /* never executed in any replay */
  } else {
    v19 = v431;                                         // #167752:42:53 #167757:225:150 [L d1 h1 c1] +#167760:109:53
  }
  v15.CnBd1 = v19;                                      // #167773:80:199 [L d1 h1 c1]
  win_v20 = win_v428[v433];                             // #167777:234:7 [L d1 h1 c1]
  win_v21 = win_v20;                                    // #167781:175:150 [L d1 h1 c1]
  fn_v22 = win_v21[v429];                               // #167784:141:7 [L d1 h1 c1]
  v23 = KP(167787);                                     // #167788:77:233 [L d1 h1 c1]
  v24 = fn_v22.call(win_v21, v23);                      // #167841:106:138 [L d1 h1 c1]
  arr_v25 = [];                                         // #167861:240:107 [L d1 h1 c1]
  cell[20] = arr_v25;                                   // #167863:214:195 [L d1 h1 c1]
  v26 = null;                                           // #167866:178:233 [L d1 h1 c1]
  cell[21] = null;                                      // #167869:16:195 [L d1 h1 c1]
  v27 = "AWjER5";                                       // #167872:132:233 [L d1 h1 c1]
  cell[22] = "AWjER5";                                  // #167882:26:195 [L d1 h1 c1]
  arr_v28 = [];                                         // #167885:224:107 [L d1 h1 c1]
  cell[23] = arr_v28;                                   // #167887:6:195 [L d1 h1 c1]
  v29 = false;                                          // #167890:34:233 [L d1 h1 c1]
  cell[24] = false;                                     // #167893:192:195 [L d1 h1 c1]
  v30 = false;                                          // #167896:116:233 [L d1 h1 c1]
  cell[25] = false;                                     // #167899:74:195 [L d1 h1 c1]
  v31 = false;                                          // #167902:86:233 [L d1 h1 c1]
  cell[26] = false;                                     // #167905:36:195 [L d1 h1 c1]
  console_v32 = win_v428.console;                       // #167908:107:200 #167913:108:150 [L d1 h1 c1]
  v33 = "";                                             // #167916:112:233 [L d1 h1 c1]
  v34 = console_v32.groupCollapsed("");                 // #167920:193:138 [L d1 h1 c1]
  fn_v35 = clos;                                        // #167947:164:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v35 = its home register (H139 CLOS bind)
  v36 = fn_v35();                                       // #167962:48:113 [L d1 h1 c1]
  arr_v37 = cell[20];                                   // #167966:219:236 [L d1 h1 c1]
  arr_v38 = cell[20];                                   // #167969:28:150 [L d1 h1 c1]
  v39 = arr_v38.push(v36);                              // #167972:189:138 [L d1 h1 c1]
  elIFrame_v40 = cell[1][KP(m167988k189)]();            // #167989:242:66 [L d1 h1 c1]
  cell[28] = elIFrame_v40;                              // #168007:80:195 [L d1 h1 c1]
  win_v41 = elIFrame_v40.contentWindow;                 // #168010:231:200 [L d1 h1 c1]
  console_v435 = win_v41.console;                       // #168015:226:200 [L d1 h1 c1]
  fn_v42 = clos;                                        // #168020:129:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v42 = its home register (H139 CLOS bind)
  v43 = cell[19];                                       // #168038:40:236 [L d1 h1 c1]
  v44 = "yCNNi5";                                       // #168041:60:233 [L d1 h1 c1]
  arr_v45 = [];                                         // #168051:250:107 [L d1 h1 c1]
  v46 = undefined;                                      // #168053:70:233 [L d1 h1 c1]
  console_v47 = win_v428.console;                       // #168056:133:200 [L d1 h1 c1]
  v48 = MC(undefined, fn_v42, console_v47);             // #168061:10:114 [L d1 h1 c1]
  v49 = 0; arr_v45[0] = v48;                            // #168066:195:26 [L d1 h1 c1]
  v50 = fn_v42(console_v435);                           // #168071:147:113 [L d1 h1 c1]
  v51 = 1; arr_v45[1] = v50;                            // #168076:104:26 [L d1 h1 c1]
  v43.yCNNi5 = arr_v45;                                 // #168081:98:199 [L d1 h1 c1]
  fn_v52 = clos;                                        // #168085:1:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v52 = its home register (H139 CLOS bind)
  arr_v53 = [];                                         // #168102:235:107 [L d1 h1 c1]
  v54 = 0;                                              // #168104:86:72 [L d1 h1 c1]
  v55 = 1;                                              // #168107:213:72 [L d1 h1 c1]
  v56 = 6;                                              // #168110:24:72 [L d1 h1 c1]
  v57 = undefined;                                      // #168113:108:233 [L d1 h1 c1]
  v58 = "console";                                      // #168116:112:233 [L d1 h1 c1]
  v59 = undefined;                                      // #168121:100:233 [L d1 h1 c1] +#168124:164:53
  for (;;) {
    v61 = v54 < v56; if (v54 < v56) {                   // #168139:130:186 [L d7 h7 c7]
      arr_v62 = arr_v53;                                // #168157:154:150 [L d6 h6 c6]
      fn_v63 = arr_v62[v462];                           // #168160:140:7 [L d6 h6 c6]
      console_v64 = win_v428.console;                   // #168164:54:7 [L d6 h6 c6]
      v65 = MC(undefined, fn_v52, console_v64, v54);    // #168168:21:168 [L d6 h6 c6]
      v66 = fn_v63.call(arr_v62, v65);                  // #168174:18:138 [L d6 h6 c6]
      arr_v67 = arr_v53;                                // #168192:55:150 [L d6 h6 c6]
      fn_v68 = arr_v67[v462];                           // #168195:245:7 [L d6 h6 c6]
      v69 = MC(undefined, fn_v52, console_v435, v54);   // #168199:152:168 [L d6 h6 c6]
      v70 = fn_v68.call(arr_v67, v69);                  // #168205:73:138 [L d6 h6 c6]
      v60 = v54; v54 = v54 + 1;                         // #168223:53:53 #168129:25:48 [L d6 h6 c6]
    } else {
      v71 = cell[19];                                   // #168228:45:236 [L d1 h1 c1]
      v71.COUZf0 = arr_v53;                             // #168231:190:142 [L d1 h1 c1]
      arr_v72 = [];                                     // #168241:244:107 [L d1 h1 c1]
      cell[32] = arr_v72;                               // #168243:202:195 [L d1 h1 c1]
      fn_v73 = clos;                                    // #168246:201:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v73 = its home register (H139 CLOS bind)
      v74 = 0;                                          // #168262:60:72 [L d1 h1 c1]
      v75 = undefined;                                  // #168265:0:233 [L d1 h1 c1]
      v76 = undefined;                                  // #168268:180:233 [L d1 h1 c1]
      v77 = 1;                                          // #168271:59:72 [L d1 h1 c1]
      v78 = 3;                                          // #168274:102:72 [L d1 h1 c1]
      v79 = 2;                                          // #168277:165:72 [L d1 h1 c1]
      v80 = 2;                                          // #168280:168:72 [L d1 h1 c1]
      v81 = 1;                                          // #168283:95:72 [L d1 h1 c1]
      v82 = "console";                                  // #168286:87:233 [L d1 h1 c1]
      v83 = "document";                                 // #168291:111:233 [L d1 h1 c1]
      v84 = "contentDocument";                          // #168296:39:233 [L d1 h1 c1] +#168301:27:53
      for (;;) {
        v86 = v74 < v78; if (v74 < v78) {               // #168316:226:186 [L d4 h4 c4]
          console_v87 = win_v428.console; doc_v88 = win_v428.document;  // #168334:4:38 [L d3 h3 c3]
          v89 = 2 * v74;                                // #168340:60:13 [L d3 h3 c3]
          v90 = MC(undefined, fn_v73, doc_v88, console_v87, v74, v89);  // #168344:75:16 [L d3 h3 c3]
          elIFrame_v91 = cell[28];                      // #168353:74:236 [L d3 h3 c3]
          doc_v92 = elIFrame_v91.contentDocument;       // #168356:124:7 [L d3 h3 c3]
          v93 = v74 * 2;                                // #168360:212:13 [L d3 h3 c3]
          v94 = v93 + 1;                                // #168364:153:222 [L d3 h3 c3]
          v95 = MC(undefined, fn_v73, doc_v92, console_v435, v74, v94);  // #168368:116:16 [L d3 h3 c3]
          v85 = v74; v74 = v74 + 1;                     // #168377:116:53 #168306:59:48 [L d3 h3 c3]
        } else {
          v96 = cell[19];                               // #168382:241:236 [L d1 h1 c1]
          v97 = "arqA7";                                // #168385:33:233 [L d1 h1 c1]
          arr_v98 = cell[32];                           // #168394:72:236 [L d1 h1 c1]
          v96.arqA7 = cell[32];                         // #168397:194:199 [L d1 h1 c1]
          v99 = "TsnFY8";                               // #168401:238:233 [L d1 h1 c1]
          v100 = "eCMdu1";                              // #168411:106:233 [L d1 h1 c1]
          v96.TsnFY8 = "eCMdu1";                        // #168421:220:199 [L d1 h1 c1]
          v101 = "agmL8";                               // #168425:32:233 [L d1 h1 c1]
          v102 = "ldmFf7";                              // #168434:84:233 [L d1 h1 c1]
          v96.agmL8 = "ldmFf7";                         // #168444:158:199 [L d1 h1 c1]
          re_v103 = /.*.*=.*/;                          // #168448:90:233 [L d1 h1 c1]
          v104 = "toString";                            // #168460:38:233 [L d1 h1 c1]
          fn_v105 = clos;                               // #168465:181:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v105 = its home register (H139 CLOS bind)
          re_v103[v104] = fn_v105;                      // #168474:187:199 [L d1 h1 c1]
          console_v106 = win_v428.console;              // #168478:102:200 [L d1 h1 c1]
          console_v107 = console_v106;                  // #168483:59:150 [L d1 h1 c1]
          v108 = console_v107.log(re_v103);             // #168486:32:138 [L d1 h1 c1]
          v109 = cell[24];                              // #168502:11:236 [L d1 h1 c1]
          if (v109) {                                   // #168505:238:160 [L d1 h1 c1]
            v110 = cell[19];                            // #168516:165:236 [X 4]
            v111 = "TsnFY8";                            // #168519:5:233 [X 4]
            v112 = "QEZg7";                             // #168529:229:233 [X 4]
            v110.TsnFY8 = "QEZg7";                      // #168538:43:199 [X 4]
            v113 = cell[23];                            // #168542:170:236 [X 4]
            v114 = cell[23];                            // #168545:111:150 [X 4]
            v115 = v114[v462];                          // #168548:77:7 [X 4]
            v116 = "lBhq6";                             // #168552:13:233 [X 4]
            v117 = v115.call(v114, "lBhq6");            // #168561:42:138 [X 4] +#168579:210:53
          } else {
            // #168511:134:53 [L d1 h1 c1]
          }
          v118 = false;                                 // #168584:146:233 [L d1 h1 c1]
          cell[24] = false;                             // #168587:112:195 [L d1 h1 c1]
          console_v119 = console_v435;                  // #168590:157:150 [L d1 h1 c1]
          v120 = console_v119.log(re_v103);             // #168593:122:138 [L d1 h1 c1]
          v121 = cell[24];                              // #168609:125:236 [L d1 h1 c1]
          if (v121) {                                   // #168612:24:160 [L d1 h1 c1]
            v122 = cell[19];                            // #168623:241:236 [X 4]
            v123 = "agmL8";                             // #168626:33:233 [X 4]
            v124 = "tedVy6";                            // #168635:145:233 [X 4]
            v122.agmL8 = "tedVy6";                      // #168645:39:199 [X 4]
            v125 = cell[23];                            // #168649:182:236 [X 4]
            v126 = cell[23];                            // #168652:75:150 [X 4]
            v127 = v126[v462];                          // #168655:185:7 [X 4]
            v128 = "lBhq6";                             // #168659:201:233 [X 4]
            v129 = v127.call(v126, "lBhq6");            // #168668:246:138 [X 4] +#168686:110:53
          } else {
            // #168618:136:53 [L d1 h1 c1]
          }
          fn_v130 = clos;                               // #168691:133:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v130 = its home register (H139 CLOS bind)
          fn_v131 = fn_v130;                            // #168700:158:150 [L d1 h1 c1]
          v132 = "toString";                            // #168703:90:233 [L d1 h1 c1]
          fn_v133 = clos;                               // #168708:25:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v133 = its home register (H139 CLOS bind)
          fn_v131[v132] = fn_v133;                      // #168717:143:199 [L d1 h1 c1]
          console_v134 = win_v428.console;              // #168721:234:200 [L d1 h1 c1]
          console_v135 = console_v134;                  // #168726:175:150 [L d1 h1 c1]
          v136 = console_v135.log(fn_v131);             // #168729:196:138 [L d1 h1 c1]
          v137 = cell[25];                              // #168745:31:236 [L d1 h1 c1]
          if (v137) {                                   // #168748:178:160 [L d1 h1 c1]
            v139 = cell[23];                            // #168767:211:236 [X 4]
            v140 = cell[23];                            // #168770:52:150 [X 4]
            v141 = v140[v462];                          // #168773:62:7 [X 4]
            v142 = "mutx6";                             // #168777:122:233 [X 4]
            v143 = v141.call(v140, "mutx6");            // #168786:35:138 #168804:68:150 [X 4] +#168807:4:53
          } else {
            v138 = v137;                                // #168754:58:53 #168759:225:150 [L d1 h1 c1] +#168762:109:53
          }
          v144 = false;                                 // #168812:31:233 [L d1 h1 c1]
          cell[25] = false;                             // #168815:9:195 [L d1 h1 c1]
          console_v145 = console_v435;                  // #168818:18:150 [L d1 h1 c1]
          v146 = console_v145.log(fn_v131);             // #168821:91:138 [L d1 h1 c1]
          v147 = cell[25];                              // #168837:26:236 [L d1 h1 c1]
          if (v147) {                                   // #168840:129:160 [L d1 h1 c1]
            v148 = cell[23];                            // #168859:173:236 [X 4]
            v149 = cell[23];                            // #168862:38:150 [X 4]
            v150 = v149[v462];                          // #168865:232:7 [X 4]
            v151 = "mutx6";                             // #168869:252:233 [X 4]
            v152 = v150.call(v149, "mutx6");            // #168878:29:138 [X 4] +#168896:214:150 +#168899:206:53
          } else {
            // #168846:141:53 #168851:197:150 #168854:193:53 [L d1 h1 c1]
          }
          v153 = cell[19];                              // #168904:70:236 [L d1 h1 c1]
          v154 = "ClXn8";                               // #168907:98:233 [L d1 h1 c1]
          v155 = "fuNGU7";                              // #168916:14:233 [L d1 h1 c1]
          v153.ClXn8 = "fuNGU7";                        // #168926:240:199 [L d1 h1 c1]
          doc_v156 = win_v428.document;                 // #168930:7:200 #168935:152:150 [L d1 h1 c1]
          v157 = "a";                                   // #168938:236:233 [L d1 h1 c1]
          elAnchor_v158 = doc_v156.createElement("a");  // #168943:77:138 [L d1 h1 c1]
          fn_v159 = win_v428.Object;                    // #168969:48:200 [L d1 h1 c1]
          fn_v160 = fn_v159;                            // #168974:93:150 [L d1 h1 c1]
          fn_v161 = fn_v159.defineProperty;             // #168977:0:200 [L d1 h1 c1]
          v162 = "id";                                  // #168982:180:233 [L d1 h1 c1]
          v163 = {};                                    // #168988:246:159 [L d1 h1 c1]
          v164 = "get";                                 // #168990:82:233 [L d1 h1 c1]
          fn_v165 = clos;                               // #168995:49:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v165 = its home register (H139 CLOS bind)
          v163[v164] = fn_v165;                         // #169004:71:199 [L d1 h1 c1]
          v166 = "configurable";                        // #169008:159:233 [L d1 h1 c1]
          v167 = false;                                 // #169013:151:233 [L d1 h1 c1]
          v163.configurable = false;                    // #169016:149:199 [L d1 h1 c1]
          v168 = "enumerable";                          // #169020:53:233 [L d1 h1 c1]
          v169 = false;                                 // #169025:85:233 [L d1 h1 c1]
          v163.enumerable = false;                      // #169028:219:199 [L d1 h1 c1]
          elAnchor_v170 = fn_v161.call(fn_v160, elAnchor_v158, v162, v163);  // #169032:64:138 [L d1 h1 c1]
          console_v171 = win_v428.console;              // #169062:23:200 [L d1 h1 c1]
          console_v172 = console_v171;                  // #169067:104:150 [L d1 h1 c1]
          v173 = console_v172.log(elAnchor_v158);       // #169070:217:138 [L d1 h1 c1]
          v174 = cell[26];                              // #169086:32:236 [L d1 h1 c1]
          if (v174) {                                   // #169089:239:160 [L d1 h1 c1]
            v175 = cell[19];                            // #169100:241:236 [-] /* never executed in any replay */
            v176 = "ClXn8";                             // #169103:33:233 [-] /* never executed in any replay */
            v177 = "vdSm4";                             // #169112:145:233 [-] /* never executed in any replay */
            v175.ClXn8 = "vdSm4";                       // #169121:39:199 [-] /* never executed in any replay */
            v178 = cell[23];                            // #169125:182:236 [-] /* never executed in any replay */
            v179 = cell[23];                            // #169128:75:150 [-] /* never executed in any replay */
            v180 = v179[v462];                          // #169131:185:7 [-] /* never executed in any replay */
            v181 = "TTqxD4";                            // #169135:201:233 [-] /* never executed in any replay */
            v182 = v180.call(v179, "TTqxD4");           // #169145:246:138 [-] +#169163:110:53 /* never executed in any replay */
          } else {
            // #169095:195:53 [L d1 h1 c1]
          }
          v183 = false;                                 // #169168:91:233 [L d1 h1 c1]
          cell[26] = false;                             // #169171:85:195 [L d1 h1 c1]
          console_v184 = console_v435;                  // #169174:46:150 [L d1 h1 c1]
          v185 = console_v184.log(elAnchor_v158);       // #169177:7:138 [L d1 h1 c1]
          v186 = cell[26];                              // #169193:22:236 [L d1 h1 c1]
          if (v186) {                                   // #169196:141:160 [L d1 h1 c1]
            v187 = cell[19];                            // #169207:59:236 [-] /* never executed in any replay */
            v188 = "ClXn8";                             // #169210:195:233 [-] /* never executed in any replay */
            v189 = "vdSm4";                             // #169219:43:233 [-] /* never executed in any replay */
            v187.ClXn8 = "vdSm4";                       // #169228:217:199 [-] /* never executed in any replay */
            v190 = cell[23];                            // #169232:32:236 [-] /* never executed in any replay */
            v191 = cell[23];                            // #169235:141:150 [-] /* never executed in any replay */
            v192 = v191[v462];                          // #169238:115:7 [-] /* never executed in any replay */
            v193 = "TTqxD4";                            // #169242:27:233 [-] /* never executed in any replay */
            v194 = v192.call(v191, "TTqxD4");           // #169252:128:138 [-] +#169270:80:53 /* never executed in any replay */
          } else {
            // #169202:105:53 [L d1 h1 c1]
          }
          v195 = {};                                    // #169275:175:159 [L d1 h1 c1]
          v196 = "ownKeys";                             // #169277:103:233 [L d1 h1 c1]
          fn_v197 = clos;                               // #169288:50:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v197 = its home register (H139 CLOS bind)
          v195[v196] = fn_v197;                         // #169301:132:199 [L d1 h1 c1]
          fn_v198 = win_v428.Proxy;                     // #169305:75:200 [L d1 h1 c1]
          v199 = {};                                    // #169314:241:159 [L d1 h1 c1]
          v200 = new fn_v198(v199, v195);               // #169316:217:1 [L d1 h1 c1]
          fn_v201 = win_v428.Object;                    // #169322:140:200 [L d1 h1 c1]
          fn_v202 = fn_v201;                            // #169327:73:150 [L d1 h1 c1]
          v203 = fn_v202.create(v200);                  // #169330:118:138 [L d1 h1 c1]
          fn_v204 = win_v428[v430];                     // #169349:248:7 [L d1 h1 c1]
          err_v205 = new fn_v204();                     // #169353:132:1 [L d1 h1 c1]
          fn_v206 = win_v428.Object;                    // #169357:75:200 [L d1 h1 c1]
          fn_v207 = fn_v206;                            // #169362:204:150 [L d1 h1 c1]
          fn_v208 = fn_v206.defineProperty;             // #169365:115:200 [L d1 h1 c1]
          v209 = "name";                                // #169370:27:233 [L d1 h1 c1]
          v210 = {};                                    // #169375:129:159 [L d1 h1 c1]
          v211 = "get";                                 // #169377:113:233 [L d1 h1 c1]
          fn_v212 = clos;                               // #169382:148:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v212 = its home register (H139 CLOS bind)
          v210[v211] = fn_v212;                         // #169395:222:199 [L d1 h1 c1]
          v213 = "configurable";                        // #169399:154:233 [L d1 h1 c1]
          v214 = false;                                 // #169404:102:233 [L d1 h1 c1]
          v210.configurable = false;                    // #169407:232:199 [L d1 h1 c1]
          v215 = "enumerable";                          // #169411:252:233 [L d1 h1 c1]
          v216 = false;                                 // #169416:192:233 [L d1 h1 c1]
          v210.enumerable = false;                      // #169419:90:199 [L d1 h1 c1]
          err_v217 = fn_v208.call(fn_v207, err_v205, v209, v210);  // #169423:131:138 [L d1 h1 c1]
          fn_v218 = win_v428.Object;                    // #169453:14:200 [L d1 h1 c1]
          fn_v219 = fn_v218;                            // #169458:67:150 [L d1 h1 c1]
          fn_v220 = fn_v218.defineProperty;             // #169461:206:200 [L d1 h1 c1]
          v221 = "message";                             // #169466:202:233 [L d1 h1 c1]
          v222 = {};                                    // #169471:52:159 [L d1 h1 c1]
          v223 = "get";                                 // #169473:24:233 [L d1 h1 c1]
          fn_v224 = clos;                               // #169478:95:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v224 = its home register (H139 CLOS bind)
          v222[v223] = fn_v224;                         // #169491:61:199 [L d1 h1 c1]
          v225 = "configurable";                        // #169495:61:233 [L d1 h1 c1]
          v226 = false;                                 // #169500:61:233 [L d1 h1 c1]
          v222.configurable = false;                    // #169503:35:199 [L d1 h1 c1]
          v227 = "enumerable";                          // #169507:11:233 [L d1 h1 c1]
          v228 = false;                                 // #169512:83:233 [L d1 h1 c1]
          v222.enumerable = false;                      // #169515:97:199 [L d1 h1 c1]
          err_v229 = fn_v220.call(fn_v219, err_v205, v221, v222);  // #169519:46:138 [L d1 h1 c1]
          fn_v230 = win_v428.Object;                    // #169549:205:200 [L d1 h1 c1]
          fn_v231 = fn_v230;                            // #169554:198:150 [L d1 h1 c1]
          fn_v232 = fn_v230.defineProperty;             // #169557:5:200 [L d1 h1 c1]
          v233 = "stack";                               // #169562:229:233 [L d1 h1 c1]
          v234 = {};                                    // #169567:163:159 [L d1 h1 c1]
          v235 = "get";                                 // #169569:139:233 [L d1 h1 c1]
          fn_v236 = clos;                               // #169574:198:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v236 = its home register (H139 CLOS bind)
          v234[v235] = fn_v236;                         // #169587:200:199 [L d1 h1 c1]
          v237 = "configurable";                        // #169591:92:233 [L d1 h1 c1]
          v238 = false;                                 // #169596:160:233 [L d1 h1 c1]
          v234.configurable = false;                    // #169599:186:199 [L d1 h1 c1]
          v239 = "enumerable";                          // #169603:6:233 [L d1 h1 c1]
          v436 = false;                                 // #169608:34:233 [L d1 h1 c1]
          v234.enumerable = false;                      // #169611:180:199 [L d1 h1 c1]
          err_v437 = fn_v232.call(fn_v231, err_v205, v233, v234);  // #169615:245:138 [L d1 h1 c1]
          arr_v240 = [];                                // #169645:15:107 [L d1 h1 c1]
          arr_v241 = [];                                // #169647:65:107 [L d1 h1 c1]
          v242 = "count";                               // #169649:49:233 [L d1 h1 c1]
          v243 = 0; arr_v241[0] = "count";              // #169658:14:26 [L d1 h1 c1]
          v244 = "vNTW0";                               // #169663:10:233 [L d1 h1 c1]
          v245 = 1; arr_v241[1] = "vNTW0";              // #169672:195:26 [L d1 h1 c1]
          arr_v246 = arr_v241;                          // #169677:100:150 [L d1 h1 c1]
          v247 = 0; arr_v240[0] = arr_v246;             // #169680:53:26 [L d1 h1 c1]
          arr_v248 = [];                                // #169685:79:107 [L d1 h1 c1]
          v249 = "countReset";                          // #169687:135:233 [L d1 h1 c1]
          v250 = 0; arr_v248[0] = "countReset";         // #169692:140:26 [L d1 h1 c1]
          v251 = "xRuc8";                               // #169697:16:233 [L d1 h1 c1]
          v252 = 1; arr_v248[1] = "xRuc8";              // #169706:49:26 [L d1 h1 c1]
          arr_v253 = arr_v248;                          // #169711:154:150 [L d1 h1 c1]
          v254 = 1; arr_v240[1] = arr_v253;             // #169714:19:26 [L d1 h1 c1]
          arr_v255 = [];                                // #169719:53:107 [L d1 h1 c1]
          v256 = "debug";                               // #169721:85:233 [L d1 h1 c1]
          v257 = 0; arr_v255[0] = "debug";              // #169730:162:26 [L d1 h1 c1]
          v258 = "OcBQA9";                              // #169735:78:233 [L d1 h1 c1]
          v259 = 1; arr_v255[1] = "OcBQA9";             // #169745:247:26 [L d1 h1 c1]
          arr_v260 = arr_v255;                          // #169750:200:150 [L d1 h1 c1]
          v261 = 2; arr_v240[2] = arr_v260;             // #169753:9:26 [L d1 h1 c1]
          arr_v262 = [];                                // #169758:211:107 [L d1 h1 c1]
          v263 = "dir";                                 // #169760:251:233 [L d1 h1 c1]
          v264 = 0; arr_v262[0] = "dir";                // #169767:48:26 [L d1 h1 c1]
          v265 = "xUId7";                               // #169772:36:233 [L d1 h1 c1]
          v266 = 1; arr_v262[1] = "xUId7";              // #169781:245:26 [L d1 h1 c1]
          arr_v267 = arr_v262;                          // #169786:78:150 [L d1 h1 c1]
          v268 = 3; arr_v240[3] = arr_v267;             // #169789:247:26 [L d1 h1 c1]
          arr_v269 = [];                                // #169794:137:107 [L d1 h1 c1]
          v270 = "dirxml";                              // #169796:89:233 [L d1 h1 c1]
          v271 = 0; arr_v269[0] = "dirxml";             // #169806:150:26 [L d1 h1 c1]
          v272 = "yCML1";                               // #169811:114:233 [L d1 h1 c1]
          v273 = 1; arr_v269[1] = "yCML1";              // #169820:139:26 [L d1 h1 c1]
          arr_v274 = arr_v269;                          // #169825:12:150 [L d1 h1 c1]
          v275 = 4; arr_v240[4] = arr_v274;             // #169828:61:26 [L d1 h1 c1]
          arr_v276 = [];                                // #169833:55:107 [L d1 h1 c1]
          v277 = "error";                               // #169835:207:233 [L d1 h1 c1]
          v278 = 0; arr_v276[0] = "error";              // #169840:180:26 [L d1 h1 c1]
          v279 = "sKJoA4";                              // #169845:152:233 [L d1 h1 c1]
          v280 = 1; arr_v276[1] = "sKJoA4";             // #169855:153:26 [L d1 h1 c1]
          arr_v281 = arr_v276;                          // #169860:98:150 [L d1 h1 c1]
          v282 = 5; arr_v240[5] = arr_v281;             // #169863:187:26 [L d1 h1 c1]
          arr_v283 = [];                                // #169868:61:107 [L d1 h1 c1]
          v284 = "info";                                // #169870:61:233 [L d1 h1 c1]
          v285 = 0; arr_v283[0] = "info";               // #169875:234:26 [L d1 h1 c1]
          v286 = "jOBGH8";                              // #169880:118:233 [L d1 h1 c1]
          v287 = 1; arr_v283[1] = "jOBGH8";             // #169890:127:26 [L d1 h1 c1]
          arr_v288 = arr_v283;                          // #169895:48:150 [L d1 h1 c1]
          v289 = 6; arr_v240[6] = arr_v288;             // #169898:209:26 [L d1 h1 c1]
          arr_v290 = [];                                // #169903:123:107 [L d1 h1 c1]
          v291 = "log";                                 // #169905:3:233 [L d1 h1 c1]
          v292 = 0; arr_v290[0] = "log";                // #169912:24:26 [L d1 h1 c1]
          v293 = "TCPSw6";                              // #169917:108:233 [L d1 h1 c1]
          v294 = 1; arr_v290[1] = "TCPSw6";             // #169927:29:26 [L d1 h1 c1]
          arr_v295 = arr_v290;                          // #169932:214:150 [L d1 h1 c1]
          v296 = 7; arr_v240[7] = arr_v295;             // #169935:95:26 [L d1 h1 c1]
          arr_v297 = [];                                // #169940:81:107 [L d1 h1 c1]
          v298 = "table";                               // #169942:1:233 [L d1 h1 c1]
          v299 = 0; arr_v297[0] = "table";              // #169951:158:26 [L d1 h1 c1]
          v300 = "mudtX7";                              // #169956:90:233 [L d1 h1 c1]
          v301 = 1; arr_v297[1] = "mudtX7";             // #169966:211:26 [L d1 h1 c1]
          arr_v302 = arr_v297;                          // #169971:52:150 [L d1 h1 c1]
          v303 = 8; arr_v240[8] = arr_v302;             // #169974:197:26 [L d1 h1 c1]
          arr_v304 = [];                                // #169979:159:107 [L d1 h1 c1]
          v305 = "trace";                               // #169981:151:233 [L d1 h1 c1]
          v306 = 0; arr_v304[0] = "trace";              // #169990:92:26 [L d1 h1 c1]
          v307 = "Isljr4";                              // #169995:160:233 [L d1 h1 c1]
          v308 = 1; arr_v304[1] = "Isljr4";             // #170005:129:26 [L d1 h1 c1]
          arr_v309 = arr_v304;                          // #170010:170:150 [L d1 h1 c1]
          v310 = 9; arr_v240[9] = arr_v309;             // #170013:227:26 [L d1 h1 c1]
          arr_v311 = [];                                // #170018:197:107 [L d1 h1 c1]
          v312 = "warn";                                // #170020:165:233 [L d1 h1 c1]
          v313 = 0; arr_v311[0] = "warn";               // #170028:178:26 [L d1 h1 c1]
          v438 = "AONvF9";                              // #170033:30:233 [L d1 h1 c1]
          v314 = 1; arr_v311[1] = "AONvF9";             // #170043:135:26 [L d1 h1 c1]
          arr_v439 = arr_v311;                          // #170048:24:150 [L d1 h1 c1]
          v315 = 10; arr_v240[10] = arr_v439;           // #170051:25:26 [L d1 h1 c1]
          arr_v316 = arr_v240;                          // #170056:226:150 [L d1 h1 c1]
          v440 = 0;                                     // #170059:49:72 [L d1 h1 c1]
          v441 = "length";                              // #170062:97:233 [L d1 h1 c1]
          v442 = "console";                             // #170067:209:233 [L d1 h1 c1]
          v443 = "console";                             // #170072:129:233 [L d1 h1 c1]
          v444 = "console";                             // #170077:113:233 [L d1 h1 c1]
          v445 = "console";                             // #170082:161:233 [L d1 h1 c1]
          v446 = "countReset";                          // #170087:17:233 [L d1 h1 c1]
          v447 = "font-size:0;color:transparent";       // #170092:193:233 [L d1 h1 c1]
          v448 = "font-size:0;color:transparent";       // #170097:177:233 [L d1 h1 c1]
          v449 = "font-size:0;color:transparent";       // #170102:225:233 [L d1 h1 c1]
          v317 = "font-size:0;color:transparent";       // #170107:81:233 [L d1 h1 c1] +#170112:29:53
          while ((v450 = arr_v316.length, v320 = v440 < v450, v440 < v450)) {  // #170130:5:7 | #170134:178:186 [L d12 h12 c12]
            arr_v321 = arr_v316[v440];                  // #170152:219:7 [L d11 h11 c11]
            v322 = 0;                                   // #170156:134:72 [L d11 h11 c11]
            v451 = arr_v321[0];                         // #170159:200:7 [L d11 h11 c11]
            arr_v323 = arr_v316[v440];                  // #170163:130:7 [L d11 h11 c11]
            v324 = 1;                                   // #170167:81:72 [L d11 h11 c11]
            v325 = arr_v323[1];                         // #170170:39:7 [L d11 h11 c11]
            cell[22] = v325;                            // #170174:241:195 [L d11 h11 c11]
            try {
              TP(tryStack, 170421, 193, callDepths);               // #170177:214:194 [L d11 h11 c11]  try: pushes the catch arm of the enclosing try (TP)
              v326 = "count";                           // #170183:178:233 [L d11 h11 c11]
              v327 = ("count") === v451;                // #170192:22:65 [L d11 h11 c11]
              if (v327) {                               // #170196:141:160 [L d11 h11 c11]
                v329 = v327;                            // #170219:35:150 [L d1 h1 c1] +#170222:39:53
              } else {
                v328 = "countReset" === v451;           // #170202:105:53 #170207:95:65 [L d10 h10 c10]
                v329 = v328;                            // #170211:144:150 [L d10 h10 c10] +#170214:32:53
              }
              if (v329) {                               // #170227:30:160 [L d11 h11 c11]
                console_v349 = win_v428.console;        // #170367:197:7 [L d2 h2 c2]
                console_v350 = console_v349;            // #170371:222:150 [L d2 h2 c2]
                fn_v351 = console_v350[v451];           // #170374:192:7 [L d2 h2 c2]
                v352 = KP(170377);                      // #170378:116:233 [L d2 h2 c2]
                v353 = fn_v351.call(console_v350, v352, err_v205);    // #170383:163:16 [L d2 h2 c2]
                console_v354 = console_v435;            // #170390:196:150 [L d2 h2 c2]
                fn_v355 = console_v354[v451];           // #170393:142:7 [L d2 h2 c2]
                v356 = KP(170396);                      // #170397:138:233 [L d2 h2 c2]
                v357 = fn_v355.call(console_v354, v356, err_v205);    // #170402:225:16 [L d2 h2 c2] +#170409:109:53
              } else {
                v330 = "dir";                           // #170233:246:53 #170238:67:233 [L d9 h9 c9]
                if (v330 === v451) {                    // #170245:131:161 [L d9 h9 c9]
                  console_v331 = win_v428.console;      // #170262:83:7 [L d1 h1 c1]
                  console_v332 = console_v331;          // #170266:180:150 [L d1 h1 c1]
                  fn_v333 = console_v332[v451];         // #170269:190:7 [L d1 h1 c1]
                  v334 = "";                            // #170273:250:233 [L d1 h1 c1]
                  v335 = fn_v333.call(console_v332, "", err_v205);    // #170277:145:16 [L d1 h1 c1]
                  console_v336 = console_v435;          // #170284:122:150 [L d1 h1 c1]
                  fn_v337 = console_v336[v451];         // #170287:236:7 [L d1 h1 c1]
                  v338 = "";                            // #170291:240:233 [L d1 h1 c1]
                  v339 = fn_v337.call(console_v336, "", err_v205);    // #170295:47:16 [L d1 h1 c1] +#170302:3:53
                } else {
                  console_v340 = win_v428.console;      // #170307:18:7 [L d8 h8 c8]
                  console_v341 = console_v340;          // #170311:55:150 [L d8 h8 c8]
                  fn_v342 = console_v341[v451];         // #170314:245:7 [L d8 h8 c8]
                  v343 = "%c%d";                        // #170318:21:233 [L d8 h8 c8]
                  v344 = fn_v342.call(console_v341, "%c%d", "font-size:0;color:transparent", err_v205);    // #170326:0:16 [L d8 h8 c8]
                  console_v345 = console_v435;          // #170334:237:150 [L d8 h8 c8]
                  fn_v346 = console_v345[v451];         // #170337:83:7 [L d8 h8 c8]
                  v347 = "%c%d";                        // #170341:123:233 [L d8 h8 c8]
                  v348 = fn_v346.call(console_v345, "%c%d", "font-size:0;color:transparent", err_v205);    // #170349:78:16 [L d8 h8 c8] +#170357:102:53
                }
              }
              arr_v358 = tryStack.pop();                     // #170414:93:124 [L d11 h11 c11] +#170417:249:53
              try {
                TP(tryStack, 170561, 218, callDepths);             // #170498:62:194 [L d11 h11 c11]  try: pushes the catch arm of the enclosing try (TP)
                console_v370 = win_v428.console;        // #170504:160:7 [L d11 h11 c11]
                console_v371 = console_v370;            // #170508:13:150 [L d11 h11 c11]
                fn_v372 = console_v371[v451];           // #170511:243:7 [L d11 h11 c11]
                v373 = "%c%o";                          // #170515:155:233 [L d11 h11 c11]
                v374 = fn_v372.call(console_v371, "%c%o", "font-size:0;color:transparent", v203);    // #170523:238:16 [L d11 h11 c11]
                console_v375 = console_v435;            // #170531:163:150 [L d11 h11 c11]
                fn_v452 = console_v375[v451];           // #170534:177:7 [L d11 h11 c11]
                v376 = "%c%o";                          // #170538:225:233 [L d11 h11 c11]
                v453 = fn_v452.call(console_v375, "%c%o", "font-size:0;color:transparent", v203);    // #170546:156:16 [L d11 h11 c11]
                arr_v377 = tryStack.pop();                   // #170554:231:124 [L d11 h11 c11]
                v318 = 1;                               // #170557:219:53 #170117:101:72 [L d11 h11 c11]
                v319 = v440; v440 = v440 + 1;           // #170120:176:48 [L d11 h11 c11]
              } catch (caught) {
                outside("L170564_223");                 // #170562:223:150 [-]  L170564_223 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
              }
            } catch (caught) {
              v359 = caught;                              // #170422:234:150 [-] /* never executed in any replay */
              v360 = cell[23];                          // #170425:45:236 [-] /* never executed in any replay */
              v361 = v360;                              // #170428:166:150 [-] /* never executed in any replay */
              v362 = v361[r223];                        // #170431:104:7 [-] /* never executed in any replay */
              v363 = KP(m170434k104);                   // #170435:124:233 [-] /* never executed in any replay */
              v364 = v362.call(v361, v363);             // #170444:157:138 [-] /* never executed in any replay */
              v365 = cell[23];                          // #170462:212:236 [-] /* never executed in any replay */
              v366 = v365;                              // #170465:113:150 [-] /* never executed in any replay */
              v367 = v366[r223];                        // #170468:199:7 [-] /* never executed in any replay */
              v368 = cell[22];                          // #170472:214:236 [-] /* never executed in any replay */
              v369 = v367.call(v366, v368);             // #170475:15:138 [-] /* never executed in any replay */
              outside("L170492_15");  // L170492_15 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
            }
          }
          v378 = "bfaB6";                               // #170575:196:233 [L d1 h1 c1]
          cell[22] = "bfaB6";                           // #170584:90:195 [L d1 h1 c1]
          v379 = cell[28][KP(m170586k90)]();            // #170587:91:66 [L d1 h1 c1]
          arr_v380 = cell[20];                          // #170605:26:236 [L d1 h1 c1]
          arr_v381 = cell[20];                          // #170608:31:150 [L d1 h1 c1]
          fn_v382 = arr_v381[v462];                     // #170611:61:7 [L d1 h1 c1]
          v383 = err_v205.name;                         // #170615:96:200 [L d1 h1 c1]
          v384 = fn_v382.call(arr_v381, v383);          // #170620:241:138 [L d1 h1 c1]
          arr_v385 = cell[20];                          // #170638:216:236 [L d1 h1 c1]
          arr_v386 = cell[20];                          // #170641:101:150 [L d1 h1 c1]
          fn_v387 = arr_v386[v462];                     // #170644:235:7 [L d1 h1 c1]
          v388 = err_v205.message;                      // #170648:214:200 [L d1 h1 c1]
          v454 = fn_v387.call(arr_v386, v388);          // #170653:15:138 [L d1 h1 c1]
          arr_v389 = cell[20];                          // #170671:254:236 [L d1 h1 c1]
          arr_v390 = cell[20];                          // #170674:115:150 [L d1 h1 c1]
          fn_v391 = arr_v390[v462];                     // #170677:65:7 [L d1 h1 c1]
          v392 = err_v205.stack;                        // #170681:84:200 [L d1 h1 c1]
          v455 = fn_v391.call(arr_v390, v392);          // #170686:21:138 [L d1 h1 c1]
          arr_v393 = cell[20];                          // #170704:108:236 [L d1 h1 c1]
          arr_v394 = cell[20];                          // #170707:169:150 [L d1 h1 c1]
          fn_v395 = arr_v394[v462];                     // #170710:31:7 [L d1 h1 c1]
          v396 = re_v103.toString();                    // #170714:116:138 [L d1 h1 c1]
          v456 = fn_v395.call(arr_v394, v396);          // #170734:181:138 [L d1 h1 c1]
          arr_v397 = cell[20];                          // #170752:140:236 [L d1 h1 c1]
          arr_v398 = cell[20];                          // #170755:73:150 [L d1 h1 c1]
          fn_v399 = arr_v398[v462];                     // #170758:63:7 [L d1 h1 c1]
          v400 = fn_v131.toString();                    // #170762:20:138 [L d1 h1 c1]
          v457 = fn_v399.call(arr_v398, v400);          // #170782:213:138 [L d1 h1 c1]
          arr_v401 = cell[20];                          // #170800:44:236 [L d1 h1 c1]
          arr_v402 = cell[20];                          // #170803:105:150 [L d1 h1 c1]
          fn_v403 = arr_v402[v462];                     // #170806:223:7 [L d1 h1 c1]
          v404 = elAnchor_v158.id;                      // #170810:250:200 [L d1 h1 c1]
          v405 = fn_v403.call(arr_v402, v404);          // #170816:163:138 [L d1 h1 c1]
          v406 = undefined;                             // #170834:139:233 [L d1 h1 c1]
          cell[22] = undefined;                         // #170837:197:195 [L d1 h1 c1]
          v407 = cell[1];                               // #170840:165:233 #170843:188:236 [L d1 h1 c1]
          v408 = cell[1].bmma1;                         // #170846:163:200 [L d1 h1 c1]
          arr_v409 = cell[20];                          // #170855:66:236 [L d1 h1 c1]
          arr_v410 = cell[20];                          // #170858:167:150 [L d1 h1 c1]
          v411 = arr_v410.push(v408);                   // #170861:220:138 [L d1 h1 c1]
          v412 = 21;                                    // #170878:195:72 [L d1 h1 c1]
          v413 = (21) === v408;                         // #170881:35:65 [L d1 h1 c1]
          cell[47] = v413;                              // #170885:253:195 [L d1 h1 c1]
          v458 = "BPcA0";                               // #170888:253:233 [L d1 h1 c1]
          cell[48] = "BPcA0";                           // #170897:239:195 [L d1 h1 c1]
          arr_v414 = [];                                // #170900:161:107 [L d1 h1 c1]
          v415 = 0; arr_v414[0] = "BPcA0";              // #170902:190:26 [L d1 h1 c1]
          v416 = 1; arr_v414[1] = "BPcA0";              // #170907:167:26 [L d1 h1 c1]
          v417 = 2; arr_v414[2] = "BPcA0";              // #170912:44:26 [L d1 h1 c1]
          v418 = 3; arr_v414[3] = "BPcA0";              // #170917:221:26 [L d1 h1 c1]
          arr_v419 = arr_v414;                          // #170922:150:150 [L d1 h1 c1]
          cell[49] = arr_v414;                          // #170925:100:195 [L d1 h1 c1]
          v459 = cell[19];                              // #170928:63:236 [L d1 h1 c1]
          v459.QAlM4 = arr_v419;                        // #170931:8:142 [L d1 h1 c1]
          if (v413) {                                   // #170940:55:160 [L d1 h1 c1]
            v420 = true;                                // #170951:112:233 [L d1 h1 c1]
            cell[50] = true;                            // #170954:86:195 [L d1 h1 c1]
            fn_v421 = clos;                             // #170957:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v421 = its home register (H139 CLOS bind)
            v434 = fn_v421;                             // #170970:190:150 [L d1 h1 c1] +#170973:22:53
          } else {
            // #170946:235:53 [-] /* never executed in any replay */
          }
          v422 = false;                                 // #170978:113:233 [L d1 h1 c1]
          cell[53] = false;                             // #170981:147:195 [L d1 h1 c1]
          fn_v423 = clos;                               // #170984:174:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v423 = its home register (H139 CLOS bind)
          cell[57] = fn_v423;                           // #171000:28:195 [L d1 h1 c1]
          fn_v424 = clos;                               // #171003:83:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v424 = its home register (H139 CLOS bind)
          cell[58] = fn_v424;                           // #171016:109:195 [L d1 h1 c1]
          console_v425 = win_v428.console;              // #171019:208:200 [L d1 h1 c1]
          v460 = console_v425.groupEnd();               // #171024:161:138 [L d1 h1 c1]
          v426 = cell[47];                              // #171044:200:236 [L d1 h1 c1]
          if (v426) {                                   // #171047:247:160 [L d1 h1 c1]
            v427 = v434();                              // #171067:210:113 [L d1 h1 c1] +#171071:218:53
          } else {
            r205 = cell[58]();                          // #171053:171:53 #171058:225:201 [-] +#171062:109:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
          }
          v461 = undefined;                             // #171076:79:233 [L d1 h1 c1]
          return v461;                                  // #171079:99:245 [L d1 h1 c1]
        }
      }
    }
  }
}