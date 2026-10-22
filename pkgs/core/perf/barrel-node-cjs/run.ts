import assert from "node:assert/strict";
import { createHash, randomUUID } from "node:crypto";
import {
  cp,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  writeFile,
} from "node:fs/promises";
import {
  availableParallelism,
  cpus,
  loadavg,
  release,
  totalmem,
} from "node:os";
import { join } from "node:path";
import { performance } from "node:perf_hooks";
import { fileURLToPath } from "node:url";
import { $ } from "zx";
import { randomGenerator, shuffle, summarize } from "./statistics.ts";
import { gitMissingReport, resolveRuntimes } from "./runtimes.ts";
import { format } from "oxfmt";

const core = fileURLToPath(new URL("../../", import.meta.url));

const samples = Number(process.env.SAMPLES ?? 30);
const warmups = Number(process.env.WARMUPS ?? 3);
const files = Number(process.env.FILES ?? 20);
const workers = Number(process.env.WORKERS ?? 4);
const seed = Number(process.env.SEED ?? 20261022);

const runtimes = await resolveRuntimes();
const lts = runtimes.find(({ major }) => major === 24)!;
const node = lts.binary;

const keep = process.env.KEEP_FIXTURES === "1";

assert(Number.isInteger(files) && files >= 2, "FILES must be at least 2");
assert(
  Number.isInteger(workers) && workers >= 1 && workers <= files,
  "WORKERS must be between 1 and FILES",
);
assert(Number.isInteger(samples) && samples > 0, "SAMPLES must be positive");
assert(
  Number.isInteger(warmups) && warmups >= 0,
  "WARMUPS must be nonnegative",
);
assert(
  Number.isInteger(seed) && seed >= 0 && seed <= 0xffffffff,
  "SEED must be a uint32",
);

const cases = {
  empty: {
    label: "Empty control (no date-fns)",
    imports: "",
    paths: [],
    check: "assert.equal(1 + 1, 2);",
  },
  barrel: {
    label: "Barrel: date arithmetic",
    imports: 'import { addDays, addHours } from "date-fns";',
    paths: ["date-fns"],
    check:
      "assert.equal(+addHours(addDays(new Date(2020, 0, 1), 1), 2), +new Date(2020, 0, 2, 2));",
  },
  module: {
    label: "Direct: date arithmetic",
    imports:
      'import { addDays } from "date-fns/addDays"; import { addHours } from "date-fns/addHours";',
    paths: ["date-fns/addDays", "date-fns/addHours"],
    check:
      "assert.equal(+addHours(addDays(new Date(2020, 0, 1), 1), 2), +new Date(2020, 0, 2, 2));",
  },
  "barrel-format": {
    label: "Barrel: formatting + locale",
    imports:
      'import { format } from "date-fns"; import { enGB } from "date-fns/locale";',
    paths: ["date-fns", "date-fns/locale"],
    check:
      'assert.equal(format(new Date(2020, 0, 2), "P", { locale: enGB }), "02/01/2020");',
  },
  "module-format": {
    label: "Direct: formatting + locale",
    imports:
      'import { format } from "date-fns/format"; import { enGB } from "date-fns/locale/en-GB";',
    paths: ["date-fns/format", "date-fns/locale/en-GB"],
    check:
      'assert.equal(format(new Date(2020, 0, 2), "P", { locale: enGB }), "02/01/2020");',
  },
};

type Case = keyof typeof cases;

const variants = ["forced-cjs", "esm"] as const;

const baseMetrics = {
  "Node first import":
    "First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.",
  "Node cached import":
    "Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.",
  "Node static process":
    "Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.",
  "Vitest single collection":
    "Importing one test file and collecting its test; includes dependency loading and test registration, excludes setup and test execution.",
  "Vitest single total":
    "Wall time for one file / one test / one worker, including process startup and exit.",
  "Vitest parallel collection":
    "Sum of collection durations across isolated files. Overlapping elapsed intervals: neither wall time nor CPU time.",
  "Vitest parallel total":
    "User-visible wall time for the whole isolated suite, including process startup and exit.",
};

const metrics = Object.fromEntries(
  Object.entries(baseMetrics).flatMap(([metric, description]) =>
    metric.startsWith("Node")
      ? runtimes.map(({ label }) => [`${metric} (${label})`, description])
      : [[metric, `${description} Node ${lts.versions.node} (latest LTS).`]],
  ),
);

type Metric = string;

const results: Record<string, [number[], number[]]> = Object.fromEntries(
  Object.keys(metrics).flatMap((metric) =>
    Object.keys(cases).map((name) => [`${metric}: ${name}`, [[], []]]),
  ),
);

const vitestPackageURL = import.meta.resolve("vitest/package.json");
const vitestPackage = JSON.parse(
  await readFile(new URL(vitestPackageURL), "utf8"),
);
const vitestCLI = fileURLToPath(
  new URL(vitestPackage.bin.vitest, vitestPackageURL),
);
const reporter = fileURLToPath(new URL("./reporter.ts", import.meta.url));

const env: NodeJS.ProcessEnv = {
  ...process.env,
  NODE_OPTIONS: "",
  NODE_DISABLE_COMPILE_CACHE: "1",
  TZ: "UTC",
};
delete env.NODE_COMPILE_CACHE;

const started = new Date().toISOString();
await mkdir(join(core, "tmp"), { recursive: true });
const temp = await mkdtemp(join(core, "tmp/barrel-node-cjs-"));
const output = fileURLToPath(new URL("./report", import.meta.url));

const metadata = {
  started,
  node: await $({
    env,
    quiet: true,
  })`${node} -p ${"JSON.stringify(process.versions)"}`.json(),
  nodeBinary: node,
  runtimes,
  processRunner: "zx (shell-backed)",
  vitest: vitestPackage.version,
  platform: process.platform,
  arch: process.arch,
  os: release(),
  cpu: cpus()[0]?.model,
  logicalCPUs: cpus().length,
  availableParallelism: availableParallelism(),
  memoryBytes: totalmem(),
  loadStart: loadavg(),
  samples,
  warmups,
  files,
  workers,
  seed,
  compileCache: "disabled",
  filesystemCache: "not flushed; expected warm after build/preflight",
  pool: "forks",
  isolate: true,
  fsModuleCache: false,
  optimizer: "disabled",
};

type Audit = {
  runId: string;
  pid: number;
  start: number;
  end: number;
  loaded: { path: string; format: string }[];
  cjsCacheCount: number;
};

const audits: Record<string, Audit[]> = {};

const runs: object[] = [];

let packageHashes: Record<string, string> = {};

const manifests: Record<
  string,
  { version: string; bytes: number; exportEntries: number; sha256: string }
> = {};

async function execute(
  args: string[],
  directory: string,
  extra: Record<string, string> = {},
  binary = node,
) {
  const result = await $({
    cwd: directory,
    env: { ...env, ...extra },
    quiet: true,
  })`${binary} ${args}`;

  return result.stdout;
}

async function hashes(directory: string) {
  const entries = (await readdir(directory, { recursive: true }))
    .filter((path) => /\.(?:js|cjs)$/.test(path))
    .sort();

  return Object.fromEntries(
    await Promise.all(
      entries.map(async (path) => [
        path,
        createHash("sha256")
          .update(await readFile(join(directory, path)))
          .digest("hex"),
      ]),
    ),
  );
}

async function vitest(
  name: Case,
  index: number,
  parallel: boolean,
  audit: boolean,
) {
  const directory = join(temp, variants[index]);
  const report = join(directory, "report.json");
  const runId = randomUUID();

  await rm(report, { force: true });

  const start = performance.now();
  await execute(
    [
      vitestCLI,
      "run",
      parallel ? `.parallel/${name}/` : `${name}.test.mjs`,
      "--config",
      "vitest.config.mjs",
      "--maxWorkers",
      String(parallel ? workers : 1),
    ],
    directory,
    {
      BARREL_NODE_REPORT: report,
      BARREL_NODE_RUN_ID: runId,
      BARREL_NODE_AUDIT: audit ? "1" : "0",
      BARREL_NODE_VARIANT: variants[index],
      BARREL_NODE_PATHS: JSON.stringify(cases[name].paths),
    },
  );
  const total = performance.now() - start;

  const diagnostic = JSON.parse(await readFile(report, "utf8"));

  assert.equal(diagnostic.runId, runId);
  assert.equal(diagnostic.moduleCount, parallel ? files : 1);
  assert.equal(diagnostic.testCount, parallel ? files : 1);
  assert.equal(diagnostic.workerCount, parallel ? workers : 1);
  assert(
    Number.isFinite(diagnostic.collectDuration) &&
      diagnostic.collectDuration > 0,
  );

  if (audit) {
    const records: Audit[] = await Promise.all(
      Array.from({ length: parallel ? files : 1 }, async (_, file) =>
        JSON.parse(
          await readFile(
            join(
              directory,
              parallel
                ? `.parallel/${name}/${file}.test.mjs.audit.json`
                : `${name}.test.mjs.audit.json`,
            ),
            "utf8",
          ),
        ),
      ),
    );

    for (const record of records) assert.equal(record.runId, runId);

    if (parallel && workers > 1) {
      assert(new Set(records.map(({ pid }) => pid)).size >= workers);

      // The empty control can finish before another worker starts collecting.
      if (name !== "empty")
        assert(
          records.some((a, i) =>
            records.some(
              (b, j) =>
                i !== j &&
                a.pid !== b.pid &&
                a.start < b.end &&
                b.start < a.end,
            ),
          ),
          "Expected overlapping workers",
        );
    }

    audits[`${variants[index]}: ${name}: ${parallel ? "parallel" : "single"}`] =
      records;
  }

  return { total, ...diagnostic };
}

try {
  // The build flag only removes export-map `node` conditions. Build once, clone,
  // apply that exact operation, then verify byte-identical runtime artifacts.
  await $({
    cwd: core,
    stdio: "inherit",
  })`mise //pkgs/core:build/package --no-cdn --no-docs`;

  for (const variant of variants) {
    const directory = join(temp, variant);
    const packageDirectory = join(directory, "node_modules/date-fns");

    await mkdir(join(directory, "node_modules"), { recursive: true });
    await writeFile(
      join(directory, "package.json"),
      '{"private":true,"type":"module"}\n',
    );
    await cp(join(core, "dist/date-fns"), packageDirectory, {
      recursive: true,
    });

    const manifestPath = join(packageDirectory, "package.json");
    const manifest = JSON.parse(await readFile(manifestPath, "utf8"));

    for (const entry of Object.values(manifest.exports)) {
      if (typeof entry !== "object" || entry === null) continue;

      const conditions = entry as {
        node?: { default: string };
        import: { default: string };
        require: { default: string };
      };

      assert.equal(conditions.node?.default, conditions.require.default);
      assert(conditions.import.default.endsWith(".js"));

      if (variant === "esm") delete conditions.node;
    }

    await writeFile(manifestPath, JSON.stringify(manifest, null, 2));

    const manifestBytes = await readFile(manifestPath);
    manifests[variant] = {
      version: manifest.version,
      bytes: manifestBytes.length,
      exportEntries: Object.keys(manifest.exports).length,
      sha256: createHash("sha256").update(manifestBytes).digest("hex"),
    };

    const currentHashes = await hashes(packageDirectory);
    if (variant === "forced-cjs") packageHashes = currentHashes;
    else assert.deepEqual(currentHashes, packageHashes);

    await cp(
      new URL("./audit.mjs", import.meta.url),
      join(directory, "audit.mjs"),
    );
    await writeFile(
      join(directory, "vitest.config.mjs"),
      `export default {
  test: {
    include: ["*.test.mjs", ".parallel/**/*.test.mjs"], environment: "node",
    isolate: true, pool: "forks", fileParallelism: true, maxWorkers: 1,
    fsModuleCache: false, deps: { optimizer: { ssr: { enabled: false } } },
    setupFiles: process.env.BARREL_NODE_AUDIT === "1" ? ["./audit.mjs"] : [],
    reporters: ["default", ${JSON.stringify(reporter)}],
  },
};\n`,
    );

    for (const [name, test] of Object.entries(cases)) {
      const testSource = `import assert from "node:assert/strict";
import { test } from "vitest";
${test.imports}
test("${name}", () => {
  ${test.check}
  globalThis.__barrelAudit?.(import.meta.url);
});\n`;
      await writeFile(join(directory, `${name}.test.mjs`), testSource);

      const suite = join(directory, ".parallel", name);
      await mkdir(suite, { recursive: true });
      for (let file = 0; file < files; file++)
        await writeFile(join(suite, `${file}.test.mjs`), testSource);

      await writeFile(
        join(directory, `${name}.mjs`),
        `${test.imports}\nexport function check(assert) { ${test.check} }\n`,
      );
      await writeFile(
        join(directory, `${name}-static.mjs`),
        `import assert from "node:assert/strict";\n${test.imports}\n${test.check}\n`,
      );
      await writeFile(
        join(directory, `${name}-run.mjs`),
        `
import assert from "node:assert/strict";
import { performance } from "node:perf_hooks";
const start = performance.now();
const consumer = await import("./${name}.mjs");
const first = performance.now() - start;
consumer.check(assert);
globalThis.__barrelAudit?.(import.meta.url);
const cachedStart = performance.now();
let cached;
for (let i = 0; i < 100; i++) cached = await import("./${name}.mjs");
const cachedMs = (performance.now() - cachedStart) / 100;
assert.equal(cached, consumer);
for (const path of ${JSON.stringify(test.paths)}) {
  const resolved = import.meta.resolve(path);
  assert(resolved.includes("/node_modules/date-fns/") && resolved.endsWith("${variant === "esm" ? ".js" : ".cjs"}"));
}
console.log(JSON.stringify({ first, cached: cachedMs }));
`,
      );
    }
  }

  console.error(
    "Auditing native module graphs, format selection, fresh caches and isolated workers...",
  );

  for (const name of Object.keys(cases) as Case[]) {
    for (const [index, variant] of variants.entries()) {
      const directory = join(temp, variant);
      const runId = randomUUID();

      await execute(["--import", "./audit.mjs", `${name}-run.mjs`], directory, {
        BARREL_NODE_RUN_ID: runId,
        BARREL_NODE_VARIANT: variant,
        BARREL_NODE_PATHS: JSON.stringify(cases[name].paths),
      });

      const audit: Audit = JSON.parse(
        await readFile(join(directory, `${name}-run.mjs.audit.json`), "utf8"),
      );
      assert.equal(audit.runId, runId);

      audits[`${variant}: ${name}: node`] = [audit];

      for (const runtime of runtimes) {
        if (runtime === lts) continue;

        await execute(
          ["--import", "./audit.mjs", `${name}-run.mjs`],
          directory,
          {
            BARREL_NODE_RUN_ID: runId,
            BARREL_NODE_VARIANT: variant,
            BARREL_NODE_PATHS: JSON.stringify(cases[name].paths),
          },
          runtime.binary,
        );

        const record: Audit = JSON.parse(
          await readFile(join(directory, `${name}-run.mjs.audit.json`), "utf8"),
        );
        assert.equal(record.runId, runId);
        assert.deepEqual(record.loaded, audit.loaded);

        audits[`${variant}: ${name}: ${runtime.label}`] = [record];
      }

      await vitest(name, index, false, true);
      await vitest(name, index, true, true);
    }

    const graph = (audit: Audit) =>
      audit.loaded.map(({ path }) => path.replace(/\.cjs$/, ".js")).sort();
    const expected = graph(audits[`esm: ${name}: node`][0]);

    for (const variant of variants)
      for (const mode of ["node", "single", "parallel"]) {
        for (const audit of audits[`${variant}: ${name}: ${mode}`])
          assert.deepEqual(
            graph(audit),
            expected,
            `Different native module graph: ${variant}/${name}/${mode}`,
          );
      }
  }

  const random = randomGenerator(seed);
  const jobs = (Object.keys(cases) as Case[]).flatMap((name) => [
    ...runtimes.flatMap((runtime) =>
      ["node", "static"].map((mode) => ({ name, mode, runtime })),
    ),
    ...["single", "parallel"].map((mode) => ({ name, mode, runtime: lts })),
  ]);
  const firstOrders = jobs.map(() => (random() < 0.5 ? 0 : 1));

  for (let iteration = -warmups; iteration < samples; iteration++) {
    console.error(
      `Round ${iteration < 0 ? `warmup ${iteration + warmups + 1}/${warmups}` : `${iteration + 1}/${samples}`}`,
    );

    for (const jobIndex of shuffle(
      jobs.map((_, i) => i),
      random,
    )) {
      const { name, mode, runtime } = jobs[jobIndex];

      // Adjacent treatments; exactly balanced AB/BA within each two rounds.
      const first = (firstOrders[jobIndex] + (((iteration % 2) + 2) % 2)) % 2;

      for (const index of [first, 1 - first]) {
        const directory = join(temp, variants[index]);
        const measured: Record<Metric, number> = {};
        let diagnostic;

        const start = performance.now();
        if (mode === "node") {
          diagnostic = JSON.parse(
            await execute([`${name}-run.mjs`], directory, {}, runtime.binary),
          );
          measured[`Node first import (${runtime.label})`] = diagnostic.first;
          measured[`Node cached import (${runtime.label})`] = diagnostic.cached;
        } else if (mode === "static") {
          await execute([`${name}-static.mjs`], directory, {}, runtime.binary);
          measured[`Node static process (${runtime.label})`] =
            performance.now() - start;
        } else {
          diagnostic = await vitest(name, index, mode === "parallel", false);
          measured[`Vitest ${mode as "single" | "parallel"} collection`] =
            diagnostic.collectDuration;
          measured[`Vitest ${mode as "single" | "parallel"} total`] =
            diagnostic.total;
        }

        for (const [metric, value] of Object.entries(measured)) {
          assert(Number.isFinite(value) && value > 0);
          if (iteration >= 0) results[`${metric}: ${name}`][index].push(value);
        }

        runs.push({
          iteration,
          name,
          mode,
          node: runtime.versions.node,
          runtime: runtime.label,
          variant: variants[index],
          order: index === first ? 0 : 1,
          at: new Date().toISOString(),
          load: loadavg(),
          measured,
          diagnostic,
        });
      }
    }
  }

  const summaries = Object.fromEntries(
    Object.entries(results).map(([key, [cjs, esm]]) => [
      key,
      summarize(cjs, esm),
    ]),
  );

  const data = {
    metadata: {
      ...metadata,
      finished: new Date().toISOString(),
      loadEnd: loadavg(),
    },
    packageHashes,
    manifests,
    audits,
    results,
    summaries,
    runs,
  };

  await writeFile(`${output}.json`, JSON.stringify(data, null, 2) + "\n");

  const lines = [
    "# Forced CommonJS for Node.js Performance Impact",
    "",
    "Both consumers use identical ESM `import` syntax. Only the package export condition changes: native ESM files versus CommonJS files loaded through ESM interoperability.",
    "",
    `Native Node versions: ${runtimes.map(({ label }) => label).join(", ")}. Vitest ${metadata.vitest} on Node ${lts.versions.node} only (latest LTS); ${metadata.platform}/${metadata.arch}; ${metadata.cpu}.`,
    ...(!runtimes.some(({ git }) => git) ? ["", ...gitMissingReport] : []),
    `${samples} measured process pairs per row; ${warmups} discarded warmup rounds; seed ${seed}. Suite: ${files} files, one assertion test per file, ${workers} concurrent fork workers, isolation enabled.`,
    "",
    "This measures startup and import latency. Both formats load the full barrel dependency graph; native Node does not tree-shake named imports.",
    "",
    `date-fns ${manifests.esm.version}; ${manifests.esm.exportEntries} export-map entries. Package manifests: ESM ${manifests.esm.bytes} bytes, forced CJS ${manifests["forced-cjs"].bytes} bytes.`,
    "",
    "Results are reported separately for each Node version, including the local PR build when available. Improvements in newer runtimes do not remove savings on affected LTS releases.",
    "",
    "Each sample uses fresh module caches. The filesystem cache is not flushed; compile/transform caches and dependency optimization are disabled. Correctness and module-loading checks run outside timing.",
    "",
    "Subprocesses are launched sequentially with zx. Parent-observed process/suite totals include launcher and shell startup overhead; child-reported import/collection timers exclude it.",
    "",
    "Times below are medians in milliseconds, with the observed p10–p90 range in brackets. Lower is better. ESM/CJS = 2 means CJS took half as long (50% less time); below 1 means CJS lost. Saved time is ESM minus CJS; negative values are regressions.",
    "",
    samples < 10
      ? "Confidence intervals are omitted for runs with fewer than 10 sample pairs."
      : "95% paired bootstrap intervals use 2,000 resamples and describe within-run variability.",
    "",
    "## Native modules loaded (file count)",
    "",
    "Distinct date-fns files per consumer, counted outside timing. Both formats are checked for equivalent module graphs in Node and each isolated Vitest file.",
    "",
    "| Consumer | CJS (files) | ESM (files) |",
    "| --- | ---: | ---: |",
    ...Object.entries(cases).map(
      ([name, test]) =>
        `| ${test.label} | ${audits[`forced-cjs: ${name}: node`][0].loaded.length} | ${audits[`esm: ${name}: node`][0].loaded.length} |`,
    ),
    "",
  ];

  for (const [metric, description] of Object.entries(metrics)) {
    lines.push(
      `## ${metric}`,
      "",
      description,
      "",
      "| Consumer | CJS ms [p10–p90] | ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |",
      "| --- | ---: | ---: | ---: | ---: | ---: |",
    );

    const digits = metric.startsWith("Node cached import") ? 4 : 2;

    for (const [name, test] of Object.entries(cases)) {
      const s = summaries[`${metric}: ${name}`];

      lines.push(
        `| ${test.label} | ${s.cjsMedian.toFixed(digits)} [${s.cjsP10.toFixed(digits)}–${s.cjsP90.toFixed(digits)}] | ${s.esmMedian.toFixed(digits)} [${s.esmP10.toFixed(digits)}–${s.esmP90.toFixed(digits)}] | ${s.ratio.toFixed(2)}×${s.ratioInterval ? ` [${s.ratioInterval.map((n) => n.toFixed(2)).join("–")}]` : ""} | ${s.savedMs.toFixed(digits)} | ${s.reductionPercent.toFixed(1)}% |`,
      );
    }

    lines.push("");
  }

  lines.push(
    "## How to interpret this",
    "",
    "Start with **Vitest parallel total** for test-suite elapsed time and **Node static process** for command startup. Parallel collection times overlap and are summed. Empty controls show runner overhead and are not subtracted.",
    "",
    "Direct imports avoid the barrel; cached imports reuse an already-loaded consumer. Long-lived processes amortize initial loading, while isolated tests and short-lived commands pay it repeatedly.",
    "",
    "These workloads isolate import costs. End-to-end savings depend on application work, runtime, caching and hardware.",
    "",
    "[Raw samples, warmups, per-file diagnostics, module checks, runtime-file SHA-256 hashes and machine metadata](./report.json).",
    "",
  );

  const file = `${output}.md`;
  const markdown = await format(file, lines.join("\n"));
  await writeFile(file, markdown.code);

  console.log(markdown);
  console.error(`Saved ${output}.{json,md}`);
} finally {
  if (keep) console.error(`Kept fixtures: ${temp}`);
  else await rm(temp, { recursive: true, force: true });
}
