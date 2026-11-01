function probe_13_helper_129748(fn_v2 /* r227 */) { // entry L129735_37; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 2 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, v3 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3, fn_v2 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v1 = fn_v2;                                        // #129736:190:150 [L d1 h1 c1]
  cell[22] = fn_v2;                                     // #129739:22:53 #129749:100:195 [L d1 h1 c1]
  v3 = undefined;                                       // #129752:136:233 [L d1 h1 c1]
  return v3;                                            // #129755:248:245 [L d1 h1 c1]
}