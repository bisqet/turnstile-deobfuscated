function fn_canvas_getImageData_42503() { // entry L42490_192; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // machine tryStack = r48, callDepths = r194, caught = r147; VM registers (H139, executed handlers): tryStack = the VM try-handler stack ([pc, key, cells, depth] per entry); callDepths = the tryStack length saved per closure call (RET: tryStack.length = callDepths.pop()); caught = the exception value the VM catch rule hands to a catch arm
  // H133 fn locals: 115 register webs used only inside this fn (no live-in, cross-call or table-made def; 112 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  let arr_v1 /* r205 */, imageData_v2 /* r205 */, canvas_v3 /* r205 */, v4 /* r196 */, fn_v5 /* r231 */, v6 /* r195 */, v7 /* r199 */, v8 /* r198 */, v9 /* r196 */, v10 /* r193 */;
  let v11 /* r192 */, v12 /* r193 */, v13 /* r192 */, v14 /* r193 */, v15 /* r192 */, v16 /* r193 */, v17 /* r192 */, arr_v18 /* r204 */, ctx2d_v19 /* r202 */, v20 /* r205 */;
  let fn_v21 /* r231 */, v22 /* r192 */, v23 /* r198 */, v24 /* r196 */, v25 /* r195 */, v26 /* r193 */, v27 /* r254 */, v28 /* r254 */, v29 /* r254 */, v30 /* r254 */;
  let v31 /* r198 */, ctx2d_v32 /* r199 */, v33 /* r205 */, v34 /* r198 */, v35 /* r192 */, v36 /* r196 */, v37 /* r252 */, v38 /* r254 */, v39 /* r253 */, v40 /* r193 */;
  let v41 /* r195 */, v42 /* r192 */, v43 /* r198 */, uint8ClampedArray_v44 /* r198 */, uint8ClampedArray_v45 /* r198 */, v46 /* r196 */, v47 /* r195 */, uint8ClampedArray_v48 /* r198 */, v49 /* r196 */, v50 /* r195 */;
  let uint8ClampedArray_v51 /* r198 */, v52 /* r196 */, v53 /* r195 */, ctx2d_v54 /* r196 */, v55 /* r202 */, v56 /* r198 */, v57 /* r195 */, v58 /* r202 */, v59 /* r202 */, v60 /* r198 */;
  let v61 /* r196 */, v62 /* r195 */, v63 /* r202 */, ctx2d_v64 /* r195 */, fn_v65 /* r193 */, v66 /* r202 */, v67 /* r204 */, v68 /* r202 */, v69 /* r198 */, v70 /* r196 */;
  let v71 /* r192 */, v72 /* r204 */, v73 /* r202 */, v74 /* r198 */, v75 /* r196 */, uint8ClampedArray_v76 /* r195 */, v77 /* r204 */, v78 /* r202 */, v79 /* r198 */, v80 /* r196 */;
  let uint8ClampedArray_v81 /* r196 */, arr_v82 /* r205 */, arr_v83 /* r204 */, v84 /* r202 */, v85 /* r198 */, v86 /* r202 */, v87 /* r202 */, v88 /* r198 */, v89 /* r202 */, v90 /* r202 */;
  let v91 /* r198 */, v92 /* r202 */, v93 /* r202 */, v94 /* r198 */, v95 /* r202 */, arr_v96 /* r202 */, v97 /* r204 */, arr_v98 /* r204 */, v99 /* r202 */, v100 /* r198 */;
  let v101 /* r202 */, v102 /* r202 */, v103 /* r198 */, v104 /* r202 */, v105 /* r202 */, v106 /* r198 */, v107 /* r202 */, v108 /* r202 */, v109 /* r198 */, v110 /* r202 */;
  let arr_v111 /* r202 */, v112 /* r204 */, arr_v113 /* r202 */, v114 /* r204 */, v115 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Array: arr_v1 3, arr_v18 3, arr_v82 2, arr_v83 2, arr_v96 2, arr_v98 2, arr_v111 2, arr_v113 2
  //   ImageData: imageData_v2 3
  //   OffscreenCanvas: canvas_v3 3
  //   Function: fn_v5 3, fn_v21 3, fn_v65 3
  //   OffscreenCanvasRenderingContext2D: ctx2d_v19 3, ctx2d_v32 3, ctx2d_v54 3, ctx2d_v64 3
  //   Uint8ClampedArray: uint8ClampedArray_v44 12, uint8ClampedArray_v45 3, uint8ClampedArray_v48 3, uint8ClampedArray_v51 3, uint8ClampedArray_v76 2, uint8ClampedArray_v81 2
  // H142: 1 CALL binds ("NAME = cell[N](...);": bound to the CALL's return register after a normal return)
  // H133 rewrites: 3 single-use temps folded (2 of them expressions, H135), 15 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 4 webs kept as registers (retOut 4)
  v4 = undefined;                                       // #42491:144:53 #42501:6:233 #42504:34:233 #42507:206:233 #42510:202:233 #42513:214:233 #42516:178:233 [L d1 h1 c1] +#42519:30:233
  try {
    TP(tryStack, 43317, 82, callDepths);                           // #42522:143:194 [L d1 h1 c1]  try: pushes the catch arm of the enclosing try (TP)
    fn_v5 = cell[67];                                   // #42528:126:236 [L d1 h1 c1]
    v6 = undefined;                                     // #42531:186:233 [L d1 h1 c1]
    v7 = 2;                                             // #42534:169:72 #42537:156:72 [L d1 h1 c1]
    v8 = "2d";                                          // #42540:224:233 [L d1 h1 c1]
    v9 = {};                                            // #42546:114:159 [L d1 h1 c1]
    v10 = "alpha";                                      // #42548:222:233 [L d1 h1 c1]
    v11 = false;                                        // #42557:154:233 [L d1 h1 c1]
    v9.alpha = false;                                   // #42560:76:199 [L d1 h1 c1]
    v12 = "colorSpace";                                 // #42564:208:233 [L d1 h1 c1]
    v13 = "srgb";                                       // #42569:68:233 [L d1 h1 c1]
    v9.colorSpace = "srgb";                             // #42577:206:199 [L d1 h1 c1]
    v14 = "colorType";                                  // #42581:202:233 [L d1 h1 c1]
    v15 = "unorm8";                                     // #42586:214:233 [L d1 h1 c1]
    v9.colorType = "unorm8";                            // #42596:152:199 [L d1 h1 c1]
    v16 = "willReadFrequently";                         // #42600:236:233 [L d1 h1 c1]
    v17 = true;                                         // #42605:240:233 [L d1 h1 c1]
    v9.willReadFrequently = true;                       // #42608:202:199 [L d1 h1 c1]
    arr_v18 = MC(v6, fn_v5, 2, v7, v8, v9);             // #42612:33:16 [L d1 h1 c1]
    ctx2d_v19 = arr_v18[1];                             // #42621:52:72 #42624:62:7 [L d1 h1 c1]
    if (ctx2d_v19) {                                    // #42628:21:160 [L d1 h1 c1]
      fn_v21 = cell[67];                                // #42644:160:236 [L d1 h1 c1]
      v22 = undefined;                                  // #42647:212:233 [L d1 h1 c1]
      v23 = 257;                                        // #42650:56:233 [L d1 h1 c1]
      v24 = 158;                                        // #42655:175:72 [L d1 h1 c1]
      v25 = "2d";                                       // #42658:103:233 [L d1 h1 c1]
      v26 = {};                                         // #42664:157:159 [L d1 h1 c1]
      v27 = false;                                      // #42666:29:233 #42675:157:233 [L d1 h1 c1]
      v26.alpha = false;                                // #42678:3:199 [L d1 h1 c1]
      v28 = "srgb";                                     // #42682:107:233 #42687:51:233 [L d1 h1 c1]
      v26.colorSpace = "srgb";                          // #42695:193:199 [L d1 h1 c1]
      v29 = "unorm8";                                   // #42699:177:233 #42704:225:233 [L d1 h1 c1]
      v26.colorType = "unorm8";                         // #42714:55:199 [L d1 h1 c1]
      v30 = false;                                      // #42718:207:233 #42723:7:233 [L d1 h1 c1]
      v26.willReadFrequently = false;                   // #42726:69:199 [L d1 h1 c1]
      arr_v1 = MC(v22, fn_v21, v23, v24, v25, v26);     // #42730:112:16 [L d1 h1 c1]
      v31 = 1;                                          // #42739:7:72 [L d1 h1 c1]
      ctx2d_v32 = arr_v1[v31];                          // #42742:133:7 [L d1 h1 c1]
      if (ctx2d_v32) {                                  // #42746:0:160 [L d1 h1 c1]
        v34 = 2;                                        // #42762:172:72 [L d1 h1 c1]
        v35 = 2;                                        // #42765:83:72 [L d1 h1 c1]
        imageData_v2 = ctx2d_v19.createImageData((2), (2));  // #42768:216:138 [L d1 h1 c1]
        v36 = 3;                                        // #42797:207:72 [L d1 h1 c1]
        v37 = 4;                                        // #42800:170:72 [L d1 h1 c1]
        v38 = "data";                                   // #42803:54:233 [L d1 h1 c1]
        v39 = "length";                                 // #42808:146:233 [L d1 h1 c1]
        v40 = "data";                                   // #42813:126:233 [L d1 h1 c1]
        v41 = 255;                                      // #42818:93:72 [L d1 h1 c1] +#42821:249:53
        while ((v42 = imageData_v2[v38][v39], v43 = v36 < v42, v36 < v42)) {  // #42834:36:20 | #42839:21:186 [L d5 h5 c5]
          uint8ClampedArray_v44 = imageData_v2[v40];    // #42857:9:7 [L d4 h4 c4]
          uint8ClampedArray_v44[v36] = v41;             // #42861:94:210 [L d4 h4 c4]
          v36 = v36 + v37;                              // #42826:226:180 [L d4 h4 c4]
        }
        uint8ClampedArray_v45 = imageData_v2.data;      // #42869:90:200 [L d1 h1 c1]
        v46 = 12;                                       // #42874:201:72 [L d1 h1 c1]
        v47 = 255; uint8ClampedArray_v45[v46] = 255;      // #42877:159:103 [L d1 h1 c1]
        uint8ClampedArray_v48 = imageData_v2.data;      // #42882:186:200 [L d1 h1 c1]
        v49 = 13;                                       // #42887:169:72 [L d1 h1 c1]
        v50 = 131; uint8ClampedArray_v48[v49] = 131;      // #42890:255:103 [L d1 h1 c1]
        uint8ClampedArray_v51 = imageData_v2.data;      // #42895:154:200 [L d1 h1 c1]
        v52 = 14;                                       // #42900:9:72 [L d1 h1 c1]
        v53 = 2; uint8ClampedArray_v51[v52] = 2;        // #42903:223:103 [L d1 h1 c1]
        ctx2d_v54 = ctx2d_v19;                          // #42908:16:150 [L d1 h1 c1]
        v55 = 0;                                        // #42911:39:72 [L d1 h1 c1]
        v56 = 0;                                        // #42914:162:72 [L d1 h1 c1]
        v57 = ctx2d_v54.putImageData(imageData_v2, v55, v56);      // #42917:171:138 [L d1 h1 c1]
        v58 = "#000";                                   // #42944:115:233 #42949:27:233 [L d1 h1 c1]
        ctx2d_v32.fillStyle = "#000";                   // #42957:9:199 [L d1 h1 c1]
        v59 = 0;                                        // #42961:124:72 #42964:227:72 [L d1 h1 c1]
        v60 = 257;                                      // #42967:203:233 [L d1 h1 c1]
        v61 = 158;                                      // #42972:182:72 [L d1 h1 c1]
        v62 = ctx2d_v32.fillRect((0), (0), (257), (158));      // #42975:111:138 [L d1 h1 c1]
        v63 = true;                                     // #42999:39:233 #43024:255:233 [L d1 h1 c1]
        ctx2d_v32.imageSmoothingEnabled = true;         // #43027:93:199 [L d1 h1 c1]
        ctx2d_v64 = ctx2d_v32;                          // #43031:22:150 [L d1 h1 c1]
        fn_v65 = ctx2d_v32.drawImage;                   // #43034:21:200 [L d1 h1 c1]
        v66 = 0;                                        // #43039:88:72 [L d1 h1 c1]
        canvas_v3 = arr_v18[v66];                       // #43042:210:7 [L d1 h1 c1]
        v67 = 0;                                        // #43046:97:72 [L d1 h1 c1]
        v68 = 0;                                        // #43049:116:72 [L d1 h1 c1]
        v69 = 256;                                      // #43052:88:233 [L d1 h1 c1]
        v70 = 256;                                      // #43057:172:233 [L d1 h1 c1]
        v71 = fn_v65.call(ctx2d_v64, canvas_v3, v67, v68, v69, v70);      // #43062:13:138 [L d1 h1 c1]
        v72 = 107;                                      // #43089:112:72 [L d1 h1 c1]
        v73 = 157;                                      // #43092:7:72 [L d1 h1 c1]
        v74 = 1;                                        // #43095:2:72 [L d1 h1 c1]
        v75 = 1;                                        // #43098:209:72 [L d1 h1 c1]
        uint8ClampedArray_v76 = ctx2d_v32.getImageData((107), (157), (1), (1)).data;      // #43101:222:138 #43129:189:200 [L d1 h1]
        v77 = 256;                                      // #43134:189:233 [L d1 h1]
        v78 = 128;                                      // #43139:96:72 [L d1 h1]
        v79 = 1;                                        // #43142:55:72 [L d1 h1]
        v80 = 1;                                        // #43145:114:72 [L d1 h1]
        uint8ClampedArray_v81 = ctx2d_v32.getImageData((256), (128), (1), (1)).data;      // #43148:59:138 #43176:230:200 [L d1 h1]
        arr_v82 = [];                                   // #43181:124:107 [L d1 h1]
        arr_v83 = [];                                   // #43183:58:107 [L d1 h1]
        v84 = 0;                                        // #43185:41:72 [L d1 h1]
        v85 = uint8ClampedArray_v76[v84];               // #43188:159:7 [L d1 h1]
        v86 = 0; arr_v83[0] = v85;                      // #43192:68:26 [L d1 h1]
        v87 = 1;                                        // #43197:139:72 [L d1 h1]
        v88 = uint8ClampedArray_v76[v87];               // #43200:249:7 [L d1 h1]
        v89 = 1; arr_v83[1] = v88;                      // #43204:182:26 [L d1 h1]
        v90 = 2;                                        // #43209:181:72 [L d1 h1]
        v91 = uint8ClampedArray_v76[v90];               // #43212:251:7 [L d1 h1]
        v92 = 2; arr_v83[2] = v91;                      // #43216:48:26 [L d1 h1]
        v93 = 3;                                        // #43221:199:72 [L d1 h1]
        v94 = uint8ClampedArray_v76[v93];               // #43224:69:7 [L d1 h1]
        v95 = 3; arr_v83[3] = v94;                      // #43228:210:26 [L d1 h1]
        arr_v96 = arr_v83;                              // #43233:247:150 [L d1 h1]
        v97 = 0; arr_v82[0] = arr_v96;                  // #43236:60:26 [L d1 h1]
        arr_v98 = [];                                   // #43241:250:107 [L d1 h1]
        v99 = 0;                                        // #43243:233:72 [L d1 h1]
        v100 = uint8ClampedArray_v81[v99];              // #43246:95:7 [L d1 h1]
        v101 = 0; arr_v98[0] = v100;                    // #43250:4:26 [L d1 h1]
        v102 = 1;                                       // #43255:75:72 [L d1 h1]
        v103 = uint8ClampedArray_v81[v102];             // #43258:185:7 [L d1 h1]
        v104 = 1; arr_v98[1] = v103;                    // #43262:118:26 [L d1 h1]
        v105 = 2;                                       // #43267:117:72 [L d1 h1]
        v106 = uint8ClampedArray_v81[v105];             // #43270:187:7 [L d1 h1]
        v107 = 2; arr_v98[2] = v106;                    // #43274:240:26 [L d1 h1]
        v108 = 3;                                       // #43279:135:72 [L d1 h1]
        v109 = uint8ClampedArray_v81[v108];             // #43282:5:7 [L d1 h1]
        v110 = 3; arr_v98[3] = v109;                    // #43286:146:26 [L d1 h1]
        arr_v111 = arr_v98;                             // #43291:183:150 [L d1 h1]
        v112 = 1; arr_v82[1] = arr_v111;                // #43294:252:26 [L d1 h1]
        arr_v113 = cell[74](ctx2d_v32);                 // #43299:121:22 [L d1 h1]  VM call: pushes a frame, the callee body returns into r202; then arr_v113 = r202 (H142 CALL bind)
        v114 = 2; arr_v82[2] = arr_v113;                // #43303:54:26 [L d1 h1]
        return arr_v82;                                 // #43308:110:245 [L d1 h1]
      } else {
        v33 = null;                                     // #42752:208:53 #42757:131:233 [-] /* never executed in any replay */
        return v33;                                     // #42760:199:245 [-] /* never executed in any replay */
      }
    } else {
      v20 = null;                                       // #42634:209:53 #42639:168:233 [-] /* never executed in any replay */
      return v20;                                       // #42642:152:245 [-] /* never executed in any replay */
    }
  } catch (caught) {
    v115 = null;                                        // #43318:119:150 #43321:15:233 [L c1]
    return v115;                                        // #43324:35:245 [L c1]
  }
}