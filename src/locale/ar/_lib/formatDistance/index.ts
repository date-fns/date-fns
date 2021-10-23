import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      two: string
      threeToTen: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'أقل من ثانية واحدة',
    two: '', // TODO
    threeToTen: '', // TODO
    other: 'أقل من {{count}} ثواني',
  },

  xSeconds: {
    one: 'ثانية واحدة',
    two: '', // TODO
    threeToTen: '', // TODO,
    other: '{{count}} ثواني',
  },

  halfAMinute: 'نصف دقيقة',

  lessThanXMinutes: {
    one: 'أقل من دقيقة',
    two: '', // TODO
    threeToTen: '', // TODO,
    other: 'أقل من {{count}} دقيقة',
  },

  xMinutes: {
    one: 'دقيقة واحدة',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} دقائق',
  },

  aboutXHours: {
    one: 'ساعة واحدة تقريباً',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} ساعات تقريباً',
  },

  xHours: {
    one: 'ساعة واحدة',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} ساعات',
  },

  xDays: {
    one: 'يوم واحد',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أيام',
  },

  aboutXWeeks: {
    one: '', // TODO
    two: '', // TODO
    threeToTen: '', // TODO
    other: '', // TODO
  },

  xWeeks: {
    one: '', // TODO
    two: '', // TODO
    threeToTen: '', // TODO
    other: '', // TODO
  },

  aboutXMonths: {
    one: 'شهر واحد تقريباً',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أشهر تقريباً',
  },

  xMonths: {
    one: 'شهر واحد',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أشهر',
  },

  aboutXYears: {
    one: 'عام واحد تقريباً',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أعوام تقريباً',
  },

  xYears: {
    one: 'عام واحد',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أعوام',
  },

  overXYears: {
    one: 'أكثر من عام',
    two: '', // TODO
    threeToTen: '', // TODO
    other: 'أكثر من {{count}} أعوام',
  },

  almostXYears: {
    one: 'عام واحد تقريباً',
    two: '', // TODO
    threeToTen: '', // TODO
    other: '{{count}} أعوام تقريباً',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  const usageGroup = formatDistanceLocale[token]
  let result
  if (typeof usageGroup === 'string') {
    result = usageGroup
  } else if (count === 1) {
    result = usageGroup.one
  } else if (count === 2) {
    result = usageGroup.two
  } else if (count <= 10) {
    result = usageGroup.threeToTen.replace('{{count}}', String(count))
  } else {
    result = usageGroup.other.replace('{{count}}', String(count))
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'في خلال ' + result
    } else {
      return 'منذ ' + result
    }
  }

  return result
}

export default formatDistance
