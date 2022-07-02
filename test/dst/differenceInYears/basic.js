// This is basic DST test for differenceInYears

import differenceInYears from '../../../src/differenceInYears'
import parseISO from '../../../src/parseISO'
import assert from 'assert'

if (process.env.TZ !== 'US/Pacific')
  throw new Error('The test must be run with TZ=US/Pacific')

if (parseInt(process.version.match(/^v(\d+)\./)[1]) < 10)
  throw new Error('The test must be run on Node.js version >= 10')

assert.strictEqual(
  differenceInYears(
    parseISO('2021-11-07T08:25:50.904Z'),
    parseISO('2021-11-07T09:11:45.563Z')
  ),
  0
)
