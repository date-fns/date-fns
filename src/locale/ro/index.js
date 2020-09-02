import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Romanian locale.
 * @language Romanian
 * @iso-639-2 ron
 * @author Sergiu Munteanu [@jsergiu]{@link https://github.com/jsergiu}
 * @author Adrian Ocneanu [@aocneanu]{@link https://github.com/aocneanu}
 * @author Mihai Ocneanu [@gandesc]{@link https://github.com/gandesc}
 */
var locale = {
  code: 'ro',
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
