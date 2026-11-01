// Builds dist/index.html: one self-contained file (JS + CSS inlined).
import { build } from "esbuild";
import { readFileSync, writeFileSync, mkdirSync } from "node:fs";
const r = await build({
  entryPoints: ["src/main.tsx"], bundle: true, minify: true, format: "iife", write: false,
  jsx: "automatic", define: { "process.env.NODE_ENV": '"production"' }, legalComments: "eof", target: "es2020",
});
const js = r.outputFiles[0].text.replace(/<\/script/gi, "<\\/script");
const css = readFileSync("src/styles.css", "utf8").replace(/\s*\n\s*/g, "\n");
const html = `<!doctype html>
<html lang="en" class="dark" style="color-scheme:dark;background:#070707">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark"><link rel="icon" href="data:,">
<title>Turnstile payload variability — build 3158346939</title>
<style>${css}</style>
</head>
<body><div id="root"></div>
<script>${js}</script>
</body>
</html>
`;
mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", html);
console.log("dist/index.html", html.length, "bytes");
