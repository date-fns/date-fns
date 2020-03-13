// This is basic DST test for parseISO

import parseISO from '../../../src/parseISO'
import assert from 'assert'

if (process.env.TZ !== 'Australia/Sydney')
  throw new Error('The test must be run with TZ=Australia/Sydney')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Test DST start edge
assert.equal(parseISO('2019-10-06').getDate(), 6) // DST start
assert.equal(parseISO('2019-10-07').getDate(), 7)
assert.equal(
  parseISO('2019-10-06T01:00:00').toString(),
  'Sun Oct 06 2019 01:00:00 GMT+1000 (Australian Eastern Standard Time)'
)
assert.equal(
  parseISO('2019-10-06T02:00:00').toString(),
  'Sun Oct 06 2019 03:00:00 GMT+1100 (Australian Eastern Daylight Time)'
)

// Test DST end edge
assert.equal(parseISO('2019-04-06').getDate(), 6)
assert.equal(parseISO('2019-04-07').getDate(), 7) // DST end
assert.equal(
  parseISO('2019-04-06T11:00:00').toString(),
  'Sat Apr 06 2019 11:00:00 GMT+1100 (Australian Eastern Daylight Time)'
)
assert.equal(
  parseISO('2019-04-07T11:00:00').toString(),
  'Sun Apr 07 2019 11:00:00 GMT+1000 (Australian Eastern Standard Time)'
)
