export function tpEachYearOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  let reversed = Temporal.ZonedDateTime.compare(start, end) > 0;
  const endDate = reversed ? start : end;
  let date = (reversed ? end : start).startOfDay().with({ month: 1, day: 1 });

  let step = stepOption ?? 1;
  if (!step) return [];
  if (step < 0) {
    step = -step;
    reversed = !reversed;
  }

  const dates: Temporal.ZonedDateTime[] = [];
  while (Temporal.ZonedDateTime.compare(date, endDate) <= 0) {
    dates.push(date);
    if (!Number.isFinite(step)) break;
    date = date.with({ year: Math.trunc(date.year + step) });
  }
  return reversed ? dates.reverse() : dates;
}
