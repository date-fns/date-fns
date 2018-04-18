import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'H:mm',
  LTS: 'H:mm:ss',
  L: 'DD.MM.YYYY',
  LL: 'D. MMMMM YYYY',
  LLL: 'D. MMMMM YYYY H:mm',
  LLLL: 'dddd, D. MMMMM YYYY H:mm'
})

export default formatLong
