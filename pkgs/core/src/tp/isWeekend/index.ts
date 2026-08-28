import { tpIsSaturday } from "../isSaturday/index.ts";
import { tpIsSunday } from "../isSunday/index.ts";

export function tpIsWeekend(date: Temporal.ZonedDateTime): boolean {
  return tpIsSaturday(date) || tpIsSunday(date);
}
