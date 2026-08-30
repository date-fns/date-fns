import { tpyAddMonths } from "../addMonths/index.tp.ts";
import type { DateArg } from "../types.ts";
import type { AddQuartersOptions } from "./index.ts";

export function tpyAddQuarters<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  amount: number,
  options?: AddQuartersOptions<ResultDate> | undefined,
): ResultDate {
  return tpyAddMonths(date, amount * 3, options);
}
