import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Haitian Creole locale.
 * @language Haitian Creole
 * @iso-639-2 hat
 * @author Rubens Mariuzzo [@rmariuzzo](https://github.com/rmariuzzo)
 * @author Watson Marcelain [@watsongm24](https://github.com/watsongm24)
 */
const locale: Locale = {
  code: 'ht',
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
