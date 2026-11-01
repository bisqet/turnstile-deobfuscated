function fn_performance_cb_142062(v1 /* r227 */) { // entry L142062_57; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 17 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v2 /* r205 */, v3 /* r204 */, shadowRoot_v4 /* r204 */, fn_v5 /* r204 */, v6 /* r205 */, shadowRoot_v7 /* r204 */, fn_v8 /* r204 */, elIFrame_v9 /* r205 */, v10 /* r205 */, v11 /* r205 */;
  let shadowRoot_v12 /* r199 */, elIFrame_v13 /* r202 */, shadowRoot_v14 /* r199 */, elIFrame_v15 /* r202 */, v16 /* r204 */, v17 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   ShadowRoot: shadowRoot_v4 3, shadowRoot_v7 3, shadowRoot_v12 3, shadowRoot_v14 3
  //   Function: fn_v5 3, fn_v8 3
  //   HTMLIFrameElement: elIFrame_v9 3, elIFrame_v13 3, elIFrame_v15 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v2 = v1;                                              // #142063:130:150 [L d1 h1 c1]
  v3 = cell[19];                                        // #142066:202:53 #142076:105:236 [L d1 h1 c1]
  v3.WNaw9 = v2;                                        // #142079:10:142 [L d1 h1 c1]
  shadowRoot_v4 = cell[30];                             // #142088:205:236 [L d1 h1 c1]
  shadowRoot_v12 = cell[30];                            // #142091:198:150 [L d1 h1 c1]
  fn_v5 = cell[30].contains;                            // #142094:5:200 [L d1 h1 c1]
  elIFrame_v13 = cell[31];                              // #142106:156:236 [L d1 h1 c1]
  v6 = fn_v5.call(shadowRoot_v12, elIFrame_v13);        // #142109:61:138 [L d1 h1 c1]
  if (v6) {                                             // #142131:216:160 [L d1 h1 c1]
    shadowRoot_v7 = cell[30];                           // #142150:98:236 [L d1 h1 c1]
    shadowRoot_v14 = cell[30];                          // #142153:71:150 [L d1 h1 c1]
    fn_v8 = cell[30].removeChild;                       // #142156:194:200 [L d1 h1 c1]
    elIFrame_v15 = cell[31];                            // #142161:165:236 [L d1 h1 c1]
    elIFrame_v9 = fn_v8.call(shadowRoot_v14, elIFrame_v15);  // #142164:98:138 [L d1 h1 c1] +#142189:71:150 +#142192:187:53
  } else {
    // #142137:72:53 #142142:89:150 #142145:5:53 [-] /* never executed in any replay */
  }
  v10 = cell[22];                                       // #142197:8:236 [L d1 h1 c1]
  v16 = 2;                                              // #142200:63:72 [L d1 h1 c1]
  v11 = 2 | cell[22];                                   // #142203:210:32 [L d1 h1 c1]
  cell[22] = 2 | cell[22];                              // #142207:176:195 [L d1 h1 c1]
  r205 = cell[53]();                                    // #142210:4:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
  v17 = undefined;                                      // #142214:168:233 [L d1 h1 c1]
  return v17;                                           // #142217:152:245 [L d1 h1 c1]
}