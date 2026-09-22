import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpStartOfWeek } from "../tp/startOfWeek/index.ts";
import type { DateArg } from "../types.ts";
import type { StartOfWeekOptions } from "./index.ts";

export function tpyStartOfWeek<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: StartOfWeekOptions<ResultDate>,
): ResultDate {
  const defaultOptions = getDefaultOptions();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;

  const result = tpStartOfWeek(temporal, weekStartsOn);

  return fromTp(result, date, options);
}
