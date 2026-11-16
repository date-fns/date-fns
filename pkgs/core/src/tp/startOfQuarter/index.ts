export function tpStartOfQuarter(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  const month = date.month - ((date.month - 1) % 3);
  return date.with({ month, day: 1 }).startOfDay();
}
