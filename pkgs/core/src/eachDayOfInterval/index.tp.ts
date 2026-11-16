import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachDayOfInterval } from "../tp/eachDayOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachDayOfIntervalOptions,
  EachDayOfIntervalResult,
} from "./index.ts";

export function tpyEachDayOfInterval<
  IntervalType extends Interval,
  Options extends EachDayOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachDayOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  return tpEachDayOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachDayOfIntervalResult<IntervalType, Options>;
}
