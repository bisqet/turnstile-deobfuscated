function fn_then_176447(win_v36 /* r70 */, batteryManager_v37 /* r227 */) { // entry L176447_106; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 55 register webs used only inside this fn (no live-in, cross-call or table-made def; 20 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r205 */, v2 /* r205 */, v3 /* r205 */, v4 /* r205 */, v5 /* r199 */, v6 /* r202 */, v7 /* r205 */, v8 /* r202 */, v9 /* r199 */, v10 /* r199 */;
  let v11 /* r202 */, v12 /* r202 */, v13 /* r202 */, v14 /* r196 */, v15 /* r202 */, v16 /* r204 */, v17 /* r204 */, v18 /* r204 */, v19 /* r196 */, v20 /* r204 */;
  let v21 /* r196 */, v22 /* r204 */, v23 /* r204 */, v24 /* r196 */, v25 /* r196 */, v26 /* r204 */, v27 /* r204 */, v28 /* r196 */, v29 /* r204 */, v30 /* r204 */;
  let v31 /* r204 */, v32 /* r205 */, v33 /* r202 */, promise_v34 /* r205 */, fn_v35 /* r205 */, batteryManager_v38 /* r204 */, v39 /* r198 */, v40 /* r199 */, v41 /* r202 */, v42 /* r198 */;
  let v43 /* r195 */, v44 /* r195 */, v45 /* r193 */, v46 /* r195 */, v47 /* r193 */, v48 /* r196 */, v49 /* r195 */, v50 /* r193 */, v51 /* r196 */, promise_v52 /* r204 */;
  let fn_v53 /* r202 */, promise_v54 /* r199 */, v55 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Promise: promise_v34 3, promise_v52 3, promise_v54 3
  //   Function: fn_v35 3, fn_v53 3
  //   Window: win_v36 3
  //   BatteryManager: batteryManager_v37 3, batteryManager_v38 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 2 dead register writes dropped, 1 constants propagated (1 uses), 4 string keys as .member; 1 webs kept as registers (retOut 1)
  batteryManager_v38 = batteryManager_v37;              // #176448:47:150 [L d1 h1 c1]
  v39 = undefined;                                      // #176451:3:53 #176461:173:233 [L d1 h1 c1]
  v40 = undefined;                                      // #176464:237:233 #176467:45:233 [L d1 h1 c1]
  v41 = undefined;                                      // #176470:109:233 [L d1 h1 c1]
  v1 = cell[31];                                        // #176473:100:236 [L d1 h1 c1]
  if (!(v1)) {                                          // #176476:35:160 [L d1 h1 c1]
    v2 = true;                                          // #176482:39:53 #176487:0:233 [L d1 h1 c1]
    cell[31] = true;                                    // #176490:166:195 [L d1 h1 c1]
    v3 = null;                                          // #176493:66:233 [L d1 h1 c1]
    if (batteryManager_v38 === v3) {                    // #176496:70:161 [L d1 h1 c1]
      v4 = false;                                       // #176513:196:233 [-] +#176516:132:53 /* never executed in any replay */
    } else {
      v5 = undefined;                                   // #176521:12:233 [L d1 h1 c1]
      v6 = !(batteryManager_v38 === (undefined));       // #176524:136:65 #176528:145:130 [L d1 h1 c1]
      v4 = v6;                                          // #176531:122:150 [L d1 h1 c1] +#176534:226:53
    }
    if (v4) {                                           // #176539:224:160 [L d1 h1 c1]
      v42 = batteryManager_v38.charging;                // #176550:185:200 [L d1 h1 c1]
      v7 = batteryManager_v38.level;                    // #176562:236:200 [L d1 h1 c1]
      v8 = Infinity;                                    // #176571:240:233 [L d1 h1 c1]
      v9 = batteryManager_v38.chargingTime;             // #176574:7:200 [L d1 h1 c1]
      if (v8 === v9) {                                  // #176590:55:161 [L d1 h1 c1]
        v10 = -1;                                       // #176627:66:72 #176630:242:189 [-] /* never executed in any replay */
        v12 = v10;                                      // #176633:151:150 [-] +#176636:203:53 /* never executed in any replay */
      } else {
        v10 = batteryManager_v38.chargingTime;          // #176598:235:53 #176603:232:200 [L d1 h1 c1]
        v11 = v10;                                      // #176619:53:150 [L d1 h1 c1] +#176622:113:53
      }
      v13 = batteryManager_v38.dischargingTime;         // #176641:81:200 [L d1 h1 c1]
      v14 = Infinity;                                   // #176660:1:233 [L d1 h1 c1]
      if (v13 === v14) {                                // #176663:201:161 [L d1 h1 c1]
        v17 = 1;                                        // #176703:255:72 [L d1 h1 c1]
        v15 = -(1);                                     // #176706:251:189 [L d1 h1 c1]
        v18 = -1;                                       // #176709:188:150 [L d1 h1 c1] +#176712:156:53
      } else {
        v15 = batteryManager_v38.dischargingTime;       // #176671:181:53 #176676:25:200 [-] /* never executed in any replay */
        v16 = v15;                                      // #176695:226:150 [-] +#176698:170:53 /* never executed in any replay */
      }
      v19 = typeof v42;                                 // #176717:12:193 [L d1 h1 c1]
      v43 = "boolean";                                  // #176720:144:233 [L d1 h1 c1]
      v20 = v19 === ("boolean");                        // #176725:252:65 [L d1 h1 c1]
      if (v20) {                                        // #176729:91:160 [L d1 h1 c1]
        v44 = typeof v10;                               // #176748:90:193 [L d1 h1 c1]
        v45 = "number";                                 // #176751:38:233 [L d1 h1 c1]
        v22 = v44 === ("number");                       // #176756:186:65 [L d1 h1 c1]
        v21 = v22;                                      // #176760:63:150 [L d1 h1 c1] +#176763:211:53
      } else {
        v21 = v20;                                      // #176735:127:53 #176740:167:150 [-] +#176743:155:53 /* never executed in any replay */
      }
      if (v21) {                                        // #176768:133:160 [L d1 h1 c1]
        v24 = win_v36.isFinite(v10);                    // #176787:240:138 [L d1 h1 c1]
        v23 = v24;                                      // #176808:29:150 [L d1 h1 c1] +#176811:185:53
      } else {
        v23 = v21;                                      // #176774:129:53 #176779:76:150 [-] +#176782:236:53 /* never executed in any replay */
      }
      if (v23) {                                        // #176816:154:160 [L d1 h1 c1]
        v46 = typeof v15;                               // #176835:124:193 [L d1 h1 c1]
        v47 = "number";                                 // #176838:64:233 [L d1 h1 c1]
        v26 = v46 === ("number");                       // #176843:236:65 [L d1 h1 c1]
        v25 = v26;                                      // #176847:41:150 [L d1 h1 c1] +#176850:149:53
      } else {
        v25 = v23;                                      // #176822:130:53 #176827:69:150 [-] +#176830:65:53 /* never executed in any replay */
      }
      if (v25) {                                        // #176855:69:160 [L d1 h1 c1]
        v28 = win_v36.isFinite(v15);                    // #176874:124:138 [L d1 h1 c1]
        v27 = v28;                                      // #176895:121:150 [L d1 h1 c1] +#176898:165:53
      } else {
        v27 = v25;                                      // #176861:65:53 #176866:95:150 [-] +#176869:115:53 /* never executed in any replay */
      }
      if (v27) {                                        // #176903:83:160 [L d1 h1 c1]
        v49 = typeof v7;                                // #176922:56:193 [L d1 h1 c1]
        v50 = "number";                                 // #176925:12:233 [L d1 h1 c1]
        v29 = v49 === ("number");                       // #176930:136:65 [L d1 h1 c1]
        v48 = v29;                                      // #176934:85:150 [L d1 h1 c1] +#176937:17:53
      } else {
        v48 = v27;                                      // #176909:151:53 #176914:220:150 [-] +#176917:60:53 /* never executed in any replay */
      }
      if (v48) {                                        // #176942:102:160 [L d1 h1 c1]
        v51 = win_v36.isFinite(v7);                     // #176961:78:138 [L d1 h1 c1]
        v30 = v51;                                      // #176982:131:150 [L d1 h1 c1] +#176985:7:53
      } else {
        v30 = v48;                                      // #176948:30:53 #176953:229:150 [-] +#176956:97:53 /* never executed in any replay */
      }
      if (v30) {                                        // #176990:196:160 [L d1 h1 c1]
        v31 = cell[20];                                 // #177001:108:236 [L d1 h1 c1]
        v31.EWXZ4 = v42;                                // #177004:193:142 [L d1 h1 c1]
        v31.umfK5 = v10;                                // #177013:2:142 [L d1 h1 c1]
        v31.PNwxC2 = v15;                               // #177022:127:142 [L d1 h1 c1]
        v31.HaJRf0 = v7;                                // #177032:72:142 [L d1 h1 c1]
        v32 = "DlXb5";                                  // #177042:220:233 [L d1 h1 c1]
        v33 = true;                                     // #177051:32:233 [L d1 h1 c1]
        v31.DlXb5 = true;                               // #177054:217:210 [L d1 h1 c1]
      } else {
        // #176996:132:53 [-] /* never executed in any replay */
      }
    } else {
      // #176545:48:53 [-] /* never executed in any replay */
    }
    promise_v34 = cell[27];                             // #177062:64:236 [L d1 h1 c1]
    promise_v52 = cell[27];                             // #177065:45:150 [L d1 h1 c1]
    fn_v53 = cell[27].then;                             // #177068:144:200 [L d1 h1 c1]
    fn_v35 = clos;                                      // #177073:247:216 [L d1 h1 c1]  closure creation (operands from the byte stream); then fn_v35 = its home register (H139 CLOS bind)
    promise_v54 = fn_v53.call(promise_v52, fn_v35);     // #177086:236:138 [L d1 h1 c1] +#177104:12:53
  }
  v55 = undefined;                                      // #177109:1:233 [L d1 h1 c1]
  return v55;                                           // #177112:205:245 [L d1 h1 c1]
}