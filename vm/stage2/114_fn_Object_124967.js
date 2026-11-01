function fn_Object_124967(win_v5 /* r70 */, v6 /* r227 */) { // entry L124967_37; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, fn_v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v7 /* r204 */, fn_v8 /* r198 */, fn_v9 /* r196 */, v10 /* r199 */, fn_v11 /* r195 */, fn_v12 /* r193 */;
  let v13 /* r202 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 120, fn_v2 120, fn_v8 120, fn_v9 120, fn_v11 120, fn_v12 120
  //   Window: win_v5 120
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v7 = v6;                                              // #124968:190:150 [L d40 h40 c40]
  fn_v1 = win_v5.Object;                                // #124971:22:53 #124981:22:200 [L d40 h40 c40]
  fn_v8 = fn_v1;                                        // #124986:43:150 [L d40 h40 c40]
  fn_v9 = fn_v1.defineProperty;                         // #124989:22:200 [L d40 h40 c40]
  v10 = cell[19];                                       // #124994:169:236 [L d40 h40 c40]
  fn_v2 = win_v5.Object;                                // #124997:28:200 [L d40 h40 c40]
  fn_v11 = fn_v2;                                       // #125002:153:150 [L d40 h40 c40]
  fn_v12 = fn_v11[KP(125004)];                          // #125005:76:200 [L d40 h40 c40]
  v3 = cell[20];                                        // #125010:135:236 [L d40 h40 c40]
  v13 = fn_v12.call(fn_v11, v3, v7);                    // #125013:60:138 [L d40 h40 c40]
  v4 = fn_v9.call(fn_v8, v10, v7, v13);                 // #125052:93:138 [L d40 h40 c40]
  v14 = undefined;                                      // #125082:221:233 [L d40 h40 c40]
  return v14;                                           // #125085:57:245 [L d40 h40 c40]
}