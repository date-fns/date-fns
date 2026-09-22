import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfISOWeek } from "../tp/endOfISOWeek/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfISOWeekOptions } from "./index.ts";

export function tpyEndOfISOWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfISOWeekOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  try {
    return fromTp(tpEndOfISOWeek(temporal), date, options);
  } catch (error) {
    if (error instanceof RangeError) return invalidDate;
    throw error;
  }
}
