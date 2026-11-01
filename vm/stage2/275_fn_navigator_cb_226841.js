function fn_navigator_cb_226841(win_v5 /* r70 */, elBody_v6 /* r227 */) { // entry L226841_162; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 18 register webs used only inside this fn (no live-in, cross-call or table-made def; 14 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r205 */, fn_v2 /* r205 */, v3 /* r202 */, v4 /* r202 */, elBody_v7 /* r202 */, v8 /* r199 */, v9 /* r196 */, v10 /* r204 */, v11 /* r205 */, namedNodeMap_v12 /* r199 */;
  let v13 /* r196 */, arr_v14 /* r205 */, v15 /* r204 */, v16 /* r195 */, v17 /* r198 */, v18 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Function: fn_v2 3
  //   Window: win_v5 3
  //   HTMLBodyElement: elBody_v6 3, elBody_v7 3
  //   NamedNodeMap: namedNodeMap_v12 3
  //   Array: arr_v14 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  elBody_v7 = elBody_v6;                                // #226842:135:150 [L d1 h1 c1]
  v8 = undefined;                                       // #226845:251:53 #226855:43:233 [L d1 h1 c1]
  v9 = undefined;                                       // #226858:243:233 [L d1 h1 c1]
  v1 = undefined;                                       // #226861:155:233 [L d1 h1 c1]
  v10 = undefined;                                      // #226864:163:233 [L d1 h1 c1]
  if (elBody_v7) {                                      // #226867:38:160 [L d1 h1 c1]
    namedNodeMap_v12 = elBody_v7.attributes;            // #226882:145:200 [L d1 h1 c1]
    v13 = namedNodeMap_v12.length;                      // #226896:100:200 [L d1 h1 c1]
    fn_v2 = win_v5.Array;                               // #226901:171:200 [L d1 h1 c1]
    arr_v14 = new fn_v2(v13);                           // #226906:43:1 [L d1 h1 c1]
    v15 = 0;                                            // #226911:150:72 [L d1 h1 c1]
    v16 = 1;                                            // #226914:21:72 [L d1 h1 c1]
    v17 = "name";                                       // #226917:181:233 [L d1 h1 c1] +#226922:241:53
    for (;;) {
      v18 = v15 < v13; if (!(v15 < v13)) {              // #226937:87:186 [L d1 h1 c1]
        return arr_v14;                                 // #226968:222:245 [L d1 h1 c1]
      }
      v4 = namedNodeMap_v12[v15][v17];                  // #226955:50:20 [-] /* never executed in any replay */
      arr_v14[v15] = v4;                                // #226960:35:210 [-] /* never executed in any replay */
      v3 = v15; v15 = v15 + v16;                        // #226927:215:48 [-] /* never executed in any replay */
    }
  } else {
    v11 = [];                                           // #226873:222:53 #226878:204:107 [-] /* never executed in any replay */
    return v11;                                         // #226880:44:245 [-] /* never executed in any replay */
  }
}