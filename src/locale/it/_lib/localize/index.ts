import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['aC', 'dC'] as const,
  abbreviated: ['a.C.', 'd.C.'] as const,
  wide: ['avanti Cristo', 'dopo Cristo'] as const,
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
  narrow: ['G', 'F', 'M', 'A', 'M', 'G', 'L', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'gen',
    'feb',
    'mar',
    'apr',
    'mag',
    'giu',
    'lug',
    'ago',
    'set',
    'ott',
    'nov',
    'dic',
  ] as const,
  wide: [
    'gennaio',
    'febbraio',
    'marzo',
    'aprile',
    'maggio',
    'giugno',
    'luglio',
    'agosto',
    'settembre',
    'ottobre',
    'novembre',
    'dicembre',
  ] as const,
}

const dayValues = {
  narrow: ['D', 'L', 'M', 'M', 'G', 'V', 'S'] as const,
  short: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'] as const,
  abbreviated: ['dom', 'lun', 'mar', 'mer', 'gio', 'ven', 'sab'] as const,
  wide: [
    'domenica',
    'lunedì',
    'martedì',
    'mercoledì',
    'giovedì',
    'venerdì',
    'sabato',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte',
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'mattina',
    afternoon: 'pomeriggio',
    evening: 'sera',
    night: 'notte',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'm.',
    pm: 'p.',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte',
  },
  wide: {
    am: 'AM',
    pm: 'PM',
    midnight: 'mezzanotte',
    noon: 'mezzogiorno',
    morning: 'di mattina',
    afternoon: 'del pomeriggio',
    evening: 'di sera',
    night: 'di notte',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return String(number)
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
