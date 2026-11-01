function fn_Promise_cb_15929(win_v30 /* r70 */, fn_v31 /* r88 */, v32 /* r214 */, v33 /* r221 */, fn_v34 /* r227 */) { // entry L15929_54; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 46 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 6 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r204 */, fn_v2 /* r205 */, v3 /* r205 */, arr_v4 /* r205 */, arr_v5 /* r205 */, v6 /* r204 */, v7 /* r204 */, v8 /* r205 */, v9 /* r205 */, fn_v10 /* r205 */;
  let fn_v11 /* r205 */, fn_v12 /* r205 */, fn_v13 /* r205 */, v14 /* r205 */, win_v15 /* r205 */, win_v16 /* r196 */, fn_v17 /* r195 */, fn_v18 /* r205 */, fn_v19 /* r204 */, v20 /* r205 */;
  let arr_v21 /* r205 */, v22 /* r205 */, arr_v23 /* r205 */, v24 /* r205 */, arr_v25 /* r205 */, v26 /* r204 */, v27 /* r205 */, arr_v28 /* r205 */, v29 /* r204 */, v35 /* r202 */;
  let fn_v36 /* r198 */, fn_v37 /* r204 */, v38 /* r205 */, v39 /* r202 */, v40 /* r195 */, v41 /* r196 */, v42 /* r199 */, v43 /* r204 */, v44 /* r205 */, v45 /* r204 */;
  let v46 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3, fn_v10 3, fn_v11 3, fn_v12 3, fn_v13 3, fn_v17 3, fn_v18 3
  //   Function: fn_v19 3, fn_v31 3, fn_v34 3, fn_v36 3, fn_v37 3
  //   Array: arr_v4 3, arr_v5 3, arr_v21 3, arr_v23 195, arr_v25 192, arr_v28 3
  //   Window: win_v15 3, win_v16 3, win_v30 3
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  fn_v1 = fn_v34;                                       // #15930:203:150 [L d1 h1 c1]
  fn_v2 = fn_v31;                                       // #15933:76:150 [L d1 h1 c1]
  NC(34, 35);                                           // #15936:236:53 #15941:1:211 [L d1 h1 c1]
  cell[34] = fn_v1;                                     // #15945:227:195 [L d1 h1 c1]
  cell[35] = fn_v2;                                     // #15948:189:195 [L d1 h1 c1]
  NC(36, 37, 38, 39, 40, 44, 45, 46, 47);               // #15951:217:53 #15956:135:211 [L d1 h1 c1]
  v35 = undefined;                                      // #15967:223:233 #15970:215:233 [L d1 h1 c1]
  v3 = undefined;                                       // #15973:239:233 [L d1 h1 c1]
  clos;                                                 // #15976:154:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #15989:89:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #16002:220:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #16014:19:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #16023:46:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  clos;                                                 // #16033:157:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  arr_v4 = [];                                          // #16046:23:107 [L d1 h1 c1]
  cell[36] = arr_v4;                                    // #16048:33:195 [L d1 h1 c1]
  arr_v5 = cell[33];                                    // #16051:72:236 [L d1 h1 c1]
  v6 = cell[33].length;                                 // #16054:255:200 [L d1 h1 c1]
  cell[37] = cell[33].length;                           // #16059:105:195 [L d1 h1 c1]
  v7 = false;                                           // #16062:185:233 [L d1 h1 c1]
  cell[38] = false;                                     // #16065:187:195 [L d1 h1 c1]
  v8 = null;                                            // #16068:67:233 [L d1 h1 c1]
  cell[39] = null;                                      // #16071:157:195 [L d1 h1 c1]
  v9 = 0;                                               // #16074:192:72 [L d1 h1 c1]
  cell[40] = 0;                                         // #16077:102:195 [L d1 h1 c1]
  fn_v10 = clos;                                        // #16080:245:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v10 = its home register (H139 CLOS bind)
  cell[44] = fn_v10;                                    // #16093:7:195 [L d1 h1 c1]
  fn_v11 = clos;                                        // #16096:82:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v11 = its home register (H139 CLOS bind)
  cell[45] = fn_v11;                                    // #16109:48:195 [L d1 h1 c1]
  fn_v12 = clos;                                        // #16112:23:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v12 = its home register (H139 CLOS bind)
  cell[46] = fn_v12;                                    // #16124:33:195 [L d1 h1 c1]
  fn_v13 = clos;                                        // #16127:132:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v13 = its home register (H139 CLOS bind)
  cell[47] = fn_v13;                                    // #16136:26:195 [L d1 h1 c1]
  clos;                                                 // #16139:217:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  fn_v36 = clos;                                        // #16149:92:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v36 = its home register (H139 CLOS bind)
  try {
    TP(tryStack, 16375, 41, callDepths);                           // #16162:85:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    fn_v37 = win_v30[v33].setTimeout;                   // #16168:27:7 #16172:70:200 [L d1 h1 c1]
    if ((typeof fn_v37) === v32) {                      // #16177:218:193 #16180:126:161 [L d1 h1 c1]
      try {
        TP(tryStack, 16278, 82, callDepths);                       // #16207:108:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        win_v15 = win_v30[v33];                         // #16213:150:7 [L d1 h1 c1]
        win_v16 = win_v15;                              // #16217:171:150 [L d1 h1 c1]
        fn_v17 = win_v15.setTimeout;                    // #16220:150:200 [L d1 h1 c1]
        fn_v18 = clos;                                  // #16225:101:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v18 = its home register (H139 CLOS bind)
        fn_v19 = fn_v18;                                // #16235:254:150 [L d1 h1 c1]
        v20 = fn_v17.call(win_v16, fn_v19, 1000);       // #16238:58:233 #16243:227:138 [L d1 h1 c1]
        cell[40] = v20;                                 // #16268:189:195 [L d1 h1 c1]
        arr_v21 = tryStack.pop();                            // #16271:196:124 [L d1 h1 c1]
        v39 = 0;                                        // #16274:132:53 #16296:110:72 [L d1 h1 c1]
        v40 = 1;                                        // #16299:141:72 [L d1 h1 c1]
        v41 = "length";                                 // #16302:77:233 [L d1 h1 c1]
        v42 = undefined;                                // #16307:13:233 [L d1 h1 c1] +#16310:233:53
        while ((arr_v23 = cell[33], v43 = arr_v23[v41], v24 = v39 < v43, v39 < v43)) {  // #16325:32:236 | #16328:122:7 | #16332:147:186 [L d65 h65 c65]
          arr_v25 = cell[33];                           // #16350:125:236 [L d64 h64 c64]
          v26 = arr_v25[v39];                           // #16353:163:7 [L d64 h64 c64]
          v27 = MC(v42, fn_v36, v26, v39);              // #16357:14:168 [L d64 h64 c64]
          v22 = v39; v39 = v39 + v40;                   // #16363:38:53 #16315:100:48 [L d64 h64 c64]
        }
        arr_v28 = tryStack.pop();                            // #16368:146:124 [L d1 h1 c1]
        v46 = undefined;                                // #16371:154:53 #16417:3:233 [L d1 h1 c1]
        return v46;                                     // #16420:71:245 [L d1 h1 c1]
      } catch (caught) {
        outside("L16281_119");                          // #16279:119:150 [-]  L16281_119 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      v14 = r199();                                     // #16188:214:53 #16193:96:113 [-] /* never executed in any replay */
      v38 = undefined;                                  // #16197:148:233 [-] /* never executed in any replay */
      return v38;                                       // #16200:212:245 [-] /* never executed in any replay */
    }
  } catch (caught) {
    v44 = caught;                                         // #16376:178:150 [-] /* never executed in any replay */
    v29 = cell[38];                                     // #16379:213:236 [-] /* never executed in any replay */
    if (v29) {                                          // #16382:16:160 [-] /* never executed in any replay */
      v45 = undefined;                                  // #16393:242:233 [-] /* never executed in any replay */
      return v45;                                       // #16396:58:245 [-] /* never executed in any replay */
    }
    outside("L16387_16");  // L16387_16 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}