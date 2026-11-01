function probe_13_helper_130954(msg_v3 /* r227 */) { // entry L130926_13; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let msg_v1 /* r205 */, v2 /* r205 */, v4 /* r204 */, v5 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   MessageEvent: msg_v1 15, msg_v3 15
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  msg_v1 = msg_v3;                                      // #130927:6:150 [L d4 h4 c4]
  v4 = msg_v1.data;                                     // #130930:62:53 #130940:173:200 [L d4 h4 c4]
  v2 = v4.fZjpK0;                                       // #130945:16:200 [L d4 h4 c4]
  op52_dispatch();                                      // #130955:99:52 [L d4 h4 c4]  op52 hash dispatch
  v5 = undefined;                                       // #130981:103:53 #131000:66:233 [L d4 h4 c4]
  return v5;                                            // #131003:74:245 [L d4 h4 c4]
}