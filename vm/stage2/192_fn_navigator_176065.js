function fn_navigator_176065(win_v18 /* r70 */, v19 /* r223 */, v20 /* r227 */) { // entry L176065_216; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 29 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let navigator_v1 /* r205 */, permissions_v2 /* r198 */, fn_v3 /* r196 */, v4 /* r205 */, promise_v5 /* r204 */, fn_v6 /* r196 */, fn_v7 /* r205 */, fn_v8 /* r204 */, promise_v9 /* r205 */, arr_v10 /* r205 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r202 */, v14 /* r199 */, v15 /* r205 */, v16 /* r196 */, v17 /* r195 */, v21 /* r192 */, arr_v22 /* r202 */, fn_v23 /* r199 */;
  let v24 /* r195 */, v25 /* r193 */, promise_v26 /* r198 */, fn_v27 /* r196 */, v28 /* r204 */, v29 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Navigator: navigator_v1 12
  //   Permissions: permissions_v2 12
  //   Function: fn_v3 12, fn_v6 12, fn_v7 12, fn_v8 12, fn_v23 12, fn_v27 12
  //   Promise: promise_v5 12, promise_v9 12, promise_v26 12
  //   Array: arr_v10 12, arr_v22 12
  //   Window: win_v18 12
  // H133 rewrites: 1 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v21 = v20;                                            // #176066:101:150 [L d4 h4 c4]
  NC(34);                                               // #176069:225:53 #176074:156:211 [L d4 h4 c4]
  cell[34] = v21;                                       // #176077:210:195 [L d4 h4 c4] +#176080:218:53 +#176085:89:233
  try {
    TP(tryStack, 176260, 60, callDepths);                          // #176088:158:194 [L d4 h4 c4]  try: pushes the catch arm of the enclosing try (TP)
    arr_v22 = cell[29];                                 // #176094:17:236 #176097:250:150 [L d4 h4 c4]
    fn_v23 = arr_v22[v19];                              // #176100:108:7 [L d4 h4 c4]
    navigator_v1 = win_v18.navigator;                   // #176104:147:200 [L d4 h4 c4]
    permissions_v2 = navigator_v1.permissions;          // #176109:222:200 [L d4 h4 c4]
    fn_v3 = (navigator_v1.permissions).query;           // #176114:189:200 [L d4 h4 c4]
    v4 = {};                                            // #176123:27:159 [L d4 h4 c4]
    v24 = "name";                                       // #176125:35:233 [L d4 h4 c4]
    v25 = cell[28][v21];                                // #176130:194:236 #176133:20:7 [L d4 h4 c4]
    v4.name = v25;                                      // #176137:94:199 [L d4 h4 c4]
    promise_v5 = fn_v3.call(permissions_v2, v4);        // #176141:119:138 [L d4 h4 c4]
    fn_v6 = promise_v5.then;                            // #176160:50:200 [L d4 h4 c4]
    fn_v7 = clos;                                       // #176165:145:216 [L d4 h4 c4]  closure creation (operands from the byte stream); then fn_v7 = its home register (H139 CLOS bind)
    promise_v26 = fn_v6.call(promise_v5, fn_v7);        // #176180:158:138 [L d4 h4 c4]
    fn_v27 = promise_v26.catch;                         // #176198:125:200 [L d4 h4 c4]
    fn_v8 = clos;                                       // #176203:112:216 [L d4 h4 c4]  closure creation (operands from the byte stream); then fn_v8 = its home register (H139 CLOS bind)
    promise_v9 = fn_v27.call(promise_v26, fn_v8);       // #176216:193:138 [L d4 h4 c4]
    v28 = fn_v23.call(arr_v22, promise_v9);             // #176235:14:138 [L d4 h4 c4]
    arr_v10 = tryStack.pop();                                // #176253:17:124 [L d4 h4 c4]
    v29 = undefined;                                    // #176256:221:53 #176374:255:233 [L d4 h4 c4]
    return v29;                                         // #176377:83:245 [L d4 h4 c4]
  } catch (caught) {
    v11 = caught;                                         // #176261:57:150 [-] /* never executed in any replay */
    v12 = cell[29];                                     // #176264:0:236 [-] /* never executed in any replay */
    v13 = v12;                                          // #176267:237:150 [-] /* never executed in any replay */
    v14 = v13[v19];                                     // #176270:83:7 [-] /* never executed in any replay */
    v15 = win_v18[KP(m176273k83)];                      // #176274:158:200 [-] /* never executed in any replay */
    v16 = v15;                                          // #176279:147:150 [-] /* never executed in any replay */
    v17 = v16[KP(m176281k147)];                         // #176282:222:200 [-] /* never executed in any replay */
    outside("L176286_222");  // L176286_222 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
  }
}