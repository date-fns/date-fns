import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfMinuteOptions } from "./index.ts";

export function tpyEndOfMinute<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfMinuteOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(
    temporal.with({ second: 59, millisecond: 999 }, { offset: "ignore" }),
    date,
    options,
  );
}
