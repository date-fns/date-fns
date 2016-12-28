var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')
var getTranslation = require('../translations/index.js').getTranslation

function buildFormatLocale () {
  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return getTranslation('MMM', date.getMonth())
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getMonth())
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return getTranslation('dd', date.getDay())
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return getTranslation('ddd', date.getDay())
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return getTranslation('dddd', date.getDay())
    },

    // AM, PM
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('A', 1) : getTranslation('A', 0)
    },

    // am, pm
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('a', 1) : getTranslation('a', 0)
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('aa', 1) : getTranslation('aa', 0)
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var suffixes = {
    1: '\'inci',
    2: '\'inci',
    3: '\'üncü',
    4: '\'üncü',
    5: '\'inci',
    6: '\'ıncı',
    7: '\'inci',
    8: '\'inci',
    9: '\'uncu',
    10: '\'uncu',
    20: '\'inci',
    30: '\'uncu',
    50: '\'inci',
    60: '\'ıncı',
    70: '\'inci',
    80: '\'inci',
    90: '\'ıncı',
    100: '\'üncü'
  }

  if (number === 0) {
    return '0\'ıncı'
  }

  var x = number % 10
  var y = number % 100 - x
  var z = number >= 100 ? 100 : null

  return number + (suffixes[x] || suffixes[y] || suffixes[z])
}

module.exports = buildFormatLocale
