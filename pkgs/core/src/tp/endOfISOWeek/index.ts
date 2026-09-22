export function tpEndOfISOWeek(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  return date
    .toPlainDate()
    .add({ days: 7 - date.dayOfWeek })
    .toZonedDateTime({ timeZone: date.timeZoneId, plainTime: "23:59:59.999" });
}
