function probe_5_helper_138921(win_v4 /* r70 */, v5 /* r227 */) { // entry L138921_78; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v6 /* r204 */, v7 /* r202 */, v8 /* r198 */, v9 /* r202 */, v10 /* r199 */, v11 /* r205 */, v12 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 3
  //   Window: win_v4 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v6 = v5;                                              // #138922:131:150 [L d1 h1 c1]
  fn_v1 = win_v4.Date;                                  // #138925:7:53 #138935:50:200 [L d1 h1 c1]
  v7 = fn_v1.now();                                     // #138940:251:138 [L d1 h1 c1]
  v8 = cell[19];                                        // #138955:58:236 [L d1 h1 c1]
  v2 = v7 - cell[19];                                   // #138958:223:54 [L d1 h1 c1]
  cell[20] = v2;                                        // #138962:201:195 [L d1 h1 c1]
  v3 = v6.XCkH8;                                        // #138965:188:200 [L d1 h1 c1]
  if (v3) {                                             // #138974:27:160 [L d1 h1 c1]
    v12 = v6.mlrf8;                                     // #139012:21:200 [-] /* never executed in any replay */
    return v12;                                         // #139021:145:245 [-] /* never executed in any replay */
  }
  v9 = "status_";                                       // #138980:63:53 #138985:13:233 [L d1 h1 c1]
  v10 = v6.IThHn4;                                      // #138996:240:200 [L d1 h1 c1]
  v11 = "status_" + v10;                                // #139006:69:222 [L d1 h1 c1]
  return "status_" + v10;                               // #139010:1:245 [L d1 h1 c1]
}