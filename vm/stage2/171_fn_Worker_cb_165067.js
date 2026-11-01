function fn_Worker_cb_165067(v13 /* r227 */) { // entry L165067_248; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 25 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r205 */, v4 /* r205 */, v5 /* r205 */, v6 /* r205 */, v7 /* r199 */, v8 /* r205 */, v9 /* r205 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r205 */, v14 /* r204 */, v15 /* r205 */, v16 /* r202 */, v17 /* r202 */, v18 /* r198 */, v19 /* r199 */, v20 /* r205 */, v21 /* r202 */;
  let v22 /* r204 */, v23 /* r202 */, v24 /* r204 */, v25 /* r205 */;
  // H142: 2 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v14 = v13;                                            // #165068:5:150 [-] /* never executed in any replay */
  v1 = cell[53];                                        // #165071:1:53 #165081:234:236 [-] /* never executed in any replay */
  if (v1) {                                             // #165084:17:160 [-] /* never executed in any replay */
    v15 = undefined;                                    // #165095:211:233 [-] /* never executed in any replay */
    return v15;                                         // #165098:215:245 [-] /* never executed in any replay */
  }
  v2 = v14.data;                                        // #165090:221:53 #165100:91:200 [-] /* never executed in any replay */
  v3 = v2.nAOXb9;                                       // #165105:134:200 [-] /* never executed in any replay */
  v16 = "kxQk1";                                        // #165115:162:233 [-] /* never executed in any replay */
  if (v3 === v16) {                                     // #165124:38:161 [-] /* never executed in any replay */
    v4 = cell[61];                                      // #165141:150:236 [-] /* never executed in any replay */
    if (!(v4)) {                                        // #165144:13:160 [-] /* never executed in any replay */
      v5 = true;                                        // #165150:233:53 #165155:21:233 [-] /* never executed in any replay */
      cell[61] = true;                                  // #165158:167:195 [-] /* never executed in any replay */
      v17 = cell[49];                                   // #165161:54:236 [-] /* never executed in any replay */
      v6 = 1;                                           // #165164:53:72 [-] /* never executed in any replay */
      v7 = cell[62]();                                  // #165167:181:201 [-]  VM call: pushes a frame, the callee body returns into r199; then v7 = r199 (H142 CALL bind) /* never executed in any replay */
      v17[v6] = v7;                                     // #165171:187:199 [-] /* never executed in any replay */
      v8 = 2;                                           // #165175:230:72 [-] /* never executed in any replay */
      v18 = v14.data;                                   // #165178:165:200 [-] /* never executed in any replay */
      v19 = v18.xqJr8;                                  // #165183:40:200 [-] /* never executed in any replay */
      v17[2] = v18.xqJr8;                               // #165192:193:210 [-] /* never executed in any replay */
    }
    v20 = undefined;                                    // #165200:173:233 [-] /* never executed in any replay */
    return v20;                                         // #165203:201:245 [-] /* never executed in any replay */
  }
  v9 = "XnWrA3";                                        // #165205:136:233 [-] /* never executed in any replay */
  v21 = v14.data;                                       // #165215:63:200 [-] /* never executed in any replay */
  v22 = v21.seMw9;                                      // #165220:218:200 [-] /* never executed in any replay */
  if (v9 === v22) {                                     // #165229:126:161 [-] /* never executed in any replay */
    v11 = false;                                        // #165253:103:233 [-] /* never executed in any replay */
    cell[50] = false;                                   // #165256:49:195 [-] /* never executed in any replay */
    v23 = cell[49];                                     // #165259:24:236 [-] /* never executed in any replay */
    v12 = 3;                                            // #165262:15:72 [-] /* never executed in any replay */
    v24 = cell[62]();                                   // #165265:167:201 [-]  VM call: pushes a frame, the callee body returns into r204; then v24 = r204 (H142 CALL bind) /* never executed in any replay */
    v23[v12] = v24;                                     // #165269:4:210 [-] /* never executed in any replay */
  } else {
    v10 = null;                                         // #165237:214:53 #165242:153:233 [-] /* never executed in any replay */
    cell[50] = null;                                    // #165245:27:195 [-] +#165248:63:53 /* never executed in any replay */
  }
  r205 = cell[58]();                                    // #165277:148:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  v25 = undefined;                                      // #165281:248:233 [-] /* never executed in any replay */
  return v25;                                           // #165284:168:245 [-] /* never executed in any replay */
}