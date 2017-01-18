import buildFormattingTokensRegExp from '../../_lib/build_formatting_tokens_reg_exp/index.js'
import buildMatchRegExpFromArray from '../../_lib/build_match_reg_exp_from_array/index.js'
import buildParseFnFromArray from '../../_lib/build_parse_fn_from_array/index.js'
import parseDecimal from '../../_lib/parse_decimal/index.js'

export default function buildParseLocale () {
  var months3char = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  var monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  var weekdays2char = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
  var weekdays3char = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
  var weekdaysFull = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var patternOrdinal = /^(\d+)(th|st|nd|rd)/

  var units = {
    // a.m., p.m.
    meridiem: {
      priority: 65,
      set: function (date, value) {
        var hours = date.getHours()
        var isAM = value === 0

        if (isAM) {
          if (hours === 12) {
            date.setHours(0)
          }
        } else {
          if (hours !== 12) {
            date.setHours(12 + hours)
          }
        }

        return date
      }
    }
  }

  var parsers = {
    // Month: Jan, Feb, ..., Dec
    'MMM': {
      unit: 'month',
      match: buildMatchRegExpFromArray(months3char),
      parse: buildParseFnFromArray(months3char)
    },

    // Month: January, February, ..., December
    'MMMM': {
      unit: 'month',
      match: buildMatchRegExpFromArray(monthsFull),
      parse: buildParseFnFromArray(monthsFull)
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': {
      unit: 'day',
      match: buildMatchRegExpFromArray(weekdays2char),
      parse: buildParseFnFromArray(weekdays2char)
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': {
      unit: 'day',
      match: buildMatchRegExpFromArray(weekdays3char),
      parse: buildParseFnFromArray(weekdays3char)
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': {
      unit: 'day',
      match: buildMatchRegExpFromArray(weekdaysFull),
      parse: buildParseFnFromArray(weekdaysFull)
    },

    // AM, PM
    'A': {
      unit: 'meridiem',
      match: buildMatchRegExpFromArray(meridiemUppercase),
      parse: buildParseFnFromArray(meridiemUppercase)
    },

    // am, pm
    'a': {
      unit: 'meridiem',
      match: buildMatchRegExpFromArray(meridiemLowercase),
      parse: buildParseFnFromArray(meridiemLowercase)
    },

    // a.m., p.m.
    'aa': {
      unit: 'meridiem',
      match: buildMatchRegExpFromArray(meridiemFull),
      parse: buildParseFnFromArray(meridiemFull)
    },

    // Ordinal quarter
    'Qo': {
      unit: 'quarter',
      match: patternOrdinal,
      parse: parseDecimal
    },

    // Ordinal month
    'Mo': {
      unit: 'month',
      match: patternOrdinal,
      parse: function (matchResult) {
        return parseDecimal(matchResult) - 1
      }
    },

    // Ordinal ISO week
    'Wo': {
      unit: 'isoWeek',
      match: patternOrdinal,
      parse: parseDecimal
    },

    // Ordinal day of week
    'do': {
      unit: 'day',
      match: patternOrdinal,
      parse: parseDecimal
    },

    // Ordinal day of month
    'Do': {
      unit: 'date',
      match: patternOrdinal,
      parse: parseDecimal
    },

    // Ordinal day of year
    'DDDo': {
      unit: 'dayOfYear',
      match: patternOrdinal,
      parse: parseDecimal
    }
  }

  return {
    units: units,
    parsers: parsers,
    parsingTokensRegExp: buildFormattingTokensRegExp(parsers)
  }
}
