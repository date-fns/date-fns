import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import type { DateArg, Duration } from "../types.ts";
import type { AddOptions } from "./index.ts";

export function tpyAdd<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  duration: Duration,
  options?: AddOptions<ResultDate> | undefined,
): ResultDate {
  let [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;

  const result = temporal.add({
    years: duration.years ?? 0,
    months: duration.months ?? 0,
    weeks: duration.weeks ?? 0,
    days: duration.days ?? 0,
    hours: duration.hours ?? 0,
    minutes: duration.minutes ?? 0,
    seconds: duration.seconds ?? 0,
  });

  return fromTp(result, date, options);
}
