function fn_FontFace_16737(win_v21 /* r70 */, v22 /* r227 */) { // entry L16737_148; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 44 register webs used only inside this fn (no live-in, cross-call or table-made def; 24 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r204 */, v2 /* r205 */, fn_v3 /* r204 */, arr_v4 /* r205 */, v5 /* r202 */, v6 /* r202 */, v7 /* r202 */, v8 /* r202 */, v9 /* r202 */, v10 /* r202 */;
  let v11 /* r202 */, v12 /* r202 */, v13 /* r202 */, v14 /* r202 */, u8_v15 /* r204 */, fn_v16 /* r205 */, fontFace_v17 /* r205 */, promise_v18 /* r204 */, fn_v19 /* r205 */, v20 /* r205 */;
  let v23 /* r198 */, v24 /* r202 */, v25 /* r204 */, v26 /* r205 */, v27 /* r199 */, v28 /* r199 */, v29 /* r199 */, v30 /* r199 */, v31 /* r199 */, v32 /* r199 */;
  let v33 /* r199 */, v34 /* r199 */, v35 /* r199 */, v36 /* r199 */, fn_v37 /* r199 */, promise_v38 /* r202 */, fn_v39 /* r199 */, fn_v40 /* r204 */, promise_v41 /* r205 */, v42 /* r202 */;
  let v43 /* r204 */, v44 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v3 3, fn_v16 3, fn_v19 3, fn_v37 3, fn_v39 3, fn_v40 3
  //   Array: arr_v4 3
  //   Uint8Array: u8_v15 3
  //   FontFace: fontFace_v17 3
  //   Promise: promise_v18 3, promise_v38 3, promise_v41 3
  //   Window: win_v21 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 3 webs kept as registers (retOut 3)
  v23 = v22;                                            // #16738:49:150 [L d1 h1 c1]
  v1 = undefined;                                       // #16741:125:53 #16751:211:233 [L d1 h1 c1]
  v2 = undefined;                                       // #16754:251:233 [L d1 h1 c1]
  if (v23) {                                            // #16757:30:160 [L d1 h1 c1]
    try {
      TP(tryStack, 16998, 200, callDepths);                        // #16798:69:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
      fn_v3 = win_v21.Uint8Array;                       // #16804:72:200 [L d1 h1 c1]
      arr_v4 = [];                                      // #16809:214:107 [L d1 h1 c1]
      v27 = 119;                                        // #16811:85:72 [L d1 h1 c1]
      v5 = 0; arr_v4[0] = 119;                          // #16814:162:26 [L d1 h1 c1]
      v28 = 79;                                         // #16819:241:72 [L d1 h1 c1]
      v6 = 1; arr_v4[1] = 79;                           // #16822:206:26 [L d1 h1 c1]
      v29 = 70;                                         // #16827:109:72 [L d1 h1 c1]
      v7 = 2; arr_v4[2] = 70;                           // #16830:90:26 [L d1 h1 c1]
      v30 = 50;                                         // #16835:201:72 [L d1 h1 c1]
      v8 = 3; arr_v4[3] = 50;                           // #16838:70:26 [L d1 h1 c1]
      v31 = 0;                                          // #16843:5:72 [L d1 h1 c1]
      v9 = 4; arr_v4[4] = 0;                            // #16846:146:26 [L d1 h1 c1]
      v32 = 1;                                          // #16851:33:72 [L d1 h1 c1]
      v10 = 5; arr_v4[5] = 1;                           // #16854:62:26 [L d1 h1 c1]
      v33 = 0;                                          // #16859:29:72 [L d1 h1 c1]
      v11 = 6; arr_v4[6] = 0;                           // #16862:74:26 [L d1 h1 c1]
      v34 = 0;                                          // #16867:249:72 [L d1 h1 c1]
      v12 = 7; arr_v4[7] = 0;                           // #16870:182:26 [L d1 h1 c1]
      v35 = 0;                                          // #16875:181:72 [L d1 h1 c1]
      v13 = 8; arr_v4[8] = 0;                           // #16878:130:26 [L d1 h1 c1]
      v36 = 0;                                          // #16883:81:72 [L d1 h1 c1]
      v14 = 9; arr_v4[9] = 0;                           // #16886:174:26 [L d1 h1 c1]
      u8_v15 = new fn_v3(arr_v4);                       // #16891:226:1 [L d1 h1 c1]
      fn_v16 = win_v21.FontFace;                        // #16896:177:200 [L d1 h1 c1]
      fontFace_v17 = new fn_v16(v23, u8_v15);           // #16901:153:1 [L d1 h1 c1]
      promise_v18 = fontFace_v17.load();                // #16907:134:138 [L d1 h1 c1]
      fn_v37 = promise_v18.then;                        // #16923:197:200 [L d1 h1 c1]
      fn_v19 = clos;                                    // #16928:152:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v19 = its home register (H139 CLOS bind)
      promise_v38 = fn_v37.call(promise_v18, fn_v19);   // #16937:73:138 [L d1 h1 c1]
      fn_v39 = promise_v38.catch;                       // #16955:60:200 [L d1 h1 c1]
      fn_v40 = clos;                                    // #16960:243:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v40 = its home register (H139 CLOS bind)
      promise_v41 = fn_v39.call(promise_v38, fn_v40);   // #16970:248:138 [L d1 h1 c1]
      return promise_v41;                               // #16989:168:245 [L d1 h1 c1]
    } catch (caught) {
      v20 = caught;                                       // #16999:149:150 [-] /* never executed in any replay */
      v42 = win_v21[KP(m17001k149)];                    // #17002:88:200 [-] /* never executed in any replay */
      v43 = false;                                      // #17007:172:233 [-] /* never executed in any replay */
      v44 = (v42)[KP(m17009k172)](v43);                 // #17010:13:138 [-] /* never executed in any replay */
      return v44;                                       // #17030:169:245 [-] /* never executed in any replay */
    }
  } else {
    v24 = win_v21.Promise;                              // #16763:246:53 #16768:190:200 [-] /* never executed in any replay */
    v25 = false;                                        // #16773:250:233 [-] /* never executed in any replay */
    v26 = v24.resolve(v25);                             // #16776:163:138 [-] /* never executed in any replay */
    return v26;                                         // #16796:103:245 [-] /* never executed in any replay */
  }
}