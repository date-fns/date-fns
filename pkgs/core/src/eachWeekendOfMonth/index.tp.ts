import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachWeekendOfMonth } from "../tp/eachWeekendOfMonth/index.ts";
import type { DateArg } from "../types.ts";
import type { EachWeekendOfMonthOptions } from "./index.ts";

export function tpyEachWeekendOfMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EachWeekendOfMonthOptions<ResultDate>,
): ResultDate[] {
  const [temporal] = toTpInstant(date, options);
  if (!temporal) return [];
  return tpEachWeekendOfMonth(temporal).map((result) =>
    fromTp(result, date, options),
  );
}
