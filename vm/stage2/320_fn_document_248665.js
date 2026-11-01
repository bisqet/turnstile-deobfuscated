function fn_document_248665(win_v57 /* r70 */, v58 /* r209 */, v59 /* r220 */, v60 /* r221 */, v61 /* r223 */) { // entry L248652_76; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 96 register webs used only inside this fn (no live-in, cross-call or table-made def; 40 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r196 */, v2 /* r202 */, v3 /* r205 */, v4 /* r202 */, win_v5 /* r205 */, win_v6 /* r202 */, fn_v7 /* r199 */, v8 /* r205 */, v9 /* r205 */, v10 /* r202 */;
  let styleSheetList_v11 /* r205 */, v12 /* r202 */, v13 /* r205 */, arr_v14 /* r205 */, v15 /* r202 */, styleSheetList_v16 /* r199 */, cSSRuleList_v17 /* r202 */, v18 /* r199 */, v19 /* r202 */, styleSheetList_v20 /* r199 */;
  let cSSRuleList_v21 /* r202 */, v22 /* r199 */, arr_v23 /* r199 */, v24 /* r202 */, v25 /* r199 */, arr_v26 /* r202 */, v27 /* r199 */, v28 /* r202 */, v29 /* r205 */, v30 /* r202 */;
  let v31 /* r199 */, v32 /* r202 */, v33 /* r202 */, arr_v34 /* r199 */, v35 /* r202 */, v36 /* r202 */, v37 /* r205 */, v38 /* r202 */, v39 /* r205 */, v40 /* r205 */;
  let v41 /* r199 */, fn_v42 /* r199 */, fn_v43 /* r205 */, promise_v44 /* r202 */, fn_v45 /* r199 */, promise_v46 /* r205 */, arr_v47 /* r202 */, v48 /* r205 */, v49 /* r205 */, v50 /* r205 */;
  let v51 /* r205 */, v52 /* r205 */, arr_v53 /* r205 */, v54 /* r205 */, v55 /* r202 */, v56 /* r205 */, v62 /* r254 */, v63 /* r196 */, arr_v64 /* r198 */, v65 /* r192 */;
  let v66 /* r193 */, v67 /* r195 */, v68 /* r238 */, v69 /* r244 */, v70 /* r245 */, v71 /* r250 */, v72 /* r252 */, v73 /* r237 */, v74 /* r242 */, v75 /* r247 */;
  let v76 /* r254 */, v77 /* r240 */, v78 /* r246 */, v79 /* r253 */, v80 /* r196 */, arr_v81 /* r196 */, fn_v82 /* r196 */, v83 /* r196 */, arr_v84 /* r199 */, arr_v85 /* r199 */;
  let fn_v86 /* r202 */, v87 /* r198 */, v88 /* r198 */, v89 /* r196 */, v90 /* r198 */, v91 /* r196 */, v92 /* r195 */, v93 /* r202 */, v94 /* r199 */, v95 /* r202 */;
  let v96 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v5 3, win_v6 3, win_v57 3
  //   Function: fn_v7 3, fn_v42 3, fn_v43 3, fn_v45 3, fn_v82 6, fn_v86 3
  //   StyleSheetList: styleSheetList_v11 9, styleSheetList_v16 618, styleSheetList_v20 612
  //   Array: arr_v14 6, arr_v23 612, arr_v26 6, arr_v34 3, arr_v47 3, arr_v53 3, arr_v64 3, arr_v81 6
  //   Array: arr_v84 3, arr_v85 3
  //   CSSRuleList: cSSRuleList_v17 618, cSSRuleList_v21 612
  //   Promise: promise_v44 3, promise_v46 3
  // H137 proven reads: 10 reads of 1 register webs reach only text writes on every path (no fn-entry, CALL / CLOS / OP52 or table-made value), so they read these locals (write-through); 3 reads keep the register
  let v97 /* r204 */, v98 /* r204 */, v99 /* r204 */, v100 /* r204 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 6 dead register writes dropped, 2 constants propagated (2 uses), 2 string keys as .member; 2 webs kept as registers (retOut 2, crossCall 1)
  v62 = undefined;                                      // #248653:236:53 #248663:95:233 #248666:87:233 [L d1 h1 c1]
  v1 = undefined;                                       // #248669:111:233 [L d1 h1 c1]
  v2 = undefined;                                       // #248672:39:233 #248675:255:233 #248678:119:233 [L d1 h1 c1]
  v3 = cell[1];                                         // #248681:15:233 #248684:71:233 #248687:86:236 [L d1 h1 c1]
  v4 = v3[v59];                                         // #248690:88:7 [L d1 h1 c1]
  v97 = v3[v4];                                         // #248694:210:7 [L d1 h1 c1]
  win_v5 = win_v57[v60];                                // #248698:228:7 [L d1 h1 c1]
  win_v6 = win_v5;                                      // #248702:65:150 [L d1 h1 c1]
  fn_v7 = win_v6[v58];                                  // #248705:87:7 [L d1 h1 c1]
  v8 = KP(248708);                                      // #248709:111:233 [L d1 h1 c1]
  v63 = fn_v7.call(win_v6, v8);                         // #248782:132:138 [L d1 h1 c1]
  L249553_23: {
    try {
      TP(tryStack, 249495, 169, callDepths);                       // #248802:221:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      arr_v64 = [];                                     // #248808:87:107 [L d1 h1 c1]
      v65 = 0;                                          // #248810:18:72 [L d1 h1 c1]
      v66 = "indexOf";                                  // #248813:254:233 [L d1 h1 c1]
      v67 = ".GPyAk9";                                  // #248818:58:233 [L d1 h1 c1]
      v68 = "document";                                 // #248829:134:233 [L d1 h1 c1]
      v69 = "document";                                 // #248834:162:233 [L d1 h1 c1]
      v70 = "cssRules";                                 // #248839:78:233 [L d1 h1 c1]
      v71 = "document";                                 // #248851:74:233 [L d1 h1 c1]
      v72 = "cssRules";                                 // #248856:86:233 [L d1 h1 c1]
      v73 = "styleSheets";                              // #248868:50:233 [L d1 h1 c1]
      v74 = "styleSheets";                              // #248883:158:233 [L d1 h1 c1]
      v75 = "styleSheets";                              // #248898:90:233 [L d1 h1 c1] +#248913:66:53
      loop_L248930_219: while ((styleSheetList_v11 = win_v57[v68][v73], v12 = styleSheetList_v11.length, v13 = v65 < v12, v65 < v12)) {  // #248931:34:20 | #248936:241:200 | #248941:238:186 [L d3 h3 c3]
        arr_v14 = [];                                   // #248959:190:107 [L d2 h2 c2]
        try {
          TP(tryStack, 249104, 199, callDepths);                   // #248961:175:194 [L d2 h2 c2]  try: pushes the catch arm of the enclosing try (TP)
          v76 = 0;                                      // #248967:10:72 [L d2 h2 c2]
          v77 = 1;                                      // #248970:185:72 [L d2 h2 c2]
          v78 = "length";                               // #248973:201:233 [L d2 h2 c2]
          v79 = "cssText";                              // #248978:153:233 [L d2 h2 c2] +#248983:69:53
          while ((styleSheetList_v16 = win_v57[v69][v74], cSSRuleList_v17 = styleSheetList_v16[v65][v70], v18 = cSSRuleList_v17[v78], v19 = v76 < v18, v76 < v18)) {  // #248998:97:20 | #249003:16:20 | #249008:170:7 | #249012:3:186 [L d206 h206 c206]
            styleSheetList_v20 = win_v57[v71][v75];      // #249030:223:20 [L d204 h204 c204]
            cSSRuleList_v21 = styleSheetList_v20[v65][v72];      // #249035:22:20 [L d204 h204 c204]
            v80 = cSSRuleList_v21[v76][v79];            // #249040:49:20 [L d204 h204 c204]
            if (v80) {                                  // #249045:252:160 [L d204 h204 c204]
              arr_v23 = arr_v14;                        // #249064:223:150 [L d204 h204 c204]
              v24 = (arr_v23).push(v80);                // #249067:52:138 [L d204 h204 c204]
              v25 = v24;                                // #249084:81:150 [L d204 h204 c204] +#249087:29:53
            } else {
              v22 = v80;                                // #249051:220:53 #249056:15:150 [-] +#249059:99:53 /* never executed in any replay */
            }
            v15 = v76; v76 = v76 + v77;                 // #248988:15:48 [L d204 h204 c204]
          }
          arr_v26 = tryStack.pop();                          // #249097:48:124 [L d2 h2 c2]
          arr_v81 = arr_v14;                            // #249100:64:53 #249113:224:150 [L d2 h2 c2]
          v27 = "|";                                    // #249116:20:233 [L d2 h2 c2]
          v28 = (arr_v81).join("|");                    // #249121:213:138 [L d2 h2 c2]
          v29 = v28 + v65;                              // #249138:214:222 [L d2 h2 c2]
          v30 = v29;                                    // #249142:235:150 [L d2 h2 c2]
          fn_v82 = v30[v66];                            // #249145:217:7 [L d2 h2 c2]
          v31 = fn_v82.call(v30, v67);                  // #249149:180:16 [L d2 h2 c2]
          v32 = 1;                                      // #249155:59:72 [L d2 h2 c2]
          v83 = -(1);                                   // #249158:71:189 [L d2 h2 c2]
          v33 = (-1) < v31;                             // #249161:116:98 [L d2 h2 c2]
          if (v33) {                                    // #249165:243:160 [L d2 h2 c2]
            v97.eTTKN0 = v29;                           // #249201:53:142 [L d1 h1 c1]
            v36 = v29;                                  // #249211:142:150 [L d1 h1 c1] +#249214:166:53
          } else {
            arr_v34 = arr_v64;                          // #249171:183:53 #249176:21:150 [L d1 h1 c1]
            v35 = (arr_v34).push(v29);                  // #249179:18:138 [L d1 h1 c1] +#249196:26:53
          }
          v9 = 1;                                       // #248918:196:72 [L d2 h2 c2]
          v10 = v65; v65 = v65 + 1;                     // #248921:83:48 [L d2 h2 c2]
          continue loop_L248930_219;
        } catch (caught) {
          outside("L249107_88");                        // #249105:88:150 [-]  L249107_88 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      }
      arr_v84 = arr_v64;                                // #249224:215:150 [L d1 h1 c1]
      v37 = "|";                                        // #249227:239:233 [L d1 h1 c1]
      v38 = (arr_v84).join("|");                        // #249232:4:138 [L d1 h1 c1]
      v39 = "";                                         // #249249:168:233 [L d1 h1 c1]
      if (v39 === v38) {                                // #249253:148:161 [L d1 h1 c1]
        v52 = "TXvS8";                                  // #249466:10:233 [-] /* never executed in any replay */
        v93 = "-";                                      // #249475:22:233 [-] /* never executed in any replay */
        v97.TXvS8 = "-";                                // #249480:119:210 [-] /* never executed in any replay */
      } else {
        v40 = cell[1];                                  // #249261:20:53 #249266:8:236 [L d1 h1 c1]
        v41 = cell[1];                                  // #249269:213:150 [L d1 h1 c1]
        v98 = v41.RkOO5(v38);                           // #249272:210:138 [L d1 h1 c1]
        fn_v42 = v98.then;                              // #249290:225:200 [L d1 h1 c1]
        fn_v43 = clos;                                  // #249295:68:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v43 = its home register (H139 CLOS bind)
        promise_v44 = fn_v42.call(v98, fn_v43);         // #249309:69:138 [L d1 h1 c1]
        fn_v45 = promise_v44.catch;                     // #249327:72:200 [L d1 h1 c1]
        v99 = clos;                                     // #249332:207:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then v99 = its home register (H139 CLOS bind)
        promise_v46 = fn_v45.call(promise_v44, v99);      // #249343:100:138 [L d1 h1 c1]
        arr_v47 = cell[6];                              // #249362:63:236 [L d1 h1 c1]
        arr_v85 = cell[6];                              // #249365:240:150 [L d1 h1 c1]
        fn_v86 = arr_v85[v61];                          // #249368:10:7 [L d1 h1 c1]
        v100 = {};                                      // #249372:116:159 [L d1 h1 c1]
        v100.aJBc6 = promise_v46;                       // #249374:169:142 [L d1 h1 c1]
        v48 = "AzXDU3";                                 // #249379:249:233 [L d1 h1 c1]
        v87 = 2000;                                     // #249384:9:233 [L d1 h1 c1]
        v100.AzXDU3 = 2000;                             // #249389:191:199 [L d1 h1 c1]
        v88 = "Kavdk6";                                 // #249393:55:233 [L d1 h1 c1]
        v49 = cell[1];                                  // #249398:134:236 [L d1 h1 c1]
        v89 = v49[v59];                                 // #249401:200:7 [L d1 h1 c1]
        v100.Kavdk6 = v89;                              // #249405:66:199 [L d1 h1 c1]
        v50 = "LfFR4";                                  // #249409:110:233 [L d1 h1 c1]
        v90 = {};                                       // #249414:72:159 [L d1 h1 c1]
        v91 = "TXvS8";                                  // #249416:220:233 [L d1 h1 c1]
        v92 = "hZHlW3";                                 // #249425:32:233 [L d1 h1 c1]
        v90.TXvS8 = "hZHlW3";                           // #249435:58:199 [L d1 h1 c1]
        v100.LfFR4 = v90;                               // #249439:108:199 [L d1 h1 c1]
        v51 = fn_v86.call(arr_v85, v100);               // #249443:205:138 [L d1 h1 c1] +#249461:169:53
      }
      arr_v53 = tryStack.pop();                              // #249488:229:124 [L d1 h1 c1]
      break L249553_23;                                 // #249491:97:53 [L d1 h1 c1]
    } catch (caught) {
      v94 = caught;                                       // #249496:50:150 [-] /* never executed in any replay */
      v54 = KP(m249498k50);                             // #249499:158:233 [-] /* never executed in any replay */
      v55 = KP(m249507k158);                            // #249508:90:233 [-] /* never executed in any replay */
      r204[v54] = v55;                                  // #249518:12:199 [-] /* never executed in any replay */
      v56 = KP(m249521k12);                             // #249522:144:233 [-] /* never executed in any replay */
      v95 = (win_v57)[KP(m249526k144)](v94);            // #249527:97:138 [-] /* never executed in any replay */
      r204[v56] = v95;                                  // #249546:86:210 [-] /* never executed in any replay */
    }
  }
  v96 = undefined;                                      // #249554:47:233 [L d1 h1 c1]
  return v96;                                           // #249557:195:245 [L d1 h1 c1]
}