import { tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it, vi } from "vitest";
import { generateOffset } from "../_lib/test/index.ts";
import { parseISO } from "../parseISO/index.ts";
import { formatISO } from "./index.ts";

describe("formatISO", () => {
  it("formats ISO-8601 extended format", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);

    const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");

    getTimezoneOffsetStub.mockReturnValue(480);
    const tzNegativeOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(
      `2019-03-03T19:00:52${tzNegativeOffsetExtended}`,
    );

    getTimezoneOffsetStub.mockReturnValue(0);
    const tzZOffsetExtended = generateOffset(date);
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzZOffsetExtended}`);

    getTimezoneOffsetStub.mockRestore();
  });

  it("accepts a timestamp", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123).getTime();
    const tzOffsetExtended = generateOffset(new Date(date));
    expect(formatISO(date)).toBe(`2019-03-03T19:00:52${tzOffsetExtended}`);
  });

  it("formats ISO-8601 basic format", () => {
    const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
    const tzOffsetBasic = generateOffset(date);
    expect(formatISO(date, { format: "basic" })).toBe(
      `20191004T123013${tzOffsetBasic}`,
    );
  });

  it.each([
    { year: -100000, formattedYear: "-100000" },
    { year: -10000, formattedYear: "-010000" },
    { year: -1, formattedYear: "-000001" },
    { year: 0, formattedYear: "0000" },
    { year: 1, formattedYear: "0001" },
    { year: 9999, formattedYear: "9999" },
    { year: 10000, formattedYear: "+010000" },
    { year: 100000, formattedYear: "+100000" },
  ])("formats year $year", ({ year, formattedYear }) => {
    const date = new UTCDate(0);
    date.setFullYear(year, 0 /* Jan */, 2);
    date.setHours(12, 30, 45);

    expect(formatISO(date)).toBe(`${formattedYear}-01-02T12:30:45Z`);
    expect(formatISO(date, { format: "basic" })).toBe(
      `${formattedYear}0102T123045Z`,
    );
    expect(formatISO(date, { representation: "date" })).toBe(
      `${formattedYear}-01-02`,
    );
    expect(formatISO(date, { format: "basic", representation: "date" })).toBe(
      `${formattedYear}0102`,
    );
    expect(formatISO(date, { representation: "time" })).toBe("12:30:45Z");
    expect(formatISO(date, { format: "basic", representation: "time" })).toBe(
      "123045Z",
    );
    expect(parseISO(formatISO(date)).getTime()).toBe(date.getTime());
    expect(parseISO(formatISO(date, { format: "basic" })).getTime()).toBe(
      date.getTime(),
    );
  });

  it.each([-8640000000000000, 8640000000000000])(
    "round-trips the Date limit %i through parseISO",
    (time) => {
      const date = new UTCDate(time);
      expect(formatISO(date)).toBe(date.toISOString().replace(".000", ""));
      expect(parseISO(formatISO(date)).getTime()).toBe(time);
      expect(parseISO(formatISO(date, { format: "basic" })).getTime()).toBe(
        time,
      );
    },
  );

  it("formats only date", () => {
    const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);

    expect(
      formatISO(date, { representation: "date", format: "extended" }),
    ).toBe("2019-12-11");
    expect(formatISO(date, { representation: "date", format: "basic" })).toBe(
      "20191211",
    );
  });

  it("formats only time", () => {
    const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
    const tzOffset = generateOffset(date);

    expect(
      formatISO(date, { representation: "time", format: "extended" }),
    ).toBe(`19:00:52${tzOffset}`);
    expect(formatISO(date, { representation: "time", format: "basic" })).toBe(
      `190052${tzOffset}`,
    );
  });

  it("throws RangeError if the time value is invalid", () => {
    expect(formatISO.bind(null, new Date(NaN))).toThrow(RangeError);
  });

  describe("context", () => {
    it("allows to specify the context", () => {
      const date = "2024-09-17T10:00:00Z";
      expect(
        formatISO(date, {
          in: tz("Pacific/Midway"), // UTC-11:00
        }),
      ).toBe("2024-09-16T23:00:00-11:00");
      expect(
        formatISO(date, {
          in: tz("Pacific/Kiritimati"), // UTC+14:00
        }),
      ).toBe("2024-09-18T00:00:00+14:00");
    });
  });
});
