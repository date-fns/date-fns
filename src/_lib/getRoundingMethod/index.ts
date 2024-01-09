import type { RoundingMethod } from "../../types.js";

export function getRoundingMethod(method: RoundingMethod | undefined) {
  return method ? Math[method] : Math.trunc;
}
