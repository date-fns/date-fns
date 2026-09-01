import { toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";

export function tpyCompareDesc(
  dateLeft: DateArg<Date> & {},
  dateRight: DateArg<Date> & {},
): number {
  const [left] = toTpInstant(dateLeft);
  const [right] = toTpInstant(dateRight);
  if (!left || !right) return NaN;
  return Temporal.ZonedDateTime.compare(right, left);
}
