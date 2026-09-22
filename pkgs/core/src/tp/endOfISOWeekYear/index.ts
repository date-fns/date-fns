import { tpStartOfISOWeekYear } from "../startOfISOWeekYear/index.ts";

export function tpEndOfISOWeekYear(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  const year = date.yearOfWeek;
  if (year === undefined)
    throw new Error(
      "The date calendar doesn't have a well-defined week system",
    );
  return tpStartOfISOWeekYear(year + 1)
    .toZonedDateTime(date.timeZoneId)
    .subtract({ milliseconds: 1 });
}
