function fn_offline_audio_232198(offlineAudioContext_v2 /* r227 */) { // entry L232198_22; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let offlineAudioContext_v1 /* r205 */, promise_v3 /* r202 */, fn_v4 /* r199 */, fn_v5 /* r204 */, promise_v6 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OfflineAudioContext: offlineAudioContext_v1 6, offlineAudioContext_v2 6
  //   Promise: promise_v3 6, promise_v6 6
  //   Function: fn_v4 6, fn_v5 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  offlineAudioContext_v1 = offlineAudioContext_v2;      // #232199:43:150 [L d2 h2 c2]
  promise_v3 = (offlineAudioContext_v1).startRendering();  // #232202:15:53 #232212:243:138 [L d2 h2 c2]
  fn_v4 = promise_v3.then;                              // #232238:190:200 [L d2 h2 c2]
  fn_v5 = clos;                                         // #232243:237:216 [L d2 h2 c2]  closure creation (operands from the byte stream); then fn_v5 = its home register (H139 CLOS bind)
  promise_v6 = fn_v4.call(promise_v3, fn_v5);           // #232256:138:138 [L d2 h2 c2]
  return promise_v6;                                    // #232274:114:245 [L d2 h2 c2]
}