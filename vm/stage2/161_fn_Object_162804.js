function fn_Object_162804(win_v27 /* r70 */, v28 /* r213 */, v29 /* r221 */, console_v30 /* r227 */) { // entry L162804_174; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 51 register webs used only inside this fn (no live-in, cross-call or table-made def; 25 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 4 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, fn_v2 /* r205 */, fn_v3 /* r202 */, fn_v4 /* r205 */, fn_v5 /* r195 */, fn_v6 /* r193 */, v7 /* r205 */, v8 /* r202 */, v9 /* r192 */, v10 /* r254 */;
  let v11 /* r192 */, fn_v12 /* r192 */, fn_v13 /* r196 */, arr_v14 /* r205 */, v15 /* r205 */, v16 /* r202 */, v17 /* r205 */, v18 /* r205 */, reflect_v19 /* r202 */, reflect_v20 /* r198 */;
  let v21 /* r205 */, v22 /* r205 */, v23 /* r205 */, arr_v24 /* r205 */, v25 /* r205 */, v26 /* r205 */, console_v31 /* r196 */, v32 /* r199 */, v33 /* r198 */, elIFrame_v34 /* r202 */;
  let fn_v35 /* r204 */, v36 /* r205 */, v37 /* r199 */, fn_v38 /* r254 */, v39 /* r198 */, console_v40 /* r195 */, fn_v41 /* r193 */, v42 /* r202 */, err_v43 /* r196 */, v44 /* r192 */;
  let v45 /* r199 */, v46 /* r202 */, v47 /* r198 */, v48 /* r198 */, v49 /* r202 */, v50 /* r198 */, v51 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 6, fn_v3 6, fn_v4 6, fn_v5 6, fn_v6 6, fn_v12 6, fn_v13 6, fn_v35 6
  //   Function: fn_v38 6, fn_v41 6
  //   Array: arr_v14 6, arr_v24 6
  //   Reflect: reflect_v19 6, reflect_v20 6
  //   Window: win_v27 6
  //   console: console_v30 6, console_v31 6, console_v40 6
  //   HTMLIFrameElement: elIFrame_v34 6
  //   Error: err_v43 6
  // H133 rewrites: 4 single-use temps folded (3 of them expressions, H135), 5 dead register writes dropped, 2 constants propagated (2 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  console_v31 = console_v30;                            // #162805:99:150 [L d2 h2 c2]
  NC(60);                                               // #162808:103:53 #162818:245:211 [L d2 h2 c2]
  v32 = undefined;                                      // #162821:21:233 [L d2 h2 c2]
  v1 = "bbewo8";                                        // #162824:181:233 #162827:213:233 #162830:117:233 [L d2 h2 c2]
  cell[60] = "bbewo8";                                  // #162840:135:195 [L d2 h2 c2]
  v33 = false;                                          // #162843:223:233 [L d2 h2 c2]
  try {
    TP(tryStack, 163092, 1, callDepths);                           // #162846:140:194 [L d2 h2 c2]  try: pushes the catch arm of the enclosing try (TP)
    elIFrame_v34 = cell[28];                            // #162852:199:236 [L d2 h2 c2]
    fn_v35 = cell[28].contentWindow[v28];               // #162855:66:200 #162860:148:7 [L d2 h2 c2]
    fn_v2 = win_v27[v29][v28];                          // #162864:55:20 [L d2 h2 c2]
    if (fn_v35 === fn_v2) {                             // #162869:167:161 [L d2 h2 c2]
      v36 = "QhxL5";                                    // #162886:9:233 [-] /* never executed in any replay */
      return "QhxL5";                                   // #162895:181:245 [-] /* never executed in any replay */
    }
    fn_v3 = win_v27.Object;                             // #162897:15:200 #162902:128:150 [L d2 h2 c2]
    v37 = fn_v3[KP(162909)](fn_v35, "prepareStackTrace");  // #162905:52:233 #162910:117:138 [L d2 h2 c2]
    fn_v4 = win_v27.Object;                             // #162948:184:200 [L d2 h2 c2]
    fn_v5 = fn_v4;                                      // #162953:197:150 [L d2 h2 c2]
    fn_v6 = fn_v4.defineProperty;                       // #162956:200:200 [L d2 h2 c2]
    v7 = "prepareStackTrace";                           // #162961:92:233 [L d2 h2 c2]
    v8 = {};                                            // #162966:254:159 [L d2 h2 c2]
    v9 = "configurable";                                // #162968:58:233 [L d2 h2 c2]
    v10 = true;                                         // #162973:134:233 [L d2 h2 c2]
    v8.configurable = true;                             // #162976:136:199 [L d2 h2 c2]
    v11 = "value";                                      // #162980:28:233 [L d2 h2 c2]
    fn_v38 = clos;                                      // #162985:83:216 [L d2 h2 c2]  closure creation (operands from the byte stream); then fn_v38 = its home register (H139 CLOS bind)
    v8[v11] = fn_v38;                                   // #162995:97:199 [L d2 h2 c2]
    fn_v12 = fn_v6.call(fn_v5, fn_v35, v7, v8);         // #162999:46:138 [L d2 h2 c2]
    v39 = true;                                         // #163029:170:233 [L d2 h2 c2]
    console_v40 = console_v31;                          // #163032:111:150 [L d2 h2 c2]
    fn_v41 = console_v31.debug;                         // #163035:74:200 [L d2 h2 c2]
    v42 = "font-size:0;color:transparent";              // #163044:86:233 #163052:50:233 [L d2 h2 c2]
    fn_v13 = fn_v35;                                    // #163057:215:150 [L d2 h2 c2]
    err_v43 = new fn_v13();                             // #163060:167:1 [L d2 h2 c2]
    v44 = fn_v41.call(console_v40, "%c%o", v42, err_v43);  // #163064:220:138 [L d2 h2 c2]
    arr_v14 = tryStack.pop();                                // #163085:39:124 [L d2 h2 c2]
    if (v39) {                                          // #163088:27:53 #163153:130:160 [L d2 h2 c2]
      try {
        TP(tryStack, 163323, 140, callDepths);                     // #163164:211:194 [L d2 h2 c2]  try: pushes the catch arm of the enclosing try (TP)
        if (v37) {                                      // #163170:150:160 [L d2 h2 c2]
          v49 = win_v27.Object;                         // #163269:40:200 #163274:117:150 [-] /* never executed in any replay */
          v23 = "prepareStackTrace";                    // #163277:149:233 [-] /* never executed in any replay */
          v50 = (v49).defineProperty(fn_v35, "prepareStackTrace", v37);  // #163282:146:138 [-] +#163311:154:53 /* never executed in any replay */
        } else {
          reflect_v19 = win_v27.Reflect;                // #163176:142:53 #163181:36:200 [L d2 h2 c2]
          reflect_v20 = reflect_v19;                    // #163186:129:150 [L d2 h2 c2]
          v45 = "prepareStackTrace";                    // #163189:113:233 [L d2 h2 c2]
          v46 = reflect_v20.deleteProperty(fn_v35, v45);  // #163194:254:138 [L d2 h2 c2]
          v21 = !v46;                                   // #163222:175:130 [L d2 h2 c2]
          if (v21) {                                    // #163225:2:160 [L d2 h2 c2]
            v22 = "QhxL5";                              // #163244:109:233 [-] /* never executed in any replay */
            cell[60] = "QhxL5";                         // #163253:159:195 [-] /* never executed in any replay */
            v48 = "QhxL5";                              // #163256:208:150 [-] +#163259:96:53 /* never executed in any replay */
          } else {
            v47 = v21;                                  // #163231:74:53 #163236:249:150 [L d2 h2 c2] +#163239:37:53
          }
        }
        arr_v24 = tryStack.pop();                            // #163316:99:124 [L d2 h2 c2] +#163319:103:53
      } catch (caught) {
        v25 = caught;                                     // #163324:73:150 [-] /* never executed in any replay */
        v26 = KP(m163326k73);                           // #163327:25:233 [-] /* never executed in any replay */
        cell[60] = v26;                                 // #163336:155:195 [-] /* never executed in any replay */
        outside("L163338_155");  // L163338_155 is not a step of this fn: the invocation aborts (self-error, entry-only fallback)
      }
    } else {
      // #163159:202:53 [-] /* never executed in any replay */
    }
    v51 = cell[60];                                     // #163344:29:236 [L d2 h2 c2]
    return cell[60];                                    // #163347:121:245 [L d2 h2 c2]
  } catch (caught) {
    v15 = caught;                                         // #163093:42:150 [-] /* never executed in any replay */
    v16 = KP(m163095k42);                               // #163096:182:233 [-] /* never executed in any replay */
    v17 = cell[60];                                     // #163105:201:236 [-] /* never executed in any replay */
    if (v16 === v17) {                                  // #163108:113:161 [-] /* never executed in any replay */
      outside("L163127_27");                            // #163125:27:233 [-]  L163127_27 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
    }
    v18 = KP(m163132k228);                              // #163133:8:233 [-] /* never executed in any replay */
    cell[60] = v18;                                     // #163142:142:195 [-] /* never executed in any replay */
    outside("L163147_195");                             // #163145:195:150 [-]  L163147_195 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}