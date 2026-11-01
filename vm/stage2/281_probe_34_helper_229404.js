function probe_34_helper_229404(win_v6 /* r70 */, msg_v7 /* r227 */) { // entry L229404_205; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 16 register webs used only inside this fn (no live-in, cross-call or table-made def; 11 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v5 /* r202 */, msg_v8 /* r199 */, v9 /* r205 */, v10 /* r204 */, v11 /* r202 */, v12 /* r204 */;
  let v13 /* r198 */, v14 /* r199 */, v15 /* r202 */, v16 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v6 3
  //   MessageEvent: msg_v7 3, msg_v8 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  msg_v8 = msg_v7;                                      // #229405:198:150 [-] /* never executed in any replay */
  v1 = cell[21];                                        // #229408:254:53 #229418:197:236 [-] /* never executed in any replay */
  if (v1) {                                             // #229421:64:160 [-] /* never executed in any replay */
    v9 = undefined;                                     // #229432:49:233 [-] /* never executed in any replay */
    return v9;                                          // #229435:61:245 [-] /* never executed in any replay */
  }
  v10 = undefined;                                      // #229427:16:53 #229437:80:233 [-] /* never executed in any replay */
  v2 = msg_v8.data;                                     // #229440:231:200 [-] /* never executed in any replay */
  v11 = v2.PoNB7;                                       // #229445:226:200 [-] /* never executed in any replay */
  if (!((v10 === v2.PoNB7))) {                          // #229454:134:65 #229458:61:160 [-] /* never executed in any replay */
    v3 = true;                                          // #229464:89:53 #229469:30:233 [-] /* never executed in any replay */
    cell[21] = true;                                    // #229472:204:195 [-] /* never executed in any replay */
    v12 = cell[19];                                     // #229475:7:236 [-] /* never executed in any replay */
    v4 = "ATpJ5";                                       // #229478:95:233 [-] /* never executed in any replay */
    v13 = win_v6.String;                                // #229483:122:200 [-] /* never executed in any replay */
    v5 = msg_v8.data;                                   // #229488:233:200 [-] /* never executed in any replay */
    v14 = v5.PoNB7;                                     // #229493:92:200 [-] /* never executed in any replay */
    v15 = v13.call(win_v6, v14);                        // #229502:253:138 [-] /* never executed in any replay */
    v12.ATpJ5 = v15;                                    // #229522:227:199 [-] /* never executed in any replay */
    r205 = cell[16]();                                  // #229526:43:201 [-] +#229530:15:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  }
  v16 = undefined;                                      // #229535:175:233 [-] /* never executed in any replay */
  return v16;                                           // #229538:67:245 [-] /* never executed in any replay */
}