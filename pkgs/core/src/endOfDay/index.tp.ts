import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfDayOptions } from "./index.ts";

export function tpyEndOfDay<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfDayOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  try {
    return fromTp(
      temporal.with(
        { hour: 23, minute: 59, second: 59, millisecond: 999 },
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
