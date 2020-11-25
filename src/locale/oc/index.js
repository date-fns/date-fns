import formatDistance from './_lib/formatDistance/index'
import formatLong from './_lib/formatLong/index'
import formatRelative from './_lib/formatRelative/index'
import localize from './_lib/localize/index'
import match from './_lib/match/index'

/**
 * @type {Locale}
 * @category Locales
 * @summary Occitan locale.
 * @language Occitan
 * @iso-639-2 oci
 * @author Quentin PAGÈS
 */
var locale = {
  code: 'OC',
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

// throw new Error('OC locale is currently unavailable. Please check the progress of converting this locale to v2.0.0 in this issue on Github: TBA')
