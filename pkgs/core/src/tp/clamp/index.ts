export function tpClamp(
  date: Temporal.ZonedDateTime,
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  const lowerBounded =
    Temporal.ZonedDateTime.compare(date, start) < 0 ? start : date;
  return Temporal.ZonedDateTime.compare(lowerBounded, end) > 0
    ? end
    : lowerBounded;
}
