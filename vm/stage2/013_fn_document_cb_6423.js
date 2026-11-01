function fn_document_cb_6423() { // entry L6423_25; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let shadowRoot_v1 /* r205 */, shadowRoot_v2 /* r204 */, arr_v3 /* r205 */, elIFrame_v4 /* r196 */, v5 /* r204 */, elIFrame_v6 /* r204 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   ShadowRoot: shadowRoot_v1 3, shadowRoot_v2 3
  //   Array: arr_v3 3
  //   HTMLIFrameElement: elIFrame_v4 3, elIFrame_v6 3
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  // #6424:197:53 #6434:164:233 [L d1 h1 c1]
  try {
    TP(tryStack, 6541, 68, callDepths);                            // #6437:125:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    elIFrame_v4 = cell[40];                             // #6443:52:236 [L d1 h1 c1]
    if (elIFrame_v4) {                                  // #6446:179:160 [L d1 h1 c1]
      shadowRoot_v1 = elIFrame_v4.parentNode;           // #6465:127:200 #6470:48:150 [L d1 h1 c1] +#6473:64:53
    } else {
      shadowRoot_v1 = elIFrame_v4;                      // #6452:119:53 #6457:247:150 [-] +#6460:171:53 /* never executed in any replay */
    }
    if (shadowRoot_v1) {                                // #6478:92:160 [L d1 h1 c1]
      shadowRoot_v2 = elIFrame_v4.parentNode;           // #6497:50:200 [L d1 h1 c1]
      elIFrame_v6 = (shadowRoot_v2).removeChild(elIFrame_v4);  // #6502:251:138 #6526:188:150 [L d1 h1 c1] +#6529:156:53
    } else {
      v5 = shadowRoot_v1;                               // #6484:188:53 #6489:238:150 [-] +#6492:134:53 /* never executed in any replay */
    }
    arr_v3 = tryStack.pop();                                 // #6534:117:124 [L d1 h1 c1]
    v7 = undefined;                                     // #6537:177:53 #6550:124:233 [L d1 h1 c1]
    return v7;                                          // #6553:28:245 [L d1 h1 c1]
  } catch (caught) {
    outside("L6544_33");                                // #6542:33:150 [-]  L6544_33 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}