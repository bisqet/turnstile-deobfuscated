function probe_4_helper_181876() { // entry L181866_55; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 3 register webs used only inside this fn (no live-in, cross-call or table-made def; 3 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r204 */, v3 /* r202 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = {};                                              // #181867:235:53 #181877:76:159 [L d1 h1 c1]
  v2 = "UdXu3";                                         // #181879:208:233 [L d1 h1 c1]
  v3 = "fetch_error";                                   // #181884:68:233 [L d1 h1 c1]
  v1.UdXu3 = "fetch_error";                             // #181899:206:199 [L d1 h1 c1]
  return v1;                                            // #181903:166:245 [L d1 h1 c1]
}