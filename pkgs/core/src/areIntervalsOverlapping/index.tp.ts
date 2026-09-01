import { toTpInstant } from "../_lib/tp/index.ts";
import { tpAreIntervalsOverlapping } from "../tp/areIntervalsOverlapping/index.ts";
import type { Interval } from "../types.ts";
import type { AreIntervalsOverlappingOptions } from "./index.ts";

export function tpyAreIntervalsOverlapping(
  intervalLeft: Interval,
  intervalRight: Interval,
  options?: AreIntervalsOverlappingOptions,
): boolean {
  const [leftStart] = toTpInstant(intervalLeft.start, options);
  const [leftEnd] = toTpInstant(intervalLeft.end, options);
  const [rightStart] = toTpInstant(intervalRight.start, options);
  const [rightEnd] = toTpInstant(intervalRight.end, options);

  if (!leftStart || !leftEnd || !rightStart || !rightEnd) return false;

  return tpAreIntervalsOverlapping(
    { start: leftStart, end: leftEnd },
    { start: rightStart, end: rightEnd },
    options,
  );
}
