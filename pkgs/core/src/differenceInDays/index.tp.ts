import { normalizeDates } from "../_lib/normalizeDates/index.ts";
import { toTpInstant } from "../_lib/tp/index.ts";
import { tpDifferenceInDays } from "../tp/differenceInDays/index.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInDaysOptions } from "./index.ts";

export function tpyDifferenceInDays(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInDaysOptions | undefined,
): number {
  const [laterDate_, earlierDate_] = normalizeDates(
    options?.in,
    laterDate,
    earlierDate,
  );
  const [later] = toTpInstant(laterDate_);
  const [earlier] = toTpInstant(earlierDate_);
  if (!later || !earlier) return NaN;

  return tpDifferenceInDays(later, earlier);
}
