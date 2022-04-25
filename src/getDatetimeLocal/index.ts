import toDate from '../toDate/index'
import format from '../format/index'
import requiredArgs from '../_lib/requiredArgs/index'

/**
 * @name getDatetimeLocal
 * @category Datetime Helpers
 * @summary Get the datetime-local of the type of input.
 *
 * @description
 * Get the datetime-local of the type of input.
 * HTML input type='datetime-local' https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/datetime-local#value
 *
 * @param {Date|Number} dirtyDate - the given date
 * @returns {Number} the datetime-local
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // What datetime-local is 29 February 2012?
 * const result = getDatetimeLocal(new Date(2022, 3, 25, 17, 7))
 * //=> '2022-04-25T17:07'
 */
export default function getDatetimeLocal(dirtyDate: Date | number): string {
  requiredArgs(1, arguments)

  const date = toDate(dirtyDate)
  const datetimeLocal = format(date, `yyyy-MM-dd'T'HH:mm`)
  return datetimeLocal
}
