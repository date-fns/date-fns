import { tpStartOfQuarter } from "../startOfQuarter/index.ts";

export function tpEachQuarterOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  let reversed = Temporal.ZonedDateTime.compare(start, end) > 0;
  const endDateQuarter = tpStartOfQuarter(reversed ? start : end);
  let date = tpStartOfQuarter(reversed ? end : start);

  let step = stepOption ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: Temporal.ZonedDateTime[] = [];

  while (Temporal.ZonedDateTime.compare(date, endDateQuarter) <= 0) {
    dates.push(date);
    if (!Number.isFinite(step)) break;
    date = date.add({ months: step * 3 });
  }

  return reversed ? dates.reverse() : dates;
}
