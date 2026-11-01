function fn_OfflineAudioContext_cb_231514(offlineAudioContext_v27 /* r227 */) { // entry L231514_248; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 34 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let offlineAudioContext_v1 /* r198 */, v2 /* r205 */, v3 /* r202 */, audioParam_v4 /* r205 */, v5 /* r202 */, v6 /* r199 */, dynamicsCompressorNode_v7 /* r205 */, audioParam_v8 /* r202 */, v9 /* r199 */, v10 /* r196 */;
  let audioParam_v11 /* r202 */, v12 /* r199 */, v13 /* r196 */, audioParam_v14 /* r202 */, v15 /* r199 */, v16 /* r196 */, audioParam_v17 /* r202 */, v18 /* r199 */, v19 /* r196 */, audioParam_v20 /* r202 */;
  let v21 /* r199 */, oscillatorNode_v22 /* r202 */, dynamicsCompressorNode_v23 /* r199 */, dynamicsCompressorNode_v24 /* r202 */, audioDestinationNode_v25 /* r205 */, v26 /* r205 */, oscillatorNode_v28 /* r204 */, v29 /* r195 */, v30 /* r196 */, fn_v31 /* r199 */;
  let audioDestinationNode_v32 /* r198 */, v33 /* r202 */, v34 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   OfflineAudioContext: offlineAudioContext_v1 6, offlineAudioContext_v27 6
  //   AudioParam: audioParam_v4 6, audioParam_v8 6, audioParam_v11 6, audioParam_v14 6, audioParam_v17 6, audioParam_v20 6
  //   DynamicsCompressorNode: dynamicsCompressorNode_v7 6, dynamicsCompressorNode_v23 6, dynamicsCompressorNode_v24 6
  //   OscillatorNode: oscillatorNode_v22 6, oscillatorNode_v28 6
  //   AudioDestinationNode: audioDestinationNode_v25 6, audioDestinationNode_v32 6
  //   Function: fn_v31 6
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  offlineAudioContext_v1 = offlineAudioContext_v27;     // #231515:5:150 [L d2 h2 c2]
  oscillatorNode_v28 = offlineAudioContext_v1.createOscillator();  // #231518:1:53 #231528:225:138 [L d2 h2 c2]
  v2 = "type";                                          // #231556:81:233 [L d2 h2 c2]
  v3 = "triangle";                                      // #231561:1:233 [L d2 h2 c2]
  oscillatorNode_v28.type = "triangle";                 // #231573:215:199 [L d2 h2 c2]
  audioParam_v4 = oscillatorNode_v28.frequency;         // #231577:18:200 [L d2 h2 c2]
  v5 = "value";                                         // #231590:254:233 [L d2 h2 c2]
  v6 = 9998.123456;                                     // #231595:58:233 [L d2 h2 c2]
  audioParam_v4.value = 9998.123456;                    // #231606:108:199 [L d2 h2 c2]
  dynamicsCompressorNode_v7 = offlineAudioContext_v1[KP(231609)]();  // #231610:205:138 [L d2 h2 c2]
  audioParam_v8 = dynamicsCompressorNode_v7.threshold;  // #231646:176:200 [L d2 h2 c2]
  v9 = "value";                                         // #231659:164:233 [L d2 h2 c2]
  v29 = 52;                                             // #231664:107:72 [L d2 h2 c2]
  v10 = -(52);                                          // #231667:183:189 [L d2 h2 c2]
  audioParam_v8.value = (-52);                          // #231670:53:199 [L d2 h2 c2]
  audioParam_v11 = dynamicsCompressorNode_v7.knee;      // #231674:120:200 [L d2 h2 c2]
  v12 = "value";                                        // #231682:76:233 [L d2 h2 c2]
  v13 = 40; audioParam_v11.value = 40;                  // #231687:214:103 [L d2 h2 c2]
  audioParam_v14 = dynamicsCompressorNode_v7.ratio;     // #231692:213:200 [L d2 h2 c2]
  v15 = "value";                                        // #231701:117:233 [L d2 h2 c2]
  v16 = 12; audioParam_v14.value = 12;                  // #231706:155:103 [L d2 h2 c2]
  audioParam_v17 = dynamicsCompressorNode_v7.attack;    // #231711:198:200 [L d2 h2 c2]
  v18 = "value";                                        // #231721:226:233 [L d2 h2 c2]
  v19 = 0.0001;                                         // #231726:142:233 [L d2 h2 c2]
  audioParam_v17.value = 0.0001;                        // #231737:112:199 [L d2 h2 c2]
  audioParam_v20 = dynamicsCompressorNode_v7.release;   // #231741:135:200 [L d2 h2 c2]
  v21 = "value";                                        // #231752:223:233 [L d2 h2 c2]
  v30 = 0.25;                                           // #231757:215:233 [L d2 h2 c2]
  audioParam_v20.value = 0.25;                          // #231768:213:199 [L d2 h2 c2]
  oscillatorNode_v22 = oscillatorNode_v28;              // #231772:174:150 [L d2 h2 c2]
  dynamicsCompressorNode_v23 = (oscillatorNode_v22).connect(dynamicsCompressorNode_v7);  // #231775:135:138 [L d2 h2 c2]
  dynamicsCompressorNode_v24 = dynamicsCompressorNode_v7;  // #231795:24:150 [L d2 h2 c2]
  fn_v31 = dynamicsCompressorNode_v7.connect;           // #231798:143:200 [L d2 h2 c2]
  audioDestinationNode_v25 = offlineAudioContext_v1.destination;  // #231809:234:200 [L d2 h2 c2]
  audioDestinationNode_v32 = fn_v31.call(dynamicsCompressorNode_v24, audioDestinationNode_v25);  // #231824:211:138 [L d2 h2 c2]
  v26 = 0;                                              // #231845:158:72 [L d2 h2 c2]
  v33 = (oscillatorNode_v28).start(0);                  // #231848:183:138 [L d2 h2 c2]
  v34 = undefined;                                      // #231866:79:233 [L d2 h2 c2]
  return v34;                                           // #231869:99:245 [L d2 h2 c2]
}