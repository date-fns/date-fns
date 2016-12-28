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
  var ordinalGenders = {
    'M': 'ος',
    'D': 'η',
    'DDD': 'η',
    'd': 'η',
    'Q': 'ο',
    'W': 'η'
  }
  var ordinalKeys = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalKeys.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + ordinalGenders[formatterToken]
    }
  })

  // Generate genitive variant of full months
  var formatsWithGenitive = ['D', 'Do', 'DD']
  formatsWithGenitive.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + getTranslation('MMMM', date.getMonth(), {casing: 'genitive'})
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale
