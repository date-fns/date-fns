import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY年MM月DD日',
  LL: 'YYYY年MMMMD日',
  LLL: 'YYYY年MMMMD日 HH:mm',
  LLLL: 'YYYY年MMMMD日 dddd HH:mm'
})

export default formatLong
