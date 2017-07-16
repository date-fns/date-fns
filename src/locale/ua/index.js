import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'
import match from './_lib/match/index.js'
import formatters from './_lib/formatters/index.js'
import buildTokensRegExp from '../_lib/buildTokensRegExp/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary Ukrainian locale.
 * @language Ukrainian
 * @iso-639-2 ukr
 * @author Andrii Korzh [@korzhyk]{@link https://github.com/korzhyk}
 */
var locale = {
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  formatters: formatters,
  formattingTokensRegExp: buildTokensRegExp(formatters),
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 1
  }
}

export default locale
