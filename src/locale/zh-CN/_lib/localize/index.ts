import type { Quarter } from '../../../../types'
import type { Localize, LocalizeFn } from '../../../types'
import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index'

const eraValues = {
  narrow: ['前', '公元'] as const,
  abbreviated: ['前', '公元'] as const,
  wide: ['公元前', '公元'] as const,
}

const quarterValues = {
  narrow: ['1', '2', '3', '4'] as const,
  abbreviated: ['第一季', '第二季', '第三季', '第四季'] as const,
  wide: ['第一季度', '第二季度', '第三季度', '第四季度'] as const,
}

const monthValues = {
  narrow: [
    '一',
    '二',
    '三',
    '四',
    '五',
    '六',
    '七',
    '八',
    '九',
    '十',
    '十一',
    '十二',
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
    '一月',
    '二月',
    '三月',
    '四月',
    '五月',
    '六月',
    '七月',
    '八月',
    '九月',
    '十月',
    '十一月',
    '十二月',
  ] as const,
}

const dayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'] as const,
  short: ['日', '一', '二', '三', '四', '五', '六'] as const,
  abbreviated: [
    '周日',
    '周一',
    '周二',
    '周三',
    '周四',
    '周五',
    '周六',
  ] as const,
  wide: [
    '星期日',
    '星期一',
    '星期二',
    '星期三',
    '星期四',
    '星期五',
    '星期六',
  ] as const,
}

const dayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜',
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间',
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间',
  },
}

const formattingDayPeriodValues = {
  narrow: {
    am: '上',
    pm: '下',
    midnight: '凌晨',
    noon: '午',
    morning: '早',
    afternoon: '下午',
    evening: '晚',
    night: '夜',
  },
  abbreviated: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间',
  },
  wide: {
    am: '上午',
    pm: '下午',
    midnight: '凌晨',
    noon: '中午',
    morning: '早晨',
    afternoon: '中午',
    evening: '晚上',
    night: '夜间',
  },
}

const ordinalNumber: LocalizeFn<number, undefined> = (dirtyNumber, options) => {
  const number = Number(dirtyNumber)

  switch (options?.unit) {
    case 'date':
      return number.toString() + '日'
    case 'hour':
      return number.toString() + '时'
    case 'minute':
      return number.toString() + '分'
    case 'second':
      return number.toString() + '秒'
    default:
      return '第 ' + number.toString()
  }
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
