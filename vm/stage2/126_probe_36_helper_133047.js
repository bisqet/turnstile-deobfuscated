function probe_36_helper_133047(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L133030_21; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 45 register webs used only inside this fn (no live-in, cross-call or table-made def; 22 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, win_v2 /* r204 */, v3 /* r205 */, v4 /* r205 */, v5 /* r202 */, v6 /* r205 */, v7 /* r205 */, v8 /* r199 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r205 */, v12 /* r199 */, v13 /* r205 */, v14 /* r199 */, v15 /* r205 */, v16 /* r199 */, v17 /* r205 */, v18 /* r205 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r205 */, v22 /* r199 */, arr_v23 /* r205 */, v29 /* r202 */, win_v30 /* r204 */, v31 /* r205 */, arr_v32 /* r204 */, v33 /* r202 */, v34 /* r199 */, v35 /* r198 */;
  let v36 /* r202 */, v37 /* r205 */, v38 /* r198 */, v39 /* r196 */, v40 /* r202 */, v41 /* r199 */, v42 /* r199 */, v43 /* r202 */, v44 /* r204 */, v45 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 3, win_v24 3, win_v30 3
  //   Array: arr_v23 3, arr_v32 3
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v1 = undefined;                                       // #133031:209:53 #133041:103:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #133044:101:7 [L d1 h1 c1]
  v3 = KP(133047);                                      // #133048:197:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #133121:74:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #133126:124:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #133130:99:200 #133135:230:160 [L d1 h1 c1]
    v31 = undefined;                                    // #133146:63:233 [-] /* never executed in any replay */
    return v31;                                         // #133149:147:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #133141:158:53 #133151:29:236 [L d1 h1 c1]
  v4 = 1;                                               // #133154:64:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #133157:26:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #133161:12:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #133165:144:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #133170:220:161 [L d1 h1 c1]
    v7 = false;                                         // #133187:230:233 [L d1 h1 c1] +#133190:158:53
  } else {
    v8 = 1;                                             // #133195:180:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #133198:190:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #133202:32:7 [-] /* never executed in any replay */
    v35 = "sCHLHp6";                                    // #133206:84:233 [-] /* never executed in any replay */
    v36 = !(v34 === "sCHLHp6");                         // #133217:176:65 #133221:25:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #133224:226:150 [-] +#133227:170:53 /* never executed in any replay */
  }
  if (v7) {                                             // #133232:201:160 [L d1 h1 c1]
    v37 = undefined;                                    // #133243:109:233 [-] /* never executed in any replay */
    return v37;                                         // #133246:137:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #133238:181:53 #133248:233:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #133251:57:233 [L d1 h1 c1]
  v12 = undefined;                                      // #133256:73:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #133259:255:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #133263:157:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #133267:9:69 [L d1 h1 c1]
    v15 = false;                                        // #133285:91:233 [-] +#133288:127:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #133293:6:7 [L d1 h1 c1]
    v39 = 4;                                            // #133297:197:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #133300:157:65 #133304:146:130 [L d1 h1 c1]
    v15 = v16;                                          // #133307:183:150 [L d1 h1 c1] +#133310:107:53
  }
  if (v15) {                                            // #133315:43:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #133326:174:103 [L d1 h1 c1]
    v18 = "";                                           // #133331:42:233 [L d1 h1 c1]
    v10[v26] = ("");                                    // #133335:59:210 [L d1 h1 c1]
  } else {
    // #133321:15:53 [-] /* never executed in any replay */
  }
  v19 = 1;                                              // #133343:178:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #133346:68:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #133350:14:7 [L d1 h1 c1]
  v22 = 1;                                              // #133354:173:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #133357:19:7 [L d1 h1 c1]
  v41 = "VFlf9";                                        // #133361:59:233 [L d1 h1 c1]
  arr_v32[v40] = "VFlf9";                               // #133370:169:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #133374:216:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #133410:137:150 [L d1 h1 c1]
    v42 = 0;                                            // #133413:252:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #133416:230:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #133420:205:16 [L d1 h1 c1] +#133425:169:53
  } else {
    // #133400:72:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #133430:111:233 [L d1 h1 c1]
  return v45;                                           // #133433:3:245 [L d1 h1 c1]
}