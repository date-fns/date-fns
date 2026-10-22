export function tpEachDayOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  let reversed = Temporal.ZonedDateTime.compare(start, end) > 0;
  const endDate = reversed ? start : end;
  let date = (reversed ? end : start).startOfDay();

  // Truncate the step toward zero so fractional values resolve to whole
  // days, matching the Date implementation and avoiding a RangeError from
  // Temporal's `add`, which rejects non-integer duration fields. See #4336.
  let step = Math.trunc(stepOption ?? 1);
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: Temporal.ZonedDateTime[] = [];

  while (Temporal.ZonedDateTime.compare(date, endDate) <= 0) {
    dates.push(date);
    if (!Number.isFinite(step)) break;
    date = date.add({ days: step }).startOfDay();
  }

  return reversed ? dates.reverse() : dates;
}
