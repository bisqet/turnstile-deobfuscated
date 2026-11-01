function fn_navigator_177297(win_v144 /* r70 */, v145 /* r209 */, v146 /* r220 */, v147 /* r221 */) { // entry L177287_9; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 173 register webs used only inside this fn (no live-in, cross-call or table-made def; 30 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 5 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r196 */, v2 /* r198 */, v3 /* r204 */, v4 /* r205 */, fn_v5 /* r205 */, win_v6 /* r199 */, v7 /* r205 */, v8 /* r198 */, v9 /* r204 */, win_v10 /* r205 */;
  let win_v11 /* r204 */, fn_v12 /* r198 */, v13 /* r205 */, v14 /* r196 */, win_v15 /* r205 */, win_v16 /* r204 */, fn_v17 /* r205 */, v18 /* r204 */, v19 /* r196 */, win_v20 /* r192 */;
  let v21 /* r195 */, mql_v22 /* r193 */, v23 /* r195 */, v24 /* r196 */, v25 /* r195 */, mql_v26 /* r193 */, v27 /* r195 */, v28 /* r205 */, win_v29 /* r196 */, v30 /* r195 */;
  let mql_v31 /* r196 */, v32 /* r198 */, v33 /* r198 */, mql_v34 /* r195 */, v35 /* r198 */, v36 /* r196 */, v37 /* r196 */, mql_v38 /* r195 */, v39 /* r196 */, v40 /* r198 */;
  let v41 /* r204 */, v42 /* r205 */, win_v43 /* r195 */, v44 /* r198 */, mql_v45 /* r196 */, v46 /* r198 */, v47 /* r205 */, win_v48 /* r195 */, v49 /* r198 */, mql_v50 /* r196 */;
  let v51 /* r198 */, v52 /* r205 */, win_v53 /* r195 */, v54 /* r198 */, mql_v55 /* r196 */, v56 /* r198 */, v57 /* r205 */, win_v58 /* r198 */, win_v59 /* r195 */, v60 /* r198 */;
  let mql_v61 /* r196 */, v62 /* r198 */, win_v63 /* r205 */, perf_v64 /* r204 */, fn_v65 /* r205 */, win_v66 /* r204 */, perf_v67 /* r198 */, fn_v68 /* r204 */, win_v69 /* r204 */, perf_v70 /* r198 */;
  let v71 /* r204 */, arr_v72 /* r205 */, v73 /* r198 */, v74 /* r196 */, v75 /* r195 */, v76 /* r204 */, v77 /* r204 */, v78 /* r198 */, v79 /* r195 */, performanceNavigationTiming_v80 /* r196 */;
  let v81 /* r205 */, v82 /* r204 */, v83 /* r205 */, v84 /* r196 */, v85 /* r196 */, v86 /* r198 */, v87 /* r205 */, v88 /* r198 */, v89 /* r196 */, v90 /* r198 */;
  let win_v91 /* r195 */, v92 /* r196 */, v93 /* r196 */, v94 /* r198 */, v95 /* r196 */, fn_v96 /* r205 */, arr_v97 /* r198 */, v98 /* r204 */, v99 /* r205 */, v100 /* r205 */;
  let v101 /* r205 */, v102 /* r205 */, v103 /* r204 */, arr_v104 /* r205 */, v105 /* r196 */, v106 /* r204 */, v107 /* r205 */, v108 /* r195 */, v109 /* r193 */, v110 /* r205 */;
  let v111 /* r198 */, navigator_v112 /* r204 */, permissions_v113 /* r205 */, v114 /* r205 */, v115 /* r199 */, v116 /* r204 */, v117 /* r205 */, v118 /* r204 */, v119 /* r198 */, arr_v120 /* r204 */;
  let arr_v121 /* r204 */, v122 /* r205 */, v123 /* r199 */, v124 /* r204 */, arr_v125 /* r204 */, v126 /* r198 */, v127 /* r204 */, fn_v128 /* r204 */, v129 /* r198 */, fn_v130 /* r205 */;
  let fn_v131 /* r199 */, arr_v132 /* r204 */, promise_v133 /* r205 */, v134 /* r205 */, fn_v135 /* r205 */, v136 /* r204 */, v137 /* r205 */, fn_v138 /* r205 */, promise_v139 /* r204 */, fn_v140 /* r199 */;
  let fn_v141 /* r205 */, fn_v142 /* r205 */, v143 /* r205 */, navigator_v148 /* r202 */, win_v149 /* r192 */, win_v150 /* r193 */, win_v151 /* r193 */, win_v152 /* r193 */, win_v153 /* r195 */, v154 /* r195 */;
  let doc_v155 /* r196 */, v156 /* r195 */, v157 /* r196 */, arr_v158 /* r196 */, v159 /* r253 */, v160 /* r254 */, v161 /* r195 */, v162 /* r192 */, v163 /* r193 */, v164 /* r198 */;
  let v165 /* r193 */, v166 /* r195 */, v167 /* r196 */, fn_v168 /* r198 */, v169 /* r199 */, promise_v170 /* r202 */, fn_v171 /* r199 */, promise_v172 /* r204 */, v173 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v5 3, fn_v12 3, fn_v17 3, fn_v65 3, fn_v68 3, fn_v96 3, fn_v128 12, fn_v130 3
  //   Function: fn_v131 3, fn_v135 3, fn_v138 3, fn_v140 3, fn_v141 3, fn_v142 3, fn_v168 3, fn_v171 3
  //   Window: win_v6 3, win_v10 3, win_v11 3, win_v15 3, win_v16 3, win_v20 3, win_v29 3, win_v43 3
  //   Window: win_v48 3, win_v53 3, win_v58 3, win_v59 3, win_v63 3, win_v66 3, win_v69 3, win_v91 3
  //   Window: win_v144 3, win_v149 3, win_v150 3, win_v151 3, win_v152 3, win_v153 3
  //   MediaQueryList: mql_v22 3, mql_v26 3, mql_v31 3, mql_v34 3, mql_v38 3, mql_v45 3, mql_v50 3, mql_v55 3
  //   MediaQueryList: mql_v61 3
  //   Performance: perf_v64 3, perf_v67 3, perf_v70 3
  //   Array: arr_v72 3, arr_v97 3, arr_v104 3, arr_v120 3, arr_v121 3, arr_v125 15, arr_v132 3, arr_v158 3
  //   PerformanceNavigationTiming: performanceNavigationTiming_v80 3
  //   Navigator: navigator_v112 3, navigator_v148 3
  //   Permissions: permissions_v113 3
  //   Promise: promise_v133 3, promise_v139 3, promise_v170 3, promise_v172 3
  //   HTMLDocument: doc_v155 3
  // H133 rewrites: 7 single-use temps folded (7 of them expressions, H135), 8 dead register writes dropped, 16 constants propagated (16 uses), 6 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(20, 27, 28, 29, 31, 32);                           // #177288:245:53 #177298:48:211 [L d1 h1 c1]
  v1 = undefined;                                       // #177306:36:233 #177309:72:233 [L d1 h1 c1]
  v2 = undefined;                                       // #177312:220:233 [L d1 h1 c1]
  v3 = undefined;                                       // #177315:32:233 #177318:84:233 #177321:184:233 #177324:140:233 #177327:16:233 [L d1 h1 c1]
  v4 = undefined;                                       // #177330:132:233 #177333:40:233 [L d1 h1 c1]
  fn_v5 = clos;                                         // #177336:47:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v5 = its home register (H139 CLOS bind)
  cell[32] = fn_v5;                                     // #177352:217:195 [L d1 h1 c1]
  win_v6 = win_v144.globalThis;                         // #177355:140:200 [L d1 h1 c1]
  v7 = cell[1];                                         // #177360:199:236 [L d1 h1 c1]
  v8 = v7[v146];                                        // #177363:69:7 [L d1 h1 c1]
  v9 = v7[v8];                                          // #177367:75:7 [L d1 h1 c1]
  cell[20] = v9;                                        // #177371:133:195 [L d1 h1 c1]
  win_v10 = win_v144[v147];                             // #177374:139:7 [L d1 h1 c1]
  win_v11 = win_v10;                                    // #177378:12:150 [L d1 h1 c1]
  fn_v12 = win_v11[v145];                               // #177381:182:7 [L d1 h1 c1]
  v13 = KP(177384);                                     // #177385:18:233 [L d1 h1 c1]
  v14 = fn_v12.call(win_v11, v13);                      // #177458:91:138 [L d1 h1 c1]
  win_v15 = win_v144[v147];                             // #177478:137:7 [L d1 h1 c1]
  navigator_v148 = win_v15.navigator;                   // #177482:124:200 [L d1 h1 c1]
  win_v16 = win_v144[v147];                             // #177487:102:7 [L d1 h1 c1]
  fn_v17 = win_v16.matchMedia;                          // #177491:37:200 [L d1 h1 c1]
  if (fn_v17) {                                         // #177496:32:160 [L d1 h1 c1]
    v18 = cell[20];                                     // #177507:147:236 [L d1 h1 c1]
    v19 = "NsiN1";                                      // #177510:187:233 [L d1 h1 c1]
    win_v20 = win_v144[v147];                           // #177519:105:7 #177523:242:150 [L d1 h1 c1]
    v21 = "(prefers-color-scheme: dark)";               // #177526:94:233 [L d1 h1 c1]
    mql_v22 = win_v20.matchMedia("(prefers-color-scheme: dark)");  // #177558:119:138 [L d1 h1 c1]
    v23 = mql_v22.matches;                              // #177581:50:200 [L d1 h1 c1]
    v18.NsiN1 = v23;                                    // #177586:132:199 [L d1 h1 c1]
    v24 = "QAYqF9";                                     // #177590:40:233 [L d1 h1 c1]
    win_v149 = win_v144[v147];                          // #177600:98:7 #177604:71:150 [L d1 h1 c1]
    v25 = "(forced-colors: active)";                    // #177607:159:233 [L d1 h1 c1]
    mql_v26 = win_v149.matchMedia("(forced-colors: active)");  // #177634:244:138 [L d1 h1 c1]
    v27 = mql_v26.matches;                              // #177657:251:200 [L d1 h1 c1]
    v18.QAYqF9 = v27;                                   // #177662:105:199 [L d1 h1 c1]
    v28 = "naGC4";                                      // #177666:185:233 [L d1 h1 c1]
    win_v29 = win_v144[v147];                           // #177675:239:7 [L d1 h1 c1]
    win_v150 = win_v29;                                 // #177679:224:150 [L d1 h1 c1]
    v30 = "(prefers-contrast: more)";                   // #177682:20:233 [L d1 h1 c1]
    mql_v31 = win_v150.matchMedia("(prefers-contrast: more)");  // #177710:213:138 [L d1 h1 c1]
    v32 = mql_v31.matches;                              // #177733:152:200 [L d1 h1 c1]
    if (v32) {                                          // #177738:135:160 [L d1 h1 c1]
      v36 = v32;                                        // #177820:42:150 [-] +#177823:210:53 /* never executed in any replay */
    } else {
      win_v151 = win_v144[v147];                        // #177744:251:53 #177749:37:7 #177753:190:150 [L d1 h1 c1]
      v33 = "(prefers-contrast: less)";                 // #177756:250:233 [L d1 h1 c1]
      mql_v34 = win_v151.matchMedia("(prefers-contrast: less)");  // #177784:163:138 [L d1 h1 c1]
      v35 = mql_v34.matches;                            // #177807:174:200 [L d1 h1 c1]
      v36 = v35;                                        // #177812:99:150 [L d1 h1 c1] +#177815:103:53
    }
    if (v36) {                                          // #177828:23:160 [L d1 h1 c1]
      v40 = v36;                                        // #177912:229:150 [-] +#177915:97:53 /* never executed in any replay */
    } else {
      win_v152 = win_v144[v147];                        // #177834:75:53 #177839:58:7 #177843:191:150 [L d1 h1 c1]
      v37 = "(prefers-contrast: custom)";               // #177846:55:233 [L d1 h1 c1]
      mql_v38 = win_v152.matchMedia("(prefers-contrast: custom)");  // #177876:44:138 [L d1 h1 c1]
      v39 = mql_v38.matches;                            // #177899:83:200 [L d1 h1 c1]
      v40 = v39;                                        // #177904:180:150 [L d1 h1 c1] +#177907:180:53
    }
    v18.naGC4 = v40;                                    // #177920:7:199 [L d1 h1 c1]
    v41 = cell[20];                                     // #177924:22:236 [L d1 h1 c1]
    v42 = "JdlF7";                                      // #177927:242:233 [L d1 h1 c1]
    win_v43 = win_v144[v147];                           // #177936:132:7 #177940:97:150 [L d1 h1 c1]
    v44 = "(prefers-reduced-motion: reduce)";           // #177943:209:233 [L d1 h1 c1]
    mql_v45 = win_v43.matchMedia("(prefers-reduced-motion: reduce)");  // #177979:222:138 [L d1 h1 c1]
    v46 = mql_v45.matches;                              // #178002:189:200 [L d1 h1 c1]
    v41.JdlF7 = v46;                                    // #178007:163:199 [L d1 h1 c1]
    v47 = "sSCE0";                                      // #178011:139:233 [L d1 h1 c1]
    win_v48 = win_v144[v147];                           // #178020:249:7 #178024:66:150 [L d1 h1 c1]
    v49 = "(inverted-colors: inverted)";                // #178027:110:233 [L d1 h1 c1]
    mql_v50 = win_v48.matchMedia("(inverted-colors: inverted)");  // #178058:71:138 [L d1 h1 c1]
    v51 = mql_v50.matches;                              // #178081:194:200 [L d1 h1 c1]
    v41.sSCE0 = v51;                                    // #178086:212:199 [L d1 h1 c1]
    v52 = "DyGY3";                                      // #178090:56:233 [L d1 h1 c1]
    win_v53 = win_v144[v147];                           // #178099:50:7 #178103:215:150 [L d1 h1 c1]
    v54 = "(prefers-reduced-data: reduce)";             // #178106:239:233 [L d1 h1 c1]
    mql_v55 = win_v53.matchMedia("(prefers-reduced-data: reduce)");  // #178140:4:138 [L d1 h1 c1]
    v56 = mql_v55.matches;                              // #178163:203:200 [L d1 h1 c1]
    v41.DyGY3 = v56;                                    // #178168:249:199 [L d1 h1 c1]
    v57 = "fRwez3";                                     // #178172:9:233 [L d1 h1 c1]
    win_v58 = win_v144[v147];                           // #178182:255:7 [L d1 h1 c1]
    win_v59 = win_v58;                                  // #178186:176:150 [L d1 h1 c1]
    v60 = KP(178188);                                   // #178189:164:233 [L d1 h1 c1]
    mql_v61 = (win_v59).matchMedia(v60);                // #178231:37:138 [L d1 h1 c1]
    v62 = mql_v61.matches;                              // #178254:168:200 [L d1 h1 c1]
    v41.fRwez3 = v62;                                   // #178259:65:210 [L d1 h1 c1]
  } else {
    // #177502:112:53 [-] /* never executed in any replay */
  }
  win_v63 = win_v144[v147];                             // #178267:168:7 [L d1 h1 c1]
  perf_v64 = win_v63.performance;                       // #178271:223:200 [L d1 h1 c1]
  if (perf_v64) {                                       // #178276:114:160 [L d1 h1 c1]
    win_v66 = win_v144[v147];                           // #178295:133:7 [L d1 h1 c1]
    perf_v67 = win_v66.performance;                     // #178299:136:200 [L d1 h1 c1]
    fn_v68 = perf_v67.getEntriesByType;                 // #178304:63:200 [L d1 h1 c1]
    fn_v65 = fn_v68;                                    // #178309:240:150 [L d1 h1 c1] +#178312:0:53
  } else {
    fn_v65 = perf_v64;                                  // #178282:250:53 #178287:155:150 [-] +#178290:191:53 /* never executed in any replay */
  }
  if (fn_v65) {                                         // #178317:229:160 [L d1 h1 c1]
    win_v69 = win_v144[v147];                           // #178328:64:7 [L d1 h1 c1]
    perf_v70 = win_v69.performance;                     // #178332:23:200 [L d1 h1 c1]
    v71 = "navigation";                                 // #178337:47:233 [L d1 h1 c1]
    arr_v72 = perf_v70.getEntriesByType("navigation");  // #178351:68:138 [L d1 h1 c1]
    if (arr_v72) {                                      // #178380:131:160 [L d1 h1 c1]
      v74 = arr_v72.length;                             // #178399:252:200 [L d1 h1 c1]
      v75 = 0;                                          // #178404:99:72 [L d1 h1 c1]
      v76 = 0 < v74;                                    // #178407:32:98 [L d1 h1 c1]
      v73 = 0 < v74;                                    // #178411:141:150 [L d1 h1 c1] +#178414:105:53
    } else {
      v73 = arr_v72;                                    // #178386:7:53 #178391:187:150 [-] +#178394:95:53 /* never executed in any replay */
    }
    if (v73) {                                          // #178419:43:160 [L d1 h1 c1]
      v77 = cell[20];                                   // #178438:67:236 [L d1 h1 c1]
      v78 = "XPNOd0";                                   // #178441:171:233 [L d1 h1 c1]
      v79 = 0;                                          // #178451:22:72 [L d1 h1 c1]
      performanceNavigationTiming_v80 = arr_v72[0];     // #178454:24:7 [L d1 h1 c1]
      v81 = performanceNavigationTiming_v80.type;       // #178458:143:200 [L d1 h1 c1]
      v77.XPNOd0 = v81;                                 // #178463:173:199 [L d1 h1 c1] +#178467:38:150 +#178470:222:53
    } else {
      // #178425:15:53 #178430:80:150 #178433:224:53 [-] /* never executed in any replay */
    }
  } else {
    // #178323:97:53 [-] /* never executed in any replay */
  }
  v82 = cell[20];                                       // #178475:150:236 [L d1 h1 c1]
  v83 = "XPNOd0";                                       // #178478:114:233 [L d1 h1 c1]
  v84 = cell[20].XPNOd0;                                // #178488:1:200 [L d1 h1 c1]
  if (v84) {                                            // #178498:140:160 [L d1 h1 c1]
    v86 = v84;                                          // #178527:126:150 [L d1 h1 c1] +#178530:214:53
  } else {
    v85 = "xSsNY5";                                     // #178504:44:53 #178509:9:233 [-] /* never executed in any replay */
    v86 = "xSsNY5";                                     // #178519:18:150 [-] +#178522:26:53 /* never executed in any replay */
  }
  v82.XPNOd0 = v86;                                     // #178535:32:199 [L d1 h1 c1]
  v87 = "aBENc4";                                       // #178539:84:233 [L d1 h1 c1]
  win_v153 = win_v144[v147];                            // #178549:222:7 [L d1 h1 c1]
  v88 = win_v153[KP(178552)];                           // #178553:189:200 [L d1 h1 c1]
  v89 = v88.PUUDF8;                                     // #178558:224:200 [L d1 h1 c1]
  if (v89) {                                            // #178563:175:160 [L d1 h1 c1]
    win_v91 = win_v144[v147];                           // #178582:2:7 [L d1 h1 c1]
    v92 = win_v91[KP(178585)];                          // #178586:81:200 [L d1 h1 c1]
    v154 = v92.PUUDF8;                                  // #178591:36:200 [L d1 h1 c1]
    v93 = v154["pg.ref"];                               // #178596:107:200 [L d1 h1 c1]
    v90 = v93;                                          // #178606:108:150 [L d1 h1 c1] +#178609:140:53
  } else {
    v90 = v89;                                          // #178569:131:53 #178574:98:150 [-] +#178577:42:53 /* never executed in any replay */
  }
  if (v90) {                                            // #178614:168:160 [L d1 h1 c1]
    v95 = win_v144[v147];                               // #178647:133:7 [-] /* never executed in any replay */
    v156 = v95[KP(178650)];                             // #178651:136:200 [-] /* never executed in any replay */
    v157 = v156.PUUDF8;                                 // #178656:63:200 [-] /* never executed in any replay */
    v94 = v157["pg.ref"];                               // #178661:218:200 [-] +#178671:194:53 /* never executed in any replay */
  } else {
    doc_v155 = win_v144.document;                       // #178620:216:53 #178625:43:200 [L d1 h1 c1]
    v94 = doc_v155.referrer;                            // #178630:22:200 [L d1 h1 c1] +#178642:14:53
  }
  v82.aBENc4 = v94;                                     // #178676:104:199 [L d1 h1 c1]
  fn_v96 = navigator_v148.getGamepads;                  // #178680:159:200 [L d1 h1 c1]
  L179022_167: {
    if (fn_v96) {                                       // #178695:50:160 [L d1 h1 c1]
      try {
        TP(tryStack, 178873, 26, callDepths);                      // #178706:99:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        arr_v158 = navigator_v148.getGamepads();        // #178712:168:138 [L d1 h1 c1]
        arr_v97 = [];                                   // #178735:182:107 [L d1 h1 c1]
        v98 = 0;                                        // #178737:181:72 [L d1 h1 c1]
        v159 = 1;                                       // #178740:120:72 [L d1 h1 c1]
        v160 = "length";                                // #178743:76:233 [L d1 h1 c1]
        v161 = undefined;                               // #178748:208:233 [L d1 h1 c1] +#178751:96:53
        for (;;) {
          if (arr_v158) {                               // #178766:118:160 [L d9 h9 c9]
            v162 = arr_v158.length;                     // #178785:202:7 [L d9 h9 c9]
            v163 = v162 > v98;                          // #178789:213:212 [L d9 h9 c9]
            v100 = v163;                                // #178793:174:150 [L d9 h9 c9] +#178796:70:53
          } else {
            v100 = arr_v158;                            // #178772:238:53 #178777:227:150 [-] +#178780:231:53 /* never executed in any replay */
          }
          if (!(v100)) {                                // #178801:216:160 [L d9 h9 c9]
            v103 = cell[20];                            // #178807:72:53 #178854:8:236 [L d1 h1 c1]
            v103.ZzbI2 = arr_v97;                       // #178857:237:142 [L d1 h1 c1]
            arr_v104 = tryStack.pop();                       // #178866:52:124 [L d1 h1 c1]
            break L179022_167;                          // #178869:52:53 [L d1 h1 c1]
          }
          v101 = arr_v158[v98];                         // #178812:13:7 [L d8 h8 c8]
          if (v101 === v161) {                          // #178816:165:161 [L d8 h8 c8]
            v102 = null;                                // #178838:56:233 [-] +#178841:40:53 /* never executed in any replay */
          } else {
            v102 = arr_v158[v98];                       // #178824:33:53 #178829:158:7 [L d8 h8 c8] +#178833:118:53
          }
          arr_v97[v98] = v102;                          // #178846:19:210 [L d8 h8 c8]
          v99 = v98; v98 = v98 + 1;                     // #178756:107:48 [L d8 h8 c8]
        }
      } catch (caught) {
        v105 = caught;                                    // #178874:31:150 [-] /* never executed in any replay */
        v106 = cell[20];                                // #178877:206:236 [-] /* never executed in any replay */
        v107 = KP(m178879k206);                         // #178880:202:233 [-] /* never executed in any replay */
        if (v105) {                                     // #178889:113:160 [-] /* never executed in any replay */
          v108 = KP(m178907k58);                        // #178908:134:233 [-] /* never executed in any replay */
          v109 = v105[KP(m178924k134)];                 // #178925:197:200 [-] /* never executed in any replay */
          outside("L178929_197");  // L178929_197 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
        }
        outside("L178894_113");  // L178894_113 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
      }
    } else {
      v110 = "ZzbI2";                                   // #178701:186:53 #178996:215:233 [-] /* never executed in any replay */
      v111 = "MuhSe5";                                  // #179005:239:233 [-] /* never executed in any replay */
      v82.ZzbI2 = "MuhSe5";                             // #179015:44:210 [-] /* never executed in any replay */
    }
  }
  navigator_v112 = win_v144.navigator;                  // #179023:162:200 [L d1 h1 c1]
  permissions_v113 = navigator_v112.permissions;        // #179028:113:200 [L d1 h1 c1]
  L179407_203: {
    if (permissions_v113) {                             // #179033:60:160 [L d1 h1 c1]
      v118 = KP(179087);                                // #179088:171:233 [L d1 h1 c1]
      v165 = win_v6.decodeURIComponent(v118);           // #179222:208:138 [L d1 h1 c1]
      v119 = "A";                                       // #179253:68:233 [L d1 h1 c1]
      arr_v120 = v165.split(("A"));                     // #179258:69:138 [L d1 h1 c1]
      cell[28] = arr_v120;                              // #179276:23:195 [L d1 h1 c1]
      arr_v121 = [];                                    // #179279:41:107 [L d1 h1 c1]
      cell[29] = arr_v121;                              // #179281:107:195 [L d1 h1 c1]
      v122 = 0;                                         // #179284:214:72 [L d1 h1 c1]
      v166 = 1;                                         // #179287:85:72 [L d1 h1 c1]
      v167 = "length";                                  // #179290:245:233 [L d1 h1 c1]
      v123 = undefined;                                 // #179295:21:233 [L d1 h1 c1] +#179298:209:53
      while ((arr_v125 = cell[28], v126 = arr_v125[v167], v127 = v122 < v126, v122 < v126)) {  // #179313:82:236 | #179316:100:7 | #179320:85:186 [L d5 h5 c5]
        fn_v128 = clos;                                 // #179338:144:216 [L d4 h4 c4]  closure creation (operands from the byte stream); then fn_v128 = its home register (H139 CLOS bind)
        v129 = MC(v123, fn_v128, v122);                 // #179355:169:114 [L d4 h4 c4]
        v124 = v122; v122 = v122 + v166;                // #179360:21:53 #179303:200:48 [L d4 h4 c4]
      }
      fn_v130 = win_v144.Promise;                       // #179365:136:200 [L d1 h1 c1]
      fn_v131 = fn_v130;                                // #179370:85:150 [L d1 h1 c1]
      fn_v168 = fn_v130.all;                            // #179373:24:200 [L d1 h1 c1]
      arr_v132 = cell[29];                              // #179380:35:236 [L d1 h1 c1]
      promise_v133 = fn_v168.call(fn_v131, arr_v132);      // #179383:104:138 [L d1 h1 c1]
      cell[27] = promise_v133;                          // #179400:110:195 [L d1 h1 c1]
      break L179407_203;                                // #179403:6:53 [L d1 h1 c1]
    } else {
      v114 = win_v144.Promise;                          // #179039:28:53 #179044:82:200 [-] /* never executed in any replay */
      v115 = v114;                                      // #179049:119:150 [-] /* never executed in any replay */
      v164 = v114.resolve;                              // #179052:50:200 [-] /* never executed in any replay */
      v116 = [];                                        // #179057:152:107 [-] /* never executed in any replay */
      v117 = v164.call(v115, v116);                     // #179059:73:138 [-] /* never executed in any replay */
      cell[27] = v117;                                  // #179080:11:195 [-] +#179083:111:53 /* never executed in any replay */
    }
  }
  v134 = false;                                         // #179408:19:233 [L d1 h1 c1]
  cell[31] = false;                                     // #179411:45:195 [L d1 h1 c1]
  fn_v135 = clos;                                       // #179414:96:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v135 = its home register (H139 CLOS bind)
  cell[32] = fn_v135;                                   // #179430:134:195 [L d1 h1 c1]
  v136 = cell[20];                                      // #179433:89:236 [L d1 h1 c1]
  v137 = "DlXb5";                                       // #179436:233:233 [L d1 h1 c1]
  v169 = false;                                         // #179445:57:233 [L d1 h1 c1]
  v136.DlXb5 = false;                                   // #179448:47:199 [L d1 h1 c1]
  fn_v138 = navigator_v148.getBattery;                  // #179452:10:200 [L d1 h1 c1]
  if (fn_v138) {                                        // #179466:177:160 [L d1 h1 c1]
    promise_v139 = navigator_v148.getBattery();         // #179477:21:138 [L d1 h1 c1]
    fn_v140 = promise_v139.then;                        // #179499:216:200 [L d1 h1 c1]
    fn_v141 = clos;                                     // #179504:31:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v141 = its home register (H139 CLOS bind)
    promise_v170 = fn_v140.call(promise_v139, fn_v141);  // #179514:116:138 [L d1 h1 c1]
    fn_v171 = promise_v170.catch;                       // #179532:123:200 [L d1 h1 c1]
    fn_v142 = clos;                                     // #179537:246:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v142 = its home register (H139 CLOS bind)
    promise_v172 = fn_v171.call(promise_v170, fn_v142);  // #179549:175:138 [L d1 h1 c1] +#179568:131:53
  } else {
    v143 = null;                                        // #179472:253:53 #179573:125:233 [-] /* never executed in any replay */
    r204 = cell[32](v143);                              // #179576:54:22 [-] +#179580:174:53  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
  }
  v173 = undefined;                                     // #179585:177:233 [L d1 h1 c1]
  return v173;                                          // #179588:189:245 [L d1 h1 c1]
}