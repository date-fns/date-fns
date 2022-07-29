import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'
import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'

const eraValues = {
  narrow: ['BC', 'AC'] as const,
  abbreviated: ['紀元前', '西暦'] as const,
  wide: ['紀元前', '西暦'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['Q1', 'Q2', 'Q3', 'Q4'] as const,
  wide: ['第1四半期', '第2四半期', '第3四半期', '第4四半期'] as const,
}

const monthValues = {
  narrow: [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '10',
    '11',
    '12',
  ] as const,
  abbreviated: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ] as const,
  wide: [
    '1月',
    '2月',
    '3月',
    '4月',
    '5月',
    '6月',
    '7月',
    '8月',
    '9月',
    '10月',
    '11月',
    '12月',
  ] as const,
}

const dayValues = {
  narrow: ['日', '月', '火', '水', '木', '金', '土'] as const,
  short: ['日', '月', '火', '水', '木', '金', '土'] as const,
  abbreviated: ['日', '月', '火', '水', '木', '金', '土'] as const,
  wide: [
    '日曜日',
    '月曜日',
    '火曜日',
    '水曜日',
    '木曜日',
    '金曜日',
    '土曜日',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
  abbreviated: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
  wide: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
}
const formattingDayPeriodValues = {
  narrow: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
  abbreviated: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
  wide: {
    am: '午前',
    pm: '午後',
    midnight: '深夜',
    noon: '正午',
    morning: '朝',
    afternoon: '午後',
    evening: '夜',
    night: '深夜',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber)
  const unit = String(options?.unit)

  switch (unit) {
    case 'year':
      return `${number}年`
    case 'quarter':
      return `第${number}四半期`
    case 'month':
      return `${number}月`
    case 'week':
      return `第${number}週`
    case 'date':
      return `${number}日`
    case 'hour':
      return `${number}時`
    case 'minute':
      return `${number}分`
    case 'second':
      return `${number}秒`
    default:
      return `${number}`
  }
}

const localize: Localize = {
  ordinalNumber: ordinalNumber,

  era: buildLocalizeFn({
    values: eraValues,
    defaultWidth: 'wide',
  }),

  quarter: buildLocalizeFn({
    values: quarterValues,
    defaultWidth: 'wide',
    argumentCallback: (quarter) => (Number(quarter) - 1) as Quarter,
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
