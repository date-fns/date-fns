import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfISOWeekYear } from "../tp/endOfISOWeekYear/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfISOWeekYearOptions } from "./index.ts";

export function tpyEndOfISOWeekYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfISOWeekYearOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  try {
    return fromTp(tpEndOfISOWeekYear(temporal), date, options);
  } catch (error) {
    if (error instanceof RangeError) return invalidDate;
    throw error;
  }
}
