import assert from "assert";
import { getOverlappingDaysInIntervals } from "../../../src/getOverlappingDaysInIntervals/index.js";

assert.strictEqual(
  getOverlappingDaysInIntervals(
    {
      start: new Date(2001, 8 /* Sep */, 1, 16),
      end: new Date(2023, 11 /* Dec */, 20, 16),
    },
    {
      start: new Date(2023, 11 /* Dec */, 21, 16),
      end: new Date(2001, 8 /* Sep */, 9, 16),
    },
  ),
  8137,
);
