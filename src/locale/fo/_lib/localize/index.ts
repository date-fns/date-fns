import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['fot', 'eot'] as const,
  abbreviated: ['f.o.t.', 'e.o.t.'] as const,
  wide: ['fyri okkara tíðarrokning', 'eftir okkara tíðarrokning'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['1. ársfj.', '2. ársfj.', '3. ársfj.', '4. ársfj.'] as const,
  wide: [
    '1. ársfjórðing',
    '2. ársfjórðing',
    '3. ársfjórðing',
    '4. ársfjórðing',
  ] as const,
}

const monthValues = {
  narrow: ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'jan.',
    'feb.',
    'mar.',
    'apr.',
    'mai',
    'jun.',
    'jul.',
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
    'apríl',
    'mai',
    'juni',
    'juli',
    'august',
    'septembur',
    'oktobur',
    'novembur',
    'desembur',
  ] as const,
}

// Note that 'Days - abbreviated - Formatting' has periods at the end.

const dayValues = {
  narrow: ['S', 'M', 'T', 'M', 'H', 'F', 'L'] as const,
  short: ['su', 'má', 'tý', 'mi', 'hó', 'fr', 'le'] as const,
  abbreviated: [
    'sun.',
    'mán.',
    'týs.',
    'mik.',
    'hós.',
    'frí.',
    'ley.',
  ] as const,
  wide: [
    'sunnudag',
    'mánadag',
    'týsdag',
    'mikudag',
    'hósdag',
    'fríggjadag',
    'leygardag',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'midnátt',
    noon: 'middagur',
    morning: 'morgun',
    afternoon: 'seinnapart',
    evening: 'kvøld',
    night: 'nátt',
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
