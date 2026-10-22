import assert from "assert";
import { getOverlappingDaysInIntervals } from "../../../src/getOverlappingDaysInIntervals/index.ts";

for (const [start, end] of [
  ["2024-11-03T01:45:00-04:00", "2024-11-03T01:15:00-05:00"],
  ["2024-11-03T01:30:00-04:00", "2024-11-03T01:30:00-05:00"],
  ["2024-11-03T01:59:59.999-04:00", "2024-11-03T01:00:00-05:00"],
  ["2024-11-03T00:00:00-04:00", "2024-11-04T00:00:00-05:00"],
]) {
  const interval = { start: new Date(start), end: new Date(end) };
  assert.strictEqual(getOverlappingDaysInIntervals(interval, interval), 1);
  assert.strictEqual(
    getOverlappingDaysInIntervals(interval, {
      start: interval.end,
      end: interval.start,
    }),
    1,
  );
}

const interval = {
  start: new Date("2024-11-03T00:00:00-04:00"),
  end: new Date("2024-11-04T00:00:00.001-05:00"),
};
assert.strictEqual(getOverlappingDaysInIntervals(interval, interval), 2);
