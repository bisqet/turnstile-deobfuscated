function fn_canvas_getImageData_43616(v236 /* r221 */, v511 /* r70 */) { // entry L43606_34; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 510 register webs used only inside this fn (no live-in, cross-call or table-made def; 275 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 3 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r202 */, v3 /* r205 */, v4 /* r205 */, canvas_v5 /* r204 */, v6 /* r202 */, v7 /* r202 */, ctx2d_v8 /* r202 */, v9 /* r204 */, v10 /* r204 */;
  let ctx2d_v11 /* r202 */, v12 /* r204 */, v13 /* r204 */, v14 /* r205 */, v15 /* r204 */, v16 /* r202 */, v17 /* r205 */, v18 /* r205 */, v19 /* r204 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r202 */, v23 /* r204 */, v24 /* r202 */, v25 /* r205 */, v26 /* r202 */, v27 /* r205 */, v28 /* r204 */, v29 /* r202 */, v30 /* r202 */;
  let v31 /* r202 */, v32 /* r202 */, v33 /* r204 */, v34 /* r202 */, v35 /* r205 */, v36 /* r205 */, v37 /* r204 */, v38 /* r205 */, v39 /* r202 */, v40 /* r204 */;
  let canvas_v41 /* r204 */, v42 /* r202 */, v43 /* r202 */, ctx2d_v44 /* r202 */, v45 /* r204 */, arr_v46 /* r205 */, v47 /* r204 */, v48 /* r204 */, v49 /* r205 */, ctx2d_v50 /* r202 */;
  let fn_v51 /* r202 */, v52 /* r204 */, v53 /* r205 */, v54 /* r204 */, v55 /* r205 */, v56 /* r202 */, v57 /* r205 */, arr_v58 /* r205 */, v59 /* r204 */, arr_v60 /* r202 */;
  let arr_v61 /* r204 */, ctx2d_v62 /* r202 */, ctx2d_v63 /* r205 */, arr_v64 /* r202 */, arr_v65 /* r205 */, arr_v66 /* r205 */, arr_v67 /* r204 */, v68 /* r202 */, v69 /* r202 */, arr_v70 /* r202 */;
  let v71 /* r204 */, arr_v72 /* r204 */, v73 /* r202 */, v74 /* r202 */, arr_v75 /* r202 */, v76 /* r204 */, arr_v77 /* r204 */, v78 /* r202 */, v79 /* r202 */, arr_v80 /* r202 */;
  let v81 /* r204 */, arr_v82 /* r204 */, v83 /* r202 */, v84 /* r202 */, arr_v85 /* r202 */, v86 /* r204 */, v87 /* r205 */, v88 /* r204 */, v89 /* r204 */, v90 /* r205 */;
  let v91 /* r204 */, v92 /* r202 */, v93 /* r205 */, v94 /* r205 */, v95 /* r205 */, arr_v96 /* r205 */, v97 /* r204 */, v98 /* r205 */, v99 /* r202 */, v100 /* r204 */;
  let arr_v101 /* r202 */, v102 /* r205 */, arr_v103 /* r202 */, v104 /* r205 */, v105 /* r202 */, v106 /* r205 */, imageData_v107 /* r202 */, arr_v108 /* r205 */, v109 /* r204 */, v110 /* r204 */;
  let v111 /* r204 */, v112 /* r204 */, v113 /* r204 */, v114 /* r204 */, v115 /* r204 */, v116 /* r204 */, v117 /* r204 */, v118 /* r204 */, v119 /* r204 */, v120 /* r204 */;
  let v121 /* r204 */, v122 /* r204 */, v123 /* r204 */, v124 /* r204 */, v125 /* r204 */, v126 /* r202 */, v127 /* r204 */, v128 /* r204 */, arr_v129 /* r205 */, arr_v130 /* r205 */;
  let v131 /* r204 */, arr_v132 /* r202 */, v133 /* r204 */, fn_v134 /* r205 */, fn_v135 /* r202 */, v136 /* r204 */, canvas_v137 /* r202 */, v138 /* r204 */, arr_v139 /* r204 */, arr_v140 /* r205 */;
  let v141 /* r204 */, fn_v142 /* r204 */, v143 /* r202 */, v144 /* r204 */, arr_v145 /* r202 */, v146 /* r204 */, v147 /* r204 */, canvas_v148 /* r204 */, v149 /* r202 */, v150 /* r202 */;
  let v151 /* r204 */, v152 /* r202 */, ctx2d_v153 /* r202 */, v154 /* r204 */, v155 /* r204 */, v156 /* r204 */, ctx2d_v157 /* r202 */, v158 /* r204 */, v159 /* r202 */, v160 /* r204 */;
  let v161 /* r204 */, ctx2d_v162 /* r202 */, v163 /* r204 */, v164 /* r204 */, v165 /* r204 */, ctx2d_v166 /* r202 */, v167 /* r204 */, v168 /* r202 */, v169 /* r204 */, v170 /* r204 */;
  let ctx2d_v171 /* r202 */, v172 /* r204 */, v173 /* r204 */, ctx2d_v174 /* r202 */, v175 /* r204 */, v176 /* r202 */, v177 /* r204 */, v178 /* r204 */, ctx2d_v179 /* r202 */, v180 /* r204 */;
  let v181 /* r204 */, v182 /* r204 */, ctx2d_v183 /* r202 */, v184 /* r204 */, v185 /* r202 */, ctx2d_v186 /* r202 */, v187 /* r204 */, v188 /* r202 */, ctx2d_v189 /* r202 */, v190 /* r204 */;
  let v191 /* r202 */, v192 /* r202 */, imageData_v193 /* r204 */, fn_v194 /* r202 */, v195 /* r204 */, fn_v196 /* r205 */, fn_v197 /* r202 */, v198 /* r204 */, canvas_v199 /* r202 */, v200 /* r204 */;
  let v201 /* r204 */, canvas_v202 /* r204 */, v203 /* r205 */, v204 /* r204 */, fn_v205 /* r204 */, v206 /* r205 */, v207 /* r204 */, imageBitmap_v208 /* r205 */, promise_v209 /* r205 */, arr_v210 /* r204 */;
  let fn_v211 /* r204 */, v212 /* r205 */, win_v213 /* r204 */, fn_v214 /* r205 */, win_v215 /* r205 */, win_v216 /* r202 */, canvas_v217 /* r204 */, promise_v218 /* r205 */, fn_v219 /* r202 */, promise_v220 /* r204 */;
  let fn_v221 /* r202 */, fn_v222 /* r205 */, arr_v223 /* r205 */, fn_v224 /* r205 */, fn_v225 /* r202 */, arr_v226 /* r205 */, buf_v227 /* r204 */, v228 /* r204 */, v229 /* r204 */, v230 /* r204 */;
  let promise_v231 /* r204 */, fn_v232 /* r205 */, err_v233 /* r205 */, v234 /* r204 */, v235 /* r205 */, v237 /* r238 */, v238 /* r244 */, v239 /* r237 */, v240 /* r192 */, v241 /* r254 */;
  let v242 /* r195 */, v243 /* r196 */, v244 /* r199 */, v245 /* r198 */, v246 /* r199 */, v247 /* r198 */, v248 /* r196 */, v249 /* r199 */, v250 /* r198 */, v251 /* r196 */;
  let v252 /* r199 */, v253 /* r198 */, v254 /* r196 */, v255 /* r195 */, v256 /* r199 */, v257 /* r198 */, uint8ClampedArray_v258 /* r193 */, uint8ClampedArray_v259 /* r199 */, v260 /* r196 */, v261 /* r198 */;
  let v262 /* r199 */, arr_v263 /* r238 */, v264 /* r244 */, v265 /* r199 */, v266 /* r199 */, v267 /* r237 */, v268 /* r247 */, v269 /* r250 */, v270 /* r193 */, v271 /* r195 */;
  let v272 /* r240 */, v273 /* r252 */, v274 /* r253 */, v275 /* r242 */, v276 /* r254 */, v277 /* r192 */, ctx2d_v278 /* r199 */, metrics_v279 /* r196 */, v280 /* r199 */, v281 /* r199 */;
  let v282 /* r246 */, v283 /* r198 */, v284 /* r246 */, v285 /* r245 */, v286 /* r198 */, v287 /* r199 */, v288 /* r198 */, v289 /* r198 */, v290 /* r199 */, v291 /* r199 */;
  let v292 /* r198 */, v293 /* r246 */, v294 /* r245 */, v295 /* r198 */, v296 /* r199 */, v297 /* r199 */, v298 /* r198 */, v299 /* r198 */, v300 /* r199 */, v301 /* r199 */;
  let v302 /* r198 */, v303 /* r198 */, v304 /* r199 */, v305 /* r199 */, v306 /* r198 */, v307 /* r198 */, v308 /* r199 */, v309 /* r199 */, v310 /* r198 */, v311 /* r198 */;
  let v312 /* r199 */, v313 /* r199 */, v314 /* r198 */, v315 /* r198 */, v316 /* r199 */, v317 /* r199 */, v318 /* r198 */, v319 /* r198 */, v320 /* r199 */, v321 /* r199 */;
  let v322 /* r198 */, v323 /* r198 */, v324 /* r199 */, v325 /* r199 */, v326 /* r198 */, v327 /* r198 */, v328 /* r199 */, v329 /* r199 */, v330 /* r198 */, v331 /* r198 */;
  let v332 /* r199 */, v333 /* r199 */, v334 /* r198 */, v335 /* r198 */, v336 /* r199 */, v337 /* r199 */, v338 /* r198 */, v339 /* r198 */, v340 /* r199 */, v341 /* r199 */;
  let v342 /* r198 */, v343 /* r198 */, v344 /* r199 */, arr_v345 /* r199 */, v346 /* r199 */, v347 /* r199 */, v348 /* r199 */, v349 /* r199 */, v350 /* r199 */, v351 /* r199 */;
  let v352 /* r199 */, v353 /* r199 */, arr_v354 /* r192 */, v355 /* r254 */, v356 /* r228 */, v357 /* r238 */, v358 /* r247 */, v359 /* r250 */, v360 /* r242 */, v361 /* r252 */;
  let v362 /* r253 */, v363 /* r237 */, v364 /* r229 */, v365 /* r230 */, fn_v366 /* r231 */, v367 /* r193 */, v368 /* r199 */, v369 /* r196 */, arr_v370 /* r246 */, v371 /* r245 */;
  let arr_v372 /* r245 */, v373 /* r244 */, v374 /* r246 */, ctx2d_v375 /* r195 */, v376 /* r198 */, v377 /* r240 */, v378 /* r236 */, v379 /* r232 */, ctx2d_v380 /* r245 */, fn_v381 /* r244 */;
  let v382 /* r199 */, v383 /* r196 */, v384 /* r193 */, v385 /* r246 */, v386 /* r240 */, v387 /* r240 */, v388 /* r199 */, v389 /* r199 */, v390 /* r199 */, v391 /* r199 */;
  let v392 /* r199 */, v393 /* r199 */, v394 /* r198 */, v395 /* r199 */, v396 /* r198 */, v397 /* r199 */, v398 /* r198 */, v399 /* r199 */, arr_v400 /* r199 */, v401 /* r193 */;
  let v402 /* r196 */, v403 /* r199 */, arr_v404 /* r199 */, v405 /* r193 */, v406 /* r196 */, v407 /* r199 */, v408 /* r196 */, v409 /* r199 */, arr_v410 /* r196 */, v411 /* r199 */;
  let v412 /* r199 */, v413 /* r198 */, v414 /* r199 */, canvas_v415 /* r198 */, ctx2d_v416 /* r199 */, v417 /* r198 */, v418 /* r199 */, v419 /* r199 */, v420 /* r199 */, v421 /* r199 */;
  let v422 /* r199 */, ctx2d_v423 /* r254 */, fn_v424 /* r253 */, v425 /* r199 */, v426 /* r198 */, math_v427 /* r193 */, v428 /* r192 */, v429 /* r252 */, v430 /* r193 */, v431 /* r192 */;
  let v432 /* r252 */, v433 /* r199 */, v434 /* r199 */, ctx2d_v435 /* r254 */, fn_v436 /* r253 */, v437 /* r199 */, v438 /* r198 */, v439 /* r192 */, math_v440 /* r193 */, v441 /* r252 */;
  let v442 /* r193 */, v443 /* r192 */, v444 /* r252 */, v445 /* r199 */, ctx2d_v446 /* r254 */, fn_v447 /* r253 */, v448 /* r199 */, v449 /* r198 */, math_v450 /* r193 */, v451 /* r192 */;
  let v452 /* r252 */, v453 /* r193 */, v454 /* r192 */, v455 /* r252 */, v456 /* r199 */, v457 /* r199 */, ctx2d_v458 /* r254 */, fn_v459 /* r253 */, v460 /* r199 */, v461 /* r198 */;
  let v462 /* r192 */, math_v463 /* r193 */, v464 /* r252 */, v465 /* r193 */, v466 /* r192 */, v467 /* r252 */, ctx2d_v468 /* r254 */, fn_v469 /* r253 */, v470 /* r199 */, v471 /* r198 */;
  let math_v472 /* r193 */, v473 /* r192 */, v474 /* r252 */, v475 /* r193 */, v476 /* r192 */, v477 /* r252 */, ctx2d_v478 /* r199 */, v479 /* r199 */, v480 /* r198 */, v481 /* r193 */;
  let uint8ClampedArray_v482 /* r195 */, promise_v483 /* r196 */, v484 /* r198 */, canvas_v485 /* r193 */, fn_v486 /* r192 */, v487 /* r198 */, v488 /* r254 */, v489 /* r253 */, ctx2d_v490 /* r199 */, ctx2d_v491 /* r193 */;
  let fn_v492 /* r192 */, v493 /* r199 */, v494 /* r198 */, fn_v495 /* r246 */, promise_v496 /* r198 */, fn_v497 /* r199 */, fn_v498 /* r246 */, fn_v499 /* r199 */, fn_v500 /* r247 */, v501 /* r193 */;
  let promise_v502 /* r195 */, fn_v503 /* r199 */, promise_v504 /* r202 */, fn_v505 /* r199 */, fn_v506 /* r204 */, promise_v507 /* r205 */, v508 /* r202 */, fn_v509 /* r204 */, promise_v510 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OffscreenCanvas: canvas_v5 3, canvas_v41 2, canvas_v137 2, canvas_v148 2, canvas_v199 2, canvas_v202 2, canvas_v217 2, canvas_v415 2
  //   OffscreenCanvas: canvas_v485 2
  //   OffscreenCanvasRenderingContext2D: ctx2d_v8 3, ctx2d_v11 3, ctx2d_v44 2, ctx2d_v50 20, ctx2d_v62 2, ctx2d_v63 2, ctx2d_v153 2, ctx2d_v157 2
  //   OffscreenCanvasRenderingContext2D: ctx2d_v162 2, ctx2d_v166 2, ctx2d_v171 2, ctx2d_v174 2, ctx2d_v179 2, ctx2d_v183 2, ctx2d_v186 2, ctx2d_v189 2
  //   OffscreenCanvasRenderingContext2D: ctx2d_v278 20, ctx2d_v375 8, ctx2d_v380 8, ctx2d_v416 2, ctx2d_v423 2, ctx2d_v435 2, ctx2d_v446 2, ctx2d_v458 2
  //   OffscreenCanvasRenderingContext2D: ctx2d_v468 2, ctx2d_v478 2, ctx2d_v490 2, ctx2d_v491 2
  //   Array: arr_v46 2, arr_v58 20, arr_v60 20, arr_v61 2, arr_v64 2, arr_v65 2, arr_v66 2, arr_v67 2
  //   Array: arr_v70 2, arr_v72 2, arr_v75 2, arr_v77 2, arr_v80 2, arr_v82 2, arr_v85 2, arr_v96 8
  //   Array: arr_v101 8, arr_v103 8, arr_v108 8, arr_v129 8, arr_v130 8, arr_v132 8, arr_v139 2, arr_v140 2
  //   Array: arr_v145 2, arr_v210 2, arr_v223 2, arr_v226 2, arr_v263 2, arr_v345 2, arr_v354 2, arr_v370 8
  //   Array: arr_v372 8, arr_v400 8, arr_v404 8, arr_v410 8
  //   Function: fn_v51 20, fn_v134 2, fn_v135 2, fn_v142 2, fn_v194 2, fn_v196 2, fn_v197 2, fn_v205 2
  //   Function: fn_v211 2, fn_v214 2, fn_v219 2, fn_v221 2, fn_v222 2, fn_v224 2, fn_v225 2, fn_v232 2
  //   Function: fn_v366 8, fn_v381 8, fn_v424 2, fn_v436 2, fn_v447 2, fn_v459 2, fn_v469 2, fn_v486 2
  //   Function: fn_v492 2, fn_v495 2, fn_v497 2, fn_v498 2, fn_v499 2, fn_v500 2, fn_v503 2, fn_v505 2
  //   Function: fn_v506 2, fn_v509 1
  //   ImageData: imageData_v107 8, imageData_v193 2
  //   ImageBitmap: imageBitmap_v208 2
  //   Promise: promise_v209 2, promise_v218 2, promise_v220 2, promise_v231 2, promise_v483 4, promise_v496 4, promise_v502 2, promise_v504 2
  //   Promise: promise_v507 2, promise_v510 1
  //   Window: win_v213 2, win_v215 2, win_v216 2
  //   ArrayBuffer: buf_v227 2
  //   DOMException: err_v233 1
  //   Uint8ClampedArray: uint8ClampedArray_v258 2, uint8ClampedArray_v259 2, uint8ClampedArray_v482 2
  //   TextMetrics: metrics_v279 20
  //   Math: math_v427 2, math_v440 2, math_v450 2, math_v463 2, math_v472 2
  // H142: 6 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 11 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 19 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 4 single-use temps folded (2 of them expressions, H135), 43 dead register writes dropped, 32 constants propagated (32 uses), 1 string keys as .member; 3 webs kept as registers (retOut 3, liveIn 1, crossCall 1, special 1)
  // alias ctx2d_c50 = cell[50]  evidence (executed member uses): .fillStyle×6 .fillRect×2 .font×1 .measureText×1 .beginPath×4 .arc×5
  NC(93, 98, 99, 100, 107, 108, 116, 120);              // #43607:234:53 #43617:77:211 [L d1 h1 c1]
  v237 = undefined;                                     // #43627:13:233 #43630:205:233 #43633:141:233 #43636:77:233 [L d1 h1 c1]
  v238 = undefined;                                     // #43639:13:233 [L d1 h1 c1]
  v239 = undefined;                                     // #43642:205:233 #43645:141:233 #43648:77:233 #43651:13:233 [L d1 h1 c1]
  v240 = undefined;                                     // #43654:205:233 #43657:141:233 #43660:77:233 #43663:13:233 #43666:205:233 #43669:141:233 #43672:77:233 #43675:13:233 [L d1 h1 c1]
  v241 = undefined;                                     // #43678:205:233 [L d1 h1 c1]
  v1 = undefined;                                       // #43681:141:233 #43684:77:233 #43687:13:233 #43690:205:233 #43693:141:233 #43696:77:233 #43699:13:233 #43702:205:233 #43705:141:233 #43708:77:233 [L d1 h1 c1]
  v242 = undefined;                                     // #43711:13:233 [L d1 h1 c1]
  v243 = undefined;                                     // #43714:205:233 [L d1 h1 c1]
  v2 = undefined;                                       // #43717:141:233 [L d1 h1 c1]
  v244 = undefined;                                     // #43720:77:233 [L d1 h1 c1]
  v245 = undefined;                                     // #43723:13:233 #43726:205:233 [L d1 h1 c1]
  v3 = undefined;                                       // #43729:141:233 #43732:77:233 [L d1 h1 c1]
  try {
    TP(tryStack, 48453, 254, callDepths);                          // #43735:194:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v4 = cell[83]();                                    // #43741:78:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then v4 = r205 (H142 CALL bind)
    cell[42] = v4;                                      // #43745:60:195 [L d1 h1 c1]
    canvas_v5 = cell[49];                               // #43748:183:236 [L d1 h1 c1]
    v6 = 2; canvas_v5.width = 2;                        // #43751:79:233 #43756:141:103 [L d1 h1 c1]
    v7 = 2; canvas_v5.height = 2;                       // #43761:77:233 #43766:19:103 [L d1 h1 c1]
    ctx2d_v8 = ctx2d_c50;                               // #43771:242:236 [L d1 h1 c1]
    v9 = "#000";                                        // #43774:94:233 #43779:26:233 [L d1 h1 c1]
    ctx2d_v8.fillStyle = "#000";                        // #43787:204:199 [L d1 h1 c1]
    v10 = 0;                                            // #43791:243:72 #43794:62:72 [L d1 h1 c1]
    v246 = 2;                                           // #43797:29:72 [L d1 h1 c1]
    v247 = 2;                                           // #43800:64:72 [L d1 h1 c1]
    v248 = ctx2d_v8.fillRect((0), (0), (2), (2));       // #43803:81:138 [L d1 h1 c1]
    ctx2d_v11 = ctx2d_c50;                              // #43827:184:236 [L d1 h1 c1]
    v12 = "#fff";                                       // #43830:140:233 #43835:16:233 [L d1 h1 c1]
    ctx2d_v11.fillStyle = "#fff";                       // #43843:106:199 [L d1 h1 c1]
    v13 = 2;                                            // #43847:153:72 #43850:204:72 [L d1 h1 c1]
    v249 = 1;                                           // #43853:243:72 [L d1 h1 c1]
    v250 = 1;                                           // #43856:62:72 [L d1 h1 c1]
    v251 = ctx2d_v11.fillRect(2, (2), (1), (1));        // #43859:215:138 [L d1 h1 c1]
    v14 = ctx2d_c50[KP(m43882k215)]();                  // #43883:36:66 [L d1 h1 c1]
    v15 = 0;                                            // #43904:235:72 #43907:86:72 [L d1 h1 c1]
    v16 = 2;                                            // #43910:213:72 [L d1 h1 c1]
    v252 = 0;                                           // #43913:24:72 [L d1 h1 c1]
    v253 = 1;                                           // #43916:15:72 [L d1 h1 c1]
    v254 = true;                                        // #43919:71:233 [L d1 h1 c1]
    v255 = ctx2d_c50[KP(m43921k71)](0, 0, 2, v252, v253, v254);  // #43922:212:66 [L d1 h1 c1]
    v17 = ctx2d_c50[KP(m43942k212)]();                  // #43943:109:66 [L d1 h1 c1]
    v18 = ctx2d_c50[KP(m43963k109)]();                  // #43964:226:66 [L d1 h1 c1]
    v19 = 0;                                            // #43980:49:72 [L d1 h1 c1]
    v20 = 0;                                            // #43983:4:72 [L d1 h1 c1]
    v256 = 2;                                           // #43986:75:72 [L d1 h1 c1]
    v257 = 2;                                           // #43989:54:72 [L d1 h1 c1]
    uint8ClampedArray_v258 = ctx2d_c50[KP(m43991k54)](0, 0, v256, v257).data;  // #43992:199:66 #44020:66:200 [L d1 h1]
    if (uint8ClampedArray_v258.join) {                  // #44025:145:200 #44033:220:160 [L d1 h1]
      uint8ClampedArray_v259 = uint8ClampedArray_v258;  // #44053:131:150 [L d1 h1]
      v22 = ",";                                        // #44056:235:233 [L d1 h1]
      v23 = uint8ClampedArray_v259.join(",");           // #44061:16:138 [L d1 h1]
      v24 = ",";                                        // #44078:132:233 [L d1 h1]
      v21 = v23 + (",");                                // #44083:135:180 [L d1 h1]
    } else {
      v21 = "";                                         // #44039:60:53 #44044:212:233 [-] +#44048:84:53 /* never executed in any replay */
    }
    cell[93] = v21;                                     // #44091:130:195 [L d1 h1]
    L44221_213: {
      if (!(v21)) {                                     // #44094:73:160 [L d1 h1]
        v25 = v511.Array;                               // #44100:53:53 #44105:11:200 [-] /* never executed in any replay */
        v26 = uint8ClampedArray_v258.length;            // #44110:118:200 [-] /* never executed in any replay */
        v27 = new v25(v26);                             // #44115:138:1 [-] /* never executed in any replay */
        v28 = 0;                                        // #44120:57:72 [-] /* never executed in any replay */
        v260 = 1;                                       // #44123:236:72 [-] /* never executed in any replay */
        v261 = "length";                                // #44126:240:233 [-] +#44131:0:53 /* never executed in any replay */
        while ((v262 = uint8ClampedArray_v258[v261], v30 = v28 < v262, v28 < v262)) {  // #44146:90:7 | #44150:243:186 [-] /* never executed in any replay */
          v31 = uint8ClampedArray_v258[v28];            // #44168:3:7 [-] /* never executed in any replay */
          v27[v28] = v31;                               // #44172:240:210 [-] /* never executed in any replay */
          v29 = v28; v28 = v28 + v260;                  // #44136:224:48 [-] /* never executed in any replay */
        }
        v32 = v27;                                      // #44180:105:150 [-] /* never executed in any replay */
        v33 = v32.join(",");                            // #44183:185:233 #44188:38:138 [-] /* never executed in any replay */
        v34 = ",";                                      // #44205:194:233 [-] /* never executed in any replay */
        v35 = v33 + ",";                                // #44210:79:222 [-] /* never executed in any replay */
        cell[93] = v35;                                 // #44214:121:195 [-] /* never executed in any replay */
        break L44221_213;                               // #44217:165:53 [-] /* never executed in any replay */
      }
    }
    v36 = cell[21];                                     // #44222:44:236 [L d1 h1]
    if (v36) {                                          // #44225:203:160 [L d1 h1]
      v39 = v36;                                        // #44436:179:150 [-] +#44439:119:53 /* never executed in any replay */
    } else {
      v37 = KP(44235);                                  // #44231:47:53 #44236:134:233 [L d1 h1]
      v38 = cell[19][KP(m44393k134)](v37);              // #44394:215:66 [L d1 h1]
      cell[21] = v38;                                   // #44425:225:195 [L d1 h1]
      v39 = v38;                                        // #44428:138:150 [L d1 h1] +#44431:178:53
    }
    v40 = v39;                                          // #44444:227:150 [L d1 h1]
    arr_v263 = (v40).split("a");                        // #44447:203:233 #44452:112:138 [L d1 h1]
    canvas_v41 = cell[49];                              // #44470:27:236 [L d1 h1]
    v42 = 220; canvas_v41.width = 220;                  // #44473:35:233 #44478:17:103 [L d1 h1]
    v43 = 40; canvas_v41.height = 40;                   // #44483:193:233 #44488:183:103 [L d1 h1]
    ctx2d_v44 = ctx2d_c50;                              // #44493:6:236 [L d1 h1]
    v45 = "16px sans-serif";                            // #44496:34:233 #44501:206:233 [L d1 h1]
    ctx2d_v44.font = "16px sans-serif";                 // #44520:176:199 [L d1 h1]
    v264 = {};                                          // #44524:2:159 [L d1 h1]
    v265 = 0;                                           // #44526:209:72 [L d1 h1]
    cell[98] = 0;                                       // #44529:115:195 [L d1 h1]
    v266 = 0;                                           // #44532:190:72 [L d1 h1]
    cell[99] = 0;                                       // #44535:236:195 [L d1 h1]
    arr_v46 = [];                                       // #44538:234:107 [L d1 h1]
    cell[100] = arr_v46;                                // #44540:104:195 [L d1 h1]
    v267 = 0;                                           // #44543:31:72 [L d1 h1]
    v268 = "actualBoundingBoxRight";                    // #44546:23:233 [L d1 h1]
    v269 = "actualBoundingBoxRight";                    // #44572:47:233 [L d1 h1]
    v270 = "fontBoundingBoxDescent";                    // #44598:231:233 [L d1 h1]
    v271 = "fontBoundingBoxDescent";                    // #44624:191:233 [L d1 h1]
    v272 = "actualBoundingBoxAscent";                   // #44650:55:233 [L d1 h1]
    v273 = "actualBoundingBoxAscent";                   // #44655:207:233 [L d1 h1]
    v274 = "actualBoundingBoxAscent";                   // #44660:7:233 [L d1 h1]
    v275 = KP(44664);                                   // #44665:95:233 [L d1 h1]
    v276 = KP(44669);                                   // #44670:87:233 [L d1 h1]
    v277 = KP(44674);                                   // #44675:111:233 [L d1 h1] +#44680:67:53
    while ((v48 = arr_v263.length, v49 = v267 < v48, v267 < v48)) {  // #44698:7:200 | #44703:44:186 [L d11 h11]
      ctx2d_v50 = ctx2d_c50;                            // #44721:199:236 [L d10 h10]
      ctx2d_v278 = ctx2d_c50;                           // #44724:88:150 [L d10 h10]
      fn_v51 = ctx2d_c50.measureText;                   // #44727:207:200 [L d10 h10]
      v52 = arr_v263[v267];                             // #44742:45:7 [L d10 h10]
      metrics_v279 = fn_v51.call(ctx2d_v278, v52);      // #44746:202:138 [L d10 h10]
      v53 = metrics_v279[v272];                         // #44771:252:7 [L d10 h10]
      if (v53) {                                        // #44775:91:160 [L d10 h10]
        v54 = v53;                                      // #44797:235:150 [L d10 h10] +#44800:207:53
      } else {
        v54 = 0;                                        // #44781:127:53 #44786:56:72 #44789:69:150 [-] +#44792:65:53 /* never executed in any replay */
      }
      v55 = metrics_v279[v275];                         // #44805:221:7 [L d10 h10]
      if (v55) {                                        // #44809:248:160 [L d10 h10]
        v56 = v55;                                      // #44831:6:150 [L d10 h10] +#44834:62:53
      } else {
        v56 = 0;                                        // #44815:232:53 #44820:199:72 #44823:88:150 [-] +#44826:200:53 /* never executed in any replay */
      }
      v280 = metrics_v279.width;                        // #44839:56:200 [L d10 h10]
      if (v280) {                                       // #44844:167:160 [L d10 h10]
        v57 = v280;                                     // #44866:1:150 [L d10 h10] +#44869:13:53
      } else {
        v281 = 0;                                       // #44850:155:53 #44855:146:72 [-] /* never executed in any replay */
        v57 = 0;                                        // #44858:183:150 [-] +#44861:107:53 /* never executed in any replay */
      }
      v282 = ":";                                       // #44874:202:233 [L d10 h10]
      v283 = v54 + (":");                               // #44879:55:222 [L d10 h10]
      v284 = v283 + v56;                                // #44883:48:222 [L d10 h10]
      v285 = ":";                                       // #44887:36:233 [L d10 h10]
      v286 = v284 + (":");                              // #44892:169:222 [L d10 h10]
      v287 = v286 + v57;                                // #44896:90:222 [L d10 h10]
      v288 = v264[v287];                                // #44900:76:7 [L d10 h10]
      if (!(v288)) {                                    // #44904:107:160 [L d10 h10]
        v289 = 1; v264[v287] = 1;                       // #44910:79:53 #44915:40:103 [L d1 h1]
        v290 = cell[98] + 1; cell[98] = v290;           // #44920:78:99 [L d1 h1] +#44924:102:53
      }
      v291 = cell[99];                                  // #44929:19:236 [L d10 h10]
      v292 = v54 + v56;                                 // #44932:156:222 [L d10 h10]
      v293 = v292 + v57;                                // #44936:65:222 [L d10 h10]
      v294 = 0.00001;                                   // #44940:49:233 [L d10 h10]
      v295 = v293 * (0.00001);                          // #44951:245:13 [L d10 h10]
      v296 = v291 + v295;                               // #44955:118:222 [L d10 h10]
      cell[99] = v296;                                  // #44959:196:195 [L d10 h10]
      arr_v58 = cell[100];                              // #44962:31:236 [L d10 h10]
      v59 = cell[100].length;                           // #44965:58:200 [L d10 h10]
      arr_v60 = [];                                     // #44970:128:107 [L d10 h10]
      v297 = metrics_v279.width;                        // #44972:87:200 [L d10 h10]
      v298 = undefined;                                 // #44977:111:233 [L d10 h10]
      if (v297 === v298) {                              // #44980:255:161 [L d10 h10]
        v299 = null;                                    // #45003:59:233 [-] +#45006:223:53 /* never executed in any replay */
      } else {
        v299 = metrics_v279.width;                      // #44988:147:53 #44993:182:200 [L d10 h10] +#44998:46:53
      }
      v300 = 0; arr_v60[0] = v299;                      // #45011:153:26 [L d10 h10]
      v301 = undefined;                                 // #45016:41:233 [L d10 h10]
      v302 = metrics_v279.actualBoundingBoxLeft;        // #45019:156:200 [L d10 h10]
      if (v301 === v302) {                              // #45044:184:161 [L d10 h10]
        v303 = null;                                    // #45087:190:233 [-] +#45090:22:53 /* never executed in any replay */
      } else {
        v303 = metrics_v279.actualBoundingBoxLeft;      // #45052:168:53 #45057:160:200 [L d10 h10] +#45082:240:53
      }
      v304 = 1; arr_v60[1] = v303;                      // #45095:174:26 [L d10 h10]
      v305 = undefined;                                 // #45100:42:233 [L d10 h10]
      v306 = metrics_v279[v268];                        // #45103:220:7 [L d10 h10]
      if (v305 === v306) {                              // #45107:248:161 [L d10 h10]
        v307 = null;                                    // #45129:173:233 [-] +#45132:9:53 /* never executed in any replay */
      } else {
        v307 = metrics_v279[v269];                      // #45115:232:53 #45120:253:7 [L d10 h10] +#45124:25:53
      }
      v308 = 2; arr_v60[2] = v307;                      // #45137:227:26 [L d10 h10]
      v309 = metrics_v279[v273];                        // #45142:241:7 [L d10 h10]
      v310 = undefined;                                 // #45146:33:233 [L d10 h10]
      if (v309 === v310) {                              // #45149:105:161 [L d10 h10]
        v311 = null;                                    // #45171:114:233 [-] +#45174:250:53 /* never executed in any replay */
      } else {
        v311 = metrics_v279[v274];                      // #45157:213:53 #45162:240:7 [L d10 h10] +#45166:0:53
      }
      v312 = 3; arr_v60[3] = v311;                      // #45179:54:26 [L d10 h10]
      v313 = metrics_v279[v276];                        // #45184:184:7 [L d10 h10]
      v314 = undefined;                                 // #45188:140:233 [L d10 h10]
      if (v313 === v314) {                              // #45191:232:161 [L d10 h10]
        v315 = null;                                    // #45213:195:233 [-] +#45216:71:53 /* never executed in any replay */
      } else {
        v315 = metrics_v279[v277];                      // #45199:24:53 #45204:86:7 [L d10 h10] +#45208:78:53
      }
      v316 = 4; arr_v60[4] = v315;                      // #45221:213:26 [L d10 h10]
      v317 = undefined;                                 // #45226:117:233 [L d10 h10]
      v318 = metrics_v279.fontBoundingBoxAscent;        // #45229:184:200 [L d10 h10]
      if (v317 === v318) {                              // #45254:100:161 [L d10 h10]
        v319 = null;                                    // #45297:88:233 [-] +#45300:200:53 /* never executed in any replay */
      } else {
        v319 = metrics_v279.fontBoundingBoxAscent;      // #45262:164:53 #45267:217:200 [L d10 h10] +#45292:133:53
      }
      v320 = 5; arr_v60[5] = v319;                      // #45305:180:26 [L d10 h10]
      v321 = metrics_v279[v270];                        // #45310:190:7 [L d10 h10]
      v322 = undefined;                                 // #45314:250:233 [L d10 h10]
      if (v321 === v322) {                              // #45317:30:161 [L d10 h10]
        v323 = null;                                    // #45339:172:233 [-] +#45342:204:53 /* never executed in any replay */
      } else {
        v323 = metrics_v279[v271];                      // #45325:246:53 #45330:96:7 [L d10 h10] +#45334:176:53
      }
      v324 = 6; arr_v60[6] = v323;                      // #45347:229:26 [L d10 h10]
      v325 = metrics_v279.emHeightAscent;               // #45352:104:200 [L d10 h10]
      v326 = undefined;                                 // #45370:124:233 [L d10 h10]
      if (v325 === v326) {                              // #45373:24:161 [L d10 h10]
        v327 = null;                                    // #45409:139:233 [L d10 h10] +#45412:239:53
      } else {
        v327 = metrics_v279.emHeightAscent;             // #45381:136:53 #45386:202:200 [-] +#45404:242:53 /* never executed in any replay */
      }
      v328 = 7; arr_v60[7] = v327;                      // #45417:242:26 [L d10 h10]
      v329 = undefined;                                 // #45422:94:233 [L d10 h10]
      v330 = metrics_v279.emHeightDescent;              // #45425:61:200 [L d10 h10]
      if (v329 === v330) {                              // #45444:21:161 [L d10 h10]
        v331 = null;                                    // #45481:71:233 [L d10 h10] +#45484:187:53
      } else {
        v331 = metrics_v279.emHeightDescent;            // #45452:209:53 #45457:29:200 [-] +#45476:185:53 /* never executed in any replay */
      }
      v332 = 8; arr_v60[8] = v331;                      // #45489:115:26 [L d10 h10]
      v333 = undefined;                                 // #45494:27:233 [L d10 h10]
      v334 = metrics_v279.hangingBaseline;              // #45497:70:200 [L d10 h10]
      if (v333 === v334) {                              // #45516:58:161 [L d10 h10]
        v335 = null;                                    // #45553:168:233 [-] +#45556:216:53 /* never executed in any replay */
      } else {
        v335 = metrics_v279.hangingBaseline;            // #45524:162:53 #45529:12:200 [L d10 h10] +#45548:172:53
      }
      v336 = 9; arr_v60[9] = v335;                      // #45561:221:26 [L d10 h10]
      v337 = metrics_v279.alphabeticBaseline;           // #45566:128:200 [L d10 h10]
      v338 = undefined;                                 // #45588:52:233 [L d10 h10]
      if (v337 === v338) {                              // #45591:240:161 [L d10 h10]
        v339 = null;                                    // #45631:41:233 [-] +#45634:149:53 /* never executed in any replay */
      } else {
        v339 = metrics_v279.alphabeticBaseline;         // #45599:0:53 #45604:37:200 [L d10 h10] +#45626:161:53
      }
      v340 = 10; arr_v60[10] = v339;                    // #45639:153:26 [L d10 h10]
      v341 = undefined;                                 // #45644:41:233 [L d10 h10]
      v342 = metrics_v279.ideographicBaseline;          // #45647:156:200 [L d10 h10]
      if (v341 === v342) {                              // #45670:184:161 [L d10 h10]
        v343 = null;                                    // #45711:249:233 [-] +#45714:37:53 /* never executed in any replay */
      } else {
        v343 = metrics_v279.ideographicBaseline;        // #45678:168:53 #45683:20:200 [L d10 h10] +#45706:148:53
      }
      v344 = 11; arr_v60[11] = v343;                    // #45719:246:26 [L d10 h10]
      arr_v58[v59] = arr_v60;                           // #45724:215:210 [L d10 h10]
      v47 = v267; v267 = v267 + 1;                      // #44685:176:72 #44688:143:48 [L d10 h10]
    }
    arr_v61 = [];                                       // #45732:8:107 [L d1 h1]
    ctx2d_v62 = ctx2d_c50;                              // #45734:83:236 [L d1 h1]
    arr_v345 = cell[74](ctx2d_v62);                     // #45737:52:22 [L d1 h1]  VM call: pushes a frame, the callee body returns into r199; then arr_v345 = r199 (H142 CALL bind)
    arr_v61[0] = arr_v345;                              // #45741:197:26 [L d1 h1]
    ctx2d_v63 = cell[52];                               // #45746:92:236 [L d1 h1]
    arr_v64 = cell[74](ctx2d_v63);                      // #45749:89:22 [L d1 h1]  VM call: pushes a frame, the callee body returns into r202; then arr_v64 = r202 (H142 CALL bind)
    arr_v61[1] = arr_v64;                               // #45753:150:26 [L d1 h1]
    cell[107] = arr_v61;                                // #45758:100:195 [L d1 h1]
    arr_v65 = [];                                       // #45761:130:107 [L d1 h1]
    cell[108] = arr_v65;                                // #45763:160:195 [L d1 h1]
    arr_v66 = [];                                       // #45766:206:107 [L d1 h1]
    arr_v67 = [];                                       // #45768:196:107 [L d1 h1]
    v346 = "srgb";                                      // #45770:104:233 [L d1 h1]
    v68 = 0; arr_v67[0] = "srgb";                       // #45778:41:26 [L d1 h1]
    v347 = "unorm8";                                    // #45783:121:233 [L d1 h1]
    v69 = 1; arr_v67[1] = "unorm8";                     // #45793:54:26 [L d1 h1]
    arr_v70 = arr_v67;                                  // #45798:203:150 [L d1 h1]
    v71 = 0; arr_v66[0] = arr_v70;                      // #45801:192:26 [L d1 h1]
    arr_v72 = [];                                       // #45806:110:107 [L d1 h1]
    v348 = "display-p3";                                // #45808:234:233 [L d1 h1]
    v73 = 0; arr_v72[0] = "display-p3";                 // #45822:35:26 [L d1 h1]
    v349 = "unorm8";                                    // #45827:11:233 [L d1 h1]
    v74 = 1; arr_v72[1] = "unorm8";                     // #45837:0:26 [L d1 h1]
    arr_v75 = arr_v72;                                  // #45842:237:150 [L d1 h1]
    v76 = 1; arr_v66[1] = arr_v75;                      // #45845:218:26 [L d1 h1]
    arr_v77 = [];                                       // #45850:160:107 [L d1 h1]
    v350 = "srgb";                                      // #45852:212:233 [L d1 h1]
    v78 = 0; arr_v77[0] = "srgb";                       // #45860:229:26 [L d1 h1]
    v351 = "float16";                                   // #45865:69:233 [L d1 h1]
    v79 = 1; arr_v77[1] = "float16";                    // #45876:210:26 [L d1 h1]
    arr_v80 = arr_v77;                                  // #45881:247:150 [L d1 h1]
    v81 = 2; arr_v66[2] = arr_v80;                      // #45884:60:26 [L d1 h1]
    arr_v82 = [];                                       // #45889:250:107 [L d1 h1]
    v352 = "display-p3";                                // #45891:70:233 [L d1 h1]
    v83 = 0; arr_v82[0] = "display-p3";                 // #45905:15:26 [L d1 h1]
    v353 = "float16";                                   // #45910:71:233 [L d1 h1]
    v84 = 1; arr_v82[1] = "float16";                    // #45921:76:26 [L d1 h1]
    arr_v85 = arr_v82;                                  // #45926:9:150 [L d1 h1]
    v86 = 3; arr_v66[3] = arr_v85;                      // #45929:134:26 [L d1 h1]
    arr_v354 = arr_v66;                                 // #45934:219:150 [L d1 h1]
    v355 = 0;                                           // #45937:134:72 [L d1 h1]
    v356 = "colorSpace";                                // #45940:162:233 [L d1 h1]
    v357 = "colorSpace";                                // #45945:78:233 [L d1 h1]
    v358 = "colorSpace";                                // #45950:74:233 [L d1 h1]
    v359 = "colorSpace";                                // #45955:86:233 [L d1 h1]
    v360 = "pixelFormat";                               // #45960:50:233 [L d1 h1]
    v361 = "pixelFormat";                               // #45975:158:233 [L d1 h1]
    v362 = "pixelFormat";                               // #45990:90:233 [L d1 h1]
    v363 = "getImageData";                              // #46005:38:233 [L d1 h1]
    v364 = "willReadFrequently";                        // #46010:194:233 [L d1 h1]
    v365 = "color(display-p3 1 0.25 0.5)";              // #46015:238:233 [L d1 h1] +#46047:134:53
    while ((v89 = arr_v354.length, v90 = v355 < v89, v355 < v89)) {  // #46065:18:200 | #46070:203:186 [L d5 h5]
      fn_v366 = cell[67];                               // #46088:121:236 [L d4 h4]
      v367 = undefined;                                 // #46091:137:233 [L d4 h4]
      v91 = 2;                                          // #46094:252:72 [L d4 h4]
      v92 = 2;                                          // #46097:99:72 [L d4 h4]
      v368 = "2d";                                      // #46100:75:233 [L d4 h4]
      v369 = {};                                        // #46106:241:159 [L d4 h4]
      arr_v370 = arr_v354[v355];                        // #46108:71:7 [L d4 h4]
      v371 = 0;                                         // #46112:66:72 [L d4 h4]
      v93 = arr_v370[v371];                             // #46115:148:7 [L d4 h4]
      v369[v356] = v93;                                 // #46119:222:199 [L d4 h4]
      v94 = "colorType";                                // #46123:154:233 [L d4 h4]
      arr_v372 = arr_v354[v355];                        // #46128:140:7 [L d4 h4]
      v373 = 1;                                         // #46132:179:72 [L d4 h4]
      v374 = arr_v372[v373];                            // #46135:129:7 [L d4 h4]
      v369.colorType = v374;                            // #46139:87:199 [L d4 h4]
      v95 = true;                                       // #46143:111:233 [L d4 h4]
      v369[v364] = true;                                // #46146:13:199 [L d4 h4]
      arr_v96 = MC(v367, fn_v366, 2, 2, v368, v369);        // #46150:24:16 [L d4 h4]
      v97 = 1;                                          // #46159:15:72 [L d4 h4]
      ctx2d_v375 = arr_v96[1];                          // #46162:109:7 [L d4 h4]
      v376 = null;                                      // #46166:173:233 [L d4 h4]
      if (ctx2d_v375) {                                 // #46169:136:160 [L d4 h4]
        try {
          TP(tryStack, 46677, 49, callDepths);                     // #46180:244:194 [L d4 h4]  try: pushes the catch arm of the enclosing try (TP)
          ctx2d_v375.fillStyle = v365;                  // #46186:41:142 [L d4 h4]
          v98 = 0;                                      // #46191:28:72 [L d4 h4]
          v99 = 0;                                      // #46194:3:72 [L d4 h4]
          v377 = 2;                                     // #46197:14:72 [L d4 h4]
          v378 = 2;                                     // #46200:173:72 [L d4 h4]
          v379 = ctx2d_v375.fillRect((0), (0), (2), (2));        // #46203:74:138 [L d4 h4]
          ctx2d_v380 = ctx2d_v375;                      // #46227:143:150 [L d4 h4]
          fn_v381 = (ctx2d_v375)[v363];                 // #46230:237:7 [L d4 h4]
          v100 = 0;                                     // #46234:208:72 [L d4 h4]
          v382 = 0;                                     // #46237:231:72 [L d4 h4]
          v383 = 1;                                     // #46240:98:72 [L d4 h4]
          v384 = 1;                                     // #46243:177:72 [L d4 h4]
          v385 = {};                                    // #46246:63:159 [L d4 h4]
          arr_v101 = arr_v354[v355];                    // #46248:221:7 [L d4 h4]
          v386 = 0;                                     // #46252:0:72 [L d4 h4]
          v102 = arr_v101[v386];                        // #46255:218:7 [L d4 h4]
          v385[v357] = v102;                            // #46259:140:199 [L d4 h4]
          arr_v103 = arr_v354[v355];                    // #46263:54:7 [L d4 h4]
          v387 = 1;                                     // #46267:53:72 [L d4 h4]
          v104 = arr_v103[v387];                        // #46270:123:7 [L d4 h4]
          v105 = "float16";                             // #46274:3:233 [L d4 h4]
          if (v104 === v105) {                          // #46285:67:161 [L d4 h4]
            v106 = "rgba-float16";                      // #46318:252:233 [L d2 h2] +#46334:220:53
          } else {
            v106 = "rgba-unorm8";                       // #46293:199:53 #46298:66:233 [L d2 h2] +#46313:138:53
          }
          v385[v360] = v106;                            // #46339:182:199 [L d4 h4]
          imageData_v107 = fn_v381.call(ctx2d_v380, 0, v382, v383, v384, v385);        // #46343:93:16 [L d4 h4]
          arr_v108 = [];                                // #46353:215:107 [L d4 h4]
          v109 = imageData_v107[v358];                  // #46355:21:7 [L d4 h4]
          v388 = undefined;                             // #46359:181:233 [L d4 h4]
          if (v109 === v388) {                          // #46362:173:161 [L d4 h4]
            v389 = null;                                // #46384:56:233 [-] +#46387:40:53 /* never executed in any replay */
          } else {
            v389 = imageData_v107[v359];                // #46370:9:53 #46375:153:7 [L d4 h4] +#46379:69:53
          }
          v110 = 0; arr_v108[0] = v389;                 // #46392:148:26 [L d4 h4]
          v111 = undefined;                             // #46397:248:233 [L d4 h4]
          v390 = imageData_v107[v361];                  // #46400:242:7 [L d4 h4]
          if (v111 === v390) {                          // #46404:54:161 [L d4 h4]
            v391 = null;                                // #46426:164:233 [-] +#46429:228:53 /* never executed in any replay */
          } else {
            v391 = imageData_v107[v362];                // #46412:174:53 #46417:17:7 [L d4 h4] +#46421:221:53
          }
          v112 = 1; arr_v108[1] = v391;                 // #46434:210:26 [L d4 h4]
          v113 = imageData_v107.data;                   // #46439:225:200 [L d4 h4]
          if (v113) {                                   // #46444:236:160 [L d4 h4]
            v114 = imageData_v107.data;                 // #46463:123:200 [L d4 h4]
            v392 = v114.length;                         // #46468:38:200 [L d4 h4] +#46473:222:53
          } else {
            v392 = null;                                // #46450:12:53 #46455:121:233 [-] +#46458:165:53 /* never executed in any replay */
          }
          v115 = 2; arr_v108[2] = v392;                 // #46478:141:26 [L d4 h4]
          v116 = imageData_v107.data;                   // #46483:112:200 [L d4 h4]
          if (v116) {                                   // #46488:255:160 [L d4 h4]
            v117 = imageData_v107.data;                 // #46507:169:200 [L d4 h4]
            v394 = 0;                                   // #46512:156:72 [L d4 h4]
            v393 = v117[v394];                          // #46515:6:7 [L d4 h4] +#46519:62:53
          } else {
            v393 = null;                                // #46494:147:53 #46499:196:233 [-] +#46502:132:53 /* never executed in any replay */
          }
          v118 = 3; arr_v108[3] = v393;                 // #46524:178:26 [L d4 h4]
          v119 = imageData_v107.data;                   // #46529:65:200 [L d4 h4]
          if (v119) {                                   // #46534:204:160 [L d4 h4]
            v120 = imageData_v107.data;                 // #46553:174:200 [L d4 h4]
            v396 = 1;                                   // #46558:205:72 [L d4 h4]
            v395 = v120[v396];                          // #46561:179:7 [L d4 h4] +#46565:119:53
          } else {
            v395 = null;                                // #46540:108:53 #46545:87:233 [-] +#46548:139:53 /* never executed in any replay */
          }
          v121 = 4; arr_v108[4] = v395;                 // #46570:139:26 [L d4 h4]
          v122 = imageData_v107.data;                   // #46575:246:200 [L d4 h4]
          if (v122) {                                   // #46580:237:160 [L d4 h4]
            v123 = imageData_v107.data;                 // #46599:205:200 [L d4 h4]
            v398 = 2;                                   // #46604:48:72 [L d4 h4]
            v397 = v123[v398];                          // #46607:74:7 [L d4 h4] +#46611:114:53
          } else {
            v397 = null;                                // #46586:73:53 #46591:90:233 [-] +#46594:66:53 /* never executed in any replay */
          }
          v124 = 5; arr_v108[5] = v397;                 // #46616:238:26 [L d4 h4]
          v125 = imageData_v107.data;                   // #46621:141:200 [L d4 h4]
          if (v125) {                                   // #46626:232:160 [L d4 h4]
            v127 = imageData_v107.data;                 // #46645:90:200 [L d4 h4]
            v399 = 3;                                   // #46650:201:72 [L d4 h4]
            v126 = v127[v399];                          // #46653:191:7 [L d4 h4] +#46657:83:53
          } else {
            v126 = null;                                // #46632:24:53 #46637:77:233 [-] +#46640:41:53 /* never executed in any replay */
          }
          v128 = 6; arr_v108[6] = v126;                 // #46662:172:26 [L d4 h4]
          v376 = arr_v108;                              // #46667:233:150 [L d4 h4]
          arr_v129 = tryStack.pop();                         // #46670:64:124 [L d4 h4] +#46673:16:53
        } catch (caught) {
          outside("L46680_154");                        // #46678:154:150 [-]  L46680_154 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      } else {
        // #46175:56:53 [-] /* never executed in any replay */
      }
      arr_v130 = cell[108];                             // #46686:234:236 [L d4 h4]
      v131 = cell[108].length;                          // #46689:153:200 [L d4 h4]
      arr_v132 = [];                                    // #46694:35:107 [L d4 h4]
      arr_v400 = arr_v354[v355];                        // #46696:49:7 [L d4 h4]
      v401 = 0;                                         // #46700:4:72 [L d4 h4]
      v402 = arr_v400[v401];                            // #46703:206:7 [L d4 h4]
      v403 = 0; arr_v132[0] = v402;                     // #46707:119:26 [L d4 h4]
      arr_v404 = arr_v354[v355];                        // #46712:53:7 [L d4 h4]
      v405 = 1;                                         // #46716:248:72 [L d4 h4]
      v406 = arr_v404[v405];                            // #46719:242:7 [L d4 h4]
      v407 = 1; arr_v132[1] = v406;                     // #46723:11:26 [L d4 h4]
      if (ctx2d_v375) {                                 // #46728:238:160 [L d4 h4]
        v408 = 1;                                       // #46747:255:72 [L d4 h4] +#46750:147:53
      } else {
        v408 = 0;                                       // #46734:134:53 #46739:235:72 [-] +#46742:207:53 /* never executed in any replay */
      }
      v409 = 2; arr_v132[2] = v408;                     // #46755:203:26 [L d4 h4]
      arr_v410 = cell[74](ctx2d_v375);                  // #46760:204:22 [L d4 h4]  VM call: pushes a frame, the callee body returns into r196; then arr_v410 = r196 (H142 CALL bind)
      v411 = 3; arr_v132[3] = arr_v410;                 // #46764:253:26 [L d4 h4]
      v412 = 4; arr_v132[4] = v376;                     // #46769:170:26 [L d4 h4]
      arr_v130[v131] = arr_v132;                        // #46774:187:210 [L d4 h4]
      v87 = 1;                                          // #46052:39:72 [L d4 h4]
      v88 = v355; v355 = v355 + 1;                      // #46055:234:48 [L d4 h4]
    }
    v133 = null;                                        // #46782:52:233 [L d1 h1]
    cell[116] = null;                                   // #46785:10:195 [L d1 h1]
    fn_v134 = cell[58];                                 // #46788:205:236 [L d1 h1]
    if (fn_v134) {                                      // #46791:40:160 [L d1 h1]
      fn_v135 = fn_v134;                                // #46802:156:150 [L d1 h1]
      v136 = 2;                                         // #46805:131:72 [L d1 h1]
      v413 = 2;                                         // #46808:142:72 [L d1 h1]
      canvas_v137 = new fn_v135(2, v413);               // #46811:66:1 [L d1 h1]
      v414 = null;                                      // #46817:110:233 [L d1 h1]
      try {
        TP(tryStack, 46865, 184, callDepths);                      // #46820:159:194 [L d1 h1]  try: pushes the catch arm of the enclosing try (TP)
        canvas_v415 = canvas_v137;                      // #46826:208:150 [L d1 h1]
        v138 = "2d";                                    // #46829:68:233 [L d1 h1]
        ctx2d_v416 = (canvas_v415).getContext("2d");          // #46835:69:138 [L d1 h1]
        arr_v139 = tryStack.pop();                           // #46858:44:124 [L d1 h1]
        arr_v140 = [];                                  // #46861:76:53 #46874:214:107 [L d1 h1]
        if (ctx2d_v416) {                               // #46876:77:160 [L d1 h1]
          v417 = 1;                                     // #46895:97:72 [L d1 h1] +#46898:237:53
        } else {
          v417 = 0;                                     // #46882:41:53 #46887:23:72 [-] +#46890:75:53 /* never executed in any replay */
        }
        v141 = 0; arr_v140[0] = v417;                   // #46903:168:26 [L d1 h1]
        fn_v142 = canvas_v137.transferToImageBitmap;          // #46908:223:200 [L d1 h1]
        if (fn_v142) {                                  // #46933:114:160 [L d1 h1]
          v143 = 1;                                     // #46952:250:72 [L d1 h1] +#46955:98:53
        } else {
          v143 = 0;                                     // #46939:250:53 #46944:148:72 [-] +#46947:20:53 /* never executed in any replay */
        }
        v144 = 1; arr_v140[1] = v143;                   // #46960:138:26 [L d1 h1]
        arr_v145 = cell[74](ctx2d_v416);                // #46965:79:22 [L d1 h1]  VM call: pushes a frame, the callee body returns into r202; then arr_v145 = r202 (H142 CALL bind)
        v146 = 2; arr_v140[2] = arr_v145;               // #46969:52:26 [L d1 h1]
        cell[116] = arr_v140;                           // #46974:10:195 [L d1 h1] +#46977:50:53
      } catch (caught) {
        outside("L46868_197");                          // #46866:197:150 [-]  L46868_197 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      // #46797:88:53 [-] /* never executed in any replay */
    }
    v147 = cell[79]();                                  // #46982:138:201 [L d1 h1]  VM call: pushes a frame, the callee body returns into r204; then v147 = r204 (H142 CALL bind)
    cell[120] = v147;                                   // #46986:136:195 [L d1 h1]
    canvas_v148 = cell[49];                             // #46989:211:236 [L d1 h1]
    v149 = "width";                                     // #46992:251:233 [L d1 h1]
    v418 = 49; canvas_v148.width = 49;                  // #46997:137:103 [L d1 h1]
    v150 = "height";                                    // #47002:89:233 [L d1 h1]
    v419 = 44; canvas_v148.height = 44;                 // #47007:239:103 [L d1 h1]
    v151 = 0.4;                                         // #47012:167:233 [L d1 h1]
    v152 = 0.4;                                         // #47023:127:233 [L d1 h1]
    v420 = ctx2d_c50[KP(m47033k127)](0.4, 0.4);          // #47034:44:66 [L d1 h1]
    ctx2d_v153 = ctx2d_c50;                             // #47053:231:236 [L d1 h1]
    v154 = KP(47055);                                   // #47056:191:233 [L d1 h1]
    v421 = "source-over";                               // #47061:55:233 [L d1 h1]
    ctx2d_v153[v154] = "source-over";                   // #47066:181:199 [L d1 h1]
    v155 = "fillStyle";                                 // #47070:213:233 [L d1 h1]
    v422 = "#f2f";                                      // #47075:117:233 [L d1 h1]
    ctx2d_v153.fillStyle = "#f2f";                      // #47083:123:199 [L d1 h1]
    v156 = ctx2d_v153.beginPath();                      // #47087:96:138 [L d1 h1]
    ctx2d_v157 = ctx2d_c50;                             // #47108:75:236 [L d1 h1]
    ctx2d_v423 = ctx2d_c50;                             // #47111:204:150 [L d1 h1]
    fn_v424 = ctx2d_c50.arc;                            // #47114:115:200 [L d1 h1]
    v158 = 40;                                          // #47121:190:72 [L d1 h1]
    v159 = 40;                                          // #47124:157:72 [L d1 h1]
    v425 = 40;                                          // #47127:192:72 [L d1 h1]
    v426 = 0;                                           // #47130:23:72 [L d1 h1]
    math_v427 = v511.Math;                              // #47133:82:200 [L d1 h1]
    v428 = math_v427.PI;                                // #47138:97:200 [L d1 h1]
    v429 = 2;                                           // #47143:116:72 [L d1 h1]
    v430 = math_v427.PI * 2;                            // #47146:236:13 [L d1 h1]
    v431 = true;                                        // #47150:240:233 [L d1 h1]
    v432 = fn_v424.call(ctx2d_v423, 40, 40, v425, v426, v430, v431);          // #47153:65:138 [L d1 h1]
    v160 = ctx2d_c50[KP(m47174k65)]();                  // #47175:102:66 [L d1 h1]
    v161 = ctx2d_c50[KP(m47195k102)]();                 // #47196:55:66 [L d1 h1]
    ctx2d_v162 = ctx2d_c50;                             // #47212:134:236 [L d1 h1]
    v163 = KP(47214);                                   // #47215:162:233 [L d1 h1]
    v433 = "multiply";                                  // #47220:78:233 [L d1 h1]
    ctx2d_v162[v163] = "multiply";                      // #47232:48:199 [L d1 h1]
    v164 = "fillStyle";                                 // #47236:36:233 [L d1 h1]
    v434 = "#2ff";                                      // #47241:72:233 [L d1 h1]
    ctx2d_v162.fillStyle = "#2ff";                      // #47249:194:199 [L d1 h1]
    v165 = ctx2d_v162.beginPath();                      // #47253:75:138 [L d1 h1]
    ctx2d_v166 = ctx2d_c50;                             // #47274:74:236 [L d1 h1]
    ctx2d_v435 = ctx2d_c50;                             // #47277:143:150 [L d1 h1]
    fn_v436 = ctx2d_c50.arc;                            // #47280:234:200 [L d1 h1]
    v167 = 80;                                          // #47287:25:72 [L d1 h1]
    v168 = 40;                                          // #47290:76:72 [L d1 h1]
    v437 = 40;                                          // #47293:115:72 [L d1 h1]
    v438 = 0;                                           // #47296:190:72 [L d1 h1]
    v439 = 2;                                           // #47299:157:72 [L d1 h1]
    math_v440 = v511.Math;                              // #47302:64:200 [L d1 h1]
    v441 = math_v440.PI;                                // #47307:23:200 [L d1 h1]
    v442 = 2 * math_v440.PI;                            // #47312:195:13 [L d1 h1]
    v443 = true;                                        // #47316:43:233 [L d1 h1]
    v444 = fn_v436.call(ctx2d_v435, 80, 40, v437, v438, v442, v443);          // #47319:80:138 [L d1 h1]
    v169 = ctx2d_c50[KP(m47340k80)]();                  // #47341:249:66 [L d1 h1]
    v170 = ctx2d_c50[KP(m47361k249)]();                 // #47362:62:66 [L d1 h1]
    ctx2d_v171 = ctx2d_c50;                             // #47378:49:236 [L d1 h1]
    v172 = "fillStyle";                                 // #47381:97:233 [L d1 h1]
    v445 = "#ff2";                                      // #47386:209:233 [L d1 h1]
    ctx2d_v171.fillStyle = "#ff2";                      // #47394:103:199 [L d1 h1]
    v173 = ctx2d_v171.beginPath();                      // #47398:156:138 [L d1 h1]
    ctx2d_v174 = ctx2d_c50;                             // #47419:151:236 [L d1 h1]
    ctx2d_v446 = ctx2d_c50;                             // #47422:232:150 [L d1 h1]
    fn_v447 = ctx2d_c50.arc;                            // #47425:31:200 [L d1 h1]
    v175 = 60;                                          // #47432:186:72 [L d1 h1]
    v176 = 80;                                          // #47435:169:72 [L d1 h1]
    v448 = 40;                                          // #47438:156:72 [L d1 h1]
    v449 = 0;                                           // #47441:131:72 [L d1 h1]
    math_v450 = v511.Math;                              // #47444:14:200 [L d1 h1]
    v451 = math_v450.PI;                                // #47449:45:200 [L d1 h1]
    v452 = 2;                                           // #47454:16:72 [L d1 h1]
    v453 = math_v450.PI * 2;                            // #47457:24:13 [L d1 h1]
    v454 = true;                                        // #47461:108:233 [L d1 h1]
    v455 = fn_v447.call(ctx2d_v446, 60, 80, v448, v449, v453, v454);          // #47464:205:138 [L d1 h1]
    v177 = ctx2d_c50[KP(m47485k205)]();                 // #47486:194:66 [L d1 h1]
    v178 = ctx2d_c50[KP(m47506k194)]();                 // #47507:35:66 [L d1 h1]
    ctx2d_v179 = ctx2d_c50;                             // #47523:194:236 [L d1 h1]
    v180 = KP(47525);                                   // #47526:238:233 [L d1 h1]
    v456 = "source-over";                               // #47531:106:233 [L d1 h1]
    ctx2d_v179[v180] = "source-over";                   // #47536:220:199 [L d1 h1]
    v181 = "fillStyle";                                 // #47540:32:233 [L d1 h1]
    v457 = "#fff";                                      // #47545:84:233 [L d1 h1]
    ctx2d_v179.fillStyle = "#fff";                      // #47553:158:199 [L d1 h1]
    v182 = ctx2d_v179.beginPath();                      // #47557:183:138 [L d1 h1]
    ctx2d_v183 = ctx2d_c50;                             // #47578:6:236 [L d1 h1]
    ctx2d_v458 = ctx2d_c50;                             // #47581:91:150 [L d1 h1]
    fn_v459 = ctx2d_c50.arc;                            // #47584:134:200 [L d1 h1]
    v184 = 61;                                          // #47591:69:72 [L d1 h1]
    v185 = 53;                                          // #47594:200:72 [L d1 h1]
    v460 = 20;                                          // #47597:255:72 [L d1 h1]
    v461 = 0;                                           // #47600:26:72 [L d1 h1]
    v462 = 2;                                           // #47603:137:72 [L d1 h1]
    math_v463 = v511.Math;                              // #47606:124:200 [L d1 h1]
    v464 = math_v463.PI;                                // #47611:99:200 [L d1 h1]
    v465 = 2 * math_v463.PI;                            // #47616:223:13 [L d1 h1]
    v466 = true;                                        // #47620:215:233 [L d1 h1]
    v467 = fn_v459.call(ctx2d_v458, 61, 53, v460, v461, v465, v466);          // #47623:76:138 [L d1 h1]
    ctx2d_v186 = ctx2d_c50;                             // #47645:135:236 [L d1 h1]
    ctx2d_v468 = ctx2d_c50;                             // #47648:24:150 [L d1 h1]
    fn_v469 = ctx2d_c50.arc;                            // #47651:143:200 [L d1 h1]
    v187 = 61;                                          // #47658:106:72 [L d1 h1]
    v188 = 53;                                          // #47661:153:72 [L d1 h1]
    v470 = 10;                                          // #47664:204:72 [L d1 h1]
    v471 = 0;                                           // #47667:243:72 [L d1 h1]
    math_v472 = v511.Math;                              // #47670:190:200 [L d1 h1]
    v473 = math_v472.PI;                                // #47675:29:200 [L d1 h1]
    v474 = 2;                                           // #47680:64:72 [L d1 h1]
    v475 = math_v472.PI * 2;                            // #47683:136:13 [L d1 h1]
    v476 = true;                                        // #47687:28:233 [L d1 h1]
    v477 = fn_v469.call(ctx2d_v468, 61, 53, v470, v471, v475, v476);          // #47690:189:138 [L d1 h1]
    ctx2d_v189 = ctx2d_c50;                             // #47712:116:236 [L d1 h1]
    ctx2d_v478 = ctx2d_c50;                             // #47715:145:150 [L d1 h1]
    v190 = "evenodd";                                   // #47718:65:233 [L d1 h1]
    v191 = (ctx2d_v478).fill("evenodd");                // #47729:142:138 [L d1 h1]
    v192 = 0;                                           // #47746:45:72 [L d1 h1]
    v479 = 0;                                           // #47749:16:72 [L d1 h1]
    v480 = 49;                                          // #47752:39:72 [L d1 h1]
    v481 = 44;                                          // #47755:162:72 [L d1 h1]
    imageData_v193 = ctx2d_c50[KP(m47757k162)](0, v479, v480, v481);          // #47758:131:66 [L d1 h1]
    uint8ClampedArray_v482 = imageData_v193.data;          // #47786:14:200 [L d1 h1]
    fn_v194 = v511.Promise;                             // #47791:45:200 [L d1 h1]
    v195 = null;                                        // #47796:109:233 [L d1 h1]
    promise_v483 = fn_v194.resolve(null);               // #47799:10:138 [L d1 h1]
    fn_v196 = cell[58];                                 // #47819:205:236 [L d1 h1]
    if (fn_v196) {                                      // #47822:40:160 [L d1 h1]
      try {
        TP(tryStack, 48088, 25, callDepths);                       // #47833:17:194 [L d1 h1]  try: pushes the catch arm of the enclosing try (TP)
        fn_v197 = fn_v196;                              // #47839:250:150 [L d1 h1]
        v198 = 49;                                      // #47842:233:72 [L d1 h1]
        v484 = 44;                                      // #47845:220:72 [L d1 h1]
        canvas_v199 = new fn_v197(49, v484);            // #47848:216:1 [L d1 h1]
        canvas_v485 = canvas_v199;                      // #47854:101:150 [L d1 h1]
        fn_v486 = canvas_v199.getContext;               // #47857:232:200 [L d1 h1]
        v200 = "2d";                                    // #47871:252:233 [L d1 h1]
        v487 = {};                                      // #47877:30:159 [L d1 h1]
        v488 = "willReadFrequently";                    // #47879:218:233 [L d1 h1]
        v489 = true;                                    // #47884:166:233 [L d1 h1]
        v487.willReadFrequently = true;                 // #47887:40:199 [L d1 h1]
        ctx2d_v490 = fn_v486.call(canvas_v485, "2d", v487);          // #47891:153:138 [L d1 h1]
        if (ctx2d_v490) {                               // #47916:196:160 [L d1 h1]
          ctx2d_v491 = ctx2d_v490;                      // #47935:120:150 [L d1 h1]
          fn_v492 = ctx2d_v490.drawImage;               // #47938:111:200 [L d1 h1]
          canvas_v202 = cell[49];                       // #47943:222:236 [L d1 h1]
          v493 = 0;                                     // #47946:61:72 [L d1 h1]
          v494 = 0;                                     // #47949:224:72 [L d1 h1]
          v203 = fn_v492.call(ctx2d_v491, canvas_v202, v493, v494);          // #47952:113:138 [L d1 h1]
          v204 = v203;                                  // #47977:218:150 [L d1 h1] +#47980:194:53
        } else {
          v201 = ctx2d_v490;                            // #47922:132:53 #47927:120:150 [-] +#47930:104:53 /* never executed in any replay */
        }
        fn_v205 = canvas_v199.transferToImageBitmap;          // #47985:45:200 [L d1 h1]
        if (fn_v205) {                                  // #48010:8:160 [L d1 h1]
          fn_v495 = cell[77];                           // #48029:251:236 [L d1 h1]
          v207 = undefined;                             // #48032:131:233 [L d1 h1]
          imageBitmap_v208 = canvas_v199.transferToImageBitmap();          // #48035:72:138 [L d1 h1]
          promise_v483 = MC(undefined, fn_v495, imageBitmap_v208);          // #48068:129:114 [L d1 h1]
          promise_v209 = promise_v483;                  // #48073:170:150 [L d1 h1] +#48076:82:53
        } else {
          v206 = fn_v205;                               // #48016:184:53 #48021:118:150 [-] +#48024:238:53 /* never executed in any replay */
        }
        arr_v210 = tryStack.pop();                           // #48081:200:124 [L d1 h1] +#48084:120:53
      } catch (caught) {
        outside("L48091_226");                          // #48089:226:150 [-]  L48091_226 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      // #47828:88:53 [-] /* never executed in any replay */
    }
    fn_v211 = v511.Promise;                             // #48097:45:200 [L d1 h1]
    v212 = null;                                        // #48102:109:233 [L d1 h1]
    promise_v496 = fn_v211.resolve(null);               // #48105:10:138 [L d1 h1]
    win_v213 = v511[v236];                              // #48125:60:7 [L d1 h1]
    fn_v214 = win_v213.createImageBitmap;               // #48129:35:200 [L d1 h1]
    if (fn_v214) {                                      // #48150:166:160 [L d1 h1]
      try {
        TP(tryStack, 48296, 149, callDepths);                      // #48161:74:194 [L d1 h1]  try: pushes the catch arm of the enclosing try (TP)
        win_v215 = v511[v236];                          // #48167:124:7 [L d1 h1]
        win_v216 = win_v215;                            // #48171:121:150 [L d1 h1]
        fn_v497 = win_v215.createImageBitmap;           // #48174:172:200 [L d1 h1]
        canvas_v217 = cell[49];                         // #48195:103:236 [L d1 h1]
        promise_v218 = fn_v497.call(win_v216, canvas_v217);          // #48198:156:138 [L d1 h1]
        fn_v219 = promise_v218.then;                    // #48229:3:200 [L d1 h1]
        fn_v498 = cell[77];                             // #48234:34:236 [L d1 h1]
        promise_v220 = fn_v219.call(promise_v218, fn_v498);          // #48237:43:138 [L d1 h1]
        fn_v221 = promise_v220.catch;                   // #48255:22:200 [L d1 h1]
        fn_v222 = clos;                                 // #48260:229:216 [L d1 h1]  closure creation (operands from the byte stream); then fn_v222 = its home register (H139 CLOS bind)
        promise_v496 = fn_v221.call(promise_v220, fn_v222);          // #48270:162:138 [L d1 h1]
        arr_v223 = tryStack.pop();                           // #48289:85:124 [L d1 h1] +#48292:17:53
      } catch (caught) {
        outside("L48299_110");                          // #48297:110:150 [-]  L48299_110 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      // #48156:94:53 [-] /* never executed in any replay */
    }
    fn_v224 = v511.Promise;                             // #48305:215:200 [L d1 h1]
    fn_v225 = fn_v224;                                  // #48310:40:150 [L d1 h1]
    fn_v499 = fn_v224.all;                              // #48313:95:200 [L d1 h1]
    arr_v226 = [];                                      // #48320:81:107 [L d1 h1]
    fn_v500 = cell[78];                                 // #48322:184:236 [L d1 h1]
    v501 = undefined;                                   // #48325:140:233 [L d1 h1]
    buf_v227 = uint8ClampedArray_v482.buffer;           // #48328:51:200 [L d1 h1]
    promise_v502 = MC(v501, fn_v500, buf_v227);          // #48333:128:114 [L d1 h1]
    v228 = 0; arr_v226[0] = promise_v502;               // #48338:225:26 [L d1 h1]
    v229 = 1; arr_v226[1] = promise_v483;               // #48343:254:26 [L d1 h1]
    v230 = 2; arr_v226[2] = promise_v496;               // #48348:231:26 [L d1 h1]
    promise_v231 = fn_v499.call(fn_v225, arr_v226);          // #48353:28:138 [L d1 h1]
    fn_v503 = promise_v231.then;                        // #48370:131:200 [L d1 h1]
    fn_v232 = clos;                                     // #48375:222:216 [L d1 h1]  closure creation (operands from the byte stream); then fn_v232 = its home register (H139 CLOS bind)
    promise_v504 = fn_v503.call(promise_v231, fn_v232);          // #48389:247:138 [L d1 h1]
    fn_v505 = promise_v504.catch;                       // #48407:178:200 [L d1 h1]
    fn_v506 = clos;                                     // #48412:17:216 [L d1 h1]  closure creation (operands from the byte stream); then fn_v506 = its home register (H139 CLOS bind)
    promise_v507 = fn_v505.call(promise_v504, fn_v506);          // #48425:30:138 [L d1 h1]
    return promise_v507;                                // #48444:182:245 [L d1 h1]
  } catch (caught) {
    err_v233 = caught;                                    // #48454:115:150 [L c1]
    v234 = KP(m48456k115);                              // #48457:27:233 [L c1]
    v508 = err_v233[KP(m48466k27)];                     // #48467:70:200 [L c1]
    v235 = v234 + v508;                                 // #48472:195:222 [L c1]
    cell[37] = v235;                                    // #48476:29:195 [L c1]
    fn_v509 = r70[KP(m48478k29)];                       // #48479:192:200 [L c1]
    promise_v510 = (fn_v509)[KP(m48483k192)]();         // #48484:209:138 [L c1]
    return promise_v510;                                // #48503:93:245 [L c1]
  }
}