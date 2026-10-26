import assert from "node:assert/strict";
import { performance } from "node:perf_hooks";
import { rolldown } from "rolldown";
import configs from "./rolldown.config.js";

const mode = process.argv[2];
assert(["disabled", "enabled"].includes(mode), "Expected disabled or enabled");
const { output, ...input } = configs[mode === "enabled" ? 1 : 0];
let modules = 0;
const start = performance.now();
const bundle = await rolldown({
  ...input,
  plugins: [
    {
      name: "count-modules",
      moduleParsed() {
        modules++;
      },
    },
  ],
});
try {
  await bundle.write(output);
} finally {
  await bundle.close();
}
console.log(JSON.stringify({ mode, ms: performance.now() - start, modules }));
