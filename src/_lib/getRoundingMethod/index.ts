import type { RoundingMethod } from "../../types.js";

export function getRoundingMethod(method: RoundingMethod | undefined) {
  return (number: number) => {
    const round = method ? Math[method] : Math.trunc;
    const result = round(number);
    // Prevent negative zero
    return result === 0 ? 0 : result;
  };
}
