function probe_29_helper_2165(win_v25 /* r70 */, v26 /* r212 */, v27 /* r223 */) { // entry L2155_25; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 40 register webs used only inside this fn (no live-in, cross-call or table-made def; 16 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 2 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, win_v2 /* r205 */, v3 /* r204 */, v4 /* r205 */, v5 /* r205 */, win_v6 /* r204 */, fn_v7 /* r205 */, v8 /* r205 */, win_v9 /* r205 */, v10 /* r204 */;
  let win_v11 /* r204 */, v12 /* r205 */, v13 /* r199 */, fn_v14 /* r205 */, v15 /* r204 */, broadcastChannel_v16 /* r205 */, broadcastChannel_v17 /* r198 */, fn_v18 /* r196 */, v19 /* r204 */, fn_v20 /* r202 */;
  let v21 /* r195 */, v22 /* r204 */, fn_v23 /* r202 */, v24 /* r205 */, v28 /* r199 */, v29 /* r202 */, v30 /* r204 */, v31 /* r205 */, v32 /* r204 */, v33 /* r205 */;
  let broadcastChannel_v34 /* r198 */, fn_v35 /* r196 */, v36 /* r195 */, broadcastChannel_v37 /* r204 */, fn_v38 /* r202 */, v39 /* r199 */, v40 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 3, win_v6 3, win_v9 3, win_v11 3, win_v25 3
  //   Function: fn_v7 3, fn_v14 3, fn_v18 3, fn_v20 3, fn_v23 3, fn_v35 3, fn_v38 3
  //   BroadcastChannel: broadcastChannel_v16 3, broadcastChannel_v17 3, broadcastChannel_v34 3, broadcastChannel_v37 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 2 constants propagated (2 uses), 1 string keys as .member; 3 webs kept as registers (retOut 3)
  NC(28, 29);                                           // #2156:197:53 #2166:118:211 [L d1 h1 c1]
  v28 = undefined;                                      // #2170:210:233 [L d1 h1 c1]
  v1 = undefined;                                       // #2173:190:233 [L d1 h1 c1]
  win_v2 = win_v25[v27];                                // #2176:32:7 [L d1 h1 c1]
  v29 = win_v2.sSkll6;                                  // #2180:119:200 [L d1 h1 c1]
  v3 = "AHOEY5";                                        // #2185:15:233 [L d1 h1 c1]
  v4 = v29.tNEww4("AHOEY5");                            // #2195:164:138 [L d1 h1 c1]
  if (v4) {                                             // #2214:99:160 [L d1 h1 c1]
    v5 = win_v25[v27];                                  // #2225:232:7 [-] /* never executed in any replay */
    v30 = "NBvqE8";                                     // #2229:252:233 [-] /* never executed in any replay */
    v5[v26] = "NBvqE8";                                 // #2239:166:199 [-] /* never executed in any replay */
    v31 = undefined;                                    // #2243:66:233 [-] /* never executed in any replay */
    return v31;                                         // #2246:74:245 [-] /* never executed in any replay */
  }
  win_v6 = win_v25[v27];                                // #2220:103:53 #2248:209:7 [L d1 h1 c1]
  fn_v7 = win_v6.BroadcastChannel;                      // #2252:164:200 [L d1 h1 c1]
  if (fn_v7) {                                          // #2257:99:160 [L d1 h1 c1]
    win_v9 = win_v25[v27];                              // #2291:75:7 [L d1 h1 c1]
    v10 = 0; win_v9[v26] = 0;                           // #2295:153:103 [L d1 h1 c1]
    win_v11 = win_v25[v27];                             // #2300:79:7 [L d1 h1 c1]
    v12 = win_v11[KP(s1p2303)];                         // #2304:170:200 [L d1 h1 c1]
    v13 = v12.dXXrN6;                                   // #2309:89:200 [L d1 h1 c1]
    cell[28] = v13;                                     // #2319:219:195 [L d1 h1 c1]
    fn_v14 = win_v25.BroadcastChannel;                  // #2322:6:200 [L d1 h1 c1]
    v15 = "a";                                          // #2327:34:233 [L d1 h1 c1]
    broadcastChannel_v16 = new fn_v14("a");             // #2332:134:1 [L d1 h1 c1]
    cell[29] = broadcastChannel_v16;                    // #2337:148:195 [L d1 h1 c1]
    broadcastChannel_v17 = broadcastChannel_v16;        // #2340:49:150 [L d1 h1 c1]
    fn_v18 = broadcastChannel_v16.addEventListener;     // #2343:132:200 [L d1 h1 c1]
    v19 = "message";                                    // #2348:40:233 [L d1 h1 c1]
    fn_v20 = clos;                                      // #2353:47:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v20 = its home register (H139 CLOS bind)
    v21 = fn_v18.call(broadcastChannel_v17, v19, fn_v20);  // #2365:68:138 [L d1 h1 c1]
    broadcastChannel_v34 = broadcastChannel_v16;        // #2396:33:150 [L d1 h1 c1]
    fn_v35 = broadcastChannel_v16.addEventListener;     // #2399:180:200 [L d1 h1 c1]
    v22 = "message";                                    // #2404:152:233 [L d1 h1 c1]
    fn_v23 = clos;                                      // #2409:223:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v23 = its home register (H139 CLOS bind)
    v36 = fn_v35.call(broadcastChannel_v34, v22, fn_v23);  // #2423:52:138 [L d1 h1 c1]
    broadcastChannel_v37 = broadcastChannel_v16;        // #2454:81:150 [L d1 h1 c1]
    fn_v38 = broadcastChannel_v16.postMessage;          // #2457:36:200 [L d1 h1 c1]
    v24 = {};                                           // #2462:166:159 [L d1 h1 c1]
    v24.ping = v13;                                     // #2464:147:142 [L d1 h1 c1]
    v39 = fn_v38.call(broadcastChannel_v37, v24);       // #2469:24:138 [L d1 h1 c1]
    v40 = undefined;                                    // #2494:108:233 [L d1 h1 c1]
    return v40;                                         // #2497:76:245 [L d1 h1 c1]
  }
  v8 = win_v25[v27];                                    // #2263:103:53 #2268:4:7 [-] /* never executed in any replay */
  v32 = "KFeSX5";                                       // #2272:168:233 [-] /* never executed in any replay */
  v8[v26] = "KFeSX5";                                   // #2282:162:199 [-] /* never executed in any replay */
  v33 = undefined;                                      // #2286:78:233 [-] /* never executed in any replay */
  return v33;                                           // #2289:38:245 [-] /* never executed in any replay */
}