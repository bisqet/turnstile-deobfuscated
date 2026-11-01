function probe_2_DfaES6(win_v78 /* r70 */, v79 /* r209 */, v80 /* r211 */, v81 /* r217 */, v82 /* r220 */, v83 /* r221 */) { // entry L206920_160; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 92 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r199 */, v4 /* r205 */, v5 /* r198 */, win_v6 /* r204 */, v7 /* r205 */, v8 /* r202 */, v9 /* r205 */, v10 /* r195 */;
  let v11 /* r196 */, fn_v12 /* r205 */, win_v13 /* r204 */, v14 /* r205 */, v15 /* r205 */, v16 /* r204 */, v17 /* r202 */, fn_v18 /* r204 */, fn_v19 /* r205 */, win_v20 /* r204 */;
  let v21 /* r205 */, v22 /* r199 */, v23 /* r205 */, v24 /* r199 */, v25 /* r204 */, worker_v26 /* r199 */, worker_v27 /* r198 */, fn_v28 /* r196 */, v29 /* r205 */, fn_v30 /* r204 */;
  let worker_v31 /* r204 */, v32 /* r196 */, v33 /* r198 */, v34 /* r196 */, v35 /* r205 */, v36 /* r196 */, v37 /* r198 */, v38 /* r196 */, v39 /* r205 */, v40 /* r196 */;
  let v41 /* r198 */, v42 /* r196 */, v43 /* r205 */, v44 /* r196 */, v45 /* r198 */, v46 /* r196 */, v47 /* r205 */, v48 /* r196 */, v49 /* r198 */, v50 /* r196 */;
  let v51 /* r205 */, v52 /* r196 */, v53 /* r198 */, v54 /* r205 */, v55 /* r204 */, arr_v56 /* r205 */, v57 /* r205 */, v58 /* r198 */, v59 /* r204 */, v60 /* r196 */;
  let v61 /* r198 */, v62 /* r204 */, v63 /* r198 */, v64 /* r204 */, v65 /* r195 */, v66 /* r193 */, v67 /* r202 */, v68 /* r196 */, v69 /* r204 */, v70 /* r192 */;
  let v71 /* r204 */, arr_v72 /* r204 */, v73 /* r205 */, v74 /* r205 */, v75 /* r202 */, v76 /* r205 */, win_v77 /* r205 */, v84 /* r193 */, v85 /* r195 */, fn_v86 /* r199 */;
  let v87 /* r196 */, v88 /* r198 */, v89 /* r202 */, v90 /* r202 */, v91 /* r204 */, v92 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v6 3, win_v13 3, win_v20 3, win_v77 3, win_v78 3
  //   Function: fn_v12 3, fn_v18 3, fn_v19 3, fn_v28 3, fn_v30 3, fn_v86 3
  //   Worker: worker_v26 3, worker_v27 3, worker_v31 3
  //   Array: arr_v56 3, arr_v72 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 9 dead register writes dropped, 5 constants propagated (5 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(15, 16, 17, 19);                                   // #206921:240:53 #206931:209:211 [L d1 h1 c1]
  v1 = undefined;                                       // #206937:129:233 [L d1 h1 c1]
  v2 = undefined;                                       // #206940:113:233 #206943:161:233 [L d1 h1 c1]
  v3 = undefined;                                       // #206946:17:233 [L d1 h1 c1]
  v4 = undefined;                                       // #206949:193:233 #206952:177:233 [L d1 h1 c1]
  v5 = undefined;                                       // #206955:225:233 [L d1 h1 c1]
  win_v6 = win_v78[v83];                                // #206958:119:7 [L d1 h1 c1]
  v7 = KP(206961);                                      // #206962:15:233 [L d1 h1 c1]
  v8 = MC(win_v6, v79, v7);                             // #207055:236:114 [L d1 h1 c1]
  v9 = 0;                                               // #207060:147:72 [L d1 h1 c1]
  v84 = "eval";                                         // #207063:187:233 [L d1 h1 c1]
  v10 = undefined;                                      // #207068:67:233 [L d1 h1 c1]
  v11 = "this";                                         // #207071:171:233 [L d1 h1 c1] +#207076:143:53
  while ((fn_v12 = win_v78.eval, win_v13 = MC(undefined, fn_v12, "this"), v14 = !(!(win_v78 === win_v13)), !(v14))) {  // #207081:174:7 | #207085:207:114 | #207090:255:65 #207094:236:130 #207097:101:130 | #207100:96:160 [L d1 h1 c1]
    // #207106:176:53 [-] /* never executed in any replay */
  }
  v15 = cell[1];                                        // #207116:125:236 [L d1 h1 c1]
  v16 = v15[v82];                                       // #207119:163:7 [L d1 h1 c1]
  v17 = v15[v16];                                       // #207123:177:7 [L d1 h1 c1]
  cell[15] = v17;                                       // #207127:211:195 [L d1 h1 c1]
  fn_v18 = clos;                                        // #207130:238:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v18 = its home register (H139 CLOS bind)
  fn_v19 = fn_v18;                                      // #207144:163:150 [L d1 h1 c1]
  cell[16] = fn_v18;                                    // #207147:125:195 [L d1 h1 c1]
  v17.ExHMy4 = fn_v19;                                  // #207150:206:142 [L d1 h1 c1]
  try {
    TP(tryStack, 207744, 144, callDepths);                         // #207155:127:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v20 = win_v78[v83];                             // #207161:29:7 [L d1 h1 c1]
    v21 = KP(207164);                                   // #207165:157:233 [L d1 h1 c1]
    v22 = win_v20.uOdMb2(v21);                          // #207258:122:138 [L d1 h1 c1]
    v17[v81] = 0;                                       // #207277:204:103 [L d1 h1 c1]
    v17[v80] = ("");                                    // #207282:80:233 #207286:170:199 [L d1 h1 c1]
    v23 = cell[1];                                      // #207290:237:236 [L d1 h1 c1]
    v24 = v23[v82];                                     // #207293:83:7 [L d1 h1 c1]
    v25 = v23[v24];                                     // #207297:161:7 [L d1 h1 c1]
    cell[17] = v25;                                     // #207301:3:195 [L d1 h1 c1]
    worker_v26 = v23.WdGLU4;                            // #207304:142:200 [L d1 h1 c1]
    cell[19] = false;                                   // #207309:138:233 #207312:136:195 [L d1 h1 c1]
    worker_v27 = worker_v26;                            // #207315:85:150 [L d1 h1 c1]
    fn_v28 = worker_v26.addEventListener;               // #207318:24:200 [L d1 h1 c1]
    v29 = "message";                                    // #207323:108:233 [L d1 h1 c1]
    fn_v30 = clos;                                      // #207328:99:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v30 = its home register (H139 CLOS bind)
    v85 = fn_v28.call(worker_v27, v29, fn_v30);         // #207340:168:138 [L d1 h1 c1]
    worker_v31 = worker_v26;                            // #207371:245:150 [L d1 h1 c1]
    fn_v86 = worker_v26.postMessage;                    // #207374:56:200 [L d1 h1 c1]
    v32 = "LMjs9";                                      // #207379:12:233 #207418:144:233 [L d1 h1 c1]
    v33 = "var n=self.navigator;postMessage({ " + "LMjs9";      // #207427:101:222 [L d1 h1 c1]
    v34 = ":n.platform,";                               // #207431:197:233 [L d1 h1 c1]
    v35 = ("var n=self.navigator;postMessage({ " + "LMjs9") + ":n.platform,";      // #207447:6:222 [L d1 h1 c1]
    v36 = "jQiC3";                                      // #207451:34:233 [L d1 h1 c1]
    v37 = (("var n=self.navigator;postMessage({ " + "LMjs9") + ":n.platform,") + "jQiC3";      // #207460:47:222 [L d1 h1 c1]
    v38 = ":n.languages,";                              // #207464:231:233 [L d1 h1 c1]
    v39 = v37 + (":n.languages,");                      // #207481:32:222 [L d1 h1 c1]
    v40 = "NyGWL0";                                     // #207485:84:233 [L d1 h1 c1]
    v41 = (v37 + ":n.languages,") + "NyGWL0";           // #207495:25:222 [L d1 h1 c1]
    v42 = ":n.hardwareConcurrency,";                    // #207499:169:233 [L d1 h1 c1]
    v43 = v41 + (":n.hardwareConcurrency,");            // #207526:90:222 [L d1 h1 c1]
    v44 = "lGMKW4";                                     // #207530:38:233 [L d1 h1 c1]
    v45 = v43 + ("lGMKW4");                             // #207540:35:222 [L d1 h1 c1]
    v46 = ":n.deviceMemory,";                           // #207544:11:233 [L d1 h1 c1]
    v47 = v45 + (":n.deviceMemory,");                   // #207564:180:222 [L d1 h1 c1]
    v48 = "ynPml0";                                     // #207568:152:233 [L d1 h1 c1]
    v49 = v47 + ("ynPml0");                             // #207578:77:222 [L d1 h1 c1]
    v50 = ":n.userAgent});setTimeout(function(){postMessage({ ";      // #207582:13:233 [L d1 h1 c1]
    v51 = v49 + ":n.userAgent});setTimeout(function(){postMessage({ ";      // #207637:46:222 [L d1 h1 c1]
    v52 = "MaTl8";                                      // #207641:170:233 [L d1 h1 c1]
    v53 = v51 + ("MaTl8");                              // #207650:151:222 [L d1 h1 c1]
    v87 = ":1})},5000)";                                // #207654:175:233 [L d1 h1 c1]
    v54 = v53 + (":1})},5000)");                        // #207669:200:222 [L d1 h1 c1]
    v88 = fn_v86.call(worker_v31, v54);                 // #207673:185:138 [L d1 h1 c1]
    v55 = 0; if (v17[v81] === 0) {                      // #207698:239:7 #207702:147:69 [L d1 h1 c1]
      v17[v81] = 2;                                     // #207720:214:103 [L d1 h1 c1]
      v17[v80] = ("");                                  // #207725:178:233 #207729:163:210 [L d1 h1 c1]
    }
    arr_v56 = tryStack.pop();                                // #207737:21:124 [L d1 h1 c1]
    arr_v72 = cell[0];                                  // #207740:209:53 #207975:21:236 [L d1 h1 c1]
    v73 = 1;                                            // #207978:88:72 [L d1 h1 c1]
    v89 = arr_v72[1];                                   // #207981:210:7 [L d1 h1 c1]
    v74 = arr_v72[v89];                                 // #207985:228:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #207989:231:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v75 = 1;                                          // #208025:5:72 [L d1 h1 c1]
      v76 = arr_v72[1];                                 // #208028:11:7 [L d1 h1 c1]
      v90 = "QJnkUDzI";                                 // #208032:83:233 [L d1 h1 c1]
      arr_v72[v76] = "QJnkUDzI";                        // #208037:0:210 [L d1 h1 c1]
    } else {
      // #208015:219:53 [-] /* never executed in any replay */
    }
    win_v77 = win_v78[v83];                             // #208045:154:7 [L d1 h1 c1]
    v91 = win_v77.qwQRi7();                             // #208049:195:138 [L d1 h1 c1]
    v92 = undefined;                                    // #208067:43:233 [L d1 h1 c1]
    return v92;                                         // #208070:207:245 [L d1 h1 c1]
  } catch (caught) {
    v57 = caught;                                         // #207745:61:150 [-] /* never executed in any replay */
    v58 = win_v78[v83];                                 // #207748:99:7 [-] /* never executed in any replay */
    v59 = KP(m207751k99);                               // #207752:75:233 [-] /* never executed in any replay */
    v60 = MC(v58, v79, v59);                            // #207845:56:114 [-] /* never executed in any replay */
    v61 = win_v78[v83];                                 // #207850:50:7 [-] /* never executed in any replay */
    v62 = v61;                                          // #207854:215:150 [-] /* never executed in any replay */
    v63 = (v62)[KP(m207856k215)](v57);                  // #207857:76:138 [-] /* never executed in any replay */
    v64 = win_v78[v83];                                 // #207876:246:7 [-] /* never executed in any replay */
    v65 = v64;                                          // #207880:139:150 [-] /* never executed in any replay */
    v66 = v65[KP(m207882k139)];                         // #207883:246:200 [-] /* never executed in any replay */
    v67 = cell[15];                                     // #207888:9:236 [-] /* never executed in any replay */
    v68 = KP(m207890k9);                                // #207891:217:233 [-] /* never executed in any replay */
    v69 = cell[5];                                      // #207896:32:236 [-] /* never executed in any replay */
    v70 = v66.call(v65, v63, v67, v68, v69);            // #207899:177:138 [-] /* never executed in any replay */
    v71 = 1; v67[v81] = 1;                              // #207921:231:103 [-] /* never executed in any replay */
    if (v57[KP(m207925k231)]) {                         // #207926:226:200 #207931:41:160 [-] /* never executed in any replay */
      outside("L207956_134");                           // #207954:134:150 [-]  L207956_134 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L207936_41");  // L207936_41 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}