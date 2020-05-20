/**
 * @name isExists
 * @category Common Helpers
 * @summary Is the given date exists?
 *
 * @description
 * Checks if the given arguments convert to an existing date.
 *
 * @param year of the date to check
 * @param month of the date to check
 * @param day of the date to check
 * @returns The date exists
 *
 * @example
 * // For the valid date:
 * const result = isExists(2018, 0, 31)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isExists(2018, 1, 31)
 * //=> false
 */
export default function isExists(year, month, day): boolean {
  if (arguments.length < 3) {
    throw new TypeError(
      '3 argument required, but only ' + arguments.length + ' present'
    )
  }

  const date = new Date(year, month, day)
  return (
    date.getFullYear() === year &&
    date.getMonth() === month &&
    date.getDate() === day
  )
}
