export function tpIsWeekend(date: Temporal.ZonedDateTime): boolean {
  return date.dayOfWeek >= 6;
}
