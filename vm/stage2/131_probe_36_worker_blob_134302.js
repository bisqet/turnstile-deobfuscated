function probe_36_worker_blob_134302(win_v15 /* r70 */, v16 /* r221 */) { // entry L134292_124; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 22 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r205 */, v4 /* r204 */, fn_v5 /* r204 */, win_v6 /* r205 */, v7 /* r205 */, v8 /* r202 */, trustedScriptURL_v9 /* r205 */, v10 /* r205 */;
  let fn_v11 /* r202 */, v12 /* r205 */, fn_v13 /* r202 */, v14 /* r205 */, v17 /* r205 */, win_v18 /* r199 */, fn_v19 /* r198 */, worker_v20 /* r204 */, v21 /* r202 */, v22 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v5 3, fn_v11 3, fn_v13 3, fn_v19 3
  //   Window: win_v6 3, win_v15 3, win_v18 3
  //   TrustedScriptURL: trustedScriptURL_v9 3
  //   Worker: worker_v20 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[23];                                        // #134293:92:53 #134303:17:236 [L d1 h1 c1]
  if (v1) {                                             // #134306:92:160 [L d1 h1 c1]
    v17 = undefined;                                    // #134317:42:233 [-] /* never executed in any replay */
    return v17;                                         // #134320:146:245 [-] /* never executed in any replay */
  }
  v2 = cell[17];                                        // #134312:188:53 #134322:99:236 [L d1 h1 c1]
  v3 = "gNlRC9";                                        // #134325:75:233 [L d1 h1 c1]
  v4 = true;                                            // #134335:147:233 [L d1 h1 c1]
  v2.gNlRC9 = true;                                     // #134338:161:199 [L d1 h1 c1]
  fn_v5 = win_v15.Worker;                               // #134342:52:200 [L d1 h1 c1]
  win_v6 = win_v15[v16];                                // #134347:62:7 [L d1 h1 c1]
  win_v18 = win_v6;                                     // #134351:179:150 [L d1 h1 c1]
  fn_v19 = win_v6.YMwdw2;                               // #134354:126:200 [L d1 h1 c1]
  v7 = cell[1];                                         // #134364:113:236 [L d1 h1 c1]
  v8 = cell[1].YFZTc5;                                  // #134367:196:200 [L d1 h1 c1]
  trustedScriptURL_v9 = fn_v19.call(win_v18, v8);       // #134372:197:138 [L d1 h1 c1]
  worker_v20 = new fn_v5(trustedScriptURL_v9);          // #134392:93:1 [L d1 h1 c1]
  cell[24] = worker_v20;                                // #134397:207:195 [L d1 h1 c1]
  v10 = "onmessage";                                    // #134400:7:233 [L d1 h1 c1]
  fn_v11 = clos;                                        // #134413:82:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v11 = its home register (H139 CLOS bind)
  worker_v20[v10] = fn_v11;                             // #134426:36:199 [L d1 h1 c1]
  v12 = "onerror";                                      // #134430:72:233 [L d1 h1 c1]
  fn_v13 = clos;                                        // #134441:207:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v13 = its home register (H139 CLOS bind)
  worker_v20[v12] = fn_v13;                             // #134456:237:199 [L d1 h1 c1]
  v14 = KP(134459);                                     // #134460:45:233 [L d1 h1 c1]
  v21 = (worker_v20).postMessage(v14);                  // #134991:202:138 [L d1 h1 c1]
  v22 = undefined;                                      // #135015:214:233 [L d1 h1 c1]
  return v22;                                           // #135018:142:245 [L d1 h1 c1]
}