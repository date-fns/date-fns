export function tpDifferenceInYears(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  const sign = Temporal.ZonedDateTime.compare(laterDate, earlierDate);
  const diff = Math.abs(laterDate.year - earlierDate.year);

  const normalizedLaterDate = laterDate.with({ year: 1584 });
  const normalizedEarlierDate = earlierDate.with({ year: 1584 });
  const partial =
    Temporal.ZonedDateTime.compare(
      normalizedLaterDate,
      normalizedEarlierDate,
    ) === -sign;

  const result = sign * (diff - +partial);
  return result === 0 ? 0 : result;
}
