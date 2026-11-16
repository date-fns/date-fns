import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachMonthOfInterval } from "../tp/eachMonthOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachMonthOfIntervalOptions,
  EachMonthOfIntervalResult,
} from "./index.ts";

export function tpyEachMonthOfInterval<
  IntervalType extends Interval,
  Options extends EachMonthOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachMonthOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  return tpEachMonthOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachMonthOfIntervalResult<IntervalType, Options>;
}
