import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachYearOfInterval } from "../tp/eachYearOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachYearOfIntervalOptions,
  EachYearOfIntervalResult,
} from "./index.ts";

export function tpyEachYearOfInterval<
  IntervalType extends Interval,
  Options extends EachYearOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachYearOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];
  return tpEachYearOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachYearOfIntervalResult<IntervalType, Options>;
}
