import buildFormatLongFn from '../../../_lib/buildFormatLongFn/index.js'

var formatLong = buildFormatLongFn({
  LT: 'h:mm aa',
  LTS: 'h:mm:ss aa',
  L: 'DD/MM/YYYY',
  LL: 'D [de] MMMM [de] YYYY',
  LLL: 'D [de] MMMM [de] YYYY [às] h:mm aa',
  LLLL: 'dddd, D [de] MMMM [de] YYYY [às] h:mm aa'
})

export default formatLong
