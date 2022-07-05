import type { Quarter } from '../../../../types'
import type { Localize } from '../../../types'
import { LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['да н.э.', 'н.э.'] as const,
  abbreviated: ['да н. э.', 'н. э.'] as const,
  wide: ['да нашай эры', 'нашай эры'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['1-ы кв.', '2-і кв.', '3-і кв.', '4-ы кв.'] as const,
  wide: ['1-ы квартал', '2-і квартал', '3-і квартал', '4-ы квартал'] as const,
}

const monthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'М', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'] as const,
  abbreviated: [
    'студз.',
    'лют.',
    'сак.',
    'крас.',
    'май',
    'чэрв.',
    'ліп.',
    'жн.',
    'вер.',
    'кастр.',
    'ліст.',
    'снеж.',
  ] as const,
  wide: [
    'студзень',
    'люты',
    'сакавік',
    'красавік',
    'май',
    'чэрвень',
    'ліпень',
    'жнівень',
    'верасень',
    'кастрычнік',
    'лістапад',
    'снежань',
  ] as const,
}
const formattingMonthValues = {
  narrow: ['С', 'Л', 'С', 'К', 'М', 'Ч', 'Л', 'Ж', 'В', 'К', 'Л', 'С'] as const,
  abbreviated: [
    'студз.',
    'лют.',
    'сак.',
    'крас.',
    'мая',
    'чэрв.',
    'ліп.',
    'жн.',
    'вер.',
    'кастр.',
    'ліст.',
    'снеж.',
  ] as const,
  wide: [
    'студзеня',
    'лютага',
    'сакавіка',
    'красавіка',
    'мая',
    'чэрвеня',
    'ліпеня',
    'жніўня',
    'верасня',
    'кастрычніка',
    'лістапада',
    'снежня',
  ] as const,
}

const dayValues = {
  narrow: ['Н', 'П', 'А', 'С', 'Ч', 'П', 'С'] as const,
  short: ['нд', 'пн', 'аў', 'ср', 'чц', 'пт', 'сб'] as const,
  abbreviated: ['нядз', 'пан', 'аўт', 'сер', 'чац', 'пят', 'суб'] as const,
  wide: [
    'нядзеля',
    'панядзелак',
    'аўторак',
    'серада',
    'чацвер',
    'пятніца',
    'субота',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч',
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дзень',
    evening: 'веч.',
    night: 'ноч',
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніца',
    afternoon: 'дзень',
    evening: 'вечар',
    night: 'ноч',
  },
}
const formattingDayPeriodValues = {
  narrow: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы',
  },
  abbreviated: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўн.',
    noon: 'поўд.',
    morning: 'ран.',
    afternoon: 'дня',
    evening: 'веч.',
    night: 'ночы',
  },
  wide: {
    am: 'ДП',
    pm: 'ПП',
    midnight: 'поўнач',
    noon: 'поўдзень',
    morning: 'раніцы',
    afternoon: 'дня',
    evening: 'вечара',
    night: 'ночы',
  },
}

const ordinalNumber: LocalizeFn<number> = (dirtyNumber, options) => {
  const unit = String(options?.unit)
  const number = Number(dirtyNumber)
  let suffix

  /** Though it's an incorrect ordinal form of a date we use it here for consistency with other similar locales (ru, uk)
   *  For date-month combinations should be used `d` formatter.
   *  Correct:   `d MMMM` (4 верасня)
   *  Incorrect: `do MMMM` (4-га верасня)
   *
   *  But following the consistency leads to mistakes for literal uses of `do` formatter (ordinal day of month).
   *  So for phrase "5th day of month" (`do дзень месяца`)
   *  library will produce:            `5-га дзень месяца`
   *  but correct spelling should be:  `5-ы дзень месяца`
   *
   *  So I guess there should be a stand-alone and a formatting version of "day of month" formatters
   */
  if (unit === 'date') {
    suffix = '-га'
  } else if (unit === 'hour' || unit === 'minute' || unit === 'second') {
    suffix = '-я'
  } else {
    suffix =
      (number % 10 === 2 || number % 10 === 3) &&
      number % 100 !== 12 &&
      number % 100 !== 13
        ? '-і'
        : '-ы'
  }

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
    formattingValues: formattingMonthValues,
    defaultFormattingWidth: 'wide',
  }),

  day: buildLocalizeFn({
    values: dayValues,
    defaultWidth: 'wide',
  }),

  dayPeriod: buildLocalizeFn({
    values: dayPeriodValues,
    defaultWidth: 'any',
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: 'wide',
  }),
}

export default localize
