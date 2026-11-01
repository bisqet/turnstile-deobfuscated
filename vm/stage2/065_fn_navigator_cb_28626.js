function fn_navigator_cb_28626(ctx2d_v22 /* r227 */) { // entry L28626_214; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 28 register webs used only inside this fn (no live-in, cross-call or table-made def; 7 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let fn_v1 /* r205 */, arr_v2 /* r205 */, v3 /* r205 */, v4 /* r202 */, v5 /* r205 */, v6 /* r202 */, v7 /* r205 */, v8 /* r202 */, v9 /* r205 */, v10 /* r202 */;
  let v11 /* r205 */, v12 /* r202 */, v13 /* r205 */, v14 /* r202 */, v15 /* r205 */, v16 /* r202 */, v17 /* r205 */, v18 /* r202 */, v19 /* r205 */, v20 /* r202 */;
  let v21 /* r205 */, ctx2d_v23 /* r204 */, fn_v24 /* r202 */, v25 /* r199 */, arr_v26 /* r205 */, arr_v27 /* r204 */, v28 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v1 16, fn_v24 16
  //   Array: arr_v2 16, arr_v26 16, arr_v27 16
  //   OffscreenCanvasRenderingContext2D: ctx2d_v22 16, ctx2d_v23 16
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 3 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  ctx2d_v23 = ctx2d_v22;                                // #28627:235:150 [L d8 h8] +#28630:207:53 +#28640:157:233 +#28643:29:233
  try {
    TP(tryStack, 28766, 166, callDepths);                          // #28646:82:194 [L d8 h8]  try: pushes the catch arm of the enclosing try (TP)
    if (ctx2d_v23) {                                    // #28652:217:160 [L d8 h8]
      fn_v24 = ctx2d_v23.getContextAttributes;          // #28671:116:200 [L d8 h8]
      fn_v1 = fn_v24;                                   // #28695:145:150 [L d8 h8] +#28698:93:53
    } else {
      fn_v1 = ctx2d_v23;                                // #28658:133:53 #28663:114:150 [-] +#28666:250:53 /* never executed in any replay */
    }
    if (fn_v1) {                                        // #28703:38:160 [L d8 h8]
      v25 = ctx2d_v23.getContextAttributes();           // #28722:54:138 [L d8 h8] +#28754:174:53
    } else {
      v25 = null;                                       // #28709:222:53 #28714:2:233 [-] +#28717:74:53 /* never executed in any replay */
    }
    arr_v2 = tryStack.pop();                                 // #28759:129:124 [L d8 h8]
    if (v25) {                                          // #28762:141:53 #28775:46:160 [L d8 h8]
      arr_v27 = [];                                     // #28794:114:107 [L d8 h8]
      v3 = v25.alpha;                                   // #28796:1:200 [L d8 h8]
      v4 = undefined;                                   // #28805:241:233 [L d8 h8]
      if (v3 === v4) {                                  // #28808:249:161 [L d8 h8]
        v5 = null;                                      // #28862:154:233 [-] +#28865:130:53 /* never executed in any replay */
      } else {
        if (v25.alpha) {                                // #28816:37:53 #28821:208:200 #28830:223:160 [L d8 h8]
          v5 = 1;                                       // #28849:210:72 [L d7 h7] +#28852:218:53
        } else {
          v5 = 0;                                       // #28836:243:53 #28841:160:72 [L d1 h1] +#28844:240:53
        }
      }
      v6 = 0; arr_v27[0] = v5;                          // #28870:192:26 [L d8 h8]
      v7 = v25.colorSpace;                              // #28875:151:200 [L d8 h8]
      v8 = undefined;                                   // #28880:175:233 [L d8 h8]
      if (v7 === v8) {                                  // #28883:63:161 [L d8 h8]
        v9 = null;                                      // #28906:160:233 [-] +#28909:240:53 /* never executed in any replay */
      } else {
        v9 = v25.colorSpace;                            // #28891:211:53 #28896:37:200 [L d8 h8] +#28901:161:53
      }
      v10 = 1; arr_v27[1] = v9;                         // #28914:86:26 [L d8 h8]
      v11 = v25.colorType;                              // #28919:85:200 [L d8 h8]
      v12 = undefined;                                  // #28924:245:233 [L d8 h8]
      if (v11 === v12) {                                // #28927:237:161 [L d8 h8]
        v13 = null;                                     // #28950:34:233 [-] +#28953:234:53 /* never executed in any replay */
      } else {
        v13 = v25.colorType;                            // #28935:73:53 #28940:196:200 [L d8 h8] +#28945:132:53
      }
      v14 = 2; arr_v27[2] = v13;                        // #28958:156:26 [L d8 h8]
      v15 = undefined;                                  // #28963:224:233 [L d8 h8]
      v16 = v25.desynchronized;                         // #28966:55:200 [L d8 h8]
      if (v15 === v16) {                                // #28971:167:161 [L d8 h8]
        v17 = null;                                     // #29021:197:233 [-] +#29024:193:53 /* never executed in any replay */
      } else {
        if (v25.desynchronized) {                       // #28979:155:53 #28984:26:200 #28989:129:160 [L d8 h8]
          v17 = 1;                                      // #29008:200:72 [-] +#29011:120:53 /* never executed in any replay */
        } else {
          v17 = 0;                                      // #28995:141:53 #29000:190:72 [L d8 h8] +#29003:22:53
        }
      }
      v18 = 3; arr_v27[3] = v17;                        // #29029:80:26 [L d8 h8]
      v19 = undefined;                                  // #29034:196:233 [L d8 h8]
      v20 = v25.willReadFrequently;                     // #29037:139:200 [L d8 h8]
      if (v19 === v20) {                                // #29042:171:161 [L d8 h8]
        v21 = null;                                     // #29092:155:233 [-] +#29095:191:53 /* never executed in any replay */
      } else {
        if (v25.willReadFrequently) {                   // #29050:143:53 #29055:75:200 #29060:46:160 [L d8 h8]
          v21 = 1;                                      // #29079:108:72 [L d6 h6] +#29082:140:53
        } else {
          v21 = 0;                                      // #29066:198:53 #29071:105:72 [L d2 h2] +#29074:213:53
        }
      }
      v28 = 4; arr_v27[4] = v21;                        // #29100:251:26 [L d8 h8]
      arr_v26 = arr_v27;                                // #29105:188:150 [L d8 h8] +#29108:156:53
    } else {
      arr_v26 = null;                                   // #28781:198:53 #28786:0:233 [-] +#28789:208:53 /* never executed in any replay */
    }
    return arr_v26;                                     // #29113:135:245 [L d8 h8]
  } catch (caught) {
    outside("L28769_123");                              // #28767:123:150 [-]  L28769_123 is not a step of this fn: the invocation aborts (self-error, entry-only fallback) /* never executed in any replay */
  }
}