import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Indonesian locale.
 * @language Indonesian
 * @iso-639-2 ind
 * @author Rahmat Budiharso [@rbudiharso]{@link https://github.com/rbudiharso}
 * @author Benget Nata [@bentinata]{@link https://github.com/bentinata}
 * @author Budi Irawan [@deerawan]{@link https://github.com/deerawan}
 * @author Try Ajitiono [@imballinst]{@link https://github.com/imballinst}
 */
var locale = {
  code: 'id',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1
  }
}

export default locale
