function probe_36_helper_133583(win_v8 /* r70 */, v9 /* r227 */) { // entry L133583_130; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, fn_v2 /* r204 */, v3 /* r205 */, v4 /* r202 */, v5 /* r205 */, v6 /* r204 */, v7 /* r205 */, v10 /* r199 */, v11 /* r205 */, v12 /* r202 */;
  let v13 /* r204 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3
  //   Window: win_v8 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v10 = v9;                                             // #133584:231:150 [L d1 h1 c1]
  v1 = cell[21];                                        // #133587:219:53 #133597:246:236 [L d1 h1 c1]
  if (v1) {                                             // #133600:237:160 [L d1 h1 c1]
    v11 = undefined;                                    // #133611:222:233 [-] /* never executed in any replay */
    return v11;                                         // #133614:118:245 [-] /* never executed in any replay */
  }
  fn_v2 = win_v8.clearTimeout;                          // #133606:73:53 #133616:96:200 [L d1 h1 c1]
  v3 = cell[22];                                        // #133621:75:236 [L d1 h1 c1]
  v4 = fn_v2.call(win_v8, v3);                          // #133624:240:138 [L d1 h1 c1]
  v12 = cell[17];                                       // #133650:155:236 [L d1 h1 c1]
  v5 = "EabR5";                                         // #133653:163:233 [L d1 h1 c1]
  v6 = true;                                            // #133662:139:233 [L d1 h1 c1]
  v12.EabR5 = true;                                     // #133665:185:199 [L d1 h1 c1]
  v7 = "WXCS6";                                         // #133669:201:233 [L d1 h1 c1]
  v13 = v10.quota;                                      // #133678:188:200 [L d1 h1 c1]
  v12.WXCS6 = v13;                                      // #133687:102:199 [L d1 h1 c1]
  r205 = cell[29]();                                    // #133691:98:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v14 = undefined;                                      // #133695:14:233 [L d1 h1 c1]
  return v14;                                           // #133698:230:245 [L d1 h1 c1]
}