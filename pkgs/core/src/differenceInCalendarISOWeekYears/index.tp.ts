import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarISOWeekYearsOptions } from "./index.ts";

export function tpyDifferenceInCalendarISOWeekYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarISOWeekYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  const laterWeekYear = later.yearOfWeek;
  const earlierWeekYear = earlier.yearOfWeek;
  if (laterWeekYear === undefined || earlierWeekYear === undefined) return NaN;
  return laterWeekYear - earlierWeekYear;
}
