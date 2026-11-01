function probe_13_helper_130757() { // entry L130741_87; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 7 register webs used only inside this fn (no live-in, cross-call or table-made def; 5 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let elImage_v1 /* r204 */, v2 /* r205 */, fn_v3 /* r193 */, v4 /* r199 */, v5 /* r202 */, v6 /* r204 */, v7 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLImageElement: elImage_v1 3
  //   Function: fn_v3 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  fn_v3 = cell[26];                                     // #130742:139:53 #130752:234:236 [L d1 h1 c1]
  v4 = undefined;                                       // #130755:118:233 [L d1 h1 c1]
  elImage_v1 = cell[20];                                // #130758:137:236 [L d1 h1 c1]
  v2 = cell[20].width;                                  // #130761:124:200 [L d1 h1 c1]
  v5 = cell[20].height;                                 // #130766:99:200 [L d1 h1 c1]
  v6 = MC(v4, fn_v3, v2, v5);                           // #130771:206:168 [L d1 h1 c1]
  v7 = undefined;                                       // #130777:202:233 [L d1 h1 c1]
  return v7;                                            // #130780:178:245 [L d1 h1 c1]
}