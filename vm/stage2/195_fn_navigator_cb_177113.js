function fn_navigator_cb_177113(batteryManager_v1 /* r227 */) { // entry L177113_41; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 1 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let batteryManager_v2 /* r205 */, v3 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   BatteryManager: batteryManager_v1 3, batteryManager_v2 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  batteryManager_v2 = batteryManager_v1;                // #177114:178:150 [L d1 h1 c1]
  r204 = cell[32](batteryManager_v2);                   // #177117:58:53 #177127:227:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204
  v3 = undefined;                                       // #177131:203:233 [L d1 h1 c1]
  return v3;                                            // #177134:239:245 [L d1 h1 c1]
}