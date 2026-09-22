import { toTpInstant } from "../_lib/tp/index.ts";
import { tpIsSunday } from "../tp/isSunday/index.ts";
import type { DateArg } from "../types.ts";
import type { IsSundayOptions } from "./index.ts";

export function tpyIsSunday(
  date: DateArg<Date> & {},
  options?: IsSundayOptions | undefined,
): boolean {
  const [temporal] = toTpInstant(date, options);
  return temporal ? tpIsSunday(temporal) : false;
}
