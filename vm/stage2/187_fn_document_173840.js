function fn_document_173840(win_v40 /* r70 */, v41 /* r209 */, v42 /* r220 */, v43 /* r221 */, v44 /* r223 */) { // entry L173830_203; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 110 register webs used only inside this fn (no live-in, cross-call or table-made def; 71 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r205 */, v3 /* r202 */, win_v4 /* r205 */, win_v5 /* r202 */, v6 /* r205 */, win_v7 /* r205 */, v8 /* r202 */, win_v9 /* r205 */, v10 /* r205 */;
  let win_v11 /* r205 */, arr_v12 /* r199 */, doc_v13 /* r202 */, hTMLCollection_v14 /* r205 */, v15 /* r202 */, v16 /* r205 */, doc_v17 /* r202 */, v18 /* r202 */, arr_v19 /* r202 */, v20 /* r205 */;
  let v21 /* r205 */, arr_v22 /* r202 */, hTMLCollection_v23 /* r205 */, v24 /* r205 */, arr_v25 /* r202 */, v26 /* r205 */, v27 /* r205 */, arr_v28 /* r202 */, v29 /* r199 */, v30 /* r199 */;
  let v31 /* r199 */, v32 /* r199 */, v33 /* r199 */, v34 /* r199 */, v35 /* r205 */, v36 /* r202 */, v37 /* r199 */, arr_v38 /* r205 */, v39 /* r205 */, v45 /* r204 */;
  let fn_v46 /* r195 */, v47 /* r193 */, v48 /* r195 */, v49 /* r193 */, win_v50 /* r193 */, v51 /* r195 */, arr_v52 /* r198 */, fn_v53 /* r196 */, hTMLCollection_v54 /* r195 */, v55 /* r195 */;
  let fn_v56 /* r198 */, doc_v57 /* r195 */, hTMLCollection_v58 /* r196 */, doc_v59 /* r196 */, hTMLCollection_v60 /* r195 */, v61 /* r196 */, v62 /* r196 */, fn_v63 /* r198 */, doc_v64 /* r196 */, v65 /* r196 */;
  let doc_v66 /* r196 */, hTMLCollection_v67 /* r195 */, v68 /* r196 */, v69 /* r196 */, fn_v70 /* r198 */, doc_v71 /* r196 */, v72 /* r196 */, doc_v73 /* r196 */, v74 /* r195 */, v75 /* r196 */;
  let v76 /* r196 */, arr_v77 /* r198 */, fn_v78 /* r196 */, v79 /* r195 */, v80 /* r195 */, arr_v81 /* r198 */, fn_v82 /* r196 */, v83 /* r195 */, v84 /* r195 */, arr_v85 /* r198 */;
  let fn_v86 /* r196 */, v87 /* r195 */, v88 /* r195 */, arr_v89 /* r198 */, fn_v90 /* r196 */, v91 /* r195 */, v92 /* r195 */, arr_v93 /* r198 */, fn_v94 /* r196 */, v95 /* r195 */;
  let v96 /* r195 */, arr_v97 /* r198 */, fn_v98 /* r196 */, v99 /* r195 */, v100 /* r195 */, doc_v101 /* r198 */, v102 /* r199 */, v103 /* r202 */, doc_v104 /* r198 */, v105 /* r198 */;
  let v106 /* r196 */, v107 /* r199 */, v108 /* r199 */, v109 /* r202 */, v110 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 3, win_v5 3, win_v7 3, win_v9 3, win_v11 3, win_v40 3, win_v50 3
  //   Array: arr_v12 3, arr_v19 3, arr_v22 3, arr_v25 3, arr_v28 3, arr_v38 3, arr_v52 3, arr_v77 3
  //   Array: arr_v81 3, arr_v85 3, arr_v89 3, arr_v93 3, arr_v97 3
  //   HTMLDocument: doc_v13 3, doc_v17 3, doc_v57 3, doc_v59 3, doc_v64 3, doc_v66 3, doc_v71 3, doc_v73 3
  //   HTMLDocument: doc_v101 3, doc_v104 3
  //   HTMLCollection: hTMLCollection_v14 3, hTMLCollection_v23 3, hTMLCollection_v54 3, hTMLCollection_v58 3, hTMLCollection_v60 3, hTMLCollection_v67 3
  //   Function: fn_v46 3, fn_v53 3, fn_v56 3, fn_v63 3, fn_v70 3, fn_v78 3, fn_v82 3, fn_v86 3
  //   Function: fn_v90 3, fn_v94 3, fn_v98 3
  // H133 rewrites: 6 single-use temps folded (6 of them expressions, H135), 1 dead register writes dropped, 1 constants propagated (1 uses), 4 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #173831:47:53 #173841:201:233 [L d1 h1 c1]
  v2 = cell[1];                                         // #173844:153:233 #173847:224:236 [L d1 h1 c1]
  v3 = v2[v42];                                         // #173850:58:7 [L d1 h1 c1]
  v45 = v2[v3];                                         // #173854:172:7 [L d1 h1 c1]
  win_v4 = win_v40[v43];                                // #173858:214:7 [L d1 h1 c1]
  win_v5 = win_v4;                                      // #173862:235:150 [L d1 h1 c1]
  fn_v46 = win_v5[v41];                                 // #173865:217:7 [L d1 h1 c1]
  v6 = KP(173868);                                      // #173869:105:233 [L d1 h1 c1]
  v47 = fn_v46.call(win_v5, v6);                        // #173942:22:138 [L d1 h1 c1]
  try {
    TP(tryStack, 174749, 178, callDepths);                         // #173962:167:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    win_v7 = win_v40[v43];                              // #173968:165:7 [L d1 h1 c1]
    v8 = win_v7.name;                                   // #173972:40:200 [L d1 h1 c1]
    win_v9 = win_v40[v43];                              // #173977:98:7 [L d1 h1 c1]
    v48 = "name";                                       // #173981:14:233 [L d1 h1 c1]
    v49 = "";                                           // #173986:10:233 [L d1 h1 c1]
    win_v9.name = "";                                   // #173990:252:199 [L d1 h1 c1]
    v10 = "ZqqO3";                                      // #173994:192:233 [L d1 h1 c1]
    win_v50 = win_v40[v43];                             // #174003:154:7 [L d1 h1 c1]
    v51 = win_v50.name;                                 // #174007:137:200 [L d1 h1 c1]
    v45.ZqqO3 = v51;                                    // #174012:63:199 [L d1 h1 c1]
    win_v11 = win_v40[v43];                             // #174016:221:7 [L d1 h1 c1]
    win_v11.name = v8;                                  // #174020:174:142 [L d1 h1 c1]
    arr_v12 = [];                                       // #174025:36:107 [L d1 h1 c1]
    arr_v52 = arr_v12;                                  // #174027:129:150 [L d1 h1 c1]
    fn_v53 = (arr_v12)[v44];                            // #174030:151:7 [L d1 h1 c1]
    doc_v13 = win_v40.document;                         // #174034:210:200 [L d1 h1 c1]
    hTMLCollection_v14 = doc_v13.links;                 // #174039:225:200 [L d1 h1 c1]
    v15 = undefined;                                    // #174048:81:233 [L d1 h1 c1]
    if (hTMLCollection_v14 === v15) {                   // #174051:217:161 [L d1 h1 c1]
      v16 = false;                                      // #174068:146:233 [-] +#174071:154:53 /* never executed in any replay */
    } else {
      doc_v17 = win_v40.document;                       // #174076:227:200 [L d1 h1 c1]
      hTMLCollection_v54 = doc_v17.links;               // #174081:238:200 [L d1 h1 c1]
      v18 = (doc_v17.links).length;                     // #174090:141:200 [L d1 h1 c1]
      v16 = v18;                                        // #174095:134:150 [L d1 h1 c1] +#174098:190:53
    }
    v55 = fn_v53.call(arr_v52, v16);                    // #174103:160:16 [L d1 h1 c1]
    arr_v19 = arr_v12;                                  // #174109:13:150 [L d1 h1 c1]
    fn_v56 = (arr_v12)[v44];                            // #174112:243:7 [L d1 h1 c1]
    v20 = undefined;                                    // #174116:155:233 [L d1 h1 c1]
    doc_v57 = win_v40.document;                         // #174119:198:200 [L d1 h1 c1]
    hTMLCollection_v58 = doc_v57.images;                // #174124:5:200 [L d1 h1 c1]
    if (v20 === hTMLCollection_v58) {                   // #174134:189:161 [L d1 h1 c1]
      v21 = false;                                      // #174151:46:233 [-] +#174154:198:53 /* never executed in any replay */
    } else {
      doc_v59 = win_v40.document;                       // #174159:142:200 [L d1 h1 c1]
      hTMLCollection_v60 = doc_v59.images;              // #174164:173:200 [L d1 h1 c1]
      v61 = (doc_v59.images).length;                    // #174174:16:200 [L d1 h1 c1]
      v21 = v61;                                        // #174179:189:150 [L d1 h1 c1] +#174182:217:53
    }
    v62 = fn_v56.call(arr_v19, v21);                    // #174187:198:16 [L d1 h1 c1]
    arr_v22 = arr_v12;                                  // #174193:27:150 [L d1 h1 c1]
    fn_v63 = (arr_v12)[v44];                            // #174196:73:7 [L d1 h1 c1]
    doc_v64 = win_v40.document;                         // #174200:60:200 [L d1 h1 c1]
    hTMLCollection_v23 = doc_v64.forms;                 // #174205:35:200 [L d1 h1 c1]
    v65 = undefined;                                    // #174214:11:233 [L d1 h1 c1]
    if (hTMLCollection_v23 === v65) {                   // #174217:43:161 [L d1 h1 c1]
      v24 = false;                                      // #174234:32:233 [-] +#174237:112:53 /* never executed in any replay */
    } else {
      doc_v66 = win_v40.document;                       // #174242:196:200 [L d1 h1 c1]
      hTMLCollection_v67 = doc_v66.forms;               // #174247:139:200 [L d1 h1 c1]
      v68 = (doc_v66.forms).length;                     // #174256:246:200 [L d1 h1 c1]
      v24 = v68;                                        // #174261:139:150 [L d1 h1 c1] +#174264:239:53
    }
    v69 = fn_v63.call(arr_v22, v24);                    // #174269:179:16 [L d1 h1 c1]
    arr_v25 = arr_v12;                                  // #174275:148:150 [L d1 h1 c1]
    fn_v70 = (arr_v12)[v44];                            // #174278:30:7 [L d1 h1 c1]
    doc_v71 = win_v40.document;                         // #174282:253:200 [L d1 h1 c1]
    v26 = doc_v71.cookie;                               // #174287:32:200 [L d1 h1 c1]
    v72 = undefined;                                    // #174297:84:233 [L d1 h1 c1]
    if (v26 === v72) {                                  // #174300:144:161 [L d1 h1 c1]
      v27 = false;                                      // #174317:200:233 [-] +#174320:120:53 /* never executed in any replay */
    } else {
      doc_v73 = win_v40.document;                       // #174325:164:200 [L d1 h1 c1]
      v74 = doc_v73.cookie;                             // #174330:235:200 [L d1 h1 c1]
      v75 = (doc_v73.cookie).length;                    // #174340:214:200 [L d1 h1 c1]
      v27 = v75;                                        // #174345:235:150 [L d1 h1 c1] +#174348:207:53
    }
    v76 = fn_v70.call(arr_v25, v27);                    // #174353:98:16 [L d1 h1 c1]
    v45.sZpv6 = arr_v12;                                // #174359:95:142 [L d1 h1 c1]
    arr_v28 = [];                                       // #174368:81:107 [L d1 h1 c1]
    arr_v77 = arr_v28;                                  // #174370:58:150 [L d1 h1 c1]
    fn_v78 = arr_v77[v44];                              // #174373:172:7 [L d1 h1 c1]
    v79 = win_v40.document.onchange;                    // #174377:211:200 #174382:30:200 [L d1 h1 c1]
    v29 = typeof v79;                                   // #174394:82:193 [L d1 h1 c1]
    v80 = fn_v78.call(arr_v77, v29);                    // #174397:155:138 [L d1 h1 c1]
    arr_v81 = arr_v28;                                  // #174415:220:150 [L d1 h1 c1]
    fn_v82 = arr_v81[v44];                              // #174418:70:7 [L d1 h1 c1]
    v83 = win_v40.document.onclick;                     // #174422:133:200 #174427:136:200 [L d1 h1 c1]
    v30 = typeof v83;                                   // #174438:148:193 [L d1 h1 c1]
    v84 = fn_v82.call(arr_v81, v30);                    // #174441:85:138 [L d1 h1 c1]
    arr_v85 = arr_v28;                                  // #174459:46:150 [L d1 h1 c1]
    fn_v86 = arr_v85[v44];                              // #174462:208:7 [L d1 h1 c1]
    v87 = win_v40.document.onmouseover;                 // #174466:103:200 #174471:98:200 [L d1 h1 c1]
    v31 = typeof v87;                                   // #174486:134:193 [L d1 h1 c1]
    v88 = fn_v86.call(arr_v85, v31);                    // #174489:255:138 [L d1 h1 c1]
    arr_v89 = arr_v28;                                  // #174507:176:150 [L d1 h1 c1]
    fn_v90 = arr_v89[v44];                              // #174510:202:7 [L d1 h1 c1]
    v91 = win_v40.document.onmouseout;                  // #174514:249:200 #174519:44:200 [L d1 h1 c1]
    v32 = typeof v91;                                   // #174533:168:193 [L d1 h1 c1]
    v92 = fn_v90.call(arr_v89, v32);                    // #174536:25:138 [L d1 h1 c1]
    arr_v93 = arr_v28;                                  // #174554:226:150 [L d1 h1 c1]
    fn_v94 = arr_v93[v44];                              // #174557:180:7 [L d1 h1 c1]
    v95 = win_v40.document.onkeydown;                   // #174561:187:200 #174566:102:200 [L d1 h1 c1]
    v33 = typeof v95;                                   // #174579:122:193 [L d1 h1 c1]
    v96 = fn_v94.call(arr_v93, v33);                    // #174582:35:138 [L d1 h1 c1]
    arr_v97 = arr_v28;                                  // #174600:68:150 [L d1 h1 c1]
    fn_v98 = arr_v97[v44];                              // #174603:14:7 [L d1 h1 c1]
    v99 = win_v40.document.onload;                      // #174607:45:200 #174612:144:200 [L d1 h1 c1]
    v34 = typeof v99;                                   // #174622:124:193 [L d1 h1 c1]
    v100 = fn_v98.call(arr_v97, v34);                   // #174625:157:138 [L d1 h1 c1]
    v45.NUiWx8 = arr_v28;                               // #174643:110:142 [L d1 h1 c1]
    v35 = "euSP7";                                      // #174653:234:233 [L d1 h1 c1]
    v36 = undefined;                                    // #174662:118:233 [L d1 h1 c1]
    doc_v101 = win_v40.document;                        // #174665:245:200 [L d1 h1 c1]
    v102 = doc_v101.title;                              // #174670:56:200 [L d1 h1 c1]
    if (v36 === v102) {                                 // #174679:228:161 [L d1 h1 c1]
      v103 = false;                                     // #174696:163:233 [-] +#174699:167:53 /* never executed in any replay */
    } else {
      doc_v104 = win_v40.document;                      // #174704:234:200 [L d1 h1 c1]
      v37 = doc_v104.title;                             // #174709:153:200 [L d1 h1 c1]
      v105 = (doc_v104.title).length;                   // #174718:76:200 [L d1 h1 c1]
      v106 = 0;                                         // #174723:115:72 [L d1 h1 c1]
      v107 = 0 < v105;                                  // #174726:240:98 [L d1 h1 c1]
      v103 = 0 < v105;                                  // #174730:29:150 [L d1 h1 c1] +#174733:185:53
    }
    v45.euSP7 = v103;                                   // #174738:104:199 [L d1 h1 c1]
    arr_v38 = tryStack.pop();                                // #174742:131:124 [L d1 h1 c1] +#174745:7:53
  } catch (caught) {
    v108 = caught;                                        // #174750:87:150 [-] /* never executed in any replay */
    v39 = KP(m174752k87);                               // #174753:111:233 [-] /* never executed in any replay */
    v109 = (win_v40)[KP(m174757k111)](v108);            // #174758:132:138 [-] /* never executed in any replay */
    v45[v39] = v109;                                    // #174777:173:210 [-] /* never executed in any replay */
  }
  v110 = undefined;                                     // #174785:115:233 [L d1 h1 c1]
  return v110;                                          // #174788:247:245 [L d1 h1 c1]
}