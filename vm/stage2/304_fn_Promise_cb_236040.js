function fn_Promise_cb_236040(v5 /* r227 */) { // entry L236040_116; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r204 */, v4 /* r205 */, v6 /* r199 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v5;                                              // #236041:145:150 [L d6 h6 c6]
  if (((v5).supported)) {                               // #236044:93:53 #236054:139:200 #236067:110:160 [L d6 h6 c6]
    v2 = 1;                                             // #236086:17:72 [L d6 h6 c6] +#236089:221:53
  } else {
    v2 = 0;                                             // #236073:6:53 #236078:189:72 [-] +#236081:217:53 /* never executed in any replay */
  }
  v3 = v1.smooth;                                       // #236094:231:200 [L d6 h6 c6]
  if (v3) {                                             // #236104:90:160 [L d6 h6 c6]
    v6 = 2;                                             // #236123:184:72 [L d6 h6 c6] +#236126:168:53
  } else {
    v6 = 0;                                             // #236110:66:53 #236115:226:72 [-] +#236118:170:53 /* never executed in any replay */
  }
  v7 = v6 | v2;                                         // #236131:220:32 [L d6 h6 c6]
  v4 = v1.powerEfficient;                               // #236135:67:200 [L d6 h6 c6]
  if (v4) {                                             // #236153:70:160 [L d6 h6 c6]
    v8 = 4;                                             // #236172:224:72 [L d6 h6 c6] +#236175:48:53
  } else {
    v8 = 0;                                             // #236159:126:53 #236164:22:72 [-] +#236167:14:53 /* never executed in any replay */
  }
  v9 = v8 | v7;                                         // #236180:158:32 [L d6 h6 c6]
  return v9;                                            // #236184:54:245 [L d6 h6 c6]
}