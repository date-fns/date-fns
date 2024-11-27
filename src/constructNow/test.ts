import { TZDate, tz } from "@date-fns/tz";
import { UTCDate } from "@date-fns/utc";
import { describe, expect, it } from "vitest";
import { constructNow } from "./index.js";
import { assertType } from "../_lib/test/index.js";

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

  it("allows to pass undefined", () => {
    const result = constructNow(undefined);
    expect(result instanceof Date).toBe(true);
  });

  it("resolves the date type by default", () => {
    const result = constructNow(Date.now());
    expect(result instanceof Date).toBe(true);
    assertType<assertType.Equal<Date, typeof result>>(true);
  });

  it("resolves the argument type if a date extension is passed", () => {
    const result = constructNow(new UTCDate());
    expect(result instanceof UTCDate).toBe(true);
    assertType<assertType.Equal<UTCDate, typeof result>>(true);
  });

  it("resolves the context type if it is passed as the argument", () => {
    const result = constructNow(tz("Asia/Singapore"));
    expect(result instanceof TZDate).toBe(true);
    assertType<assertType.Equal<TZDate, typeof result>>(true);
  });
});
