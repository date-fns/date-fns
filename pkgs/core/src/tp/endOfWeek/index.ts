export function tpEndOfWeek(
  date: Temporal.ZonedDateTime,
  weekStartsOn: number,
): Temporal.ZonedDateTime {
  const day = date.dayOfWeek % 7;
  const diff = (day < weekStartsOn ? -7 : 0) + 6 - (day - weekStartsOn);
  return date
    .toPlainDate()
    .add({ days: diff })
    .toZonedDateTime({ timeZone: date.timeZoneId, plainTime: "23:59:59.999" });
}
