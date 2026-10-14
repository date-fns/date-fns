import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { AddMonthsOptions } from "./index.ts";

export function tpyAddMonths<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddMonthsOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || isNaN(amount)) return invalidDate;

  // Match the core implementation: fractional months are truncated toward
  // zero before the calendar arithmetic.
  const result = temporal.add({ months: Math.trunc(amount) });

  return fromTp(result, date, options);
}
