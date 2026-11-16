import { tpAddISOWeekYears } from "../addISOWeekYears/index.ts";

export function tpDifferenceInISOWeekYears(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  const sign = Temporal.ZonedDateTime.compare(laterDate, earlierDate);
  const laterWeekYear = laterDate.yearOfWeek;
  const earlierWeekYear = earlierDate.yearOfWeek;
  if (laterWeekYear === undefined || earlierWeekYear === undefined) return NaN;
  const diff = Math.abs(laterWeekYear - earlierWeekYear);

  const adjustedDate = tpAddISOWeekYears(laterDate, -sign * diff);

  const isLastISOWeekYearNotFull = Number(
    Temporal.ZonedDateTime.compare(adjustedDate, earlierDate) === -sign,
  );
  const result = sign * (diff - isLastISOWeekYearNotFull);

  return result === 0 ? 0 : result;
}
