import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['M.A', 'M.'] as const,
  abbreviated: ['M.A', 'M.'] as const,
  wide: ['Miloddan Avvalgi', 'Milodiy'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['CH.1', 'CH.2', 'CH.3', 'CH.4'] as const,
  wide: [
    '1-chi chorak',
    '2-chi chorak',
    '3-chi chorak',
    '4-chi chorak',
  ] as const,
}

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ['Y', 'F', 'M', 'A', 'M', 'I', 'I', 'A', 'S', 'O', 'N', 'D'] as const,
  abbreviated: [
    'Yan',
    'Fev',
    'Mar',
    'Apr',
    'May',
    'Iyun',
    'Iyul',
    'Avg',
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
    'Iyun',
    'Iyul',
    'Avgust',
    'Sentabr',
    'Oktabr',
    'Noyabr',
    'Dekabr',
  ] as const,
}

const dayValues = {
  narrow: ['Y', 'D', 'S', 'CH', 'P', 'J', 'SH'] as const,
  short: ['Ya', 'Du', 'Se', 'Cho', 'Pa', 'Ju', 'Sha'] as const,
  abbreviated: ['Yak', 'Dush', 'Sesh', 'Chor', 'Pay', 'Jum', 'Shan'] as const,
  wide: [
    'Yakshanba',
    'Dushanba',
    'Seshanba',
    'Chorshanba',
    'Payshanba',
    'Juma',
    'Shanba',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'a',
    pm: 'p',
    midnight: 'y.t',
    noon: 'p.',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
  abbreviated: {
    am: 'AM',
    pm: 'PM',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
  wide: {
    am: 'a.m.',
    pm: 'p.m.',
    midnight: 'yarim tun',
    noon: 'peshin',
    morning: 'ertalab',
    afternoon: 'tushdan keyin',
    evening: 'kechqurun',
    night: 'tun',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  return String(dirtyNumber)
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
