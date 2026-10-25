import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfSecondOptions } from "./index.ts";

export function tpyEndOfSecond<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfSecondOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(
    temporal.with({ millisecond: 999 }, { offset: "ignore" }),
    date,
    options,
  );
}
