import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { tpDifferenceInISOWeekYears } from "../tp/differenceInISOWeekYears/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInISOWeekYearsOptions } from "./index.ts";

export function tpyDifferenceInISOWeekYears(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInISOWeekYearsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  return tpDifferenceInISOWeekYears(later, earlier);
}
