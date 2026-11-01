function fn_canvas_getImageData_cb_30109(v7 /* r227 */) { // entry L30109_136; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 12 register webs used only inside this fn (no live-in, cross-call or table-made def; 6 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let imageBitmap_v1 /* r205 */, v2 /* r199 */, v3 /* r202 */, v4 /* r199 */, v5 /* r202 */, v6 /* r202 */, v8 /* r198 */, arr_v9 /* r204 */, v10 /* r199 */, v11 /* r205 */;
  let v12 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   ImageBitmap: imageBitmap_v1 4
  //   Array: arr_v9 4
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v8 = v7;                                              // #30110:85:150 [L d2 h2]
  arr_v9 = [];                                          // #30113:17:53 #30123:201:107 [L d2 h2]
  imageBitmap_v1 = cell[92];                            // #30125:80:236 [L d2 h2]
  v2 = cell[92].width;                                  // #30128:231:200 [L d2 h2]
  v3 = 0; arr_v9[0] = cell[92].width;                   // #30133:108:26 [L d2 h2]
  v4 = cell[92].height;                                 // #30138:147:200 [L d2 h2]
  v5 = 1; arr_v9[1] = cell[92].height;                  // #30143:104:26 [L d2 h2]
  v6 = 0;                                               // #30148:31:72 [L d2 h2]
  v10 = 32;                                             // #30151:186:72 [L d2 h2]
  v11 = v8.substring((0), (32));                        // #30154:99:138 [L d2 h2]
  v12 = 2; arr_v9[2] = v11;                             // #30177:248:26 [L d2 h2]
  return arr_v9;                                        // #30182:168:245 [L d2 h2]
}