import { tpStartOfWeek } from "../startOfWeek/index.ts";

export function tpEachWeekOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  weekStartsOn: number,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  let reversed = Temporal.ZonedDateTime.compare(start, end) > 0;
  let startDateWeek = tpStartOfWeek(reversed ? end : start, weekStartsOn).with({
    hour: 15,
  });
  const endDateWeek = tpStartOfWeek(reversed ? start : end, weekStartsOn).with({
    hour: 15,
  });

  let step = stepOption ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: Temporal.ZonedDateTime[] = [];

  while (Temporal.ZonedDateTime.compare(startDateWeek, endDateWeek) <= 0) {
    dates.push(startDateWeek.with({ hour: 0 }));
    if (!Number.isFinite(step)) break;
    startDateWeek = startDateWeek.add({ weeks: step });
  }

  return reversed ? dates.reverse() : dates;
}
