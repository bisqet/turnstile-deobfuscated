function fn_document_cb_159526(doc_v3 /* r88 */, win_v4 /* r227 */) { // entry L159526_241; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 15 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, win_v5 /* r196 */, doc_v6 /* r198 */, v7 /* r202 */, v8 /* r202 */, v9 /* r204 */, v10 /* r199 */, v11 /* r202 */, v12 /* r205 */;
  let v13 /* r202 */, v14 /* r204 */, v15 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v3 3, doc_v6 3
  //   Window: win_v4 3, win_v5 3
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 4 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  win_v5 = win_v4;                                      // #159527:90:150 [L d1 h1 c1]
  doc_v6 = doc_v3;                                      // #159530:95:150 [L d1 h1 c1] +#159533:115:53 +#159543:125:233 +#159546:125:233
  try {
    TP(tryStack, 159709, 216, callDepths);                         // #159549:50:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v7 = win_v5.ontouchstart;                           // #159555:193:200 [L d1 h1 c1]
    v1 = typeof v7;                                     // #159571:41:193 [L d1 h1 c1]
    v8 = "undefined";                                   // #159574:121:233 [L d1 h1 c1]
    v9 = !(v1 === ("undefined"));                       // #159579:129:65 #159583:230:130 [L d1 h1 c1]
    v10 = null;                                         // #159586:130:233 [L d1 h1 c1]
    if (v9) {                                           // #159589:73:160 [L d1 h1 c1]
      try {
        TP(tryStack, 159654, 58, callDepths);                      // #159600:28:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
        v11 = doc_v6;                                   // #159606:153:150 [-] /* never executed in any replay */
        v10 = v11.createEvent("TouchEvent");            // #159609:41:233 #159623:214:138 [-] /* never executed in any replay */
        v2 = tryStack.pop();                                 // #159647:185:124 [-] +#159650:229:53 /* never executed in any replay */
      } catch (caught) {
        outside("L159657_191");                         // #159655:191:150 [-]  L159657_191 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      // #159595:53:53 [L d1 h1 c1]
    }
    if (v9) {                                           // #159663:33:160 [L d1 h1 c1]
      v13 = null;                                       // #159682:125:233 [-] /* never executed in any replay */
      v14 = !(v13 === v10);                             // #159685:117:65 #159689:10:130 [-] /* never executed in any replay */
      v12 = v14;                                        // #159692:79:150 [-] +#159695:163:53 /* never executed in any replay */
    } else {
      v12 = v9;                                         // #159669:173:53 #159674:106:150 [L d1 h1 c1] +#159677:18:53
    }
    return v12;                                         // #159700:1:245 [L d1 h1 c1]
  } catch (caught) {
    v15 = false;                                        // #159710:101:150 #159713:197:233 [-] /* never executed in any replay */
    return v15;                                         // #159716:129:245 [-] /* never executed in any replay */
  }
}