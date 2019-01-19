var buildFormattingTokensRegExp = require('../../_lib/build_formatting_tokens_reg_exp/index.js')

function buildFormatLocale () {
  var monthsShort = ['студз', 'лют', 'сак', 'крас', 'май', 'чэрв', 'ліп', 'жн', 'вер', 'кастр', 'ліст', 'снеж']
  var monthsFull = ['студзень', 'люты', 'сакавік', 'красавік', 'май', 'чэрвень', 'ліпень', 'жнівень', 'верасень', 'кастрычнік', 'лістапад', 'снежань']
  var monthsShortGenitive = ['студз', 'лют', 'сак', 'крас', 'мая', 'чэрв', 'ліп', 'жн', 'вер', 'кастр', 'ліст', 'снеж']
  var monthsGenitive = ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'мая', 'чэрвеня', 'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня']
  var weekdays2char = ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб']
  var weekdays3char = ['нядз', 'пан', 'аўт', 'сер', 'чац', 'пят', 'суб']
  var weekdaysFull = ['нядзеля', 'панядзелак', 'аўторак', 'серада', 'чацвер', 'пятніца', 'субота']
  var meridiem = ['ночы', 'раніцы', 'дня', 'вечара']

  var formatters = {
    // Month: студз, лют, ..., снеж
    'MMM': function (date) {
      return monthsShort[date.getMonth()]
    },

    // Month: студзень, люты, ..., снежань
    'MMMM': function (date) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: нд, пн, ..., сб
    'dd': function (date) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: нядз, пан, ..., суб
    'ddd': function (date) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: нядзеля, панядзелак, ..., субота
    'dddd': function (date) {
      return weekdaysFull[date.getDay()]
    },

    // Time of day: ночы, раніцы, дня, вечара
    'A': function (date) {
      var hours = date.getHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
      }
    }
  }

  formatters.a = formatters.A
  formatters.aa = formatters.A

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + 'o'] = function (date, formatters) {
      var number = formatters[formatterToken](date)
      var suffix = (number % 10 === 2 || number % 10 === 3) && (number % 100 !== 12 && number % 100 !== 13) ? '-і' : '-ы'
      return number + suffix
    }
  })

  // Generate formatters like 'D MMMM' and 'D MMM',
  // where month is in the genitive case: студзеня, лютага, ..., снежня (and in a shortened form).
  var monthsGenitiveFormatters = ['D', 'DD']
  monthsGenitiveFormatters.forEach(function (formatterToken) {
    formatters[formatterToken + ' MMMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getMonth()]
    }
    formatters[formatterToken + ' MMM'] = function (date, commonFormatters) {
      var formatter = formatters[formatterToken] || commonFormatters[formatterToken]
      return formatter(date, commonFormatters) + ' ' + monthsShortGenitive[date.getMonth()]
    }
  })

  // Ordinal day of month in the genitive case
  formatters['Do MMMM'] = function (date, formatters) {
    return formatters.D(date) + '-га' + ' ' + monthsGenitive[date.getMonth()]
  }

  // Ordinal day of month in a short form
  formatters['Do MMM'] = function (date, formatters) {
    return formatters.D(date) + '-га' + ' ' + monthsShortGenitive[date.getMonth()]
  }

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

module.exports = buildFormatLocale
