import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Thai locale.
 * @language Thai
 * @iso-639-2 tha
 * @author Athiwat Hirunworawongkun [@athivvat]{@link https://github.com/athivvat}
 * @author [@hawkup]{@link https://github.com/hawkup}
 * @author  Jirawat I. [@nodtem66]{@link https://github.com/nodtem66}
 */
var locale = {
  code: 'th',
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
