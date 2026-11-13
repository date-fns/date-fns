import assert from "node:assert/strict";
import { test } from "node:test";
import { TZDate, tz } from "@date-fns/tz";
import { eachHourOfInterval } from "../../../src/eachHourOfInterval/index.ts";

if (process.env.TZ !== "Australia/Lord_Howe")
  throw new Error("The test must be run with TZ=Australia/Lord_Howe");

// On 3 October 2021, local clocks jumped from 02:00 to 02:30.
const hours = [
  Date.UTC(2021, 9, 2, 14, 30), // 01:00
  Date.UTC(2021, 9, 2, 15, 30), // 02:30, first valid time after the gap
  Date.UTC(2021, 9, 2, 16), // 03:00
  Date.UTC(2021, 9, 2, 17), // 04:00
];

for (const [name, makeDate] of [
  ["Date", (hour: number, minute = 0) => new Date(2021, 9, 3, hour, minute)],
  [
    "TZDate",
    (hour: number, minute = 0) =>
      new TZDate(2021, 9, 3, hour, minute, "Australia/Lord_Howe"),
  ],
] as const) {
  const start = makeDate(1);
  const end = makeDate(4);

  test(`${name}: resumes hour boundaries after a 30-minute gap`, () => {
    assert.deepEqual(eachHourOfInterval({ start, end }).map(Number), hours);
  });

  test(`${name}: starts within the shifted hour`, () => {
    assert.deepEqual(
      eachHourOfInterval({ start: makeDate(2, 45), end }).map(Number),
      hours.slice(1),
    );
  });

  test(`${name}: reverses an interval`, () => {
    assert.deepEqual(
      eachHourOfInterval({ start: end, end: start }).map(Number),
      hours.toReversed(),
    );
  });

  test(`${name}: reverses a negative step`, () => {
    assert.deepEqual(
      eachHourOfInterval({ start, end }, { step: -1 }).map(Number),
      hours.toReversed(),
    );
  });

  test(`${name}: resumes hour boundaries with a two-hour step`, () => {
    assert.deepEqual(
      eachHourOfInterval({ start: makeDate(0), end }, { step: 2 }).map(Number),
      [Date.UTC(2021, 9, 2, 13, 30), hours[1], hours[3]],
    );
  });
}

test("uses an explicit time zone context after a 30-minute gap", () => {
  const result = eachHourOfInterval(
    { start: Date.UTC(2021, 9, 2, 13, 30), end: hours[3] },
    { in: tz("Australia/Lord_Howe"), step: 2 },
  );
  assert.deepEqual(result.map(Number), [
    Date.UTC(2021, 9, 2, 13, 30),
    hours[1],
    hours[3],
  ]);
  assert.ok(result.every((date) => date instanceof TZDate));
});
