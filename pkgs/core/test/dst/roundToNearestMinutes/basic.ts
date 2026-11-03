import assert from "node:assert/strict";
import { roundToNearestHours } from "../../../src/roundToNearestHours/index.ts";
import { roundToNearestMinutes } from "../../../src/roundToNearestMinutes/index.ts";

const timeZones = {
  "America/New_York": {
    minute: "2024-11-03T01:30:00-05:00",
    partialMinute: "2024-11-03T01:30:15.123-05:00",
    ceiledMinute: "2024-11-03T01:31:00-05:00",
    quarterHour: "2024-11-03T01:37:00-05:00",
    roundedQuarterHour: "2024-11-03T01:30:00-05:00",
    hour: "2024-11-03T01:00:00-05:00",
    partialHour: "2024-11-03T01:15:00-05:00",
  },
  "Australia/Lord_Howe": {
    minute: "2024-04-07T01:45:00+10:30",
    partialMinute: "2024-04-07T01:45:15.123+10:30",
    ceiledMinute: "2024-04-07T01:46:00+10:30",
    quarterHour: "2024-04-07T01:52:00+10:30",
    roundedQuarterHour: "2024-04-07T01:45:00+10:30",
    hour: "2024-04-07T02:00:00+10:30",
    partialHour: "2024-04-07T02:15:00+10:30",
  },
};

const cases = timeZones[process.env.TZ as keyof typeof timeZones];

assert.ok(cases);

for (const roundingMethod of ["round", "floor", "ceil", "trunc"] as const) {
  const minute = new Date(cases.minute);
  assert.equal(
    +roundToNearestMinutes(minute, { roundingMethod }),
    +minute,
    `preserves an exact minute with ${roundingMethod}`,
  );
  assert.equal(+minute, +new Date(cases.minute));

  const hour = new Date(cases.hour);
  assert.equal(
    +roundToNearestHours(hour, { roundingMethod }),
    +hour,
    `preserves an exact hour with ${roundingMethod}`,
  );
  assert.equal(+hour, +new Date(cases.hour));
}

assert.equal(
  +roundToNearestMinutes(new Date(cases.partialMinute), {
    roundingMethod: "ceil",
  }),
  +new Date(cases.ceiledMinute),
);

for (const roundingMethod of ["round", "floor", "trunc"] as const) {
  assert.equal(
    +roundToNearestMinutes(new Date(cases.partialMinute), { roundingMethod }),
    +new Date(cases.minute),
  );
  assert.equal(
    +roundToNearestHours(new Date(cases.partialHour), { roundingMethod }),
    +new Date(cases.hour),
  );
}

assert.equal(
  +roundToNearestMinutes(new Date(cases.quarterHour), { nearestTo: 15 }),
  +new Date(cases.roundedQuarterHour),
);

if (process.env.TZ === "America/New_York") {
  for (const offset of ["-04:00", "-05:00"]) {
    assert.equal(
      +roundToNearestHours(new Date(`2024-11-03T01:45:00${offset}`), {
        nearestTo: 2,
      }),
      +new Date("2024-11-03T02:00:00-05:00"),
    );
  }

  assert.equal(
    +roundToNearestMinutes(new Date("2024-11-03T01:59:45-04:00")),
    +new Date("2024-11-03T02:00:00-05:00"),
  );
  assert.equal(
    +roundToNearestHours(new Date("2024-03-10T01:45:00-05:00")),
    +new Date("2024-03-10T03:00:00-04:00"),
  );
}
