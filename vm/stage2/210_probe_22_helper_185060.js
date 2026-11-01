function probe_22_helper_185060(win_v8 /* r70 */, v9 /* r227 */) { // entry L185060_239; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 24 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r202 */, v4 /* r202 */, math_v5 /* r202 */, v6 /* r199 */, v7 /* r202 */, v10 /* r204 */, v11 /* r198 */, v12 /* r199 */;
  let v13 /* r199 */, v14 /* r202 */, v15 /* r199 */, v16 /* r198 */, v17 /* r199 */, v18 /* r202 */, v19 /* r202 */, math_v20 /* r198 */, fn_v21 /* r196 */, v22 /* r199 */;
  let v23 /* r202 */, v24 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v5 6, math_v20 6
  //   Window: win_v8 6
  //   Function: fn_v21 6
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v10 = v9;                                             // #185061:224:150 [L d2 h2 c2]
  v1 = 0;                                               // #185064:48:53 #185074:208:72 [L d2 h2 c2]
  v2 = (0) + v10;                                       // #185077:165:222 [L d2 h2 c2]
  v11 = 1;                                              // #185081:168:72 [L d2 h2 c2]
  v3 = -(1);                                            // #185084:64:189 [L d2 h2 c2]
  v12 = v10 < (-1); if (v10 < v3) {                     // #185087:193:186 [L d2 h2 c2]
    v14 = v12;                                          // #185116:199:150 [-] +#185119:59:53 /* never executed in any replay */
  } else {
    v13 = !(v10 === v10);                               // #185096:205:53 #185101:206:65 #185105:63:130 [L d2 h2 c2]
    v14 = v13;                                          // #185108:240:150 [L d2 h2 c2] +#185111:0:53
  }
  if (v14) {                                            // #185124:25:160 [L d2 h2 c2]
    v24 = NaN;                                          // #185279:231:233 [-] +#185282:219:53 /* never executed in any replay */
  } else {
    v4 = 0;                                             // #185130:197:53 #185135:84:72 [L d2 h2 c2]
    v15 = (0) === v10;                                  // #185138:176:65 [L d2 h2 c2]
    if (v15) {                                          // #185142:63:160 [L d2 h2 c2]
      v18 = v15;                                        // #185168:1:150 [-] +#185171:13:53 /* never executed in any replay */
    } else {
      v16 = Infinity;                                   // #185148:211:53 #185153:164:233 [L d2 h2 c2]
      v17 = v16 === v10;                                // #185156:192:65 [L d2 h2 c2]
      v18 = v17;                                        // #185160:173:150 [L d2 h2 c2] +#185163:9:53
    }
    if (v18) {                                          // #185176:98:160 [L d2 h2 c2]
      v24 = v10;                                        // #185266:120:150 [-] +#185269:104:53 /* never executed in any replay */
    } else {
      v19 = 0; if (v2 === 0) {                          // #185182:42:53 #185187:34:69 [L d2 h2 c2]
        v24 = v10;                                      // #185253:95:150 [-] +#185256:115:53 /* never executed in any replay */
      } else {
        math_v5 = win_v8.Math;                          // #185196:234:53 #185201:159:200 [L d2 h2 c2]
        math_v20 = math_v5;                             // #185206:208:150 [L d2 h2 c2]
        fn_v21 = math_v5.log;                           // #185209:103:200 [L d2 h2 c2]
        v6 = 1;                                         // #185216:226:72 [L d2 h2 c2]
        v7 = v10 + (1);                                 // #185219:239:222 [L d2 h2 c2]
        v22 = fn_v21.call(math_v20, v7);                // #185223:4:138 [L d2 h2 c2]
        v23 = v22 / v2;                                 // #185240:40:105 [L d2 h2 c2]
        v24 = v10 * v23;                                // #185244:208:13 [L d2 h2 c2] +#185248:96:53
      }
    }
  }
  return v24;                                           // #185287:12:245 [L d2 h2 c2]
}