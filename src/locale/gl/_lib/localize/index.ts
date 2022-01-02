import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['AC', 'DC'] as const,
  abbreviated: ['AC', 'DC'] as const,
  wide: ['antes de cristo', 'despois de cristo'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['T1', 'T2', 'T3', 'T4'] as const,
  wide: [
    '1º trimestre',
    '2º trimestre',
    '3º trimestre',
    '4º trimestre',
  ] as const,
}

const monthValues = {
  narrow: ['e', 'f', 'm', 'a', 'm', 'j', 'j', 'a', 's', 'o', 'n', 'd'] as const,
  abbreviated: [
    'xan',
    'feb',
    'mar',
    'abr',
    'mai',
    'xun',
    'xul',
    'ago',
    'set',
    'out',
    'nov',
    'dec',
  ] as const,
  wide: [
    'xaneiro',
    'febreiro',
    'marzo',
    'abril',
    'maio',
    'xuño',
    'xullo',
    'agosto',
    'setembro',
    'outubro',
    'novembro',
    'decembro',
  ] as const,
}

const dayValues = {
  narrow: ['d', 'l', 'm', 'm', 'j', 'v', 's'] as const,
  short: ['do', 'lu', 'ma', 'me', 'xo', 've', 'sa'] as const,
  abbreviated: ['dom', 'lun', 'mar', 'mer', 'xov', 'ven', 'sab'] as const,
  wide: [
    'domingo',
    'luns',
    'martes',
    'mércores',
    'xoves',
    'venres',
    'sábado',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'mañá',
    afternoon: 'tarde',
    evening: 'tarde',
    night: 'noite',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'medianoite',
    noon: 'mediodía',
    morning: 'mañá',
    afternoon: 'tarde',
    evening: 'tardiña',
    night: 'noite',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'medianoite',
    noon: 'mediodía',
    morning: 'mañá',
    afternoon: 'tarde',
    evening: 'tardiña',
    night: 'noite',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'mn',
    noon: 'md',
    morning: 'da mañá',
    afternoon: 'da tarde',
    evening: 'da tardiña',
    night: 'da noite',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'medianoite',
    noon: 'mediodía',
    morning: 'da mañá',
    afternoon: 'da tarde',
    evening: 'da tardiña',
    night: 'da noite',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'medianoite',
    noon: 'mediodía',
    morning: 'da mañá',
    afternoon: 'da tarde',
    evening: 'da tardiña',
    night: 'da noite',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return number + 'º'
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
