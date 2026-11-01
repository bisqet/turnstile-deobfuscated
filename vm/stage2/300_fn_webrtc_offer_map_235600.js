function fn_webrtc_offer_map_235600(v6 /* r227 */) { // entry L235600_15; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r199 */, v3 /* r205 */, v4 /* r205 */, v5 /* r205 */, v7 /* r198 */, v8 /* r199 */, v9 /* r204 */, v10 /* r202 */, v11 /* r199 */;
  let v12 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v6;                                              // #235601:128:150 [L d8 h8 c8]
  v2 = v1.mimeType;                                     // #235604:80:53 #235614:148:200 [L d8 h8 c8]
  v7 = "/";                                             // #235626:248:233 [L d8 h8 c8]
  v3 = v2 + "/";                                        // #235631:45:222 [L d8 h8 c8]
  v8 = v1.clockRate;                                    // #235635:144:200 [L d8 h8 c8]
  v9 = v3 + v8;                                         // #235648:101:222 [L d8 h8 c8]
  v4 = v1.sdpFmtpLine;                                  // #235652:232:200 [L d8 h8 c8]
  if (v4) {                                             // #235657:151:160 [L d8 h8 c8]
    v5 = ";";                                           // #235677:168:233 [L d1 h1 c1]
    v11 = v1.sdpFmtpLine;                               // #235682:223:200 [L d1 h1 c1]
    v10 = ";" + v11;                                    // #235687:54:180 [L d1 h1 c1]
  } else {
    v10 = "";                                           // #235663:203:53 #235668:179:233 [L d7 h7 c7] +#235672:119:53
  }
  v12 = v9 + v10;                                       // #235695:205:222 [L d8 h8 c8]
  return v12;                                           // #235699:105:245 [L d8 h8 c8]
}