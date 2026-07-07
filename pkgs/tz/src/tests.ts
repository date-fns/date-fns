import { eachDayOfInterval, eachHourOfInterval, parse } from "date-fns";
import { describe, expect, it } from "vitest";
import { TZDate } from "./date/index.js";
import { tz } from "./tz/index.ts";

describe("date-fns integration", () => {
  describe("DST transitions", () => {
    it("skips the DST transitions", () => {
      // This test hours crafted to test the DST transitions.
      //
      // When ran with TZ=America/New_York, the NY dates land on the DST hour
      // before offset adjustments while the Singapore dates land on the DST
      // hour after the adjustments.
      //
      // When ran with TZ=America/Los_Angeles where the DST is on the same time,
      // but the offset is different, the dates also land on DST hours.

      const interval = {
        start: "2020-03-08T06:00:00.000Z",
        end: "2020-03-08T08:00:00.000Z",
      };

      const hours = [
        "2020-03-08T06:00:00.000Z",
        "2020-03-08T07:00:00.000Z",
        "2020-03-08T08:00:00.000Z",
      ];

      const ny = eachHourOfInterval(interval, {
        in: tz("America/New_York"),
      }).map((date) => new Date(+date).toISOString());
      expect(ny).toEqual(hours);

      const sg = eachHourOfInterval(interval, {
        in: tz("Asia/Singapore"),
      }).map((date) => new Date(+date).toISOString());
      expect(sg).toEqual(hours);
    });

    it("doesn't add hour shift on DST transitions", () => {
      const ny = eachDayOfInterval({
        start: new TZDate(2020, 2, 5, "America/New_York"),
        end: new TZDate(2020, 2, 12, "America/New_York"),
      }).map((date) => date.toISOString());
      expect(ny).toEqual([
        "2020-03-05T00:00:00.000-05:00",
        "2020-03-06T00:00:00.000-05:00",
        "2020-03-07T00:00:00.000-05:00",
        "2020-03-08T00:00:00.000-05:00",
        "2020-03-09T00:00:00.000-04:00",
        "2020-03-10T00:00:00.000-04:00",
        "2020-03-11T00:00:00.000-04:00",
        "2020-03-12T00:00:00.000-04:00",
      ]);

      const sg = eachDayOfInterval({
        start: new TZDate(2020, 2, 5, "Asia/Singapore"),
        end: new TZDate(2020, 2, 12, "Asia/Singapore"),
      }).map((date) => date.toISOString());
      expect(sg).toEqual([
        "2020-03-05T00:00:00.000+08:00",
        "2020-03-06T00:00:00.000+08:00",
        "2020-03-07T00:00:00.000+08:00",
        "2020-03-08T00:00:00.000+08:00",
        "2020-03-09T00:00:00.000+08:00",
        "2020-03-10T00:00:00.000+08:00",
        "2020-03-11T00:00:00.000+08:00",
        "2020-03-12T00:00:00.000+08:00",
      ]);
    });

    it("properly parses around DST transitions", () => {
      const format = "yyyy-MM-dd HH:mm";
      const ny = tz("America/New_York");
      expect(
        parse("2023-03-11 01:30", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-11T01:30:00.000-05:00");
      expect(
        parse("2023-03-12 01:30", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-12T01:30:00.000-05:00");
      expect(
        parse("2023-03-12 02:00", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-12T03:00:00.000-04:00");
      expect(
        parse("2023-03-12 03:00", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-12T03:00:00.000-04:00");
      expect(
        parse("2023-03-12 03:30", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-12T03:30:00.000-04:00");
      expect(
        parse("2023-03-13 03:30", format, new Date(), { in: ny }).toISOString(),
      ).toBe("2023-03-13T03:30:00.000-04:00");
    });
  });
});
