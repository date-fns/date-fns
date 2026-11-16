import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpAddISOWeekYears } from "../tp/addISOWeekYears/index.ts";
import type { DateArg } from "../types.ts";
import type { AddISOWeekYearsOptions } from "./index.ts";

export function tpyAddISOWeekYears<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddISOWeekYearsOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || isNaN(amount)) return invalidDate;

  const result = tpAddISOWeekYears(temporal, amount);

  return fromTp(result, date, options);
}
