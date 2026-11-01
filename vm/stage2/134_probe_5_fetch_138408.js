function probe_5_fetch_138408(win_v47 /* r70 */, fn_v48 /* r88 */, fn_v49 /* r227 */) { // entry L138408_107; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 56 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, fn_v2 /* r205 */, fn_v3 /* r205 */, fn_v4 /* r202 */, worker_v5 /* r204 */, worker_v6 /* r199 */, v7 /* r205 */, v8 /* r198 */, v9 /* r199 */, jSON_v10 /* r205 */;
  let jSON_v11 /* r196 */, fn_v12 /* r195 */, v13 /* r205 */, v14 /* r198 */, v15 /* r205 */, v16 /* r199 */, v17 /* r198 */, jSON_v18 /* r205 */, jSON_v19 /* r199 */, v20 /* r205 */;
  let v21 /* r199 */, v22 /* r198 */, v23 /* r205 */, v24 /* r198 */, v25 /* r199 */, v26 /* r198 */, v27 /* r205 */, v28 /* r198 */, v29 /* r199 */, v30 /* r198 */;
  let v31 /* r205 */, v32 /* r198 */, v33 /* r199 */, v34 /* r198 */, v35 /* r205 */, v36 /* r198 */, v37 /* r199 */, v38 /* r198 */, v39 /* r205 */, v40 /* r198 */;
  let v41 /* r199 */, v42 /* r198 */, v43 /* r205 */, v44 /* r198 */, v45 /* r199 */, v46 /* r205 */, worker_v50 /* r202 */, fn_v51 /* r204 */, fn_v52 /* r195 */, v53 /* r196 */;
  let v54 /* r198 */, v55 /* r199 */, v56 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3, fn_v3 3, fn_v4 3, fn_v12 3, fn_v48 3, fn_v49 3, fn_v51 3
  //   Function: fn_v52 3
  //   Worker: worker_v5 3, worker_v6 3, worker_v50 3
  //   JSON: jSON_v10 3, jSON_v11 3, jSON_v18 3, jSON_v19 3
  //   Window: win_v47 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = fn_v49;                                       // #138409:108:150 [L d1 h1 c1]
  fn_v2 = fn_v48;                                       // #138412:169:150 [L d1 h1 c1]
  NC(28, 29);                                           // #138415:21:53 #138420:88:211 [L d1 h1 c1]
  cell[28] = fn_v1;                                     // #138424:158:195 [L d1 h1 c1]
  cell[29] = fn_v2;                                     // #138427:76:195 [L d1 h1 c1]
  NC(30);                                               // #138430:236:53 #138435:98:211 [L d1 h1 c1]
  fn_v3 = clos;                                         // #138438:1:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v3 = its home register (H139 CLOS bind)
  fn_v4 = fn_v3;                                        // #138452:42:150 [L d1 h1 c1]
  cell[30] = fn_v3;                                     // #138455:168:195 [L d1 h1 c1]
  worker_v5 = cell[23];                                 // #138458:115:236 [L d1 h1 c1]
  worker_v6 = cell[23];                                 // #138461:84:150 [L d1 h1 c1]
  v7 = "message";                                       // #138464:184:233 [L d1 h1 c1]
  v8 = (worker_v6).addEventListener("message", fn_v4);  // #138469:233:138 [L d1 h1 c1]
  worker_v50 = worker_v5;                               // #138499:114:150 [L d1 h1 c1]
  fn_v51 = worker_v5.postMessage;                       // #138502:1:200 [L d1 h1 c1]
  v9 = "fetch(";                                        // #138507:241:233 [L d1 h1 c1]
  jSON_v10 = win_v47.JSON;                              // #138517:68:200 [L d1 h1 c1]
  jSON_v11 = jSON_v10;                                  // #138522:33:150 [L d1 h1 c1]
  fn_v12 = jSON_v10.stringify;                          // #138525:180:200 [L d1 h1 c1]
  v13 = cell[21];                                       // #138530:79:236 [L d1 h1 c1]
  v14 = fn_v12.call(jSON_v11, v13);                     // #138533:228:138 [L d1 h1 c1]
  v15 = "fetch(" + v14;                                 // #138556:105:222 [L d1 h1 c1]
  v16 = ",";                                            // #138560:185:233 [L d1 h1 c1]
  v17 = v15 + (",");                                    // #138565:42:222 [L d1 h1 c1]
  jSON_v18 = win_v47.JSON;                              // #138569:217:200 [L d1 h1 c1]
  jSON_v19 = jSON_v18;                                  // #138574:162:150 [L d1 h1 c1]
  fn_v52 = jSON_v18.stringify;                          // #138577:113:200 [L d1 h1 c1]
  v20 = cell[22];                                       // #138582:88:236 [L d1 h1 c1]
  v53 = fn_v52.call(jSON_v19, v20);                     // #138585:9:138 [L d1 h1 c1]
  v21 = v17 + v53;                                      // #138608:58:222 [L d1 h1 c1]
  v22 = KP(138611);                                     // #138612:134:233 [L d1 h1 c1]
  v23 = v21 + v22;                                      // #138681:3:222 [L d1 h1 c1]
  v24 = "SPlh5";                                        // #138685:107:233 [L d1 h1 c1]
  v25 = v23 + ("SPlh5");                                // #138694:148:222 [L d1 h1 c1]
  v26 = ":1,";                                          // #138698:248:233 [L d1 h1 c1]
  v27 = v25 + (":1,");                                  // #138705:45:222 [L d1 h1 c1]
  v28 = "IThHn4";                                       // #138709:109:233 [L d1 h1 c1]
  v29 = v27 + ("IThHn4");                               // #138719:14:222 [L d1 h1 c1]
  v30 = ":r.status,";                                   // #138723:10:233 [L d1 h1 c1]
  v31 = v29 + (":r.status,");                           // #138737:119:222 [L d1 h1 c1]
  v32 = "XCkH8";                                        // #138741:15:233 [L d1 h1 c1]
  v33 = v31 + ("XCkH8");                                // #138750:168:222 [L d1 h1 c1]
  v34 = ":r.ok?1:0,";                                   // #138754:188:233 [L d1 h1 c1]
  v35 = v33 + (":r.ok?1:0,");                           // #138768:225:222 [L d1 h1 c1]
  v36 = "mlrf8";                                        // #138772:81:233 [L d1 h1 c1]
  v37 = v35 + ("mlrf8");                                // #138781:98:222 [L d1 h1 c1]
  v38 = ":b})})}).catch(function(e){postMessage({";     // #138785:14:233 [L d1 h1 c1]
  v39 = v37 + (":b})})}).catch(function(e){postMessage({");  // #138829:107:222 [L d1 h1 c1]
  v40 = "SPlh5";                                        // #138833:51:233 [L d1 h1 c1]
  v41 = v39 + ("SPlh5");                                // #138842:60:222 [L d1 h1 c1]
  v42 = ":1,";                                          // #138846:0:233 [L d1 h1 c1]
  v43 = v41 + (":1,");                                  // #138853:21:222 [L d1 h1 c1]
  v44 = "gDjv1";                                        // #138857:181:233 [L d1 h1 c1]
  v45 = v43 + ("gDjv1");                                // #138866:54:222 [L d1 h1 c1]
  v54 = ":String(e)})})";                               // #138870:146:233 [L d1 h1 c1]
  v46 = v45 + (":String(e)})})");                       // #138888:223:222 [L d1 h1 c1]
  v55 = fn_v51.call(worker_v50, v46);                   // #138892:52:138 [L d1 h1 c1]
  v56 = undefined;                                      // #138917:24:233 [L d1 h1 c1]
  return v56;                                           // #138920:72:245 [L d1 h1 c1]
}