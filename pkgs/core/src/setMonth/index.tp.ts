import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpSetMonth } from "../tp/setMonth/index.ts";
import type { DateArg } from "../types.ts";
import type { SetMonthOptions } from "./index.ts";

export function tpySetMonth<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  month: number,
  options?: SetMonthOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal || !Number.isFinite(month)) return invalidDate;
  return fromTp(tpSetMonth(temporal, Math.trunc(month)), date, options);
}
