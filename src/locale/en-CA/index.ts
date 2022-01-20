import formatRelative from '../en-US/_lib/formatRelative/index'
import localize from '../en-US/_lib/localize/index'
import match from '../en-US/_lib/match/index'
import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary English locale (Canada).
 * @language English
 * @iso-639-2 eng
 * @author Mark Owsiak [@markowsiak]{@link https://github.com/markowsiak}
 * @author Marco Imperatore [@mimperatore]{@link https://github.com/mimperatore}
 */
const locale: Locale = {
  code: 'en-CA',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
}

export default locale
