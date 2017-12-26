import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY-MM-DD',
  LL: 'D MMMM YYYY',
  LLL: 'D MMMM YYYY [kl.] HH:mm',
  LLLL: 'dddd D MMMM YYYY [kl.] HH:mm'
})

export default formatLong
