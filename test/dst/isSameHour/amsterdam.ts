import isSameHour from '../../../src/isSameHour'
import assert from 'assert'

if (process.env.TZ !== 'Europe/Amsterdam')
  throw new Error('The test must be run with TZ=Europe/Amsterdam')

// these are the magic dates corresponding to the daylight saving time boundary between CEST and CET in autumn of 2023
const result = isSameHour(
  new Date('2023-10-29T00:00Z'), // Sun Oct 29 2023 02:00:00 GMT+0200 (Central European Summer Time)
  new Date('2023-10-29T01:00Z') // Sun Oct 29 2023 02:00:00 GMT+0100 (Central European Standard Time)
)
assert(result === false)
