import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD.MM.YYYY',
  LL: 'D MMMM YYYY г.',
  LLL: 'D MMMM YYYY г., HH:mm',
  LLLL: 'dddd, D MMMM YYYY г., HH:mm'
})

export default formatLong
