import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Croatian locale.
 * @language Croatian
 * @iso-639-2 hrv
 * @author Matija Marohnić [@silvenon]{@link https://github.com/silvenon}
 * @author Manico [@manico]{@link https://github.com/manico}
 * @author Ivan Jeržabek [@jerzabek]{@link https://github.com/jerzabek}
 */
var locale = {
  code: 'hr',
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
