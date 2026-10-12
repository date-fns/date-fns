import assert from "assert";
import { startOfMinute } from "../../../src/startOfMinute/index.ts";

// Cover both occurrences of a repeated minute, including a half-hour rollback.
for (const [input, expected] of [
  ["2023-10-29T00:06:45.123Z", "2023-10-29T00:06:00.000Z"],
  ["2023-10-29T01:06:00.000Z", "2023-10-29T01:06:00.000Z"],
  ["2023-10-29T01:06:45.123Z", "2023-10-29T01:06:00.000Z"],
  ["2024-04-06T14:45:45.123Z", "2024-04-06T14:45:00.000Z"],
  ["2024-04-06T15:15:45.123Z", "2024-04-06T15:15:00.000Z"],
  ["1969-12-31T23:59:59.999Z", "1969-12-31T23:59:00.000Z"],
]) {
  const date = new Date(input);
  const result = startOfMinute(date);
  assert.strictEqual(result.toISOString(), expected);
  assert.strictEqual(date.toISOString(), input);
  assert.strictEqual(startOfMinute(result).getTime(), result.getTime());
}

// Historical offsets can include seconds, so rounding must use local seconds.
assert.deepStrictEqual(
  startOfMinute(new Date(1850, 0, 1, 12, 34, 56, 789)),
  new Date(1850, 0, 1, 12, 34),
);
