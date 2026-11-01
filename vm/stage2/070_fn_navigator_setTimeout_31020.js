function fn_navigator_setTimeout_31020(win_v32 /* r70 */, v33 /* r209 */, v34 /* r221 */) { // entry L31020_77; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 41 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, gl_v2 /* r204 */, v3 /* r204 */, v4 /* r204 */, arr_v5 /* r205 */, v6 /* r205 */, v7 /* r205 */, v8 /* r204 */, v9 /* r202 */, v10 /* r205 */;
  let v11 /* r199 */, v12 /* r204 */, v13 /* r205 */, gl_v14 /* r202 */, gl2_v15 /* r202 */, v16 /* r205 */, v17 /* r204 */, v18 /* r205 */, v19 /* r204 */, arr_v20 /* r205 */;
  let v21 /* r205 */, v22 /* r205 */, v23 /* r204 */, v24 /* r202 */, v25 /* r205 */, v26 /* r199 */, v27 /* r202 */, v28 /* r204 */, v29 /* r205 */, v30 /* r204 */;
  let v31 /* r205 */, v35 /* r199 */, webGLLoseContext_v36 /* r199 */, v37 /* r199 */, webGLLoseContext_v38 /* r199 */, v39 /* r202 */, v40 /* r204 */, v41 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   WebGLRenderingContext: gl_v2 1, gl_v14 1
  //   Array: arr_v5 3, arr_v20 3
  //   WebGL2RenderingContext: gl2_v15 1
  //   Window: win_v32 3
  //   WebGLLoseContext: webGLLoseContext_v36 1, webGLLoseContext_v38 1
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 3 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v35 = undefined;                                      // #31021:41:53 #31031:89:233 #31034:233:233 #31037:57:233 [L d1 h1 c1] +#31040:73:233
  try {
    TP(tryStack, 31170, 136, callDepths);                          // #31043:206:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v1 = cell[47];                                      // #31049:129:236 [L d1 h1 c1]
    if (v1) {                                           // #31052:12:160 [L d1 h1 c1]
      gl_v2 = v1;                                       // #31063:188:150 [L h1]
      webGLLoseContext_v36 = gl_v2.getExtension("WEBGL_lose_context");  // #31066:128:233 #31088:145:138 [L h1]
      if (webGLLoseContext_v36) {                       // #31113:220:160 [L h1]
        v4 = webGLLoseContext_v36.loseContext();        // #31132:120:138 #31155:133:150 [L h1] +#31158:129:53
      } else {
        v3 = webGLLoseContext_v36;                      // #31119:60:53 #31124:148:150 [-] +#31127:20:53 /* never executed in any replay */
      }
    } else {
      // #31058:172:53 [L d1 c1]
    }
    arr_v5 = tryStack.pop();                                 // #31163:129:124 [L d1 h1 c1] +#31166:141:53
    try {
      TP(tryStack, 31467, 215, callDepths);                        // #31303:74:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      v12 = cell[48];                                   // #31309:13:236 [L d1 h1 c1]
      if (v12) {                                        // #31312:104:160 [L d1 h1 c1]
        gl_v14 = cell[47];                              // #31331:113:236 [L h1]
        v37 = !(cell[47] === v12);                      // #31334:153:65 #31338:158:130 [L h1]
        v13 = v37;                                      // #31341:147:150 [L h1] +#31344:215:53
      } else {
        v13 = v12;                                      // #31318:152:53 #31323:222:150 [L d1 c1] +#31326:182:53
      }
      if (v13) {                                        // #31349:222:160 [L d1 h1 c1]
        gl2_v15 = v12;                                  // #31360:245:150 [L h1]
        v16 = "WEBGL_lose_context";                     // #31363:21:233 [L h1]
        webGLLoseContext_v38 = gl2_v15.getExtension("WEBGL_lose_context");  // #31385:18:138 [L h1]
        if (webGLLoseContext_v38) {                     // #31410:153:160 [L h1]
          v18 = webGLLoseContext_v38.loseContext();     // #31429:97:138 [L h1]
          v19 = v18;                                    // #31452:10:150 [L h1] +#31455:50:53
        } else {
          v17 = webGLLoseContext_v38;                   // #31416:69:53 #31421:20:150 [-] +#31424:148:53 /* never executed in any replay */
        }
      } else {
        // #31355:182:53 [L d1 c1]
      }
      arr_v20 = tryStack.pop();                              // #31460:12:124 [L d1 h1 c1]
      v27 = null;                                       // #31463:172:53 #31600:179:233 [L d1 h1 c1]
      cell[47] = null;                                  // #31603:77:195 [L d1 h1 c1]
      v28 = null;                                       // #31606:13:233 [L d1 h1 c1]
      cell[48] = null;                                  // #31609:191:195 [L d1 h1 c1]
      v29 = null;                                       // #31612:55:233 [L d1 h1 c1]
      cell[46] = null;                                  // #31615:193:195 [L d1 h1 c1]
      v30 = null;                                       // #31618:177:233 [L d1 h1 c1]
      cell[49] = null;                                  // #31621:211:195 [L d1 h1 c1]
      v39 = null;                                       // #31624:251:233 [L d1 h1 c1]
      cell[50] = null;                                  // #31627:117:195 [L d1 h1 c1]
      v40 = null;                                       // #31630:149:233 [L d1 h1 c1]
      cell[51] = null;                                  // #31633:39:195 [L d1 h1 c1]
      v31 = null;                                       // #31636:255:233 [L d1 h1 c1]
      cell[52] = null;                                  // #31639:105:195 [L d1 h1 c1]
      v41 = undefined;                                  // #31642:185:233 [L d1 h1 c1]
      return v41;                                       // #31645:165:245 [L d1 h1 c1]
    } catch (caught) {
      v21 = caught;                                       // #31468:40:150 [-] /* never executed in any replay */
      v22 = win_v32[v34];                               // #31471:98:7 [-] /* never executed in any replay */
      v23 = v22;                                        // #31475:71:150 [-] /* never executed in any replay */
      v24 = v23[v33];                                   // #31478:197:7 [-] /* never executed in any replay */
      v25 = KP(m31481k197);                             // #31482:165:233 [-] /* never executed in any replay */
      v26 = v24.call(v23, v25);                         // #31575:98:138 [-] /* never executed in any replay */
      outside("L31594_98");  // L31594_98 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
    }
  } catch (caught) {
    v6 = caught;                                          // #31171:85:150 [-] /* never executed in any replay */
    v7 = win_v32[v34];                                  // #31174:27:7 [-] /* never executed in any replay */
    v8 = v7;                                            // #31178:92:150 [-] /* never executed in any replay */
    v9 = v8[v33];                                       // #31181:198:7 [-] /* never executed in any replay */
    v10 = KP(m31184k198);                               // #31185:226:233 [-] /* never executed in any replay */
    v11 = v9.call(v8, v10);                             // #31278:235:138 [-] /* never executed in any replay */
    outside("L31297_235");  // L31297_235 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}