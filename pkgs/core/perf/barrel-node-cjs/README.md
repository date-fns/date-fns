# Forced CommonJS for Node.js Performance

This benchmark measures how selecting CommonJS instead of ESM for date-fns affects Node.js startup and Vitest execution time. Consumers use identical ESM imports; only the package's `node` export conditions change.

It compares barrel and direct imports for date arithmetic and formatting, plus an empty control. Native measurements run on Node 22, 24, 25, 26 and a local build of [Node PR #65812](https://github.com/nodejs/node/pull/65812). Vitest runs on Node 24.

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

- **Node first import:** time to load and evaluate dependencies.
- **Node cached import:** repeated imports of an already-loaded consumer.
- **Node static process:** total command startup and execution time.
- **Vitest collection:** test-file loading and registration; parallel values sum overlapping durations.
- **Vitest total:** elapsed time for one test file or the complete parallel suite.

Samples use fresh processes and paired, balanced variant order. Both package copies contain identical runtime files; correctness and equivalent module graphs are checked outside timing. Compile/transform caches and dependency optimization are disabled; the filesystem cache is not flushed.

Tables show medians, p10–p90 ranges, ratios and time saved. These measure import-bound startup costs, not faster date calculations. Benefits vary by runtime and workload; fixes in newer Node versions do not remove savings on affected LTS releases.

Background: [date-fns #3806](https://github.com/date-fns/date-fns/issues/3806), [Node #66485](https://github.com/nodejs/node/issues/66485), [Vitest #8104](https://github.com/vitest-dev/vitest/issues/8104).
