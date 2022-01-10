import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type FormatDistanceTokenValue =
  | string
  | {
      one: string
      other: string
    }

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    one: 'mindre än en sekund',
    other: 'mindre än {{count}} sekunder',
  },

  xSeconds: {
    one: 'en sekund',
    other: '{{count}} sekunder',
  },

  halfAMinute: 'en halv minut',

  lessThanXMinutes: {
    one: 'mindre än en minut',
    other: 'mindre än {{count}} minuter',
  },

  xMinutes: {
    one: 'en minut',
    other: '{{count}} minuter',
  },

  aboutXHours: {
    one: 'ungefär en timme',
    other: 'ungefär {{count}} timmar',
  },

  xHours: {
    one: 'en timme',
    other: '{{count}} timmar',
  },

  xDays: {
    one: 'en dag',
    other: '{{count}} dagar',
  },

  aboutXWeeks: {
    one: 'ungefär en vecka',
    other: 'ungefär {{count}} vecka',
  },

  xWeeks: {
    one: 'en vecka',
    other: '{{count}} vecka',
  },

  aboutXMonths: {
    one: 'ungefär en månad',
    other: 'ungefär {{count}} månader',
  },

  xMonths: {
    one: 'en månad',
    other: '{{count}} månader',
  },

  aboutXYears: {
    one: 'ungefär ett år',
    other: 'ungefär {{count}} år',
  },

  xYears: {
    one: 'ett år',
    other: '{{count}} år',
  },

  overXYears: {
    one: 'över ett år',
    other: 'över {{count}} år',
  },

  almostXYears: {
    one: 'nästan ett år',
    other: 'nästan {{count}} år',
  },
}

const wordMapping = [
  'noll',
  'en',
  'två',
  'tre',
  'fyra',
  'fem',
  'sex',
  'sju',
  'åtta',
  'nio',
  'tio',
  'elva',
  'tolv',
]

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result

  const tokenValue = formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else if (count === 1) {
    result = tokenValue.one
  } else {
    if (options && (options as any).onlyNumeric) {
      result = tokenValue.other.replace('{{count}}', String(count))
    } else {
      result = tokenValue.other.replace(
        '{{count}}',
        count < 13 ? wordMapping[count] : String(count)
      )
    }
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'om ' + result
    } else {
      return result + ' sedan'
    }
  }

  return result
}

export default formatDistance
