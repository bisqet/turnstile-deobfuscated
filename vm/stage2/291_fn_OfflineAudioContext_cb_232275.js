function fn_OfflineAudioContext_cb_232275(v1 /* r227 */) { // entry L232275_188; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, offlineAudioContext_v3 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OfflineAudioContext: offlineAudioContext_v3 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #232276:185:150 [L d1 h1 c1]
  cell[30] = v1;                                        // #232279:229:53 #232289:179:195 [L d1 h1 c1]
  offlineAudioContext_v3 = cell[27];                    // #232292:18:236 [L d1 h1 c1]
  r205 = cell[37](offlineAudioContext_v3);              // #232295:183:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  return r205;                                          // #232299:43:245 [L d1 h1 c1]
}