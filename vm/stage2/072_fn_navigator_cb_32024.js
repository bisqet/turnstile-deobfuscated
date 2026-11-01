function fn_navigator_cb_32024() { // entry L32024_207; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 411 register webs used only inside this fn (no live-in, cross-call or table-made def; 59 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, arr_v5 /* r205 */, arr_v6 /* r198 */, v7 /* r196 */, v8 /* r199 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r199 */, v12 /* r202 */, arr_v13 /* r199 */, v14 /* r202 */, v15 /* r199 */, v16 /* r202 */, gl_v17 /* r202 */, gl_v18 /* r199 */, v19 /* r205 */, webGLDebugRendererInfo_v20 /* r204 */;
  let arr_v21 /* r205 */, v22 /* r202 */, arr_v23 /* r199 */, v24 /* r204 */, v25 /* r198 */, v26 /* r204 */, v27 /* r204 */, v28 /* r198 */, v29 /* r204 */, arr_v30 /* r204 */;
  let v31 /* r205 */, arr_v32 /* r205 */, arr_v33 /* r247 */, v34 /* r204 */, v35 /* r250 */, v36 /* r205 */, fn_v37 /* r198 */, v38 /* r199 */, v39 /* r205 */, v40 /* r204 */;
  let v41 /* r205 */, v42 /* r202 */, v43 /* r204 */, arr_v44 /* r199 */, v45 /* r252 */, v46 /* r198 */, v47 /* r193 */, v48 /* r195 */, v49 /* r204 */, v50 /* r205 */;
  let v51 /* r204 */, v52 /* r196 */, v53 /* r202 */, v54 /* r204 */, v55 /* r202 */, v56 /* r205 */, v57 /* r253 */, v58 /* r254 */, arr_v59 /* r192 */, arr_v60 /* r205 */;
  let v61 /* r204 */, v62 /* r202 */, v63 /* r204 */, v64 /* r204 */, v65 /* r202 */, v66 /* r204 */, v67 /* r193 */, v68 /* r195 */, v69 /* r196 */, v70 /* r204 */;
  let v71 /* r204 */, v72 /* r205 */, v73 /* r199 */, v74 /* r199 */, v75 /* r199 */, v76 /* r199 */, webGLShaderPrecisionFormat_v77 /* r238 */, v78 /* r199 */, webGLShaderPrecisionFormat_v79 /* r240 */, v80 /* r199 */;
  let v81 /* r199 */, v82 /* r199 */, webGLShaderPrecisionFormat_v83 /* r246 */, v84 /* r199 */, webGLShaderPrecisionFormat_v85 /* r198 */, v86 /* r199 */, webGLShaderPrecisionFormat_v87 /* r204 */, arr_v88 /* r202 */, v89 /* r199 */, v90 /* r199 */;
  let v91 /* r199 */, v92 /* r199 */, v93 /* r199 */, v94 /* r199 */, v95 /* r199 */, v96 /* r199 */, v97 /* r199 */, v98 /* r199 */, v99 /* r199 */, v100 /* r199 */;
  let v101 /* r199 */, v102 /* r199 */, v103 /* r199 */, v104 /* r199 */, v105 /* r199 */, v106 /* r199 */, v107 /* r199 */, v108 /* r199 */, v109 /* r199 */, v110 /* r199 */;
  let v111 /* r199 */, v112 /* r199 */, v113 /* r199 */, v114 /* r199 */, v115 /* r199 */, v116 /* r199 */, v117 /* r199 */, v118 /* r199 */, v119 /* r199 */, v120 /* r199 */;
  let v121 /* r199 */, v122 /* r199 */, v123 /* r199 */, arr_v124 /* r198 */, v125 /* r199 */, gl2_v126 /* r204 */, gl_v127 /* r202 */, gl_v128 /* r202 */, gl2_v129 /* r204 */, v130 /* r199 */;
  let gl2_v131 /* r204 */, gl_v132 /* r202 */, arr_v133 /* r205 */, arr_v134 /* r202 */, arr_v135 /* r204 */, v136 /* r240 */, v137 /* r240 */, v138 /* r202 */, v139 /* r202 */, i32_v140 /* r204 */;
  let v141 /* r202 */, v142 /* r199 */, v143 /* r204 */, v144 /* r199 */, v145 /* r202 */, v146 /* r204 */, arr_v147 /* r205 */, arr_v148 /* r205 */, v149 /* r204 */, v150 /* r202 */;
  let arr_v151 /* r250 */, v152 /* r204 */, v153 /* r204 */, v154 /* r204 */, v155 /* r204 */, v156 /* r204 */, v157 /* r204 */, v158 /* r204 */, v159 /* r204 */, v160 /* r204 */;
  let v161 /* r204 */, v162 /* r204 */, v163 /* r204 */, v164 /* r202 */, v165 /* r204 */, v166 /* r204 */, v167 /* r202 */, v168 /* r204 */, v169 /* r204 */, v170 /* r202 */;
  let v171 /* r204 */, v172 /* r199 */, v173 /* r202 */, u32_v174 /* r204 */, arr_v175 /* r202 */, v176 /* r204 */, arr_v177 /* r204 */, v178 /* r205 */, v179 /* r204 */, v180 /* r202 */;
  let v181 /* r205 */, v182 /* r204 */, v183 /* r205 */, v184 /* r196 */, v185 /* r204 */, v186 /* r204 */, v187 /* r205 */, v188 /* r205 */, v189 /* r204 */, v190 /* r205 */;
  let v191 /* r204 */, eXTTextureFilterAnisotropic_v192 /* r204 */, gl_v193 /* r202 */, gl_v194 /* r199 */, v195 /* r205 */, v196 /* r205 */, v197 /* r202 */, v198 /* r205 */, v199 /* r202 */, v200 /* r199 */;
  let v201 /* r205 */, v202 /* r205 */, v203 /* r202 */, v204 /* r205 */, v205 /* r205 */, v206 /* r202 */, v207 /* r199 */, v208 /* r205 */, v209 /* r205 */, fn_v210 /* r238 */;
  let v211 /* r252 */, gl_v212 /* r202 */, v213 /* r205 */, v214 /* r195 */, oESStandardDerivatives_v215 /* r254 */, fn_v216 /* r238 */, v217 /* r250 */, gl_v218 /* r202 */, v219 /* r205 */, v220 /* r252 */;
  let v221 /* r195 */, gl_v222 /* r202 */, v223 /* r205 */, v224 /* r198 */, v225 /* r199 */, v226 /* r199 */, arr_v227 /* r205 */, v228 /* r202 */, v229 /* r202 */, arr_v230 /* r205 */;
  let v231 /* r202 */, v232 /* r204 */, v233 /* r204 */, gl_v234 /* r202 */, v235 /* r204 */, v236 /* r254 */, v237 /* r204 */, gl_v238 /* r202 */, v239 /* r204 */, v240 /* r204 */;
  let v241 /* r204 */, v242 /* r202 */, v243 /* r204 */, gl_v244 /* r202 */, v245 /* r204 */, v246 /* r204 */, v247 /* r202 */, v248 /* r204 */, v249 /* r204 */, v250 /* r202 */;
  let v251 /* r204 */, v252 /* r204 */, v253 /* r202 */, v254 /* r204 */, v255 /* r204 */, v256 /* r204 */, v257 /* r202 */, v258 /* r202 */, v259 /* r204 */, v260 /* r204 */;
  let v261 /* r202 */, v262 /* r204 */, v263 /* r204 */, v264 /* r202 */, v265 /* r204 */, v266 /* r202 */, v267 /* r204 */, v268 /* r204 */, v269 /* r202 */, v270 /* r204 */;
  let v271 /* r204 */, v272 /* r202 */, v273 /* r204 */, v274 /* r204 */, arr_v275 /* r202 */, arr_v276 /* r204 */, v277 /* r199 */, v278 /* r198 */, v279 /* r199 */, v280 /* r199 */;
  let v281 /* r199 */, v282 /* r204 */, arr_v283 /* r202 */, arr_v284 /* r204 */, v285 /* r199 */, v286 /* r198 */, v287 /* r199 */, v288 /* r199 */, v289 /* r199 */, v290 /* r204 */;
  let v291 /* r204 */, v292 /* r199 */, v293 /* r204 */, v294 /* r204 */, v295 /* r199 */, v296 /* r204 */, v297 /* r204 */, v298 /* r199 */, v299 /* r204 */, v300 /* r204 */;
  let v301 /* r199 */, v302 /* r204 */, v303 /* r204 */, v304 /* r199 */, v305 /* r204 */, v306 /* r204 */, v307 /* r199 */, v308 /* r204 */, v309 /* r204 */, v310 /* r199 */;
  let v311 /* r204 */, v312 /* r204 */, v313 /* r199 */, v314 /* r204 */, v315 /* r204 */, v316 /* r199 */, v317 /* r204 */, v318 /* r204 */, v319 /* r199 */, v320 /* r204 */;
  let v321 /* r204 */, v322 /* r199 */, v323 /* r204 */, v324 /* r204 */, v325 /* r199 */, v326 /* r204 */, v327 /* r204 */, v328 /* r199 */, v329 /* r204 */, v330 /* r204 */;
  let v331 /* r199 */, v332 /* r204 */, v333 /* r204 */, v334 /* r199 */, v335 /* r204 */, v336 /* r204 */, v337 /* r199 */, v338 /* r204 */, v339 /* r204 */, v340 /* r199 */;
  let v341 /* r204 */, v342 /* r204 */, v343 /* r199 */, v344 /* r199 */, v345 /* r204 */, v346 /* r204 */, v347 /* r199 */, arr_v348 /* r205 */, v349 /* r205 */, v350 /* r204 */;
  let v351 /* r202 */, v352 /* r205 */, v353 /* r247 */, v354 /* r250 */, v355 /* r252 */, v356 /* r245 */, v357 /* r230 */, v358 /* r231 */, v359 /* r232 */, v360 /* r236 */;
  let v361 /* r237 */, v362 /* r238 */, v363 /* r240 */, v364 /* r242 */, v365 /* r244 */, v366 /* r246 */, v367 /* r204 */, v368 /* r254 */, v369 /* r253 */, v370 /* r198 */;
  let v371 /* r192 */, v372 /* r193 */, v373 /* r199 */, v374 /* r195 */, v375 /* r196 */, v376 /* r202 */, v377 /* r205 */, i32_v378 /* r245 */, webGLShaderPrecisionFormat_v379 /* r230 */, webGLShaderPrecisionFormat_v380 /* r231 */;
  let webGLShaderPrecisionFormat_v381 /* r232 */, webGLShaderPrecisionFormat_v382 /* r236 */, webGLShaderPrecisionFormat_v383 /* r237 */, webGLShaderPrecisionFormat_v384 /* r242 */, webGLShaderPrecisionFormat_v385 /* r244 */, v386 /* r246 */, v387 /* r244 */, i32_v388 /* r246 */, v389 /* r242 */, v390 /* r244 */;
  let v391 /* r246 */, fn_v392 /* r240 */, fn_v393 /* r238 */, v394 /* r247 */, v395 /* r252 */, v396 /* r250 */, oESStandardDerivatives_v397 /* r253 */, v398 /* r192 */, v399 /* r193 */, f32_v400 /* r195 */;
  let f32_v401 /* r196 */, v402 /* r254 */, v403 /* r198 */, v404 /* r198 */, v405 /* r193 */, v406 /* r198 */, v407 /* r198 */, gl_v408 /* r202 */, v409 /* r199 */, v410 /* r204 */;
  let v411 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v5 1, arr_v6 1, arr_v13 1, arr_v21 1, arr_v23 1, arr_v30 1, arr_v32 1, arr_v33 1
  //   Array: arr_v44 1, arr_v59 1, arr_v60 1, arr_v88 1, arr_v124 1, arr_v133 1, arr_v134 1, arr_v135 1
  //   Array: arr_v147 1, arr_v148 1, arr_v151 1, arr_v175 1, arr_v177 1, arr_v227 1, arr_v230 1, arr_v275 1
  //   Array: arr_v276 1, arr_v283 1, arr_v284 1, arr_v348 1
  //   WebGLRenderingContext: gl_v17 1, gl_v18 1, gl_v127 1, gl_v128 1, gl_v132 1, gl_v193 1, gl_v194 1, gl_v212 1
  //   WebGLRenderingContext: gl_v218 1, gl_v222 1, gl_v234 1, gl_v238 1, gl_v244 1, gl_v408 1
  //   WebGLDebugRendererInfo: webGLDebugRendererInfo_v20 1
  //   Function: fn_v37 1, fn_v210 1, fn_v216 1, fn_v392 1, fn_v393 1
  //   WebGLShaderPrecisionFormat: webGLShaderPrecisionFormat_v77 1, webGLShaderPrecisionFormat_v79 1, webGLShaderPrecisionFormat_v83 1, webGLShaderPrecisionFormat_v85 1, webGLShaderPrecisionFormat_v87 1, webGLShaderPrecisionFormat_v379 1, webGLShaderPrecisionFormat_v380 1, webGLShaderPrecisionFormat_v381 1
  //   WebGLShaderPrecisionFormat: webGLShaderPrecisionFormat_v382 1, webGLShaderPrecisionFormat_v383 1, webGLShaderPrecisionFormat_v384 1, webGLShaderPrecisionFormat_v385 1
  //   WebGL2RenderingContext: gl2_v126 1, gl2_v129 1, gl2_v131 1
  //   Int32Array: i32_v140 1, i32_v378 1, i32_v388 1
  //   Uint32Array: u32_v174 1
  //   EXTTextureFilterAnisotropic: eXTTextureFilterAnisotropic_v192 1
  //   OESStandardDerivatives: oESStandardDerivatives_v215 1, oESStandardDerivatives_v397 1
  //   Float32Array: f32_v400 1, f32_v401 1
  // H142: 4 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 20 single-use temps folded (4 of them expressions, H135), 87 dead register writes dropped, 68 constants propagated (68 uses), 1 string keys as .member; 2 webs kept as registers (retOut 2)
  v353 = undefined;                                     // #32025:35:53 #32035:39:233 #32038:255:233 [L d1 h1 c1]
  v354 = undefined;                                     // #32041:119:233 [L d1 h1 c1]
  v355 = undefined;                                     // #32044:15:233 #32047:71:233 [L d1 h1 c1]
  v356 = undefined;                                     // #32050:159:233 #32053:151:233 #32056:175:233 #32059:103:233 [L d1 h1 c1]
  v357 = undefined;                                     // #32062:63:233 #32065:183:233 #32068:79:233 #32071:135:233 #32074:223:233 [L d1 h1 c1]
  v358 = undefined;                                     // #32077:215:233 [L d1 h1 c1]
  v359 = undefined;                                     // #32080:239:233 [L d1 h1 c1]
  v360 = undefined;                                     // #32083:167:233 [L d1 h1 c1]
  v361 = undefined;                                     // #32086:127:233 [L d1 h1 c1]
  v362 = undefined;                                     // #32089:247:233 [L d1 h1 c1]
  v363 = undefined;                                     // #32092:143:233 [L d1 h1 c1]
  v364 = undefined;                                     // #32095:199:233 [L d1 h1 c1]
  v365 = undefined;                                     // #32098:31:233 #32101:23:233 #32104:47:233 #32107:231:233 #32110:191:233 #32113:55:233 #32116:207:233 [L d1 h1 c1]
  v366 = undefined;                                     // #32119:7:233 #32122:95:233 [L d1 h1 c1]
  v367 = undefined;                                     // #32125:87:233 #32128:111:233 #32131:39:233 #32134:255:233 #32137:119:233 [L d1 h1 c1]
  v368 = undefined;                                     // #32140:15:233 [L d1 h1 c1]
  v369 = undefined;                                     // #32143:71:233 #32146:159:233 #32149:151:233 [L d1 h1 c1]
  v370 = undefined;                                     // #32152:175:233 [L d1 h1 c1]
  v371 = undefined;                                     // #32155:103:233 [L d1 h1 c1]
  v372 = undefined;                                     // #32158:63:233 [L d1 h1 c1]
  v373 = undefined;                                     // #32161:183:233 [L d1 h1 c1]
  v374 = undefined;                                     // #32164:79:233 #32167:135:233 [L d1 h1 c1]
  v375 = undefined;                                     // #32170:223:233 [L d1 h1 c1]
  v1 = undefined;                                       // #32173:215:233 [L d1 h1 c1]
  v376 = cell[47];                                      // #32176:166:236 [L d1 h1 c1]
  if (v376) {                                           // #32179:221:160 [L d1 h1 c1]
    arr_v5 = [];                                        // #32234:121:107 [L h1]
    arr_v6 = [];                                        // #32236:131:107 [L h1]
    v7 = 7936;                                          // #32238:235:233 [L h1]
    v8 = v376.getParameter(7936);                       // #32243:16:138 [L h1]
    v9 = 0; arr_v6[0] = v8;                             // #32268:49:26 [L h1]
    v10 = 7937;                                         // #32273:97:233 [L h1]
    v11 = cell[47][KP(m32277k97)](7937);                // #32278:6:66 [L h1]
    v12 = 1; arr_v6[1] = v11;                           // #32303:207:26 [L h1]
    arr_v13 = arr_v6;                                   // #32308:64:150 [L h1]
    v14 = 0; arr_v5[0] = arr_v6;                        // #32311:161:26 [L h1]
    v15 = "FiXbn3";                                     // #32316:17:233 [L h1]
    v16 = 1; arr_v5[1] = "FiXbn3";                      // #32326:110:26 [L h1]
    cell[27] = arr_v5;                                  // #32331:220:195 [L h1]
    gl_v17 = cell[47];                                  // #32334:215:236 [L h1]
    gl_v18 = cell[47];                                  // #32337:40:150 [L h1]
    v19 = KP(m32339k40);                                // #32340:60:233 [L h1]
    webGLDebugRendererInfo_v20 = gl_v18.getExtension(v19);  // #32369:93:138 [L h1]
    if (webGLDebugRendererInfo_v20) {                   // #32394:120:160 [L h1]
      arr_v21 = cell[27];                               // #32413:149:236 [L h1]
      v22 = 1;                                          // #32416:216:72 [L h1]
      arr_v23 = [];                                     // #32419:38:107 [L h1]
      v24 = 37445;                                      // #32421:194:233 [L h1]
      v25 = cell[47][KP(m32426k194)](37445);            // #32427:35:66 [L h1]
      v26 = 0; arr_v23[0] = v25;                        // #32452:184:26 [L h1]
      v27 = 37446;                                      // #32457:140:233 [L h1]
      v28 = cell[47][KP(m32462k140)](37446);            // #32463:69:66 [L h1]
      v29 = 1; arr_v23[1] = v28;                        // #32488:210:26 [L h1]
      arr_v30 = arr_v23;                                // #32493:247:150 [L h1]
      arr_v21[1] = arr_v23;                             // #32496:117:199 [L h1] +#32500:206:150 +#32503:230:53
    } else {
      // #32400:104:53 #32405:208:150 #32408:96:53 [-] /* never executed in any replay */
    }
    try {
      TP(tryStack, 36833, 238, callDepths);                        // #32508:218:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
      v31 = cell[54];                                   // #32514:93:236 [L h1]
      if (v31) {                                        // #32517:120:160 [L h1]
        arr_v33 = v31;                                  // #32570:222:150 [-] +#32573:182:53 /* never executed in any replay */
      } else {
        arr_v32 = cell[47][KP(m32527k137)]();           // #32523:104:53 #32528:142:66 [L h1]
        arr_v33 = arr_v32;                              // #32562:195:150 [L h1] +#32565:71:53
      }
      cell[54] = arr_v33;                               // #32578:72:195 [L h1]
      v34 = cell[70](arr_v33);                          // #32581:149:22 [L h1]  VM call: pushes a frame, the callee body returns into r204; then v34 = r204 (H142 CALL bind)
      cell[55] = v34;                                   // #32585:39:195 [L h1]
      if (arr_v33) {                                    // #32588:154:160 [L h1]
        v35 = arr_v33.length;                           // #32607:118:200 [L h1] +#32612:238:53
      } else {
        v35 = 0;                                        // #32594:130:53 #32599:203:72 [-] +#32602:47:53 /* never executed in any replay */
      }
      v36 = cell[20];                                   // #32617:206:236 [L h1]
      if (v36) {                                        // #32620:101:160 [L h1]
        v42 = v36;                                      // #33774:167:150 [-] +#33777:155:53 /* never executed in any replay */
      } else {
        fn_v37 = clos;                                  // #32626:225:53 #32631:109:216 [L h1]  closure creation (operands from the byte stream); then fn_v37 = its home register (H139 CLOS bind)
        v38 = undefined;                                // #32645:173:233 [L h1]
        v39 = KP(m32647k173);                           // #32648:237:233 [L h1]
        v40 = cell[19][KP(m33740k237)](v39);            // #33741:98:66 [L h1]
        v41 = MC(undefined, fn_v37, v40);               // #33758:179:114 [L h1]
        cell[20] = v41;                                 // #33763:77:195 [L h1]
        v42 = v41;                                      // #33766:70:150 [L h1] +#33769:126:53
      }
      v43 = v42;                                        // #33782:170:150 [L h1]
      arr_v44 = v43.split("C");                         // #33785:54:233 #33790:239:138 [L h1]
      v45 = "";                                         // #33808:167:233 [L h1]
      v46 = 0;                                          // #33812:34:72 [L h1]
      v47 = 1;                                          // #33815:113:72 [L h1]
      v48 = "length";                                   // #33818:161:233 [L h1] +#33823:45:53
      while ((v49 = arr_v44.length, v50 = v46 < v49, v46 < v49)) {  // #33838:139:7 | #33842:160:186 [L h35]
        v51 = cell[55];                                 // #33860:153:236 [L h34]
        v52 = arr_v44[v46];                             // #33863:79:7 [L h34]
        v53 = !v51[v52];                                // #33867:173:7 #33871:98:130 [L h34]
        if (v53) {                                      // #33874:169:160 [L h34]
          if (v45) {                                    // #33893:140:160 [L h4]
            v54 = ",";                                  // #33913:118:233 [L h3] +#33918:238:53
          } else {
            v54 = "";                                   // #33899:44:53 #33904:21:233 [L h1] +#33908:209:53
          }
          v55 = arr_v44[v46];                           // #33923:49:7 [L h4]
          v56 = v54 + v55;                              // #33927:194:222 [L h4]
          v45 = v45 + v56;                              // #33931:79:222 [L h4] +#33935:192:150 +#33938:144:53
        } else {
          // #33880:21:53 #33885:248:150 #33888:232:53 [L h30]
        }
        v46 = v46 + 1;                                  // #33828:222:48 [L h34]
      }
      v57 = cell[47][KP(m33952k129)](3379);             // #33948:129:233 #33953:166:66 [L h1]
      v58 = cell[47][KP(m33983k66)](34024);             // #33978:66:233 #33984:163:66 [L h1]
      i32_v378 = cell[47][KP(m34013k139)](3386);        // #34009:139:233 #34014:8:66 [L h1]
      if (i32_v378) {                                   // #34039:55:160 [L h1]
        arr_v60 = [];                                   // #34058:125:107 [L h1]
        v61 = 0;                                        // #34060:32:72 [L h1]
        v62 = i32_v378[0];                              // #34063:122:7 [L h1]
        v63 = 0; arr_v60[0] = v62;                      // #34067:115:26 [L h1]
        v64 = 1;                                        // #34072:190:72 [L h1]
        v65 = i32_v378[1];                              // #34075:32:7 [L h1]
        v66 = 1; arr_v60[1] = v65;                      // #34079:1:26 [L h1]
        arr_v59 = arr_v60;                              // #34084:42:150 [L h1] +#34087:210:53
      } else {
        arr_v59 = null;                                 // #34045:235:53 #34050:60:233 [-] +#34053:28:53 /* never executed in any replay */
      }
      v67 = cell[47][KP(m34097k66)](34921);             // #34092:66:233 #34098:163:66 [L h1]
      v68 = cell[47][KP(m34128k139)](36348);            // #34123:139:233 #34129:8:66 [L h1]
      v69 = cell[47][KP(m34159k156)](36349);            // #34154:156:233 #34160:21:66 [L h1]
      v70 = 36341;                                      // #34185:181:233 #34191:213:233 [L h1]
      webGLShaderPrecisionFormat_v379 = cell[47][KP(m34196k213)](35632, 36341);      // #34197:170:66 [L h1]
      v71 = 36338;                                      // #34235:54:233 #34241:146:233 [L h1]
      webGLShaderPrecisionFormat_v380 = cell[47][KP(m34246k146)](35632, 36338);      // #34247:179:66 [L h1]
      if (webGLShaderPrecisionFormat_v380) {            // #34285:246:160 [L h1]
        v72 = 1;                                        // #34304:68:72 [L h1] +#34307:4:53
      } else {
        v72 = 0;                                        // #34291:110:53 #34296:251:72 [-] +#34299:159:53 /* never executed in any replay */
      }
      cell[59] = v72;                                   // #34312:182:195 [L h1]
      v73 = 36336;                                      // #34315:18:233 #34321:254:233 [L h1]
      webGLShaderPrecisionFormat_v381 = cell[47][KP(m34326k254)](35632, 36336);      // #34327:111:66 [L h1]
      v74 = 36337;                                      // #34365:39:233 #34371:255:233 [L h1]
      webGLShaderPrecisionFormat_v382 = cell[47][KP(m34376k255)](35632, 36337);      // #34377:172:66 [L h1]
      v75 = 36339;                                      // #34415:176:233 #34421:164:233 [L h1]
      webGLShaderPrecisionFormat_v383 = cell[47][KP(m34426k164)](35632, 36339);      // #34427:253:66 [L h1]
      v76 = 36340;                                      // #34465:253:233 #34471:253:233 [L h1]
      webGLShaderPrecisionFormat_v77 = cell[47][KP(m34476k253)](35632, 36340);      // #34477:50:66 [L h1]
      v78 = 36338;                                      // #34515:158:233 #34521:90:233 [L h1]
      webGLShaderPrecisionFormat_v79 = cell[47][KP(m34526k90)](35633, 36338);      // #34527:91:66 [L h1]
      v80 = 36341;                                      // #34565:99:233 #34571:75:233 [L h1]
      webGLShaderPrecisionFormat_v384 = cell[47][KP(m34576k75)](35633, 36341);      // #34577:200:66 [L h1]
      v81 = 36336;                                      // #34615:92:233 #34621:160:233 [L h1]
      webGLShaderPrecisionFormat_v385 = cell[47][KP(m34626k160)](35633, 36336);      // #34627:9:66 [L h1]
      v82 = 36337;                                      // #34665:217:233 #34671:105:233 [L h1]
      webGLShaderPrecisionFormat_v83 = cell[47][KP(m34676k105)](35633, 36337);      // #34677:238:66 [L h1]
      v84 = 36339;                                      // #34715:106:233 #34721:246:233 [L h1]
      webGLShaderPrecisionFormat_v85 = cell[47][KP(m34726k246)](35633, 36339);      // #34727:135:66 [L h1]
      v86 = 36340;                                      // #34765:223:233 #34771:215:233 [L h1]
      webGLShaderPrecisionFormat_v87 = cell[47][KP(m34776k215)](35633, 36340);      // #34777:36:66 [L h1]
      arr_v88 = [];                                     // #34815:66:107 [L h1]
      if (webGLShaderPrecisionFormat_v379) {            // #34817:9:160 [L h1]
        v89 = webGLShaderPrecisionFormat_v379.rangeMin;      // #34836:230:200 [L h1] +#34841:158:53
      } else {
        v89 = null;                                     // #34823:245:53 #34828:163:233 [-] +#34831:167:53 /* never executed in any replay */
      }
      arr_v88[0] = v89;                                 // #34846:85:26 [L h1]
      if (webGLShaderPrecisionFormat_v379) {            // #34851:144:160 [L h1]
        v90 = webGLShaderPrecisionFormat_v379.rangeMax;      // #34870:26:200 [L h1] +#34875:2:53
      } else {
        v90 = null;                                     // #34857:32:53 #34862:102:233 [-] +#34865:30:53 /* never executed in any replay */
      }
      arr_v88[1] = v90;                                 // #34880:93:26 [L h1]
      if (webGLShaderPrecisionFormat_v379) {            // #34885:120:160 [L h1]
        v91 = webGLShaderPrecisionFormat_v379.precision;      // #34904:81:200 [L h1] +#34909:29:53
      } else {
        v91 = null;                                     // #34891:104:53 #34896:65:233 [-] +#34899:77:53 /* never executed in any replay */
      }
      arr_v88[2] = v91;                                 // #34914:83:26 [L h1]
      if (webGLShaderPrecisionFormat_v380) {            // #34919:22:160 [L h1]
        v92 = webGLShaderPrecisionFormat_v380.rangeMin;      // #34938:87:200 [L h1] +#34943:139:53
      } else {
        v92 = null;                                     // #34925:14:53 #34930:238:233 [-] +#34933:134:53 /* never executed in any replay */
      }
      arr_v88[3] = v92;                                 // #34948:181:26 [L h1]
      if (webGLShaderPrecisionFormat_v380) {            // #34953:112:160 [L h1]
        v93 = webGLShaderPrecisionFormat_v380.rangeMax;      // #34972:65:200 [L h1] +#34977:77:53
      } else {
        v93 = null;                                     // #34959:128:53 #34964:28:233 [-] +#34967:124:53 /* never executed in any replay */
      }
      arr_v88[4] = v93;                                 // #34982:215:26 [L h1]
      if (webGLShaderPrecisionFormat_v380) {            // #34987:138:160 [L h1]
        v94 = webGLShaderPrecisionFormat_v380.precision;      // #35006:92:200 [L h1] +#35011:188:53
      } else {
        v94 = null;                                     // #34993:178:53 #34998:202:233 [-] +#35001:242:53 /* never executed in any replay */
      }
      arr_v88[5] = v94;                                 // #35016:34:26 [L h1]
      if (webGLShaderPrecisionFormat_v381) {            // #35021:105:160 [L h1]
        v95 = webGLShaderPrecisionFormat_v381.rangeMin;      // #35040:220:200 [L h1] +#35045:60:53
      } else {
        v95 = null;                                     // #35027:213:53 #35032:227:233 [-] +#35035:231:53 /* never executed in any replay */
      }
      arr_v88[6] = v95;                                 // #35050:169:26 [L h1]
      if (webGLShaderPrecisionFormat_v381) {            // #35055:148:160 [L h1]
        v96 = webGLShaderPrecisionFormat_v381.rangeMax;      // #35074:145:200 [L h1] +#35079:93:53
      } else {
        v96 = null;                                     // #35061:20:53 #35066:89:233 [-] +#35069:5:53 /* never executed in any replay */
      }
      arr_v88[7] = v96;                                 // #35084:17:26 [L h1]
      if (webGLShaderPrecisionFormat_v381) {            // #35089:92:160 [L h1]
        v97 = webGLShaderPrecisionFormat_v381.precision;      // #35108:130:200 [L h1] +#35113:202:53
      } else {
        v97 = null;                                     // #35095:188:53 #35100:244:233 [-] +#35103:244:53 /* never executed in any replay */
      }
      arr_v88[8] = v97;                                 // #35118:80:26 [L h1]
      if (webGLShaderPrecisionFormat_v382) {            // #35123:95:160 [L h1]
        v98 = webGLShaderPrecisionFormat_v382.rangeMin;      // #35142:196:200 [L h1] +#35147:132:53
      } else {
        v98 = null;                                     // #35129:115:53 #35134:57:233 [-] +#35137:101:53 /* never executed in any replay */
      }
      arr_v88[9] = v98;                                 // #35152:53:26 [L h1]
      if (webGLShaderPrecisionFormat_v382) {            // #35157:240:160 [L h1]
        v99 = webGLShaderPrecisionFormat_v382.rangeMax;      // #35176:134:200 [L h1] +#35181:190:53
      } else {
        v99 = null;                                     // #35163:0:53 #35168:84:233 [-] +#35171:212:53 /* never executed in any replay */
      }
      arr_v88[10] = v99;                                // #35186:103:26 [L h1]
      if (webGLShaderPrecisionFormat_v382) {            // #35191:218:160 [L h1]
        v100 = webGLShaderPrecisionFormat_v382.precision;      // #35210:78:200 [L h1] +#35215:102:53
      } else {
        v100 = null;                                    // #35197:194:53 #35202:24:233 [-] +#35205:136:53 /* never executed in any replay */
      }
      arr_v88[11] = v100;                               // #35220:54:26 [L h1]
      if (webGLShaderPrecisionFormat_v383) {            // #35225:45:160 [L h1]
        v101 = webGLShaderPrecisionFormat_v383.rangeMin;      // #35244:170:200 [L h1] +#35249:82:53
      } else {
        v101 = null;                                    // #35231:137:53 #35236:126:233 [-] +#35239:214:53 /* never executed in any replay */
      }
      arr_v88[12] = v101;                               // #35254:161:26 [L h1]
      if (webGLShaderPrecisionFormat_v383) {            // #35259:172:160 [L h1]
        v102 = webGLShaderPrecisionFormat_v383.rangeMax;      // #35278:35:200 [L h1] +#35283:39:53
      } else {
        v102 = null;                                    // #35265:204:53 #35270:147:233 [-] +#35273:215:53 /* never executed in any replay */
      }
      arr_v88[13] = v102;                               // #35288:252:26 [L h1]
      if (webGLShaderPrecisionFormat_v383) {            // #35293:91:160 [L h1]
        v103 = webGLShaderPrecisionFormat_v383.precision;      // #35312:224:200 [L h1] +#35317:48:53
      } else {
        v103 = null;                                    // #35299:127:53 #35304:212:233 [-] +#35307:84:53 /* never executed in any replay */
      }
      arr_v88[14] = v103;                               // #35322:179:26 [L h1]
      if (webGLShaderPrecisionFormat_v77) {             // #35327:246:160 [L h1]
        v104 = webGLShaderPrecisionFormat_v77.rangeMin;      // #35346:148:200 [L h1] +#35351:20:53
      } else {
        v104 = null;                                    // #35333:110:53 #35338:49:233 [-] +#35341:125:53 /* never executed in any replay */
      }
      arr_v88[15] = v104;                               // #35356:183:26 [L h1]
      if (webGLShaderPrecisionFormat_v77) {             // #35361:234:160 [L h1]
        v105 = webGLShaderPrecisionFormat_v77.rangeMax;      // #35380:150:200 [L h1] +#35385:142:53
      } else {
        v105 = null;                                    // #35367:146:53 #35372:81:233 [-] +#35375:29:53 /* never executed in any replay */
      }
      arr_v88[16] = v105;                               // #35390:208:26 [L h1]
      if (webGLShaderPrecisionFormat_v77) {             // #35395:223:160 [L h1]
        v106 = webGLShaderPrecisionFormat_v77.precision;      // #35414:209:200 [L h1] +#35419:157:53
      } else {
        v106 = null;                                    // #35401:243:53 #35406:194:233 [-] +#35409:10:53 /* never executed in any replay */
      }
      arr_v88[17] = v106;                               // #35424:203:26 [L h1]
      if (webGLShaderPrecisionFormat_v79) {             // #35429:174:160 [L h1]
        v107 = webGLShaderPrecisionFormat_v79.rangeMin;      // #35448:101:200 [L h1] +#35453:225:53
      } else {
        v107 = null;                                    // #35435:70:53 #35440:143:233 [-] +#35443:227:53 /* never executed in any replay */
      }
      arr_v88[18] = v107;                               // #35458:90:26 [L h1]
      if (webGLShaderPrecisionFormat_v79) {             // #35463:193:160 [L h1]
        v108 = webGLShaderPrecisionFormat_v79.rangeMax;      // #35482:3:200 [L h1] +#35487:135:53
      } else {
        v108 = null;                                    // #35469:205:53 #35474:209:233 [-] +#35477:157:53 /* never executed in any replay */
      }
      arr_v88[19] = v108;                               // #35492:174:26 [L h1]
      if (webGLShaderPrecisionFormat_v79) {             // #35497:197:160 [L h1]
        v109 = webGLShaderPrecisionFormat_v79.precision;      // #35516:13:200 [L h1] +#35521:233:53
      } else {
        v109 = null;                                    // #35503:193:53 #35508:49:233 [-] +#35511:125:53 /* never executed in any replay */
      }
      arr_v88[20] = v109;                               // #35526:201:26 [L h1]
      if (webGLShaderPrecisionFormat_v384) {            // #35531:52:160 [L h1]
        v110 = webGLShaderPrecisionFormat_v384.rangeMin;      // #35550:112:200 [L h1] +#35555:128:53
      } else {
        v110 = null;                                    // #35537:52:53 #35542:90:233 [-] +#35545:66:53 /* never executed in any replay */
      }
      arr_v88[21] = v110;                               // #35560:123:26 [L h1]
      if (webGLShaderPrecisionFormat_v384) {            // #35565:158:160 [L h1]
        v111 = webGLShaderPrecisionFormat_v384.rangeMax;      // #35584:14:200 [L h1] +#35589:38:53
      } else {
        v111 = null;                                    // #35571:118:53 #35576:100:233 [-] +#35579:164:53 /* never executed in any replay */
      }
      arr_v88[22] = v111;                               // #35594:52:26 [L h1]
      if (webGLShaderPrecisionFormat_v384) {            // #35599:179:160 [L h1]
        v112 = webGLShaderPrecisionFormat_v384.precision;      // #35618:20:200 [L h1] +#35623:148:53
      } else {
        v112 = null;                                    // #35605:119:53 #35610:98:233 [-] +#35613:42:53 /* never executed in any replay */
      }
      arr_v88[23] = v112;                               // #35628:91:26 [L h1]
      if (webGLShaderPrecisionFormat_v385) {            // #35633:254:160 [L h1]
        v113 = webGLShaderPrecisionFormat_v385.rangeMin;      // #35652:229:200 [L h1] +#35657:97:53
      } else {
        v113 = null;                                    // #35639:86:53 #35644:82:233 [-] +#35647:90:53 /* never executed in any replay */
      }
      arr_v88[24] = v113;                               // #35662:25:26 [L h1]
      if (webGLShaderPrecisionFormat_v385) {            // #35667:68:160 [L h1]
        v114 = webGLShaderPrecisionFormat_v385.rangeMax;      // #35686:128:200 [L h1] +#35691:80:53
      } else {
        v114 = null;                                    // #35673:4:53 #35678:8:233 [-] +#35681:184:53 /* never executed in any replay */
      }
      arr_v88[25] = v114;                               // #35696:114:26 [L h1]
      if (webGLShaderPrecisionFormat_v385) {            // #35701:121:160 [L h1]
        v115 = webGLShaderPrecisionFormat_v385.precision;      // #35720:65:200 [L h1] +#35725:77:53
      } else {
        v115 = null;                                    // #35707:165:53 #35712:7:233 [-] +#35715:123:53 /* never executed in any replay */
      }
      arr_v88[26] = v115;                               // #35730:240:26 [L h1]
      if (webGLShaderPrecisionFormat_v83) {             // #35735:127:160 [L h1]
        v116 = webGLShaderPrecisionFormat_v83.rangeMin;      // #35754:137:200 [L h1] +#35759:117:53
      } else {
        v116 = null;                                    // #35741:19:53 #35746:249:233 [-] +#35749:37:53 /* never executed in any replay */
      }
      arr_v88[27] = v116;                               // #35764:91:26 [L h1]
      if (webGLShaderPrecisionFormat_v83) {             // #35769:254:160 [L h1]
        v117 = webGLShaderPrecisionFormat_v83.rangeMax;      // #35788:7:200 [L h1] +#35793:123:53
      } else {
        v117 = null;                                    // #35775:86:53 #35780:204:233 [-] +#35783:108:53 /* never executed in any replay */
      }
      arr_v88[28] = v117;                               // #35798:77:26 [L h1]
      if (webGLShaderPrecisionFormat_v83) {             // #35803:168:160 [L h1]
        v118 = webGLShaderPrecisionFormat_v83.precision;      // #35822:221:200 [L h1] +#35827:121:53
      } else {
        v118 = null;                                    // #35809:216:53 #35814:192:233 [-] +#35817:144:53 /* never executed in any replay */
      }
      arr_v88[29] = v118;                               // #35832:239:26 [L h1]
      if (webGLShaderPrecisionFormat_v85) {             // #35837:66:160 [L h1]
        v119 = webGLShaderPrecisionFormat_v85.rangeMin;      // #35856:232:200 [L h1] +#35861:24:53
      } else {
        v119 = null;                                    // #35843:138:53 #35848:119:233 [-] +#35851:43:53 /* never executed in any replay */
      }
      arr_v88[30] = v119;                               // #35866:204:26 [L h1]
      if (webGLShaderPrecisionFormat_v85) {             // #35871:235:160 [L h1]
        v120 = webGLShaderPrecisionFormat_v85.rangeMax;      // #35890:11:200 [L h1] +#35895:111:53
      } else {
        v120 = null;                                    // #35877:207:53 #35882:101:233 [-] +#35885:225:53 /* never executed in any replay */
      }
      arr_v88[31] = v120;                               // #35900:28:26 [L h1]
      if (webGLShaderPrecisionFormat_v85) {             // #35905:251:160 [L h1]
        v121 = webGLShaderPrecisionFormat_v85.precision;      // #35924:197:200 [L h1] +#35929:193:53
      } else {
        v121 = null;                                    // #35911:159:53 #35916:24:233 [-] +#35919:136:53 /* never executed in any replay */
      }
      arr_v88[32] = v121;                               // #35934:118:26 [L h1]
      if (webGLShaderPrecisionFormat_v87) {             // #35939:109:160 [L h1]
        v122 = webGLShaderPrecisionFormat_v87.rangeMin;      // #35958:182:200 [L h1] +#35963:46:53
      } else {
        v122 = null;                                    // #35945:201:53 #35950:137:233 [-] +#35953:117:53 /* never executed in any replay */
      }
      arr_v88[33] = v122;                               // #35968:249:26 [L h1]
      if (webGLShaderPrecisionFormat_v87) {             // #35973:164:160 [L h1]
        v123 = webGLShaderPrecisionFormat_v87.rangeMax;      // #35992:246:200 [L h1] +#35997:110:53
      } else {
        v123 = null;                                    // #35979:228:53 #35984:3:233 [-] +#35987:135:53 /* never executed in any replay */
      }
      arr_v88[34] = v123;                               // #36002:211:26 [L h1]
      if (webGLShaderPrecisionFormat_v87) {             // #36007:150:160 [L h1]
        v386 = webGLShaderPrecisionFormat_v87.precision;      // #36026:189:200 [L h1] +#36031:217:53
      } else {
        v386 = null;                                    // #36013:142:53 #36018:48:233 [-] +#36021:64:53 /* never executed in any replay */
      }
      arr_v88[35] = v386;                               // #36036:156:26 [L h1]
      arr_v124 = arr_v88;                               // #36041:25:150 [L h1]
      v125 = null;                                      // #36044:169:233 [L h1]
      try {
        TP(tryStack, 36553, 222, callDepths);                      // #36047:174:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
        gl2_v126 = cell[48];                            // #36053:225:236 [L h1]
        if (gl2_v126) {                                 // #36056:236:160 [L h1]
          gl_v127 = cell[47];                           // #36067:3:236 [L h1]
          if (gl2_v126 === gl_v127) {                   // #36070:67:161 [L h1]
            v387 = v57;                                 // #36118:215:150 [-] +#36121:11:53 /* never executed in any replay */
          } else {
            v387 = gl2_v126.getParameter(3379);         // #36078:199:53 #36083:122:233 #36088:35:138 [L h1] +#36113:39:53
          }
          gl_v128 = cell[47];                           // #36126:175:236 [L h1]
          gl2_v129 = cell[48];                          // #36129:30:236 [L h1]
          if (gl_v128 === gl2_v129) {                   // #36132:178:161 [L h1]
            v130 = v58;                                 // #36181:238:150 [-] +#36184:134:53 /* never executed in any replay */
          } else {
            v130 = gl2_v129.getParameter(34024);        // #36140:58:53 #36145:29:233 #36151:250:138 [L h1] +#36176:98:53
          }
          gl2_v131 = cell[48];                          // #36189:238:236 [L h1]
          gl_v132 = cell[47];                           // #36192:33:236 [L h1]
          if (gl2_v131 === gl_v132) {                   // #36195:105:161 [L h1]
            i32_v388 = i32_v378;                        // #36243:171:150 [-] +#36246:143:53 /* never executed in any replay */
          } else {
            i32_v388 = gl2_v131.getParameter(3386);      // #36203:213:53 #36208:88:233 #36213:9:138 [L h1] +#36238:245:53
          }
          arr_v133 = [];                                // #36251:139:107 [L h1]
          arr_v133[0] = v387;                           // #36253:128:26 [L h1]
          arr_v133[1] = v130;                           // #36258:225:26 [L h1]
          if (i32_v388) {                               // #36263:236:160 [L h1]
            arr_v135 = [];                              // #36282:217:107 [L h1]
            v136 = i32_v388[0];                         // #36284:12:72 #36287:182:7 [L h1]
            arr_v135[0] = v136;                         // #36291:191:26 [L h1]
            v137 = i32_v388[1];                         // #36296:218:72 #36299:204:7 [L h1]
            v389 = 1; arr_v135[1] = v137;               // #36303:253:26 [L h1]
            arr_v134 = arr_v135;                        // #36308:54:150 [L h1] +#36311:174:53
          } else {
            arr_v134 = null;                            // #36269:12:53 #36274:204:233 [-] +#36277:108:53 /* never executed in any replay */
          }
          arr_v133[2] = arr_v134;                       // #36316:206:26 [L h1]
          if (v57 === v387) {                           // #36321:162:161 [L h1]
            v138 = 1;                                   // #36342:70:72 [L h1] +#36345:126:53
          } else {
            v138 = 0;                                   // #36329:106:53 #36334:118:72 [-] +#36337:238:53 /* never executed in any replay */
          }
          arr_v133[3] = v138;                           // #36350:100:26 [L h1]
          if (v130 === v58) {                           // #36355:96:161 [L h1]
            v139 = 1;                                   // #36376:105:72 [L h1] +#36379:213:53
          } else {
            v139 = 0;                                   // #36363:176:53 #36368:212:72 [-] +#36371:84:53 /* never executed in any replay */
          }
          arr_v133[4] = v139;                           // #36384:102:26 [L h1]
          if (i32_v378) {                               // #36389:157:160 [L h1]
            i32_v140 = i32_v388;                        // #36408:130:150 [L h1] +#36411:202:53
          } else {
            i32_v140 = i32_v378;                        // #36395:57:53 #36400:178:150 [-] +#36403:58:53 /* never executed in any replay */
          }
          if (i32_v140) {                               // #36416:254:160 [L h1]
            v142 = i32_v388[0];                         // #36435:118:72 #36438:248:7 [L h1]
            v390 = i32_v378[0];                         // #36442:111:72 #36445:77:7 [L h1]
            v141 = v142 === v390;                       // #36449:5:65 #36453:30:150 [L h1] +#36456:246:53
          } else {
            v141 = i32_v140;                            // #36422:86:53 #36427:88:150 [-] +#36430:200:53 /* never executed in any replay */
          }
          if (v141) {                                   // #36461:86:160 [L h1]
            v144 = i32_v388[1];                         // #36480:97:72 #36483:247:7 [L h1]
            v391 = i32_v378[1];                         // #36487:50:72 #36490:196:7 [L h1]
            v143 = v144 === v391;                       // #36494:96:65 #36498:205:150 [L h1] +#36501:169:53
          } else {
            v143 = v141;                                // #36467:78:53 #36472:110:150 [-] +#36475:6:53 /* never executed in any replay */
          }
          if (v143) {                                   // #36506:56:160 [L h1]
            v145 = 1;                                   // #36525:168:72 [L h1] +#36528:216:53
          } else {
            v145 = 0;                                   // #36512:40:53 #36517:43:72 [-] +#36520:15:53 /* never executed in any replay */
          }
          v146 = 5; arr_v133[5] = v145;                 // #36533:205:26 [L h1]
          v125 = arr_v133;                              // #36538:198:150 [L h1] +#36541:254:53
        } else {
          // #36062:12:53 [-] /* never executed in any replay */
        }
        arr_v147 = tryStack.pop();                           // #36546:129:124 [L h1]
        arr_v148 = [];                                  // #36549:141:53 #36562:133:107 [L h1]
        v149 = 0; arr_v148[0] = v35;                    // #36564:18:26 [L h1]
        if (arr_v33) {                                  // #36569:153:160 [L h1]
          arr_v151 = arr_v33;                           // #36589:235:150 [L h1]
          v152 = ",";                                   // #36592:179:233 [L h1]
          v150 = (arr_v151)[KP(m36596k179)](",");       // #36597:184:138 [L h1] +#36614:168:53
        } else {
          v150 = "";                                    // #36575:69:53 #36580:164:233 [-] +#36584:228:53 /* never executed in any replay */
        }
        v153 = 1; arr_v148[1] = v150;                   // #36619:19:26 [L h1]
        v154 = 2; arr_v148[2] = v45;                    // #36624:232:26 [L h1]
        v155 = 3; arr_v148[3] = v57;                    // #36629:169:26 [L h1]
        v156 = 4; arr_v148[4] = v58;                    // #36634:166:26 [L h1]
        v157 = 5; arr_v148[5] = arr_v59;                // #36639:239:26 [L h1]
        v158 = 6; arr_v148[6] = v67;                    // #36644:84:26 [L h1]
        v159 = 7; arr_v148[7] = v68;                    // #36649:101:26 [L h1]
        v160 = 8; arr_v148[8] = v69;                    // #36654:114:26 [L h1]
        v161 = 9; arr_v148[9] = arr_v124;               // #36659:139:26 [L h1]
        v162 = 10; arr_v148[10] = v125;                 // #36664:128:26 [L h1]
        v163 = 7938;                                    // #36669:52:233 [L h1]
        v164 = cell[47][KP(m36673k52)](7938);           // #36674:77:66 [L h1]
        v165 = 11; arr_v148[11] = v164;                 // #36699:186:26 [L h1]
        v166 = 35724;                                   // #36704:6:233 [L h1]
        v167 = cell[47][KP(m36709k6)](35724);           // #36710:87:66 [L h1]
        v168 = 12; arr_v148[12] = v167;                 // #36735:28:26 [L h1]
        v169 = 36347;                                   // #36740:96:233 [L h1]
        v170 = cell[47][KP(m36745k96)](36347);          // #36746:201:66 [L h1]
        v171 = 13; arr_v148[13] = v170;                 // #36771:70:26 [L h1]
        fn_v392 = cell[73];                             // #36776:25:236 [L h1]
        v172 = undefined;                               // #36779:169:233 [L h1]
        v173 = 34467;                                   // #36782:249:233 [L h1]
        u32_v174 = cell[47][KP(m36787k249)](34467);      // #36788:62:66 [L h1]
        arr_v175 = MC(undefined, fn_v392, u32_v174);      // #36813:31:114 [L h1]
        v176 = 14; arr_v148[14] = arr_v175;             // #36818:196:26 [L h1]
        cell[34] = arr_v148;                            // #36823:90:195 [L h1]
        arr_v177 = tryStack.pop();                           // #36826:45:124 [L h1] +#36829:137:53
        try {
          TP(tryStack, 39119, 25, callDepths);                     // #36864:163:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
          v182 = cell[55];                              // #36870:66:236 [L h1]
          if (v182) {                                   // #36873:9:160 [L h1]
            v184 = v182;                                // #36894:57:150 [L h1] +#36897:101:53
          } else {
            v183 = {};                                  // #36879:245:53 #36884:255:159 [-] /* never executed in any replay */
            v184 = v183;                                // #36886:176:150 [-] +#36889:192:53 /* never executed in any replay */
          }
          v185 = v184[KP(m36901k123)];                  // #36902:38:200 [L h1]
          if (v185) {                                   // #36907:93:160 [L h1]
            v187 = v185;                                // #36931:125:150 [L h1] +#36934:153:53
          } else {
            v186 = v184[KP(m36917k97)];                 // #36913:249:53 #36918:244:200 [-] /* never executed in any replay */
            v187 = v186;                                // #36923:17:150 [-] +#36926:221:53 /* never executed in any replay */
          }
          if (v187) {                                   // #36939:11:160 [L h1]
            v189 = v187;                                // #36963:48:150 [L h1] +#36966:64:53
          } else {
            v188 = v184[KP(m36949k88)];                 // #36945:111:53 #36950:207:200 [-] /* never executed in any replay */
            v189 = v188;                                // #36955:64:150 [-] +#36958:16:53 /* never executed in any replay */
          }
          if (v189) {                                   // #36971:33:160 [L h1]
            v191 = v184[KP(m36989k143)];                // #36990:234:200 [L h1]
            v190 = v191;                                // #36995:175:150 [L h1] +#36998:131:53
          } else {
            v190 = v189;                                // #36977:173:53 #36982:197:150 [-] +#36985:193:53 /* never executed in any replay */
          }
          if (v190) {                                   // #37003:168:160 [L h1]
            gl_v193 = cell[47];                         // #37022:233:236 [L h1]
            gl_v194 = cell[47];                         // #37025:114:150 [L h1]
            v195 = KP(m37027k114);                      // #37028:222:233 [L h1]
            eXTTextureFilterAnisotropic_v192 = gl_v194.getExtension(v195);      // #37033:247:138 [L h1] +#37058:171:53
          } else {
            eXTTextureFilterAnisotropic_v192 = null;      // #37009:216:53 #37014:16:233 [-] +#37017:160:53 /* never executed in any replay */
          }
          v196 = !eXTTextureFilterAnisotropic_v192;      // #37063:241:130 [L h1]
          if (v196) {                                   // #37066:188:160 [L h1]
            v198 = v184[KP(m37084k148)];                // #37085:27:200 [-] /* never executed in any replay */
            v197 = v198;                                // #37090:92:150 [-] +#37093:188:53 /* never executed in any replay */
          } else {
            v197 = v196;                                // #37072:156:53 #37077:161:150 [L h1] +#37080:45:53
          }
          if (v197) {                                   // #37098:164:160 [L h1]
            v199 = cell[47];                            // #37117:92:236 [-] /* never executed in any replay */
            v200 = cell[47];                            // #37120:217:150 [-] /* never executed in any replay */
            v201 = KP(m37122k217);                      // #37123:105:233 [-] /* never executed in any replay */
            eXTTextureFilterAnisotropic_v192 = v200.getExtension(v201);      // #37128:22:138 [-] +#37153:43:150 +#37156:15:53 /* never executed in any replay */
          } else {
            // #37104:228:53 #37109:232:150 #37112:24:53 [L h1]
          }
          v202 = !eXTTextureFilterAnisotropic_v192;      // #37161:113:130 [L h1]
          if (v202) {                                   // #37164:60:160 [L h1]
            v204 = v184[KP(m37182k73)];                 // #37183:60:200 [-] /* never executed in any replay */
            v203 = v204;                                // #37188:57:150 [-] +#37191:101:53 /* never executed in any replay */
          } else {
            v203 = v202;                                // #37170:28:53 #37175:161:150 [L h1] +#37178:45:53
          }
          if (v203) {                                   // #37196:157:160 [L h1]
            v206 = cell[47];                            // #37215:124:236 [-] /* never executed in any replay */
            v207 = cell[47];                            // #37218:121:150 [-] /* never executed in any replay */
            v208 = KP(m37220k121);                      // #37221:137:233 [-] /* never executed in any replay */
            eXTTextureFilterAnisotropic_v192 = v207.getExtension(v208);      // #37226:182:138 [-] /* never executed in any replay */
            v209 = eXTTextureFilterAnisotropic_v192;      // #37251:75:150 [-] +#37254:175:53 /* never executed in any replay */
          } else {
            v205 = v203;                                // #37202:57:53 #37207:11:150 [L h1] +#37210:111:53
          }
          fn_v210 = cell[72];                           // #37259:114:236 [L h1]
          v211 = undefined;                             // #37262:222:233 [L h1]
          gl_v212 = cell[47];                           // #37265:81:236 [L h1]
          v213 = v184[KP(m37267k81)];                   // #37268:36:200 [L h1]
          v214 = KP(m37272k36);                         // #37273:72:233 [L h1]
          oESStandardDerivatives_v215 = MC(undefined, fn_v210, gl_v212, v213, v214);      // #37278:39:16 [L h1]
          fn_v216 = cell[72];                           // #37286:182:236 [L h1]
          v217 = undefined;                             // #37289:18:233 [L h1]
          gl_v218 = cell[47];                           // #37292:181:236 [L h1]
          v219 = v184[KP(m37294k181)];                  // #37295:248:200 [L h1]
          v220 = KP(m37299k248);                        // #37300:204:233 [L h1]
          v221 = MC(undefined, fn_v216, gl_v218, v219, v220);      // #37305:155:16 [L h1]
          fn_v393 = cell[72];                           // #37313:90:236 [L h1]
          v394 = undefined;                             // #37316:38:233 [L h1]
          gl_v222 = cell[47];                           // #37319:121:236 [L h1]
          v395 = v184.OVR_multiview2;                   // #37322:172:200 [L h1]
          v396 = "OVR_multiview2";                      // #37340:176:233 [L h1]
          v223 = MC(undefined, fn_v393, gl_v222, v395, "OVR_multiview2");      // #37358:239:16 [L h1]
          oESStandardDerivatives_v397 = oESStandardDerivatives_v215;      // #37366:224:150 [L h1]
          v224 = v221;                                  // #37369:77:150 [L h1]
          v398 = v184[KP(m37371k77)];                   // #37372:48:200 [L h1]
          v399 = v223;                                  // #37407:93:150 [L h1]
          v225 = null;                                  // #37410:221:233 [L h1]
          try {
            TP(tryStack, 37458, 230, callDepths);                  // #37413:18:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
            v226 = cell[47][KP(m37418k18)]();           // #37419:51:66 [L h1]
            arr_v227 = tryStack.pop();                       // #37451:226:124 [L h1]
            v228 = 33901;                               // #37454:170:53 #37470:44:233 [L h1]
            f32_v400 = cell[47][KP(m37475k44)](33901);      // #37476:101:66 [L h1]
            v229 = 33902;                               // #37501:197:233 [L h1]
            f32_v401 = cell[47][KP(m37506k197)](33902);      // #37507:218:66 [L h1]
            arr_v230 = [];                              // #37532:160:107 [L h1]
            if (eXTTextureFilterAnisotropic_v192) {      // #37534:111:160 [L h1]
              v232 = 34047;                             // #37553:194:233 [L h1]
              v231 = cell[47][KP(m37558k194)](34047);      // #37559:35:66 [L h1] +#37584:39:53
            } else {
              v231 = null;                              // #37540:67:53 #37545:5:233 [-] +#37548:1:53 /* never executed in any replay */
            }
            v233 = 0; arr_v230[0] = v231;               // #37589:175:26 [L h1]
            gl_v234 = cell[47];                         // #37594:30:236 [L h1]
            v235 = 35723;                               // #37597:218:233 [L h1]
            v236 = cell[71](gl_v234, oESStandardDerivatives_v397, v235);      // #37603:6:201 [L h1]  VM call: pushes a frame, the callee body returns into r254; then v236 = r254 (H142 CALL bind)
            v237 = 1; arr_v230[1] = v236;               // #37610:207:26 [L h1]
            gl_v238 = cell[47];                         // #37615:190:236 [L h1]
            v239 = 36795;                               // #37618:250:233 [L h1]
            v402 = cell[71](gl_v238, v224, v239);       // #37624:166:201 [L h1]  VM call: pushes a frame, the callee body returns into r254; then v402 = r254 (H142 CALL bind)
            v240 = 2; arr_v230[2] = v402;               // #37631:239:26 [L h1]
            if (v224) {                                 // #37636:66:160 [L h1]
              v241 = v224;                              // #37655:198:150 [-] +#37658:254:53 /* never executed in any replay */
            } else {
              v241 = v398;                              // #37642:138:53 #37647:122:150 [L h1] +#37650:226:53
            }
            if (v241) {                                 // #37663:170:160 [L h1]
              v242 = 1;                                 // #37682:212:72 [-] +#37685:84:53 /* never executed in any replay */
            } else {
              v242 = 0;                                 // #37669:82:53 #37674:66:72 [L h1] +#37677:138:53
            }
            v243 = 3; arr_v230[3] = v242;               // #37690:34:26 [L h1]
            gl_v244 = cell[47];                         // #37695:133:236 [L h1]
            v245 = 38449;                               // #37698:101:233 [L h1]
            v403 = cell[71](gl_v244, v399, v245);       // #37704:37:201 [L h1]  VM call: pushes a frame, the callee body returns into r198; then v403 = r198 (H142 CALL bind)
            v246 = 4; arr_v230[4] = v403;               // #37711:50:26 [L h1]
            if (v226) {                                 // #37716:57:160 [L h1]
              v248 = v226.alpha;                        // #37735:82:200 [L h1]
              if (v248) {                               // #37744:217:160 [L h1]
                v247 = 1;                               // #37763:14:72 [L h1] +#37766:38:53
              } else {
                v247 = 0;                               // #37750:133:53 #37755:133:72 [-] +#37758:129:53 /* never executed in any replay */
              }
            } else {
              v247 = null;                              // #37722:101:53 #37727:16:233 [-] +#37730:160:53 /* never executed in any replay */
            }
            v249 = 5; arr_v230[5] = v247;               // #37771:8:26 [L h1]
            if (v226) {                                 // #37776:55:160 [L h1]
              v251 = v226.antialias;                    // #37795:173:200 [L h1]
              if (v251) {                               // #37808:136:160 [L h1]
                v250 = 1;                               // #37827:205:72 [L h1] +#37830:169:53
              } else {
                v250 = 0;                               // #37814:56:53 #37819:110:72 [-] +#37822:6:53 /* never executed in any replay */
              }
            } else {
              v250 = null;                              // #37782:235:53 #37787:73:233 [-] +#37790:53:53 /* never executed in any replay */
            }
            v252 = 6; arr_v230[6] = v250;               // #37835:194:26 [L h1]
            if (v226) {                                 // #37840:137:160 [L h1]
              v254 = v226.depth;                        // #37859:223:200 [L h1]
              if (v254) {                               // #37868:114:160 [L h1]
                v253 = 1;                               // #37887:118:72 [L h1] +#37890:238:53
              } else {
                v253 = 0;                               // #37874:250:53 #37879:30:72 [-] +#37882:246:53 /* never executed in any replay */
              }
            } else {
              v253 = null;                              // #37846:117:53 #37851:180:233 [-] +#37854:180:53 /* never executed in any replay */
            }
            v255 = 7; arr_v230[7] = v253;               // #37895:11:26 [L h1]
            if (v226) {                                 // #37900:238:160 [L h1]
              v404 = undefined;                         // #37919:168:233 [L h1]
              v405 = v226.desynchronized;               // #37922:223:200 [L h1]
              v257 = !(v404 === v405);                  // #37927:207:65 #37931:124:130 [L h1]
              v256 = v257;                              // #37934:121:150 [L h1] +#37937:165:53
            } else {
              v256 = v226;                              // #37906:134:53 #37911:61:150 [-] +#37914:89:53 /* never executed in any replay */
            }
            if (v256) {                                 // #37942:85:160 [L h1]
              v259 = v226.desynchronized;               // #37961:212:200 [L h1]
              if (v259) {                               // #37966:211:160 [L h1]
                v258 = 1;                               // #37985:223:72 [-] +#37988:243:53 /* never executed in any replay */
              } else {
                v258 = 0;                               // #37972:23:53 #37977:249:72 [L h1] +#37980:37:53
              }
            } else {
              v258 = null;                              // #37948:17:53 #37953:66:233 [-] +#37956:138:53 /* never executed in any replay */
            }
            v260 = 8; arr_v230[8] = v258;               // #37993:226:26 [L h1]
            if (v226) {                                 // #37998:41:160 [L h1]
              v262 = v226[KP(m38016k136)];              // #38017:63:200 [L h1]
              if (v262) {                               // #38022:82:160 [L h1]
                v261 = 1;                               // #38041:74:72 [-] +#38044:114:53 /* never executed in any replay */
              } else {
                v261 = 0;                               // #38028:90:53 #38033:148:72 [L h1] +#38036:20:53
              }
            } else {
              v261 = null;                              // #38004:149:53 #38009:245:233 [-] +#38012:49:53 /* never executed in any replay */
            }
            v263 = 9; arr_v230[9] = v261;               // #38049:126:26 [L h1]
            if (v226) {                                 // #38054:85:160 [L h1]
              v264 = v226.powerPreference;              // #38073:125:200 [L h1] +#38078:153:53
            } else {
              v264 = null;                              // #38060:17:53 #38065:177:233 [-] +#38068:253:53 /* never executed in any replay */
            }
            v265 = 10; arr_v230[10] = v264;             // #38083:130:26 [L h1]
            if (v226) {                                 // #38088:73:160 [L h1]
              v267 = v226.premultipliedAlpha;           // #38107:9:200 [L h1]
              if (v267) {                               // #38129:116:160 [L h1]
                v266 = 1;                               // #38148:185:72 [L h1] +#38151:229:53
              } else {
                v266 = 0;                               // #38135:116:53 #38140:125:72 [-] +#38143:153:53 /* never executed in any replay */
              }
            } else {
              v266 = null;                              // #38094:53:53 #38099:155:233 [-] +#38102:191:53 /* never executed in any replay */
            }
            v268 = 11; arr_v230[11] = v266;             // #38156:179:26 [L h1]
            if (v226) {                                 // #38161:246:160 [L h1]
              v270 = v226.preserveDrawingBuffer;        // #38180:162:200 [L h1]
              if (v270) {                               // #38205:233:160 [L h1]
                v269 = 1;                               // #38224:89:72 [-] +#38227:5:53 /* never executed in any replay */
              } else {
                v269 = 0;                               // #38211:85:53 #38216:254:72 [L h1] +#38219:86:53
              }
            } else {
              v269 = null;                              // #38167:110:53 #38172:244:233 [-] +#38175:244:53 /* never executed in any replay */
            }
            v271 = 12; arr_v230[12] = v269;             // #38232:44:26 [L h1]
            if (v226) {                                 // #38237:203:160 [L h1]
              v273 = v226.stencil;                      // #38256:77:200 [L h1]
              if (v273) {                               // #38267:168:160 [L h1]
                v272 = 1;                               // #38286:115:72 [-] +#38289:55:53 /* never executed in any replay */
              } else {
                v272 = 0;                               // #38273:216:53 #38278:148:72 [L h1] +#38281:20:53
              }
            } else {
              v272 = null;                              // #38243:47:53 #38248:90:233 [-] +#38251:66:53 /* never executed in any replay */
            }
            v274 = 13; arr_v230[13] = v272;             // #38294:86:26 [L h1]
            if (f32_v400) {                             // #38299:205:160 [L h1]
              arr_v276 = [];                            // #38318:158:107 [L h1]
              v277 = 0;                                 // #38320:253:72 [L h1]
              v278 = f32_v400[0];                       // #38323:35:7 [L h1]
              v279 = 0; arr_v276[0] = v278;             // #38327:184:26 [L h1]
              v280 = 1;                                 // #38332:47:72 [L h1]
              v406 = f32_v400[1];                       // #38335:13:7 [L h1]
              v281 = 1; arr_v276[1] = v406;             // #38339:122:26 [L h1]
              arr_v275 = arr_v276;                      // #38344:255:150 [L h1] +#38347:147:53
            } else {
              arr_v275 = null;                          // #38305:169:53 #38310:251:233 [-] +#38313:159:53 /* never executed in any replay */
            }
            v282 = 14; arr_v230[14] = arr_v275;         // #38352:12:26 [L h1]
            if (f32_v401) {                             // #38357:43:160 [L h1]
              arr_v284 = [];                            // #38376:129:107 [L h1]
              v285 = 0;                                 // #38378:20:72 [L h1]
              v286 = f32_v401[0];                       // #38381:158:7 [L h1]
              v287 = 0; arr_v284[0] = v286;             // #38385:7:26 [L h1]
              v288 = 1;                                 // #38390:2:72 [L h1]
              v407 = f32_v401[1];                       // #38393:84:7 [L h1]
              v289 = 1; arr_v284[1] = v407;             // #38397:101:26 [L h1]
              arr_v283 = arr_v284;                      // #38402:254:150 [L h1] +#38405:86:53
            } else {
              arr_v283 = null;                          // #38363:15:53 #38368:1:233 [-] +#38371:13:53 /* never executed in any replay */
            }
            v290 = 15; arr_v230[15] = arr_v283;         // #38410:244:26 [L h1]
            v291 = 35661;                               // #38415:216:233 [L h1]
            v292 = cell[47][KP(m38420k216)](35661);      // #38421:97:66 [L h1]
            v293 = 16; arr_v230[16] = v292;             // #38446:126:26 [L h1]
            v294 = 35660;                               // #38451:186:233 [L h1]
            v295 = cell[47][KP(m38456k186)](35660);      // #38457:59:66 [L h1]
            v296 = 17; arr_v230[17] = v295;             // #38482:112:26 [L h1]
            v297 = 34930;                               // #38487:100:233 [L h1]
            v298 = cell[47][KP(m38492k100)](34930);      // #38493:189:66 [L h1]
            v299 = 18; arr_v230[18] = v298;             // #38518:106:26 [L h1]
            v300 = 34076;                               // #38523:246:233 [L h1]
            v301 = cell[47][KP(m38528k246)](34076);      // #38529:135:66 [L h1]
            v302 = 19; arr_v230[19] = v301;             // #38554:140:26 [L h1]
            v303 = 3408;                                // #38559:16:233 [L h1]
            v304 = cell[47][KP(m38563k16)](3408);       // #38564:185:66 [L h1]
            v305 = 20; arr_v230[20] = v304;             // #38589:118:26 [L h1]
            v306 = 3410;                                // #38594:210:233 [L h1]
            v307 = cell[47][KP(m38598k210)](3410);      // #38599:243:66 [L h1]
            v308 = 21; arr_v230[21] = v307;             // #38624:72:26 [L h1]
            v309 = 3411;                                // #38629:220:233 [L h1]
            v310 = cell[47][KP(m38633k220)](3411);      // #38634:85:66 [L h1]
            v311 = 22; arr_v230[22] = v310;             // #38659:162:26 [L h1]
            v312 = 3412;                                // #38664:78:233 [L h1]
            v313 = cell[47][KP(m38668k78)](3412);       // #38669:127:66 [L h1]
            v314 = 23; arr_v230[23] = v313;             // #38694:164:26 [L h1]
            v315 = 3413;                                // #38699:200:233 [L h1]
            v316 = cell[47][KP(m38703k200)](3413);      // #38704:145:66 [L h1]
            v317 = 24; arr_v230[24] = v316;             // #38729:238:26 [L h1]
            v318 = 3414;                                // #38734:106:233 [L h1]
            v319 = cell[47][KP(m38738k106)](3414);      // #38739:43:66 [L h1]
            v320 = 25; arr_v230[25] = v319;             // #38764:160:26 [L h1]
            v321 = 3415;                                // #38769:212:233 [L h1]
            v322 = cell[47][KP(m38773k212)](3415);      // #38774:109:66 [L h1]
            v323 = 26; arr_v230[26] = v322;             // #38799:90:26 [L h1]
            v324 = 32936;                               // #38804:38:233 [L h1]
            v325 = cell[47][KP(m38809k38)](32936);      // #38810:247:66 [L h1]
            v326 = 27; arr_v230[27] = v325;             // #38835:60:26 [L h1]
            v327 = 32937;                               // #38840:0:233 [L h1]
            v328 = cell[47][KP(m38845k0)](32937);       // #38846:233:66 [L h1]
            v329 = 28; arr_v230[28] = v328;             // #38871:230:26 [L h1]
            v330 = 2963;                                // #38876:130:233 [L h1]
            v331 = cell[47][KP(m38880k130)](2963);      // #38881:227:66 [L h1]
            v332 = 29; arr_v230[29] = v331;             // #38906:120:26 [L h1]
            v333 = 2968;                                // #38911:76:233 [L h1]
            v334 = cell[47][KP(m38915k76)](2968);       // #38916:5:66 [L h1]
            v335 = 30; arr_v230[30] = v334;             // #38941:146:26 [L h1]
            v336 = 36004;                               // #38946:126:233 [L h1]
            v337 = cell[47][KP(m38951k126)](36004);      // #38952:239:66 [L h1]
            v338 = 31; arr_v230[31] = v337;             // #38977:84:26 [L h1]
            v339 = 36005;                               // #38982:184:233 [L h1]
            v340 = cell[47][KP(m38987k184)](36005);      // #38988:193:66 [L h1]
            v341 = 32; arr_v230[32] = v340;             // #39013:94:26 [L h1]
            v342 = undefined;                           // #39018:26:233 [L h1]
            gl_v408 = cell[47];                         // #39021:157:236 [L h1]
            v343 = cell[47].drawingBufferColorSpace;      // #39024:64:200 [L h1]
            if (v342 === v343) {                        // #39029:204:161 [L h1]
              v344 = null;                              // #39052:98:233 [-] +#39055:42:53 /* never executed in any replay */
            } else {
              v344 = gl_v408.drawingBufferColorSpace;      // #39037:108:53 #39042:196:200 [L h1] +#39047:132:53
            }
            v345 = 33; arr_v230[33] = v344;             // #39060:221:26 [L h1]
            v346 = gl_v408.unpackColorSpace;            // #39065:128:200 [L h1]
            v347 = undefined;                           // #39070:52:233 [L h1]
            if (v346 === v347) {                        // #39073:240:161 [L h1]
              v409 = null;                              // #39096:90:233 [-] +#39099:66:53 /* never executed in any replay */
            } else {
              v409 = gl_v408.unpackColorSpace;          // #39081:0:53 #39086:65:200 [L h1] +#39091:77:53
            }
            v410 = 34; arr_v230[34] = v409;             // #39104:205:26 [L h1]
            cell[36] = arr_v230;                        // #39109:127:195 [L h1]
            arr_v348 = tryStack.pop();                       // #39112:254:124 [L h1]
            v411 = undefined;                           // #39115:86:53 #39150:131:233 [L h1]
            return v411;                                // #39153:199:245 [L h1]
          } catch (caught) {
            outside("L37464_67");                       // #37459:187:150 #37462:67:233 [-]  L37464_67 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
          }
        } catch (caught) {
          v349 = caught;                                  // #39120:226:150 [-] /* never executed in any replay */
          v350 = KP(m39122k226);                        // #39123:142:233 [-] /* never executed in any replay */
          v351 = v349[KP(m39132k142)];                  // #39133:173:200 [-] /* never executed in any replay */
          v352 = v350 + v351;                           // #39138:78:222 [-] /* never executed in any replay */
          cell[36] = v352;                              // #39142:60:195 [-] /* never executed in any replay */
          outside("L39144_60");  // L39144_60 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
        }
      } catch (caught) {
        outside("L36556_211");                          // #36554:211:150 [-]  L36556_211 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } catch (caught) {
      v178 = caught;                                      // #36834:163:150 [-] /* never executed in any replay */
      v179 = KP(m36836k163);                            // #36837:139:233 [-] /* never executed in any replay */
      v180 = v178[KP(m36846k139)];                      // #36847:246:200 [-] /* never executed in any replay */
      v181 = v179 + v180;                               // #36852:179:222 [-] /* never executed in any replay */
      cell[34] = v181;                                  // #36856:77:195 [-] /* never executed in any replay */
      outside("L36858_77");  // L36858_77 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
    }
  } else {
    v2 = "ixRmn8";                                      // #32185:121:53 #32190:14:233 [L d1 c1]
    cell[27] = "ixRmn8";                                // #32200:252:195 [L d1 c1]
    v3 = "DmgTM4";                                      // #32203:192:233 [L d1 c1]
    cell[34] = "DmgTM4";                                // #32213:102:195 [L d1 c1]
    v4 = "HWybJ5";                                      // #32216:2:233 [L d1 c1]
    cell[36] = "HWybJ5";                                // #32226:32:195 [L d1 c1]
    v377 = undefined;                                   // #32229:84:233 [L d1 c1]
    return v377;                                        // #32232:148:245 [L d1 c1]
  }
}