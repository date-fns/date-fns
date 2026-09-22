import { tpStartOfWeek } from "../startOfWeek/index.ts";

export function tpDifferenceInCalendarWeeks(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
  weekStartsOn: number,
): number {
  const laterStartOfWeek = tpStartOfWeek(laterDate, weekStartsOn);
  const earlierStartOfWeek = tpStartOfWeek(earlierDate, weekStartsOn);
  const days = earlierStartOfWeek
    .toPlainDate()
    .until(laterStartOfWeek.toPlainDate(), { largestUnit: "days" }).days;
  return days / 7;
}
