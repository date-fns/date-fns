export function tpEndOfRelativeDay(
  date: Temporal.ZonedDateTime,
  days: number,
): Temporal.ZonedDateTime {
  return date
    .toPlainDate()
    .add({ days })
    .toZonedDateTime({ timeZone: date.timeZoneId, plainTime: "23:59:59.999" });
}
