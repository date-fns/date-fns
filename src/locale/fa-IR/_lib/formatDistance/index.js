var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'کمتر از یک ثانیه',
    other: 'کمتر از {{count}} ثانیه'
  },

  xSeconds: {
    one: '1 ثانیه',
    other: '{{count}} ثانیه'
  },

  halfAMinute: 'نیم دقیقه',

  lessThanXMinutes: {
    one: 'کمتر از یک دقیقه',
    other: 'کمتر از {{count}} دقیقه'
  },

  xMinutes: {
    one: '1 دقیقه',
    other: '{{count}} دقیقه'
  },

  aboutXHours: {
    one: 'حدود 1 ساعت',
    other: 'حدود {{count}} ساعت'
  },

  xHours: {
    one: '1 ساعت',
    other: '{{count}} ساعت'
  },

  xDays: {
    one: '1 روز',
    other: '{{count}} روز'
  },

  aboutXMonths: {
    one: 'حدود 1 ماه',
    other: 'حدود {{count}} ماه'
  },

  xMonths: {
    one: '1 ماه',
    other: '{{count}} ماه'
  },

  aboutXYears: {
    one: 'حدود 1 سال',
    other: 'حدود {{count}} سال'
  },

  xYears: {
    one: '1 سال',
    other: '{{count}} سال'
  },

  overXYears: {
    one: 'بیشتر از 1 سال',
    other: 'بیشتر از {{count}} سال'
  },

  almostXYears: {
    one: 'نزدیک 1 سال',
    other: 'نزدیک {{count}} سال'
  }
}

export default function formatDistance(token, count, options) {
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
      return 'در ' + result
    } else {
      return result + ' قبل'
    }
  }

  return result
}
