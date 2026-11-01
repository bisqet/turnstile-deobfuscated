function fn_performance_126766(win_v123 /* r70 */, v124 /* r209 */, v125 /* r220 */, v126 /* r221 */) { // entry L126756_140; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 181 register webs used only inside this fn (no live-in, cross-call or table-made def; 59 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r232 */, v2 /* r204 */, v3 /* r198 */, v4 /* r199 */, v5 /* r205 */, v6 /* r204 */, win_v7 /* r205 */, win_v8 /* r204 */, v9 /* r205 */, win_v10 /* r205 */;
  let perf_v11 /* r202 */, fn_v12 /* r205 */, win_v13 /* r204 */, perf_v14 /* r202 */, fn_v15 /* r204 */, v16 /* r204 */, win_v17 /* r205 */, perf_v18 /* r202 */, v19 /* r205 */, win_v20 /* r198 */;
  let v21 /* r204 */, v22 /* r204 */, performanceMark_v23 /* r205 */, performanceMark_v24 /* r204 */, win_v25 /* r204 */, perf_v26 /* r205 */, fn_v27 /* r204 */, win_v28 /* r205 */, perf_v29 /* r202 */, fn_v30 /* r205 */;
  let win_v31 /* r204 */, perf_v32 /* r205 */, v33 /* r205 */, arr_v34 /* r202 */, v35 /* r205 */, v36 /* r202 */, v37 /* r205 */, v38 /* r205 */, v39 /* r202 */, v40 /* r205 */;
  let v41 /* r202 */, v42 /* r205 */, v43 /* r202 */, v44 /* r205 */, v45 /* r202 */, v46 /* r205 */, v47 /* r202 */, v48 /* r205 */, v49 /* r202 */, v50 /* r199 */;
  let v51 /* r198 */, v52 /* r202 */, v53 /* r205 */, v54 /* r205 */, v55 /* r202 */, v56 /* r205 */, v57 /* r205 */, v58 /* r202 */, v59 /* r205 */, v60 /* r205 */;
  let v61 /* r202 */, v62 /* r205 */, v63 /* r205 */, v64 /* r202 */, v65 /* r202 */, v66 /* r205 */, v67 /* r205 */, v68 /* r202 */, arr_v69 /* r202 */, v70 /* r205 */;
  let v71 /* r198 */, v72 /* r205 */, v73 /* r198 */, v74 /* r205 */, v75 /* r205 */, v76 /* r202 */, v77 /* r202 */, v78 /* r205 */, v79 /* r198 */, v80 /* r205 */;
  let v81 /* r198 */, v82 /* r205 */, v83 /* r198 */, v84 /* r205 */, v85 /* r205 */, v86 /* r202 */, v87 /* r202 */, v88 /* r205 */, v89 /* r205 */, v90 /* r202 */;
  let arr_v91 /* r202 */, v92 /* r205 */, v93 /* r198 */, v94 /* r205 */, v95 /* r205 */, v96 /* r202 */, v97 /* r202 */, v98 /* r205 */, v99 /* r198 */, v100 /* r205 */;
  let v101 /* r205 */, v102 /* r202 */, v103 /* r202 */, v104 /* r205 */, v105 /* r205 */, v106 /* r202 */, v107 /* r202 */, v108 /* r205 */, v109 /* r205 */, v110 /* r202 */;
  let arr_v111 /* r205 */, v112 /* r202 */, arr_v113 /* r205 */, v114 /* r202 */, v115 /* r198 */, v116 /* r199 */, v117 /* r193 */, v118 /* r202 */, v119 /* r205 */, v120 /* r192 */;
  let arr_v121 /* r205 */, v122 /* r202 */, v127 /* r196 */, v128 /* r195 */, v129 /* r193 */, v130 /* r192 */, v131 /* r252 */, fn_v132 /* r199 */, v133 /* r198 */, fn_v134 /* r199 */;
  let v135 /* r198 */, arr_v136 /* r232 */, v137 /* r204 */, v138 /* r236 */, v139 /* r250 */, v140 /* r244 */, v141 /* r247 */, v142 /* r245 */, v143 /* r242 */, v144 /* r246 */;
  let v145 /* r238 */, v146 /* r237 */, v147 /* r240 */, v148 /* r202 */, v149 /* r196 */, v150 /* r199 */, v151 /* r198 */, v152 /* r199 */, v153 /* r198 */, v154 /* r199 */;
  let v155 /* r198 */, v156 /* r199 */, v157 /* r198 */, v158 /* r199 */, v159 /* r198 */, v160 /* r199 */, v161 /* r198 */, v162 /* r199 */, v163 /* r198 */, v164 /* r199 */;
  let v165 /* r198 */, v166 /* r199 */, v167 /* r198 */, v168 /* r199 */, v169 /* r198 */, v170 /* r196 */, v171 /* r199 */, v172 /* r198 */, v173 /* r196 */, v174 /* r195 */;
  let v175 /* r254 */, v176 /* r253 */, v177 /* r193 */, v178 /* r192 */, v179 /* r199 */, v180 /* r198 */, v181 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v7 3, win_v8 3, win_v10 3, win_v13 3, win_v17 3, win_v20 3, win_v25 3, win_v28 3
  //   Window: win_v31 3, win_v123 3
  //   Performance: perf_v11 3, perf_v14 3, perf_v18 3, perf_v26 3, perf_v29 3, perf_v32 3
  //   Function: fn_v12 3, fn_v15 3, fn_v27 3, fn_v30 3, fn_v132 3, fn_v134 3
  //   PerformanceMark: performanceMark_v23 3, performanceMark_v24 3
  //   Array: arr_v34 3, arr_v69 3, arr_v91 3, arr_v111 6, arr_v113 3, arr_v121 6, arr_v136 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 4 dead register writes dropped, 1 constants propagated (1 uses), 8 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #126757:44:53 #126767:125:233 [L d1 h1 c1]
  v2 = undefined;                                       // #126770:125:233 [L d1 h1 c1]
  v127 = undefined;                                     // #126773:125:233 [L d1 h1 c1]
  v3 = undefined;                                       // #126776:125:233 [L d1 h1 c1]
  v128 = undefined;                                     // #126779:125:233 #126782:125:233 [L d1 h1 c1]
  v129 = undefined;                                     // #126785:125:233 [L d1 h1 c1]
  v130 = undefined;                                     // #126788:125:233 [L d1 h1 c1]
  v4 = undefined;                                       // #126791:125:233 #126794:125:233 [L d1 h1 c1]
  v5 = cell[1];                                         // #126797:52:236 [L d1 h1 c1]
  v6 = v5[v125];                                        // #126800:62:7 [L d1 h1 c1]
  v131 = v5[v6];                                        // #126804:160:7 [L d1 h1 c1]
  win_v7 = win_v123[v126];                              // #126808:250:7 [L d1 h1 c1]
  win_v8 = win_v7;                                      // #126812:127:150 [L d1 h1 c1]
  fn_v132 = win_v8[v124];                               // #126815:29:7 [L d1 h1 c1]
  v9 = KP(126818);                                      // #126819:157:233 [L d1 h1 c1]
  v133 = fn_v132.call(win_v8, v9);                      // #126892:122:138 [L d1 h1 c1]
  win_v10 = win_v123[v126];                             // #126912:236:7 [L d1 h1 c1]
  perf_v11 = win_v10.performance;                       // #126916:19:200 [L d1 h1 c1]
  if (perf_v11) {                                       // #126921:214:160 [L d1 h1 c1]
    win_v13 = win_v123[v126];                           // #126940:126:7 [L d1 h1 c1]
    perf_v14 = win_v13.performance;                     // #126944:221:200 [L d1 h1 c1]
    fn_v15 = perf_v14.mark;                             // #126949:128:200 [L d1 h1 c1]
    fn_v12 = fn_v15;                                    // #126957:109:150 [L d1 h1 c1] +#126960:201:53
  } else {
    fn_v12 = perf_v11;                                  // #126927:206:53 #126932:233:150 [-] +#126935:85:53 /* never executed in any replay */
  }
  if (fn_v12) {                                         // #126965:170:160 [L d1 h1 c1]
    win_v17 = win_v123[v126];                           // #126984:69:7 [L d1 h1 c1]
    perf_v18 = win_v17.performance;                     // #126988:72:200 [L d1 h1 c1]
    fn_v134 = perf_v18.mark;                            // #126993:255:200 [L d1 h1 c1]
    v19 = "nmeq7";                                      // #127001:119:233 [L d1 h1 c1]
    win_v20 = win_v123[v126];                           // #127010:53:7 [L d1 h1 c1]
    v21 = win_v20[KP(127013)];                          // #127014:120:200 [L d1 h1 c1]
    v135 = v21.dXXrN6;                                  // #127019:111:200 [L d1 h1 c1]
    v22 = "nmeq7" + v135;                               // #127029:136:222 [L d1 h1 c1]
    performanceMark_v23 = fn_v134.call(perf_v18, v22);  // #127033:121:138 [L d1 h1 c1]
    performanceMark_v24 = performanceMark_v23;          // #127051:194:150 [L d1 h1 c1] +#127054:10:53
  } else {
    v16 = fn_v12;                                       // #126971:82:53 #126976:234:150 [-] +#126979:146:53 /* never executed in any replay */
  }
  arr_v136 = [];                                        // #127059:200:107 [L d1 h1 c1]
  win_v25 = win_v123[v126];                             // #127061:130:7 [L d1 h1 c1]
  perf_v26 = win_v25.performance;                       // #127065:209:200 [L d1 h1 c1]
  if (perf_v26) {                                       // #127070:28:160 [L d1 h1 c1]
    win_v28 = win_v123[v126];                           // #127089:94:7 [L d1 h1 c1]
    perf_v29 = win_v28.performance;                     // #127093:61:200 [L d1 h1 c1]
    fn_v30 = perf_v29.getEntries;                       // #127098:96:200 [L d1 h1 c1]
    fn_v27 = fn_v30;                                    // #127112:205:150 [L d1 h1 c1] +#127115:169:53
  } else {
    fn_v27 = perf_v26;                                  // #127076:124:53 #127081:73:150 [-] +#127084:53:53 /* never executed in any replay */
  }
  if (fn_v27) {                                         // #127120:227:160 [L d1 h1 c1]
    win_v31 = win_v123[v126];                           // #127139:57:7 [L d1 h1 c1]
    perf_v32 = win_v31.performance;                     // #127143:108:200 [L d1 h1 c1]
    arr_v136 = perf_v32.getEntries();                   // #127148:205:138 [L d1 h1 c1] +#127170:198:150 +#127173:254:53
  } else {
    // #127126:231:53 #127131:54:150 #127134:174:53 [-] /* never executed in any replay */
  }
  v33 = "BnDgz6";                                       // #127178:47:233 [L d1 h1 c1]
  arr_v34 = [];                                         // #127183:225:107 [L d1 h1 c1]
  v131.BnDgz6 = arr_v34;                                // #127185:55:199 [L d1 h1 c1]
  v137 = 0;                                             // #127189:114:72 [L d1 h1 c1]
  v138 = "first-input";                                 // #127192:222:233 [L d1 h1 c1]
  v139 = "responseEnd";                                 // #127207:154:233 [L d1 h1 c1]
  v140 = "transferSize";                                // #127222:102:233 [L d1 h1 c1]
  v141 = "requestStart";                                // #127238:2:233 [L d1 h1 c1]
  v142 = "initiatorType";                               // #127254:46:233 [L d1 h1 c1]
  v143 = "encodedBodySize";                             // #127271:170:233 [L d1 h1 c1]
  v144 = "nextHopProtocol";                             // #127290:54:233 [L d1 h1 c1]
  v145 = "visibility-state";                            // #127309:146:233 [L d1 h1 c1]
  v146 = "scrollUpdateLatency";                         // #127329:126:233 [L d1 h1 c1]
  v147 = "long-animation-frame";                        // #127352:186:233 [L d1 h1 c1] +#127376:34:53
  while ((v148 = arr_v136.length, v37 = v137 < v148, v137 < v148)) {  // #127394:200:200 | #127399:41:186 [L d8 h8 c8]
    v149 = arr_v136[v137];                              // #127417:71:7 [L d7 h7 c7]
    v38 = v149.entryType;                               // #127421:194:200 [L d7 h7 c7]
    v39 = "resource";                                   // #127426:238:233 [L d7 h7 c7]
    if (v38 === v39) {                                  // #127438:66:161 [L d7 h7 c7]
      v115 = v149[v140]; v116 = v149[v143];             // #128420:34:38 [L d2 h2 c2]
      v117 = v149[v142]; v174 = v149[v144];             // #128426:87:38 [L d2 h2 c2]
      v118 = v149[v141]; v119 = v149[v139];             // #128432:248:38 [L d2 h2 c2]
      v120 = v119 - v118;                               // #128438:37:54 [L d2 h2 c2]
      arr_v121 = v131.BnDgz6;                           // #128442:168:200 [L d2 h2 c2]
      v122 = {};                                        // #128447:26:159 [L d2 h2 c2]
      v175 = "JQHBh1";                                  // #128449:230:233 [L d2 h2 c2]
      v176 = "VcDgA8";                                  // #128454:130:233 [L d2 h2 c2]
      v122.JQHBh1 = "VcDgA8";                           // #128464:148:199 [L d2 h2 c2]
      v122.uTdvS1 = v120;                               // #128468:73:142 [L d2 h2 c2]
      v122.Eugr2 = v117;                                // #128478:106:142 [L d2 h2 c2]
      v177 = "FMly1";                                   // #128487:246:233 [L d2 h2 c2]
      v178 = v149.name;                                 // #128496:117:200 [L d2 h2 c2]
      v122.FMly1 = v178;                                // #128501:123:199 [L d2 h2 c2]
      v122.cDMxq8 = v174;                               // #128505:84:142 [L d2 h2 c2]
      v122.YfYKU8 = v115;                               // #128515:9:142 [L d2 h2 c2]
      v122.epuA1 = v116;                                // #128525:42:142 [L d2 h2 c2]
      v179 = "OIxc1";                                   // #128534:182:233 [L d2 h2 c2]
      v180 = v149.duration;                             // #128543:53:200 [L d2 h2 c2]
      v122.OIxc1 = v180;                                // #128555:59:199 [L d2 h2 c2]
      arr_v121[v137] = v122;                            // #128559:72:210 [L d2 h2 c2]
    } else {
      v40 = "navigation";                               // #127446:138:53 #127451:24:233 [L d5 h5 c5]
      v41 = v149.entryType;                             // #127465:143:200 [L d5 h5 c5]
      if (v40 === v41) {                                // #127470:159:161 [L d5 h5 c5]
        v171 = v149.type;                               // #128367:195:200 [L d1 h1 c1]
        arr_v113 = v131.BnDgz6;                         // #128372:78:200 [L d1 h1 c1]
        v114 = {};                                      // #128377:168:159 [L d1 h1 c1]
        v172 = "JQHBh1";                                // #128379:188:233 [L d1 h1 c1]
        v173 = "yktaG7";                                // #128384:128:233 [L d1 h1 c1]
        v114.JQHBh1 = "yktaG7";                         // #128394:26:199 [L d1 h1 c1]
        v114.Eugr2 = v171;                              // #128398:55:142 [L d1 h1 c1]
        arr_v113[v137] = v114;                          // #128407:84:210 [L d1 h1 c1]
      } else {
        v42 = v149.entryType;                           // #127478:179:53 #127483:199:200 [L d4 h4 c4]
        v43 = "paint";                                  // #127488:31:233 [L d4 h4 c4]
        if (v42 === v43) {                              // #127497:239:161 [L d4 h4 c4]
          v168 = v149.name;                             // #128315:116:200 [L d2 h2 c2]
          arr_v111 = v131.BnDgz6;                       // #128320:123:200 [L d2 h2 c2]
          v112 = {};                                    // #128325:97:159 [L d2 h2 c2]
          v169 = "JQHBh1";                              // #128327:209:233 [L d2 h2 c2]
          v170 = "HuaQ0";                               // #128332:129:233 [L d2 h2 c2]
          v112.JQHBh1 = "HuaQ0";                        // #128341:87:199 [L d2 h2 c2]
          v112.Eugr2 = v168;                            // #128345:192:142 [L d2 h2 c2]
          arr_v111[v137] = v112;                        // #128354:249:210 [L d2 h2 c2]
        } else {
          v44 = v149.entryType;                         // #127505:195:53 #127510:52:200 [L d2 h2 c2]
          v45 = "frame";                                // #127515:24:233 [L d2 h2 c2]
          if (v44 === v45) {                            // #127524:68:161 [L d2 h2 c2]
            v107 = v131.BnDgz6;                         // #128270:104:200 [-] /* never executed in any replay */
            v166 = {};                                  // #128275:218:159 [-] /* never executed in any replay */
            v108 = "JQHBh1";                            // #128277:166:233 [-] /* never executed in any replay */
            v167 = "EjZx7";                             // #128282:66:233 [-] /* never executed in any replay */
            v166.JQHBh1 = "EjZx7";                      // #128291:84:199 [-] /* never executed in any replay */
            v109 = v166;                                // #128295:241:150 [-] /* never executed in any replay */
            v107[v137] = v166;                          // #128298:7:199 [-] /* never executed in any replay */
            v110 = v166;                                // #128302:152:150 [-] +#128305:8:53 /* never executed in any replay */
          } else {
            v46 = "render";                             // #127532:4:53 #127537:61:233 [L d2 h2 c2]
            v47 = v149.entryType;                       // #127547:96:200 [L d2 h2 c2]
            if (v46 === v47) {                          // #127552:108:161 [L d2 h2 c2]
              v103 = v131.BnDgz6;                       // #128224:59:200 [-] /* never executed in any replay */
              v164 = {};                                // #128229:33:159 [-] /* never executed in any replay */
              v104 = "JQHBh1";                          // #128231:145:233 [-] /* never executed in any replay */
              v165 = "zTUGb2";                          // #128236:65:233 [-] /* never executed in any replay */
              v164.JQHBh1 = "zTUGb2";                   // #128246:23:199 [-] /* never executed in any replay */
              v105 = v164;                              // #128250:104:150 [-] /* never executed in any replay */
              v103[v137] = v164;                        // #128253:98:199 [-] /* never executed in any replay */
              v106 = v164;                              // #128257:71:150 [-] +#128260:187:53 /* never executed in any replay */
            } else {
              v48 = v149.entryType;                     // #127560:140:53 #127565:141:200 [L d2 h2 c2]
              v49 = v48 === v138;                       // #127570:69:65 [L d2 h2 c2]
              if (v49) {                                // #127574:192:160 [L d2 h2 c2]
                v53 = v49;                              // #127616:73:150 [-] +#127619:53:53 /* never executed in any replay */
              } else {
                v50 = v149.entryType;                   // #127580:144:53 #127585:45:200 [L d2 h2 c2]
                v51 = "firstInput";                     // #127590:109:233 [L d2 h2 c2]
                v52 = v50 === "firstInput";             // #127604:165:65 [L d2 h2 c2]
                v53 = v50 === "firstInput";             // #127608:62:150 [L d2 h2 c2] +#127611:150:53
              }
              if (v53) {                                // #127624:104:160 [L d2 h2 c2]
                v97 = v131.BnDgz6;                      // #128161:173:200 [-] /* never executed in any replay */
                v162 = {};                              // #128166:75:159 [-] /* never executed in any replay */
                v98 = "JQHBh1";                         // #128168:147:233 [-] /* never executed in any replay */
                v99 = "KDXN3";                          // #128173:187:233 [-] /* never executed in any replay */
                v162.JQHBh1 = "KDXN3";                  // #128182:41:199 [-] /* never executed in any replay */
                v100 = "AHFY6";                         // #128186:121:233 [-] /* never executed in any replay */
                v163 = v149.entryType;                  // #128195:172:200 [-] /* never executed in any replay */
                v162.AHFY6 = v163;                      // #128200:150:199 [-] /* never executed in any replay */
                v101 = v162;                            // #128204:171:150 [-] /* never executed in any replay */
                v97[v137] = v162;                       // #128207:89:199 [-] /* never executed in any replay */
                v102 = v162;                            // #128211:34:150 [-] +#128214:234:53 /* never executed in any replay */
              } else {
                v54 = v149.entryType;                   // #127630:152:53 #127635:131:200 [L d2 h2 c2]
                v55 = "mark";                           // #127640:235:233 [L d2 h2 c2]
                if (v54 === v55) {                      // #127648:139:161 [L d2 h2 c2]
                  arr_v91 = v131.BnDgz6;                // #128097:151:200 [L d1 h1 c1]
                  v160 = {};                            // #128102:13:159 [L d1 h1 c1]
                  v92 = "JQHBh1";                       // #128104:205:233 [L d1 h1 c1]
                  v93 = "drhid2";                       // #128109:141:233 [L d1 h1 c1]
                  v160.JQHBh1 = "drhid2";               // #128119:51:199 [L d1 h1 c1]
                  v94 = "FMly1";                        // #128123:219:233 [L d1 h1 c1]
                  v161 = v149.name;                     // #128132:6:200 [L d1 h1 c1]
                  v160.FMly1 = v161;                    // #128137:8:199 [L d1 h1 c1]
                  v95 = v160;                           // #128141:213:150 [L d1 h1 c1]
                  arr_v91[v137] = v160;                 // #128144:91:199 [L d1 h1 c1]
                  v96 = v160;                           // #128148:156:150 [L d1 h1 c1] +#128151:252:53
                } else {
                  v56 = v149.entryType;                 // #127656:239:53 #127661:202:200 [L d1 h1 c1]
                  if (v56 === v146) {                   // #127666:174:161 [L d1 h1 c1]
                    v87 = v131.BnDgz6;                  // #128051:121:200 [-] /* never executed in any replay */
                    v158 = {};                          // #128056:231:159 [-] /* never executed in any replay */
                    v88 = "JQHBh1";                     // #128058:191:233 [-] /* never executed in any replay */
                    v159 = "AWmHv2";                    // #128063:55:233 [-] /* never executed in any replay */
                    v158.JQHBh1 = "AWmHv2";             // #128073:181:199 [-] /* never executed in any replay */
                    v89 = v158;                         // #128077:14:150 [-] /* never executed in any replay */
                    v87[v137] = v158;                   // #128080:240:199 [-] /* never executed in any replay */
                    v90 = v158;                         // #128084:29:150 [-] +#128087:185:53 /* never executed in any replay */
                  } else {
                    v57 = v149.entryType;               // #127674:70:53 #127679:227:200 [L d1 h1 c1]
                    v58 = "measure";                    // #127684:203:233 [L d1 h1 c1]
                    if (v57 === v58) {                  // #127695:235:161 [L d1 h1 c1]
                      v77 = v131.BnDgz6;                // #127936:201:200 [-] /* never executed in any replay */
                      v156 = {};                        // #127941:247:159 [-] /* never executed in any replay */
                      v78 = "JQHBh1";                   // #127943:143:233 [-] /* never executed in any replay */
                      v79 = "ThaU7";                    // #127948:199:233 [-] /* never executed in any replay */
                      v156.JQHBh1 = "ThaU7";            // #127957:5:199 [-] /* never executed in any replay */
                      v80 = "FMly1";                    // #127961:229:233 [-] /* never executed in any replay */
                      v81 = v149.name;                  // #127970:104:200 [-] /* never executed in any replay */
                      v156.FMly1 = v81;                 // #127975:98:199 [-] /* never executed in any replay */
                      v82 = "AHFY6";                    // #127979:14:233 [-] /* never executed in any replay */
                      v83 = v149.startTime;             // #127988:45:200 [-] /* never executed in any replay */
                      v156.AHFY6 = v83;                 // #128001:83:199 [-] /* never executed in any replay */
                      v84 = "hDFPe4";                   // #128005:123:233 [-] /* never executed in any replay */
                      v157 = v149.duration;             // #128015:38:200 [-] /* never executed in any replay */
                      v156.hDFPe4 = v157;               // #128027:168:199 [-] /* never executed in any replay */
                      v85 = v156;                       // #128031:245:150 [-] /* never executed in any replay */
                      v77[v137] = v156;                 // #128034:251:199 [-] /* never executed in any replay */
                      v86 = v156;                       // #128038:188:150 [-] +#128041:156:53 /* never executed in any replay */
                    } else {
                      v59 = v149.entryType;             // #127703:207:53 #127708:123:200 [L d1 h1 c1]
                      if (v59 === v145) {               // #127713:219:161 [L d1 h1 c1]
                        arr_v69 = v131.BnDgz6;          // #127839:248:200 [L d1 h1 c1]
                        v154 = {};                      // #127844:42:159 [L d1 h1 c1]
                        v70 = "JQHBh1";                 // #127846:182:233 [L d1 h1 c1]
                        v71 = "WHYu9";                  // #127851:18:233 [L d1 h1 c1]
                        v154.JQHBh1 = "WHYu9";          // #127860:228:199 [L d1 h1 c1]
                        v72 = "AHFY6";                  // #127864:8:233 [L d1 h1 c1]
                        v73 = v149.startTime;           // #127873:191:200 [L d1 h1 c1]
                        v154.AHFY6 = v73;               // #127886:29:199 [L d1 h1 c1]
                        v74 = "hDFPe4";                 // #127890:157:233 [L d1 h1 c1]
                        v155 = v149.duration;           // #127900:64:200 [L d1 h1 c1]
                        v154.hDFPe4 = v155;             // #127912:218:199 [L d1 h1 c1]
                        v75 = v154;                     // #127916:223:150 [L d1 h1 c1]
                        arr_v69[v137] = v154;           // #127919:189:199 [L d1 h1 c1]
                        v76 = v154;                     // #127923:246:150 [L d1 h1 c1] +#127926:110:53
                      } else {
                        v60 = v149.entryType;           // #127721:255:53 #127726:82:200 [-] /* never executed in any replay */
                        if (v60 === v147) {             // #127731:22:161 [-] /* never executed in any replay */
                          v65 = v131.BnDgz6;            // #127794:90:200 [-] /* never executed in any replay */
                          v152 = {};                    // #127799:132:159 [-] /* never executed in any replay */
                          v66 = "JQHBh1";               // #127801:40:233 [-] /* never executed in any replay */
                          v153 = "cpJm7";               // #127806:60:233 [-] /* never executed in any replay */
                          v152.JQHBh1 = "cpJm7";        // #127815:230:199 [-] /* never executed in any replay */
                          v67 = v152;                   // #127819:187:150 [-] /* never executed in any replay */
                          v65[v137] = v152;             // #127822:41:199 [-] /* never executed in any replay */
                          v68 = v152;                   // #127826:178:150 [-] +#127829:58:53 /* never executed in any replay */
                        } else {
                          v61 = v131.BnDgz6;            // #127739:14:53 #127744:95:200 [-] /* never executed in any replay */
                          v150 = {};                    // #127749:181:159 [-] /* never executed in any replay */
                          v62 = "JQHBh1";               // #127751:213:233 [-] /* never executed in any replay */
                          v151 = "vAUsN4";              // #127756:117:233 [-] /* never executed in any replay */
                          v150.JQHBh1 = "vAUsN4";       // #127766:123:199 [-] /* never executed in any replay */
                          v150.RnPi0 = v149;            // #127770:84:142 [-] /* never executed in any replay */
                          v63 = v150;                   // #127779:241:150 [-] /* never executed in any replay */
                          v61[v137] = v150;             // #127782:7:199 [-] /* never executed in any replay */
                          v64 = v150;                   // #127786:152:150 [-] +#127789:8:53 /* never executed in any replay */
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
    v35 = 1;                                            // #127381:171:72 [L d7 h7 c7]
    v36 = v137; v137 = v137 + 1;                        // #127384:94:48 [L d7 h7 c7]
  }
  v181 = undefined;                                     // #128572:72:233 [L d1 h1 c1]
  return v181;                                          // #128575:184:245 [L d1 h1 c1]
}