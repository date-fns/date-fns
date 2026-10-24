export function tpEachHourOfInterval(
  start: Temporal.ZonedDateTime,
  end: Temporal.ZonedDateTime,
  stepOption?: number | undefined,
): Temporal.ZonedDateTime[] {
  let reversed = Temporal.ZonedDateTime.compare(start, end) > 0;
  const endDate = reversed ? start : end;
  let date = (reversed ? end : start).with({
    minute: 0,
    second: 0,
    millisecond: 0,
    microsecond: 0,
    nanosecond: 0,
  });

  // Truncate the step toward zero so fractional values resolve to whole
  // hours, matching the Date implementation. This also avoids a RangeError
  // from Temporal's `add`, which rejects non-integer duration fields. See #4336.
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
    date = date
      .toPlainDateTime()
      .add({ hours: step })
      .toZonedDateTime(date.timeZoneId);
  }

  return reversed ? dates.reverse() : dates;
}
