require("esbuild")
  .build({
    charset: 'utf8',
    entryPoints: ["./src/app.js"],
    bundle: true,
    minify: true,
    outdir: "dist",
    sourcemap: true,
    watch: true,
  })
  .then(() => console.log("Build done ⚡"))
  .catch(() => process.exit(1));
