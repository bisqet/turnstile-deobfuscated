function fn_Worker_165395(win_v55 /* r70 */, v56 /* r221 */) { // entry L165385_229; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 61 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 4 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r199 */, arr_v2 /* r202 */, v3 /* r205 */, v4 /* r204 */, v5 /* r205 */, fn_v6 /* r202 */, win_v7 /* r205 */, win_v8 /* r199 */, fn_v9 /* r198 */, v10 /* r205 */;
  let v11 /* r204 */, trustedScriptURL_v12 /* r205 */, worker_v13 /* r202 */, v14 /* r205 */, fn_v15 /* r204 */, v16 /* r205 */, fn_v17 /* r204 */, worker_v18 /* r204 */, fn_v19 /* r202 */, v20 /* r199 */;
  let v21 /* r198 */, v22 /* r205 */, v23 /* r198 */, v24 /* r199 */, v25 /* r198 */, v26 /* r205 */, v27 /* r198 */, v28 /* r199 */, v29 /* r198 */, v30 /* r205 */;
  let v31 /* r198 */, v32 /* r199 */, v33 /* r198 */, v34 /* r205 */, v35 /* r198 */, v36 /* r199 */, v37 /* r198 */, v38 /* r205 */, v39 /* r198 */, v40 /* r199 */;
  let v41 /* r198 */, v42 /* r205 */, v43 /* r199 */, v44 /* r205 */, worker_v45 /* r202 */, fn_v46 /* r199 */, v47 /* r205 */, fn_v48 /* r204 */, v49 /* r198 */, v50 /* r205 */;
  let v51 /* r205 */, v52 /* r198 */, v53 /* r199 */, v54 /* r205 */, worker_v57 /* r204 */, fn_v58 /* r202 */, v59 /* r198 */, v60 /* r199 */, v61 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v6 3, fn_v9 3, fn_v15 3, fn_v17 3, fn_v19 3, fn_v46 3, fn_v48 3
  //   Function: fn_v58 3
  //   Array: arr_v2 3
  //   Window: win_v7 3, win_v8 3, win_v55 3
  //   TrustedScriptURL: trustedScriptURL_v12 3
  //   Worker: worker_v13 3, worker_v18 3, worker_v45 3, worker_v57 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(61, 62);                                           // #165386:97:53 #165396:43:211 [L d1 h1 c1]
  clos;                                                 // #165400:230:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v1 = clos;                                         // #165411:117:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v1 = its home register (H139 CLOS bind)
  cell[62] = fn_v1;                                     // #165422:135:195 [L d1 h1 c1]
  arr_v2 = cell[49];                                    // #165425:150:236 [L d1 h1 c1]
  v3 = 0;                                               // #165428:21:72 [L d1 h1 c1]
  v4 = fn_v1();                                         // #165431:29:113 [L d1 h1 c1]
  arr_v2[0] = v4;                                       // #165435:131:199 [L d1 h1 c1]
  v5 = false;                                           // #165439:235:233 [L d1 h1 c1]
  cell[61] = false;                                     // #165442:165:195 [L d1 h1 c1]
  fn_v6 = win_v55.Worker;                               // #165445:40:200 [L d1 h1 c1]
  win_v7 = win_v55[v56];                                // #165450:98:7 [L d1 h1 c1]
  win_v8 = win_v7;                                      // #165454:71:150 [L d1 h1 c1]
  fn_v9 = win_v7.YMwdw2;                                // #165457:194:200 [L d1 h1 c1]
  v10 = cell[1];                                        // #165467:165:236 [L d1 h1 c1]
  v11 = cell[1].YFZTc5;                                 // #165470:40:200 [L d1 h1 c1]
  trustedScriptURL_v12 = fn_v9.call(win_v8, v11);       // #165475:153:138 [L d1 h1 c1]
  worker_v13 = new fn_v6(trustedScriptURL_v12);         // #165495:225:1 [L d1 h1 c1]
  cell[51] = worker_v13;                                // #165500:67:195 [L d1 h1 c1]
  v14 = "onmessage";                                    // #165503:171:233 [L d1 h1 c1]
  fn_v15 = clos;                                        // #165516:102:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v15 = its home register (H139 CLOS bind)
  worker_v13[v14] = fn_v15;                             // #165529:232:199 [L d1 h1 c1]
  v16 = "onerror";                                      // #165533:252:233 [L d1 h1 c1]
  fn_v17 = clos;                                        // #165544:179:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v17 = its home register (H139 CLOS bind)
  worker_v13[v16] = fn_v17;                             // #165553:65:199 [L d1 h1 c1]
  worker_v18 = worker_v13;                              // #165557:106:150 [L d1 h1 c1]
  fn_v19 = worker_v13.postMessage;                      // #165560:25:200 [L d1 h1 c1]
  v20 = "try{postMessage({";                            // #165565:169:233 [L d1 h1 c1]
  v21 = "nAOXb9";                                       // #165586:249:233 [L d1 h1 c1]
  v22 = ("try{postMessage({") + ("nAOXb9");             // #165596:106:222 [L d1 h1 c1]
  v23 = ":\"";                                          // #165600:246:233 [L d1 h1 c1]
  v24 = ("try{postMessage({" + "nAOXb9") + ":\"";       // #165606:179:222 [L d1 h1 c1]
  v25 = "kxQk1";                                        // #165610:91:233 [L d1 h1 c1]
  v26 = (("try{postMessage({" + "nAOXb9") + ":\"") + "kxQk1";  // #165619:196:222 [L d1 h1 c1]
  v27 = "\",";                                          // #165623:104:233 [L d1 h1 c1]
  v28 = v26 + ("\",");                                  // #165629:221:222 [L d1 h1 c1]
  v29 = "xqJr8";                                        // #165633:93:233 [L d1 h1 c1]
  v30 = (v26 + "\",") + "xqJr8";                        // #165642:62:222 [L d1 h1 c1]
  v31 = ":performance.now()});}catch(_err){};";         // #165646:122:233 [L d1 h1 c1]
  v32 = v30 + ":performance.now()});}catch(_err){};";   // #165686:39:222 [L d1 h1 c1]
  v33 = "eval(_p?_p.createScript(\"debugger\"):\"debugger\");postMessage({ ";  // #165690:255:233 [L d1 h1 c1]
  v34 = v32 + "eval(_p?_p.createScript(\"debugger\"):\"debugger\");postMessage({ ";  // #165756:216:222 [L d1 h1 c1]
  v35 = "seMw9";                                        // #165760:44:233 [L d1 h1 c1]
  v36 = v34 + ("seMw9");                                // #165769:145:222 [L d1 h1 c1]
  v37 = ":\"";                                          // #165773:65:233 [L d1 h1 c1]
  v38 = v36 + (":\"");                                  // #165779:146:222 [L d1 h1 c1]
  v39 = "XnWrA3";                                       // #165783:126:233 [L d1 h1 c1]
  v40 = v38 + ("XnWrA3");                               // #165793:27:222 [L d1 h1 c1]
  v41 = "\"});";                                        // #165797:35:233 [L d1 h1 c1]
  v42 = v40 + "\"});";                                  // #165805:108:222 [L d1 h1 c1]
  v43 = fn_v19.call(worker_v18, v42);                   // #165809:205:138 [L d1 h1 c1]
  v44 = cell[1];                                        // #165834:68:236 [L d1 h1 c1]
  worker_v45 = cell[1].WdGLU4;                          // #165837:11:200 [L d1 h1 c1]
  fn_v46 = (cell[1].WdGLU4).addEventListener;           // #165842:118:200 [L d1 h1 c1]
  v47 = "message";                                      // #165847:210:233 [L d1 h1 c1]
  fn_v48 = clos;                                        // #165852:177:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v48 = its home register (H139 CLOS bind)
  v49 = fn_v46.call(worker_v45, v47, fn_v48);           // #165863:62:138 [L d1 h1 c1]
  v50 = cell[1];                                        // #165894:49:236 [L d1 h1 c1]
  worker_v57 = cell[1].WdGLU4;                          // #165897:132:200 [L d1 h1 c1]
  fn_v58 = (cell[1].WdGLU4).postMessage;                // #165902:75:200 [L d1 h1 c1]
  v51 = "setTimeout(function(){self.postMessage({ ";    // #165907:147:233 [L d1 h1 c1]
  v52 = "wvdO4";                                        // #165912:187:233 [L d1 h1 c1]
  v53 = ("setTimeout(function(){self.postMessage({ ") + ("wvdO4");  // #165921:164:222 [L d1 h1 c1]
  v59 = ":\"1\"})},1500)";                              // #165925:200:233 [L d1 h1 c1]
  v54 = ("setTimeout(function(){self.postMessage({ " + "wvdO4") + ":\"1\"})},1500)";  // #165942:189:222 [L d1 h1 c1]
  v60 = fn_v58.call(worker_v57, v54);                   // #165946:26:138 [L d1 h1 c1]
  v61 = undefined;                                      // #165971:230:233 [L d1 h1 c1]
  return v61;                                           // #165974:94:245 [L d1 h1 c1]
}