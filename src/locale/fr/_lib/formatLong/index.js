import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD/MM/YYYY',
  LL: 'Do MMMM YYYY',
  LLL: 'Do MMMM YYYY HH:mm',
  LLLL: 'dddd, Do MMMM YYYY HH:mm'
})

export default formatLong
