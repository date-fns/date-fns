import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

export default function buildFormatLocale () {
  var months3char = ['jan', 'feb', 'mar', 'apr', 'maj', 'jun', 'jul', 'aŭg', 'sep', 'okt', 'nov', 'dec']
  var monthsFull = ['januaro', 'februaro', 'marto', 'aprilo', 'majo', 'junio', 'julio', 'aŭgusto', 'septembro', 'oktobro', 'novembro', 'decembro']
  var weekdays2char = ['di', 'lu', 'ma', 'me', 'ĵa', 've', 'sa']
  var weekdays3char = ['dim', 'lun', 'mar', 'mer', 'ĵaŭ', 'ven', 'sab']
  var weekdaysFull = ['dimanĉo', 'lundo', 'mardo', 'merkredo', 'ĵaŭdo', 'vendredo', 'sabato']
  var meridiemUppercase = ['A.T.M.', 'P.T.M.']
  var meridiemLowercase = ['a.t.m.', 'p.t.m.']
  var meridiemFull = ['antaŭtagmeze', 'posttagmeze']

  var formatters = {
    // Month: jan, feb, ..., deс
    'MMM': function (date) {
      return months3char[date.getUTCMonth()]
    },

    // Month: januaro, februaro, ..., decembro
    'MMMM': function (date) {
      return monthsFull[date.getUTCMonth()]
    },

    // Day of week: di, lu, ..., sa
    'dd': function (date) {
      return weekdays2char[date.getUTCDay()]
    },

    // Day of week: dim, lun, ..., sab
    'ddd': function (date) {
      return weekdays3char[date.getUTCDay()]
    },

    // Day of week: dimanĉo, lundo, ..., sabato
    'dddd': function (date) {
      return weekdaysFull[date.getUTCDay()]
    },

    // A.T.M., P.T.M.
    'A': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiemUppercase[1] : meridiemUppercase[0]
    },

    // a.t.m., p.t.m.
    'a': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiemLowercase[1] : meridiemLowercase[0]
    },

    // antaŭtagmeze, posttagmeze
    'aa': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiemFull[1] : meridiemFull[0]
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
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
