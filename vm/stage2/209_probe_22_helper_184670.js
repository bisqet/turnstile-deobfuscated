function probe_22_helper_184670(win_v14 /* r70 */, arr_v15 /* r227 */) { // entry L184670_199; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 42 register webs used only inside this fn (no live-in, cross-call or table-made def; 29 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r199 */, v2 /* r205 */, math_v3 /* r198 */, v4 /* r198 */, v5 /* r199 */, v6 /* r196 */, v7 /* r198 */, v8 /* r198 */, v9 /* r198 */, v10 /* r196 */;
  let v11 /* r198 */, v12 /* r199 */, math_v13 /* r202 */, arr_v16 /* r247 */, v17 /* r204 */, v18 /* r202 */, v19 /* r240 */, v20 /* r246 */, v21 /* r238 */, v22 /* r242 */;
  let v23 /* r244 */, v24 /* r245 */, v25 /* r254 */, v26 /* r193 */, v27 /* r195 */, v28 /* r199 */, math_v29 /* r192 */, fn_v30 /* r253 */, fn_v31 /* r250 */, v32 /* r252 */;
  let v33 /* r192 */, v34 /* r196 */, v35 /* r198 */, v36 /* r196 */, v37 /* r198 */, v38 /* r196 */, v39 /* r202 */, math_v40 /* r199 */, v41 /* r202 */, v42 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Math: math_v3 66, math_v13 27, math_v29 66, math_v40 27
  //   Window: win_v14 27
  //   Array: arr_v15 27, arr_v16 27
  //   Function: fn_v30 66, fn_v31 66
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  arr_v16 = arr_v15;                                    // #184671:88:150 [L d9 h9 c9]
  v1 = undefined;                                       // #184674:200:53 #184684:191:233 [L d9 h9 c9]
  v2 = 0;                                               // #184687:218:72 [L d9 h9 c9]
  v17 = 0;                                              // #184690:73:72 [L d9 h9 c9]
  v18 = false;                                          // #184693:25:233 [L d9 h9 c9]
  v19 = (arr_v15).length;                               // #184696:204:200 [L d9 h9 c9]
  v20 = 0;                                              // #184701:243:72 [L d9 h9 c9]
  v21 = 1;                                              // #184704:62:72 [L d9 h9 c9]
  v22 = "Math";                                         // #184707:122:233 [L d9 h9 c9]
  v23 = "abs";                                          // #184712:198:233 [L d9 h9 c9]
  v24 = "Number";                                       // #184719:226:233 [L d9 h9 c9]
  v25 = Infinity;                                       // #184729:142:233 [L d9 h9 c9]
  v26 = 0;                                              // #184732:45:72 [L d9 h9 c9]
  v27 = 0;                                              // #184735:16:72 [L d9 h9 c9] +#184738:160:53
  for (;;) {
    v28 = v20 < v19; if (!(v20 < v19)) {                // #184751:140:186 [L d31 h31 c31]
      if (v18) {                                        // #184977:173:160 [L d9 h9 c9]
        v42 = Infinity;                                 // #185051:157:233 [-] +#185054:57:53 /* never executed in any replay */
      } else {
        v39 = Infinity;                                 // #184983:9:53 #184988:71:233 [L d9 h9 c9]
        if (v17 === v39) {                              // #184991:119:161 [L d9 h9 c9]
          v42 = Infinity;                               // #185038:151:233 [-] +#185041:203:53 /* never executed in any replay */
        } else {
          math_v13 = win_v14.Math;                      // #184999:43:53 #185004:53:200 [L d9 h9 c9]
          math_v40 = math_v13;                          // #185009:142:150 [L d9 h9 c9]
          v41 = math_v40.sqrt(v2);                      // #185012:231:138 [L d9 h9 c9]
          v42 = v17 * v41;                              // #185029:83:13 [L d9 h9 c9] +#185033:151:53
        }
      }
      return v42;                                       // #185059:222:245 [L d9 h9 c9]
    }
    math_v3 = win_v14[v22];                             // #184769:48:7 [L d22 h22 c22]
    math_v29 = math_v3;                                 // #184773:93:150 [L d22 h22 c22]
    fn_v30 = math_v29[v23];                             // #184776:3:7 [L d22 h22 c22]
    fn_v31 = win_v14[v24];                              // #184780:145:7 [L d22 h22 c22]
    v32 = arr_v16[v20];                                 // #184784:103:7 [L d22 h22 c22]
    v4 = fn_v31.call(win_v14, v32);                     // #184788:156:138 [L d22 h22 c22]
    v5 = fn_v30.call(math_v29, v4);                     // #184808:61:138 [L d22 h22 c22]
    v6 = v5 === v25;                                    // #184825:53:65 [L d22 h22 c22]
    if (v6) {                                           // #184829:240:160 [L d22 h22 c22]
      v18 = true;                                       // #184848:94:233 [-] /* never executed in any replay */
      v8 = true;                                        // #184851:83:150 [-] +#184854:151:53 /* never executed in any replay */
    } else {
      v7 = v6;                                          // #184835:0:53 #184840:151:150 [L d22 h22 c22] +#184843:203:53
    }
    v9 = v17 < v5;                                      // #184859:23:98 [L d22 h22 c22]
    if (v9) {                                           // #184863:202:160 [L d22 h22 c22]
      v10 = v17 / v5;                                   // #184874:222:105 [L d21 h21 c21]
      v33 = v17 / v5;                                   // #184878:26:105 [L d21 h21 c21]
      v11 = v10 * v33;                                  // #184882:122:13 [L d21 h21 c21]
      v2 = v2 * (v10 * v33);                            // #184886:90:13 [L d21 h21 c21]
      v17 = v5;                                         // #184890:95:150 [L d21 h21 c21] +#184893:115:53
    } else {
      // #184869:242:53 [L d1 h1 c1]
    }
    v34 = v5 === v26;                                   // #184898:16:65 [L d22 h22 c22]
    if (v34) {                                          // #184902:31:160 [L d22 h22 c22]
      v36 = v17 === v27;                                // #184921:229:65 [-] /* never executed in any replay */
      v35 = v36;                                        // #184925:126:150 [-] +#184928:214:53 /* never executed in any replay */
    } else {
      v35 = v34;                                        // #184908:51:53 #184913:100:150 [L d22 h22 c22] +#184916:164:53
    }
    if (v35) {                                          // #184933:190:160 [L d22 h22 c22]
      v12 = 0;                                          // #184961:174:72 [-] +#184964:70:53 /* never executed in any replay */
    } else {
      v37 = v5 / v17;                                   // #184939:22:53 #184944:119:105 [L d22 h22 c22]
      v38 = v5 / v17;                                   // #184948:143:105 [L d22 h22 c22]
      v12 = v37 * v38;                                  // #184952:91:13 [L d22 h22 c22] +#184956:127:53
    }
    v2 = v2 + v12;                                      // #184969:208:180 [L d22 h22 c22]
    v20 = v20 + v21;                                    // #184743:222:180 [L d22 h22 c22]
  }
}