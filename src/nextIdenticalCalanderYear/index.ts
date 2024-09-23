import { isLeapYear } from "../isLeapYear";
import { addYears } from "../addYears";
import { getYear } from "../getYear";

/**
 * @name nextIdenticalCalanderYear
 * @category Year Helpers
 * @summary Determines the next year which has identical calendar as the given year.
 *
 * @description
 * Determines the next year which has identical calendar as the given year.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param {Date|number|string} year - The year as a Date object or a number or a string to which the next same calendar year needs to be found. 
 *
 * @returns {number} The next year with the same calendar
 *
 * @example
 * //Next same calander year for 2024
 * const result=nextIdenticalCalanderYear(new Date(2024,0,0));
 * //=> 2056
 */
export function nextIdenticalCalanderYear<DateType extends Date>(
    year: DateType | number | string
): number {
    const extraDays = getExtraDays(year);
    let sum = 0, nextYear = year;
    while (nextYear !== null) {
        nextYear = addYears(nextYear, 1);
        sum = (sum + getExtraDays(nextYear)) % 7;
        if (sum === 0 && getExtraDays(nextYear) === extraDays) {
            return getYear(nextYear);
        }
    }
    return getYear(nextYear);
}

// returns the extra days in a year
function getExtraDays<DateType extends Date>(year: DateType | number | string) {
    if (isLeapYear(year))
        return 2;
    return 1;
}
