function fn_OfflineAudioContext_cb_232344(win_v10 /* r70 */, audioBuffer_v11 /* r227 */) { // entry L232344_159; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 24 register webs used only inside this fn (no live-in, cross-call or table-made def; 15 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let audioBuffer_v1 /* r202 */, v2 /* r205 */, f32_v3 /* r204 */, v4 /* r202 */, v5 /* r205 */, fn_v6 /* r205 */, set_v7 /* r205 */, v8 /* r204 */, v9 /* r205 */, v12 /* r202 */;
  let v13 /* r199 */, v14 /* r198 */, v15 /* r202 */, v16 /* r202 */, set_v17 /* r199 */, fn_v18 /* r198 */, v19 /* r202 */, v20 /* r204 */, v21 /* r204 */, v22 /* r204 */;
  let v23 /* r204 */, v24 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   AudioBuffer: audioBuffer_v1 3, audioBuffer_v11 3
  //   Float32Array: f32_v3 3
  //   Function: fn_v6 3, fn_v18 3
  //   Set: set_v7 3, set_v17 3
  //   Window: win_v10 3
  // H133 rewrites: 1 single-use temps folded (1 of them expressions, H135), 4 dead register writes dropped, 1 constants propagated (1 uses), 0 string keys as .member; 1 webs kept as registers (retOut 1)
  audioBuffer_v1 = audioBuffer_v11;                     // #232345:208:150 [L d1 h1 c1]
  v2 = 0;                                               // #232348:96:53 #232358:40:233 #232361:223:72 [L d1 h1 c1]
  f32_v3 = (audioBuffer_v1).getChannelData(0);          // #232364:52:138 [L d1 h1 c1]
  v12 = !f32_v3;                                        // #232391:141:130 [L d1 h1 c1]
  if (v12) {                                            // #232394:232:160 [L d1 h1 c1]
    v5 = v12;                                           // #232433:213:150 [-] +#232436:145:53 /* never executed in any replay */
  } else {
    v4 = f32_v3.length;                                 // #232400:24:53 #232405:142:200 [L d1 h1 c1]
    v13 = typeof v4;                                    // #232410:2:193 [L d1 h1 c1]
    v14 = "number";                                     // #232413:46:233 [L d1 h1 c1]
    v15 = !(v13 === ("number"));                        // #232418:162:65 #232422:195:130 [L d1 h1 c1]
    v5 = v15;                                           // #232425:100:150 [L d1 h1 c1] +#232428:164:53
  }
  if (v5) {                                             // #232441:91:160 [L d1 h1 c1]
    v23 = true;                                         // #232582:85:233 [-] /* never executed in any replay */
    cell[32] = true;                                    // #232585:231:195 [-] +#232588:219:53 /* never executed in any replay */
  } else {
    fn_v6 = win_v10.Set;                                // #232447:127:53 #232452:120:200 [L d1 h1 c1]
    set_v7 = new fn_v6(f32_v3);                         // #232459:4:1 [L d1 h1 c1]
    v8 = 1;                                             // #232464:75:72 [L d1 h1 c1]
    v16 = set_v7.size;                                  // #232467:182:200 [L d1 h1 c1]
    if (v8 === v16) {                                   // #232475:234:161 [L d1 h1 c1]
      set_v17 = set_v7;                                 // #232492:8:150 [L d1 h1 c1]
      fn_v18 = set_v7.has;                              // #232495:191:200 [L d1 h1 c1]
      v19 = cell[24];                                   // #232502:238:236 [L d1 h1 c1]
      v9 = fn_v18.call(set_v17, v19);                   // #232505:199:138 [L d1 h1 c1]
      v20 = !v9;                                        // #232522:148:130 [L d1 h1 c1]
      if (v20) {                                        // #232525:147:160 [L d1 h1 c1]
        v21 = true;                                     // #232544:108:233 [-] /* never executed in any replay */
        cell[33] = true;                                // #232547:98:195 [-] +#232550:71:150 +#232553:187:53 /* never executed in any replay */
      } else {
        // #232531:215:53 #232536:75:150 #232539:175:53 [L d1 h1 c1]
      }
    } else {
      v22 = true;                                       // #232563:138:233 [-] /* never executed in any replay */
      cell[32] = true;                                  // #232566:136:195 [-] +#232569:85:150 +#232572:17:53 /* never executed in any replay */
    }
  }
  v24 = undefined;                                      // #232593:187:233 [L d1 h1 c1]
  return v24;                                           // #232596:31:245 [L d1 h1 c1]
}