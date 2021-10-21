import type { Localize, LocalizeFn, QuarterIndex } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['មុនគ.ស', 'គ.ស'] as const,
  abbreviated: ['មុនគ.ស', 'គ.ស'] as const,
  wide: ['មុនគ្រិស្តសករាជ', 'នៃគ្រិស្តសករាជ'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['ត្រីមាសទី១', 'ត្រីមាសទី២', 'ត្រីមាសទី៣', 'ត្រីមាសទី៤'] as const,
}

const monthValues = {
  narrow: [
    'ម',
    'ក',
    'មិ',
    'មេ',
    'ឧ',
    'ម.ថ',
    'ក',
    'សី',
    'ក.ញ',
    'តុ',
    'វិ',
    'ធ',
  ] as const,
  abbreviated: [
    'មករា',
    'កុម្ភៈ',
    'មីនា',
    'មេសា',
    'ឧសភា',
    'មិថុនា',
    'កក្កដា',
    'សីហា',
    'កញ្ញា',
    'តុលា',
    'វិច្ឆិកា',
    'ធ្នូ',
  ] as const,
  wide: [
    'មករា',
    'កុម្ភៈ',
    'មីនា',
    'មេសា',
    'ឧសភា',
    'មិថុនា',
    'កក្កដា',
    'សីហា',
    'កញ្ញា',
    'តុលា',
    'វិច្ឆិកា',
    'ធ្នូ',
  ] as const,
}

const dayValues = {
  narrow: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'] as const,
  short: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'] as const,
  abbreviated: ['អា', 'ច', 'អ', 'ព', 'ព្រ', 'សុ', 'ស'] as const,
  wide: [
    'អាទិត្យ',
    'ចន្ទ',
    'អង្គារ',
    'ពុធ',
    'ព្រហស្បតិ៍',
    'សុក្រ',
    'សៅរ៍',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: 'ព',
    pm: 'ល',
    midnight: 'យ',
    noon: 'រ',
    morning: 'ព្រឹក',
    afternoon: '​រសៀល',
    evening: 'ល្ងាច',
    night: 'យប់',
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​អធ្រាត្រ',
    noon: 'រសៀល',
    morning: 'ព្រឹក',
    afternoon: '​រសៀល',
    evening: 'ល្ងាច',
    night: 'យប់',
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​កណ្ដាលអធ្រាត្រ',
    noon: 'ពេលរសៀល',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេល​រសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: 'ព',
    pm: 'ល',
    midnight: 'យ',
    noon: 'រ',
    morning: 'ព្រឹក',
    afternoon: '​រសៀល',
    evening: 'ល្ងាច',
    night: 'យប់',
  },
  abbreviated: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​អធ្រាត្រ',
    noon: 'រសៀល',
    morning: 'ព្រឹក',
    afternoon: '​រសៀល',
    evening: 'ល្ងាច',
    night: 'យប់',
  },
  wide: {
    am: 'ព្រឹក',
    pm: 'ល្ងាច',
    midnight: '​កណ្ដាលអធ្រាត្រ',
    noon: 'ពេលរសៀល',
    morning: 'ពេលព្រឹក',
    afternoon: 'ពេល​រសៀល',
    evening: 'ពេលល្ងាច',
    night: 'ពេលយប់',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (
  dirtyNumber,
  _options
) => {
  const number = Number(dirtyNumber)
  return 'ទី ' + number
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
    argumentCallback: (quarter) => (quarter - 1) as QuarterIndex,
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
