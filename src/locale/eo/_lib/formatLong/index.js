import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY-MM-DD',
  LL: 'D[-a de] MMMM YYYY',
  LLL: 'D[-a de] MMMM YYYY, HH:mm',
  LLLL: 'dddd, [la] D[-a de] MMMM YYYY, HH:mm'
})

export default formatLong
