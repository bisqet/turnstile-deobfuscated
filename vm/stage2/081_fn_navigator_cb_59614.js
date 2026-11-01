function fn_navigator_cb_59614(win_v97 /* r70 */, v98 /* r227 */) { // entry L59614_172; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 118 register webs used only inside this fn (no live-in, cross-call or table-made def; 22 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r202 */, v5 /* r199 */, v6 /* r199 */, v7 /* r202 */, v8 /* r202 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r199 */, v12 /* r199 */, v13 /* r202 */, v14 /* r202 */, v15 /* r202 */, v16 /* r202 */, v17 /* r199 */, v18 /* r199 */, v19 /* r202 */, v20 /* r202 */;
  let v21 /* r202 */, v22 /* r202 */, v23 /* r199 */, v24 /* r199 */, v25 /* r202 */, v26 /* r202 */, v27 /* r202 */, v28 /* r202 */, v29 /* r199 */, v30 /* r202 */;
  let v31 /* r199 */, v32 /* r205 */, v33 /* r195 */, v34 /* r196 */, v35 /* r205 */, v36 /* r198 */, v37 /* r205 */, v38 /* r202 */, v39 /* r196 */, v40 /* r202 */;
  let v41 /* r198 */, v42 /* r202 */, v43 /* r199 */, v44 /* r198 */, v45 /* r199 */, v46 /* r240 */, v47 /* r199 */, v48 /* r202 */, v49 /* r205 */, v50 /* r202 */;
  let v51 /* r205 */, v52 /* r195 */, v53 /* r205 */, v54 /* r196 */, v55 /* r199 */, v56 /* r205 */, v57 /* r205 */, v58 /* r202 */, v59 /* r205 */, v60 /* r196 */;
  let v61 /* r205 */, v62 /* r205 */, v63 /* r199 */, v64 /* r202 */, v65 /* r199 */, v66 /* r202 */, v67 /* r199 */, v68 /* r202 */, v69 /* r199 */, v70 /* r205 */;
  let v71 /* r202 */, v72 /* r202 */, v73 /* r202 */, v74 /* r202 */, v75 /* r202 */, v76 /* r202 */, v77 /* r202 */, v78 /* r199 */, v79 /* r202 */, v80 /* r199 */;
  let v81 /* r202 */, v82 /* r205 */, v83 /* r199 */, v84 /* r205 */, v85 /* r202 */, v86 /* r196 */, v87 /* r195 */, v88 /* r196 */, v89 /* r199 */, v90 /* r205 */;
  let v91 /* r202 */, v92 /* r196 */, v93 /* r195 */, v94 /* r196 */, v95 /* r205 */, v96 /* r196 */, v99 /* r204 */, v100 /* r254 */, v101 /* r202 */, v102 /* r192 */;
  let v103 /* r193 */, v104 /* r195 */, v105 /* r196 */, v106 /* r199 */, v107 /* r198 */, v108 /* r254 */, v109 /* r192 */, v110 /* r193 */, v111 /* r240 */, v112 /* r253 */;
  let v113 /* r198 */, v114 /* r199 */, v115 /* r202 */, v116 /* r195 */, v117 /* r196 */, v118 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v97 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 6 dead register writes dropped, 17 constants propagated (17 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v99 = v98;                                            // #59615:233:150 [L d1 h1 c1]
  v100 = undefined;                                     // #59618:85:53 #59628:92:233 [L d1 h1 c1]
  v101 = undefined;                                     // #59631:160:233 #59634:212:233 #59637:56:233 [L d1 h1 c1]
  v102 = undefined;                                     // #59640:12:233 [L d1 h1 c1]
  v103 = undefined;                                     // #59643:144:233 [L d1 h1 c1]
  v104 = undefined;                                     // #59646:4:233 [L d1 h1 c1]
  v105 = undefined;                                     // #59649:168:233 #59652:188:233 [L d1 h1 c1]
  v1 = undefined;                                       // #59655:128:233 [L d1 h1 c1]
  NC(107);                                              // #59658:246:211 [L d1 h1 c1]
  v106 = undefined;                                     // #59661:82:233 [L d1 h1 c1]
  v107 = undefined;                                     // #59664:62:233 [L d1 h1 c1]
  if (v99) {                                            // #59667:21:160 [L d1 h1 c1]
    v3 = [];                                            // #59695:240:107 [-] /* never executed in any replay */
    v4 = v99.info;                                      // #59697:7:200 [-] /* never executed in any replay */
    if (v4) {                                           // #59702:250:160 [-] /* never executed in any replay */
      v6 = v99.info;                                    // #59722:207:200 [-] /* never executed in any replay */
      v7 = v6.vendor;                                   // #59727:42:200 [-] /* never executed in any replay */
      if (v7) {                                         // #59737:81:160 [-] /* never executed in any replay */
        v5 = v7;                                        // #59760:26:150 [-] +#59763:2:53 /* never executed in any replay */
      } else {
        v8 = "";                                        // #59743:29:53 #59748:24:233 [-] /* never executed in any replay */
        v5 = "";                                        // #59752:165:150 [-] +#59755:33:53 /* never executed in any replay */
      }
    } else {
      v5 = "";                                          // #59708:98:53 #59713:166:233 [-] +#59717:94:53 /* never executed in any replay */
    }
    v9 = 0; v3[0] = v5;                                 // #59768:203:26 [-] /* never executed in any replay */
    v10 = v99.info;                                     // #59773:54:200 [-] /* never executed in any replay */
    if (v10) {                                          // #59778:45:160 [-] /* never executed in any replay */
      v12 = v99.info;                                   // #59798:254:200 [-] /* never executed in any replay */
      v13 = v12.architecture;                           // #59803:93:200 [-] /* never executed in any replay */
      if (v13) {                                        // #59819:120:160 [-] /* never executed in any replay */
        v11 = v13;                                      // #59842:5:150 [-] +#59845:1:53 /* never executed in any replay */
      } else {
        v14 = "";                                       // #59825:104:53 #59830:236:233 [-] /* never executed in any replay */
        v11 = "";                                       // #59834:41:150 [-] +#59837:149:53 /* never executed in any replay */
      }
    } else {
      v11 = "";                                         // #59784:137:53 #59789:173:233 [-] +#59793:9:53 /* never executed in any replay */
    }
    v15 = 1; v3[1] = v11;                               // #59850:14:26 [-] /* never executed in any replay */
    v16 = v99.info;                                     // #59855:45:200 [-] /* never executed in any replay */
    if (v16) {                                          // #59860:8:160 [-] /* never executed in any replay */
      v18 = v99.info;                                   // #59880:124:200 [-] /* never executed in any replay */
      v19 = v18.device;                                 // #59885:99:200 [-] /* never executed in any replay */
      if (v19) {                                        // #59895:230:160 [-] /* never executed in any replay */
        v17 = v19;                                      // #59918:45:150 [-] +#59921:137:53 /* never executed in any replay */
      } else {
        v20 = "";                                       // #59901:158:53 #59906:116:233 [-] /* never executed in any replay */
        v17 = "";                                       // #59910:145:150 [-] +#59913:93:53 /* never executed in any replay */
      }
    } else {
      v17 = "";                                         // #59866:184:53 #59871:37:233 [-] +#59875:161:53 /* never executed in any replay */
    }
    v21 = 2; v3[2] = v17;                               // #59926:6:26 [-] /* never executed in any replay */
    v22 = v99.info;                                     // #59931:69:200 [-] /* never executed in any replay */
    if (v22) {                                          // #59936:192:160 [-] /* never executed in any replay */
      v24 = v99.info;                                   // #59956:165:200 [-] /* never executed in any replay */
      v25 = v24.description;                            // #59961:40:200 [-] /* never executed in any replay */
      if (v25) {                                        // #59976:215:160 [-] /* never executed in any replay */
        v23 = v25;                                      // #59999:197:150 [-] +#60002:193:53 /* never executed in any replay */
      } else {
        v26 = "";                                       // #59982:11:53 #59987:73:233 [-] /* never executed in any replay */
        v23 = "";                                       // #59991:82:150 [-] +#59994:90:53 /* never executed in any replay */
      }
    } else {
      v23 = "";                                         // #59942:144:53 #59947:227:233 [-] +#59951:231:53 /* never executed in any replay */
    }
    v27 = 3; v3[3] = v23;                               // #60007:124:26 [-] /* never executed in any replay */
    v28 = v99.isFallbackAdapter;                        // #60012:99:200 [-] /* never executed in any replay */
    if (v28) {                                          // #60033:230:160 [-] /* never executed in any replay */
      v29 = 1;                                          // #60052:169:72 [-] +#60055:21:53 /* never executed in any replay */
    } else {
      v29 = 0;                                          // #60039:158:53 #60044:73:72 [-] +#60047:53:53 /* never executed in any replay */
    }
    v30 = 4; v3[4] = v29;                               // #60060:118:26 [-] /* never executed in any replay */
    v108 = v3;                                          // #60065:11:150 [-] /* never executed in any replay */
    v31 = v99.limits;                                   // #60068:118:200 [-] /* never executed in any replay */
    v32 = cell[24];                                     // #60078:137:236 [-] /* never executed in any replay */
    if (v32) {                                          // #60081:244:160 [-] /* never executed in any replay */
      v38 = v32;                                        // #61323:42:150 [-] +#61326:210:53 /* never executed in any replay */
    } else {
      v33 = clos;                                       // #60087:244:53 #60092:63:216 [-]  closure creation (operands from the byte stream); then v33 = its home register (H139 CLOS bind) /* never executed in any replay */
      v34 = undefined;                                  // #60106:183:233 [-] /* never executed in any replay */
      v35 = KP(60108);                                  // #60109:79:233 [-] /* never executed in any replay */
      v36 = cell[19][KP(m61289k79)](v35);               // #61290:188:66 [-] /* never executed in any replay */
      v37 = MC(undefined, v33, v36);                    // #61307:37:114 [-] /* never executed in any replay */
      cell[24] = v37;                                   // #61312:119:195 [-] /* never executed in any replay */
      v38 = v37;                                        // #61315:72:150 [-] +#61318:248:53 /* never executed in any replay */
    }
    v39 = v38;                                          // #61331:109:150 [-] /* never executed in any replay */
    v40 = "E";                                          // #61334:173:233 [-] /* never executed in any replay */
    v41 = v39.split("E");                               // #61339:74:138 [-] /* never executed in any replay */
    v42 = cell[76](v31, v41);                           // #61357:123:242 [-]  VM call: pushes a frame, the callee body returns into r202; then v42 = r202 (H142 CALL bind) /* never executed in any replay */
    v43 = 0;                                            // #61362:166:72 [-] /* never executed in any replay */
    v44 = v42[0];                                       // #61365:104:7 [-] /* never executed in any replay */
    v45 = 1;                                            // #61369:31:72 [-] /* never executed in any replay */
    v109 = v42[1];                                      // #61372:61:7 [-] /* never executed in any replay */
    v46 = cell[73];                                     // #61376:244:236 [-] /* never executed in any replay */
    v47 = undefined;                                    // #61379:216:233 [-] /* never executed in any replay */
    v48 = v99.features;                                 // #61382:79:200 [-] /* never executed in any replay */
    v49 = MC(undefined, v46, v48);                      // #61394:44:114 [-] /* never executed in any replay */
    if (v49) {                                          // #61399:203:160 [-] /* never executed in any replay */
      v110 = v49;                                       // #61420:127:150 [-] +#61423:19:53 /* never executed in any replay */
    } else {
      v110 = [];                                        // #61405:47:53 #61410:185:107 #61412:2:150 [-] +#61415:74:53 /* never executed in any replay */
    }
    // #61428:152:233 [-] /* never executed in any replay */
    try {
      TP(tryStack, 61492, 44, callDepths);                         // #61431:161:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
      v50 = win_v97.navigator;                          // #61437:52:200 [-] /* never executed in any replay */
      v51 = v50.gpu;                                    // #61442:59:200 [-] /* never executed in any replay */
      v52 = (v51)[KP(m61448k59)]();                     // #61449:32:138 [-] /* never executed in any replay */
      v53 = tryStack.pop();                                  // #61485:91:124 [-] /* never executed in any replay */
      v54 = [];                                         // #61488:127:53 #61501:241:107 [-] /* never executed in any replay */
      try {
        TP(tryStack, 61592, 189, callDepths);                      // #61503:214:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
        v111 = cell[73];                                // #61509:105:236 [-] /* never executed in any replay */
        v55 = undefined;                                // #61512:185:233 [-] /* never executed in any replay */
        v56 = win_v97.navigator;                        // #61515:236:200 [-] /* never executed in any replay */
        v112 = v56.gpu;                                 // #61520:19:200 [-] /* never executed in any replay */
        v57 = (v56.gpu).wgslLanguageFeatures;           // #61527:94:200 [-] /* never executed in any replay */
        v58 = MC(undefined, v111, v57);                 // #61551:191:114 [-] /* never executed in any replay */
        if (v58) {                                      // #61556:210:160 [-] /* never executed in any replay */
          v60 = v58;                                    // #61577:107:150 [-] +#61580:79:53 /* never executed in any replay */
        } else {
          v59 = [];                                     // #61562:218:53 #61567:159:107 [-] /* never executed in any replay */
          v60 = v59;                                    // #61569:208:150 [-] +#61572:96:53 /* never executed in any replay */
        }
        v61 = tryStack.pop();                                // #61585:59:124 [-] /* never executed in any replay */
        v62 = [];                                       // #61588:223:53 #61601:67:107 [-] /* never executed in any replay */
        v63 = null;                                     // #61603:171:233 [-] /* never executed in any replay */
        v64 = 0; v62[0] = null;                         // #61606:32:26 [-] /* never executed in any replay */
        v65 = null;                                     // #61611:84:233 [-] /* never executed in any replay */
        v66 = 1; v62[1] = null;                         // #61614:101:26 [-] /* never executed in any replay */
        v67 = null;                                     // #61619:197:233 [-] /* never executed in any replay */
        v68 = 2; v62[2] = null;                         // #61622:82:26 [-] /* never executed in any replay */
        v69 = v62;                                      // #61627:119:150 [-] /* never executed in any replay */
        cell[107] = v69;                                // #61630:1:195 [-] /* never executed in any replay */
        v70 = [];                                       // #61633:235:107 [-] /* never executed in any replay */
        v71 = 0; v70[0] = v108;                         // #61635:96:26 [-] /* never executed in any replay */
        v72 = 1; v70[1] = v109;                         // #61640:65:26 [-] /* never executed in any replay */
        v73 = 2; v70[2] = v110;                         // #61645:222:26 [-] /* never executed in any replay */
        v74 = 3; v70[3] = v52;                          // #61650:71:26 [-] /* never executed in any replay */
        v75 = 4; v70[4] = v60;                          // #61655:76:26 [-] /* never executed in any replay */
        v76 = 5; v70[5] = v44;                          // #61660:125:26 [-] /* never executed in any replay */
        v77 = 6; v70[6] = v69;                          // #61665:42:26 [-] /* never executed in any replay */
        v78 = null;                                     // #61670:182:233 [-] /* never executed in any replay */
        v79 = 7; v70[7] = null;                         // #61673:191:26 [-] /* never executed in any replay */
        v80 = null;                                     // #61678:55:233 [-] /* never executed in any replay */
        v81 = 8; v70[8] = null;                         // #61681:124:26 [-] /* never executed in any replay */
        cell[28] = v70;                                 // #61686:50:195 [-] /* never executed in any replay */
        v82 = clos;                                     // #61689:145:216 [-]  closure creation (operands from the byte stream); then v82 = its home register (H139 CLOS bind) /* never executed in any replay */
        v113 = v82;                                     // #61702:122:150 [-] /* never executed in any replay */
        v83 = undefined;                                // #61705:198:233 [-] /* never executed in any replay */
        v84 = 0;                                        // #61708:133:72 [-] /* never executed in any replay */
        v85 = {};                                       // #61711:195:159 [-] /* never executed in any replay */
        v86 = "powerPreference";                        // #61713:43:233 [-] /* never executed in any replay */
        v87 = "high-performance";                       // #61718:243:233 [-] /* never executed in any replay */
        v85.powerPreference = "high-performance";       // #61738:129:199 [-] /* never executed in any replay */
        v88 = MC(undefined, v113, 0, v85);              // #61742:244:168 [-] /* never executed in any replay */
        v89 = undefined;                                // #61748:216:233 [-] /* never executed in any replay */
        v90 = 1;                                        // #61751:207:72 [-] /* never executed in any replay */
        v91 = {};                                       // #61754:101:159 [-] /* never executed in any replay */
        v92 = "powerPreference";                        // #61756:197:233 [-] /* never executed in any replay */
        v93 = "low-power";                              // #61761:165:233 [-] /* never executed in any replay */
        v91.powerPreference = "low-power";              // #61774:235:199 [-] /* never executed in any replay */
        v94 = MC(undefined, v113, 1, v91);              // #61778:54:168 [-] /* never executed in any replay */
        v114 = undefined;                               // #61784:146:233 [-] /* never executed in any replay */
        v95 = 2;                                        // #61787:33:72 [-] /* never executed in any replay */
        v115 = {};                                      // #61790:239:159 [-] /* never executed in any replay */
        v96 = "forceFallbackAdapter";                   // #61792:167:233 [-] /* never executed in any replay */
        v116 = true;                                    // #61816:127:233 [-] /* never executed in any replay */
        v115.forceFallbackAdapter = true;               // #61819:221:199 [-] /* never executed in any replay */
        v117 = MC(undefined, v113, 2, v115);            // #61823:224:168 [-] /* never executed in any replay */
        r205 = cell[86](v99);                           // #61829:205:22 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
        return r205;                                    // #61833:105:245 [-] /* never executed in any replay */
      } catch (caught) {
        outside("L61595_246");                          // #61593:246:150 [-]  L61595_246 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } catch (caught) {
      outside("L61495_105");                            // #61493:105:150 [-]  L61495_105 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    v2 = "nglL7";                                       // #59673:209:53 #59678:214:233 [L d1 h1 c1]
    cell[28] = "nglL7";                                 // #59687:164:195 [L d1 h1 c1]
    v118 = undefined;                                   // #59690:228:53 #61835:240:233 [L d1 h1 c1]
    return v118;                                        // #61838:192:245 [L d1 h1 c1]
  }
}