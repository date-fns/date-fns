// This is DST test for formatDistanceStrict in the Melbourne timezone

import { formatDistanceStrict } from "../../../src/formatDistanceStrict/index.js";
import { parseISO } from "../../../src/parseISO/index.js";
import assert from "assert";

if (process.env.TZ !== "Australia/Melbourne")
  throw new Error("The test must be run with TZ=Australia/Melbourne");

assert.strictEqual(
  formatDistanceStrict(
    parseISO("2020-04-05T01:00:00+11:00"),
    parseISO("2020-04-05T03:00:00+10:00"),
  ),
  "3 hours",
);
