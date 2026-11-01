function fn_navigator_cb_175917(permissionStatus_v4 /* r227 */) { // entry L175917_202; H134 ERF (readExec, structured): the runtime executes the statements and the control flow of this text
  // H133 fn locals: 11 register webs used only inside this fn (no live-in, cross-call or table-made def; 8 of them reach RET, H134); each name writes through to its home register, so the register file at RET is unchanged
  // H139 parameters: 1 of them are the fn header's parameters (bound to their home register when the invocation starts: the fn-entry value)
  let v1 /* r202 */, v2 /* r204 */, v3 /* r204 */, permissionStatus_v5 /* r199 */, v6 /* r205 */, v7 /* r192 */, v8 /* r196 */, v9 /* r198 */, v10 /* r204 */, v11 /* r202 */;
  // names: every value written in the three erfTypes runs had the class after ":" (name and value count)
  //   PermissionStatus: permissionStatus_v4 12, permissionStatus_v5 12
  // H133 rewrites: 0 single-use temps folded (0 of them expressions, H135), 0 dead register writes dropped, 1 constants propagated (1 uses), 1 string keys as .member; 1 webs kept as registers (retOut 1)
  permissionStatus_v5 = permissionStatus_v4;            // #175918:15:150 [L d4 h4 c4]
  v6 = {};                                              // #175921:99:53 #175931:50:159 [L d4 h4 c4]
  v1 = "name";                                          // #175933:158:233 [L d4 h4 c4]
  v2 = permissionStatus_v5.name;                        // #175938:125:200 [L d4 h4 c4]
  if (v2) {                                             // #175943:24:160 [L d4 h4 c4]
    v9 = v2;                                            // #175972:249:150 [L d4 h4 c4] +#175975:37:53
  } else {
    v3 = cell[28];                                      // #175949:136:53 #175954:3:236 [-] /* never executed in any replay */
    v7 = cell[34];                                      // #175957:34:236 [-] /* never executed in any replay */
    v8 = v3[v7];                                        // #175960:244:7 [-] /* never executed in any replay */
    v9 = v8;                                            // #175964:17:150 [-] +#175967:221:53 /* never executed in any replay */
  }
  v6.name = v9;                                         // #175980:221:199 [L d4 h4 c4]
  v10 = "state";                                        // #175984:93:233 [L d4 h4 c4]
  v11 = permissionStatus_v5.state;                      // #175993:0:200 [L d4 h4 c4]
  v6.state = v11;                                       // #176002:154:199 [L d4 h4 c4]
  return v6;                                            // #176006:66:245 [L d4 h4 c4]
}