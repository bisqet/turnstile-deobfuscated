function fn_document_18366(win_v8 /* r70 */, v9 /* r88 */, v10 /* r214 */, v11 /* r227 */) { // entry L18366_16; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 20 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, doc_v2 /* r204 */, doc_v3 /* r198 */, fn_v4 /* r199 */, v5 /* r204 */, v6 /* r204 */, v7 /* r204 */, v12 /* r202 */, v13 /* r205 */, v14 /* r199 */;
  let v15 /* r198 */, v16 /* r199 */, v17 /* r204 */, doc_v18 /* r199 */, v19 /* r204 */, v20 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v2 30, doc_v3 30, doc_v18 30
  //   Function: fn_v4 30
  //   Window: win_v8 30
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v12 = v11;                                            // #18367:189:150 [L d10 h10 c10]
  v13 = v9;                                             // #18370:246:150 [L d10 h10 c10]
  v1 = undefined;                                       // #18373:110:53 #18383:244:233 [L d10 h10 c10]
  doc_v2 = win_v8.document;                             // #18386:251:200 [L d10 h10 c10]
  v14 = !doc_v2;                                        // #18391:248:130 [L d10 h10 c10]
  if (v14) {                                            // #18394:103:160 [L d10 h10 c10]
    v5 = v14;                                           // #18433:241:150 [-] +#18436:61:53 /* never executed in any replay */
  } else {
    doc_v3 = win_v8.document;                           // #18400:91:53 #18405:25:200 [L d10 h10 c10]
    fn_v4 = doc_v3.createElement;                       // #18410:204:200 [L d10 h10 c10]
    v15 = typeof fn_v4;                                 // #18415:200:193 [L d10 h10 c10]
    v16 = !(v15 === v10);                               // #18418:84:65 #18422:45:130 [L d10 h10 c10]
    v5 = v16;                                           // #18425:166:150 [L d10 h10 c10] +#18428:94:53
  }
  if (v5) {                                             // #18441:125:160 [L d10 h10 c10]
    v6 = "XJtuu0";                                      // #18452:59:233 [-] /* never executed in any replay */
    r199 = cell[56](v6);                                // #18462:124:22 [-]  VM call: pushes a frame, the callee body returns into r199 /* never executed in any replay */
    v17 = null;                                         // #18466:64:233 [-] /* never executed in any replay */
    return v17;                                         // #18469:208:245 [-] /* never executed in any replay */
  }
  // #18447:153:53 [L d10 h10 c10]
  try {
    TP(tryStack, 18520, 152, callDepths);                          // #18471:149:194 [L d10 h10 c10]  try: pushes the catch arm of the enclosing try (TP)
    doc_v18 = win_v8.document;                          // #18477:88:200 #18482:229:150 [L d10 h10 c10]
    v19 = doc_v18.createElement(v12);                   // #18485:162:138 [L d10 h10 c10]
    return v19;                                         // #18511:42:245 [L d10 h10 c10]
  } catch (caught) {
    v7 = caught;                                          // #18521:37:150 [-] /* never executed in any replay */
    r204 = cell[56](v13);                               // #18524:62:22 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
    v20 = null;                                         // #18528:122:233 [-] /* never executed in any replay */
    return v20;                                         // #18531:162:245 [-] /* never executed in any replay */
  }
}