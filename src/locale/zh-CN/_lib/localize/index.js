import buildLocalizeFn from '../../../_lib/buildLocalizeFn/index.js'
import buildLocalizeArrayFn from '../../../_lib/buildLocalizeArrayFn/index.js'

var weekdayValues = {
  narrow: ['日', '一', '二', '三', '四', '五', '六'],
  short: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
  long: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六']
}

var monthValues = {
  short: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
  long: ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月']
}

var timeOfDayValues = {
  long: ['上午', '下午']
}

function ordinalNumber (dirtyNumber) {
  var number = Number(dirtyNumber)
  return String(number)
}

var localize = {
  ordinalNumber: ordinalNumber,
  weekday: buildLocalizeFn(weekdayValues, 'long'),
  weekdays: buildLocalizeArrayFn(weekdayValues, 'long'),
  month: buildLocalizeFn(monthValues, 'long'),
  months: buildLocalizeArrayFn(monthValues, 'long'),
  timeOfDay: buildLocalizeFn(timeOfDayValues, 'long', function (hours) {
    return (hours / 12) >= 1 ? 1 : 0
  }),
  timesOfDay: buildLocalizeArrayFn(timeOfDayValues, 'long')
}

export default localize
