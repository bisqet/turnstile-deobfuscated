function probe_29_helper_1520(win_v7 /* r70 */, v8 /* r88 */, v9 /* r223 */, fn_v10 /* r227 */, arr_v11 /* r248 */) { // entry L1520_64; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 23 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, v2 /* r199 */, win_v3 /* r199 */, v4 /* r199 */, v5 /* r195 */, v6 /* r199 */, v12 /* r204 */, arr_v13 /* r202 */, v14 /* r198 */, v15 /* r196 */;
  let arr_v16 /* r198 */, fn_v17 /* r196 */, fn_v18 /* r193 */, v19 /* r195 */, v20 /* r199 */, fn_v21 /* r199 */, v22 /* r205 */, v23 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 99, fn_v10 99, fn_v17 99, fn_v18 99, fn_v21 99
  //   Window: win_v3 99, win_v7 99
  //   Array: arr_v11 99, arr_v13 99, arr_v16 99
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  fn_v1 = fn_v10;                                       // #1521:45:150 [L d33 h33 c33]
  v12 = v8;                                             // #1524:166:150 [L d33 h33 c33]
  arr_v13 = arr_v11;                                    // #1527:123:150 [L d33 h33 c33]
  v14 = arr_v13.length;                                 // #1530:31:53 #1540:1:200 [L d33 h33 c33]
  v15 = 0;                                              // #1545:148:72 [L d33 h33 c33]
  v2 = v14 == 0;                                        // #1548:11:120 [L d33 h33 c33]
  if (!(v2)) {                                          // #1552:238:160 [L d33 h33 c33]
    win_v3 = win_v7[v9];                                // #1558:134:53 #1563:35:7 [L d33 h33 c33]
    arr_v16 = win_v3.hbRVt7;                            // #1567:46:200 [L d33 h33 c33]
    fn_v17 = arr_v16.push;                              // #1572:205:200 [L d33 h33 c33]
    fn_v18 = win_v7.String;                             // #1577:176:200 [L d33 h33 c33]
    v4 = 0;                                             // #1582:71:72 [L d33 h33 c33]
    v5 = arr_v13[0];                                    // #1585:197:7 [L d33 h33 c33]
    v6 = fn_v18.call(win_v7, v5);                       // #1589:2:138 [L d33 h33 c33]
    v19 = fn_v17.call(arr_v16, v6);                     // #1609:139:138 [L d33 h33 c33] +#1627:239:53
  }
  v20 = typeof fn_v1;                                   // #1632:4:193 [L d33 h33 c33]
  if (op52_dispatch()) {                                // #1635:135:52 [L d33 h33 c33]  op52 hash dispatch: a hash match continues in the then arm (its target is the next step the traces executed), a miss in the else arm
    fn_v21 = fn_v1;                                     // #1671:105:150 [L d33 h33 c33]
    v22 = (fn_v21).apply(v12, arr_v13);                 // #1674:22:138 [L d33 h33 c33]
    return v22;                                         // #1693:206:245 [L d33 h33 c33]
  }
  v23 = null;                                           // #1661:251:53 #1695:193:233 [-] /* never executed in any replay */
  return v23;                                           // #1698:141:245 [-] /* never executed in any replay */
}