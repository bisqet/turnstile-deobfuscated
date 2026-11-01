function probe_36_worker_blob(win_v99 /* r70 */, v100 /* r209 */, v101 /* r211 */, v102 /* r217 */, v103 /* r220 */, v104 /* r221 */) { // entry L135203_135; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 116 register webs used only inside this fn (no live-in, cross-call or table-made def; 18 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 10 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r199 */, v3 /* r204 */, v4 /* r205 */, v5 /* r198 */, fn_v6 /* r205 */, win_v7 /* r204 */, v8 /* r205 */, v9 /* r202 */, v10 /* r205 */;
  let v11 /* r195 */, v12 /* r196 */, fn_v13 /* r205 */, win_v14 /* r204 */, v15 /* r205 */, v16 /* r205 */, v17 /* r196 */, v18 /* r202 */, fn_v19 /* r196 */, fn_v20 /* r205 */;
  let win_v21 /* r196 */, v22 /* r205 */, v23 /* r195 */, v24 /* r205 */, v25 /* r196 */, v26 /* r202 */, win_v27 /* r196 */, v28 /* r205 */, v29 /* r196 */, v30 /* r196 */;
  let v31 /* r196 */, v32 /* r196 */, v33 /* r204 */, v34 /* r205 */, fn_v35 /* r202 */, fn_v36 /* r205 */, fn_v37 /* r205 */, navigator_v38 /* r202 */, fn_v39 /* r202 */, v40 /* r202 */;
  let v41 /* r204 */, v42 /* r205 */, fn_v43 /* r202 */, fn_v44 /* r204 */, v45 /* r205 */, navigator_v46 /* r204 */, storageManager_v47 /* r205 */, promise_v48 /* r202 */, fn_v49 /* r198 */, fn_v50 /* r205 */;
  let promise_v51 /* r204 */, fn_v52 /* r202 */, fn_v53 /* r205 */, storageManager_v54 /* r204 */, fn_v55 /* r205 */, navigator_v56 /* r204 */, storageManager_v57 /* r202 */, fn_v58 /* r204 */, v59 /* r204 */, v60 /* r205 */;
  let v61 /* r204 */, fn_v62 /* r202 */, fn_v63 /* r205 */, fn_v64 /* r204 */, v65 /* r205 */, navigator_v66 /* r204 */, storageManager_v67 /* r205 */, promise_v68 /* r202 */, fn_v69 /* r199 */, fn_v70 /* r205 */;
  let promise_v71 /* r204 */, fn_v72 /* r202 */, fn_v73 /* r205 */, v74 /* r204 */, v75 /* r202 */, v76 /* r204 */, arr_v77 /* r205 */, v78 /* r205 */, v79 /* r198 */, v80 /* r204 */;
  let v81 /* r196 */, v82 /* r198 */, v83 /* r204 */, v84 /* r198 */, v85 /* r204 */, v86 /* r195 */, v87 /* r193 */, v88 /* r202 */, v89 /* r196 */, v90 /* r204 */;
  let v91 /* r192 */, v92 /* r204 */, arr_v93 /* r204 */, v94 /* r205 */, v95 /* r205 */, v96 /* r202 */, v97 /* r205 */, win_v98 /* r205 */, v105 /* r193 */, v106 /* r195 */;
  let v107 /* r199 */, v108 /* r196 */, storageManager_v109 /* r198 */, storageManager_v110 /* r198 */, promise_v111 /* r198 */, promise_v112 /* r199 */, v113 /* r202 */, v114 /* r202 */, v115 /* r204 */, v116 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v6 3, fn_v13 3, fn_v19 3, fn_v20 3, fn_v35 3, fn_v36 3, fn_v37 3, fn_v39 3
  //   Function: fn_v43 3, fn_v44 3, fn_v49 3, fn_v50 3, fn_v52 3, fn_v53 3, fn_v55 3, fn_v58 3
  //   Function: fn_v62 3, fn_v63 3, fn_v64 3, fn_v69 3, fn_v70 3, fn_v72 3, fn_v73 3
  //   Window: win_v7 3, win_v14 3, win_v21 3, win_v27 3, win_v98 3, win_v99 3
  //   Navigator: navigator_v38 3, navigator_v46 3, navigator_v56 3, navigator_v66 3
  //   StorageManager: storageManager_v47 3, storageManager_v54 3, storageManager_v57 3, storageManager_v67 3, storageManager_v109 3, storageManager_v110 3
  //   Promise: promise_v48 3, promise_v51 3, promise_v68 3, promise_v71 3, promise_v111 3, promise_v112 3
  //   Array: arr_v77 3, arr_v93 3
  // H133 rewrites: 6 single-use temps folded (6 of them expressions, H135), 20 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15, 16, 17, 19, 20, 21, 22, 23, 24, 25, 28, 29);   // #135204:251:53 #135214:158:211 [L d1 h1 c1]
  v1 = undefined;                                       // #135228:90:233 #135231:38:233 #135234:194:233 [L d1 h1 c1]
  v2 = undefined;                                       // #135237:238:233 [L d1 h1 c1]
  v3 = undefined;                                       // #135240:106:233 #135243:246:233 #135246:82:233 #135249:62:233 #135252:122:233 #135255:198:233 [L d1 h1 c1]
  v4 = undefined;                                       // #135258:226:233 #135261:142:233 [L d1 h1 c1]
  v5 = undefined;                                       // #135264:138:233 [L d1 h1 c1]
  clos;                                                 // #135267:137:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v6 = clos;                                         // #135276:76:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v6 = its home register (H139 CLOS bind)
  cell[28] = r202;                                      // #135287:194:195 [L d1 h1 c1]
  cell[29] = fn_v6;                                     // #135290:224:195 [L d1 h1 c1]
  win_v7 = win_v99[v104];                               // #135293:58:7 [L d1 h1 c1]
  v8 = KP(135296);                                      // #135297:134:233 [L d1 h1 c1]
  v9 = MC(win_v7, v100, v8);                            // #135370:71:114 [L d1 h1 c1]
  v10 = 0;                                              // #135375:66:72 [L d1 h1 c1]
  v105 = "eval";                                        // #135378:110:233 [L d1 h1 c1]
  v11 = undefined;                                      // #135383:234:233 [L d1 h1 c1]
  v12 = "this";                                         // #135386:118:233 [L d1 h1 c1] +#135391:238:53
  while ((fn_v13 = win_v99.eval, win_v14 = MC(undefined, fn_v13, "this"), v15 = !(!(win_v99 === win_v14)), !(v15))) {  // #135396:68:7 | #135400:141:114 | #135405:69:65 #135409:154:130 #135412:219:130 | #135415:126:160 [L d1 h1 c1]
    // #135421:214:53 [-] /* never executed in any replay */
  }
  v16 = cell[1];                                        // #135431:75:236 [L d1 h1 c1]
  v17 = v16[v103];                                      // #135434:185:7 [L d1 h1 c1]
  v18 = v16[v17];                                       // #135438:239:7 [L d1 h1 c1]
  cell[15] = v18;                                       // #135442:153:195 [L d1 h1 c1]
  fn_v19 = clos;                                        // #135445:28:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
  fn_v20 = fn_v19;                                      // #135459:153:150 [L d1 h1 c1]
  cell[16] = fn_v19;                                    // #135462:27:195 [L d1 h1 c1]
  v18.ExHMy4 = fn_v20;                                  // #135465:116:142 [L d1 h1 c1]
  try {
    TP(tryStack, 136368, 255, callDepths);                         // #135470:13:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v21 = win_v99[v104];                            // #135476:243:7 [L d1 h1 c1]
    v22 = KP(135479);                                   // #135480:155:233 [L d1 h1 c1]
    v23 = win_v21.uOdMb2(v22);                          // #135553:0:138 [L d1 h1 c1]
    v18[v102] = 0;                                      // #135572:186:103 [L d1 h1 c1]
    v18[v101] = ("");                                   // #135577:6:233 #135581:8:199 [L d1 h1 c1]
    v24 = cell[1];                                      // #135585:83:236 [L d1 h1 c1]
    v25 = v24[v103];                                    // #135588:161:7 [L d1 h1 c1]
    v26 = v24[v25];                                     // #135592:55:7 [L d1 h1 c1]
    cell[17] = v26;                                     // #135596:193:195 [L d1 h1 c1]
    win_v27 = win_v99[v104];                            // #135599:215:7 [L d1 h1 c1]
    v28 = KP(135602);                                   // #135603:239:233 [L d1 h1 c1]
    v106 = MC(win_v27, v100, v28);                      // #135676:76:114 [L d1 h1 c1]
    v107 = 1500;                                        // #135681:208:233 [L d1 h1 c1]
    v29 = false;                                        // #135686:68:233 #135695:232:233 [L d1 h1 c1]
    v26.EabR5 = false;                                  // #135698:226:199 [L d1 h1 c1]
    v30 = null;                                         // #135702:142:233 #135711:138:233 [L d1 h1 c1]
    v26.WXCS6 = null;                                   // #135714:124:199 [L d1 h1 c1]
    v31 = false;                                        // #135718:64:233 #135728:244:233 [L d1 h1 c1]
    v26.gNlRC9 = false;                                 // #135731:190:199 [L d1 h1 c1]
    v32 = null;                                         // #135735:250:233 #135740:70:233 [L d1 h1 c1]
    v26.uFSgq2 = null;                                  // #135743:72:199 [L d1 h1 c1]
    v108 = null;                                        // #135747:220:233 #135756:32:233 [L d1 h1 c1]
    v26.PABx8 = null;                                   // #135759:58:199 [L d1 h1 c1]
    v33 = 0;                                            // #135763:41:72 [L d1 h1 c1]
    cell[19] = 0;                                       // #135766:107:195 [L d1 h1 c1]
    v34 = false;                                        // #135769:51:233 [L d1 h1 c1]
    cell[20] = false;                                   // #135772:205:195 [L d1 h1 c1]
    fn_v35 = clos;                                      // #135775:128:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v35 = its home register (H139 CLOS bind)
    cell[28] = fn_v35;                                  // #135784:38:195 [L d1 h1 c1]
    fn_v36 = clos;                                      // #135787:181:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v36 = its home register (H139 CLOS bind)
    cell[29] = fn_v36;                                  // #135798:199:195 [L d1 h1 c1]
    storageManager_v109 = win_v99.navigator.storage;      // #135801:66:200 #135806:145:200 [L d1 h1 c1]
    if (storageManager_v109) {                          // #135811:220:160 [L d1 h1 c1]
      navigator_v38 = win_v99.navigator;                // #135830:132:200 [L d1 h1 c1]
      storageManager_v110 = navigator_v38.storage;      // #135835:75:200 [L d1 h1 c1]
      fn_v39 = (navigator_v38.storage).estimate;        // #135840:182:200 [L d1 h1 c1]
      fn_v37 = fn_v39;                                  // #135852:75:150 [L d1 h1 c1] +#135855:175:53
    } else {
      fn_v37 = storageManager_v109;                     // #135817:60:53 #135822:102:150 [-] +#135825:30:53 /* never executed in any replay */
    }
    if (fn_v37) {                                       // #135860:226:160 [L d1 h1 c1]
      v40 = v33;                                        // #135871:194:72 #135874:39:150 [L d1 h1 c1]
      v41 = v33 + (1);                                  // #135877:96:222 [L d1 h1 c1]
      cell[19] = v41;                                   // #135881:134:195 [L d1 h1 c1]
      v42 = false;                                      // #135884:162:233 [L d1 h1 c1]
      cell[21] = false;                                 // #135887:64:195 [L d1 h1 c1]
      fn_v43 = win_v99.setTimeout;                      // #135890:23:200 [L d1 h1 c1]
      fn_v44 = clos;                                    // #135895:34:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v44 = its home register (H139 CLOS bind)
      v45 = fn_v43.call(win_v99, fn_v44, v107);         // #135907:43:138 [L d1 h1 c1]
      cell[22] = v45;                                   // #135932:229:195 [L d1 h1 c1]
      navigator_v46 = win_v99.navigator;                // #135935:104:200 [L d1 h1 c1]
      storageManager_v47 = navigator_v46.storage;       // #135940:159:200 [L d1 h1 c1]
      promise_v48 = storageManager_v47.estimate();      // #135945:244:138 [L d1 h1 c1]
      fn_v49 = promise_v48.then;                        // #135965:251:200 [L d1 h1 c1]
      fn_v50 = clos;                                    // #135970:118:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v50 = its home register (H139 CLOS bind)
      promise_v51 = fn_v49.call(promise_v48, fn_v50);      // #135982:47:138 [L d1 h1 c1]
      fn_v52 = promise_v51.catch;                       // #136000:10:200 [L d1 h1 c1]
      fn_v53 = clos;                                    // #136005:9:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v53 = its home register (H139 CLOS bind)
      promise_v111 = fn_v52.call(promise_v51, fn_v53);      // #136016:54:138 [L d1 h1 c1] +#136035:174:53
    } else {
      // #135866:170:53 [-] /* never executed in any replay */
    }
    storageManager_v54 = win_v99.navigator.storage;      // #136040:50:200 #136045:193:200 [L d1 h1 c1]
    if (storageManager_v54) {                           // #136050:76:160 [L d1 h1 c1]
      navigator_v56 = win_v99.navigator;                // #136069:213:200 [L d1 h1 c1]
      storageManager_v57 = navigator_v56.storage;       // #136074:152:200 [L d1 h1 c1]
      fn_v58 = (navigator_v56.storage).getDirectory;      // #136079:15:200 [L d1 h1 c1]
      fn_v55 = fn_v58;                                  // #136095:128:150 [L d1 h1 c1] +#136098:80:53
    } else {
      fn_v55 = storageManager_v54;                      // #136056:236:53 #136061:135:150 [-] +#136064:251:53 /* never executed in any replay */
    }
    if (fn_v55) {                                       // #136103:91:160 [L d1 h1 c1]
      v59 = cell[19] + 1; cell[19] = v59;               // #136114:220:99 [L d1 h1 c1]
      v60 = false;                                      // #136118:32:233 [L d1 h1 c1]
      cell[23] = false;                                 // #136121:70:195 [L d1 h1 c1]
      v61 = null;                                       // #136124:98:233 [L d1 h1 c1]
      cell[24] = null;                                  // #136127:0:195 [L d1 h1 c1]
      fn_v62 = win_v99.setTimeout;                      // #136130:215:200 [L d1 h1 c1]
      fn_v63 = clos;                                    // #136135:226:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v63 = its home register (H139 CLOS bind)
      fn_v64 = fn_v63;                                  // #136146:199:150 [L d1 h1 c1]
      v65 = fn_v62.call(win_v99, fn_v64, v107);         // #136149:124:138 [L d1 h1 c1]
      cell[25] = v65;                                   // #136174:50:195 [L d1 h1 c1]
      navigator_v66 = win_v99.navigator;                // #136177:193:200 [L d1 h1 c1]
      storageManager_v67 = navigator_v66.storage;       // #136182:212:200 [L d1 h1 c1]
      promise_v68 = storageManager_v67.getDirectory();      // #136187:149:138 [L d1 h1 c1]
      fn_v69 = promise_v68.then;                        // #136211:88:200 [L d1 h1 c1]
      fn_v70 = clos;                                    // #136216:159:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v70 = its home register (H139 CLOS bind)
      promise_v71 = fn_v69.call(promise_v68, fn_v70);      // #136229:244:138 [L d1 h1 c1]
      fn_v72 = promise_v71.catch;                       // #136247:251:200 [L d1 h1 c1]
      fn_v73 = clos;                                    // #136252:118:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v73 = its home register (H139 CLOS bind)
      promise_v112 = fn_v72.call(promise_v71, fn_v73);      // #136267:47:138 [L d1 h1 c1] +#136286:3:53
    } else {
      // #136109:127:53 [-] /* never executed in any replay */
    }
    v74 = cell[19];                                     // #136291:163:154 [L d1 h1 c1]
    v75 = cell[15];                                     // #136319:59:236 [L d1 h1 c1]
    v76 = 0; if (v75[v102] === 0) {                     // #136322:233:7 #136326:37:69 [L d1 h1 c1]
      v75[v102] = 2;                                    // #136344:54:103 [L d1 h1 c1]
      v75[v101] = ("");                                 // #136349:146:233 #136353:3:210 [L d1 h1 c1]
    }
    arr_v77 = tryStack.pop();                                // #136361:132:124 [L d1 h1 c1]
    arr_v93 = cell[0];                                  // #136364:68:53 #136579:118:236 [L d1 h1 c1]
    v94 = 1;                                            // #136582:117:72 [L d1 h1 c1]
    v113 = arr_v93[1];                                  // #136585:187:7 [L d1 h1 c1]
    v95 = arr_v93[v113];                                // #136589:105:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #136593:152:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v96 = 1;                                          // #136629:79:72 [L d1 h1 c1]
      v97 = arr_v93[1];                                 // #136632:173:7 [L d1 h1 c1]
      v114 = "QJnkUDzI";                                // #136636:237:233 [L d1 h1 c1]
      arr_v93[v97] = "QJnkUDzI";                        // #136641:178:210 [L d1 h1 c1]
    } else {
      // #136619:8:53 [-] /* never executed in any replay */
    }
    win_v98 = win_v99[v104];                            // #136649:44:7 [L d1 h1 c1]
    v115 = win_v98.qwQRi7();                            // #136653:141:138 [L d1 h1 c1]
    v116 = undefined;                                   // #136671:77:233 [L d1 h1 c1]
    return v116;                                        // #136674:233:245 [L d1 h1 c1]
  } catch (caught) {
    v78 = caught;                                         // #136369:176:150 [-] /* never executed in any replay */
    v79 = win_v99[v104];                                // #136372:202:7 [-] /* never executed in any replay */
    v80 = KP(m136375k202);                              // #136376:214:233 [-] /* never executed in any replay */
    v81 = MC(v79, v100, v80);                           // #136449:87:114 [-] /* never executed in any replay */
    v82 = win_v99[v104];                                // #136454:149:7 [-] /* never executed in any replay */
    v83 = v82;                                          // #136458:110:150 [-] /* never executed in any replay */
    v84 = (v83)[KP(m136460k110)](v78);                  // #136461:71:138 [-] /* never executed in any replay */
    v85 = win_v99[v104];                                // #136480:197:7 [-] /* never executed in any replay */
    v86 = v85;                                          // #136484:222:150 [-] /* never executed in any replay */
    v87 = v86[KP(m136486k222)];                         // #136487:189:200 [-] /* never executed in any replay */
    v88 = cell[15];                                     // #136492:116:236 [-] /* never executed in any replay */
    v89 = KP(m136494k116);                              // #136495:88:233 [-] /* never executed in any replay */
    v90 = cell[5];                                      // #136500:99:236 [-] /* never executed in any replay */
    v91 = v87.call(v86, v84, v88, v89, v90);            // #136503:168:138 [-] /* never executed in any replay */
    v92 = 1; v88[v102] = 1;                             // #136525:194:103 [-] /* never executed in any replay */
    if (v78[KP(m136529k194)]) {                         // #136530:17:200 #136535:92:160 [-] /* never executed in any replay */
      outside("L136560_139");                           // #136558:139:150 [-]  L136560_139 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L136540_92");  // L136540_92 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}