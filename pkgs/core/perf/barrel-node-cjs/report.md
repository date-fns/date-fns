# Forced CommonJS for Node.js Performance Impact

Both consumers use identical ESM `import` syntax. Only the node CJS export condition is toggled; bun and deno ESM overrides are identical in both variants. Node and Vitest load CJS versus ESM. Bun and Deno load ESM in both variants, measuring the node condition's impact rather than a format comparison.

Native runtimes: Node 22.23.4, Node 24.22.1, Node 25.9.0, Node 26.12.1, Bun 1.4.3, Deno 2.9.8, Node 27.0.0-pre (Git). Vitest 5.0.5 on Node 24.22.1 only (latest LTS); linux/x64; AMD Ryzen 9 9950X 16-Core Processor.
30 measured process pairs per row; 3 discarded warmup rounds; seed 20261022. Suite: 20 files, one assertion test per file, 4 concurrent fork workers, isolation enabled.

This measures startup and import latency. Both formats load the full barrel dependency graph; native Node does not tree-shake named imports.

date-fns 5.0.0-alpha.0; 741 export-map entries. Package manifests: ESM 365946 bytes, forced CJS 451256 bytes.

Results are reported separately for each runtime, including the local Node PR build when available. Improvements in newer runtimes do not remove savings on affected LTS releases.

Each sample uses fresh processes and in-memory module caches. Node compile caches, Vitest transform caches and dependency optimization are disabled; runtime disk caches and the filesystem cache are not flushed. Correctness and module-loading preflight checks run outside timing.

Subprocesses are launched sequentially with zx. Parent-observed process/suite totals include launcher and shell startup overhead; child-reported import/collection timers exclude it.

Times below are medians in milliseconds, with the observed p10–p90 range in brackets. Lower is better. Baseline/policy = 2 means the Node-CJS policy took half as long (50% less time); below 1 means the policy lost. Saved time is ESM baseline minus policy; negative values are regressions. Raw JSON retains the historical forced-cjs variant and cjs statistics keys for the policy, including when Bun and Deno load ESM.

95% paired bootstrap intervals use 2,000 resamples and describe within-run variability.

## Native modules loaded (file count)

Distinct date-fns files per consumer, counted outside timing. Both formats are checked for equivalent module graphs in Node and each isolated Vitest file. Bun and Deno receive correctness and export-resolution checks; Node loader-hook graph audits are not available for those runtimes.

| Consumer                    | CJS (files) | ESM (files) |
| --------------------------- | ----------: | ----------: |
| Empty control (no date-fns) |           0 |           0 |
| Barrel: date arithmetic     |         303 |         303 |
| Direct: date arithmetic     |           6 |           6 |
| Barrel: formatting + locale |         825 |         825 |
| Direct: formatting + locale |          38 |          38 |

## Runtime first import (Node 22.23.4)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.20 [0.19–0.22] |          0.20 [0.19–0.21] |              1.00× [0.96–1.03] |    -0.00 |     -0.3% |
| Barrel: date arithmetic     |          21.91 [21.37–22.86] |    559.47 [554.08–573.80] |           25.54× [25.27–25.83] |   537.57 |     96.1% |
| Direct: date arithmetic     |             7.09 [6.81–7.38] |       11.99 [11.68–12.44] |              1.69× [1.65–1.73] |     4.90 |     40.9% |
| Barrel: formatting + locale |          60.52 [58.83–61.85] | 1169.63 [1153.74–1199.27] |           19.33× [19.00–19.75] |  1109.11 |     94.8% |
| Direct: formatting + locale |          10.72 [10.39–11.05] |       56.67 [55.18–58.35] |              5.29× [5.18–5.38] |    45.95 |     81.1% |

## Runtime first import (Node 24.22.1)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.21 [0.19–0.22] |          0.21 [0.19–0.22] |              1.00× [0.96–1.03] |    -0.00 |     -0.2% |
| Barrel: date arithmetic     |          19.34 [19.00–22.36] |    662.54 [653.67–688.44] |           34.27× [33.77–34.76] |   643.20 |     97.1% |
| Direct: date arithmetic     |             6.16 [5.93–8.89] |       15.40 [12.63–16.26] |              2.50× [2.37–2.57] |     9.25 |     60.0% |
| Barrel: formatting + locale |          68.18 [65.19–70.88] | 1382.58 [1372.69–1410.16] |           20.28× [19.97–20.54] |  1314.40 |     95.1% |
| Direct: formatting + locale |            9.23 [8.91–10.60] |       64.81 [63.23–66.38] |              7.02× [6.95–7.16] |    55.58 |     85.8% |

## Runtime first import (Node 25.9.0)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.20 [0.19–0.22] |          0.20 [0.19–0.23] |              1.01× [0.97–1.04] |     0.00 |      0.9% |
| Barrel: date arithmetic     |          24.90 [21.67–26.06] |    670.80 [655.68–691.51] |           26.94× [26.45–29.46] |   645.90 |     96.3% |
| Direct: date arithmetic     |             8.85 [5.81–9.27] |       15.07 [14.63–15.60] |              1.70× [1.66–1.75] |     6.21 |     41.2% |
| Barrel: formatting + locale |         97.90 [94.49–100.22] | 1383.32 [1371.40–1433.23] |           14.13× [13.95–14.38] |  1285.43 |     92.9% |
| Direct: formatting + locale |          13.51 [11.20–14.01] |       64.17 [62.57–65.62] |              4.75× [4.69–4.81] |    50.67 |     79.0% |

## Runtime first import (Node 26.12.1)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.19 [0.18–0.22] |          0.19 [0.18–0.20] |              0.98× [0.96–1.01] |    -0.00 |     -2.2% |
| Barrel: date arithmetic     |          20.23 [17.69–21.19] |    660.89 [651.86–692.16] |           32.66× [31.85–33.81] |   640.66 |     96.9% |
| Direct: date arithmetic     |             8.56 [8.21–8.92] |       14.96 [14.35–15.46] |              1.75× [1.70–1.78] |     6.39 |     42.7% |
| Barrel: formatting + locale |          61.06 [59.95–63.87] | 1359.47 [1341.51–1408.64] |           22.27× [21.82–22.53] |  1298.41 |     95.5% |
| Direct: formatting + locale |          11.24 [10.67–11.70] |       62.75 [60.76–64.30] |              5.58× [5.45–5.63] |    51.51 |     82.1% |

## Runtime first import (Bun 1.4.3)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.28 [0.25–0.31] |          0.29 [0.24–0.32] |              1.04× [0.95–1.12] |     0.01 |      3.9% |
| Barrel: date arithmetic     |             7.02 [6.61–7.45] |          6.73 [6.44–7.34] |              0.96× [0.93–0.99] |    -0.28 |     -4.2% |
| Direct: date arithmetic     |             1.65 [1.58–1.79] |          1.55 [1.47–1.68] |              0.94× [0.90–0.97] |    -0.10 |     -6.6% |
| Barrel: formatting + locale |          28.78 [27.71–29.92] |       28.70 [27.86–29.39] |              1.00× [0.97–1.02] |    -0.07 |     -0.3% |
| Direct: formatting + locale |             2.59 [2.47–2.80] |          2.50 [2.34–2.76] |              0.96× [0.92–0.99] |    -0.09 |     -3.6% |

## Runtime first import (Deno 2.9.8)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.10 [0.08–0.10] |          0.09 [0.08–0.10] |              0.94× [0.89–1.01] |    -0.01 |     -6.2% |
| Barrel: date arithmetic     |             8.39 [8.23–8.78] |          8.42 [8.25–8.73] |              1.00× [0.98–1.01] |     0.02 |      0.3% |
| Direct: date arithmetic     |             0.28 [0.27–0.32] |          0.28 [0.27–0.29] |              0.99× [0.96–1.02] |    -0.00 |     -0.9% |
| Barrel: formatting + locale |          26.31 [25.75–27.72] |       26.48 [25.64–27.21] |              1.01× [0.98–1.02] |     0.17 |      0.6% |
| Direct: formatting + locale |             1.21 [1.19–1.36] |          1.20 [1.17–1.30] |              0.99× [0.97–1.02] |    -0.01 |     -0.7% |

## Runtime first import (Node 27.0.0-pre (Git))

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             0.20 [0.19–0.21] |          0.19 [0.19–0.20] |              0.98× [0.96–1.01] |    -0.00 |     -1.7% |
| Barrel: date arithmetic     |          20.96 [20.12–21.96] |       57.64 [56.25–59.94] |              2.75× [2.72–2.83] |    36.68 |     63.6% |
| Direct: date arithmetic     |             8.49 [8.32–9.02] |          8.68 [8.35–9.15] |              1.02× [0.99–1.04] |     0.19 |      2.1% |
| Barrel: formatting + locale |          62.68 [60.18–64.39] |    130.90 [126.45–133.35] |              2.09× [2.06–2.13] |    68.22 |     52.1% |
| Direct: formatting + locale |          11.32 [10.68–11.71] |       14.61 [14.09–15.27] |              1.29× [1.27–1.31] |     3.30 |     22.6% |

## Runtime cached import (Node 22.23.4)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0040 [0.0039–0.0043] |    0.0040 [0.0039–0.0042] |              1.00× [0.99–1.01] |  -0.0000 |     -0.0% |
| Barrel: date arithmetic     |       0.0041 [0.0040–0.0042] |    0.0038 [0.0037–0.0039] |              0.93× [0.92–0.95] |  -0.0003 |     -7.5% |
| Direct: date arithmetic     |       0.0039 [0.0039–0.0046] |    0.0031 [0.0030–0.0032] |              0.79× [0.77–0.80] |  -0.0008 |    -27.0% |
| Barrel: formatting + locale |       0.0041 [0.0040–0.0043] |    0.0039 [0.0038–0.0041] |              0.95× [0.93–0.97] |  -0.0002 |     -5.8% |
| Direct: formatting + locale |       0.0041 [0.0040–0.0044] |    0.0041 [0.0040–0.0043] |              0.99× [0.98–1.00] |  -0.0000 |     -1.0% |

## Runtime cached import (Node 24.22.1)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0070 [0.0067–0.0076] |    0.0070 [0.0065–0.0074] |              0.99× [0.95–1.03] |  -0.0001 |     -0.8% |
| Barrel: date arithmetic     |       0.0045 [0.0044–0.0046] |    0.0041 [0.0040–0.0045] |              0.93× [0.91–0.95] |  -0.0003 |     -7.9% |
| Direct: date arithmetic     |       0.0045 [0.0044–0.0048] |    0.0043 [0.0042–0.0045] |              0.96× [0.94–0.97] |  -0.0002 |     -4.2% |
| Barrel: formatting + locale |       0.0048 [0.0047–0.0050] |    0.0043 [0.0041–0.0049] |              0.88× [0.87–0.90] |  -0.0006 |    -13.4% |
| Direct: formatting + locale |       0.0046 [0.0045–0.0048] |    0.0048 [0.0046–0.0049] |              1.05× [1.02–1.06] |   0.0002 |      4.5% |

## Runtime cached import (Node 25.9.0)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0045 [0.0044–0.0048] |    0.0045 [0.0044–0.0046] |              1.00× [0.98–1.02] |   0.0000 |      0.4% |
| Barrel: date arithmetic     |       0.0046 [0.0044–0.0048] |    0.0041 [0.0039–0.0044] |              0.89× [0.87–0.91] |  -0.0005 |    -12.5% |
| Direct: date arithmetic     |       0.0045 [0.0043–0.0047] |    0.0042 [0.0041–0.0044] |              0.93× [0.91–0.95] |  -0.0003 |     -7.7% |
| Barrel: formatting + locale |       0.0047 [0.0046–0.0049] |    0.0041 [0.0040–0.0045] |              0.88× [0.85–0.90] |  -0.0006 |    -14.2% |
| Direct: formatting + locale |       0.0041 [0.0038–0.0044] |    0.0047 [0.0046–0.0049] |              1.17× [1.12–1.20] |   0.0007 |     14.3% |

## Runtime cached import (Node 26.12.1)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0046 [0.0045–0.0050] |    0.0046 [0.0044–0.0047] |              0.98× [0.97–1.00] |  -0.0001 |     -1.6% |
| Barrel: date arithmetic     |       0.0046 [0.0044–0.0048] |    0.0045 [0.0042–0.0051] |              0.99× [0.95–1.01] |  -0.0001 |     -1.3% |
| Direct: date arithmetic     |       0.0046 [0.0044–0.0049] |    0.0044 [0.0042–0.0047] |              0.95× [0.93–0.97] |  -0.0002 |     -5.6% |
| Barrel: formatting + locale |       0.0048 [0.0047–0.0049] |    0.0046 [0.0044–0.0051] |              0.96× [0.93–0.99] |  -0.0002 |     -3.7% |
| Direct: formatting + locale |       0.0046 [0.0044–0.0047] |    0.0048 [0.0046–0.0051] |              1.04× [1.02–1.06] |   0.0002 |      3.7% |

## Runtime cached import (Bun 1.4.3)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0017 [0.0017–0.0019] |    0.0018 [0.0017–0.0019] |              1.02× [0.98–1.05] |   0.0000 |      2.1% |
| Barrel: date arithmetic     |       0.0017 [0.0016–0.0018] |    0.0017 [0.0016–0.0018] |              0.99× [0.96–1.02] |  -0.0000 |     -1.1% |
| Direct: date arithmetic     |       0.0018 [0.0017–0.0022] |    0.0018 [0.0017–0.0019] |              0.97× [0.94–1.01] |  -0.0001 |     -2.9% |
| Barrel: formatting + locale |       0.0014 [0.0014–0.0015] |    0.0014 [0.0014–0.0015] |              0.99× [0.98–1.01] |  -0.0000 |     -1.2% |
| Direct: formatting + locale |       0.0017 [0.0016–0.0017] |    0.0017 [0.0017–0.0019] |              1.06× [1.03–1.08] |   0.0001 |      5.3% |

## Runtime cached import (Deno 2.9.8)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0013 [0.0012–0.0013] |    0.0012 [0.0012–0.0013] |              0.98× [0.96–1.00] |  -0.0000 |     -2.2% |
| Barrel: date arithmetic     |       0.0013 [0.0013–0.0014] |    0.0013 [0.0012–0.0013] |              0.98× [0.96–0.99] |  -0.0000 |     -2.5% |
| Direct: date arithmetic     |       0.0013 [0.0013–0.0014] |    0.0013 [0.0012–0.0013] |              0.98× [0.96–0.99] |  -0.0000 |     -2.5% |
| Barrel: formatting + locale |       0.0014 [0.0013–0.0014] |    0.0014 [0.0013–0.0014] |              0.98× [0.96–1.01] |  -0.0000 |     -1.9% |
| Direct: formatting + locale |       0.0014 [0.0013–0.0014] |    0.0013 [0.0013–0.0014] |              0.95× [0.93–0.96] |  -0.0001 |     -5.8% |

## Runtime cached import (Node 27.0.0-pre (Git))

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       0.0046 [0.0044–0.0048] |    0.0047 [0.0045–0.0050] |              1.02× [0.99–1.03] |   0.0001 |      1.8% |
| Barrel: date arithmetic     |       0.0045 [0.0044–0.0047] |    0.0045 [0.0044–0.0046] |              0.99× [0.97–1.00] |  -0.0000 |     -0.7% |
| Direct: date arithmetic     |       0.0046 [0.0045–0.0050] |    0.0043 [0.0041–0.0046] |              0.93× [0.90–0.95] |  -0.0003 |     -7.8% |
| Barrel: formatting + locale |       0.0049 [0.0047–0.0051] |    0.0053 [0.0051–0.0057] |              1.08× [1.06–1.10] |   0.0004 |      7.6% |
| Direct: formatting + locale |       0.0046 [0.0045–0.0048] |    0.0042 [0.0037–0.0046] |              0.91× [0.86–0.94] |  -0.0004 |    -10.0% |

## Runtime static process (Node 22.23.4)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          15.27 [14.50–16.72] |       15.58 [14.26–16.66] |              1.02× [0.96–1.05] |     0.31 |      2.0% |
| Barrel: date arithmetic     |          42.54 [40.42–44.28] |    580.02 [572.85–588.13] |           13.63× [13.47–13.80] |   537.48 |     92.7% |
| Direct: date arithmetic     |          23.97 [22.84–25.29] |       27.56 [26.70–29.96] |              1.15× [1.12–1.19] |     3.59 |     13.0% |
| Barrel: formatting + locale |          83.20 [80.30–84.90] | 1186.06 [1169.39–1214.29] |           14.25× [14.14–14.47] |  1102.86 |     93.0% |
| Direct: formatting + locale |          28.42 [27.58–29.50] |       74.94 [72.94–76.18] |              2.64× [2.59–2.68] |    46.52 |     62.1% |

## Runtime static process (Node 24.22.1)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          15.33 [14.07–16.00] |       15.10 [14.08–16.50] |              0.98× [0.95–1.04] |    -0.23 |     -1.5% |
| Barrel: date arithmetic     |          36.53 [35.17–40.27] |    704.87 [693.77–725.98] |           19.30× [18.72–19.79] |   668.35 |     94.8% |
| Direct: date arithmetic     |          22.43 [20.67–24.90] |       31.43 [30.08–32.48] |              1.40× [1.35–1.45] |     9.01 |     28.7% |
| Barrel: formatting + locale |          90.23 [87.80–92.28] | 1418.78 [1399.73–1463.44] |           15.72× [15.53–15.93] |  1328.54 |     93.6% |
| Direct: formatting + locale |          27.54 [26.74–29.07] |       85.36 [83.73–87.17] |              3.10× [3.01–3.14] |    57.83 |     67.7% |

## Runtime static process (Node 25.9.0)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          14.93 [14.10–16.02] |       15.07 [14.31–15.77] |              1.01× [0.97–1.05] |     0.14 |      1.0% |
| Barrel: date arithmetic     |          42.18 [38.33–43.35] |    703.69 [697.24–733.07] |           16.69× [16.58–17.21] |   661.52 |     94.0% |
| Direct: date arithmetic     |          24.16 [22.40–25.04] |       30.60 [29.50–31.95] |              1.27× [1.24–1.30] |     6.44 |     21.1% |
| Barrel: formatting + locale |       125.29 [119.99–128.64] | 1429.60 [1409.01–1478.66] |           11.41× [11.24–11.67] |  1304.31 |     91.2% |
| Direct: formatting + locale |          29.99 [29.37–30.88] |       83.14 [81.96–85.87] |              2.77× [2.74–2.80] |    53.16 |     63.9% |

## Runtime static process (Node 26.12.1)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          14.33 [13.26–15.82] |       14.41 [13.79–15.42] |              1.01× [0.98–1.05] |     0.09 |      0.6% |
| Barrel: date arithmetic     |          36.80 [35.68–38.70] |    688.40 [675.29–716.49] |           18.71× [18.47–19.11] |   651.60 |     94.7% |
| Direct: date arithmetic     |          23.16 [21.91–24.04] |       29.82 [28.62–30.98] |              1.29× [1.26–1.32] |     6.66 |     22.3% |
| Barrel: formatting + locale |          80.08 [78.27–83.64] | 1386.84 [1364.68–1457.41] |           17.32× [16.99–17.67] |  1306.77 |     94.2% |
| Direct: formatting + locale |          26.53 [25.17–27.49] |       80.06 [79.15–82.28] |              3.02× [3.00–3.06] |    53.53 |     66.9% |

## Runtime static process (Bun 1.4.3)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             5.06 [4.33–5.55] |          5.14 [4.37–5.67] |              1.02× [0.94–1.11] |     0.09 |      1.7% |
| Barrel: date arithmetic     |          14.01 [13.29–14.74] |       13.90 [13.33–14.63] |              0.99× [0.96–1.02] |    -0.11 |     -0.8% |
| Direct: date arithmetic     |             8.40 [8.15–9.28] |          8.44 [7.93–9.18] |              1.00× [0.93–1.04] |     0.04 |      0.4% |
| Barrel: formatting + locale |          35.90 [34.92–37.48] |       36.33 [35.11–37.88] |              1.01× [0.99–1.02] |     0.42 |      1.2% |
| Direct: formatting + locale |            9.87 [9.28–10.79] |         9.75 [9.40–10.54] |              0.99× [0.94–1.03] |    -0.12 |     -1.2% |

## Runtime static process (Deno 2.9.8)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          14.83 [13.87–17.12] |       14.71 [14.05–16.81] |              0.99× [0.91–1.12] |    -0.12 |     -0.8% |
| Barrel: date arithmetic     |          27.22 [26.27–28.72] |       26.98 [26.02–27.94] |              0.99× [0.96–1.02] |    -0.25 |     -0.9% |
| Direct: date arithmetic     |          18.71 [18.19–20.73] |       18.35 [17.83–20.06] |              0.98× [0.96–1.01] |    -0.36 |     -1.9% |
| Barrel: formatting + locale |          47.02 [45.14–49.71] |       46.74 [45.03–49.87] |              0.99× [0.97–1.03] |    -0.29 |     -0.6% |
| Direct: formatting + locale |          20.30 [19.54–22.65] |       20.20 [19.19–21.88] |              0.99× [0.94–1.03] |    -0.11 |     -0.5% |

## Runtime static process (Node 27.0.0-pre (Git))

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |          14.87 [13.86–15.90] |       14.71 [13.69–15.79] |              0.99× [0.94–1.05] |    -0.17 |     -1.1% |
| Barrel: date arithmetic     |          37.13 [35.32–39.40] |       73.23 [71.62–75.64] |              1.97× [1.94–2.03] |    36.10 |     49.3% |
| Direct: date arithmetic     |          23.59 [21.55–24.94] |       23.25 [21.27–24.78] |              0.99× [0.95–1.03] |    -0.35 |     -1.5% |
| Barrel: formatting + locale |          82.17 [80.19–84.77] |    148.24 [143.60–151.07] |              1.80× [1.77–1.83] |    66.07 |     44.6% |
| Direct: formatting + locale |          27.24 [25.63–28.38] |       29.61 [28.59–31.88] |              1.09× [1.07–1.14] |     2.38 |      8.0% |

## Vitest single collection

Importing one test file and collecting its test; includes dependency loading and test registration, excludes setup and test execution. Node 24.22.1 (latest LTS).

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |             6.83 [6.53–7.11] |          6.77 [6.59–7.36] |              0.99× [0.98–1.01] |    -0.06 |     -0.8% |
| Barrel: date arithmetic     |          24.98 [24.35–26.34] |    677.83 [657.54–695.77] |           27.14× [26.35–27.71] |   652.85 |     96.3% |
| Direct: date arithmetic     |          10.83 [10.51–12.11] |       18.32 [17.59–20.85] |              1.69× [1.63–1.73] |     7.48 |     40.9% |
| Barrel: formatting + locale |          74.31 [71.60–77.88] | 1395.58 [1377.06–1439.50] |           18.78× [18.59–19.11] |  1321.27 |     94.7% |
| Direct: formatting + locale |          14.14 [13.54–15.88] |       69.85 [66.38–73.34] |              4.94× [4.78–5.03] |    55.71 |     79.8% |

## Vitest single total

Wall time for one file / one test / one worker, including process startup and exit. Node 24.22.1 (latest LTS).

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       258.03 [254.84–262.92] |    259.53 [256.25–263.18] |              1.01× [1.00–1.01] |     1.50 |      0.6% |
| Barrel: date arithmetic     |       259.72 [256.03–263.89] |    905.65 [881.55–920.45] |              3.49× [3.45–3.52] |   645.93 |     71.3% |
| Direct: date arithmetic     |       259.09 [254.04–263.47] |    260.19 [255.81–264.74] |              1.00× [1.00–1.01] |     1.09 |      0.4% |
| Barrel: formatting + locale |       290.79 [284.44–299.19] | 1624.26 [1601.87–1661.51] |              5.59× [5.53–5.67] |  1333.47 |     82.1% |
| Direct: formatting + locale |       259.94 [256.59–264.48] |    285.26 [280.75–290.82] |              1.10× [1.09–1.11] |    25.33 |      8.9% |

## Vitest parallel collection

Sum of collection durations across isolated files. Overlapping elapsed intervals: neither wall time nor CPU time. Node 24.22.1 (latest LTS).

| Consumer                    | Node-CJS policy ms [p10–p90] |    ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ---------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       117.99 [112.16–122.67] |       116.50 [109.41–124.02] |              0.99× [0.96–1.03] |    -1.49 |     -1.3% |
| Barrel: date arithmetic     |       525.92 [510.09–535.41] | 15122.42 [14953.79–15440.08] |           28.75× [28.45–28.98] | 14596.50 |     96.5% |
| Direct: date arithmetic     |       201.27 [193.00–210.83] |       364.34 [353.38–382.18] |              1.81× [1.76–1.88] |   163.07 |     44.8% |
| Barrel: formatting + locale |    1590.53 [1569.79–1611.68] | 31910.10 [31403.71–32197.24] |           20.06× [19.96–20.15] | 30319.58 |     95.0% |
| Direct: formatting + locale |       270.74 [260.42–286.05] |    1452.70 [1432.18–1489.78] |              5.37× [5.30–5.47] |  1181.96 |     81.4% |

## Vitest parallel total

User-visible wall time for the whole isolated suite, including process startup and exit. Node 24.22.1 (latest LTS).

| Consumer                    | Node-CJS policy ms [p10–p90] | ESM baseline ms [p10–p90] | Baseline/policy [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------------: | ------------------------: | -----------------------------: | -------: | --------: |
| Empty control (no date-fns) |       495.83 [489.34–501.80] |    495.50 [489.71–502.67] |              1.00× [0.99–1.01] |    -0.33 |     -0.1% |
| Barrel: date arithmetic     |       578.67 [572.07–589.78] | 4262.58 [4217.41–4347.62] |              7.37× [7.32–7.41] |  3683.91 |     86.4% |
| Direct: date arithmetic     |       516.91 [509.91–527.27] |    548.90 [541.71–562.56] |              1.06× [1.05–1.07] |    31.98 |      5.8% |
| Barrel: formatting + locale |       829.50 [818.14–837.14] | 8509.60 [8346.04–8638.49] |           10.26× [10.19–10.33] |  7680.10 |     90.3% |
| Direct: formatting + locale |       533.13 [527.86–544.83] |    794.70 [788.33–808.03] |              1.49× [1.48–1.50] |   261.57 |     32.9% |

## How to interpret this

Start with **Vitest parallel total** for test-suite elapsed time and **Runtime static process** for command startup. Parallel collection times overlap and are summed. Empty controls show runner overhead and are not subtracted.

Direct imports avoid the barrel; cached imports reuse an already-loaded consumer. Long-lived processes amortize initial loading, while isolated tests and short-lived commands pay it repeatedly.

These workloads isolate import costs. End-to-end savings depend on application work, runtime, caching and hardware.

[Raw samples, warmups, per-file diagnostics, module checks, runtime-file SHA-256 hashes and machine metadata](./report.json).
