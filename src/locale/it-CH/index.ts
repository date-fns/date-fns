import type { Locale } from '../types'
import formatDistance from '../it/_lib/formatDistance/index'
import formatRelative from '../it/_lib/formatRelative/index'
import localize from '../it/_lib/localize/index'
import match from '../it/_lib/match/index'
import formatLong from './_lib/formatLong/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Italian locale (Switzerland).
 * @language Italian
 * @iso-639-2 ita
 * @author Mike Peyer [@maic66]{@link https://github.com/maic66}
 */
const locale: Locale = {
  code: 'it-CH',
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
