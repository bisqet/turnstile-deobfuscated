function fn_document_reduce_201522(win_v4 /* r70 */, v5 /* r88 */, v6 /* r227 */) { // entry L201522_73; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let math_v1 /* r205 */, v2 /* r204 */, v3 /* r205 */, v7 /* r202 */, v8 /* r196 */, math_v9 /* r199 */, fn_v10 /* r198 */, v11 /* r204 */, v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v1 12, math_v9 12
  //   Window: win_v4 12
  //   Function: fn_v10 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v7 = v6;                                              // #201523:82:150 [L d4 h4 c4]
  v8 = v5;                                              // #201526:119:150 [L d4 h4 c4]
  math_v1 = win_v4.Math;                                // #201529:43:53 #201539:207:200 [L d4 h4 c4]
  math_v9 = math_v1;                                    // #201544:64:150 [L d4 h4 c4]
  fn_v10 = math_v1.abs;                                 // #201547:23:200 [L d4 h4 c4]
  v2 = cell[31];                                        // #201554:230:236 [L d4 h4 c4]
  v3 = v2[v8];                                          // #201557:168:7 [L d4 h4 c4]
  v11 = fn_v10.call(math_v9, v3);                       // #201561:25:138 [L d4 h4 c4]
  v12 = v7 + v11;                                       // #201578:10:222 [L d4 h4 c4]
  return v12;                                           // #201582:242:245 [L d4 h4 c4]
}