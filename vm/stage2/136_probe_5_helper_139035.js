function probe_5_helper_139035(v3 /* r227 */) { // entry L139022_57; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v4 /* r196 */, v5 /* r204 */, v6 /* r199 */, v7 /* r198 */, v8 /* r202 */, v9 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v4 = v3;                                              // #139023:130:150 [L d1 h1 c1]
  v5 = {};                                              // #139026:202:53 #139036:53:159 [L d1 h1 c1]
  v1 = "ATpJ5";                                         // #139038:85:233 [L d1 h1 c1]
  v6 = 0;                                               // #139043:152:72 [L d1 h1 c1]
  v7 = 2048;                                            // #139046:236:233 [L d1 h1 c1]
  v2 = (v4).substring(v6, v7);                          // #139051:77:138 [L d1 h1 c1]
  v5.ATpJ5 = v2;                                        // #139074:243:199 [L d1 h1 c1]
  v8 = "irmf9";                                         // #139078:155:233 [L d1 h1 c1]
  v9 = cell[20];                                        // #139087:90:236 [L d1 h1 c1]
  v5.irmf9 = cell[20];                                  // #139090:12:199 [L d1 h1 c1]
  return v5;                                            // #139094:108:245 [L d1 h1 c1]
}