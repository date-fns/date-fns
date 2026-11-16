import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachQuarterOfInterval } from "../tp/eachQuarterOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachQuarterOfIntervalOptions,
  EachQuarterOfIntervalResult,
} from "./index.ts";

export function tpyEachQuarterOfInterval<
  IntervalType extends Interval,
  Options extends EachQuarterOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachQuarterOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  return tpEachQuarterOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachQuarterOfIntervalResult<IntervalType, Options>;
}
