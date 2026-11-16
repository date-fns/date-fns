import { toTpInstant } from "../_lib/tp/index.ts";
import { tpIsWeekend } from "../tp/isWeekend/index.ts";
import type { DateArg } from "../types.ts";
import type { IsWeekendOptions } from "./index.ts";

export function tpyIsWeekend(
  date: DateArg<Date> & {},
  options?: IsWeekendOptions | undefined,
): boolean {
  const [temporal] = toTpInstant(date, options);
  return temporal ? tpIsWeekend(temporal) : false;
}
