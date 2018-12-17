// This is basic DST test for parseISO

import parseISO from '../../../src/parseISO'
import assert from 'assert'

if (process.env.TZ !== 'America/Sao_Paulo')
  throw new Error('The test must be run with TZ=America/Sao_Paulo')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

// Test DST start edge
assert.equal(parseISO('2018-11-03').getDate(), 3)
assert.equal(parseISO('2018-11-04').getDate(), 4) // DST start
assert.equal(parseISO('2018-11-05').getDate(), 5)

// Test DST end edge
assert.equal(parseISO('2019-02-15').getDate(), 15)
assert.equal(parseISO('2019-02-16').getDate(), 16) // DST end
assert.equal(parseISO('2019-02-17').getDate(), 17)

// Test creation of nonexistent time
assert.equal(
  parseISO('2018-11-04T00:00').toString(),
  'Sun Nov 04 2018 01:00:00 GMT-0200 (Brasilia Summer Time)'
)
assert.equal(
  parseISO('2018-11-04T00:30').toString(),
  'Sun Nov 04 2018 01:30:00 GMT-0200 (Brasilia Summer Time)'
)
