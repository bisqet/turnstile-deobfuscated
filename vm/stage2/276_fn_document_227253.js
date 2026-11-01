function fn_document_227253(win_v6 /* r70 */) { // entry L227243_207; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 24 register webs used only inside this fn (no live-in, cross-call or table-made def; 19 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let doc_v1 /* r202 */, elHead_v2 /* r204 */, v3 /* r204 */, v4 /* r204 */, v5 /* r204 */, nodeList_v7 /* r196 */, v8 /* r199 */, v9 /* r195 */, v10 /* r250 */, v11 /* r252 */;
  let v12 /* r253 */, v13 /* r192 */, v14 /* r254 */, v15 /* r193 */, v16 /* r205 */, v17 /* r202 */, v18 /* r204 */, v19 /* r198 */, v20 /* r202 */, v21 /* r204 */;
  let v22 /* r198 */, v23 /* r202 */, v24 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDocument: doc_v1 3
  //   HTMLHeadElement: elHead_v2 3
  //   Window: win_v6 3
  //   NodeList: nodeList_v7 3
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  doc_v1 = win_v6.document;                             // #227244:35:53 #227254:45:200 [L d1 h1 c1]
  elHead_v2 = doc_v1.head;                              // #227259:144:200 [L d1 h1 c1]
  nodeList_v7 = (doc_v1.head).childNodes;               // #227267:39:200 [L d1 h1 c1]
  v8 = "UIPATH_EXTENSION_ID:";                          // #227281:255:233 [L d1 h1 c1]
  v9 = 0;                                               // #227305:26:72 [L d1 h1 c1]
  v10 = 1;                                              // #227308:137:72 [L d1 h1 c1]
  v11 = "length";                                       // #227311:89:233 [L d1 h1 c1]
  v12 = "nodeType";                                     // #227316:233:233 [L d1 h1 c1]
  v13 = "Node";                                         // #227328:57:233 [L d1 h1 c1]
  v14 = "COMMENT_NODE";                                 // #227333:73:233 [L d1 h1 c1]
  v15 = "nodeValue";                                    // #227349:25:233 [L d1 h1 c1]
  v3 = "includes";                                      // #227362:169:233 [L d1 h1 c1]
  v16 = true;                                           // #227374:249:233 [L d1 h1 c1] +#227377:37:53
  while ((v17 = nodeList_v7[v11], v18 = v9 < v17, v9 < v17)) {  // #227392:110:7 | #227396:183:186 [L d9 h9 c9]
    v5 = nodeList_v7[v9][v12];                          // #227414:98:20 [L d8 h8 c8]
    v19 = win_v6[v13][v14];                             // #227419:77:20 [L d8 h8 c8]
    v20 = v5 === v19;                                   // #227424:5:65 [L d8 h8 c8]
    if (v20) {                                          // #227428:128:160 [L d8 h8 c8]
      v22 = nodeList_v7[v9][v15];                       // #227447:200:20 [-] /* never executed in any replay */
      v23 = v22.includes(v8);                           // #227452:185:138 [-] /* never executed in any replay */
      v21 = v23;                                        // #227473:2:150 [-] +#227476:74:53 /* never executed in any replay */
    } else {
      v21 = v20;                                        // #227434:80:53 #227439:249:150 [L d8 h8 c8] +#227442:37:53
    }
    if (v21) {                                          // #227481:203:160 [L d8 h8 c8]
      return v16;                                       // #227492:229:245 [-] /* never executed in any replay */
    }
    v4 = v9; v9 = v9 + v10;                             // #227487:47:53 #227382:9:48 [L d8 h8 c8]
  }
  v24 = false;                                          // #227504:29:233 [L d1 h1 c1]
  return false;                                         // #227507:121:245 [L d1 h1 c1]
}