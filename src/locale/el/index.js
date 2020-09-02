import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Greek locale.
 * @language Greek
 * @iso-639-2 ell
 * @author Fanis Katsimpas [@fanixk]{@link https://github.com/fanixk}
 * @author Theodoros Orfanidis [@teoulas]{@link https://github.com/teoulas}
 */
var locale = {
  code: 'el',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4
  }
}

export default locale
