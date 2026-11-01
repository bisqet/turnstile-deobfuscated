function probe_29_helper_688(v6 /* r70 */, v7 /* r220 */, v8 /* r223 */) { // entry L678_135; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r204 */, v4 /* r205 */, v5 /* r205 */, v9 /* r204 */, v10 /* r202 */, v11 /* r204 */, v12 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  // #679:251:53 #689:240:233 [-] /* never executed in any replay */
  try {
    TP(tryStack, 790, 81, callDepths);                             // #692:153:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
    v9 = v6[v8][v7];                                    // #698:104:20 [-] /* never executed in any replay */
    if (v9) {                                           // #703:23:160 [-] /* never executed in any replay */
      v10 = v9.JKoe4;                                   // #722:153:200 [-] /* never executed in any replay */
      v1 = v10;                                         // #727:98:150 [-] +#730:42:53 /* never executed in any replay */
    } else {
      v1 = v9;                                          // #709:75:53 #714:40:150 [-] +#717:88:53 /* never executed in any replay */
    }
    if (v1) {                                           // #735:202:160 [-] /* never executed in any replay */
      v2 = v9.JKoe4;                                    // #746:129:200 [-] /* never executed in any replay */
      v3 = (v2).close();                                // #751:206:138 [-] /* never executed in any replay */
      v4 = v6[v8];                                      // #768:240:7 [-] /* never executed in any replay */
      v11 = null;                                       // #772:228:233 [-] /* never executed in any replay */
      v4[v7] = v11;                                     // #775:141:210 [-] /* never executed in any replay */
    } else {
      // #741:242:53 [-] /* never executed in any replay */
    }
    v5 = tryStack.pop();                                     // #783:67:124 [-] /* never executed in any replay */
    v12 = undefined;                                    // #786:199:53 #799:249:233 [-] /* never executed in any replay */
    return v12;                                         // #802:229:245 [-] /* never executed in any replay */
  } catch (caught) {
    outside("L793_58");                                 // #791:58:150 [-]  L793_58 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}