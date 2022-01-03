import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['f.Kr.', 'e.Kr.'] as const,
  abbreviated: ['f.Kr.', 'e.Kr.'] as const,
  wide: ['før Kristus', 'etter Kristus'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['1. kvartal', '2. kvartal', '3. kvartal', '4. kvartal'] as const,
}

const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'jan.',
    'feb.',
    'mars',
    'apr.',
    'mai',
    'juni',
    'juli',
    'aug.',
    'sep.',
    'okt.',
    'nov.',
    'des.',
  ] as const,
  wide: [
    'januar',
    'februar',
    'mars',
    'april',
    'mai',
    'juni',
    'juli',
    'august',
    'september',
    'oktober',
    'november',
    'desember',
  ] as const,
}

const dayValues = {
  narrow: ['S', 'M', 'T', 'O', 'T', 'F', 'L'] as const,
  short: ['su', 'må', 'ty', 'on', 'to', 'fr', 'lau'] as const,
  abbreviated: ['sun', 'mån', 'tys', 'ons', 'tor', 'fre', 'laur'] as const,
  wide: [
    'sundag',
    'måndag',
    'tysdag',
    'onsdag',
    'torsdag',
    'fredag',
    'laurdag',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på etterm.',
    evening: 'på kvelden',
    night: 'på natta',
  },
  abbreviated: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morg.',
    afternoon: 'på etterm.',
    evening: 'på kvelden',
    night: 'på natta',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnatt',
    noon: 'middag',
    morning: 'på morgonen',
    afternoon: 'på ettermiddagen',
    evening: 'på kvelden',
    night: 'på natta',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
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
  }),
}

export default localize
