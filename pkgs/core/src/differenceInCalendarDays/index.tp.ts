import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarDaysOptions } from "./index.ts";

export function tpyDifferenceInCalendarDays(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarDaysOptions | undefined,
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
    .until(later.toPlainDate(), { largestUnit: "days" }).days;
}
