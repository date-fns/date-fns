/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param dateLeft - the first date to compare
 * @param dateRight - the second date to compare
 * @returns the result of the comparison
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
export default function compareAsc(
  dateLeft: Date | number,
  dateRight: Date | number
): number {
  const dateLeftTransformed = new Date(dateLeft)
  const dateRightTransformed = new Date(dateRight)

  const diff = dateLeftTransformed.getTime() - dateRightTransformed.getTime()

  if (diff < 0) {
    return -1
  } else if (diff > 0) {
    return 1
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff
  }
}
