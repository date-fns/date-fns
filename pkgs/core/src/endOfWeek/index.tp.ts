import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfWeek } from "../tp/endOfWeek/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfWeekOptions } from "./index.ts";

export function tpyEndOfWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(date: DateArg<DateType>, options?: EndOfWeekOptions<ResultDate>): ResultDate {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(tpEndOfWeek(temporal, weekStartsOn), date, options);
}
