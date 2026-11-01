function probe_29_webrtc_484(win_v8 /* r70 */, v9 /* r220 */, v10 /* r223 */, v11 /* r227 */) { // entry L484_123; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r204 */, v4 /* r199 */, pc_v5 /* r205 */, pc_v6 /* r199 */, fn_v7 /* r205 */, promise_v12 /* r204 */, fn_v13 /* r202 */, promise_v14 /* r199 */;
  let v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   RTCPeerConnection: pc_v5 3, pc_v6 3
  //   Function: fn_v7 3, fn_v13 3
  //   Window: win_v8 3
  //   Promise: promise_v12 3, promise_v14 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v11;                                             // #485:60:150 [L d1 h1 c1]
  v2 = win_v8[v10][v9];                                 // #488:28:53 #498:114:20 [L d1 h1 c1]
  if (v2) {                                             // #503:121:160 [L d1 h1 c1]
    v3 = "MpLm4";                                       // #514:173:233 [L d1 h1 c1]
    v4 = v1.sdp;                                        // #519:16:200 [L d1 h1 c1]
    v2.MpLm4 = v4;                                      // #526:9:210 [L d1 h1 c1]
  } else {
    // #509:165:53 [-] /* never executed in any replay */
  }
  pc_v5 = cell[1];                                      // #534:176:236 [L d1 h1 c1]
  pc_v6 = cell[1];                                      // #537:221:150 [L d1 h1 c1]
  promise_v12 = (pc_v6).setLocalDescription(v1);        // #540:186:138 [L d1 h1 c1]
  fn_v13 = promise_v12.catch;                           // #572:41:200 [L d1 h1 c1]
  fn_v7 = clos;                                         // #577:108:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v7 = its home register (H139 CLOS bind)
  promise_v14 = fn_v13.call(promise_v12, fn_v7);        // #589:205:138 [L d1 h1 c1]
  v15 = undefined;                                      // #608:141:233 [L d1 h1 c1]
  return v15;                                           // #611:41:245 [L d1 h1 c1]
}