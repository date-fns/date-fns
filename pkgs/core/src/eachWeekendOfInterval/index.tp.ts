import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachWeekendOfInterval } from "../tp/eachWeekendOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachWeekendOfIntervalOptions,
  EachWeekendOfIntervalResult,
} from "./index.ts";

export function tpyEachWeekendOfInterval<
  IntervalType extends Interval,
  Options extends EachWeekendOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachWeekendOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];
  return tpEachWeekendOfInterval(startTemporal, endTemporal).map((date) =>
    fromTp(date, start, options),
  ) as EachWeekendOfIntervalResult<IntervalType, Options>;
}
