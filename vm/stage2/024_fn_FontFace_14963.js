function fn_FontFace_14963(win_v11 /* r70 */, fn_v12 /* r88 */, fn_v13 /* r227 */) { // entry L14963_155; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 19 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let fn_v1 /* r205 */, fn_v2 /* r202 */, v3 /* r205 */, v4 /* r198 */, v5 /* r196 */, v6 /* r199 */, fontFace_v7 /* r202 */, fn_v8 /* r202 */, fn_v9 /* r205 */, arr_v10 /* r205 */;
  let fn_v14 /* r204 */, promise_v15 /* r199 */, fn_v16 /* r198 */, fn_v17 /* r202 */, promise_v18 /* r196 */, v19 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 192, fn_v2 192, fn_v8 192, fn_v9 192, fn_v12 192, fn_v13 192, fn_v14 192, fn_v16 192
  //   Function: fn_v17 192
  //   FontFace: fontFace_v7 192
  //   Array: arr_v10 192
  //   Window: win_v11 192
  //   Promise: promise_v15 192, promise_v18 192
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 3 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = fn_v13;                                       // #14964:220:150 [L d64 h64 c64]
  fn_v14 = fn_v12;                                      // #14967:89:150 [L d64 h64 c64]
  NC(34);                                               // #14970:5:53 #14975:42:211 [L d64 h64 c64]
  cell[34] = fn_v1;                                     // #14978:168:195 [L d64 h64 c64] +#14981:216:53 +#14986:100:233
  try {
    TP(tryStack, 15104, 116, callDepths);                          // #14989:61:194 [L d64 h64 c64]  try: pushes the catch arm of the enclosing try (TP)
    fn_v2 = win_v11.FontFace;                           // #14995:96:200 [L d64 h64 c64]
    v3 = cell[33];                                      // #15000:75:236 [L d64 h64 c64]
    v4 = "local(\"" + cell[33];                         // #15003:147:233 #15014:28:222 [L d64 h64 c64]
    v5 = "\")";                                         // #15018:96:233 [L d64 h64 c64]
    v6 = ("local(\"" + cell[33]) + "\")";               // #15024:245:222 [L d64 h64 c64]
    fontFace_v7 = new fn_v2(v3, v6);                    // #15028:205:1 [L d64 h64 c64]
    promise_v15 = fontFace_v7.load();                   // #15034:234:138 [L d64 h64 c64]
    fn_v16 = promise_v15.then;                          // #15050:153:200 [L d64 h64 c64]
    fn_v8 = clos;                                       // #15055:28:216 [L d64 h64 c64]  closure creation (operands from the byte stream); then fn_v8 = its home register (H139 CLOS bind)
    fn_v9 = fn_v8;                                      // #15065:153:150 [L d64 h64 c64]
    fn_v17 = clos;                                      // #15068:28:216 [L d64 h64 c64]  closure creation (operands from the byte stream); then fn_v17 = its home register (H139 CLOS bind)
    promise_v18 = fn_v16.call(promise_v15, fn_v9, fn_v17);  // #15078:189:138 [L d64 h64 c64]
    arr_v10 = tryStack.pop();                                // #15097:196:124 [L d64 h64 c64]
    v19 = undefined;                                    // #15100:132:53 #15118:172:233 [L d64 h64 c64]
    return v19;                                         // #15121:140:245 [L d64 h64 c64]
  } catch (caught) {
    outside("L15107_145");                              // #15105:145:150 [-]  L15107_145 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}