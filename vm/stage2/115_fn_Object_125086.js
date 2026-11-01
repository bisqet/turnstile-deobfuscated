function fn_Object_125086(win_v52 /* r70 */, v53 /* r220 */, v54 /* r221 */, arr_v55 /* r227 */) { // entry L125086_11; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 89 register webs used only inside this fn (no live-in, cross-call or table-made def; 38 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r199 */, v2 /* r205 */, v3 /* r205 */, v4 /* r199 */, v5 /* r205 */, v6 /* r205 */, v7 /* r199 */, v8 /* r199 */, v9 /* r199 */, v10 /* r205 */;
  let math_v11 /* r254 */, math_v12 /* r205 */, v13 /* r205 */, v14 /* r199 */, v15 /* r199 */, v16 /* r205 */, v17 /* r205 */, v18 /* r205 */, v19 /* r199 */, v20 /* r205 */;
  let v21 /* r199 */, v22 /* r205 */, v23 /* r199 */, v24 /* r205 */, v25 /* r205 */, v26 /* r205 */, v27 /* r205 */, v28 /* r199 */, v29 /* r199 */, v30 /* r205 */;
  let v31 /* r199 */, v32 /* r205 */, v33 /* r199 */, v34 /* r205 */, v35 /* r199 */, v36 /* r205 */, v37 /* r199 */, fn_v38 /* r205 */, fn_v39 /* r192 */, fn_v40 /* r254 */;
  let v41 /* r205 */, arr_v42 /* r199 */, fn_v43 /* r205 */, v44 /* r205 */, v45 /* r199 */, v46 /* r205 */, v47 /* r205 */, v48 /* r199 */, v49 /* r199 */, v50 /* r205 */;
  let arr_v51 /* r205 */, arr_v56 /* r244 */, v57 /* r198 */, v58 /* r192 */, v59 /* r242 */, v60 /* r247 */, v61 /* r252 */, v62 /* r193 */, v63 /* r195 */, v64 /* r202 */;
  let v65 /* r253 */, v66 /* r196 */, v67 /* r204 */, v68 /* r246 */, v69 /* r250 */, v70 /* r199 */, v71 /* r198 */, v72 /* r192 */, v73 /* r254 */, v74 /* r245 */;
  let v75 /* r254 */, v76 /* r254 */, v77 /* r254 */, v78 /* r192 */, v79 /* r254 */, v80 /* r192 */, v81 /* r254 */, v82 /* r192 */, v83 /* r192 */, v84 /* r192 */;
  let fn_v85 /* r192 */, v86 /* r254 */, v87 /* r198 */, v88 /* r198 */, v89 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v11 33, math_v12 33
  //   Function: fn_v38 33, fn_v39 33, fn_v40 33, fn_v43 33, fn_v85 33
  //   Array: arr_v42 33, arr_v51 33, arr_v55 3, arr_v56 3
  //   Window: win_v52 3
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 3 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v56 = arr_v55;                                    // #125087:140:150 [L d1 h1 c1]
  v57 = undefined;                                      // #125090:44:53 #125100:15:233 [L d1 h1 c1]
  v58 = undefined;                                      // #125103:71:233 [L d1 h1 c1]
  NC(19, 20);                                           // #125106:97:211 [L d1 h1 c1]
  v1 = undefined;                                       // #125110:209:233 [L d1 h1 c1]
  v2 = undefined;                                       // #125113:129:233 #125116:113:233 #125119:161:233 [L d1 h1 c1]
  v59 = 0;                                              // #125122:180:72 [L d1 h1 c1]
  v60 = "uOdMb2";                                       // #125125:152:233 [L d1 h1 c1]
  v61 = "Object";                                       // #125135:236:233 [L d1 h1 c1]
  v62 = "StrQt0";                                       // #125140:240:233 [L d1 h1 c1]
  v63 = "uOdMb2";                                       // #125150:228:233 [L d1 h1 c1]
  v64 = "uOdMb2";                                       // #125160:8:233 [L d1 h1 c1]
  v65 = "forEach";                                      // #125170:156:233 [L d1 h1 c1]
  v66 = KP(125174);                                     // #125175:224:233 [L d1 h1 c1]
  v67 = KP(125247);                                     // #125248:20:233 [L d1 h1 c1]
  v68 = KP(125252);                                     // #125253:120:233 [L d1 h1 c1]
  v69 = KP(125345);                                     // #125346:76:233 [L d1 h1 c1] +#125439:236:53
  while ((v70 = arr_v56.length, v5 = v59 < v70, v59 < v70)) {  // #125457:84:200 | #125462:133:186 [L d12 h12 c12]
    try {
      TP(tryStack, 126149, 223, callDepths);                       // #125480:67:194 [L d11 h11 c11]  try: pushes the catch arm of the enclosing try (TP)
      v71 = arr_v56[v59];                               // #125486:209:7 [L d11 h11 c11]
      v72 = v71.Kavdk6;                                 // #125490:164:200 [L d11 h11 c11]
      v6 = undefined;                                   // #125495:200:233 [L d11 h11 c11]
      v7 = v72 === undefined;                           // #125498:84:65 [L d11 h11 c11]
      if (v7) {                                         // #125502:83:160 [L d11 h11 c11]
        v10 = v7;                                       // #125537:232:150 [-] +#125540:24:53 /* never executed in any replay */
      } else {
        v73 = typeof v72;                               // #125508:151:53 #125513:153:193 [L d11 h11 c11]
        v8 = 0;                                         // #125516:204:72 [L d11 h11 c11]
        v74 = typeof (0);                               // #125519:200:193 [L d11 h11 c11]
        v9 = !(v73 === v74);                            // #125522:84:65 #125526:45:130 [L d11 h11 c11]
        v10 = v9;                                       // #125529:166:150 [L d11 h11 c11] +#125532:94:53
      }
      if (v10) {                                        // #125545:201:160 [L d11 h11 c11]
        v14 = v10;                                      // #125597:127:150 [-] +#125600:19:53 /* never executed in any replay */
      } else {
        math_v11 = win_v52.Math;                        // #125551:181:53 #125556:214:200 [L d11 h11 c11]
        math_v12 = math_v11;                            // #125561:235:150 [L d11 h11 c11]
        v75 = math_v12.floor(v72);                      // #125564:16:138 [L d11 h11 c11]
        v13 = !(v72 === v75);                           // #125582:124:65 #125586:181:130 [L d11 h11 c11]
        v14 = v13;                                      // #125589:14:150 [L d11 h11 c11] +#125592:38:53
      }
      if (v14) {                                        // #125605:205:160 [L d11 h11 c11]
        v16 = v14;                                      // #125631:217:150 [-] +#125634:133:53 /* never executed in any replay */
      } else {
        v76 = 0;                                        // #125611:169:53 #125616:144:72 [L d11 h11 c11]
        v15 = (0) > v72;                                // #125619:3:212 [L d11 h11 c11]
        v16 = v15;                                      // #125623:164:150 [L d11 h11 c11] +#125626:228:53
      }
      if (v16) {                                        // #125639:62:160 [L d11 h11 c11]
        v19 = v16;                                      // #125669:155:150 [-] +#125672:191:53 /* never executed in any replay */
      } else {
        v17 = cell[1];                                  // #125645:150:53 #125650:71:236 [L d11 h11 c11]
        v77 = v17[v53];                                 // #125653:197:7 [L d11 h11 c11]
        v18 = v77 < v72;                                // #125657:122:98 [L d11 h11 c11]
        v19 = v18;                                      // #125661:255:150 [L d11 h11 c11] +#125664:147:53
      }
      if (v19) {                                        // #125677:25:160 [L d11 h11 c11]
        v20 = win_v52[v54];                             // #125688:5:7 [-] /* never executed in any replay */
        v21 = v20.uOdMb2(v68);                          // #125692:66:138 [-] +#125711:138:53 /* never executed in any replay */
      } else {
        v22 = cell[1];                                  // #125683:197:53 #125716:216:236 [L d11 h11 c11]
        v23 = v22[v72];                                 // #125719:82:7 [L d11 h11 c11]
        cell[19] = v23;                                 // #125723:48:195 [L d11 h11 c11]
        v24 = undefined;                                // #125726:36:233 [L d11 h11 c11]
        v78 = v23 === (undefined);                      // #125729:64:65 [L d11 h11 c11]
        if (v78) {                                      // #125733:143:160 [L d11 h11 c11]
          v25 = v78;                                    // #125759:85:150 [-] +#125762:17:53 /* never executed in any replay */
        } else {
          v79 = null;                                   // #125739:227:53 #125744:57:233 [L d11 h11 c11]
          v80 = v23 === (null);                         // #125747:65:65 [L d11 h11 c11]
          v25 = v80;                                    // #125751:106:150 [L d11 h11 c11] +#125754:18:53
        }
        if (v25) {                                      // #125767:102:160 [L d11 h11 c11]
          // #125778:249:53 [-] /* never executed in any replay */
        } else {
          v26 = v71.MRiry9;                             // #125773:30:53 #125783:223:200 [L d11 h11 c11]
          if (v26) {                                    // #125793:114:160 [L d11 h11 c11]
            v47 = win_v52[v54];                         // #126110:73:7 [-] /* never executed in any replay */
            v48 = MC(v47, v63, v66);                    // #126114:190:114 [-] /* never executed in any replay */
            v49 = cell[19];                             // #126119:177:236 [-] /* never executed in any replay */
            v50 = "THgB7";                              // #126122:225:233 [-] /* never executed in any replay */
            v88 = true;                                 // #126131:81:233 [-] /* never executed in any replay */
            v49.THgB7 = true;                           // #126134:134:210 [-] /* never executed in any replay */
          } else {
            v27 = v71.gahe1;                            // #125799:250:53 #125804:138:200 [L d11 h11 c11]
            cell[20] = v27;                             // #125813:136:195 [L d11 h11 c11]
            v28 = undefined;                            // #125816:28:233 [L d11 h11 c11]
            if (v27 === v28) {                          // #125819:56:161 [L d11 h11 c11]
              v29 = false;                              // #125836:20:233 [-] +#125839:148:53 /* never executed in any replay */
            } else {
              v81 = null;                               // #125844:7:233 [L d11 h11 c11]
              v82 = !(v27 === (null));                  // #125847:87:65 #125851:228:130 [L d11 h11 c11]
              v29 = v82;                                // #125854:65:150 [L d11 h11 c11] +#125857:77:53
            }
            if (v29) {                                  // #125862:58:160 [L d11 h11 c11]
              v83 = win_v52.Object(v27);                // #125881:53:138 [L d11 h11 c11]
              v31 = v27 === v83;                        // #125900:77:65 [L d11 h11 c11]
              v30 = v31;                                // #125904:70:150 [L d11 h11 c11] +#125907:126:53
            } else {
              v30 = v29;                                // #125868:162:53 #125873:75:150 [-] +#125876:175:53 /* never executed in any replay */
            }
            if (v30) {                                  // #125912:231:160 [L d11 h11 c11]
              fn_v38 = win_v52[v61];                    // #126002:29:7 [L d11 h11 c11]
              fn_v39 = fn_v38;                          // #126006:214:150 [L d11 h11 c11]
              fn_v40 = fn_v38.keys;                     // #126009:213:200 [L d11 h11 c11]
              v41 = cell[20];                           // #126014:44:236 [L d11 h11 c11]
              arr_v42 = fn_v40.call(fn_v39, v41);       // #126017:141:138 [L d11 h11 c11]
              fn_v85 = arr_v42[v65];                    // #126035:115:7 [L d11 h11 c11]
              fn_v43 = clos;                            // #126039:14:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v43 = its home register (H139 CLOS bind)
              v86 = fn_v85.call(arr_v42, fn_v43);       // #126056:85:16 [L d11 h11 c11] +#126062:17:53
            } else {
              v32 = cell[20];                           // #125918:219:53 #125923:180:236 [-] /* never executed in any replay */
              v33 = undefined;                          // #125926:152:233 [-] /* never executed in any replay */
              if (v32 === v33) {                        // #125929:196:161 [-] /* never executed in any replay */
                v34 = false;                            // #125946:44:233 [-] +#125949:76:53 /* never executed in any replay */
              } else {
                v84 = null;                             // #125954:45:233 [-] /* never executed in any replay */
                v35 = !(v32 === v84);                   // #125957:101:65 #125961:58:130 [-] /* never executed in any replay */
                v34 = v35;                              // #125964:191:150 [-] +#125967:83:53 /* never executed in any replay */
              }
              if (v34) {                                // #125972:200:160 [-] /* never executed in any replay */
                v36 = win_v52[v54];                     // #125983:134:7 [-] /* never executed in any replay */
                v37 = MC(v36, v60, v69);                // #125987:71:114 [-] +#125992:187:53 /* never executed in any replay */
              } else {
                // #125978:120:53 [-] /* never executed in any replay */
              }
            }
            v44 = v71[v62];                             // #126067:46:7 [L d11 h11 c11]
            if (v44) {                                  // #126071:69:160 [L d11 h11 c11]
              v45 = cell[19];                           // #126082:90:236 [-] /* never executed in any replay */
              v46 = "PbMu2";                            // #126085:38:233 [-] /* never executed in any replay */
              v87 = true;                               // #126094:194:233 [-] /* never executed in any replay */
              v45.PbMu2 = true;                         // #126097:115:210 [-] /* never executed in any replay */
            } else {
              // #126077:65:53 [L d11 h11 c11]
            }
          }
          arr_v51 = tryStack.pop();                          // #126142:197:124 [L d11 h11 c11] +#126145:193:53
        }
      }
      v3 = 1;                                           // #125444:113:72 [L d11 h11 c11]
      v4 = v59; v59 = v59 + 1;                          // #125447:140:48 [L d11 h11 c11]
    } catch (caught) {
      outside("L126152_16");                            // #126150:16:150 [-]  L126152_16 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
  }
  v89 = undefined;                                      // #126194:179:233 [L d1 h1 c1]
  return v89;                                           // #126197:55:245 [L d1 h1 c1]
}