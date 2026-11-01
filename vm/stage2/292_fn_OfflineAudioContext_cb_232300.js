function fn_OfflineAudioContext_cb_232300(v2 /* r227 */) { // entry L232300_135; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, promise_v3 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Promise: promise_v3 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v2;                                              // #232301:24:150 [L d1 h1 c1]
  cell[31] = v2;                                        // #232304:136:53 #232314:170:195 [L d1 h1 c1]
  promise_v3 = cell[28][KP(m232316k170)]();             // #232317:107:66 [L d1 h1 c1]
  return promise_v3;                                    // #232343:15:245 [L d1 h1 c1]
}