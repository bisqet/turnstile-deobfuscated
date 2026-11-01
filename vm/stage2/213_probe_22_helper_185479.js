function probe_22_helper_185479(win_v10 /* r70 */, v11 /* r227 */) { // entry L185479_60; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 20 register webs used only inside this fn (no live-in, cross-call or table-made def; 11 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, math_v2 /* r202 */, math_v3 /* r198 */, fn_v4 /* r196 */, v5 /* r202 */, v6 /* r205 */, math_v7 /* r198 */, v8 /* r204 */, v9 /* r204 */, math_v12 /* r202 */;
  let fn_v13 /* r198 */, v14 /* r196 */, v15 /* r199 */, v16 /* r204 */, v17 /* r204 */, v18 /* r202 */, v19 /* r205 */, v20 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 18, math_v3 18, math_v7 18, math_v12 18
  //   Function: fn_v4 18, fn_v13 18
  //   Window: win_v10 18
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v11;                                             // #185480:57:150 [L d6 h6 c6]
  math_v2 = win_v10.Math;                               // #185483:101:53 #185493:159:200 [L d6 h6 c6]
  math_v3 = math_v2;                                    // #185498:208:150 [L d6 h6 c6]
  fn_v4 = math_v2.exp;                                  // #185501:103:200 [L d6 h6 c6]
  v5 = win_v10.Number(v1);                              // #185508:156:138 [L d6 h6 c6]
  v6 = fn_v4.call(math_v3, v5);                         // #185527:61:138 [L d6 h6 c6]
  math_v7 = win_v10.Math;                               // #185544:96:200 [L d6 h6 c6]
  math_v12 = math_v7;                                   // #185549:205:150 [L d6 h6 c6]
  fn_v13 = math_v7.exp;                                 // #185552:176:200 [L d6 h6 c6]
  v14 = win_v10.Number(v1);                             // #185559:1:138 [L d6 h6 c6]
  v8 = -v14;                                            // #185578:117:189 [L d6 h6 c6]
  v15 = fn_v13.call(math_v12, v8);                      // #185581:242:138 [L d6 h6 c6]
  v16 = Infinity;                                       // #185598:94:233 [L d6 h6 c6]
  if (v16 === v6) {                                     // #185601:242:161 [L d6 h6 c6]
    v19 = 1;                                            // #185663:119:72 [-] +#185666:43:53 /* never executed in any replay */
  } else {
    v9 = Infinity;                                      // #185609:122:53 #185614:198:233 [L d6 h6 c6]
    if (v15 === v9) {                                   // #185617:186:161 [L d6 h6 c6]
      v20 = 1;                                          // #185647:255:72 [-] /* never executed in any replay */
      v19 = -v20;                                       // #185650:251:189 [-] +#185653:159:53 /* never executed in any replay */
    } else {
      v17 = v6 - v15;                                   // #185625:34:53 #185630:46:54 [L d6 h6 c6]
      v18 = v6 + v15;                                   // #185634:11:222 [L d6 h6 c6]
      v19 = v17 / v18;                                  // #185638:211:105 [L d6 h6 c6] +#185642:23:53
    }
  }
  return v19;                                           // #185671:170:245 [L d6 h6 c6]
}