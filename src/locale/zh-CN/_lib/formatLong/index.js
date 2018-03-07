import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY/MM/DD',
  LL: 'YYYY年M月D日',
  LLL: 'YYYY年M月D日Ah点mm分',
  LLLL: 'YYYY年M月D日ddddAh点mm分',
  l: 'YYYY/M/D',
  ll: 'YYYY年M月D日',
  lll: 'YYYY年M月D日 HH:mm',
  llll: 'YYYY年M月D日dddd HH:mm'
})

export default formatLong
