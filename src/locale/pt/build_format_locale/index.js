var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')
var getTranslation = require('../translations/index.js').getTranslation

function buildFormatLocale () {
  var months3char = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']
  var monthsFull = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
  var weekdays2char = ['do', 'se', 'te', 'qa', 'qi', 'se', 'sa']
  var weekdays3char = ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sáb']
  var weekdaysFull = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado']
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

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
  return number + 'º'
}

module.exports = buildFormatLocale
