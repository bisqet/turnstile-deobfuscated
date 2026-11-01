function fn_OfflineAudioContext_cb_231870(v13 /* r88 */, offlineAudioContext_v14 /* r227 */) { // entry L231870_70; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 26 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let offlineAudioContext_v1 /* r198 */, offlineAudioContext_v2 /* r204 */, v3 /* r202 */, audioBuffer_v4 /* r205 */, v5 /* r204 */, f32_v6 /* r199 */, v7 /* r204 */, v8 /* r202 */, v9 /* r204 */, audioBufferSourceNode_v10 /* r202 */;
  let audioDestinationNode_v11 /* r205 */, v12 /* r205 */, v15 /* r192 */, fn_v16 /* r252 */, v17 /* r196 */, v18 /* r195 */, v19 /* r193 */, v20 /* r253 */, v21 /* r254 */, audioBufferSourceNode_v22 /* r204 */;
  let fn_v23 /* r199 */, audioDestinationNode_v24 /* r198 */, v25 /* r202 */, v26 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OfflineAudioContext: offlineAudioContext_v1 3, offlineAudioContext_v2 3, offlineAudioContext_v14 3
  //   AudioBuffer: audioBuffer_v4 3
  //   Float32Array: f32_v6 3
  //   AudioBufferSourceNode: audioBufferSourceNode_v10 3, audioBufferSourceNode_v22 3
  //   AudioDestinationNode: audioDestinationNode_v11 3, audioDestinationNode_v24 3
  //   Function: fn_v16 3, fn_v23 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  offlineAudioContext_v1 = offlineAudioContext_v14;     // #231871:155:150 [L d1 h1 c1]
  v15 = v13;                                            // #231874:220:150 [L d1 h1 c1]
  offlineAudioContext_v2 = offlineAudioContext_v14;     // #231877:60:53 #231887:111:233 #231890:96:150 [L d1 h1 c1]
  fn_v16 = offlineAudioContext_v14.createBuffer;        // #231893:183:200 [L d1 h1 c1]
  v3 = cell[23];                                        // #231909:6:236 [L d1 h1 c1]
  v17 = cell[21];                                       // #231912:217:236 [L d1 h1 c1]
  v18 = cell[22];                                       // #231915:32:236 [L d1 h1 c1]
  audioBuffer_v4 = fn_v16.call(offlineAudioContext_v2, v3, v17, v18);  // #231918:177:138 [L d1 h1 c1]
  v5 = 0;                                               // #231946:132:72 [L d1 h1 c1]
  f32_v6 = audioBuffer_v4.getChannelData((0));          // #231949:133:138 [L d1 h1 c1]
  v19 = 0;                                              // #231976:8:72 [L d1 h1 c1]
  v20 = 1;                                              // #231979:63:72 [L d1 h1 c1]
  v21 = "length";                                       // #231982:183:233 [L d1 h1 c1] +#231987:107:53
  while ((v8 = f32_v6[v21], v9 = v19 < v8, v19 < v8)) {  // #232002:235:7 | #232006:128:186 [L d1001 h1001 c1001]
    f32_v6[v19] = v15;                                  // #232024:103:210 [L d1000 h1000 c1000]
    v7 = v19; v19 = v19 + v20;                          // #231992:234:48 [L d1000 h1000 c1000]
  }
  audioBufferSourceNode_v22 = offlineAudioContext_v1.createBufferSource();      // #232032:244:138 [L d1 h1 c1]
  audioBufferSourceNode_v22.buffer = audioBuffer_v4;      // #232062:41:142 [L d1 h1 c1]
  audioBufferSourceNode_v10 = audioBufferSourceNode_v22;      // #232067:178:150 [L d1 h1 c1]
  fn_v23 = audioBufferSourceNode_v22.connect;           // #232070:65:200 [L d1 h1 c1]
  audioDestinationNode_v11 = offlineAudioContext_v1.destination;      // #232081:84:200 [L d1 h1 c1]
  audioDestinationNode_v24 = fn_v23.call(audioBufferSourceNode_v10, audioDestinationNode_v11);      // #232096:21:138 [L d1 h1 c1]
  v12 = 0;                                              // #232117:88:72 [L d1 h1 c1]
  v25 = (audioBufferSourceNode_v22).start(0);           // #232120:9:138 [L d1 h1 c1]
  v26 = undefined;                                      // #232138:217:233 [L d1 h1 c1]
  return v26;                                           // #232141:69:245 [L d1 h1 c1]
}