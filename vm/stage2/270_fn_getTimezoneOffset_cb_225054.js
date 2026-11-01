function fn_getTimezoneOffset_cb_225054(win_v12 /* r70 */, v13 /* r227 */) { // entry L225054_43; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 18 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r204 */, v2 /* r202 */, v3 /* r205 */, date_v4 /* r204 */, v5 /* r205 */, fn_v6 /* r204 */, v7 /* r202 */, date_v8 /* r204 */, v9 /* r202 */, v10 /* r204 */;
  let v11 /* r205 */, v14 /* r198 */, v15 /* r199 */, v16 /* r202 */, v17 /* r204 */, v18 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 15, fn_v6 15
  //   Date: date_v4 15, date_v8 15
  //   Window: win_v12 15
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v14 = v13;                                            // #225055:44:150 [L d5 h5 c5]
  fn_v1 = win_v12.Date;                                 // #225058:76:53 #225068:244:200 [L d5 h5 c5]
  v2 = "-12-01";                                        // #225073:216:233 [L d5 h5 c5]
  v3 = v14 + ("-12-01");                                // #225083:141:222 [L d5 h5 c5]
  date_v4 = new fn_v1(v3);                              // #225087:5:1 [L d5 h5 c5]
  v5 = date_v4.getTime();                               // #225092:66:138 [L d5 h5 c5]
  fn_v6 = win_v12.Date;                                 // #225111:145:200 [L d5 h5 c5]
  v15 = "12/1/";                                        // #225116:65:233 [L d5 h5 c5]
  v7 = ("12/1/") + v14;                                 // #225125:146:222 [L d5 h5 c5]
  date_v8 = new fn_v6(v7);                              // #225129:54:1 [L d5 h5 c5]
  v9 = date_v8.getTime();                               // #225134:239:138 [L d5 h5 c5]
  v10 = v5 - v9;                                        // #225153:0:54 [L d5 h5 c5]
  v16 = 60000;                                          // #225157:180:233 [L d5 h5 c5]
  v11 = v10 / (60000);                                  // #225163:24:105 [L d5 h5 c5]
  v17 = ~v11;                                           // #225167:24:5 [L d5 h5 c5]
  v18 = ~v17;                                           // #225170:24:5 [L d5 h5 c5]
  return v18;                                           // #225173:72:245 [L d5 h5 c5]
}