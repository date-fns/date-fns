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
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return getTranslation('A', 2)
        } else {
          return getTranslation('A', 3)
        }
      } else if (date.getHours() < 12) {
        return getTranslation('A', 0)
      } else {
        return getTranslation('A', 1)
      }
    },

    // am, pm
    'a': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return getTranslation('a', 2)
        } else {
          return getTranslation('a', 3)
        }
      } else if (date.getHours() < 12) {
        return getTranslation('a', 0)
      } else {
        return getTranslation('a', 1)
      }
    },

    // a.m., p.m.
    'aa': function (date) {
      if (date.getHours() > 12) {
        var modulo = date.getHours() % 12
        if (modulo < 6) {
          return getTranslation('aa', 2)
        } else {
          return getTranslation('aa', 3)
        }
      } else if (date.getHours() < 12) {
        return getTranslation('aa', 0)
      } else {
        return getTranslation('aa', 1)
      }
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
  return 'ika-' + number
}

module.exports = buildFormatLocale
