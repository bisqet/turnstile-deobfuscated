function probe_34_helper_229607(win_v26 /* r70 */, v27 /* r209 */, v28 /* r214 */, v29 /* r220 */, v30 /* r221 */) { // entry L229607_154; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 44 register webs used only inside this fn (no live-in, cross-call or table-made def; 19 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r198 */, win_v3 /* r205 */, win_v4 /* r198 */, v5 /* r205 */, v6 /* r205 */, v7 /* r205 */, worker_v8 /* r202 */, v9 /* r205 */, fn_v10 /* r199 */;
  let v11 /* r205 */, worker_v12 /* r199 */, fn_v13 /* r198 */, v14 /* r205 */, fn_v15 /* r204 */, v16 /* r196 */, worker_v17 /* r199 */, fn_v18 /* r198 */, v19 /* r205 */, fn_v20 /* r204 */;
  let v21 /* r205 */, v22 /* r198 */, v23 /* r199 */, v24 /* r205 */, v25 /* r205 */, v31 /* r204 */, fn_v32 /* r196 */, v33 /* r195 */, v34 /* r198 */, v35 /* r199 */;
  let v36 /* r198 */, v37 /* r199 */, v38 /* r196 */, worker_v39 /* r204 */, fn_v40 /* r202 */, v41 /* r198 */, v42 /* r199 */, v43 /* r202 */, v44 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v3 3, win_v4 3, win_v26 3
  //   Worker: worker_v8 3, worker_v12 3, worker_v17 3, worker_v39 3
  //   Function: fn_v10 3, fn_v13 3, fn_v15 3, fn_v18 3, fn_v20 3, fn_v32 3, fn_v40 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  NC(19, 21);                                           // #229608:130:53 #229618:207:211 [L d1 h1 c1]
  v1 = cell[1];                                         // #229622:190:236 [L d1 h1 c1]
  v2 = v1[v29];                                         // #229625:32:7 [L d1 h1 c1]
  v31 = v1[v2];                                         // #229629:122:7 [L d1 h1 c1]
  cell[19] = v31;                                       // #229633:184:195 [L d1 h1 c1]
  win_v3 = win_v26[v30];                                // #229636:178:7 [L d1 h1 c1]
  win_v4 = win_v3;                                      // #229640:87:150 [L d1 h1 c1]
  fn_v32 = win_v4[v27];                                 // #229643:149:7 [L d1 h1 c1]
  v5 = KP(229646);                                      // #229647:53:233 [L d1 h1 c1]
  v33 = fn_v32.call(win_v4, v5);                        // #229720:178:138 [L d1 h1 c1]
  v6 = "ATpJ5";                                         // #229740:30:233 [L d1 h1 c1]
  v34 = 0; v31.ATpJ5 = 0;                               // #229745:224:103 [L d1 h1 c1]
  v7 = cell[1];                                         // #229750:203:236 [L d1 h1 c1]
  worker_v8 = cell[1].WdGLU4;                           // #229753:54:200 [L d1 h1 c1]
  v9 = false;                                           // #229758:146:233 [L d1 h1 c1]
  cell[21] = false;                                     // #229761:112:195 [L d1 h1 c1]
  v35 = !worker_v8;                                     // #229764:217:130 [L d1 h1 c1]
  if (v35) {                                            // #229767:4:160 [L d1 h1 c1]
    v11 = v35;                                          // #229801:215:150 [-] +#229804:11:53 /* never executed in any replay */
  } else {
    fn_v10 = worker_v8.addEventListener;                // #229773:196:53 #229778:99:200 [L d1 h1 c1]
    v36 = typeof fn_v10;                                // #229783:195:193 [L d1 h1 c1]
    v37 = !(v36 === v28);                               // #229786:35:65 #229790:128:130 [L d1 h1 c1]
    v11 = v37;                                          // #229793:109:150 [L d1 h1 c1] +#229796:201:53
  }
  if (v11) {                                            // #229809:210:160 [L d1 h1 c1]
    v25 = "ATpJ5";                                      // #230133:113:233 [-] /* never executed in any replay */
    v43 = "yDUN3";                                      // #230138:161:233 [-] /* never executed in any replay */
    v31.ATpJ5 = "yDUN3";                                // #230147:247:199 [-] /* never executed in any replay */
    r205 = cell[16]();                                  // #230151:239:201 [-] +#230155:195:53  VM call: pushes a frame, the callee body returns into r205 /* never executed in any replay */
  } else {
    worker_v12 = worker_v8;                             // #229815:218:53 #229820:30:150 [L d1 h1 c1]
    fn_v13 = worker_v8.addEventListener;                // #229823:253:200 [L d1 h1 c1]
    v14 = "message";                                    // #229828:253:233 [L d1 h1 c1]
    fn_v15 = clos;                                      // #229833:240:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v15 = its home register (H139 CLOS bind)
    v16 = fn_v13.call(worker_v12, v14, fn_v15);         // #229846:65:138 [L d1 h1 c1]
    worker_v17 = worker_v8;                             // #229877:106:150 [L d1 h1 c1]
    fn_v18 = worker_v8.addEventListener;                // #229880:25:200 [L d1 h1 c1]
    v19 = "error";                                      // #229885:169:233 [L d1 h1 c1]
    fn_v20 = clos;                                      // #229890:236:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
    v38 = fn_v18.call(worker_v17, v19, fn_v20);         // #229901:77:138 [L d1 h1 c1]
    worker_v39 = worker_v8;                             // #229932:70:150 [L d1 h1 c1]
    fn_v40 = worker_v8.postMessage;                     // #229935:133:200 [L d1 h1 c1]
    v21 = KP(229939);                                   // #229940:101:233 [L d1 h1 c1]
    v22 = "PoNB7";                                      // #230077:197:233 [L d1 h1 c1]
    v23 = v21 + ("PoNB7");                              // #230086:6:222 [L d1 h1 c1]
    v41 = ":a});";                                      // #230090:34:233 [L d1 h1 c1]
    v24 = v23 + ":a});";                                // #230099:47:222 [L d1 h1 c1]
    v42 = fn_v40.call(worker_v39, v24);                 // #230103:68:138 [L d1 h1 c1] +#230128:4:53
  }
  v44 = undefined;                                      // #230160:141:233 [L d1 h1 c1]
  return v44;                                           // #230163:41:245 [L d1 h1 c1]
}