function fn_Promise_cb_236657(v5 /* r227 */) { // entry L236657_166; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r204 */, v4 /* r205 */, v6 /* r199 */, v7 /* r204 */, v8 /* r202 */, v9 /* r205 */;
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v5;                                              // #236658:123:150 [L d9 h9 c9]
  if (((v5).supported)) {                               // #236661:31:53 #236671:43:200 #236684:142:160 [L d9 h9 c9]
    v2 = 1;                                             // #236703:114:72 [L d8 h8 c8] +#236706:250:53
  } else {
    v2 = 0;                                             // #236690:166:53 #236695:227:72 [L d1 h1 c1] +#236698:231:53
  }
  v3 = v1.smooth;                                       // #236711:6:200 [L d9 h9 c9]
  if (v3) {                                             // #236721:189:160 [L d9 h9 c9]
    v6 = 2;                                             // #236740:193:72 [L d8 h8 c8] +#236743:205:53
  } else {
    v6 = 0;                                             // #236727:217:53 #236732:157:72 [L d1 h1 c1] +#236735:57:53
  }
  v7 = v6 | v2;                                         // #236748:204:32 [L d9 h9 c9]
  v4 = v1.powerEfficient;                               // #236752:115:200 [L d9 h9 c9]
  if (v4) {                                             // #236770:182:160 [L d9 h9 c9]
    v8 = 4;                                             // #236789:151:72 [-] +#236792:203:53 /* never executed in any replay */
  } else {
    v8 = 0;                                             // #236776:46:53 #236781:72:72 [L d9 h9 c9] +#236784:248:53
  }
  v9 = v8 | v7;                                         // #236797:179:32 [L d9 h9 c9]
  return v9;                                            // #236801:55:245 [L d9 h9 c9]
}