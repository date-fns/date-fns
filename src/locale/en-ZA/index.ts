import formatDistance from '../en-US/_lib/formatDistance/index'
import formatRelative from '../en-US/_lib/formatRelative/index'
import localize from '../en-US/_lib/localize/index'
import match from '../en-US/_lib/match/index'
import type { Locale } from '../types'
import formatLong from './_lib/formatLong/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (South Africa).
 * @language English
 * @iso-639-2 eng
 * @author Shaila Kavrakova [@shaykav]{@link https://github.com/shaykav}
 */
const locale: Locale = {
  code: 'en-ZA',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0, // Sunday is the first day of the week.
    firstWeekContainsDate: 1, // The week that contains Jan 1st is the first week of the year.
  },
}

export default locale
