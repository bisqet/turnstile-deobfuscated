function fn_Object_163376(win_v39 /* r70 */, v40 /* r88 */, v41 /* r212 */, v42 /* r213 */, console_v43 /* r227 */) { // entry L163376_214; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 58 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 5 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, fn_v2 /* r202 */, v3 /* r199 */, fn_v4 /* r205 */, fn_v5 /* r198 */, v6 /* r195 */, v7 /* r192 */, v8 /* r195 */, v9 /* r205 */, fn_v10 /* r205 */;
  let fn_v11 /* r195 */, fn_v12 /* r192 */, fn_v13 /* r196 */, v14 /* r205 */, v15 /* r196 */, _v16 /* r198 */, fn_v17 /* r198 */, fn_v18 /* r193 */, v19 /* r205 */, fn_v20 /* r195 */;
  let v21 /* r198 */, fn_v22 /* r205 */, fn_v23 /* r205 */, fn_v24 /* r198 */, fn_v25 /* r196 */, v26 /* r205 */, fn_v27 /* r198 */, fn_v28 /* r205 */, err_v29 /* r198 */, fn_v30 /* r205 */;
  let v31 /* r198 */, v32 /* r193 */, v33 /* r192 */, v34 /* r193 */, arr_v35 /* r205 */, v36 /* r205 */, v37 /* r204 */, v38 /* r205 */, console_v44 /* r204 */, v45 /* r196 */;
  let err_v46 /* r202 */, fn_v47 /* r193 */, reflect_v48 /* r198 */, v49 /* r199 */, v50 /* r205 */, fn_v51 /* r196 */, fn_v52 /* r195 */, v53 /* r192 */, v54 /* r193 */, console_v55 /* r199 */;
  let v56 /* r204 */, v57 /* r198 */, v58 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 36, fn_v4 36, fn_v5 36, fn_v10 6, fn_v11 6, fn_v12 6, fn_v13 6, fn_v17 6
  //   Function: fn_v18 6, fn_v20 12, fn_v22 6, fn_v23 6, fn_v24 6, fn_v25 6, fn_v27 6, fn_v28 6
  //   Function: fn_v30 36, fn_v47 66, fn_v51 36, fn_v52 36
  //   : _v16 6
  //   Error: err_v29 6, err_v46 36
  //   Array: arr_v35 36
  //   Window: win_v39 36
  //   console: console_v43 36, console_v44 36, console_v55 36
  //   Reflect: reflect_v48 6
  // H133 rewrites: 4 single-use temps folded (4 of them expressions, H135), 13 dead register writes dropped, 2 constants propagated (2 uses), 4 string keys as .member; 2 webs kept as registers (retOut 2)
  console_v44 = console_v43;                            // #163377:235:150 [L d12 h12 c12]
  v45 = v40;                                            // #163380:236:150 [L d12 h12 c12]
  NC(61);                                               // #163383:12:53 #163393:166:211 [L d12 h12 c12]
  v1 = "bbewo8";                                        // #163396:66:233 #163399:110:233 [L d12 h12 c12]
  cell[61] = "bbewo8";                                  // #163409:220:195 [L d12 h12 c12]
  try {
    TP(tryStack, 164030, 251, callDepths);                         // #163412:213:194 [L d12 h12 c12]  try: pushes the catch arm of the enclosing try (TP)
    fn_v2 = win_v39[v42];                               // #163418:155:7 [L d12 h12 c12]
    err_v46 = new fn_v2();                              // #163422:91:1 [L d12 h12 c12]
    v3 = err_v46;                                       // #163426:156:150 [L d12 h12 c12]
    fn_v4 = clos;                                       // #163429:211:216 [L d12 h12 c12]  closure creation (operands from the byte stream); then fn_v4 = its home register (H139 CLOS bind)
    fn_v5 = fn_v4;                                      // #163440:52:150 [L d12 h12 c12]
    fn_v47 = fn_v4;                                     // #163443:81:150 [L d12 h12 c12]
    if (v45 === 1) {                                    // #163446:237:69 [L d12 h12 c12]
      reflect_v48 = win_v39.Reflect;                    // #163761:79:200 #163766:192:150 [L d2 h2 c2]
      v49 = "stack";                                    // #163769:116:233 [L d2 h2 c2]
      if (reflect_v48.deleteProperty(err_v46, v49)) {   // #163774:181:138 #163802:112:160 [L d2 h2 c2]
        fn_v23 = win_v39.Object;                        // #163824:215:200 [L d2 h2 c2]
        fn_v24 = fn_v23;                                // #163829:40:150 [L d2 h2 c2]
        fn_v25 = fn_v23.create;                         // #163832:95:200 [L d2 h2 c2]
        v26 = win_v39[v42][v41];                        // #163842:150:20 [L d2 h2 c2]
        v3 = fn_v25.call(fn_v24, v26);                  // #163847:207:138 [L d2 h2 c2]
        fn_v27 = win_v39.Object;                        // #163867:42:200 [L d2 h2 c2]
        fn_v28 = fn_v27;                                // #163872:239:150 [L d2 h2 c2]
        err_v29 = (fn_v28).setPrototypeOf(err_v46, v3);  // #163875:4:138 [L d2 h2 c2] +#163903:196:53
      } else {
        v50 = "QhxL5";                                  // #163808:128:53 #163813:123:233 [-] /* never executed in any replay */
        return "QhxL5";                                 // #163822:223:245 [-] /* never executed in any replay */
      }
    } else {
      v6 = v45 === (2);                                 // #163455:73:53 #163460:203:72 #163463:11:65 [L d10 h10 c10]
      if (v6) {                                         // #163467:238:160 [L d10 h10 c10]
        v9 = v6;                                        // #163493:251:150 [L d2 h2 c2] +#163496:159:53
      } else {
        v7 = 3;                                         // #163473:134:53 #163478:67:72 [L d8 h8 c8]
        v8 = v45 === (3);                               // #163481:163:65 [L d8 h8 c8]
        v9 = v8;                                        // #163485:196:150 [L d8 h8 c8] +#163488:132:53
      }
      if (v9) {                                         // #163501:73:160 [L d10 h10 c10]
        err_v46.join = fn_v5;                           // #163675:133:142 [L d4 h4 c4]
        fn_v20 = win_v39.Array;                         // #163683:136:200 [L d4 h4 c4]
        fn_v47 = fn_v20[v41].toString;                  // #163688:66:7 #163692:145:200 [L d4 h4 c4]
        v21 = v45 === (3);                              // #163697:228:72 #163700:0:65 [L d4 h4 c4]
        if (v21) {                                      // #163704:79:160 [L d4 h4 c4]
          fn_v22 = fn_v47;                              // #163723:199:150 [L d2 h2 c2]
          fn_v47 = (fn_v22).bind(err_v46);              // #163726:124:138 [L d2 h2 c2] +#163743:121:150 +#163746:165:53
        } else {
          // #163710:163:53 #163715:220:150 #163718:60:53 [L d2 h2 c2]
        }
      } else {
        if (v45 === 4) {                                // #163507:53:53 #163512:244:69 [L d6 h6 c6]
          fn_v18 = win_v39.Proxy;                       // #163643:224:200 [L d2 h2 c2]
          v19 = {};                                     // #163652:114:159 [L d2 h2 c2]
          v19.apply = fn_v5;                            // #163654:47:142 [L d2 h2 c2]
          fn_v47 = new fn_v18(fn_v5, v19);              // #163659:159:1 [L d2 h2 c2] +#163665:179:53
        } else {
          if (v45 === 5) {                              // #163521:244:53 #163526:184:69 [L d4 h4 c4]
            fn_v10 = win_v39.Object;                    // #163544:82:200 [L d2 h2 c2]
            fn_v11 = fn_v10;                            // #163549:119:150 [L d2 h2 c2]
            fn_v12 = fn_v10.defineProperty;             // #163552:50:200 [L d2 h2 c2]
            fn_v13 = win_v39.Symbol;                    // #163557:193:200 [L d2 h2 c2]
            v14 = fn_v13.toStringTag;                   // #163567:212:200 [L d2 h2 c2]
            v15 = {};                                   // #163582:150:159 [L d2 h2 c2]
            v15.get = fn_v5;                            // #163584:195:142 [L d2 h2 c2]
            _v16 = fn_v12.call(fn_v11, err_v46, v14, v15);  // #163589:136:138 [L d2 h2 c2]
            fn_v17 = win_v39.Object;                    // #163619:63:200 [L d2 h2 c2]
            fn_v47 = fn_v17[v41].toString;              // #163624:221:7 #163628:128:200 [L d2 h2 c2] +#163633:80:53
          }
        }
      }
    }
    fn_v30 = win_v39.Object;                            // #163908:97:200 [L d12 h12 c12]
    fn_v51 = fn_v30;                                    // #163913:10:150 [L d12 h12 c12]
    fn_v52 = fn_v30.defineProperty;                     // #163916:57:200 [L d12 h12 c12]
    v31 = {};                                           // #163921:73:233 #163926:119:159 [L d12 h12 c12]
    v31.get = fn_v47;                                   // #163928:96:142 [L d12 h12 c12]
    v32 = "configurable";                               // #163933:148:233 [L d12 h12 c12]
    v33 = false;                                        // #163938:248:233 [L d12 h12 c12]
    v31.configurable = false;                           // #163941:178:199 [L d12 h12 c12]
    v34 = "enumerable";                                 // #163945:30:233 [L d12 h12 c12]
    v53 = false;                                        // #163950:218:233 [L d12 h12 c12]
    v31.enumerable = false;                             // #163953:140:199 [L d12 h12 c12]
    v54 = fn_v52.call(fn_v51, v3, "stack", v31);        // #163957:109:138 [L d12 h12 c12]
    console_v55 = console_v44;                          // #163987:230:150 [L d12 h12 c12]
    v56 = "font-size:0;color:transparent";              // #163990:130:233 #163998:174:233 [L d12 h12 c12]
    v57 = console_v55.debug("%c%o", v56, err_v46);      // #164003:135:138 [L d12 h12 c12]
    arr_v35 = tryStack.pop();                                // #164023:230:124 [L d12 h12 c12]
    v58 = cell[61];                                     // #164026:158:53 #164091:254:236 [L d12 h12 c12]
    return cell[61];                                    // #164094:22:245 [L d12 h12 c12]
  } catch (caught) {
    v36 = cell[61];                                     // #164031:188:150 #164034:55:236 [-] /* never executed in any replay */
    v37 = KP(m164036k55);                               // #164037:207:233 [-] /* never executed in any replay */
    if (v36 === v37) {                                  // #164046:223:161 [-] /* never executed in any replay */
      outside("L164065_192");                           // #164063:192:233 [-]  L164065_192 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    v38 = KP(m164070k71);                               // #164071:159:233 [-] /* never executed in any replay */
    cell[61] = v38;                                     // #164080:137:195 [-] /* never executed in any replay */
    outside("L164085_146");                             // #164083:146:150 [-]  L164085_146 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}