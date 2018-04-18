import buildMatchFn from '../../../_lib/buildMatchFn/index.js'
import buildParseFn from '../../../_lib/buildParseFn/index.js'
import buildMatchPatternFn from '../../../_lib/buildMatchPatternFn/index.js'
import parseDecimal from '../../../_lib/parseDecimal/index.js'

var matchOrdinalNumbersPattern = /^(\d+)(a|e)?/i

var matchWeekdaysPatterns = {
  narrow: /^(日|一|二|三|四|五|六)/i,
  short: /^(周日|周一|周二|周三|周四|周五|周六)/i,
  long: /^(星期日|星期一|星期二|星期三|星期四|星期五|星期六)/i
}

var parseWeekdayPatterns = {
  any: [/^日/i, /^一/i, /^二/i, /^三/i, /^四/i, /^五/i, /^六/i]
}

var matchMonthsPatterns = {
  short: /^(1月|2月|3月|4月|5月|6月|7月|8月|9月|10月|11月|12月)/i,
  long: /^(一月|二月|三月|四月|五月|六月|七月|八月|九月|十月|十一月|十二月)/i
}

var parseMonthPatterns = {
  any: [/^1月/i, /^2月/i, /^3月/i, /^4月/i, /^5月/i, /^6月/i, /^7月/i, /^8月/i, /^9月/i, /^10月/i, /^11月/i, /^12月/i]
}

var matchTimesOfDayPatterns = {
  short: /^(上午|下午)/i
}

var parseTimeOfDayPatterns = {
  any: [/^上午/i, /^下午/i]
}

var match = {
  ordinalNumbers: buildMatchPatternFn(matchOrdinalNumbersPattern),
  ordinalNumber: parseDecimal,
  weekdays: buildMatchFn(matchWeekdaysPatterns, 'long'),
  weekday: buildParseFn(parseWeekdayPatterns, 'any'),
  months: buildMatchFn(matchMonthsPatterns, 'long'),
  month: buildParseFn(parseMonthPatterns, 'any'),
  timesOfDay: buildMatchFn(matchTimesOfDayPatterns, 'long'),
  timeOfDay: buildParseFn(parseTimeOfDayPatterns, 'any')
}

export default match
