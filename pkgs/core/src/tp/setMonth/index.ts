/** Shifts the month by a relative amount, allowing day-of-month overflow. */
export function tpSetMonth(
  date: Temporal.ZonedDateTime,
  amount: number,
): Temporal.ZonedDateTime {
  const target = date.toPlainDate().toPlainYearMonth().add({ months: amount });
  return date
    .with({ year: target.year, month: target.month, day: 1 })
    .add({ days: date.day - 1 });
}
