import { tpEachWeekendOfInterval } from "../eachWeekendOfInterval/index.ts";

export function tpEachWeekendOfYear(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime[] {
  const start = date.with({ month: 1, day: 1 }).startOfDay();
  const end = start.add({ years: 1 }).subtract({ nanoseconds: 1 });
  return tpEachWeekendOfInterval(start, end);
}
