import { toDate } from "../toDate/index.ts";
import type { DateArg } from "../types.ts";

/**
 * @name allClosestIndicesTo
 * @category Common Helpers
 * @summary Return the indices of all dates in the array closest to the given date.
 *
 * @description
 * Return the indices of all dates from the array closest to the given date.
 * Unlike `closestIndexTo`, which returns a single index, this returns every
 * index that shares the minimum distance to the given date, preserving their
 * order in the input array.
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The indices of the dates closest to the given date, or an empty
 * array if no valid value is given
 *
 * @example
 * // Which dates are closest to 6 September 2015?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = allClosestIndicesTo(dateToCompare, [
 *   new Date(2015, 8, 5),
 *   new Date(2015, 8, 7),
 *   new Date(2015, 8, 10),
 * ])
 * //=> [0, 1]
 */
export function allClosestIndicesTo(
  dateToCompare: DateArg<Date> & {},
  dates: Array<DateArg<Date> & {}>,
): number[] {
  const timeToCompare = +toDate(dateToCompare);

  if (isNaN(timeToCompare)) return [];

  let result: number[] = [];
  let minDistance = Infinity;

  for (let index = 0; index < dates.length; index++) {
    const date = toDate(dates[index]!);

    if (isNaN(+date)) return [];

    const distance = Math.abs(timeToCompare - +date);
    if (distance < minDistance) {
      minDistance = distance;
      result = [index];
    } else if (distance === minDistance) {
      result.push(index);
    }
  }

  return result;
}
