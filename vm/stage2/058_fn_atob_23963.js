function fn_atob_23963(win_v99 /* r70 */, v100 /* r209 */, v101 /* r214 */, v102 /* r220 */, v103 /* r221 */, v104 /* r223 */) { // entry L23953_65; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 114 register webs used only inside this fn (no live-in, cross-call or table-made def; 16 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 9 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r193 */, v2 /* r196 */, v3 /* r205 */, win_v4 /* r196 */, v5 /* r205 */, v6 /* r199 */, v7 /* r204 */, fn_v8 /* r198 */, v9 /* r204 */, v10 /* r199 */;
  let v11 /* r205 */, v12 /* r199 */, v13 /* r205 */, arr_v14 /* r204 */, arr_v15 /* r205 */, fn_v16 /* r204 */, v17 /* r205 */, v18 /* r193 */, v19 /* r195 */, v20 /* r205 */;
  let arr_v21 /* r204 */, v22 /* r199 */, v23 /* r205 */, arr_v24 /* r205 */, arr_v25 /* r199 */, fn_v26 /* r198 */, arr_v27 /* r204 */, v28 /* r196 */, promise_v29 /* r205 */, v30 /* r204 */;
  let fn_v31 /* r204 */, fn_v32 /* r195 */, fn_v33 /* r202 */, v34 /* r204 */, v35 /* r205 */, v36 /* r204 */, v37 /* r205 */, v38 /* r204 */, v39 /* r202 */, v40 /* r204 */;
  let v41 /* r196 */, v42 /* r199 */, v43 /* r204 */, v44 /* r202 */, promise_v45 /* r205 */, v46 /* r202 */, v47 /* r204 */, v48 /* r199 */, v49 /* r198 */, v50 /* r204 */;
  let v51 /* r202 */, v52 /* r199 */, v53 /* r204 */, v54 /* r202 */, arr_v55 /* r204 */, promise_v56 /* r199 */, fn_v57 /* r198 */, fn_v58 /* r204 */, promise_v59 /* r202 */, fn_v60 /* r199 */;
  let fn_v61 /* r204 */, arr_v62 /* r202 */, arr_v63 /* r199 */, fn_v64 /* r202 */, v65 /* r204 */, v66 /* r205 */, v67 /* r198 */, v68 /* r198 */, v69 /* r205 */, v70 /* r195 */;
  let v71 /* r205 */, v72 /* r198 */, v73 /* r195 */, arr_v74 /* r193 */, v75 /* r195 */, v76 /* r196 */, v77 /* r195 */, v78 /* r196 */, v79 /* r195 */, v80 /* r205 */;
  let win_v81 /* r205 */, win_v82 /* r204 */, fn_v83 /* r202 */, v84 /* r205 */, v85 /* r199 */, fn_v86 /* r205 */, fn_v87 /* r204 */, promise_v88 /* r205 */, arr_v89 /* r202 */, v90 /* r204 */;
  let v91 /* r205 */, v92 /* r198 */, v93 /* r198 */, v94 /* r205 */, v95 /* r196 */, v96 /* r205 */, v97 /* r205 */, fn_v98 /* r205 */, v105 /* r254 */, v106 /* r192 */;
  let v107 /* r193 */, arr_v108 /* r199 */, fn_v109 /* r202 */, v110 /* r198 */, v111 /* r196 */, v112 /* r195 */, v113 /* r204 */, v114 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 3, win_v81 3, win_v82 3, win_v99 3
  //   Function: fn_v8 3, fn_v16 3, fn_v26 192, fn_v31 3, fn_v32 3, fn_v33 3, fn_v57 3, fn_v58 3
  //   Function: fn_v60 3, fn_v61 3, fn_v64 3, fn_v83 3, fn_v86 3, fn_v87 3, fn_v98 3, fn_v109 3
  //   Array: arr_v14 3, arr_v15 3, arr_v21 195, arr_v24 192, arr_v25 192, arr_v27 192, arr_v55 3, arr_v62 3
  //   Array: arr_v63 3, arr_v74 3, arr_v89 3, arr_v108 3
  //   Promise: promise_v29 192, promise_v45 3, promise_v56 3, promise_v59 3, promise_v88 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 9 constants propagated (9 uses), 5 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(19, 20, 21, 22, 30, 31);                           // #23954:77:53 #23964:65:211 [L d1 h1 c1]
  v1 = undefined;                                       // #23972:49:233 [L d1 h1 c1]
  v2 = undefined;                                       // #23975:97:233 #23978:209:233 [L d1 h1 c1]
  v3 = undefined;                                       // #23981:129:233 [L d1 h1 c1]
  clos;                                                 // #23984:100:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #23994:123:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #24005:246:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #24028:69:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #24041:24:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #24054:95:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  cell[30] = r204;                                      // #24079:73:195 [L d1 h1 c1]
  cell[31] = r195;                                      // #24082:11:195 [L d1 h1 c1]
  win_v4 = win_v99.globalThis;                          // #24085:118:200 [L d1 h1 c1]
  cell[19] = win_v4;                                    // #24090:196:195 [L d1 h1 c1]
  v5 = cell[1];                                         // #24093:31:236 [L d1 h1 c1]
  v6 = v5[v102];                                        // #24096:61:7 [L d1 h1 c1]
  v7 = v5[v6];                                          // #24100:99:7 [L d1 h1 c1]
  cell[20] = v7;                                        // #24104:61:195 [L d1 h1 c1]
  fn_v8 = clos;                                         // #24107:48:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v8 = its home register (H139 CLOS bind)
  v9 = undefined;                                       // #24121:36:233 [L d1 h1 c1]
  v10 = KP(24123);                                      // #24124:72:233 [L d1 h1 c1]
  v11 = win_v4.atob(v10);                               // #25097:57:138 [L d1 h1 c1]
  v12 = MC(undefined, fn_v8, v11);                      // #25114:238:114 [L d1 h1 c1]
  v13 = "q";                                            // #25119:106:233 [L d1 h1 c1]
  arr_v14 = v12.split(("q"));                           // #25124:83:138 [L d1 h1 c1]
  cell[21] = arr_v14;                                   // #25142:109:195 [L d1 h1 c1]
  arr_v15 = [];                                         // #25145:167:107 [L d1 h1 c1]
  cell[22] = arr_v15;                                   // #25147:113:195 [L d1 h1 c1]
  fn_v16 = win_v99.FontFace;                            // #25150:196:200 [L d1 h1 c1]
  v17 = typeof fn_v16;                                  // #25155:224:193 [L d1 h1 c1]
  L25273_141: {
    if (v17 === v101) {                                 // #25158:236:161 [L d1 h1 c1]
      v18 = 0;                                          // #25175:31:72 [L d1 h1 c1]
      v105 = 1;                                         // #25178:186:72 [L d1 h1 c1]
      v106 = "length";                                  // #25181:6:233 [L d1 h1 c1]
      v19 = undefined;                                  // #25186:34:233 [L d1 h1 c1] +#25189:234:53
      while ((arr_v21 = cell[21], v22 = arr_v21.length, v23 = v18 < v22, v18 < v22)) {  // #25204:86:236 | #25207:88:7 | #25211:121:186 [L d65 h65 c65]
        arr_v24 = cell[22];                             // #25229:137:236 [L d64 h64 c64]
        arr_v25 = cell[22];                             // #25232:146:150 [L d64 h64 c64]
        fn_v26 = arr_v25[v104];                         // #25235:164:7 [L d64 h64 c64]
        arr_v27 = cell[21];                             // #25239:127:236 [L d64 h64 c64]
        v28 = arr_v27[v18];                             // #25242:29:7 [L d64 h64 c64]
        promise_v29 = MC(undefined, r202, v28);         // #25246:66:114 [L d64 h64 c64]
        v30 = fn_v26.call(arr_v25, promise_v29);        // #25251:203:138 [L d64 h64 c64]
        v20 = v18; v18 = v18 + 1;                       // #25269:47:53 #25194:205:48 [L d64 h64 c64]
      }
      break L25273_141;
    }
  }
  clos;                                                 // #25274:64:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #25284:231:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #25295:178:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v31 = clos;                                        // #25318:17:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v31 = its home register (H139 CLOS bind)
  cell[30] = fn_v31;                                    // #25331:179:195 [L d1 h1 c1]
  fn_v32 = clos;                                        // #25334:78:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v32 = its home register (H139 CLOS bind)
  cell[31] = fn_v32;                                    // #25347:60:195 [L d1 h1 c1]
  fn_v33 = win_v99.FontFace;                            // #25350:35:200 [L d1 h1 c1]
  v34 = typeof fn_v33;                                  // #25355:131:193 [L d1 h1 c1]
  if (v101 === v34) {                                   // #25358:195:161 [L d1 h1 c1]
    v41 = "hZJVA4";                                     // #25576:55:233 [L d1 h1 c1]
    v54 = undefined;                                    // #25586:207:233 [L d1 h1 c1]
    arr_v55 = cell[21];                                 // #25589:190:236 [L d1 h1 c1]
    promise_v56 = MC(undefined, r205, arr_v55);         // #25592:159:114 [L d1 h1 c1]
    fn_v57 = promise_v56.then;                          // #25597:186:200 [L d1 h1 c1]
    fn_v58 = clos;                                      // #25602:249:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v58 = its home register (H139 CLOS bind)
    promise_v59 = fn_v57.call(promise_v56, fn_v58);     // #25615:102:138 [L d1 h1 c1]
    fn_v60 = promise_v59.catch;                         // #25633:37:200 [L d1 h1 c1]
    fn_v61 = clos;                                      // #25638:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v61 = its home register (H139 CLOS bind)
    promise_v45 = fn_v60.call(promise_v59, fn_v61);     // #25651:169:138 [L d1 h1 c1] +#25670:21:53
  } else {
    v35 = win_v99.document;                             // #25366:71:53 #25371:126:200 [-] /* never executed in any replay */
    v36 = v35.fonts;                                    // #25376:221:200 [-] /* never executed in any replay */
    if (v36) {                                          // #25381:248:160 [-] /* never executed in any replay */
      v38 = win_v99.document;                           // #25400:192:200 [-] /* never executed in any replay */
      v39 = v38.fonts;                                  // #25405:151:200 [-] /* never executed in any replay */
      v40 = (v38.fonts).check;                          // #25410:210:200 [-] /* never executed in any replay */
      v37 = v40;                                        // #25419:247:150 [-] +#25422:171:53 /* never executed in any replay */
    } else {
      v37 = v36;                                        // #25387:232:53 #25392:196:150 [-] +#25395:132:53 /* never executed in any replay */
    }
    if (v37) {                                          // #25427:12:160 [-] /* never executed in any replay */
      v41 = "gFZWz5";                                   // #25474:153:233 [-] /* never executed in any replay */
      v46 = undefined;                                  // #25484:41:233 [-] /* never executed in any replay */
      v47 = cell[21];                                   // #25487:48:236 [-] /* never executed in any replay */
      v48 = MC(undefined, r198, v47);                   // #25490:201:114 [-] /* never executed in any replay */
      v49 = v48.then;                                   // #25495:188:200 [-] /* never executed in any replay */
      v50 = clos;                                       // #25500:115:216 [-]  closure creation (operands from the byte stream); then v50 = its home register (H139 CLOS bind) /* never executed in any replay */
      v51 = v49.call(v48, v50);                         // #25511:120:138 [-] /* never executed in any replay */
      v52 = v51.catch;                                  // #25529:111:200 [-] /* never executed in any replay */
      v53 = clos;                                       // #25534:26:216 [-]  closure creation (operands from the byte stream); then v53 = its home register (H139 CLOS bind) /* never executed in any replay */
      promise_v45 = v52.call(v51, v53);                 // #25547:67:138 [-] +#25566:199:53 /* never executed in any replay */
    } else {
      v41 = "HUSWS0";                                   // #25433:172:53 #25438:175:233 [-] /* never executed in any replay */
      v42 = undefined;                                  // #25448:103:233 [-] /* never executed in any replay */
      v43 = [];                                         // #25451:57:107 [-] /* never executed in any replay */
      v44 = "HUSWS0";                                   // #25453:73:233 [-] /* never executed in any replay */
      promise_v45 = MC(undefined, fn_v32, v43, "HUSWS0");  // #25463:156:168 [-] +#25469:252:53 /* never executed in any replay */
    }
  }
  arr_v62 = cell[6];                                    // #25675:85:236 [L d1 h1 c1]
  arr_v63 = cell[6];                                    // #25678:46:150 [L d1 h1 c1]
  fn_v64 = arr_v63[v104];                               // #25681:208:7 [L d1 h1 c1]
  v65 = {};                                             // #25685:162:159 [L d1 h1 c1]
  v65.aJBc6 = promise_v45;                              // #25687:159:142 [L d1 h1 c1]
  v66 = "AzXDU3";                                       // #25692:151:233 [L d1 h1 c1]
  v67 = 2000;                                           // #25697:175:233 [L d1 h1 c1]
  v65.AzXDU3 = 2000;                                    // #25702:77:199 [L d1 h1 c1]
  v68 = "Kavdk6";                                       // #25706:13:233 [L d1 h1 c1]
  v69 = cell[1];                                        // #25711:132:236 [L d1 h1 c1]
  v70 = v69[v102];                                      // #25714:78:7 [L d1 h1 c1]
  v65.Kavdk6 = v70;                                     // #25718:48:199 [L d1 h1 c1]
  v71 = "LfFR4";                                        // #25722:36:233 [L d1 h1 c1]
  v72 = {};                                             // #25727:166:159 [L d1 h1 c1]
  v73 = "fzAb4";                                        // #25729:66:233 [L d1 h1 c1]
  arr_v74 = [];                                         // #25738:104:107 [L d1 h1 c1]
  v72.fzAb4 = arr_v74;                                  // #25740:98:199 [L d1 h1 c1]
  v75 = "kxzY1";                                        // #25744:14:233 [L d1 h1 c1]
  v107 = 0; v72.kxzY1 = 0;                              // #25753:16:103 [L d1 h1 c1]
  v72.rIKdw5 = v41;                                     // #25758:213:142 [L d1 h1 c1]
  v76 = "LvRtb9";                                       // #25768:117:233 [L d1 h1 c1]
  v77 = "YCHyc3";                                       // #25778:149:233 [L d1 h1 c1]
  v72.LvRtb9 = "YCHyc3";                                // #25788:27:199 [L d1 h1 c1]
  v78 = "pROfm6";                                       // #25792:35:233 [L d1 h1 c1]
  v79 = "RZlN0";                                        // #25797:11:233 [L d1 h1 c1]
  v72.pROfm6 = "RZlN0";                                 // #25806:57:199 [L d1 h1 c1]
  v65.LfFR4 = v72;                                      // #25810:47:199 [L d1 h1 c1]
  v80 = fn_v64.call(arr_v63, v65);                      // #25814:68:138 [L d1 h1 c1]
  win_v81 = win_v99[v103];                              // #25832:14:7 [L d1 h1 c1]
  win_v82 = win_v81;                                    // #25836:67:150 [L d1 h1 c1]
  fn_v83 = win_v82[v100];                               // #25839:209:7 [L d1 h1 c1]
  v84 = KP(25842);                                      // #25843:129:233 [L d1 h1 c1]
  v85 = fn_v83.call(win_v82, v84);                      // #25916:206:138 [L d1 h1 c1]
  fn_v86 = win_v99.Promise;                             // #25936:237:200 [L d1 h1 c1]
  fn_v87 = clos;                                        // #25941:32:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v87 = its home register (H139 CLOS bind)
  promise_v88 = new fn_v86(fn_v87);                     // #25970:12:1 [L d1 h1 c1]
  arr_v89 = cell[6];                                    // #25975:71:236 [L d1 h1 c1]
  arr_v108 = cell[6];                                   // #25978:216:150 [L d1 h1 c1]
  fn_v109 = arr_v108[v104];                             // #25981:82:7 [L d1 h1 c1]
  v90 = {};                                             // #25985:156:159 [L d1 h1 c1]
  v90.aJBc6 = promise_v88;                              // #25987:49:142 [L d1 h1 c1]
  v91 = "AzXDU3";                                       // #25992:97:233 [L d1 h1 c1]
  v92 = 2000;                                           // #25997:209:233 [L d1 h1 c1]
  v90.AzXDU3 = 2000;                                    // #26002:103:199 [L d1 h1 c1]
  v93 = "Kavdk6";                                       // #26006:63:233 [L d1 h1 c1]
  v94 = cell[1];                                        // #26011:110:236 [L d1 h1 c1]
  v95 = v94[v102];                                      // #26014:16:7 [L d1 h1 c1]
  v90.Kavdk6 = v95;                                     // #26018:106:199 [L d1 h1 c1]
  v96 = "LfFR4";                                        // #26022:246:233 [L d1 h1 c1]
  v110 = {};                                            // #26027:176:159 [L d1 h1 c1]
  v111 = "lqHqI0";                                      // #26029:164:233 [L d1 h1 c1]
  v112 = "UFVbB0";                                      // #26039:200:233 [L d1 h1 c1]
  v110.lqHqI0 = "UFVbB0";                               // #26049:66:199 [L d1 h1 c1]
  v90.LfFR4 = v110;                                     // #26053:84:199 [L d1 h1 c1]
  v97 = fn_v109.call(arr_v108, v90);                    // #26057:21:138 [L d1 h1 c1]
  fn_v98 = clos;                                        // #26075:168:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v98 = its home register (H139 CLOS bind)
  v113 = fn_v98();                                      // #26100:36:113 [L d1 h1 c1]
  v114 = undefined;                                     // #26104:72:233 [L d1 h1 c1]
  return v114;                                          // #26107:184:245 [L d1 h1 c1]
}