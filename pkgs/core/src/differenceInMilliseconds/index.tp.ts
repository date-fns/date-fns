import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";

export function tpyDifferenceInMilliseconds(
  laterDate: DateArg<Date> & {},
  earlierDate: DateArg<Date> & {},
): number {
  const [later] = toTpInstant(laterDate);
  const [earlier] = toTpInstant(earlierDate);
  if (!later || !earlier) return NaN;

  return later.epochMilliseconds - earlier.epochMilliseconds;
}
