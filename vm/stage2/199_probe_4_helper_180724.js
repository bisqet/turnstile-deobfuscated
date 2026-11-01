function probe_4_helper_180724(win_v10 /* r70 */, v11 /* r213 */, msg_v12 /* r227 */) { // entry L180724_101; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 26 register webs used only inside this fn (no live-in, cross-call or table-made def; 17 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let msg_v1 /* r205 */, v2 /* r205 */, worker_v3 /* r204 */, fn_v4 /* r204 */, v5 /* r205 */, v6 /* r205 */, fn_v7 /* r205 */, fn_v8 /* r204 */, v9 /* r199 */, v13 /* r198 */;
  let v14 /* r204 */, v15 /* r202 */, v16 /* r199 */, v17 /* r204 */, v18 /* r205 */, worker_v19 /* r199 */, fn_v20 /* r202 */, v21 /* r196 */, v22 /* r204 */, v23 /* r202 */;
  let err_v24 /* r204 */, v25 /* r199 */, v26 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   MessageEvent: msg_v1 3, msg_v12 3
  //   Worker: worker_v3 3, worker_v19 3
  //   Function: fn_v4 3, fn_v7 3, fn_v8 3, fn_v20 3
  //   Window: win_v10 3
  //   Error: err_v24 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  msg_v1 = msg_v12;                                     // #180725:254:150 [L d1 h1 c1]
  v13 = msg_v1.data;                                    // #180728:86:53 #180738:235:200 [L d1 h1 c1]
  v14 = !v13;                                           // #180743:40:130 [L d1 h1 c1]
  if (v14) {                                            // #180746:215:160 [L d1 h1 c1]
    v2 = v14;                                           // #180784:70:150 [-] +#180787:126:53 /* never executed in any replay */
  } else {
    v15 = v13.TXMF7;                                    // #180752:11:53 #180757:246:200 [L d1 h1 c1]
    v16 = 1;                                            // #180766:245:72 [L d1 h1 c1]
    v17 = !(v15 === 1);                                 // #180769:13:65 #180773:66:130 [L d1 h1 c1]
    v2 = v17;                                           // #180776:167:150 [L d1 h1 c1] +#180779:155:53
  }
  if (v2) {                                             // #180792:184:160 [L d1 h1 c1]
    v18 = undefined;                                    // #180803:228:233 [-] /* never executed in any replay */
    return v18;                                         // #180806:228:245 [-] /* never executed in any replay */
  }
  worker_v3 = cell[21];                                 // #180798:168:53 #180808:113:236 [L d1 h1 c1]
  worker_v19 = cell[21];                                // #180811:218:150 [L d1 h1 c1]
  fn_v4 = cell[21].removeEventListener;                 // #180814:201:200 [L d1 h1 c1]
  v5 = "message";                                       // #180819:153:233 [L d1 h1 c1]
  fn_v20 = cell[27];                                    // #180824:224:236 [L d1 h1 c1]
  v21 = fn_v4.call(worker_v19, "message", fn_v20);      // #180827:113:138 [L d1 h1 c1]
  v6 = v13.pcrmO0;                                      // #180861:196:200 [L d1 h1 c1]
  v22 = undefined;                                      // #180871:104:233 [L d1 h1 c1]
  if (v6 === v22) {                                     // #180874:84:161 [L d1 h1 c1]
    r205 = cell[25](v13);                               // #180891:160:22 [-] +#180895:240:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  } else {
    fn_v7 = cell[26];                                   // #180900:59:236 [L d1 h1 c1]
    v23 = undefined;                                    // #180903:195:233 [L d1 h1 c1]
    fn_v8 = win_v10[v11];                               // #180906:81:7 [L d1 h1 c1]
    v9 = v13.pcrmO0;                                    // #180910:36:200 [L d1 h1 c1]
    err_v24 = new fn_v8(v9);                            // #180920:0:1 [L d1 h1 c1]
    v25 = MC(v23, fn_v7, err_v24);                      // #180925:89:114 [L d1 h1 c1] +#180930:5:53
  }
  v26 = undefined;                                      // #180935:17:233 [L d1 h1 c1]
  return v26;                                           // #180938:157:245 [L d1 h1 c1]
}