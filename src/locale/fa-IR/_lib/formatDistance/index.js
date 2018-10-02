var formatDistanceLocale = {
  lessThanXSeconds: {
    one: 'کمتر از یک ثانیه',
    other: 'کم تر از  {{count}} ثانیه'
  },

  xSeconds: {
    one: '۱ ثانیه',
    other: '{{count}} ثانیه'
  },

  halfAMinute: 'نیم دقیقه',

  lessThanXMinutes: {
    one: 'کمتر از یک دقیقه',
    other: 'کمتر از {{count}} دقیقه'
  },

  xMinutes: {
    one: '۱ دقیقه',
    other: '{{count}} دقیقه'
  },

  aboutXHours: {
    one: 'حدود ۱ ساعت',
    other: 'حدود {{count}} ساعت'
  },

  xHours: {
    one: '۱ ساعت',
    other: '{{count}} ساعت'
  },

  xDays: {
    one: '۱ روز',
    other: '{{count}} روز'
  },

  aboutXMonths: {
    one: 'حدود یک ماه',
    other: 'حدود {{count}} یک ماه'
  },

  xMonths: {
    one: '۱ ماه',
    other: '{{count}} ماه'
  },

  aboutXYears: {
    one: 'حدود یک سال',
    other: 'حدود {{count}} سال'
  },

  xYears: {
    one: 'یک سال',
    other: '{{count}} سال'
  },

  overXYears: {
    one: 'بیشتر از ۱ سال',
    other: 'بیشتر از {{count}} سال'
  },

  almostXYears: {
    one: 'تقریبا ۱ سال',
    other: 'تقریبا {{count}} سال'
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
      return 'در ' + result
    } else {
      return result + ' قبل'
    }
  }

  return result
}
