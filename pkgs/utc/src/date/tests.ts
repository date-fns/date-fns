import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { UTCDate } from "./index.js";

describe("UTCDate", () => {
  it("creates date in UTC", () => {
    const tzOffset = -new Date(1987, 1, 11).getTimezoneOffset();
    const hoursOffset = Math.trunc(tzOffset / 60);
    const minutesOffset = tzOffset % 60;

    expect(new UTCDate(1987, 1, 11).getTime()).toBe(
      new Date(1987, 1, 11, hoursOffset, minutesOffset).getTime(),
    );
  });

  describe("constructor", () => {
    it("allows to create current date", () => {
      expect(new UTCDate().getTime() - Date.now()).toBeLessThan(100);
    });

    it("allows to create date using timestamp", () => {
      expect(+new UTCDate(540000000000)).toBe(540000000000);
    });

    it("allows to parse the string", () => {
      expect(+new UTCDate("2023-05-03")).toBe(+new Date("2023-05-03"));
    });

    it("allows to create date from another date", () => {
      const date = new Date();
      expect(+new UTCDate(date)).toBe(+date);
    });
  });

  describe("getDate", () => {
    it("returns UTC date", () => {
      expect(new UTCDate(1987, 1, 11, 23).getDate()).toBe(11);
    });
  });

  describe("getDay", () => {
    it("returns UTC day", () => {
      expect(new UTCDate(1987, 1, 11, 23).getDay()).toBe(3);
    });
  });

  describe("getFullYear", () => {
    it("returns UTC full year", () => {
      expect(new UTCDate(1999, 11, 31, 23).getFullYear()).toBe(1999);
    });
  });

  describe("getHours", () => {
    it("returns UTC hours", () => {
      expect(new UTCDate(1987, 1, 11, 3).getHours()).toBe(3);
    });
  });

  describe("getMilliseconds()", () => {
    it.todo("returns UTC milliseconds");
  });

  describe("getMinutes()", () => {
    it("returns UTC minutes", () => {
      expect(new UTCDate(1987, 1, 11, 3, 30).getMinutes()).toBe(30);
    });
  });

  describe("getMonth", () => {
    it("returns UTC month", () => {
      expect(new UTCDate(1999, 11, 31, 23).getMonth()).toBe(11);
    });
  });

  describe("getSeconds", () => {
    it.todo("returns UTC seconds");
  });

  describe("getTimezoneOffset", () => {
    it("returns 0", () => {
      expect(new UTCDate(1999, 11, 31, 23).getTimezoneOffset()).toBe(0);
    });
  });

  describe("setDate", () => {
    it("sets UTC date", () => {
      const date = new UTCDate(1987, 1, 11, 23);
      date.setDate(11);
      expect(date.getDate()).toBe(11);
    });
  });

  describe("setFullYear", () => {
    it("sets UTC full year", () => {
      const date = new UTCDate(1999, 11, 31, 23);
      date.setFullYear(1999);
      expect(date.getFullYear()).toBe(1999);
    });
  });

  describe("setHours", () => {
    it("sets UTC hours", () => {
      const date = new UTCDate(1987, 1, 11, 3, 30);
      date.setHours(4);
      expect(date.getHours()).toBe(4);
    });
  });

  describe("setMilliseconds", () => {
    it.todo("sets UTC milliseconds");
  });

  describe("setMinutes", () => {
    it("sets UTC minutes", () => {
      const date = new UTCDate(1987, 1, 11, 3, 30);
      date.setMinutes(0);
      expect(date.getMinutes()).toBe(0);
    });
  });

  describe("setMonth", () => {
    it("sets UTC months", () => {
      const date = new UTCDate(1999, 11, 31, 23);
      date.setMonth(11);
      expect(date.getMonth()).toBe(11);
    });
  });

  describe("setSeconds", () => {
    it.todo("sets UTC seconds");
  });

  describe("toString", () => {
    it("returns string representing the given date in UTC timezone", () => {
      expect(new UTCDate(1987, 1, 11, 12, 13, 14, 15).toString()).toBe(
        "Wed Feb 11 1987 12:13:14 GMT+0000 (Coordinated Universal Time)",
      );
    });

    it("formats midnight as 00:00", () => {
      expect(new UTCDate(1987, 1, 11).toString()).toBe(
        "Wed Feb 11 1987 00:00:00 GMT+0000 (Coordinated Universal Time)",
      );
    });

    it("works with Symbol.toPrimitive", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15)[Symbol.toPrimitive]("string"),
      ).toBe("Wed Feb 11 1987 12:13:14 GMT+0000 (Coordinated Universal Time)");

      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15)[Symbol.toPrimitive]("default"),
      ).toBe("Wed Feb 11 1987 12:13:14 GMT+0000 (Coordinated Universal Time)");
    });
  });

  describe("toDateString", () => {
    it("returns string representing the given date in UTC timezone", () => {
      expect(new UTCDate(1987, 1, 11, 12, 13, 14, 15).toDateString()).toBe(
        "Wed Feb 11 1987",
      );
    });
  });

  describe("toTimeString", () => {
    it("returns string representing the given time in UTC timezone", () => {
      expect(new UTCDate(1987, 1, 11, 12, 13, 14, 15).toTimeString()).toBe(
        "12:13:14 GMT+0000 (Coordinated Universal Time)",
      );
    });

    it("formats midnight as 00:00", () => {
      expect(new UTCDate(1987, 1, 11).toTimeString()).toBe(
        "00:00:00 GMT+0000 (Coordinated Universal Time)",
      );
    });
  });

  describe("toLocaleString", () => {
    it("returns localized date time string", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleString("en-GB"),
      ).toBe("11/02/1987, 12:13:14");
    });

    it("allows to pass options", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleString("en-GB", {
          month: "long",
        }),
      ).toBe("February");
    });

    it("allows to override the timezone", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleString("en-GB", {
          timeZone: "Asia/Kolkata",
        }),
      ).toBe("11/02/1987, 17:43:14");
    });
  });

  describe("toLocaleDateString", () => {
    it("returns localized date string", () => {
      expect(
        new UTCDate(1999, 11, 31, 23, 59, 59).toLocaleDateString("en-GB"),
      ).toBe("31/12/1999");
    });

    it("allows to pass options", () => {
      expect(
        new UTCDate(1999, 11, 31, 23, 59, 59).toLocaleString("en-GB", {
          month: "long",
        }),
      ).toBe("December");
    });

    it("allows to override the timezone", () => {
      expect(
        new UTCDate(1999, 11, 31, 23, 59, 59).toLocaleDateString("en-GB", {
          timeZone: "Asia/Kolkata",
        }),
      ).toBe("01/01/2000");
    });
  });

  describe("toLocaleTimeString", () => {
    it("returns localized time string", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleTimeString("en-GB"),
      ).toBe("12:13:14");
    });

    it("allows to pass options", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleTimeString("en-GB", {
          hour: "numeric",
        }),
      ).toBe("12");
    });

    it("allows to override the timezone", () => {
      expect(
        new UTCDate(1987, 1, 11, 12, 13, 14, 15).toLocaleTimeString("en-GB", {
          timeZone: "Asia/Kolkata",
        }),
      ).toBe("17:43:14");
    });
  });

  describe("fake timers", { concurrent: false }, () => {
    beforeEach(() => {
      vi.useFakeTimers({ now: new Date(1987, 1, 11, 12, 13, 14, 15) });
    });

    afterEach(() => {
      vi.useRealTimers();
    });

    it("mocks the date", () => {
      const expected = +new Date(1987, 1, 11, 12, 13, 14, 15);
      expect(+new Date()).toBe(expected);
      expect(+new UTCDate()).toBe(expected);
    });
  });
});
