import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @category Locales
 * @summary Swedish locale.
 * @language Swedish
 * @iso-639-2 swe
 * @author Johannes Ulén [@ejulen](https://github.com/ejulen)
 * @author Alexander Nanberg [@alexandernanberg](https://github.com/alexandernanberg)
 * @author Henrik Andersson [@limelights](https://github.com/limelights)
 */
const locale: Locale = {
  code: 'sv',
  formatDistance: formatDistance,
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  match: match,
  options: {
    weekStartsOn: 1 /* Monday */,
    firstWeekContainsDate: 4,
  },
}

export default locale
