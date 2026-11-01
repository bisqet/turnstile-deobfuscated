function fn_now_22617(win_v109 /* r70 */, v110 /* r214 */, v111 /* r220 */, v112 /* r223 */) { // entry L22607_187; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 133 register webs used only inside this fn (no live-in, cross-call or table-made def; 25 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 7 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r195 */, v2 /* r205 */, fn_v3 /* r205 */, v4 /* r205 */, v5 /* r204 */, arr_v6 /* r202 */, v7 /* r193 */, v8 /* r195 */, v9 /* r204 */, arr_v10 /* r202 */;
  let v11 /* r193 */, v12 /* r195 */, v13 /* r204 */, arr_v14 /* r202 */, v15 /* r193 */, v16 /* r195 */, v17 /* r205 */, v18 /* r199 */, fn_v19 /* r205 */, v20 /* r198 */;
  let v21 /* r205 */, fn_v22 /* r196 */, fn_v23 /* r205 */, promise_v24 /* r196 */, fn_v25 /* r204 */, fn_v26 /* r205 */, doc_v27 /* r202 */, v28 /* r204 */, canvas_v29 /* r204 */, v30 /* r204 */;
  let arr_v31 /* r205 */, ctx2d_v32 /* r202 */, metrics_v33 /* r204 */, v34 /* r202 */, v35 /* r204 */, arr_v36 /* r195 */, v37 /* r254 */, arr_v38 /* r204 */, v39 /* r202 */, v40 /* r205 */;
  let arr_v41 /* r204 */, v42 /* r205 */, v43 /* r204 */, v44 /* r205 */, arr_v45 /* r204 */, fn_v46 /* r202 */, ctx2d_v47 /* r205 */, metrics_v48 /* r193 */, v49 /* r205 */, v50 /* r193 */;
  let v51 /* r205 */, v52 /* r204 */, arr_v53 /* r202 */, v54 /* r204 */, v55 /* r202 */, arr_v56 /* r204 */, ctx2d_v57 /* r193 */, v58 /* r195 */, metrics_v59 /* r202 */, v60 /* r195 */;
  let v61 /* r202 */, arr_v62 /* r195 */, v63 /* r204 */, v64 /* r202 */, arr_v65 /* r202 */, fn_v66 /* r193 */, v67 /* r204 */, metrics_v68 /* r192 */, v69 /* r204 */, v70 /* r204 */;
  let arr_v71 /* r202 */, v72 /* r205 */, v73 /* r204 */, v74 /* r202 */, v75 /* r193 */, v76 /* r195 */, v77 /* r204 */, v78 /* r202 */, v79 /* r193 */, v80 /* r195 */;
  let arr_v81 /* r205 */, v82 /* r205 */, v83 /* r204 */, fn_v84 /* r195 */, fn_v85 /* r204 */, v86 /* r202 */, v87 /* r205 */, fn_v88 /* r204 */, v89 /* r205 */, fn_v90 /* r205 */;
  let fn_v91 /* r204 */, fn_v92 /* r195 */, arr_v93 /* r205 */, promise_v94 /* r202 */, fn_v95 /* r195 */, fn_v96 /* r204 */, fn_v97 /* r205 */, fn_v98 /* r204 */, arr_v99 /* r205 */, v100 /* r205 */;
  let v101 /* r204 */, v102 /* r205 */, v103 /* r204 */, v104 /* r202 */, v105 /* r195 */, arr_v106 /* r202 */, v107 /* r205 */, v108 /* r199 */, v113 /* r253 */, v114 /* r246 */;
  let ctx2d_v115 /* r192 */, v116 /* r253 */, v117 /* r246 */, v118 /* r244 */, v119 /* r245 */, v120 /* r252 */, v121 /* r247 */, v122 /* r250 */, ctx2d_v123 /* r254 */, v124 /* r192 */;
  let promise_v125 /* r193 */, v126 /* r193 */, arr_v127 /* r204 */, fn_v128 /* r202 */, v129 /* r196 */, v130 /* r195 */, fn_v131 /* r198 */, v132 /* r199 */, v133 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3, fn_v19 3, fn_v22 3, fn_v23 3, fn_v25 3, fn_v26 3, fn_v46 192, fn_v66 3
  //   Function: fn_v84 3, fn_v85 3, fn_v88 3, fn_v90 3, fn_v91 3, fn_v92 3, fn_v95 3, fn_v96 3
  //   Function: fn_v97 3, fn_v98 3, fn_v128 3, fn_v131 3
  //   Array: arr_v6 3, arr_v10 3, arr_v14 3, arr_v31 3, arr_v36 3, arr_v38 195, arr_v41 192, arr_v45 192
  //   Array: arr_v53 3, arr_v56 3, arr_v62 3, arr_v65 3, arr_v71 3, arr_v81 3, arr_v93 3, arr_v99 3
  //   Array: arr_v106 3, arr_v127 3
  //   Promise: promise_v24 3, promise_v94 3, promise_v125 3
  //   HTMLDocument: doc_v27 3
  //   HTMLCanvasElement: canvas_v29 3
  //   CanvasRenderingContext2D: ctx2d_v32 3, ctx2d_v47 192, ctx2d_v57 3, ctx2d_v115 3, ctx2d_v123 3
  //   TextMetrics: metrics_v33 3, metrics_v48 192, metrics_v59 3, metrics_v68 3
  //   Window: win_v109 3
  // H142: 2 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 9 dead register writes dropped, 11 constants propagated (12 uses), 6 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(34, 37, 38, 39, 49, 50);                           // #22608:95:53 #22618:46:211 [L d1 h1 c1]
  v113 = undefined;                                     // #22626:170:233 #22629:54:233 #22632:146:233 [L d1 h1 c1]
  v114 = undefined;                                     // #22635:126:233 #22638:186:233 [L d1 h1 c1]
  v1 = undefined;                                       // #22641:6:233 [L d1 h1 c1]
  v2 = undefined;                                       // #22644:34:233 #22647:206:233 [L d1 h1 c1]
  clos;                                                 // #22650:189:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v3 = clos;                                         // #22662:176:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  cell[49] = r204;                                      // #22685:150:195 [L d1 h1 c1]
  cell[50] = fn_v3;                                     // #22688:100:195 [L d1 h1 c1]
  v4 = {};                                              // #22691:230:159 [L d1 h1 c1]
  v5 = "sibaD1";                                        // #22693:130:233 [L d1 h1 c1]
  arr_v6 = [];                                          // #22703:168:107 [L d1 h1 c1]
  v7 = "JnxJe8";                                        // #22705:188:233 [L d1 h1 c1]
  v8 = 0; arr_v6[0] = "JnxJe8";                         // #22715:45:26 [L d1 h1 c1]
  v4.sibaD1 = arr_v6;                                   // #22720:83:199 [L d1 h1 c1]
  v9 = "uoBG2";                                         // #22724:123:233 [L d1 h1 c1]
  arr_v10 = [];                                         // #22733:253:107 [L d1 h1 c1]
  v11 = "JnxJe8";                                       // #22735:253:233 [L d1 h1 c1]
  v12 = 0; arr_v10[0] = "JnxJe8";                       // #22745:170:26 [L d1 h1 c1]
  v4.uoBG2 = arr_v10;                                   // #22750:28:199 [L d1 h1 c1]
  v13 = "jrVX6";                                        // #22754:96:233 [L d1 h1 c1]
  arr_v14 = [];                                         // #22763:142:107 [L d1 h1 c1]
  v15 = "JnxJe8";                                       // #22765:138:233 [L d1 h1 c1]
  v16 = 0; arr_v14[0] = "JnxJe8";                       // #22775:67:26 [L d1 h1 c1]
  v4.jrVX6 = arr_v14;                                   // #22780:145:199 [L d1 h1 c1]
  cell[34] = v4;                                        // #22784:51:195 [L d1 h1 c1]
  v17 = cell[1];                                        // #22787:146:236 [L d1 h1 c1]
  v18 = v17[v111];                                      // #22790:164:7 [L d1 h1 c1]
  fn_v19 = win_v109.Date;                               // #22794:235:200 [L d1 h1 c1]
  v20 = fn_v19.now();                                   // #22799:16:138 [L d1 h1 c1]
  v21 = false;                                          // #22814:132:233 [L d1 h1 c1]
  cell[37] = false;                                     // #22817:26:195 [L d1 h1 c1]
  fn_v22 = win_v109.Promise;                            // #22820:9:200 [L d1 h1 c1]
  fn_v23 = clos;                                        // #22825:204:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v23 = its home register (H139 CLOS bind)
  promise_v24 = new fn_v22(fn_v23);                     // #22834:8:1 [L d1 h1 c1]
  fn_v25 = clos;                                        // #22839:143:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v25 = its home register (H139 CLOS bind)
  cell[49] = fn_v25;                                    // #22851:185:195 [L d1 h1 c1]
  fn_v26 = clos;                                        // #22854:188:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v26 = its home register (H139 CLOS bind)
  cell[50] = fn_v26;                                    // #22877:114:195 [L d1 h1 c1]
  try {
    TP(tryStack, 23538, 47, callDepths);                           // #22880:147:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    doc_v27 = win_v109.document;                        // #22886:222:200 #22891:211:150 [L d1 h1 c1]
    v28 = "canvas";                                     // #22894:251:233 [L d1 h1 c1]
    canvas_v29 = doc_v27.createElement("canvas");       // #22904:224:138 #22930:77:150 [L d1 h1 c1]
    ctx2d_v115 = (canvas_v29).getContext("2d");         // #22933:13:233 #22939:42:138 [L d1 h1 c1]
    L23530_175: {
      if (ctx2d_v115) {                                 // #22962:81:160 [L d1 h1 c1]
        v116 = "Hwmqxli";                               // #22973:150:233 [L d1 h1 c1]
        v30 = "32px monospace";                         // #22984:114:233 #22989:222:233 [L d1 h1 c1]
        ctx2d_v115.font = "32px monospace";             // #23007:128:199 [L d1 h1 c1]
        arr_v31 = [];                                   // #23011:46:107 [L d1 h1 c1]
        ctx2d_v32 = ctx2d_v115;                         // #23013:227:150 [L d1 h1 c1]
        metrics_v33 = (ctx2d_v32).measureText("Hwmqxli");  // #23016:40:138 [L d1 h1 c1]
        v34 = metrics_v33.width;                        // #23040:95:200 [L d1 h1 c1]
        v35 = 0; arr_v31[0] = v34;                      // #23045:4:26 [L d1 h1 c1]
        arr_v36 = arr_v31;                              // #23050:225:150 [L d1 h1 c1]
        v117 = 0;                                       // #23053:244:72 [L d1 h1 c1]
        v118 = 1;                                       // #23056:123:72 [L d1 h1 c1]
        v119 = "length";                                // #23059:3:233 [L d1 h1 c1]
        v120 = "font";                                  // #23064:107:233 [L d1 h1 c1]
        v121 = "32px \"";                               // #23069:51:233 [L d1 h1 c1]
        v122 = "\", monospace";                         // #23079:219:233 [L d1 h1 c1]
        v37 = "width";                                  // #23095:227:233 #23110:203:233 [L d1 h1 c1] +#23115:47:53
        while ((arr_v38 = cell[21], v39 = arr_v38.length, v40 = v117 < v39, v117 < v39)) {  // #23130:109:236 | #23133:211:7 | #23137:200:186 [L d65 h65 c65]
          arr_v41 = cell[21];                           // #23155:222:236 [L d64 h64 c64]
          v42 = arr_v41[v117];                          // #23158:192:7 [L d64 h64 c64]
          v43 = "32px \"" + v42;                        // #23162:213:222 [L d64 h64 c64]
          v44 = v43 + "\", monospace";                  // #23166:214:222 [L d64 h64 c64]
          ctx2d_v115.font = v44;                        // #23170:152:199 [L d64 h64 c64]
          arr_v45 = arr_v36;                            // #23174:37:150 [L d64 h64 c64]
          fn_v46 = arr_v45[v112];                       // #23177:171:7 [L d64 h64 c64]
          ctx2d_v47 = ctx2d_v115;                       // #23181:172:150 [L d64 h64 c64]
          metrics_v48 = (ctx2d_v47).measureText("Hwmqxli");    // #23184:13:138 [L d64 h64 c64]
          v49 = metrics_v48.width;                      // #23208:243:7 [L d64 h64 c64]
          v50 = fn_v46.call(arr_v45, v49);              // #23212:248:138 [L d64 h64 c64]
          v117 = v117 + 1;                              // #23230:232:53 #23120:126:48 [L d64 h64 c64]
        }
        v51 = cell[34];                                 // #23235:209:236 [L d1 h1 c1]
        v52 = "uoBG2";                                  // #23238:129:233 [L d1 h1 c1]
        arr_v53 = cell[50](arr_v36);                    // #23247:42:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202; then arr_v53 = r202 (H142 CALL bind)
        v51[v52] = arr_v53;                             // #23251:156:199 [L d1 h1 c1]
        v54 = "font";                                   // #23255:224:233 [L d1 h1 c1]
        v55 = "72px \"Segoe UI\"";                      // #23260:20:233 [L d1 h1 c1]
        ctx2d_v115.font = "72px \"Segoe UI\"";          // #23279:94:199 [L d1 h1 c1]
        arr_v56 = [];                                   // #23283:20:107 [L d1 h1 c1]
        ctx2d_v57 = ctx2d_v115;                         // #23285:177:150 [L d1 h1 c1]
        v58 = "mmmmmmmmmmlli";                          // #23288:225:233 [L d1 h1 c1]
        metrics_v59 = (ctx2d_v57).measureText("mmmmmmmmmmlli");      // #23305:174:138 [L d1 h1 c1]
        v60 = metrics_v59.width;                        // #23329:77:200 [L d1 h1 c1]
        v61 = 0; arr_v56[0] = v60;                      // #23334:186:26 [L d1 h1 c1]
        arr_v62 = arr_v56;                              // #23339:63:150 [L d1 h1 c1]
        v63 = "font";                                   // #23342:183:233 [L d1 h1 c1]
        v64 = "72px monospace";                         // #23347:79:233 [L d1 h1 c1]
        ctx2d_v115.font = "72px monospace";             // #23365:109:199 [L d1 h1 c1]
        arr_v65 = arr_v62;                              // #23369:230:150 [L d1 h1 c1]
        fn_v66 = arr_v65[v112];                         // #23372:168:7 [L d1 h1 c1]
        ctx2d_v123 = ctx2d_v115;                        // #23376:245:150 [L d1 h1 c1]
        v67 = "mmmmmmmmmmlli";                          // #23379:21:233 [L d1 h1 c1]
        metrics_v68 = (ctx2d_v123).measureText("mmmmmmmmmmlli");      // #23396:18:138 [L d1 h1 c1]
        v69 = metrics_v68.width;                        // #23420:33:200 [L d1 h1 c1]
        v124 = fn_v66.call(arr_v65, v69);               // #23425:238:138 [L d1 h1 c1]
        v70 = "jrVX6";                                  // #23443:106:233 [L d1 h1 c1]
        arr_v71 = cell[50](arr_v62);                    // #23452:175:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202; then arr_v71 = r202 (H142 CALL bind)
        v51[v70] = arr_v71;                             // #23456:236:210 [L d1 h1 c1]
        break L23530_175;
      } else {
        v72 = cell[34];                                 // #22968:29:53 #23464:230:236 [-] /* never executed in any replay */
        v73 = "uoBG2";                                  // #23467:130:233 [-] /* never executed in any replay */
        v74 = [];                                       // #23476:168:107 [-] /* never executed in any replay */
        v75 = "AQySw0";                                 // #23478:188:233 [-] /* never executed in any replay */
        v76 = 0; v74[0] = "AQySw0";                     // #23488:45:26 [-] /* never executed in any replay */
        v72.uoBG2 = v74;                                // #23493:83:199 [-] /* never executed in any replay */
        v77 = "jrVX6";                                  // #23497:123:233 [-] /* never executed in any replay */
        v78 = [];                                       // #23506:253:107 [-] /* never executed in any replay */
        v79 = "AQySw0";                                 // #23508:253:233 [-] /* never executed in any replay */
        v80 = 0; v78[0] = "AQySw0";                     // #23518:170:26 [-] /* never executed in any replay */
        v72.jrVX6 = v78;                                // #23523:187:210 [-] /* never executed in any replay */
      }
    }
    arr_v81 = tryStack.pop();                                // #23531:110:124 [L d1 h1 c1]
    fn_v84 = win_v109.setTimeout;                       // #23534:6:53 #23607:84:200 [L d1 h1 c1]
    fn_v85 = cell[49];                                  // #23612:111:236 [L d1 h1 c1]
    v86 = 3000;                                         // #23615:39:233 [L d1 h1 c1]
    v87 = fn_v84.call(win_v109, fn_v85, 3000);          // #23620:92:138 [L d1 h1 c1]
    cell[38] = v87;                                     // #23645:146:195 [L d1 h1 c1]
    fn_v88 = win_v109.FontFace;                         // #23648:161:200 [L d1 h1 c1]
    v89 = typeof fn_v88;                                // #23653:137:193 [L d1 h1 c1]
    if (v110 === v89) {                                 // #23656:49:161 [L d1 h1 c1]
      try {
        TP(tryStack, 23773, 185, callDepths);                      // #23673:9:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        fn_v90 = win_v109.Promise;                      // #23679:252:200 [L d1 h1 c1]
        fn_v91 = fn_v90;                                // #23684:249:150 [L d1 h1 c1]
        fn_v92 = fn_v90.all;                            // #23687:44:200 [L d1 h1 c1]
        arr_v93 = cell[22];                             // #23694:231:236 [L d1 h1 c1]
        promise_v94 = fn_v92.call(fn_v91, arr_v93);     // #23697:28:138 [L d1 h1 c1]
        fn_v95 = promise_v94.then;                      // #23714:131:200 [L d1 h1 c1]
        fn_v96 = clos;                                  // #23719:222:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v96 = its home register (H139 CLOS bind)
        fn_v97 = fn_v96;                                // #23731:211:150 [L d1 h1 c1]
        fn_v98 = clos;                                  // #23734:238:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v98 = its home register (H139 CLOS bind)
        promise_v125 = fn_v95.call(promise_v94, fn_v97, fn_v98);  // #23747:199:138 [L d1 h1 c1]
        arr_v99 = tryStack.pop();                            // #23766:38:124 [L d1 h1 c1] +#23769:222:53
      } catch (caught) {
        v100 = cell[34];                                // #23774:2:150 #23777:229:236 [-] /* never executed in any replay */
        v101 = KP(m23779k229);                          // #23780:69:233 [-] /* never executed in any replay */
        outside("L23789_69");  // L23789_69 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
      }
    } else {
      v102 = cell[34];                                  // #23824:53:236 [-] /* never executed in any replay */
      v103 = "sibaD1";                                  // #23827:85:233 [-] /* never executed in any replay */
      v104 = [];                                        // #23837:239:107 [-] /* never executed in any replay */
      v126 = "AQySw0";                                  // #23839:167:233 [-] /* never executed in any replay */
      v105 = 0; v104[0] = "AQySw0";                     // #23849:44:26 [-] /* never executed in any replay */
      v102.sibaD1 = v104;                               // #23854:22:199 [-] /* never executed in any replay */
      r205 = cell[49]();                                // #23858:82:201 [-] +#23862:90:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    }
    arr_v106 = cell[6];                                 // #23867:144:236 [L d1 h1 c1]
    arr_v127 = cell[6];                                 // #23870:61:150 [L d1 h1 c1]
    fn_v128 = arr_v127[v112];                           // #23873:99:7 [L d1 h1 c1]
    v107 = {};                                          // #23877:169:159 [L d1 h1 c1]
    v107.aJBc6 = promise_v24;                           // #23879:74:142 [L d1 h1 c1]
    v129 = "AzXDU3";                                    // #23884:86:233 [L d1 h1 c1]
    v130 = 3000;                                        // #23889:50:233 [L d1 h1 c1]
    v107.AzXDU3 = 3000;                                 // #23894:132:199 [L d1 h1 c1]
    v107.hwqjX1 = v20;                                  // #23898:121:142 [L d1 h1 c1]
    v107.Kavdk6 = v18;                                  // #23908:218:142 [L d1 h1 c1]
    v108 = "LfFR4";                                     // #23913:166:233 [L d1 h1 c1]
    fn_v131 = clos;                                     // #23918:53:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v131 = its home register (H139 CLOS bind)
    v107[v108] = fn_v131;                               // #23927:59:199 [L d1 h1 c1]
    v132 = fn_v128.call(arr_v127, v107);                // #23931:32:138 [L d1 h1 c1]
    v133 = undefined;                                   // #23949:84:233 [L d1 h1 c1]
    return v133;                                        // #23952:148:245 [L d1 h1 c1]
  } catch (caught) {
    v82 = cell[34];                                     // #23539:32:150 #23542:11:236 [-] /* never executed in any replay */
    v83 = KP(m23544k11);                                // #23545:83:233 [-] /* never executed in any replay */
    outside("L23553_83");  // L23553_83 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}