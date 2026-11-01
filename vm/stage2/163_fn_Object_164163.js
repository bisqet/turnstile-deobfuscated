function fn_Object_164163(win_v25 /* r70 */, console_v26 /* r88 */, doc_v27 /* r227 */, v28 /* r243 */, v29 /* r248 */) { // entry L164163_226; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 37 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let doc_v1 /* r195 */, console_v2 /* r198 */, v3 /* r196 */, v4 /* r204 */, arr_v5 /* r202 */, v6 /* r205 */, doc_v7 /* r202 */, elDiv_v8 /* r199 */, fn_v9 /* r205 */, fn_v10 /* r199 */;
  let v11 /* r205 */, v12 /* r204 */, v13 /* r195 */, v14 /* r193 */, v15 /* r195 */, v16 /* r193 */, v17 /* r195 */, arr_v18 /* r205 */, v19 /* r205 */, v20 /* r205 */;
  let v21 /* r202 */, v22 /* r204 */, v23 /* r199 */, v24 /* r205 */, v30 /* r202 */, fn_v31 /* r196 */, fn_v32 /* r193 */, v33 /* r195 */, console_v34 /* r199 */, v35 /* r204 */;
  let v36 /* r198 */, v37 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v1 18, doc_v7 18, doc_v27 18
  //   console: console_v2 18, console_v26 18, console_v34 18
  //   Array: arr_v5 18, arr_v18 18
  //   HTMLDivElement: elDiv_v8 18
  //   Function: fn_v9 18, fn_v10 18, fn_v31 18, fn_v32 18
  //   Window: win_v25 18
  // H133 rewrites: 1 single-use temps folded (0 of them expressions, H135), 7 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  doc_v1 = doc_v27;                                     // #164164:199:150 [L d6 h6 c6]
  console_v2 = console_v26;                             // #164167:88:150 [L d6 h6 c6]
  v3 = v29;                                             // #164170:229:150 [L d6 h6 c6]
  v4 = v28;                                             // #164173:126:150 [L d6 h6 c6]
  NC(62);                                               // #164176:214:53 #164181:248:211 [L d6 h6 c6]
  cell[62] = v4;                                        // #164184:190:195 [L d6 h6 c6]
  arr_v5 = cell[32];                                    // #164187:22:53 #164192:64:233 #164195:244:233 #164198:143:236 [L d6 h6 c6]
  v6 = "IHdE7";                                         // #164201:199:233 [L d6 h6 c6]
  arr_v5[v4] = "IHdE7";                                 // #164210:5:199 [L d6 h6 c6]
  try {
    TP(tryStack, 164481, 108, callDepths);                         // #164214:154:194 [L d6 h6 c6]  try: pushes the catch arm of the enclosing try (TP)
    doc_v7 = doc_v1;                                    // #164220:159:150 [L d6 h6 c6]
    elDiv_v8 = (doc_v7).createElement("div");           // #164223:151:233 #164228:12:138 [L d6 h6 c6]
    if (v3 === 0) {                                     // #164254:124:69 [L d6 h6 c6]
      v30 = elDiv_v8.childNodes;                        // #164322:161:200 [L d2 h2 c2] +#164336:45:53
    } else {
      if (v3 === 1) {                                   // #164263:92:53 #164268:156:69 [L d4 h4 c4]
        v30 = elDiv_v8.classList;                       // #164299:211:200 [L d2 h2 c2] +#164312:23:53
      } else {
        v30 = elDiv_v8.children;                        // #164277:252:53 #164282:22:200 [L d2 h2 c2] +#164294:14:53
      }
    }
    fn_v9 = win_v25.Object;                             // #164341:143:200 [L d6 h6 c6]
    fn_v10 = fn_v9;                                     // #164346:0:150 [L d6 h6 c6]
    fn_v31 = fn_v9.defineProperty;                      // #164349:215:200 [L d6 h6 c6]
    v11 = "length";                                     // #164354:239:233 [L d6 h6 c6]
    v12 = {};                                           // #164359:5:159 [L d6 h6 c6]
    v13 = "configurable";                               // #164361:229:233 [L d6 h6 c6]
    v14 = false;                                        // #164366:69:233 [L d6 h6 c6]
    v12.configurable = false;                           // #164369:11:199 [L d6 h6 c6]
    v15 = "enumerable";                                 // #164373:83:233 [L d6 h6 c6]
    v16 = false;                                        // #164378:123:233 [L d6 h6 c6]
    v12.enumerable = false;                             // #164381:233:199 [L d6 h6 c6]
    v17 = "get";                                        // #164385:57:233 [L d6 h6 c6]
    fn_v32 = clos;                                      // #164390:60:216 [L d6 h6 c6]  closure creation (operands from the byte stream); then fn_v32 = its home register (H139 CLOS bind)
    v12[v17] = fn_v32;                                  // #164404:230:199 [L d6 h6 c6]
    v33 = fn_v31.call(fn_v10, v30, v11, v12);           // #164408:223:138 [L d6 h6 c6]
    console_v34 = console_v2;                           // #164438:16:150 [L d6 h6 c6]
    v35 = "font-size:0;color:transparent";              // #164441:132:233 #164449:40:233 [L d6 h6 c6]
    v36 = console_v34.debug("%c%o", v35, v30);          // #164454:153:138 [L d6 h6 c6]
    arr_v18 = tryStack.pop();                                // #164474:48:124 [L d6 h6 c6]
    v37 = undefined;                                    // #164477:64:53 #164552:94:233 [L d6 h6 c6]
    return v37;                                         // #164555:246:245 [L d6 h6 c6]
  } catch (caught) {
    v19 = caught;                                         // #164482:169:150 [-] /* never executed in any replay */
    v20 = KP(m164484k169);                              // #164485:249:233 [-] /* never executed in any replay */
    v21 = cell[32];                                     // #164495:192:236 [-] /* never executed in any replay */
    v22 = cell[62];                                     // #164498:43:236 [-] /* never executed in any replay */
    v23 = v21[v22];                                     // #164501:25:7 [-] /* never executed in any replay */
    if (v20 === v23) {                                  // #164505:129:161 [-] /* never executed in any replay */
      outside("L164524_170");                           // #164522:170:233 [-]  L164524_170 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    v24 = KP(m164529k228);                              // #164530:8:233 [-] /* never executed in any replay */
    v21[v22] = v24;                                     // #164540:130:199 [-] /* never executed in any replay */
    outside("L164546_231");                             // #164544:231:150 [-]  L164546_231 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}