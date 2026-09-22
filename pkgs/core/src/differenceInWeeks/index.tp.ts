import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { tpyDifferenceInDays } from "../differenceInDays/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInWeeksOptions } from "./index.ts";

export function tpyDifferenceInWeeks(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInWeeksOptions | undefined,
): number {
  const diff = tpyDifferenceInDays(laterDate, earlierDate, options) / 7;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
