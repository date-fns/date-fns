import assert from "node:assert/strict";
import { eachMinuteOfInterval } from "../../../src/eachMinuteOfInterval/index.ts";

if (process.env.TZ !== "America/New_York")
  throw new Error("The test must be run with TZ=America/New_York");

const start = new Date("2024-11-03T01:45:30-05:00");
const end = new Date("2024-11-03T01:51:40-05:00");
const interval = { start, end };
// The earlier endpoint of the reversed interval is already minute-aligned.
const reversedInterval = {
  start: end,
  end: new Date("2024-11-03T01:45:00-05:00"),
};
const expected = [
  "2024-11-03T06:45:00.000Z",
  "2024-11-03T06:46:00.000Z",
  "2024-11-03T06:47:00.000Z",
  "2024-11-03T06:48:00.000Z",
  "2024-11-03T06:49:00.000Z",
  "2024-11-03T06:50:00.000Z",
  "2024-11-03T06:51:00.000Z",
];
const descending = [...expected].reverse();

const result = eachMinuteOfInterval(interval);
assert.equal(result.length, 7);
assert.deepEqual(
  result.map((date) => date.toISOString()),
  expected,
);
assert.deepEqual(
  eachMinuteOfInterval(interval, { step: -1 }).map((date) =>
    date.toISOString(),
  ),
  descending,
);
assert.deepEqual(
  eachMinuteOfInterval(reversedInterval).map((date) => date.toISOString()),
  descending,
);
assert.deepEqual(
  eachMinuteOfInterval(reversedInterval, { step: -1 }).map((date) =>
    date.toISOString(),
  ),
  expected,
);
assert.equal(start.toISOString(), "2024-11-03T06:45:30.000Z");
assert.equal(end.toISOString(), "2024-11-03T06:51:40.000Z");
