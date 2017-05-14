import buildFormatLong from '../../../_lib/buildFormatLong/index.js'

var formatLong = buildFormatLong({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'MM/DD/YYYY',
  LL: 'MMMM D YYYY',
  LLL: 'MMMM D YYYY h:mm aa',
  LLLL: 'dddd, MMMM D YYYY h:mm aa'
})

export default formatLong
