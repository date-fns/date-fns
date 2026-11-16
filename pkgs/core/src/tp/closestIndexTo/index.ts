export function tpClosestIndexTo(
  dateToCompare: Temporal.ZonedDateTime,
  dates: Temporal.ZonedDateTime[],
): number | undefined {
  const timeToCompare = dateToCompare.epochNanoseconds;

  let result: number | undefined;
  let minDistance: bigint | undefined;
  dates.forEach((date, index) => {
    const difference = timeToCompare - date.epochNanoseconds;
    const distance = difference < 0n ? -difference : difference;
    if (minDistance === undefined || distance < minDistance) {
      result = index;
      minDistance = distance;
    }
  });

  return result;
}
