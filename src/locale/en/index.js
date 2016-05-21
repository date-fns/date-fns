var distanceInWordsLocale = {
  lessThanXSeconds: {
    one: 'less than a second',
    other: 'less than ${count} seconds'
  },

  halfAMinute: 'half a minute',

  lessThanXMinutes: {
    one: 'less than a minute',
    other: 'less than ${count} minutes'
  },

  xMinutes: {
    one: '1 minute',
    other: '${count} minutes'
  },

  aboutXHours: {
    one: 'about 1 hour',
    other: 'about ${count} hours'
  },

  xDays: {
    one: '1 day',
    other: '${count} days'
  },

  aboutXMonths: {
    one: 'about 1 month',
    other: 'about ${count} months'
  },

  xMonths: {
    one: '1 month',
    other: '${count} months'
  },

  aboutXYears: {
    one: 'about 1 year',
    other: 'about ${count} years'
  },

  overXYears: {
    one: 'over 1 year',
    other: 'over ${count} years'
  },

  almostXYears: {
    one: 'almost 1 year',
    other: 'almost ${count} years'
  }
}

var formatLocale = {
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

var enLocale = {
  distanceInWords: function (token, count) {
    if (count === undefined) {
      return distanceInWordsLocale[token]
    } else if (count === 1) {
      return distanceInWordsLocale[token].one
    } else {
      return distanceInWordsLocale[token].other.replace('${count}', count)
    }
  },

  format: {
    // Month: Jan, Feb, ..., Dec
    'MMM': function (date) {
      return formatLocale.monthsShort[date.getMonth()]
    },

    // Month: January, February, ..., December
    'MMMM': function (date) {
      return formatLocale.months[date.getMonth()]
    },

    // Day of week: Su, Mo, ..., Sa
    'dd': function (date) {
      return formatLocale.dayNamesMin[date.getDay()]
    },

    // Day of week: Sun, Mon, ..., Sat
    'ddd': function (date) {
      return formatLocale.dayNamesShort[date.getDay()]
    },

    // Day of week: Sunday, Monday, ..., Saturday
    'dddd': function (date) {
      return formatLocale.dayNames[date.getDay()]
    }
  }
}

var ordinalFunctions = ['M', 'D', 'DDD', 'd', 'Q', 'W']
ordinalFunctions.forEach(function (functionName) {
  enLocale.format[functionName + 'o'] = function (date, formats) {
    return formatLocale.ordinal(formats[functionName](date))
  }
})

module.exports = enLocale
