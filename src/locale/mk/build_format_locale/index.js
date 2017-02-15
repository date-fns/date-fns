import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

export default function buildFormatLocale () {
  var months3char = ['јан', 'фев', 'мар', 'апр', 'мај', 'јун', 'јул', 'авг', 'сеп', 'окт', 'ное', 'дек']
  var monthsFull = ['јануари', 'февруари', 'март', 'април', 'мај', 'јуни', 'јули', 'август', 'септември', 'октомври', 'ноември', 'декември']
  var weekdays2char = ['не', 'по', 'вт', 'ср', 'че', 'пе', 'са']
  var weekdays3char = ['нед', 'пон', 'вто', 'сре', 'чет', 'пет', 'саб']
  var weekdaysFull = ['недела', 'понеделник', 'вторник', 'среда', 'четврток', 'петок', 'сабота']
  var meridiem = ['претпладне', 'попладне']

  var formatters = {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return months3char[date.getUTCMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return monthsFull[date.getUTCMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return weekdays2char[date.getUTCDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return weekdays3char[date.getUTCDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return weekdaysFull[date.getUTCDay()]
    },

    // AM, PM
    'A': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // am, pm
    'a': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
    },

    // a.m., p.m.
    'aa': function (date) {
      return (date.getUTCHours() / 12) >= 1 ? meridiem[1] : meridiem[0]
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
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}

function ordinal (number) {
  var rem100 = number % 100
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + '-ви'
      case 2:
        return number + '-ри'
      case 7:
      case 8:
        return number + '-ми'
    }
  }
  return number + '-ти'
}

