var patterns = {
  'M': /^(1[0-2]|0?\d)/, // 0 to 12
  'D': /^(3[0-1]|[0-2]?\d)/, // 0 to 31
  'DDD': /^(36[0-6]|3[0-5]\d|[0-2]?\d?\d)/, // 0 to 366
  'W': /^(5[0-3]|[0-4]?\d)/, // 0 to 53
  'YYYY': /^(\d{1,4})/, // 0 to 9999
  'H': /^(2[0-3]|[0-1]?\d)/, // 0 to 23
  'm': /^([0-5]?\d)/, // 0 to 59
  'Z': /^([+-])(\d{2}):(\d{2})/,
  'ZZ': /^([+-])(\d{2})(\d{2})/,
  singleDigit: /^(\d)/,
  twoDigits: /^(\d{2})/,
  threeDigits: /^(\d{3})/,
  fourDigits: /^(\d{4})/,
  anyDigits: /^(\d+)/
}

function parseDecimal (matchResult) {
  return parseInt(matchResult[1], 10)
}

var parsers = {
  // Year: 00, 01, ..., 99
  'YY': {
    unit: 'twoDigitYear',
    match: patterns.twoDigits,
    parse: function (matchResult) {
      return parseDecimal(matchResult)
    }
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': {
    unit: 'year',
    match: patterns.YYYY,
    parse: parseDecimal
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': {
    unit: 'isoYear',
    match: patterns.twoDigits,
    parse: function (matchResult) {
      return parseDecimal(matchResult) + 1900
    }
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': {
    unit: 'isoYear',
    match: patterns.YYYY,
    parse: parseDecimal
  },

  // Quarter: 1, 2, 3, 4
  'Q': {
    unit: 'quarter',
    match: patterns.singleDigit,
    parse: parseDecimal
  },

  // Ordinal quarter
  'Qo': {
    unit: 'quarter',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'quarter'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'quarter'})
    }
  },

  // Month: 1, 2, ..., 12
  'M': {
    unit: 'month',
    match: patterns.M,
    parse: function (matchResult) {
      return parseDecimal(matchResult) - 1
    }
  },

  // Ordinal month
  'Mo': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'month'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'month'}) - 1
    }
  },

  // Month: 01, 02, ..., 12
  'MM': {
    unit: 'month',
    match: patterns.twoDigits,
    parse: function (matchResult) {
      return parseDecimal(matchResult) - 1
    }
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.month(matchResult, {type: 'short'})
    }
  },

  // Month: January, February, ..., December
  'MMMM': {
    unit: 'month',
    match: function (string, options) {
      return options.locale.match.months(string, {type: 'long'}) ||
        options.locale.match.months(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.month(matchResult, {type: 'long'})

      if (parseResult == null) {
        parseResult = options.locale.match.month(matchResult, {type: 'short'})
      }

      return parseResult
    }
  },

  // ISO week: 1, 2, ..., 53
  'W': {
    unit: 'isoWeek',
    match: patterns.W,
    parse: parseDecimal
  },

  // Ordinal ISO week
  'Wo': {
    unit: 'isoWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'isoWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'isoWeek'})
    }
  },

  // ISO week: 01, 02, ..., 53
  'WW': {
    unit: 'isoWeek',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Day of week: 0, 1, ..., 6
  'd': {
    unit: 'dayOfWeek',
    match: patterns.singleDigit,
    parse: parseDecimal
  },

  // Ordinal day of week
  'do': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfWeek'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfWeek'})
    }
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.weekday(matchResult, {type: 'narrow'})
    }
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'short'})

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'})
      }

      return parseResult
    }
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': {
    unit: 'dayOfWeek',
    match: function (string, options) {
      return options.locale.match.weekdays(string, {type: 'long'}) ||
        options.locale.match.weekdays(string, {type: 'short'}) ||
        options.locale.match.weekdays(string, {type: 'narrow'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.weekday(matchResult, {type: 'long'})

      if (parseResult == null) {
        parseResult = options.locale.match.weekday(matchResult, {type: 'short'})

        if (parseResult == null) {
          parseResult = options.locale.match.weekday(matchResult, {type: 'narrow'})
        }
      }

      return parseResult
    }
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': {
    unit: 'dayOfISOWeek',
    match: patterns.singleDigit,
    parse: function (matchResult) {
      return parseDecimal(matchResult)
    }
  },

  // Day of month: 1, 2, ..., 31
  'D': {
    unit: 'dayOfMonth',
    match: patterns.D,
    parse: parseDecimal
  },

  // Ordinal day of month
  'Do': {
    unit: 'dayOfMonth',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfMonth'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfMonth'})
    }
  },

  // Day of month: 01, 02, ..., 31
  'DD': {
    unit: 'dayOfMonth',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Day of year: 1, 2, ..., 366
  'DDD': {
    unit: 'dayOfYear',
    match: patterns.DDD,
    parse: parseDecimal
  },

  // Ordinal day of year
  'DDDo': {
    unit: 'dayOfYear',
    match: function (string, options) {
      return options.locale.match.ordinalNumbers(string, {unit: 'dayOfYear'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.ordinalNumber(matchResult, {unit: 'dayOfYear'})
    }
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': {
    unit: 'dayOfYear',
    match: patterns.threeDigits,
    parse: parseDecimal
  },

  // AM, PM
  'A': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      return options.locale.match.timeOfDay(matchResult, {type: 'short'})
    }
  },

  // a.m., p.m.
  'aa': {
    unit: 'timeOfDay',
    match: function (string, options) {
      return options.locale.match.timesOfDay(string, {type: 'long'}) ||
        options.locale.match.timesOfDay(string, {type: 'short'})
    },
    parse: function (matchResult, options) {
      var parseResult = options.locale.match.timeOfDay(matchResult, {type: 'long'})

      if (parseResult == null) {
        parseResult = options.locale.match.timeOfDay(matchResult, {type: 'short'})
      }

      return parseResult
    }
  },

  // Hour: 0, 1, ... 23
  'H': {
    unit: 'hours',
    match: patterns.H,
    parse: parseDecimal
  },

  // Hour: 00, 01, ..., 23
  'HH': {
    unit: 'hours',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Hour: 1, 2, ..., 12
  'h': {
    unit: 'timeOfDayHours',
    match: patterns.M,
    parse: parseDecimal
  },

  // Hour: 01, 02, ..., 12
  'hh': {
    unit: 'timeOfDayHours',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Minute: 0, 1, ..., 59
  'm': {
    unit: 'minutes',
    match: patterns.m,
    parse: parseDecimal
  },

  // Minute: 00, 01, ..., 59
  'mm': {
    unit: 'minutes',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // Second: 0, 1, ..., 59
  's': {
    unit: 'seconds',
    match: patterns.m,
    parse: parseDecimal
  },

  // Second: 00, 01, ..., 59
  'ss': {
    unit: 'seconds',
    match: patterns.twoDigits,
    parse: parseDecimal
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': {
    unit: 'milliseconds',
    match: patterns.singleDigit,
    parse: function (matchResult) {
      return parseDecimal(matchResult) * 100
    }
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': {
    unit: 'milliseconds',
    match: patterns.twoDigits,
    parse: function (matchResult) {
      return parseDecimal(matchResult) * 10
    }
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': {
    unit: 'milliseconds',
    match: patterns.threeDigits,
    parse: parseDecimal
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': {
    unit: 'timezone',
    match: patterns.Z,
    parse: function (matchResult) {
      var sign = matchResult[1]
      var hours = parseInt(matchResult[2], 10)
      var minutes = parseInt(matchResult[3], 10)
      var absoluteOffset = hours * 60 + minutes
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': {
    unit: 'timezone',
    match: patterns.ZZ,
    parse: function (matchResult) {
      var sign = matchResult[1]
      var hours = parseInt(matchResult[2], 10)
      var minutes = parseInt(matchResult[3], 10)
      var absoluteOffset = hours * 60 + minutes
      return (sign === '+') ? absoluteOffset : -absoluteOffset
    }
  },

  // Seconds timestamp: 512969520
  'X': {
    unit: 'timestamp',
    match: patterns.anyDigits,
    parse: function (matchResult) {
      return parseDecimal(matchResult) * 1000
    }
  },

  // Milliseconds timestamp: 512969520900
  'x': {
    unit: 'timestamp',
    match: patterns.anyDigits,
    parse: parseDecimal
  }
}

parsers['a'] = parsers['A']

export default parsers
