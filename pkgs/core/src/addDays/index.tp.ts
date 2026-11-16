import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { AddDaysOptions } from "./index.ts";

export function tpyAddDays<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddDaysOptions<ResultDate> | undefined,
): ResultDate {
  let [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || isNaN(amount)) return invalidDate;

  const result = temporal.add({ days: amount });

  return fromTp(result, date, options);
}
