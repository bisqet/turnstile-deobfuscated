function probe_29_helper_1699(win_v5 /* r70 */, v6 /* r223 */) { // entry L1699_75; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let win_v1 /* r204 */, arr_v2 /* r205 */, fn_v3 /* r204 */, v4 /* r202 */, v7 /* r193 */, v8 /* r205 */, v9 /* r202 */, v10 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 3, win_v5 3
  //   Array: arr_v2 3
  //   Function: fn_v3 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  win_v1 = win_v5[v6];                                  // #1700:175:53 #1710:145:7 [L d1 h1 c1]
  arr_v2 = win_v1.hbRVt7;                               // #1714:100:200 [L d1 h1 c1]
  fn_v3 = arr_v2.push;                                  // #1719:171:200 [L d1 h1 c1]
  v7 = cell[30];                                        // #1724:42:236 [L d1 h1 c1]
  v4 = fn_v3.call(arr_v2, v7);                          // #1727:19:138 [L d1 h1 c1]
  v8 = cell[14];                                        // #1745:242:236 [L d1 h1 c1]
  v9 = cell[29];                                        // #1748:21:236 [L d1 h1 c1]
  v10 = v8[v9];                                         // #1751:219:7 [L d1 h1 c1]
  return v10;                                           // #1755:191:245 [L d1 h1 c1]
}