function fn_then_cb_17471(v1 /* r227 */) { // entry L17471_98; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r202 */, arr_v4 /* r204 */, v5 /* r198 */, v6 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v4 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #17472:71:150 [L d1 h1 c1]
  v3 = "KBTe9";                                         // #17475:187:53 #17485:147:233 [L d1 h1 c1]
  arr_v4 = cell[33];                                    // #17494:114:236 [L d1 h1 c1]
  v5 = 1;                                               // #17497:129:72 [L d1 h1 c1]
  v6 = arr_v4[v5];                                      // #17500:151:7 [L d1 h1 c1]
  v2.KBTe9 = v6;                                        // #17504:149:199 [L d1 h1 c1]
  return v2;                                            // #17508:17:245 [L d1 h1 c1]
}