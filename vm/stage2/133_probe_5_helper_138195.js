function probe_5_helper_138195(win_v10 /* r70 */, v11 /* r213 */, msg_v12 /* r227 */) { // entry L138195_131; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 26 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let msg_v1 /* r205 */, v2 /* r205 */, worker_v3 /* r204 */, fn_v4 /* r204 */, v5 /* r205 */, v6 /* r205 */, v7 /* r205 */, v8 /* r204 */, v9 /* r199 */, v13 /* r198 */;
  let v14 /* r204 */, v15 /* r202 */, v16 /* r199 */, v17 /* r204 */, v18 /* r205 */, worker_v19 /* r199 */, fn_v20 /* r202 */, v21 /* r196 */, v22 /* r204 */, v23 /* r202 */;
  let v24 /* r204 */, v25 /* r199 */, v26 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   MessageEvent: msg_v1 6, msg_v12 6
  //   Worker: worker_v3 3, worker_v19 3
  //   Function: fn_v4 3, fn_v20 3
  //   Window: win_v10 6
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  msg_v1 = msg_v12;                                     // #138196:36:150 [L d2 h2 c2]
  v13 = msg_v1.data;                                    // #138199:100:53 #138209:182:200 [L d2 h2 c2]
  v14 = !v13;                                           // #138214:135:130 [L d2 h2 c2]
  if (v14) {                                            // #138217:122:160 [L d2 h2 c2]
    v2 = v14;                                           // #138255:160:150 [-] +#138258:240:53 /* never executed in any replay */
  } else {
    v15 = v13.SPlh5;                                    // #138223:226:53 #138228:74:200 [L d2 h2 c2]
    v16 = 1;                                            // #138237:249:72 [L d2 h2 c2]
    v17 = !(v15 === 1);                                 // #138240:1:65 #138244:102:130 [L d2 h2 c2]
    v2 = v17;                                           // #138247:59:150 [L d2 h2 c2] +#138250:223:53
  }
  if (v2) {                                             // #138263:255:160 [L d2 h2 c2]
    v18 = undefined;                                    // #138274:57:233 [L d1 h1 c1]
    return v18;                                         // #138277:37:245 [L d1 h1 c1]
  }
  worker_v3 = cell[23];                                 // #138269:147:53 #138279:102:236 [L d1 h1 c1]
  worker_v19 = cell[23];                                // #138282:59:150 [L d1 h1 c1]
  fn_v4 = cell[23].removeEventListener;                 // #138285:230:200 [L d1 h1 c1]
  v5 = "message";                                       // #138290:130:233 [L d1 h1 c1]
  fn_v20 = cell[30];                                    // #138295:101:236 [L d1 h1 c1]
  v21 = fn_v4.call(worker_v19, "message", fn_v20);      // #138298:34:138 [L d1 h1 c1]
  v6 = v13.gDjv1;                                       // #138332:241:200 [L d1 h1 c1]
  v22 = undefined;                                      // #138341:33:233 [L d1 h1 c1]
  if (v6 === v22) {                                     // #138344:105:161 [L d1 h1 c1]
    r205 = cell[28](v13);                               // #138361:102:22 [L d1 h1 c1] +#138365:30:53  VM call: pushes a frame, the callee body returns into r205
  } else {
    v7 = cell[29];                                      // #138370:33:236 [-] /* never executed in any replay */
    v23 = undefined;                                    // #138373:145:233 [-] /* never executed in any replay */
    v8 = win_v10[v11];                                  // #138376:103:7 [-] /* never executed in any replay */
    v9 = v13.gDjv1;                                     // #138380:98:200 [-] /* never executed in any replay */
    v24 = new v8(v9);                                   // #138389:198:1 [-] /* never executed in any replay */
    v25 = MC(v23, v7, v24);                             // #138394:135:114 [-] +#138399:251:53 /* never executed in any replay */
  }
  v26 = undefined;                                      // #138404:113:233 [L d1 h1 c1]
  return v26;                                           // #138407:125:245 [L d1 h1 c1]
}