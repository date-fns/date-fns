import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'H:mm',
  LTS: 'H:mm:ss',
  L: 'YYYY.MM.DD.',
  LL: 'YYYY. MMMM D.',
  LLL: 'YYYY. MMMM D. H:mm',
  LLLL: 'YYYY. MMMM D., dddd H:mm'
})

export default formatLong
