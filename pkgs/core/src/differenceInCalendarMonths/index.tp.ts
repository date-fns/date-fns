import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarMonthsOptions } from "./index.ts";

export function tpyDifferenceInCalendarMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarMonthsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  return earlier
    .toPlainDate()
    .toPlainYearMonth()
    .until(later.toPlainDate().toPlainYearMonth(), {
      largestUnit: "months",
    }).months;
}
