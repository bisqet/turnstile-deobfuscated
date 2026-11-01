function fn_webrtc_offer_map_235700(v4 /* r227 */) { // entry L235700_207; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 8 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r205 */, v5 /* r204 */, v6 /* r202 */, v7 /* r199 */, v8 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v4;                                              // #235701:64:150 [L d19 h19 c19]
  v5 = v1.mimeType;                                     // #235704:16:53 #235714:179:200 [L d19 h19 c19]
  v2 = v1.sdpFmtpLine;                                  // #235726:126:200 [L d19 h19 c19]
  if (v2) {                                             // #235731:85:160 [L d19 h19 c19]
    v3 = ";";                                           // #235751:210:233 [L d15 h15 c15]
    v7 = v1.sdpFmtpLine;                                // #235756:225:200 [L d15 h15 c15]
    v6 = ";" + v7;                                      // #235761:176:180 [L d15 h15 c15]
  } else {
    v6 = "";                                            // #235737:17:53 #235742:159:233 [L d4 h4 c4] +#235746:179:53
  }
  v8 = v5 + v6;                                         // #235769:251:222 [L d19 h19 c19]
  return v8;                                            // #235773:95:245 [L d19 h19 c19]
}