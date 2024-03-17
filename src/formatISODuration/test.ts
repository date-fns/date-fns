import { describe, expect, it } from "vitest";
import { formatISODuration } from "./index.js";
import { intervalToDuration } from "../intervalToDuration/index.js";

describe("formatISODuration", () => {
  it("Everything returns correct duration for arbitrary dates", () => {
    const start = new Date(1929, 0, 15, 12, 0, 0);
    const end = new Date(1968, 3, 4, 19, 5, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P39Y2M20DT7H5M0S");
  });
  it("Everything returns P1Y1M1DT1H1M1S (1 of everything)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2021, 3, 2, 13, 1, 1);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P1Y1M1DT1H1M1S");
  });
  it("Returns P0Y0M0DT0H0M0S when the dates are the same", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 1, 12, 0, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y0M0DT0H0M0S");
  });
  it("Seconds returns P0Y0M0DT0H0M1S (1 second)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 1, 12, 0, 1);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y0M0DT0H0M1S");
  });
  it("Minutes returns P0Y0M0DT0H1M0S (1 minute)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 1, 12, 1, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y0M0DT0H1M0S");
  });
  it("Hours returns P0Y0M0DT1H0M0S (1 hour)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 1, 13, 0, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y0M0DT1H0M0S");
  });
  it("Days returns P0Y0M1DT0H0M0S (1 day)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 2, 2, 12, 0, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y0M1DT0H0M0S");
  });
  it("Months returns P0Y1M0DT0H0M0S (1 month)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2020, 3, 1, 12, 0, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P0Y1M0DT0H0M0S");
  });
  it("Years returns P1Y0M0DT0H0M1S (1 year)", () => {
    const start = new Date(2020, 2, 1, 12, 0, 0);
    const end = new Date(2021, 2, 1, 12, 0, 0);
    const result = formatISODuration(intervalToDuration({ start, end }));

    expect(result).toBe("P1Y0M0DT0H0M0S");
  });

  it("returns P0Y0M0DT0H0M0S when given an empty object", () => {
    const result = formatISODuration({});

    expect(result).toBe("P0Y0M0DT0H0M0S");
  });
});
