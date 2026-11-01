function fn_document_cb_166102(win_v8 /* r70 */, v9 /* r227 */) { // entry L166102_71; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 17 register webs used only inside this fn (no live-in, cross-call or table-made def; 10 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, fn_v2 /* r202 */, v3 /* r204 */, v4 /* r204 */, v5 /* r204 */, v6 /* r204 */, v7 /* r205 */, fn_v10 /* r199 */, v11 /* r202 */, fn_v12 /* r199 */;
  let v13 /* r202 */, fn_v14 /* r202 */, fn_v15 /* r204 */, v16 /* r205 */, v17 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 288, fn_v10 288, fn_v12 288, fn_v14 288, fn_v15 288
  //   Window: win_v8 288
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v9;                                              // #166103:216:150 [L d96 h96 c96]
  fn_v2 = win_v8.HTMLIFrameElement;                     // #166106:72:53 #166116:126:200 [L d96 h96 c96]
  v3 = v1 instanceof fn_v2;                             // #166137:44:67 [L d96 h96 c96]
  if (v3) {                                             // #166141:203:160 [L d96 h96 c96]
    v11 = v3;                                           // #166184:70:150 [-] +#166187:126:53 /* never executed in any replay */
  } else {
    fn_v10 = win_v8.HTMLFrameElement;                   // #166147:47:53 #166152:158:200 [L d96 h96 c96]
    v4 = v1 instanceof fn_v10;                          // #166172:204:67 [L d96 h96 c96]
    v11 = v4;                                           // #166176:137:150 [L d96 h96 c96] +#166179:117:53
  }
  if (v11) {                                            // #166192:128:160 [L d96 h96 c96]
    v5 = v11;                                           // #166236:3:150 [-] +#166239:135:53 /* never executed in any replay */
  } else {
    fn_v12 = win_v8.HTMLObjectElement;                  // #166198:80:53 #166203:227:200 [L d96 h96 c96]
    v13 = v1 instanceof fn_v12;                         // #166224:61:67 [L d96 h96 c96]
    v5 = v13;                                           // #166228:118:150 [L d96 h96 c96] +#166231:238:53
  }
  if (v5) {                                             // #166244:184:160 [L d96 h96 c96]
    v7 = v5;                                            // #166287:88:150 [-] +#166290:200:53 /* never executed in any replay */
  } else {
    fn_v14 = win_v8.HTMLEmbedElement;                   // #166250:168:53 #166255:55:200 [L d96 h96 c96]
    v6 = v1 instanceof fn_v14;                          // #166275:65:67 [L d96 h96 c96]
    v7 = v6;                                            // #166279:106:150 [L d96 h96 c96] +#166282:18:53
  }
  if (v7) {                                             // #166295:118:160 [L d96 h96 c96]
    v17 = win_v8.NodeFilter;                            // #166340:77:200 [-] /* never executed in any replay */
    v16 = v17.FILTER_ACCEPT;                            // #166354:48:200 [-] +#166371:64:53 /* never executed in any replay */
  } else {
    fn_v15 = win_v8.NodeFilter;                         // #166301:238:53 #166306:39:200 [L d96 h96 c96]
    v16 = fn_v15.FILTER_SKIP;                           // #166320:34:200 [L d96 h96 c96] +#166335:234:53
  }
  return v16;                                           // #166376:51:245 [L d96 h96 c96]
}