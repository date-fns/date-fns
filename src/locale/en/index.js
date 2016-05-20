var locale = {
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

module.exports = {
  distanceInWords: function (token, count) {
    if (count === undefined) {
      return locale[token]
    } else if (count === 1) {
      return locale[token].one
    } else {
      return locale[token].other.replace('${count}', count)
    }
  }
}
