import { tpStartOfISOWeekYear } from "../startOfISOWeekYear/index.ts";

export function tpAddISOWeekYears(
  date: Temporal.ZonedDateTime,
  amount: number,
): Temporal.ZonedDateTime {
  const plainDate = date.toPlainDate();
  const weekYear = plainDate.yearOfWeek;
  if (weekYear === undefined) return date;

  const startOfThisYear = tpStartOfISOWeekYear(weekYear);
  const diff = startOfThisYear.until(plainDate, {
    largestUnit: "days",
  }).days;
  return tpStartOfISOWeekYear(weekYear + amount)
    .add({ days: diff })
    .toZonedDateTime(date.timeZoneId);
}
