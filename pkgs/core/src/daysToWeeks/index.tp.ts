import { daysInWeek } from "../constants/index.ts";

export function tpyDaysToWeeks(days: number): number {
  const result = Math.trunc(days / daysInWeek);
  // Prevent negative zero
  return result === 0 ? 0 : result;
}
