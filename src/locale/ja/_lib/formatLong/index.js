import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY/MM/DD',
  LL: 'YYYY年MM月DD日',
  LLL: 'YYYY年MM月DD日 HH:mm',
  LLLL: 'YYYY年MMMMDD日 HH時mm分'
})

export default formatLong
