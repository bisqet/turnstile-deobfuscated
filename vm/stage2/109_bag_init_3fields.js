function bag_init_3fields(win_v36 /* r70 */, v37 /* r221 */) { // entry L122424_61; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 47 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r198 */, v2 /* r202 */, v3 /* r205 */, v4 /* r204 */, fn_v5 /* r204 */, fn_v6 /* r202 */, fn_v7 /* r199 */, v8 /* r204 */, v9 /* r205 */, v10 /* r205 */;
  let worker_v11 /* r204 */, worker_v12 /* r204 */, v13 /* r205 */, v14 /* r205 */, worker_v15 /* r202 */, v16 /* r204 */, v17 /* r199 */, v18 /* r204 */, v19 /* r199 */, fn_v20 /* r204 */;
  let fn_v21 /* r196 */, v22 /* r192 */, v23 /* r195 */, v24 /* r199 */, v25 /* r205 */, v26 /* r192 */, v27 /* r195 */, win_v28 /* r192 */, v29 /* r205 */, v30 /* r192 */;
  let v31 /* r205 */, v32 /* r192 */, v33 /* r195 */, v34 /* r205 */, v35 /* r205 */, v38 /* r198 */, v39 /* r193 */, v40 /* r254 */, v41 /* r199 */, v42 /* r196 */;
  let v43 /* r195 */, v44 /* r192 */, v45 /* r204 */, v46 /* r202 */, v47 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v5 3, fn_v6 3, fn_v7 3, fn_v20 3, fn_v21 3
  //   Worker: worker_v11 3, worker_v12 3, worker_v15 3
  //   Window: win_v28 3, win_v36 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #122425:89:53 #122435:66:233 [L d1 h1 c1]
  v2 = undefined;                                       // #122438:110:233 [L d1 h1 c1]
  v3 = cell[1];                                         // #122441:161:236 [L d1 h1 c1]
  v4 = cell[1].YFZTc5;                                  // #122444:52:200 [L d1 h1 c1]
  if (v4) {                                             // #122449:179:160 [L d1 h1 c1]
    fn_v5 = win_v36.URL;                                // #122460:83:200 [L d1 h1 c1]
    fn_v6 = fn_v5;                                      // #122467:180:150 [L d1 h1 c1]
    fn_v7 = fn_v5.revokeObjectURL;                      // #122470:187:200 [L d1 h1 c1]
    v8 = v3.YFZTc5;                                     // #122475:102:200 [L d1 h1 c1]
    v9 = fn_v7.call(fn_v6, v8);                         // #122480:95:138 [L d1 h1 c1] +#122509:115:53
  } else {
    // #122455:119:53 [-] /* never executed in any replay */
  }
  v10 = cell[1];                                        // #122514:53:236 [L d1 h1 c1]
  worker_v11 = cell[1].WdGLU4;                          // #122517:120:200 [L d1 h1 c1]
  if (worker_v11) {                                     // #122522:231:160 [L d1 h1 c1]
    worker_v12 = v10.WdGLU4;                            // #122533:127:200 [L d1 h1 c1]
    v13 = (worker_v12).terminate();                     // #122538:84:138 [L d1 h1 c1] +#122559:212:53
  } else {
    // #122528:219:53 [-] /* never executed in any replay */
  }
  v14 = cell[1];                                        // #122564:130:236 [L d1 h1 c1]
  v38 = cell[1].YFZTc5;                                 // #122567:209:200 [L d1 h1 c1]
  worker_v15 = cell[1].WdGLU4;                          // #122572:164:200 [L d1 h1 c1]
  v16 = "YFZTc5";                                       // #122577:200:233 [L d1 h1 c1]
  v17 = undefined;                                      // #122582:92:233 [L d1 h1 c1]
  v14.YFZTc5 = undefined;                               // #122585:134:199 [L d1 h1 c1]
  v18 = "WdGLU4";                                       // #122589:162:233 [L d1 h1 c1]
  v19 = undefined;                                      // #122594:78:233 [L d1 h1 c1]
  v14.WdGLU4 = undefined;                               // #122597:48:199 [L d1 h1 c1]
  fn_v20 = cell[2];                                     // #122601:219:236 [L d1 h1 c1]
  v39 = undefined;                                      // #122604:227:233 [L d1 h1 c1]
  fn_v21 = cell[4];                                     // #122607:130:236 [L d1 h1 c1]
  v22 = undefined;                                      // #122610:174:233 [L d1 h1 c1]
  v23 = KP(122612);                                     // #122613:42:233 [L d1 h1 c1]
  v24 = cell[3];                                        // #122911:109:236 [L d1 h1 c1]
  v25 = MC(undefined, fn_v21, v23, v24);                // #122914:48:168 [L d1 h1 c1]
  v26 = "/h/";                                          // #122920:36:233 [L d1 h1 c1]
  v27 = v25 + ("/h/");                                  // #122927:169:222 [L d1 h1 c1]
  win_v28 = win_v36[v37];                               // #122931:31:7 [L d1 h1 c1]
  v29 = win_v28[KP(122934)];                            // #122935:58:200 [L d1 h1 c1]
  v30 = v29.ppebL7;                                     // #122940:169:200 [L d1 h1 c1]
  v31 = v27 + v30;                                      // #122950:90:222 [L d1 h1 c1]
  v40 = undefined;                                      // #122954:38:233 [L d1 h1 c1]
  v32 = KP(122956);                                     // #122957:194:233 [L d1 h1 c1]
  v33 = MC(v40, fn_v21, v32, v24);                      // #124023:113:168 [L d1 h1 c1]
  v41 = v31 + v33;                                      // #124029:2:222 [L d1 h1 c1]
  v34 = cell[1];                                        // #124033:229:236 [L d1 h1 c1]
  v42 = 0;                                              // #124036:232:72 [L d1 h1 c1]
  v43 = true;                                           // #124039:252:233 [L d1 h1 c1]
  v44 = MC(v39, fn_v20, v41, v34, v42, v43);            // #124042:11:16 [L d1 h1 c1]
  v35 = cell[1];                                        // #124051:10:236 [L d1 h1 c1]
  v35.YFZTc5 = v38;                                     // #124054:103:142 [L d1 h1 c1]
  v35.WdGLU4 = worker_v15;                              // #124059:144:142 [L d1 h1 c1]
  v45 = "sJhNC9";                                       // #124064:4:233 [L d1 h1 c1]
  v46 = "";                                             // #124074:168:233 [L d1 h1 c1]
  v35.sJhNC9 = "";                                      // #124078:162:199 [L d1 h1 c1]
  v47 = undefined;                                      // #124082:78:233 [L d1 h1 c1]
  return v47;                                           // #124085:38:245 [L d1 h1 c1]
}