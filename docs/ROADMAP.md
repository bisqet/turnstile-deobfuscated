# Roadmap

All steps are deterministic: derive facts by executing/instrumenting the real Cloudflare code,
not by heuristics. Research only — see README constraints.

1. **Execution-based strings / constants / opcode semantics** — recover the string table,
   constants and per-opcode semantics by running the real code, not pattern-matching.
2. **Live + cold key propagation and PC-accurate lift** — propagate the decryption key both
   from live captures and cold (offline) runs, and lift bytecode with exact PC tracking.
3. **Readable JS** — of the orchestrator, both VM programs, and the payload field offsets.
4. **Hook vs no-hook diff** — compare behaviour/output with instrumentation hooks vs without,
   to prove the hooks do not change what is observed. **Started (H32):** op52 R-sequence identical
   across clean vs webdriver/runtime/native; see `hook-vs-clean-diff.json`. T sequences remain
   async-noisy across clean replays — further alignment still open.
