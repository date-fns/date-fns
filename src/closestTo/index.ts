import { constructFrom } from "../constructFrom/index.js";
import { toDate } from "../toDate/index.js";

/**
 * @name closestTo
 * @category Common Helpers
 * @summary Return a date from the array closest to the given date.
 *
 * @description
 * Return a date from the array closest to the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateToCompare - The date to compare with
 * @param dates - The array to search
 *
 * @returns The date from the array closest to the given date or undefined if no valid value is given
 *
 * @example
 * // Which date is closer to 6 September 2015: 1 January 2000 or 1 January 2030?
 * const dateToCompare = new Date(2015, 8, 6)
 * const result = closestTo(dateToCompare, [
 *   new Date(2000, 0, 1),
 *   new Date(2030, 0, 1)
 * ])
 * //=> Tue Jan 01 2030 00:00:00
 */
export function closestTo<DateType extends Date>(
  dateToCompare: DateType | number | string,
  dates: Array<DateType | number | string>,
): DateType | undefined {
  const date = toDate(dateToCompare);

  if (isNaN(Number(date))) return constructFrom(dateToCompare, NaN);

  const timeToCompare = date.getTime();

  let result: DateType | undefined;
  let minDistance: number;
  dates.forEach((dirtyDate) => {
    const currentDate = toDate(dirtyDate);

    if (isNaN(Number(currentDate))) {
      result = constructFrom(dateToCompare, NaN);
      minDistance = NaN;
      return;
    }

    const distance = Math.abs(timeToCompare - currentDate.getTime());
    if (result == null || distance < minDistance) {
      result = currentDate;
      minDistance = distance;
    }
  });

  return result;
}
