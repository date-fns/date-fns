import toDate from '../toDate/index'

/**
 * @name isAfter
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date that should be after the other one to return true
 * @param dateToCompare - The date to compare with
 *
 * @returns The first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * const result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
export default function isAfter<DateType extends Date>(
  date: DateType | number,
  dateToCompare: DateType | number
): boolean {
  const _date = toDate(date)
  const _dateToCompare = toDate(dateToCompare)
  return _date.getTime() > _dateToCompare.getTime()
}
