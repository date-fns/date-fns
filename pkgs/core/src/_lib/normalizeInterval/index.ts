import type { ContextFn, Interval, NormalizedInterval } from "../../types.ts";
import { normalizeDates } from "../normalizeDates/index.ts";

export function normalizeInterval(
  context: ContextFn<Date> | undefined,
  interval: Interval,
): NormalizedInterval<Date> {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
