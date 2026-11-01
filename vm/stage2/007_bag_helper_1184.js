function bag_helper_1184(win_v18 /* r70 */, v19 /* r221 */, v20 /* r227 */) { // entry L1184_135; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 30 register webs used only inside this fn (no live-in, cross-call or table-made def; 13 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 3 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value); 1 CLOS binds ("NAME = clos;": bound to the closure the step writes)
  let v1 /* r202 */, win_v2 /* r204 */, crypto_v3 /* r199 */, subtleCrypto_v4 /* r204 */, win_v5 /* r202 */, crypto_v6 /* r199 */, subtleCrypto_v7 /* r202 */, fn_v8 /* r202 */, enc_v9 /* r202 */, enc_v10 /* r204 */;
  let u8_v11 /* r202 */, win_v12 /* r199 */, crypto_v13 /* r204 */, subtleCrypto_v14 /* r198 */, v15 /* r204 */, v16 /* r204 */, v17 /* r204 */, v21 /* r205 */, promise_v22 /* r199 */, fn_v23 /* r198 */;
  let fn_v24 /* r202 */, promise_v25 /* r204 */, v26 /* r202 */, v27 /* r199 */, v28 /* r198 */, v29 /* r204 */, v30 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   Window: win_v2 36, win_v5 36, win_v12 36, win_v18 36
  //   Crypto: crypto_v3 36, crypto_v6 36, crypto_v13 36
  //   SubtleCrypto: subtleCrypto_v4 36, subtleCrypto_v7 36, subtleCrypto_v14 36
  //   Function: fn_v8 36, fn_v23 36, fn_v24 36
  //   TextEncoder: enc_v9 36, enc_v10 36
  //   Uint8Array: u8_v11 36
  //   Promise: promise_v22 36, promise_v25 36
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  v21 = v20;                                            // #1185:24:150 [L d13 h14 c9]
  v1 = undefined;                                       // #1188:136:53 #1198:3:233 [L d13 h14 c9]
  win_v2 = win_v18[v19];                                // #1201:145:7 [L d13 h14 c9]
  crypto_v3 = win_v2.crypto;                            // #1205:100:200 [L d13 h14 c9]
  if (crypto_v3) {                                      // #1210:35:160 [L d13 h14 c9]
    win_v5 = win_v18[v19];                              // #1229:35:7 [L d13 h14 c9]
    crypto_v6 = win_v5.crypto;                          // #1233:46:200 [L d13 h14 c9]
    subtleCrypto_v7 = crypto_v6.subtle;                 // #1238:205:200 [L d13 h14 c9]
    subtleCrypto_v4 = subtleCrypto_v7;                  // #1248:198:150 [L d13 h14 c9] +#1251:254:53
  } else {
    subtleCrypto_v4 = crypto_v3;                        // #1216:39:53 #1221:243:150 [-] +#1224:183:53 /* never executed in any replay */
  }
  if (subtleCrypto_v4) {                                // #1256:204:160 [L d13 h14 c9]
    fn_v8 = win_v18.TextEncoder;                        // #1267:167:200 [L d13 h14 c9]
    enc_v9 = new fn_v8();                               // #1282:55:1 [L d13 h14 c9]
    enc_v10 = enc_v9;                                   // #1286:8:150 [L d13 h14 c9]
    u8_v11 = (enc_v10).encode(v21);                     // #1289:249:138 [L d13 h14 c9]
    win_v12 = win_v18[v19];                             // #1308:47:7 [L d13 h14 c9]
    crypto_v13 = win_v12.crypto;                        // #1312:10:200 [L d13 h14 c9]
    subtleCrypto_v14 = crypto_v13.subtle;               // #1317:57:200 [L d13 h14 c9]
    v15 = "SHA-256";                                    // #1327:73:233 [L d13 h14 c9]
    promise_v22 = subtleCrypto_v14.digest("SHA-256", u8_v11);  // #1338:118:138 [L d13 h14 c9]
    fn_v23 = promise_v22.then;                          // #1358:245:200 [L d13 h14 c9]
    fn_v24 = clos;                                      // #1363:8:216 [L d13 h14 c9]  closure creation (operands from the byte stream); then fn_v24 = its home register (H139 CLOS bind)
    promise_v25 = fn_v23.call(promise_v22, fn_v24);     // #1375:249:138 [L d13 h14 c9]
    return promise_v25;                                 // #1393:229:245 [L d13 h14 c9]
  }
  v16 = win_v18.Promise;                                // #1262:108:53 #1395:37:200 [-] /* never executed in any replay */
  v26 = v16;                                            // #1400:190:150 [-] /* never executed in any replay */
  v27 = v16.resolve;                                    // #1403:29:200 [-] /* never executed in any replay */
  v17 = win_v18[v19];                                   // #1408:195:7 [-] /* never executed in any replay */
  v28 = v17;                                            // #1412:100:150 [-] /* never executed in any replay */
  v29 = v28.iqzpL9(v21);                                // #1415:229:138 [-] /* never executed in any replay */
  v30 = v27.call(v26, v29);                             // #1434:162:138 [-] /* never executed in any replay */
  return v30;                                           // #1455:42:245 [-] /* never executed in any replay */
}