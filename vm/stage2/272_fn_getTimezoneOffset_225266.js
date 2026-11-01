function fn_getTimezoneOffset_225266() { // entry L225256_123; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 38 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let win_v1 /* r205 */, win_v2 /* r204 */, fn_v3 /* r202 */, v4 /* r205 */, v5 /* r199 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, v9 /* r195 */, v10 /* r196 */;
  let v11 /* r202 */, v12 /* r205 */, v13 /* r195 */, v14 /* r196 */, v15 /* r202 */, v16 /* r205 */, v17 /* r195 */, v18 /* r196 */, v19 /* r202 */, v20 /* r205 */;
  let v21 /* r195 */, v22 /* r196 */, v23 /* r202 */, v24 /* r205 */, v25 /* r202 */, v26 /* r205 */, v27 /* r202 */, fn_v28 /* r198 */, v29 /* r205 */, v30 /* r202 */;
  let v31 /* r205 */, fn_v32 /* r199 */, v33 /* r204 */, v34 /* r195 */, v35 /* r196 */, date_v36 /* r198 */, v37 /* r202 */, v38 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 3, win_v2 3
  //   Function: fn_v3 3, fn_v28 3, fn_v32 3
  //   Date: date_v36 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 16 constants propagated (16 uses), 8 string keys as .member; 1 webs kept as registers (retOut 1)
  clos;                                                 // #225257:31:53 #225267:42:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #225281:169:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #225294:236:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  win_v1 = r70[r221];                                   // #225304:22:7 [L d1 h1 c1]
  win_v2 = win_v1;                                      // #225308:43:150 [L d1 h1 c1]
  fn_v3 = win_v2[r209];                                 // #225311:25:7 [L d1 h1 c1]
  v4 = KP(225314);                                      // #225315:169:233 [L d1 h1 c1]
  v5 = fn_v3.call(win_v2, v4);                          // #225388:86:138 [L d1 h1 c1]
  clos;                                                 // #225408:37:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #225422:120:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v32 = clos;                                        // #225435:63:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v32 = its home register (H139 CLOS bind)
  v6 = cell[1];                                         // #225445:110:236 [L d1 h1 c1]
  v7 = v6[r220];                                        // #225448:16:7 [L d1 h1 c1]
  v33 = v6[v7];                                         // #225452:170:7 [L d1 h1 c1]
  v8 = "hNbEd9";                                        // #225456:54:233 [L d1 h1 c1]
  v9 = undefined;                                       // #225466:146:233 [L d1 h1 c1]
  v10 = "999";                                          // #225469:126:233 [L d1 h1 c1]
  v11 = MC(undefined, r193, "999");                     // #225476:95:114 [L d1 h1 c1]
  v33.hNbEd9 = v11;                                     // #225481:61:199 [L d1 h1 c1]
  v12 = "EMpz5";                                        // #225485:61:233 [L d1 h1 c1]
  v13 = undefined;                                      // #225494:61:233 [L d1 h1 c1]
  v14 = "1060";                                         // #225497:61:233 [L d1 h1 c1]
  v15 = MC(undefined, r193, "1060");                    // #225505:226:114 [L d1 h1 c1]
  v33.EMpz5 = v15;                                      // #225510:116:199 [L d1 h1 c1]
  v16 = "dIpt2";                                        // #225514:88:233 [L d1 h1 c1]
  v17 = undefined;                                      // #225523:172:233 [L d1 h1 c1]
  v18 = "1937";                                         // #225526:176:233 [L d1 h1 c1]
  v19 = MC(undefined, r193, "1937");                    // #225534:73:114 [L d1 h1 c1]
  v33.dIpt2 = v19;                                      // #225539:255:199 [L d1 h1 c1]
  v20 = "rasgK1";                                       // #225543:119:233 [L d1 h1 c1]
  v21 = undefined;                                      // #225553:15:233 [L d1 h1 c1]
  v22 = "1945";                                         // #225556:71:233 [L d1 h1 c1]
  v23 = MC(undefined, r193, "1945");                    // #225564:68:114 [L d1 h1 c1]
  v33.rasgK1 = v23;                                     // #225569:206:199 [L d1 h1 c1]
  v24 = "WPxvo5";                                       // #225573:202:233 [L d1 h1 c1]
  v34 = undefined;                                      // #225583:214:233 [L d1 h1 c1]
  v35 = "1989";                                         // #225586:178:233 [L d1 h1 c1]
  v25 = MC(v34, r193, v35);                             // #225594:195:114 [L d1 h1 c1]
  v33.WPxvo5 = v25;                                     // #225599:17:199 [L d1 h1 c1]
  v26 = "mYkI7";                                        // #225603:193:233 [L d1 h1 c1]
  v27 = r198();                                         // #225612:25:113 [L d1 h1 c1]
  v33.mYkI7 = v27;                                      // #225616:143:199 [L d1 h1 c1]
  fn_v28 = r70.Date;                                    // #225620:234:200 [L d1 h1 c1]
  date_v36 = new fn_v28();                              // #225625:46:1 [L d1 h1 c1]
  v29 = "tBoxI9";                                       // #225629:170:233 [L d1 h1 c1]
  v30 = (date_v36).getTimezoneOffset();                 // #225639:147:138 [L d1 h1 c1]
  v33.tBoxI9 = v30;                                     // #225668:161:199 [L d1 h1 c1]
  v31 = "aNGs5";                                        // #225672:17:233 [L d1 h1 c1]
  v37 = fn_v32();                                       // #225681:41:113 [L d1 h1 c1]
  v33.aNGs5 = v37;                                      // #225685:95:199 [L d1 h1 c1]
  v38 = undefined;                                      // #225689:87:233 [L d1 h1 c1]
  return v38;                                           // #225692:75:245 [L d1 h1 c1]
}