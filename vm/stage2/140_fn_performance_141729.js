function fn_performance_141729(win_v10 /* r70 */, v11 /* r221 */, v12 /* r223 */) { // entry L141719_157; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 22 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let win_v1 /* r204 */, perf_v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, arr_v5 /* r204 */, v6 /* r205 */, v7 /* r204 */, v8 /* r205 */, v9 /* r204 */, memoryInfo_v13 /* r193 */;
  let v14 /* r192 */, v15 /* r254 */, v16 /* r195 */, v17 /* r196 */, v18 /* r204 */, arr_v19 /* r198 */, arr_v20 /* r202 */, fn_v21 /* r199 */, v22 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v1 18, win_v10 18
  //   Performance: perf_v2 18
  //   Array: arr_v5 54, arr_v19 54, arr_v20 54
  //   MemoryInfo: memoryInfo_v13 18
  //   Function: fn_v21 54
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  win_v1 = win_v10[v11];                                // #141720:57:53 #141730:48:7 [L d6 h6 c6]
  perf_v2 = win_v1.performance;                         // #141734:71:200 [L d6 h6 c6]
  memoryInfo_v13 = perf_v2.memory;                      // #141739:194:200 [L d6 h6 c6]
  v14 = 0;                                              // #141749:145:72 [L d6 h6 c6]
  v15 = 1;                                              // #141752:228:72 [L d6 h6 c6]
  v16 = "toString";                                     // #141755:8:233 [L d6 h6 c6]
  v17 = 23;                                             // #141760:63:72 [L d6 h6 c6] +#141763:211:53
  while ((v4 = cell[24], v18 = v14 < cell[24], v14 < v4)) {  // #141778:128:236 | #141781:1:186 [L d24 h24 c24]
    arr_v19 = cell[21];                                 // #141799:113:236 [L d18 h18 c18]
    arr_v20 = cell[21];                                 // #141802:218:150 [L d18 h18 c18]
    fn_v21 = arr_v20[v12];                              // #141805:204:7 [L d18 h18 c18]
    arr_v5 = cell[23];                                  // #141809:7:236 [L d18 h18 c18]
    v6 = arr_v5[v14];                                   // #141812:133:7 [L d18 h18 c18]
    v7 = memoryInfo_v13[v6];                            // #141816:139:7 [L d18 h18 c18]
    v8 = MC(v7, v16, v17);                              // #141820:120:114 [L d18 h18 c18]
    v9 = fn_v21.call(arr_v20, v8);                      // #141825:169:138 [L d18 h18 c18]
    v3 = v14; v14 = v14 + v15;                          // #141843:21:53 #141768:23:48 [L d18 h18 c18]
  }
  v22 = undefined;                                      // #141848:252:233 [L d6 h6 c6]
  return v22;                                           // #141851:156:245 [L d6 h6 c6]
}