# ESM Barrel Performance Issue Demo

This demo showcases the performance impact of forcing CommonJS for date-fns in a Node.js environment.

## Results

The results show a significant performance improvement when forcing CommonJS for date-fns in a Node.js environment, with drastically reduced test duration and worker startup times.

When running on AMD Ryzen 9 9950X 16-Core:

| Metric               | Normal (ESM) | Patched (CommonJS) |              Improvement |
| -------------------- | -----------: | -----------------: | -----------------------: |
| **Vitest duration**  |   **63.04s** |          **7.41s** | **8.51× faster (88.2%)** |
| Real time            |      63.192s |             7.573s |             8.34× faster |
| User CPU time        |   27m 5.810s |          2m 6.922s |              12.81× less |
| System CPU time      |   3m 48.458s |            25.846s |               8.84× less |
| Import time share    |          95% |                40% |                   −55 pp |
| Transform time share |           4% |                55% |                   +51 pp |
| Avg. worker startup  |       ~175ms |              ~72ms |             2.43× faster |

### Run Logs

Normal run:

```
$ npm run test

...

 Test Files  1000 passed (1000)
      Tests  1000 passed (1000)
   Start at  05:27:35
   Duration  63.04s (import 95%, transform 4%)

    Isolate  1000 workers spawned · ~175ms startup each (spawn + environment, per file)
             at least ~5.46s faster with isolate: false — reuses workers across files instead of one per file


real    1m3.192s
user    27m5.810s
sys     3m48.458s
```

Forced CommonJS run:

```
$ npm run test:patched

...

 Test Files  1000 passed (1000)
      Tests  1000 passed (1000)
   Start at  05:26:41
   Duration  7.41s (transform 55%, import 40%, worker 3%, tests 2%)

    Isolate  1000 workers spawned · ~72ms startup each (spawn + environment, per file)
             at least ~2.26s faster with isolate: false — reuses workers across files instead of one per file


real    0m7.573s
user    2m6.922s
sys     0m25.846s
```

The results are generated on the following CPU:

```
$ npm run lscpu

...

Architecture:                            x86_64
CPU(s):                                  32
Model name:                              AMD Ryzen 9 9950X 16-Core Processor
Thread(s) per core:                      2
Core(s) per socket:                      16
Socket(s):                               1
CPU max MHz:                             5756.4521
CPU min MHz:                             624.1940
L2 cache:                                16 MiB (16 instances)
L3 cache:                                64 MiB (2 instances)
NUMA node0 CPU(s):                       0-31
```

## Reproduction Steps

Run to reproduce:

```sh
npm install

# Run tests normally:
npm test

# Run tests with forced CommonJS for date-fns:
npm run test:patched

# Display CPU info:
npm run lscpu
```

## Methodology

Here's how the performance issue demo works:

1. Generate test files via `./generate.ts`. Each test file is unique to bust any cache. The default number of files is `1000`, override via `TEST_FILES`.
2. Clear existing cache to ensure a clean test environment between runs via `vitest run --clearCache`.
3. Run `time vitest run --reporter=minimal`.

Before the steps above, we configure date-fns `package.json`:

- `npm test` restores the original date-fns `package.json` via `./restore.ts`.
- `npm run test:patched` applies the forced CommonJS patch via `./patch.ts`.

CommonJS is forced by overriding `exports`:

```patch
 {
   "exports": {
     // ...
     "./addDays": {
       "require": {
         "types": "./addDays.d.cts",
         "default": "./addDays.cjs",
       },
+      "node": {
+        "types": "./addDays.d.cts",
+        "default": "./addDays.cjs",
+      },
       "import": {
         "types": "./addDays.d.ts",
         "default": "./addDays.js",
       },
     },
     // ...
   },
 }
```

The Vitest configuration is vanilla:

```ts
import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    include: ["test/*_test.ts"],
  },
});
```
