import { tpSetDate } from "../setDate/index.ts";
import { tpShiftMonthsWithOverflow } from "../_lib/shiftMonthsWithOverflow/index.ts";

export function tpDifferenceInMonths(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  let workingLaterDate = laterDate;
  const sign = Temporal.ZonedDateTime.compare(workingLaterDate, earlierDate);
  const difference = Math.abs(
    (workingLaterDate.year - earlierDate.year) * 12 +
      workingLaterDate.month -
      earlierDate.month,
  );

  if (difference < 1) return 0;

  if (workingLaterDate.month === 2 && workingLaterDate.day > 27)
    workingLaterDate = tpSetDate(workingLaterDate, 30);

  workingLaterDate = tpShiftMonthsWithOverflow(
    workingLaterDate,
    -sign * difference,
  );

  let isLastMonthNotFull =
    Temporal.ZonedDateTime.compare(workingLaterDate, earlierDate) === -sign;

  if (
    laterDate.day === laterDate.daysInMonth &&
    difference === 1 &&
    Temporal.ZonedDateTime.compare(laterDate, earlierDate) === 1
  ) {
    isLastMonthNotFull = false;
  }

  const result = sign * (difference - +isLastMonthNotFull);
  return result === 0 ? 0 : result;
}
