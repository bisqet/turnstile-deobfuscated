function fn_webrtc_offer_map_235907(win_v2 /* r70 */, v3 /* r227 */) { // entry L235907_54; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v4 /* r204 */, v5 /* r202 */, v6 /* r205 */, fn_v7 /* r202 */, v8 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 30
  //   Function: fn_v7 30
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 2 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v4 = v3;                                              // #235908:203:150 [L d10 h10 c10]
  v1 = cell[34];                                        // #235911:47:53 #235921:84:233 #235924:111:236 [L d10 h10 c10]
  if (v1) {                                             // #235927:194:160 [L d10 h10 c10]
    try {
      TP(tryStack, 236024, 13, callDepths);                        // #235946:250:194 [L d10 h10 c10]  try: pushes the catch arm of the enclosing try (TP)
      fn_v7 = win_v2.MediaSource;                       // #235952:105:200 #235957:242:150 [L d10 h10 c10]
      if (fn_v7.isTypeSupported(v4)) {                  // #235960:187:138 #235988:222:160 [L d10 h10 c10]
        v8 = 1;                                         // #236007:66:72 [L d8 h8 c8] +#236010:138:53
      } else {
        v8 = 0;                                         // #235994:182:53 #235999:23:72 [L d2 h2 c2] +#236002:75:53
      }
      return v8;                                        // #236015:214:245 [L d10 h10 c10]
    } catch (caught) {
      outside("L236027_6");                             // #236025:6:150 [-]  L236027_6 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } else {
    v5 = 1;                                             // #235933:10:53 #235938:176:72 [-] /* never executed in any replay */
    v6 = -v5;                                           // #235941:40:189 [-] /* never executed in any replay */
    return v6;                                          // #235944:24:245 [-] /* never executed in any replay */
  }
}