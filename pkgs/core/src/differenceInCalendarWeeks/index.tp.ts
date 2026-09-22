import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { tpDifferenceInCalendarWeeks } from "../tp/differenceInCalendarWeeks/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInCalendarWeeksOptions } from "./index.ts";

export function tpyDifferenceInCalendarWeeks(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInCalendarWeeksOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;
  return tpDifferenceInCalendarWeeks(later, earlier, weekStartsOn);
}
