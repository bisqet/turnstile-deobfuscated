function fn_Promise_48662(win_v68 /* r70 */) { // entry L48652_62; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 288 register webs used only inside this fn (no live-in, cross-call or table-made def; 221 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 3 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, gl_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, v5 /* r205 */, v6 /* r205 */, gl_v7 /* r205 */, v8 /* r204 */, gl_v9 /* r204 */, fn_v10 /* r204 */;
  let f32_v11 /* r204 */, v12 /* r204 */, v13 /* r205 */, v14 /* r204 */, v15 /* r205 */, v16 /* r204 */, v17 /* r205 */, v18 /* r204 */, v19 /* r205 */, v20 /* r204 */;
  let gl_v21 /* r205 */, v22 /* r204 */, gl_v23 /* r205 */, v24 /* r204 */, gl_v25 /* r205 */, v26 /* r204 */, v27 /* r204 */, v28 /* r205 */, v29 /* r204 */, v30 /* r205 */;
  let v31 /* r204 */, v32 /* r205 */, v33 /* r204 */, v34 /* r205 */, v35 /* r204 */, gl_v36 /* r205 */, v37 /* r205 */, canvas_v38 /* r205 */, fn_v39 /* r204 */, u8_v40 /* r204 */;
  let gl_v41 /* r205 */, gl_v42 /* r205 */, gl_v43 /* r205 */, gl_v44 /* r205 */, gl_v45 /* r205 */, gl_v46 /* r205 */, v47 /* r205 */, canvas_v48 /* r205 */, gl_v49 /* r205 */, v50 /* r205 */;
  let v51 /* r205 */, v52 /* r205 */, v53 /* r205 */, v54 /* r205 */, v55 /* r205 */, v56 /* r205 */, arr_v57 /* r205 */, v58 /* r205 */, gl_v59 /* r205 */, gl_v60 /* r205 */;
  let gl_v61 /* r205 */, buf_v62 /* r205 */, promise_v63 /* r204 */, fn_v64 /* r205 */, v65 /* r205 */, v66 /* r205 */, v67 /* r205 */, v69 /* r196 */, v70 /* r198 */, v71 /* r199 */;
  let v72 /* r192 */, v73 /* r252 */, v74 /* r195 */, v75 /* r193 */, v76 /* r202 */, fn_v77 /* r204 */, promise_v78 /* r205 */, v79 /* r202 */, webGLShader_v80 /* r196 */, gl_v81 /* r202 */;
  let gl_v82 /* r195 */, v83 /* r202 */, v84 /* r192 */, gl_v85 /* r202 */, gl_v86 /* r195 */, v87 /* r202 */, v88 /* r202 */, webGLShader_v89 /* r193 */, gl_v90 /* r202 */, gl_v91 /* r195 */;
  let v92 /* r202 */, v93 /* r192 */, gl_v94 /* r202 */, gl_v95 /* r195 */, v96 /* r202 */, v97 /* r202 */, webGLShader_v98 /* r198 */, gl_v99 /* r202 */, fn_v100 /* r199 */, fn_v101 /* r254 */;
  let v102 /* r192 */, v103 /* r202 */, v104 /* r195 */, v105 /* r202 */, arr_v106 /* r195 */, v107 /* r202 */, v108 /* r202 */, gl_v109 /* r202 */, webGLBuffer_v110 /* r199 */, gl_v111 /* r202 */;
  let v112 /* r202 */, gl_v113 /* r202 */, gl_v114 /* r195 */, fn_v115 /* r192 */, arr_v116 /* r202 */, v117 /* r254 */, v118 /* r253 */, v119 /* r254 */, v120 /* r254 */, v121 /* r253 */;
  let v122 /* r254 */, v123 /* r253 */, v124 /* r254 */, v125 /* r254 */, v126 /* r253 */, v127 /* r254 */, v128 /* r254 */, v129 /* r253 */, v130 /* r254 */, v131 /* r253 */;
  let v132 /* r254 */, v133 /* r253 */, v134 /* r254 */, v135 /* r253 */, v136 /* r254 */, v137 /* r202 */, v138 /* r254 */, gl_v139 /* r202 */, gl_v140 /* r195 */, v141 /* r202 */;
  let v142 /* r202 */, v143 /* r202 */, v144 /* r202 */, v145 /* r204 */, v146 /* r205 */, webGLProgram_v147 /* r192 */, gl_v148 /* r202 */, gl_v149 /* r202 */, gl_v150 /* r202 */, gl_v151 /* r202 */;
  let gl_v152 /* r195 */, v153 /* r202 */, v154 /* r202 */, v155 /* r202 */, v156 /* r202 */, v157 /* r204 */, v158 /* r205 */, gl_v159 /* r202 */, v160 /* r202 */, gl_v161 /* r202 */;
  let gl_v162 /* r195 */, v163 /* r202 */, gl_v164 /* r202 */, gl_v165 /* r195 */, v166 /* r202 */, gl_v167 /* r202 */, gl_v168 /* r250 */, v169 /* r202 */, v170 /* r195 */, v171 /* r254 */;
  let v172 /* r253 */, v173 /* r252 */, v174 /* r247 */, v175 /* r202 */, v176 /* r195 */, v177 /* r202 */, v178 /* r195 */, v179 /* r202 */, v180 /* r195 */, v181 /* r254 */;
  let v182 /* r253 */, v183 /* r202 */, v184 /* r195 */, v185 /* r254 */, gl_v186 /* r202 */, gl_v187 /* r250 */, v188 /* r202 */, v189 /* r195 */, v190 /* r254 */, v191 /* r253 */;
  let v192 /* r252 */, v193 /* r247 */, gl_v194 /* r202 */, v195 /* r202 */, gl_v196 /* r202 */, v197 /* r202 */, gl_v198 /* r202 */, gl_v199 /* r195 */, v200 /* r202 */, webGLProgram_v201 /* r195 */;
  let gl_v202 /* r202 */, v203 /* r202 */, gl_v204 /* r202 */, v205 /* r202 */, gl_v206 /* r202 */, v207 /* r202 */, gl_v208 /* r202 */, gl_v209 /* r193 */, v210 /* r202 */, gl_v211 /* r202 */;
  let v212 /* r202 */, gl_v213 /* r202 */, gl_v214 /* r192 */, v215 /* r202 */, gl_v216 /* r202 */, gl_v217 /* r192 */, v218 /* r202 */, gl_v219 /* r202 */, gl_v220 /* r240 */, v221 /* r202 */;
  let v222 /* r192 */, v223 /* r245 */, v224 /* r244 */, v225 /* r242 */, v226 /* r238 */, v227 /* r202 */, v228 /* r192 */, v229 /* r202 */, v230 /* r192 */, v231 /* r202 */;
  let v232 /* r192 */, v233 /* r245 */, v234 /* r244 */, v235 /* r202 */, v236 /* r192 */, v237 /* r245 */, fn_v238 /* r252 */, u8_v239 /* r252 */, gl_v240 /* r202 */, gl_v241 /* r240 */;
  let v242 /* r202 */, v243 /* r192 */, v244 /* r245 */, v245 /* r244 */, v246 /* r242 */, v247 /* r238 */, gl_v248 /* r202 */, v249 /* r202 */, fn_v250 /* r195 */, arr_v251 /* r195 */;
  let v252 /* r193 */, v253 /* r246 */, v254 /* r247 */, v255 /* r250 */, v256 /* r253 */, v257 /* r254 */, v258 /* r202 */, v259 /* r202 */, v260 /* r202 */, v261 /* r192 */;
  let arr_v262 /* r202 */, arr_v263 /* r192 */, v264 /* r195 */, v265 /* r193 */, v266 /* r195 */, v267 /* r195 */, v268 /* r193 */, v269 /* r195 */, v270 /* r193 */, v271 /* r195 */;
  let v272 /* r202 */, v273 /* r202 */, gl_v274 /* r202 */, v275 /* r202 */, gl_v276 /* r202 */, v277 /* r202 */, gl_v278 /* r202 */, v279 /* r202 */, fn_v280 /* r247 */, v281 /* r202 */;
  let fn_v282 /* r199 */, promise_v283 /* r202 */, fn_v284 /* r199 */, fn_v285 /* r204 */, promise_v286 /* r205 */, v287 /* r204 */, v288 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   WebGLRenderingContext: gl_v2 1, gl_v7 1, gl_v9 1, gl_v21 1, gl_v23 1, gl_v25 1, gl_v36 1, gl_v41 1
  //   WebGLRenderingContext: gl_v42 1, gl_v43 1, gl_v44 1, gl_v45 1, gl_v46 1, gl_v49 1, gl_v59 1, gl_v60 1
  //   WebGLRenderingContext: gl_v61 1, gl_v81 1, gl_v82 1, gl_v85 1, gl_v86 1, gl_v90 1, gl_v91 1, gl_v94 1
  //   WebGLRenderingContext: gl_v95 1, gl_v99 1, gl_v109 1, gl_v111 1, gl_v113 1, gl_v114 1, gl_v139 1, gl_v140 1
  //   WebGLRenderingContext: gl_v148 1, gl_v149 1, gl_v150 1, gl_v151 1, gl_v152 1, gl_v159 1, gl_v161 1, gl_v162 1
  //   WebGLRenderingContext: gl_v164 1, gl_v165 1, gl_v167 1, gl_v168 1, gl_v186 1, gl_v187 1, gl_v194 1, gl_v196 1
  //   WebGLRenderingContext: gl_v198 1, gl_v199 1, gl_v202 1, gl_v204 1, gl_v206 1, gl_v208 1, gl_v209 1, gl_v211 1
  //   WebGLRenderingContext: gl_v213 1, gl_v214 1, gl_v216 1, gl_v217 1, gl_v219 1, gl_v220 1, gl_v240 1, gl_v241 1
  //   WebGLRenderingContext: gl_v248 1, gl_v274 1, gl_v276 1, gl_v278 1
  //   Function: fn_v10 1, fn_v39 1, fn_v64 1, fn_v77 2, fn_v100 1, fn_v101 1, fn_v115 1, fn_v238 1
  //   Function: fn_v250 1, fn_v280 1, fn_v282 1, fn_v284 1, fn_v285 1
  //   Float32Array: f32_v11 1
  //   OffscreenCanvas: canvas_v38 1, canvas_v48 1
  //   Uint8Array: u8_v40 1, u8_v239 1
  //   Array: arr_v57 1, arr_v106 1, arr_v116 1, arr_v251 1, arr_v262 1, arr_v263 1
  //   ArrayBuffer: buf_v62 1
  //   Promise: promise_v63 1, promise_v78 2, promise_v283 1, promise_v286 1
  //   Window: win_v68 3
  //   WebGLShader: webGLShader_v80 1, webGLShader_v89 1, webGLShader_v98 1
  //   WebGLBuffer: webGLBuffer_v110 1
  //   WebGLProgram: webGLProgram_v147 1, webGLProgram_v201 1
  // H133 rewrites: 15 single-use temps folded (5 of them expressions, H135), 16 dead register writes dropped, 7 constants propagated (7 uses), 0 string keys as .member; 5 webs kept as registers (retOut 5)
  v69 = undefined;                                      // #48653:150:53 #48663:4:233 [L d1 h1 c1]
  v70 = undefined;                                      // #48666:168:233 #48669:188:233 [L d1 h1 c1]
  v71 = undefined;                                      // #48672:128:233 [L d1 h1 c1]
  v72 = undefined;                                      // #48675:52:233 [L d1 h1 c1]
  v1 = undefined;                                       // #48678:24:233 #48681:108:233 [L d1 h1 c1]
  v73 = undefined;                                      // #48684:112:233 #48687:100:233 #48690:136:233 [L d1 h1 c1]
  v74 = undefined;                                      // #48693:28:233 [L d1 h1 c1]
  v75 = undefined;                                      // #48696:96:233 [L d1 h1 c1] +#48699:148:233 +#48702:248:233
  try {
    TP(tryStack, 52936, 9, callDepths);                            // #48705:129:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v76 = cell[47];                                     // #48711:40:236 [L d1 h1 c1]
    if (v76) {                                          // #48714:215:160 [L d1 h1 c1]
      v79 = 35633;                                      // #48764:28:233 [L h1]
      webGLShader_v80 = cell[47][KP(m48769k28)](v79);   // #48770:149:66 [L h1]
      gl_v81 = cell[47];                                // #48795:236:236 [L h1]
      gl_v82 = cell[47];                                // #48798:41:150 [L h1]
      v83 = "attribute vec2 p;void main(){gl_Position=vec4(p,0,1);}";  // #48801:121:233 [L h1]
      v84 = gl_v82.shaderSource(webGLShader_v80, v83);  // #48859:230:138 [L h1]
      gl_v85 = cell[47];                                // #48885:57:236 [L h1]
      gl_v86 = cell[47];                                // #48888:130:150 [L h1]
      v87 = gl_v86.compileShader(webGLShader_v80);      // #48891:11:138 [L h1]
      v88 = 35632;                                      // #48917:83:233 [L h1]
      webGLShader_v89 = cell[47][KP(m48922k83)](v88);   // #48923:176:66 [L h1]
      gl_v90 = cell[47];                                // #48948:91:236 [L h1]
      gl_v91 = cell[47];                                // #48951:156:150 [L h1]
      v92 = KP(m48953k156);                             // #48954:224:233 [L h1]
      v93 = gl_v91.shaderSource(webGLShader_v89, v92);  // #49054:113:138 [L h1]
      gl_v94 = cell[47];                                // #49080:88:236 [L h1]
      gl_v95 = cell[47];                                // #49083:229:150 [L h1]
      v96 = gl_v95.compileShader(webGLShader_v89);      // #49086:162:138 [L h1]
      v97 = 35632;                                      // #49112:78:233 [L h1]
      webGLShader_v98 = cell[47][KP(m49117k78)](v97);   // #49118:127:66 [L h1]
      gl_v99 = cell[47];                                // #49143:174:236 [L h1]
      gl_v2 = cell[47];                                 // #49146:99:150 [L h1]
      fn_v100 = cell[47].shaderSource;                  // #49149:110:200 [L h1]
      v3 = cell[22];                                    // #49165:161:236 [L h1]
      if (v3) {                                         // #49168:172:160 [L h1]
        v104 = v3;                                      // #50487:109:150 [-] +#50490:201:53 /* never executed in any replay */
      } else {
        fn_v101 = clos;                                 // #49174:204:53 #49179:24:216 [L h1]  closure creation (operands from the byte stream); then fn_v101 = its home register (H139 CLOS bind)
        v102 = undefined;                               // #49193:108:233 [L h1]
        v4 = KP(m49195k108);                            // #49196:112:233 [L h1]
        v103 = cell[19][KP(m50439k112)](v4);            // #50440:153:66 [L h1]
        v5 = MC(v102, fn_v101, v103);                   // #50471:206:114 [L h1]
        cell[22] = v5;                                  // #50476:188:195 [L h1]
        v104 = v5;                                      // #50479:185:150 [L h1] +#50482:229:53
      }
      v105 = v104;                                      // #50495:16:150 [L h1]
      arr_v106 = v105.split("A");                       // #50498:132:233 #50503:133:138 [L h1]
      v107 = KP(m50520k133);                            // #50521:101:233 [L h1]
      v6 = (arr_v106)[KP(m50525k101)](v107);            // #50526:34:138 [L h1]
      v108 = fn_v100.call(gl_v2, webGLShader_v98, v6);  // #50543:25:16 [L h1]
      gl_v109 = cell[47];                               // #50550:96:236 [L h1]
      gl_v7 = cell[47];                                 // #50553:205:150 [L h1]
      v8 = gl_v7.compileShader(webGLShader_v98);        // #50556:234:138 [L h1]
      webGLBuffer_v110 = cell[47][KP(m50581k234)]();    // #50582:171:66 [L h1]
      gl_v111 = cell[47];                               // #50606:42:236 [L h1]
      gl_v9 = cell[47];                                 // #50609:239:150 [L h1]
      v112 = gl_v9.bindBuffer(34962, webGLBuffer_v110);  // #50612:167:233 #50618:220:138 [L h1]
      gl_v113 = cell[47];                               // #50642:215:236 [L h1]
      gl_v114 = cell[47];                               // #50645:40:150 [L h1]
      fn_v115 = cell[47].bufferData;                    // #50648:95:200 [L h1]
      fn_v10 = win_v68.Float32Array;                    // #50653:87:233 #50659:146:200 [L h1]
      arr_v116 = [];                                    // #50675:120:107 [L h1]
      v117 = 1;                                         // #50677:239:72 [L h1]
      v118 = -v117;                                     // #50680:43:189 [L h1]
      v119 = 0; arr_v116[0] = v118;                     // #50683:160:26 [L h1]
      v120 = 1;                                         // #50688:119:72 [L h1]
      v121 = -v120;                                     // #50691:147:189 [L h1]
      v122 = 1; arr_v116[1] = v121;                     // #50694:104:26 [L h1]
      v123 = 1;                                         // #50699:31:72 [L h1]
      v124 = 2; arr_v116[2] = 1;                        // #50702:196:26 [L h1]
      v125 = 1;                                         // #50707:11:72 [L h1]
      v126 = -v125;                                     // #50710:215:189 [L h1]
      v127 = 3; arr_v116[3] = v126;                     // #50713:156:26 [L h1]
      v128 = 1;                                         // #50718:131:72 [L h1]
      v129 = -v128;                                     // #50721:111:189 [L h1]
      v130 = 4; arr_v116[4] = v129;                     // #50724:212:26 [L h1]
      v131 = 1;                                         // #50729:219:72 [L h1]
      v132 = 5; arr_v116[5] = 1;                        // #50732:144:26 [L h1]
      v133 = 1;                                         // #50737:167:72 [L h1]
      v134 = 6; arr_v116[6] = 1;                        // #50740:44:26 [L h1]
      v135 = 1;                                         // #50745:211:72 [L h1]
      v136 = 7; arr_v116[7] = 1;                        // #50748:168:26 [L h1]
      f32_v11 = new fn_v10(arr_v116);                   // #50753:116:1 [L h1]
      v137 = 35044;                                     // #50758:88:233 [L h1]
      v138 = fn_v115.call(gl_v114, 34962, f32_v11, v137);  // #50764:9:138 [L h1]
      gl_v139 = cell[47];                               // #50790:144:236 [L h1]
      gl_v140 = cell[47];                               // #50793:61:150 [L h1]
      v12 = 35713;                                      // #50796:61:233 [L h1]
      if (gl_v140.getShaderParameter(webGLShader_v89, v12)) {  // #50802:154:138 #50834:1:160 [L h1]
        webGLProgram_v147 = cell[47][KP(m51019k103)]();  // #51020:116:66 [L h1]
        gl_v148 = cell[47];                             // #51045:15:236 [L h1]
        gl_v21 = cell[47];                              // #51048:128:150 [L h1]
        v22 = gl_v21.attachShader(webGLProgram_v147, webGLShader_v80);  // #51051:145:138 [L h1]
        gl_v149 = cell[47];                             // #51077:248:236 [L h1]
        gl_v23 = cell[47];                              // #51080:5:150 [L h1]
        v24 = gl_v23.attachShader(webGLProgram_v147, webGLShader_v89);  // #51083:66:138 [L h1]
        gl_v150 = cell[47];                             // #51109:37:236 [L h1]
        gl_v25 = cell[47];                              // #51112:190:150 [L h1]
        v26 = gl_v25.linkProgram(webGLProgram_v147);    // #51115:87:138 [L h1]
        gl_v151 = cell[47];                             // #51139:38:236 [L h1]
        gl_v152 = cell[47];                             // #51142:251:150 [L h1]
        v27 = 35714;                                    // #51145:131:233 [L h1]
        if (gl_v152.getProgramParameter(webGLProgram_v147, v27)) {  // #51151:72:138 #51184:119:160 [L h1]
          gl_v159 = cell[47];                           // #51370:105:236 [L h1]
          gl_v36 = cell[47];                            // #51373:242:150 [L h1]
          v160 = gl_v36.useProgram(webGLProgram_v147);  // #51376:187:138 [L h1]
          gl_v161 = cell[47];                           // #51399:250:236 [L h1]
          gl_v162 = cell[47];                           // #51402:127:150 [L h1]
          v163 = "p";                                   // #51405:247:233 [L h1]
          v37 = gl_v162.getAttribLocation(webGLProgram_v147, v163);  // #51410:236:138 [L h1]
          gl_v164 = cell[47];                           // #51441:167:236 [L h1]
          gl_v165 = cell[47];                           // #51444:184:150 [L h1]
          v166 = gl_v165.enableVertexAttribArray(v37);  // #51447:233:138 [L h1]
          gl_v167 = cell[47];                           // #51483:240:236 [L h1]
          gl_v168 = cell[47];                           // #51486:29:150 [L h1]
          v169 = 2;                                     // #51489:64:72 [L h1]
          v170 = 5126;                                  // #51492:244:233 [L h1]
          v171 = false;                                 // #51497:216:233 [L h1]
          v172 = 0;                                     // #51500:207:72 [L h1]
          v173 = 0;                                     // #51503:170:72 [L h1]
          v174 = gl_v168.vertexAttribPointer(v37, v169, v170, v171, v172, v173);  // #51506:147:138 [L h1]
          canvas_v38 = cell[46];                        // #51543:114:236 [L h1]
          v175 = "width";                               // #51546:222:233 [L h1]
          v176 = 16; canvas_v38.width = 16;             // #51551:160:103 [L h1]
          v177 = "height";                              // #51556:212:233 [L h1]
          v178 = 16; canvas_v38.height = 16;            // #51561:62:103 [L h1]
          v179 = 0;                                     // #51566:29:72 #51569:64:72 [L h1]
          v180 = 16;                                    // #51572:151:72 [L h1]
          v181 = 16;                                    // #51575:82:72 [L h1]
          v182 = cell[47][KP(m51577k82)](0, v179, v180, v181);  // #51578:115:66 [L h1]
          v183 = 0;                                     // #51602:190:72 #51605:157:72 [L h1]
          v184 = 4;                                     // #51608:192:72 [L h1]
          v185 = cell[47][KP(m51610k192)](5, v183, v184);  // #51611:169:66 [L h1]
          fn_v39 = win_v68.Uint8Array;                  // #51636:28:200 [L h1]
          u8_v40 = new fn_v39(1024);                    // #51641:96:233 #51646:76:1 [L h1]
          gl_v186 = cell[47];                           // #51651:135:236 [L h1]
          gl_v187 = cell[47];                           // #51654:24:150 [L h1]
          v188 = 0;                                     // #51657:15:72 #51660:234:72 [L h1]
          v189 = 16;                                    // #51663:25:72 [L h1]
          v190 = 16;                                    // #51666:76:72 [L h1]
          v191 = 6408;                                  // #51669:208:233 [L h1]
          v192 = 5121;                                  // #51674:68:233 [L h1]
          v193 = gl_v187.readPixels(0, v188, v189, v190, v191, v192, u8_v40);  // #51679:69:138 [L h1]
          gl_v194 = cell[47];                           // #51708:220:236 [L h1]
          gl_v41 = cell[47];                            // #51711:89:150 [L h1]
          v195 = gl_v41.deleteProgram(webGLProgram_v147);  // #51714:70:138 [L h1]
          gl_v196 = cell[47];                           // #51740:25:236 [L h1]
          gl_v42 = cell[47];                            // #51743:226:150 [L h1]
          v197 = gl_v42.deleteShader(webGLShader_v89);  // #51746:235:138 [L h1]
          try {
            TP(tryStack, 52729, 39, callDepths);                   // #51771:104:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
            gl_v198 = cell[47];                         // #51777:51:236 [L h1]
            gl_v199 = cell[47];                         // #51780:20:150 [L h1]
            v200 = 35713;                               // #51783:120:233 [L h1] +#51789:169:138
            L52721_9: {
              if (gl_v199.getShaderParameter(webGLShader_v98, v200)) {  // #51821:148:160 [L h1]
                webGLProgram_v201 = cell[47][KP(m51849k45)]();  // #51850:162:66 [L h1]
                gl_v202 = cell[47];                     // #51875:5:236 [L h1]
                gl_v43 = cell[47];                      // #51878:30:150 [L h1]
                v203 = gl_v43.attachShader(webGLProgram_v201, webGLShader_v80);  // #51881:55:138 [L h1]
                gl_v204 = cell[47];                     // #51907:134:236 [L h1]
                gl_v44 = cell[47];                      // #51910:219:150 [L h1]
                v205 = gl_v44.attachShader(webGLProgram_v201, webGLShader_v98);  // #51913:64:138 [L h1]
                gl_v206 = cell[47];                     // #51939:171:236 [L h1]
                gl_v45 = cell[47];                      // #51942:172:150 [L h1]
                v207 = gl_v45.linkProgram(webGLProgram_v201);  // #51945:13:138 [L h1]
                gl_v208 = cell[47];                     // #51969:132:236 [L h1]
                gl_v209 = cell[47];                     // #51972:97:150 [L h1]
                v210 = 35714;                           // #51975:209:233 [L h1]
                if (gl_v209.getProgramParameter(webGLProgram_v201, v210)) {  // #51981:222:138 #52014:53:160 [L h1]
                  gl_v211 = cell[47];                   // #52025:133:236 [L h1]
                  gl_v46 = cell[47];                    // #52028:158:150 [L h1]
                  v212 = gl_v46.useProgram(webGLProgram_v201);  // #52031:183:138 [L h1]
                  gl_v213 = cell[47];                   // #52054:6:236 [L h1]
                  gl_v214 = cell[47];                   // #52057:91:150 [L h1]
                  v215 = "p";                           // #52060:99:233 [L h1]
                  v47 = gl_v214.getAttribLocation(webGLProgram_v201, v215);  // #52065:168:138 [L h1]
                  gl_v216 = cell[47];                   // #52096:115:236 [L h1]
                  gl_v217 = cell[47];                   // #52099:84:150 [L h1]
                  v218 = gl_v217.enableVertexAttribArray(v47);  // #52102:21:138 [L h1]
                  gl_v219 = cell[47];                   // #52138:108:236 [L h1]
                  gl_v220 = cell[47];                   // #52141:169:150 [L h1]
                  v221 = 2;                             // #52144:156:72 [L h1]
                  v222 = 5126;                          // #52147:224:233 [L h1]
                  v223 = false;                         // #52152:20:233 [L h1]
                  v224 = 0;                             // #52155:27:72 [L h1]
                  v225 = 0;                             // #52158:198:72 [L h1]
                  v226 = gl_v220.vertexAttribPointer(v47, v221, v222, v223, v224, v225);  // #52161:63:138 [L h1]
                  canvas_v48 = cell[46];                // #52198:110:236 [L h1]
                  v227 = "width";                       // #52201:234:233 [L h1]
                  v228 = 4; canvas_v48.width = 4;       // #52206:124:103 [L h1]
                  v229 = "height";                      // #52211:64:233 [L h1]
                  v230 = 1; canvas_v48.height = 1;      // #52216:250:103 [L h1]
                  v231 = 0;                             // #52221:233:72 #52224:220:72 [L h1]
                  v232 = 4;                             // #52227:195:72 [L h1]
                  v233 = 1;                             // #52230:206:72 [L h1]
                  v234 = cell[47][KP(m52232k206)](0, v231, v232, v233);  // #52233:255:66 [L h1]
                  v235 = 0;                             // #52257:26:72 #52260:137:72 [L h1]
                  v236 = 4;                             // #52263:252:72 [L h1]
                  v237 = cell[47][KP(m52265k252)](5, v235, v236);  // #52266:245:66 [L h1]
                  fn_v238 = win_v68.Uint8Array;         // #52291:56:200 [L h1]
                  u8_v239 = new fn_v238(16);            // #52296:175:72 #52299:31:1 [L h1]
                  gl_v240 = cell[47];                   // #52304:206:236 [L h1]
                  gl_v241 = cell[47];                   // #52307:3:150 [L h1]
                  v242 = 0;                             // #52310:14:72 #52313:173:72 [L h1]
                  v243 = 4;                             // #52316:144:72 [L h1]
                  v244 = 1;                             // #52319:167:72 [L h1]
                  v245 = 6408;                          // #52322:127:233 [L h1]
                  v246 = 5121;                          // #52327:247:233 [L h1]
                  v247 = gl_v241.readPixels(0, v242, v243, v244, v245, v246, u8_v239);  // #52332:236:138 [L h1]
                  gl_v248 = cell[47];                   // #52361:167:236 [L h1]
                  gl_v49 = cell[47];                    // #52364:184:150 [L h1]
                  v249 = gl_v49.deleteProgram(webGLProgram_v201);  // #52367:233:138 [L h1]
                  fn_v250 = win_v68.Array;              // #52393:92:200 [L h1]
                  v50 = u8_v239.length;                 // #52398:195:200 [L h1]
                  arr_v251 = new fn_v250(v50);          // #52403:227:1 [L h1]
                  v252 = 0;                             // #52408:110:72 [L h1]
                  v253 = 1;                             // #52411:141:72 [L h1]
                  v254 = "length";                      // #52414:77:233 [L h1]
                  v255 = 16;                            // #52419:176:72 [L h1]
                  v256 = "toString";                    // #52422:164:233 [L h1]
                  v257 = 16;                            // #52427:107:72 [L h1] +#52430:79:53
                  while ((v258 = u8_v239[v254], v51 = v252 < v258, v252 < v258)) {  // #52445:9:7 | #52449:166:186 [L h17]
                    v259 = u8_v239[v252];               // #52467:152:7 [L h16]
                    v52 = v259 < v255; if (v259 < v255) {    // #52471:185:186 [L h16]
                      v260 = "0";                       // #52494:170:233 [-] +#52499:82:53 /* never executed in any replay */
                    } else {
                      v260 = "";                        // #52480:229:53 #52485:185:233 [L h16] +#52489:229:53
                    }
                    v53 = u8_v239[v252];                // #52504:117:7 [L h16]
                    v261 = MC(v53, v256, v257);         // #52508:58:114 [L h16]
                    v54 = v260 + v261;                  // #52513:231:222 [L h16]
                    arr_v251[v252] = v54;               // #52517:68:210 [L h16]
                    v252 = v252 + v253;                 // #52435:145:48 [L h16]
                  }
                  arr_v262 = [];                        // #52525:199:107 [L h1]
                  arr_v263 = arr_v251;                  // #52527:88:150 [L h1]
                  v264 = "";                            // #52530:172:233 [L h1]
                  v265 = (arr_v263)[KP(m52533k172)](v264);      // #52534:13:138 [L h1]
                  v266 = 0; arr_v262[0] = v265;         // #52551:122:26 [L h1]
                  v55 = cell[59];                       // #52556:125:236 [L h1]
                  v267 = null;                          // #52559:125:233 [L h1]
                  if (v55 === v267) {                   // #52562:85:161 [L h1]
                    v269 = 35632;                       // #52583:77:233 [L h1]
                    v270 = 36338;                       // #52589:13:233 [L h1]
                    if (cell[47][KP(m52594k13)](v269, v270)) {      // #52595:2:66 #52633:201:160 [L h1]
                      v268 = 1;                         // #52652:111:72 [L h1] +#52655:67:53
                    } else {
                      v268 = 0;                         // #52639:181:53 #52644:4:72 [-] +#52647:196:53 /* never executed in any replay */
                    }
                  } else {
                    v268 = v55;                         // #52570:17:53 #52575:149:150 [-] +#52578:81:53 /* never executed in any replay */
                  }
                  v271 = 1; arr_v262[1] = v268;         // #52660:192:26 [L h1]
                  cell[40] = arr_v262;                  // #52665:102:195 [L h1]
                  break L52721_9;                       // #52668:30:53 [L h1]
                } else {
                  v272 = cell[47];                      // #52020:113:53 #52673:105:236 [-] /* never executed in any replay */
                  v56 = cell[47];                       // #52676:242:150 [-] /* never executed in any replay */
                  v273 = v56.deleteProgram(webGLProgram_v201);  // #52679:187:138 [-] /* never executed in any replay */
                  cell[40] = "SLJF2";                   // #52705:67:233 #52714:157:195 [-] +#52717:57:53 /* never executed in any replay */
                }
              } else {
                cell[40] = "mwoeE7";                    // #51827:20:53 #51832:219:233 #51842:213:195 [-] +#51845:145:53 /* never executed in any replay */
              }
            }
            arr_v57 = tryStack.pop();                        // #52722:224:124 [L h1]
            gl_v274 = cell[47];                         // #52725:48:53 #52750:130:236 [L h1]
            gl_v59 = cell[47];                          // #52753:231:150 [L h1]
            v275 = gl_v59.deleteShader(webGLShader_v80);  // #52756:28:138 [L h1]
            gl_v276 = cell[47];                         // #52781:23:236 [L h1]
            gl_v60 = cell[47];                          // #52784:104:150 [L h1]
            v277 = gl_v60.deleteShader(webGLShader_v98);  // #52787:217:138 [L h1]
            gl_v278 = cell[47];                         // #52812:32:236 [L h1]
            gl_v61 = cell[47];                          // #52815:141:150 [L h1]
            v279 = gl_v61.deleteBuffer(webGLBuffer_v110);  // #52818:170:138 [L h1]
            fn_v280 = cell[78];                         // #52843:237:236 [L h1]
            v281 = undefined;                           // #52846:45:233 [L h1]
            buf_v62 = u8_v40.buffer;                    // #52849:144:200 [L h1]
            promise_v63 = MC(v281, fn_v280, buf_v62);   // #52854:169:114 [L h1]
            fn_v282 = promise_v63.then;                 // #52859:28:200 [L h1]
            fn_v64 = clos;                              // #52864:83:216 [L h1]  closure creation (operands from the byte stream); then fn_v64 = its home register (H139 CLOS bind)
            promise_v283 = fn_v282.call(promise_v63, fn_v64);  // #52876:216:138 [L h1]
            fn_v284 = promise_v283.catch;               // #52894:79:200 [L h1]
            fn_v285 = clos;                             // #52899:122:216 [L h1]  closure creation (operands from the byte stream); then fn_v285 = its home register (H139 CLOS bind)
            promise_v286 = fn_v284.call(promise_v283, fn_v285);  // #52908:35:138 [L h1]
            return promise_v286;                        // #52927:231:245 [L h1]
          } catch (caught) {
            v58 = KP(m52732k56);                        // #52730:56:150 #52733:12:233 [-] /* never executed in any replay */
            cell[40] = v58;                             // #52742:130:195 [-] /* never executed in any replay */
            outside("L52744_130");  // L52744_130 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
          }
        } else {
          v153 = cell[47];                              // #51190:43:53 #51195:178:236 [-] /* never executed in any replay */
          v28 = cell[47];                               // #51198:87:150 [-] /* never executed in any replay */
          v29 = v28.deleteProgram(webGLProgram_v147);   // #51201:204:138 [-] /* never executed in any replay */
          v154 = cell[47];                              // #51227:7:236 [-] /* never executed in any replay */
          v30 = cell[47];                               // #51230:152:150 [-] /* never executed in any replay */
          v31 = v30.deleteShader(webGLShader_v89);      // #51233:73:138 [-] /* never executed in any replay */
          v155 = cell[47];                              // #51258:208:236 [-] /* never executed in any replay */
          v32 = cell[47];                               // #51261:125:150 [-] /* never executed in any replay */
          v33 = v32.deleteShader(webGLShader_v80);      // #51264:218:138 [-] /* never executed in any replay */
          v156 = cell[47];                              // #51289:93:236 [-] /* never executed in any replay */
          v34 = cell[47];                               // #51292:22:150 [-] /* never executed in any replay */
          v35 = v34.deleteBuffer(webGLBuffer_v110);     // #51295:79:138 [-] /* never executed in any replay */
          cell[30] = "zjDB8";                           // #51320:135:233 #51329:209:195 [-] /* never executed in any replay */
          cell[40] = "SLJF2";                           // #51332:129:233 #51341:99:195 [-] /* never executed in any replay */
          v157 = win_v68.Promise;                       // #51344:110:200 [-] /* never executed in any replay */
          v158 = v157.resolve();                        // #51349:71:138 [-] /* never executed in any replay */
          return v158;                                  // #51368:123:245 [-] /* never executed in any replay */
        }
      } else {
        cell[40] = "mwoeE7";                            // #50840:13:53 #50845:80:233 #50855:182:195 [-] /* never executed in any replay */
        cell[30] = "zjDB8";                             // #50858:18:233 #50867:240:195 [-] /* never executed in any replay */
        v141 = cell[47];                                // #50870:155:236 [-] /* never executed in any replay */
        v13 = cell[47];                                 // #50873:220:150 [-] /* never executed in any replay */
        v14 = v13.deleteShader(webGLShader_v80);        // #50876:125:138 [-] /* never executed in any replay */
        v142 = cell[47];                                // #50901:52:236 [-] /* never executed in any replay */
        v15 = cell[47];                                 // #50904:81:150 [-] /* never executed in any replay */
        v16 = v15.deleteShader(webGLShader_v89);        // #50907:94:138 [-] /* never executed in any replay */
        v143 = cell[47];                                // #50932:209:236 [-] /* never executed in any replay */
        v17 = cell[47];                                 // #50935:186:150 [-] /* never executed in any replay */
        v18 = v17.deleteShader(webGLShader_v98);        // #50938:99:138 [-] /* never executed in any replay */
        v144 = cell[47];                                // #50963:2:236 [-] /* never executed in any replay */
        v19 = cell[47];                                 // #50966:103:150 [-] /* never executed in any replay */
        v20 = v19.deleteBuffer(webGLBuffer_v110);       // #50969:156:138 [-] /* never executed in any replay */
        v145 = win_v68.Promise;                         // #50994:3:200 [-] /* never executed in any replay */
        v146 = v145.resolve();                          // #50999:200:138 [-] /* never executed in any replay */
        return v146;                                    // #51018:56:245 [-] /* never executed in any replay */
      }
    } else {
      cell[40] = "odSqJ8";                              // #48720:11:53 #48725:178:233 #48735:16:195 [L d1 c1]
      fn_v77 = win_v68.Promise;                         // #48738:167:200 [L d1 c1]
      promise_v78 = fn_v77.resolve();                   // #48743:220:138 [L d1 c1]
      return promise_v78;                               // #48762:252:245 [L d1 c1]
    }
  } catch (caught) {
    v65 = caught;                                         // #52937:18:150 [-] /* never executed in any replay */
    v66 = KP(m52939k18);                                // #52940:254:233 [-] /* never executed in any replay */
    cell[30] = v66;                                     // #52949:44:195 [-] /* never executed in any replay */
    v67 = KP(m52951k44);                                // #52952:48:233 [-] /* never executed in any replay */
    cell[40] = v67;                                     // #52961:22:195 [-] /* never executed in any replay */
    v287 = win_v68[KP(m52963k22)];                      // #52964:21:200 [-] /* never executed in any replay */
    v288 = (v287)[KP(m52968k21)]();                     // #52969:18:138 [-] /* never executed in any replay */
    return v288;                                        // #52988:218:245 [-] /* never executed in any replay */
  }
}