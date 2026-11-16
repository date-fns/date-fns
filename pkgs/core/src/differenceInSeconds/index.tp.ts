import { getRoundingMethod } from "../_lib/getRoundingMethod/index.ts";
import { tpyDifferenceInMilliseconds } from "../differenceInMilliseconds/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { DifferenceInSecondsOptions } from "./index.ts";

export function tpyDifferenceInSeconds(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
  options?: DifferenceInSecondsOptions,
): number {
  const diff = tpyDifferenceInMilliseconds(laterDate, earlierDate) / 1000;
  return getRoundingMethod(options?.roundingMethod)(diff);
}
