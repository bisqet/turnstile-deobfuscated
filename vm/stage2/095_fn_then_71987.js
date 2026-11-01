function fn_then_71987(win_v72 /* r70 */, v73 /* r88 */, v74 /* r208 */, v75 /* r214 */, v76 /* r221 */, fn_v77 /* r227 */) { // entry L71987_245; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 435 register webs used only inside this fn (no live-in, cross-call or table-made def; 364 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 11 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, reflect_v2 /* r205 */, v3 /* r202 */, v4 /* r205 */, v5 /* r202 */, fn_v6 /* r205 */, reflect_v7 /* r205 */, fn_v8 /* r205 */, v9 /* r202 */, v10 /* r205 */;
  let v11 /* r202 */, v12 /* r205 */, fn_v13 /* r205 */, reflect_v14 /* r205 */, fn_v15 /* r205 */, reflect_v16 /* r205 */, v17 /* r205 */, reflect_v18 /* r205 */, fn_v19 /* r205 */, v20 /* r205 */;
  let v21 /* r205 */, reflect_v22 /* r205 */, win_v23 /* r205 */, v24 /* r205 */, reflect_v25 /* r205 */, v26 /* r205 */, reflect_v27 /* r205 */, win_v28 /* r205 */, v29 /* r205 */, reflect_v30 /* r205 */;
  let v31 /* r205 */, mql_v32 /* r205 */, v33 /* r205 */, reflect_v34 /* r205 */, win_v35 /* r205 */, v36 /* r202 */, v37 /* r205 */, v38 /* r202 */, v39 /* r205 */, reflect_v40 /* r205 */;
  let reflect_v41 /* r205 */, fontFaceSet_v42 /* r205 */, v43 /* r205 */, v44 /* r205 */, v45 /* r205 */, v46 /* r205 */, v47 /* r205 */, reflect_v48 /* r205 */, v49 /* r205 */, reflect_v50 /* r205 */;
  let v51 /* r205 */, reflect_v52 /* r205 */, fn_v53 /* r205 */, v54 /* r202 */, v55 /* r205 */, v56 /* r202 */, reflect_v57 /* r205 */, v58 /* r205 */, math_v59 /* r205 */, v60 /* r205 */;
  let reflect_v61 /* r205 */, v62 /* r205 */, reflect_v63 /* r205 */, v64 /* r205 */, reflect_v65 /* r205 */, v66 /* r205 */, v67 /* r205 */, reflect_v68 /* r205 */, v69 /* r205 */, v70 /* r205 */;
  let v71 /* r205 */, fn_v78 /* r204 */, v79 /* r193 */, v80 /* r198 */, v81 /* r196 */, v82 /* r199 */, v83 /* r195 */, v84 /* r202 */, v85 /* r202 */, v86 /* r202 */;
  let v87 /* r202 */, v88 /* r202 */, v89 /* r202 */, v90 /* r202 */, v91 /* r202 */, v92 /* r202 */, v93 /* r202 */, v94 /* r202 */, v95 /* r202 */, v96 /* r202 */;
  let v97 /* r202 */, v98 /* r202 */, v99 /* r202 */, v100 /* r202 */, v101 /* r202 */, v102 /* r202 */, v103 /* r202 */, v104 /* r202 */, v105 /* r202 */, v106 /* r202 */;
  let v107 /* r202 */, v108 /* r202 */, v109 /* r202 */, reflect_v110 /* r198 */, fn_v111 /* r196 */, arr_v112 /* r199 */, v113 /* r199 */, v114 /* r198 */, v115 /* r199 */, v116 /* r202 */;
  let promise_v117 /* r198 */, fn_v118 /* r196 */, fn_v119 /* r199 */, promise_v120 /* r202 */, v121 /* r205 */, err_v122 /* r202 */, fn_v123 /* r199 */, v124 /* r205 */, reflect_v125 /* r202 */, v126 /* r202 */;
  let v127 /* r205 */, reflect_v128 /* r198 */, fn_v129 /* r196 */, fn_v130 /* r199 */, arr_v131 /* r199 */, v132 /* r199 */, v133 /* r198 */, v134 /* r199 */, v135 /* r202 */, v136 /* r198 */;
  let v137 /* r196 */, v138 /* r199 */, v139 /* r202 */, v140 /* r205 */, err_v141 /* r202 */, fn_v142 /* r199 */, v143 /* r205 */, v144 /* r202 */, v145 /* r205 */, reflect_v146 /* r202 */;
  let v147 /* r202 */, v148 /* r205 */, reflect_v149 /* r199 */, fn_v150 /* r198 */, fn_v151 /* r202 */, arr_v152 /* r202 */, v153 /* r196 */, v154 /* r205 */, reflect_v155 /* r198 */, fn_v156 /* r196 */;
  let cSS_v157 /* r202 */, arr_v158 /* r199 */, v159 /* r195 */, v160 /* r195 */, v161 /* r202 */, v162 /* r205 */, reflect_v163 /* r196 */, fn_v164 /* r195 */, arr_v165 /* r199 */, win_v166 /* r192 */;
  let v167 /* r193 */, arr_v168 /* r198 */, fn_v169 /* r199 */, v170 /* r202 */, v171 /* r199 */, v172 /* r196 */, v173 /* r202 */, v174 /* r205 */, v175 /* r202 */, v176 /* r205 */;
  let v177 /* r196 */, v178 /* r253 */, v179 /* r254 */, v180 /* r193 */, v181 /* r195 */, v182 /* r199 */, v183 /* r202 */, v184 /* r192 */, v185 /* r202 */, v186 /* r192 */;
  let v187 /* r202 */, v188 /* r202 */, v189 /* r205 */, v190 /* r199 */, v191 /* r202 */, v192 /* r198 */, v193 /* r202 */, reflect_v194 /* r199 */, reflect_v195 /* r196 */, fn_v196 /* r195 */;
  let win_v197 /* r199 */, arr_v198 /* r198 */, v199 /* r193 */, v200 /* r199 */, v201 /* r198 */, v202 /* r202 */, v203 /* r205 */, reflect_v204 /* r198 */, fn_v205 /* r196 */, arr_v206 /* r199 */;
  let fn_v207 /* r195 */, fn_v208 /* r193 */, v209 /* r195 */, v210 /* r202 */, v211 /* r199 */, v212 /* r198 */, v213 /* r205 */, win_v214 /* r199 */, fn_v215 /* r198 */, v216 /* r199 */;
  let v217 /* r202 */, win_v218 /* r199 */, v219 /* r202 */, v220 /* r205 */, reflect_v221 /* r198 */, fn_v222 /* r196 */, win_v223 /* r202 */, arr_v224 /* r199 */, v225 /* r195 */, v226 /* r202 */;
  let v227 /* r205 */, reflect_v228 /* r198 */, fn_v229 /* r196 */, arr_v230 /* r199 */, fn_v231 /* r195 */, fn_v232 /* r193 */, v233 /* r195 */, v234 /* r193 */, v235 /* r195 */, v236 /* r202 */;
  let v237 /* r199 */, v238 /* r198 */, v239 /* r205 */, win_v240 /* r199 */, fn_v241 /* r198 */, v242 /* r199 */, v243 /* r202 */, win_v244 /* r199 */, v245 /* r202 */, v246 /* r205 */;
  let reflect_v247 /* r198 */, fn_v248 /* r196 */, win_v249 /* r202 */, arr_v250 /* r199 */, v251 /* r195 */, v252 /* r202 */, v253 /* r205 */, reflect_v254 /* r202 */, reflect_v255 /* r198 */, fn_v256 /* r196 */;
  let win_v257 /* r202 */, arr_v258 /* r199 */, v259 /* r193 */, v260 /* r195 */, v261 /* r202 */, v262 /* r198 */, v263 /* r196 */, v264 /* r199 */, v265 /* r199 */, v266 /* r198 */;
  let v267 /* r202 */, v268 /* r205 */, reflect_v269 /* r198 */, fn_v270 /* r196 */, arr_v271 /* r199 */, v272 /* r199 */, v273 /* r198 */, v274 /* r199 */, v275 /* r202 */, v276 /* r198 */;
  let v277 /* r196 */, v278 /* r199 */, v279 /* r202 */, v280 /* r205 */, v281 /* r202 */, v282 /* r199 */, v283 /* r205 */, reflect_v284 /* r202 */, reflect_v285 /* r196 */, fn_v286 /* r195 */;
  let win_v287 /* r202 */, arr_v288 /* r198 */, v289 /* r192 */, v290 /* r193 */, promise_v291 /* r205 */, v292 /* r199 */, fn_v293 /* r199 */, v294 /* r198 */, v295 /* r199 */, v296 /* r202 */;
  let v297 /* r202 */, promise_v298 /* r199 */, fn_v299 /* r198 */, fn_v300 /* r202 */, promise_v301 /* r196 */, v302 /* r205 */, v303 /* r202 */, reflect_v304 /* r196 */, fn_v305 /* r195 */, win_v306 /* r199 */;
  let arr_v307 /* r198 */, v308 /* r205 */, reflect_v309 /* r198 */, fn_v310 /* r196 */, doc_v311 /* r202 */, arr_v312 /* r199 */, v313 /* r195 */, v314 /* r202 */, v315 /* r202 */, v316 /* r199 */;
  let v317 /* r202 */, v318 /* r205 */, reflect_v319 /* r199 */, reflect_v320 /* r195 */, fn_v321 /* r193 */, fn_v322 /* r198 */, arr_v323 /* r196 */, v324 /* r199 */, v325 /* r192 */, v326 /* r199 */;
  let v327 /* r199 */, v328 /* r192 */, fn_v329 /* r254 */, v330 /* r192 */, v331 /* r199 */, v332 /* r199 */, v333 /* r202 */, v334 /* r199 */, v335 /* r198 */, v336 /* r202 */;
  let v337 /* r205 */, reflect_v338 /* r202 */, reflect_v339 /* r198 */, fn_v340 /* r196 */, fn_v341 /* r202 */, arr_v342 /* r199 */, v343 /* r193 */, v344 /* r195 */, v345 /* r202 */, v346 /* r198 */;
  let v347 /* r196 */, v348 /* r199 */, v349 /* r202 */, v350 /* r199 */, v351 /* r198 */, v352 /* r202 */, v353 /* r205 */, reflect_v354 /* r198 */, fn_v355 /* r196 */, fn_v356 /* r202 */;
  let arr_v357 /* r199 */, v358 /* r195 */, v359 /* r202 */, v360 /* r205 */, reflect_v361 /* r198 */, fn_v362 /* r196 */, fn_v363 /* r202 */, arr_v364 /* r199 */, v365 /* r195 */, v366 /* r202 */;
  let v367 /* r205 */, reflect_v368 /* r198 */, fn_v369 /* r196 */, win_v370 /* r199 */, arr_v371 /* r199 */, v372 /* r199 */, v373 /* r198 */, v374 /* r199 */, v375 /* r202 */, v376 /* r198 */;
  let v377 /* r196 */, v378 /* r199 */, v379 /* r202 */, v380 /* r205 */, err_v381 /* r202 */, fn_v382 /* r199 */, v383 /* r205 */, reflect_v384 /* r198 */, fn_v385 /* r196 */, fn_v386 /* r202 */;
  let arr_v387 /* r199 */, v388 /* r195 */, v389 /* r202 */, v390 /* r205 */, fn_v391 /* r199 */, v392 /* r202 */, fn_v393 /* r198 */, fn_v394 /* r202 */, v395 /* r199 */, v396 /* r202 */;
  let v397 /* r195 */, reflect_v398 /* r198 */, fn_v399 /* r196 */, storage_v400 /* r202 */, arr_v401 /* r199 */, v402 /* r202 */, v403 /* r205 */, reflect_v404 /* r198 */, fn_v405 /* r196 */, v406 /* r202 */;
  let arr_v407 /* r199 */, v408 /* r202 */, v409 /* r205 */, reflect_v410 /* r196 */, fn_v411 /* r195 */, arr_v412 /* r198 */, promise_v413 /* r202 */, v414 /* r199 */, fn_v415 /* r199 */, v416 /* r198 */;
  let v417 /* r199 */, v418 /* r205 */, promise_v419 /* r199 */, fn_v420 /* r198 */, fn_v421 /* r202 */, promise_v422 /* r196 */, v423 /* r205 */, v424 /* r202 */, v425 /* r199 */, doc_v426 /* r199 */;
  let elVideo_v427 /* r202 */, reflect_v428 /* r198 */, fn_v429 /* r196 */, arr_v430 /* r199 */, v431 /* r195 */, v432 /* r204 */, v433 /* r205 */, v434 /* r205 */, v435 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Reflect: reflect_v2 255, reflect_v7 42, reflect_v14 24, reflect_v16 3, reflect_v18 3, reflect_v22 3, reflect_v25 3, reflect_v27 3
  //   Reflect: reflect_v30 3, reflect_v34 3, reflect_v40 3, reflect_v41 3, reflect_v48 3, reflect_v50 3, reflect_v52 3, reflect_v57 3
  //   Reflect: reflect_v61 3, reflect_v63 3, reflect_v65 3, reflect_v68 3, reflect_v110 255, reflect_v125 42, reflect_v128 42, reflect_v146 24
  //   Reflect: reflect_v149 24, reflect_v155 3, reflect_v163 3, reflect_v194 3, reflect_v195 3, reflect_v204 3, reflect_v221 3, reflect_v228 3
  //   Reflect: reflect_v247 3, reflect_v254 3, reflect_v255 3, reflect_v269 3, reflect_v284 3, reflect_v285 3, reflect_v304 3, reflect_v309 3
  //   Reflect: reflect_v319 3, reflect_v320 3, reflect_v338 3, reflect_v339 3, reflect_v354 3, reflect_v361 3, reflect_v368 3, reflect_v384 3
  //   Reflect: reflect_v398 3, reflect_v404 3, reflect_v410 3, reflect_v428 3
  //   Function: fn_v6 42, fn_v8 42, fn_v13 24, fn_v15 24, fn_v19 3, fn_v53 3, fn_v77 390, fn_v78 390
  //   Function: fn_v111 255, fn_v118 30, fn_v119 30, fn_v123 222, fn_v129 42, fn_v130 42, fn_v142 12, fn_v150 24
  //   Function: fn_v151 24, fn_v156 3, fn_v164 3, fn_v169 3, fn_v196 3, fn_v205 3, fn_v207 3, fn_v208 3
  //   Function: fn_v215 3, fn_v222 3, fn_v229 3, fn_v231 3, fn_v232 3, fn_v241 3, fn_v248 3, fn_v256 3
  //   Function: fn_v270 3, fn_v286 3, fn_v293 3, fn_v299 3, fn_v300 3, fn_v305 3, fn_v310 3, fn_v321 3
  //   Function: fn_v322 3, fn_v329 3, fn_v340 3, fn_v341 3, fn_v355 3, fn_v356 3, fn_v362 3, fn_v363 3
  //   Function: fn_v369 3, fn_v382 3, fn_v385 3, fn_v386 3, fn_v391 3, fn_v393 3, fn_v394 3, fn_v399 3
  //   Function: fn_v405 3, fn_v411 3, fn_v415 3, fn_v420 3, fn_v421 3, fn_v429 3
  //   Window: win_v23 3, win_v28 3, win_v35 3, win_v72 390, win_v166 3, win_v197 3, win_v214 3, win_v218 3
  //   Window: win_v223 3, win_v240 3, win_v244 3, win_v249 3, win_v257 3, win_v287 3, win_v306 3, win_v370 3
  //   MediaQueryList: mql_v32 3
  //   FontFaceSet: fontFaceSet_v42 3
  //   Math: math_v59 3
  //   Array: arr_v112 255, arr_v131 42, arr_v152 24, arr_v158 3, arr_v165 3, arr_v168 3, arr_v198 3, arr_v206 3
  //   Array: arr_v224 3, arr_v230 3, arr_v250 3, arr_v258 3, arr_v271 3, arr_v288 3, arr_v307 3, arr_v312 3
  //   Array: arr_v323 3, arr_v342 3, arr_v357 3, arr_v364 3, arr_v371 3, arr_v387 3, arr_v401 3, arr_v407 3
  //   Array: arr_v412 3, arr_v430 3
  //   Promise: promise_v117 30, promise_v120 30, promise_v291 3, promise_v298 3, promise_v301 3, promise_v413 3, promise_v419 3, promise_v422 3
  //   Error: err_v122 222, err_v141 12, err_v381 3
  //   CSS: cSS_v157 3
  //   HTMLDocument: doc_v311 3, doc_v426 3
  //   Storage: storage_v400 3
  //   HTMLVideoElement: elVideo_v427 3
  // H142: 2 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 51 single-use temps folded (50 of them expressions, H135), 35 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 40 webs kept as registers (retOut 40)
  fn_v78 = fn_v77;                                      // #71988:78:150 [L d130 h130 c130]
  v79 = v73;                                            // #71991:131:150 [L d130 h130 c130]
  v80 = undefined;                                      // #71994:7:53 #72004:231:233 #72007:191:233 #72010:55:233 #72013:207:233 [L d130 h130 c130]
  v81 = undefined;                                      // #72016:7:233 #72019:95:233 [L d130 h130 c130]
  v82 = undefined;                                      // #72022:87:233 #72025:111:233 #72028:39:233 #72031:255:233 #72034:119:233 #72037:15:233 #72040:71:233 #72043:159:233 #72046:151:233 #72049:175:233 #72052:103:233 [L d130 h130 c130]
  v83 = undefined;                                      // #72055:63:233 #72058:183:233 #72061:79:233 [L d130 h130 c130] +#72064:135:233 +#72067:223:233 +#72070:215:233 +#72073:239:233 +#72076:167:233
  try {
    TP(tryStack, 76423, 132, callDepths);                          // #72079:52:194 [L d130 h130 c130]  try: pushes the catch arm of the enclosing try (TP)
    v84 = 0;                                            // #72085:187:72 [L d130 h130 c130]
    if ((v79 === (0))) {                                // #72088:59:65 #72092:94:160 [L d130 h130 c130]
      try {
        TP(tryStack, 72722, 184, callDepths);                      // #72558:144:194 [L d85 h85 c85]  try: pushes the catch arm of the enclosing try (TP)
        reflect_v2 = win_v72.Reflect;                   // #72564:39:200 [L d85 h85 c85]
        reflect_v110 = reflect_v2;                      // #72569:56:150 [L d85 h85 c85]
        fn_v111 = reflect_v2.apply;                     // #72572:47:200 [L d85 h85 c85]
        arr_v112 = [];                                  // #72577:231:233 #72580:185:107 [L d85 h85 c85]
        v3 = fn_v111.call(reflect_v110, fn_v78, null, arr_v112);  // #72582:38:138 [L d85 h85 c85]
        if (v3) {                                       // #72603:93:160 [L d11 h11 c11]
          v113 = v3.then;                               // #72622:85:200 [L d11 h11 c11]
          v114 = typeof v113;                           // #72627:109:193 [L d11 h11 c11]
          v115 = v114 === v75;                          // #72630:165:65 [L d11 h11 c11]
          v4 = v115;                                    // #72634:62:150 [L d11 h11 c11] +#72637:150:53
        } else {
          v4 = v3;                                      // #72609:249:53 #72614:54:150 [-] +#72617:174:53 /* never executed in any replay */
        }
        if (v4) {                                       // #72642:173:160 [L d11 h11 c11]
          promise_v117 = v3;                            // #72661:199:150 [L d10 h10 c10]
          fn_v118 = v3.then;                            // #72664:66:200 [L d10 h10 c10]
          v5 = null;                                    // #72669:110:233 [L d10 h10 c10]
          fn_v119 = clos;                               // #72672:221:216 [L d10 h10 c10]  closure creation (operands from the byte stream); then fn_v119 = its home register (H139 CLOS bind)
          promise_v120 = fn_v118.call(promise_v117, v5, fn_v119);  // #72681:186:138 #72700:63:150 [L d10 h10 c10] +#72703:211:53
        } else {
          v116 = v4;                                    // #72648:9:53 #72653:238:150 [L d1 h1 c1] +#72656:134:53
        }
        v121 = "wdhwX8";                                // #72708:77:233 [L d11 h11 c11]
        return "wdhwX8";                                // #72713:233:245 [L d11 h11 c11]
      } catch (caught) {
        err_v122 = caught;                                // #72723:197:150 [L d74 h74 c74]
        fn_v123 = win_v72.TypeError;                    // #72726:200:200 [L d74 h74 c74]
        if ((err_v122 instanceof fn_v123)) {            // #72731:206:67 #72735:101:160 [L d74 h74 c74]
          v124 = "MntR6";                               // #72756:134:233 [L d74 h74 c74] +#72761:190:53
        } else {
          v124 = "mEXs3";                               // #72741:225:53 #72746:33:233 [-] +#72751:173:53 /* never executed in any replay */
        }
        return v124;                                    // #72766:108:245 [L d74 h74 c74]
      }
    } else {
      v85 = 1;                                          // #72098:54:53 #72103:230:72 [L d45 h45 c45]
      if ((v79 === (1))) {                              // #72106:122:65 #72110:97:160 [L d45 h45 c45]
        reflect_v125 = win_v72.Reflect;                 // #72773:197:200 [L d14 h14 c14]
        fn_v6 = reflect_v125.construct;                 // #72778:200:200 [L d14 h14 c14]
        v126 = typeof fn_v6;                            // #72783:212:193 [L d14 h14 c14]
        v127 = v126 === v75;                            // #72786:48:65 [L d14 h14 c14]
        if (v127) {                                     // #72790:191:160 [L d14 h14 c14]
          try {
            TP(tryStack, 72980, 130, callDepths);                  // #72803:186:194 [L d14 h14 c14]  try: pushes the catch arm of the enclosing try (TP)
            reflect_v7 = win_v72.Reflect;               // #72809:41:200 [L d14 h14 c14]
            reflect_v128 = reflect_v7;                  // #72814:178:150 [L d14 h14 c14]
            fn_v129 = reflect_v7.construct;             // #72817:65:200 [L d14 h14 c14]
            fn_v130 = clos;                             // #72822:36:216 [L d14 h14 c14]  closure creation (operands from the byte stream); then fn_v130 = its home register (H139 CLOS bind)
            fn_v8 = fn_v130;                            // #72831:129:150 [L d14 h14 c14]
            arr_v131 = [];                              // #72834:107:107 [L d14 h14 c14]
            v9 = fn_v129.call(reflect_v128, fn_v8, arr_v131, fn_v78);  // #72836:144:138 [L d14 h14 c14]
            if (v9) {                                   // #72861:159:160 [L d10 h10 c10]
              v132 = v9.then;                           // #72880:95:200 [L d10 h10 c10]
              v133 = typeof v132;                       // #72885:207:193 [L d10 h10 c10]
              v134 = v75 === v133;                      // #72888:255:65 [L d10 h10 c10]
              v10 = v134;                               // #72892:176:150 [L d10 h10 c10] +#72895:192:53
            } else {
              v10 = v9;                                 // #72867:179:53 #72872:183:150 [-] +#72875:107:53 /* never executed in any replay */
            }
            if (v10) {                                  // #72900:242:160 [L d10 h10 c10]
              v136 = v9;                                // #72919:116:150 [-] /* never executed in any replay */
              v137 = v9.then;                           // #72922:123:200 [-] /* never executed in any replay */
              v11 = null;                               // #72927:3:233 [-] /* never executed in any replay */
              v138 = clos;                              // #72930:94:216 [-]  closure creation (operands from the byte stream); then v138 = its home register (H139 CLOS bind) /* never executed in any replay */
              v139 = v137.call(v136, v11, v138);        // #72939:119:138 #72958:72:150 [-] +#72961:248:53 /* never executed in any replay */
            } else {
              v135 = v10;                               // #72906:122:53 #72911:147:150 [L d10 h10 c10] +#72914:215:53
            }
            v140 = "wdhwX8";                            // #72966:73:233 [L d10 h10 c10]
            return "wdhwX8";                            // #72971:245:245 [L d10 h10 c10]
          } catch (caught) {
            err_v141 = caught;                            // #72981:231:150 [L d4 h4 c4]
            fn_v142 = win_v72.TypeError;                // #72984:226:200 [L d4 h4 c4]
            if ((err_v141 instanceof fn_v142)) {        // #72989:0:67 #72993:79:160 [L d4 h4 c4]
              v143 = "MntR6";                           // #73014:12:233 [L d4 h4 c4] +#73019:172:53
            } else {
              v143 = "mEXs3";                           // #72999:163:53 #73004:130:233 [-] +#73009:202:53 /* never executed in any replay */
            }
            return v143;                                // #73024:112:245 [L d4 h4 c4]
          }
        } else {
          return v74;                                   // #72796:83:53 #72801:165:245 [-] /* never executed in any replay */
        }
      } else {
        v86 = 2;                                        // #72116:237:53 #72121:224:72 [L d31 h31 c31]
        v1 = v79 === (2);                               // #72124:12:65 [L d31 h31 c31]
        if (v1) {                                       // #72128:43:160 [L d31 h31 c31]
          v12 = cell[26](fn_v78, r212);                 // #73031:124:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then v12 = r205 (H142 CALL bind)
          v144 = undefined;                             // #73036:64:233 [L d1 h1 c1]
          if (v12 === v144) {                           // #73039:204:161 [L d1 h1 c1]
            v145 = "MntR6";                             // #73062:20:233 [L d1 h1 c1] +#73067:148:53
          } else {
            v145 = "wdhwX8";                            // #73047:108:53 #73052:122:233 [-] +#73057:226:53 /* never executed in any replay */
          }
          return v145;                                  // #73072:231:245 [L d1 h1 c1]
        }
        v87 = 3;                                        // #72134:15:53 #72139:99:72 [L d30 h30 c30]
        if ((v79 === (3))) {                            // #72142:67:65 #72146:70:160 [L d30 h30 c30]
          reflect_v146 = win_v72.Reflect;               // #73074:110:200 [L d8 h8 c8]
          fn_v13 = reflect_v146.construct;              // #73079:13:200 [L d8 h8 c8]
          v147 = typeof fn_v13;                         // #73084:69:193 [L d8 h8 c8]
          v148 = v147 === v75;                          // #73087:29:65 [L d8 h8 c8]
          if (v148) {                                   // #73091:56:160 [L d8 h8 c8]
            reflect_v14 = win_v72.Reflect;              // #73104:248:200 [L d8 h8 c8]
            reflect_v149 = reflect_v14;                 // #73109:5:150 [L d8 h8 c8]
            fn_v150 = reflect_v14.construct;            // #73112:8:200 [L d8 h8 c8]
            fn_v151 = clos;                             // #73117:143:216 [L d8 h8 c8]  closure creation (operands from the byte stream); then fn_v151 = its home register (H139 CLOS bind)
            fn_v15 = fn_v151;                           // #73126:0:150 [L d8 h8 c8]
            arr_v152 = [];                              // #73129:174:107 [L d8 h8 c8]
            v153 = fn_v150.call(reflect_v149, fn_v15, arr_v152, fn_v78);  // #73131:135:138 [L d8 h8 c8]
            v154 = "MntR6";                             // #73156:223:233 [L d8 h8 c8]
            return "MntR6";                             // #73161:179:245 [L d8 h8 c8]
          }
          return v74;                                   // #73097:40:53 #73102:132:245 [-] /* never executed in any replay */
        }
        v88 = 4;                                        // #72152:126:53 #72157:153:72 [L d22 h22 c22]
        if ((v79 === (4))) {                            // #72160:33:65 #72164:44:160 [L d22 h22 c22]
          reflect_v16 = win_v72.Reflect;                // #73163:166:200 [L d1 h1 c1]
          reflect_v155 = reflect_v16;                   // #73168:123:150 [L d1 h1 c1]
          fn_v156 = reflect_v16.apply;                  // #73171:38:200 [L d1 h1 c1]
          cSS_v157 = win_v72[v76].CSS;                  // #73176:232:7 #73180:31:200 [L d1 h1 c1]
          arr_v158 = [];                                // #73187:17:107 [L d1 h1 c1]
          v159 = "color";                               // #73189:193:233 [L d1 h1 c1]
          arr_v158[0] = "color";                        // #73198:94:26 [L d1 h1 c1]
          v160 = "";                                    // #73203:26:233 [L d1 h1 c1]
          arr_v158[1] = "";                             // #73207:147:26 [L d1 h1 c1]
          v17 = fn_v156.call(reflect_v155, fn_v78, cSS_v157, arr_v158);  // #73212:24:138 [L d1 h1 c1]
          v161 = false;                                 // #73233:108:233 [L d1 h1 c1]
          if (v17 === v161) {                           // #73236:72:161 [L d1 h1 c1]
            v162 = "MntR6";                             // #73259:128:233 [L d1 h1 c1] +#73264:80:53
          } else {
            v162 = "wdhwX8";                            // #73244:248:53 #73249:138:233 [-] +#73254:178:53 /* never executed in any replay */
          }
          return v162;                                  // #73269:56:245 [L d1 h1 c1]
        }
        v89 = 5;                                        // #72170:76:53 #72175:18:72 [L d21 h21 c21]
        if ((v79 === (5))) {                            // #72178:246:65 #72182:237:160 [L d21 h21 c21]
          reflect_v18 = win_v72.Reflect;                // #73271:41:200 [L d1 h1 c1]
          reflect_v163 = reflect_v18;                   // #73276:178:150 [L d1 h1 c1]
          fn_v164 = reflect_v18.apply;                  // #73279:65:200 [L d1 h1 c1]
          fn_v19 = win_v72.Object;                      // #73284:84:200 [L d1 h1 c1]
          arr_v165 = [];                                // #73289:178:107 [L d1 h1 c1]
          win_v166 = win_v72[v76];                      // #73291:68:7 [L d1 h1 c1]
          v167 = 0; arr_v165[0] = win_v166;             // #73295:149:26 [L d1 h1 c1]
          arr_v168 = fn_v164.call(reflect_v163, fn_v78, fn_v19, arr_v165);  // #73300:146:138 [L d1 h1 c1]
          fn_v169 = win_v72.Array;                      // #73321:161:200 #73326:74:150 [L d1 h1 c1]
          v170 = !fn_v169.isArray(arr_v168);            // #73329:179:138 #73349:208:130 [L d1 h1 c1]
          if (v170) {                                   // #73352:223:160 [L d1 h1 c1]
            v174 = v170;                                // #73385:15:150 [-] +#73388:99:53 /* never executed in any replay */
          } else {
            v171 = arr_v168.length;                     // #73358:243:53 #73363:208:200 [L d1 h1 c1]
            v172 = 2048;                                // #73368:68:233 [L d1 h1 c1]
            v173 = 2048 < v171;                         // #73373:189:98 [L d1 h1 c1]
            v174 = 2048 < v171;                         // #73377:246:150 [L d1 h1 c1] +#73380:110:53
          }
          if (v174) {                                   // #73393:75:160 [L d1 h1 c1]
            return v74;                                 // #73404:80:245 [-] /* never executed in any replay */
          }
          v175 = null;                                  // #73399:175:53 #73406:213:233 [L d1 h1 c1]
          v176 = cell[25](v175);                        // #73409:46:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then v176 = r205 (H142 CALL bind)
          v177 = 0;                                     // #73413:77:72 [L d1 h1 c1]
          v178 = 1;                                     // #73416:176:72 [L d1 h1 c1]
          v179 = "length";                              // #73419:164:233 [L d1 h1 c1]
          v180 = 1;                                     // #73424:107:72 [L d1 h1 c1]
          v181 = "wdhwX8";                              // #73427:51:233 [L d1 h1 c1]
          v182 = 1;                                     // #73432:126:72 [L d1 h1 c1] +#73435:214:53
          while ((v184 = arr_v168[v179], v185 = v177 < v184, v177 < v184)) {  // #73450:251:7 | #73454:80:186 [L d1261 h1261 c1261]
            v186 = arr_v168[v177];                      // #73472:55:7 [L d1260 h1260 c1260]
            v187 = v176[v186];                          // #73476:245:7 [L d1260 h1260 c1260]
            if (v187 === v180) {                        // #73480:237:161 [L d1260 h1260 c1260]
              return v181;                              // #73497:85:245 [-] /* never executed in any replay */
            }
            v188 = arr_v168[v177];                      // #73499:231:7 [L d1260 h1260 c1260]
            v176[v188] = v182;                          // #73503:68:210 [L d1260 h1260 c1260]
            v183 = v177; v177 = v177 + v178;            // #73440:57:48 [L d1260 h1260 c1260]
          }
          v189 = "MntR6";                               // #73511:169:233 [L d1 h1 c1]
          return "MntR6";                               // #73516:213:245 [L d1 h1 c1]
        } else {
          v90 = 6;                                      // #72188:73:53 #72193:162:72 [L d20 h20 c20]
          if ((v79 === (6))) {                          // #72196:70:65 #72200:253:160 [L d20 h20 c20]
            v190 = {};                                  // #73518:176:159 [L d1 h1 c1]
            v191 = "gScE3";                             // #73520:164:233 [L d1 h1 c1]
            v192 = 1; v190.gScE3 = 1;                   // #73529:206:103 [L d1 h1 c1]
            v193 = v190;                                // #73534:3:150 [L d1 h1 c1]
            reflect_v194 = win_v72.Reflect;             // #73537:142:200 [L d1 h1 c1]
            reflect_v195 = reflect_v194;                // #73542:195:150 [L d1 h1 c1]
            fn_v196 = reflect_v194.apply;               // #73545:78:200 [L d1 h1 c1]
            win_v197 = win_v72[v76];                    // #73550:112:7 [L d1 h1 c1]
            arr_v198 = [];                              // #73554:94:107 [L d1 h1 c1]
            v199 = 0; arr_v198[0] = v193;               // #73556:199:26 [L d1 h1 c1]
            v20 = fn_v196.call(reflect_v195, fn_v78, win_v197, arr_v198);  // #73561:124:138 [L d1 h1 c1]
            if (v20 === v193) {                         // #73582:24:161 [L d1 h1 c1]
              v21 = false;                              // #73599:37:233 [-] +#73602:161:53 /* never executed in any replay */
            } else {
              v200 = v20.gScE3;                         // #73607:81:200 [L d1 h1 c1]
              v201 = 1;                                 // #73616:164:72 [L d1 h1 c1]
              v202 = v200 === 1;                        // #73619:192:65 [L d1 h1 c1]
              v21 = v200 === 1;                         // #73623:173:150 [L d1 h1 c1] +#73626:9:53
            }
            if (v21) {                                  // #73631:166:160 [L d1 h1 c1]
              v203 = "MntR6";                           // #73652:154:233 [L d1 h1 c1] +#73657:130:53
            } else {
              v203 = "wdhwX8";                          // #73637:94:53 #73642:140:233 [-] +#73647:44:53 /* never executed in any replay */
            }
            return v203;                                // #73662:10:245 [L d1 h1 c1]
          }
          v91 = 7;                                      // #72206:25:53 #72211:56:72 [L d19 h19 c19]
          if ((v79 === (7))) {                          // #72214:4:65 #72218:67:160 [L d19 h19 c19]
            reflect_v22 = win_v72.Reflect;              // #73664:88:200 [L d1 h1 c1]
            reflect_v204 = reflect_v22;                 // #73669:229:150 [L d1 h1 c1]
            fn_v205 = reflect_v22.apply;                // #73672:104:200 [L d1 h1 c1]
            win_v23 = win_v72[v76];                     // #73677:162:7 [L d1 h1 c1]
            arr_v206 = [];                              // #73681:72:107 [L d1 h1 c1]
            fn_v207 = clos;                             // #73683:207:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v207 = its home register (H139 CLOS bind)
            fn_v208 = fn_v207;                          // #73692:64:150 [L d1 h1 c1]
            v209 = 0; arr_v206[0] = fn_v208;            // #73695:161:26 [L d1 h1 c1]
            v210 = fn_v205.call(reflect_v204, fn_v78, win_v23, arr_v206);  // #73700:110:138 [L d1 h1 c1]
            v211 = typeof v210;                         // #73721:98:193 [L d1 h1 c1]
            v212 = typeof (0);                          // #73724:177:72 #73727:89:193 [L d1 h1 c1]
            if ((v211 === v212)) {                      // #73730:225:65 #73734:236:160 [L d1 h1 c1]
              win_v214 = win_v72[v76];                  // #73752:201:7 [L d1 h1 c1]
              fn_v215 = win_v214.cancelAnimationFrame;  // #73756:188:200 [L d1 h1 c1]
              v216 = typeof fn_v215;                    // #73761:248:193 [L d1 h1 c1]
              v24 = v216 === v75;                       // #73764:196:65 [L d1 h1 c1]
              if (v24) {                                // #73768:3:160 [L d1 h1 c1]
                win_v218 = win_v72[v76];                // #73787:216:7 #73791:101:150 [L d1 h1 c1]
                v219 = (win_v218).cancelAnimationFrame(v210);  // #73794:34:138 #73827:7:150 [L d1 h1 c1] +#73830:123:53
              } else {
                v217 = v24;                             // #73774:135:53 #73779:237:150 [-] +#73782:73:53 /* never executed in any replay */
              }
              v220 = "MntR6";                           // #73835:246:233 [L d1 h1 c1]
              return "MntR6";                           // #73840:46:245 [L d1 h1 c1]
            }
            v213 = "wdhwX8";                            // #73740:12:53 #73745:205:233 [-] /* never executed in any replay */
            return "wdhwX8";                            // #73750:105:245 [-] /* never executed in any replay */
          }
          v92 = 8;                                      // #72224:199:53 #72229:227:72 [L d18 h18 c18]
          if ((v79 === (8))) {                          // #72232:195:65 #72236:198:160 [L d18 h18 c18]
            reflect_v25 = win_v72.Reflect;              // #73842:140:200 [L d1 h1 c1]
            reflect_v221 = reflect_v25;                 // #73847:73:150 [L d1 h1 c1]
            fn_v222 = reflect_v25.apply;                // #73850:60:200 [L d1 h1 c1]
            win_v223 = win_v72[v76];                    // #73855:38:7 [L d1 h1 c1]
            arr_v224 = [];                              // #73859:188:107 [L d1 h1 c1]
            v225 = 0;                                   // #73861:35:72 [L d1 h1 c1]
            arr_v224[0] = 0;                            // #73864:184:26 [L d1 h1 c1]
            v26 = fn_v222.call(reflect_v221, fn_v78, win_v223, arr_v224);  // #73869:233:138 [L d1 h1 c1]
            v226 = undefined;                           // #73890:57:233 [L d1 h1 c1]
            if (v26 === v226) {                         // #73893:33:161 [L d1 h1 c1]
              v227 = "MntR6";                           // #73916:166:233 [L d1 h1 c1] +#73921:94:53
            } else {
              v227 = "wdhwX8";                          // #73901:173:53 #73906:37:233 [-] +#73911:161:53 /* never executed in any replay */
            }
            return v227;                                // #73926:221:245 [L d1 h1 c1]
          }
          v93 = 9;                                      // #72242:254:53 #72247:217:72 [L d17 h17 c17]
          if ((v79 === (9))) {                          // #72250:97:65 #72254:108:160 [L d17 h17 c17]
            reflect_v27 = win_v72.Reflect;              // #73928:85:200 [L d1 h1 c1]
            reflect_v228 = reflect_v27;                 // #73933:46:150 [L d1 h1 c1]
            fn_v229 = reflect_v27.apply;                // #73936:205:200 [L d1 h1 c1]
            win_v28 = win_v72[v76];                     // #73941:179:7 [L d1 h1 c1]
            arr_v230 = [];                              // #73945:85:107 [L d1 h1 c1]
            fn_v231 = clos;                             // #73947:232:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v231 = its home register (H139 CLOS bind)
            fn_v232 = fn_v231;                          // #73956:53:150 [L d1 h1 c1]
            v233 = 0; arr_v230[0] = fn_v232;            // #73959:2:26 [L d1 h1 c1]
            v234 = 0;                                   // #73964:209:72 [L d1 h1 c1]
            v235 = 1; arr_v230[1] = 0;                  // #73967:46:26 [L d1 h1 c1]
            v236 = fn_v229.call(reflect_v228, fn_v78, win_v28, arr_v230);  // #73972:7:138 [L d1 h1 c1]
            v237 = typeof v236;                         // #73993:215:193 [L d1 h1 c1]
            v238 = typeof (0);                          // #73996:146:72 #73999:246:193 [L d1 h1 c1]
            if ((v237 === v238)) {                      // #74002:74:65 #74006:241:160 [L d1 h1 c1]
              win_v240 = win_v72[v76];                  // #74024:34:7 [L d1 h1 c1]
              fn_v241 = win_v240.clearTimeout;          // #74028:241:200 [L d1 h1 c1]
              v242 = typeof fn_v241;                    // #74033:153:193 [L d1 h1 c1]
              v29 = v75 === v242;                       // #74036:33:65 [L d1 h1 c1]
              if (v29) {                                // #74040:44:160 [L d1 h1 c1]
                win_v244 = win_v72[v76];                // #74059:212:7 #74063:113:150 [L d1 h1 c1]
                v245 = (win_v244).clearTimeout(v236);   // #74066:254:138 #74091:115:150 [L d1 h1 c1] +#74094:55:53
              } else {
                v243 = v29;                             // #74046:76:53 #74051:250:150 [-] +#74054:98:53 /* never executed in any replay */
              }
              v246 = "MntR6";                           // #74099:234:233 [L d1 h1 c1]
              return "MntR6";                           // #74104:82:245 [L d1 h1 c1]
            }
            v239 = "wdhwX8";                            // #74012:61:53 #74017:238:233 [-] /* never executed in any replay */
            return "wdhwX8";                            // #74022:70:245 [-] /* never executed in any replay */
          }
          v94 = 10;                                     // #72260:140:53 #72265:49:72 [L d16 h16 c16]
          if ((v79 === (10))) {                         // #72268:89:65 #72272:132:160 [L d16 h16 c16]
            reflect_v30 = win_v72.Reflect;              // #74106:111:200 [L d1 h1 c1]
            reflect_v247 = reflect_v30;                 // #74111:96:150 [L d1 h1 c1]
            fn_v248 = reflect_v30.apply;                // #74114:183:200 [L d1 h1 c1]
            win_v249 = win_v72[v76];                    // #74119:117:7 [L d1 h1 c1]
            arr_v250 = [];                              // #74123:143:107 [L d1 h1 c1]
            v251 = 0;                                   // #74125:106:72 [L d1 h1 c1]
            arr_v250[0] = 0;                            // #74128:163:26 [L d1 h1 c1]
            v31 = fn_v248.call(reflect_v247, fn_v78, win_v249, arr_v250);  // #74133:232:138 [L d1 h1 c1]
            v252 = undefined;                           // #74154:252:233 [L d1 h1 c1]
            if (v31 === v252) {                         // #74157:152:161 [L d1 h1 c1]
              v253 = "MntR6";                           // #74180:195:233 [L d1 h1 c1] +#74185:71:53
            } else {
              v253 = "wdhwX8";                          // #74165:8:53 #74170:33:233 [-] +#74175:173:53 /* never executed in any replay */
            }
            return v253;                                // #74190:151:245 [L d1 h1 c1]
          }
          v95 = 11;                                     // #72278:68:53 #72283:84:72 [L d15 h15 c15]
          if ((v79 === (11))) {                         // #72286:176:65 #72290:63:160 [L d15 h15 c15]
            reflect_v254 = win_v72.Reflect;             // #74192:156:200 [L d1 h1 c1]
            reflect_v255 = reflect_v254;                // #74197:25:150 [L d1 h1 c1]
            fn_v256 = reflect_v254.apply;               // #74200:204:200 [L d1 h1 c1]
            win_v257 = win_v72[v76];                    // #74205:118:7 [L d1 h1 c1]
            arr_v258 = [];                              // #74209:204:107 [L d1 h1 c1]
            v259 = "all";                               // #74211:80:233 [L d1 h1 c1]
            v260 = 0; arr_v258[0] = "all";              // #74218:113:26 [L d1 h1 c1]
            mql_v32 = fn_v256.call(reflect_v255, fn_v78, win_v257, arr_v258);  // #74223:254:138 [L d1 h1 c1]
            if (mql_v32) {                              // #74244:213:160 [L d1 h1 c1]
              v262 = true;                              // #74263:85:233 [L d1 h1 c1]
              v263 = mql_v32.matches;                   // #74266:24:200 [L d1 h1 c1]
              v264 = true === v263;                     // #74271:100:65 [L d1 h1 c1]
              v261 = true === v263;                     // #74275:193:150 [L d1 h1 c1] +#74278:205:53
            } else {
              v261 = mql_v32;                           // #74250:145:53 #74255:231:150 [-] +#74258:219:53 /* never executed in any replay */
            }
            if (v261) {                                 // #74283:186:160 [L d1 h1 c1]
              v265 = "all";                             // #74302:219:233 [L d1 h1 c1]
              v266 = mql_v32.media;                     // #74309:6:200 [L d1 h1 c1]
              v267 = "all" === v266;                    // #74318:26:65 [L d1 h1 c1]
              v33 = "all" === v266;                     // #74322:31:150 [L d1 h1 c1] +#74325:51:53
            } else {
              v33 = v261;                               // #74289:34:53 #74294:254:150 [-] +#74297:86:53 /* never executed in any replay */
            }
            if (v33) {                                  // #74330:213:160 [L d1 h1 c1]
              v268 = "MntR6";                           // #74351:236:233 [L d1 h1 c1] +#74356:12:53
            } else {
              v268 = "wdhwX8";                          // #74336:145:53 #74341:63:233 [-] +#74346:211:53 /* never executed in any replay */
            }
            return v268;                                // #74361:43:245 [L d1 h1 c1]
          }
          v96 = 12;                                     // #72296:211:53 #72301:189:72 [L d14 h14 c14]
          if ((v79 === (12))) {                         // #72304:181:65 #72308:112:160 [L d14 h14 c14]
            try {
              TP(tryStack, 74528, 236, callDepths);                // #74363:52:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
              reflect_v34 = win_v72.Reflect;            // #74369:59:200 [L d1 h1 c1]
              reflect_v269 = reflect_v34;               // #74374:252:150 [L d1 h1 c1]
              fn_v270 = reflect_v34.apply;              // #74377:227:200 [L d1 h1 c1]
              win_v35 = win_v72[v76];                   // #74382:241:7 [L d1 h1 c1]
              arr_v271 = [];                            // #74386:27:107 [L d1 h1 c1]
              v36 = fn_v270.call(reflect_v269, fn_v78, win_v35, arr_v271);  // #74388:128:138 [L d1 h1 c1]
              if (v36) {                                // #74409:207:160 [L d1 h1 c1]
                v272 = v36.then;                        // #74428:54:200 [-] /* never executed in any replay */
                v273 = typeof v272;                     // #74433:10:193 [-] /* never executed in any replay */
                v274 = v75 === v273;                    // #74436:14:65 [-] /* never executed in any replay */
                v37 = v274;                             // #74440:67:150 [-] +#74443:199:53 /* never executed in any replay */
              } else {
                v37 = v36;                              // #74415:35:53 #74420:137:150 [L d1 h1 c1] +#74423:117:53
              }
              if (v37) {                                // #74448:163:160 [L d1 h1 c1]
                v276 = v36;                             // #74467:79:150 [-] /* never executed in any replay */
                v277 = v36.then;                        // #74470:170:200 [-] /* never executed in any replay */
                v38 = null;                             // #74475:54:233 [-] /* never executed in any replay */
                v278 = clos;                            // #74478:133:216 [-]  closure creation (operands from the byte stream); then v278 = its home register (H139 CLOS bind) /* never executed in any replay */
                v279 = v277.call(v276, v38, v278);      // #74487:194:138 #74506:39:150 [-] +#74509:27:53 /* never executed in any replay */
              } else {
                v275 = v37;                             // #74454:167:53 #74459:230:150 [L d1 h1 c1] +#74462:158:53
              }
              v280 = "wdhwX8";                          // #74514:11:233 [L d1 h1 c1]
              return "wdhwX8";                          // #74519:47:245 [L d1 h1 c1]
            } catch (caught) {
              v281 = caught;                              // #74529:41:150 [-] /* never executed in any replay */
              v282 = win_v72.TypeError;                 // #74532:156:200 [-] /* never executed in any replay */
              if ((v281 instanceof v282)) {             // #74537:82:67 #74541:217:160 [-] /* never executed in any replay */
                v283 = "MntR6";                         // #74562:161:233 [-] +#74567:45:53 /* never executed in any replay */
              } else {
                v283 = "mEXs3";                         // #74547:133:53 #74552:20:233 [-] +#74557:148:53 /* never executed in any replay */
              }
              return v283;                              // #74572:125:245 [-] /* never executed in any replay */
            }
          } else {
            v97 = 13;                                   // #72314:128:53 #72319:95:72 [L d13 h13 c13]
            if ((v79 === (13))) {                       // #72322:79:65 #72326:34:160 [L d13 h13 c13]
              reflect_v284 = win_v72.Reflect;           // #74579:217:200 [L d1 h1 c1]
              reflect_v285 = reflect_v284;              // #74584:162:150 [L d1 h1 c1]
              fn_v286 = reflect_v284.apply;             // #74587:113:200 [L d1 h1 c1]
              win_v287 = win_v72[v76];                  // #74592:199:7 [L d1 h1 c1]
              arr_v288 = [];                            // #74596:25:107 [L d1 h1 c1]
              v289 = "data:,";                          // #74598:169:233 [L d1 h1 c1]
              v290 = 0; arr_v288[0] = "data:,";         // #74608:166:26 [L d1 h1 c1]
              promise_v291 = fn_v286.call(reflect_v285, fn_v78, win_v287, arr_v288);  // #74613:159:138 [L d1 h1 c1]
              v292 = !promise_v291;                     // #74634:12:130 [L d1 h1 c1]
              if (v292) {                               // #74637:43:160 [L d1 h1 c1]
                v296 = v292;                            // #74671:254:150 [-] +#74674:86:53 /* never executed in any replay */
              } else {
                fn_v293 = promise_v291.then;            // #74643:15:53 #74648:82:200 [L d1 h1 c1]
                v294 = typeof fn_v293;                  // #74653:182:193 [L d1 h1 c1]
                v295 = !(v294 === v75);                 // #74656:10:65 #74660:139:130 [L d1 h1 c1]
                v296 = v295;                            // #74663:12:150 [L d1 h1 c1] +#74666:172:53
              }
              if (v296) {                               // #74679:196:160 [L d1 h1 c1]
                v297 = "wdhwX8";                        // #74690:5:233 [-] /* never executed in any replay */
                return "wdhwX8";                        // #74695:193:245 [-] /* never executed in any replay */
              }
              promise_v298 = promise_v291;              // #74685:132:53 #74697:38:150 [L d1 h1 c1]
              fn_v299 = promise_v291.then;              // #74700:229:200 [L d1 h1 c1]
              v39 = null;                               // #74705:69:233 [L d1 h1 c1]
              fn_v300 = clos;                           // #74708:24:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v300 = its home register (H139 CLOS bind)
              promise_v301 = fn_v299.call(promise_v298, v39, fn_v300);  // #74717:201:138 [L d1 h1 c1]
              v302 = "MntR6";                           // #74736:153:233 [L d1 h1 c1]
              return "MntR6";                           // #74741:5:245 [L d1 h1 c1]
            }
            v98 = 14;                                   // #72332:234:53 #72337:48:72 [L d12 h12 c12]
            if ((v79 === (14))) {                       // #72340:28:65 #72344:251:160 [L d12 h12 c12]
              v303 = {};                                // #74743:72:159 [L d1 h1 c1]
              reflect_v40 = win_v72.Reflect;            // #74745:255:200 [L d1 h1 c1]
              reflect_v304 = reflect_v40;               // #74750:176:150 [L d1 h1 c1]
              fn_v305 = reflect_v40.apply;              // #74753:199:200 [L d1 h1 c1]
              win_v306 = win_v72[v76];                  // #74758:69:7 [L d1 h1 c1]
              arr_v307 = [];                            // #74762:31:107 [L d1 h1 c1]
              arr_v307[0] = v303;                       // #74764:196:26 [L d1 h1 c1]
              if (fn_v305.call(reflect_v304, fn_v78, win_v306, arr_v307) === v303) {  // #74769:197:138 #74790:125:161 [L d1 h1 c1]
                v308 = "MntR6";                         // #74813:248:233 [L d1 h1 c1] +#74818:232:53
              } else {
                v308 = "wdhwX8";                        // #74798:153:53 #74803:20:233 [-] +#74808:148:53 /* never executed in any replay */
              }
              return v308;                              // #74823:239:245 [L d1 h1 c1]
            }
            v99 = 15;                                   // #72350:159:53 #72355:228:72 [L d11 h11 c11]
            if ((v79 === (15))) {                       // #72358:0:65 #72362:79:160 [L d11 h11 c11]
              reflect_v41 = win_v72.Reflect;            // #74825:240:200 [L d1 h1 c1]
              reflect_v309 = reflect_v41;               // #74830:29:150 [L d1 h1 c1]
              fn_v310 = reflect_v41.apply;              // #74833:192:200 [L d1 h1 c1]
              doc_v311 = win_v72.document;              // #74838:151:200 [L d1 h1 c1]
              fontFaceSet_v42 = doc_v311.fonts;         // #74843:210:200 [L d1 h1 c1]
              arr_v312 = [];                            // #74848:184:107 [L d1 h1 c1]
              v313 = "16px serif";                      // #74850:140:233 [L d1 h1 c1]
              v314 = 0; arr_v312[0] = "16px serif";     // #74864:189:26 [L d1 h1 c1]
              v315 = fn_v310.call(reflect_v309, fn_v78, fontFaceSet_v42, arr_v312);  // #74869:26:138 [L d1 h1 c1]
              v43 = typeof v315;                        // #74890:94:193 [L d1 h1 c1]
              v316 = true;                              // #74893:26:233 [L d1 h1 c1]
              v317 = typeof (true);                     // #74896:94:193 [L d1 h1 c1]
              if (v43 === v317) {                       // #74899:242:161 [L d1 h1 c1]
                v318 = "MntR6";                         // #74922:134:233 [L d1 h1 c1] +#74927:190:53
              } else {
                v318 = "wdhwX8";                        // #74907:122:53 #74912:157:233 [-] +#74917:57:53 /* never executed in any replay */
              }
              return v318;                              // #74932:61:245 [L d1 h1 c1]
            }
            v100 = 16;                                  // #72368:163:53 #72373:141:72 [L d10 h10 c10]
            if ((v79 === (16))) {                       // #72376:69:65 #72380:192:160 [L d10 h10 c10]
              v44 = {};                                 // #74934:162:159 [L d1 h1 c1]
              reflect_v319 = win_v72.Reflect;           // #74936:113:200 [L d1 h1 c1]
              reflect_v320 = reflect_v319;              // #74941:218:150 [L d1 h1 c1]
              fn_v321 = reflect_v319.apply;             // #74944:201:200 [L d1 h1 c1]
              fn_v322 = win_v72.Object;                 // #74949:188:200 [L d1 h1 c1]
              arr_v323 = [];                            // #74954:122:107 [L d1 h1 c1]
              v324 = 0; arr_v323[0] = v44;              // #74956:115:26 [L d1 h1 c1]
              v325 = "egkib8";                          // #74961:27:233 [L d1 h1 c1]
              v326 = 1; arr_v323[1] = "egkib8";         // #74971:208:26 [L d1 h1 c1]
              v327 = {};                                // #74976:162:159 [L d1 h1 c1]
              v328 = "get";                             // #74978:78:233 [L d1 h1 c1]
              fn_v329 = clos;                           // #74983:61:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v329 = its home register (H139 CLOS bind)
              v327[v328] = fn_v329;                     // #74992:35:199 [L d1 h1 c1]
              v330 = v327;                              // #74996:68:150 [L d1 h1 c1]
              v331 = 2; arr_v323[2] = v330;             // #74999:149:26 [L d1 h1 c1]
              v332 = fn_v321.call(reflect_v320, fn_v78, fn_v322, arr_v323);  // #75004:146:138 [L d1 h1 c1]
              v333 = v44 === v332;                      // #75025:118:65 [L d1 h1 c1]
              if (v333) {                               // #75029:109:160 [L d1 h1 c1]
                v334 = 1;                               // #75048:147:72 [L d1 h1 c1]
                v335 = v44.egkib8;                      // #75051:222:200 [L d1 h1 c1]
                v336 = 1 === v335;                      // #75061:146:65 [L d1 h1 c1]
                v45 = 1 === v335;                       // #75065:183:150 [L d1 h1 c1] +#75068:107:53
              } else {
                v45 = v333;                             // #75035:201:53 #75040:99:150 [-] +#75043:103:53 /* never executed in any replay */
              }
              if (v45) {                                // #75073:137:160 [L d1 h1 c1]
                v337 = "MntR6";                         // #75094:137:233 [L d1 h1 c1] +#75099:117:53
              } else {
                v337 = "wdhwX8";                        // #75079:117:53 #75084:34:233 [-] +#75089:234:53 /* never executed in any replay */
              }
              return v337;                              // #75104:66:245 [L d1 h1 c1]
            }
            v101 = 17;                                  // #72386:144:53 #72391:145:72 [L d9 h9 c9]
            if ((v79 === (17))) {                       // #72394:57:65 #72398:228:160 [L d9 h9 c9]
              reflect_v338 = win_v72.Reflect;           // #75106:33:200 [L d1 h1 c1]
              reflect_v339 = reflect_v338;              // #75111:202:150 [L d1 h1 c1]
              fn_v340 = reflect_v338.apply;             // #75114:249:200 [L d1 h1 c1]
              fn_v341 = win_v72.String;                 // #75119:44:200 [L d1 h1 c1]
              arr_v342 = [];                            // #75124:42:107 [L d1 h1 c1]
              v343 = 65;                                // #75126:89:72 [L d1 h1 c1]
              v344 = 0; arr_v342[0] = 65;               // #75129:150:26 [L d1 h1 c1]
              v46 = fn_v340.call(reflect_v339, fn_v78, fn_v341, arr_v342);  // #75134:207:138 [L d1 h1 c1]
              if (v46) {                                // #75155:162:160 [L d1 h1 c1]
                v346 = 1;                               // #75174:209:72 [L d1 h1 c1]
                v347 = v46.length;                      // #75177:164:200 [L d1 h1 c1]
                v348 = 1 === v347;                      // #75182:192:65 [L d1 h1 c1]
                v345 = 1 === v347;                      // #75186:173:150 [L d1 h1 c1] +#75189:9:53
              } else {
                v345 = v46;                             // #75161:106:53 #75166:240:150 [-] +#75169:0:53 /* never executed in any replay */
              }
              if (v345) {                               // #75194:194:160 [L d1 h1 c1]
                v349 = 0;                               // #75213:106:72 [L d1 h1 c1]
                v350 = v46.charCodeAt((0));             // #75216:83:138 [L d1 h1 c1]
                v351 = 65;                              // #75239:30:72 [L d1 h1 c1]
                v352 = v350 === (65);                   // #75242:210:65 [L d1 h1 c1]
                v47 = v352;                             // #75246:247:150 [L d1 h1 c1] +#75249:171:53
              } else {
                v47 = v345;                             // #75200:10:53 #75205:178:150 [-] +#75208:58:53 /* never executed in any replay */
              }
              if (v47) {                                // #75254:78:160 [L d1 h1 c1]
                v353 = "MntR6";                         // #75275:34:233 [L d1 h1 c1] +#75280:234:53
              } else {
                v353 = "wdhwX8";                        // #75260:102:53 #75265:132:233 [-] +#75270:68:53 /* never executed in any replay */
              }
              return v353;                              // #75285:40:245 [L d1 h1 c1]
            }
            v102 = 18;                                  // #72404:36:53 #72409:254:72 [L d8 h8 c8]
            if ((v79 === (18))) {                       // #72412:50:65 #72416:57:160 [L d8 h8 c8]
              reflect_v48 = win_v72.Reflect;            // #75287:107:200 [L d1 h1 c1]
              reflect_v354 = reflect_v48;               // #75292:108:150 [L d1 h1 c1]
              fn_v355 = reflect_v48.apply;              // #75295:147:200 [L d1 h1 c1]
              fn_v356 = win_v72[v76].MediaSource;       // #75300:225:7 #75304:116:200 [L d1 h1 c1]
              arr_v357 = [];                            // #75309:82:107 [L d1 h1 c1]
              v358 = "";                                // #75311:62:233 [L d1 h1 c1]
              arr_v357[0] = "";                         // #75315:39:26 [L d1 h1 c1]
              v49 = fn_v355.call(reflect_v354, fn_v78, fn_v356, arr_v357);  // #75320:92:138 [L d1 h1 c1]
              v359 = false;                             // #75341:160:233 [L d1 h1 c1]
              if (v49 === v359) {                       // #75344:172:161 [L d1 h1 c1]
                v360 = "MntR6";                         // #75367:78:233 [L d1 h1 c1] +#75372:102:53
              } else {
                v360 = "wdhwX8";                        // #75352:204:53 #75357:156:233 [-] +#75362:252:53 /* never executed in any replay */
              }
              return v360;                              // #75377:237:245 [L d1 h1 c1]
            }
            v103 = 19;                                  // #72422:101:53 #72427:24:72 [L d7 h7 c7]
            if ((v79 === (19))) {                       // #72430:100:65 #72434:35:160 [L d7 h7 c7]
              reflect_v50 = win_v72.Reflect;            // #75379:115:200 [L d1 h1 c1]
              reflect_v361 = reflect_v50;               // #75384:84:150 [L d1 h1 c1]
              fn_v362 = reflect_v50.apply;              // #75387:219:200 [L d1 h1 c1]
              fn_v363 = win_v72[v76].RTCRtpReceiver;    // #75392:9:7 #75396:252:200 [L d1 h1 c1]
              arr_v364 = [];                            // #75401:186:107 [L d1 h1 c1]
              v365 = "";                                // #75403:6:233 [L d1 h1 c1]
              arr_v364[0] = "";                         // #75407:207:26 [L d1 h1 c1]
              v51 = fn_v362.call(reflect_v361, fn_v78, fn_v363, arr_v364);  // #75412:100:138 [L d1 h1 c1]
              v366 = null;                              // #75433:136:233 [L d1 h1 c1]
              if (v51 === v366) {                       // #75436:244:161 [L d1 h1 c1]
                v367 = "MntR6";                         // #75459:135:233 [L d1 h1 c1] +#75464:251:53
              } else {
                v367 = "wdhwX8";                        // #75444:244:53 #75449:129:233 [-] +#75454:141:53 /* never executed in any replay */
              }
              return v367;                              // #75469:251:245 [L d1 h1 c1]
            }
            v104 = 20;                                  // #72440:39:53 #72445:121:72 [L d6 h6 c6]
            if ((v79 === (20))) {                       // #72448:129:65 #72452:12:160 [L d6 h6 c6]
              try {
                TP(tryStack, 75643, 20, callDepths);               // #75471:198:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
                reflect_v52 = win_v72.Reflect;          // #75477:5:200 [L d1 h1 c1]
                reflect_v368 = reflect_v52;             // #75482:30:150 [L d1 h1 c1]
                fn_v369 = reflect_v52.apply;            // #75485:253:200 [L d1 h1 c1]
                win_v370 = win_v72[v76];                // #75490:35:7 [L d1 h1 c1]
                fn_v53 = win_v370.URL;                  // #75494:46:200 [L d1 h1 c1]
                arr_v371 = [];                          // #75501:164:107 [L d1 h1 c1]
                v54 = fn_v369.call(reflect_v368, fn_v78, fn_v53, arr_v371);  // #75503:37:138 [L d1 h1 c1]
                if (v54) {                              // #75524:32:160 [-] /* never executed in any replay */
                  v372 = v54.then;                      // #75543:86:200 [-] /* never executed in any replay */
                  v373 = typeof v372;                   // #75548:170:193 [-] /* never executed in any replay */
                  v374 = v75 === v373;                  // #75551:46:65 [-] /* never executed in any replay */
                  v55 = v374;                           // #75555:227:150 [-] +#75558:231:53 /* never executed in any replay */
                } else {
                  v55 = v54;                            // #75530:112:53 #75535:117:150 [-] +#75538:177:53 /* never executed in any replay */
                }
                if (v55) {                              // #75563:175:160 [-] /* never executed in any replay */
                  v376 = v54;                           // #75582:229:150 [-] /* never executed in any replay */
                  v377 = v54.then;                      // #75585:104:200 [-] /* never executed in any replay */
                  v56 = null;                           // #75590:124:233 [-] /* never executed in any replay */
                  v378 = clos;                          // #75593:51:216 [-]  closure creation (operands from the byte stream); then v378 = its home register (H139 CLOS bind) /* never executed in any replay */
                  v379 = v377.call(v376, v56, v378);    // #75602:56:138 #75621:69:150 [-] +#75624:65:53 /* never executed in any replay */
                } else {
                  v375 = v55;                           // #75569:131:53 #75574:54:150 [-] +#75577:174:53 /* never executed in any replay */
                }
                v380 = "wdhwX8";                        // #75629:176:233 [-] /* never executed in any replay */
                return "wdhwX8";                        // #75634:128:245 [-] /* never executed in any replay */
              } catch (caught) {
                err_v381 = caught;                        // #75644:177:150 [L d1 h1 c1]
                fn_v382 = win_v72.TypeError;            // #75647:4:200 [L d1 h1 c1]
                if ((err_v381 instanceof fn_v382)) {    // #75652:26:67 #75656:129:160 [L d1 h1 c1]
                  v383 = "MntR6";                       // #75677:143:233 [L d1 h1 c1] +#75682:227:53
                } else {
                  v383 = "mEXs3";                       // #75662:141:53 #75667:107:233 [-] +#75672:79:53 /* never executed in any replay */
                }
                return v383;                            // #75687:16:245 [L d1 h1 c1]
              }
            } else {
              v105 = 21;                                // #72458:172:53 #72463:149:72 [L d5 h5 c5]
              if ((v79 === (21))) {                     // #72466:45:65 #72470:8:160 [L d5 h5 c5]
                reflect_v57 = win_v72.Reflect;          // #75694:112:200 [L d1 h1 c1]
                reflect_v384 = reflect_v57;             // #75699:157:150 [L d1 h1 c1]
                fn_v385 = reflect_v57.apply;            // #75702:64:200 [L d1 h1 c1]
                fn_v386 = win_v72[v76].URL;             // #75707:26:7 #75711:9:200 [L d1 h1 c1]
                arr_v387 = [];                          // #75718:211:107 [L d1 h1 c1]
                v388 = "";                              // #75720:251:233 [L d1 h1 c1]
                arr_v387[0] = "";                       // #75724:48:26 [L d1 h1 c1]
                v58 = fn_v385.call(reflect_v384, fn_v78, fn_v386, arr_v387);  // #75729:129:138 [L d1 h1 c1]
                v389 = undefined;                       // #75750:113:233 [L d1 h1 c1]
                if (v58 === v389) {                     // #75753:121:161 [L d1 h1 c1]
                  v390 = "MntR6";                       // #75776:177:233 [L d1 h1 c1] +#75781:253:53
                } else {
                  v390 = "wdhwX8";                      // #75761:165:53 #75766:186:233 [-] +#75771:34:53 /* never executed in any replay */
                }
                return v390;                            // #75786:22:245 [L d1 h1 c1]
              }
              v106 = 22;                                // #72476:184:53 #72481:81:72 [L d4 h4 c4]
              if ((v79 === (22))) {                     // #72484:249:65 #72488:164:160 [L d4 h4 c4]
                fn_v391 = win_v72.String;               // #75788:96:200 [L d1 h1 c1]
                math_v59 = win_v72.Math;                // #75793:183:200 [L d1 h1 c1]
                v392 = math_v59.random();               // #75798:172:138 [L d1 h1 c1]
                v60 = fn_v391.call(win_v72, v392);      // #75816:13:138 [L d1 h1 c1]
                fn_v393 = win_v72.String;               // #75836:240:200 [L d1 h1 c1]
                fn_v394 = win_v72.Date;                 // #75841:7:200 [L d1 h1 c1]
                v395 = fn_v394.now();                   // #75846:188:138 [L d1 h1 c1]
                v396 = fn_v393.call(win_v72, v395);     // #75861:221:138 [L d1 h1 c1]
                v397 = v60 + v396;                      // #75881:190:222 [L d1 h1 c1]
                reflect_v61 = win_v72.Reflect;          // #75885:29:200 [L d1 h1 c1]
                reflect_v398 = reflect_v61;             // #75890:214:150 [L d1 h1 c1]
                fn_v399 = reflect_v61.apply;            // #75893:213:200 [L d1 h1 c1]
                storage_v400 = win_v72[v76].localStorage;  // #75898:155:7 #75902:198:200 [L d1 h1 c1]
                arr_v401 = [];                          // #75918:220:107 [L d1 h1 c1]
                arr_v401[0] = v397;                     // #75920:205:26 [L d1 h1 c1]
                v62 = fn_v399.call(reflect_v398, fn_v78, storage_v400, arr_v401);  // #75925:234:138 [L d1 h1 c1]
                v402 = null;                            // #75946:118:233 [L d1 h1 c1]
                if (v62 === v402) {                     // #75949:170:161 [L d1 h1 c1]
                  v403 = "MntR6";                       // #75972:198:233 [L d1 h1 c1] +#75977:254:53
                } else {
                  v403 = "wdhwX8";                      // #75957:82:53 #75962:87:233 [-] +#75967:139:53 /* never executed in any replay */
                }
                return v403;                            // #75982:82:245 [L d1 h1 c1]
              }
              v107 = 23;                                // #72494:228:53 #72499:139:72 [L d3 h3 c3]
              if ((v79 === (23))) {                     // #72502:203:65 #72506:174:160 [L d3 h3 c3]
                reflect_v63 = win_v72.Reflect;          // #75984:34:200 [L d1 h1 c1]
                reflect_v404 = reflect_v63;             // #75989:7:150 [L d1 h1 c1]
                fn_v405 = reflect_v63.apply;            // #75992:130:200 [L d1 h1 c1]
                v406 = null;                            // #75997:174:233 [L d1 h1 c1]
                arr_v407 = [];                          // #76000:36:107 [L d1 h1 c1]
                v64 = fn_v405.call(reflect_v404, fn_v78, v406, arr_v407);  // #76002:165:138 [L d1 h1 c1]
                v408 = "[object Null]";                 // #76023:5:233 [L d1 h1 c1]
                if (v64 === v408) {                     // #76040:189:161 [L d1 h1 c1]
                  v409 = "MntR6";                       // #76063:72:233 [L d1 h1 c1] +#76068:248:53
                } else {
                  v409 = "wdhwX8";                      // #76048:217:53 #76053:186:233 [-] +#76058:34:53 /* never executed in any replay */
                }
                return v409;                            // #76073:134:245 [L d1 h1 c1]
              }
              v108 = 24;                                // #72512:70:53 #72517:102:72 [L d2 h2 c2]
              if ((v79 === (24))) {                     // #72520:250:65 #72524:225:160 [L d2 h2 c2]
                try {
                  TP(tryStack, 76238, 226, callDepths);            // #76075:3:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
                  reflect_v65 = win_v72.Reflect;        // #76081:142:200 [L d1 h1 c1]
                  reflect_v410 = reflect_v65;           // #76086:195:150 [L d1 h1 c1]
                  fn_v411 = reflect_v65.apply;          // #76089:78:200 [L d1 h1 c1]
                  arr_v412 = [];                        // #76094:74:233 #76097:80:107 [L d1 h1 c1]
                  promise_v413 = fn_v411.call(reflect_v410, fn_v78, null, arr_v412);  // #76099:33:138 [L d1 h1 c1]
                  v414 = !promise_v413;                 // #76120:6:130 [L d1 h1 c1]
                  if (v414) {                           // #76123:189:160 [L d1 h1 c1]
                    v66 = v414;                         // #76157:208:150 [-] +#76160:96:53 /* never executed in any replay */
                  } else {
                    fn_v415 = promise_v413.then;        // #76129:217:53 #76134:57:200 [L d1 h1 c1]
                    v416 = typeof fn_v415;              // #76139:193:193 [L d1 h1 c1]
                    v417 = !(v75 === v416);             // #76142:169:65 #76146:110:130 [L d1 h1 c1]
                    v66 = v417;                         // #76149:35:150 [L d1 h1 c1] +#76152:39:53
                  }
                  if (v66) {                            // #76165:189:160 [L d1 h1 c1]
                    v418 = "wdhwX8";                    // #76176:17:233 [-] /* never executed in any replay */
                    return "wdhwX8";                    // #76181:157:245 [-] /* never executed in any replay */
                  }
                  promise_v419 = promise_v413;          // #76171:217:53 #76183:170:150 [L d1 h1 c1]
                  fn_v420 = promise_v413.then;          // #76186:89:200 [L d1 h1 c1]
                  v67 = null;                           // #76191:233:233 [L d1 h1 c1]
                  fn_v421 = clos;                       // #76194:44:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v421 = its home register (H139 CLOS bind)
                  promise_v422 = fn_v420.call(promise_v419, v67, fn_v421);  // #76205:141:138 [L d1 h1 c1]
                  v423 = "MntR6";                       // #76224:77:233 [L d1 h1 c1]
                  return "MntR6";                       // #76229:233:245 [L d1 h1 c1]
                } catch (caught) {
                  v424 = caught;                          // #76239:199:150 [-] /* never executed in any replay */
                  v425 = win_v72[KP(m76241k199)];       // #76242:66:200 [-] /* never executed in any replay */
                  outside("L76246_66");  // L76246_66 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
                }
              } else {
                v109 = 25;                              // #72530:109:53 #72535:83:72 [L d1 h1 c1]
                if ((v79 === (25))) {                   // #72538:115:65 #72542:182:160 [L d1 h1 c1]
                  doc_v426 = win_v72.document;          // #76289:109:200 #76294:230:150 [L d1 h1 c1]
                  elVideo_v427 = doc_v426.createElement("video");  // #76297:130:233 #76306:11:138 [L d1 h1 c1]
                  reflect_v68 = win_v72.Reflect;        // #76332:118:200 [L d1 h1 c1]
                  reflect_v428 = reflect_v68;           // #76337:11:150 [L d1 h1 c1]
                  fn_v429 = reflect_v68.apply;          // #76340:118:200 [L d1 h1 c1]
                  arr_v430 = [];                        // #76345:204:107 [L d1 h1 c1]
                  v431 = "";                            // #76347:80:233 [L d1 h1 c1]
                  arr_v430[0] = "";                     // #76351:113:26 [L d1 h1 c1]
                  v69 = fn_v429.call(reflect_v428, fn_v78, elVideo_v427, arr_v430);  // #76356:254:138 [L d1 h1 c1]
                  v432 = "";                            // #76377:58:233 [L d1 h1 c1]
                  if (v69 === v432) {                   // #76381:94:161 [L d1 h1 c1]
                    v433 = "MntR6";                     // #76404:224:233 [L d1 h1 c1] +#76409:48:53
                  } else {
                    v433 = "wdhwX8";                    // #76389:54:53 #76394:70:233 [-] +#76399:126:53 /* never executed in any replay */
                  }
                  return v433;                          // #76414:119:245 [L d1 h1 c1]
                }
                v70 = tryStack.pop();                        // #72548:46:53 #76416:233:124 [-] /* never executed in any replay */
                v435 = "mEXs3";                         // #76419:85:53 #76434:136:233 [-] /* never executed in any replay */
                return "mEXs3";                         // #76439:248:245 [-] /* never executed in any replay */
              }
            }
          }
        }
      }
    }
  } catch (caught) {
    v71 = caught;                                         // #76424:97:150 [-] /* never executed in any replay */
    v434 = KP(m76426k97);                               // #76427:209:233 [-] /* never executed in any replay */
    return v434;                                        // #76432:93:245 [-] /* never executed in any replay */
  }
}