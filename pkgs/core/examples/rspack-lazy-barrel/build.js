import assert from "node:assert/strict";
import { performance } from "node:perf_hooks";
import { rspack } from "@rspack/core";
import configs from "./rspack.config.js";

const mode = process.argv[2];
assert(["disabled", "enabled"].includes(mode), "Expected disabled or enabled");
let modules = 0;
const start = performance.now();
const compiler = rspack(configs[mode === "enabled" ? 1 : 0]);
compiler.hooks.compilation.tap("count-modules", (compilation) => {
  compilation.hooks.buildModule.tap("count-modules", () => {
    modules++;
  });
});
try {
  await new Promise((resolve, reject) => {
    compiler.run((error, stats) => {
      if (error) return reject(error);
      if (stats.hasErrors())
        return reject(new Error(stats.toString("errors-only")));
      resolve();
    });
  });
} finally {
  await new Promise((resolve, reject) => {
    compiler.close((error) => (error ? reject(error) : resolve()));
  });
}
console.log(JSON.stringify({ mode, ms: performance.now() - start, modules }));
