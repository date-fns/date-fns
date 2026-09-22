import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpStartOfISOWeekYear } from "../tp/startOfISOWeekYear/index.ts";
import type { DateArg } from "../types.ts";
import type { StartOfISOWeekYearOptions } from "./index.ts";

export function tpyStartOfISOWeekYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfISOWeekYearOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;

  const result = tpStartOfISOWeekYear(temporal);

  return fromTp(result, date, options);
}
