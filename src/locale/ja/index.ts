import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'
import type { Locale } from '../types'

/**
 * @category Locales
 * @summary Japanese locale.
 * @language Japanese
 * @iso-639-2 jpn
 * @author Thomas Eilmsteiner [@DeMuu](https://github.com/DeMuu)
 * @author Yamagishi Kazutoshi [@ykzts](https://github.com/ykzts)
 * @author Luca Ban [@mesqueeb](https://github.com/mesqueeb)
 * @author Terrence Lam [@skyuplam](https://github.com/skyuplam)
 * @author Taiki IKeda [@so99ynoodles](https://github.com/so99ynoodles)
 */
const locale: Locale = {
  code: 'ja',
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
