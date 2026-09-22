import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpSetDate } from "../tp/setDate/index.ts";
import type { DateArg } from "../types.ts";
import type { SetDateOptions } from "./index.ts";

export function tpySetDate<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  dayOfMonth: number,
  options?: SetDateOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || !Number.isFinite(dayOfMonth)) return invalidDate;
  try {
    return fromTp(tpSetDate(temporal, Math.trunc(dayOfMonth)), date, options);
  } catch (error) {
    if (error instanceof RangeError) return invalidDate;
    throw error;
  }
}
