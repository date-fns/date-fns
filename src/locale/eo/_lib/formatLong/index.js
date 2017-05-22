import buildFormatLong from '../../../_lib/buildFormatLong/index.js'

var formatLong = buildFormatLong({
  LT: 'HH:mm',
  LTS: 'HH:mm:ss',
  L: 'YYYY-MM-DD',
  LL: 'D[-a de] MMMM YYYY',
  LLL: 'D[-a de] MMMM YYYY, HH:mm',
  LLLL: 'dddd, [la] D[-a de] MMMM YYYY, HH:mm'
})

export default formatLong
