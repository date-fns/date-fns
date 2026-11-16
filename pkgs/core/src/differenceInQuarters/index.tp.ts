import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { tpyDifferenceInMonths } from "../differenceInMonths/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInQuartersOptions } from "./index.ts";

export function tpyDifferenceInQuarters(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInQuartersOptions | undefined,
): number {
  const diff = tpyDifferenceInMonths(laterDate, earlierDate, options) / 3;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
