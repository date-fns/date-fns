var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'פחות משניה',
    other: 'פחות מ־{{count}} שניות'
  },

  xSeconds: {
    one: 'שניה 1',
    other: '{{count}} שניות'
  },

  halfAMinute: 'חצי דקה',

  lessThanXMinutes: {
    one: 'פחות מדקה',
    other: 'פחות מ־{{count}} דקות'
  },

  xMinutes: {
    one: 'דקה 1',
    other: '{{count}} דקות'
  },

  aboutXHours: {
    one: 'בערך שעה 1',
    other: 'בערך {{count}} שעות'
  },

  xHours: {
    one: 'שעה 1',
    other: '{{count}} שעות'
  },

  xDays: {
    one: 'יום 1',
    other: '{{count}} ימים'
  },

  aboutXMonths: {
    one: 'בערך חודש 1',
    other: 'בערך {{count}} חודשים'
  },

  xMonths: {
    one: 'חודש 1',
    other: '{{count}} חודשים'
  },

  aboutXYears: {
    one: 'בערך שנה 1',
    other: 'בערך {{count}} שנים'
  },

  xYears: {
    one: 'שנה 1',
    other: '{{count}} שנים'
  },

  overXYears: {
    one: 'מעל שנה 1',
    other: 'מעל {{count}} שנים'
  },

  almostXYears: {
    one: 'כמעט שנה 1',
    other: 'כמעט {{count}} שנים'
  }
}

export default function formatDistance (token, count, options) {
  options = options || {}

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else {
    result = formatDistanceLocale[token].other.replace('{{count}}', count)
  }

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'בעוד ' + result
    } else {
      return 'לפני ' + result
    }
  }

  return result
}
