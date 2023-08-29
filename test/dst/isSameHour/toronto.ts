import isSameHour from '../../../src/isSameHour'
import assert from 'assert'

if (process.env.TZ !== 'America/Toronto')
  throw new Error('The test must be run with TZ=America/Toronto')

// these are the magic dates corresponding to the daylight saving time boundary between EDT and EST in autumn of 2023
const result = isSameHour(
  new Date('2023-11-05T05:00Z'), // Sun Nov 05 2023 01:00:00 GMT-0400 (Eastern Daylight Time)
  new Date('2023-11-05T06:00Z') // Sun Nov 05 2023 01:00:00 GMT-0500 (Eastern Standard Time)
)
assert(result === false)
