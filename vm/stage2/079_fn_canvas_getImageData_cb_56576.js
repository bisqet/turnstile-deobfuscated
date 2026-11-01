function fn_canvas_getImageData_cb_56576(win_v29 /* r70 */, v30 /* r88 */, ctx2d_v31 /* r227 */) { // entry L56576_80; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 42 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let ctx2d_v1 /* r204 */, v2 /* r205 */, v3 /* r202 */, v4 /* r199 */, v5 /* r202 */, v6 /* r199 */, v7 /* r198 */, v8 /* r196 */, v9 /* r195 */, v10 /* r202 */;
  let v11 /* r199 */, v12 /* r202 */, v13 /* r202 */, v14 /* r199 */, v15 /* r198 */, v16 /* r196 */, math_v17 /* r195 */, v18 /* r254 */, v19 /* r195 */, v20 /* r202 */;
  let v21 /* r202 */, v22 /* r199 */, v23 /* r202 */, v24 /* r199 */, ctx2d_v25 /* r196 */, v26 /* r202 */, v27 /* r199 */, v28 /* r198 */, ctx2d_v32 /* r193 */, fn_v33 /* r192 */;
  let v34 /* r253 */, v35 /* r254 */, v36 /* r195 */, ctx2d_v37 /* r198 */, v38 /* r204 */, v39 /* r202 */, v40 /* r199 */, v41 /* r196 */, v42 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OffscreenCanvasRenderingContext2D: ctx2d_v1 4, ctx2d_v25 4, ctx2d_v31 4, ctx2d_v32 4, ctx2d_v37 4
  //   Math: math_v17 4
  //   Window: win_v29 4
  //   Function: fn_v33 4
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 7 constants propagated (7 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  ctx2d_v1 = ctx2d_v31;                                 // #56577:253:150 [L d2 h2]
  v2 = v30;                                             // #56580:54:150 [L d2 h2]
  v3 = "fillStyle";                                     // #56583:174:53 #56593:32:233 [L d2 h2]
  v4 = "#f06d06";                                       // #56598:84:233 [L d2 h2]
  ctx2d_v1.fillStyle = "#f06d06";                       // #56609:158:199 [L d2 h2]
  v5 = 0;                                               // #56613:253:72 [L d2 h2]
  v6 = 0;                                               // #56616:160:72 [L d2 h2]
  v7 = 16;                                              // #56619:119:72 [L d2 h2]
  v8 = 16;                                              // #56622:178:72 [L d2 h2]
  v9 = ctx2d_v1.fillRect((0), (0), (16), (16));         // #56625:123:138 [L d2 h2]
  v10 = "fillStyle";                                    // #56649:3:233 [L d2 h2]
  v11 = "#0000ff";                                      // #56654:107:233 [L d2 h2]
  ctx2d_v1.fillStyle = "#0000ff";                       // #56665:25:199 [L d2 h2]
  v12 = ctx2d_v1.beginPath();                           // #56669:6:138 [L d2 h2]
  ctx2d_v32 = ctx2d_v1;                                 // #56690:91:150 [L d2 h2]
  fn_v33 = ctx2d_v1.arc;                                // #56693:134:200 [L d2 h2]
  v13 = 8;                                              // #56700:69:72 [L d2 h2]
  v14 = 8;                                              // #56703:200:72 [L d2 h2]
  v15 = 5;                                              // #56706:255:72 [L d2 h2]
  v16 = 0;                                              // #56709:26:72 [L d2 h2]
  math_v17 = win_v29.Math;                              // #56712:9:200 [L d2 h2]
  v18 = math_v17.PI;                                    // #56717:252:200 [L d2 h2]
  v34 = 2;                                              // #56722:99:72 [L d2 h2]
  v19 = math_v17.PI * 2;                                // #56725:223:13 [L d2 h2]
  v35 = fn_v33.call(ctx2d_v32, 8, 8, 5, 0, v19);        // #56729:52:138 [L d2 h2]
  v20 = ctx2d_v1.fill();                                // #56750:117:138 [L d2 h2]
  v21 = "fillStyle";                                    // #56766:149:233 [L d2 h2]
  v22 = "#00ff00";                                      // #56771:53:233 [L d2 h2]
  ctx2d_v1.fillStyle = "#00ff00";                       // #56782:59:199 [L d2 h2]
  v23 = "font";                                         // #56786:195:233 [L d2 h2]
  v24 = "8px serif";                                    // #56791:43:233 [L d2 h2]
  ctx2d_v1.font = "8px serif";                          // #56804:217:199 [L d2 h2]
  ctx2d_v25 = ctx2d_v1;                                 // #56808:162:150 [L d2 h2]
  v26 = "UkWr4";                                        // #56811:78:233 [L d2 h2]
  v27 = 3;                                              // #56820:237:72 [L d2 h2]
  v28 = 12;                                             // #56823:208:72 [L d2 h2]
  v36 = (ctx2d_v25).fillText("UkWr4", 3, 12);           // #56826:161:138 [L d2 h2]
  ctx2d_v37 = ctx2d_v1;                                 // #56849:74:150 [L d2 h2]
  v38 = 0;                                              // #56852:249:72 [L d2 h2]
  v39 = 1;                                              // #56855:172:72 [L d2 h2]
  v40 = 1;                                              // #56858:83:72 [L d2 h2]
  v41 = ctx2d_v37.fillRect(v2, v38, v39, v40);          // #56861:216:138 [L d2 h2]
  v42 = undefined;                                      // #56885:44:233 [L d2 h2]
  return v42;                                           // #56888:12:245 [L d2 h2]
}