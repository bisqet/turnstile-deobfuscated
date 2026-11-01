function fn_navigator_cb_27238(win_v3 /* r70 */, v4 /* r88 */, v5 /* r227 */) { // entry L27238_38; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, fn_v2 /* r204 */, v6 /* r199 */, v7 /* r202 */, fn_v8 /* r205 */, canvas_v9 /* r204 */, v10 /* r198 */, v11 /* r205 */, v12 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 30, fn_v8 30
  //   Window: win_v3 30
  //   OffscreenCanvas: canvas_v9 30
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2)
  v6 = v5;                                              // #27239:251:150 [L d12 h12 c6]
  v7 = v4;                                              // #27242:188:150 [L d12 h12 c6]
  v1 = undefined;                                       // #27245:156:53 #27255:67:233 [L d12 h12 c6]
  fn_v8 = cell[58];                                     // #27258:98:236 [L d12 h12 c6]
  if (fn_v8) {                                          // #27261:169:160 [L d12 h12 c6]
    fn_v2 = fn_v8;                                      // #27272:103:150 [L d12 h12 c6]
    canvas_v9 = new fn_v2(v6, v7);                      // #27275:247:1 [L d12 h12 c6]
    return canvas_v9;                                   // #27281:107:245 [L d12 h12 c6]
  }
  v10 = win_v3.document;                                // #27267:21:53 #27283:114:200 #27288:23:150 [-] /* never executed in any replay */
  v11 = "canvas";                                       // #27291:47:233 [-] /* never executed in any replay */
  v12 = v10.createElement(v11);                         // #27301:68:138 [-] /* never executed in any replay */
  v12.width = v6;                                       // #27327:57:142 [-] /* never executed in any replay */
  v12.height = v7;                                      // #27332:154:142 [-] /* never executed in any replay */
  return v12;                                           // #27337:66:245 [-] /* never executed in any replay */
}