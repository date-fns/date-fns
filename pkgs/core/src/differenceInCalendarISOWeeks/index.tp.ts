import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { tpDifferenceInCalendarWeeks } from "../tp/differenceInCalendarWeeks/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarISOWeeksOptions } from "./index.ts";

export function tpyDifferenceInCalendarISOWeeks(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarISOWeeksOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  return tpDifferenceInCalendarWeeks(later, earlier, 1);
}
