var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')
var getTranslation = require('../translations/index.js').getTranslation

function buildFormatLocale () {
  var formatters = {
    // Month: jan, feb, ..., dec
    'MMM': function (date) {
      return getTranslation('MMM', date.getMonth())
    },

    // Month: január, február, ..., december
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getMonth())
    },

    // Day of week: ne, po, ..., so
    'dd': function (date) {
      return getTranslation('dd', date.getDay())
    },

    // Day of week: neď, pon, ..., sob
    'ddd': function (date) {
      return getTranslation('ddd', date.getDay())
    },

    // Day of week: neďeľa, pondelok, ..., sobota
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
  return number + '.'
}

module.exports = buildFormatLocale
