import formatDistance from '../en-US/_lib/formatDistance/index'
import formatRelative from '../en-US/_lib/formatRelative/index'
import localize from '../en-US/_lib/localize/index'
import match from '../en-US/_lib/match/index'
import type { Locale } from '../types'
import formatLong from './_lib/formatLong/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (New Zealand).
 * @language English
 * @iso-639-2 eng
 * @author Murray Lucas [@muntact]{@link https://github.com/muntact}
 */
const locale: Locale = {
  code: 'en-NZ',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
