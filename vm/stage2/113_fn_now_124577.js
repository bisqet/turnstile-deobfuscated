function fn_now_124577(win_v40 /* r70 */, v41 /* r227 */) { // entry L124577_236; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 47 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 4 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r196 */, v4 /* r198 */, v5 /* r204 */, v6 /* r202 */, v7 /* r196 */, v8 /* r198 */, v9 /* r199 */, v10 /* r198 */;
  let v11 /* r199 */, v12 /* r202 */, v13 /* r202 */, v14 /* r205 */, v15 /* r198 */, v16 /* r199 */, math_v17 /* r205 */, math_v18 /* r199 */, fn_v19 /* r198 */, v20 /* r205 */;
  let v21 /* r196 */, fn_v22 /* r202 */, v23 /* r204 */, v24 /* r202 */, v25 /* r204 */, v26 /* r205 */, promise_v27 /* r202 */, fn_v28 /* r199 */, fn_v29 /* r204 */, fn_v30 /* r205 */;
  let fn_v31 /* r204 */, fn_v32 /* r198 */, fn_v33 /* r205 */, fn_v34 /* r205 */, fn_v35 /* r204 */, fn_v36 /* r199 */, arr_v37 /* r205 */, v38 /* r202 */, v39 /* r202 */, promise_v42 /* r196 */;
  let promise_v43 /* r198 */, promise_v44 /* r202 */, fn_v45 /* r199 */, fn_v46 /* r204 */, promise_v47 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v17 9, math_v18 9
  //   Function: fn_v19 9, fn_v22 9, fn_v28 33, fn_v29 33, fn_v30 33, fn_v31 33, fn_v32 33, fn_v33 33
  //   Function: fn_v34 33, fn_v35 33, fn_v36 33, fn_v45 33, fn_v46 33
  //   Promise: promise_v27 33, promise_v42 33, promise_v43 33, promise_v44 33, promise_v47 33
  //   Array: arr_v37 33
  //   Window: win_v40 33
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 1 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = v41;                                             // #124578:41:150 [L d11 h11 c11]
  NC(15);                                               // #124581:149:53 #124586:69:211 [L d11 h11 c11]
  cell[15] = v1;                                        // #124589:23:195 [L d11 h11 c11]
  NC(16, 18);                                           // #124592:75:53 #124597:43:211 [L d11 h11 c11]
  v2 = undefined;                                       // #124601:243:233 #124604:155:233 [L d11 h11 c11]
  v3 = undefined;                                       // #124607:163:233 [L d11 h11 c11]
  v4 = undefined;                                       // #124610:139:233 [L d11 h11 c11]
  v5 = v1.AzXDU3;                                       // #124613:246:200 [L d11 h11 c11]
  cell[16] = v5;                                        // #124618:68:195 [L d11 h11 c11]
  v6 = typeof v5;                                       // #124621:96:193 [L d11 h11 c11]
  v7 = 0;                                               // #124624:55:72 [L d11 h11 c11]
  v8 = typeof (0);                                      // #124627:71:193 [L d11 h11 c11]
  v9 = !(v6 === v8);                                    // #124630:151:65 #124634:36:130 [L d11 h11 c11]
  if (v9) {                                             // #124637:227:160 [L d11 h11 c11]
    v12 = v9;                                           // #124663:118:150 [-] +#124666:238:53 /* never executed in any replay */
  } else {
    v10 = 0;                                            // #124643:231:53 #124648:126:72 [L d11 h11 c11]
    v11 = (0) >= v5;                                    // #124651:75:206 [L d11 h11 c11]
    v12 = v11;                                          // #124655:204:150 [L d11 h11 c11] +#124658:108:53
  }
  if (v12) {                                            // #124671:55:160 [L d11 h11 c11]
    v5 = 2000;                                          // #124682:100:233 [-] /* never executed in any replay */
    cell[16] = 2000;                                    // #124687:122:195 [-] +#124690:226:53 /* never executed in any replay */
  } else {
    // #124677:235:53 [L d11 h11 c11]
  }
  v13 = v1.hwqjX1;                                      // #124695:124:200 [L d11 h11 c11]
  v14 = typeof v13;                                     // #124705:184:193 [L d11 h11 c11]
  v15 = 0;                                              // #124708:47:72 [L d11 h11 c11]
  v16 = typeof (0);                                     // #124711:95:193 [L d11 h11 c11]
  if (v14 === v16) {                                    // #124714:47:161 [L d11 h11 c11]
    math_v17 = win_v40.Math;                            // #124731:150:200 [L d3 h3 c3]
    math_v18 = math_v17;                                // #124736:171:150 [L d3 h3 c3]
    fn_v19 = math_v17.max;                              // #124739:150:200 [L d3 h3 c3]
    v20 = 0;                                            // #124746:21:72 [L d3 h3 c3]
    v21 = v13 + v5;                                     // #124749:22:222 [L d3 h3 c3]
    fn_v22 = win_v40.Date;                              // #124753:21:200 [L d3 h3 c3]
    v23 = fn_v22.now();                                 // #124758:18:138 [L d3 h3 c3]
    v24 = v21 - v23;                                    // #124773:87:54 [L d3 h3 c3]
    v25 = fn_v19.call(math_v18, 0, v24);                // #124777:204:138 [L d3 h3 c3]
    cell[16] = v25;                                     // #124795:66:195 [L d3 h3 c3] +#124798:138:53
  }
  v26 = cell[15];                                       // #124803:82:236 [L d11 h11 c11]
  promise_v27 = cell[15].aJBc6;                         // #124806:97:200 [L d11 h11 c11]
  fn_v28 = (cell[15].aJBc6).then;                       // #124811:244:200 [L d11 h11 c11]
  fn_v29 = clos;                                        // #124816:203:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v29 = its home register (H139 CLOS bind)
  fn_v30 = fn_v29;                                      // #124829:76:150 [L d11 h11 c11]
  fn_v31 = clos;                                        // #124832:195:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v31 = its home register (H139 CLOS bind)
  promise_v42 = fn_v28.call(promise_v27, fn_v30, fn_v31);  // #124844:136:138 [L d11 h11 c11]
  fn_v32 = win_v40.Promise;                             // #124863:63:200 [L d11 h11 c11]
  fn_v33 = clos;                                        // #124868:170:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v33 = its home register (H139 CLOS bind)
  promise_v43 = new fn_v32(fn_v33);                     // #124880:238:1 [L d11 h11 c11]
  fn_v34 = win_v40.Promise;                             // #124885:141:200 [L d11 h11 c11]
  fn_v35 = fn_v34;                                      // #124890:134:150 [L d11 h11 c11]
  fn_v36 = fn_v34.race;                                 // #124893:197:200 [L d11 h11 c11]
  arr_v37 = [];                                         // #124901:159:107 [L d11 h11 c11]
  v38 = 0; arr_v37[0] = promise_v42;                    // #124903:68:26 [L d11 h11 c11]
  v39 = 1; arr_v37[1] = promise_v43;                    // #124908:149:26 [L d11 h11 c11]
  promise_v44 = fn_v36.call(fn_v35, arr_v37);           // #124913:146:138 [L d11 h11 c11]
  fn_v45 = promise_v44.then;                            // #124931:161:200 [L d11 h11 c11]
  fn_v46 = clos;                                        // #124936:4:216 [L d11 h11 c11]  closure creation (operands from the byte stream); then fn_v46 = its home register (H139 CLOS bind)
  promise_v47 = fn_v45.call(promise_v44, fn_v46);       // #124948:5:138 [L d11 h11 c11]
  return promise_v47;                                   // #124966:193:245 [L d11 h11 c11]
}