import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['P', 'M'] as const,
  abbreviated: ['PK', 'MK'] as const,
  wide: ['Para Krishtit', 'Mbas Krishtit'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['4-mujori I', '4-mujori II', '4-mujori III', '4-mujori IV'] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['J', 'S', 'M', 'P', 'M', 'Q', 'K', 'G', 'S', 'T', 'N', 'D'] as const,
  abbreviated: [
    'Jan',
    'Shk',
    'Mar',
    'Pri',
    'Maj',
    'Qer',
    'Kor',
    'Gus',
    'Sht',
    'Tet',
    'Nën',
    'Dhj',
  ] as const,
  wide: [
    'Janar',
    'Shkurt',
    'Mars',
    'Prill',
    'Maj',
    'Qershor',
    'Korrik',
    'Gusht',
    'Shtator',
    'Tetor',
    'Nëntor',
    'Dhjetor',
  ] as const,
}

const dayValues = {
  narrow: ['D', 'H', 'M', 'M', 'E', 'P', 'S'] as const,
  short: ['Di', 'Hë', 'Ma', 'Më', 'En', 'Pr', 'Sh'] as const,
  abbreviated: ['Die', 'Hën', 'Mar', 'Mër', 'Enj', 'Pre', 'Sht'] as const,
  wide: [
    'Dielë',
    'Hënë',
    'Martë',
    'Mërkurë',
    'Enjte',
    'Premte',
    'Shtunë',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'mëngjes',
    afternoon: 'dite',
    evening: 'mbrëmje',
    night: 'natë',
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë',
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnëtë',
    noon: 'drek',
    morning: 'mëngjes',
    afternoon: 'mbasdite',
    evening: 'mbrëmje',
    night: 'natë',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'p',
    pm: 'm',
    midnight: 'm',
    noon: 'd',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë',
  },
  abbreviated: {
    am: 'PD',
    pm: 'MD',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë',
  },
  wide: {
    am: 'p.d.',
    pm: 'm.d.',
    midnight: 'mesnatë',
    noon: 'drek',
    morning: 'në mëngjes',
    afternoon: 'në mbasdite',
    evening: 'në mbrëmje',
    night: 'në mesnatë',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber)

  if (options?.unit === 'hour') return String(number)

  if (number === 1) return number + '-rë'
  if (number === 4) return number + 't'

  return number + '-të'
}

const localize: Localize = {
  ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (quarter - 1) as Quarter,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'wide',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
