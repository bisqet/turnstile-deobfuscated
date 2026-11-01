function fn_atob_cb_18646(win_v13 /* r70 */, v14 /* r88 */, v15 /* r214 */, elSpan_v16 /* r227 */, v17 /* r243 */, v18 /* r248 */) { // entry L18646_249; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 29 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 6 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let elSpan_v1 /* r204 */, v2 /* r196 */, v3 /* r198 */, v4 /* r205 */, fn_v5 /* r198 */, v6 /* r198 */, v7 /* r205 */, rect_v8 /* r198 */, v9 /* r204 */, v10 /* r198 */;
  let v11 /* r204 */, v12 /* r204 */, v19 /* r202 */, v20 /* r199 */, v21 /* r195 */, v22 /* r195 */, v23 /* r205 */, v24 /* r196 */, v25 /* r196 */, v26 /* r198 */;
  let v27 /* r196 */, v28 /* r198 */, v29 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLSpanElement: elSpan_v1 18, elSpan_v16 18
  //   Function: fn_v5 18
  //   DOMRect: rect_v8 18
  //   Window: win_v13 18
  // H133 rewrites: 2 single-use temps folded (2 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  elSpan_v1 = elSpan_v16;                               // #18647:66:150 [L d6 h6 c6]
  v2 = v14;                                             // #18650:167:150 [L d6 h6 c6]
  v19 = v18;                                            // #18653:184:150 [L d6 h6 c6]
  v20 = v17;                                            // #18656:197:150 [L d6 h6 c6]
  v3 = undefined;                                       // #18659:193:53 #18669:226:233 [L d6 h6 c6]
  v4 = undefined;                                       // #18672:142:233 [L d6 h6 c6]
  v21 = !(elSpan_v16);                                  // #18675:255:130 [L d6 h6 c6]
  if (v21) {                                            // #18678:18:160 [L d6 h6 c6]
    v7 = v21;                                           // #18712:2:150 [-] +#18715:74:53 /* never executed in any replay */
  } else {
    fn_v5 = elSpan_v1.getBoundingClientRect;            // #18684:26:53 #18689:144:200 [L d6 h6 c6]
    v22 = typeof fn_v5;                                 // #18694:124:193 [L d6 h6 c6]
    v6 = !(v22 === v15);                                // #18697:56:65 #18701:129:130 [L d6 h6 c6]
    v7 = v6;                                            // #18704:170:150 [L d6 h6 c6] +#18707:82:53
  }
  if (v7) {                                             // #18720:79:160 [L d6 h6 c6]
    r205 = cell[59](v2, v20);                           // #18731:177:242 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  } else {
    // #18726:163:53 [L d6 h6 c6]
  }
  rect_v8 = elSpan_v1.getBoundingClientRect();          // #18738:195:138 [L d6 h6 c6]
  if (rect_v8) {                                        // #18771:198:160 [L d6 h6 c6]
    v9 = rect_v8.width;                                 // #18790:6:200 [L d6 h6 c6]
    v23 = v9;                                           // #18795:91:150 [L d6 h6 c6] +#18798:127:53
  } else {
    v23 = rect_v8;                                      // #18777:254:53 #18782:125:150 [-] +#18785:153:53 /* never executed in any replay */
  }
  v10 = typeof v23;                                     // #18803:168:193 [L d6 h6 c6]
  v24 = "number";                                       // #18806:188:233 [L d6 h6 c6]
  v11 = !(v10 === ("number"));                          // #18811:120:65 #18815:193:130 [L d6 h6 c6]
  if (v11) {                                            // #18818:76:160 [L d6 h6 c6]
    v26 = v11;                                          // #18861:20:150 [-] +#18864:148:53 /* never executed in any replay */
  } else {
    v25 = win_v13.isFinite(v23);                        // #18824:236:53 #18829:16:138 [L d6 h6 c6]
    v12 = !v25;                                         // #18850:249:130 [L d6 h6 c6]
    v26 = v12;                                          // #18853:66:150 [L d6 h6 c6] +#18856:138:53
  }
  if (v26) {                                            // #18869:179:160 [L d6 h6 c6]
    v29 = v26;                                          // #18895:9:150 [-] +#18898:245:53 /* never executed in any replay */
  } else {
    v27 = 0;                                            // #18875:119:53 #18880:2:72 [L d6 h6 c6]
    v28 = (0) > v23;                                    // #18883:45:212 [L d6 h6 c6]
    v29 = v28;                                          // #18887:166:150 [L d6 h6 c6] +#18890:94:53
  }
  if (v29) {                                            // #18903:238:160 [L d6 h6 c6]
    r204 = cell[59](v19, v20);                          // #18914:240:242 [-]  VM call: pushes a frame, the callee body returns into r204 /* never executed in any replay */
  } else {
    // #18909:134:53 [L d6 h6 c6]
  }
  return v23;                                           // #18921:36:245 [L d6 h6 c6]
}