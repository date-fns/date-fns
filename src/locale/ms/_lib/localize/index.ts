import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

// Most data for localization are taken from this page
// https://www.unicode.org/cldr/charts/32/summary/ms.html
const eraValues = {
  narrow: ['SM', 'M'] as const,
  abbreviated: ['SM', 'M'] as const,
  wide: ['Sebelum Masihi', 'Masihi'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['S1', 'S2', 'S3', 'S4'] as const,
  wide: ['Suku pertama', 'Suku kedua', 'Suku ketiga', 'Suku keempat'] as const,
}

// Note: in Malay, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'O', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'Jan',
    'Feb',
    'Mac',
    'Apr',
    'Mei',
    'Jun',
    'Jul',
    'Ogo',
    'Sep',
    'Okt',
    'Nov',
    'Dis',
  ] as const,
  wide: [
    'Januari',
    'Februari',
    'Mac',
    'April',
    'Mei',
    'Jun',
    'Julai',
    'Ogos',
    'September',
    'Oktober',
    'November',
    'Disember',
  ] as const,
}

const dayValues = {
  narrow: ['A', 'I', 'S', 'R', 'K', 'J', 'S'] as const,
  short: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'] as const,
  abbreviated: ['Ahd', 'Isn', 'Sel', 'Rab', 'Kha', 'Jum', 'Sab'] as const,
  wide: [
    'Ahad',
    'Isnin',
    'Selasa',
    'Rabu',
    'Khamis',
    'Jumaat',
    'Sabtu',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'tgh malam',
    noon: 'tgh hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'tengah malam',
    noon: 'tengah hari',
    morning: 'pagi',
    afternoon: 'tengah hari',
    evening: 'petang',
    night: 'malam',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  // Can't use "pertama", "kedua" because can't be parsed
  return 'ke-' + Number(dirtyNumber)
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
