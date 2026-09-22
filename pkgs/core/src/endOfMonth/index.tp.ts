import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfMonthOptions } from "./index.ts";

export function tpyEndOfMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfMonthOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  try {
    return fromTp(
      temporal.with(
        {
          day: temporal.daysInMonth,
          hour: 23,
          minute: 59,
          second: 59,
          millisecond: 999,
        },
        { offset: "ignore" },
      ),
      date,
      options,
    );
  } catch (error) {
    if (error instanceof RangeError) return invalidDate;
    throw error;
  }
}
