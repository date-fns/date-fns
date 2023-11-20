import isSameHour from '../../../src/isSameHour'
import assert from 'assert'

if (process.env.TZ !== 'America/St_Johns')
  throw new Error('The test must be run with TZ=America/St_Johns')

// these are the magic dates corresponding to the daylight saving time boundary between EDT and EST in autumn of 2023
const result = isSameHour(
  new Date('2023-11-05T03:30Z'), // Sun Nov 05 2023 01:00:00 GMT-0230 (Newfoundland Daylight Time)
  new Date('2023-11-05T04:30Z') // Sun Nov 05 2023 01:00:00 GMT-0330 (Newfoundland Standard Time)
)
assert(result === false)
