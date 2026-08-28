export function tpIsSunday(date: Temporal.ZonedDateTime): boolean {
  return date.dayOfWeek === 7;
}
