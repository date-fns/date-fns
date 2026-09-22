export function tpStartOfWeek(
  date: Temporal.ZonedDateTime,
  weekStartsOn: number,
): Temporal.ZonedDateTime {
  const day = date.dayOfWeek % 7;
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  return date.subtract({ days: diff }).startOfDay();
}
