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

  const result = temporal.add({ months: amount });

  return fromTp(result, date, options);
}
