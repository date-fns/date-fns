import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { normalizeInterval } from "../_lib/normalizeInterval/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachWeekOfInterval } from "../tp/eachWeekOfInterval/index.ts";
import type { Interval } from "../types.ts";
import type {
  EachWeekOfIntervalOptions,
  EachWeekOfIntervalResult,
} from "./index.ts";

export function tpyEachWeekOfInterval<
  IntervalType extends Interval,
  Options extends EachWeekOfIntervalOptions | undefined = undefined,
>(
  interval: IntervalType,
  options?: Options,
): EachWeekOfIntervalResult<IntervalType, Options> {
  const { start, end } = normalizeInterval(options?.in, interval);
  const [startTemporal] = toTpInstant(start);
  const [endTemporal] = toTpInstant(end);
  if (!startTemporal || !endTemporal) return [];

  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;
  return tpEachWeekOfInterval(
    startTemporal,
    endTemporal,
    weekStartsOn,
    options?.step,
  ).map((date) => fromTp(date, start, options)) as EachWeekOfIntervalResult<
    IntervalType,
    Options
  >;
}
