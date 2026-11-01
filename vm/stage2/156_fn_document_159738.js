function fn_document_159738(win_v81 /* r70 */, v82 /* r221 */) { // entry L159722_12; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 109 register webs used only inside this fn (no live-in, cross-call or table-made def; 29 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r254 */, v2 /* r195 */, v3 /* r196 */, v4 /* r198 */, v5 /* r193 */, v6 /* r199 */, v7 /* r204 */, v8 /* r205 */, doc_v9 /* r204 */, elIFrame_v10 /* r202 */;
  let v11 /* r192 */, shadowRoot_v12 /* r204 */, v13 /* r199 */, v14 /* r204 */, shadowRoot_v15 /* r205 */, shadowRoot_v16 /* r199 */, elIFrame_v17 /* r198 */, v18 /* r205 */, v19 /* r205 */, fn_v20 /* r252 */;
  let navigator_v21 /* r204 */, navigator_v22 /* r253 */, v23 /* r205 */, fn_v24 /* r196 */, doc_v25 /* r204 */, v26 /* r205 */, fn_v27 /* r196 */, screen_v28 /* r204 */, v29 /* r205 */, fn_v30 /* r196 */;
  let win_v31 /* r204 */, screen_v32 /* r198 */, screenOrientation_v33 /* r204 */, v34 /* r205 */, v35 /* r204 */, fn_v36 /* r193 */, win_v37 /* r198 */, v38 /* r204 */, fn_v39 /* r193 */, navigator_v40 /* r198 */;
  let v41 /* r196 */, v42 /* r204 */, v43 /* r198 */, fn_v44 /* r199 */, win_v45 /* r199 */, fn_v46 /* r204 */, v47 /* r204 */, arr_v48 /* r204 */, v49 /* r199 */, perf_v50 /* r253 */;
  let v51 /* r204 */, arr_v52 /* r193 */, v53 /* r204 */, v54 /* r253 */, v55 /* r253 */, performanceNavigationTiming_v56 /* r204 */, v57 /* r193 */, arr_v58 /* r193 */, v59 /* r204 */, v60 /* r193 */;
  let v61 /* r252 */, v62 /* r204 */, v63 /* r193 */, v64 /* r204 */, v65 /* r204 */, v66 /* r204 */, v67 /* r192 */, v68 /* r193 */, v69 /* r253 */, v70 /* r192 */;
  let v71 /* r204 */, v72 /* r204 */, arr_v73 /* r204 */, v74 /* r204 */, v75 /* r193 */, v76 /* r192 */, v77 /* r204 */, arr_v78 /* r204 */, shadowRoot_v79 /* r204 */, elIFrame_v80 /* r204 */;
  let v83 /* r242 */, v84 /* r246 */, v85 /* r245 */, win_v86 /* r254 */, v87 /* r195 */, fn_v88 /* r250 */, v89 /* r196 */, v90 /* r198 */, v91 /* r242 */, arr_v92 /* r246 */;
  let v93 /* r245 */, v94 /* r237 */, v95 /* r238 */, v96 /* r240 */, v97 /* r244 */, v98 /* r247 */, v99 /* r252 */, doc_v100 /* r253 */, v101 /* r193 */, v102 /* r192 */;
  let v103 /* r199 */, v104 /* r205 */, shadowRoot_v105 /* r199 */, v106 /* r202 */, shadowRoot_v107 /* r199 */, elIFrame_v108 /* r202 */, arr_v109 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v9 3, doc_v25 3, doc_v100 3
  //   HTMLIFrameElement: elIFrame_v10 3, elIFrame_v17 3, elIFrame_v80 3, elIFrame_v108 3
  //   ShadowRoot: shadowRoot_v12 3, shadowRoot_v15 3, shadowRoot_v16 3, shadowRoot_v79 3, shadowRoot_v105 3, shadowRoot_v107 3
  //   Function: fn_v20 3, fn_v24 3, fn_v27 3, fn_v30 3, fn_v36 3, fn_v39 3, fn_v44 3, fn_v46 3
  //   Function: fn_v88 3
  //   Navigator: navigator_v21 3, navigator_v22 3, navigator_v40 3
  //   Screen: screen_v28 3, screen_v32 3
  //   Window: win_v31 3, win_v37 3, win_v45 3, win_v81 3, win_v86 3
  //   ScreenOrientation: screenOrientation_v33 3
  //   Array: arr_v48 3, arr_v52 3, arr_v58 3, arr_v73 3, arr_v78 3, arr_v92 3, arr_v109 3
  //   Performance: perf_v50 3
  //   PerformanceNavigationTiming: performanceNavigationTiming_v56 3
  // H133 rewrites: 15 single-use temps folded (8 of them expressions, H135), 21 dead register writes dropped, 5 constants propagated (5 uses), 7 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #159723:172:53 #159733:23:233 #159736:47:233 #159739:231:233 [L d1 h1 c1]
  v2 = undefined;                                       // #159742:191:233 #159745:55:233 #159748:207:233 [L d1 h1 c1]
  v3 = undefined;                                       // #159751:7:233 #159754:95:233 [L d1 h1 c1]
  v4 = undefined;                                       // #159757:87:233 #159760:111:233 [L d1 h1 c1]
  v5 = undefined;                                       // #159763:39:233 [L d1 h1 c1]
  v83 = undefined;                                      // #159766:255:233 #159769:119:233 [L d1 h1 c1]
  v84 = undefined;                                      // #159772:15:233 [L d1 h1 c1]
  v85 = undefined;                                      // #159775:71:233 [L d1 h1 c1]
  v6 = undefined;                                       // #159778:159:233 #159781:151:233 #159784:175:233 [L d1 h1 c1]
  v7 = undefined;                                       // #159787:103:233 #159790:63:233 #159793:183:233 #159796:79:233 [L d1 h1 c1]
  v8 = undefined;                                       // #159799:135:233 [L d1 h1 c1]
  clos;                                                 // #159802:210:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  try {
    TP(tryStack, 161094, 160, callDepths);                         // #159816:115:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    doc_v9 = win_v81.document;                          // #159822:62:200 #159827:179:150 [L d1 h1 c1]
    elIFrame_v10 = doc_v9.createElement("iframe");      // #159830:91:233 #159835:192:138 [L d1 h1 c1]
    elIFrame_v10.style = "display: none";               // #159861:116:233 #159866:88:233 #159883:146:199 [L d1 h1 c1]
    elIFrame_v10.tabIndex = "-1";                       // #159887:126:233 #159899:186:233 #159905:236:199 [L d1 h1 c1]
    v11 = win_v81[v82][KP(159912)];                     // #159909:22:7 #159913:21:200 [L d1 h1 c1]
    if (v11) {                                          // #159918:80:160 [L d1 h1 c1]
      shadowRoot_v12 = v11.pkJkg9;                      // #159937:124:200 #159942:121:150 [L d1 h1 c1] +#159945:165:53
    } else {
      shadowRoot_v12 = v11;                             // #159924:224:53 #159929:68:150 [-] +#159932:4:53 /* never executed in any replay */
    }
    if (shadowRoot_v12) {                               // #159950:119:160 [L d1 h1 c1]
      shadowRoot_v15 = shadowRoot_v12;                  // #159979:135:150 [L d1 h1 c1] +#159982:251:53
    } else {
      v13 = win_v81.document;                           // #159956:43:53 #159961:118:200 [-] /* never executed in any replay */
      v14 = v13.body;                                   // #159966:245:200 [-] /* never executed in any replay */
      shadowRoot_v15 = v13.body;                        // #159971:78:150 [-] +#159974:102:53 /* never executed in any replay */
    }
    shadowRoot_v16 = shadowRoot_v15;                    // #159987:69:150 [L d1 h1 c1]
    elIFrame_v17 = shadowRoot_v16.appendChild(elIFrame_v10);  // #159990:130:138 [L d1 h1 c1]
    win_v86 = elIFrame_v10.contentWindow;               // #160014:209:200 [L d1 h1 c1]
    v18 = {};                                           // #160019:223:159 [L d1 h1 c1]
    v19 = win_v81.JwCUQ7(win_v86, win_v86, "", v18);    // #160021:215:233 #160025:76:138 [L d1 h1 c1]
    fn_v20 = win_v81.JwCUQ7;                            // #160047:243:200 [L d1 h1 c1]
    navigator_v21 = win_v86.clientInformation;          // #160052:190:200 [L d1 h1 c1]
    if (navigator_v21) {                                // #160073:149:160 [L d1 h1 c1]
      navigator_v22 = navigator_v21;                    // #160097:23:150 [L d1 h1 c1] +#160100:75:53
    } else {
      navigator_v22 = win_v86.navigator;                // #160079:81:53 #160084:238:200 #160089:163:150 [-] +#160092:167:53 /* never executed in any replay */
    }
    v23 = fn_v20.call(win_v81, win_v86, navigator_v22, "n.", v19);  // #160105:180:233 #160111:227:16 [L d1 h1 c1]
    fn_v24 = win_v81.JwCUQ7;                            // #160120:238:200 [L d1 h1 c1]
    doc_v25 = elIFrame_v10.contentDocument;             // #160125:141:200 [L d1 h1 c1]
    v26 = fn_v24.call(win_v81, win_v86, doc_v25, "d.", v23);  // #160130:77:233 #160136:106:138 [L d1 h1 c1]
    fn_v27 = win_v81.JwCUQ7;                            // #160159:25:200 [L d1 h1 c1]
    screen_v28 = elIFrame_v10.contentWindow.screen;     // #160164:204:200 #160169:115:200 [L d1 h1 c1]
    v29 = fn_v27.call(win_v81, win_v86, screen_v28, "s.", v26);  // #160179:27:233 #160185:128:138 [L d1 h1 c1]
    fn_v30 = win_v81.JwCUQ7;                            // #160208:87:200 [L d1 h1 c1]
    win_v31 = elIFrame_v10.contentWindow;               // #160213:146:200 [L d1 h1 c1]
    screen_v32 = win_v31.screen;                        // #160218:161:200 [L d1 h1 c1]
    screenOrientation_v33 = (win_v31.screen).orientation;  // #160228:52:200 [L d1 h1 c1]
    v34 = fn_v30.call(win_v81, win_v86, screenOrientation_v33, "so.", v29);  // #160243:24:233 #160250:201:138 [L d1 h1 c1]
    v35 = {};                                           // #160273:247:159 [L d1 h1 c1]
    fn_v36 = win_v81.JwCUQ7;                            // #160275:178:200 [L d1 h1 c1]
    win_v37 = win_v81[v82];                             // #160280:68:7 [L d1 h1 c1]
    v38 = fn_v36.call(win_v81, win_v86, win_v37, "", v35);  // #160284:232:233 #160288:89:138 [L d1 h1 c1]
    fn_v39 = win_v81.JwCUQ7;                            // #160311:12:200 [L d1 h1 c1]
    navigator_v40 = win_v81[v82].navigator;             // #160316:182:7 #160320:53:200 [L d1 h1 c1]
    v41 = "n.";                                         // #160325:85:233 [L d1 h1 c1]
    v42 = fn_v39.call(win_v81, win_v86, navigator_v40, "n.", v38);  // #160331:82:138 [L d1 h1 c1]
    v43 = win_v81.fXaz8(v34, v42);                      // #160354:155:138 [L d1 h1 c1]
    v87 = null;                                         // #160373:163:233 [L d1 h1 c1]
    try {
      TP(tryStack, 160470, 232, callDepths);                       // #160376:64:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      fn_v44 = win_v81[v82].Notification;               // #160382:26:7 #160386:9:200 [L d1 h1 c1]
      if (fn_v44) {                                     // #160402:116:160 [L d1 h1 c1]
        win_v45 = win_v81[v82];                         // #160421:49:7 [L d1 h1 c1]
        fn_v46 = win_v45.Notification;                  // #160425:132:200 [L d1 h1 c1]
        v87 = fn_v46.permission;                        // #160441:75:200 [L d1 h1 c1]
        v47 = fn_v46.permission;                        // #160455:204:150 [L d1 h1 c1] +#160458:108:53
      } else {
        // #160408:116:53 #160413:190:150 #160416:22:53 [-] /* never executed in any replay */
      }
      arr_v48 = tryStack.pop();                              // #160463:131:124 [L d1 h1 c1]
      fn_v88 = clos;                                    // #160466:7:53 #160479:136:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v88 = its home register (H139 CLOS bind)
      v89 = null;                                       // #160493:28:233 [L d1 h1 c1]
      v49 = null;                                       // #160496:96:233 [L d1 h1 c1]
      v90 = null;                                       // #160499:148:233 [L d1 h1 c1]
      try {
        TP(tryStack, 160966, 57, callDepths);                      // #160502:173:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
        perf_v50 = win_v81.performance;                 // #160508:16:200 #160513:189:150 [L d1 h1 c1]
        v51 = "navigation";                             // #160516:189:233 [L d1 h1 c1]
        arr_v52 = perf_v50.getEntriesByType("navigation");  // #160530:26:138 [L d1 h1 c1]
        if (arr_v52) {                                  // #160559:129:160 [L d1 h1 c1]
          v54 = arr_v52.length;                         // #160578:181:200 [L d1 h1 c1]
          v53 = v54;                                    // #160583:14:150 [L d1 h1 c1] +#160586:38:53
        } else {
          v53 = arr_v52;                                // #160565:141:53 #160570:44:150 [-] +#160573:76:53 /* never executed in any replay */
        }
        L160958_37: {
          if (v53) {                                    // #160591:35:160 [L d1 h1 c1]
            v55 = 0;                                    // #160602:92:72 [L d1 h1 c1]
            performanceNavigationTiming_v56 = arr_v52[0];  // #160605:198:7 [L d1 h1 c1]
            v90 = performanceNavigationTiming_v56.decodedBodySize;  // #160609:5:200 [L d1 h1 c1]
            v49 = performanceNavigationTiming_v56.encodedBodySize;  // #160628:8:200 [L d1 h1 c1]
            if (v11) {                                  // #160647:55:160 [L d1 h1 c1]
              v57 = v11.lBfoa7;                         // #160666:186:200 [L d1 h1 c1]
              v91 = v57;                                // #160676:63:150 [L d1 h1 c1] +#160679:211:53
            } else {
              v91 = v11;                                // #160653:235:53 #160658:58:150 [-] +#160661:162:53 /* never executed in any replay */
            }
            arr_v92 = performanceNavigationTiming_v56.serverTiming;  // #160684:163:200 [L d1 h1 c1]
            if (v91) {                                  // #160700:38:160 [L d1 h1 c1]
              arr_v58 = arr_v92;                        // #160719:8:150 [L d1 h1 c1] +#160722:184:53
            } else {
              arr_v58 = v91;                            // #160706:222:53 #160711:191:150 [-] +#160714:83:53 /* never executed in any replay */
            }
            if (arr_v58) {                              // #160727:108:160 [L d1 h1 c1]
              v60 = arr_v92.length;                     // #160746:175:200 [L d1 h1 c1]
              v59 = v60;                                // #160751:160:150 [L d1 h1 c1] +#160754:240:53
            } else {
              v59 = arr_v58;                            // #160733:140:53 #160738:130:150 [-] +#160741:202:53 /* never executed in any replay */
            }
            if (v59) {                                  // #160759:98:160 [L d1 h1 c1]
              v93 = 0;                                  // #160770:106:72 [-] /* never executed in any replay */
              v94 = 1;                                  // #160773:153:72 [-] /* never executed in any replay */
              v95 = "length";                           // #160776:41:233 [-] /* never executed in any replay */
              v96 = "name";                             // #160781:121:233 [-] /* never executed in any replay */
              v97 = "duration";                         // #160786:137:233 [-] /* never executed in any replay */
              v98 = 0;                                  // #160798:252:72 [-] /* never executed in any replay */
              v61 = "number";                           // #160801:192:233 [-] +#160806:144:53 /* never executed in any replay */
              while ((v63 = arr_v92[v95], v64 = v93 < v63, v93 < v63)) {  // #160821:121:7 | #160825:86:186 [-] /* never executed in any replay */
                v65 = arr_v92[v93][v96];                // #160843:19:20 [-] /* never executed in any replay */
                if (v65 === v91) {                      // #160848:19:161 [-] /* never executed in any replay */
                  v66 = arr_v92[v93][v97];              // #160865:113:20 [-] /* never executed in any replay */
                  v67 = v98 < v66;                      // #160870:118:98 [-] /* never executed in any replay */
                  if (v67) {                            // #160874:109:160 [-] /* never executed in any replay */
                    v69 = typeof v90;                   // #160893:223:193 [-] /* never executed in any replay */
                    v70 = v69 === "number";             // #160896:207:65 [-] /* never executed in any replay */
                    v68 = v70;                          // #160900:64:150 [-] +#160903:16:53 /* never executed in any replay */
                  } else {
                    v68 = v67;                          // #160880:201:53 #160885:51:150 [-] +#160888:247:53 /* never executed in any replay */
                  }
                  if (v68) {                            // #160908:7:160 [-] /* never executed in any replay */
                    v89 = v90 - v66;                    // #160927:151:54 [-] /* never executed in any replay */
                    v72 = v89;                          // #160931:232:150 [-] +#160934:24:53 /* never executed in any replay */
                  } else {
                    v71 = v68;                          // #160914:123:53 #160919:144:150 [-] +#160922:32:53 /* never executed in any replay */
                  }
                  break L160958_37;                     // #160939:53:53 [-] /* never executed in any replay */
                }
                v62 = v93; v93 = v93 + v94;             // #160811:89:48 [-] /* never executed in any replay */
              }
              break L160958_37;
            } else {
              // #160765:42:53 [L d1 h1 c1]
            }
          } else {
            // #160597:39:53 [-] /* never executed in any replay */
          }
        }
        arr_v73 = tryStack.pop();                            // #160959:140:124 [L d1 h1 c1]
        v74 = {};                                       // #160962:44:53 #160975:117:159 [L d1 h1 c1]
        v75 = "jrkIH9";                                 // #160977:149:233 [L d1 h1 c1]
        v99 = undefined;                                // #160987:53:233 [L d1 h1 c1]
        doc_v100 = elIFrame_v10.contentDocument;        // #160990:120:200 [L d1 h1 c1]
        v76 = MC(v99, fn_v88, win_v86, doc_v100);       // #160995:207:168 [L d1 h1 c1]
        v74.jrkIH9 = v76;                               // #161001:237:199 [L d1 h1 c1]
        v101 = "gdFh4";                                 // #161005:45:233 [L d1 h1 c1]
        v102 = win_v86.isSecureContext;                 // #161014:144:200 [L d1 h1 c1]
        v74.gdFh4 = v102;                               // #161019:234:199 [L d1 h1 c1]
        v74.gPHbR0 = v87;                               // #161023:199:142 [L d1 h1 c1]
        v74.gVFNH2 = v89;                               // #161033:112:142 [L d1 h1 c1]
        v74.IhAY8 = v90;                                // #161043:181:142 [L d1 h1 c1]
        v74.sEDO2 = v49;                                // #161052:38:142 [L d1 h1 c1]
        v103 = v74;                                     // #161061:251:150 [L d1 h1 c1]
        v77 = {};                                       // #161064:225:159 [L d1 h1 c1]
        v77.QVHD7 = v34;                                // #161066:162:142 [L d1 h1 c1]
        v77.ljuV6 = v103;                               // #161075:159:142 [L d1 h1 c1]
        v104 = v77;                                     // #161084:208:150 [L d1 h1 c1]
        arr_v78 = tryStack.pop();                            // #161087:75:124 [L d1 h1 c1] +#161090:175:53
        try {
          TP(tryStack, 161232, 124, callDepths);                   // #161133:33:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
          if (elIFrame_v10) {                           // #161139:44:160 [L d1 h1 c1]
            shadowRoot_v105 = elIFrame_v10.parentNode;  // #161158:118:200 [L d1 h1 c1]
            shadowRoot_v79 = shadowRoot_v105;           // #161163:11:150 [L d1 h1 c1] +#161166:111:53
          } else {
            shadowRoot_v79 = elIFrame_v10;              // #161145:76:53 #161150:49:150 [-] +#161153:125:53 /* never executed in any replay */
          }
          if (shadowRoot_v79) {                         // #161171:176:160 [L d1 h1 c1]
            shadowRoot_v107 = shadowRoot_v79;           // #161190:143:150 [L d1 h1 c1]
            elIFrame_v80 = (shadowRoot_v107).removeChild(elIFrame_v10);  // #161193:36:138 [L d1 h1 c1]
            elIFrame_v108 = elIFrame_v80;               // #161217:129:150 [L d1 h1 c1] +#161220:141:53
          } else {
            v106 = shadowRoot_v79;                      // #161177:192:53 #161182:31:150 [-] +#161185:51:53 /* never executed in any replay */
          }
          arr_v109 = tryStack.pop();                         // #161225:88:124 [L d1 h1 c1]
          return v104;                                  // #161228:200:53 #161312:160:245 [L d1 h1 c1]
        } catch (caught) {
          outside("L161235_121");                       // #161233:121:150 [-]  L161235_121 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
        }
      } catch (caught) {
        outside("L160969_130");                         // #160967:130:150 [-]  L160969_130 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
      }
    } catch (caught) {
      outside("L160473_53");                            // #160471:53:150 [-]  L160473_53 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  } catch (caught) {
    outside("L161097_13");                              // #161095:13:150 [-]  L161097_13 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}