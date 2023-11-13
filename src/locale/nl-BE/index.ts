import type { Locale } from '../types'
import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Dutch locale.
 * @language Dutch
 * @iso-639-2 nld
 * @author Jorik Tangelder [@jtangelder](https://github.com/jtangelder)
 * @author Ruben Stolk [@rubenstolk](https://github.com/rubenstolk)
 * @author Lode Vanhove [@bitcrumb](https://github.com/bitcrumb)
 * @author Alex Hoeing [@dcbn](https://github.com/dcbn)
 */
const locale: Locale = {
  code: 'nl-BE',
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
