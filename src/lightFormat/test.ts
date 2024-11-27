import { describe, expect, it } from "vitest";
import { lightFormat } from "./index.js";

describe("lightFormat", () => {
  const date = new Date(1986, 3 /* Apr */, 4, 10, 32, 55, 123);

  it("accepts a timestamp", () => {
    const date = new Date(2014, 3, 4).getTime();
    expect(lightFormat(date, "yyyy-MM-dd")).toBe("2014-04-04");
  });

  it("escapes characters between the single quote characters", () => {
    const result = lightFormat(date, "'yyyy-'MM-dd'D yyyy-'MM-dd'");
    expect(result).toBe("yyyy-04-04D yyyy-04-04");
  });

  it('two single quote characters are transformed into a "real" single quote', () => {
    const date = new Date(2014, 3, 4, 5);
    expect(lightFormat(date, "''h 'o''clock'''")).toBe("'5 o'clock'");
  });

  it("accepts new line character", () => {
    const date = new Date(2014, 3, 4, 5);
    expect(lightFormat(date, "yyyy-MM-dd'\n'HH:mm:ss")).toBe("2014-04-04\n05:00:00");
  });

  describe("year", () => {
    describe("regular year", () => {
      it("works as expected", () => {
        const result = lightFormat(date, "y yy yyy yyyy yyyyy");
        expect(result).toBe("1986 86 1986 1986 01986");
      });

      it("1 BC formats as 1", () => {
        const date = new Date(0);
        date.setFullYear(0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        const result = lightFormat(date, "y");
        expect(result).toBe("1");
      });

      it("2 BC formats as 2", () => {
        const date = new Date(0);
        date.setFullYear(-1, 0 /* Jan */, 1);
        date.setHours(0, 0, 0, 0);
        const result = lightFormat(date, "y");
        expect(result).toBe("2");
      });
    });
  });

  describe("month", () => {
    it("formatting month", () => {
      const result = lightFormat(date, "M MM");
      expect(result).toBe("4 04");
    });
  });

  describe("day", () => {
    it("date", () => {
      const result = lightFormat(date, "d dd");
      expect(result).toBe("4 04");
    });
  });

  describe("hour", () => {
    it("hour [1-12]", () => {
      const result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "h hh",
      );
      expect(result).toBe("12 12");
    });

    it("hour [0-23]", () => {
      const result = lightFormat(
        new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
        "H HH",
      );
      expect(result).toBe("0 00");
    });

    describe("AM, PM", () => {
      it("works as expected", () => {
        const result = lightFormat(
          new Date(2018, 0 /* Jan */, 1, 0, 0, 0, 0),
          "a aa aaa aaaa aaaaa",
        );
        expect(result).toBe("AM AM am a.m. a");

        const pmResult = lightFormat(
          new Date(2018, 0 /* Jan */, 1, 13, 0, 0, 0),
          "a aa aaa aaaa aaaaa",
        );
        expect(pmResult).toBe("PM PM pm p.m. p");
      });

      it("12 PM", () => {
        const date = new Date(1986, 3 /* Apr */, 4, 12, 0, 0, 900);
        expect(lightFormat(date, "h H a")).toBe("12 12 PM");
      });

      it("12 AM", () => {
        const date = new Date(1986, 3 /* Apr */, 6, 0, 0, 0, 900);
        expect(lightFormat(date, "h H a")).toBe("12 0 AM");
      });
    });
  });

  it("minute", () => {
    const result = lightFormat(date, "m mm");
    expect(result).toBe("32 32");
  });

  describe("second", () => {
    it("second", () => {
      const result = lightFormat(date, "s ss");
      expect(result).toBe("55 55");
    });
  });

  it("fractional seconds", () => {
    const result = lightFormat(date, "S SS SSS SSSS");
    expect(result).toBe("1 12 123 1230");
  });

  it("returns empty string when the format is an empty string", () => {
    expect(lightFormat(Date.now(), "")).toBe("");
  });

  it("throws RangeError if the date isn't valid", () => {
    expect(lightFormat.bind(null, new Date(NaN), "MMMM d, yyyy")).toThrow(RangeError);
  });

  it("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
    expect(lightFormat.bind(null, date, "yyyy-MM-dd-nnnn")).toThrow(RangeError);
  });
});
