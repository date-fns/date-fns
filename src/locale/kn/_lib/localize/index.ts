import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

// Reference: https://www.unicode.org/cldr/charts/32/summary/kn.html

const eraValues = {
  narrow: ['ಕ್ರಿ.ಪೂ', 'ಕ್ರಿ.ಶ'] as const,
  abbreviated: ['ಕ್ರಿ.ಪೂ', 'ಕ್ರಿ.ಶ'] as const, // CLDR #1618, #1620
  wide: ['ಕ್ರಿಸ್ತ ಪೂರ್ವ', 'ಕ್ರಿಸ್ತ ಶಕ'] as const, // CLDR #1614, #1616
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['ತ್ರೈ 1', 'ತ್ರೈ 2', 'ತ್ರೈ 3', 'ತ್ರೈ 4'] as const, // CLDR #1630 - #1638
  wide: [
    '1ನೇ ತ್ರೈಮಾಸಿಕ',
    '2ನೇ ತ್ರೈಮಾಸಿಕ',
    '3ನೇ ತ್ರೈಮಾಸಿಕ',
    '4ನೇ ತ್ರೈಮಾಸಿಕ',
  ] as const, // CLDR #1622 - #1629
}

// CLDR #1646 - #1717
const monthValues = {
  narrow: [
    'ಜ',
    'ಫೆ',
    'ಮಾ',
    'ಏ',
    'ಮೇ',
    'ಜೂ',
    'ಜು',
    'ಆ',
    'ಸೆ',
    'ಅ',
    'ನ',
    'ಡಿ',
  ] as const,
  abbreviated: [
    'ಜನ',
    'ಫೆಬ್ರ',
    'ಮಾರ್ಚ್',
    'ಏಪ್ರಿ',
    'ಮೇ',
    'ಜೂನ್',
    'ಜುಲೈ',
    'ಆಗ',
    'ಸೆಪ್ಟೆಂ',
    'ಅಕ್ಟೋ',
    'ನವೆಂ',
    'ಡಿಸೆಂ',
  ] as const,
  wide: [
    'ಜನವರಿ',
    'ಫೆಬ್ರವರಿ',
    'ಮಾರ್ಚ್',
    'ಏಪ್ರಿಲ್',
    'ಮೇ',
    'ಜೂನ್',
    'ಜುಲೈ',
    'ಆಗಸ್ಟ್',
    'ಸೆಪ್ಟೆಂಬರ್',
    'ಅಕ್ಟೋಬರ್',
    'ನವೆಂಬರ್',
    'ಡಿಸೆಂಬರ್',
  ] as const,
}

// CLDR #1718 - #1773
const dayValues = {
  narrow: ['ಭಾ', 'ಸೋ', 'ಮಂ', 'ಬು', 'ಗು', 'ಶು', 'ಶ'] as const,
  short: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'] as const,
  abbreviated: ['ಭಾನು', 'ಸೋಮ', 'ಮಂಗಳ', 'ಬುಧ', 'ಗುರು', 'ಶುಕ್ರ', 'ಶನಿ'] as const,
  wide: [
    'ಭಾನುವಾರ',
    'ಸೋಮವಾರ',
    'ಮಂಗಳವಾರ',
    'ಬುಧವಾರ',
    'ಗುರುವಾರ',
    'ಶುಕ್ರವಾರ',
    'ಶನಿವಾರ',
  ] as const,
}

// CLDR #1774 - #1815
const dayPeriodValues = {
  narrow: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾಹ್ನ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾಹ್ನ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
  abbreviated: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
  wide: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ಪೂ',
    pm: 'ಅ',
    midnight: 'ಮಧ್ಯರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
  abbreviated: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯ ರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
  wide: {
    am: 'ಪೂರ್ವಾಹ್ನ',
    pm: 'ಅಪರಾಹ್ನ',
    midnight: 'ಮಧ್ಯ ರಾತ್ರಿ',
    noon: 'ಮಧ್ಯಾನ್ಹ',
    morning: 'ಬೆಳಗ್ಗೆ',
    afternoon: 'ಮಧ್ಯಾನ್ಹ',
    evening: 'ಸಂಜೆ',
    night: 'ರಾತ್ರಿ',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return number + 'ನೇ'
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
