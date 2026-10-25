export function tpEndOfQuarter(
  date: Temporal.ZonedDateTime,
): Temporal.ZonedDateTime {
  const currentMonth = date.month - 1;
  const month = currentMonth - (currentMonth % 3) + 3;
  const lastMonth = date.toPlainDate().with({ month, day: 1 });
  return lastMonth
    .with({ day: lastMonth.daysInMonth })
    .toZonedDateTime({ timeZone: date.timeZoneId, plainTime: "23:59:59.999" });
}
