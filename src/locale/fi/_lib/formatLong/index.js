import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'H:mm',
  LTS: 'H:mm:ss',
  L: 'DD.MM.YYYY',
  LL: 'D MMMM YYYY',
  LLL: 'D MMMM YYYY H:mm',
  LLLL: 'dddd, D MMMM YYYY H:mm'
})

export default formatLong
