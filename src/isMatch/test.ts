/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { isMatch } from "./index.js";
import { eo } from "../locale/eo/index.js";

describe("isMatch", () => {
  it("accepts a dd-MM-yyyy format against 22-02-1998", () => {
    assert(isMatch("22-02-1998", "dd-MM-yyyy"));
  });

  it("reject a yyyy-dd-MM format against 22-02-1998", () => {
    assert(!isMatch("22-02-1998", "yyyy-dd-MM"));
  });

  it("accepts a date & format with locale", () => {
    assert(
      isMatch("28-a de februaro", "do 'de' MMMM", {
        locale: eo,
      }),
    );
  });
});
