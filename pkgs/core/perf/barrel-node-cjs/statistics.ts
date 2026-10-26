// A deterministic generator makes both scheduling and resampling reproducible.
export function randomGenerator(seed: number) {
  let state = seed >>> 0;

  return () => {
    state = (Math.imul(state, 1664525) + 1013904223) >>> 0;

    return state / 2 ** 32;
  };
}

export function shuffle<T>(values: readonly T[], random: () => number): T[] {
  const result = [...values];

  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }

  return result;
}

export function quantile(values: number[], fraction: number): number {
  const sorted = values.toSorted((a, b) => a - b);
  const index = (sorted.length - 1) * fraction;
  const lower = Math.floor(index);

  return (
    sorted[lower] + (sorted[Math.ceil(index)] - sorted[lower]) * (index - lower)
  );
}

export const median = (values: number[]) => quantile(values, 0.5);

export function summarize(cjs: number[], esm: number[]) {
  const cjsMedian = median(cjs);
  const esmMedian = median(esm);

  // Resample pairs, preserving the local pairing of the two treatments.
  // This estimates within-run uncertainty, not machine-to-machine uncertainty.
  const random = randomGenerator(712367);
  const ratios = Array.from({ length: 2000 }, () => {
    const indices = cjs.map(() => Math.floor(random() * cjs.length));

    return (
      median(indices.map((i) => esm[i])) / median(indices.map((i) => cjs[i]))
    );
  });

  return {
    cjsMedian,
    esmMedian,
    cjsP10: quantile(cjs, 0.1),
    cjsP90: quantile(cjs, 0.9),
    esmP10: quantile(esm, 0.1),
    esmP90: quantile(esm, 0.9),
    ratio: esmMedian / cjsMedian,
    savedMs: esmMedian - cjsMedian,
    reductionPercent: (1 - cjsMedian / esmMedian) * 100,
    ratioInterval:
      cjs.length >= 10
        ? [quantile(ratios, 0.025), quantile(ratios, 0.975)]
        : null,
  };
}
