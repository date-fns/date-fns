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

  // `Temporal.add` throws a RangeError for fractional month values, and
  // truncating here keeps the rounding policy in line with the JS Date
  // implementation. Amounts that truncate to zero are a no-op.
  const amountInMonths = Math.trunc(amount);
  if (!amountInMonths) return fromTp(temporal, date, options);

  const result = temporal.add({ months: amountInMonths });

  return fromTp(result, date, options);
}
