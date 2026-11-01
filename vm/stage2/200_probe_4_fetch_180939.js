function probe_4_fetch_180939(win_v51 /* r70 */, fn_v52 /* r88 */, fn_v53 /* r227 */) { // entry L180939_117; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 60 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, fn_v2 /* r205 */, fn_v3 /* r205 */, fn_v4 /* r202 */, worker_v5 /* r204 */, worker_v6 /* r199 */, v7 /* r205 */, v8 /* r198 */, v9 /* r199 */, jSON_v10 /* r205 */;
  let jSON_v11 /* r196 */, fn_v12 /* r195 */, v13 /* r205 */, v14 /* r198 */, v15 /* r205 */, v16 /* r199 */, v17 /* r198 */, jSON_v18 /* r205 */, jSON_v19 /* r199 */, v20 /* r205 */;
  let v21 /* r199 */, v22 /* r198 */, v23 /* r205 */, v24 /* r198 */, v25 /* r199 */, v26 /* r198 */, v27 /* r205 */, v28 /* r198 */, v29 /* r199 */, v30 /* r198 */;
  let v31 /* r205 */, v32 /* r198 */, v33 /* r199 */, v34 /* r198 */, v35 /* r205 */, v36 /* r198 */, v37 /* r199 */, v38 /* r198 */, v39 /* r205 */, v40 /* r198 */;
  let v41 /* r199 */, v42 /* r198 */, v43 /* r205 */, v44 /* r198 */, v45 /* r199 */, v46 /* r198 */, v47 /* r205 */, v48 /* r198 */, v49 /* r199 */, v50 /* r205 */;
  let worker_v54 /* r202 */, fn_v55 /* r204 */, fn_v56 /* r195 */, v57 /* r196 */, v58 /* r198 */, v59 /* r199 */, v60 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3, fn_v3 3, fn_v4 3, fn_v12 3, fn_v52 3, fn_v53 3, fn_v55 3
  //   Function: fn_v56 3
  //   Worker: worker_v5 3, worker_v6 3, worker_v54 3
  //   JSON: jSON_v10 3, jSON_v11 3, jSON_v18 3, jSON_v19 3
  //   Window: win_v51 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = fn_v53;                                       // #180940:206:150 [L d1 h1 c1]
  fn_v2 = fn_v52;                                       // #180943:3:150 [L d1 h1 c1]
  NC(25, 26);                                           // #180946:135:53 #180951:114:211 [L d1 h1 c1]
  cell[25] = fn_v1;                                     // #180955:208:195 [L d1 h1 c1]
  cell[26] = fn_v2;                                     // #180958:54:195 [L d1 h1 c1]
  NC(27);                                               // #180961:174:53 #180966:79:211 [L d1 h1 c1]
  fn_v3 = clos;                                         // #180969:122:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  fn_v4 = fn_v3;                                        // #180983:255:150 [L d1 h1 c1]
  cell[27] = fn_v3;                                     // #180986:105:195 [L d1 h1 c1]
  worker_v5 = cell[21];                                 // #180989:112:236 [L d1 h1 c1]
  worker_v6 = cell[21];                                 // #180992:157:150 [L d1 h1 c1]
  v7 = "message";                                       // #180995:29:233 [L d1 h1 c1]
  v8 = (worker_v6).addEventListener("message", fn_v4);  // #181000:250:138 [L d1 h1 c1]
  worker_v54 = worker_v5;                               // #181030:127:150 [L d1 h1 c1]
  fn_v55 = worker_v5.postMessage;                       // #181033:26:200 [L d1 h1 c1]
  v9 = "try{fetch(";                                    // #181038:230:233 [L d1 h1 c1]
  jSON_v10 = win_v51.JSON;                              // #181052:165:200 [L d1 h1 c1]
  jSON_v11 = jSON_v10;                                  // #181057:62:150 [L d1 h1 c1]
  fn_v12 = jSON_v10.stringify;                          // #181060:157:200 [L d1 h1 c1]
  v13 = cell[18];                                       // #181065:212:236 [L d1 h1 c1]
  v14 = fn_v12.call(jSON_v11, v13);                     // #181068:149:138 [L d1 h1 c1]
  v15 = "try{fetch(" + v14;                             // #181091:150:222 [L d1 h1 c1]
  v16 = ",";                                            // #181095:114:233 [L d1 h1 c1]
  v17 = v15 + (",");                                    // #181100:63:222 [L d1 h1 c1]
  jSON_v18 = win_v51.JSON;                              // #181104:218:200 [L d1 h1 c1]
  jSON_v19 = jSON_v18;                                  // #181109:223:150 [L d1 h1 c1]
  fn_v56 = jSON_v18.stringify;                          // #181112:250:200 [L d1 h1 c1]
  v20 = cell[20];                                       // #181117:253:236 [L d1 h1 c1]
  v57 = fn_v56.call(jSON_v19, v20);                     // #181120:90:138 [L d1 h1 c1]
  v21 = v17 + v57;                                      // #181143:135:222 [L d1 h1 c1]
  v22 = KP(181146);                                     // #181147:223:233 [L d1 h1 c1]
  v23 = v21 + v22;                                      // #181240:56:222 [L d1 h1 c1]
  v24 = "TXMF7";                                        // #181244:12:233 [L d1 h1 c1]
  v25 = v23 + ("TXMF7");                                // #181253:241:222 [L d1 h1 c1]
  v26 = ":1,";                                          // #181257:33:233 [L d1 h1 c1]
  v27 = v25 + (":1,");                                  // #181264:242:222 [L d1 h1 c1]
  v28 = "gRuh3";                                        // #181268:94:233 [L d1 h1 c1]
  v29 = v27 + ("gRuh3");                                // #181277:123:222 [L d1 h1 c1]
  v30 = ":r.status,";                                   // #181281:3:233 [L d1 h1 c1]
  v31 = v29 + (":r.status,");                           // #181295:204:222 [L d1 h1 c1]
  v32 = "wGYY0";                                        // #181299:80:233 [L d1 h1 c1]
  v33 = v31 + ("wGYY0");                                // #181308:37:222 [L d1 h1 c1]
  v34 = ":h})}).catch(function(e){postMessage({";       // #181312:133:233 [L d1 h1 c1]
  v35 = v33 + (":h})}).catch(function(e){postMessage({");  // #181354:198:222 [L d1 h1 c1]
  v36 = "TXMF7";                                        // #181358:226:233 [L d1 h1 c1]
  v37 = v35 + ("TXMF7");                                // #181367:239:222 [L d1 h1 c1]
  v38 = ":1,";                                          // #181371:167:233 [L d1 h1 c1]
  v39 = v37 + (":1,");                                  // #181378:224:222 [L d1 h1 c1]
  v40 = "pcrmO0";                                       // #181382:20:233 [L d1 h1 c1]
  v41 = v39 + ("pcrmO0");                               // #181392:217:222 [L d1 h1 c1]
  v42 = ":String(e)})})}catch(e){postMessage({";        // #181396:105:233 [L d1 h1 c1]
  v43 = v41 + (":String(e)})})}catch(e){postMessage({");  // #181437:26:222 [L d1 h1 c1]
  v44 = "TXMF7";                                        // #181441:230:233 [L d1 h1 c1]
  v45 = v43 + ("TXMF7");                                // #181450:227:222 [L d1 h1 c1]
  v46 = ":1,";                                          // #181454:203:233 [L d1 h1 c1]
  v47 = v45 + (":1,");                                  // #181461:116:222 [L d1 h1 c1]
  v48 = "UtMhO3";                                       // #181465:88:233 [L d1 h1 c1]
  v49 = v47 + ("UtMhO3");                               // #181475:13:222 [L d1 h1 c1]
  v58 = ":1})}";                                        // #181479:205:233 [L d1 h1 c1]
  v50 = v49 + (":1})}");                                // #181488:238:222 [L d1 h1 c1]
  v59 = fn_v55.call(worker_v54, v50);                   // #181492:199:138 [L d1 h1 c1]
  v60 = undefined;                                      // #181517:31:233 [L d1 h1 c1]
  return v60;                                           // #181520:243:245 [L d1 h1 c1]
}