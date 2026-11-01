function probe_32_helper_147599(elDiv_v1 /* r88 */, elDiv_v2 /* r227 */) { // entry L147599_105; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 9 register webs used only inside this fn (no live-in, cross-call or table-made def; 9 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 2 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let elDiv_v3 /* r205 */, elDiv_v4 /* r202 */, v5 /* r198 */, v6 /* r204 */, elDiv_v7 /* r199 */, v8 /* r204 */, v9 /* r205 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   HTMLDivElement: elDiv_v1 15, elDiv_v2 15, elDiv_v3 24, elDiv_v4 15, elDiv_v7 24
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 0 constants propagated (0 uses), 0 string keys as .member; 2 webs kept as registers (retOut 2)
  elDiv_v3 = elDiv_v2;                                  // #147600:242:150 [L d5 h5 c5]
  elDiv_v4 = elDiv_v1;                                  // #147603:151:150 [L d5 h5 c5]
  v5 = "parentNode";                                    // #147606:203:53 #147616:63:233 [L d5 h5 c5]
  v6 = "contains";                                      // #147621:183:233 [L d5 h5 c5] +#147633:107:53
  while (elDiv_v3) {                                     // #147647:138:160 [L d8 h8 c8]
    elDiv_v7 = elDiv_v3;                                // #147658:161:150 [L d8 h8 c8]
    v8 = elDiv_v7.contains(elDiv_v4);                   // #147661:110:138 [L d8 h8 c8]
    if (v8) {                                           // #147682:133:160 [L d8 h8 c8]
      return elDiv_v3;                                  // #147693:83:245 [L d5 h5 c5]
    }
    elDiv_v3 = elDiv_v3[v5];                            // #147688:129:53 #147638:31:7 [L d3 h3 c3] +#147642:51:53
  }
  v9 = undefined;                                       // #147653:178:53 #147705:204:233 [-] /* never executed in any replay */
  return v9;                                            // #147708:44:245 [-] /* never executed in any replay */
}