export function tpEndOfDecade(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  const year = date.year;
  const decade = 9 + Math.floor(year / 10) * 10;
  return date.with(
    {
      year: decade,
      month: 12,
      day: 31,
      hour: 23,
      minute: 59,
      second: 59,
      millisecond: 999,
      microsecond: 0,
      nanosecond: 0,
    },
    { offset: "ignore" },
  );
}
