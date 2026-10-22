# Forced CommonJS for Node.js Performance Impact

Both consumers use identical ESM `import` syntax. Only the package export condition changes: native ESM files versus CommonJS files loaded through ESM interoperability.

Native Node versions: Node 22.23.4, Node 24.22.1, Node 25.9.0, Node 26.12.1, Node 27.0.0-pre (Git). Vitest 5.0.1 on Node 24.22.1 only (latest LTS); linux/x64; AMD Ryzen 9 9950X 16-Core Processor.
30 measured process pairs per row; 3 discarded warmup rounds; seed 20261022. Suite: 20 files, one assertion test per file, 4 concurrent fork workers, isolation enabled.

This measures startup and import latency. Both formats load the full barrel dependency graph; native Node does not tree-shake named imports.

date-fns 5.0.0-alpha.0; 741 export-map entries. Package manifests: ESM 199026 bytes, forced CJS 284336 bytes.

Results are reported separately for each Node version, including the local PR build when available. Improvements in newer runtimes do not remove savings on affected LTS releases.

Each sample uses fresh module caches. The filesystem cache is not flushed; compile/transform caches and dependency optimization are disabled. Correctness and module-loading checks run outside timing.

Subprocesses are launched sequentially with zx. Parent-observed process/suite totals include launcher and shell startup overhead; child-reported import/collection timers exclude it.

Times below are medians in milliseconds, with the observed p10–p90 range in brackets. Lower is better. ESM/CJS = 2 means CJS took half as long (50% less time); below 1 means CJS lost. Saved time is ESM minus CJS; negative values are regressions.

95% paired bootstrap intervals use 2,000 resamples and describe within-run variability.

## Native modules loaded (file count)

Distinct date-fns files per consumer, counted outside timing. Both formats are checked for equivalent module graphs in Node and each isolated Vitest file.

| Consumer                    | CJS (files) | ESM (files) |
| --------------------------- | ----------: | ----------: |
| Empty control (no date-fns) |           0 |           0 |
| Barrel: date arithmetic     |         303 |         303 |
| Direct: date arithmetic     |           6 |           6 |
| Barrel: formatting + locale |         825 |         825 |
| Direct: formatting + locale |          38 |          38 |

## Node first import (Node 22.23.4)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    0.20 [0.19–0.23] |       0.20 [0.18–0.24] |      1.00× [0.97–1.04] |     0.00 |      0.1% |
| Barrel: date arithmetic     | 22.14 [21.03–23.20] | 347.74 [339.38–356.36] |   15.71× [15.40–15.88] |   325.61 |     93.6% |
| Direct: date arithmetic     |    6.59 [6.19–7.26] |       8.17 [7.91–8.70] |      1.24× [1.21–1.27] |     1.58 |     19.3% |
| Barrel: formatting + locale | 60.02 [58.45–62.64] | 721.74 [710.47–734.10] |   12.02× [11.87–12.15] |   661.71 |     91.7% |
| Direct: formatting + locale |   9.91 [9.31–10.38] |    34.92 [34.16–36.59] |      3.52× [3.44–3.63] |    25.01 |     71.6% |

## Node first import (Node 24.22.1)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    0.20 [0.19–0.22] |       0.21 [0.19–0.24] |      1.01× [0.97–1.05] |     0.00 |      1.1% |
| Barrel: date arithmetic     | 18.83 [18.22–21.98] | 427.02 [419.00–437.83] |   22.68× [21.66–23.02] |   408.20 |     95.6% |
| Direct: date arithmetic     |    7.15 [4.30–7.56] |      8.58 [8.06–11.69] |      1.20× [1.17–1.91] |     1.43 |     16.7% |
| Barrel: formatting + locale | 63.91 [61.58–67.00] | 870.88 [854.12–886.44] |   13.63× [13.35–13.87] |   806.98 |     92.7% |
| Direct: formatting + locale |    7.99 [7.62–8.60] |    42.27 [41.12–43.52] |      5.29× [5.04–5.39] |    34.28 |     81.1% |

## Node first import (Node 25.9.0)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    0.21 [0.19–0.22] |       0.20 [0.19–0.22] |      0.98× [0.94–1.05] |    -0.00 |     -2.2% |
| Barrel: date arithmetic     | 21.77 [19.90–24.15] | 419.46 [412.39–435.08] |   19.27× [18.03–20.62] |   397.69 |     94.8% |
| Direct: date arithmetic     |    7.24 [4.46–7.58] |    10.96 [10.26–11.38] |      1.52× [1.49–2.25] |     3.73 |     34.0% |
| Barrel: formatting + locale | 84.64 [81.71–87.40] | 867.39 [855.14–898.40] |   10.25× [10.15–10.58] |   782.75 |     90.2% |
| Direct: formatting + locale |   9.48 [8.30–12.46] |    41.28 [40.05–44.04] |      4.36× [3.56–4.67] |    31.81 |     77.0% |

## Node first import (Node 26.12.1)

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    0.20 [0.18–0.21] |       0.19 [0.18–0.22] |      0.98× [0.96–1.01] |    -0.00 |     -1.9% |
| Barrel: date arithmetic     | 19.73 [17.55–20.91] | 408.95 [400.97–421.95] |   20.72× [20.36–21.00] |   389.21 |     95.2% |
| Direct: date arithmetic     |    7.20 [4.47–7.70] |    10.87 [10.48–11.27] |      1.51× [1.45–1.55] |     3.67 |     33.8% |
| Barrel: formatting + locale | 59.08 [56.08–62.45] | 838.11 [824.46–862.83] |   14.19× [13.90–14.45] |   779.03 |     93.0% |
| Direct: formatting + locale |  10.08 [7.23–10.51] |    40.45 [39.56–42.68] |      4.01× [3.95–4.59] |    30.37 |     75.1% |

## Node first import (Node 27.0.0-pre (Git))

First dynamic import of an ESM consumer with static date-fns imports; excludes process startup and the correctness check.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    0.20 [0.19–0.21] |       0.20 [0.19–0.22] |      1.01× [0.99–1.05] |     0.00 |      1.5% |
| Barrel: date arithmetic     | 20.36 [19.72–21.33] |    46.26 [44.40–48.41] |      2.27× [2.22–2.32] |    25.90 |     56.0% |
| Direct: date arithmetic     |    7.24 [6.99–7.37] |       7.37 [7.10–8.01] |      1.02× [1.00–1.04] |     0.13 |      1.8% |
| Barrel: formatting + locale | 60.51 [57.06–62.25] | 105.41 [102.00–108.66] |      1.74× [1.72–1.82] |    44.89 |     42.6% |
| Direct: formatting + locale |  10.25 [9.73–10.68] |    12.13 [11.72–12.65] |      1.18× [1.16–1.21] |     1.88 |     15.5% |

## Node cached import (Node 22.23.4)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 0.0039 [0.0038–0.0041] | 0.0039 [0.0038–0.0040] |      1.01× [0.98–1.02] |   0.0000 |      0.8% |
| Barrel: date arithmetic     | 0.0035 [0.0033–0.0037] | 0.0033 [0.0032–0.0035] |      0.96× [0.93–0.97] |  -0.0002 |     -4.6% |
| Direct: date arithmetic     | 0.0034 [0.0033–0.0038] | 0.0046 [0.0043–0.0050] |      1.35× [1.32–1.39] |   0.0012 |     25.9% |
| Barrel: formatting + locale | 0.0039 [0.0035–0.0041] | 0.0037 [0.0036–0.0038] |      0.94× [0.92–0.95] |  -0.0002 |     -6.5% |
| Direct: formatting + locale | 0.0039 [0.0038–0.0041] | 0.0053 [0.0040–0.0078] |      1.35× [1.03–1.68] |   0.0014 |     26.0% |

## Node cached import (Node 24.22.1)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 0.0071 [0.0067–0.0074] | 0.0070 [0.0068–0.0076] |      1.00× [0.97–1.03] |  -0.0000 |     -0.3% |
| Barrel: date arithmetic     | 0.0045 [0.0043–0.0048] | 0.0042 [0.0040–0.0049] |      0.93× [0.89–0.95] |  -0.0003 |     -8.1% |
| Direct: date arithmetic     | 0.0045 [0.0043–0.0046] | 0.0043 [0.0042–0.0044] |      0.96× [0.95–0.98] |  -0.0002 |     -4.4% |
| Barrel: formatting + locale | 0.0048 [0.0047–0.0050] | 0.0209 [0.0049–0.1126] |      4.31× [1.11–7.91] |   0.0160 |     76.8% |
| Direct: formatting + locale | 0.0046 [0.0045–0.0050] | 0.0047 [0.0046–0.0049] |      1.03× [1.01–1.04] |   0.0001 |      2.6% |

## Node cached import (Node 25.9.0)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 0.0045 [0.0044–0.0048] | 0.0045 [0.0044–0.0050] |      1.00× [0.99–1.03] |   0.0000 |      0.2% |
| Barrel: date arithmetic     | 0.0045 [0.0044–0.0048] | 0.0039 [0.0038–0.0046] |      0.87× [0.85–0.92] |  -0.0006 |    -15.3% |
| Direct: date arithmetic     | 0.0045 [0.0044–0.0052] | 0.0043 [0.0042–0.0046] |      0.94× [0.93–0.96] |  -0.0003 |     -6.2% |
| Barrel: formatting + locale | 0.0047 [0.0046–0.0050] | 0.0049 [0.0047–0.0381] |      1.04× [1.01–1.09] |   0.0002 |      3.7% |
| Direct: formatting + locale | 0.0045 [0.0044–0.0049] | 0.0047 [0.0044–0.0314] |      1.05× [1.01–1.09] |   0.0002 |      4.6% |

## Node cached import (Node 26.12.1)

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 0.0046 [0.0044–0.0052] | 0.0046 [0.0044–0.0050] |      0.99× [0.97–1.02] |  -0.0000 |     -0.7% |
| Barrel: date arithmetic     | 0.0044 [0.0043–0.0047] | 0.0042 [0.0040–0.0045] |      0.95× [0.92–0.97] |  -0.0002 |     -5.4% |
| Direct: date arithmetic     | 0.0045 [0.0043–0.0046] | 0.0043 [0.0042–0.0047] |      0.96× [0.94–0.98] |  -0.0002 |     -3.8% |
| Barrel: formatting + locale | 0.0048 [0.0047–0.0051] | 0.0045 [0.0044–0.0051] |      0.94× [0.92–0.95] |  -0.0003 |     -6.7% |
| Direct: formatting + locale | 0.0046 [0.0045–0.0053] | 0.0048 [0.0046–0.0050] |      1.04× [1.02–1.06] |   0.0002 |      4.2% |

## Node cached import (Node 27.0.0-pre (Git))

Average of 100 repeated imports of the same consumer in that process; module-cache-hit control, not function throughput.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 0.0046 [0.0044–0.0049] | 0.0047 [0.0045–0.0049] |      1.02× [0.99–1.04] |   0.0001 |      2.4% |
| Barrel: date arithmetic     | 0.0047 [0.0044–0.0051] | 0.0045 [0.0044–0.0047] |      0.97× [0.94–1.00] |  -0.0001 |     -2.8% |
| Direct: date arithmetic     | 0.0046 [0.0045–0.0049] | 0.0039 [0.0036–0.0041] |      0.85× [0.82–0.86] |  -0.0007 |    -18.2% |
| Barrel: formatting + locale | 0.0049 [0.0048–0.0052] | 0.0051 [0.0050–0.0056] |      1.04× [1.02–1.07] |   0.0002 |      4.0% |
| Direct: formatting + locale | 0.0047 [0.0045–0.0050] | 0.0041 [0.0037–0.0043] |      0.88× [0.84–0.90] |  -0.0005 |    -13.3% |

## Node static process (Node 22.23.4)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 15.87 [14.41–17.46] |    15.63 [14.70–17.44] |      0.98× [0.94–1.05] |    -0.24 |     -1.6% |
| Barrel: date arithmetic     | 42.56 [41.25–45.27] | 366.40 [362.04–372.11] |      8.61× [8.50–8.69] |   323.84 |     88.4% |
| Direct: date arithmetic     | 23.05 [21.91–24.53] |    24.50 [23.36–26.27] |      1.06× [1.04–1.10] |     1.46 |      5.9% |
| Barrel: formatting + locale | 83.04 [80.86–85.27] | 746.71 [733.10–762.40] |      8.99× [8.94–9.07] |   663.67 |     88.9% |
| Direct: formatting + locale | 27.94 [26.70–30.10] |    56.15 [54.84–58.02] |      2.01× [1.96–2.04] |    28.21 |     50.2% |

## Node static process (Node 24.22.1)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 15.49 [14.03–16.67] |    15.76 [14.05–17.00] |      1.02× [0.98–1.07] |     0.27 |      1.7% |
| Barrel: date arithmetic     | 35.48 [34.05–38.30] | 458.12 [446.11–471.35] |   12.91× [12.70–13.22] |   422.63 |     92.3% |
| Direct: date arithmetic     | 20.21 [19.01–22.22] |    25.00 [22.97–27.15] |      1.24× [1.17–1.27] |     4.79 |     19.2% |
| Barrel: formatting + locale | 84.37 [79.99–89.05] | 911.35 [892.04–933.89] |   10.80× [10.62–11.00] |   826.99 |     90.7% |
| Direct: formatting + locale | 26.49 [25.17–29.07] |    64.63 [62.57–66.56] |      2.44× [2.41–2.49] |    38.13 |     59.0% |

## Node static process (Node 25.9.0)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    |       CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    14.96 [13.92–15.92] |    14.70 [13.77–16.55] |      0.98× [0.97–1.05] |    -0.25 |     -1.7% |
| Barrel: date arithmetic     |    39.14 [36.57–42.12] | 452.60 [442.83–466.50] |   11.56× [11.09–12.02] |   413.46 |     91.4% |
| Direct: date arithmetic     |    21.55 [19.38–24.26] |    25.89 [24.27–27.65] |      1.20× [1.13–1.28] |     4.34 |     16.8% |
| Barrel: formatting + locale | 106.68 [103.13–110.14] | 899.91 [886.16–919.65] |      8.44× [8.34–8.57] |   793.23 |     88.1% |
| Direct: formatting + locale |    27.31 [25.37–28.75] |    62.69 [60.77–65.07] |      2.30× [2.23–2.35] |    35.38 |     56.4% |

## Node static process (Node 26.12.1)

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 15.04 [14.03–16.96] |    15.12 [13.73–16.30] |      1.01× [0.95–1.04] |     0.08 |      0.5% |
| Barrel: date arithmetic     | 35.96 [34.66–38.03] | 439.07 [429.96–454.98] |   12.21× [11.98–12.43] |   403.11 |     91.8% |
| Direct: date arithmetic     | 22.91 [20.68–24.05] |    25.78 [24.65–27.50] |      1.12× [1.10–1.18] |     2.86 |     11.1% |
| Barrel: formatting + locale | 76.59 [74.47–78.93] | 867.28 [844.62–894.94] |   11.32× [11.14–11.49] |   790.69 |     91.2% |
| Direct: formatting + locale | 26.65 [25.31–28.00] |    61.39 [59.26–63.61] |      2.30× [2.28–2.38] |    34.74 |     56.6% |

## Node static process (Node 27.0.0-pre (Git))

Parent-observed wall time for an ESM entry point with static imports, including process startup, correctness check and exit.

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 15.22 [13.91–16.28] |    14.76 [14.09–16.53] |      0.97× [0.93–1.03] |    -0.46 |     -3.2% |
| Barrel: date arithmetic     | 36.57 [35.06–38.72] |    61.87 [60.61–64.86] |      1.69× [1.67–1.72] |    25.31 |     40.9% |
| Direct: date arithmetic     | 22.26 [21.38–23.43] |    21.85 [20.77–22.91] |      0.98× [0.95–1.01] |    -0.42 |     -1.9% |
| Barrel: formatting + locale | 78.61 [75.67–82.13] | 124.67 [120.01–129.99] |      1.59× [1.55–1.62] |    46.06 |     36.9% |
| Direct: formatting + locale | 26.20 [24.76–27.68] |    28.25 [26.40–29.88] |      1.08× [1.05–1.11] |     2.05 |      7.3% |

## Vitest single collection

Importing one test file and collecting its test; includes dependency loading and test registration, excludes setup and test execution. Node 24.22.1 (latest LTS).

| Consumer                    |    CJS ms [p10–p90] |       ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------: | ---------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    6.28 [5.93–7.09] |       6.16 [5.90–6.54] |      0.98× [0.96–1.02] |    -0.12 |     -1.9% |
| Barrel: date arithmetic     | 24.47 [23.72–25.77] | 419.96 [410.50–437.24] |   17.17× [16.91–17.41] |   395.49 |     94.2% |
| Direct: date arithmetic     |   9.78 [9.48–12.75] |    13.98 [13.38–16.51] |      1.43× [1.37–1.46] |     4.20 |     30.0% |
| Barrel: formatting + locale | 69.89 [67.79–72.97] | 863.81 [852.88–879.38] |   12.36× [12.11–12.53] |   793.92 |     91.9% |
| Direct: formatting + locale | 12.90 [12.49–14.20] |    48.19 [44.63–50.81] |      3.74× [3.60–3.81] |    35.29 |     73.2% |

## Vitest single total

Wall time for one file / one test / one worker, including process startup and exit. Node 24.22.1 (latest LTS).

| Consumer                    |       CJS ms [p10–p90] |          ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ------------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 247.98 [244.57–259.10] |    246.94 [242.31–254.87] |      1.00× [0.98–1.01] |    -1.03 |     -0.4% |
| Barrel: date arithmetic     | 249.97 [245.95–254.57] |    643.79 [635.15–656.75] |      2.58× [2.56–2.60] |   393.82 |     61.2% |
| Direct: date arithmetic     | 249.52 [244.76–256.67] |    247.79 [244.79–259.00] |      0.99× [0.98–1.00] |    -1.74 |     -0.7% |
| Barrel: formatting + locale | 277.05 [271.32–284.69] | 1086.88 [1070.16–1103.99] |      3.92× [3.88–3.95] |   809.83 |     74.5% |
| Direct: formatting + locale | 249.57 [244.24–258.98] |    252.72 [247.11–262.79] |      1.01× [1.00–1.03] |     3.16 |      1.2% |

## Vitest parallel collection

Sum of collection durations across isolated files. Overlapping elapsed intervals: neither wall time nor CPU time. Node 24.22.1 (latest LTS).

| Consumer                    |          CJS ms [p10–p90] |             ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ------------------------: | ---------------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) |    107.27 [101.86–114.19] |       108.60 [100.94–113.34] |      1.01× [0.99–1.03] |     1.32 |      1.2% |
| Barrel: date arithmetic     |    489.63 [477.23–510.38] |    9317.18 [9187.90–9476.70] |   19.03× [18.79–19.20] |  8827.55 |     94.7% |
| Direct: date arithmetic     |    159.19 [149.26–168.58] |       255.93 [247.81–267.26] |      1.61× [1.58–1.65] |    96.74 |     37.8% |
| Barrel: formatting + locale | 1476.18 [1447.37–1516.20] | 19413.97 [19126.03–19743.83] |   13.15× [13.04–13.30] | 17937.79 |     92.4% |
| Direct: formatting + locale |    218.80 [213.46–229.23] |     1010.27 [992.93–1047.40] |      4.62× [4.58–4.68] |   791.46 |     78.3% |

## Vitest parallel total

User-visible wall time for the whole isolated suite, including process startup and exit. Node 24.22.1 (latest LTS).

| Consumer                    |       CJS ms [p10–p90] |          ESM ms [p10–p90] | ESM/CJS [95% interval] | Saved ms | Less time |
| --------------------------- | ---------------------: | ------------------------: | ---------------------: | -------: | --------: |
| Empty control (no date-fns) | 475.07 [468.82–485.38] |    477.00 [467.16–491.58] |      1.00× [1.00–1.02] |     1.93 |      0.4% |
| Barrel: date arithmetic     | 557.49 [546.54–573.62] | 2861.78 [2814.79–2911.14] |      5.13× [5.08–5.16] |  2304.29 |     80.5% |
| Direct: date arithmetic     | 488.80 [478.67–504.43] |    507.45 [501.74–526.92] |      1.04× [1.03–1.05] |    18.65 |      3.7% |
| Barrel: formatting + locale | 797.19 [783.03–821.85] | 5370.32 [5288.01–5475.14] |      6.74× [6.68–6.78] |  4573.13 |     85.2% |
| Direct: formatting + locale | 504.51 [497.45–514.39] |    676.73 [667.46–693.67] |      1.34× [1.33–1.35] |   172.22 |     25.4% |

## How to interpret this

Start with **Vitest parallel total** for test-suite elapsed time and **Node static process** for command startup. Parallel collection times overlap and are summed. Empty controls show runner overhead and are not subtracted.

Direct imports avoid the barrel; cached imports reuse an already-loaded consumer. Long-lived processes amortize initial loading, while isolated tests and short-lived commands pay it repeatedly.

These workloads isolate import costs. End-to-end savings depend on application work, runtime, caching and hardware.

[Raw samples, warmups, per-file diagnostics, module checks, runtime-file SHA-256 hashes and machine metadata](./report.json).
