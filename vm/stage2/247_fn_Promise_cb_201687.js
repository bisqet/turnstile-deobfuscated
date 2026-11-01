function fn_Promise_cb_201687(arr_v1 /* r227 */) { // entry L201687_216; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 16 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r198 */, v4 /* r202 */, v5 /* r205 */, v6 /* r198 */, v7 /* r202 */, v8 /* r205 */, v9 /* r198 */, v10 /* r202 */, v11 /* r205 */;
  let arr_v12 /* r199 */, v13 /* r204 */, v14 /* r198 */, v15 /* r202 */, v16 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v12 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v12 = arr_v1;                                     // #201688:101:150 [L d1 h1 c1]
  v13 = cell[20];                                       // #201691:225:53 #201701:2:236 [L d1 h1 c1]
  v2 = "VwnS5";                                         // #201704:46:233 [L d1 h1 c1]
  v3 = 0;                                               // #201713:77:72 [L d1 h1 c1]
  v4 = arr_v12[0];                                      // #201716:51:7 [L d1 h1 c1]
  v13.VwnS5 = v4;                                       // #201720:193:199 [L d1 h1 c1]
  v5 = "eilti5";                                        // #201724:177:233 [L d1 h1 c1]
  v6 = 1;                                               // #201734:132:72 [L d1 h1 c1]
  v7 = arr_v12[1];                                      // #201737:78:7 [L d1 h1 c1]
  v13.eilti5 = v7;                                      // #201741:48:199 [L d1 h1 c1]
  v8 = "jMgtU8";                                        // #201745:36:233 [L d1 h1 c1]
  v9 = 2;                                               // #201755:235:72 [L d1 h1 c1]
  v10 = arr_v12[2];                                     // #201758:217:7 [L d1 h1 c1]
  v13.jMgtU8 = v10;                                     // #201762:79:199 [L d1 h1 c1]
  v11 = "jZWH2";                                        // #201766:135:233 [L d1 h1 c1]
  v14 = 3;                                              // #201775:130:72 [L d1 h1 c1]
  v15 = arr_v12[3];                                     // #201778:212:7 [L d1 h1 c1]
  v13.jZWH2 = v15;                                      // #201782:30:199 [L d1 h1 c1]
  r205 = cell[16]();                                    // #201786:58:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v16 = undefined;                                      // #201790:134:233 [L d1 h1 c1]
  return v16;                                           // #201793:126:245 [L d1 h1 c1]
}