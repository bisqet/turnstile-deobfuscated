function probe_29_helper_1104(win_v21 /* r70 */, v22 /* r223 */) { // entry L1094_43; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 37 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, fn_v3 /* r204 */, v4 /* r205 */, v5 /* r202 */, v6 /* r199 */, v7 /* r205 */, v8 /* r205 */, v9 /* r204 */, v10 /* r205 */;
  let v11 /* r198 */, trustedScript_v12 /* r205 */, v13 /* r205 */, v14 /* r204 */, v15 /* r202 */, fn_v16 /* r204 */, v17 /* r205 */, v18 /* r202 */, win_v19 /* r205 */, fn_v20 /* r205 */;
  let v23 /* r252 */, v24 /* r253 */, v25 /* r254 */, v26 /* r192 */, fn_v27 /* r196 */, v28 /* r198 */, v29 /* r198 */, fn_v30 /* r196 */, win_v31 /* r195 */, fn_v32 /* r193 */;
  let v33 /* r198 */, fn_v34 /* r202 */, v35 /* r204 */, v36 /* r199 */, v37 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3, fn_v16 3, fn_v20 3, fn_v27 3, fn_v30 3, fn_v32 3, fn_v34 3
  //   TrustedScript: trustedScript_v12 3
  //   Window: win_v19 3, win_v21 3, win_v31 3
  // H133 rewrites: 5 single-use temps folded (4 of them expressions, H135), 4 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #1095:15:53 #1105:161:233 [L d1 h1 c1]
  v2 = cell[5];                                         // #1108:200:236 [L d1 h1 c1]
  fn_v3 = win_v21.Date;                                 // #1111:127:200 [L d1 h1 c1]
  v4 = fn_v3.now();                                     // #1116:84:138 [L d1 h1 c1]
  v5 = v2 + v4;                                         // #1131:25:222 [L d1 h1 c1]
  cell[5] = v5;                                         // #1135:155:195 [L d1 h1 c1]
  v23 = "eval";                                         // #1138:163:233 [L d1 h1 c1]
  v24 = "toString";                                     // #1143:139:233 [L d1 h1 c1]
  v25 = "eval";                                         // #1155:211:233 [L d1 h1 c1]
  v26 = "yCpNJ2";                                       // #1160:251:233 [L d1 h1 c1]
  v6 = 1;                                               // #1165:38:72 [L d1 h1 c1]
  v7 = true;                                            // #1168:222:53 #1173:5:233 [L d1 h1 c1]
  L1377_183: {
    if (v7) {                                           // #1176:128:160 [L d1 h1 c1]
      try {
        TP(tryStack, 1364, 4, callDepths);                         // #1187:183:194 [L d1 h1 c1] +#1193:107:53  try: pushes the catch arm of the enclosing try (TP)
        for (;;) {
          fn_v27 = win_v21[v23];                        // #1198:211:7 [L d1 h1 c1]
          v28 = MC(fn_v27, v24);                        // #1202:70:16 [L d1 h1 c1]
          v8 = cell[6];                                 // #1207:25:236 [L d1 h1 c1]
          v9 = !(v28 === cell[6]);                      // #1210:161:65 #1214:134:130 [L d1 h1 c1]
          if (v9) {                                     // #1217:61:160 [L d1 h1 c1]
            v10 = v9;                                   // #1246:131:150 [-] +#1249:7:53 /* never executed in any replay */
          } else {
            v29 = !(v8 === cell[8]);                    // #1223:89:53 #1228:179:236 #1231:83:65 #1235:240:130 [L d1 h1 c1]
            v10 = v29;                                  // #1238:29:150 [L d1 h1 c1] +#1241:185:53
          }
          if (v10) {                                    // #1254:234:160 [L d1 h1 c1]
            v14 = v10;                                  // #1318:14:150 [-] +#1321:38:53 /* never executed in any replay */
          } else {
            fn_v30 = win_v21[v25];                      // #1260:146:53 #1265:143:38 [L d1 h1 c1]
            win_v31 = win_v21[v22];                     // #1271:0:150 [L d1 h1 c1]
            fn_v32 = win_v31[v26];                      // #1274:218:7 [L d1 h1 c1]
            v11 = cell[9] + cell[5];                    // #1278:93:236 #1281:148:236 #1284:89:222 [L d1 h1 c1]
            trustedScript_v12 = fn_v32.call(win_v31, v11);  // #1288:52:16 [L d1 h1 c1]
            v33 = fn_v30.call(win_v21, trustedScript_v12);  // #1294:99:16 [L d1 h1 c1]
            v5 = cell[5];                               // #1300:2:236 [L d1 h1 c1]
            v13 = !(v33 === cell[5]);                   // #1303:38:65 #1307:55:130 [L d1 h1 c1]
            v14 = v13;                                  // #1310:8:150 [L d1 h1 c1] +#1313:184:53
          }
          if (!(v14)) {                                 // #1326:100:160 [L d1 h1 c1]
            break L1377_183;                            // #1332:164:53 #1352:191:53 [L d1 h1 c1]
          }
          v5 = v5 + 1;                                  // #1337:125:150 #1340:222:222 [-] /* never executed in any replay */
          cell[5] = v5;                                 // #1344:140:195 [-] +#1347:44:53 /* never executed in any replay */
        }
      } catch (caught) {
        outside("L1367_225");                           // #1365:225:150 [-]  L1367_225 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } else {
      // #1182:80:53 [-] /* never executed in any replay */
    }
  }
  v15 = cell[5];                                        // #1378:6:236 [L d1 h1 c1]
  fn_v16 = win_v21.Date;                                // #1381:69:200 [L d1 h1 c1]
  v17 = fn_v16.now();                                   // #1386:130:138 [L d1 h1 c1]
  v18 = v15 - v17;                                      // #1401:7:54 [L d1 h1 c1]
  cell[5] = v18;                                        // #1405:81:195 [L d1 h1 c1]
  win_v19 = win_v21[v22];                               // #1408:39:7 [L d1 h1 c1]
  win_v19.BWRSl4 = v18;                                 // #1412:80:142 [L d1 h1 c1]
  fn_v34 = win_v21.setTimeout;                          // #1422:231:200 [L d1 h1 c1]
  fn_v20 = cell[23];                                    // #1427:118:236 [L d1 h1 c1]
  v35 = 550;                                            // #1430:210:233 [L d1 h1 c1]
  v36 = fn_v34.call(win_v21, fn_v20, v35);              // #1435:27:138 [L d1 h1 c1]
  v37 = undefined;                                      // #1460:35:233 [L d1 h1 c1]
  return v37;                                           // #1463:231:245 [L d1 h1 c1]
}