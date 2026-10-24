import { describe, expect, it } from "vitest";
import { tzScan } from "./index.ts";

describe("tzScan", () => {
  it.each([0, 17, 37, 59])(
    "finds exact transitions when the interval starts at minute %i",
    (minutes) => {
      const start = new Date(Date.UTC(2024, 0, 1, 0, minutes, 12, 345));
      const end = new Date("2025-01-01T00:00:00Z");
      const startTime = +start;
      const endTime = +end;

      expect(tzScan("America/New_York", { start, end })).toEqual([
        {
          date: new Date("2024-03-10T07:00:00Z"),
          change: 60,
          offset: -240,
        },
        {
          date: new Date("2024-11-03T06:00:00Z"),
          change: -60,
          offset: -300,
        },
      ]);
      expect(+start).toBe(startTime);
      expect(+end).toBe(endTime);
    },
  );

  it("finds transitions that occur between whole UTC hours", () => {
    expect(
      tzScan("Australia/Lord_Howe", {
        start: new Date("2024-01-01T00:00:00Z"),
        end: new Date("2025-01-01T00:00:00Z"),
      }),
    ).toEqual([
      {
        date: new Date("2024-04-06T15:00:00Z"),
        change: -30,
        offset: 630,
      },
      {
        date: new Date("2024-10-05T15:30:00Z"),
        change: 30,
        offset: 660,
      },
    ]);
  });

  it("finds the exact time of a permanent offset change", () => {
    expect(
      tzScan("Asia/Kathmandu", {
        start: new Date("1985-01-01T00:00:00Z"),
        end: new Date("1986-01-01T00:00:00Z"),
      }),
    ).toEqual([
      {
        date: new Date("1985-12-31T18:30:00Z"),
        change: 15,
        offset: 345,
      },
    ]);
  });

  it("preserves seconds in historical transition times", () => {
    expect(
      tzScan("Europe/Paris", {
        start: new Date("1911-01-01T00:00:00Z"),
        end: new Date("1912-01-01T00:00:00Z"),
      }),
    ).toEqual([
      {
        date: new Date("1911-03-10T23:50:39Z"),
        change: -9.35,
        offset: 0,
      },
    ]);
  });

  it("searches for DST changes in the given period", () => {
    const changes = tzScan("America/New_York", {
      start: new Date("2020-01-01T00:00:00Z"),
      end: new Date("2021-12-31T00:00:00Z"),
    });

    expect(changes).toEqual([
      {
        date: new Date("2020-03-08T07:00:00.000Z"),
        change: 1 * 60,
        offset: -4 * 60,
      },
      {
        date: new Date("2020-11-01T06:00:00.000Z"),
        change: -1 * 60,
        offset: -5 * 60,
      },
      {
        date: new Date("2021-03-14T07:00:00.000Z"),
        change: 1 * 60,
        offset: -4 * 60,
      },
      {
        date: new Date("2021-11-07T06:00:00.000Z"),
        change: -1 * 60,
        offset: -5 * 60,
      },
    ]);
  });

  it("searches for permanent DST changes in the given period", () => {
    const changes = tzScan("Turkey", {
      start: new Date("2015-01-01T00:00:00Z"),
      end: new Date("2018-12-31T00:00:00Z"),
    });

    expect(changes).toEqual([
      {
        date: new Date("2015-03-29T01:00:00.000Z"),
        change: 1 * 60,
        offset: 3 * 60,
      },
      {
        date: new Date("2015-11-08T01:00:00.000Z"),
        change: -1 * 60,
        offset: 2 * 60,
      },
      {
        date: new Date("2016-03-27T01:00:00.000Z"),
        change: 1 * 60,
        offset: 3 * 60,
      },
    ]);
  });

  it("searches for timezone changes", () => {
    const changes = tzScan("Asia/Pyongyang", {
      start: new Date("2010-01-01T00:00:00Z"),
      end: new Date("2019-12-31T00:00:00Z"),
    });

    expect(changes).toEqual([
      {
        date: new Date("2015-08-14T15:00:00.000Z"),
        change: -0.5 * 60,
        offset: 8.5 * 60,
      },
      {
        date: new Date("2018-05-04T15:00:00.000Z"),
        change: 0.5 * 60,
        offset: 9 * 60,
      },
    ]);
  });

  it("searches for huge timezone changes", () => {
    const changes = tzScan("Pacific/Apia", {
      start: new Date("2010-01-01T00:00:00Z"),
      end: new Date("2012-12-31T00:00:00Z"),
    });

    expect(changes).toEqual([
      {
        date: new Date("2010-09-26T11:00:00.000Z"),
        change: 1 * 60,
        offset: -10 * 60,
      },
      {
        date: new Date("2011-04-02T14:00:00.000Z"),
        change: -1 * 60,
        offset: -11 * 60,
      },
      {
        date: new Date("2011-09-24T14:00:00.000Z"),
        change: 1 * 60,
        offset: -10 * 60,
      },
      {
        date: new Date("2011-12-30T10:00:00.000Z"),
        change: 24 * 60,
        offset: 14 * 60,
      },
      {
        date: new Date("2012-03-31T14:00:00.000Z"),
        change: -1 * 60,
        offset: 13 * 60,
      },
      {
        date: new Date("2012-09-29T14:00:00.000Z"),
        change: 1 * 60,
        offset: 14 * 60,
      },
    ]);
  });
});
