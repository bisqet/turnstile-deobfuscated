function fn_Intl_225184(win_v3 /* r70 */) { // entry L225174_216; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 5 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let intl_v1 /* r204 */, dtf_v2 /* r205 */, v4 /* r204 */, v5 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Intl: intl_v1 3
  //   Intl.DateTimeFormat: dtf_v2 3
  //   Window: win_v3 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  intl_v1 = win_v3.Intl;                                // #225175:72:53 #225185:83:200 [L d1 h1 c1]
  dtf_v2 = intl_v1.DateTimeFormat();                    // #225190:216:138 [L d1 h1 c1]
  v4 = dtf_v2.resolvedOptions();                        // #225216:137:138 [L d1 h1 c1]
  v5 = v4.timeZone;                                     // #225243:124:200 [L d1 h1 c1]
  return v5;                                            // #225255:28:245 [L d1 h1 c1]
}