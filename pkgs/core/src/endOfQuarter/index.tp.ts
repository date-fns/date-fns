import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfQuarter } from "../tp/endOfQuarter/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfQuarterOptions } from "./index.ts";

export function tpyEndOfQuarter<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfQuarterOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(tpEndOfQuarter(temporal), date, options);
}
