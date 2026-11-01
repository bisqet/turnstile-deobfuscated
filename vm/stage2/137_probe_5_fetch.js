function probe_5_fetch(v110 /* r211 */, v111 /* r220 */, v112 /* r223 */, v125 /* r70 */, v126 /* r209 */, v127 /* r217 */, v128 /* r221 */) { // entry L139350_173; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 124 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 7 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 8 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r205 */, v4 /* r198 */, win_v5 /* r204 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, v9 /* r195 */, v10 /* r196 */;
  let v11 /* r199 */, fn_v12 /* r205 */, win_v13 /* r204 */, v14 /* r205 */, v15 /* r205 */, v16 /* r199 */, v17 /* r202 */, fn_v18 /* r199 */, fn_v19 /* r205 */, win_v20 /* r199 */;
  let v21 /* r205 */, v22 /* r198 */, v23 /* r205 */, v24 /* r202 */, v25 /* r204 */, win_v26 /* r202 */, v27 /* r205 */, v28 /* r199 */, v29 /* r202 */, v30 /* r195 */;
  let v31 /* r198 */, v32 /* r202 */, v33 /* r202 */, win_v34 /* r202 */, win_v35 /* r202 */, v36 /* r205 */, v37 /* r202 */, fn_v38 /* r199 */, v39 /* r202 */, fn_v40 /* r199 */;
  let fn_v41 /* r205 */, v42 /* r198 */, fn_v43 /* r202 */, v44 /* r199 */, win_v45 /* r196 */, v46 /* r196 */, v47 /* r205 */, v48 /* r199 */, v49 /* r196 */, v50 /* r199 */;
  let v51 /* r196 */, v52 /* r205 */, doc_v53 /* r199 */, v54 /* r204 */, uRL_v55 /* r202 */, v56 /* r205 */, v57 /* r205 */, v58 /* r204 */, v59 /* r202 */, v60 /* r204 */;
  let v61 /* r202 */, v62 /* r205 */, worker_v63 /* r204 */, fn_v64 /* r202 */, fn_v65 /* r205 */, promise_v66 /* r202 */, fn_v67 /* r199 */, fn_v68 /* r204 */, promise_v69 /* r205 */, promise_v70 /* r204 */;
  let fn_v71 /* r199 */, fn_v72 /* r205 */, promise_v73 /* r202 */, fn_v74 /* r199 */, fn_v75 /* r204 */, promise_v76 /* r205 */, arr_v77 /* r202 */, fn_v78 /* r202 */, v79 /* r204 */, v80 /* r198 */;
  let v81 /* r198 */, v82 /* r205 */, v83 /* r205 */, v84 /* r202 */, v85 /* r202 */, v86 /* r202 */, v87 /* r204 */, arr_v88 /* r205 */, v89 /* r205 */, v90 /* r198 */;
  let v91 /* r204 */, v92 /* r196 */, v93 /* r198 */, v94 /* r204 */, v95 /* r198 */, v96 /* r204 */, v97 /* r195 */, v98 /* r193 */, v99 /* r202 */, v100 /* r196 */;
  let v101 /* r204 */, v102 /* r192 */, v103 /* r204 */, arr_v104 /* r204 */, v105 /* r205 */, v106 /* r205 */, v107 /* r202 */, v108 /* r205 */, win_v109 /* r205 */, fn_v113 /* r196 */;
  let v114 /* r199 */, v115 /* r195 */, v116 /* r198 */, v117 /* r195 */, arr_v118 /* r199 */, v119 /* r196 */, fn_v120 /* r198 */, v121 /* r202 */, v122 /* r202 */, v123 /* r204 */;
  let v124 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v5 3, win_v13 3, win_v20 3, win_v26 3, win_v34 3, win_v35 3, win_v45 3, win_v109 3
  //   Function: fn_v12 3, fn_v18 3, fn_v19 3, fn_v38 3, fn_v40 3, fn_v41 3, fn_v43 3, fn_v64 3
  //   Function: fn_v65 3, fn_v67 3, fn_v68 3, fn_v71 3, fn_v72 3, fn_v74 3, fn_v75 3, fn_v78 3
  //   Function: fn_v113 3, fn_v120 3
  //   HTMLDocument: doc_v53 3
  //   URL: uRL_v55 3
  //   Worker: worker_v63 3
  //   Promise: promise_v66 3, promise_v69 3, promise_v70 3, promise_v73 3, promise_v76 3
  //   Array: arr_v77 3, arr_v88 3, arr_v104 3, arr_v118 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 25 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 13 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 8 single-use temps folded (7 of them expressions, H135), 20 dead register writes dropped, 10 constants propagated (10 uses), 6 string keys as .member; 2 webs kept as registers (retOut 2, liveIn 1, crossCall 1)
  NC(15, 18, 19, 20, 21, 22, 23);                       // #139351:9:53 #139361:43:211 [L d1 h1 c1]
  v1 = undefined;                                       // #139370:243:233 [L d1 h1 c1]
  v2 = undefined;                                       // #139373:155:233 #139376:163:233 #139379:139:233 #139382:211:233 #139385:251:233 #139388:131:233 #139391:235:233 #139394:179:233 [L d1 h1 c1]
  v3 = undefined;                                       // #139397:91:233 #139400:99:233 #139403:75:233 [L d1 h1 c1]
  v4 = undefined;                                       // #139406:147:233 [L d1 h1 c1]
  win_v5 = v125[v128];                                  // #139409:225:7 [L d1 h1 c1]
  v6 = KP(139412);                                      // #139413:81:233 [L d1 h1 c1]
  v7 = MC(win_v5, v126, v6);                            // #139486:166:114 [L d1 h1 c1]
  v8 = 0;                                               // #139491:229:72 [L d1 h1 c1]
  v9 = "eval";                                          // #139494:69:233 [L d1 h1 c1]
  v10 = undefined;                                      // #139499:37:233 [L d1 h1 c1]
  v11 = "this";                                         // #139502:133:233 [L d1 h1 c1] +#139507:129:53
  while ((fn_v12 = v125.eval, win_v13 = MC(undefined, fn_v12, "this"), v14 = !(!(v125 === win_v13)), !(v14))) {  // #139512:59:7 | #139516:104:114 | #139521:116:65 #139525:205:130 #139528:2:130 | #139531:201:160 [L d1 h1 c1]
    // #139537:181:53 [-] /* never executed in any replay */
  }
  v15 = cell[1];                                        // #139547:201:236 [L d1 h1 c1]
  v16 = v15[v111];                                      // #139550:191:7 [L d1 h1 c1]
  v17 = v15[v16];                                       // #139554:93:7 [L d1 h1 c1]
  cell[15] = v17;                                       // #139558:207:195 [L d1 h1 c1]
  fn_v18 = clos;                                        // #139561:250:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v18 = its home register (H139 CLOS bind)
  fn_v19 = fn_v18;                                      // #139575:127:150 [L d1 h1 c1]
  v17.ExHMy4 = fn_v19;                                  // #139578:72:142 [L d1 h1 c1]
  try {
    TP(tryStack, 140924, 159, callDepths);                         // #139583:145:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v20 = v125[v128];                               // #139589:103:7 [L d1 h1 c1]
    v21 = KP(139592);                                   // #139593:63:233 [L d1 h1 c1]
    v22 = win_v20.uOdMb2(v21);                          // #139646:20:138 [L d1 h1 c1]
    v17[v127] = 0;                                      // #139665:126:103 [L d1 h1 c1]
    v17[v110] = ("");                                   // #139670:186:233 #139674:236:199 [L d1 h1 c1]
    v23 = cell[1];                                      // #139678:167:236 [L d1 h1 c1]
    v24 = v23[v111];                                    // #139681:165:7 [L d1 h1 c1]
    v25 = v23[v24];                                     // #139685:43:7 [L d1 h1 c1]
    win_v26 = v125[v128];                               // #139689:25:7 [L d1 h1 c1]
    v27 = KP(139692);                                   // #139693:169:233 [L d1 h1 c1]
    v28 = MC(win_v26, v126, v27);                       // #139746:158:114 [L d1 h1 c1]
    v29 = "";                                           // #139751:90:233 #139756:38:233 [L d1 h1 c1]
    v25.ATpJ5 = "";                                     // #139760:168:199 [L d1 h1 c1]
    fn_v113 = cell[4];                                  // #139764:188:233 #139774:55:236 [L d1 h1 c1]
    v30 = undefined;                                    // #139777:207:233 [L d1 h1 c1]
    v31 = KP(139779);                                   // #139780:7:233 [L d1 h1 c1]
    v114 = cell[3];                                     // #139886:22:236 [L d1 h1 c1]
    v32 = MC(undefined, fn_v113, v31, v114);            // #139889:117:168 [L d1 h1 c1]
    v25.umMaC3 = v32;                                   // #139895:123:199 [L d1 h1 c1]
    v115 = undefined;                                   // #139899:3:233 #139909:107:233 [L d1 h1 c1]
    v116 = KP(139911);                                  // #139912:51:233 [L d1 h1 c1]
    v33 = MC(undefined, fn_v113, v116, v114);           // #140018:94:168 [L d1 h1 c1]
    v25.EHIFA6 = v33;                                   // #140024:0:199 [L d1 h1 c1]
    win_v34 = v125[v128];                               // #140028:218:7 [L d1 h1 c1]
    if (win_v34.fetch) {                                // #140032:201:200 #140037:52:160 [L d1 h1 c1]
      win_v35 = v125[v128];                             // #140048:234:7 [L d1 h1 c1]
      if (win_v35.isSecureContext) {                    // #140052:153:200 #140057:196:160 [L d1 h1 c1]
        v36 = {};                                       // #140068:39:159 [L d1 h1 c1]
        v37 = "fetch";                                  // #140070:255:233 [L d1 h1 c1]
        fn_v38 = clos;                                  // #140075:106:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v38 = its home register (H139 CLOS bind)
        v36[v37] = fn_v38;                              // #140085:220:199 [L d1 h1 c1]
        v39 = "asyncWaitReplay";                        // #140089:32:233 [L d1 h1 c1]
        fn_v40 = clos;                                  // #140094:71:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v40 = its home register (H139 CLOS bind)
        v36[v39] = fn_v40;                              // #140108:133:199 [L d1 h1 c1]
        cell[18] = v36;                                 // #140112:87:195 [L d1 h1 c1]
        fn_v41 = v125.Date;                             // #140115:146:200 [L d1 h1 c1]
        v42 = fn_v41.now();                             // #140120:219:138 [L d1 h1 c1]
        cell[19] = v42;                                 // #140135:213:195 [L d1 h1 c1]
        fn_v43 = v125.URL;                              // #140138:152:200 [L d1 h1 c1]
        v44 = "/cdn-cgi/challenge-platform/h/";         // #140145:236:233 [L d1 h1 c1]
        win_v45 = v125[v128];                           // #140150:22:7 [L d1 h1 c1]
        v46 = win_v45[KP(140153)].ppebL7;               // #140154:21:200 #140159:216:200 [L d1 h1 c1]
        v47 = "/cdn-cgi/challenge-platform/h/" + v46;      // #140169:141:222 [L d1 h1 c1]
        v117 = KP(140172);                              // #140173:77:233 [L d1 h1 c1]
        v48 = cell[3];                                  // #140471:196:236 [L d1 h1 c1]
        v49 = cell[4](v117, v48);                       // #140474:141:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r196; then v49 = r196 (H142 CALL bind)
        v50 = v47 + v49;                                // #140479:174:222 [L d1 h1 c1]
        v51 = v25.rhUgi8;                               // #140483:77:200 [L d1 h1 c1]
        v52 = v50 + v51;                                // #140488:110:222 [L d1 h1 c1]
        doc_v53 = v125.document;                        // #140492:13:200 [L d1 h1 c1]
        v54 = doc_v53.baseURI;                          // #140497:240:200 [L d1 h1 c1]
        uRL_v55 = new fn_v43(v52, v54);                 // #140508:156:1 [L d1 h1 c1]
        v56 = uRL_v55.href;                             // #140514:3:200 [L d1 h1 c1]
        cell[21] = v56;                                 // #140522:93:195 [L d1 h1 c1]
        v57 = {};                                       // #140525:59:159 [L d1 h1 c1]
        v58 = "cache";                                  // #140527:195:233 [L d1 h1 c1]
        v59 = "no-cache";                               // #140536:43:233 [L d1 h1 c1]
        v57.cache = "no-cache";                         // #140548:217:199 [L d1 h1 c1]
        v60 = "redirect";                               // #140552:105:233 [L d1 h1 c1]
        v61 = "follow";                                 // #140564:185:233 [L d1 h1 c1]
        v57.redirect = "follow";                        // #140574:175:199 [L d1 h1 c1]
        cell[22] = v57;                                 // #140578:89:195 [L d1 h1 c1]
        v62 = cell[1];                                  // #140581:160:236 [L d1 h1 c1]
        worker_v63 = cell[1].WdGLU4;                    // #140584:247:200 [L d1 h1 c1]
        cell[23] = cell[1].WdGLU4;                      // #140589:129:195 [L d1 h1 c1]
        fn_v64 = v125.Promise;                          // #140592:148:200 [L d1 h1 c1]
        fn_v65 = clos;                                  // #140597:235:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v65 = its home register (H139 CLOS bind)
        promise_v66 = new fn_v64(fn_v65);               // #140612:107:1 [L d1 h1 c1]
        fn_v67 = promise_v66.then;                      // #140617:86:200 [L d1 h1 c1]
        fn_v68 = clos;                                  // #140622:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v68 = its home register (H139 CLOS bind)
        promise_v69 = fn_v67.call(promise_v66, fn_v68);      // #140636:226:138 [L d1 h1 c1]
        promise_v70 = promise_v69;                      // #140654:199:150 [L d1 h1 c1]
        fn_v71 = promise_v69.then;                      // #140657:66:200 [L d1 h1 c1]
        fn_v72 = clos;                                  // #140662:97:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v72 = its home register (H139 CLOS bind)
        promise_v73 = fn_v71.call(promise_v70, fn_v72);      // #140676:46:138 [L d1 h1 c1]
        fn_v74 = promise_v73.catch;                     // #140694:205:200 [L d1 h1 c1]
        fn_v75 = clos;                                  // #140699:128:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v75 = its home register (H139 CLOS bind)
        promise_v76 = fn_v74.call(promise_v73, fn_v75);      // #140713:145:138 [L d1 h1 c1]
        arr_v77 = cell[6];                              // #140732:248:236 [L d1 h1 c1]
        arr_v118 = cell[6];                             // #140735:5:150 [L d1 h1 c1]
        fn_v78 = arr_v118[v112];                        // #140738:11:7 [L d1 h1 c1]
        v79 = {};                                       // #140742:177:159 [L d1 h1 c1]
        v79.aJBc6 = promise_v76;                        // #140744:50:142 [L d1 h1 c1]
        v79.hwqjX1 = v42;                               // #140749:239:142 [L d1 h1 c1]
        v80 = 2000;                                     // #140759:167:233 #140764:127:233 [L d1 h1 c1]
        v79.AzXDU3 = 2000;                              // #140769:221:199 [L d1 h1 c1]
        v81 = "Kavdk6";                                 // #140773:93:233 [L d1 h1 c1]
        v119 = cell[1][v111];                           // #140778:148:236 #140781:30:7 [L d1 h1 c1]
        v79.Kavdk6 = v119;                              // #140785:192:199 [L d1 h1 c1]
        v82 = "LfFR4";                                  // #140789:116:233 [L d1 h1 c1]
        fn_v120 = clos;                                 // #140794:75:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v120 = its home register (H139 CLOS bind)
        v79[v82] = fn_v120;                             // #140807:121:199 [L d1 h1 c1]
        v83 = fn_v78.call(arr_v118, v79);               // #140811:230:138 [L d1 h1 c1] +#140829:158:53
      } else {
        v84 = "I";                                      // #140063:132:53 #140834:77:233 #140839:13:233 [-] /* never executed in any replay */
        v25.ATpJ5 = "I";                                // #140844:82:210 [-] /* never executed in any replay */
      }
    } else {
      v85 = "N";                                        // #140043:52:53 #140857:243:233 #140862:155:233 [-] /* never executed in any replay */
      v25.ATpJ5 = "N";                                  // #140867:40:210 [-] /* never executed in any replay */
    }
    v86 = cell[15];                                     // #140875:37:236 [L d1 h1 c1]
    v87 = 0; if (v86[v127] === 0) {                     // #140878:171:7 #140882:95:69 [L d1 h1 c1]
      v86[v127] = 3;                                    // #140900:16:103 [L d1 h1 c1]
      v86[v110] = ("");                                 // #140905:132:233 #140909:173:210 [L d1 h1 c1]
    }
    arr_v88 = tryStack.pop();                                // #140917:254:124 [L d1 h1 c1]
    arr_v104 = cell[0];                                 // #140920:86:53 #141130:12:236 [L d1 h1 c1]
    v105 = 1;                                           // #141133:51:72 [L d1 h1 c1]
    v121 = arr_v104[1];                                 // #141136:1:7 [L d1 h1 c1]
    v106 = arr_v104[v121];                              // #141140:23:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #141144:14:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v107 = 1;                                         // #141180:65:72 [L d1 h1 c1]
      v108 = arr_v104[1];                               // #141183:87:7 [L d1 h1 c1]
      v122 = "dWGy5";                                   // #141187:111:233 [L d1 h1 c1]
      arr_v104[v108] = "dWGy5";                         // #141196:172:210 [L d1 h1 c1]
    } else {
      // #141170:38:53 [-] /* never executed in any replay */
    }
    win_v109 = v125[v128];                              // #141204:180:7 [L d1 h1 c1]
    v123 = win_v109.qwQRi7();                           // #141208:245:138 [L d1 h1 c1]
    v124 = undefined;                                   // #141226:21:233 [L d1 h1 c1]
    return v124;                                        // #141229:145:245 [L d1 h1 c1]
  } catch (caught) {
    v89 = caught;                                         // #140925:208:150 [-] /* never executed in any replay */
    v90 = r70[r221];                                    // #140928:106:7 [-] /* never executed in any replay */
    v91 = KP(m140931k106);                              // #140932:246:233 [-] /* never executed in any replay */
    v92 = MC(v90, r209, v91);                           // #141005:247:114 [-] /* never executed in any replay */
    v93 = r70[r221];                                    // #141010:181:7 [-] /* never executed in any replay */
    v94 = v93;                                          // #141014:14:150 [-] /* never executed in any replay */
    v95 = (v94)[KP(m141016k14)](v89);                   // #141017:103:138 [-] /* never executed in any replay */
    v96 = r70[r221];                                    // #141036:101:7 [-] /* never executed in any replay */
    v97 = v96;                                          // #141040:254:150 [-] /* never executed in any replay */
    v98 = v97[KP(m141042k254)];                         // #141043:93:200 [-] /* never executed in any replay */
    v99 = cell[15];                                     // #141048:148:236 [-] /* never executed in any replay */
    v100 = KP(m141050k148);                             // #141051:248:233 [-] /* never executed in any replay */
    v101 = cell[5];                                     // #141056:131:236 [-] /* never executed in any replay */
    v102 = v98.call(v97, v95, v99, v100, v101);         // #141059:72:138 [-] /* never executed in any replay */
    v103 = 1; v99[r217] = 1;                            // #141081:226:103 [-] /* never executed in any replay */
    if (v89[KP(m141085k226)]) {                         // #141086:177:200 #141091:124:160 [-] /* never executed in any replay */
      outside("L141116_132");                           // #141114:132:150 [-]  L141116_132 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L141096_124");  // L141096_124 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}