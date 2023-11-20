import type { FormatDistanceFn, FormatDistanceLocale } from '../../../types'

type PluralForm = 's' | 'p' // signular | plural
type Declension = 'nom' | 'acc' | 'dat' // nafnfall | þolfall | þágufall

// See: http://docs.translatehouse.org/projects/localization-guide/en/latest/l10n/pluralforms.html?id=l10n/pluralforms
const pluralForm = (n: number): PluralForm =>
  n % 10 !== 1 || n % 100 === 11 ? 'p' : 's'

type TokenValue = string | Record<PluralForm, string>
type DeclinedValue = { stem: string } & Record<Declension, TokenValue>
type IcelandicLocaleObject = FormatDistanceLocale<DeclinedValue>

const formatDistanceLocale: IcelandicLocaleObject = {
  lessThanXSeconds: {
    stem: 'minna en {{count}} sekúnd',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  xSeconds: {
    stem: '{{count}} sekúnd',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  halfAMinute: {
    stem: '',
    nom: 'hálf mínúta',
    acc: 'hálfa mínútu',
    dat: 'hálfri mínútu',
  },

  lessThanXMinutes: {
    stem: 'minna en {{count}} mínút',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  xMinutes: {
    stem: '{{count}} mínút',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  aboutXHours: {
    stem: 'u.þ.b. {{count}} klukkustund',
    nom: { s: '', p: 'ir' },
    acc: { s: '', p: 'ir' },
    dat: { s: '', p: 'um' },
  },

  xHours: {
    stem: '{{count}} klukkustund',
    nom: { s: '', p: 'ir' },
    acc: { s: '', p: 'ir' },
    dat: { s: '', p: 'um' },
  },

  xDays: {
    stem: '{{count}} ',
    nom: { s: 'dagur', p: 'dagar' },
    acc: { s: 'dag', p: 'daga' },
    dat: { s: 'degi', p: 'dögum' },
  },

  aboutXWeeks: {
    stem: 'u.þ.b. {{count}} vik',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  xWeeks: {
    stem: '{{count}} vik',
    nom: { s: 'a', p: 'ur' },
    acc: { s: 'u', p: 'ur' },
    dat: { s: 'u', p: 'um' },
  },

  aboutXMonths: {
    stem: 'u.þ.b. {{count}} mánuð',
    nom: { s: 'ur', p: 'ir' },
    acc: { s: '', p: 'i' },
    dat: { s: 'i', p: 'um' },
  },

  xMonths: {
    stem: '{{count}} mánuð',
    nom: { s: 'ur', p: 'ir' },
    acc: { s: '', p: 'i' },
    dat: { s: 'i', p: 'um' },
  },

  aboutXYears: {
    stem: 'u.þ.b. {{count}} ár',
    nom: '',
    acc: '',
    dat: { s: 'i', p: 'um' },
  },
  xYears: {
    stem: '{{count}} ár',
    nom: '',
    acc: '',
    dat: { s: 'i', p: 'um' },
  },
  overXYears: {
    stem: 'meira en {{count}} ár',
    nom: '',
    acc: '',
    dat: { s: 'i', p: 'um' },
  },
  almostXYears: {
    stem: 'næstum {{count}} ár',
    nom: '',
    acc: '',
    dat: { s: 'i', p: 'um' },
  },
}

const present = { decl: 'nom', prefix: '' } as const
const future = { decl: 'acc', prefix: 'eftir ' } as const
const past = { decl: 'dat', prefix: 'fyrir ' } as const

const formatDistance: FormatDistanceFn = (token, count, options) => {
  const mode =
    !options || !options.addSuffix
      ? present
      : (options.comparison as number) > 0
      ? future
      : past

  const tokenData = formatDistanceLocale[token]
  const tokenValue = tokenData[mode.decl]

  const text =
    typeof tokenValue === 'string' ? tokenValue : tokenValue[pluralForm(count)]

  return (
    mode.prefix + (tokenData.stem + text).replace('{{count}}', count.toString())
  )
}

export default formatDistance
