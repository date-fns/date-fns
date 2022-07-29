/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param argument - the value to convert
 * @returns the parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
export default function toDate<DateType extends Date = Date>(
  argument: DateType | number
): DateType {
  const argStr = Object.prototype.toString.call(argument)

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === 'object' && argStr === '[object Date]')
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore: TODO find a way to make TypeScript happy about this code
    return new argument.constructor(argument.getTime())
    // return new Date(argument.getTime())
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    // TODO: Can we get rid of as?
    return new Date(argument) as DateType
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN) as DateType
  }
}
