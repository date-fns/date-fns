import formatDistance from '../en-US/_lib/formatDistance/index'
import formatRelative from '../en-US/_lib/formatRelative/index'
import localize from '../en-US/_lib/localize/index'
import match from '../en-US/_lib/match/index'
import type { Locale } from '../types'
import formatLong from './_lib/formatLong/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (India).
 * @language English
 * @iso-639-2 eng
 * @author Galeel Bhasha Satthar [@gbhasha]{@link https://github.com/gbhasha}
 */
const locale: Locale = {
  code: 'en-IN',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1, // Monday is the first day of the week.
    firstWeekContainsDate: 4, // The week that contains Jan 4th is the first week of the year.
  },
}

export default locale
