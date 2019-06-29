import buildFormattingTokensRegExp from '../../_lib/build_formatting_tokens_reg_exp/index';

function buildFormatLocale() {
  var months3char = [
    'jan',
    'feb',
    'mar',
    'apr',
    'maj',
    'jun',
    'jul',
    'avg',
    'sep',
    'okt',
    'nov',
    'dec'
  ]
  var monthsFull = [
    'januar',
    'februar',
    'marec',
    'april',
    'maj',
    'junij',
    'julij',
    'avgust',
    'september',
    'oktober',
    'november',
    'december'
  ]
  var weekdays2char = ['ne', 'po', 'to', 'sr', 'če', 'pe', 'so']
  var weekdays3char = ['ned', 'pon', 'tor', 'sre', 'čet', 'pet', 'sob']
  var weekdaysFull = [
    'nedelja',
    'ponedeljek',
    'torek',
    'sreda',
    'četrtek',
    'petek',
    'sobota'
  ]
  var meridiemUppercase = ['AM', 'PM']
  var meridiemLowercase = ['am', 'pm']
  var meridiemFull = ['a.m.', 'p.m.']

  var formatters: any = {
    // Month: Jan, Feb, ..., Dec
    MMM: function (date: any) {
      return months3char[date.getMonth()]
    },

    // Month: January, February, ..., December
    MMMM: function (date: any) {
      return monthsFull[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    dd: function (date: any) {
      return weekdays2char[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    ddd: function (date: any) {
      return weekdays3char[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    dddd: function (date: any) {
      return weekdaysFull[date.getDay()]
    },

    // AM, PM
    A: function (date: any) {
      return date.getHours() / 12 >= 1
        ? meridiemUppercase[1]
        : meridiemUppercase[0]
    },

    // am, pm
    a: function (date: any) {
      return date.getHours() / 12 >= 1
        ? meridiemLowercase[1]
        : meridiemLowercase[0]
    },

    // a.m., p.m.
    aa: function (date: any) {
      return date.getHours() / 12 >= 1 ? meridiemFull[1] : meridiemFull[0]
    }
  }

  // Generate ordinal version of formatters: M -> Mo, D -> Do, etc.
  var ordinalFormatters = ['M', 'D', 'DDD', 'd', 'Q', 'W']
  ordinalFormatters.forEach(function (formatterToken: any) {
    formatters[formatterToken + 'o'] = function (date: any, formatters: any) {
      return ordinal(formatters[formatterToken](date))
    }
  })

  return {
    formatters: formatters,
    formattingTokensRegExp: buildFormattingTokensRegExp(formatters)
  }
}

function ordinal(number: any) {
  return number + '.'
}

export default buildFormatLocale
