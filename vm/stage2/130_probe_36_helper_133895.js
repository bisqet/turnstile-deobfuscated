function probe_36_helper_133895(v13 /* r70 */, v14 /* r227 */) { // entry L133895_96; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 24 register webs used only inside this fn (no live-in, cross-call or table-made def; 12 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, v2 /* r202 */, v3 /* r205 */, v4 /* r199 */, v5 /* r205 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, v9 /* r202 */, v10 /* r205 */;
  let v11 /* r205 */, v12 /* r205 */, v15 /* r204 */, v16 /* r205 */, v17 /* r199 */, v18 /* r198 */, v19 /* r199 */, v20 /* r202 */, v21 /* r202 */, v22 /* r199 */;
  let v23 /* r204 */, v24 /* r205 */;
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v15 = v14;                                            // #133896:205:150 [-] /* never executed in any replay */
  v1 = cell[23];                                        // #133899:169:53 #133909:223:236 [-] /* never executed in any replay */
  if (v1) {                                             // #133912:114:160 [-] /* never executed in any replay */
    v16 = undefined;                                    // #133923:81:233 [-] /* never executed in any replay */
    return v16;                                         // #133926:221:245 [-] /* never executed in any replay */
  }
  v2 = v13.clearTimeout;                                // #133918:250:53 #133928:46:200 [-] /* never executed in any replay */
  v3 = cell[25];                                        // #133933:97:236 [-] /* never executed in any replay */
  v4 = v2.call(v13, v3);                                // #133936:46:138 [-] /* never executed in any replay */
  v5 = cell[24][KP(m133961k46)]();                      // #133962:223:66 [-] /* never executed in any replay */
  v6 = v15.data;                                        // #133983:250:200 [-] /* never executed in any replay */
  v7 = v6.PABx8;                                        // #133988:105:200 [-] /* never executed in any replay */
  v17 = undefined;                                      // #133997:185:233 [-] /* never executed in any replay */
  v8 = v6.PABx8 === undefined;                          // #134000:193:65 [-] /* never executed in any replay */
  if (!(v8)) {                                          // #134004:76:160 [-] /* never executed in any replay */
    v9 = cell[17];                                      // #134010:236:53 #134015:41:236 [-] /* never executed in any replay */
    v10 = "PABx8";                                      // #134018:121:233 [-] /* never executed in any replay */
    v18 = v15.data;                                     // #134027:172:200 [-] /* never executed in any replay */
    v19 = v18.PABx8;                                    // #134032:211:200 [-] /* never executed in any replay */
    v9.PABx8 = v18.PABx8;                               // #134041:128:210 [-] /* never executed in any replay */
  }
  v20 = v15.data;                                       // #134049:22:200 [-] /* never executed in any replay */
  v11 = v20.uFSgq2;                                     // #134054:21:200 [-] /* never executed in any replay */
  if (v11) {                                            // #134059:80:160 [-] /* never executed in any replay */
    v21 = cell[17];                                     // #134070:170:236 [-] /* never executed in any replay */
    v12 = "uFSgq2";                                     // #134073:54:233 [-] /* never executed in any replay */
    v22 = v15.data;                                     // #134078:181:200 [-] /* never executed in any replay */
    v23 = v22.uFSgq2;                                   // #134083:248:200 [-] /* never executed in any replay */
    v21.uFSgq2 = v23;                                   // #134088:81:210 [-] /* never executed in any replay */
  } else {
    // #134065:224:53 [-] /* never executed in any replay */
  }
  r205 = cell[29]();                                    // #134096:78:201 [-]  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  v24 = undefined;                                      // #134100:74:233 [-] /* never executed in any replay */
  return v24;                                           // #134103:50:245 [-] /* never executed in any replay */
}