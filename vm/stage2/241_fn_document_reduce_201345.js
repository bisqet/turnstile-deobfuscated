function fn_document_reduce_201345(win_v4 /* r70 */, v5 /* r88 */, v6 /* r227 */) { // entry L201345_3; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r205 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 45
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v7 = v6;                                              // #201346:164:150 [L d15 h15 c15]
  v1 = v5;                                              // #201349:1:150 [L d15 h15 c15]
  v2 = (win_v4).Number(v1);                             // #201352:13:53 #201362:180:138 [L d15 h15 c15]
  if (v2) {                                             // #201381:51:160 [L d15 h15 c15]
    v8 = v2;                                            // #201403:25:150 [L d15 h15 c15] +#201406:197:53
  } else {
    v3 = 0;                                             // #201387:247:53 #201392:24:72 [-] /* never executed in any replay */
    v8 = 0;                                             // #201395:165:150 [-] +#201398:33:53 /* never executed in any replay */
  }
  v9 = v7 + v8;                                         // #201411:75:222 [L d15 h15 c15]
  return v9;                                            // #201415:111:245 [L d15 h15 c15]
}