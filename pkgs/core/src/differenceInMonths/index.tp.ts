import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { tpDifferenceInMonths } from "../tp/differenceInMonths/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInMonthsOptions } from "./index.ts";

export function tpyDifferenceInMonths(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInMonthsOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  return tpDifferenceInMonths(later, earlier);
}
