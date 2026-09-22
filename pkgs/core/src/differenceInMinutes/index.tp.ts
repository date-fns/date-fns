import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { millisecondsInMinute } from "../constants/index.ts";
import { tpyDifferenceInMilliseconds } from "../differenceInMilliseconds/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInMinutesOptions } from "./index.ts";

export function tpyDifferenceInMinutes(
  dateLeft: DateArg<Date> & {},
  dateRight: DateArg<Date> & {},
  options?: DifferenceInMinutesOptions,
): number {
  const diff =
    tpyDifferenceInMilliseconds(dateLeft, dateRight) / millisecondsInMinute;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
