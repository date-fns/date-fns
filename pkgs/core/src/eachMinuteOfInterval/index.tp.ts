import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachMinuteOfInterval } from "../tp/eachMinuteOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachMinuteOfIntervalOptions,
  EachMinuteOfIntervalResult,
} from "./index.ts";

export function tpyEachMinuteOfInterval<
  IntervalType extends Interval,
  Options extends EachMinuteOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachMinuteOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  return tpEachMinuteOfInterval(startTemporal, endTemporal, options?.step).map(
    (date) => fromTp(date, start, options),
  ) as EachMinuteOfIntervalResult<IntervalType, Options>;
}
