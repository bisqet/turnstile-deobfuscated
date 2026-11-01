function fn_Promise_236820(win_v26 /* r70 */, v27 /* r227 */) { // entry L236820_209; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 39 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r205 */, v3 /* r204 */, arr_v4 /* r199 */, v5 /* r202 */, navigator_v6 /* r205 */, mediaCapabilities_v7 /* r202 */, fn_v8 /* r199 */, v9 /* r205 */, v10 /* r204 */;
  let v11 /* r198 */, v12 /* r204 */, v13 /* r196 */, v14 /* r195 */, v15 /* r196 */, v16 /* r195 */, v17 /* r196 */, v18 /* r195 */, promise_v19 /* r204 */, fn_v20 /* r199 */;
  let fn_v21 /* r205 */, v22 /* r205 */, v23 /* r205 */, v24 /* r202 */, v25 /* r199 */, v28 /* r196 */, v29 /* r199 */, fn_v30 /* r202 */, v31 /* r204 */, promise_v32 /* r205 */;
  let v33 /* r198 */, v34 /* r196 */, v35 /* r195 */, promise_v36 /* r202 */, fn_v37 /* r199 */, fn_v38 /* r204 */, promise_v39 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v4 30
  //   Navigator: navigator_v6 27
  //   MediaCapabilities: mediaCapabilities_v7 27
  //   Function: fn_v8 27, fn_v20 27, fn_v21 27, fn_v30 3, fn_v37 27, fn_v38 27
  //   Promise: promise_v19 27, promise_v32 3, promise_v36 27, promise_v39 27
  //   Window: win_v26 30
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 1 constants propagated (1 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2)
  v28 = v27;                                            // #236821:186:150 [L d10 h10 c10]
  v1 = undefined;                                       // #236824:34:53 #236834:106:233 [L d10 h10 c10]
  try {
    TP(tryStack, 237195, 231, callDepths);                         // #236837:171:194 [L d10 h10 c10]  try: pushes the catch arm of the enclosing try (TP)
    v2 = cell[31];                                      // #236843:42:236 [L d10 h10 c10]
    if (v2) {                                           // #236846:81:160 [L d10 h10 c10]
      arr_v4 = cell[30];                                // #236865:246:236 #236868:139:150 [L d10 h10 c10]
      v5 = arr_v4.indexOf(v28);                         // #236871:48:138 [L d10 h10 c10]
      v29 = -(1);                                       // #236891:199:72 #236894:163:189 [L d10 h10 c10]
      v3 = !(v5 === (-1));                              // #236897:131:65 #236901:96:130 #236904:205:150 [L d10 h10 c10] +#236907:169:53
    } else {
      v3 = v2;                                          // #236852:29:53 #236857:75:150 [-] +#236860:175:53 /* never executed in any replay */
    }
    if (v3) {                                           // #236912:124:160 [L d10 h10 c10]
      fn_v30 = win_v26.Promise;                         // #236923:40:200 [L d1 h1 c1]
      v31 = 0;                                          // #236928:223:72 [L d1 h1 c1]
      promise_v32 = fn_v30.resolve(v31);                // #236931:52:138 [L d1 h1 c1]
      return promise_v32;                               // #236951:244:245 [L d1 h1 c1]
    }
    navigator_v6 = win_v26.navigator;                   // #236918:92:53 #236953:149:200 [L d9 h9 c9]
    mediaCapabilities_v7 = navigator_v6.mediaCapabilities;  // #236958:88:200 [L d9 h9 c9]
    fn_v8 = (navigator_v6.mediaCapabilities).decodingInfo;  // #236963:207:200 [L d9 h9 c9]
    v9 = {};                                            // #236968:101:159 [L d9 h9 c9]
    v10 = "type";                                       // #236970:197:233 [L d9 h9 c9]
    v11 = "file";                                       // #236975:165:233 [L d9 h9 c9]
    v9.type = "file";                                   // #236983:235:199 [L d9 h9 c9]
    v12 = "video";                                      // #236987:179:233 [L d9 h9 c9]
    v33 = {};                                           // #236996:185:159 [L d9 h9 c9]
    v33.contentType = v28;                              // #236998:26:142 [L d9 h9 c9]
    v13 = "width";                                      // #237013:230:233 [L d9 h9 c9]
    v14 = 1920;                                         // #237018:130:233 [L d9 h9 c9]
    v33.width = 1920;                                   // #237023:148:199 [L d9 h9 c9]
    v15 = "height";                                     // #237027:248:233 [L d9 h9 c9]
    v16 = 1080;                                         // #237032:204:233 [L d9 h9 c9]
    v33.height = 1080;                                  // #237037:54:199 [L d9 h9 c9]
    v17 = "bitrate";                                    // #237041:146:233 [L d9 h9 c9]
    v18 = 2646242;                                      // #237052:126:233 [L d9 h9 c9]
    v33.bitrate = 2646242;                              // #237059:160:199 [L d9 h9 c9]
    v34 = "framerate";                                  // #237063:212:233 [L d9 h9 c9]
    v35 = "25";                                         // #237076:56:233 [L d9 h9 c9]
    v33.framerate = "25";                               // #237082:242:199 [L d9 h9 c9]
    v9.video = v33;                                     // #237086:68:199 [L d9 h9 c9]
    promise_v19 = fn_v8.call(mediaCapabilities_v7, v9);  // #237090:69:138 [L d9 h9 c9]
    fn_v20 = promise_v19.then;                          // #237116:72:200 [L d9 h9 c9]
    fn_v21 = clos;                                      // #237121:207:216 [L d9 h9 c9]  closure creation (operands from the byte stream); then fn_v21 = its home register (H139 CLOS bind)
    promise_v36 = fn_v20.call(promise_v19, fn_v21);     // #237133:100:138 [L d9 h9 c9]
    fn_v37 = promise_v36.catch;                         // #237151:171:200 [L d9 h9 c9]
    fn_v38 = clos;                                      // #237156:102:216 [L d9 h9 c9]  closure creation (operands from the byte stream); then fn_v38 = its home register (H139 CLOS bind)
    promise_v39 = fn_v37.call(promise_v36, fn_v38);     // #237167:95:138 [L d9 h9 c9]
    return promise_v39;                                 // #237186:51:245 [L d9 h9 c9]
  } catch (caught) {
    v22 = caught;                                         // #237196:248:150 [-] /* never executed in any replay */
    v23 = win_v26[KP(m237198k248)];                     // #237199:239:200 [-] /* never executed in any replay */
    v24 = v23;                                          // #237204:224:150 [-] /* never executed in any replay */
    v25 = v24[KP(m237206k224)];                         // #237207:55:200 [-] /* never executed in any replay */
    outside("L237211_55");  // L237211_55 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}