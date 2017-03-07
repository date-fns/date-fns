import buildTokensRegExp from '../../_lib/buildTokensRegExp/index.js'

export default function buildFormatLocale () {
  var months3char = ['Ene', 'Peb', 'Mar', 'Abr', 'May', 'Hun', 'Hul', 'Ago', 'Set', 'Okt', 'Nob', 'Dis']
  var monthsFull = ['Enero', 'Pebrero', 'Marso', 'Abril', 'Mayo', 'Hunyo', 'Hulyo', 'Agosto', 'Setyembre', 'Oktubre', 'Nobyembre', 'Disyembre']
  var weekdays2char = ['Li', 'Lu', 'Ma', 'Mi', 'Hu', 'Bi', 'Sa']
  var weekdays3char = ['Lin', 'Lun', 'Mar', 'Miy', 'Huw', 'Biy', 'Sab']
  var weekdaysFull = ['Linggo', 'Lunes', 'Martes', 'Miyerkules', 'Huwebes', 'Biyernes', 'Sabado']
  var meridiemUppercase = ['NU', 'NT', 'NH', 'NG']
  var meridiemLowercase = ['nu', 'nt', 'nh', 'ng']
  var meridiemFull = ['ng umaga', 'ng tanghali', 'ng hapon', 'ng gabi']

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
      if (date.getUTCHours() > 12) {
        var modulo = date.getUTCHours() % 12
        if (modulo < 6) {
          return meridiemUppercase[2]
        } else {
          return meridiemUppercase[3]
        }
      } else if (date.getUTCHours() < 12) {
        return meridiemUppercase[0]
      } else {
        return meridiemUppercase[1]
      }
    },

    // am, pm
    'a': function (date) {
      if (date.getUTCHours() > 12) {
        var modulo = date.getUTCHours() % 12
        if (modulo < 6) {
          return meridiemLowercase[2]
        } else {
          return meridiemLowercase[3]
        }
      } else if (date.getUTCHours() < 12) {
        return meridiemLowercase[0]
      } else {
        return meridiemLowercase[1]
      }
    },

    // a.m., p.m.
    'aa': function (date) {
      if (date.getUTCHours() > 12) {
        var modulo = date.getUTCHours() % 12
        if (modulo < 6) {
          return meridiemFull[2]
        } else {
          return meridiemFull[3]
        }
      } else if (date.getUTCHours() < 12) {
        return meridiemFull[0]
      } else {
        return meridiemFull[1]
      }
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
  return 'ika-' + number
}
