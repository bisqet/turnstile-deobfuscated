function fn_navigator_cb_194087(v3 /* r227 */) { // entry L194087_218; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v4 /* r204 */, v5 /* r199 */, v6 /* r202 */, v7 /* r205 */, v8 /* r205 */, v9 /* r204 */, v10 /* r202 */;
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 2 webs kept as registers (retOut 2)
  v4 = v3;                                              // #194088:223:150 [L d1 h1 c1]
  v1 = null;                                            // #194091:243:53 #194101:220:233 #194104:32:233 #194107:84:233 [L d1 h1 c1]
  if (v4 === v1) {                                      // #194110:144:161 [L d1 h1 c1]
    v2 = false;                                         // #194127:8:233 [-] +#194130:184:53 /* never executed in any replay */
  } else {
    v5 = undefined;                                     // #194135:21:233 [L d1 h1 c1]
    v6 = !((undefined) === v4);                         // #194138:173:65 #194142:98:130 [L d1 h1 c1]
    v2 = v6;                                            // #194145:71:150 [L d1 h1 c1] +#194148:187:53
  }
  if (v2) {                                             // #194153:226:160 [L d1 h1 c1]
    v7 = {};                                            // #194164:18:159 [L d1 h1 c1]
    v7.StrX9 = v4;                                      // #194166:79:142 [L d1 h1 c1]
    return v7;                                          // #194175:99:245 [L d1 h1 c1]
  }
  v8 = {};                                              // #194159:170:53 #194177:229:159 [-] /* never executed in any replay */
  v9 = "hzjPl2";                                        // #194179:69:233 [-] /* never executed in any replay */
  v10 = "BpXwS4";                                       // #194189:37:233 [-] /* never executed in any replay */
  v8.hzjPl2 = "BpXwS4";                                 // #194199:107:199 [-] /* never executed in any replay */
  return v8;                                            // #194203:15:245 [-] /* never executed in any replay */
}