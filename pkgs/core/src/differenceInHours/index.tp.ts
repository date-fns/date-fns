import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { millisecondsInHour } from "../constants/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInHoursOptions } from "./index.ts";

export function tpyDifferenceInHours(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInHoursOptions,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  const diff =
    (later.epochMilliseconds - earlier.epochMilliseconds) / millisecondsInHour;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
