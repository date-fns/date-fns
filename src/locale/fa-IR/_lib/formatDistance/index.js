import utils from '../utils.js'

var formatDistanceLocale = {
  lessThanXSeconds: 'کمتر از {{count}} ثانیه',

  xSeconds: '{{count}} ثانیه',

  halfAMinute: 'نیم دقیقه',

  lessThanXMinutes: 'کمتر از {{count}} دقیقه',

  xMinutes: '{{count}} دقیقه',

  aboutXHours: 'نزدیک به {{count}} ساعت',

  xHours: '{{count}} ساعت',

  xDays: '{{count}} روز',

  aboutXMonths: 'نزدیک به {{count}} ماه',

  xMonths: '{{count}} ماه',

  aboutXYears: 'نزدیک به {{count}} سال',

  xYears: '{{count}} سال',

  overXYears: 'بیش از {{count}} سال',

  almostXYears: 'نزدیک به {{count}} سال'
}

export default function formatDistance(token, count, options) {
  options = options || {}

  var result
  result = formatDistanceLocale[token].replace(
    '{{count}}',
    Number.isInteger(count) ? utils.eng2per(count) : ''
  )

  if (options.addSuffix) {
    if (options.comparison > 0) {
      return 'در ' + result
    } else {
      return result + ' پیش'
    }
  }

  return result
}
