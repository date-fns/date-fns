export function tpSetMonth(
  date: Temporal.ZonedDateTime,
  month: number,
): Temporal.ZonedDateTime {
  const target = date
    .toPlainDate()
    .toPlainYearMonth()
    .with({ month: 1 })
    .add({ months: month });
  return date.with({ year: target.year, month: target.month });
}
