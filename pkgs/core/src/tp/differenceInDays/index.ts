export function tpDifferenceInDays(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  const sign = compareLocalAsc(laterDate, earlierDate);
  const difference = Math.abs(
    earlierDate
      .toPlainDate()
      .until(laterDate.toPlainDate(), { largestUnit: "days" }).days,
  );

  const adjustedLaterDate = laterDate.subtract({
    days: sign * difference,
  });

  // The last calendar day is not full if subtracting the calendar difference
  // crosses the earlier date's local time.
  const isLastDayNotFull = Number(
    compareLocalAsc(adjustedLaterDate, earlierDate) === -sign,
  );

  const result = sign * (difference - isLastDayNotFull);
  return result === 0 ? 0 : result;
}

function compareLocalAsc(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  const diff =
    laterDate.year - earlierDate.year ||
    laterDate.month - earlierDate.month ||
    laterDate.day - earlierDate.day ||
    laterDate.hour - earlierDate.hour ||
    laterDate.minute - earlierDate.minute ||
    laterDate.second - earlierDate.second ||
    laterDate.millisecond - earlierDate.millisecond;

  if (diff < 0) return -1;
  if (diff > 0) return 1;
  return diff;
}
