import { toTpInstant } from "../_lib/tp/index.ts";
import { tpIsSaturday } from "../tp/isSaturday/index.ts";
import type { DateArg } from "../types.ts";
import type { IsSaturdayOptions } from "./index.ts";

export function tpyIsSaturday(
  date: DateArg<Date> & {},
  options?: IsSaturdayOptions | undefined,
): boolean {
  const [temporal] = toTpInstant(date, options);
  return temporal ? tpIsSaturday(temporal) : false;
}
