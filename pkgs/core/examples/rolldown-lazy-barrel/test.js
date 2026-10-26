import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";

function build(mode) {
  return JSON.parse(
    execFileSync(process.execPath, ["build.js", mode], {
      cwd: import.meta.dirname,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "inherit"],
    }),
  );
}

function median(values) {
  return values.toSorted((a, b) => a - b)[Math.floor(values.length / 2)];
}

// Warm the filesystem for both modes, but never reuse a compiler or process.
build("disabled");
build("enabled");
const results = { disabled: [], enabled: [] };
for (let sample = 0; sample < 7; sample++) {
  // Alternate order to reduce bias from filesystem caching and machine load.
  const modes = sample % 2 ? ["enabled", "disabled"] : ["disabled", "enabled"];
  for (const mode of modes) results[mode].push(build(mode));
}

const summary = Object.fromEntries(
  Object.entries(results).map(([mode, samples]) => [
    mode,
    {
      ms: median(samples.map((sample) => sample.ms)),
      modules: median(samples.map((sample) => sample.modules)),
    },
  ]),
);
console.table(
  Object.entries(summary).map(([mode, result]) => ({
    lazyBarrel: mode,
    "median build (ms)": result.ms.toFixed(2),
    "modules processed": result.modules,
  })),
);
console.log(
  `Speedup: ${(summary.disabled.ms / summary.enabled.ms).toFixed(2)}x (7 isolated builds per mode)`,
);
assert(
  summary.enabled.modules < summary.disabled.modules,
  "Lazy barrels must process fewer modules",
);
assert(
  summary.enabled.ms < summary.disabled.ms,
  "Lazy barrels must improve median build time; run on an idle machine",
);
