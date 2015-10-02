var getDayOfYear = require('./get_day_of_year')
var parse = require('./parse')

var NUMBER_OF_MS_IN_DAY = 864e5

/**
 * Return the formatted date string in the given format.
 *
 * Accepted tokens:
 * | Unit            | Token | Result                           |
 * |-----------------|-------|----------------------------------|
 * | Month           | M     | 1, 2, ..., 12                    |
 * |                 | Mo    | 1st, 2nd, ..., 12th              |
 * |                 | MM    | 01, 02, ..., 12                  |
 * |                 | MMM   | Jan, Feb, ..., Dec               |
 * |                 | MMMM  | January, February, ..., December |
 * | Quarter         | Q     | 1, 2, 3, 4                       |
 * | Day of month    | D     | 1, 2, ..., 31                    |
 * |                 | Do    | 1st, 2nd, ..., 31st              |
 * |                 | DD    | 01, 02, ..., 31                  |
 * | Day of year     | DDD   | 1, 2, ..., 366                   |
 * |                 | DDDo  | 1st, 2nd, ..., 366th             |
 * |                 | DDDD  | 001, 002, ..., 366               |
 * | Day of week     | d     | 0, 1, ..., 6                     |
 * |                 | do    | 0th, 1st, ..., 6th               |
 * |                 | dd    | Su, Mo, ..., Sa                  |
 * |                 | ddd   | Sun, Mon, ..., Sat               |
 * |                 | dddd  | Sunday, Monday, ..., Saturday    |
 * | Day of ISO week | E     | 1, 2, ..., 7                     |
 * | Year            | YY    | 00, 01, ..., 99                  |
 * |                 | YYYY  | 1900, 1901, ..., 2099            |
 * | AM/PM           | A     | AM, PM                           |
 * |                 | a     | am, pm                           |
 * |                 | aa    | a.m., p.m.                       |
 * | Hour            | H     | 0, 1, ... 23                     |
 * |                 | HH    | 00, 01, ... 23                   |
 * |                 | h     | 1, 2, ..., 12                    |
 * |                 | hh    | 01, 02, ..., 12                  |
 * | Minute          | m     | 0, 1, ..., 59                    |
 * |                 | mm    | 00, 01, ..., 59                  |
 * | Second          | s     | 0, 1, ..., 59                    |
 * |                 | ss    | 00, 01, ..., 59                  |
 * | 1/10 of second  | S     | 0, 1, ..., 9                     |
 * | 1/100 of second | SS    | 00, 01, ..., 99                  |
 * | Millisecond     | SSS   | 000, 001, ..., 999               |
 *
 * @param {Date|String|Number} dirtyDate - the original date
 * @param {String} format - the string of tokens
 * @returns {String} formatted date string
 */
var format = function(dirtyDate, format) {
  var date = parse(dirtyDate)

  if (!format) {
    format = 'YYYY-MM-DDTHH:mm:ss.SSSZ'
  }

  var formatFunction = makeFormatFunction(format)
  return formatFunction(date)
}

var formats = {
  // Month: 1, 2, ..., 12
  'M': function() {
    return this.getMonth() + 1
  },

  // Month: 01, 02, ..., 12
  'MM': function() {
    return leftZeroFill(this.getMonth() + 1, 2)
  },

  // Month: Jan, Feb, ..., Dec
  'MMM': function() {
    return locale.monthsShort[this.getMonth()]
  },

  // Month: January, February, ..., December
  'MMMM': function() {
    return locale.months[this.getMonth()]
  },

  // Quarter: 1, 2, 3, 4
  'Q': function() {
    return Math.ceil((this.getMonth() + 1) / 3)
  },

  // Day of month: 1, 2, ..., 31
  'D': function() {
    return this.getDate()
  },

  // Day of month: 01, 02, ..., 31
  'DD': function() {
    return leftZeroFill(this.getDate(), 2)
  },

  // Day of year: 1, 2, ..., 366
  'DDD': function() {
    return getDayOfYear(this)
  },

  // Day of year: 001, 002, ..., 366
  'DDDD': function() {
    return leftZeroFill(formats['DDD'].apply(this), 3)
  },

  // Day of week: 0, 1, ..., 6
  'd': function() {
    return this.getDay()
  },

  // Day of week: Su, Mo, ..., Sa
  'dd': function() {
    return locale.dayNamesMin[this.getDay()]
  },

  // Day of week: Sun, Mon, ..., Sat
  'ddd': function() {
    return locale.dayNamesShort[this.getDay()]
  },

  // Day of week: Sunday, Monday, ..., Saturday
  'dddd': function() {
    return locale.dayNames[this.getDay()]
  },

  // Day of ISO week: 1, 2, ..., 7
  'E': function() {
    return this.getDay() || 7
  },

  // Year: 00, 01, ..., 99
  'YY': function() {
    return String(this.getFullYear()).substr(2)
  },

  // Year: 1900, 1901, ..., 2099
  'YYYY': function() {
    return this.getFullYear()
  },

  // AM, PM
  'A': function() {
    return (this.getHours() / 12) >= 1 ? 'PM' : 'AM'
  },

  // am, pm
  'a': function() {
    return (this.getHours() / 12) >= 1 ? 'pm' : 'am'
  },

  // a.m., p.m.
  'aa': function() {
    return (this.getHours() / 12) >= 1 ? 'p.m.' : 'a.m.'
  },

  // Hour: 0, 1, ... 23
  'H': function() {
    return this.getHours()
  },

  // Hour: 00, 01, ..., 23
  'HH': function() {
    return leftZeroFill(this.getHours(), 2)
  },

  // Hour: 1, 2, ..., 12
  'h': function() {
    var hours = this.getHours()
    if (hours == 0) {
      return 12
    } else if (hours > 12) {
      return hours % 12
    } else {
      return hours
    }
  },

  // Hour: 01, 02, ..., 12
  'hh': function() {
    return leftZeroFill(formats['h'].apply(this), 2)
  },

  // Minute: 0, 1, ..., 59
  'm': function() {
    return this.getMinutes()
  },

  // Minute: 00, 01, ..., 59
  'mm': function() {
    return leftZeroFill(this.getMinutes(), 2)
  },

  // Second: 0, 1, ..., 59
  's': function() {
    return this.getSeconds()
  },

  // Second: 00, 01, ..., 59
  'ss': function() {
    return leftZeroFill(this.getSeconds(), 2)
  },

  // 1/10 of second: 0, 1, ..., 9
  'S': function() {
    return this.getMilliseconds()
  },

  // 1/100 of second: 00, 01, ..., 99
  'SS': function() {
    return leftZeroFill(this.getMilliseconds(), 2)
  },

  // Millisecond: 000, 001, ..., 999
  'SSS': function() {
    return leftZeroFill(this.getMilliseconds(), 3)
  }
}

var ordinalFunctions = ['M', 'D', 'DDD', 'd']
ordinalFunctions.forEach(function(functionName) {
  formats[functionName + 'o'] = function() {
    return locale.ordinal(formats[functionName].apply(this))
  }
})

var formattingTokens = Object.keys(formats).sort().reverse()
var formattingTokensRegexp = new RegExp(
  '(\\[[^\\[]*\\])|(\\\\)?' + '(' + formattingTokens.join('|') + '|.)', 'g'
)

var makeFormatFunction = function(format) {
  var array = format.match(formattingTokensRegexp), i, length

  for (i = 0, length = array.length; i < length; i++) {
    if (formats[array[i]]) {
      array[i] = formats[array[i]]
    } else {
      array[i] = removeFormattingTokens(array[i])
    }
  }

  return function(mom) {
    var output = ''
    for (i = 0; i < length; i++) {
      if (array[i] instanceof Function) {
        output += array[i].call(mom, format)
      } else {
        output += array[i]
      }
    }
    return output
  }
}

var removeFormattingTokens = function(input) {
  if (input.match(/\[[\s\S]/)) {
    return input.replace(/^\[|\]$/g, '')
  }
  return input.replace(/\\/g, '')
}

var leftZeroFill = function(number, targetLength) {
  var output = String(Math.abs(number))

  while (output.length < targetLength) {
    output = '0' + output
  }
  return output
}

var locale = {
  ordinal: function(number) {
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

