import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Macedonian locale.
 * @language Macedonian
 * @iso-639-2 mkd
 * @author Petar Vlahu [@vlahupetar](https://github.com/vlahupetar)
 * @author Altrim Beqiri [@altrim](https://github.com/altrim)
 */
const locale: Locale = {
  code: 'mk',
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
