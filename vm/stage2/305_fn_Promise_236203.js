function fn_Promise_236203(win_v24 /* r70 */, v25 /* r227 */) { // entry L236203_240; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 37 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r205 */, v3 /* r204 */, arr_v4 /* r199 */, v5 /* r202 */, navigator_v6 /* r205 */, mediaCapabilities_v7 /* r202 */, fn_v8 /* r199 */, v9 /* r205 */, v10 /* r204 */;
  let v11 /* r198 */, v12 /* r204 */, v13 /* r196 */, v14 /* r195 */, v15 /* r196 */, v16 /* r195 */, promise_v17 /* r204 */, fn_v18 /* r199 */, fn_v19 /* r205 */, v20 /* r205 */;
  let v21 /* r205 */, v22 /* r202 */, v23 /* r199 */, v26 /* r196 */, v27 /* r199 */, fn_v28 /* r202 */, v29 /* r204 */, promise_v30 /* r205 */, v31 /* r198 */, v32 /* r196 */;
  let v33 /* r195 */, promise_v34 /* r202 */, fn_v35 /* r199 */, fn_v36 /* r204 */, promise_v37 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v4 24
  //   Navigator: navigator_v6 18
  //   MediaCapabilities: mediaCapabilities_v7 18
  //   Function: fn_v8 18, fn_v18 18, fn_v19 18, fn_v28 6, fn_v35 18, fn_v36 18
  //   Promise: promise_v17 18, promise_v30 6, promise_v34 18, promise_v37 18
  //   Window: win_v24 24
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2)
  v26 = v25;                                            // #236204:29:150 [L d8 h8 c8]
  v1 = undefined;                                       // #236207:185:53 #236217:126:233 [L d8 h8 c8]
  try {
    TP(tryStack, 236571, 179, callDepths);                         // #236220:111:194 [L d8 h8 c8]  try: pushes the catch arm of the enclosing try (TP)
    v2 = cell[31];                                      // #236226:222:236 [L d8 h8 c8]
    if (v2) {                                           // #236229:53:160 [L d8 h8 c8]
      arr_v4 = cell[30];                                // #236248:127:236 #236251:48:150 [L d8 h8 c8]
      v5 = arr_v4.indexOf(v26);                         // #236254:129:138 [L d8 h8 c8]
      v27 = -(1);                                       // #236274:20:72 #236277:252:189 [L d8 h8 c8]
      v3 = !(v5 === (-1));                              // #236280:184:65 #236284:1:130 #236287:42:150 [L d8 h8 c8] +#236290:210:53
    } else {
      v3 = v2;                                          // #236235:113:53 #236240:60:150 [-] +#236243:28:53 /* never executed in any replay */
    }
    if (v3) {                                           // #236295:26:160 [L d8 h8 c8]
      fn_v28 = win_v24.Promise;                         // #236306:225:200 [L d2 h2 c2]
      v29 = 0;                                          // #236311:244:72 [L d2 h2 c2]
      promise_v30 = fn_v28.resolve(v29);                // #236314:53:138 [L d2 h2 c2]
      return promise_v30;                               // #236334:49:245 [L d2 h2 c2]
    }
    navigator_v6 = win_v24.navigator;                   // #236301:2:53 #236336:174:200 [L d6 h6 c6]
    mediaCapabilities_v7 = navigator_v6.mediaCapabilities;  // #236341:77:200 [L d6 h6 c6]
    fn_v8 = (navigator_v6.mediaCapabilities).decodingInfo;  // #236346:48:200 [L d6 h6 c6]
    v9 = {};                                            // #236351:130:159 [L d6 h6 c6]
    v10 = "type";                                       // #236353:174:233 [L d6 h6 c6]
    v11 = "file";                                       // #236358:42:233 [L d6 h6 c6]
    v9.type = "file";                                   // #236366:156:199 [L d6 h6 c6]
    v12 = "audio";                                      // #236370:224:233 [L d6 h6 c6]
    v31 = {};                                           // #236379:114:159 [L d6 h6 c6]
    v31.contentType = v26;                              // #236381:47:142 [L d6 h6 c6]
    v13 = "channels";                                   // #236396:231:233 [L d6 h6 c6]
    v14 = "2";                                          // #236408:191:233 [L d6 h6 c6]
    v31.channels = "2";                                 // #236413:29:199 [L d6 h6 c6]
    v15 = "bitrate";                                    // #236417:157:233 [L d6 h6 c6]
    v16 = 128000;                                       // #236428:29:233 [L d6 h6 c6]
    v31.bitrate = 128000;                               // #236434:131:199 [L d6 h6 c6]
    v32 = "samplerate";                                 // #236438:235:233 [L d6 h6 c6]
    v33 = 48000;                                        // #236452:179:233 [L d6 h6 c6]
    v31.samplerate = 48000;                             // #236458:65:199 [L d6 h6 c6]
    v9.audio = v31;                                     // #236462:23:199 [L d6 h6 c6]
    promise_v17 = fn_v8.call(mediaCapabilities_v7, v9);  // #236466:140:138 [L d6 h6 c6]
    fn_v18 = promise_v17.then;                          // #236492:51:200 [L d6 h6 c6]
    fn_v19 = clos;                                      // #236497:206:216 [L d6 h6 c6]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
    promise_v34 = fn_v18.call(promise_v17, fn_v19);     // #236509:39:138 [L d6 h6 c6]
    fn_v35 = promise_v34.catch;                         // #236527:34:200 [L d6 h6 c6]
    fn_v36 = clos;                                      // #236532:193:216 [L d6 h6 c6]  closure creation (operands from the byte stream); then fn_v36 = its home register (H139 CLOS bind)
    promise_v37 = fn_v35.call(promise_v34, fn_v36);     // #236543:14:138 [L d6 h6 c6]
    return promise_v37;                                 // #236562:230:245 [L d6 h6 c6]
  } catch (caught) {
    v20 = caught;                                         // #236572:148:150 [-] /* never executed in any replay */
    v21 = win_v24[KP(m236574k148)];                     // #236575:27:200 [-] /* never executed in any replay */
    v22 = v21;                                          // #236580:92:150 [-] /* never executed in any replay */
    v23 = v22[KP(m236582k92)];                          // #236583:195:200 [-] /* never executed in any replay */
    outside("L236587_195");  // L236587_195 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}