import { describe, expect, it } from "vitest";
import { addLeadingZeros } from "./index.js";

describe("addLeadingZeros", () => {
  it("adds leading zeros when number has fewer digits than target length", () => {
    expect(addLeadingZeros(7, 3)).toBe("007");
    expect(addLeadingZeros(7, 2)).toBe("07");
    expect(addLeadingZeros(7, 1)).toBe("7");
    expect(addLeadingZeros(7, 0)).toBe("7");
    expect(addLeadingZeros(7, -1)).toBe("7");
  });
});
