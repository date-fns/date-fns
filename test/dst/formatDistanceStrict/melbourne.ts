// This is DST test for formatDistanceStrict in the Melbourne timezone

import formatDistanceStrict from '../../../src/formatDistanceStrict'
import parseISO from '../../../src/parseISO'
import assert from 'assert'

if (process.env.TZ !== 'Australia/Melbourne')
  throw new Error('The test must be run with TZ=Australia/Melbourne')

assert.equal(
  formatDistanceStrict(
    parseISO('2020-04-05T01:00:00+11:00'),
    parseISO('2020-04-05T03:00:00+10:00')
  ),
  '3 hours'
)
