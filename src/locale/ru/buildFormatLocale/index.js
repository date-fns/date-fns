import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

export default function buildFormatLocale () {
  // http://new.gramota.ru/spravka/buro/search-answer?s=242637
  var monthsShort = ['янв.', 'фев.', 'март', 'апр.', 'май', 'июнь', 'июль', 'авг.', 'сент.', 'окт.', 'нояб.', 'дек.']
  var monthsFull = ['январь', 'февраль', 'март', 'апрель', 'май', 'июнь', 'июль', 'август', 'сентябрь', 'октябрь', 'ноябрь', 'декабрь']
  var monthsGenitive = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']
  var weekdays2char = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  var weekdays3char = ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'суб']
  var weekdaysFull = ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота']
  var meridiem = ['ночи', 'утра', 'дня', 'вечера']

  var formatters = {
    // Month: янв., фев., ..., дек.
    'MMM': function (date) {
      return monthsShort[date.getUTCMonth()]
    },

    // Month: январь, февраль, ..., декабрь
    'MMMM': function (date) {
      return monthsFull[date.getUTCMonth()]
    },

    // Day of week: вс, пн, ..., сб
    'dd': function (date) {
      return weekdays2char[date.getUTCDay()]
    },

    // Day of week: вск, пнд, ..., суб
    'ddd': function (date) {
      return weekdays3char[date.getUTCDay()]
    },

    // Day of week: воскресенье, понедельник, ..., суббота
    'dddd': function (date) {
      return weekdaysFull[date.getUTCDay()]
    },

    // Time of day: ночи, утра, дня, вечера
    'A': function (date) {
      var hours = date.getUTCHours()
      if (hours >= 17) {
        return meridiem[3]
      } else if (hours >= 12) {
        return meridiem[2]
      } else if (hours >= 4) {
        return meridiem[1]
      } else {
        return meridiem[0]
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
      return formatter(date, commonFormatters) + ' ' + monthsGenitive[date.getUTCMonth()]
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildTokensRegExp(formatters)
  }
}
