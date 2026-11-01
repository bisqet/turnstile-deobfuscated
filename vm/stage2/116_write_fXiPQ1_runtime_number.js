function write_fXiPQ1_runtime_number(win_v4 /* r70 */) { // entry L126266_121; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, fn_v3 /* r204 */, v5 /* r198 */, v6 /* r204 */, v7 /* r199 */, arr_v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3
  //   Window: win_v4 3
  //   Array: arr_v8 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = cell[1];                                         // #126267:165:53 #126277:14:236 [L d1 h1 c1]
  v2 = "fXiPQ1";                                        // #126280:10:233 [L d1 h1 c1]
  fn_v3 = win_v4.Date;                                  // #126290:57:200 [L d1 h1 c1]
  v5 = fn_v3.now();                                     // #126295:166:138 [L d1 h1 c1]
  v6 = cell[12];                                        // #126310:249:236 [L d1 h1 c1]
  v7 = v5 - cell[12];                                   // #126313:98:54 [L d1 h1 c1]
  v1.fXiPQ1 = v7;                                       // #126317:244:199 [L d1 h1 c1]
  arr_v8 = [];                                          // #126321:210:107 [L d1 h1 c1]
  cell[6] = arr_v8;                                     // #126323:176:195 [L d1 h1 c1]
  r205 = cell[11]();                                    // #126326:4:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v9 = undefined;                                       // #126330:168:233 [L d1 h1 c1]
  return v9;                                            // #126333:152:245 [L d1 h1 c1]
}