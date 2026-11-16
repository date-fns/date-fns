/** Sets the day of the month, allowing overflow into adjacent months. */
export function tpSetDate(
  date: Temporal.ZonedDateTime,
  day: number,
): Temporal.ZonedDateTime {
  return date.with({ day: 1 }).add({ days: day - 1 });
}
