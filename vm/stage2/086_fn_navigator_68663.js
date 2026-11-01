function fn_navigator_68663(win_v99 /* r70 */, v100 /* r209 */, v101 /* r220 */, v102 /* r221 */, v103 /* r223 */) { // entry L68653_223; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 126 register webs used only inside this fn (no live-in, cross-call or table-made def; 28 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 18 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r193 */, v4 /* r195 */, v5 /* r196 */, v6 /* r198 */, v7 /* r205 */, win_v8 /* r205 */, win_v9 /* r205 */, win_v10 /* r204 */;
  let fn_v11 /* r202 */, v12 /* r205 */, v13 /* r199 */, v14 /* r205 */, v15 /* r205 */, v16 /* r205 */, v17 /* r205 */, v18 /* r205 */, v19 /* r205 */, v20 /* r205 */;
  let v21 /* r205 */, v22 /* r205 */, v23 /* r205 */, v24 /* r205 */, v25 /* r205 */, v26 /* r205 */, v27 /* r205 */, v28 /* r205 */, v29 /* r205 */, v30 /* r205 */;
  let v31 /* r204 */, v32 /* r204 */, promise_v33 /* r205 */, win_v34 /* r204 */, v35 /* r202 */, v36 /* r202 */, v37 /* r204 */, navigator_v38 /* r202 */, gPU_v39 /* r204 */, v40 /* r205 */;
  let v41 /* r204 */, v42 /* r204 */, v43 /* r204 */, v44 /* r205 */, v45 /* r204 */, arr_v46 /* r205 */, v47 /* r205 */, v48 /* r205 */, v49 /* r202 */, v50 /* r204 */;
  let v51 /* r204 */, v52 /* r202 */, v53 /* r204 */, v54 /* r205 */, arr_v55 /* r205 */, v56 /* r202 */, v57 /* r204 */, v58 /* r202 */, v59 /* r204 */, v60 /* r205 */;
  let v61 /* r204 */, v62 /* r205 */, v63 /* r205 */, win_v64 /* r204 */, fn_v65 /* r205 */, v66 /* r205 */, fn_v67 /* r205 */, v68 /* r204 */, dec_v69 /* r205 */, fn_v70 /* r198 */;
  let fn_v71 /* r193 */, fn_v72 /* r204 */, v73 /* r198 */, v74 /* r198 */, promise_v75 /* r196 */, promise_v76 /* r198 */, v77 /* r199 */, v78 /* r202 */, v79 /* r204 */, fn_v80 /* r205 */;
  let fn_v81 /* r204 */, fn_v82 /* r199 */, arr_v83 /* r205 */, v84 /* r202 */, v85 /* r202 */, v86 /* r202 */, v87 /* r202 */, promise_v88 /* r202 */, fn_v89 /* r199 */, fn_v90 /* r204 */;
  let promise_v91 /* r205 */, arr_v92 /* r202 */, v93 /* r205 */, v94 /* r198 */, v95 /* r198 */, v96 /* r205 */, v97 /* r205 */, v98 /* r205 */, promise_v104 /* r229 */, fn_v105 /* r230 */;
  let fn_v106 /* r231 */, fn_v107 /* r232 */, fn_v108 /* r236 */, fn_v109 /* r237 */, fn_v110 /* r238 */, fn_v111 /* r240 */, fn_v112 /* r242 */, fn_v113 /* r244 */, fn_v114 /* r245 */, fn_v115 /* r246 */;
  let fn_v116 /* r247 */, fn_v117 /* r250 */, fn_v118 /* r252 */, promise_v119 /* r193 */, promise_v120 /* r195 */, arr_v121 /* r199 */, fn_v122 /* r202 */, v123 /* r204 */, v124 /* r196 */, fn_v125 /* r198 */;
  let v126 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v8 3, win_v9 3, win_v10 3, win_v34 3, win_v64 3, win_v99 3
  //   Function: fn_v11 3, fn_v65 3, fn_v67 3, fn_v70 3, fn_v71 3, fn_v72 3, fn_v80 3, fn_v81 3
  //   Function: fn_v82 3, fn_v89 3, fn_v90 3, fn_v105 3, fn_v106 3, fn_v107 3, fn_v108 3, fn_v109 3
  //   Function: fn_v110 3, fn_v111 3, fn_v112 3, fn_v113 3, fn_v114 3, fn_v115 3, fn_v116 3, fn_v117 3
  //   Function: fn_v118 3, fn_v122 3, fn_v125 3
  //   Promise: promise_v33 3, promise_v75 3, promise_v76 3, promise_v88 3, promise_v91 3, promise_v104 3, promise_v119 3, promise_v120 3
  //   Navigator: navigator_v38 3
  //   GPU: gPU_v39 3
  //   Array: arr_v46 3, arr_v55 3, arr_v83 3, arr_v92 3, arr_v121 3
  //   TextDecoder: dec_v69 3
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 21 dead register writes dropped, 4 constants propagated (4 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 66, 67, 68, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 83, 86);  // #68654:243:53 #68664:222:211 [L d1 h1 c1]
  v1 = undefined;                                       // #68723:154:233 #68726:102:233 #68729:2:233 #68732:46:233 #68735:170:233 #68738:54:233 #68741:146:233 #68744:126:233 #68747:186:233 #68750:6:233 #68753:34:233 #68756:206:233 #68759:202:233 #68762:214:233 #68765:178:233 #68768:30:233 [L d1 h1 c1]
  v2 = undefined;                                       // #68771:218:233 #68774:166:233 [L d1 h1 c1]
  v3 = undefined;                                       // #68777:66:233 #68780:110:233 #68783:234:233 #68786:118:233 #68789:210:233 #68792:190:233 [L d1 h1 c1]
  v4 = undefined;                                       // #68795:250:233 [L d1 h1 c1]
  v5 = undefined;                                       // #68798:70:233 [L d1 h1 c1]
  v6 = undefined;                                       // #68801:98:233 [L d1 h1 c1]
  v7 = undefined;                                       // #68804:14:233 [L d1 h1 c1]
  clos;                                                 // #68807:253:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68822:240:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68839:215:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68853:226:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68869:129:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68885:100:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68897:123:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68909:246:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68923:69:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68935:24:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68949:95:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68972:74:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #68990:73:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69004:12:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69021:131:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69033:222:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69066:141:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69100:64:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69121:231:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69156:178:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69184:17:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69196:180:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69226:139:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69238:198:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #69264:213:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  cell[66] = r230;                                      // #69296:103:195 [L d1 h1 c1]
  cell[67] = r231;                                      // #69299:49:195 [L d1 h1 c1]
  cell[68] = r232;                                      // #69302:83:195 [L d1 h1 c1]
  cell[70] = r236;                                      // #69305:109:195 [L d1 h1 c1]
  cell[71] = r237;                                      // #69308:159:195 [L d1 h1 c1]
  cell[72] = r238;                                      // #69311:137:195 [L d1 h1 c1]
  cell[73] = r240;                                      // #69314:75:195 [L d1 h1 c1]
  cell[74] = r242;                                      // #69317:133:195 [L d1 h1 c1]
  cell[75] = r244;                                      // #69320:87:195 [L d1 h1 c1]
  cell[76] = r245;                                      // #69323:97:195 [L d1 h1 c1]
  cell[77] = r246;                                      // #69326:195:195 [L d1 h1 c1]
  cell[78] = r247;                                      // #69329:29:195 [L d1 h1 c1]
  cell[79] = r250;                                      // #69332:143:195 [L d1 h1 c1]
  cell[80] = r198;                                      // #69335:185:195 [L d1 h1 c1]
  cell[83] = r252;                                      // #69338:187:195 [L d1 h1 c1]
  cell[86] = r193;                                      // #69341:53:195 [L d1 h1 c1]
  win_v8 = win_v99.globalThis;                          // #69344:120:200 [L d1 h1 c1]
  cell[19] = win_v8;                                    // #69349:62:195 [L d1 h1 c1]
  win_v9 = win_v99[v102];                               // #69352:160:7 [L d1 h1 c1]
  win_v10 = win_v9;                                     // #69356:13:150 [L d1 h1 c1]
  fn_v11 = win_v10[v100];                               // #69359:243:7 [L d1 h1 c1]
  v12 = KP(69362);                                      // #69363:155:233 [L d1 h1 c1]
  v13 = fn_v11.call(win_v10, v12);                      // #69416:0:138 [L d1 h1 c1]
  v14 = {};                                             // #69436:18:159 [L d1 h1 c1]
  cell[27] = v14;                                       // #69438:240:195 [L d1 h1 c1]
  v15 = {};                                             // #69441:66:159 [L d1 h1 c1]
  cell[28] = v15;                                       // #69443:96:195 [L d1 h1 c1]
  v16 = 1;                                              // #69446:55:72 [L d1 h1 c1]
  cell[29] = 1;                                         // #69449:193:195 [L d1 h1 c1]
  v17 = "Acwu3";                                        // #69452:177:233 [L d1 h1 c1]
  cell[30] = "Acwu3";                                   // #69461:211:195 [L d1 h1 c1]
  v18 = "EaMs4";                                        // #69464:251:233 [L d1 h1 c1]
  cell[31] = "EaMs4";                                   // #69473:117:195 [L d1 h1 c1]
  v19 = "tDmL0";                                        // #69476:149:233 [L d1 h1 c1]
  cell[32] = "tDmL0";                                   // #69485:39:195 [L d1 h1 c1]
  v20 = {};                                             // #69488:93:159 [L d1 h1 c1]
  cell[33] = v20;                                       // #69490:207:195 [L d1 h1 c1]
  v21 = {};                                             // #69493:101:159 [L d1 h1 c1]
  cell[34] = v21;                                       // #69495:183:195 [L d1 h1 c1]
  v22 = {};                                             // #69498:173:159 [L d1 h1 c1]
  cell[35] = v22;                                       // #69500:223:195 [L d1 h1 c1]
  v23 = {};                                             // #69503:53:159 [L d1 h1 c1]
  cell[36] = v23;                                       // #69505:71:195 [L d1 h1 c1]
  v24 = {};                                             // #69508:253:159 [L d1 h1 c1]
  cell[37] = v24;                                       // #69510:239:195 [L d1 h1 c1]
  v25 = {};                                             // #69513:5:159 [L d1 h1 c1]
  cell[38] = v25;                                       // #69515:215:195 [L d1 h1 c1]
  v26 = {};                                             // #69518:77:159 [L d1 h1 c1]
  cell[39] = v26;                                       // #69520:255:195 [L d1 h1 c1]
  v27 = {};                                             // #69523:213:159 [L d1 h1 c1]
  cell[40] = v27;                                       // #69525:103:195 [L d1 h1 c1]
  v28 = "";                                             // #69528:63:233 [L d1 h1 c1]
  cell[41] = "";                                        // #69532:169:195 [L d1 h1 c1]
  v29 = null;                                           // #69535:249:233 [L d1 h1 c1]
  cell[42] = null;                                      // #69538:251:195 [L d1 h1 c1]
  v30 = null;                                           // #69541:131:233 [L d1 h1 c1]
  cell[43] = null;                                      // #69544:221:195 [L d1 h1 c1]
  v31 = null;                                           // #69547:93:233 [L d1 h1 c1]
  cell[44] = null;                                      // #69550:207:195 [L d1 h1 c1]
  try {
    TP(tryStack, 69770, 8, callDepths);                            // #69553:188:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    promise_v104 = win_v99[v102].KryNx3;                // #69559:166:7 #69563:101:200 [L d1 h1 c1]
    if (promise_v104) {                                 // #69573:96:160 [L d1 h1 c1]
      promise_v33 = promise_v104;                       // #69595:182:150 [L d1 h1 c1] +#69598:46:53
    } else {
      v32 = null;                                       // #69579:176:53 #69584:48:233 [-] /* never executed in any replay */
      promise_v33 = null;                               // #69587:93:150 [-] +#69590:249:53 /* never executed in any replay */
    }
    cell[43] = promise_v33;                             // #69603:44:195 [L d1 h1 c1]
    win_v34 = win_v99[v102];                            // #69606:86:7 [L d1 h1 c1]
    v35 = win_v34.YkWKI7;                               // #69610:85:200 [L d1 h1 c1]
    if (v35) {                                          // #69620:144:160 [L d1 h1 c1]
      v37 = v35;                                        // #69642:1:150 [-] +#69645:13:53 /* never executed in any replay */
    } else {
      v36 = null;                                       // #69626:32:53 #69631:103:233 [L d1 h1 c1]
      v37 = null;                                       // #69634:120:150 [L d1 h1 c1] +#69637:104:53
    }
    cell[44] = v37;                                     // #69650:109:195 [L d1 h1 c1]
    navigator_v38 = win_v99.navigator;                  // #69653:208:200 [L d1 h1 c1]
    gPU_v39 = navigator_v38.gpu;                        // #69658:103:200 [L d1 h1 c1]
    if (gPU_v39) {                                      // #69665:218:160 [L d1 h1 c1]
      v41 = !promise_v33;                               // #69684:252:130 [L d1 h1 c1]
      v40 = v41;                                        // #69687:249:150 [L d1 h1 c1] +#69690:37:53
    } else {
      v40 = gPU_v39;                                    // #69671:194:53 #69676:220:150 [-] +#69679:60:53 /* never executed in any replay */
    }
    if (v40) {                                          // #69695:186:160 [L d1 h1 c1]
      v43 = win_v99.navigator.gpu;                      // #69714:4:200 #69719:203:200 [-] /* never executed in any replay */
      v44 = v43.requestAdapter();                       // #69726:112:138 [-] /* never executed in any replay */
      cell[43] = v44;                                   // #69752:86:195 [-] /* never executed in any replay */
      v45 = v44;                                        // #69755:107:150 [-] +#69758:79:53 /* never executed in any replay */
    } else {
      v42 = v40;                                        // #69701:34:53 #69706:39:150 [L d1 h1 c1] +#69709:27:53
    }
    arr_v46 = tryStack.pop();                                // #69763:127:124 [L d1 h1 c1]
    v48 = null;                                         // #69766:19:53 #69782:66:233 [L d1 h1 c1]
    cell[46] = null;                                    // #69785:96:195 [L d1 h1 c1]
    v49 = null;                                         // #69788:148:233 [L d1 h1 c1]
    cell[47] = null;                                    // #69791:234:195 [L d1 h1 c1]
    v50 = null;                                         // #69794:118:233 [L d1 h1 c1]
    cell[48] = null;                                    // #69797:196:195 [L d1 h1 c1]
    v51 = null;                                         // #69800:104:233 [L d1 h1 c1]
    cell[49] = null;                                    // #69803:110:195 [L d1 h1 c1]
    v52 = null;                                         // #69806:234:233 [L d1 h1 c1]
    cell[50] = null;                                    // #69809:104:195 [L d1 h1 c1]
    v53 = null;                                         // #69812:124:233 [L d1 h1 c1]
    cell[51] = null;                                    // #69815:50:195 [L d1 h1 c1]
    v54 = null;                                         // #69818:158:233 [L d1 h1 c1]
    cell[52] = null;                                    // #69821:76:195 [L d1 h1 c1]
    arr_v55 = [];                                       // #69824:202:107 [L d1 h1 c1]
    v56 = null;                                         // #69826:214:233 [L d1 h1 c1]
    v57 = 0; arr_v55[0] = null;                         // #69829:95:26 [L d1 h1 c1]
    v58 = null;                                         // #69834:87:233 [L d1 h1 c1]
    v59 = 1; arr_v55[1] = null;                         // #69837:28:26 [L d1 h1 c1]
    cell[53] = arr_v55;                                 // #69842:82:195 [L d1 h1 c1]
    v60 = null;                                         // #69845:62:233 [L d1 h1 c1]
    cell[54] = null;                                    // #69848:108:195 [L d1 h1 c1]
    v61 = null;                                         // #69851:112:233 [L d1 h1 c1]
    cell[55] = null;                                    // #69854:86:195 [L d1 h1 c1]
    v62 = null;                                         // #69857:50:233 [L d1 h1 c1]
    cell[56] = null;                                    // #69860:144:195 [L d1 h1 c1]
    v63 = null;                                         // #69863:4:233 [L d1 h1 c1]
    cell[57] = null;                                    // #69866:154:195 [L d1 h1 c1]
    win_v64 = win_v99[v102];                            // #69869:140:7 [L d1 h1 c1]
    fn_v65 = win_v64.OffscreenCanvas;                   // #69873:51:200 [L d1 h1 c1]
    cell[58] = fn_v65;                                  // #69892:205:195 [L d1 h1 c1]
    v66 = null;                                         // #69895:141:233 [L d1 h1 c1]
    cell[59] = null;                                    // #69898:63:195 [L d1 h1 c1]
    fn_v105 = clos;                                     // #69901:170:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v105 = its home register (H139 CLOS bind)
    cell[66] = fn_v105;                                 // #69916:40:195 [L d1 h1 c1]
    fn_v106 = clos;                                     // #69919:47:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v106 = its home register (H139 CLOS bind)
    cell[67] = fn_v106;                                 // #69936:217:195 [L d1 h1 c1]
    fn_v107 = clos;                                     // #69939:92:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v107 = its home register (H139 CLOS bind)
    cell[68] = fn_v107;                                 // #69953:146:195 [L d1 h1 c1]
    clos;                                               // #69956:113:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v108 = clos;                                     // #69972:148:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v108 = its home register (H139 CLOS bind)
    cell[70] = fn_v108;                                 // #69988:234:195 [L d1 h1 c1]
    fn_v109 = clos;                                     // #69991:105:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v109 = its home register (H139 CLOS bind)
    cell[71] = fn_v109;                                 // #70003:171:195 [L d1 h1 c1]
    fn_v110 = clos;                                     // #70006:102:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v110 = its home register (H139 CLOS bind)
    cell[72] = fn_v110;                                 // #70018:244:195 [L d1 h1 c1]
    fn_v111 = clos;                                     // #70021:203:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v111 = its home register (H139 CLOS bind)
    cell[73] = fn_v111;                                 // #70035:5:195 [L d1 h1 c1]
    fn_v112 = clos;                                     // #70038:216:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v112 = its home register (H139 CLOS bind)
    cell[74] = fn_v112;                                 // #70050:30:195 [L d1 h1 c1]
    fn_v113 = clos;                                     // #70053:205:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v113 = its home register (H139 CLOS bind)
    cell[75] = fn_v113;                                 // #70067:127:195 [L d1 h1 c1]
    fn_v114 = clos;                                     // #70070:234:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v114 = its home register (H139 CLOS bind)
    cell[76] = fn_v114;                                 // #70093:104:195 [L d1 h1 c1]
    fn_v115 = clos;                                     // #70096:111:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v115 = its home register (H139 CLOS bind)
    cell[77] = fn_v115;                                 // #70114:25:195 [L d1 h1 c1]
    fn_v67 = win_v99.TextDecoder;                       // #70117:204:200 [L d1 h1 c1]
    v68 = "iso-8859-1";                                 // #70132:80:233 [L d1 h1 c1]
    dec_v69 = new fn_v67("iso-8859-1");                 // #70146:124:1 [L d1 h1 c1]
    cell[60] = dec_v69;                                 // #70151:50:195 [L d1 h1 c1]
    fn_v116 = clos;                                     // #70154:145:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v116 = its home register (H139 CLOS bind)
    cell[78] = fn_v116;                                 // #70168:51:195 [L d1 h1 c1]
    fn_v117 = clos;                                     // #70171:206:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v117 = its home register (H139 CLOS bind)
    cell[79] = fn_v117;                                 // #70188:188:195 [L d1 h1 c1]
    fn_v70 = clos;                                      // #70191:115:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v70 = its home register (H139 CLOS bind)
    cell[80] = fn_v70;                                  // #70203:13:195 [L d1 h1 c1]
    clos;                                               // #70206:192:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    clos;                                               // #70239:103:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v118 = clos;                                     // #70273:50:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v118 = its home register (H139 CLOS bind)
    cell[83] = fn_v118;                                 // #70294:144:195 [L d1 h1 c1]
    clos;                                               // #70297:247:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    clos;                                               // #70332:130:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v71 = clos;                                      // #70360:161:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v71 = its home register (H139 CLOS bind)
    cell[86] = fn_v71;                                  // #70372:3:195 [L d1 h1 c1]
    clos;                                               // #70375:94:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    clos;                                               // #70405:13:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    clos;                                               // #70417:192:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v72 = clos;                                      // #70443:103:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v72 = its home register (H139 CLOS bind)
    promise_v119 = r253();                              // #70475:167:113 [L d1 h1 c1]
    v73 = r254();                                       // #70479:231:113 [L d1 h1 c1]
    v74 = r195();                                       // #70483:39:113 [L d1 h1 c1]
    promise_v120 = r196();                              // #70487:103:113 [L d1 h1 c1]
    promise_v75 = r192();                               // #70491:167:113 [L d1 h1 c1]
    promise_v76 = r199();                               // #70495:231:113 [L d1 h1 c1]
    v77 = r202();                                       // #70499:39:113 [L d1 h1 c1]
    v78 = fn_v72();                                     // #70503:103:113 [L d1 h1 c1]
    v79 = r205();                                       // #70507:167:113 [L d1 h1 c1]
    fn_v80 = win_v99.Promise;                           // #70511:162:200 [L d1 h1 c1]
    fn_v81 = fn_v80;                                    // #70516:135:150 [L d1 h1 c1]
    fn_v82 = fn_v80.all;                                // #70519:2:200 [L d1 h1 c1]
    arr_v83 = [];                                       // #70526:40:107 [L d1 h1 c1]
    v84 = 0; arr_v83[0] = promise_v119;                 // #70528:233:26 [L d1 h1 c1]
    v85 = 1; arr_v83[1] = promise_v120;                 // #70533:230:26 [L d1 h1 c1]
    v86 = 2; arr_v83[2] = promise_v75;                  // #70538:47:26 [L d1 h1 c1]
    v87 = 3; arr_v83[3] = promise_v76;                  // #70543:148:26 [L d1 h1 c1]
    promise_v88 = fn_v82.call(fn_v81, arr_v83);         // #70548:85:138 [L d1 h1 c1]
    fn_v89 = promise_v88.then;                          // #70565:24:200 [L d1 h1 c1]
    fn_v90 = clos;                                      // #70570:95:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v90 = its home register (H139 CLOS bind)
    promise_v91 = fn_v89.call(promise_v88, fn_v90);     // #70579:180:138 [L d1 h1 c1]
    arr_v92 = cell[6];                                  // #70597:79:236 [L d1 h1 c1]
    arr_v121 = cell[6];                                 // #70600:192:150 [L d1 h1 c1]
    fn_v122 = arr_v121[v103];                           // #70603:154:7 [L d1 h1 c1]
    v123 = {};                                          // #70607:196:159 [L d1 h1 c1]
    v123.aJBc6 = promise_v91;                           // #70609:185:142 [L d1 h1 c1]
    v93 = "AzXDU3";                                     // #70614:201:233 [L d1 h1 c1]
    v94 = 2000;                                         // #70619:153:233 [L d1 h1 c1]
    v123.AzXDU3 = 2000;                                 // #70624:15:199 [L d1 h1 c1]
    v95 = "Kavdk6";                                     // #70628:71:233 [L d1 h1 c1]
    v96 = cell[1];                                      // #70633:86:236 [L d1 h1 c1]
    v124 = v96[v101];                                   // #70636:88:7 [L d1 h1 c1]
    v123.Kavdk6 = v124;                                 // #70640:146:199 [L d1 h1 c1]
    v97 = "LfFR4";                                      // #70644:126:233 [L d1 h1 c1]
    fn_v125 = cell[80];                                 // #70649:113:236 [L d1 h1 c1]
    v123.LfFR4 = cell[80];                              // #70652:135:199 [L d1 h1 c1]
    v98 = fn_v122.call(arr_v121, v123);                 // #70656:60:138 [L d1 h1 c1]
    v126 = undefined;                                   // #70674:0:233 [L d1 h1 c1]
    return v126;                                        // #70677:144:245 [L d1 h1 c1]
  } catch (caught) {
    v47 = caught;                                         // #69771:213:150 [-] /* never executed in any replay */
    cell[44] = v47;                                     // #69774:103:195 [-] /* never executed in any replay */
    outside("L69776_103");  // L69776_103 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}