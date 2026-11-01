function fn_navigator_cb_65207(win_v125 /* r70 */, v126 /* r231 */, v127 /* r232 */, v128 /* r236 */, v129 /* r237 */, v130 /* r244 */, v131 /* r247 */, v132 /* r250 */, v133 /* r252 */, v134 /* r253 */) { // entry L65207_150; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 160 register webs used only inside this fn (no live-in, cross-call or table-made def; 36 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 10 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let arr_v1 /* r205 */, v2 /* r205 */, arr_v3 /* r198 */, v4 /* r204 */, v5 /* r205 */, gl2_v6 /* r204 */, arr_v7 /* r199 */, gl_v8 /* r202 */, v9 /* r205 */, arr_v10 /* r205 */;
  let gl2_v11 /* r204 */, gl_v12 /* r202 */, v13 /* r204 */, v14 /* r205 */, v15 /* r204 */, fn_v16 /* r196 */, v17 /* r198 */, v18 /* r204 */, v19 /* r202 */, v20 /* r204 */;
  let v21 /* r199 */, v22 /* r202 */, v23 /* r204 */, arr_v24 /* r196 */, fn_v25 /* r193 */, v26 /* r204 */, v27 /* r199 */, v28 /* r192 */, v29 /* r195 */, v30 /* r204 */;
  let v31 /* r202 */, v32 /* r204 */, v33 /* r204 */, v34 /* r198 */, v35 /* r202 */, v36 /* r204 */, v37 /* r204 */, v38 /* r199 */, v39 /* r204 */, v40 /* r202 */;
  let v41 /* r199 */, v42 /* r202 */, fn_v43 /* r195 */, v44 /* r202 */, v45 /* r204 */, v46 /* r196 */, v47 /* r202 */, v48 /* r202 */, v49 /* r199 */, v50 /* r202 */;
  let v51 /* r196 */, gl2_v52 /* r204 */, gl2_v53 /* r202 */, v54 /* r204 */, webGLCompressedTextureASTC_v55 /* r205 */, fn_v56 /* r204 */, arr_v57 /* r196 */, arr_v58 /* r202 */, gl2_v59 /* r204 */, gl2_v60 /* r202 */;
  let v61 /* r204 */, gl2_v62 /* r204 */, gl2_v63 /* r202 */, v64 /* r204 */, arr_v65 /* r204 */, v66 /* r202 */, v67 /* r202 */, v68 /* r202 */, v69 /* r202 */, v70 /* r202 */;
  let v71 /* r202 */, v72 /* r202 */, v73 /* r204 */, gl2_v74 /* r204 */, gl2_v75 /* r202 */, v76 /* r204 */, v77 /* r204 */, v78 /* r202 */, v79 /* r202 */, v80 /* r204 */;
  let gl2_v81 /* r204 */, gl2_v82 /* r204 */, gl2_v83 /* r202 */, fn_v84 /* r196 */, v85 /* r204 */, gl2_v86 /* r204 */, v87 /* r204 */, v88 /* r202 */, v89 /* r196 */, gl2_v90 /* r204 */;
  let gl2_v91 /* r196 */, v92 /* r204 */, v93 /* r202 */, gl2_v94 /* r204 */, v95 /* r202 */, v96 /* r204 */, arr_v97 /* r204 */, v98 /* r204 */, v99 /* r202 */, gl2_v100 /* r204 */;
  let gl2_v101 /* r202 */, fn_v102 /* r196 */, v103 /* r202 */, gl2_v104 /* r204 */, gl2_v105 /* r202 */, v106 /* r204 */, gl_v107 /* r202 */, v108 /* r204 */, v109 /* r204 */, v110 /* r196 */;
  let v111 /* r202 */, v112 /* r204 */, v113 /* r202 */, v114 /* r204 */, v115 /* r202 */, v116 /* r204 */, v117 /* r204 */, fn_v118 /* r204 */, v119 /* r204 */, v120 /* r204 */;
  let v121 /* r205 */, v122 /* r204 */, v123 /* r202 */, v124 /* r205 */, v135 /* r193 */, v136 /* r195 */, v137 /* r204 */, v138 /* r198 */, v139 /* r238 */, v140 /* r254 */;
  let v141 /* r199 */, v142 /* r196 */, v143 /* r202 */, v144 /* r205 */, arr_v145 /* r193 */, v146 /* r198 */, arr_v147 /* r195 */, v148 /* r192 */, v149 /* r199 */, v150 /* r205 */;
  let v151 /* r246 */, gl2_v152 /* r245 */, fn_v153 /* r242 */, v154 /* r246 */, v155 /* r240 */, fn_v156 /* r246 */, v157 /* r245 */, arr_v158 /* r196 */, arr_v159 /* r202 */, v160 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 1, arr_v3 1, arr_v7 1, arr_v10 1, arr_v24 1, arr_v57 1, arr_v58 1, arr_v65 1
  //   Array: arr_v97 7, arr_v145 1, arr_v147 1, arr_v158 1, arr_v159 1
  //   WebGL2RenderingContext: gl2_v6 1, gl2_v11 1, gl2_v52 1, gl2_v53 1, gl2_v59 1, gl2_v60 1, gl2_v62 1, gl2_v63 1
  //   WebGL2RenderingContext: gl2_v74 1, gl2_v75 1, gl2_v81 7, gl2_v82 7, gl2_v83 7, gl2_v86 7, gl2_v90 7, gl2_v91 7
  //   WebGL2RenderingContext: gl2_v94 7, gl2_v100 7, gl2_v101 7, gl2_v104 1, gl2_v105 1, gl2_v152 7
  //   WebGLRenderingContext: gl_v8 1, gl_v12 1, gl_v107 1
  //   Function: fn_v16 1, fn_v25 1, fn_v43 1, fn_v56 1, fn_v84 7, fn_v102 7, fn_v118 1, fn_v153 7
  //   Function: fn_v156 7
  //   WebGLCompressedTextureASTC: webGLCompressedTextureASTC_v55 1
  //   Window: win_v125 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H138 binds: 1 identity writes (vN = rN, the register keeps its value) make a fn-entry, CALL or CLOS value an ordinary text def, so the reads after them become locals; OP52 steps write only the pc / key registers
  // H133 rewrites: 5 single-use temps folded (5 of them expressions, H135), 17 dead register writes dropped, 16 constants propagated (16 uses), 2 string keys as .member; 3 webs kept as registers (retOut 2, tableDef 1)
  v135 = undefined;                                     // #65208:142:53 #65218:112:233 #65221:100:233 #65224:136:233 #65227:28:233 [L d1 h1 c1]
  v136 = undefined;                                     // #65230:96:233 #65233:148:233 #65236:248:233 [L d1 h1 c1]
  v137 = undefined;                                     // #65239:204:233 [L d1 h1 c1]
  NC(100);                                              // #65242:18:211 [L d1 h1 c1]
  v138 = undefined;                                     // #65245:254:233 #65248:58:233 #65251:134:233 #65254:162:233 [L d1 h1 c1]
  v139 = undefined;                                     // #65257:78:233 [L d1 h1 c1]
  v140 = undefined;                                     // #65260:74:233 #65263:86:233 [L d1 h1 c1]
  v141 = undefined;                                     // #65266:50:233 #65269:158:233 #65272:90:233 [L d1 h1 c1]
  v142 = undefined;                                     // #65275:38:233 [L d1 h1 c1] +#65278:194:233 +#65281:238:233
  try {
    TP(tryStack, 68602, 73, callDepths);                           // #65284:31:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v143 = cell[47];                                    // #65290:206:236 [L d1 h1 c1]
    if (v143) {                                         // #65293:101:160 [L d1 h1 c1]
      arr_v1 = cell[54];                                // #65321:72:236 [L h1]
      if (arr_v1) {                                     // #65324:119:160 [L h1]
        arr_v3 = arr_v1;                                // #65377:56:150 [L h1] +#65380:40:53
      } else {
        v2 = v143.getSupportedExtensions();             // #65330:43:53 #65335:73:138 [-] /* never executed in any replay */
        arr_v3 = v2;                                    // #65369:82:150 [-] +#65372:90:53 /* never executed in any replay */
      }
      cell[54] = arr_v3;                                // #65385:6:195 [L h1]
      v4 = cell[55];                                    // #65388:217:236 [L h1]
      if (!(v4)) {                                      // #65391:4:160 [L h1]
        v5 = cell[70](arr_v3);                          // #65397:196:53 #65402:21:22 [-]  VM call: pushes a frame, the callee body returns into r205; then v5 = r205 (H142 CALL bind) /* never executed in any replay */
        v4 = v5;                                        // #65406:238:150 [-] +#65409:134:53 /* never executed in any replay */
      }
      cell[55] = v4;                                    // #65414:71:195 [L h1]
      gl2_v6 = cell[48];                                // #65417:86:236 [L h1]
      if (gl2_v6) {                                     // #65420:205:160 [L h1]
        gl_v8 = cell[47];                               // #65439:87:236 [L h1]
        if (gl2_v6 === gl_v8) {                         // #65442:71:161 [L h1]
          arr_v7 = arr_v3;                              // #65524:98:150 [-] +#65527:42:53 /* never executed in any replay */
        } else {
          v9 = cell[56];                                // #65450:187:53 #65455:13:236 [L h1]
          if (v9) {                                     // #65458:104:160 [L h1]
            arr_v7 = v9;                                // #65511:146:150 [-] +#65514:154:53 /* never executed in any replay */
          } else {
            arr_v10 = gl2_v6.getSupportedExtensions();  // #65464:152:53 #65469:172:138 [L h1]
            arr_v7 = arr_v10;                           // #65503:233:150 [L h1] +#65506:85:53
          }
        }
      } else {
        arr_v7 = null;                                  // #65426:169:53 #65431:219:233 [-] +#65434:255:53 /* never executed in any replay */
      }
      cell[56] = arr_v7;                                // #65532:171:195 [L h1]
      gl2_v11 = cell[48];                               // #65535:42:236 [L h1]
      gl_v12 = cell[47];                                // #65538:109:236 [L h1]
      if (gl2_v11 === gl_v12) {                         // #65541:133:161 [L h1]
        v13 = cell[55];                                 // #65563:4:236 [-] /* never executed in any replay */
        r205 = cell[55];                                // #65566:225:150 [-] +#65569:109:53 /* never executed in any replay */
      } else {
        r205 = cell[70](arr_v7);                        // #65549:129:53 #65554:190:22 [L h1] +#65558:22:53  VM call: pushes a frame, the callee body returns into r205
      }
      v14 = r205; cell[57] = v14;                       // #65574:40:195 [L h1]
      v15 = cell[25];                                   // #65577:243:236 [L h1]
      if (v15) {                                        // #65580:54:160 [L h1]
        v21 = v15;                                      // #66791:250:150 [-] +#66794:98:53 /* never executed in any replay */
      } else {
        fn_v16 = clos;                                  // #65586:174:53 #65591:215:216 [L h1]  closure creation (operands from the byte stream); then fn_v16 = its home register (H139 CLOS bind)
        v17 = undefined;                                // #65605:239:233 [L h1]
        v18 = KP(65607);                                // #65608:167:233 [L h1]
        v19 = cell[19][KP(m66743k167)](v18);            // #66744:180:66 [L h1]
        v20 = MC(undefined, fn_v16, v19);               // #66775:61:114 [L h1]
        cell[25] = v20;                                 // #66780:47:195 [L h1]
        v21 = v20;                                      // #66783:32:150 [L h1] +#66786:112:53
      }
      v22 = v21;                                        // #66799:251:150 [L h1]
      v23 = "A";                                        // #66802:131:233 [L h1]
      arr_v24 = v22.split("A");                         // #66807:72:138 [L h1]
      fn_v25 = win_v125.Array;                          // #66825:255:200 [L h1]
      v26 = arr_v24.length;                             // #66830:154:200 [L h1]
      arr_v145 = new fn_v25(v26);                       // #66835:30:1 [L h1]
      v27 = 0;                                          // #66840:125:72 [L h1]
      v28 = 1;                                          // #66843:32:72 [L h1]
      v29 = "length";                                   // #66846:84:233 [L h1] +#66851:212:53
      while ((v31 = arr_v24.length, v32 = v27 < v31, v27 < v31)) {  // #66866:62:7 | #66870:71:186 [L h14]
        v33 = cell[55];                                 // #66888:251:236 [L h13]
        v34 = arr_v24[v27];                             // #66891:169:7 [L h13]
        v35 = v33[v34];                                 // #66895:31:7 [L h13]
        if (v35) {                                      // #66899:178:160 [L h13]
          v36 = 1;                                      // #66918:117:72 [L h8] +#66921:177:53
        } else {
          v36 = 0;                                      // #66905:58:53 #66910:220:72 [L h5] +#66913:60:53
        }
        arr_v145[v27] = v36;                            // #66926:83:210 [L h13]
        v30 = v27; v27 = v27 + 1;                       // #66856:214:48 [L h13]
      }
      v37 = cell[26];                                   // #66934:158:236 [L h1]
      if (v37) {                                        // #66937:245:160 [L h1]
        v40 = v37;                                      // #67241:200:150 [-] +#67244:120:53 /* never executed in any replay */
      } else {
        v38 = KP(66947);                                // #66943:49:53 #66948:238:233 [L h1]
        v39 = cell[19][KP(m67198k238)](v38);            // #67199:159:66 [L h1]
        cell[26] = v39;                                 // #67230:137:195 [L h1]
        v40 = v39;                                      // #67233:146:150 [L h1] +#67236:154:53
      }
      v41 = v40;                                        // #67249:206:150 [L h1]
      v42 = "A";                                        // #67252:202:233 [L h1]
      v146 = v41.split("A");                            // #67257:51:138 [L h1]
      fn_v43 = win_v125.Array;                          // #67275:254:200 [L h1]
      v44 = v146.length;                                // #67280:93:200 [L h1]
      arr_v147 = new fn_v43(v44);                       // #67285:149:1 [L h1]
      v45 = 0;                                          // #67290:216:72 [L h1]
      v148 = 1;                                         // #67293:207:72 [L h1]
      v46 = "length";                                   // #67296:7:233 [L h1] +#67301:123:53
      while ((v149 = v146.length, v48 = v45 < v149, v45 < v149)) {  // #67316:167:7 | #67320:76:186 [L h4]
        v14 = cell[57];                                 // #67338:147:236 [L h3]
        v49 = v146[v45];                                // #67341:225:7 [L h3]
        if (v14[v49]) {                                 // #67345:119:7 #67349:170:160 [L h3]
          v50 = 1;                                      // #67368:25:72 [L h2] +#67371:197:53
        } else {
          v50 = 0;                                      // #67355:82:53 #67360:175:72 [L h1] +#67363:131:53
        }
        arr_v147[v45] = v50;                            // #67376:50:210 [L h3]
        v47 = v45; v45 = v45 + v148;                    // #67306:220:48 [L h3]
      }
      v51 = null;                                       // #67384:159:233 [L h1]
      cell[100] = null;                                 // #67387:137:195 [L h1]
      try {
        TP(tryStack, 67595, 219, callDepths);                      // #67390:14:194 [L h1]  try: pushes the catch arm of the enclosing try (TP)
        gl2_v52 = cell[48];                             // #67396:193:236 [L h1]
        if (gl2_v52) {                                  // #67399:76:160 [L h1]
          v150 = v14[KP(67417)];                        // #67418:254:200 #67423:115:150 [L h1] +#67426:55:53
        } else {
          v150 = gl2_v52;                               // #67405:236:53 #67410:16:150 [-] +#67413:160:53 /* never executed in any replay */
        }
        if (v150) {                                     // #67431:34:160 [L h1]
          gl2_v53 = gl2_v52;                            // #67442:121:150 [L h1]
          v54 = KP(67444);                              // #67445:137:233 [L h1]
          webGLCompressedTextureASTC_v55 = gl2_v53.getExtension(v54);          // #67450:182:138 [L h1]
          if (webGLCompressedTextureASTC_v55) {          // #67475:173:160 [L h1]
            fn_v56 = webGLCompressedTextureASTC_v55.getSupportedProfiles;          // #67494:160:200 #67518:13:150 [L h1] +#67521:233:53
          } else {
            fn_v56 = webGLCompressedTextureASTC_v55;          // #67481:9:53 #67486:233:150 [-] +#67489:85:53 /* never executed in any replay */
          }
          if (fn_v56) {                                 // #67526:235:160 [L h1]
            arr_v57 = webGLCompressedTextureASTC_v55.getSupportedProfiles();          // #67545:163:138 [L h1]
            cell[100] = arr_v57;                        // #67577:125:195 [L h1]
            v150 = arr_v57;                             // #67580:182:150 [L h1] +#67583:46:53
          } else {
            v150 = fn_v56;                              // #67532:207:53 #67537:241:150 [-] +#67540:61:53 /* never executed in any replay */
          }
        } else {
          // #67437:234:53 [-] /* never executed in any replay */
        }
        arr_v58 = tryStack.pop();                            // #67588:54:124 [L h1]
        v146 = {};                                      // #67591:174:53 #67604:227:159 [L h1]
        gl2_v59 = cell[48];                             // #67606:130:236 [L h1]
        L68366_167: {
          if (gl2_v59) {                                // #67609:73:160 [L h1]
            gl2_v60 = gl2_v59;                          // #67620:128:150 [L h1]
            v61 = "EXT_color_buffer_float";             // #67623:52:233 [L h1]
            v149 = gl2_v60.getExtension("EXT_color_buffer_float");          // #67649:117:138 [L h1]
            gl2_v62 = cell[48];                         // #67674:76:236 [L h1]
            gl2_v63 = cell[48];                         // #67677:9:150 [L h1]
            v64 = KP(67679);                            // #67680:217:233 [L h1]
            v149 = gl2_v63.getExtension(v64);           // #67711:198:138 [L h1]
            arr_v65 = [];                               // #67736:220:107 [L h1]
            v149 = 33325;                               // #67738:32:233 [L h1]
            v66 = 0; arr_v65[0] = 33325;                // #67744:1:26 [L h1]
            v149 = 33327;                               // #67749:241:233 [L h1]
            v67 = 1; arr_v65[1] = 33327;                // #67755:206:26 [L h1]
            v149 = 34842;                               // #67760:202:233 [L h1]
            v68 = 2; arr_v65[2] = 34842;                // #67766:131:26 [L h1]
            v149 = 33326;                               // #67771:235:233 [L h1]
            v69 = 3; arr_v65[3] = 33326;                // #67777:96:26 [L h1]
            v149 = 33328;                               // #67782:148:233 [L h1]
            v70 = 4; arr_v65[4] = 33328;                // #67788:165:26 [L h1]
            v149 = 34836;                               // #67793:5:233 [L h1]
            v71 = 5; arr_v65[5] = 34836;                // #67799:146:26 [L h1]
            v149 = 35898;                               // #67804:126:233 [L h1]
            v72 = 6; arr_v65[6] = 35898;                // #67810:103:26 [L h1]
            v139 = arr_v65;                             // #67815:120:150 [L h1]
            v146 = win_v125.Array;                      // #67818:111:200 [L h1]
            v73 = arr_v65.length;                       // #67823:74:200 [L h1]
            v146 = new v146(v73);                       // #67828:14:1 [L h1]
            v150 = cell[48][KP(m67832k14)]();           // #67833:63:66 [L h1]
            gl2_v74 = cell[48];                         // #67862:110:236 [L h1]
            gl2_v75 = cell[48];                         // #67865:35:150 [L h1]
            v76 = 36160;                                // #67868:11:233 [L h1]
            v149 = gl2_v75.bindFramebuffer(36160, v150);          // #67874:176:138 [L h1]
            v140 = 0;                                   // #67903:71:72 [L h1]
            v131 = 36161;                               // #67906:159:233 [L h1]
            v133 = 36160;                               // #67912:151:233 [L h1]
            v134 = 36053;                               // #67918:175:233 [L h1]
            v126 = "length";                            // #67924:103:233 [L h1]
            v128 = "bindRenderbuffer";                  // #67929:63:233 [L h1]
            v127 = "createRenderbuffer";                // #67949:183:233 [L h1]
            v148 = "deleteRenderbuffer";                // #67971:79:233 [L h1]
            v129 = "renderbufferStorage";               // #67993:135:233 [L h1]
            v132 = "checkFramebufferStatus";            // #68016:223:233 [L h1]
            v130 = "framebufferRenderbuffer";           // #68042:215:233 [L h1] +#68069:11:53
            while ((v79 = v139[v126], v80 = v140 < v79, v140 < v79)) {  // #68087:140:7 | #68091:221:186 [L h8]
              v149 = null;                              // #68109:139:233 [L h7]
              try {
                TP(tryStack, 68263, 173, callDepths);              // #68112:136:194 [L h7]  try: pushes the catch arm of the enclosing try (TP)
                gl2_v81 = cell[48];                     // #68118:211:236 [L h7]
                v149 = MC(gl2_v81, v127);               // #68121:70:16 [L h7]
                gl2_v82 = cell[48];                     // #68126:25:236 [L h7]
                gl2_v83 = cell[48];                     // #68129:226:150 [L h7]
                fn_v84 = gl2_v83[v128];                 // #68132:180:7 [L h7]
                v85 = 36161;                            // #68136:152:233 [L h7]
                v151 = fn_v84.call(gl2_v83, 36161, v149);            // #68142:55:16 [L h7]
                gl2_v86 = cell[48];                     // #68149:134:236 [L h7]
                gl2_v152 = cell[48];                    // #68152:219:150 [L h7]
                fn_v153 = gl2_v152[v129];               // #68155:9:7 [L h7]
                v87 = 36161;                            // #68159:217:233 [L h7]
                v88 = v139[v140];                       // #68165:143:7 [L h7]
                v89 = 4;                                // #68169:106:72 [L h7]
                v154 = 4;                               // #68172:153:72 [L h7]
                v155 = fn_v153.call(gl2_v152, 36161, v88, 4, v154);            // #68175:116:16 [L h7]
                gl2_v90 = cell[48];                     // #68184:15:236 [L h7]
                gl2_v91 = cell[48];                     // #68187:128:150 [L h7]
                fn_v156 = gl2_v91[v130];                // #68190:90:7 [L h7]
                v92 = 36160;                            // #68194:38:233 [L h7]
                v93 = 36064;                            // #68200:194:233 [L h7]
                v157 = fn_v156.call(gl2_v91, 36160, 36064, v131, v149);            // #68206:57:16 [L h7]
                gl2_v94 = cell[48];                     // #68215:0:236 [L h7]
                v95 = MC(gl2_v94, v132, v133);            // #68218:89:114 [L h7]
                if (v95 === v134) {                     // #68223:193:161 [L h7]
                  v96 = 1;                              // #68244:233:72 [L h7] +#68247:85:53
                } else {
                  v96 = 0;                              // #68231:205:53 #68236:84:72 [-] +#68239:212:53 /* never executed in any replay */
                }
                v146[v140] = v96;                       // #68252:5:199 [L h7]
                arr_v97 = tryStack.pop();                    // #68256:236:124 [L h7] +#68259:12:53
              } catch (caught) {
                v98 = null;                             // #68264:38:150 #68267:194:233 [-] /* never executed in any replay */
                v146[v140] = null;                      // #68270:115:210 [-] /* never executed in any replay */
              }
              if (v149) {                               // #68278:62:160 [L h7]
                gl2_v100 = cell[48];                    // #68297:61:236 [L h7]
                gl2_v101 = cell[48];                    // #68300:118:150 [L h7]
                fn_v102 = gl2_v101[v148];               // #68303:248:7 [L h7]
                v103 = fn_v102.call(gl2_v101, v149);            // #68307:23:16 #68313:104:150 [L h7] +#68316:152:53
              } else {
                v99 = v149;                             // #68284:150:53 #68289:34:150 [-] +#68292:234:53 /* never executed in any replay */
              }
              v77 = 1;                                  // #68074:93:72 [L h7]
              v78 = v140; v140 = v140 + 1;              // #68077:200:48 [L h7]
            }
            gl2_v104 = cell[48];                        // #68326:99:236 [L h1]
            gl2_v105 = cell[48];                        // #68329:132:150 [L h1]
            v106 = gl2_v105.deleteFramebuffer(v150);              // #68332:133:138 [L h1]
            break L68366_167;                           // #68362:129:53 [L h1]
          } else {
            // #67615:53:53 [-] /* never executed in any replay */
          }
        }
        v149 = null;                                    // #68367:127:233 [L h1]
        v139 = cell[72];                                // #68370:174:236 [L h1]
        v148 = undefined;                               // #68373:42:233 [L h1]
        gl_v107 = cell[47];                             // #68376:109:236 [L h1]
        v108 = cell[55];                                // #68379:100:236 [L h1]
        v150 = v108[KP(68381)];                         // #68382:171:200 [L h1]
        v109 = KP(68386);                               // #68387:115:233 [L h1]
        v110 = MC(v148, v139, gl_v107, v150, v109);          // #68392:102:16 [L h1]
        if (v110) {                                     // #68400:157:160 [L h1]
          v111 = undefined;                             // #68419:159:233 [-] /* never executed in any replay */
          v148 = v110[KP(68421)];                       // #68422:186:200 [-] /* never executed in any replay */
          v112 = !(undefined === v148);                 // #68427:254:65 #68431:175:130 [-] /* never executed in any replay */
          v150 = v112;                                  // #68434:160:150 [-] +#68437:240:53 /* never executed in any replay */
        } else {
          v150 = v110;                                  // #68406:57:53 #68411:201:150 [L h1] +#68414:181:53
        }
        if (v150) {                                     // #68442:9:160 [L h1]
          try {
            TP(tryStack, 68508, 34, callDepths);                   // #68453:186:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
            v113 = cell[47];                            // #68459:189:236 [-] /* never executed in any replay */
            v114 = cell[47];                            // #68462:246:150 [-] /* never executed in any replay */
            v115 = cell[47].getParameter;               // #68465:117:200 [-] /* never executed in any replay */
            v150 = v110[KP(68469)];                     // #68470:184:200 [-] /* never executed in any replay */
            v149 = v115.call(v114, v150);               // #68475:233:138 [-] /* never executed in any replay */
            v150 = tryStack.pop();                           // #68501:64:124 [-] +#68504:16:53 /* never executed in any replay */
          } catch (caught) {
            outside("L68511_7");                        // #68509:7:150 [-]  L68511_7 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
          }
        } else {
          // #68448:245:53 [L h1]
        }
        v150 = [];                                      // #68517:240:107 [L h1]
        v116 = 0; v150[0] = arr_v145;                   // #68519:145:26 [L h1]
        v117 = 1; v150[1] = arr_v147;                   // #68524:238:26 [L h1]
        arr_v158 = cell[100];                           // #68529:33:236 [L h1]
        if (arr_v158) {                                 // #68532:44:160 [L h1]
          fn_v118 = clos;                               // #68551:12:216 [L h1]  closure creation (operands from the byte stream); then fn_v118 = its home register (H139 CLOS bind)
          arr_v159 = fn_v118();                         // #68568:248:113 [L h1] +#68572:232:53
        } else {
          arr_v159 = null;                              // #68538:76:53 #68543:176:233 [-] +#68546:192:53 /* never executed in any replay */
        }
        v119 = 2; v150[2] = arr_v159;                   // #68577:189:26 [L h1]
        v120 = 3; v150[3] = v146;                       // #68582:106:26 [L h1]
        v160 = 4; v150[4] = v149;                       // #68587:163:26 [L h1]
        cell[39] = v150;                                // #68592:125:195 [L h1]
        v150 = tryStack.pop();                               // #68595:132:124 [L h1]
        v150 = undefined;                               // #68598:68:53 #68633:1:233 [L h1]
        return v150;                                    // #68636:205:245 [L h1]
      } catch (caught) {
        outside("L67598_28");                           // #67596:28:150 [-]  L67598_28 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      cell[39] = "uHLB6";                               // #65299:225:53 #65304:10:233 #65313:8:195 [L d1 c1]
      v144 = undefined;                                 // #65316:156:233 [L d1 c1]
      return v144;                                      // #65319:188:245 [L d1 c1]
    }
  } catch (caught) {
    v121 = caught;                                        // #68603:82:150 [-] /* never executed in any replay */
    v122 = KP(m68605k82);                               // #68606:62:233 [-] /* never executed in any replay */
    v123 = v121[KP(m68615k62)];                         // #68616:157:200 [-] /* never executed in any replay */
    v124 = v122 + v123;                                 // #68621:126:222 [-] /* never executed in any replay */
    cell[39] = v124;                                    // #68625:172:195 [-] /* never executed in any replay */
    outside("L68627_172");  // L68627_172 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}