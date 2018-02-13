import formatDistance from './_lib/formatDistance/index.js'
import formatLong from './_lib/formatLong/index.js'
import formatRelative from '../en-US/_lib/formatRelative/index.js'
import localize from '../en-US/_lib/localize/index.js'
import match from '../en-US/_lib/match/index.js'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (Canada).
 * @language English
 * @iso-639-2 eng
 */
var locale = {
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
