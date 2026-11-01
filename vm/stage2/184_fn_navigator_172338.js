function fn_navigator_172338(win_v31 /* r70 */, v32 /* r209 */, v33 /* r220 */, v34 /* r221 */) { // entry L172328_236; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 40 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r202 */, win_v3 /* r205 */, win_v4 /* r202 */, fn_v5 /* r199 */, v6 /* r205 */, v7 /* r198 */, navigator_v8 /* r202 */, networkInformation_v9 /* r205 */, v10 /* r205 */;
  let v11 /* r198 */, v12 /* r199 */, v13 /* r202 */, v14 /* r205 */, v15 /* r198 */, v16 /* r199 */, v17 /* r202 */, v18 /* r205 */, v19 /* r198 */, v20 /* r199 */;
  let v21 /* r202 */, v22 /* r205 */, v23 /* r198 */, v24 /* r199 */, v25 /* r202 */, v26 /* r205 */, v27 /* r198 */, v28 /* r199 */, v29 /* r202 */, v30 /* r205 */;
  let v35 /* r204 */, fn_v36 /* r196 */, v37 /* r198 */, v38 /* r199 */, v39 /* r202 */, v40 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v4 3, win_v31 3
  //   Function: fn_v5 3, fn_v36 3
  //   Navigator: navigator_v8 3
  //   NetworkInformation: networkInformation_v9 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 16 constants propagated (16 uses), 6 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(20);                                               // #172329:12:53 #172339:202:211 [L d1 h1 c1]
  clos;                                                 // #172342:201:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  v1 = cell[1];                                         // #172354:80:236 [L d1 h1 c1]
  v2 = v1[v33];                                         // #172357:234:7 [L d1 h1 c1]
  v35 = v1[v2];                                         // #172361:156:7 [L d1 h1 c1]
  win_v3 = win_v31[v34];                                // #172365:6:7 [L d1 h1 c1]
  win_v4 = win_v3;                                      // #172369:91:150 [L d1 h1 c1]
  fn_v5 = win_v4[v32];                                  // #172372:137:7 [L d1 h1 c1]
  v6 = KP(172375);                                      // #172376:89:233 [L d1 h1 c1]
  v7 = fn_v5.call(win_v4, v6);                          // #172449:70:138 [L d1 h1 c1]
  navigator_v8 = win_v31.navigator;                     // #172469:133:200 [L d1 h1 c1]
  networkInformation_v9 = navigator_v8.connection;      // #172474:136:200 [L d1 h1 c1]
  cell[20] = navigator_v8.connection;                   // #172479:14:195 [L d1 h1 c1]
  fn_v36 = clos;                                        // #172482:253:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v36 = its home register (H139 CLOS bind)
  v10 = "vHqDD3";                                       // #172494:253:233 [L d1 h1 c1]
  v11 = undefined;                                      // #172504:253:233 [L d1 h1 c1]
  v12 = "downlink";                                     // #172507:253:233 [L d1 h1 c1]
  v13 = MC(undefined, fn_v36, "downlink");              // #172519:162:114 [L d1 h1 c1]
  v35.vHqDD3 = v13;                                     // #172524:52:199 [L d1 h1 c1]
  v14 = "lMfHk3";                                       // #172528:24:233 [L d1 h1 c1]
  v15 = undefined;                                      // #172538:108:233 [L d1 h1 c1]
  v16 = "downlinkMax";                                  // #172541:112:233 [L d1 h1 c1]
  v17 = MC(undefined, fn_v36, "downlinkMax");           // #172556:9:114 [L d1 h1 c1]
  v35.lMfHk3 = v17;                                     // #172561:191:199 [L d1 h1 c1]
  v18 = "Rhgjd6";                                       // #172565:55:233 [L d1 h1 c1]
  v19 = undefined;                                      // #172575:207:233 [L d1 h1 c1]
  v20 = "effectiveType";                                // #172578:7:233 [L d1 h1 c1]
  v21 = MC(undefined, fn_v36, "effectiveType");         // #172583:4:114 [L d1 h1 c1]
  v35.Rhgjd6 = v21;                                     // #172588:142:199 [L d1 h1 c1]
  v22 = "SiEjG0";                                       // #172592:138:233 [L d1 h1 c1]
  v23 = undefined;                                      // #172602:150:233 [L d1 h1 c1]
  v24 = "rtt";                                          // #172605:114:233 [L d1 h1 c1]
  v25 = MC(undefined, fn_v36, "rtt");                   // #172612:131:114 [L d1 h1 c1]
  v35.SiEjG0 = v25;                                     // #172617:209:199 [L d1 h1 c1]
  v26 = "rLqE9";                                        // #172621:129:233 [L d1 h1 c1]
  v27 = undefined;                                      // #172630:113:233 [L d1 h1 c1]
  v28 = "saveData";                                     // #172633:161:233 [L d1 h1 c1]
  v29 = MC(undefined, fn_v36, "saveData");              // #172645:182:114 [L d1 h1 c1]
  v35.rLqE9 = v29;                                      // #172650:248:199 [L d1 h1 c1]
  v30 = "iSsr0";                                        // #172654:204:233 [L d1 h1 c1]
  v37 = undefined;                                      // #172663:80:233 [L d1 h1 c1]
  v38 = "type";                                         // #172666:196:233 [L d1 h1 c1]
  v39 = MC(v37, fn_v36, v38);                           // #172671:13:114 [L d1 h1 c1]
  v35.iSsr0 = v39;                                      // #172676:179:199 [L d1 h1 c1]
  v40 = undefined;                                      // #172680:91:233 [L d1 h1 c1]
  return v40;                                           // #172683:63:245 [L d1 h1 c1]
}