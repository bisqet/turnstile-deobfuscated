function probe_34_helper_228998(win_v24 /* r70 */, v25 /* r209 */, v26 /* r211 */, v27 /* r217 */, v28 /* r221 */) { // entry L228981_197; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
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
  v1 = undefined;                                       // #228982:193:53 #228992:240:233 [L d1 h1 c1]
  win_v2 = win_v24[v28];                                // #228995:10:7 [L d1 h1 c1]
  v3 = KP(228998);                                      // #228999:22:233 [L d1 h1 c1]
  v29 = MC(win_v2, v25, v3);                            // #229092:151:114 [L d1 h1 c1]
  win_v30 = win_v24[v28];                               // #229097:213:7 [L d1 h1 c1]
  if ((win_v30.cQZM8)) {                                // #229101:152:200 #229106:135:160 [L d1 h1 c1]
    v31 = undefined;                                    // #229117:22:233 [-] /* never executed in any replay */
    return v31;                                         // #229120:206:245 [-] /* never executed in any replay */
  }
  arr_v32 = cell[0];                                    // #229112:251:53 #229122:171:236 [L d1 h1 c1]
  v4 = 1;                                               // #229125:22:72 [L d1 h1 c1]
  v5 = arr_v32[1];                                      // #229128:24:7 [L d1 h1 c1]
  v6 = arr_v32[v5];                                     // #229132:146:7 [L d1 h1 c1]
  v33 = "QJnkUDzI";                                     // #229136:126:233 [L d1 h1 c1]
  if (v6 === v33) {                                     // #229141:146:161 [L d1 h1 c1]
    v7 = false;                                         // #229158:71:233 [L d1 h1 c1] +#229161:187:53
  } else {
    v8 = 1;                                             // #229166:169:72 [-] /* never executed in any replay */
    v9 = arr_v32[1];                                    // #229169:31:7 [-] /* never executed in any replay */
    v34 = arr_v32[v9];                                  // #229173:61:7 [-] /* never executed in any replay */
    v35 = "xKkBJ4";                                     // #229177:61:233 [-] /* never executed in any replay */
    v36 = !(v34 === "xKkBJ4");                          // #229187:53:65 #229191:202:130 [-] /* never executed in any replay */
    v7 = v36;                                           // #229194:15:150 [-] +#229197:99:53 /* never executed in any replay */
  }
  if (v7) {                                             // #229202:176:160 [L d1 h1 c1]
    v37 = undefined;                                    // #229213:237:233 [-] /* never executed in any replay */
    return v37;                                         // #229216:9:245 [-] /* never executed in any replay */
  }
  v10 = cell[15];                                       // #229208:192:53 #229218:183:236 [L d1 h1 c1]
  v11 = "ExHMy4";                                       // #229221:79:233 [L d1 h1 c1]
  v12 = undefined;                                      // #229226:135:233 [L d1 h1 c1]
  v10.ExHMy4 = undefined;                               // #229229:197:199 [L d1 h1 c1]
  v13 = v10[v27];                                       // #229233:203:7 [L d1 h1 c1]
  v14 = 1; if (v13 === 1) {                             // #229237:255:69 [L d1 h1 c1]
    v15 = false;                                        // #229255:107:233 [-] +#229258:79:53 /* never executed in any replay */
  } else {
    v38 = v10[v27];                                     // #229263:51:7 [L d1 h1 c1]
    v39 = 4;                                            // #229267:126:72 [L d1 h1 c1]
    v16 = !(v38 === 4);                                 // #229270:178:65 #229274:147:130 [L d1 h1 c1]
    v15 = v16;                                          // #229277:244:150 [L d1 h1 c1] +#229280:244:53
  }
  if (v15) {                                            // #229285:214:160 [L d1 h1 c1]
    v17 = 3; v10[v27] = 3;                              // #229296:95:103 [-] /* never executed in any replay */
    v18 = "";                                           // #229301:87:233 [-] /* never executed in any replay */
    v10[v26] = ("");                                    // #229305:244:210 [-] /* never executed in any replay */
  } else {
    // #229291:206:53 [L d1 h1 c1]
  }
  v19 = 1;                                              // #229313:194:72 [L d1 h1 c1]
  v20 = arr_v32[1];                                     // #229316:20:7 [L d1 h1 c1]
  v21 = arr_v32[v20];                                   // #229320:158:7 [L d1 h1 c1]
  v22 = 1;                                              // #229324:253:72 [L d1 h1 c1]
  v40 = arr_v32[1];                                     // #229327:35:7 [L d1 h1 c1]
  v41 = "UYeD4";                                        // #229331:11:233 [L d1 h1 c1]
  arr_v32[v40] = "UYeD4";                               // #229340:57:199 [L d1 h1 c1]
  if (op52_dispatch()) {                                // #229344:40:52 [L d1 h1 c1]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    arr_v23 = arr_v32;                                  // #229380:120:150 [L d1 h1 c1]
    v42 = 0;                                            // #229383:239:72 [L d1 h1 c1]
    v43 = arr_v32[v42];                                 // #229386:205:7 [L d1 h1 c1]
    v44 = MC(arr_v23, v43);                             // #229390:216:16 [L d1 h1 c1] +#229395:72:53
  } else {
    // #229370:88:53 [-] /* never executed in any replay */
  }
  v45 = undefined;                                      // #229400:158:233 [L d1 h1 c1]
  return v45;                                           // #229403:54:245 [L d1 h1 c1]
}