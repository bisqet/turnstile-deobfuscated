function probe_13_fMQd4(v135 /* r211 */, v136 /* r220 */, v137 /* r223 */, v150 /* r70 */, v151 /* r209 */, v152 /* r217 */, v153 /* r221 */) { // entry L131004_205; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 149 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 7 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 7 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r198 */, v3 /* r195 */, v4 /* r205 */, v5 /* r199 */, fn_v6 /* r205 */, win_v7 /* r204 */, v8 /* r205 */, v9 /* r199 */, v10 /* r205 */;
  let v11 /* r254 */, v12 /* r192 */, v13 /* r202 */, fn_v14 /* r205 */, win_v15 /* r204 */, v16 /* r205 */, v17 /* r205 */, v18 /* r199 */, v19 /* r198 */, fn_v20 /* r199 */;
  let fn_v21 /* r205 */, win_v22 /* r199 */, v23 /* r205 */, v24 /* r196 */, win_v25 /* r199 */, v26 /* r205 */, v27 /* r198 */, v28 /* r205 */, v29 /* r198 */, v30 /* r199 */;
  let v31 /* r198 */, win_v32 /* r199 */, v33 /* r196 */, v34 /* r199 */, v35 /* r196 */, v36 /* r205 */, v37 /* r199 */, v38 /* r193 */, v39 /* r199 */, doc_v40 /* r196 */;
  let v41 /* r198 */, elLink_v42 /* r205 */, v43 /* r198 */, v44 /* r196 */, v45 /* r198 */, v46 /* r196 */, doc_v47 /* r196 */, elHead_v48 /* r198 */, elLink_v49 /* r196 */, doc_v50 /* r198 */;
  let elImage_v51 /* r204 */, v52 /* r205 */, fn_v53 /* r195 */, fn_v54 /* r205 */, promise_v55 /* r195 */, fn_v56 /* r193 */, fn_v57 /* r196 */, fn_v58 /* r205 */, worker_v59 /* r193 */, fn_v60 /* r192 */;
  let v61 /* r205 */, fn_v62 /* r196 */, v63 /* r254 */, worker_v64 /* r196 */, fn_v65 /* r193 */, v66 /* r254 */, v67 /* r192 */, v68 /* r254 */, v69 /* r205 */, v70 /* r192 */;
  let elImage_v71 /* r192 */, fn_v72 /* r254 */, fn_v73 /* r196 */, v74 /* r193 */, elImage_v75 /* r193 */, v76 /* r196 */, v77 /* r192 */, style_v78 /* r205 */, v79 /* r199 */, v80 /* r198 */;
  let v81 /* r199 */, shadowRoot_v82 /* r205 */, elImage_v83 /* r199 */, v84 /* r202 */, v85 /* r205 */, v86 /* r202 */, v87 /* r199 */, v88 /* r204 */, arr_v89 /* r202 */, fn_v90 /* r202 */;
  let v91 /* r204 */, v92 /* r195 */, v93 /* r193 */, v94 /* r199 */, v95 /* r199 */, v96 /* r195 */, v97 /* r205 */, v98 /* r199 */, v99 /* r193 */, v100 /* r199 */;
  let v101 /* r193 */, v102 /* r199 */, v103 /* r193 */, v104 /* r199 */, v105 /* r193 */, v106 /* r199 */, v107 /* r193 */, v108 /* r199 */, v109 /* r192 */, v110 /* r193 */;
  let v111 /* r205 */, v112 /* r204 */, arr_v113 /* r205 */, v114 /* r205 */, v115 /* r199 */, v116 /* r204 */, v117 /* r196 */, v118 /* r199 */, v119 /* r204 */, v120 /* r199 */;
  let v121 /* r204 */, v122 /* r195 */, v123 /* r193 */, v124 /* r198 */, v125 /* r196 */, v126 /* r204 */, v127 /* r192 */, v128 /* r204 */, arr_v129 /* r204 */, v130 /* r205 */;
  let v131 /* r205 */, v132 /* r202 */, v133 /* r205 */, win_v134 /* r205 */, v138 /* r253 */, arr_v139 /* r196 */, v140 /* r195 */, v141 /* r193 */, v142 /* r254 */, v143 /* r199 */;
  let v144 /* r192 */, v145 /* r198 */, v146 /* r202 */, v147 /* r202 */, v148 /* r204 */, v149 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v6 3, fn_v14 3, fn_v20 3, fn_v21 3, fn_v53 3, fn_v54 3, fn_v56 3, fn_v57 3
  //   Function: fn_v58 3, fn_v60 3, fn_v62 3, fn_v65 3, fn_v72 3, fn_v73 3, fn_v90 3
  //   Window: win_v7 3, win_v15 3, win_v22 3, win_v25 3, win_v32 3, win_v134 3
  //   HTMLDocument: doc_v40 3, doc_v47 3, doc_v50 3
  //   HTMLLinkElement: elLink_v42 3, elLink_v49 3
  //   HTMLHeadElement: elHead_v48 3
  //   HTMLImageElement: elImage_v51 3, elImage_v71 3, elImage_v75 3, elImage_v83 3
  //   Promise: promise_v55 3
  //   Worker: worker_v59 3, worker_v64 3
  //   CSSStyleDeclaration: style_v78 3
  //   ShadowRoot: shadowRoot_v82 3
  //   Array: arr_v89 3, arr_v113 3, arr_v129 3, arr_v139 3
  // H142: 2 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 23 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 11 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 8 single-use temps folded (6 of them expressions, H135), 18 dead register writes dropped, 11 constants propagated (11 uses), 5 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1)
  NC(15, 20, 21, 22, 26, 27, 29);                       // #131005:169:53 #131015:73:211 [L d1 h1 c1]
  v1 = undefined;                                       // #131024:25:233 #131027:169:233 #131030:249:233 #131033:9:233 #131036:217:233 #131039:105:233 [L d1 h1 c1]
  v2 = undefined;                                       // #131042:185:233 #131045:201:233 [L d1 h1 c1]
  v3 = undefined;                                       // #131048:153:233 [L d1 h1 c1]
  v4 = undefined;                                       // #131051:41:233 [L d1 h1 c1]
  v5 = undefined;                                       // #131054:121:233 [L d1 h1 c1]
  clos;                                                 // #131057:124:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #131074:51:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #131087:206:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v6 = clos;                                         // #131098:189:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v6 = its home register (H139 CLOS bind)
  cell[26] = r193;                                      // #131110:175:195 [L d1 h1 c1]
  cell[27] = r196;                                      // #131113:89:195 [L d1 h1 c1]
  cell[29] = fn_v6;                                     // #131116:219:195 [L d1 h1 c1]
  win_v7 = v150[v153];                                  // #131119:9:7 [L d1 h1 c1]
  v8 = KP(131122);                                      // #131123:217:233 [L d1 h1 c1]
  v9 = MC(win_v7, v151, v8);                            // #131216:14:114 [L d1 h1 c1]
  v10 = 0;                                              // #131221:173:72 [L d1 h1 c1]
  v11 = "eval";                                         // #131224:237:233 [L d1 h1 c1]
  v12 = undefined;                                      // #131229:45:233 [L d1 h1 c1]
  v13 = "this";                                         // #131232:109:233 [L d1 h1 c1] +#131237:201:53
  while ((fn_v14 = v150.eval, win_v15 = MC(undefined, fn_v14, "this"), v16 = !(!(v150 === win_v15)), !(v16))) {  // #131242:78:7 | #131246:239:114 | #131251:159:65 #131255:12:130 #131258:5:130 | #131261:128:160 [L d1 h1 c1]
    // #131267:80:53 [-] /* never executed in any replay */
  }
  v17 = cell[1];                                        // #131277:31:236 [L d1 h1 c1]
  v18 = v17[v136];                                      // #131280:61:7 [L d1 h1 c1]
  v19 = v17[v18];                                       // #131284:99:7 [L d1 h1 c1]
  cell[15] = v19;                                       // #131288:61:195 [L d1 h1 c1]
  fn_v20 = clos;                                        // #131291:48:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
  fn_v21 = fn_v20;                                      // #131305:93:150 [L d1 h1 c1]
  v19.ExHMy4 = fn_v21;                                  // #131308:46:142 [L d1 h1 c1]
  try {
    TP(tryStack, 132704, 138, callDepths);                         // #131313:95:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v22 = v150[v153];                               // #131319:125:7 [L d1 h1 c1]
    v23 = KP(131322);                                   // #131323:125:233 [L d1 h1 c1]
    v24 = win_v22.uOdMb2(v23);                          // #131416:218:138 [L d1 h1 c1]
    v19[v152] = 0;                                      // #131435:172:103 [L d1 h1 c1]
    v19[v135] = "";                                     // #131440:176:233 #131444:138:199 [L d1 h1 c1]
    win_v25 = v150[v153];                               // #131448:188:7 [L d1 h1 c1]
    v26 = KP(131451);                                   // #131452:128:233 [L d1 h1 c1]
    v27 = MC(win_v25, v151, v26);                       // #131525:217:114 [L d1 h1 c1]
    v28 = cell[1];                                      // #131530:32:236 [L d1 h1 c1]
    v29 = v28[v136];                                    // #131533:122:7 [L d1 h1 c1]
    v30 = v28[v29];                                     // #131537:236:7 [L d1 h1 c1]
    v31 = v30.rhUgi8;                                   // #131541:19:200 [L d1 h1 c1]
    win_v32 = v150[v153];                               // #131546:59:233 #131551:233:7 [L d1 h1 c1]
    v33 = win_v32[KP(131554)];                          // #131555:92:200 [L d1 h1 c1]
    v34 = v33.ppebL7;                                   // #131560:195:200 [L d1 h1 c1]
    v35 = "/cdn-cgi/challenge-platform/h/" + v34;       // #131570:140:222 [L d1 h1 c1]
    v36 = KP(131573);                                   // #131574:16:233 [L d1 h1 c1]
    v37 = cell[3];                                      // #131680:59:236 [L d1 h1 c1]
    v38 = cell[4](v36, v37);                            // #131683:232:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r193; then v38 = r193 (H142 CALL bind)
    v39 = (v35 + v38) + v31;                            // #131688:93:222 #131692:62:222 [L d1 h1 c1]
    doc_v40 = v150.document;                            // #131696:157:200 [L d1 h1 c1]
    v41 = "link";                                       // #131701:29:233 [L d1 h1 c1]
    elLink_v42 = doc_v40.createElement("link");         // #131709:250:138 [L d1 h1 c1]
    v43 = "rel";                                        // #131735:70:233 [L d1 h1 c1]
    v44 = "preload";                                    // #131742:98:233 [L d1 h1 c1]
    elLink_v42.rel = "preload";                         // #131753:244:199 [L d1 h1 c1]
    v45 = "as";                                         // #131757:216:233 [L d1 h1 c1]
    v46 = "image";                                      // #131763:44:233 [L d1 h1 c1]
    elLink_v42.as = "image";                            // #131772:22:199 [L d1 h1 c1]
    elLink_v42.href = v39;                              // #131776:67:142 [L d1 h1 c1]
    doc_v47 = v150.document;                            // #131784:206:200 [L d1 h1 c1]
    elHead_v48 = doc_v47.head;                          // #131789:237:200 [L d1 h1 c1]
    elLink_v49 = elHead_v48.appendChild(elLink_v42);      // #131797:138:138 [L d1 h1 c1]
    doc_v50 = v150.document;                            // #131821:185:200 [L d1 h1 c1]
    elImage_v51 = doc_v50.createElement("img");         // #131826:201:233 #131833:246:138 [L d1 h1 c1]
    cell[20] = elImage_v51;                             // #131859:68:195 [L d1 h1 c1]
    v52 = false;                                        // #131862:232:233 [L d1 h1 c1]
    cell[21] = false;                                   // #131865:238:195 [L d1 h1 c1]
    fn_v53 = v150.Promise;                              // #131868:141:200 [L d1 h1 c1]
    fn_v54 = clos;                                      // #131873:64:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v54 = its home register (H139 CLOS bind)
    promise_v55 = new fn_v53(fn_v54);                   // #131884:172:1 [L d1 h1 c1]
    fn_v56 = clos;                                      // #131889:163:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v56 = its home register (H139 CLOS bind)
    cell[26] = fn_v56;                                  // #131906:125:195 [L d1 h1 c1]
    fn_v57 = clos;                                      // #131909:112:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v57 = its home register (H139 CLOS bind)
    cell[27] = fn_v57;                                  // #131922:86:195 [L d1 h1 c1]
    clos;                                               // #131925:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
    fn_v58 = clos;                                      // #131936:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v58 = its home register (H139 CLOS bind)
    cell[29] = fn_v58;                                  // #131948:62:195 [L d1 h1 c1]
    worker_v59 = cell[1].WdGLU4;                        // #131951:49:236 #131954:132:200 [L d1 h1 c1]
    fn_v60 = (cell[1].WdGLU4).addEventListener;         // #131959:75:200 [L d1 h1 c1]
    v61 = "message";                                    // #131964:147:233 [L d1 h1 c1]
    fn_v62 = clos;                                      // #131969:174:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v62 = its home register (H139 CLOS bind)
    v63 = fn_v60.call(worker_v59, v61, fn_v62);         // #131979:135:138 [L d1 h1 c1]
    worker_v64 = cell[1].WdGLU4;                        // #132010:150:236 #132013:149:200 [L d1 h1 c1]
    fn_v65 = (cell[1].WdGLU4).postMessage;              // #132018:88:200 [L d1 h1 c1]
    v66 = "fZjpK0";                                     // #132023:172:233 #132028:176:233 [L d1 h1 c1]
    v67 = ("setTimeout(function(){self.postMessage({ ") + ("fZjpK0");      // #132038:5:222 [L d1 h1 c1]
    v68 = ":\"1\"})},10000)";                           // #132042:229:233 [L d1 h1 c1]
    v69 = ("setTimeout(function(){self.postMessage({ " + "fZjpK0") + ":\"1\"})},10000)";      // #132060:166:222 [L d1 h1 c1]
    v70 = fn_v65.call(worker_v64, v69);                 // #132064:159:138 [L d1 h1 c1]
    elImage_v71 = elImage_v51;                          // #132089:208:150 [L d1 h1 c1]
    fn_v72 = elImage_v51.addEventListener;              // #132092:103:200 [L d1 h1 c1]
    fn_v73 = cell[27];                                  // #132097:63:233 #132105:110:236 [L d1 h1 c1]
    v74 = false;                                        // #132108:234:233 [L d1 h1 c1]
    v138 = fn_v72.call(elImage_v71, "load", fn_v73, false);      // #132111:211:138 [L d1 h1 c1]
    elImage_v75 = elImage_v51;                          // #132143:52:150 [L d1 h1 c1]
    v76 = false;                                        // #132146:24:233 #132151:108:233 [L d1 h1 c1]
    v77 = (elImage_v75).addEventListener("error", r198, false);      // #132154:205:138 [L d1 h1 c1]
    elImage_v51.src = v39;                              // #132185:222:142 [L d1 h1 c1]
    style_v78 = elImage_v51.style;                      // #132192:189:200 [L d1 h1 c1]
    v79 = "display";                                    // #132197:189:233 [L d1 h1 c1]
    v80 = "none";                                       // #132208:189:233 [L d1 h1 c1]
    style_v78.display = "none";                         // #132216:163:199 [L d1 h1 c1]
    v81 = v150[v153][KP(132223)];                       // #132220:177:7 #132224:4:200 [L d1 h1 c1]
    shadowRoot_v82 = v81.pkJkg9;                        // #132229:203:200 [L d1 h1 c1]
    elImage_v83 = shadowRoot_v82.appendChild(elImage_v51);      // #132234:112:138 [L d1 h1 c1]
    v84 = elImage_v51.complete;                         // #132258:135:200 [L d1 h1 c1]
    if (v84) {                                          // #132263:122:160 [L d1 h1 c1]
      v86 = elImage_v51.width;                          // #132282:249:200 [-] /* never executed in any replay */
      v87 = 0;                                          // #132287:172:72 [-] /* never executed in any replay */
      v88 = 0 < v86;                                    // #132290:133:98 [-] /* never executed in any replay */
      v85 = v88;                                        // #132294:158:150 [-] +#132297:118:53 /* never executed in any replay */
    } else {
      v85 = v84;                                        // #132269:226:53 #132274:39:150 [L d1 h1 c1] +#132277:27:53
    }
    if (v85) {                                          // #132302:180:160 [L d1 h1 c1]
      r205 = cell[27]();                                // #132313:188:201 [-] +#132317:156:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    } else {
      // #132308:180:53 [L d1 h1 c1]
    }
    arr_v89 = cell[6];                                  // #132322:37:236 [L d1 h1 c1]
    arr_v139 = cell[6];                                 // #132325:190:150 [L d1 h1 c1]
    fn_v90 = arr_v139[v137];                            // #132328:32:7 [L d1 h1 c1]
    v91 = {};                                           // #132332:178:159 [L d1 h1 c1]
    v91.aJBc6 = promise_v55;                            // #132334:111:142 [L d1 h1 c1]
    v92 = 10000;                                        // #132339:39:233 #132344:255:233 [L d1 h1 c1]
    v93 = 1000;                                         // #132349:119:233 [L d1 h1 c1]
    v94 = (10000) + (1000);                             // #132354:112:222 [L d1 h1 c1]
    v91.AzXDU3 = (10000 + 1000);                        // #132358:74:199 [L d1 h1 c1]
    v95 = "Kavdk6";                                     // #132362:86:233 [L d1 h1 c1]
    v96 = cell[1][v136];                                // #132367:233:236 #132370:95:7 [L d1 h1 c1]
    v91.Kavdk6 = v96;                                   // #132374:61:199 [L d1 h1 c1]
    v97 = "LfFR4";                                      // #132378:61:233 [L d1 h1 c1]
    v140 = {};                                          // #132383:155:159 [L d1 h1 c1]
    v98 = "fMQd4";                                      // #132385:163:233 [L d1 h1 c1]
    v99 = "GoKKh7";                                     // #132394:139:233 [L d1 h1 c1]
    v140.fMQd4 = "GoKKh7";                              // #132404:185:199 [L d1 h1 c1]
    v100 = "QgYAn6";                                    // #132408:201:233 [L d1 h1 c1]
    v101 = "GoKKh7";                                    // #132418:153:233 [L d1 h1 c1]
    v140.QgYAn6 = "GoKKh7";                             // #132428:15:199 [L d1 h1 c1]
    v102 = "cgrs5";                                     // #132432:71:233 [L d1 h1 c1]
    v103 = "unknown";                                   // #132441:159:233 [L d1 h1 c1]
    v140.cgrs5 = "unknown";                             // #132446:125:199 [L d1 h1 c1]
    v104 = "iWgxW7";                                    // #132450:125:233 [L d1 h1 c1]
    v105 = "unknown";                                   // #132460:125:233 [L d1 h1 c1]
    v140.iWgxW7 = "unknown";                            // #132465:99:199 [L d1 h1 c1]
    v106 = "iGAj0";                                     // #132469:75:233 [L d1 h1 c1]
    v107 = "unknown";                                   // #132478:147:233 [L d1 h1 c1]
    v140.iGAj0 = "unknown";                             // #132483:161:199 [L d1 h1 c1]
    v108 = "zoFB9";                                     // #132487:17:233 [L d1 h1 c1]
    v109 = 1;                                           // #132496:100:72 [L d1 h1 c1]
    v110 = -(1);                                        // #132499:12:189 [L d1 h1 c1]
    v140.zoFB9 = (-1);                                  // #132502:118:199 [L d1 h1 c1]
    v141 = "OaZJ1";                                     // #132506:210:233 [L d1 h1 c1]
    v142 = KP(132514);                                  // #132515:190:233 [L d1 h1 c1]
    v143 = cell[3];                                     // #132621:177:236 [L d1 h1 c1]
    v144 = cell[4](v142, v143);                         // #132624:6:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r192; then v144 = r192 (H142 CALL bind)
    v140[v141] = v144;                                  // #132629:8:199 [L d1 h1 c1]
    v91[v97] = v140;                                    // #132633:130:199 [L d1 h1 c1]
    v111 = fn_v90.call(arr_v139, v91);                  // #132637:11:138 [L d1 h1 c1]
    v145 = cell[15];                                    // #132655:10:236 [L d1 h1 c1]
    v112 = 0; if (v145[v152] === 0) {                   // #132658:60:7 #132662:236:69 [L d1 h1 c1]
      v145[v152] = 3;                                   // #132680:45:103 [L d1 h1 c1]
      v145[v135] = ("");                                // #132685:109:233 #132689:50:210 [L d1 h1 c1]
    }
    arr_v113 = tryStack.pop();                               // #132697:107:124 [L d1 h1 c1]
    arr_v129 = cell[0];                                 // #132700:79:53 #132930:203:236 [L d1 h1 c1]
    v130 = 1;                                           // #132933:182:72 [L d1 h1 c1]
    v146 = arr_v129[1];                                 // #132936:56:7 [L d1 h1 c1]
    v131 = arr_v129[v146];                              // #132940:50:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #132944:125:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v132 = 1;                                         // #132980:181:72 [L d1 h1 c1]
      v133 = arr_v129[1];                               // #132983:251:7 [L d1 h1 c1]
      v147 = "RhHv7";                                   // #132987:131:233 [L d1 h1 c1]
      arr_v129[v133] = "RhHv7";                         // #132996:112:210 [L d1 h1 c1]
    } else {
      // #132970:153:53 [-] /* never executed in any replay */
    }
    win_v134 = v150[v153];                              // #133004:49:7 [L d1 h1 c1]
    v148 = win_v134.qwQRi7();                           // #133008:190:138 [L d1 h1 c1]
    v149 = undefined;                                   // #133026:250:233 [L d1 h1 c1]
    return v149;                                        // #133029:34:245 [L d1 h1 c1]
  } catch (caught) {
    v114 = caught;                                        // #132705:207:150 [-] /* never executed in any replay */
    v115 = r70[r221];                                   // #132708:45:7 [-] /* never executed in any replay */
    v116 = KP(m132711k45);                              // #132712:109:233 [-] /* never executed in any replay */
    v117 = MC(v115, r209, v116);                        // #132805:82:114 [-] /* never executed in any replay */
    v118 = r70[r221];                                   // #132810:100:7 [-] /* never executed in any replay */
    v119 = v118;                                        // #132814:193:150 [-] /* never executed in any replay */
    v120 = (v119)[KP(m132816k193)](v114);               // #132817:14:138 [-] /* never executed in any replay */
    v121 = r70[r221];                                   // #132836:48:7 [-] /* never executed in any replay */
    v122 = v121;                                        // #132840:93:150 [-] /* never executed in any replay */
    v123 = v122[KP(m132842k93)];                        // #132843:0:200 [-] /* never executed in any replay */
    v124 = cell[15];                                    // #132848:107:236 [-] /* never executed in any replay */
    v125 = KP(m132850k107);                             // #132851:51:233 [-] /* never executed in any replay */
    v126 = cell[5];                                     // #132856:146:236 [-] /* never executed in any replay */
    v127 = v123.call(v122, v120, v124, v125, v126);      // #132859:219:138 [-] /* never executed in any replay */
    v128 = 1; v124[r217] = 1;                           // #132881:233:103 [-] /* never executed in any replay */
    if (v114[KP(m132885k233)]) {                        // #132886:92:200 #132891:59:160 [-] /* never executed in any replay */
      outside("L132916_151");                           // #132914:151:150 [-]  L132916_151 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L132896_59");  // L132896_59 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}