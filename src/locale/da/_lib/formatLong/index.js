import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'DD/MM/YYYY',
  LL: 'D. MMMM YYYY',
  LLL: 'D. MMMM YYYY HH:mm',
  LLLL: 'dddd [d.] D. MMMM YYYY [kl.] HH:mm'
})

export default formatLong
