function fn_Promise_cb_15167(win_v7 /* r70 */, v8 /* r214 */, v9 /* r221 */) { // entry L15167_30; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, v2 /* r205 */, win_v3 /* r199 */, fn_v4 /* r202 */, win_v5 /* r204 */, v6 /* r205 */, v10 /* r204 */, v11 /* r199 */, v12 /* r202 */, v13 /* r202 */;
  let arr_v14 /* r204 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v5 3, win_v7 3
  //   Function: fn_v4 3
  //   Array: arr_v14 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 1 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #15168:246:53 #15178:81:233 [L d1 h1 c1]
  v2 = cell[40];                                        // #15181:184:236 [L d1 h1 c1]
  if (v2) {                                             // #15184:39:160 [L d1 h1 c1]
    win_v3 = win_v7[v9];                                // #15203:192:7 [L d1 h1 c1]
    fn_v4 = win_v3.clearTimeout;                        // #15207:151:200 [L d1 h1 c1]
    v11 = typeof fn_v4;                                 // #15212:39:193 [L d1 h1 c1]
    v12 = v8 === v11;                                   // #15215:247:65 [L d1 h1 c1]
    v10 = v12;                                          // #15219:200:150 [L d1 h1 c1] +#15222:120:53
  } else {
    v10 = v2;                                           // #15190:27:53 #15195:63:150 [-] +#15198:211:53 /* never executed in any replay */
  }
  if (v10) {                                            // #15227:245:160 [L d1 h1 c1]
    try {
      TP(tryStack, 15283, 41, callDepths);                         // #15238:183:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      win_v5 = win_v7[v9];                              // #15244:117:7 #15248:206:150 [L d1 h1 c1]
      v13 = (win_v5).clearTimeout(v2);                  // #15251:39:138 [L d1 h1 c1]
      arr_v14 = tryStack.pop();                              // #15276:6:124 [L d1 h1 c1] +#15279:62:53
    } catch (caught) {
      outside("L15286_178");                            // #15284:178:150 [-]  L15286_178 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    // #15233:49:53 [-] /* never executed in any replay */
  }
  v6 = 0;                                               // #15292:252:72 [L d1 h1 c1]
  cell[40] = 0;                                         // #15295:178:195 [L d1 h1 c1]
  v15 = undefined;                                      // #15298:30:233 [L d1 h1 c1]
  return v15;                                           // #15301:182:245 [L d1 h1 c1]
}