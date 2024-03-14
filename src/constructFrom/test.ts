import { describe, expect, it } from "vitest";
import { constructFrom } from ".";

describe("constructFrom", () => {
  it("should create a new Date instance using the constructor from the reference date", () => {
    const referenceDate = new Date("2023-10-25T12:00:00");
    const value = new Date("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result).toEqual(value);
    expect(result.constructor).toBe(referenceDate.constructor);
  });

  it("should create a new Date instance using a number as the reference date", () => {
    const referenceDate = 1635158400000; // October 25, 2023
    const value = new Date("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result).toEqual(value);
  });

  it("should create a new custom Date instance using the constructor from the reference date", () => {
    class CustomDate extends Date {}
    const referenceDate = new CustomDate("2023-10-25T12:00:00");
    const value = new CustomDate("2023-10-26T12:00:00");

    const result = constructFrom(referenceDate, value);

    expect(result instanceof CustomDate).toBe(true);
    expect(result).toEqual(value);
    expect(result.constructor).toBe(referenceDate.constructor);
  });

  it("should create a new Date instance using numbers as both referenceDate and value", () => {
    const referenceDate = 1635158400000; // October 25, 2023
    const value = 1635244800000; // October 26, 2023

    const result = constructFrom(referenceDate, value);

    expect(result instanceof Date).toBe(true);
    expect(result.getTime()).toEqual(value);
  });
});
