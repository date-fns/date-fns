import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Bengali locale.
 * @language Bengali
 * @iso-639-2 ben
 * @author Touhidur Rahman [@touhidrahman]{@link https://github.com/touhidrahman}
 * @author Farhad Yasir [@nutboltu]{@link https://github.com/nutboltu}
 */
var locale = {
  code: 'bn',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1
  }
}

export default locale
