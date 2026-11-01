function fn_Intl_3271(win_v5 /* r70 */, v6 /* r88 */, arr_v7 /* r227 */) { // entry L3271_2; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 23 register webs used only inside this fn (no live-in, cross-call or table-made def; 19 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r204 */, fn_v3 /* r202 */, fn_v4 /* r202 */, arr_v8 /* r205 */, v9 /* r199 */, v10 /* r202 */, v11 /* r204 */, v12 /* r199 */, v13 /* r198 */;
  let v14 /* r196 */, displayNames_v15 /* r204 */, v16 /* r204 */, v17 /* r202 */, arr_v18 /* r199 */, arr_v19 /* r204 */, v20 /* r198 */, v21 /* r204 */, v22 /* r202 */, v23 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 18, fn_v4 3
  //   Window: win_v5 21
  //   Array: arr_v7 21, arr_v8 21, arr_v18 21, arr_v19 21
  //   Intl.DisplayNames: displayNames_v15 3
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 4 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4)
  arr_v8 = arr_v7;                                      // #3272:103:150 [L d7 h7 c7]
  v9 = v6;                                              // #3275:120:150 [L d7 h7 c7]
  v1 = undefined;                                       // #3278:104:53 #3288:30:233 #3291:218:233 #3294:166:233 [L d7 h7 c7] +#3297:66:233
  try {
    TP(tryStack, 3516, 115, callDepths);                           // #3300:35:194 [L d7 h7 c7]  try: pushes the catch arm of the enclosing try (TP)
    v2 = "DisplayNames";                                // #3306:11:233 [L d7 h7 c7]
    if (v2 === v9) {                                    // #3322:43:161 [L d7 h7 c7]
      fn_v4 = win_v5.Intl[v9];                          // #3356:181:200 #3361:251:7 [L d1 h1 c1]
      v12 = {};                                         // #3365:131:233 #3368:73:159 [L d1 h1 c1]
      v13 = "type";                                     // #3370:25:233 [L d1 h1 c1]
      v14 = "language";                                 // #3375:169:233 [L d1 h1 c1]
      v12.type = "language";                            // #3380:223:199 [L d1 h1 c1]
      v10 = new fn_v4(undefined, v12);                  // #3384:143:1 [L d1 h1 c1]
      displayNames_v15 = v10;                           // #3390:0:150 [L d1 h1 c1] +#3393:208:53
    } else {
      fn_v3 = win_v5.Intl[v9];                          // #3330:15:53 #3335:29:200 #3340:195:7 [L d6 h6 c6]
      v10 = new fn_v3();                                // #3344:227:1 [L d6 h6 c6]
      v11 = v10;                                        // #3348:4:150 [L d6 h6 c6] +#3351:196:53
    }
    if (v10) {                                          // #3398:131:160 [L d7 h7 c7]
      v16 = v10.resolvedOptions();                      // #3411:132:138 [L d7 h7 c7]
      if (v16) {                                        // #3438:195:160 [L d7 h7 c7]
        v17 = v16.locale;                               // #3457:251:200 [L d7 h7 c7] +#3467:159:53
      } else {
        v17 = undefined;                                // #3444:71:53 #3449:105:233 [-] +#3452:213:53 /* never executed in any replay */
      }
      if (v17) {                                        // #3472:96:160 [L d7 h7 c7]
        arr_v18 = arr_v8;                               // #3483:39:150 [L d7 h7 c7]
        arr_v19 = (arr_v18).concat(v17);                // #3486:92:138 [L d7 h7 c7]
        return arr_v19;                                 // #3505:124:245 [L d7 h7 c7]
      }
      return arr_v8;                                    // #3478:176:53 #3507:120:245 [-] /* never executed in any replay */
    }
    return arr_v8;                                      // #3404:7:53 #3409:227:245 [-] /* never executed in any replay */
  } catch (caught) {
    v20 = caught;                                         // #3517:84:150 [-] /* never executed in any replay */
    v21 = cell[21];                                     // #3520:111:236 [-] /* never executed in any replay */
    v22 = KP(m3522k111);                                // #3523:39:233 [-] /* never executed in any replay */
    v23 = (win_v5)[KP(m3531k39)](v20);                  // #3532:92:138 [-] /* never executed in any replay */
    v21[v22] = v23;                                     // #3551:134:199 [-] /* never executed in any replay */
    return arr_v8;                                      // #3555:126:245 [-] /* never executed in any replay */
  }
}