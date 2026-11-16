export function tpIsSaturday(date: Temporal.ZonedDateTime): boolean {
  return date.dayOfWeek === 6;
}
