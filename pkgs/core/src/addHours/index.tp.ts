import type { DateArg } from "../types.ts";
import { tpyAddMilliseconds } from "../addMilliseconds/index.tp.ts";
import { millisecondsInHour } from "../constants/index.ts";
import type { AddHoursOptions } from "./index.ts";

export function tpyAddHours<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddHoursOptions<ResultDate> | undefined,
): ResultDate {
  return tpyAddMilliseconds(date, amount * millisecondsInHour, options);
}
