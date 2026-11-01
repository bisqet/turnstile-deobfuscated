function fn_atob_cb_19973(win_v91 /* r70 */, v92 /* r214 */, v93 /* r221 */, v94 /* r223 */, fn_v95 /* r227 */) { // entry L19973_29; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 181 register webs used only inside this fn (no live-in, cross-call or table-made def; 91 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 15 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r205 */, v2 /* r198 */, v3 /* r195 */, v4 /* r204 */, v5 /* r254 */, v6 /* r192 */, v7 /* r193 */, v8 /* r202 */, v9 /* r205 */, fn_v10 /* r204 */;
  let win_v11 /* r204 */, v12 /* r205 */, shadowRoot_v13 /* r199 */, v14 /* r202 */, v15 /* r204 */, shadowRoot_v16 /* r205 */, v17 /* r204 */, v18 /* r205 */, v19 /* r205 */, v20 /* r204 */;
  let v21 /* r205 */, v22 /* r205 */, fn_v23 /* r205 */, v24 /* r199 */, fn_v25 /* r204 */, v26 /* r199 */, v27 /* r204 */, v28 /* r205 */, arr_v29 /* r204 */, arr_v30 /* r202 */;
  let v31 /* r196 */, v32 /* r199 */, v33 /* r196 */, v34 /* r199 */, arr_v35 /* r199 */, v36 /* r202 */, arr_v37 /* r202 */, v38 /* r196 */, v39 /* r199 */, v40 /* r196 */;
  let v41 /* r199 */, arr_v42 /* r199 */, v43 /* r202 */, arr_v44 /* r202 */, v45 /* r196 */, v46 /* r199 */, v47 /* r199 */, arr_v48 /* r199 */, v49 /* r202 */, v50 /* r204 */;
  let v51 /* r204 */, v52 /* r204 */, v53 /* r204 */, v54 /* r204 */, style_v55 /* r204 */, v56 /* r205 */, v57 /* r205 */, v58 /* r205 */, arr_v59 /* r205 */, v60 /* r205 */;
  let v61 /* r205 */, v62 /* r205 */, style_v63 /* r205 */, arr_v64 /* r205 */, v65 /* r205 */, v66 /* r205 */, v67 /* r205 */, v68 /* r205 */, elDiv_v69 /* r205 */, elDiv_v70 /* r205 */;
  let elDiv_v71 /* r205 */, fn_v72 /* r205 */, arr_v73 /* r205 */, arr_v74 /* r205 */, arr_v75 /* r205 */, v76 /* r205 */, v77 /* r205 */, elDiv_v78 /* r205 */, arr_v79 /* r205 */, v80 /* r205 */;
  let v81 /* r205 */, fn_v82 /* r205 */, v83 /* r205 */, fn_v84 /* r205 */, v85 /* r205 */, fn_v86 /* r205 */, arr_v87 /* r205 */, v88 /* r205 */, v89 /* r205 */, v90 /* r205 */;
  let v96 /* r238 */, shadowRoot_v97 /* r198 */, fn_v98 /* r252 */, fn_v99 /* r253 */, fn_v100 /* r254 */, fn_v101 /* r192 */, fn_v102 /* r202 */, fn_v103 /* r193 */, arr_v104 /* r238 */, v105 /* r199 */;
  let v106 /* r202 */, elDiv_v107 /* r205 */, v108 /* r204 */, fn_v109 /* r199 */, v110 /* r202 */, elDiv_v111 /* r199 */, v112 /* r202 */, v113 /* r202 */, arr_v114 /* r204 */, v115 /* r205 */;
  let fn_v116 /* r246 */, v117 /* r237 */, v118 /* r240 */, v119 /* r245 */, v120 /* r247 */, v121 /* r244 */, v122 /* r250 */, v123 /* r252 */, v124 /* r253 */, v125 /* r242 */;
  let v126 /* r204 */, v127 /* r204 */, arr_v128 /* r204 */, fn_v129 /* r193 */, v130 /* r199 */, v131 /* r202 */, elDiv_v132 /* r254 */, v133 /* r205 */, v134 /* r202 */, v135 /* r199 */;
  let v136 /* r193 */, v137 /* r193 */, v138 /* r205 */, v139 /* r199 */, v140 /* r202 */, v141 /* r202 */, elSpan_v142 /* r192 */, v143 /* r205 */, v144 /* r202 */, v145 /* r199 */;
  let v146 /* r204 */, elSpan_v147 /* r193 */, v148 /* r205 */, fn_v149 /* r204 */, elSpan_v150 /* r202 */, fn_v151 /* r204 */, elSpan_v152 /* r202 */, elDiv_v153 /* r204 */, elDiv_v154 /* r202 */, arr_v155 /* r204 */;
  let fn_v156 /* r202 */, v157 /* r199 */, v158 /* r199 */, v159 /* r199 */, v160 /* r202 */, v161 /* r204 */, v162 /* r199 */, v163 /* r205 */, shadowRoot_v164 /* r204 */, fn_v165 /* r202 */;
  let elDiv_v166 /* r199 */, v167 /* r205 */, fn_v168 /* r204 */, win_v169 /* r204 */, fn_v170 /* r202 */, v171 /* r198 */, fn_v172 /* r204 */, v173 /* r199 */, v174 /* r204 */, fn_v175 /* r204 */;
  let v176 /* r199 */, v177 /* r204 */, v178 /* r199 */, v179 /* r204 */, v180 /* r199 */, v181 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v10 3, fn_v23 3, fn_v25 3, fn_v72 9, fn_v82 3, fn_v84 3, fn_v86 3
  //   Function: fn_v95 3, fn_v98 3, fn_v99 3, fn_v100 3, fn_v101 3, fn_v102 3, fn_v103 3, fn_v109 3
  //   Function: fn_v116 3, fn_v129 9, fn_v149 9, fn_v151 9, fn_v156 9, fn_v165 3, fn_v168 3, fn_v170 3
  //   Function: fn_v172 3, fn_v175 3
  //   Window: win_v11 3, win_v91 3, win_v169 3
  //   ShadowRoot: shadowRoot_v13 3, shadowRoot_v16 3, shadowRoot_v97 3, shadowRoot_v164 3
  //   Array: arr_v29 3, arr_v30 3, arr_v35 3, arr_v37 3, arr_v42 3, arr_v44 3, arr_v48 3, arr_v59 3
  //   Array: arr_v64 9, arr_v73 9, arr_v74 9, arr_v75 9, arr_v79 3, arr_v87 3, arr_v104 3, arr_v114 3
  //   Array: arr_v128 9, arr_v155 9
  //   CSSStyleDeclaration: style_v55 3, style_v63 9
  //   HTMLDivElement: elDiv_v69 9, elDiv_v70 9, elDiv_v71 9, elDiv_v78 3, elDiv_v107 3, elDiv_v111 3, elDiv_v132 9, elDiv_v153 9
  //   HTMLDivElement: elDiv_v154 9, elDiv_v166 3
  //   HTMLSpanElement: elSpan_v142 9, elSpan_v147 9, elSpan_v150 9, elSpan_v152 9
  // H142: 4 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 11 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 31 reads keep the register
  let v182 /* r196 */, v183 /* r195 */, v184 /* r196 */, v185 /* r195 */, v186 /* r196 */;
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 10 dead register writes dropped, 7 constants propagated (7 uses), 1 string keys as .member; 10 webs kept as registers (retOut 10, liveIn 1, crossCall 1)
  fn_v1 = fn_v95;                                       // #19974:214:150 [L d1 h1 c1]
  NC(33);                                               // #19977:206:53 #19982:202:211 [L d1 h1 c1]
  cell[33] = fn_v1;                                     // #19985:200:195 [L d1 h1 c1]
  v2 = undefined;                                       // #19988:120:53 #19993:86:233 [L d1 h1 c1]
  NC(35, 36, 37, 38, 41, 50, 52, 53, 54, 55, 56, 57, 58, 59, 60, 62);  // #19996:244:211 [L d1 h1 c1]
  v96 = undefined;                                      // #20014:216:233 #20017:44:233 #20020:48:233 #20023:36:233 #20026:72:233 [L d1 h1 c1]
  v3 = undefined;                                       // #20029:220:233 #20032:32:233 #20035:84:233 [L d1 h1 c1]
  v4 = undefined;                                       // #20038:184:233 [L d1 h1 c1]
  v5 = undefined;                                       // #20041:140:233 [L d1 h1 c1]
  v6 = undefined;                                       // #20044:16:233 #20047:132:233 [L d1 h1 c1]
  v7 = undefined;                                       // #20050:40:233 [L d1 h1 c1]
  v8 = undefined;                                       // #20053:60:233 #20056:0:233 #20059:180:233 [L d1 h1 c1]
  v9 = undefined;                                       // #20062:152:233 [L d1 h1 c1]
  clos;                                                 // #20065:223:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20077:202:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20089:201:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20101:140:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20115:3:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20126:94:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20139:13:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20151:192:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20164:103:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #20179:50:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v10 = clos;                                        // #20195:145:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  cell[52] = r252;                                      // #20224:51:195 [L d1 h1 c1]
  cell[53] = r253;                                      // #20227:205:195 [L d1 h1 c1]
  cell[54] = r254;                                      // #20230:127:195 [L d1 h1 c1]
  cell[55] = r192;                                      // #20233:233:195 [L d1 h1 c1]
  cell[56] = r202;                                      // #20236:43:195 [L d1 h1 c1]
  cell[57] = r193;                                      // #20239:229:195 [L d1 h1 c1]
  cell[58] = r196;                                      // #20242:55:195 [L d1 h1 c1]
  cell[59] = r195;                                      // #20245:193:195 [L d1 h1 c1]
  cell[60] = r205;                                      // #20248:163:195 [L d1 h1 c1]
  cell[62] = fn_v10;                                    // #20251:125:195 [L d1 h1 c1]
  win_v11 = win_v91[v93];                               // #20254:163:7 [L d1 h1 c1]
  v12 = win_v11[KP(20257)];                             // #20258:174:200 [L d1 h1 c1]
  shadowRoot_v13 = v12.pkJkg9;                          // #20263:77:200 [L d1 h1 c1]
  if (shadowRoot_v13) {                                 // #20268:168:160 [L d1 h1 c1]
    shadowRoot_v16 = shadowRoot_v13;                    // #20297:75:150 [L d1 h1 c1] +#20300:175:53
  } else {
    v14 = win_v91.document;                             // #20274:216:53 #20279:18:200 [-] /* never executed in any replay */
    v15 = v14.body;                                     // #20284:33:200 [-] /* never executed in any replay */
    shadowRoot_v16 = v14.body;                          // #20289:202:150 [-] +#20292:242:53 /* never executed in any replay */
  }
  if (shadowRoot_v16) {                                 // #20305:116:160 [L d1 h1 c1]
    shadowRoot_v97 = shadowRoot_v16;                    // #20334:177:150 [L d1 h1 c1] +#20337:253:53
  } else {
    v17 = win_v91.document;                             // #20311:116:53 #20316:126:200 [-] /* never executed in any replay */
    v18 = v17.documentElement;                          // #20321:221:200 [-] /* never executed in any replay */
    shadowRoot_v97 = v17.documentElement;               // #20326:150:150 [-] +#20329:142:53 /* never executed in any replay */
  }
  v19 = null;                                           // #20342:193:233 [L d1 h1 c1]
  cell[35] = null;                                      // #20345:163:195 [L d1 h1 c1]
  v20 = 0;                                              // #20348:46:72 [L d1 h1 c1]
  cell[36] = 0;                                         // #20351:156:195 [L d1 h1 c1]
  v21 = 0;                                              // #20354:131:72 [L d1 h1 c1]
  cell[37] = 0;                                         // #20357:221:195 [L d1 h1 c1]
  v22 = false;                                          // #20360:93:233 [L d1 h1 c1]
  cell[38] = false;                                     // #20363:207:195 [L d1 h1 c1]
  fn_v98 = clos;                                        // #20366:250:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v98 = its home register (H139 CLOS bind)
  cell[52] = fn_v98;                                    // #20378:56:195 [L d1 h1 c1]
  fn_v99 = clos;                                        // #20381:255:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v99 = its home register (H139 CLOS bind)
  cell[53] = fn_v99;                                    // #20393:105:195 [L d1 h1 c1]
  fn_v100 = clos;                                       // #20396:172:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v100 = its home register (H139 CLOS bind)
  cell[54] = fn_v100;                                   // #20408:162:195 [L d1 h1 c1]
  fn_v101 = clos;                                       // #20411:65:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v101 = its home register (H139 CLOS bind)
  cell[55] = fn_v101;                                   // #20425:35:195 [L d1 h1 c1]
  fn_v102 = clos;                                       // #20428:254:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v102 = its home register (H139 CLOS bind)
  cell[56] = fn_v102;                                   // #20439:44:195 [L d1 h1 c1]
  fn_v103 = clos;                                       // #20442:35:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v103 = its home register (H139 CLOS bind)
  cell[57] = fn_v103;                                   // #20455:253:195 [L d1 h1 c1]
  v182 = clos;                                          // #20458:240:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v182 = its home register (H139 CLOS bind)
  cell[58] = v182;                                      // #20470:214:195 [L d1 h1 c1]
  v183 = clos;                                          // #20473:165:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v183 = its home register (H139 CLOS bind)
  cell[59] = v183;                                      // #20486:247:195 [L d1 h1 c1]
  fn_v23 = clos;                                        // #20489:130:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v23 = its home register (H139 CLOS bind)
  cell[60] = fn_v23;                                    // #20504:160:195 [L d1 h1 c1]
  v24 = !shadowRoot_v97;                                // #20507:73:130 [L d1 h1 c1]
  if (v24) {                                            // #20510:180:160 [L d1 h1 c1]
    v28 = v24;                                          // #20544:42:150 [-] +#20547:210:53 /* never executed in any replay */
  } else {
    fn_v25 = shadowRoot_v97.appendChild;                // #20516:180:53 #20521:6:200 [L d1 h1 c1]
    v26 = typeof fn_v25;                                // #20526:154:193 [L d1 h1 c1]
    v27 = !(v92 === v26);                               // #20529:94:65 #20533:143:130 [L d1 h1 c1]
    v28 = v27;                                          // #20536:0:150 [L d1 h1 c1] +#20539:208:53
  }
  L21919_240: {
    if (v28) {                                          // #20552:9:160 [L d1 h1 c1]
      v179 = undefined;                                 // #21898:158:233 [-] /* never executed in any replay */
      v90 = "ABXX2";                                    // #21901:90:233 [-] /* never executed in any replay */
      v180 = MC(v179, fn_v102, "ABXX2");                // #21910:203:114 [-] +#21915:47:53 /* never executed in any replay */
    } else {
      arr_v29 = [];                                     // #20558:245:53 #20563:71:107 [L d1 h1 c1]
      arr_v30 = [];                                     // #20565:153:107 [L d1 h1 c1]
      v31 = KP(20566);                                  // #20567:41:233 [L d1 h1 c1]
      v32 = 0; arr_v30[0] = v31;                        // #20595:38:26 [L d1 h1 c1]
      v33 = KP(20599);                                  // #20600:194:233 [L d1 h1 c1]
      v34 = 1; arr_v30[1] = v33;                        // #20628:155:26 [L d1 h1 c1]
      arr_v35 = arr_v30;                                // #20633:220:150 [L d1 h1 c1]
      v36 = 0; arr_v29[0] = arr_v35;                    // #20636:205:26 [L d1 h1 c1]
      arr_v37 = [];                                     // #20641:135:107 [L d1 h1 c1]
      v38 = KP(20642);                                  // #20643:223:233 [L d1 h1 c1]
      v39 = 0; arr_v37[0] = v38;                        // #20671:132:26 [L d1 h1 c1]
      v40 = KP(20675);                                  // #20676:40:233 [L d1 h1 c1]
      v41 = 1; arr_v37[1] = v40;                        // #20704:233:26 [L d1 h1 c1]
      arr_v42 = arr_v37;                                // #20709:114:150 [L d1 h1 c1]
      v43 = 1; arr_v29[1] = arr_v42;                    // #20712:139:26 [L d1 h1 c1]
      arr_v44 = [];                                     // #20717:205:107 [L d1 h1 c1]
      v45 = KP(20718);                                  // #20719:141:233 [L d1 h1 c1]
      v46 = 0; arr_v44[0] = v45;                        // #20747:250:26 [L d1 h1 c1]
      v184 = KP(20751);                                 // #20752:70:233 [L d1 h1 c1]
      v47 = 1; arr_v44[1] = v184;                       // #20780:15:26 [L d1 h1 c1]
      arr_v48 = arr_v44;                                // #20785:128:150 [L d1 h1 c1]
      v49 = 2; arr_v29[2] = arr_v48;                    // #20788:225:26 [L d1 h1 c1]
      arr_v104 = arr_v29;                               // #20793:138:150 [L d1 h1 c1]
      v105 = undefined;                                 // #20796:150:233 [L d1 h1 c1]
      v50 = "div";                                      // #20799:114:233 [L d1 h1 c1]
      v106 = "XdupP0";                                  // #20804:222:233 [L d1 h1 c1]
      elDiv_v107 = MC(v105, fn_v103, "div", v106);      // #20814:29:168 [L d1 h1 c1]
      cell[35] = elDiv_v107;                            // #20820:143:195 [L d1 h1 c1]
      if (elDiv_v107) {                                 // #20823:98:160 [L d1 h1 c1]
        try {
          TP(tryStack, 21092, 142, callDepths);                    // #20839:174:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
          fn_v109 = elDiv_v107.setAttribute;            // #20845:77:200 [L d1 h1 c1]
          v51 = typeof fn_v109;                         // #20850:133:193 [L d1 h1 c1]
          v110 = v92 === v51;                           // #20853:93:65 [L d1 h1 c1]
          if (v110) {                                   // #20857:120:160 [L d1 h1 c1]
            elDiv_v111 = elDiv_v107;                    // #20876:243:150 [L d1 h1 c1]
            v53 = "aria-hidden";                        // #20879:155:233 [L d1 h1 c1]
            v112 = "true";                              // #20894:163:233 [L d1 h1 c1]
            v54 = (elDiv_v111).setAttribute("aria-hidden", "true");  // #20902:232:138 #20928:53:150 [L d1 h1 c1] +#20931:113:53
          } else {
            v52 = v110;                                 // #20863:104:53 #20868:196:150 [-] +#20871:132:53 /* never executed in any replay */
          }
          style_v55 = cell[35].style;                   // #20936:94:236 #20939:61:200 [L d1 h1 c1]
          v56 = "cssText";                              // #20944:61:233 [L d1 h1 c1]
          v113 = KP(20948);                             // #20949:61:233 [L d1 h1 c1]
          style_v55.cssText = v113;                     // #21081:35:199 [L d1 h1 c1]
          arr_v114 = tryStack.pop();                         // #21085:18:124 [L d1 h1 c1]
          fn_v116 = clos;                               // #21088:26:53 #21114:208:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v116 = its home register (H139 CLOS bind)
          arr_v59 = [];                                 // #21130:62:107 [L d1 h1 c1]
          cell[41] = arr_v59;                           // #21132:108:195 [L d1 h1 c1]
          v185 = 0;                                     // #21135:19:72 [L d1 h1 c1]
          v117 = "length";                              // #21138:59:233 [L d1 h1 c1]
          v118 = "bbvOd7";                              // #21143:195:233 [L d1 h1 c1]
          v119 = "XELFK1";                              // #21153:43:233 [L d1 h1 c1]
          v120 = "WolAB6";                              // #21163:243:233 [L d1 h1 c1]
          r196 = "wqfMs4";                              // #21173:155:233 [L d1 h1 c1]
          v121 = "cssText";                             // #21183:163:233 [L d1 h1 c1]
          v122 = "appendChild";                         // #21188:139:233 [L d1 h1 c1]
          v123 = "appendChild";                         // #21193:211:233 [L d1 h1 c1]
          v124 = "appendChild";                         // #21198:251:233 [L d1 h1 c1]
          v125 = KP(21202);                             // #21203:131:233 [L d1 h1 c1] +#21280:7:53
          while ((v127 = arr_v104[v117], v61 = v185 < v127, v185 < v127)) {  // #21298:117:7 | #21302:98:186 [L d4 h4 c4]
            arr_v128 = arr_v104[v185];                  // #21320:204:7 [L d3 h3 c3]
            fn_v129 = cell[57];                         // #21324:7:236 [L d3 h3 c3]
            v130 = undefined;                           // #21327:95:233 [L d3 h3 c3]
            v62 = "div";                                // #21330:87:233 [L d3 h3 c3]
            v131 = cell[59](v118, r195);                // #21335:148:242 [L d3 h3 c3]  VM call: pushes a frame, the callee body returns into r202; then v131 = r202 (H142 CALL bind)
            elDiv_v132 = MC(v130, fn_v129, v62, v131);    // #21340:123:168 [L d3 h3 c3]
            if (elDiv_v132) {                           // #21346:158:160 [L d3 h3 c3]
              try {
                TP(tryStack, 21384, 31, callDepths);               // #21362:147:194 [L d3 h3 c3]  try: pushes the catch arm of the enclosing try (TP)
                style_v63 = elDiv_v132.style;           // #21368:222:200 [L d3 h3 c3]
                style_v63[v121] = v125;                 // #21373:128:199 [L d3 h3 c3]
                arr_v64 = tryStack.pop();                    // #21377:59:124 [L d3 h3 c3]
                v139 = undefined;                       // #21380:223:53 #21418:228:233 [L d3 h3 c3]
                v140 = 0;                               // #21421:171:72 [L d3 h3 c3]
                v67 = arr_v128[0];                      // #21424:153:7 [L d3 h3 c3]
                v141 = "BHob6";                         // #21428:41:233 [L d3 h3 c3]
                elSpan_v142 = MC(v139, fn_v116, v67, v119, v141, v185);    // #21437:196:16 [L d3 h3 c3]
                if (elSpan_v142) {                      // #21446:3:160 [L d3 h3 c3]
                  v144 = undefined;                     // #21462:124:233 [L d3 h3 c3]
                  v145 = 1;                             // #21465:227:72 [L d3 h3 c3]
                  v68 = arr_v128[v145];                 // #21468:241:7 [L d3 h3 c3]
                  v146 = "BDdT0";                       // #21472:33:233 [L d3 h3 c3]
                  elSpan_v147 = MC(v144, fn_v116, v68, v120, v146, v185);    // #21481:220:16 [L d3 h3 c3]
                  if (elSpan_v147) {                    // #21490:187:160 [L d3 h3 c3]
                    try {
                      TP(tryStack, 21601, 60, callDepths);         // #21506:13:194 [L d3 h3 c3]  try: pushes the catch arm of the enclosing try (TP)
                      elDiv_v69 = elDiv_v132;           // #21512:6:150 [L d3 h3 c3]
                      fn_v149 = elDiv_v69[v122];        // #21515:72:7 [L d3 h3 c3]
                      elSpan_v150 = fn_v149.call(elDiv_v69, elSpan_v142);    // #21519:39:16 [L d3 h3 c3]
                      elDiv_v70 = elDiv_v132;           // #21525:56:150 [L d3 h3 c3]
                      fn_v151 = elDiv_v70[v123];        // #21528:50:7 [L d3 h3 c3]
                      elSpan_v152 = fn_v151.call(elDiv_v70, elSpan_v147);    // #21532:233:16 [L d3 h3 c3]
                      elDiv_v71 = cell[35];             // #21538:240:236 [L d3 h3 c3]
                      elDiv_v153 = cell[35];            // #21541:29:150 [L d3 h3 c3]
                      fn_v72 = elDiv_v153[v124];        // #21544:195:7 [L d3 h3 c3]
                      elDiv_v154 = fn_v72.call(elDiv_v153, elDiv_v132);    // #21548:118:16 [L d3 h3 c3]
                      arr_v73 = cell[41];               // #21554:137:236 [L d3 h3 c3]
                      arr_v155 = cell[41];              // #21557:146:150 [L d3 h3 c3]
                      fn_v156 = arr_v155[v94];          // #21560:164:7 [L d3 h3 c3]
                      arr_v74 = [];                     // #21564:194:107 [L d3 h3 c3]
                      v157 = 0; arr_v74[0] = elSpan_v142;    // #21566:155:26 [L d3 h3 c3]
                      v158 = 1; arr_v74[1] = elSpan_v147;    // #21571:80:26 [L d3 h3 c3]
                      v159 = fn_v156.call(arr_v155, arr_v74);    // #21576:33:138 [L d3 h3 c3]
                      arr_v75 = tryStack.pop();              // #21594:152:124 [L d3 h3 c3]
                      v60 = 1;                          // #21597:8:53 #21285:134:72 [L d3 h3 c3]
                      v126 = v185; v185 = v185 + 1;     // #21288:141:48 [L d3 h3 c3]
                    } catch (caught) {
                      v76 = caught;                       // #21602:57:150 [-] /* never executed in any replay */
                      v160 = cell[56];                  // #21605:0:236 [-] /* never executed in any replay */
                      v161 = undefined;                 // #21608:180:233 [-] /* never executed in any replay */
                      v77 = cell[59](r196, r195);       // #21611:189:242 [-]  VM call: pushes a frame, the callee body returns into r205; then v77 = r205 (H142 CALL bind) /* never executed in any replay */
                      v162 = MC(v161, v160, v77);       // #21616:98:114 [-] /* never executed in any replay */
                      v163 = undefined;                 // #21621:14:233 [-] /* never executed in any replay */
                      return v163;                      // #21624:230:245 [-] /* never executed in any replay */
                    }
                  } else {
                    v148 = undefined;                   // #21496:95:53 #21501:121:233 [-] /* never executed in any replay */
                    return v148;                        // #21504:101:245 [-] /* never executed in any replay */
                  }
                } else {
                  v143 = undefined;                     // #21452:135:53 #21457:225:233 [-] /* never executed in any replay */
                  return v143;                          // #21460:45:245 [-] /* never executed in any replay */
                }
              } catch (caught) {
                v65 = caught;                             // #21385:80:150 [-] /* never executed in any replay */
                v134 = cell[56];                        // #21388:123:236 [-] /* never executed in any replay */
                v135 = undefined;                       // #21391:3:233 [-] /* never executed in any replay */
                v136 = KP(m21393k3);                    // #21394:107:233 [-] /* never executed in any replay */
                v66 = cell[59](v136, r195);             // #21403:88:242 [-]  VM call: pushes a frame, the callee body returns into r205; then v66 = r205 (H142 CALL bind) /* never executed in any replay */
                v137 = MC(v135, v134, v66);             // #21408:81:114 [-] /* never executed in any replay */
                v138 = undefined;                       // #21413:1:233 [-] /* never executed in any replay */
                return v138;                            // #21416:205:245 [-] /* never executed in any replay */
              }
            } else {
              v133 = undefined;                         // #21352:118:53 #21357:180:233 [-] /* never executed in any replay */
              return v133;                              // #21360:116:245 [-] /* never executed in any replay */
            }
          }
          try {
            TP(tryStack, 21685, 9, callDepths);                    // #21636:181:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
            shadowRoot_v164 = shadowRoot_v97;           // #21642:14:150 [L d1 h1 c1]
            fn_v165 = shadowRoot_v97.appendChild;       // #21645:45:200 [L d1 h1 c1]
            elDiv_v78 = cell[35];                       // #21650:36:236 [L d1 h1 c1]
            elDiv_v166 = fn_v165.call(shadowRoot_v164, elDiv_v78);      // #21653:165:138 [L d1 h1 c1]
            arr_v79 = tryStack.pop();                        // #21678:12:124 [L d1 h1 c1]
            fn_v168 = clos;                             // #21681:172:53 #21708:116:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v168 = its home register (H139 CLOS bind)
            cell[62] = fn_v168;                         // #21737:74:195 [L d1 h1 c1]
            win_v169 = win_v91[v93];                    // #21740:124:7 [L d1 h1 c1]
            fn_v82 = win_v169.requestAnimationFrame;      // #21744:99:200 [L d1 h1 c1]
            if (fn_v82) {                               // #21749:230:160 [L d1 h1 c1]
              fn_v170 = fn_v82;                         // #21780:202:150 [L d1 h1 c1] +#21783:242:53
            } else {
              v83 = clos;                               // #21755:158:53 #21760:79:216 [-]  closure creation (operands from the byte stream); then v83 = its home register (H139 CLOS bind) /* never executed in any replay */
              fn_v170 = v83;                            // #21772:192:150 [-] +#21775:144:53 /* never executed in any replay */
            }
            cell[50] = fn_v170;                         // #21788:111:195 [L d1 h1 c1]
            v186 = cell[58];                            // #21791:222:236 [L d1 h1 c1]
            v171 = undefined;                           // #21794:154:233 [L d1 h1 c1]
            fn_v172 = clos;                             // #21797:89:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v172 = its home register (H139 CLOS bind)
            fn_v84 = fn_v172;                           // #21807:34:150 [L d1 h1 c1]
            v173 = 1000;                                // #21810:206:233 [L d1 h1 c1]
            v174 = MC(v171, v186, fn_v84, 1000);        // #21815:77:168 [L d1 h1 c1]
            cell[36] = v174;                            // #21821:255:195 [L d1 h1 c1]
            fn_v175 = cell[62];                         // #21824:46:236 [L d1 h1 c1]
            v176 = 64;                                  // #21827:77:72 [L d1 h1 c1]
            v85 = cell[58](fn_v175, v176);              // #21830:50:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then v85 = r205 (H142 CALL bind)
            cell[37] = v85;                             // #21835:144:195 [L d1 h1 c1]
            try {
              TP(tryStack, 21871, 240, callDepths);                // #21838:185:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
              v177 = undefined;                         // #21844:201:233 [L d1 h1 c1]
              fn_v86 = clos;                            // #21847:140:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v86 = its home register (H139 CLOS bind)
              v178 = MC(v177, fn_v170, fn_v86);         // #21859:181:114 [L d1 h1 c1]
              arr_v87 = tryStack.pop();                      // #21864:220:124 [L d1 h1 c1]
              break L21919_240;                         // #21867:60:53 [L d1 h1 c1]
            } catch (caught) {
              v88 = caught;                               // #21872:29:150 [-] /* never executed in any replay */
              v89 = KP(m21874k29);                      // #21875:157:233 [-] /* never executed in any replay */
              r204 = cell[56](v89);                     // #21884:214:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
              outside("L21887_214");  // L21887_214 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
            }
          } catch (caught) {
            v80 = caught;                                 // #21686:18:150 [-] /* never executed in any replay */
            v81 = KP(m21688k18);                        // #21689:254:233 [-] /* never executed in any replay */
            r204 = cell[56](v81);                       // #21699:243:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
            v167 = undefined;                           // #21703:155:233 [-] /* never executed in any replay */
            return v167;                                // #21706:127:245 [-] /* never executed in any replay */
          }
        } catch (caught) {
          v57 = caught;                                   // #21093:195:150 [-] /* never executed in any replay */
          v58 = KP(m21095k195);                         // #21096:43:233 [-] /* never executed in any replay */
          r204 = cell[56](v58);                         // #21105:172:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
          v115 = undefined;                             // #21109:176:233 [-] /* never executed in any replay */
          return v115;                                  // #21112:128:245 [-] /* never executed in any replay */
        }
      } else {
        v108 = undefined;                               // #20829:42:53 #20834:65:233 [-] /* never executed in any replay */
        return v108;                                    // #20837:13:245 [-] /* never executed in any replay */
      }
    }
  }
  v181 = undefined;                                     // #21920:228:233 [L d1 h1 c1]
  return v181;                                          // #21923:228:245 [L d1 h1 c1]
}