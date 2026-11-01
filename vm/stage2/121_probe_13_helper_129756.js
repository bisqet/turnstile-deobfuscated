function probe_13_helper_129756(win_v39 /* r70 */, v40 /* r88 */, v41 /* r221 */, v42 /* r227 */) { // entry L129756_3; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 54 register webs used only inside this fn (no live-in, cross-call or table-made def; 16 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r202 */, v4 /* r192 */, networkInformation_v5 /* r199 */, v6 /* r205 */, navigator_v7 /* r199 */, networkInformation_v8 /* r196 */, v9 /* r205 */, navigator_v10 /* r196 */;
  let networkInformation_v11 /* r199 */, v12 /* r199 */, v13 /* r204 */, v14 /* r199 */, v15 /* r204 */, fn_v16 /* r196 */, v17 /* r199 */, elImage_v18 /* r204 */, v19 /* r196 */, v20 /* r199 */;
  let v21 /* r196 */, v22 /* r204 */, fn_v23 /* r196 */, v24 /* r199 */, elImage_v25 /* r204 */, v26 /* r196 */, v27 /* r199 */, v28 /* r196 */, v29 /* r204 */, v30 /* r199 */;
  let v31 /* r205 */, v32 /* r199 */, v33 /* r204 */, v34 /* r205 */, arr_v35 /* r205 */, win_v36 /* r205 */, v37 /* r204 */, shadowRoot_v38 /* r205 */, v43 /* r195 */, v44 /* r196 */;
  let v45 /* r205 */, fn_v46 /* r198 */, v47 /* r193 */, v48 /* r192 */, navigator_v49 /* r195 */, v50 /* r196 */, fn_v51 /* r202 */, elImage_v52 /* r204 */, elImage_v53 /* r199 */, v54 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   NetworkInformation: networkInformation_v5 3, networkInformation_v8 3, networkInformation_v11 3
  //   Navigator: navigator_v7 3, navigator_v10 3, navigator_v49 3
  //   Function: fn_v16 3, fn_v23 3, fn_v46 3, fn_v51 3
  //   HTMLImageElement: elImage_v18 3, elImage_v25 3, elImage_v52 3, elImage_v53 3
  //   Array: arr_v35 3
  //   Window: win_v36 3, win_v39 3
  //   ShadowRoot: shadowRoot_v38 3
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 10 dead register writes dropped, 5 constants propagated (5 uses), 4 string keys as .member; 2 webs kept as registers (retOut 2)
  v43 = v42;                                            // #129757:164:150 [L d1 h1 c1]
  v44 = v40;                                            // #129760:1:150 [L d1 h1 c1]
  v1 = cell[21];                                        // #129763:13:53 #129773:68:233 #129776:159:236 [L d1 h1 c1]
  if (v1) {                                             // #129779:50:160 [L d1 h1 c1]
    v45 = undefined;                                    // #129790:198:233 [-] /* never executed in any replay */
    return v45;                                         // #129793:190:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #129785:186:53 #129795:246:233 [L d1 h1 c1]
  cell[21] = true;                                      // #129798:68:195 [L d1 h1 c1]
  try {
    TP(tryStack, 130402, 62, callDepths);                          // #129801:157:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    fn_v46 = cell[22];                                  // #129807:212:236 [L d1 h1 c1]
    v47 = undefined;                                    // #129810:56:233 [L d1 h1 c1]
    v3 = {};                                            // #129813:106:159 [L d1 h1 c1]
    v4 = win_v39.String(v43);                           // #129815:246:233 #129824:175:138 [L d1 h1 c1]
    v3.fMQd4 = v4;                                      // #129843:77:199 [L d1 h1 c1]
    v48 = win_v39.String(v44);                          // #129847:13:233 #129857:42:138 [L d1 h1 c1]
    v3.QgYAn6 = v48;                                    // #129876:156:199 [L d1 h1 c1]
    networkInformation_v5 = win_v39.navigator.connection;  // #129880:224:233 #129889:55:200 #129894:242:200 [L d1 h1 c1]
    if (networkInformation_v5) {                        // #129899:249:160 [L d1 h1 c1]
      navigator_v7 = win_v39.navigator;                 // #129918:7:200 [L d1 h1 c1]
      networkInformation_v8 = navigator_v7.connection;  // #129923:130:200 [L d1 h1 c1]
      v6 = (navigator_v7.connection).effectiveType;     // #129928:209:200 #129933:186:150 [L d1 h1 c1] +#129936:34:53
    } else {
      v6 = networkInformation_v5;                       // #129905:37:53 #129910:178:150 [-] +#129913:58:53 /* never executed in any replay */
    }
    if (v6) {                                           // #129941:110:160 [L d1 h1 c1]
      navigator_v10 = win_v39.navigator;                // #129962:251:200 [L d1 h1 c1]
      networkInformation_v11 = navigator_v10.connection;  // #129967:166:200 [L d1 h1 c1]
      v9 = (navigator_v10.connection).effectiveType;    // #129972:101:200 [L d1 h1 c1] +#129977:225:53
    } else {
      v9 = "unknown";                                   // #129947:6:53 #129952:116:233 [-] +#129957:116:53 /* never executed in any replay */
    }
    v3.cgrs5 = v9;                                      // #129982:58:199 [L d1 h1 c1]
    v12 = win_v39.navigator.onLine;                     // #129986:134:233 #129996:197:200 #130001:200:200 [L d1 h1 c1]
    v13 = typeof v12;                                   // #130011:212:193 [L d1 h1 c1]
    v14 = "boolean";                                    // #130014:56:233 [L d1 h1 c1]
    if (v13 === v14) {                                  // #130019:228:161 [L d1 h1 c1]
      fn_v16 = win_v39.String;                          // #130042:131:200 [L d1 h1 c1]
      navigator_v49 = win_v39.navigator;                // #130047:14:200 [L d1 h1 c1]
      v17 = navigator_v49.onLine;                       // #130052:45:200 [L d1 h1 c1]
      v15 = fn_v16.call(win_v39, v17);                  // #130062:202:138 [L d1 h1 c1] +#130082:242:53
    } else {
      v15 = "unknown";                                  // #130027:36:53 #130032:92:233 [-] +#130037:188:53 /* never executed in any replay */
    }
    v3.iWgxW7 = v15;                                    // #130087:255:199 [L d1 h1 c1]
    elImage_v18 = cell[20];                             // #130091:119:233 #130100:198:236 [L d1 h1 c1]
    v19 = cell[20].complete;                            // #130103:5:200 [L d1 h1 c1]
    v20 = typeof v19;                                   // #130108:93:193 [L d1 h1 c1]
    v21 = "boolean";                                    // #130111:221:233 [L d1 h1 c1]
    if (v20 === v21) {                                  // #130116:53:161 [L d1 h1 c1]
      fn_v23 = win_v39.String;                          // #130139:34:200 [L d1 h1 c1]
      v24 = elImage_v18.complete;                       // #130144:241:200 [L d1 h1 c1]
      v22 = fn_v23.call(win_v39, v24);                  // #130149:126:138 [L d1 h1 c1] +#130169:214:53
    } else {
      v22 = "unknown";                                  // #130124:113:53 #130129:83:233 [-] +#130134:151:53 /* never executed in any replay */
    }
    v3.iGAj0 = v22;                                     // #130174:218:199 [L d1 h1 c1]
    elImage_v25 = cell[20];                             // #130178:166:233 #130187:249:236 [L d1 h1 c1]
    v26 = cell[20].naturalWidth;                        // #130190:44:200 [L d1 h1 c1]
    v27 = typeof v26;                                   // #130206:168:193 [L d1 h1 c1]
    v28 = "number";                                     // #130209:188:233 [L d1 h1 c1]
    if (v27 === v28) {                                  // #130214:88:161 [L d1 h1 c1]
      v30 = elImage_v25.naturalWidth;                   // #130238:61:200 [L d1 h1 c1] +#130254:89:53
    } else {
      v29 = 1;                                          // #130222:200:53 #130227:225:72 [-] /* never executed in any replay */
      v30 = -1;                                         // #130230:213:189 [-] +#130233:145:53 /* never executed in any replay */
    }
    v3.zoFB9 = v30;                                     // #130259:219:199 [L d1 h1 c1]
    v31 = "OaZJ1";                                      // #130263:227:233 [L d1 h1 c1]
    v50 = KP(130271);                                   // #130272:203:233 [L d1 h1 c1]
    v32 = cell[3];                                      // #130378:202:236 [L d1 h1 c1]
    v33 = cell[4](v50, v32);                            // #130381:251:242 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r204; then v33 = r204 (H142 CALL bind)
    v3[v31] = v33;                                      // #130386:105:199 [L d1 h1 c1]
    v34 = MC(v47, fn_v46, v3);                          // #130390:94:114 [L d1 h1 c1]
    arr_v35 = tryStack.pop();                                // #130395:33:124 [L d1 h1 c1]
    win_v36 = win_v39[v41];                             // #130398:173:53 #130690:111:7 [L d1 h1 c1]
    v37 = win_v36[KP(130693)];                          // #130694:74:200 [L d1 h1 c1]
    shadowRoot_v38 = v37.pkJkg9;                        // #130699:121:200 [L d1 h1 c1]
    fn_v51 = shadowRoot_v38.removeChild;                // #130704:172:200 [L d1 h1 c1]
    elImage_v52 = cell[20];                             // #130709:103:236 [L d1 h1 c1]
    elImage_v53 = fn_v51.call(shadowRoot_v38, elImage_v52);  // #130712:156:138 [L d1 h1 c1]
    v54 = undefined;                                    // #130737:224:233 [L d1 h1 c1]
    return v54;                                         // #130740:240:245 [L d1 h1 c1]
  } catch (caught) {
    outside("L130411_254");                             // #130403:179:150 #130406:18:236 #130409:254:233 [-]  L130411_254 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}