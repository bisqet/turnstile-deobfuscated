function fn_canvas_getImageData_30198(win_v16 /* r70 */, imageBitmap_v17 /* r227 */) { // entry L30198_87; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 47 register webs used only inside this fn (no live-in, cross-call or table-made def; 32 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let imageBitmap_v1 /* r205 */, v2 /* r204 */, v3 /* r202 */, v4 /* r202 */, imageBitmap_v5 /* r205 */, v6 /* r202 */, v7 /* r202 */, v8 /* r204 */, v9 /* r202 */, uint8ClampedArray_v10 /* r204 */;
  let v11 /* r202 */, buf_v12 /* r205 */, promise_v13 /* r204 */, fn_v14 /* r205 */, v15 /* r205 */, v18 /* r202 */, v19 /* r204 */, v20 /* r205 */, fn_v21 /* r231 */, v22 /* r196 */;
  let v23 /* r199 */, v24 /* r198 */, v25 /* r195 */, v26 /* r193 */, arr_v27 /* r204 */, v28 /* r199 */, v29 /* r202 */, v30 /* r205 */, ctx2d_v31 /* r198 */, fn_v32 /* r196 */;
  let v33 /* r199 */, v34 /* r195 */, ctx2d_v35 /* r196 */, fn_v36 /* r195 */, v37 /* r199 */, v38 /* r198 */, fn_v39 /* r247 */, fn_v40 /* r199 */, promise_v41 /* r202 */, fn_v42 /* r199 */;
  let fn_v43 /* r204 */, promise_v44 /* r205 */, v45 /* r202 */, v46 /* r204 */, v47 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   ImageBitmap: imageBitmap_v1 4, imageBitmap_v5 4, imageBitmap_v17 4
  //   Uint8ClampedArray: uint8ClampedArray_v10 4
  //   ArrayBuffer: buf_v12 4
  //   Promise: promise_v13 4, promise_v41 4, promise_v44 4
  //   Function: fn_v14 4, fn_v21 4, fn_v32 4, fn_v36 4, fn_v39 4, fn_v40 4, fn_v42 4, fn_v43 4
  //   Window: win_v16 4
  //   Array: arr_v27 4
  //   OffscreenCanvasRenderingContext2D: ctx2d_v31 4, ctx2d_v35 4
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 4 dead register writes dropped, 6 constants propagated (6 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4)
  imageBitmap_v1 = imageBitmap_v17;                     // #30199:168:150 [L d2 h2]
  NC(92);                                               // #30202:216:53 #30207:191:211 [L d2 h2]
  cell[92] = imageBitmap_v1;                            // #30210:41:195 [L d2 h2]
  v2 = undefined;                                       // #30213:149:53 #30218:212:233 #30221:56:233 #30224:12:233 [L d2 h2]
  if (imageBitmap_v1) {                                 // #30227:43:160 [L d2 h2]
    try {
      TP(tryStack, 30572, 184, callDepths);                        // #30268:197:194 [L d2 h2]  try: pushes the catch arm of the enclosing try (TP)
      fn_v21 = cell[67];                                // #30274:92:236 [L d2 h2]
      v22 = undefined;                                  // #30277:160:233 [L d2 h2]
      v3 = cell[92].width;                              // #30280:139:236 #30283:246:200 [L d2 h2]
      v23 = cell[92].height;                            // #30288:117:200 [L d2 h2]
      v24 = {};                                         // #30293:149:233 #30299:147:159 [L d2 h2]
      v25 = "willReadFrequently";                       // #30301:187:233 [L d2 h2]
      v26 = true;                                       // #30306:67:233 [L d2 h2]
      v24.willReadFrequently = true;                    // #30309:145:199 [L d2 h2]
      arr_v27 = MC(v22, fn_v21, v3, v23, "2d", v24);    // #30313:140:16 [L d2 h2]
      v4 = 1;                                           // #30322:179:72 [L d2 h2]
      if (arr_v27[v4]) {                                // #30325:129:7 #30329:12:160 [L d2 h2]
        ctx2d_v31 = arr_v27[1];                         // #30370:230:72 #30373:168:7 [L d2 h2]
        fn_v32 = ctx2d_v31.drawImage;                   // #30377:223:200 [L d2 h2]
        imageBitmap_v5 = cell[92];                      // #30382:142:236 [L d2 h2]
        v6 = 0;                                         // #30385:45:72 [L d2 h2]
        v33 = 0;                                        // #30388:16:72 [L d2 h2]
        v34 = fn_v32.call(ctx2d_v31, imageBitmap_v5, 0, v33);  // #30391:225:138 [L d2 h2]
        v7 = 1;                                         // #30416:244:72 [L d2 h2]
        ctx2d_v35 = arr_v27[1];                         // #30419:254:7 [L d2 h2]
        fn_v36 = ctx2d_v35.getImageData;                // #30423:93:200 [L d2 h2]
        v8 = 0;                                         // #30428:128:72 [L d2 h2]
        v9 = 0;                                         // #30431:215:72 [L d2 h2]
        v37 = imageBitmap_v5.width;                     // #30434:18:200 [L d2 h2]
        v38 = imageBitmap_v5.height;                    // #30439:33:200 [L d2 h2]
        uint8ClampedArray_v10 = fn_v36.call(ctx2d_v35, 0, 0, v37, v38).data;  // #30444:238:138 #30473:141:200 [L d2 h2]
        fn_v39 = cell[78];                              // #30478:4:236 [L d2 h2]
        v11 = undefined;                                // #30481:168:233 [L d2 h2]
        buf_v12 = uint8ClampedArray_v10.buffer;         // #30484:223:200 [L d2 h2]
        promise_v13 = MC(undefined, fn_v39, buf_v12);   // #30489:124:114 [L d2 h2]
        fn_v40 = promise_v13.then;                      // #30494:99:200 [L d2 h2]
        fn_v14 = clos;                                  // #30499:62:216 [L d2 h2]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
        promise_v41 = fn_v40.call(promise_v13, fn_v14);  // #30512:215:138 [L d2 h2]
        fn_v42 = promise_v41.catch;                     // #30530:18:200 [L d2 h2]
        fn_v43 = clos;                                  // #30535:241:216 [L d2 h2]  closure creation (operands from the byte stream); then fn_v43 = its home register (H139 CLOS bind)
        promise_v44 = fn_v42.call(promise_v41, fn_v43);  // #30544:126:138 [L d2 h2]
        return promise_v44;                             // #30563:150:245 [L d2 h2]
      }
      v28 = win_v16.Promise;                            // #30335:172:53 #30340:202:200 [-] /* never executed in any replay */
      v29 = null;                                       // #30345:214:233 [-] /* never executed in any replay */
      v30 = v28.resolve(v29);                           // #30348:15:138 [-] /* never executed in any replay */
      return v30;                                       // #30368:35:245 [-] /* never executed in any replay */
    } catch (caught) {
      v15 = caught;                                       // #30573:197:150 [-] /* never executed in any replay */
      v45 = win_v16[KP(m30575k197)];                    // #30576:200:200 [-] /* never executed in any replay */
      v46 = null;                                       // #30581:92:233 [-] /* never executed in any replay */
      v47 = (v45)[KP(m30583k92)](v46);                  // #30584:253:138 [-] /* never executed in any replay */
      return v47;                                       // #30604:217:245 [-] /* never executed in any replay */
    }
  } else {
    v18 = win_v16.Promise;                              // #30233:15:53 #30238:196:200 [-] /* never executed in any replay */
    v19 = null;                                         // #30243:104:233 [-] /* never executed in any replay */
    v20 = v18.resolve(v19);                             // #30246:217:138 [-] /* never executed in any replay */
    return v20;                                         // #30266:69:245 [-] /* never executed in any replay */
  }
}