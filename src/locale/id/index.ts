import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Indonesian locale.
 * @language Indonesian
 * @iso-639-2 ind
 * @author Rahmat Budiharso [@rbudiharso](https://github.com/rbudiharso)
 * @author Benget Nata [@bentinata](https://github.com/bentinata)
 * @author Budi Irawan [@deerawan](https://github.com/deerawan)
 * @author Try Ajitiono [@imballinst](https://github.com/imballinst)
 */
const locale: Locale = {
  code: 'id',
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
