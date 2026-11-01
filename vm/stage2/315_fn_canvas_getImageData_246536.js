function fn_canvas_getImageData_246536(win_v37 /* r70 */) { // entry L246526_70; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 69 register webs used only inside this fn (no live-in, cross-call or table-made def; 33 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r199 */, v2 /* r196 */, v3 /* r205 */, v4 /* r195 */, doc_v5 /* r199 */, v6 /* r205 */, v7 /* r205 */, v8 /* r199 */, v9 /* r205 */, v10 /* r199 */;
  let fn_v11 /* r205 */, style_v12 /* r205 */, v13 /* r199 */, v14 /* r195 */, v15 /* r193 */, v16 /* r195 */, v17 /* r193 */, v18 /* r195 */, v19 /* r193 */, v20 /* r195 */;
  let v21 /* r205 */, v22 /* r199 */, v23 /* r247 */, v24 /* r246 */, v25 /* r198 */, v26 /* r199 */, ctx2d_v27 /* r246 */, fn_v28 /* r245 */, v29 /* r198 */, v30 /* r247 */;
  let v31 /* r202 */, imageData_v32 /* r204 */, v33 /* r202 */, v34 /* r204 */, v35 /* r204 */, v36 /* r202 */, canvas_v38 /* r204 */, fn_v39 /* r198 */, fn_v40 /* r196 */, v41 /* r193 */;
  let style_v42 /* r195 */, canvas_v43 /* r199 */, ctx2d_v44 /* r202 */, v45 /* r205 */, v46 /* r244 */, ctx2d_v47 /* r246 */, fn_v48 /* r245 */, v49 /* r199 */, v50 /* r198 */, v51 /* r247 */;
  let uint8ClampedArray_v52 /* r196 */, v53 /* r205 */, v54 /* r195 */, v55 /* r250 */, v56 /* r252 */, v57 /* r253 */, v58 /* r254 */, v59 /* r192 */, v60 /* r193 */, v61 /* r202 */;
  let v62 /* r204 */, v63 /* r198 */, v64 /* r199 */, v65 /* r202 */, v66 /* r199 */, v67 /* r198 */, v68 /* r202 */, v69 /* r204 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v5 3
  //   Function: fn_v11 3, fn_v28 3, fn_v39 3, fn_v40 3, fn_v48 3
  //   CSSStyleDeclaration: style_v12 3, style_v42 3
  //   CanvasRenderingContext2D: ctx2d_v27 3, ctx2d_v44 3, ctx2d_v47 3
  //   ImageData: imageData_v32 2
  //   Window: win_v37 3
  //   HTMLCanvasElement: canvas_v38 3, canvas_v43 3
  //   Uint8ClampedArray: uint8ClampedArray_v52 2
  // H133 rewrites: 3 single-use temps folded (3 of them expressions, H135), 0 dead register writes dropped, 4 constants propagated (4 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v1 = undefined;                                       // #246527:126:53 #246537:163:233 [L d1 h1 c1]
  v2 = undefined;                                       // #246540:139:233 [L d1 h1 c1]
  v3 = undefined;                                       // #246543:211:233 [L d1 h1 c1]
  v4 = undefined;                                       // #246546:251:233 [L d1 h1 c1]
  doc_v5 = win_v37.document;                            // #246549:166:200 #246554:123:150 [L d1 h1 c1]
  v6 = "canvas";                                        // #246557:3:233 [L d1 h1 c1]
  canvas_v38 = doc_v5.createElement("canvas");          // #246567:200:138 [L d1 h1 c1]
  v7 = "height";                                        // #246593:92:233 [L d1 h1 c1]
  v8 = 1; canvas_v38.height = 1;                        // #246598:166:103 [L d1 h1 c1]
  v9 = "width";                                         // #246603:66:233 [L d1 h1 c1]
  v10 = 1; canvas_v38.width = 1;                        // #246608:116:103 [L d1 h1 c1]
  fn_v11 = win_v37.Object;                              // #246613:123:200 [L d1 h1 c1]
  fn_v39 = fn_v11;                                      // #246618:60:150 [L d1 h1 c1]
  fn_v40 = fn_v11.assign;                               // #246621:35:200 [L d1 h1 c1]
  style_v12 = canvas_v38.style;                         // #246631:46:200 [L d1 h1 c1]
  v13 = {};                                             // #246636:8:159 [L d1 h1 c1]
  v14 = "position";                                     // #246638:156:233 [L d1 h1 c1]
  v15 = "absolute";                                     // #246643:224:233 [L d1 h1 c1]
  v13.position = "absolute";                            // #246648:250:199 [L d1 h1 c1]
  v16 = "left";                                         // #246652:70:233 [L d1 h1 c1]
  v17 = "-9999px";                                      // #246660:98:233 [L d1 h1 c1]
  v13.left = "-9999px";                                 // #246671:244:199 [L d1 h1 c1]
  v18 = "top";                                          // #246675:216:233 [L d1 h1 c1]
  v19 = "-9999px";                                      // #246682:44:233 [L d1 h1 c1]
  v13.top = "-9999px";                                  // #246693:22:199 [L d1 h1 c1]
  v20 = "visibility";                                   // #246697:242:233 [L d1 h1 c1]
  v41 = "hidden";                                       // #246711:94:233 [L d1 h1 c1]
  v13.visibility = "hidden";                            // #246721:0:199 [L d1 h1 c1]
  style_v42 = fn_v40.call(fn_v39, style_v12, v13);      // #246725:17:138 [L d1 h1 c1]
  canvas_v43 = canvas_v38;                              // #246746:250:150 [L d1 h1 c1]
  v21 = "2d";                                           // #246749:70:233 [L d1 h1 c1]
  ctx2d_v44 = (canvas_v43).getContext("2d");            // #246755:191:138 [L d1 h1 c1]
  if (ctx2d_v44) {                                      // #246778:210:160 [L d1 h1 c1]
    v22 = "font";                                       // #246801:84:233 [L d1 h1 c1]
    v23 = canvas_v38.height;                            // #246806:219:200 [L d1 h1 c1]
    v24 = "px sans-serif";                              // #246811:227:233 [L d1 h1 c1]
    v25 = v23 + "px sans-serif";                        // #246828:44:222 [L d1 h1 c1]
    ctx2d_v44.font = (v23 + "px sans-serif");           // #246832:22:199 [L d1 h1 c1]
    v26 = KP(246835);                                   // #246836:242:233 [L d1 h1 c1]
    ctx2d_v27 = ctx2d_v44;                              // #246850:151:150 [L d1 h1 c1]
    fn_v28 = ctx2d_v44.fillText;                        // #246853:210:200 [L d1 h1 c1]
    v29 = 0;                                            // #246865:97:72 [L d1 h1 c1]
    v30 = canvas_v38.height;                            // #246868:244:200 [L d1 h1 c1]
    v46 = fn_v28.call(ctx2d_v27, v26, 0, v30);          // #246873:53:138 [L d1 h1 c1]
    ctx2d_v47 = ctx2d_v44;                              // #246897:142:150 [L d1 h1 c1]
    fn_v48 = ctx2d_v44.getImageData;                    // #246900:173:200 [L d1 h1 c1]
    v31 = 0;                                            // #246905:144:72 [L d1 h1 c1]
    v49 = 0;                                            // #246908:167:72 [L d1 h1 c1]
    v50 = canvas_v38.width;                             // #246911:162:200 [L d1 h1 c1]
    v51 = canvas_v38.height;                            // #246916:113:200 [L d1 h1 c1]
    imageData_v32 = fn_v48.call(ctx2d_v47, 0, v49, v50, v51);  // #246921:254:138 [L d1 h1 c1]
    uint8ClampedArray_v52 = imageData_v32.data;         // #246950:93:200 [L d1 h1]
    v53 = "gayOE4";                                     // #246955:221:233 [L d1 h1]
    v54 = 0;                                            // #246965:0:72 [L d1 h1]
    v55 = 4;                                            // #246968:87:72 [L d1 h1]
    v56 = "length";                                     // #246971:111:233 [L d1 h1]
    v57 = 3;                                            // #246976:202:72 [L d1 h1]
    v58 = 0;                                            // #246979:121:72 [L d1 h1]
    v59 = 1;                                            // #246982:44:72 [L d1 h1]
    v60 = 2;                                            // #246985:211:72 [L d1 h1] +#246988:23:53
    loop_L247000_138: for (;;) {
      v61 = uint8ClampedArray_v52[v56];                 // #247001:188:7 [L d1 h1]
      L247150_108: {
        v62 = v54 < v61; if (v54 < v61) {               // #247005:77:186 [L d1 h1]
          v33 = v54 + v57;                              // #247023:187:222 [L d1 h1]
          v34 = uint8ClampedArray_v52[v33];             // #247027:105:7 [L d1 h1]
          if (v34 === v58) {                            // #247031:145:161 [L d1 h1]
            // #247048:46:53 [-] /* never executed in any replay */
          } else {
            v63 = v54 + v59;                            // #247053:253:222 [L d1 h1]
            v64 = uint8ClampedArray_v52[v54]; v35 = uint8ClampedArray_v52[v63];  // #247057:134:38 [L d1 h1]
            v65 = !(v35 === v64);                       // #247063:154:65 #247067:219:130 [L d1 h1]
            if (v65) {                                  // #247070:126:160 [L d1 h1]
              v69 = v65;                                // #247108:60:150 [L d1 h1] +#247111:28:53
            } else {
              v66 = uint8ClampedArray_v52[v54];         // #247076:214:53 #247081:70:7 [-] /* never executed in any replay */
              v36 = v54 + v60;                          // #247085:195:222 [-] /* never executed in any replay */
              v67 = uint8ClampedArray_v52[v36];         // #247089:81:7 [-] /* never executed in any replay */
              v68 = !(v66 === v67);                     // #247093:249:65 #247097:126:130 [-] /* never executed in any replay */
              v69 = v68;                                // #247100:243:150 [-] +#247103:183:53 /* never executed in any replay */
            }
            if (v69) {                                  // #247116:128:160 [L d1 h1]
              v53 = "KmwY0";                            // #247127:60:233 [L d1 h1]
              break L247150_108;                        // #247136:28:53 [L d1 h1]
            }
            // #247122:80:53 [-] /* never executed in any replay */
          }
          v54 = v54 + v55;                              // #246993:46:180 [-] /* never executed in any replay */
          continue loop_L247000_138;
        }
      }
      return v53;                                       // #247151:76:245 [L d1 h1]
    }
  } else {
    v45 = "gSKkY8";                                     // #246784:218:53 #246789:57:233 [-] /* never executed in any replay */
    return "gSKkY8";                                    // #246799:37:245 [-] /* never executed in any replay */
  }
}