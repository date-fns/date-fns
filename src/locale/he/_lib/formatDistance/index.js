var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'פחות משנייה',
    two: 'פחות משתי שניות',
    other: 'פחות מ־{{count}} שניות'
  },

  xSeconds: {
    one: 'שנייה',
    two: 'שתי שניות',
    other: '{{count}} שניות'
  },

  halfAMinute: 'חצי דקה',

  lessThanXMinutes: {
    one: 'פחות מדקה',
    two: 'פחות משתי דקות',
    other: 'פחות מ־{{count}} דקות'
  },

  xMinutes: {
    one: 'דקה',
    two: 'שתי דקות',
    other: '{{count}} דקות'
  },

  aboutXHours: {
    one: 'בערך שעה',
    two: 'בערך שעתיים',
    other: 'בערך {{count}} שעות'
  },

  xHours: {
    one: 'שעה',
    two: 'שעתיים',
    other: '{{count}} שעות'
  },

  xDays: {
    one: 'יום',
    two: 'יומיים',
    other: '{{count}} ימים'
  },

  aboutXMonths: {
    one: 'בערך חודש',
    two: 'בערך חודשיים',
    other: 'בערך {{count}} חודשים'
  },

  xMonths: {
    one: 'חודש',
    two: 'חודשיים',
    other: '{{count}} חודשים'
  },

  aboutXYears: {
    one: 'בערך שנה',
    two: 'בערך שנתיים',
    other: 'בערך {{count}} שנים'
  },

  xYears: {
    one: 'שנה',
    two: 'שנתיים',
    other: '{{count}} שנים'
  },

  overXYears: {
    one: 'יותר משנה',
    two: 'יותר משנתיים',
    other: 'יותר מ־{{count}} שנים'
  },

  almostXYears: {
    one: 'כמעט שנה',
    two: 'כמעט שנתיים',
    other: 'כמעט {{count}} שנים'
  }
}

export default function formatDistance(token, count, options) {
  options = options || {}

  // Return word instead of `in one day` or `one day ago`
  if (token === 'xDays' && options.addSuffix && count <= 2) {
    var past = {
      1: 'אתמול',
      2: 'שלשום'
    }
    var future = {
      1: 'מחר',
      2: 'מחרתיים'
    }
    return options.comparison > 0 ? future[count] : past[count]
  }

  var result
  if (typeof formatDistanceLocale[token] === 'string') {
    result = formatDistanceLocale[token]
  } else if (count === 1) {
    result = formatDistanceLocale[token].one
  } else if (count === 2) {
    result = formatDistanceLocale[token].two
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
