import type { ContextFn, Interval, NormalizedInterval } from "../../types.js";
import { normalizeDates } from "../normalizeDates/index.js";

export function normalizeInterval(
  context: ContextFn<Date> | undefined,
  interval: Interval,
): NormalizedInterval<Date> {
  const [start, end] = normalizeDates(context, interval.start, interval.end);
  return { start, end };
}
