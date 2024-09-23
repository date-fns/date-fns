import { getYear } from "../getYear";
import { getDay } from "../getDay";
import { getDaysInYear } from "../getDaysInYear";

/**
 * @name hasIndenticalCalander
 * @category Year helper
 * @summary Checks two years has identical calander or not
 * 
 * @description 
 * Checks two years has identical calander or not
 * 
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param { Date | String | number } year1 - year1
 * @param { Date | string | number } [year2=Date.now()] - year2
 * 
 * @returns {boolean}
 *
 * @example
 * // 2024 and 2052 has identical calander?
 * const result = hasIndenticalCalander(2024,2052);
 * //=> true
 */

export function hasIndenticalCalander<DateType extends Date>(year1: DateType | string | number, year2: DateType | string | number = Date.now()) {

    const day1 = getDay(new Date(getYear(year1), 0, 1));
    const day2 = getDay(new Date(getYear(year2), 0, 1));
    if (day1 !== day2)
        return false;
    return getDaysInYear(year1) === getDaysInYear(year2);
}