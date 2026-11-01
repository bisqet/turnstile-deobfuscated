function fn_navigator_4147(win_v67 /* r70 */, v68 /* r209 */, v69 /* r220 */, v70 /* r221 */) { // entry L4137_75; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 83 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r196 */, v2 /* r195 */, v3 /* r205 */, win_v4 /* r205 */, v5 /* r205 */, v6 /* r199 */, v7 /* r204 */, win_v8 /* r205 */, win_v9 /* r199 */, fn_v10 /* r198 */;
  let v11 /* r205 */, navigator_v12 /* r205 */, v13 /* r202 */, v14 /* r205 */, v15 /* r205 */, navigator_v16 /* r199 */, arr_v17 /* r202 */, v18 /* r205 */, arr_v19 /* r202 */, v20 /* r204 */;
  let v21 /* r205 */, win_v22 /* r202 */, v23 /* r199 */, v24 /* r202 */, intl_v25 /* r205 */, fn_v26 /* r202 */, v27 /* r205 */, v28 /* r199 */, v29 /* r198 */, v30 /* r198 */;
  let dtf_v31 /* r202 */, v32 /* r205 */, v33 /* r199 */, v34 /* r204 */, v35 /* r202 */, v36 /* r204 */, fn_v37 /* r204 */, v38 /* r202 */, v39 /* r199 */, v40 /* r198 */;
  let displayNames_v41 /* r204 */, v42 /* r199 */, v43 /* r204 */, v44 /* r202 */, v45 /* r204 */, fn_v46 /* r204 */, v47 /* r202 */, v48 /* r199 */, v49 /* r198 */, v50 /* r199 */;
  let v51 /* r198 */, listFormat_v52 /* r204 */, fn_v53 /* r202 */, v54 /* r198 */, v55 /* r199 */, v56 /* r199 */, v57 /* r204 */, v58 /* r202 */, v59 /* r204 */, intl_v60 /* r204 */;
  let fn_v61 /* r202 */, v62 /* r204 */, v63 /* r198 */, v64 /* r204 */, arr_v65 /* r204 */, v66 /* r204 */, v71 /* r196 */, fn_v72 /* r193 */, v73 /* r192 */, v74 /* r254 */;
  let v75 /* r195 */, v76 /* r205 */, v77 /* r199 */, v78 /* r198 */, nf_v79 /* r202 */, v80 /* r198 */, v81 /* r202 */, v82 /* r199 */, v83 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v4 3, win_v8 3, win_v9 3, win_v22 3, win_v67 3
  //   Function: fn_v10 3, fn_v26 3, fn_v37 3, fn_v46 3, fn_v53 3, fn_v61 3, fn_v72 3
  //   Navigator: navigator_v12 3, navigator_v16 3
  //   Array: arr_v17 3, arr_v19 3, arr_v65 3
  //   Intl: intl_v25 3, intl_v60 3
  //   Intl.DateTimeFormat: dtf_v31 3
  //   Intl.DisplayNames: displayNames_v41 3
  //   Intl.ListFormat: listFormat_v52 3
  //   Intl.NumberFormat: nf_v79 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 6 dead register writes dropped, 7 constants propagated (7 uses), 6 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(19, 20, 21);                                       // #4138:175:53 #4148:79:211 [L d1 h1 c1]
  v1 = undefined;                                       // #4153:135:233 #4156:223:233 #4159:215:233 #4162:239:233 [L d1 h1 c1]
  v2 = undefined;                                       // #4165:167:233 #4168:127:233 [L d1 h1 c1]
  v3 = undefined;                                       // #4171:247:233 #4174:143:233 #4177:199:233 [L d1 h1 c1]
  clos;                                                 // #4180:18:216 [L d1 h1 c1]  closure creation (operands from the byte stream)
  win_v4 = win_v67.globalThis;                          // #4200:33:200 [L d1 h1 c1]
  cell[19] = win_v4;                                    // #4205:131:195 [L d1 h1 c1]
  v5 = cell[1];                                         // #4208:162:236 [L d1 h1 c1]
  v6 = v5[v69];                                         // #4211:116:7 [L d1 h1 c1]
  v7 = v5[v6];                                          // #4215:126:7 [L d1 h1 c1]
  cell[21] = v7;                                        // #4219:172:195 [L d1 h1 c1]
  win_v8 = win_v67[v70];                                // #4222:214:7 [L d1 h1 c1]
  win_v9 = win_v8;                                      // #4226:235:150 [L d1 h1 c1]
  fn_v10 = win_v9[v68];                                 // #4229:217:7 [L d1 h1 c1]
  v11 = KP(4232);                                       // #4233:105:233 [L d1 h1 c1]
  v71 = fn_v10.call(win_v9, v11);                       // #4306:22:138 [L d1 h1 c1]
  fn_v72 = clos;                                        // #4326:229:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v72 = its home register (H139 CLOS bind)
  v73 = "Oqyy0";                                        // #4346:69:233 [L d1 h1 c1]
  navigator_v12 = win_v67.navigator;                    // #4355:72:200 [L d1 h1 c1]
  v13 = navigator_v12.language;                         // #4360:255:200 [L d1 h1 c1]
  if (v13) {                                            // #4365:18:160 [L d1 h1 c1]
    v74 = v13;                                          // #4388:70:150 [L d1 h1 c1] +#4391:126:53
  } else {
    v14 = "";                                           // #4371:26:53 #4376:88:233 [-] /* never executed in any replay */
    v74 = "";                                           // #4380:229:150 [-] +#4383:97:53 /* never executed in any replay */
  }
  v7[v73] = v74;                                        // #4396:14:199 [L d1 h1 c1]
  v15 = "gXLg3";                                        // #4400:10:233 [L d1 h1 c1]
  navigator_v16 = win_v67.navigator;                    // #4409:57:200 [L d1 h1 c1]
  arr_v17 = navigator_v16.languages;                    // #4414:108:200 [L d1 h1 c1]
  v7.gXLg3 = navigator_v16.languages;                   // #4427:86:199 [L d1 h1 c1]
  v18 = "fBVa5";                                        // #4431:50:233 [L d1 h1 c1]
  arr_v19 = fn_v72();                                   // #4440:6:113 [L d1 h1 c1]
  v7.fBVa5 = arr_v19;                                   // #4444:8:199 [L d1 h1 c1]
  v20 = cell[21];                                       // #4448:83:236 [L d1 h1 c1]
  v21 = "vMfn7";                                        // #4451:123:233 [L d1 h1 c1]
  win_v22 = win_v67[v70];                               // #4460:41:7 [L d1 h1 c1]
  v23 = win_v22[KP(4463)];                              // #4464:156:200 [L d1 h1 c1]
  v24 = v23.bHAr2;                                      // #4469:3:200 [L d1 h1 c1]
  v20.vMfn7 = v24;                                      // #4478:81:199 [L d1 h1 c1]
  v75 = "-";                                            // #4482:1:233 [L d1 h1 c1]
  try {
    TP(tryStack, 4613, 217, callDepths);                           // #4487:166:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    intl_v25 = win_v67.Intl;                            // #4493:101:200 [L d1 h1 c1]
    fn_v26 = intl_v25.DateTimeFormat;                   // #4498:232:200 [L d1 h1 c1]
    v27 = undefined;                                    // #4516:252:233 [L d1 h1 c1]
    v28 = {};                                           // #4519:30:159 [L d1 h1 c1]
    v29 = "month";                                      // #4521:218:233 [L d1 h1 c1]
    v71 = "long";                                       // #4530:166:233 [L d1 h1 c1]
    v28.month = "long";                                 // #4538:40:199 [L d1 h1 c1]
    v30 = "timeZoneName";                               // #4542:60:233 [L d1 h1 c1]
    v71 = "long";                                       // #4558:0:233 [L d1 h1 c1]
    v28.timeZoneName = "long";                          // #4566:154:199 [L d1 h1 c1]
    dtf_v31 = new fn_v26(undefined, v28);               // #4570:30:1 [L d1 h1 c1]
    v32 = 630883200000;                                 // #4576:218:233 [L d1 h1 c1]
    v75 = dtf_v31.format(630883200000);                 // #4587:3:138 [L d1 h1 c1]
    v76 = tryStack.pop();                                    // #4606:114:124 [L d1 h1 c1] +#4609:250:53
  } catch (caught) {
    v33 = caught;                                         // #4614:162:150 [-] /* never executed in any replay */
    v34 = cell[21];                                     // #4617:5:236 [-] /* never executed in any replay */
    v76 = KP(m4619k5);                                  // #4620:229:233 [-] /* never executed in any replay */
    v35 = (win_v67)[KP(m4629k229)](v33);                // #4630:162:138 [-] /* never executed in any replay */
    v34[v76] = v35;                                     // #4649:211:210 [-] /* never executed in any replay */
  }
  v36 = cell[21];                                       // #4657:60:236 [L d1 h1 c1]
  v36.UnMvf4 = v75;                                     // #4660:81:142 [L d1 h1 c1]
  v71 = "-";                                            // #4670:1:233 [L d1 h1 c1]
  try {
    TP(tryStack, 4758, 35, callDepths);                            // #4675:166:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v76 = win_v67.Intl;                                 // #4681:101:200 [L d1 h1 c1]
    fn_v37 = v76.DisplayNames;                          // #4686:232:200 [L d1 h1 c1]
    v76 = undefined;                                    // #4702:252:233 [L d1 h1 c1]
    v38 = {};                                           // #4705:30:159 [L d1 h1 c1]
    v39 = "type";                                       // #4707:218:233 [L d1 h1 c1]
    v40 = "language";                                   // #4712:166:233 [L d1 h1 c1]
    v38.type = "language";                              // #4717:40:199 [L d1 h1 c1]
    displayNames_v41 = new fn_v37(v76, v38);            // #4721:244:1 [L d1 h1 c1]
    v76 = "eo-UA";                                      // #4727:216:233 [L d1 h1 c1]
    v71 = displayNames_v41.of(("eo-UA"));               // #4736:137:138 [L d1 h1 c1]
    v76 = tryStack.pop();                                    // #4751:96:124 [L d1 h1 c1] +#4754:176:53
  } catch (caught) {
    v42 = caught;                                         // #4759:68:150 [-] /* never executed in any replay */
    v43 = cell[21];                                     // #4762:159:236 [-] /* never executed in any replay */
    v76 = KP(m4764k159);                                // #4765:151:233 [-] /* never executed in any replay */
    v44 = (win_v67)[KP(m4773k151)](v42);                // #4774:12:138 [-] /* never executed in any replay */
    v43[v76] = v44;                                     // #4793:21:210 [-] /* never executed in any replay */
  }
  v45 = cell[21];                                       // #4801:62:236 [L d1 h1 c1]
  v45.HlWP7 = v71;                                      // #4804:203:142 [L d1 h1 c1]
  v75 = "-";                                            // #4813:19:233 [L d1 h1 c1]
  try {
    TP(tryStack, 5039, 240, callDepths);                           // #4818:240:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    v76 = win_v67.Intl;                                 // #4824:7:200 [L d1 h1 c1]
    fn_v46 = v76.ListFormat;                            // #4829:130:200 [L d1 h1 c1]
    v76 = undefined;                                    // #4843:174:233 [L d1 h1 c1]
    v47 = {};                                           // #4846:136:159 [L d1 h1 c1]
    v48 = "style";                                      // #4848:28:233 [L d1 h1 c1]
    v49 = "long";                                       // #4853:96:233 [L d1 h1 c1]
    v47.style = "long";                                 // #4861:122:199 [L d1 h1 c1]
    v50 = "type";                                       // #4865:198:233 [L d1 h1 c1]
    v51 = "disjunction";                                // #4870:226:233 [L d1 h1 c1]
    v47.type = "disjunction";                           // #4885:116:199 [L d1 h1 c1]
    listFormat_v52 = new fn_v46(v76, v47);              // #4889:16:1 [L d1 h1 c1]
    fn_v53 = listFormat_v52.format;                     // #4895:167:200 [L d1 h1 c1]
    v76 = "%6d%74%79%61%33%41%53%44%4c%4f%50%38%41%74%65%6c%68%30";  // #4900:127:233 [L d1 h1 c1]
    v54 = cell[19][KP(m4957k127)](v76);                 // #4958:44:66 [L d1 h1 c1]
    v55 = "A";                                          // #4989:48:233 [L d1 h1 c1]
    v76 = v54.split("A");                               // #4994:129:138 [L d1 h1 c1]
    v75 = fn_v53.call(listFormat_v52, v76);             // #5012:206:138 [L d1 h1 c1]
    v76 = tryStack.pop();                                    // #5032:209:124 [L d1 h1 c1] +#5035:157:53
  } catch (caught) {
    v56 = caught;                                         // #5040:29:150 [-] /* never executed in any replay */
    v57 = cell[21];                                     // #5043:84:236 [-] /* never executed in any replay */
    v76 = KP(m5045k84);                                 // #5046:184:233 [-] /* never executed in any replay */
    v58 = (win_v67)[KP(m5055k184)](v56);                // #5056:233:138 [-] /* never executed in any replay */
    v57[v76] = v58;                                     // #5075:190:210 [-] /* never executed in any replay */
  }
  v59 = cell[21];                                       // #5083:146:236 [L d1 h1 c1]
  v59.CrRYD0 = v75;                                     // #5086:207:142 [L d1 h1 c1]
  v76 = "-";                                            // #5096:7:233 [L d1 h1 c1]
  try {
    TP(tryStack, 5233, 191, callDepths);                           // #5101:20:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    intl_v60 = win_v67.Intl;                            // #5107:155:200 [L d1 h1 c1]
    fn_v61 = intl_v60.NumberFormat;                     // #5112:198:200 [L d1 h1 c1]
    v62 = undefined;                                    // #5128:226:233 [L d1 h1 c1]
    v77 = {};                                           // #5131:236:159 [L d1 h1 c1]
    v63 = "notation";                                   // #5133:240:233 [L d1 h1 c1]
    v71 = "compact";                                    // #5145:228:233 [L d1 h1 c1]
    v77.notation = "compact";                           // #5156:238:199 [L d1 h1 c1]
    v78 = "compactDisplay";                             // #5160:106:233 [L d1 h1 c1]
    v71 = "long";                                       // #5178:246:233 [L d1 h1 c1]
    v77.compactDisplay = "long";                        // #5186:56:199 [L d1 h1 c1]
    nf_v79 = new fn_v61(undefined, v77);                // #5190:196:1 [L d1 h1 c1]
    v64 = 21000000000000000;                            // #5196:104:233 [L d1 h1 c1]
    v76 = nf_v79.format(21000000000000000);             // #5207:217:138 [L d1 h1 c1]
    arr_v65 = tryStack.pop();                                // #5226:112:124 [L d1 h1 c1] +#5229:128:53
  } catch (caught) {
    v80 = caught;                                         // #5234:112:150 [-] /* never executed in any replay */
    v66 = cell[21];                                     // #5237:27:236 [-] /* never executed in any replay */
    v81 = KP(m5239k27);                                 // #5240:35:233 [-] /* never executed in any replay */
    v82 = (win_v67)[KP(m5248k35)](v80);                 // #5249:104:138 [-] /* never executed in any replay */
    v66[v81] = v82;                                     // #5268:1:210 [-] /* never executed in any replay */
  }
  v83 = cell[21];                                       // #5276:98:236 [L d1 h1 c1]
  v83.tvDL8 = v76;                                      // #5279:95:142 [L d1 h1 c1]
  v76 = undefined;                                      // #5288:87:233 [L d1 h1 c1]
  return v76;                                           // #5291:75:245 [L d1 h1 c1]
}