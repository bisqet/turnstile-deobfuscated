function fn_canvas_getImageData_56911() { // entry L56889_238; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 276 register webs used only inside this fn (no live-in, cross-call or table-made def; 139 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let canvas_v1 /* r204 */, v2 /* r205 */, ctx2d_v3 /* r202 */, ctx2d_v4 /* r202 */, ctx2d_v5 /* r205 */, canvas_v6 /* r204 */, v7 /* r202 */, v8 /* r202 */, v9 /* r204 */, v10 /* r204 */;
  let v11 /* r202 */, v12 /* r202 */, v13 /* r202 */, v14 /* r204 */, v15 /* r202 */, v16 /* r204 */, v17 /* r202 */, canvas_v18 /* r204 */, v19 /* r202 */, ctx2d_v20 /* r205 */;
  let v21 /* r204 */, v22 /* r202 */, canvas_v23 /* r204 */, v24 /* r202 */, ctx2d_v25 /* r205 */, v26 /* r204 */, v27 /* r202 */, canvas_v28 /* r204 */, v29 /* r202 */, v30 /* r202 */;
  let ctx2d_v31 /* r202 */, canvas_v32 /* r204 */, v33 /* r202 */, v34 /* r202 */, uint8ClampedArray_v35 /* r199 */, v36 /* r205 */, v37 /* r202 */, v38 /* r204 */, v39 /* r202 */, v40 /* r204 */;
  let v41 /* r205 */, err_v42 /* r204 */, ctx2d_v43 /* r205 */, v44 /* r204 */, v45 /* r202 */, v46 /* r204 */, v47 /* r202 */, canvas_v48 /* r204 */, v49 /* r205 */, v50 /* r202 */;
  let v51 /* r205 */, v52 /* r202 */, ctx2d_v53 /* r202 */, v54 /* r205 */, v55 /* r202 */, v56 /* r204 */, ctx2d_v57 /* r202 */, v58 /* r205 */, v59 /* r204 */, v60 /* r205 */;
  let v61 /* r204 */, v62 /* r205 */, v63 /* r204 */, v64 /* r205 */, v65 /* r204 */, v66 /* r202 */, ctx2d_v67 /* r202 */, v68 /* r202 */, canvas_v69 /* r204 */, imageData_v70 /* r204 */;
  let v71 /* r205 */, v72 /* r204 */, v73 /* r202 */, v74 /* r204 */, v75 /* r202 */, v76 /* r202 */, v77 /* r202 */, v78 /* r204 */, v79 /* r204 */, v80 /* r204 */;
  let v81 /* r202 */, v82 /* r202 */, v83 /* r204 */, v84 /* r204 */, v85 /* r202 */, v86 /* r202 */, v87 /* r204 */, v88 /* r204 */, v89 /* r205 */, fn_v90 /* r205 */;
  let canvas_v91 /* r204 */, v92 /* r205 */, v93 /* r205 */, canvas_v94 /* r204 */, v95 /* r205 */, v96 /* r205 */, ctx2d_v97 /* r202 */, ctx2d_v98 /* r204 */, ctx2d_v99 /* r205 */, v100 /* r204 */;
  let v101 /* r205 */, v102 /* r202 */, ctx2d_v103 /* r205 */, v104 /* r204 */, v105 /* r204 */, v106 /* r202 */, imageData_v107 /* r205 */, v108 /* r204 */, v109 /* r202 */, imageData_v110 /* r205 */;
  let v111 /* r205 */, v112 /* r204 */, v113 /* r205 */, v114 /* r204 */, v115 /* r202 */, v116 /* r205 */, canvas_v117 /* r204 */, v118 /* r204 */, v119 /* r204 */, imageData_v120 /* r204 */;
  let uint8ClampedArray_v121 /* r205 */, v122 /* r204 */, imageData_v123 /* r204 */, v124 /* r204 */, v125 /* r202 */, v126 /* r202 */, v127 /* r204 */, v128 /* r204 */, v129 /* r204 */, v130 /* r204 */;
  let v131 /* r205 */, arr_v132 /* r205 */, v133 /* r204 */, v134 /* r204 */, arr_v135 /* r205 */, err_v136 /* r205 */, v137 /* r205 */, v138 /* r245 */, v139 /* r192 */, v140 /* r244 */;
  let v141 /* r253 */, v142 /* r198 */, v143 /* r193 */, v144 /* r195 */, v145 /* r199 */, v146 /* r196 */, v147 /* r199 */, v148 /* r199 */, v149 /* r198 */, v150 /* r195 */;
  let ctx2d_v151 /* r254 */, fn_v152 /* r253 */, v153 /* r198 */, v154 /* r195 */, v155 /* r193 */, v156 /* r192 */, v157 /* r252 */, v158 /* r198 */, v159 /* r195 */, v160 /* r198 */;
  let v161 /* r195 */, v162 /* r198 */, v163 /* r195 */, ctx2d_v164 /* r192 */, v165 /* r198 */, v166 /* r195 */, v167 /* r193 */, v168 /* r254 */, v169 /* r199 */, v170 /* r195 */;
  let v171 /* r195 */, v172 /* r198 */, v173 /* r195 */, v174 /* r195 */, v175 /* r195 */, v176 /* r193 */, fn_v177 /* r195 */, v178 /* r193 */, fn_v179 /* r195 */, v180 /* r193 */;
  let ctx2d_v181 /* r252 */, fn_v182 /* r250 */, v183 /* r195 */, v184 /* r193 */, v185 /* r192 */, v186 /* r254 */, v187 /* r253 */, v188 /* r247 */, v189 /* r195 */, v190 /* r198 */;
  let v191 /* r198 */, arr_v192 /* r198 */, v193 /* r198 */, ctx2d_v194 /* r193 */, fn_v195 /* r192 */, v196 /* r198 */, v197 /* r195 */, ctx2d_v198 /* r198 */, v199 /* r195 */, ctx2d_v200 /* r253 */;
  let fn_v201 /* r236 */, v202 /* r198 */, v203 /* r195 */, v204 /* r193 */, uint8ClampedArray_v205 /* r245 */, v206 /* r192 */, v207 /* r244 */, v208 /* r238 */, v209 /* r240 */, v210 /* r242 */;
  let v211 /* r246 */, v212 /* r247 */, v213 /* r250 */, v214 /* r252 */, v215 /* r254 */, v216 /* r199 */, v217 /* r237 */, v218 /* r193 */, v219 /* r198 */, v220 /* r195 */;
  let v221 /* r253 */, v222 /* r253 */, fn_v223 /* r199 */, v224 /* r198 */, v225 /* r195 */, v226 /* r195 */, v227 /* r195 */, v228 /* r195 */, v229 /* r253 */, v230 /* r253 */;
  let v231 /* r253 */, v232 /* r252 */, uint8ClampedArray_v233 /* r193 */, v234 /* r253 */, v235 /* r252 */, uint8ClampedArray_v236 /* r199 */, v237 /* r195 */, v238 /* r254 */, v239 /* r192 */, v240 /* r199 */;
  let ctx2d_v241 /* r202 */, v242 /* r195 */, v243 /* r193 */, v244 /* r195 */, v245 /* r193 */, v246 /* r195 */, v247 /* r195 */, v248 /* r193 */, v249 /* r192 */, v250 /* r254 */;
  let v251 /* r195 */, v252 /* r193 */, v253 /* r192 */, v254 /* r254 */, v255 /* r195 */, v256 /* r193 */, v257 /* r192 */, v258 /* r254 */, v259 /* r195 */, v260 /* r193 */;
  let v261 /* r192 */, v262 /* r254 */, uint8ClampedArray_v263 /* r199 */, v264 /* r195 */, v265 /* r193 */, v266 /* r195 */, v267 /* r202 */, v268 /* r195 */, v269 /* r193 */, v270 /* r202 */;
  let v271 /* r202 */, v272 /* r199 */, v273 /* r204 */, v274 /* r204 */, v275 /* r202 */, v276 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OffscreenCanvas: canvas_v1 3, canvas_v6 3, canvas_v18 3, canvas_v23 3, canvas_v28 3, canvas_v32 3, canvas_v48 1, canvas_v69 3
  //   OffscreenCanvas: canvas_v91 2, canvas_v94 2, canvas_v117 2
  //   OffscreenCanvasRenderingContext2D: ctx2d_v3 3, ctx2d_v4 3, ctx2d_v5 3, ctx2d_v20 3, ctx2d_v25 3, ctx2d_v31 3, ctx2d_v43 1, ctx2d_v53 1
  //   OffscreenCanvasRenderingContext2D: ctx2d_v57 1, ctx2d_v67 3, ctx2d_v97 2, ctx2d_v98 2, ctx2d_v99 2, ctx2d_v103 2, ctx2d_v151 3, ctx2d_v164 3
  //   OffscreenCanvasRenderingContext2D: ctx2d_v181 3, ctx2d_v194 1, ctx2d_v198 1, ctx2d_v200 3, ctx2d_v241 2
  //   Uint8ClampedArray: uint8ClampedArray_v35 2, uint8ClampedArray_v121 2, uint8ClampedArray_v205 2, uint8ClampedArray_v233 2, uint8ClampedArray_v236 2, uint8ClampedArray_v263 2
  //   DOMException: err_v42 1, err_v136 1
  //   ImageData: imageData_v70 2, imageData_v107 2, imageData_v110 2, imageData_v120 2, imageData_v123 2
  //   Function: fn_v90 2, fn_v152 3, fn_v177 3, fn_v179 3, fn_v182 3, fn_v195 1, fn_v201 3, fn_v223 2
  //   Array: arr_v132 2, arr_v135 2, arr_v192 2
  // H133 rewrites: 14 single-use temps folded (11 of them expressions, H135), 25 dead register writes dropped, 27 constants propagated (28 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  // alias ctx2d_c50 = cell[50]  evidence (executed member uses): .fillStyle×1 .font×1 .textBaseline×1 .getImageData×1 .drawImage×1
  v138 = undefined;                                     // #56890:134:53 #56900:44:233 #56903:48:233 #56906:36:233 #56909:72:233 #56912:220:233 [L d1 h1 c1]
  v139 = undefined;                                     // #56915:32:233 #56918:84:233 [L d1 h1 c1]
  v140 = undefined;                                     // #56921:184:233 [L d1 h1 c1]
  v141 = undefined;                                     // #56924:140:233 #56927:16:233 #56930:132:233 #56933:40:233 #56936:60:233 [L d1 h1 c1]
  v142 = undefined;                                     // #56939:0:233 #56942:180:233 [L d1 h1 c1]
  v143 = undefined;                                     // #56945:152:233 [L d1 h1 c1]
  v144 = undefined;                                     // #56948:236:233 #56951:240:233 [L d1 h1 c1]
  v145 = undefined;                                     // #56954:228:233 #56957:8:233 #56960:156:233 [L d1 h1 c1] +#56963:224:233
  try {
    TP(tryStack, 59276, 75, callDepths);                           // #56966:201:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v146 = 0;                                           // #56972:60:72 [L d1 h1 c1]
    canvas_v1 = cell[49];                               // #56975:183:236 [L d1 h1 c1]
    v147 = 80; canvas_v1.width = 80;                    // #56978:79:233 #56983:141:103 [L d1 h1 c1]
    v2 = "height";                                      // #56988:77:233 [L d1 h1 c1]
    v148 = 24; canvas_v1.height = 24;                   // #56993:19:103 [L d1 h1 c1]
    ctx2d_v3 = ctx2d_c50;                               // #56998:242:236 [L d1 h1 c1]
    L58558_101: {
      if (ctx2d_v3) {                                   // #57001:249:160 [L d1 h1 c1]
        v149 = "fillStyle";                             // #57012:207:233 [L d1 h1 c1]
        v150 = "#ffffff";                               // #57017:7:233 [L d1 h1 c1]
        ctx2d_v3.fillStyle = "#ffffff";                 // #57028:69:199 [L d1 h1 c1]
        ctx2d_v151 = ctx2d_v3;                          // #57032:94:150 [L d1 h1 c1]
        fn_v152 = ctx2d_v3.fillRect;                    // #57035:61:200 [L d1 h1 c1]
        v153 = 0;                                       // #57047:224:72 [L d1 h1 c1]
        v154 = 0;                                       // #57050:183:72 [L d1 h1 c1]
        v155 = canvas_v1.width;                         // #57053:114:200 [L d1 h1 c1]
        v156 = canvas_v1.height;                        // #57058:1:200 [L d1 h1 c1]
        v157 = fn_v152.call(ctx2d_v151, v153, v154, v155, v156);  // #57063:78:138 [L d1 h1 c1]
        ctx2d_v4 = ctx2d_c50;                           // #57088:1:236 [L d1 h1 c1]
        v158 = "fillStyle";                             // #57091:241:233 [L d1 h1 c1]
        v159 = "#000000";                               // #57096:33:233 [L d1 h1 c1]
        ctx2d_v4.fillStyle = "#000000";                 // #57107:119:199 [L d1 h1 c1]
        v160 = "font";                                  // #57111:15:233 [L d1 h1 c1]
        v161 = "16px Arial";                            // #57116:71:233 [L d1 h1 c1]
        ctx2d_v4.font = "16px Arial";                   // #57130:133:199 [L d1 h1 c1]
        v162 = "textBaseline";                          // #57134:101:233 [L d1 h1 c1]
        v163 = "top";                                   // #57150:197:233 [L d1 h1 c1]
        ctx2d_v4.textBaseline = "top";                  // #57157:139:199 [L d1 h1 c1]
        ctx2d_v164 = ctx2d_c50;                         // #57161:12:150 [L d1 h1 c1]
        v165 = "Hwmqxli";                               // #57164:144:233 [L d1 h1 c1]
        v166 = 2;                                       // #57175:167:72 [L d1 h1 c1]
        v167 = 4;                                       // #57178:34:72 [L d1 h1 c1]
        v168 = (ctx2d_v164).fillText(v165, v166, v167);  // #57181:43:138 [L d1 h1 c1]
        v169 = 0;                                       // #57204:150:72 [L d1 h1 c1]
        try {
          TP(tryStack, 57889, 58, callDepths);                     // #57207:39:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
          ctx2d_v5 = cell[52];                          // #57213:182:236 [L d1 h1 c1]
          if (ctx2d_v5) {                               // #57216:173:160 [L d1 h1 c1]
            canvas_v6 = cell[51];                       // #57227:158:236 [L d1 h1 c1]
            v7 = "width";                               // #57230:90:233 [L d1 h1 c1]
            v170 = 80; canvas_v6.width = 80;            // #57235:44:103 [L d1 h1 c1]
            v8 = "height";                              // #57240:48:233 [L d1 h1 c1]
            v171 = 24; canvas_v6.height = 24;           // #57245:42:103 [L d1 h1 c1]
            v172 = ctx2d_v5.filter;                     // #57250:217:200 [L d1 h1 c1]
            v9 = undefined;                             // #57260:105:233 [L d1 h1 c1]
            if (v9 === v172) {                          // #57263:145:161 [L d1 h1 c1]
              v10 = false;                              // #57280:78:233 [-] +#57283:102:53 /* never executed in any replay */
            } else {
              v173 = null;                              // #57288:36:233 [L d1 h1 c1]
              v10 = !(v172 === (null));                 // #57291:64:65 #57295:105:130 #57298:242:150 [L d1 h1 c1] +#57301:122:53
            }
            if (v10) {                                  // #57306:4:160 [L d1 h1 c1]
              v12 = "filter";                           // #57325:58:233 [L d1 h1 c1]
              ctx2d_v5.filter = "grayscale(1)";         // #57335:134:233 #57351:136:199 [L d1 h1 c1]
              v13 = "grayscale(1)";                     // #57355:85:150 [L d1 h1 c1] +#57358:17:53
            } else {
              v11 = v10;                                // #57312:196:53 #57317:82:150 [-] +#57320:90:53 /* never executed in any replay */
            }
            v14 = undefined;                            // #57363:150:233 [L d1 h1 c1]
            if (v172 === v14) {                         // #57366:74:161 [L d1 h1 c1]
              v15 = false;                              // #57383:229:233 [-] +#57386:97:53 /* never executed in any replay */
            } else {
              v174 = null;                              // #57391:60:233 [L d1 h1 c1]
              v15 = !((null) === v172);                 // #57394:248:65 #57398:65:130 #57401:106:150 [L d1 h1 c1] +#57404:18:53
            }
            if (v15) {                                  // #57409:161:160 [L d1 h1 c1]
              v175 = ctx2d_v5.filter;                   // #57428:89:200 [L d1 h1 c1]
              v176 = "grayscale(1)";                    // #57438:233:233 [L d1 h1 c1]
              v17 = v175 === "grayscale(1)";            // #57454:49:65 [L d1 h1 c1]
              v16 = v175 === "grayscale(1)";            // #57458:154:150 [L d1 h1 c1] +#57461:130:53
            } else {
              v16 = v15;                                // #57415:45:53 #57420:192:150 [-] +#57423:144:53 /* never executed in any replay */
            }
            if (v16) {                                  // #57466:192:160 [L d1 h1 c1]
              v146 = ctx2d_v5;                          // #57477:103:150 [L d1 h1 c1]
              fn_v177 = ctx2d_v5.drawImage;             // #57480:98:200 [L d1 h1 c1]
              canvas_v18 = cell[49];                    // #57485:197:236 [L d1 h1 c1]
              v19 = 0;                                  // #57488:72:72 #57491:127:72 [L d1 h1 c1]
              v178 = fn_v177.call(v146, canvas_v18, 0, 0);  // #57494:84:138 [L d1 h1 c1]
              ctx2d_v20 = cell[52];                     // #57519:111:236 [L d1 h1 c1]
              ctx2d_v20.filter = v172;                  // #57522:120:142 [L d1 h1 c1]
              v21 = KP(57531);                          // #57532:76:233 [L d1 h1 c1]
              v22 = "difference";                       // #57537:208:233 [L d1 h1 c1]
              ctx2d_v20[v21] = "difference";            // #57551:42:199 [L d1 h1 c1]
              v146 = ctx2d_v20;                         // #57555:239:150 [L d1 h1 c1]
              fn_v179 = ctx2d_v20.drawImage;            // #57558:202:200 [L d1 h1 c1]
              canvas_v23 = cell[49];                    // #57563:141:236 [L d1 h1 c1]
              v24 = 0;                                  // #57566:240:72 #57569:135:72 [L d1 h1 c1]
              v180 = fn_v179.call(v146, canvas_v23, 0, 0);  // #57572:60:138 [L d1 h1 c1]
              ctx2d_v25 = cell[52];                     // #57597:183:236 [L d1 h1 c1]
              v26 = KP(57599);                          // #57600:79:233 [L d1 h1 c1]
              v27 = "source-over";                      // #57605:135:233 [L d1 h1 c1]
              ctx2d_v25[v26] = "source-over";           // #57610:197:199 [L d1 h1 c1]
              canvas_v28 = cell[49];                    // #57614:92:236 [L d1 h1 c1]
              v29 = 1; canvas_v28.width = 1;            // #57617:160:233 #57622:218:103 [L d1 h1 c1]
              v30 = 1; canvas_v28.height = 1;           // #57627:166:233 #57632:72:103 [L d1 h1 c1]
              ctx2d_v31 = ctx2d_c50;                    // #57637:147:236 [L d1 h1 c1]
              ctx2d_v181 = ctx2d_c50;                   // #57640:244:150 [L d1 h1 c1]
              fn_v182 = ctx2d_c50.drawImage;            // #57643:251:200 [L d1 h1 c1]
              canvas_v32 = cell[51];                    // #57648:58:236 [L d1 h1 c1]
              v33 = 0;                                  // #57651:41:72 #57654:28:72 [L d1 h1 c1]
              v146 = 80;                                // #57657:3:72 [L d1 h1 c1]
              v183 = 24;                                // #57660:14:72 [L d1 h1 c1]
              v184 = 0;                                 // #57663:173:72 [L d1 h1 c1]
              v185 = 0;                                 // #57666:144:72 [L d1 h1 c1]
              v186 = 1;                                 // #57669:167:72 [L d1 h1 c1]
              v187 = 1;                                 // #57672:34:72 [L d1 h1 c1]
              v188 = fn_v182.call(ctx2d_v181, canvas_v32, 0, 0, v146, v183, v184, v185, v186, v187);  // #57675:43:138 [L d1 h1 c1]
              v34 = 0;                                  // #57706:150:72 #57709:21:72 [L d1 h1 c1]
              v146 = 1;                                 // #57712:88:72 [L d1 h1 c1]
              v189 = 1;                                 // #57715:79:72 [L d1 h1 c1]
              uint8ClampedArray_v35 = ctx2d_c50[KP(m57717k79)](0, 0, v146, v189).data;  // #57718:188:66 #57746:163:200 [L d1 h1]
              v36 = uint8ClampedArray_v35[0];           // #57751:46:72 #57754:208:7 [L d1 h1]
              v190 = 1 < v36;                           // #57758:231:72 #57761:148:98 [L d1 h1]
              if (v190) {                               // #57765:147:160 [L d1 h1]
                v38 = v190;                             // #57798:90:150 [-] +#57801:66:53 /* never executed in any replay */
              } else {
                v37 = uint8ClampedArray_v35[1];         // #57771:215:53 #57776:3:72 #57779:145:7 [L d1 h1]
                v191 = 1;                               // #57783:228:72 [L d1 h1]
                v38 = 1 < v37;                          // #57786:221:98 #57790:150:150 [L d1 h1] +#57793:142:53
              }
              if (v38) {                                // #57806:217:160 [L d1 h1]
                v41 = v38;                              // #57839:241:150 [-] +#57842:61:53 /* never executed in any replay */
              } else {
                v39 = uint8ClampedArray_v35[2];         // #57812:133:53 #57817:191:72 #57820:93:7 [L d1 h1]
                v40 = 1 < v39;                          // #57824:128:72 #57827:9:98 [L d1 h1]
                v41 = v40;                              // #57831:18:150 [L d1 h1] +#57834:26:53
              }
              if (v41) {                                // #57847:95:160 [L d1 h1]
                v146 = 1;                               // #57866:148:72 [-] +#57869:20:53 /* never executed in any replay */
              } else {
                v146 = 0;                               // #57853:115:53 #57858:3:72 [L d1 h1] +#57861:135:53
              }
              v169 = v146;                              // #57874:196:150 [L d1 h1] +#57877:132:53
            } else {
              // #57472:144:53 [-] /* never executed in any replay */
            }
          } else {
            // #57222:9:53 [-] /* never executed in any replay */
          }
          arr_v192 = tryStack.pop();                         // #57882:165:124 [L d1 h1] +#57885:33:53
        } catch (caught) {
          err_v42 = caught;                               // #57890:191:150 [L c1]
          v169 = 0;                                     // #57893:218:72 [L c1]
          ctx2d_v43 = cell[52];                         // #57896:93:236 [L c1]
          if (ctx2d_v43) {                              // #57899:120:160 [L c1]
            v44 = KP(m57909k210);                       // #57910:190:233 [L c1]
            v45 = KP(m57919k190);                       // #57920:250:233 [L c1]
            ctx2d_v43[v44] = v45;                       // #57928:44:199 [L c1]
            v46 = KP(m57931k44);                        // #57932:48:233 [L c1]
            v47 = KP(m57936k48);                        // #57937:36:233 [L c1]
            ctx2d_v43[v46] = v47;                       // #57942:205:210 [L c1]
            canvas_v48 = cell[49];                      // #57950:250:236 [L c1]
            v49 = KP(m57952k250);                       // #57953:70:233 [L c1]
            v50 = 80; canvas_v48[v49] = 80;             // #57958:104:103 [L c1]
            v51 = KP(m57962k104);                       // #57963:124:233 [L c1]
            v52 = 24; canvas_v48[v51] = 24;             // #57968:70:103 [L c1]
            ctx2d_v53 = ctx2d_c50;                      // #57973:25:236 [L c1]
            v54 = KP(m57975k25);                        // #57976:169:233 [L c1]
            v193 = KP(m57980k169);                      // #57981:249:233 [L c1]
            ctx2d_v53[v54] = v193;                      // #57992:239:199 [L c1]
            ctx2d_v194 = ctx2d_v53;                     // #57996:224:150 [L c1]
            fn_v195 = ctx2d_v194[KP(m57998k224)];       // #57999:55:200 [L c1]
            v55 = 0;                                    // #58011:114:72 #58014:129:72 [L c1]
            v196 = canvas_v48[KP(m58016k129)];          // #58017:148:200 [L c1]
            v197 = canvas_v48[KP(m58021k148)];          // #58022:27:200 [L c1]
            v56 = fn_v195.call(ctx2d_v194, 0, 0, v196, v197);  // #58027:128:138 [L c1]
            ctx2d_v57 = ctx2d_c50;                      // #58052:235:236 [L c1]
            v58 = KP(m58054k235);                       // #58055:179:233 [L c1]
            v59 = KP(m58059k179);                       // #58060:91:233 [L c1]
            ctx2d_v57[v58] = v59;                       // #58071:73:199 [L c1]
            v60 = KP(m58074k73);                        // #58075:25:233 [L c1]
            v61 = KP(m58079k25);                        // #58080:169:233 [L c1]
            ctx2d_v57[v60] = v61;                       // #58094:223:199 [L c1]
            v62 = KP(m58097k223);                       // #58098:215:233 [L c1]
            v63 = KP(m58113k215);                       // #58114:239:233 [L c1]
            ctx2d_v57[v62] = v63;                       // #58121:141:199 [L c1]
            ctx2d_v198 = ctx2d_v57;                     // #58125:134:150 [L c1]
            v64 = KP(m58127k134);                       // #58128:162:233 [L c1]
            v65 = 2;                                    // #58139:241:72 [L c1]
            v66 = 4;                                    // #58142:196:72 [L c1]
            v199 = (ctx2d_v198)[KP(m58144k196)](v64, 2, 4);  // #58145:197:138 [L c1] +#58168:193:53
          } else {
            outside("L57904_120");  // L57904_120 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
          }
        }
        if (!(v169)) {                                  // #58173:85:160 [L d1 h1 c1]
          ctx2d_v67 = ctx2d_c50;                        // #58179:17:53 #58184:228:236 [L d1 h1 c1]
          ctx2d_v200 = ctx2d_c50;                       // #58187:65:150 [L d1 h1 c1]
          fn_v201 = ctx2d_c50.getImageData;             // #58190:84:200 [L d1 h1 c1]
          v68 = 0;                                      // #58195:91:72 [L d1 h1 c1]
          v202 = 0;                                     // #58198:6:72 [L d1 h1 c1]
          canvas_v69 = cell[49];                        // #58201:217:236 [L d1 h1 c1]
          v203 = cell[49].width;                        // #58204:140:200 [L d1 h1 c1]
          v204 = cell[49].height;                       // #58209:51:200 [L d1 h1 c1]
          imageData_v70 = fn_v201.call(ctx2d_v200, 0, v202, v203, v204);  // #58214:56:138 [L d1 h1 c1]
          uint8ClampedArray_v205 = imageData_v70.data;  // #58243:47:200 [L d1 h1]
          v71 = 0;                                      // #58248:138:72 [L d1 h1]
          v206 = 0;                                     // #58251:57:72 [L d1 h1]
          v207 = 0;                                     // #58254:236:72 [L d1 h1]
          v208 = 1;                                     // #58257:147:72 [L d1 h1]
          v209 = 2;                                     // #58260:94:72 [L d1 h1]
          v210 = 3;                                     // #58263:189:72 [L d1 h1]
          v211 = 0;                                     // #58266:96:72 [L d1 h1]
          v212 = 250;                                   // #58269:55:72 [L d1 h1]
          v213 = 250;                                   // #58272:114:72 [L d1 h1]
          v214 = 250;                                   // #58275:129:72 [L d1 h1]
          v215 = 1;                                     // #58278:20:72 [L d1 h1]
          v216 = 1;                                     // #58281:27:72 [L d1 h1]
          v217 = "length";                              // #58284:35:233 [L d1 h1] +#58289:39:53
          while ((v73 = uint8ClampedArray_v205[v217], v74 = v207 < v73, v207 < v73)) {  // #58305:36:7 | #58309:21:186 [L d2 h2]
            v218 = uint8ClampedArray_v205[v207];        // #58327:81:7 [L d1 h1]
            v75 = v207 + v208;                          // #58331:98:222 [L d1 h1]
            v219 = uint8ClampedArray_v205[v75];         // #58335:52:7 [L d1 h1]
            v76 = v207 + v209;                          // #58339:121:222 [L d1 h1]
            v220 = uint8ClampedArray_v205[v76];         // #58343:175:7 [L d1 h1]
            v77 = v207 + v210;                          // #58347:200:222 [L d1 h1]
            v221 = uint8ClampedArray_v205[v77];         // #58351:130:7 [L d1 h1]
            v78 = v211 < v221;                          // #58355:131:98 [L d1 h1]
            if (v78) {                                  // #58359:134:160 [L d1 h1]
              v79 = v218 < v212; if (v218 < v212) {     // #58378:12:186 [L d1 h1]
                v81 = v79;                              // #58404:129:150 [L d1 h1] +#58407:141:53
              } else {
                v80 = v213 > v219;                      // #58387:172:53 #58392:175:212 [-] /* never executed in any replay */
                v81 = v80;                              // #58396:160:150 [-] +#58399:240:53 /* never executed in any replay */
              }
              if (v81) {                                // #58412:205:160 [L d1 h1]
                v83 = v81;                              // #58435:94:150 [L d1 h1] +#58438:54:53
              } else {
                v82 = v214 > v220;                      // #58418:169:53 #58423:181:212 [-] /* never executed in any replay */
                v83 = v82;                              // #58427:14:150 [-] +#58430:38:53 /* never executed in any replay */
              }
              v222 = v83;                               // #58443:148:150 [L d1 h1] +#58446:20:53
            } else {
              v222 = v78;                               // #58365:190:53 #58370:223:150 [-] +#58373:243:53 /* never executed in any replay */
            }
            if (v222) {                                 // #58451:237:160 [L d1 h1]
              v84 = v206;                               // #58462:210:150 [L d1 h1]
              v206 = v206 + v215;                       // #58465:31:222 [L d1 h1]
              v146 = 2;                                 // #58469:186:72 [L d1 h1]
              v85 = !(v218 === v219);                   // #58472:254:65 #58476:175:130 [L d1 h1]
              if (v85) {                                // #58479:2:160 [L d1 h1]
                v87 = v85;                              // #58505:171:150 [-] +#58508:143:53 /* never executed in any replay */
              } else {
                v86 = !(v219 === v220);                 // #58485:74:53 #58490:156:65 #58494:85:130 [L d1 h1]
                v87 = v86;                              // #58497:46:150 [L d1 h1] +#58500:198:53
              }
              if (v87) {                                // #58513:229:160 [L d1 h1]
                v88 = 0;                                // #58524:249:150 [-] /* never executed in any replay */
                v89 = 0 + v216;                         // #58527:106:222 [-] /* never executed in any replay */
                v146 = 1;                               // #58531:153:72 [-] /* never executed in any replay */
                break L58558_101;                       // #58534:69:53 [-] /* never executed in any replay */
              }
              // #58519:97:53 [L d1 h1]
            } else {
              // #58457:73:53 [-] /* never executed in any replay */
            }
            v72 = 4;                                    // #58294:99:72 [L d1 h1]
            v207 = v207 + (4);                          // #58297:170:180 [L d1 h1]
          }
          break L58558_101;
        }
      } else {
        // #57007:37:53 [-] /* never executed in any replay */
      }
    }
    fn_v90 = clos;                                      // #58559:184:216 [L d1 h1]  closure creation (operands from the byte stream); then fn_v90 = its home register (H139 CLOS bind)
    fn_v223 = fn_v90;                                   // #58578:197:150 [L d1 h1]
    v224 = 0;                                           // #58581:72:72 [L d1 h1]
    canvas_v91 = cell[49];                              // #58584:147:236 [L d1 h1]
    v92 = "width";                                      // #58587:187:233 [L d1 h1]
    v225 = 16; canvas_v91.width = 16;                   // #58592:73:103 [L d1 h1]
    v93 = "height";                                     // #58597:25:233 [L d1 h1]
    v226 = 16; canvas_v91.height = 16;                  // #58602:175:103 [L d1 h1]
    canvas_v94 = cell[51];                              // #58607:30:236 [L d1 h1]
    v95 = "width";                                      // #58610:218:233 [L d1 h1]
    v227 = 16; canvas_v94.width = 16;                   // #58615:172:103 [L d1 h1]
    v96 = "height";                                     // #58620:176:233 [L d1 h1]
    v228 = 16; canvas_v94.height = 16;                  // #58625:170:103 [L d1 h1]
    ctx2d_v97 = ctx2d_c50;                              // #58630:237:236 [L d1 h1]
    if (ctx2d_v97) {                                    // #58633:200:160 [L d1 h1]
      ctx2d_v99 = cell[52];                             // #58652:106:236 [L d1 h1]
      ctx2d_v98 = cell[52];                             // #58655:47:150 [L d1 h1] +#58658:3:53
    } else {
      ctx2d_v98 = ctx2d_v97;                            // #58639:120:53 #58644:22:150 [-] +#58647:14:53 /* never executed in any replay */
    }
    L58882_191: {
      if (ctx2d_v98) {                                  // #58663:241:160 [L d1 h1]
        v100 = undefined;                               // #58674:37:233 [L d1 h1]
        v101 = 0;                                       // #58677:40:72 [L d1 h1]
        v229 = MC(undefined, fn_v223, ctx2d_v97, 0);    // #58680:191:168 [L d1 h1]
        v102 = undefined;                               // #58686:55:233 [L d1 h1]
        ctx2d_v103 = cell[52];                          // #58689:134:236 [L d1 h1]
        v104 = 1;                                       // #58692:69:72 [L d1 h1]
        v230 = MC(undefined, fn_v223, ctx2d_v103, 1);   // #58695:168:168 [L d1 h1]
        v105 = 0;                                       // #58701:95:72 [L d1 h1]
        v106 = 0;                                       // #58704:250:72 [L d1 h1]
        v231 = 16;                                      // #58707:233:72 [L d1 h1]
        v232 = 16;                                      // #58710:220:72 [L d1 h1]
        imageData_v107 = ctx2d_c50[KP(m58712k220)](0, 0, v231, v232);  // #58713:85:66 [L d1 h1]
        uint8ClampedArray_v233 = imageData_v107.data;   // #58741:24:200 [L d1 h1]
        v108 = 0;                                       // #58746:15:72 [L d1 h1]
        v109 = 0;                                       // #58749:234:72 [L d1 h1]
        v234 = 16;                                      // #58752:25:72 [L d1 h1]
        v235 = 16;                                      // #58755:76:72 [L d1 h1]
        imageData_v110 = cell[52][KP(m58757k76)](0, 0, v234, v235);  // #58758:5:66 [L d1 h1]
        uint8ClampedArray_v236 = imageData_v110.data;   // #58786:8:200 [L d1 h1]
        v224 = 1;                                       // #58791:63:72 [L d1 h1]
        v237 = 0;                                       // #58794:90:72 [L d1 h1]
        v238 = 1;                                       // #58797:201:72 [L d1 h1]
        v239 = "length";                                // #58800:153:233 [L d1 h1] +#58805:69:53
        while ((v112 = uint8ClampedArray_v233[v239], v113 = v237 < v112, v237 < v112)) {  // #58820:167:7 | #58824:76:186 [L d1 h1]
          v114 = uint8ClampedArray_v233[v237];          // #58842:235:7 [L d1 h1]
          v115 = uint8ClampedArray_v236[v237];          // #58846:217:7 [L d1 h1]
          v116 = v114 === v115;                         // #58850:97:65 [L d1 h1]
          if (!(v116)) {                                // #58854:108:160 [L d1 h1]
            v224 = 0;                                   // #58860:140:53 #58865:173:72 [L d1 h1]
            break L58882_191;                           // #58868:9:53 [L d1 h1]
          }
          v111 = v237; v237 = v237 + v238;              // #58810:182:48 [-] /* never executed in any replay */
        }
        break L58882_191;
      } else {
        // #58669:61:53 [-] /* never executed in any replay */
      }
    }
    v240 = 0;                                           // #58883:218:72 [L d1 h1]
    ctx2d_v241 = ctx2d_c50;                             // #58886:93:236 [L d1 h1]
    if (ctx2d_v241) {                                   // #58889:120:160 [L d1 h1]
      canvas_v117 = cell[49];                           // #58900:53:236 [L d1 h1]
      v242 = "width";                                   // #58903:85:233 [L d1 h1]
      v243 = 16; canvas_v117.width = 16;                // #58908:251:103 [L d1 h1]
      v244 = "height";                                  // #58913:131:233 [L d1 h1]
      v245 = 16; canvas_v117.height = 16;               // #58918:241:103 [L d1 h1]
      v118 = "fillStyle";                               // #58923:33:233 [L d1 h1]
      v246 = "#f06d06";                                 // #58928:145:233 [L d1 h1]
      ctx2d_v241.fillStyle = "#f06d06";                 // #58939:39:199 [L d1 h1]
      v119 = 0;                                         // #58943:162:72 [L d1 h1]
      v247 = 0;                                         // #58946:241:72 [L d1 h1]
      v248 = 16;                                        // #58949:196:72 [L d1 h1]
      v249 = 16;                                        // #58952:11:72 [L d1 h1]
      v250 = ctx2d_v241.fillRect((0), (0), (16), (16));  // #58955:176:138 [L d1 h1]
      v251 = 0;                                         // #58979:71:72 [L d1 h1]
      v252 = 0;                                         // #58982:66:72 [L d1 h1]
      v253 = 1;                                         // #58985:17:72 [L d1 h1]
      v254 = 1;                                         // #58988:100:72 [L d1 h1]
      imageData_v120 = ctx2d_c50[KP(m58990k100)](v251, v252, v253, v254);  // #58991:189:66 [L d1 h1]
      uint8ClampedArray_v121 = imageData_v120.data;     // #59019:224:200 [L d1 h1]
      v122 = 0;                                         // #59024:183:72 [L d1 h1]
      v255 = 0;                                         // #59027:242:72 [L d1 h1]
      v256 = 16;                                        // #59030:1:72 [L d1 h1]
      v257 = 16;                                        // #59033:148:72 [L d1 h1]
      v258 = ctx2d_c50[KP(m59035k148)](0, v255, v256, v257);  // #59036:45:66 [L d1 h1]
      v259 = 0;                                         // #59060:16:72 [L d1 h1]
      v260 = 0;                                         // #59063:39:72 [L d1 h1]
      v261 = 1;                                         // #59066:162:72 [L d1 h1]
      v262 = 1;                                         // #59069:241:72 [L d1 h1]
      imageData_v123 = ctx2d_c50[KP(m59071k241)](v259, v260, v261, v262);  // #59072:86:66 [L d1 h1]
      uint8ClampedArray_v263 = imageData_v123.data;     // #59100:85:200 [L d1 h1]
      v264 = 0;                                         // #59105:152:72 [L d1 h1]
      v124 = uint8ClampedArray_v263[v264];              // #59108:18:7 [L d1 h1]
      v265 = 0;                                         // #59112:161:72 [L d1 h1]
      v266 = uint8ClampedArray_v121[v265];              // #59115:55:7 [L d1 h1]
      v267 = !(v124 === v266);                          // #59119:199:65 #59123:148:130 [L d1 h1]
      if (v267) {                                       // #59126:147:160 [L d1 h1]
        v127 = v267;                                    // #59166:117:150 [-] +#59169:177:53 /* never executed in any replay */
      } else {
        v125 = 1;                                       // #59132:215:53 #59137:223:72 [L d1 h1]
        v268 = uint8ClampedArray_v263[1];               // #59140:253:7 [L d1 h1]
        v126 = 1;                                       // #59144:160:72 [L d1 h1]
        v269 = uint8ClampedArray_v121[1];               // #59147:250:7 [L d1 h1]
        v270 = !(v268 === v269);                        // #59151:62:65 #59155:239:130 [L d1 h1]
        v127 = v270;                                    // #59158:224:150 [L d1 h1] +#59161:48:53
      }
      if (v127) {                                       // #59174:43:160 [L d1 h1]
        v131 = v127;                                    // #59214:107:150 [-] +#59217:79:53 /* never executed in any replay */
      } else {
        v128 = 2;                                       // #59180:15:53 #59185:235:72 [L d1 h1]
        v271 = uint8ClampedArray_v263[2];               // #59188:217:7 [L d1 h1]
        v129 = 2;                                       // #59192:12:72 [L d1 h1]
        v272 = uint8ClampedArray_v121[2];               // #59195:182:7 [L d1 h1]
        v130 = !(v271 === v272);                        // #59199:10:65 #59203:139:130 [L d1 h1]
        v131 = v130;                                    // #59206:12:150 [L d1 h1] +#59209:172:53
      }
      if (v131) {                                       // #59222:112:160 [L d1 h1]
        v240 = 1;                                       // #59241:17:72 [-] +#59244:221:53 /* never executed in any replay */
      } else {
        v240 = 0;                                       // #59228:128:53 #59233:201:72 [L d1 h1] +#59236:181:53
      }
    } else {
      // #58895:104:53 [-] /* never executed in any replay */
    }
    arr_v132 = [];                                      // #59249:153:107 [L d1 h1]
    v133 = 0; arr_v132[0] = v146;                       // #59251:214:26 [L d1 h1]
    v134 = 1; arr_v132[1] = v224;                       // #59256:95:26 [L d1 h1]
    v273 = 2; arr_v132[2] = v240;                       // #59261:4:26 [L d1 h1]
    cell[33] = arr_v132;                                // #59266:154:195 [L d1 h1]
    arr_v135 = tryStack.pop();                               // #59269:109:124 [L d1 h1] +#59272:201:53
  } catch (caught) {
    err_v136 = caught;                                    // #59277:204:150 [L c1]
    v274 = KP(m59279k204);                              // #59280:80:233 [L c1]
    v275 = err_v136[KP(m59289k80)];                     // #59290:231:200 [L c1]
    v137 = v274 + v275;                                 // #59295:32:222 [L c1]
    cell[33] = v137;                                    // #59299:70:195 [L c1] +#59302:126:53
  }
  v276 = undefined;                                     // #59307:118:233 [L d1 h1 c1]
  return v276;                                          // #59310:174:245 [L d1 h1 c1]
}