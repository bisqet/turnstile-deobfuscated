function fn_document_cb_164916(v7 /* r223 */) { // entry L164916_110; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let arr_v1 /* r253 */, arr_v2 /* r204 */, fn_v3 /* r202 */, v4 /* r205 */, v5 /* r199 */, arr_v6 /* r205 */, arr_v8 /* r253 */, fn_v9 /* r204 */, v10 /* r202 */, v11 /* r199 */;
  let v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v2 3, arr_v6 3, arr_v8 3
  //   Function: fn_v3 3, fn_v9 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v1 = cell[23];                                    // #164917:6:53 #164927:241:236 [L d1 h1 c1]
  arr_v2 = cell[23];                                    // #164930:90:150 [L d1 h1 c1]
  fn_v3 = arr_v2[v7];                                   // #164933:76:7 [L d1 h1 c1]
  v4 = "ZkNZ1";                                         // #164937:208:233 [L d1 h1 c1]
  v5 = fn_v3.call(arr_v2, "ZkNZ1");                     // #164946:161:138 [L d1 h1 c1]
  arr_v8 = cell[23];                                    // #164964:200:236 [L d1 h1 c1]
  arr_v6 = cell[23];                                    // #164967:149:150 [L d1 h1 c1]
  fn_v9 = arr_v6[v7];                                   // #164970:91:7 [L d1 h1 c1]
  v10 = cell[22];                                       // #164974:26:236 [L d1 h1 c1]
  v11 = fn_v9.call(arr_v6, v10);                        // #164977:67:138 [L d1 h1 c1]
  v12 = "ZkNZ1";                                        // #164995:171:233 [L d1 h1 c1]
  return "ZkNZ1";                                       // #165004:79:245 [L d1 h1 c1]
}