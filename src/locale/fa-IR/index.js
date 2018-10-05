import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Persian locale (Iran).
 * @language Persian
 * @iso-639-2 per
 * @author Mahdi Majidzadeh [@MahdiMajidzadeh]{@link https://github.com/MahdiMajidzadeh}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 6,
    firstWeekContainsDate: 1
  }
}

export default locale
