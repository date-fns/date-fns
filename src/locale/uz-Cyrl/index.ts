import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Uzbek Cyrillic locale.
 * @language Uzbek
 * @iso-639-2 uzb
 * @author Kamronbek Shodmonov [@kamronbek28]{@link https://github.com/kamronbek28}
 */
const locale: Locale = {
  code: 'uz-Cyrl',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
