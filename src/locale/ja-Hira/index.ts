import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Japanese (Hiragana) locale.
 * @language Japanese (Hiragana)
 * @iso-639-2 jpn
 * @author Eri Hiramatsu [@Eritutteo]{@link https://github.com/Eritutteo}
 */
const locale: Locale = {
  code: 'ja-Hira',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
