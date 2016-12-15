var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')
var getTranslation = require('../translations/index.js').getTranslation

function buildFormatLocale () {
  var formatters = {
    // Month: янв., фев., ..., дек.
    'MMM': function (date) {
      return getTranslation('MMM', date.getMonth())
    },

    // Month: январь, февраль, ..., декабрь
    'MMMM': function (date) {
      return getTranslation('MMMM', date.getMonth())
    },

    // Day of week: вс, пн, ..., сб
    'dd': function (date) {
      return getTranslation('dd', date.getDay())
    },

    // Day of week: вск, пнд, ..., суб
    'ddd': function (date) {
      return getTranslation('ddd', date.getDay())
    },

    // Day of week: воскресенье, понедельник, ..., суббота
    'dddd': function (date) {
      return getTranslation('dddd', date.getDay())
    },

    // Time of day: ночи, утра, дня, вечера
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return getTranslation('A', 3)
      } else if (hours >= 12) {
        return getTranslation('A', 2)
      } else if (hours >= 4) {
        return getTranslation('A', 1)
      } else {
        return getTranslation('A', 0)
      }
    },

    'Do': function (date, formatters) {
      return formatters.D(date) + '-е'
    },

    'Wo': function (date, formatters) {
      return formatters.W(date) + '-я'
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, DDD -> DDDo, etc.
  var ordinalFormatters = ['M', 'DDD', 'd', 'Q']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      return formatters[formatterToken](date) + '-й'
    }
  })

  // Generate formatters like 'D MMMM',
  // where month is in the genitive case: января, февраля, ..., декабря
  var monthsGenitiveFormatters = ['D', 'Do', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + getTranslation('MMMM-genitive', date.getMonth())
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale
