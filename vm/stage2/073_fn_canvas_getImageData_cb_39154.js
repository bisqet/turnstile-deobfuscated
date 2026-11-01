function fn_canvas_getImageData_cb_39154(v5 /* r227 */) { // entry L39154_97; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r204 */, v3 /* r202 */, v4 /* r205 */, v6 /* r198 */, v7 /* r199 */, v8 /* r204 */, v9 /* r202 */, v10 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v6 = v5;                                              // #39155:10:150 [L d1 h1]
  v1 = "DEAR3";                                         // #39158:50:53 #39168:139:233 [L d1 h1]
  v2 = 0;                                               // #39177:118:72 [L d1 h1]
  v7 = 32;                                              // #39180:117:72 [L d1 h1]
  v3 = (v6).substring(0, v7);                           // #39183:242:138 [L d1 h1]
  v8 = "DEAR3" + v3;                                    // #39206:191:222 [L d1 h1]
  v9 = "cicCP7";                                        // #39210:55:233 [L d1 h1]
  v4 = v8 + ("cicCP7");                                 // #39220:48:222 [L d1 h1]
  cell[41] = v4;                                        // #39224:22:195 [L d1 h1]
  v10 = undefined;                                      // #39227:242:233 [L d1 h1]
  return v10;                                           // #39230:58:245 [L d1 h1]
}