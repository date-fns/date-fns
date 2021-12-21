import requiredArgs from '../_lib/requiredArgs/index'
import { RepresentationOptions } from '../types'

/**
 * @name isISOMatch
 * @category ISO Helpers
 * @summary Is the given string in valid ISO 8601 format?
 *
 * @description
 * Is the given string in valid ISO 8601 format?
 *
 * ISO 8601: https://en.wikipedia.org/wiki/ISO_8601
 *
 * ### v2.0.0 breaking changes:
 *
 * - [Changes that are common for the whole library](https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#Common-Changes).
 *
 * @param {string} dateString - the string representation of date to check.
 * @param {Object} [options] - an object with options.
 * @param {'complete'|'date'|'time'} [options.representation='complete'] - format date, time with local time zone, or both.
 * @returns {Boolean} string is valid ISO 8601 representation.
 * @throws {TypeError} 1 argument required.
 *
 * @example
 * // Is 18:23:02Z valid ISO time?
 * var result = parseISO('18:23:02Z', { representation: 'time' })
 * //=> true
 *
 * @example
 * // Is 24:25:02Z valid ISO time?
 * var result = isSameISOWeek('24:23:02Z', { representation: 'time' })
 * //=> false
 */
export default function isISOMatch(
  dateString: string,
  options?: RepresentationOptions
): boolean {
  requiredArgs(1, arguments)

  const representation = !options?.representation
    ? 'complete'
    : String(options.representation)

  switch (representation) {
    case 'date':
      return dateRegex.test(dateString)
    case 'time':
      return timeRegex.test(dateString)
    case 'complete':
      return dateTimeRegex.test(dateString)
    default:
      throw new RangeError(
        "representation must be 'date', 'time', or 'complete'"
      )
  }
}

const dateTimeRegex = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))([T\s]((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\17[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?)?)?$/
const dateRegex = /^([+-]?\d{4}(?!\d{2}\b))((-?)((0[1-9]|1[0-2])(\3([12]\d|0[1-9]|3[01]))?|W([0-4]\d|5[0-2])(-?[1-7])?|(00[1-9]|0[1-9]\d|[12]\d{2}|3([0-5]\d|6[1-6])))?)?$/
const timeRegex = /^((([01]\d|2[0-3])((:?)[0-5]\d)?|24:?00)([.,]\d+(?!:))?)?(\5[0-5]\d([.,]\d+)?)?([zZ]|([+-])([01]\d|2[0-3]):?([0-5]\d)?)?$/
