import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Danish locale.
 * @language Danish
 * @iso-639-2 dan
 * @author Mathias Wøbbe [@MathiasKandelborg]{@link https://github.com/MathiasKandelborg}
 * @author Anders B. Hansen [@Andersbiha]{@link https://github.com/Andersbiha}
 * @author [@kgram]{@link https://github.com/kgram}
 * @author [@stefanbugge]{@link https://github.com/stefanbugge}
 */
var locale = {
  code: 'da',
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
