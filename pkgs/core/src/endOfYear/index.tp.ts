import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfYearOptions } from "./index.ts";

export function tpyEndOfYear<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(date: DateArg<DateType>, options?: EndOfYearOptions<ResultDate>): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(
    temporal.with(
      {
        month: 12,
        day: 31,
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
}
