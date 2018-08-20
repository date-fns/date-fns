import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY-MM-DD',
  LL: 'YYYY [m.] MMMM D [d.]',
  LLL: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
  LLLL: 'YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]',
  l: 'YYYY-MM-DD',
  ll: 'YYYY [m.] MMMM D [d.]',
  lll: 'YYYY [m.] MMMM D [d.], HH:mm [val.]',
  llll: 'YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]'
})

export default formatLong
