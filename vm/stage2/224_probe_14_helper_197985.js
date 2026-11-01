function probe_14_helper_197985(win_v3 /* r227 */) { // entry L197985_156; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 6 register webs used only inside this fn (no live-in, cross-call or table-made def; 4 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, fn_v2 /* r205 */, win_v4 /* r204 */, v5 /* r202 */, v6 /* r199 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3
  //   Window: win_v3 3, win_v4 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  win_v4 = win_v3;                                      // #197986:25:150 [L d1 h1 c1]
  NC(24);                                               // #197989:197:53 #197994:13:211 [L d1 h1 c1]
  cell[24] = win_v4;                                    // #197997:191:195 [L d1 h1 c1]
  NC(25, 26);                                           // #198000:83:53 #198005:217:211 [L d1 h1 c1]
  v1 = {};                                              // #198009:199:159 [L d1 h1 c1]
  v5 = "__proto__";                                     // #198011:31:233 [L d1 h1 c1]
  v6 = null;                                            // #198016:23:233 [L d1 h1 c1]
  v1.__proto__ = null;                                  // #198019:21:199 [L d1 h1 c1]
  cell[25] = v1;                                        // #198023:167:195 [L d1 h1 c1]
  fn_v2 = win_v4.String;                                // #198026:162:200 [L d1 h1 c1]
  cell[26] = fn_v2;                                     // #198031:64:195 [L d1 h1 c1]
  clos;                                                 // #198034:231:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  return r205;                                          // #198062:155:245 [L d1 h1 c1]
}