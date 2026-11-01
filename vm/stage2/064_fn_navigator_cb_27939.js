function fn_navigator_cb_27939() { // entry L27939_97; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 47 register webs used only inside this fn (no live-in, cross-call or table-made def; 11 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let v1 /* r205 */, v2 /* r202 */, v3 /* r199 */, v4 /* r198 */, arr_v5 /* r204 */, v6 /* r202 */, v7 /* r205 */, v8 /* r205 */, v9 /* r202 */, v10 /* r204 */;
  let v11 /* r202 */, v12 /* r199 */, v13 /* r198 */, arr_v14 /* r205 */, v15 /* r202 */, v16 /* r204 */, arr_v17 /* r202 */, fn_v18 /* r231 */, v19 /* r196 */, v20 /* r204 */;
  let v21 /* r202 */, v22 /* r199 */, v23 /* r198 */, v24 /* r205 */, v25 /* r195 */, arr_v26 /* r205 */, v27 /* r202 */, canvas_v28 /* r204 */, v29 /* r204 */, ctx2d_v30 /* r202 */;
  let v31 /* r205 */, v32 /* r204 */, v33 /* r202 */, v34 /* r205 */, canvas_v35 /* r204 */, ctx2d_v36 /* r205 */, v37 /* r202 */, v38 /* r204 */, v39 /* r205 */, fn_v40 /* r231 */;
  let v41 /* r196 */, v42 /* r199 */, v43 /* r198 */, v44 /* r195 */, arr_v45 /* r202 */, v46 /* r204 */, v47 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v5 3, arr_v14 3, arr_v17 3, arr_v26 3, arr_v45 3
  //   Function: fn_v18 3, fn_v40 3
  //   OffscreenCanvas: canvas_v28 3, canvas_v35 3
  //   OffscreenCanvasRenderingContext2D: ctx2d_v30 3, ctx2d_v36 3
  // H142: 3 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 3 dead register writes dropped, 12 constants propagated (12 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v37 = undefined;                                      // #27940:237:53 #27950:90:233 #27953:38:233 #27956:194:233 #27959:238:233 [L d1 h1 c1]
  v38 = cell[49];                                       // #27962:33:236 [L d1 h1 c1]
  if (v38) {                                            // #27965:44:160 [L d1 h1 c1]
    v39 = undefined;                                    // #27976:37:233 [-] /* never executed in any replay */
    return v39;                                         // #27979:97:245 [-] /* never executed in any replay */
  }
  v1 = 1;                                               // #27971:76:53 #27981:59:72 [L d1 h1 c1]
  v2 = 1;                                               // #27984:102:72 [L d1 h1 c1]
  v3 = "webgl";                                         // #27987:2:233 [L d1 h1 c1]
  v4 = null;                                            // #27996:46:233 [L d1 h1 c1]
  arr_v5 = cell[67](v1, v2, v3, v4);                    // #27999:10:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204; then arr_v5 = r204 (H142 CALL bind)
  v6 = 0;                                               // #28007:185:72 [L d1 h1 c1]
  v7 = arr_v5[0];                                       // #28010:239:7 [L d1 h1 c1]
  cell[46] = v7;                                        // #28014:153:195 [L d1 h1 c1]
  v8 = 1;                                               // #28017:204:72 [L d1 h1 c1]
  v9 = arr_v5[1];                                       // #28020:118:7 [L d1 h1 c1]
  cell[47] = v9;                                        // #28024:196:195 [L d1 h1 c1]
  v10 = 1;                                              // #28027:11:72 [L d1 h1 c1]
  v11 = 1;                                              // #28030:246:72 [L d1 h1 c1]
  v12 = "webgl2";                                       // #28033:82:233 [L d1 h1 c1]
  v13 = null;                                           // #28043:62:233 [L d1 h1 c1]
  arr_v14 = cell[67](v10, v11, v12, v13);               // #28046:218:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205; then arr_v14 = r205 (H142 CALL bind)
  v15 = 1;                                              // #28054:73:72 [L d1 h1 c1]
  v16 = arr_v14[1];                                     // #28057:63:7 [L d1 h1 c1]
  cell[48] = v16;                                       // #28061:169:195 [L d1 h1 c1]
  arr_v17 = cell[68](v16);                              // #28064:178:22 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r202; then arr_v17 = r202 (H142 CALL bind)
  cell[53] = arr_v17;                                   // #28068:16:195 [L d1 h1 c1]
  fn_v18 = cell[67];                                    // #28071:59:236 [L d1 h1 c1]
  v19 = undefined;                                      // #28074:195:233 [L d1 h1 c1]
  v20 = 1;                                              // #28077:206:72 [L d1 h1 c1]
  v21 = 1;                                              // #28080:109:72 [L d1 h1 c1]
  v22 = "2d";                                           // #28083:173:233 [L d1 h1 c1]
  v23 = {};                                             // #28089:75:159 [L d1 h1 c1]
  v24 = "willReadFrequently";                           // #28091:147:233 [L d1 h1 c1]
  v25 = true;                                           // #28096:187:233 [L d1 h1 c1]
  v23.willReadFrequently = true;                        // #28099:41:199 [L d1 h1 c1]
  arr_v26 = MC(undefined, fn_v18, 1, 1, "2d", v23);     // #28103:196:16 [L d1 h1 c1]
  v27 = 0;                                              // #28112:11:72 [L d1 h1 c1]
  canvas_v28 = arr_v26[0];                              // #28115:121:7 [L d1 h1 c1]
  cell[49] = canvas_v28;                                // #28119:123:195 [L d1 h1 c1]
  v29 = 1;                                              // #28122:166:72 [L d1 h1 c1]
  ctx2d_v30 = arr_v26[1];                               // #28125:104:7 [L d1 h1 c1]
  cell[50] = ctx2d_v30;                                 // #28129:110:195 [L d1 h1 c1]
  fn_v40 = cell[67];                                    // #28132:161:236 [L d1 h1 c1]
  v41 = undefined;                                      // #28135:17:233 [L d1 h1 c1]
  v31 = 16;                                             // #28138:100:72 [L d1 h1 c1]
  v32 = 16;                                             // #28141:43:72 [L d1 h1 c1]
  v42 = "2d";                                           // #28144:243:233 [L d1 h1 c1]
  v43 = {};                                             // #28150:249:159 [L d1 h1 c1]
  v33 = "willReadFrequently";                           // #28152:9:233 [L d1 h1 c1]
  v44 = true;                                           // #28157:217:233 [L d1 h1 c1]
  v43.willReadFrequently = true;                        // #28160:79:199 [L d1 h1 c1]
  arr_v45 = MC(v41, fn_v40, 16, 16, v42, v43);          // #28164:210:16 [L d1 h1 c1]
  v34 = 0;                                              // #28173:97:72 [L d1 h1 c1]
  canvas_v35 = arr_v45[0];                              // #28176:247:7 [L d1 h1 c1]
  cell[51] = canvas_v35;                                // #28180:129:195 [L d1 h1 c1]
  v46 = 1;                                              // #28183:20:72 [L d1 h1 c1]
  ctx2d_v36 = arr_v45[v46];                             // #28186:158:7 [L d1 h1 c1]
  cell[52] = ctx2d_v36;                                 // #28190:76:195 [L d1 h1 c1]
  v47 = undefined;                                      // #28193:208:233 [L d1 h1 c1]
  return v47;                                           // #28196:32:245 [L d1 h1 c1]
}