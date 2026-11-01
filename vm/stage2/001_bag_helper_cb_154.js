function bag_helper_cb_154(v7 /* r88 */, v8 /* r227 */) { // entry L154_245; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 14 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r204 */, v4 /* r199 */, v5 /* r198 */, v6 /* r205 */, v9 /* r204 */, v10 /* r199 */, fn_v11 /* r198 */, v12 /* r196 */;
  let v13 /* r202 */, v14 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v11 597
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v8;                                              // #155:78:150 [L d199 h199 c199]
  v2 = v7;                                              // #158:131:150 [L d199 h199 c199]
  v3 = v1;                                              // #161:7:53 #171:69:150 [L d199 h199 c199]
  v4 = (v3).charCodeAt(v2);                             // #174:130:138 [L d199 h199 c199]
  v5 = 256;                                             // #197:174:233 [L d199 h199 c199]
  v9 = v4 * (256);                                      // #202:190:13 [L d199 h199 c199]
  v10 = v1;                                             // #206:51:150 [L d199 h199 c199]
  fn_v11 = v1.charCodeAt;                               // #209:254:200 [L d199 h199 c199]
  v12 = 1;                                              // #214:221:72 [L d199 h199 c199]
  v6 = v2 + (1);                                        // #217:190:222 [L d199 h199 c199]
  v13 = fn_v11.call(v10, v6);                           // #221:87:138 [L d199 h199 c199]
  v14 = v9 + v13;                                       // #245:208:222 [L d199 h199 c199]
  return v14;                                           // #249:32:245 [L d199 h199 c199]
}