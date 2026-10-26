# Forced CommonJS for Node.js Performance

This benchmark measures how the Node-CJS export policy for date-fns affects Node.js, Bun and Deno startup and Vitest execution time. Consumers use identical ESM imports. Only the `node` CJS export condition is toggled; the `bun` and `deno` ESM overrides are preserved unchanged in both variants.

Node and Vitest compare CJS against ESM. Bun and Deno load ESM in both variants, checking the policy's impact on those runtimes. Report columns identify the policy and baseline; raw JSON retains the historical `forced-cjs` variant and `cjs` statistics keys for the policy.

It compares barrel and direct imports for date arithmetic and formatting, plus an empty control. Native measurements run on Node 22, 24, 25, 26, a local build of [Node PR #65812](https://github.com/nodejs/node/pull/65812), and the latest Bun and Deno. Exact runtime versions are recorded in the report. Vitest runs on Node 24 only.

## Run

From the repository root:

```sh
mise //pkgs/core/perf/barrel-node-cjs:run
```

The first run builds the Node.js PR in `.node`; subsequent runs reuse it. Install [Node's build prerequisites](https://github.com/nodejs/node/blob/main/BUILDING.md#building-nodejs-on-supported-platforms) first. `JOBS` controls build parallelism.

To fetch the latest PR revision and rebuild:

```sh
mise //pkgs/core/perf/barrel-node-cjs:node/build:fetch
```

Defaults: `SAMPLES=30`, `WARMUPS=3`, `FILES=20`, `WORKERS=4`. Set these environment variables to adjust the run; `SEED` controls scheduling.

Each run replaces the [report](./report.md) and [raw results](./report.json).

## Reading the results

- **Runtime first import:** time to load and evaluate dependencies.
- **Runtime cached import:** repeated imports of an already-loaded consumer.
- **Runtime static process:** total command startup and execution time.
- **Vitest collection:** test-file loading and registration; parallel values sum overlapping durations.
- **Vitest total:** elapsed time for one test file or the complete parallel suite.

Samples use fresh processes and paired, balanced variant order. Both package copies contain identical runtime files. Node and Vitest receive equivalent-module-graph audits; Bun and Deno receive correctness and export-resolution checks. Deno runs with full permissions and uses the fixture's local node_modules. Node compile caches, Vitest transform caches and dependency optimization are disabled; runtime disk caches and the filesystem cache are not flushed.

Tables show medians, p10–p90 ranges, ratios and time saved. These measure import-bound startup costs, not faster date calculations. Benefits vary by runtime and workload; fixes in newer Node versions do not remove savings on affected LTS releases.

Background: [date-fns #3806](https://github.com/date-fns/date-fns/issues/3806), [Node #66485](https://github.com/nodejs/node/issues/66485), [Vitest #8104](https://github.com/vitest-dev/vitest/issues/8104).
