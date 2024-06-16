/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isMatchStrictMode } from "./index.js";

describe("isMatchStrict", () => {
  it("accepts a dd-MM-yyyy format against 22-02-1998", () => {
    assert(isMatchStrictMode("22-02-1998", "dd-MM-yyyy"));
  });

  it("accepts a MM-dd format against 04-02", () => {
    assert(isMatchStrictMode("04-02", "MM-dd"));
  });

  it("accepts a dd format against 02", () => {
    assert(isMatchStrictMode("02", "dd"));
  });

  it("accepts a yyyy-MM-d format against 2023-04-2", () => {
    assert(isMatchStrictMode("2023-04-2", "yyyy-dd-M"));
  });

  it("reject a yyyy-dd-MM format against 22-02-1998", () => {
    assert(!isMatchStrictMode("22-02-1998", "yyyy-dd-MM"));
  });

  it("reject a dd-MM-yyyy format against 22-02-1998", () => {
    assert(!isMatchStrictMode("22-02-1998", "yyyy-dd-MM"));
  });

  it("reject a yyyy-MM-dd format against 2023-04-2", () => {
    assert(!isMatchStrictMode("2023-04-2", "yyyy-dd-MM"));
  });

  it("reject a yyyy-MM-dd format against 223-4-28", () => {
    assert(!isMatchStrictMode("223-4-28", "yyyy-MM-dd"));
  });

  it("rejects a yyyy-MM-dd format against 2023-04-02", () => {
    assert(!isMatchStrictMode("2023-04-2", "yyyy-dd-MM"));
  });

  it("rejects a date & format with locale", () => {
    assert(!isMatchStrictMode("28-a de februaro", "do 'de' MMMM"))
  });
})
