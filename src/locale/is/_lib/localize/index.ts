import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['fK', 'eK'] as const,
  abbreviated: ['f.Kr.', 'e.Kr.'] as const,
  wide: ['fyrir Krist', 'eftir Krist'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['1F', '2F', '3F', '4F'] as const,
  wide: [
    '1. fjórðungur',
    '2. fjórðungur',
    '3. fjórðungur',
    '4. fjórðungur',
  ] as const,
}

const monthValues = {
  narrow: ['j', 'f', 'm', 'a', 'm', 'j', 'j', 'á', 's', 'o', 'n', 'd'] as const,
  abbreviated: [
    'jan',
    'feb',
    'mar',
    'apr',
    'maí',
    'jún',
    'júl',
    'ágú',
    'sep',
    'okt',
    'nóv',
    'des',
  ] as const,
  wide: [
    'janúar',
    'febrúar',
    'mars',
    'apríl',
    'maí',
    'júní',
    'júlí',
    'ágúst',
    'september',
    'október',
    'nóvember',
    'desember',
  ] as const,
}

const dayValues = {
  narrow: ['s', 'm', 'þ', 'm', 'f', 'f', 'l'] as const,
  short: ['su', 'má', 'þr', 'mi', 'fi', 'fö', 'la'] as const,
  abbreviated: ['sun', 'mán', 'þri', 'mið', 'fim', 'fös', 'lau'] as const,
  wide: [
    'sunnudagur',
    'mánudagur',
    'þriðjudagur',
    'miðvikudagur',
    'fimmtudagur',
    'föstudagur',
    'laugardagur',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'fh',
    pm: 'eh',
    // NOTE: These are not very "narrow"
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt',
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt',
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'miðnætti',
    noon: 'hádegi',
    morning: 'morgunn',
    afternoon: 'síðdegi',
    evening: 'kvöld',
    night: 'nótt',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'f',
    pm: 'e',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt',
  },
  abbreviated: {
    am: 'f.h.',
    pm: 'e.h.',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt',
  },
  wide: {
    am: 'fyrir hádegi',
    pm: 'eftir hádegi',
    midnight: 'á miðnætti',
    noon: 'á hádegi',
    morning: 'að morgni',
    afternoon: 'síðdegis',
    evening: 'um kvöld',
    night: 'um nótt',
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
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
