function probe_22_helper_183899(win_v33 /* r70 */, v34 /* r227 */) { // entry L183899_182; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 61 register webs used only inside this fn (no live-in, cross-call or table-made def; 29 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r204 */, math_v2 /* r204 */, math_v3 /* r205 */, math_v4 /* r205 */, v5 /* r205 */, v6 /* r204 */, v7 /* r205 */, v8 /* r198 */, v9 /* r204 */, v10 /* r205 */;
  let v11 /* r204 */, v12 /* r205 */, v13 /* r205 */, v14 /* r205 */, v15 /* r195 */, v16 /* r193 */, v17 /* r192 */, v18 /* r193 */, v19 /* r205 */, math_v20 /* r205 */;
  let v21 /* r205 */, v22 /* r205 */, math_v23 /* r199 */, v24 /* r193 */, v25 /* r199 */, v26 /* r199 */, v27 /* r205 */, math_v28 /* r205 */, math_v29 /* r198 */, v30 /* r205 */;
  let v31 /* r199 */, v32 /* r205 */, v35 /* r202 */, v36 /* r199 */, math_v37 /* r196 */, fn_v38 /* r195 */, v39 /* r198 */, v40 /* r204 */, v41 /* r205 */, math_v42 /* r196 */;
  let v43 /* r198 */, v44 /* r196 */, v45 /* r254 */, v46 /* r253 */, v47 /* r252 */, v48 /* r192 */, v49 /* r193 */, v50 /* r195 */, v51 /* r204 */, math_v52 /* r198 */;
  let fn_v53 /* r196 */, v54 /* r195 */, math_v55 /* r192 */, fn_v56 /* r254 */, v57 /* r253 */, v58 /* r193 */, math_v59 /* r198 */, v60 /* r199 */, v61 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v2 6, math_v3 6, math_v4 6, math_v20 3, math_v23 3, math_v28 3, math_v29 3, math_v37 6
  //   Math: math_v42 6, math_v52 3, math_v55 3, math_v59 3
  //   Window: win_v33 6
  //   Function: fn_v38 6, fn_v53 3, fn_v56 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 3 constants propagated (3 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v35 = v34;                                            // #183900:75:150 [L d2 h2 c2]
  v1 = undefined;                                       // #183903:175:53 #183913:158:233 [L d2 h2 c2]
  math_v2 = win_v33.Math;                               // #183916:125:200 [L d2 h2 c2]
  math_v3 = math_v2;                                    // #183921:182:150 [L d2 h2 c2]
  v36 = math_v3.abs(v35);                               // #183924:111:138 [L d2 h2 c2]
  math_v4 = win_v33.Math;                               // #183940:74:200 [L d2 h2 c2]
  math_v37 = math_v4;                                   // #183945:143:150 [L d2 h2 c2]
  fn_v38 = math_v4.pow;                                 // #183948:234:200 [L d2 h2 c2]
  v5 = 2;                                               // #183955:25:72 [L d2 h2 c2]
  v6 = 28;                                              // #183958:76:72 [L d2 h2 c2]
  v39 = -(28);                                          // #183961:84:189 [L d2 h2 c2]
  v40 = fn_v38.call(math_v37, 2, v39);                  // #183964:21:138 [L d2 h2 c2]
  v41 = v36 < v40; if (v36 < v40) {                     // #183982:130:186 [L d2 h2 c2]
    return v35;                                         // #184000:230:245 [-] /* never executed in any replay */
  }
  math_v42 = win_v33.Math;                              // #184002:115:200 [L d2 h2 c2]
  v7 = 2;                                               // #184007:190:72 [L d2 h2 c2]
  v8 = 28;                                              // #184010:157:72 [L d2 h2 c2]
  v9 = math_v42.pow(2, 28);                             // #184013:122:138 [L d2 h2 c2]
  v10 = v9 < v36;                                       // #184030:155:98 [L d2 h2 c2]
  if (v10) {                                            // #184034:62:160 [L d2 h2 c2]
    math_v28 = win_v33.Math;                            // #184273:131:200 [L d1 h1 c1]
    math_v29 = math_v28;                                // #184278:36:150 [L d1 h1 c1]
    v30 = math_v29.log(v36);                            // #184281:165:138 [L d1 h1 c1]
    math_v59 = win_v33.Math;                            // #184297:40:200 [L d1 h1 c1]
    v31 = math_v59.LN2;                                 // #184302:95:200 [L d1 h1 c1]
    v51 = v30 + math_v59.LN2;                           // #184309:182:180 [L d1 h1 c1]
  } else {
    v11 = 2;                                            // #184040:150:53 #184045:239:72 [L d1 h1 c1]
    v12 = (2) < v36;                                    // #184048:124:98 [L d1 h1 c1]
    if (v12) {                                          // #184052:219:160 [L d1 h1 c1]
      math_v20 = win_v33.Math;                          // #184168:47:200 [L d1 h1 c1]
      math_v52 = math_v20;                              // #184173:32:150 [L d1 h1 c1]
      fn_v53 = math_v20.log;                            // #184176:119:200 [L d1 h1 c1]
      v21 = 2;                                          // #184183:178:72 [L d1 h1 c1]
      v54 = v36 * (2);                                  // #184186:178:13 [L d1 h1 c1]
      v22 = 1;                                          // #184190:193:72 [L d1 h1 c1]
      math_v23 = win_v33.Math;                          // #184193:212:200 [L d1 h1 c1]
      math_v55 = math_v23;                              // #184198:113:150 [L d1 h1 c1]
      fn_v56 = math_v23.sqrt;                           // #184201:196:200 [L d1 h1 c1]
      v24 = v35 * v35;                                  // #184209:252:13 [L d1 h1 c1]
      v57 = 1;                                          // #184213:99:72 [L d1 h1 c1]
      v25 = v24 + (1);                                  // #184216:172:222 [L d1 h1 c1]
      v58 = fn_v56.call(math_v55, v25);                 // #184220:13:138 [L d1 h1 c1]
      v26 = 1 / v58;                                    // #184238:77:105 [L d1 h1 c1]
      v27 = v54 + v26;                                  // #184242:110:222 [L d1 h1 c1]
      v51 = fn_v53.call(math_v52, v27);                 // #184246:71:138 [L d1 h1 c1] +#184263:187:53
    } else {
      v13 = win_v33.Math;                               // #184058:255:53 #184063:42:200 [-] /* never executed in any replay */
      v43 = v13;                                        // #184068:239:150 [-] /* never executed in any replay */
      v44 = v13.log1p;                                  // #184071:202:200 [-] /* never executed in any replay */
      v14 = v35 * v35;                                  // #184080:106:13 [-] /* never executed in any replay */
      v15 = 1;                                          // #184084:153:72 [-] /* never executed in any replay */
      v16 = win_v33.Math;                               // #184087:76:200 [-] /* never executed in any replay */
      v45 = v16;                                        // #184092:9:150 [-] /* never executed in any replay */
      v46 = v16.sqrt;                                   // #184095:252:200 [-] /* never executed in any replay */
      v17 = 1;                                          // #184103:99:72 [-] /* never executed in any replay */
      v47 = v35 * v35;                                  // #184106:223:13 [-] /* never executed in any replay */
      v18 = 1 + v47;                                    // #184110:56:222 [-] /* never executed in any replay */
      v48 = v46.call(v45, v18);                         // #184114:105:138 [-] /* never executed in any replay */
      v49 = 1 + v48;                                    // #184132:26:222 [-] /* never executed in any replay */
      v50 = v14 / v49;                                  // #184136:102:105 [-] /* never executed in any replay */
      v19 = v36 + (v14 / v49);                          // #184140:99:222 [-] /* never executed in any replay */
      v51 = v44.call(v43, v19);                         // #184144:168:138 [-] +#184163:216:53 /* never executed in any replay */
    }
  }
  v60 = 0;                                              // #184317:226:72 [L d2 h2 c2]
  v32 = (0) < v35;                                      // #184320:99:98 [L d2 h2 c2]
  if (v32) {                                            // #184324:230:160 [L d2 h2 c2]
    v61 = v51;                                          // #184343:254:150 [L d2 h2 c2] +#184346:86:53
  } else {
    v61 = -v51;                                         // #184330:158:53 #184335:155:189 [-] +#184338:191:53 /* never executed in any replay */
  }
  return v61;                                           // #184351:197:245 [L d2 h2 c2]
}