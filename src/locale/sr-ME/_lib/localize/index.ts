import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['pr.n.e.', 'AD'] as const,
  abbreviated: ['pr. Hr.', 'po. Hr.'] as const,
  wide: ['Pre Hrista', 'Posle Hrista'] as const,
}

const quarterValues = {
  narrow: ['1.', '2.', '3.', '4.'] as const,
  abbreviated: ['1. kv.', '2. kv.', '3. kv.', '4. kv.'] as const,
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'] as const,
}

const monthValues = {
  narrow: [
    '1.',
    '2.',
    '3.',
    '4.',
    '5.',
    '6.',
    '7.',
    '8.',
    '9.',
    '10.',
    '11.',
    '12.',
  ] as const,
  abbreviated: [
    'jan',
    'feb',
    'mart',
    'apr',
    'maj',
    'jun',
    'jul',
    'avg',
    'sept',
    'okt',
    'nov',
    'dec',
  ] as const,
  wide: [
    'januar',
    'februar',
    'mart',
    'april',
    'maj',
    'jun',
    'jul',
    'avgust',
    'septembar',
    'oktobar',
    'novembar',
    'decembar',
  ] as const,
}

const formattingMonthValues = {
  narrow: [
    '1.',
    '2.',
    '3.',
    '4.',
    '5.',
    '6.',
    '7.',
    '8.',
    '9.',
    '10.',
    '11.',
    '12.',
  ] as const,
  abbreviated: [
    'jan',
    'feb',
    'mart',
    'apr',
    'maj',
    'jun',
    'jul',
    'avg',
    'sept',
    'okt',
    'nov',
    'dec',
  ] as const,
  wide: [
    'januar',
    'februar',
    'mart',
    'april',
    'maj',
    'jun',
    'jul',
    'avgust',
    'septembar',
    'oktobar',
    'novembar',
    'decembar',
  ] as const,
}

const dayValues = {
  narrow: ['N', 'P', 'U', 'S', 'Č', 'P', 'S'] as const,
  short: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'] as const,
  abbreviated: ['ned', 'pon', 'uto', 'sre', 'čet', 'pet', 'sub'] as const,
  wide: [
    'nedjelja',
    'ponedeljak',
    'utorak',
    'srijeda',
    'četvrtak',
    'petak',
    'subota',
  ] as const,
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po pod.',
    evening: 'veče',
    night: 'noć',
  },
  abbreviated: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po pod.',
    evening: 'veče',
    night: 'noću',
  },
  wide: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po podne',
    evening: 'veče',
    night: 'noću',
  },
}

const dayPeriodValues = {
  narrow: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po pod.',
    evening: 'veče',
    night: 'noć',
  },
  abbreviated: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po pod.',
    evening: 'veče',
    night: 'noću',
  },
  wide: {
    am: 'prije podne',
    pm: 'po podne',
    midnight: 'ponoć',
    noon: 'podne',
    morning: 'jutro',
    afternoon: 'po podne',
    evening: 'veče',
    night: 'noću',
  },
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber)
  return number + '.'
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
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: buildLocalizeFn({
    values: monthValues,
    defaultWidth: 'wide',
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide',
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
