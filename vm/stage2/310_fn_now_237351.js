function fn_now_237351(v72 /* r70 */) { // entry L237341_153; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 71 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r204 */, v4 /* r205 */, v5 /* r205 */, v6 /* r204 */, v7 /* r205 */, v8 /* r205 */, v9 /* r204 */, v10 /* r204 */;
  let v11 /* r198 */, v12 /* r202 */, v13 /* r204 */, v14 /* r205 */, v15 /* r205 */, v16 /* r204 */, v17 /* r205 */, v18 /* r205 */, v19 /* r202 */, v20 /* r199 */;
  let v21 /* r205 */, v22 /* r204 */, v23 /* r204 */, v24 /* r205 */, v25 /* r204 */, v26 /* r205 */, v27 /* r202 */, v28 /* r204 */, v29 /* r205 */, v30 /* r204 */;
  let v31 /* r196 */, pc_v32 /* r198 */, v33 /* r205 */, arr_v34 /* r205 */, v35 /* r205 */, arr_v36 /* r202 */, v37 /* r205 */, v38 /* r204 */, v39 /* r205 */, v40 /* r204 */;
  let v41 /* r204 */, arr_v42 /* r202 */, arr_v43 /* r205 */, v44 /* r198 */, arr_v45 /* r205 */, v46 /* r198 */, arr_v47 /* r205 */, v48 /* r198 */, arr_v49 /* r205 */, v50 /* r198 */;
  let v51 /* r205 */, v52 /* r204 */, v53 /* r205 */, v54 /* r202 */, v55 /* r205 */, v56 /* r204 */, v57 /* r205 */, fn_v58 /* r204 */, v59 /* r202 */, v60 /* r204 */;
  let win_v61 /* r205 */, v62 /* r205 */, v63 /* r196 */, v64 /* r202 */, v65 /* r205 */, v66 /* r196 */, v67 /* r199 */, v68 /* r198 */, win_v69 /* r204 */, v70 /* r202 */;
  let v71 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   RTCPeerConnection: pc_v32 3
  //   Array: arr_v34 3, arr_v36 3, arr_v42 3, arr_v43 3, arr_v45 3, arr_v47 3, arr_v49 3
  //   Function: fn_v58 3
  //   Window: win_v61 3, win_v69 3
  // H137 proven reads: 2 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 16 reads keep the register
  // (H139: proven-read locals among the header parameters are declared there)
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 7 dead register writes dropped, 0 constants propagated (0 uses), 1 string keys as .member; 3 webs kept as registers (retOut 3, crossCall 1, liveIn 1)
  v63 = undefined;                                      // #237342:69:53 #237352:217:233 #237355:105:233 #237358:185:233 [L d1 h1 c1]
  v1 = undefined;                                       // #237361:201:233 [L d1 h1 c1]
  v64 = cell[42];                                       // #237364:80:236 [L d1 h1 c1]
  if (v64) {                                            // #237367:95:160 [L d1 h1 c1]
    v65 = undefined;                                    // #237378:203:233 [-] /* never executed in any replay */
    return v65;                                         // #237381:239:245 [-] /* never executed in any replay */
  }
  v2 = true;                                            // #237373:115:53 #237383:110:233 [L d1 h1 c1]
  cell[42] = true;                                      // #237386:220:195 [L d1 h1 c1]
  v3 = cell[43];                                        // #237389:215:236 [L d1 h1 c1]
  v4 = null;                                            // #237392:239:233 [L d1 h1 c1]
  if (v3 === v4) {                                      // #237395:127:161 [L d1 h1 c1]
    // #237412:210:233 #237415:218:53 [-] /* never executed in any replay */
  } else {
    v5 = (v72).clearTimeout(v3);                        // #237420:80:138 [L d1 h1 c1] +#237445:253:150 +#237448:25:53
  }
  v6 = cell[44];                                        // #237453:108:236 [L d1 h1 c1]
  v7 = null;                                            // #237456:112:233 [L d1 h1 c1]
  if (v6 === v7) {                                      // #237459:60:161 [L d1 h1 c1]
    // #237476:97:233 #237479:237:53 [-] /* never executed in any replay */
  } else {
    v8 = (v72).clearTimeout(v6);                        // #237484:2:138 [L d1 h1 c1] +#237509:103:150 +#237512:91:53
  }
  v9 = cell[47];                                        // #237517:203:236 [L d1 h1 c1]
  if (v9) {                                             // #237520:174:160 [L d1 h1 c1]
    v10 = cell[41];                                     // #237531:171:236 [L d1 h1 c1]
    if (!(v10)) {                                       // #237534:14:160 [L d1 h1 c1]
      // #237540:38:53 [-] /* never executed in any replay */
      try {
        TP(tryStack, 237652, 246, callDepths);                     // #237545:198:194 [-]  try: pushes the catch arm of the enclosing try (TP) /* never executed in any replay */
        v11 = cell[38];                                 // #237551:153:236 [-] /* never executed in any replay */
        v12 = cell[38].localDescription;                // #237554:76:200 [-] /* never executed in any replay */
        if (v12) {                                      // #237574:107:160 [-] /* never executed in any replay */
          v14 = v12.sdp;                                // #237593:219:200 [-] /* never executed in any replay */
          v13 = v14;                                    // #237600:28:150 [-] +#237603:124:53 /* never executed in any replay */
        } else {
          v13 = v12;                                    // #237580:79:53 #237585:63:150 [-] +#237588:211:53 /* never executed in any replay */
        }
        if (v13) {                                      // #237608:38:160 [-] /* never executed in any replay */
          v16 = v12.sdp;                                // #237627:201:200 [-] /* never executed in any replay */
          cell[41] = v16;                               // #237634:139:195 [-] /* never executed in any replay */
          v17 = v16;                                    // #237637:12:150 [-] +#237640:172:53 /* never executed in any replay */
        } else {
          v15 = v13;                                    // #237614:222:53 #237619:68:150 [-] +#237622:4:53 /* never executed in any replay */
        }
        v18 = tryStack.pop();                                // #237645:105:124 [-] +#237648:213:53 /* never executed in any replay */
      } catch (caught) {
        v19 = caught;                                     // #237653:139:150 [-] /* never executed in any replay */
        v20 = cell[20];                                 // #237656:138:236 [-] /* never executed in any replay */
        v21 = KP(m237658k138);                          // #237659:150:233 [-] /* never executed in any replay */
        v22 = (r70)[KP(m237667k150)](v19);              // #237668:207:138 [-] /* never executed in any replay */
        v20[v21] = v22;                                 // #237687:140:210 [-] /* never executed in any replay */
      }
    }
    v23 = cell[41];                                     // #237695:35:236 [L d1 h1 c1]
    v24 = !v23;                                         // #237698:128:130 [L d1 h1 c1]
    if (v24) {                                          // #237701:207:160 [L d1 h1 c1]
      v26 = r70[r221];                                  // #237720:198:7 [-] /* never executed in any replay */
      v27 = v26;                                        // #237724:27:150 [-] /* never executed in any replay */
      v28 = KP(237726);                                 // #237727:35:233 [-] /* never executed in any replay */
      v29 = v27.uOdMb2(v28);                            // #237732:104:138 [-] /* never executed in any replay */
      v30 = v29;                                        // #237751:181:150 [-] +#237754:241:53 /* never executed in any replay */
    } else {
      v25 = v24;                                        // #237707:35:53 #237712:168:150 [L d1 h1 c1] +#237715:216:53
    }
  } else {
    // #237526:70:53 [-] /* never executed in any replay */
  }
  v31 = null;                                           // #237759:59:233 [L d1 h1 c1]
  try {
    TP(tryStack, 237800, 240, callDepths);                         // #237762:120:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    pc_v32 = cell[38];                                  // #237768:3:236 [L d1 h1 c1]
    v66 = cell[38].iceGatheringState;                   // #237771:142:200 [L d1 h1 c1]
    v33 = (pc_v32).close();                             // #237776:231:138 [L d1 h1 c1]
    arr_v34 = tryStack.pop();                                // #237793:198:124 [L d1 h1 c1]
    v67 = cell[20];                                     // #237796:254:53 #237809:170:236 [L d1 h1 c1]
    v35 = "ulnsR4";                                     // #237812:54:233 [L d1 h1 c1]
    arr_v36 = cell[39];                                 // #237822:73:236 [L d1 h1 c1]
    v67.ulnsR4 = cell[39];                              // #237825:255:199 [L d1 h1 c1]
    v37 = "BGcq9";                                      // #237829:119:233 [L d1 h1 c1]
    v38 = cell[40];                                     // #237838:198:236 [L d1 h1 c1]
    v67.BGcq9 = cell[40];                               // #237841:200:199 [L d1 h1 c1]
    v39 = "DFHHz4";                                     // #237845:92:233 [L d1 h1 c1]
    v40 = cell[41];                                     // #237855:87:236 [L d1 h1 c1]
    v67.DFHHz4 = cell[41];                              // #237858:85:199 [L d1 h1 c1]
    v41 = "AQTO7";                                      // #237862:245:233 [L d1 h1 c1]
    arr_v42 = [];                                       // #237871:15:107 [L d1 h1 c1]
    arr_v43 = cell[26];                                 // #237873:254:236 [L d1 h1 c1]
    v44 = 0; arr_v42[0] = cell[26];                     // #237876:231:26 [L d1 h1 c1]
    arr_v45 = cell[27];                                 // #237881:118:236 [L d1 h1 c1]
    v46 = 1; arr_v42[1] = cell[27];                     // #237884:127:26 [L d1 h1 c1]
    arr_v47 = cell[28];                                 // #237889:174:236 [L d1 h1 c1]
    v48 = 2; arr_v42[2] = cell[28];                     // #237892:215:26 [L d1 h1 c1]
    arr_v49 = cell[29];                                 // #237897:166:236 [L d1 h1 c1]
    v50 = 3; arr_v42[3] = cell[29];                     // #237900:239:26 [L d1 h1 c1]
    v67.AQTO7 = arr_v42;                                // #237905:141:199 [L d1 h1 c1]
    v51 = "YMKU3";                                      // #237909:77:233 [L d1 h1 c1]
    v52 = cell[47];                                     // #237918:196:236 [L d1 h1 c1]
    v67.YMKU3 = cell[47];                               // #237921:78:199 [L d1 h1 c1]
    v53 = "pLuw6";                                      // #237925:74:233 [L d1 h1 c1]
    v54 = cell[48];                                     // #237934:13:236 [L d1 h1 c1]
    v67.pLuw6 = cell[48];                               // #237937:179:199 [L d1 h1 c1]
    v55 = "NPiE1";                                      // #237941:91:233 [L d1 h1 c1]
    v56 = cell[46];                                     // #237950:26:236 [L d1 h1 c1]
    v67.NPiE1 = cell[46];                               // #237953:204:199 [L d1 h1 c1]
    v57 = "HkyLT5";                                     // #237957:80:233 [L d1 h1 c1]
    fn_v58 = r70.Date;                                  // #237967:231:200 [L d1 h1 c1]
    v59 = fn_v58.now();                                 // #237972:28:138 [L d1 h1 c1]
    v68 = cell[45];                                     // #237987:23:236 [L d1 h1 c1]
    v60 = v59 - cell[45];                               // #237990:136:54 [L d1 h1 c1]
    v67.HkyLT5 = v60;                                   // #237994:2:199 [L d1 h1 c1]
    v67.oqKIN4 = v66;                                   // #237998:127:142 [L d1 h1 c1]
    win_v61 = r70[r221];                                // #238008:29:7 [L d1 h1 c1]
    win_v69 = win_v61;                                  // #238012:214:150 [L d1 h1 c1]
    v62 = KP(238014);                                   // #238015:178:233 [L d1 h1 c1]
    v70 = win_v69.uOdMb2(v62);                          // #238068:123:138 [L d1 h1 c1]
    r205 = cell[16]();                                  // #238087:99:201 [L d1 h1 c1]  VM call: pushes a frame, the callee body returns into r205
    v71 = undefined;                                    // #238091:75:233 [L d1 h1 c1]
    return v71;                                         // #238094:111:245 [L d1 h1 c1]
  } catch (caught) {
    outside("L237803_29");                              // #237801:29:150 [-]  L237803_29 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}