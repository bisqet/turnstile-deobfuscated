function fn_atob_cb_18212() { // entry L18212_28; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r205 */, fn_v3 /* r205 */, v4 /* r198 */, v5 /* r204 */, v6 /* r196 */, v7 /* r198 */, arr_v8 /* r196 */, v9 /* r205 */, v10 /* r199 */;
  let v11 /* r202 */, v12 /* r198 */, v13 /* r196 */, v14 /* r204 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3
  //   Array: arr_v8 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = cell[38];                                        // #18213:124:53 #18223:74:236 [L d1 h1 c1]
  if (v1) {                                             // #18226:241:160 [L d1 h1 c1]
    v9 = undefined;                                     // #18237:151:233 [-] /* never executed in any replay */
    return v9;                                          // #18240:139:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #18232:61:53 #18242:127:233 [L d1 h1 c1]
  cell[38] = true;                                      // #18245:233:195 [L d1 h1 c1]
  r205 = cell[54]();                                    // #18248:153:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  fn_v3 = cell[33];                                     // #18252:224:236 [L d1 h1 c1]
  v10 = undefined;                                      // #18255:20:233 [L d1 h1 c1]
  v11 = {};                                             // #18258:214:159 [L d1 h1 c1]
  v4 = "lqHqI0";                                        // #18260:178:233 [L d1 h1 c1]
  v5 = cell[20];                                        // #18270:213:236 [L d1 h1 c1]
  v6 = cell[20].lqHqI0;                                 // #18273:152:200 [L d1 h1 c1]
  v11.lqHqI0 = cell[20].lqHqI0;                         // #18283:210:199 [L d1 h1 c1]
  v7 = "BuKX4";                                         // #18287:190:233 [L d1 h1 c1]
  arr_v8 = cell[20].BuKX4;                              // #18296:29:200 [L d1 h1 c1]
  v11.BuKX4 = cell[20].BuKX4;                           // #18305:131:199 [L d1 h1 c1]
  v12 = "gQet8";                                        // #18309:235:233 [L d1 h1 c1]
  v13 = cell[20].gQet8;                                 // #18318:214:200 [L d1 h1 c1]
  v11.gQet8 = cell[20].gQet8;                           // #18327:152:199 [L d1 h1 c1]
  v14 = MC(v10, fn_v3, v11);                            // #18331:145:114 [L d1 h1 c1]
  v15 = undefined;                                      // #18336:65:233 [L d1 h1 c1]
  return v15;                                           // #18339:13:245 [L d1 h1 c1]
}