function fn_navigator_cb_30706() { // entry L30706_96; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 38 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139: 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r196 */, v2 /* r204 */, v3 /* r199 */, v4 /* r205 */, v5 /* r204 */, v6 /* r202 */, v7 /* r199 */, v8 /* r205 */, v9 /* r196 */, v10 /* r193 */;
  let v11 /* r195 */, v12 /* r199 */, v13 /* r205 */, arr_v14 /* r205 */, v15 /* r204 */, v16 /* r205 */, arr_v17 /* r205 */, v18 /* r204 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r204 */, arr_v22 /* r202 */, v23 /* r205 */, v24 /* r204 */, arr_v25 /* r202 */, fn_v26 /* r205 */, v27 /* r205 */, v28 /* r202 */, v29 /* r205 */, arr_v30 /* r198 */;
  let fn_v31 /* r193 */, arr_v32 /* r192 */, v33 /* r204 */, v34 /* r199 */, v35 /* r195 */, v36 /* r196 */, v37 /* r202 */, v38 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v14 38, arr_v17 37, arr_v22 31, arr_v25 2, arr_v30 2, arr_v32 2
  //   Function: fn_v26 2, fn_v31 2
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 1 dead register writes dropped, 3 constants propagated (3 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #30707:176:53 #30717:150:233 [L d1 h1]
  v2 = undefined;                                       // #30720:114:233 #30723:222:233 [L d1 h1]
  v3 = undefined;                                       // #30726:154:233 [L d1 h1]
  arr_v30 = [];                                         // #30729:96:107 [L d1 h1]
  v4 = cell[35];                                        // #30731:75:236 [L d1 h1]
  if (v4) {                                             // #30734:46:160 [L d1 h1]
    v6 = typeof v4;                                     // #30753:110:193 [L d1 h1]
    v7 = "object";                                      // #30756:234:233 [L d1 h1]
    v8 = v6 === ("object");                             // #30766:110:65 [L d1 h1]
    v5 = v8;                                            // #30770:35:150 [L d1 h1] +#30773:39:53
  } else {
    v5 = v4;                                            // #30740:198:53 #30745:129:150 [-] +#30748:141:53 /* never executed in any replay */
  }
  L30910_116: {
    if (v5) {                                           // #30778:160:160 [L d1 h1]
      v9 = 0;                                           // #30789:131:72 [L h1]
      v10 = 1;                                          // #30792:142:72 [L h1]
      v11 = "length";                                   // #30795:138:233 [L h1]
      v12 = "number";                                   // #30800:150:233 [L h1] +#30805:142:53
      while ((arr_v14 = cell[35], v15 = arr_v14.length, v16 = v9 < v15, v9 < v15)) {  // #30820:226:236 | #30823:180:7 | #30827:101:186 [L h38]
        arr_v17 = cell[35];                             // #30845:46:236 [L h37]
        v18 = arr_v17[v9];                              // #30848:208:7 [L h37]
        v19 = typeof v18;                               // #30852:188:193 [L h37]
        v20 = "number" === v19;                         // #30855:120:65 [L h37]
        if (v20) {                                      // #30859:231:160 [L h37]
          arr_v22 = arr_v30;                            // #30878:190:150 [L h31]
          v23 = arr_v22.push(v18);                      // #30881:87:138 [L h31]
          v24 = v23;                                    // #30898:168:150 [L h31] +#30901:216:53
        } else {
          v21 = v20;                                    // #30865:219:53 #30870:27:150 [L h6] +#30873:63:53
        }
        v13 = v9; v9 = v9 + 1;                          // #30810:75:48 [L h37]
      }
      break L30910_116;
    } else {
      // #30784:240:53 [L d1]
    }
  }
  arr_v25 = arr_v30;                                    // #30911:145:150 [L d1 h1]
  fn_v31 = arr_v30.sort;                                // #30914:100:200 [L d1 h1]
  fn_v26 = clos;                                        // #30922:123:216 [L d1 h1]  closure creation (operands from the byte stream); then fn_v26 = its home register (H139 CLOS bind)
  arr_v32 = fn_v31.call(arr_v25, fn_v26);               // #30933:96:138 [L d1 h1]
  v33 = 0;                                              // #30951:55:72 [L d1 h1]
  v34 = 0;                                              // #30954:114:72 [L d1 h1]
  v35 = 1;                                              // #30957:129:72 [L d1 h1]
  v36 = "length";                                       // #30960:113:233 [L d1 h1] +#30965:189:53
  while ((v37 = arr_v30[v36], v38 = v34 < v37, v34 < v37)) {  // #30980:218:7 | #30984:115:186 [L d1 h32]
    v28 = arr_v30[v34];                                 // #31002:96:7 [L h31]
    v29 = v28 + v34;                                    // #31006:245:222 [L h31]
    v33 = v29 ^ v33;                                    // #31010:30:166 [L h31]
    v27 = v34; v34 = v34 + v35;                         // #31014:246:53 #30970:42:48 [L h31]
  }
  return v33;                                           // #31019:148:245 [L d1 h1]
}