import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarQuartersOptions } from "./index.ts";

export function tpyDifferenceInCalendarQuarters(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarQuartersOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  const yearsDiff = later.year - earlier.year;
  const quartersDiff =
    Math.floor((later.month - 1) / 3) - Math.floor((earlier.month - 1) / 3);
  return yearsDiff * 4 + quartersDiff;
}
