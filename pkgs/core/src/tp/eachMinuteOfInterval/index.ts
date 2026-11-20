export function tpEachMinuteOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  const startOfMinute = start.with({
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });
  const endOfMinute = end.with({
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });

  let reversed = Temporal.ZonedDateTime.compare(startOfMinute, endOfMinute) > 0;
  const endDate = reversed ? startOfMinute : endOfMinute;
  let date = reversed ? endOfMinute : startOfMinute;

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
    date = date.add({ minutes: step });
  }

  return reversed ? dates.reverse() : dates;
}
