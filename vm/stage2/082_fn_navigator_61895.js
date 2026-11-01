function fn_navigator_61895(win_v18 /* r70 */, v19 /* r221 */) { // entry L61879_177; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 32 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let navigator_v1 /* r204 */, v2 /* r204 */, v3 /* r205 */, v4 /* r202 */, arr_v5 /* r204 */, v6 /* r204 */, v7 /* r205 */, promise_v8 /* r205 */, v9 /* r205 */, v10 /* r204 */;
  let v11 /* r205 */, promise_v12 /* r202 */, promise_v13 /* r204 */, fn_v14 /* r205 */, v15 /* r205 */, v16 /* r204 */, v17 /* r205 */, v20 /* r204 */, v21 /* r205 */, v22 /* r202 */;
  let v23 /* r204 */, v24 /* r205 */, fn_v25 /* r199 */, promise_v26 /* r202 */, fn_v27 /* r199 */, fn_v28 /* r204 */, promise_v29 /* r205 */, v30 /* r202 */, v31 /* r204 */, v32 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Navigator: navigator_v1 3
  //   Array: arr_v5 3
  //   Promise: promise_v8 3, promise_v12 3, promise_v13 3, promise_v26 3, promise_v29 3
  //   Function: fn_v14 3, fn_v25 3, fn_v27 3, fn_v28 3
  //   Window: win_v18 3
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 6 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4)
  // #61880:253:53 #61890:86:233 #61893:50:233 #61896:158:233 [L d1 h1 c1]
  try {
    TP(tryStack, 62266, 38, callDepths);                           // #61899:15:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    navigator_v1 = win_v18.navigator;                   // #61905:106:200 [L d1 h1 c1]
    if (navigator_v1.gpu) {                             // #61910:25:200 #61917:68:160 [L d1 h1 c1]
      v2 = cell[44];                                    // #61966:184:236 [L d1 h1 c1]
      v3 = cell[44];                                    // #61969:197:150 [L d1 h1 c1]
      if (!(v3)) {                                      // #61972:64:160 [L d1 h1 c1]
        // #61978:16:53 [L d1 h1 c1]
        try {
          TP(tryStack, 62040, 43, callDepths);                     // #61983:162:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
          v4 = win_v18[v19].YkWKI7;                     // #61989:116:7 #61993:123:200 [L d1 h1 c1]
          if (v4) {                                     // #62003:158:160 [L d1 h1 c1]
            v3 = v4;                                    // #62025:179:150 [-] +#62028:119:53 /* never executed in any replay */
          } else {
            v3 = null;                                  // #62009:118:53 #62014:230:233 #62017:187:150 [L d1 h1 c1] +#62020:95:53
          }
          arr_v5 = tryStack.pop();                           // #62033:206:124 [L d1 h1 c1] +#62036:230:53
        } catch (caught) {
          outside("L62043_44");                         // #62041:44:150 [-]  L62043_44 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      }
      if (v3) {                                         // #62049:52:160 [L d1 h1 c1]
        v6 = "BLWXb5";                                  // #62060:182:233 [-] /* never executed in any replay */
        v22 = v3.message;                               // #62070:53:200 [-] /* never executed in any replay */
        v7 = "BLWXb5" + v22;                            // #62075:182:222 [-] /* never executed in any replay */
        cell[28] = v7;                                  // #62079:4:195 [-] /* never executed in any replay */
        v23 = win_v18.Promise;                          // #62082:203:200 [-] /* never executed in any replay */
        v24 = v23.resolve();                            // #62087:112:138 [-] /* never executed in any replay */
        return v24;                                     // #62106:64:245 [-] /* never executed in any replay */
      }
      promise_v8 = cell[43];                            // #62055:52:53 #62108:138:236 [L d1 h1 c1]
      if (promise_v8) {                                 // #62111:49:160 [L d1 h1 c1]
        promise_v12 = promise_v8;                       // #62168:13:150 [L d1 h1 c1] +#62171:233:53
      } else {
        v9 = win_v18.navigator;                         // #62117:125:53 #62122:149:200 [-] /* never executed in any replay */
        v10 = v9.gpu;                                   // #62127:88:200 [-] /* never executed in any replay */
        v11 = v10.requestAdapter();                     // #62134:9:138 [-] /* never executed in any replay */
        promise_v12 = v11;                              // #62160:18:150 [-] +#62163:26:53 /* never executed in any replay */
      }
      promise_v13 = promise_v12;                        // #62176:1:150 [L d1 h1 c1]
      fn_v25 = promise_v12.then;                        // #62179:20:200 [L d1 h1 c1]
      fn_v14 = clos;                                    // #62184:107:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v14 = its home register (H139 CLOS bind)
      promise_v26 = fn_v25.call(promise_v13, fn_v14);   // #62204:144:138 [L d1 h1 c1]
      fn_v27 = promise_v26.catch;                       // #62222:39:200 [L d1 h1 c1]
      fn_v28 = clos;                                    // #62227:242:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v28 = its home register (H139 CLOS bind)
      promise_v29 = fn_v27.call(promise_v26, fn_v28);   // #62238:187:138 [L d1 h1 c1]
      return promise_v29;                               // #62257:31:245 [L d1 h1 c1]
    }
    cell[28] = "XPed2";                                 // #61923:4:53 #61928:75:233 #61937:133:195 [-] /* never executed in any replay */
    v20 = win_v18.Promise;                              // #61940:136:200 [-] /* never executed in any replay */
    v21 = v20.resolve();                                // #61945:121:138 [-] /* never executed in any replay */
    return v21;                                         // #61964:101:245 [-] /* never executed in any replay */
  } catch (caught) {
    v15 = caught;                                         // #62267:251:150 [-] /* never executed in any replay */
    v16 = KP(m62269k251);                               // #62270:131:233 [-] /* never executed in any replay */
    v30 = v15[KP(m62279k131)];                          // #62280:14:200 [-] /* never executed in any replay */
    v17 = v16 + v30;                                    // #62285:107:222 [-] /* never executed in any replay */
    cell[28] = v17;                                     // #62289:37:195 [-] /* never executed in any replay */
    v31 = win_v18[KP(m62291k37)];                       // #62292:168:200 [-] /* never executed in any replay */
    v32 = (v31)[KP(m62296k168)]();                      // #62297:25:138 [-] /* never executed in any replay */
    return v32;                                         // #62316:133:245 [-] /* never executed in any replay */
  }
}