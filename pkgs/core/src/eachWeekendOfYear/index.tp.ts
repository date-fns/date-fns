import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEachWeekendOfYear } from "../tp/eachWeekendOfYear/index.ts";
import type { DateArg } from "../types.ts";
import type { EachWeekendOfYearOptions } from "./index.ts";

export function tpyEachWeekendOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EachWeekendOfYearOptions<ResultDate>,
): ResultDate[] {
  const [temporal] = toTpInstant(date, options);
  if (!temporal) return [];
  return tpEachWeekendOfYear(temporal).map((result) =>
    fromTp(result, date, options),
  );
}
