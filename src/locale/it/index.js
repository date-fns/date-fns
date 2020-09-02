import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Italian locale.
 * @language Italian
 * @iso-639-2 ita
 * @author Alberto Restifo [@albertorestifo]{@link https://github.com/albertorestifo}
 * @author Giovanni Polimeni [@giofilo]{@link https://github.com/giofilo}
 * @author Vincenzo Carrese [@vin-car]{@link https://github.com/vin-car}
 */
var locale = {
  code: 'it',
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
