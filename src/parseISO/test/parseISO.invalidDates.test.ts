import { describe, test, expect } from "vitest";
import { parseISO } from "..";

describe("parseISO invalid calendar dates", () => {
  test("returns Invalid Date for February 31st", () => {
    expect(parseISO("2023-02-31").toString()).toBe("Invalid Date");
  });

  test("returns Invalid Date for April 31st", () => {
    expect(parseISO("2021-04-31").toString()).toBe("Invalid Date");
  });

  test("returns Invalid Date for non-leap year February 29th", () => {
    expect(parseISO("2019-02-29").toString()).toBe("Invalid Date");
  });

  test("accepts February 29th in a leap year", () => {
    const result = parseISO("2020-02-29");
    expect(result instanceof Date).toBe(true);
    expect(result.toString()).not.toBe("Invalid Date");
  });
});
