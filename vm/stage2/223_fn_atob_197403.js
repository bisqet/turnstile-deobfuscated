function fn_atob_197403(v55 /* r227 */) { // entry L197403_247; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 82 register webs used only inside this fn (no live-in, cross-call or table-made def; 28 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, win_v2 /* r204 */, win_v3 /* r205 */, v4 /* r202 */, v5 /* r205 */, v6 /* r204 */, v7 /* r205 */, v8 /* r204 */, v9 /* r196 */, v10 /* r204 */;
  let v11 /* r192 */, v12 /* r204 */, v13 /* r192 */, v14 /* r204 */, v15 /* r196 */, v16 /* r204 */, v17 /* r196 */, v18 /* r205 */, v19 /* r204 */, v20 /* r196 */;
  let v21 /* r204 */, v22 /* r192 */, v23 /* r204 */, v24 /* r254 */, v25 /* r192 */, v26 /* r253 */, v27 /* r204 */, v28 /* r196 */, v29 /* r252 */, v30 /* r204 */;
  let v31 /* r192 */, v32 /* r196 */, v33 /* r205 */, v34 /* r204 */, v35 /* r196 */, v36 /* r204 */, v37 /* r192 */, v38 /* r204 */, v39 /* r192 */, v40 /* r204 */;
  let v41 /* r196 */, v42 /* r204 */, v43 /* r196 */, v44 /* r192 */, v45 /* r196 */, v46 /* r204 */, arr_v47 /* r204 */, v48 /* r196 */, v49 /* r205 */, v50 /* r204 */;
  let v51 /* r205 */, v52 /* r196 */, v53 /* r204 */, fn_v54 /* r205 */, v56 /* r199 */, v57 /* r247 */, v58 /* r254 */, v59 /* r252 */, v60 /* r198 */, v61 /* r202 */;
  let v62 /* r205 */, v63 /* r247 */, v64 /* r254 */, v65 /* r252 */, arr_v66 /* r198 */, v67 /* r240 */, v68 /* r244 */, v69 /* r246 */, v70 /* r238 */, v71 /* r193 */;
  let v72 /* r242 */, v73 /* r245 */, v74 /* r250 */, v75 /* r195 */, fn_v76 /* r253 */, v77 /* r192 */, v78 /* r253 */, v79 /* r192 */, fn_v80 /* r196 */, v81 /* r204 */;
  let v82 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 9, win_v3 9
  //   Array: arr_v47 48, arr_v66 9
  //   Function: fn_v54 9, fn_v76 48, fn_v80 9
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 3 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v56 = v55;                                            // #197404:200:150 [L d3 h3 c3]
  v57 = undefined;                                      // #197407:120:53 #197417:41:233 [L d3 h3 c3]
  v58 = undefined;                                      // #197420:121:233 [L d3 h3 c3]
  v59 = undefined;                                      // #197423:137:233 [L d3 h3 c3]
  v60 = undefined;                                      // #197426:89:233 [L d3 h3 c3]
  v1 = cell[25];                                        // #197429:233:233 #197432:240:236 [L d3 h3 c3]
  v61 = v1[v56];                                        // #197435:10:7 [L d3 h3 c3]
  v62 = undefined;                                      // #197439:185:72 #197442:201:233 [L d3 h3 c3]
  L197983_96: {
    if (v61 === v62) {                                  // #197445:113:161 [L d3 h3 c3]
      win_v2 = cell[24];                                // #197462:151:236 [L d3 h3 c3]
      win_v3 = cell[24];                                // #197465:232:150 [L d3 h3 c3]
      v63 = win_v3.atob(v56);                           // #197468:89:138 [L d3 h3 c3]
      v64 = 41191;                                      // #197485:233:233 [L d3 h3 c3]
      v4 = "";                                          // #197491:57:233 [L d3 h3 c3]
      v65 = 0;                                          // #197495:236:72 [L d3 h3 c3]
      arr_v66 = [];                                     // #197498:234:107 [L d3 h3 c3]
      v67 = 65535;                                      // #197500:118:233 [L d3 h3 c3]
      v68 = 65535;                                      // #197506:210:233 [L d3 h3 c3]
      v69 = 65535;                                      // #197512:190:233 [L d3 h3 c3]
      v5 = "apply";                                     // #197518:250:233 [L d3 h3 c3]
      v70 = "length";                                   // #197523:70:233 [L d3 h3 c3]
      v71 = "length";                                   // #197528:98:233 [L d3 h3 c3]
      v72 = "charCodeAt";                               // #197533:14:233 [L d3 h3 c3]
      v73 = "charCodeAt";                               // #197538:10:233 [L d3 h3 c3]
      v74 = "charCodeAt";                               // #197543:22:233 [L d3 h3 c3]
      v75 = "fromCharCode";                             // #197548:242:233 [L d3 h3 c3] +#197564:122:53
      while ((v6 = v63[v70], v7 = v65 < v6, v65 < v6)) {  // #197569:68:7 | #197573:181:186 [L d19 h19 c19]
        v8 = 8;                                         // #197591:41:72 [L d16 h16 c16]
        v9 = v64 << (8);                                // #197594:162:70 [L d16 h16 c16]
        v10 = 8;                                        // #197598:241:72 [L d16 h16 c16]
        v11 = v64 >>> (8);                              // #197601:204:240 [L d16 h16 c16]
        v12 = v11 | v9;                                 // #197605:107:32 [L d16 h16 c16]
        v64 = v67 & (v11 | v9);                         // #197609:187:17 [L d16 h16 c16]
        v13 = v63;                                      // #197613:124:150 [L d16 h16 c16]
        fn_v76 = v13[v72];                              // #197616:102:7 [L d16 h16 c16]
        v14 = 1;                                        // #197620:165:72 [L d16 h16 c16]
        v15 = v65;                                      // #197623:62:150 [L d16 h16 c16]
        v65 = v65 + (1);                                // #197626:219:222 [L d16 h16 c16]
        v16 = fn_v76.call(v13, v15);                    // #197630:64:138 [L d16 h16 c16]
        v77 = 8;                                        // #197654:151:72 [L d16 h16 c16]
        v17 = v64 >>> (8);                              // #197657:90:240 [L d16 h16 c16]
        v18 = v16 ^ v17;                                // #197661:47:166 [L d16 h16 c16]
        if (v18 === 255) {                              // #197665:211:69 [L d16 h16 c16]
          v19 = 8;                                      // #197683:53:72 [-] /* never executed in any replay */
          v20 = v64 << 8;                               // #197686:126:70 [-] /* never executed in any replay */
          v21 = 8;                                      // #197690:93:72 [-] /* never executed in any replay */
          v22 = v64 >>> 8;                              // #197693:136:240 [-] /* never executed in any replay */
          v23 = v22 | v20;                              // #197697:55:32 [-] /* never executed in any replay */
          v24 = v68 & (v22 | v20);                      // #197701:87:17 [-] /* never executed in any replay */
          v25 = v63;                                    // #197705:168:150 [-] /* never executed in any replay */
          v26 = v25[v73];                               // #197708:226:7 [-] /* never executed in any replay */
          v27 = 1;                                      // #197712:49:72 [-] /* never executed in any replay */
          v28 = v65;                                    // #197715:154:150 [-] /* never executed in any replay */
          v29 = v65 + 1;                                // #197718:199:222 [-] /* never executed in any replay */
          v30 = v26.call(v25, v28);                     // #197722:124:138 [-] /* never executed in any replay */
          v31 = 8;                                      // #197746:227:72 [-] /* never executed in any replay */
          v32 = v24 >>> 8;                              // #197749:118:240 [-] /* never executed in any replay */
          v33 = v30 ^ v32;                              // #197753:219:166 [-] /* never executed in any replay */
          v34 = 8;                                      // #197757:134:72 [-] /* never executed in any replay */
          v35 = v24 << 8;                               // #197760:203:70 [-] /* never executed in any replay */
          v36 = 8;                                      // #197764:182:72 [-] /* never executed in any replay */
          v37 = v24 >>> 8;                              // #197767:189:240 [-] /* never executed in any replay */
          v38 = v37 | v35;                              // #197771:216:32 [-] /* never executed in any replay */
          v64 = v69 & (v37 | v35);                      // #197775:180:17 [-] /* never executed in any replay */
          v39 = v63;                                    // #197779:209:150 [-] /* never executed in any replay */
          v78 = v39[v74];                               // #197782:167:7 [-] /* never executed in any replay */
          v40 = 1;                                      // #197786:34:72 [-] /* never executed in any replay */
          v41 = v29;                                    // #197789:7:150 [-] /* never executed in any replay */
          v65 = v29 + 1;                                // #197792:192:222 [-] /* never executed in any replay */
          v42 = v78.call(v39, v41);                     // #197796:209:138 [-] /* never executed in any replay */
          v43 = 8;                                      // #197820:36:72 [-] /* never executed in any replay */
          v44 = v64 >>> 8;                              // #197823:243:240 [-] /* never executed in any replay */
          v45 = v42 ^ v44;                              // #197827:164:166 [-] /* never executed in any replay */
          v79 = 8;                                      // #197831:107:72 [-] /* never executed in any replay */
          v46 = v45 << 8;                               // #197834:92:70 [-] /* never executed in any replay */
          v18 = v46 | v33;                              // #197838:187:32 [-] +#197842:95:53 /* never executed in any replay */
        }
        arr_v47 = arr_v66;                              // #197847:215:150 [L d16 h16 c16]
        v48 = (arr_v47).push(v18);                      // #197850:76:138 [L d16 h16 c16]
        v49 = arr_v66[v71];                             // #197867:246:7 [L d16 h16 c16]
        v50 = 128; if (v49 === 128) {                   // #197871:62:69 [L d16 h16 c16]
          v51 = cell[26];                               // #197889:64:236 [-] /* never executed in any replay */
          v52 = v51[v75];                               // #197892:26:7 [-] /* never executed in any replay */
          v53 = (v52)[KP(m197895k26)](v51, arr_v66);    // #197896:67:138 [-] /* never executed in any replay */
          v4 = v4 + v53;                                // #197915:12:222 [-] /* never executed in any replay */
          arr_v66 = [];                                 // #197919:138:107 [-] +#197921:178:53 /* never executed in any replay */
        }
      }
      fn_v54 = cell[26];                                // #197931:119:236 [L d3 h3 c3]
      fn_v80 = cell[26].fromCharCode;                   // #197934:50:200 [L d3 h3 c3]
      v81 = (fn_v80).apply(fn_v54, arr_v66);            // #197950:251:138 [L d3 h3 c3]
      v61 = v4 + v81;                                   // #197969:228:222 [L d3 h3 c3]
      v82 = cell[25];                                   // #197973:191:236 [L d3 h3 c3]
      v82[v56] = v61;                                   // #197976:188:210 [L d3 h3 c3]
      break L197983_96;
    }
  }
  return v61;                                           // #197984:112:245 [L d3 h3 c3]
}