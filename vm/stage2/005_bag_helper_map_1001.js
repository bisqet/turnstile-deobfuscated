function bag_helper_map_1001(v3 /* r227 */) { // entry L1001_123; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, v2 /* r205 */, v4 /* r199 */, v5 /* r204 */, v6 /* r202 */, v7 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v3;                                              // #1002:60:150 [L d416 h448 c288]
  v2 = 16;                                              // #1005:28:53 #1015:221:72 [L d416 h448 c288]
  v4 = (v1).toString(16);                               // #1018:186:138 [L d416 h448 c288]
  v5 = 2;                                               // #1039:169:72 [L d416 h448 c288]
  v6 = "0";                                             // #1042:249:233 [L d416 h448 c288]
  v7 = v4.padStart((2), ("0"));                         // #1047:102:138 [L d416 h448 c288]
  return v7;                                            // #1069:222:245 [L d416 h448 c288]
}