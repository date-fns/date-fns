import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type PluralForms = 's' | 'p' // signular | plural
type Declension = 'nom' | 'acc' | 'dat' // nafnfall | þolfall | þágufall

// See: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms
const pluralForm = (n: number): PluralForms =>
  n % 10 !== 1 || n % 100 === 11 ? 'p' : 's'

type TokenValue = string | Record<PluralForms, string>
type DeclinedTokenValue = { nom: TokenValue } & Partial<
  Record<Declension, TokenValue>
>

const formatDistanceLocale: FormatDistanceLocale<
  TokenValue | DeclinedTokenValue
> = {
  lessThanXSeconds: {
    nom: {
      s: 'minna en {{count}} sekúnda',
      p: 'minna en {{count}} sekúndur',
    },
    acc: {
      s: 'minna en {{count}} sekúndu',
      p: 'minna en {{count}} sekúndur',
    },
    dat: {
      s: 'minna en {{count}} sekúndu',
      p: 'minna en {{count}} sekúndum',
    },
  },

  xSeconds: {
    nom: {
      s: '{{count}} sekúnda',
      p: '{{count}} sekúndur',
    },
    acc: {
      s: '{{count}} sekúndu',
      p: '{{count}} sekúndur',
    },
    dat: {
      s: '{{count}} sekúndu',
      p: '{{count}} sekúndum',
    },
  },

  halfAMinute: {
    nom: 'hálf mínúta',
    acc: 'hálfa mínútu',
    dat: 'hálfri mínútu',
  },

  lessThanXMinutes: {
    nom: {
      s: 'minna en {{count}} mínúta',
      p: 'minna en {{count}} mínútur',
    },
    acc: {
      s: 'minna en {{count}} mínútu',
      p: 'minna en {{count}} mínútur',
    },
    dat: {
      s: 'minna en {{count}} mínútu',
      p: 'minna en {{count}} mínútum',
    },
  },

  xMinutes: {
    nom: {
      s: '{{count}} mínúta',
      p: '{{count}} mínútur',
    },
    acc: {
      s: '{{count}} mínútu',
      p: '{{count}} mínútur',
    },
    dat: {
      s: '{{count}} mínútu',
      p: '{{count}} mínútum',
    },
  },

  aboutXHours: {
    nom: {
      s: 'u.þ.b. {{count}} klukkustund',
      p: 'u.þ.b. {{count}} klukkustundir',
    },
    // acc: (same as nom)
    dat: {
      s: 'u.þ.b. {{count}} klukkustund',
      p: 'u.þ.b. {{count}} klukkustundum',
    },
  },

  xHours: {
    nom: {
      s: '{{count}} klukkustund',
      p: '{{count}} klukkustundir',
    },
    // acc: (same as nom)
    dat: {
      s: '{{count}} klukkustund',
      p: '{{count}} klukkustundum',
    },
  },

  xDays: {
    nom: {
      s: '{{count}} dagur',
      p: '{{count}} dagar',
    },
    acc: {
      s: '{{count}} dag',
      p: '{{count}} daga',
    },
    dat: {
      s: '{{count}} degi',
      p: '{{count}} dögum',
    },
  },

  aboutXWeeks: {
    nom: {
      s: 'u.þ.b. {{count}} vika',
      p: 'u.þ.b. {{count}} vikur',
    },
    acc: {
      s: 'u.þ.b. {{count}} viku',
      p: 'u.þ.b. {{count}} vikur',
    },
    dat: {
      s: 'u.þ.b. {{count}} viku',
      p: 'u.þ.b. {{count}} vikum',
    },
  },

  xWeeks: {
    nom: {
      s: '{{count}} vika',
      p: '{{count}} vikur',
    },
    acc: {
      s: '{{count}} viku',
      p: '{{count}} vikur',
    },
    dat: {
      s: '{{count}} viku',
      p: '{{count}} vikum',
    },
  },

  aboutXMonths: {
    nom: {
      s: 'u.þ.b. {{count}} mánuður',
      p: 'u.þ.b. {{count}} mánuðir',
    },
    acc: {
      s: 'u.þ.b. {{count}} mánuð',
      p: 'u.þ.b. {{count}} mánuði',
    },
    dat: {
      s: 'u.þ.b. {{count}} mánuði',
      p: 'u.þ.b. {{count}} mánuðum',
    },
  },

  xMonths: {
    nom: {
      s: '{{count}} mánuður',
      p: '{{count}} mánuðir',
    },
    acc: {
      s: '{{count}} mánuð',
      p: '{{count}} mánuði',
    },
    dat: {
      s: '{{count}} mánuði',
      p: '{{count}} mánuðum',
    },
  },

  aboutXYears: {
    nom: 'u.þ.b. {{count}} ár',
    // acc: (same as nom)
    dat: {
      s: 'u.þ.b. {{count}} ári',
      p: 'u.þ.b. {{count}} árum',
    },
  },
  xYears: {
    nom: '{{count}} ár',
    // acc: (same as nom)
    dat: {
      s: '{{count}} ári',
      p: '{{count}} árum',
    },
  },
  overXYears: {
    nom: 'meira en {{count}} ár',
    // acc: (same as nom)
    dat: {
      s: 'meira en {{count}} ári',
      p: 'meira en {{count}} árum',
    },
  },
  almostXYears: {
    nom: 'næstum {{count}} ár',
    // acc: (same as nom)
    dat: {
      s: 'næstum {{count}} ári',
      p: 'næstum {{count}} árum',
    },
  },
}

const present = { decl: 'nom', prefix: '' } as const
const future = { decl: 'acc', prefix: 'eftir ' } as const
const past = { decl: 'dat', prefix: 'fyrir ' } as const

const formatDistance: FormatDistanceFn = (token, count, options = {}) => {
  const { decl, prefix } = !options.addSuffix
    ? present
    : (options.comparison as number) > 0
    ? future
    : past

  const tokenData = formatDistanceLocale[token]

  const tokenValue =
    typeof tokenData === 'string' || !('nom' in tokenData)
      ? tokenData
      : tokenData[decl] || tokenData.nom

  let text =
    typeof tokenValue === 'string' ? tokenValue : tokenValue[pluralForm(count)]

  return prefix + text.replace('{{count}}', count.toString())
}

export default formatDistance
