import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD.MM.YYYY',
  LL: 'D MMMM YYYY р.',
  LLL: 'D MMMM YYYY р., HH:mm',
  LLLL: 'dddd, D MMMM YYYY р., HH:mm'
})

export default formatLong
