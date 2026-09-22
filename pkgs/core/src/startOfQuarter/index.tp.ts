import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpStartOfQuarter } from "../tp/startOfQuarter/index.ts";
import type { DateArg } from "../types.ts";
import type { StartOfQuarterOptions } from "./index.ts";

export function tpyStartOfQuarter<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfQuarterOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(tpStartOfQuarter(temporal), date, options);
}
