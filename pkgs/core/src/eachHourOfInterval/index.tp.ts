import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachHourOfInterval } from "../tp/eachHourOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachHourOfIntervalOptions,
  EachHourOfIntervalResult,
} from "./index.ts";

export function tpyEachHourOfInterval<
  IntervalType extends Interval,
  Options extends EachHourOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachHourOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  return tpEachHourOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachHourOfIntervalResult<IntervalType, Options>;
}
