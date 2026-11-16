import { tpIsWeekend } from "../isWeekend/index.ts";

export function tpDifferenceInBusinessDays(
  laterDate: Temporal.ZonedDateTime,
  earlierDate: Temporal.ZonedDateTime,
): number {
  const diff = earlierDate
    .toPlainDate()
    .until(laterDate.toPlainDate(), { largestUnit: "days" }).days;
  const sign = diff < 0 ? -1 : 1;
  const weeks = Math.trunc(diff / 7);

  let result = weeks * 5;
  let movingDate = earlierDate.add({ days: weeks * 7 });

  // the loop below will run at most 6 times to account for the remaining days that don't makeup a full week
  while (!movingDate.toPlainDate().equals(laterDate.toPlainDate())) {
    // sign is used to account for both negative and positive differences
    result += tpIsWeekend(movingDate) ? 0 : sign;
    movingDate = movingDate.add({ days: sign });
  }

  // Prevent negative zero
  return result === 0 ? 0 : result;
}
