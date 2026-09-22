import { tpEachDayOfInterval } from "../eachDayOfInterval/index.ts";
import { tpIsWeekend } from "../isWeekend/index.ts";

export function tpEachWeekendOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime[] {
  return tpEachDayOfInterval(start, end).filter(tpIsWeekend);
}
