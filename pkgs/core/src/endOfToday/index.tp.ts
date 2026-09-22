import { tpyEndOfDay } from "../endOfDay/index.tp.ts";
import type { EndOfTodayOptions } from "./index.ts";

export function tpyEndOfToday<ResultDate extends Date = Date>(
  options?: EndOfTodayOptions<ResultDate>,
): ResultDate {
  return tpyEndOfDay(Date.now(), options);
}
