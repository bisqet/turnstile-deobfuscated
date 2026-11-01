function fn_webrtc_offer_map_235774(win_v2 /* r70 */, v3 /* r227 */) { // entry L235774_53; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v4 /* r204 */, v5 /* r202 */, v6 /* r205 */, fn_v7 /* r202 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 24
  //   Function: fn_v7 24
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v4 = v3;                                              // #235775:142:150 [L d8 h8 c8]
  v1 = cell[34];                                        // #235778:166:53 #235788:199:233 #235791:214:236 [L d8 h8 c8]
  if (v1) {                                             // #235794:77:160 [L d8 h8 c8]
    try {
      TP(tryStack, 235891, 80, callDepths);                        // #235813:114:194 [L d8 h8 c8]  try: pushes the catch arm of the enclosing try (TP)
      fn_v7 = win_v2.MediaSource;                       // #235819:1:200 #235824:42:150 [L d8 h8 c8]
      if (fn_v7.isTypeSupported(v4)) {                  // #235827:19:138 #235855:214:160 [L d8 h8 c8]
        v8 = 1;                                         // #235874:131:72 [L d4 h4 c4] +#235877:7:53
      } else {
        v8 = 0;                                         // #235861:206:53 #235866:251:72 [L d4 h4 c4] +#235869:159:53
      }
      return v8;                                        // #235882:7:245 [L d8 h8 c8]
    } catch (caught) {
      outside("L235894_253");                           // #235892:253:150 [-]  L235894_253 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    v5 = 1;                                             // #235800:41:53 #235805:117:72 [-] /* never executed in any replay */
    v6 = -v5;                                           // #235808:25:189 [-] /* never executed in any replay */
    return v6;                                          // #235811:133:245 [-] /* never executed in any replay */
  }
}