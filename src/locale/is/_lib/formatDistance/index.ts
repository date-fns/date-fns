import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type PluralForms = 'singular' | 'plural'

// See: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms
const pluralForm = (n: number): PluralForms =>
  n % 10 !== 1 || n % 100 === 11 ? 'plural' : 'singular'

type FormatDistanceTokenValue = string | Record<PluralForms, string>

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: {
    singular: 'minna en {{count}} sekúnda',
    plural: 'minna en {{count}} sekúndur',
  },

  xSeconds: {
    singular: '{{count}} sekúnda',
    plural: '{{count}} sekúndur',
  },

  halfAMinute: 'hálf mínúta',

  lessThanXMinutes: {
    singular: 'minna en {{count}} mínúta',
    plural: 'minna en {{count}} mínútur',
  },

  xMinutes: {
    singular: '{{count}} mínúta',
    plural: '{{count}} mínútur',
  },

  aboutXHours: {
    singular: 'u.þ.b. {{count}} klukkustund',
    plural: 'u.þ.b. {{count}} klukkustundir',
  },

  xHours: {
    singular: '{{count}} klukkustund',
    plural: '{{count}} klukkustundir',
  },

  xDays: {
    singular: '{{count}} dagur',
    plural: '{{count}} dagar',
  },

  aboutXWeeks: {
    singular: 'u.þ.b. {{count}} vika',
    plural: 'u.þ.b. {{count}} vikur',
  },

  xWeeks: {
    singular: '{{count}} vika',
    plural: '{{count}} vikur',
  },

  aboutXMonths: {
    singular: 'u.þ.b. {{count}} mánuður',
    plural: 'u.þ.b. {{count}} mánuðir',
  },

  xMonths: {
    singular: '{{count}} mánuður',
    plural: '{{count}} mánuðir',
  },

  aboutXYears: {
    singular: 'u.þ.b. {{count}} ár',
    plural: 'u.þ.b. {{count}} ár',
  },

  xYears: {
    singular: '{{count}} ár',
    plural: '{{count}} ár',
  },

  overXYears: {
    singular: 'meira en {{count}} ár',
    plural: 'meira en {{count}} ár',
  },

  almostXYears: {
    singular: 'næstum {{count}} ár',
    plural: 'næstum {{count}} ár',
  },
}

const formatDistance: FormatDistanceFn = (token, count, options) => {
  let result

  const tokenValue = formatDistanceLocale[token]
  if (typeof tokenValue === 'string') {
    result = tokenValue
  } else {
    result = tokenValue[pluralForm(count)].replace(
      '{{count}}',
      count.toString()
    )
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return 'í ' + result
    } else {
      return result + ' síðan'
    }
  }

  return result
}

export default formatDistance
