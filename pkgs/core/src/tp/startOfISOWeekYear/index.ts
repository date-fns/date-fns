export function tpStartOfISOWeekYear(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime;

export function tpStartOfISOWeekYear(date: number): Temporal.PlainDate;

export function tpStartOfISOWeekYear(
  date: Temporal.ZonedDateTime | number,
): Temporal.ZonedDateTime | Temporal.PlainDate;

export function tpStartOfISOWeekYear(
  date: Temporal.ZonedDateTime | number,
): Temporal.ZonedDateTime | Temporal.PlainDate {
  const weekYear = typeof date === "number" ? date : date.yearOfWeek;
  if (weekYear === undefined)
    throw new Error("The date calendar does't have a well-defined week system");

  const fourthOfJanuary = Temporal.PlainDate.from({
    year: weekYear,
    month: 1,
    day: 4,
  });
  const result = fourthOfJanuary.subtract({
    days: fourthOfJanuary.dayOfWeek - 1,
  });

  if (typeof date === "number") return result;
  return result.toZonedDateTime(date.timeZoneId);
}
