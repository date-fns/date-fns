import { fromTp, toTpInstant } from "../_lib/tp/index.ts";
import { tpEndOfDecade } from "../tp/endOfDecade/index.ts";
import type { DateArg } from "../types.ts";
import type { EndOfDecadeOptions } from "./index.ts";

export function tpyEndOfDecade<
  DateType extends Date,
  ResultDate extends Date = DateType,
>(
  date: DateArg<DateType>,
  options?: EndOfDecadeOptions<ResultDate> | undefined,
): ResultDate {
  const [temporal, invalidDate] = toTpInstant(date, options);
  if (!temporal) return invalidDate;
  return fromTp(tpEndOfDecade(temporal), date, options);
}
