function bag_helper_cb_1070(win_v9 /* r70 */, buf_v10 /* r227 */) { // entry L1070_67; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let buf_v1 /* r204 */, fn_v2 /* r205 */, fn_v3 /* r202 */, fn_v4 /* r199 */, fn_v5 /* r205 */, u8_v6 /* r205 */, arr_v7 /* r204 */, fn_v8 /* r205 */, fn_v11 /* r199 */, arr_v12 /* r202 */;
  let v13 /* r204 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   ArrayBuffer: buf_v1 36, buf_v10 36
  //   Function: fn_v2 36, fn_v3 36, fn_v4 36, fn_v5 36, fn_v8 36, fn_v11 36
  //   Uint8Array: u8_v6 36
  //   Array: arr_v7 36, arr_v12 36
  //   Window: win_v9 36
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  buf_v1 = buf_v10;                                     // #1071:228:150 [L d13 h14 c9]
  fn_v2 = win_v9.Array;                                 // #1074:36:53 #1084:192:200 [L d13 h14 c9]
  fn_v3 = fn_v2;                                        // #1089:173:150 [L d13 h14 c9]
  fn_v4 = fn_v2.from;                                   // #1092:16:200 [L d13 h14 c9]
  fn_v5 = win_v9.Uint8Array;                            // #1100:167:200 [L d13 h14 c9]
  u8_v6 = new fn_v5(buf_v1);                            // #1105:55:1 [L d13 h14 c9]
  arr_v7 = fn_v4.call(fn_v3, u8_v6);                    // #1110:44:138 [L d13 h14 c9]
  fn_v11 = arr_v7.map;                                  // #1128:83:200 [L d13 h14 c9]
  fn_v8 = clos;                                         // #1133:110:216 [L d13 h14 c9]  closure creation (operands from the byte stream); then fn_v8 = its home register (H139 CLOS bind)
  arr_v12 = fn_v11.call(arr_v7, fn_v8);                 // #1145:71:138 [L d13 h14 c9]
  v13 = "";                                             // #1162:159:233 [L d13 h14 c9]
  v14 = arr_v12.join((""));                             // #1166:244:138 [L d13 h14 c9]
  return v14;                                           // #1183:180:245 [L d13 h14 c9]
}