import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @type {Locale}
 * @category Locales
 * @summary Arabic locale (Moroccan Arabic).
 * @language Moroccan Arabic
 * @iso-639-2 ara
 * @author Achraf Rrami [@rramiachraf]{@link https://github.com/rramiachraf}
 */
const locale: Locale = {
  code: 'ar-MA',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    // Monday is 1
    weekStartsOn: 1,
    firstWeekContainsDate: 1,
  },
}

export default locale
