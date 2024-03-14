import { describe, expect, it } from "vitest";
import { constructNow } from ".";

describe("constructNow", () => {
  it("creates a new Date instance using the constructor from the reference date", () => {
    const result = constructNow(new Date("2023-10-25T12:00:00"));

    expect(result instanceof Date).toBe(true);
    expect(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
    expect(result.constructor).toBe(Date);
  });

  it("creates a new Date instance using a number as the reference date", () => {
    const result = constructNow(1635158400000);

    expect(result instanceof Date).toBe(true);
    expect(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
    expect(result.constructor).toBe(Date);
  });

  it("creates a new Date instance using a string as the reference date", () => {
    const result = constructNow("2023-10-25T12:00:00");

    expect(result instanceof Date).toBe(true);
    expect(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
    expect(result.constructor).toBe(Date);
  });

  it("creates a new custom Date instance using the constructor from the reference date", () => {
    class CustomDate extends Date {}
    const result = constructNow(new CustomDate("2023-10-26T12:00:00"));

    expect(result instanceof CustomDate).toBe(true);
    expect(+result - Date.now()).toBeLessThan(10); // Give 10 ms of slack
    expect(result.constructor).toBe(CustomDate);
  });
});
