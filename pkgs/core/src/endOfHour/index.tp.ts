import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfHourOptions } from "./index.ts";

export function tpyEndOfHour<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfHourOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  try {
    return fromTp(
      temporal.with(
        { minute: 59, second: 59, millisecond: 999 },
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
