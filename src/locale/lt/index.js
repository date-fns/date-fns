import formatLong from './_lib/formatLong/index.js'
import formatRelative from './_lib/formatRelative/index.js'
import localize from './_lib/localize/index.js'

var locale = {
  formatLong: formatLong,
  formatRelative: formatRelative,
  localize: localize,
  options: {
    weekStartsOn: 1,
    firstWeekContainsDate: 4
  }
}

export default locale
