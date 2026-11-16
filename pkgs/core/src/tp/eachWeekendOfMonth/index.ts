import { tpEachWeekendOfInterval } from "../eachWeekendOfInterval/index.ts";

export function tpEachWeekendOfMonth(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime[] {
  const start = date.with({ day: 1 }).startOfDay();
  const end = start.add({ months: 1 }).subtract({ nanoseconds: 1 });
  return tpEachWeekendOfInterval(start, end);
}
