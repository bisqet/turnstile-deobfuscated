function probe_4_fetch(v101 /* r211 */, v102 /* r220 */, v103 /* r223 */, v116 /* r70 */, v117 /* r209 */, v118 /* r217 */, v119 /* r221 */) { // entry L181904_25; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 115 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 7 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 4 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r205 */, v4 /* r198 */, win_v5 /* r204 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, v9 /* r199 */, fn_v10 /* r205 */;
  let win_v11 /* r204 */, v12 /* r205 */, v13 /* r205 */, v14 /* r199 */, v15 /* r202 */, fn_v16 /* r199 */, fn_v17 /* r205 */, win_v18 /* r199 */, v19 /* r205 */, v20 /* r205 */;
  let v21 /* r202 */, v22 /* r204 */, win_v23 /* r202 */, v24 /* r205 */, v25 /* r202 */, win_v26 /* r202 */, v27 /* r204 */, v28 /* r205 */, v29 /* r199 */, v30 /* r202 */;
  let v31 /* r205 */, v32 /* r202 */, v33 /* r204 */, win_v34 /* r202 */, v35 /* r202 */, v36 /* r205 */, v37 /* r202 */, v38 /* r204 */, win_v39 /* r202 */, v40 /* r202 */;
  let v41 /* r205 */, v42 /* r202 */, v43 /* r204 */, win_v44 /* r202 */, v45 /* r202 */, v46 /* r205 */, fn_v47 /* r205 */, v48 /* r198 */, v49 /* r205 */, v50 /* r204 */;
  let v51 /* r202 */, v52 /* r204 */, v53 /* r202 */, v54 /* r204 */, v55 /* r202 */, v56 /* r204 */, v57 /* r202 */, v58 /* r205 */, worker_v59 /* r204 */, fn_v60 /* r204 */;
  let fn_v61 /* r205 */, promise_v62 /* r204 */, fn_v63 /* r199 */, fn_v64 /* r205 */, promise_v65 /* r202 */, fn_v66 /* r199 */, fn_v67 /* r204 */, promise_v68 /* r205 */, arr_v69 /* r202 */, fn_v70 /* r202 */;
  let v71 /* r204 */, v72 /* r198 */, v73 /* r198 */, v74 /* r196 */, v75 /* r205 */, v76 /* r202 */, v77 /* r202 */, v78 /* r204 */, arr_v79 /* r205 */, v80 /* r205 */;
  let v81 /* r198 */, v82 /* r204 */, v83 /* r196 */, v84 /* r198 */, v85 /* r204 */, v86 /* r198 */, v87 /* r204 */, v88 /* r195 */, v89 /* r193 */, v90 /* r202 */;
  let v91 /* r196 */, v92 /* r204 */, v93 /* r192 */, v94 /* r204 */, arr_v95 /* r204 */, v96 /* r205 */, v97 /* r205 */, v98 /* r202 */, v99 /* r205 */, win_v100 /* r205 */;
  let v104 /* r195 */, v105 /* r196 */, v106 /* r198 */, v107 /* r199 */, arr_v108 /* r199 */, v109 /* r198 */, v110 /* r196 */, v111 /* r195 */, v112 /* r202 */, v113 /* r202 */;
  let v114 /* r204 */, v115 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v5 3, win_v11 3, win_v18 3, win_v23 3, win_v26 3, win_v34 3, win_v39 3, win_v44 3
  //   Window: win_v100 3
  //   Function: fn_v10 3, fn_v16 3, fn_v17 3, fn_v47 3, fn_v60 3, fn_v61 3, fn_v63 3, fn_v64 3
  //   Function: fn_v66 3, fn_v67 3, fn_v70 3
  //   Worker: worker_v59 3
  //   Promise: promise_v62 3, promise_v65 3, promise_v68 3
  //   Array: arr_v69 3, arr_v79 3, arr_v95 3, arr_v108 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H137 proven reads: 25 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 13 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 9 single-use temps folded (8 of them expressions, H135), 15 dead register writes dropped, 5 constants propagated (5 uses), 4 string keys as .member; 2 webs kept as registers (retOut 2, liveIn 1, crossCall 1)
  NC(15, 18, 20, 21);                                   // #181905:197:53 #181915:173:211 [L d1 h1 c1]
  v1 = undefined;                                       // #181921:237:233 [L d1 h1 c1]
  v2 = undefined;                                       // #181924:45:233 #181927:109:233 #181930:173:233 #181933:237:233 #181936:45:233 #181939:109:233 [L d1 h1 c1]
  v3 = undefined;                                       // #181942:173:233 #181945:237:233 [L d1 h1 c1]
  v4 = undefined;                                       // #181948:45:233 [L d1 h1 c1]
  win_v5 = v116[v119];                                  // #181951:147:7 [L d1 h1 c1]
  v6 = KP(181954);                                      // #181955:187:233 [L d1 h1 c1]
  v7 = MC(win_v5, v117, v6);                            // #182028:232:114 [L d1 h1 c1]
  v8 = 0;                                               // #182033:159:72 [L d1 h1 c1]
  v104 = "eval";                                        // #182036:151:233 [L d1 h1 c1]
  v105 = undefined;                                     // #182041:175:233 [L d1 h1 c1]
  v9 = "this";                                          // #182044:103:233 [L d1 h1 c1] +#182049:91:53
  while ((fn_v10 = v116.eval, win_v11 = MC(undefined, fn_v10, "this"), v12 = !(!(v116 === win_v11)), !(v12))) {  // #182054:166:7 | #182058:231:114 | #182063:183:65 #182067:196:130 #182070:221:130 | #182073:248:160 [L d1 h1 c1]
    // #182079:232:53 [-] /* never executed in any replay */
  }
  v13 = cell[1];                                        // #182089:82:236 [L d1 h1 c1]
  v14 = v13[v102];                                      // #182092:100:7 [L d1 h1 c1]
  v15 = v13[v14];                                       // #182096:174:7 [L d1 h1 c1]
  cell[15] = v15;                                       // #182100:28:195 [L d1 h1 c1]
  fn_v16 = clos;                                        // #182103:83:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v16 = its home register (H139 CLOS bind)
  fn_v17 = fn_v16;                                      // #182117:180:150 [L d1 h1 c1]
  v15.ExHMy4 = fn_v17;                                  // #182120:233:142 [L d1 h1 c1]
  try {
    TP(tryStack, 183091, 122, callDepths);                         // #182125:238:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v18 = v116[v119];                               // #182131:144:7 [L d1 h1 c1]
    v19 = KP(182134);                                   // #182135:4:233 [L d1 h1 c1]
    v106 = win_v18.uOdMb2(v19);                         // #182208:5:138 [L d1 h1 c1]
    v15[v118] = 0;                                      // #182227:235:103 [L d1 h1 c1]
    v15[v101] = ("");                                   // #182232:179:233 #182236:65:199 [L d1 h1 c1]
    v20 = cell[1];                                      // #182240:232:236 [L d1 h1 c1]
    v21 = v20[v102];                                    // #182243:34:7 [L d1 h1 c1]
    v22 = v20[v21];                                     // #182247:244:7 [L d1 h1 c1]
    win_v23 = v116[v119];                               // #182251:254:7 [L d1 h1 c1]
    v24 = KP(182254);                                   // #182255:58:233 [L d1 h1 c1]
    v107 = MC(win_v23, v117, v24);                      // #182328:43:114 [L d1 h1 c1]
    v25 = "started";                                    // #182333:243:233 #182338:155:233 [L d1 h1 c1]
    v22.UdXu3 = "started";                              // #182349:137:199 [L d1 h1 c1]
    win_v26 = v116[v119];                               // #182353:127:7 [L d1 h1 c1]
    if (win_v26.fetch) {                                // #182357:26:200 #182362:129:160 [L d1 h1 c1]
      v27 = "https://";                                 // #182373:56:233 [L d1 h1 c1]
      v28 = KP(182384);                                 // #182385:12:233 [L d1 h1 c1]
      v29 = cell[3];                                    // #182555:71:236 [L d1 h1 c1]
      v30 = cell[4](v28, v29);                          // #182558:196:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202; then v30 = r202 (H142 CALL bind)
      v31 = v27 + v30;                                  // #182563:201:222 [L d1 h1 c1]
      v32 = "/cdn-cgi/challenge-platform/h/";           // #182567:153:233 [L d1 h1 c1]
      v33 = v31 + ("/cdn-cgi/challenge-platform/h/");      // #182572:138:222 [L d1 h1 c1]
      win_v34 = v116[v119];                             // #182576:188:7 [L d1 h1 c1]
      v35 = win_v34[KP(182579)].ppebL7;                 // #182580:163:200 #182585:174:200 [L d1 h1 c1]
      v36 = v33 + v35;                                  // #182595:139:222 [L d1 h1 c1]
      v37 = "/i/";                                      // #182599:211:233 [L d1 h1 c1]
      v38 = v36 + ("/i/");                              // #182606:92:222 [L d1 h1 c1]
      win_v39 = v116[v119];                             // #182610:198:7 [L d1 h1 c1]
      v40 = win_v39[KP(182613)].dXXrN6;                 // #182614:5:200 #182619:8:200 [L d1 h1 c1]
      v41 = v38 + v40;                                  // #182629:253:222 [L d1 h1 c1]
      v42 = "/";                                        // #182633:253:233 [L d1 h1 c1]
      v43 = v41 + ("/");                                // #182638:94:222 [L d1 h1 c1]
      win_v44 = v116[v119];                             // #182642:64:7 [L d1 h1 c1]
      v45 = win_v44[KP(182645)].EKQGE4;                 // #182646:23:200 #182651:82:200 [L d1 h1 c1]
      v46 = v43 + v45;                                  // #182661:159:222 [L d1 h1 c1]
      cell[18] = v46;                                   // #182665:137:195 [L d1 h1 c1]
      fn_v47 = v116.Date;                               // #182668:124:200 [L d1 h1 c1]
      v48 = fn_v47.now();                               // #182673:157:138 [L d1 h1 c1]
      v49 = {};                                         // #182688:123:159 [L d1 h1 c1]
      v50 = "method";                                   // #182690:3:233 [L d1 h1 c1]
      v51 = "GET";                                      // #182700:107:233 [L d1 h1 c1]
      v49.method = "GET";                               // #182707:25:199 [L d1 h1 c1]
      v52 = "mode";                                     // #182711:169:233 [L d1 h1 c1]
      v53 = "cors";                                     // #182719:249:233 [L d1 h1 c1]
      v49.mode = "cors";                                // #182727:239:199 [L d1 h1 c1]
      v54 = "credentials";                              // #182731:167:233 [L d1 h1 c1]
      v55 = "omit";                                     // #182746:127:233 [L d1 h1 c1]
      v49.credentials = "omit";                         // #182754:221:199 [L d1 h1 c1]
      v56 = "cache";                                    // #182758:93:233 [L d1 h1 c1]
      v57 = "no-store";                                 // #182767:221:233 [L d1 h1 c1]
      v49.cache = "no-store";                           // #182779:67:199 [L d1 h1 c1]
      cell[20] = v49;                                   // #182783:157:195 [L d1 h1 c1]
      v58 = cell[1];                                    // #182786:212:236 [L d1 h1 c1]
      worker_v59 = cell[1].WdGLU4;                      // #182789:91:200 [L d1 h1 c1]
      cell[21] = cell[1].WdGLU4;                        // #182794:85:195 [L d1 h1 c1]
      fn_v60 = v116.Promise;                            // #182797:24:200 [L d1 h1 c1]
      fn_v61 = clos;                                    // #182802:95:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v61 = its home register (H139 CLOS bind)
      promise_v62 = new fn_v60(fn_v61);                 // #182817:15:1 [L d1 h1 c1]
      fn_v63 = promise_v62.then;                        // #182822:106:200 [L d1 h1 c1]
      fn_v64 = clos;                                    // #182827:233:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v64 = its home register (H139 CLOS bind)
      promise_v65 = fn_v63.call(promise_v62, fn_v64);      // #182844:150:138 [L d1 h1 c1]
      fn_v66 = promise_v65.catch;                       // #182862:149:200 [L d1 h1 c1]
      fn_v67 = clos;                                    // #182867:40:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v67 = its home register (H139 CLOS bind)
      promise_v68 = fn_v66.call(promise_v65, fn_v67);      // #182878:153:138 [L d1 h1 c1]
      arr_v69 = cell[6];                                // #182897:224:236 [L d1 h1 c1]
      arr_v108 = cell[6];                               // #182900:77:150 [L d1 h1 c1]
      fn_v70 = arr_v108[v103];                          // #182903:51:7 [L d1 h1 c1]
      v71 = {};                                         // #182907:57:159 [L d1 h1 c1]
      v71.aJBc6 = promise_v68;                          // #182909:154:142 [L d1 h1 c1]
      v71.hwqjX1 = v48;                                 // #182914:183:142 [L d1 h1 c1]
      v72 = 2000;                                       // #182924:79:233 #182929:135:233 [L d1 h1 c1]
      v71.AzXDU3 = 2000;                                // #182934:197:199 [L d1 h1 c1]
      v73 = "Kavdk6";                                   // #182938:165:233 [L d1 h1 c1]
      v74 = cell[1][v102];                              // #182943:188:236 #182946:166:7 [L d1 h1 c1]
      v71.Kavdk6 = v74;                                 // #182950:40:199 [L d1 h1 c1]
      v109 = {};                                        // #182954:60:233 #182959:94:159 [L d1 h1 c1]
      v110 = "UdXu3";                                   // #182961:26:233 [L d1 h1 c1]
      v111 = "timeout";                                 // #182966:230:233 [L d1 h1 c1]
      v109.UdXu3 = "timeout";                           // #182977:104:199 [L d1 h1 c1]
      v71.LfFR4 = v109;                                 // #182981:98:199 [L d1 h1 c1]
      v75 = fn_v70.call(arr_v108, v71);                 // #182985:107:138 [L d1 h1 c1] +#183003:79:53
    } else {
      v76 = "fetch_unavailable";                        // #182368:141:53 #183008:206:233 #183013:202:233 [-] /* never executed in any replay */
      v22.UdXu3 = "fetch_unavailable";                  // #183034:91:210 [-] /* never executed in any replay */
    }
    v77 = cell[15];                                     // #183042:43:236 [L d1 h1 c1]
    v78 = 0; if (v77[v118] === 0) {                     // #183045:25:7 #183049:149:69 [L d1 h1 c1]
      v77[v118] = 3;                                    // #183067:63:103 [L d1 h1 c1]
      v77[v101] = ("");                                 // #183072:183:233 #183076:212:210 [L d1 h1 c1]
    }
    arr_v79 = tryStack.pop();                                // #183084:13:124 [L d1 h1 c1]
    arr_v95 = cell[0];                                  // #183087:233:53 #183297:224:236 [L d1 h1 c1]
    v96 = 1;                                            // #183300:183:72 [L d1 h1 c1]
    v112 = arr_v95[1];                                  // #183303:117:7 [L d1 h1 c1]
    v97 = arr_v95[v112];                                // #183307:187:7 [L d1 h1 c1]
    if (op52_dispatch()) {                              // #183311:34:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
      v98 = 1;                                          // #183347:147:72 [L d1 h1 c1]
      v99 = arr_v95[1];                                 // #183350:225:7 [L d1 h1 c1]
      v113 = "frWQt0";                                  // #183354:81:233 [L d1 h1 c1]
      arr_v95[v99] = "frWQt0";                          // #183364:134:210 [L d1 h1 c1]
    } else {
      // #183337:234:53 [-] /* never executed in any replay */
    }
    win_v100 = v116[v119];                              // #183372:64:7 [L d1 h1 c1]
    v114 = win_v100.qwQRi7();                           // #183376:81:138 [L d1 h1 c1]
    v115 = undefined;                                   // #183394:1:233 [L d1 h1 c1]
    return v115;                                        // #183397:205:245 [L d1 h1 c1]
  } catch (caught) {
    v80 = caught;                                         // #183092:255:150 [-] /* never executed in any replay */
    v81 = r70[r221];                                    // #183095:157:7 [-] /* never executed in any replay */
    v82 = KP(m183098k157);                              // #183099:29:233 [-] /* never executed in any replay */
    v83 = MC(v81, r209, v82);                           // #183172:66:114 [-] /* never executed in any replay */
    v84 = r70[r221];                                    // #183177:148:7 [-] /* never executed in any replay */
    v85 = v84;                                          // #183181:49:150 [-] /* never executed in any replay */
    v86 = (v85)[KP(m183183k49)](v80);                   // #183184:190:138 [-] /* never executed in any replay */
    v87 = r70[r221];                                    // #183203:32:7 [-] /* never executed in any replay */
    v88 = v87;                                          // #183207:141:150 [-] /* never executed in any replay */
    v89 = v88[KP(m183209k141)];                         // #183210:112:200 [-] /* never executed in any replay */
    v90 = cell[15];                                     // #183215:27:236 [-] /* never executed in any replay */
    v91 = KP(m183217k27);                               // #183218:35:233 [-] /* never executed in any replay */
    v92 = cell[5];                                      // #183223:194:236 [-] /* never executed in any replay */
    v93 = v89.call(v88, v86, v90, v91, v92);            // #183226:75:138 [-] /* never executed in any replay */
    v94 = 1; v90[r217] = 1;                             // #183248:153:103 [-] /* never executed in any replay */
    if (v80[KP(m183252k153)]) {                         // #183253:76:200 #183258:107:160 [-] /* never executed in any replay */
      outside("L183283_87");                            // #183281:87:150 [-]  L183283_87 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    outside("L183263_107");  // L183263_107 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}