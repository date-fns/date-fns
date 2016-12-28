var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')
var getTranslation = require('../translations/index.js').getTranslation

function buildFormatLocale () {
  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return getTranslation('MMM', date.getMonth())
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getMonth())
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return getTranslation('dd', date.getDay())
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return getTranslation('ddd', date.getDay())
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return getTranslation('dddd', date.getDay())
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('A', 1) : getTranslation('A', 0)
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('a', 1) : getTranslation('a', 0)
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getHours() / 12) >= 1 ? getTranslation('aa', 1) : getTranslation('aa', 0)
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-a'
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale
