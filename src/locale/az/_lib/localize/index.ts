import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['e.ə', 'b.e'] as const,
  abbreviated: ['e.ə', 'b.e'] as const,
  wide: ['eramızdan əvvəl', 'bizim era'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['K1', 'K2', 'K3', 'K4'] as const,
  wide: ['1ci kvartal', '2ci kvartal', '3cü kvartal', '4cü kvartal'] as const,
}
const monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'İ', 'İ', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'İyun',
    'İyul',
    'Avq',
    'Sen',
    'Okt',
    'Noy',
    'Dek',
  ] as const,
  wide: [
    'Yanvar',
    'Fevral',
    'Mart',
    'Aprel',
    'May',
    'İyun',
    'İyul',
    'Avqust',
    'Sentyabr',
    'Oktyabr',
    'Noyabr',
    'Dekabr',
  ] as const,
}

const dayValues = {
  narrow: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'] as const,
  short: ['B.', 'B.e', 'Ç.a', 'Ç.', 'C.a', 'C.', 'Ş.'] as const,
  abbreviated: ['Baz', 'Baz.e', 'Çər.a', 'Çər', 'Cüm.a', 'Cüm', 'Şə'] as const,
  wide: [
    'Bazar',
    'Bazar ertəsi',
    'Çərşənbə axşamı',
    'Çərşənbə',
    'Cümə axşamı',
    'Cümə',
    'Şənbə',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'am',
    pm: 'pm',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'gecəyarı',
    noon: 'gün',
    morning: 'səhər',
    afternoon: 'gündüz',
    evening: 'axşam',
    night: 'gecə',
  },
}

const suffixes: { [key: number]: string } = {
  1: '-inci',
  5: '-inci',
  8: '-inci',
  70: '-inci',
  80: '-inci',
  2: '-nci',
  7: '-nci',
  20: '-nci',
  50: '-nci',
  3: '-üncü',
  4: '-üncü',
  100: '-üncü',
  6: '-ncı',
  9: '-uncu',
  10: '-uncu',
  30: '-uncu',
  60: '-ıncı',
  90: '-ıncı',
}

const getSuffix = (number: number): string => {
  if (number === 0) {
    // special case for zero
    return number + '-ıncı'
  }

  const a = number % 10
  const b = (number % 100) - a
  const c = number >= 100 ? 100 : null

  if (suffixes[a]) {
    return suffixes[a]
  } else if (suffixes[b]) {
    return suffixes[b]
  } else if (c !== null) {
    return suffixes[c]
  }
  return ''
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber)
  const suffix = getSuffix(number)

  return number + suffix
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
