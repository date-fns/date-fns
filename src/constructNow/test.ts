import assert from "assert";
import { describe, it } from "vitest";
import { constructNow } from ".";

describe("constructNow", () => {
  it("creates a new Date instance using the constructor from the reference date", () => {
    const result = constructNow(new Date("2023-10-25T12:00:00"));

    assert.ok(result instanceof Date);
    assert(+result - Date.now() < 10); // Give 10 ms of slack
    assert.strictEqual(result.constructor, Date);
  });

  it("creates a new Date instance using a number as the reference date", () => {
    const result = constructNow(1635158400000);

    assert.ok(result instanceof Date);
    assert(+result - Date.now() < 10); // Give 10 ms of slack
    assert.strictEqual(result.constructor, Date);
  });

  it("creates a new Date instance using a string as the reference date", () => {
    const result = constructNow("2023-10-25T12:00:00");

    assert.ok(result instanceof Date);
    assert(+result - Date.now() < 10); // Give 10 ms of slack
    assert.strictEqual(result.constructor, Date);
  });

  it("creates a new custom Date instance using the constructor from the reference date", () => {
    class CustomDate extends Date {}
    const result = constructNow(new CustomDate("2023-10-26T12:00:00"));

    assert.ok(result instanceof CustomDate);
    assert(+result - Date.now() < 10); // Give 10 ms of slack
    assert.strictEqual(result.constructor, CustomDate);
  });
});
