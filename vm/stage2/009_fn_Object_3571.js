function fn_Object_3571(win_v24 /* r70 */) { // entry L3561_64; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 36 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, v2 /* r199 */, v3 /* r195 */, v4 /* r204 */, v5 /* r198 */, v6 /* r205 */, v7 /* r202 */, v8 /* r205 */, v9 /* r204 */, v10 /* r253 */;
  let v11 /* r205 */, arr_v12 /* r202 */, fn_v13 /* r202 */, fn_v14 /* r205 */, arr_v15 /* r202 */, fn_v16 /* r202 */, v17 /* r205 */, v18 /* r205 */, v19 /* r202 */, v20 /* r205 */;
  let v21 /* r205 */, v22 /* r205 */, v23 /* r202 */, arr_v25 /* r253 */, fn_v26 /* r252 */, arr_v27 /* r199 */, v28 /* r195 */, arr_v29 /* r204 */, v30 /* r198 */, v31 /* r254 */;
  let v32 /* r192 */, v33 /* r193 */, v34 /* r196 */, v35 /* r202 */, v36 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v12 3, arr_v15 3, arr_v25 3, arr_v27 3, arr_v29 3
  //   Function: fn_v13 3, fn_v14 3, fn_v16 3, fn_v26 3
  //   Window: win_v24 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  v1 = undefined;                                       // #3562:16:53 #3572:104:233 [L d1 h1 c1]
  v2 = undefined;                                       // #3575:124:233 [L d1 h1 c1]
  v3 = undefined;                                       // #3578:64:233 [L d1 h1 c1]
  v4 = undefined;                                       // #3581:244:233 [L d1 h1 c1]
  v5 = undefined;                                       // #3584:216:233 [L d1 h1 c1]
  v6 = cell[20];                                        // #3587:227:236 [L d1 h1 c1]
  if (v6) {                                             // #3590:102:160 [L d1 h1 c1]
    v9 = v6;                                            // #3921:233:150 [-] +#3924:85:53 /* never executed in any replay */
  } else {
    v7 = KP(3600);                                      // #3596:30:53 #3601:50:233 [L d1 h1 c1]
    v8 = cell[19][KP(m3878k50)](v7);                    // #3879:211:66 [L d1 h1 c1]
    cell[20] = v8;                                      // #3910:237:195 [L d1 h1 c1]
    v9 = v8;                                            // #3913:102:150 [L d1 h1 c1] +#3916:30:53
  }
  v10 = v9;                                             // #3929:163:150 [L d1 h1 c1]
  v11 = "A";                                            // #3932:139:233 [L d1 h1 c1]
  arr_v12 = (v10).split("A");                           // #3937:48:138 [L d1 h1 c1]
  arr_v25 = arr_v12;                                    // #3955:93:150 [L d1 h1 c1]
  fn_v26 = arr_v12.reduce;                              // #3958:0:200 [L d1 h1 c1]
  fn_v13 = clos;                                        // #3963:167:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v13 = its home register (H139 CLOS bind)
  fn_v14 = fn_v13;                                      // #3977:184:150 [L d1 h1 c1]
  arr_v15 = [];                                         // #3980:134:107 [L d1 h1 c1]
  arr_v27 = fn_v26.call(arr_v25, fn_v14, arr_v15);      // #3982:255:138 [L d1 h1 c1]
  fn_v16 = win_v24.Object;                              // #4003:154:200 [L d1 h1 c1]
  v17 = null;                                           // #4008:102:233 [L d1 h1 c1]
  v28 = fn_v16.create(null);                            // #4011:95:138 [L d1 h1 c1]
  arr_v29 = [];                                         // #4030:81:107 [L d1 h1 c1]
  v30 = 0;                                              // #4032:164:72 [L d1 h1 c1]
  v31 = 1;                                              // #4035:107:72 [L d1 h1 c1]
  v32 = "length";                                       // #4038:51:233 [L d1 h1 c1]
  v33 = 1;                                              // #4043:126:72 [L d1 h1 c1]
  v34 = "length";                                       // #4046:186:233 [L d1 h1 c1] +#4051:34:53
  while ((v35 = arr_v27[v32], v36 = v30 < v35, v30 < v35)) {  // #4066:215:7 | #4070:188:186 [L d8 h8 c8]
    v19 = arr_v27[v30];                                 // #4088:19:7 [L d7 h7 c7]
    v20 = v28[v19];                                     // #4092:97:7 [L d7 h7 c7]
    if (!(v20)) {                                       // #4096:108:160 [L d7 h7 c7]
      v21 = arr_v27[v30];                               // #4102:140:53 #4107:181:7 [L d1 h1 c1]
      v28[v21] = v33;                                   // #4111:187:199 [L d1 h1 c1]
      v22 = arr_v29[v34];                               // #4115:105:7 [L d1 h1 c1]
      v23 = arr_v27[v30];                               // #4119:223:7 [L d1 h1 c1]
      arr_v29[v22] = v23;                               // #4123:92:210 [L d1 h1 c1]
    }
    v18 = v30; v30 = v30 + v31;                         // #4056:204:48 [L d7 h7 c7]
  }
  return arr_v29;                                       // #4136:163:245 [L d1 h1 c1]
}