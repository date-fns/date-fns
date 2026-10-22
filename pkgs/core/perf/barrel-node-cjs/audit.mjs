// Instrumented preflight only: hooks and filesystem writes must not affect samples.
import assert from "node:assert/strict";
import { readFileSync, writeFileSync } from "node:fs";
import { createRequire, registerHooks } from "node:module";
import { fileURLToPath, pathToFileURL } from "node:url";

assert.equal(
  globalThis.__barrelAudit,
  undefined,
  "Expected a fresh global scope",
);

const require = createRequire(import.meta.url);
const marker = "/node_modules/date-fns/";
assert.deepEqual(
  Object.keys(require.cache).filter((path) => path.includes(marker)),
  [],
);

const modules = new Map();
const start = Number(process.hrtime.bigint()) / 1e6;
const hook = registerHooks({
  load(url, context, nextLoad) {
    const result = nextLoad(url, context);
    if (url.includes(marker)) modules.set(url, result.format);

    return result;
  },
});

globalThis.__barrelAudit = (url) => {
  hook.deregister();

  const expected = process.env.BARREL_NODE_VARIANT === "esm" ? ".js" : ".cjs";
  const paths = JSON.parse(process.env.BARREL_NODE_PATHS);
  const loaded = [...modules]
    .map(([url, format]) => ({
      path: fileURLToPath(url).split(marker)[1],
      format,
    }))
    .sort((a, b) => a.path.localeCompare(b.path));

  assert.equal(
    loaded.length > 0,
    paths.length > 0,
    "Expected native date-fns loading",
  );
  assert(
    loaded.every(({ path }) => path.endsWith(expected)),
    "Mixed/unexpected module formats",
  );
  assert(
    loaded.every(
      ({ format }) => format === (expected === ".js" ? "module" : "commonjs"),
    ),
    "Native loader reported an unexpected module format",
  );

  for (const path of paths) {
    // Vite's transformed setup modules do not implement import.meta.resolve.
    // Check the actual loaded entry against the fixture's export map instead.
    const manifestPath = require.resolve("date-fns/package.json");
    const manifest = JSON.parse(readFileSync(manifestPath, "utf8"));
    const key = path === "date-fns" ? "." : "." + path.slice("date-fns".length);
    const condition = expected === ".js" ? "import" : "node";
    const resolved = new URL(
      manifest.exports[key][condition].default,
      pathToFileURL(manifestPath),
    ).href;

    assert(resolved.includes(marker) && resolved.endsWith(expected), resolved);
    assert(
      modules.has(resolved),
      `Entry point was not freshly loaded: ${resolved}`,
    );
  }

  writeFileSync(
    new URL(url + ".audit.json"),
    JSON.stringify({
      runId: process.env.BARREL_NODE_RUN_ID,
      pid: process.pid,
      start,
      end: Number(process.hrtime.bigint()) / 1e6,
      loaded,
      cjsCacheCount: Object.keys(require.cache).filter((path) =>
        path.includes(marker),
      ).length,
    }),
  );
};
