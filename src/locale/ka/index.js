import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Georgian locale.
 * @language Georgian
 * @iso-639-2 geo
 * @author Lado Lomidze [@Landish]{@link https://github.com/Landish}
 * @author Nick Shvelidze [@shvelo]{@link https://github.com/shvelo}
 */
var locale = {
  code: 'ka',
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
