function fn_offline_audio_cb_232142(audioBuffer_v2 /* r227 */) { // entry L232142_84; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, audioBuffer_v3 /* r198 */, fn_v4 /* r202 */, v5 /* r199 */, f32_v6 /* r204 */, promise_v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   AudioBuffer: audioBuffer_v2 6, audioBuffer_v3 6
  //   Function: fn_v4 6
  //   Float32Array: f32_v6 6
  //   Promise: promise_v7 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  audioBuffer_v3 = audioBuffer_v2;                      // #232143:241:150 [L d2 h2 c2]
  fn_v4 = cell[34];                                     // #232146:61:53 #232156:48:236 [L d2 h2 c2]
  v5 = undefined;                                       // #232159:36:233 [L d2 h2 c2]
  v1 = 0;                                               // #232162:235:72 [L d2 h2 c2]
  f32_v6 = (audioBuffer_v3).getChannelData(0);          // #232165:16:138 [L d2 h2 c2]
  promise_v7 = MC(v5, fn_v4, f32_v6);                   // #232192:41:114 [L d2 h2 c2]
  return promise_v7;                                    // #232197:85:245 [L d2 h2 c2]
}