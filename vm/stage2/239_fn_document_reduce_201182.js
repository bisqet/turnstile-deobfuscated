function fn_document_reduce_201182(v2 /* r88 */, v3 /* r214 */, v4 /* r227 */) { // entry L201182_72; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 10 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v5 /* r205 */, sVGRect_v6 /* r196 */, v7 /* r204 */, v8 /* r199 */, v9 /* r202 */, v10 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   SVGRect: sVGRect_v6 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v5 = v4;                                              // #201183:21:150 [L d4 h4 c4]
  v1 = v2;                                              // #201186:238:150 [L d4 h4 c4]
  sVGRect_v6 = cell[30];                                // #201189:134:53 #201199:74:236 [L d4 h4 c4]
  v7 = sVGRect_v6[v1];                                  // #201202:124:7 [L d4 h4 c4]
  v8 = typeof v7;                                       // #201206:184:193 [L d4 h4 c4]
  if (v8 === v3) {                                      // #201209:100:161 [L d4 h4 c4]
    v9 = false;                                         // #201226:74:233 [-] +#201229:114:53 /* never executed in any replay */
  } else {
    v5[v1] = v7;                                        // #201234:42:199 [L d4 h4 c4]
    v10 = v7;                                           // #201238:239:150 [L d4 h4 c4] +#201241:195:53
  }
  return v5;                                            // #201246:63:245 [L d4 h4 c4]
}