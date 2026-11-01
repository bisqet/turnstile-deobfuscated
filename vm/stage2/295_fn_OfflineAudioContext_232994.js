function fn_OfflineAudioContext_232994(v81 /* r209 */, v82 /* r220 */, v102 /* r70 */, v103 /* r221 */) { // entry L232984_45; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 101 register webs used only inside this fn (no live-in, cross-call or table-made def; 21 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 8 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r204 */, fn_v4 /* r204 */, v5 /* r205 */, v6 /* r204 */, v7 /* r202 */, win_v8 /* r205 */, win_v9 /* r204 */, fn_v10 /* r202 */;
  let v11 /* r205 */, win_v12 /* r204 */, fn_v13 /* r205 */, v14 /* r205 */, v15 /* r204 */, v16 /* r205 */, v17 /* r202 */, v18 /* r205 */, v19 /* r202 */, v20 /* r202 */;
  let win_v21 /* r204 */, fn_v22 /* r205 */, v23 /* r204 */, v24 /* r205 */, v25 /* r205 */, v26 /* r204 */, v27 /* r205 */, v28 /* r202 */, v29 /* r205 */, fn_v30 /* r202 */;
  let fn_v31 /* r204 */, win_v32 /* r204 */, win_v33 /* r202 */, v34 /* r204 */, v35 /* r196 */, fn_v36 /* r205 */, v37 /* r202 */, v38 /* r196 */, offlineAudioContext_v39 /* r205 */, fn_v40 /* r204 */;
  let offlineAudioContext_v41 /* r204 */, fn_v42 /* r204 */, offlineAudioContext_v43 /* r204 */, arr_v44 /* r204 */, v45 /* r195 */, v46 /* r193 */, v47 /* r192 */, v48 /* r193 */, v49 /* r254 */, v50 /* r202 */;
  let v51 /* r196 */, v52 /* r204 */, v53 /* r204 */, v54 /* r202 */, offlineAudioContext_v55 /* r204 */, v56 /* r196 */, v57 /* r199 */, offlineAudioContext_v58 /* r204 */, v59 /* r202 */, v60 /* r204 */;
  let v61 /* r204 */, v62 /* r204 */, v63 /* r204 */, win_v64 /* r204 */, win_v65 /* r202 */, v66 /* r204 */, v67 /* r199 */, promise_v68 /* r204 */, fn_v69 /* r199 */, fn_v70 /* r205 */;
  let promise_v71 /* r202 */, fn_v72 /* r199 */, fn_v73 /* r205 */, promise_v74 /* r204 */, fn_v75 /* r199 */, fn_v76 /* r205 */, promise_v77 /* r202 */, fn_v78 /* r199 */, fn_v79 /* r205 */, fn_v80 /* r205 */;
  let v83 /* r196 */, v84 /* r195 */, v85 /* r193 */, v86 /* r199 */, v87 /* r202 */, v88 /* r204 */, v89 /* r205 */, v90 /* r196 */, v91 /* r195 */, fn_v92 /* r193 */;
  let v93 /* r202 */, v94 /* r204 */, v95 /* r205 */, v96 /* r195 */, v97 /* r196 */, promise_v98 /* r204 */, fn_v99 /* r202 */, promise_v100 /* r199 */, v101 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v4 3, fn_v10 3, fn_v13 3, fn_v22 3, fn_v30 3, fn_v31 3, fn_v36 3, fn_v40 3
  //   Function: fn_v42 3, fn_v69 3, fn_v70 3, fn_v72 3, fn_v73 3, fn_v75 3, fn_v76 3, fn_v78 3
  //   Function: fn_v79 3, fn_v80 3, fn_v92 3, fn_v99 3
  //   Window: win_v8 3, win_v9 3, win_v12 3, win_v21 3, win_v32 3, win_v33 3, win_v64 3, win_v65 3
  //   OfflineAudioContext: offlineAudioContext_v39 3, offlineAudioContext_v41 3, offlineAudioContext_v43 3, offlineAudioContext_v55 3, offlineAudioContext_v58 3
  //   Array: arr_v44 3
  //   Promise: promise_v68 3, promise_v71 3, promise_v74 3, promise_v77 3, promise_v98 3, promise_v100 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 16 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 4 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 8 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4, crossCall 1)
  NC(19, 21, 22, 23, 24, 27, 28, 30, 31, 32, 33, 34, 37);  // #232985:137:53 #232995:26:211 [L d1 h1 c1]
  v83 = undefined;                                      // #233010:230:233 [L d1 h1 c1]
  v84 = undefined;                                      // #233013:130:233 [L d1 h1 c1]
  v1 = undefined;                                       // #233016:174:233 #233019:42:233 [L d1 h1 c1]
  v85 = undefined;                                      // #233022:182:233 [L d1 h1 c1]
  v2 = undefined;                                       // #233025:18:233 #233028:254:233 #233031:58:233 #233034:134:233 [L d1 h1 c1]
  v3 = undefined;                                       // #233037:162:233 #233040:78:233 #233043:74:233 #233046:86:233 [L d1 h1 c1]
  clos;                                                 // #233049:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #233063:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #233079:63:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v4 = clos;                                         // #233099:170:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v4 = its home register (H139 CLOS bind)
  cell[34] = r202;                                      // #233111:40:195 [L d1 h1 c1]
  cell[37] = fn_v4;                                     // #233114:46:195 [L d1 h1 c1]
  v5 = cell[1];                                         // #233117:97:236 [L d1 h1 c1]
  v6 = v5[v82];                                         // #233120:247:7 [L d1 h1 c1]
  v7 = v5[v6];                                          // #233124:181:7 [L d1 h1 c1]
  cell[19] = v7;                                        // #233128:199:195 [L d1 h1 c1]
  win_v8 = v102[v103];                                  // #233131:69:7 [L d1 h1 c1]
  win_v9 = win_v8;                                      // #233135:94:150 [L d1 h1 c1]
  fn_v10 = win_v9[v81];                                 // #233138:64:7 [L d1 h1 c1]
  v11 = KP(233141);                                     // #233142:244:233 [L d1 h1 c1]
  v86 = fn_v10.call(win_v9, v11);                       // #233195:53:138 [L d1 h1 c1]
  win_v12 = v102[v103];                                 // #233215:123:7 [L d1 h1 c1]
  fn_v13 = win_v12.AudioContext;                        // #233219:38:200 [L d1 h1 c1]
  if (fn_v13) {                                         // #233224:93:160 [L d1 h1 c1]
    v90 = 1000;                                         // #233348:134:233 [L d1 h1 c1]
    cell[21] = 1000;                                    // #233353:148:195 [L d1 h1 c1]
    v91 = 44100;                                        // #233356:248:233 [L d1 h1 c1]
    cell[22] = 44100;                                   // #233362:190:195 [L d1 h1 c1]
    v19 = 1;                                            // #233365:157:72 [L d1 h1 c1]
    cell[23] = 1;                                       // #233368:15:195 [L d1 h1 c1]
    v20 = 0.5;                                          // #233371:71:233 [L d1 h1 c1]
    cell[24] = 0.5;                                     // #233382:145:195 [L d1 h1 c1]
    win_v21 = v102[v103];                               // #233385:103:7 [L d1 h1 c1]
    fn_v22 = win_v21.OfflineAudioContext;               // #233389:98:200 [L d1 h1 c1]
    if (fn_v22) {                                       // #233394:169:160 [L d1 h1 c1]
      fn_v92 = fn_v22;                                  // #233446:150:150 [L d1 h1 c1] +#233449:142:53
    } else {
      v23 = v102[v103];                                 // #233400:21:53 #233405:21:7 [-] /* never executed in any replay */
      v24 = v23[KP(233408)];                            // #233409:216:200 [-] /* never executed in any replay */
      fn_v92 = v24;                                     // #233438:101:150 [-] +#233441:225:53 /* never executed in any replay */
    }
    if (fn_v92) {                                       // #233454:246:160 [L d1 h1 c1]
      fn_v30 = clos;                                    // #233598:52:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v30 = its home register (H139 CLOS bind)
      cell[34] = fn_v30;                                // #233612:10:195 [L d1 h1 c1]
      clos;                                             // #233615:9:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
      clos;                                             // #233631:204:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
      fn_v31 = clos;                                    // #233651:67:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v31 = its home register (H139 CLOS bind)
      cell[37] = fn_v31;                                // #233663:157:195 [L d1 h1 c1]
      try {
        TP(tryStack, 233823, 45, callDepths);                      // #233666:210:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        win_v32 = v102[v103];                           // #233672:228:7 [L d1 h1 c1]
        win_v33 = win_v32;                              // #233676:65:150 [L d1 h1 c1]
        v34 = KP(233678);                               // #233679:49:233 [L d1 h1 c1]
        v35 = win_v33.uOdMb2(v34);                      // #233752:190:138 [L d1 h1 c1]
        fn_v36 = fn_v92;                                // #233771:51:150 [L d1 h1 c1]
        v37 = cell[23];                                 // #233774:146:236 [L d1 h1 c1]
        v38 = cell[21];                                 // #233777:53:236 [L d1 h1 c1]
        v96 = cell[22];                                 // #233780:12:236 [L d1 h1 c1]
        offlineAudioContext_v39 = new fn_v36(v37, v38, v96);  // #233783:72:1 [L d1 h1 c1]
        fn_v40 = fn_v92;                                // #233790:21:150 [L d1 h1 c1]
        offlineAudioContext_v41 = new fn_v40(v37, v38, v96);  // #233793:109:1 [L d1 h1 c1]
        cell[27] = offlineAudioContext_v41;             // #233800:159:195 [L d1 h1 c1]
        fn_v42 = fn_v92;                                // #233803:208:150 [L d1 h1 c1]
        offlineAudioContext_v43 = new fn_v42(v37, v38, v96);  // #233806:252:1 [L d1 h1 c1]
        cell[28] = offlineAudioContext_v43;             // #233813:178:195 [L d1 h1 c1]
        arr_v44 = tryStack.pop();                            // #233816:37:124 [L d1 h1 c1]
        v53 = r199(offlineAudioContext_v39);            // #233819:161:53 #234071:178:113 [L d1 h1 c1]
        v54 = undefined;                                // #234076:30:233 [L d1 h1 c1]
        offlineAudioContext_v55 = cell[27];             // #234079:145:236 [L d1 h1 c1]
        v56 = MC(undefined, r199, offlineAudioContext_v55);  // #234082:230:114 [L d1 h1 c1]
        v57 = undefined;                                // #234087:130:233 [L d1 h1 c1]
        offlineAudioContext_v58 = cell[28];             // #234090:101:236 [L d1 h1 c1]
        v59 = cell[24];                                 // #234093:124:236 [L d1 h1 c1]
        v97 = MC(undefined, r198, offlineAudioContext_v58, v59);  // #234096:195:168 [L d1 h1 c1]
        v60 = "";                                       // #234102:43:233 [L d1 h1 c1]
        cell[30] = "";                                  // #234106:229:195 [L d1 h1 c1]
        v61 = "";                                       // #234109:69:233 [L d1 h1 c1]
        cell[31] = "";                                  // #234113:23:195 [L d1 h1 c1]
        v62 = false;                                    // #234116:47:233 [L d1 h1 c1]
        cell[32] = false;                               // #234119:217:195 [L d1 h1 c1]
        v63 = false;                                    // #234122:105:233 [L d1 h1 c1]
        cell[33] = false;                               // #234125:171:195 [L d1 h1 c1]
        win_v64 = v102[v103];                           // #234128:153:7 [L d1 h1 c1]
        win_v65 = win_v64;                              // #234132:98:150 [L d1 h1 c1]
        v66 = KP(234134);                               // #234135:14:233 [L d1 h1 c1]
        v67 = win_v65.uOdMb2(v66);                      // #234188:103:138 [L d1 h1 c1]
        promise_v68 = cell[37](offlineAudioContext_v39);  // #234207:248:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204; then promise_v68 = r204 (H142 CALL bind)
        fn_v69 = promise_v68.then;                      // #234211:239:200 [L d1 h1 c1]
        fn_v70 = clos;                                  // #234216:154:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v70 = its home register (H139 CLOS bind)
        promise_v71 = fn_v69.call(promise_v68, fn_v70);  // #234226:195:138 [L d1 h1 c1]
        fn_v72 = promise_v71.then;                      // #234244:78:200 [L d1 h1 c1]
        fn_v73 = clos;                                  // #234249:61:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v73 = its home register (H139 CLOS bind)
        promise_v74 = fn_v72.call(promise_v71, fn_v73);  // #234259:154:138 [L d1 h1 c1]
        fn_v75 = promise_v74.then;                      // #234277:137:200 [L d1 h1 c1]
        fn_v76 = clos;                                  // #234282:76:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v76 = its home register (H139 CLOS bind)
        promise_v77 = fn_v75.call(promise_v74, fn_v76);  // #234295:45:138 [L d1 h1 c1]
        fn_v78 = promise_v77.catch;                     // #234313:144:200 [L d1 h1 c1]
        fn_v79 = clos;                                  // #234318:247:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v79 = its home register (H139 CLOS bind)
        promise_v98 = fn_v78.call(promise_v77, fn_v79);  // #234330:236:138 [L d1 h1 c1]
        fn_v99 = promise_v98.finally;                   // #234349:19:200 [L d1 h1 c1]
        fn_v80 = clos;                                  // #234360:46:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v80 = its home register (H139 CLOS bind)
        promise_v100 = fn_v99.call(promise_v98, fn_v80);  // #234374:7:138 [L d1 h1 c1]
        v101 = undefined;                               // #234395:95:233 [L d1 h1 c1]
        return v101;                                    // #234398:51:245 [L d1 h1 c1]
      } catch (caught) {
        v45 = caught;                                     // #233824:166:150 [-] /* never executed in any replay */
        v46 = r70[r221];                                // #233827:104:7 [-] /* never executed in any replay */
        v47 = v46;                                      // #233831:181:150 [-] /* never executed in any replay */
        v48 = KP(m233833k181);                          // #233834:213:233 [-] /* never executed in any replay */
        v49 = (v47)[KP(m233886k213)](v48);              // #233887:210:138 [-] /* never executed in any replay */
        v50 = cell[19];                                 // #233906:117:236 [-] /* never executed in any replay */
        v51 = KP(m233908k117);                          // #233909:149:233 [-] /* never executed in any replay */
        v52 = cell[30];                                 // #233918:236:236 [-] /* never executed in any replay */
        if (v52) {                                      // #233921:139:160 [-] /* never executed in any replay */
          outside("L233952_42");                        // #233950:42:150 [-]  L233952_42 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
        outside("L233926_139");  // L233926_139 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
      }
    } else {
      v25 = v102[v103];                                 // #233460:110:53 #233465:225:7 [-] /* never executed in any replay */
      v26 = v25;                                        // #233469:138:150 [-] /* never executed in any replay */
      v27 = KP(233471);                                 // #233472:150:233 [-] /* never executed in any replay */
      v28 = v26.uOdMb2(v27);                            // #233545:207:138 [-] /* never executed in any replay */
      v93 = cell[19];                                   // #233564:190:236 [-] /* never executed in any replay */
      v29 = "fSUn1";                                    // #233567:250:233 [-] /* never executed in any replay */
      v94 = "hAgV6";                                    // #233576:70:233 [-] /* never executed in any replay */
      v93.fSUn1 = "hAgV6";                              // #233585:72:199 [-] /* never executed in any replay */
      r205 = cell[16]();                                // #233589:60:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
      v95 = undefined;                                  // #233593:0:233 [-] /* never executed in any replay */
      return v95;                                       // #233596:144:245 [-] /* never executed in any replay */
    }
  } else {
    v14 = v102[v103];                                   // #233230:249:53 #233235:225:7 [-] /* never executed in any replay */
    v15 = v14;                                          // #233239:138:150 [-] /* never executed in any replay */
    v16 = KP(233241);                                   // #233242:150:233 [-] /* never executed in any replay */
    v17 = v15.uOdMb2(v16);                              // #233295:207:138 [-] /* never executed in any replay */
    v87 = cell[19];                                     // #233314:190:236 [-] /* never executed in any replay */
    v18 = "fSUn1";                                      // #233317:250:233 [-] /* never executed in any replay */
    v88 = "hAgV6";                                      // #233326:70:233 [-] /* never executed in any replay */
    v87.fSUn1 = "hAgV6";                                // #233335:72:199 [-] /* never executed in any replay */
    r205 = cell[16]();                                  // #233339:60:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
    v89 = undefined;                                    // #233343:0:233 [-] /* never executed in any replay */
    return v89;                                         // #233346:144:245 [-] /* never executed in any replay */
  }
}