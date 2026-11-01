function fn_performance_addEventListener_141852(msg_v6 /* r227 */) { // entry L141852_201; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let msg_v1 /* r205 */, v2 /* r202 */, v3 /* r204 */, v4 /* r205 */, v5 /* r205 */, v7 /* r202 */, v8 /* r204 */, v9 /* r204 */, v10 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   MessageEvent: msg_v1 15, msg_v6 15
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  msg_v1 = msg_v6;                                      // #141853:210:150 [L d4 h4 c4]
  v2 = msg_v1.data;                                     // #141856:218:53 #141866:15:200 [L d4 h4 c4]
  v3 = v2.ULaF0;                                        // #141871:106:200 [L d4 h4 c4]
  v7 = "1";                                             // #141880:246:233 [L d4 h4 c4]
  v4 = v3 === "1";                                      // #141885:74:65 [L d4 h4 c4]
  if (v4) {                                             // #141889:241:160 [L d4 h4 c4]
    v5 = cell[55]();                                    // #141908:213:201 [L d2 h2 c2]  VM call: pushes a frame, the callee body returns into r205; then v5 = r205 (H142 CALL bind)
    v9 = v5;                                            // #141912:174:150 [L d2 h2 c2] +#141915:70:53
  } else {
    v8 = v4;                                            // #141895:61:53 #141900:45:150 [L d2 h2 c2] +#141903:137:53
  }
  v10 = undefined;                                      // #141920:72:233 [L d4 h4 c4]
  return v10;                                           // #141923:184:245 [L d4 h4 c4]
}