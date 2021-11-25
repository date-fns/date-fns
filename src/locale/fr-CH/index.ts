// Same as fr
import formatDistance from '../fr/_lib/formatDistance/index'
import localize from '../fr/_lib/localize/index'
import match from '../fr/_lib/match/index'
import type { Locale } from '../types'
// Unique for fr-CH
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary French locale (Switzerland).
 * @language French
 * @iso-639-2 fra
 * @author Jean Dupouy [@izeau]{@link https://github.com/izeau}
 * @author François B [@fbonzon]{@link https://github.com/fbonzon}
 * @author Van Vuong Ngo [@vanvuongngo]{@link https://github.com/vanvuongngo}
 * @author Alex Hoeing [@dcbn]{@link https://github.com/dcbn}
 */
const locale: Locale = {
  code: 'fr-CH',
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
