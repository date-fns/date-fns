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

  // Truncate toward zero before calendar arithmetic, matching the non-Temporal
  // implementation. Temporal's add() requires an integer month count, so a
  // fractional value would otherwise throw or move the date by the wrong
  // number of whole months.
  const result = temporal.add({ months: Math.trunc(amount) });

  return fromTp(result, date, options);
}
