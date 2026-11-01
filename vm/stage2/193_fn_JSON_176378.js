function fn_JSON_176378(arr_v1 /* r227 */, win_v4 /* r70 */) { // entry L176378_83; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, jSON_v3 /* r202 */, arr_v5 /* r199 */, v6 /* r204 */, jSON_v7 /* r198 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v5 3
  //   JSON: jSON_v3 3, jSON_v7 3
  //   Window: win_v4 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v5 = arr_v1;                                      // #176379:180:150 [L d1 h1 c1]
  v6 = cell[20];                                        // #176382:180:53 #176392:181:236 [L d1 h1 c1]
  v2 = "kEkZQ3";                                        // #176395:213:233 [L d1 h1 c1]
  jSON_v3 = win_v4.JSON;                                // #176405:152:200 [L d1 h1 c1]
  jSON_v7 = jSON_v3;                                    // #176410:37:150 [L d1 h1 c1]
  v8 = jSON_v7.stringify(arr_v5);                       // #176413:226:138 [L d1 h1 c1]
  v6.kEkZQ3 = v8;                                       // #176435:116:199 [L d1 h1 c1]
  r205 = cell[16]();                                    // #176439:184:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v9 = undefined;                                       // #176443:140:233 [L d1 h1 c1]
  return v9;                                            // #176446:236:245 [L d1 h1 c1]
}