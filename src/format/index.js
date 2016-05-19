var getDayOfYear = require('../get_day_of_year')
var getISOWeek = require('../get_iso_week')
var getISOYear = require('../get_iso_year')
var parse = require('../parse')

/**
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit                    | Token | Result examples                  |
 * |-------------------------|-------|----------------------------------|
 * | Month                   | M     | 1, 2, ..., 12                    |
 * |                         | Mo    | 1st, 2nd, ..., 12th              |
 * |                         | MM    | 01, 02, ..., 12                  |
 * |                         | MMM   | Jan, Feb, ..., Dec               |
 * |                         | MMMM  | January, February, ..., December |
 * | Quarter                 | Q     | 1, 2, 3, 4                       |
 * |                         | Qo    | 1st, 2nd, 3rd, 4th               |
 * | Day of month            | D     | 1, 2, ..., 31                    |
 * |                         | Do    | 1st, 2nd, ..., 31st              |
 * |                         | DD    | 01, 02, ..., 31                  |
 * | Day of year             | DDD   | 1, 2, ..., 366                   |
 * |                         | DDDo  | 1st, 2nd, ..., 366th             |
 * |                         | DDDD  | 001, 002, ..., 366               |
 * | Day of week             | d     | 0, 1, ..., 6                     |
 * |                         | do    | 0th, 1st, ..., 6th               |
 * |                         | dd    | Su, Mo, ..., Sa                  |
 * |                         | ddd   | Sun, Mon, ..., Sat               |
 * |                         | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week         | E     | 1, 2, ..., 7                     |
 * | ISO week                | W     | 1, 2, ..., 53                    |
 * |                         | Wo    | 1st, 2nd, ..., 53rd              |
 * |                         | WW    | 01, 02, ..., 53                  |
 * | Year                    | YY    | 00, 01, ..., 99                  |
 * |                         | YYYY  | 1900, 1901, ..., 2099            |
 * | ISO week-numbering year | GG    | 00, 01, ..., 99                  |
 * |                         | GGGG  | 1900, 1901, ..., 2099            |
 * | AM/PM                   | A     | AM, PM                           |
 * |                         | a     | am, pm                           |
 * |                         | aa    | a.m., p.m.                       |
 * | Hour                    | H     | 0, 1, ... 23                     |
 * |                         | HH    | 00, 01, ... 23                   |
 * |                         | h     | 1, 2, ..., 12                    |
 * |                         | hh    | 01, 02, ..., 12                  |
 * | Minute                  | m     | 0, 1, ..., 59                    |
 * |                         | mm    | 00, 01, ..., 59                  |
 * | Second                  | s     | 0, 1, ..., 59                    |
 * |                         | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second          | S     | 0, 1, ..., 9                     |
 * | 1/100 of second         | SS    | 00, 01, ..., 99                  |
 * | Millisecond             | SSS   | 000, 001, ..., 999               |
 * | Timezone                | Z     | -01:00, +00:00, ... +12:00       |
 * |                         | ZZ    | -0100, +0000, ..., +1200         |
 * | Seconds timestamp       | X     | 512969520                        |
 * | Milliseconds timestamp  | x     | 512969520900                     |
 *
 * @param {Date|String|Number} date - the original date
 * @param {String} [format='YYYY-MM-DDTHH:mm:ss.SSSZ'] - the string of tokens
 * @returns {String} the formatted date string
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * var result = format(
 *   new Date(2014, 1, 11),
 *   'MM/DD/YYYY'
 * )
 * //=> '02/11/2014'
 */
function format (dirtyDate, format) {
  var date = parse(dirtyDate)

  if (!format) {
    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  }

  var formatFunction = makeFormatFunction(format)
  return formatFunction(date)
}

var formats = {
  // Month: 1, 2, ..., 12
  'M': function () {
    return this.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function () {
    return addLeadingZeros(this.getMonth() + 1, 2)
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function () {
    return locale.monthsShort[this.getMonth()]
  },

  // Month: January, February, ..., December
  'MMMM': function () {
    return locale.months[this.getMonth()]
  },

  // Quarter: 1, 2, 3, 4
  'Q': function () {
    return Math.ceil((this.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function () {
    return this.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function () {
    return addLeadingZeros(this.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function () {
    return getDayOfYear(this)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function () {
    return addLeadingZeros(getDayOfYear(this), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function () {
    return this.getDay()
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function () {
    return locale.dayNamesMin[this.getDay()]
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function () {
    return locale.dayNamesShort[this.getDay()]
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function () {
    return locale.dayNames[this.getDay()]
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function () {
    return this.getDay() || 7
  },

  // ISO week: 1, 2, ..., 53
  'W': function () {
    return getISOWeek(this)
  },

  // ISO week: 01, 02, ..., 53
  'WW': function () {
    return addLeadingZeros(getISOWeek(this), 2)
  },

  // Year: 00, 01, ..., 99
  'YY': function () {
    return String(this.getFullYear()).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function () {
    return this.getFullYear()
  },

  // ISO week-numbering year: 00, 01, ..., 99
  'GG': function () {
    return String(getISOYear(this)).substr(2)
  },

  // ISO week-numbering year: 1900, 1901, ..., 2099
  'GGGG': function () {
    return getISOYear(this)
  },

  // AM, PM
  'A': function () {
    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM'
  },

  // am, pm
  'a': function () {
    return (this.getHours() / 12) >= 1 ? 'pm' : 'am'
  },

  // a.m., p.m.
  'aa': function () {
    return (this.getHours() / 12) >= 1 ? 'p.m.' : 'a.m.'
  },

  // Hour: 0, 1, ... 23
  'H': function () {
    return this.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function () {
    return addLeadingZeros(this.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function () {
    var hours = this.getHours()
    if (hours === 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function () {
    return addLeadingZeros(formats['h'].apply(this), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function () {
    return this.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function () {
    return addLeadingZeros(this.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function () {
    return this.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function () {
    return addLeadingZeros(this.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function () {
    return Math.floor(this.getMilliseconds() / 100)
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function () {
    return Math.floor(this.getMilliseconds() / 10)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function () {
    return this.getMilliseconds()
  },

  // Timezone: -01:00, +00:00, ... +12:00
  'Z': function () {
    return formatTimezone(this.getTimezoneOffset(), ':')
  },

  // Timezone: -0100, +0000, ... +1200
  'ZZ': function () {
    return formatTimezone(this.getTimezoneOffset())
  },

  // Seconds timestamp: 512969520
  'X': function () {
    return Math.floor(this.getTime() / 1000)
  },

  // Milliseconds timestamp: 512969520900
  'x': function () {
    return this.getTime()
  }
}

var ordinalFunctions = ['M', 'D', 'DDD', 'd', 'Q', 'W']
ordinalFunctions.forEach(function (functionName) {
  formats[functionName + 'o'] = function () {
    return locale.ordinal(formats[functionName].apply(this))
  }
})

var formattingTokens = Object.keys(formats).sort().reverse()
var formattingTokensRegexp = new RegExp(
  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
)

function makeFormatFunction (format) {
  var array = format.match(formattingTokensRegexp)
  var length = array.length

  for (var i = 0; i < length; i++) {
    if (formats[array[i]]) {
      array[i] = formats[array[i]]
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function (mom) {
    var output = ''
    for (var i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i].call(mom, format)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

function removeFormattingTokens (input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, '')
  }
  return input.replace(/\\/g, '')
}

function addLeadingZeros (number, targetLength) {
  var output = String(Math.abs(number))

  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

function formatTimezone (offset, delimeter) {
  delimeter = delimeter || ''
  var sign = offset > 0 ? '-' : '+'
  var absOffset = Math.abs(offset)
  var hours = Math.floor(absOffset / 60)
  var minutes = absOffset % 60
  return sign + addLeadingZeros(hours, 2) + delimeter + addLeadingZeros(minutes, 2)
}

var locale = {
  ordinal: function (number) {
    if (number > 20 || number < 10) {
      switch (number % 10) {
        case 1:
          return number + 'st'
        case 2:
          return number + 'nd'
        case 3:
          return number + 'rd'
      }
    }
    return number + 'th'
  },
  months: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
  dayNamesMin: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
}

module.exports = format
