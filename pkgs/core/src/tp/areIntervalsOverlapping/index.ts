import type { TpInterval } from "../types.ts";

export function tpAreIntervalsOverlapping(
  intervalLeft: TpInterval,
  intervalRight: TpInterval,
  options?: { inclusive?: boolean } | undefined,
): boolean {
  const [leftStart, leftEnd] = [intervalLeft.start, intervalLeft.end].sort(
    Temporal.ZonedDateTime.compare,
  );
  const [rightStart, rightEnd] = [intervalRight.start, intervalRight.end].sort(
    Temporal.ZonedDateTime.compare,
  );

  if (options?.inclusive)
    return (
      Temporal.ZonedDateTime.compare(leftStart, rightEnd) <= 0 &&
      Temporal.ZonedDateTime.compare(rightStart, leftEnd) <= 0
    );

  return (
    Temporal.ZonedDateTime.compare(leftStart, rightEnd) < 0 &&
    Temporal.ZonedDateTime.compare(rightStart, leftEnd) < 0
  );
}
